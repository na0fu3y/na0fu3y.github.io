(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),b=(n(0),n(201)),c={id:"bigquery-sandbox",title:"BigQuery \u3067 1 \u5186\u3082\u6eb6\u304b\u3055\u306a\u3044\u4eba\u306e\u9854 (ZERO BYTE STRUCT \u3092\u8003\u6848\u3057\u305f)",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery"]},O={permalink:"/blog/bigquery-sandbox",source:"@site/blog/2020-01-21-bigquery-sandbox.md",description:"\u3053\u306e\u8a18\u4e8b\u306f Qiita \u3068\u540c\u69d8\u306e\u5185\u5bb9\u3067\u3059\u3002",date:"2020-01-21T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"}],title:"BigQuery \u3067 1 \u5186\u3082\u6eb6\u304b\u3055\u306a\u3044\u4eba\u306e\u9854 (ZERO BYTE STRUCT \u3092\u8003\u6848\u3057\u305f)",readingTime:4.375,truncated:!0,prevItem:{title:"Stackdriver Logging \u3092\u7528\u3044\u3066 BigQuery \u30c6\u30fc\u30d6\u30eb\u306e\u6700\u7d42\u53c2\u7167\u65e5\u3092\u6c42\u3081\u308b",permalink:"/blog/bigquery-last-reference-date"},nextItem:{title:"BigQuery Scripting \u3067 Brainf*ck",permalink:"/blog/brainfuck-in-bigquery"}},i=[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",children:[]},{value:"\u4f8b",id:"\u4f8b",children:[]},{value:"ZERO BYTE STRUCT FUNCTIONS",id:"zero-byte-struct-functions",children:[]},{value:"BigQuery \u306f\u9ed2\u9b54\u8853\u304b",id:"bigquery-\u306f\u9ed2\u9b54\u8853\u304b",children:[]},{value:"0 \u5186\u30af\u30a8\u30ea\u306e\u8cdb\u5426",id:"0-\u5186\u30af\u30a8\u30ea\u306e\u8cdb\u5426",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u3053\u306e\u8a18\u4e8b\u306f ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://qiita.com/na0/items/2086fd93116ee7ce9a96"}),"Qiita")," \u3068\u540c\u69d8\u306e\u5185\u5bb9\u3067\u3059\u3002"),Object(b.b)("p",null,"\u81ea\u5206\u306f BigQuery \u3067 Extract-Load \u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u7528\u306b\u524d\u51e6\u7406\u3057\u3001\u30c6\u30e9\u30d0\u30a4\u30c8\u7d1a\u306e\u7279\u5fb4\u91cf\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001BigQuery \u306e\u30c7\u30fc\u30bf\u91cf\u3092\u4e00\u5207\u6d88\u8cbb\u305b\u305a\u3001\u8a87\u5f35\u306a\u304f 1 \u5186\u3082\u6eb6\u304b\u3055\u306a\u3044\u88cf\u6280\u3092\u307e\u3068\u3081\u307e\u3059\uff082019/12/18 \u73fe\u5728\uff09\u3002\n\u305f\u3060\u3057\u3001\u5b9a\u984d\u30af\u30a8\u30ea\u3084\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30a4\u30f3\u30b5\u30fc\u30c8\u306f\u3001\u672c\u8a18\u4e8b\u306e\u5bfe\u8c61\u5916\u3067\u3059\u3002"),Object(b.b)("p",null,"\u203b \u30d1\u30ed\u5143\uff1a",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://qiita.com/itkr/items/745d54c781badc148bb9"}),"BigQuery\u3067150\u4e07\u5186\u6eb6\u304b\u3057\u305f\u4eba\u306e\u9854"),"\n\u5143\u30cd\u30bf\u306e\u65b9\u3068\u540c\u3058\u8077\u5834\u3067\u50cd\u304f\u3053\u3068\u306b\u306a\u308a\u307e\u3057\u305f\u306e\u3067\u3001\u88ab\u305b\u3066\u66f8\u3044\u3066\u304a\u308a\u307e\u3059\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001BigQuery \u8a18\u4e8b\u6700\u5b89\u5024\u3092\u76ee\u6307\u3057\u307e\u3059\u3002"),Object(b.b)("p",null,"\u901f\u304f\u3066\u5b89\u3044 BigQuery \u306f\u3001\u30c7\u30fc\u30bf\u30a6\u30a7\u30a2\u30cf\u30a6\u30b9\u3068\u3057\u3066\u3082\u3001\u7279\u5fb4\u91cf\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u30c4\u30fc\u30eb\u3068\u3057\u3066\u3082\u512a\u308c\u3066\u3044\u307e\u3059\u3002\n\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u7528\u3044\u305f\u30b5\u30fc\u30d3\u30b9\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306b\u306f\u3001\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u3068\u3057\u3066\u5019\u88dc\u306b\u6319\u304c\u308b\u3067\u3057\u3087\u3046\u3002"),Object(b.b)("h1",{id:"bigquery-\u306e\u6599\u91d1"},"BigQuery \u306e\u6599\u91d1"),Object(b.b)("p",null,"\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u30af\u30a8\u30ea\u3092\u5229\u7528\u3059\u308b\u969b\u3001\u6975\u3081\u3066\u91cd\u8981\u306a\u306e\u306f\u8aad\u307f\u53d6\u308a\u30c7\u30fc\u30bf\u91cf\u306b\u5bfe\u3057\u3066 \\$5/TB \u306e\u6599\u91d1\u304c\u767a\u751f\u3059\u308b\u70b9\u3067\u3059\u3002\u3053\u308c\u3068\u6bce\u6708\u30b9\u30c8\u30ec\u30fc\u30b8\u30b3\u30b9\u30c8 \\$0.02/GB \u304c\u304b\u304b\u308b\u3060\u3051\u3067\u3001BigQuery \u306e\u8acb\u6c42\u304c\u5b8c\u7d50\u3059\u308b\u70b9\u306f\u6050\u308d\u3057\u304f\u660e\u5feb\u3060\u3068\u8a00\u3048\u307e\u3059\uff08US (multi-region) 2019/12/18 \u73fe\u5728\uff09\u3002\xa0\n\u3064\u307e\u308a\u3001\u8aad\u307f\u53d6\u308b\u30c7\u30fc\u30bf\u91cf\u304c\u5c0f\u3055\u3051\u308c\u3070\u3001\u304a\u8ca1\u5e03\u306b\u512a\u3057\u3044\u6599\u91d1\u3067\u81a8\u5927\u306a\u8a08\u7b97\u3092 BigQuery \u306b\u62c5\u3063\u3066\u3082\u3089\u3048\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002BigQuery ML \u3082\u30b9\u30b1\u30fc\u30eb 50 \u500d\u3067\u3059\u304c\u3001\u540c\u69d8\u306e\u6599\u91d1\u4f53\u7cfb\u3067\u3059\u3002"),Object(b.b)("p",null,"\u6599\u91d1\u306e\u8a73\u7d30\u306a\u8aac\u660e\u306f ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery/pricing"}),"\u516c\u5f0f\u30da\u30fc\u30b8: BigQuery pricing"),"\u3001",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery-ml/pricing"}),"\u516c\u5f0f\u30da\u30fc\u30b8: BigQuery ML pricing")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),Object(b.b)("h1",{id:"lv0-bigquery-\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u306e\u4f7f\u7528"},"Lv.0 ",Object(b.b)("a",Object(a.a)({parentName:"h1"},{href:"https://cloud.google.com/bigquery/docs/sandbox"}),"BigQuery \u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u306e\u4f7f\u7528")),Object(b.b)("p",null,"BigQuery \u306b\u306f\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u3068\u547c\u3070\u308c\u308b\u3001\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u4e0d\u8981\u3067\u3001\u7121\u6599\u67a0\u5206\u4f7f\u3048\u308b\u6a5f\u80fd\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u3053\u306e\u8a2d\u5b9a\u3092\u304a\u8a66\u3057\u3057\u3064\u3064\u3001\u5229\u7528\u984d\u306e\u76ee\u5b89\u3092\u77e5\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(b.b)("h1",{id:"lv1-unnest-\u3067\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u308b"},"Lv.1 UNNEST \u3067\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u308b"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT *\nFROM UNNEST([STRUCT('a' AS a, '1' AS b), STRUCT('b' AS a, '2' AS b)])\n")),Object(b.b)("p",null,"\u30af\u30a8\u30ea\u306e\u4e2d\u3067\u751f\u6210\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306f\u8ab2\u91d1\u3055\u308c\u307e\u305b\u3093\u3002UNNEST \u3067\u3069\u3093\u306a\u5927\u304d\u306a\u30c7\u30fc\u30bf\u3092\u4f5c\u3063\u3066\u3082\u8aad\u307f\u53d6\u308a\u30c7\u30fc\u30bf\u91cf\u306f 0 \u306b\u306a\u308a\u307e\u3059\u3002CSV, JSON, AVRO \u306a\u3069\u304b\u3089\u3001UNNEST \u306e\u30c7\u30fc\u30bf\u306b\u5909\u63db\u3059\u308b\u30b3\u30fc\u30c9\u3092\u7528\u610f\u3057\u3066\u304a\u304f\u3068\u3001\u30c6\u30b9\u30c8\u7528\u30c7\u30fc\u30bf\u3068\u3057\u3066\u3082\u4f7f\u3048\u308b\u306e\u3067\u304a\u3059\u3059\u3081\u3067\u3059\u3002"),Object(b.b)("p",null,"\u8a73\u3057\u304f\u306f\u3001",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://qiita.com/yancya/items/a1ebe6dbc5d635839cc8"}),"BigQuery \u3067\u7121\u304b\u3089\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u51fa\u73fe\u3055\u305b\u308b\uff08StandardSQL \u7de8\uff09"),"\u3084 ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/eureka-engineering/bigquery-unnest-100percent-3d28560b4f0"}),"Bigquery\u3067UNNEST\u3092\u4f7f\u3044\u3053\u306a\u305b\uff01\u30af\u30a8\u30ea\u52b9\u7387\uff11\uff10\uff10%\uff01\uff01\u6700\u5f37\uff01\uff01")," \u304c\u53c2\u8003\u306b\u306a\u308a\u307e\u3059\u3002"),Object(b.b)("h1",{id:"lv10-create-function--view-\u3067\u6c38\u7d9a\u30c7\u30fc\u30bf\u3092\u4f5c\u308b"},"Lv10. CREATE FUNCTION / VIEW \u3067\u6c38\u7d9a\u30c7\u30fc\u30bf\u3092\u4f5c\u308b"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE FUNCTION dataset.function_name()AS([STRUCT('a' AS a, '1' AS b), STRUCT('b' AS a, '2' AS b)]);\n")),Object(b.b)("p",null,"\u4e0a\u306e\u65b9\u6cd5\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u3044\u307e\u3059\u3002\u30dd\u30a4\u30f3\u30c8\u306f\u6c38\u7d9a\u5316\u3067\u304d\u308b\u70b9\u3067\u3059\u3002ARRAY \u3092\u5165\u308c\u308b\u306a\u3089 UNNEST \u3057\u3066\u64ec\u4f3c\u30c6\u30fc\u30d6\u30eb\u306b\u3001\u30b9\u30ab\u30e9\u5024\u3092\u5165\u308c\u308b\u306a\u3089\u3001\u64ec\u4f3c\u5b9a\u6570\u3068\u3057\u3066\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002VIEW \u306e\u5834\u5408\u306f\u3001SELECT * FROM UNNEST([]) \u3067\u4fdd\u5b58\u3057\u307e\u3057\u3087\u3046\u3002VIEW \u306e\u4e2d\u3067\u30c6\u30fc\u30d6\u30eb\u3092\u53c2\u7167\u3059\u308b\u3068\u3001\u30af\u30a8\u30ea\u306e\u5ea6\u306b\u8aad\u307f\u8fbc\u307f\u30b3\u30b9\u30c8\u304c\u767a\u751f\u3059\u308b\u306e\u3067\u6ce8\u610f\u3057\u307e\u3057\u3087\u3046\u3002"),Object(b.b)("h1",{id:"lv20-error-\u3067\u30c6\u30fc\u30d6\u30eb\u53c2\u7167\u3059\u308b"},"Lv20. ERROR \u3067\u30c6\u30fc\u30d6\u30eb\u53c2\u7167\u3059\u308b"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  ERROR(TO_JSON_STRING(ARRAY(\n      SELECT\n        AS STRUCT MAX(geo_id),\n        MIN(geo_id)\n      FROM\n        `bigquery-public-data.census_bureau_acs.blockgroup_2010_5yr`)))\n")),Object(b.b)("p",null,"BigQuery \u306f\u6210\u529f\u3057\u305f\u30af\u30a8\u30ea\u306e\u307f\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u7d76\u5bfe\u306b\u5931\u6557\u3059\u308b ",Object(b.b)("inlineCode",{parentName:"p"},"SELECT ERROR")," \u3067\u30c6\u30fc\u30d6\u30eb\u3092\u8aad\u307f\u53d6\u308b\u3068\u8ab2\u91d1\u3055\u308c\u307e\u305b\u3093\u3002ERROR \u95a2\u6570\u306f STRING \u5f15\u6570\u3092\u53d6\u308c\u308b\u306e\u3067\u3001TO_JSON_ARRAY_STRING \u3068 ARRAY \u95a2\u6570\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u3001\u30c6\u30fc\u30d6\u30eb\u3092 JSON \u3067\u8fd4\u3059\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u3053\u306e\u30a8\u30e9\u30fc\u3092\u5404\u7a2e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u5b9f\u88c5\u304b\u3089\u30ad\u30e3\u30c3\u30c1\u3057\u3066\u3001JSON \u5c55\u958b\u3059\u308b\u3053\u3068\u3067\u3001\u7121\u6599\u306e\u30c6\u30fc\u30d6\u30eb\u53c2\u7167\u304c\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002Web \u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u306f\u3001\u8868\u793a\u6587\u5b57\u6570\u306b\u5236\u9650\u304c\u3042\u308b\u305f\u3081\u3001\u5927\u304d\u306a\u30c7\u30fc\u30bf\u3092\u898b\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),Object(b.b)("h1",{id:"lv45-\u30ab\u30e9\u30e0\u540d\u3068\u3057\u3066\u30c7\u30fc\u30bf\u3092\u4fdd\u7ba1\u3059\u308b"},"Lv45. \u30ab\u30e9\u30e0\u540d\u3068\u3057\u3066\u30c7\u30fc\u30bf\u3092\u4fdd\u7ba1\u3059\u308b"),Object(b.b)("p",null,"(10 MB \u5206\u306e\u8ab2\u91d1\u304c\u767a\u751f\u3059\u308b\u306e\u3067\u3001",Object(b.b)("strong",{parentName:"p"},"0 \u5186\u3067\u306f\u306a\u3044")," \u3067\u3059)\n\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 API \u304b\u3089\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u3001\u30ab\u30e9\u30e0\u540d\u306b\u60c5\u5831 64 \u6587\u5b57(a-zA-Z0-9_)\u3092\u57cb\u3081\u8fbc\u307f\u3001INFOMATION_SCHEMA \u7d4c\u7531\u3067\u53c2\u7167\u3059\u308b\u3002\nSTRING \u3092\u9069\u5207\u306b\u52a0\u5de5\u3059\u308b\u3053\u3068\u3067 10 MB \u306e\u8ab2\u91d1\u3067\u7121\u5236\u9650\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3002STRING \u306f Lv 100.\u3068\u9055\u3044\u3001\u30c7\u30fc\u30bf\u5909\u63db\u524d\u306e\u5217\u30b5\u30a4\u30ba\u5236\u7d04\u306b\u304b\u304b\u308a\u3084\u3059\u3044\u306e\u3067\u6ce8\u610f\u3057\u307e\u3057\u3087\u3046\u3002"),Object(b.b)("h1",{id:"lv70-javascript-\u3067\u8a08\u7b97\u3059\u308b"},"Lv70. JavaScript \u3067\u8a08\u7b97\u3059\u308b"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"\nCREATE TEMP FUNCTION `magic_function`(x ARRAY<INT64>) RETURNS ARRAY<INT64> LANGUAGE js AS '''\nconst memory = new WebAssembly.Memory({ initial: 256, maximum: 256 });\n\nconst env = {\n    'abortStackOverflow': _ => { throw new Error('overflow'); },\n    'table': new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' }),\n    'tableBase': 0,\n    'memory': memory,\n    'memoryBase': 1024,\n    'STACKTOP': 0,\n    'STACK_MAX': memory.buffer.byteLength,\n};\n\nconst imports = { env };\n\nconst bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 139, 128, 128, 128, 0, 2, 96, 1, 127, 0, 96, 2, 127, 127, 1, 127, 2, 254, 128, 128, 128, 0, 7, 3, 101, 110, 118, 8, 83, 84, 65, 67, 75, 84, 79, 80, 3, 127, 0, 3, 101, 110, 118, 9, 83, 84, 65, 67, 75, 95, 77, 65, 88, 3, 127, 0, 3, 101, 110, 118, 18, 97, 98, 111, 114, 116, 83, 116, 97, 99, 107, 79, 118, 101, 114, 102, 108, 111, 119, 0, 0, 3, 101, 110, 118, 6, 109, 101, 109, 111, 114, 121, 2, 1, 128, 2, 128, 2, 3, 101, 110, 118, 5, 116, 97, 98, 108, 101, 1, 112, 1, 0, 0, 3, 101, 110, 118, 10, 109, 101, 109, 111, 114, 121, 66, 97, 115, 101, 3, 127, 0, 3, 101, 110, 118, 9, 116, 97, 98, 108, 101, 66, 97, 115, 101, 3, 127, 0, 3, 130, 128, 128, 128, 0, 1, 1, 6, 147, 128, 128, 128, 0, 3, 127, 1, 35, 0, 11, 127, 1, 35, 1, 11, 125, 1, 67, 0, 0, 0, 0, 11, 7, 136, 128, 128, 128, 0, 1, 4, 95, 115, 117, 109, 0, 1, 9, 129, 128, 128, 128, 0, 0, 10, 196, 128, 128, 128, 0, 1, 190, 128, 128, 128, 0, 1, 7, 127, 2, 64, 35, 4, 33, 8, 35, 4, 65, 16, 106, 36, 4, 35, 4, 35, 5, 78, 4, 64, 65, 16, 16, 0, 11, 32, 0, 33, 2, 32, 1, 33, 3, 32, 2, 33, 4, 32, 3, 33, 5, 32, 4, 32, 5, 106, 33, 6, 32, 8, 36, 4, 32, 6, 15, 0, 11, 0, 11]);\n\nasync function main() {\n  const wa = await WebAssembly.instantiate(bytes, imports);\n  const magic_sum = wa.instance.exports._sum;\n  return x.map((val) => {\n    return magic_sum(val, val);\n  });\n}\n\nreturn main();\n''';\n\nSELECT magic_function(GENERATE_ARRAY(1,100))\n\n")),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/57897905/running-async-js-functions-on-bigquery-with-standardsql/57897906#57897906"}),"running async JS functions on BigQuery with #standardSQL"),"\u306a\u3089\u3001web assembly \u3092 BigQuery \u3067\u52d5\u304b\u305b\u307e\u3059\u3002\u30c6\u30fc\u30d6\u30eb\u53c2\u7167\u3067\u306f\u306a\u3044\u306e\u3067\u3001\u666e\u901a\u306b SQL \u95a2\u6570\u3092\u5927\u91cf\u306b\u547c\u3076\u306e\u3068\u4e00\u7dd2\u3067\u306f\u3042\u308a\u307e\u3059\u304c\u3001BigQuery \u304c\u82e6\u624b\u306a\u518d\u5e30\u95a2\u6570\u3082 JavaScript \u306a\u3089\u547c\u3079\u307e\u3059\u3002web assembly \u306a\u3089\u3001BigQuery \u306e\u8a08\u7b97\u6642\u9593\u306e\u7bc4\u56f2\u5185\u3067\u5272\u3068\u81ea\u7531\u306b\u547c\u3073\u307e\u308f\u305b\u307e\u3059\u3002\n\u30c7\u30fc\u30bf\u53c2\u7167\u306e\u65b9\u6cd5\u3067\u306f\u306a\u3044\u306e\u3067\u3001\u4ed6\u306e\u624b\u6cd5\u3068\u7d44\u307f\u5408\u308f\u305b\u307e\u3057\u3087\u3046\u3002"),Object(b.b)("h1",{id:"lv100-zero-byte-struct-\u3067\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u308b"},"Lv100. ZERO BYTE STRUCT \u3067\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u308b"),Object(b.b)("h2",{id:"\u5b9a\u7fa9"},"\u5b9a\u7fa9"),Object(b.b)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u4f7f\u3046\u7528\u8a9e\u3068\u3057\u3066 ZERO BYTE STRUCT \u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u3053\u308c\u306f NULL \u3084 STRUCT \u306b NULL \u3092\u5165\u308c\u305f\u30c7\u30fc\u30bf\u3001ARRAY \u306b STRUCT(NULL) \u3092\u5165\u308c\u305f\u72b6\u614b\u3067\u3001\u53c2\u7167\u30b3\u30b9\u30c8\u304c 0 \u3067\u3042\u308b\u30c7\u30fc\u30bf\u3068\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u5f8c\u8ff0\u3057\u307e\u3059\u304c\u3001BigQuery \u3067\u306f NULL \u306e\u53c2\u7167\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308a\u307e\u305b\u3093\u3002\u3057\u304b\u3057\u3001NULL \u3068 STRUCT(NULL) \u306f\u660e\u78ba\u306b\u533a\u5225\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u4ed5\u69d8\u306b\u3088\u308a\u3001\u53c2\u7167\u30b3\u30b9\u30c8 0 \u306b\u3082\u304b\u304b\u308f\u3089\u305a\u30011 bit \u306e\u60c5\u5831\u91cf\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(b.b)("p",null,"2019/12/18 \u73fe\u5728\u3001\u30c7\u30fc\u30bf\u5bb9\u91cf\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\n\u30c7\u30fc\u30bf\u30b5\u30a4\u30ba\u306a\u8aac\u660e\u306f ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery/pricing#data"}),"\u516c\u5f0f\u30da\u30fc\u30b8: Pricing Data size calculation")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u30c7\u30fc\u30bf\u306e\u7a2e\u985e"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u30b5\u30a4\u30ba"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"INT64/INTEGER"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 \u30d0\u30a4\u30c8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FLOAT64/FLOAT"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 \u30d0\u30a4\u30c8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NUMERIC"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"16 \u30d0\u30a4\u30c8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BOOL/BOOLEAN"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1 \u30d0\u30a4\u30c8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STRING"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2 \u30d0\u30a4\u30c8 + UTF-8 \u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u305f\u6587\u5b57\u5217\u306e\u30b5\u30a4\u30ba")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BYTES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2 \u30d0\u30a4\u30c8 + \u5024\u306e\u30d0\u30a4\u30c8\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DATE"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 \u30d0\u30a4\u30c8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DATETIME"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 \u30d0\u30a4\u30c8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TIME"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 \u30d0\u30a4\u30c8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TIMESTAMP"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 \u30d0\u30a4\u30c8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STRUCT/RECORD"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0 \u30d0\u30a4\u30c8 + \u542b\u307e\u308c\u3066\u3044\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30b5\u30a4\u30ba")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GEOGRAPHY"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"16 \u30d0\u30a4\u30c8 + 24 \u30d0\u30a4\u30c8 \xd7 GEOGRAPHY \u578b\u306e\u9802\u70b9\u306e\u6570")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u3069\u306e\u30c7\u30fc\u30bf\u578b\u3067\u3082\u3001null \u5024\u306f 0 \u30d0\u30a4\u30c8\u3068\u3057\u3066\u8a08\u7b97\u3055\u308c\u307e\u3059\u3002")),Object(b.b)("h2",{id:"\u4f8b"},"\u4f8b"),Object(b.b)("p",null,"\u3082\u3057\u304a\u6687\u306a\u65b9\u304c\u3044\u308c\u3070\u4ee5\u4e0b\u306e\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3057\u3001\u30c6\u30fc\u30d6\u30eb\u306b\u4fdd\u5b58\u3057\u3001\u5bb9\u91cf\u3092\u78ba\u8a8d\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TEMP FUNCTION\n  CONVERT_BOOL_TO_ZERO_BYTE_STRUCT(b BOOL)AS(\n  IF\n    (b,\n      STRUCT(NULL),\n      STRUCT(STRUCT(NULL))));\nCREATE TEMP FUNCTION\n  CONVERT_INT64_TO_ZERO_BYTE_STRUCT(i INT64)AS(ARRAY(\n    SELECT\n      CONVERT_BOOL_TO_ZERO_BYTE_STRUCT(i&1<<u=0)\n    FROM\n      UNNEST(GENERATE_ARRAY(0, 63))u\n    ORDER BY\n      u));\nSELECT\n  CONVERT_INT64_TO_ZERO_BYTE_STRUCT(i)\nFROM\n  UNNEST(GENERATE_ARRAY(1,1000000))i\n")),Object(b.b)("p",null,"\u8868\u306e\u30b5\u30a4\u30ba\u304c 0 B \u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3057\u305f\u304b\u3002\u305d\u308c\u3067\u306f\u623b\u3057\u307e\u3057\u3087\u3046\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TEMP FUNCTION\n  CONVERT_BOOL_TO_ZERO_BYTE_STRUCT(b BOOL)AS(\n  IF\n    (b,\n      STRUCT(NULL),\n      STRUCT(STRUCT(NULL))));\nCREATE TEMP FUNCTION\n  CONVERT_ZERO_BYTE_STRUCT_TO_BOOL(s STRUCT<_ STRUCT<INT64>>)AS(s._ IS NULL);\nCREATE TEMP FUNCTION\n  CONVERT_INT64_TO_ZERO_BYTE_STRUCT(i INT64)AS(ARRAY(\n    SELECT\n      CONVERT_BOOL_TO_ZERO_BYTE_STRUCT(i&1<<u=0)\n    FROM\n      UNNEST(GENERATE_ARRAY(0, 63))u\n    ORDER BY\n      u));\nCREATE TEMP FUNCTION\n  CONVERT_ZERO_BYTE_STRUCT_TO_INT64(a ARRAY<STRUCT<_ STRUCT<INT64>>>)AS((\n    SELECT\n      SUM(\n      IF\n        (CONVERT_ZERO_BYTE_STRUCT_TO_BOOL(a[\n          OFFSET\n            (u)]),\n          0,\n          1<<u))\n    FROM\n      UNNEST(GENERATE_ARRAY(0,ARRAY_LENGTH(a)-1))u));\nSELECT\n  CONVERT_ZERO_BYTE_STRUCT_TO_INT64(CONVERT_INT64_TO_ZERO_BYTE_STRUCT(i))\nFROM\n  UNNEST(GENERATE_ARRAY(1,1000000))i\n  -- \u5148\u307b\u3069\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u53c2\u7167\u3059\u308b\n")),Object(b.b)("p",null,"\u5143\u306b\u623b\u3063\u3066\u3044\u308b\u3053\u3068\u3001\u8ab2\u91d1\u3055\u308c\u308b\u30d0\u30a4\u30c8\u6570\u304c 0 B \u3067\u3042\u308b\u3053\u3068\u78ba\u8a8d\u3067\u304d\u305f\u3067\u3057\u3087\u3046\u304b\u3002\n\u3053\u306e\u3088\u3046\u306b\u60c5\u5831\u3092\u57cb\u3081\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u3001\u5168\u3066\u306e\u5217\u3092\u3053\u306e\u5f62\u306b\u5909\u5f62\u3059\u308c\u3070\u3001\u30c6\u30e9\u30d0\u30a4\u30c8\u60c5\u5831\u91cf\u3092\u6301\u3063\u305f 0 \u30d0\u30a4\u30c8\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\n\u3082\u3061\u308d\u3093 ZERO BYTE STRUCT \u76f8\u4e92\u5909\u63db\u306b\u8a08\u7b97\u6642\u9593\u306f\u304b\u304b\u308a\u307e\u3059\u304c\u3001\u3053\u308c\u304c\u8a31\u5bb9\u3067\u304d\u308b\u306e\u3067\u3042\u308c\u3070\u3001\u53c2\u7167\u30b3\u30b9\u30c8\u306a\u3057\u3067\u7121\u9650\u306e\u30c7\u30fc\u30bf\u3092\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(b.b)("h2",{id:"zero-byte-struct-functions"},"ZERO BYTE STRUCT FUNCTIONS"),Object(b.b)("p",null,"\u3053\u3053\u3067\u81ea\u4f5c\u516c\u958b\u3057\u305f\u95a2\u6570\u7fa4\u304c\u3042\u308b\u306e\u3067\u7d39\u4ecb\u3057\u307e\u3059\u3002\nZERO BYTE STRUCT \u5909\u63db\u95a2\u6570 ",Object(b.b)("inlineCode",{parentName:"p"},"bqfunc.zerobyte.(ARRAY_)?{type}_TO_ZEROBYTE")," \u3067\u3059\u3002\n\u3053\u306e\u95a2\u6570\u306f\u3001STRUCT \u3092\u9664\u304f\u4efb\u610f\u306e\u578b\u3092 ZERO BYTE STRUCT \u306b\u5909\u63db\u3057\u307e\u3059\uff08{type}\u304c\u3001STRUCT \u4ee5\u5916\u306e\u4efb\u610f\u306e\u578b\u306b\u5bfe\u5fdc\u3057\u307e\u3059\uff09\u3002\n\u307e\u305f\u3001\u9006\u95a2\u6570 ",Object(b.b)("inlineCode",{parentName:"p"},"bqfunc:zerobyte.ZEROBYTE_TO_(ARRAY_)?{type}")," \u3082\u7528\u610f\u3057\u307e\u3057\u305f\u3002\nSTRUCT \u306f\u500b\u5225\u306b\u95a2\u6570\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f5c\u308b\u304b\u3001TO_JSON_STRING \u3067\u8a70\u3081\u8fbc\u3080\u3068\u826f\u3044\u3067\u3059\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  bqfunc.zerobyte.BOOL_TO_ZEROBYTE(TRUE)\n")),Object(b.b)("h1",{id:"\u7d42\u308f\u308a\u306b"},"\u7d42\u308f\u308a\u306b"),Object(b.b)("p",null,"ZERO BYTE STRUCT \u306f\u3001BigQuery \u306e\u8ab2\u91d1\u306e\u629c\u3051\u7a74\u306e\u3088\u3046\u306a\u3082\u306e\u3067\u3059\u306e\u3067\u3001\u5b9f\u7528\u306f\u907f\u3051\u308b\u3079\u304d\u3067\u3057\u3087\u3046\u3002\n\u307f\u3093\u306a BigQuery \u4f7f\u304a\u3046\u3002"),Object(b.b)("h1",{id:"\uff08\u8ffd\u8a18\uff09"},"\uff08\u8ffd\u8a18\uff09"),Object(b.b)("h2",{id:"bigquery-\u306f\u9ed2\u9b54\u8853\u304b"},"BigQuery \u306f\u9ed2\u9b54\u8853\u304b"),Object(b.b)("blockquote",{class:"twitter-tweet"},Object(b.b)("a",{href:"https://twitter.com/algas/status/1202779751280082944"})),Object(b.b)("p",null,"\u9ed2\u9b54\u8853\u3092\u4f7f\u308f\u305a\u3068\u3082\u3001\u4ed6\u306e SQL \u3092\u89e6\u3063\u305f\u3053\u3068\u304c\u3042\u308b\u65b9\u306a\u3089\u3001BigQuery \u306f\u5b89\u5fc3\u3057\u3066\u304a\u4f7f\u3044\u3044\u305f\u3060\u3051\u307e\u3059\uff08\u8a00\u8a9e\u306f PostgreSQL \u304c\u6700\u3082\u8fd1\u3044\u304b\u3082\uff09\u3002\u305f\u3060\u3001\u4f7f\u3044\u65b9\u304c\u9055\u3044\u307e\u3059\u3002\u5f93\u6765\u306e SQL \u306f\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u3060\u3051\u306e\u3082\u306e\u3067\u3057\u305f\u304c\u3001BigQuery \u306f\u591a\u6bb5\u306e\u30c7\u30fc\u30bf\u5909\u63db\u307e\u3067\u62c5\u308f\u305b\u308b\u3053\u3068\u3067\u30b3\u30b9\u30c8\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u9ad8\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(b.b)("p",null,"BigQuery \u9ed2\u9b54\u8853\u306e\u5148\u99c6\u306b ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/eureka-engineering/bigquery-standard-sql-f13b04c0b6c4"}),"BigqueryStandardSQL\u306e\u9ed2\u9b54\u8853\u3063\u3066\u306a\u306b\uff01\uff1f\u8a18\u3057\u3066\u307f\u307e\u3057\u305f\uff01")," \u304c\u3044\u3089\u3063\u3057\u3083\u3044\u307e\u3059\u3002\u305c\u3072\u3053\u3061\u3089\u3082\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),Object(b.b)("h2",{id:"0-\u5186\u30af\u30a8\u30ea\u306e\u8cdb\u5426"},"0 \u5186\u30af\u30a8\u30ea\u306e\u8cdb\u5426"),Object(b.b)("blockquote",{class:"twitter-tweet"},Object(b.b)("p",{lang:"ja",dir:"ltr"},"BigQuery \u3067 1 \u5186\u3082\u6eb6\u304b\u3055\u306a\u3044\u4eba\u306e\u9854 (ZERO BYTE STRUCT \u3092\u8003\u6848\u3057\u305f) ",Object(b.b)("a",{href:"https://t.co/N23rpUKS32"},"https://t.co/N23rpUKS32")," SELECT ERROR\u3067\u4f8b\u5916\u30ad\u30e3\u30c3\u30c1\u3057\u3066\u4e2d\u8eab\u3092\u629c\u304f\u3068\u304bSTRUCT(NULL)\u3092array\u306b\u7a81\u3063\u8fbc\u3093\u3067\u30c6\u30fc\u30d6\u30eb\u30b5\u30a4\u30ba\u306e\u898b\u304b\u3051\u3092\u30bc\u30ed\u306b\u3059\u308b\u3068\u304b\u2026\uff0e\u3046\u30fc\u3093\u2026"),"\u2014 Yuta Kashino (@yutakashino) ",Object(b.b)("a",{href:"https://twitter.com/yutakashino/status/1202877337844568065?ref_src=twsrc%5Etfw"},"December 6, 2019"))," ",Object(b.b)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),Object(b.b)("p",null,"\u5229\u7528\u8005\u3078\u306e\u8ab2\u91d1\u304c 0 \u5186\u3067\u3082\u3001BigQuery \u306f\u8a08\u7b97\u30b3\u30b9\u30c8\u3092\u6255\u3063\u3066\u3044\u308b\u3053\u3068\u3067\u3057\u3087\u3046\u3002\u4e00\u90e8\u5206\u304c 0 \u5186\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u306e\u306f\u3001\u305d\u308c\u3067\u3082\u30b5\u30fc\u30d3\u30b9\u304c\u5168\u4f53\u3068\u3057\u3066\u6210\u308a\u7acb\u3064\u304b\u3089\u3067\u3057\u3087\u3046\u3002\u5bb9\u91cf\u7528\u6cd5\u3092\u5b88\u3063\u3066\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002WHERE \u53e5\u3067 IF \u3092\u4f7f\u3048\u3070\u6761\u4ef6\u306b\u3088\u3063\u3066 N\uff05 ERROR \u3092\u8fd4\u3059\u30af\u30a8\u30ea\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u305d\u308c\u3089\u304c\u60aa\u304b\u306a\u3069\u306e\u8b70\u8ad6\u306f\u907f\u3051\u307e\u3059\u3002\u53ef\u80fd\u306a\u3089\u3001BigQuery \u3068\u3057\u3066\u306e\u7acb\u5834\u3092\u78ba\u8a8d\u3057\u305f\u3044\u3068\u3053\u308d\u3067\u3059\u3002(ZERO BYTE STRUCT \u306b\u3064\u3044\u3066\u306f\u3001\u8a18\u4e8b\u306e\u6295\u7a3f\u524d\u306b GCP \u3078\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u9001\u4fe1\u6e08\u307f\u3067\u3059\u3002)"))}u.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return E}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):O(O({},t),e)),n},T=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),T=u(n),p=a,E=T["".concat(c,".").concat(p)]||T[p]||o[p]||b;return n?r.a.createElement(E,O(O({ref:t},l),{},{components:n})):r.a.createElement(E,O({ref:t},l))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=p;var O={};for(var i in t)hasOwnProperty.call(t,i)&&(O[i]=t[i]);O.originalType=e,O.mdxType="string"==typeof e?e:a,c[1]=O;for(var l=2;l<b;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);