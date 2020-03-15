---
id: numerical-data-types-in-bigquery
title: "BigQuery 数値型"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery]
---

# はじめに
[数値型](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#numeric-types) は、最も使うデータ型と行っても過言ではありません。まずは公式ドキュメントを読み漁りましょう。

<!--truncate-->

# 数値型とは
その名前の通り、数値を保存できる型です。有理数の一部、整数とほんの少しの小数を扱うことができます。
代数演算が可能で、大小一致の比較もできます。
具体的な型は INT64（INTEGER）、FLOAT64（FLOAT）、NUMERIC の 3 つです。

|名前|説明|ストレージ サイズ|範囲|
|---|---|---|
|INT64|整数型|8 バイト|-9,223,372,036,854,775,808～9,223,372,036,854,775,807|
|NUMERIC|数値型|16 バイト|-99999999999999999999999999999.999999999～99999999999999999999999999999.999999999|
|FLOAT64|浮動小数点型|8 バイト|倍精度（近似）10 進値|


## 整数型 INT64
整数は小数部分を持たない数値です。
BigQuery 上では、小数点を打たずに数値を入力すると INT64 型になります。
値域外であったとしても、自動で FLOAT64 や NUMERIC 型になったりはしません。

## 数値型 NUMERIC
10 進 38 桁の精度と 10 進 9 桁の尺度の正確な数値です。精度は、数値に含まれる桁数です。尺度は、小数点以下の桁数です。
この型は、小数部分を正確に表すことができ、財務計算に適しています。
BigQuery で定義する際には、`NUMERIC "123.45"` など、STRING の前に NUMERIC と入力します。
または、`CAST("123.45" AS NUMERIC)` でも同様の結果が得られます。

## 浮動小数点型 FLOAT64
浮動小数点の値は小数部分のある近似値です。
また、NaN と +/-inf という特別な非数値があります。

BigQuery の算術演算子は、出力が非定形の場合、オーバーフロー エラーが返されます。
また、入力に非定形が含まれる場合、出力が非定形になる算術演算子がほとんどです。

BigQuery では数値に小数点を打つと、FLOAT64 型になります。値域外であったとしても、自動で NUMERIC 型になったりはしません。
また、INT64 型に CAST すると偶数への丸めを行います。端数が 0.5 より小さいなら切り捨て、端数が 0.5 より大きいならは切り上げます。端数がちょうど 0.5 なら切り捨てと切り上げのうち結果が偶数となる方へ丸めます。
INT64 に丸める方向を決めておきたい場合、キャストの前に丸める関数を通しておきましょう。

# NUMERIC　の不思議
## NUMERIC とは何者だろう
INT64 の用途はわかります。数を数えたり、番号をつけたりに使います。
FLOAT64 は小数計算のときに使いますね。INT64 同士の比を出したり、スケールを合わせて比較する時によく出てきます。
FLOAT64 の仕様となる IEEE 754 は CPU の word size に合わせることで、効率の良い命令を使って計算ができます。
これだけで大抵の用途はこなせますが、NUMERIC はどんな時に使うでしょうか。
答えは、「多少遅くてもいいから精度保証付の演算」が必要な時です。

## FLOAT64 の不思議
`SELECT 0.1 + 0.2` を実行してみましょう。

|行|f0_|
|---|---|
|1|0.30000000000000004|

が返ってきますね。FLOAT64 は内部表現が 2 進数なので、それで表現できない誤差が積み上がっていくのです。
同じスケールの加減算なら比較的良いですが、乗除算やスケールが全く異なる加減算はこの誤差をとても大きくします。
大小正しくつくことが重要で、その小数第 n 位に着目するケースは多くないため、精度より速度が重要視される環境では FLOAT64 をよく使うでしょう。

## NUMERIC の精度
`SELECT NUMERIC "0.1" + NUMERIC "0.2"` を実行してみましょう。

|行|f0_|
|---|---|
|1|0.3|

と厳密に正しい結果が返ってきました。10 進 38 桁の精度と 10 進 9 桁の尺度を保証してくれるのです。
オーバーフローでエラーを返してくるのは、FLOAT64 と一緒ですが、自動で丸める処理は一切しません。
丸めが必要なタイミングで人間が指定して丸める必要があります。
しかしこれによって、誤差を積み上げなくてすみます。

## 消費税 8 ％のセブン方式 100 円 * 3 個 = 301 円
消費税 8 ％のセブンは税抜き価格を足していってから、最後に消費税をかける方式で話題になりましたね。
税抜 93 円、税込 100 円の物を買ってみましょう。
(93 円 + 93 円 + 93 円) * 1.08 = ROUND(301.32 円) で、小数点以下を四捨五入して 301 円になります。

有効桁数を残すため、なるべく後で掛け算と丸めを行うのは当然でしょう。
しかし、3 回買い物するとどうでしょうか。
(93 円 * 1.08) + (93 円 * 1.08) + (93 円 * 1.08) = ROUND(100.44) + ROUND(100.44) + ROUND(100.44) です。
四捨五入して、300 円になります。購入方法によって、支払金額が増えるのです。

これが一般消費者の誤差の積み上げです。暗黙のうちに丸められると困るのです。
もっと大きな額を扱う業界でこれをやられたら、誤差だけでぽんぽん家が立ちます。


## NUMERIC の用途
ここまででお分かりでしょう。NUMERIC は精度保証したい時に使います。
数の大小がざっくり分かれば精度の保証がなくても良い、速度の方が重要といった用途なら、FLOAT64 を利用すべきです。
しかしながら、BigQuery 上の四則演算であれば、速度に倍も差があるわけではないです。
数学関数も、NUMERIC と FLOAT64 で利用できる関数に差があるわけでもありません。
気になる点は保存、参照コストが倍になること、FLOAT64 が紛れ込んでもよしなに計算してしまうので、精度劣化に気づけないことですね。

## 一円を笑う者は一円に泣く
お金を扱う時に FLOAT64 を使うと泣きをみます。
扱っている数字の単位を考えることで、どの精度の型を使えば良いのか検討を進めることができそうです。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">1円の違いで何度泣いたことか。。。</p>&mdash; なかむらさとる (@satoluxx) <a href="https://twitter.com/satoluxx/status/1220599744642396160?ref_src=twsrc%5Etfw">2020年1月24日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



# まとめ
BigQuery には、INT64、NUMERIC、FLOAT64 の 3 つの数値型があります。
用途によって適切に選ぶことで、正しく意思決定に使えるデータ分析ができるようになります。
それぞれのデータ型を吟味し、ユースケースにあったデータ型でデータ活用を進めたいものです。