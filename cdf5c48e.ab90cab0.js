(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(9),i=(a(0),a(198)),b={title:"Matrix Factorization"},c={id:"bigquery-ml-matrix-factorization",isDocsHomePage:!1,title:"Matrix Factorization",description:"BigQuery ML \u306b Matrix Factorization \u304c\u6765\u305f",source:"@site/docs/bigquery-ml-matrix-factorization.md",permalink:"/docs/bigquery-ml-matrix-factorization",editUrl:"https://github.com/na0fu3y/queuery/edit/master/docs/bigquery-ml-matrix-factorization.md",lastUpdatedAt:1594085828,sidebar:"someSidebar",previous:{title:"\u304a\u3055\u3089\u3044",permalink:"/docs/bigquery-ml"},next:{title:"TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b",permalink:"/docs/bigquery-ml-tensorflow"}},l=[{value:"BigQuery ML \u306b Matrix Factorization \u304c\u6765\u305f",id:"bigquery-ml-\u306b-matrix-factorization-\u304c\u6765\u305f",children:[]},{value:"Matrix Factorization \u3068\u306f",id:"matrix-factorization-\u3068\u306f",children:[]},{value:"BigQuery ML \u3067 Matrix Factorization \u3092\u4f7f\u3046\u969b\u306e\u30cf\u30de\u308a\u30dd\u30a4\u30f3\u30c8",id:"bigquery-ml-\u3067-matrix-factorization-\u3092\u4f7f\u3046\u969b\u306e\u30cf\u30de\u308a\u30dd\u30a4\u30f3\u30c8",children:[]},{value:"\u5b9f\u969b\u306b\u89e6\u3063\u3066\u307f\u308b",id:"\u5b9f\u969b\u306b\u89e6\u3063\u3066\u307f\u308b",children:[{value:"BigQuery Reservations \u3092\u8a2d\u5b9a\u3059\u308b\uff08\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u30e6\u30fc\u30b6\u306e\u307f\uff09",id:"bigquery-reservations-\u3092\u8a2d\u5b9a\u3059\u308b\uff08\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u30e6\u30fc\u30b6\u306e\u307f\uff09",children:[]},{value:"BigQuery ML \u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3059\u308b",id:"bigquery-ml-\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3059\u308b",children:[]}]},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",children:[]}],o={rightToc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"bigquery-ml-\u306b-matrix-factorization-\u304c\u6765\u305f"},"BigQuery ML \u306b Matrix Factorization \u304c\u6765\u305f"),Object(i.b)("p",null,"\u65e5\u672c\u6642\u9593 2020-04-18 \u306b BigQuery ML \u306e\u65b0\u30e2\u30c7\u30eb Matrix Factorization \u304c",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery-ml/docs/release-notes#April_17_2020"}),"\u30d9\u30fc\u30bf\u30ea\u30ea\u30fc\u30b9"),"\u3055\u308c\u307e\u3057\u305f\u3002"),Object(i.b)("h2",{id:"matrix-factorization-\u3068\u306f"},"Matrix Factorization \u3068\u306f"),Object(i.b)("p",null,"user \u3068 item \u3092\u5165\u529b\u3068\u3057\u3066\u3001\u4f3c\u305f rating \u50be\u5411\u306e\u3042\u308b\u4eba\u3092\u53c2\u8003\u306b\u672a\u77e5\u306e rating \u3092\u4e88\u60f3\u3059\u308b\u3082\u306e\u3067\u3059\u3002\u4f75\u58f2\u3057\u305d\u3046\u306a\u5546\u54c1\u3092\u63a8\u85a6\u3059\u308b\u969b\u306b\u4f7f\u3063\u305f\u308a\u3067\u304d\u307e\u3059\u3002"),Object(i.b)("p",null,"\u8a73\u7d30\u306a Matrix Factorization \u306e\u65b9\u6cd5\u8ad6\u306a\u3069\u306f\u4ed6\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(i.b)("h2",{id:"bigquery-ml-\u3067-matrix-factorization-\u3092\u4f7f\u3046\u969b\u306e\u30cf\u30de\u308a\u30dd\u30a4\u30f3\u30c8"},"BigQuery ML \u3067 Matrix Factorization \u3092\u4f7f\u3046\u969b\u306e\u30cf\u30de\u308a\u30dd\u30a4\u30f3\u30c8"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u30e6\u30fc\u30b6\u306f\u8a13\u7df4\u3067\u304d\u307e\u305b\u3093\u3002"),"\n\u5927\u534a\u306e\u30e6\u30fc\u30b6\u306f\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u30af\u30a8\u30ea\u306e\u5229\u7528\u8005\u3067\u3001Reservations \u3092\u8a2d\u5b9a\u3057\u3066\u3044\u306a\u3044\u3068\u601d\u3044\u307e\u3059\u306e\u3067\u30cf\u30de\u308a\u307e\u3059\u3002\n\u5f8c\u8ff0\u3059\u308b\u624b\u9806\u3092\u5b9f\u884c\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u3001",Object(i.b)("inlineCode",{parentName:"p"},"Training Matrix Factorization models is not available for on-demand usage. To train, please set up a reservation (flex or regular) based on instructions in BigQuery public docs.")," \u3068\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),Object(i.b)("h2",{id:"\u5b9f\u969b\u306b\u89e6\u3063\u3066\u307f\u308b"},"\u5b9f\u969b\u306b\u89e6\u3063\u3066\u307f\u308b"),Object(i.b)("h3",{id:"bigquery-reservations-\u3092\u8a2d\u5b9a\u3059\u308b\uff08\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u30e6\u30fc\u30b6\u306e\u307f\uff09"},"BigQuery Reservations \u3092\u8a2d\u5b9a\u3059\u308b\uff08\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u30e6\u30fc\u30b6\u306e\u307f\uff09"),Object(i.b)("h4",{id:"bigquery-reservations-\u3068\u306f"},"BigQuery Reservations \u3068\u306f"),Object(i.b)("p",null,"BigQuery \u3092\u79d2\u3001\u6708\u3001\u5e74\u5358\u4f4d\u3067\u5b9a\u984d\u6599\u91d1\u5229\u7528\u304c\u3067\u304d\u308b\u3082\u306e\u3067\u3059\u3002\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery/docs/reservations-intro"}),"Reservations \u306e\u6982\u8981"),"\u3092\u898b\u308b\u3068\u8a73\u7d30\u306b\u7406\u89e3\u3067\u304d\u307e\u3059\u3002"),Object(i.b)("h4",{id:"\u30b9\u30ed\u30c3\u30c8\u3092\u8cfc\u5165\u3059\u308b"},"\u30b9\u30ed\u30c3\u30c8\u3092\u8cfc\u5165\u3059\u308b"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"BigQuery \u306e\u5de6\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300c\u4e88\u7d04\u300d\u3092\u30af\u30ea\u30c3\u30af"),Object(i.b)("li",{parentName:"ol"},"\u4e0a\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300c\u30b9\u30ed\u30c3\u30c8\u3092\u8cfc\u5165\u3059\u308b\u300d\u3092\u9078\u3076"),Object(i.b)("li",{parentName:"ol"},"\u300c\u30b3\u30df\u30c3\u30c8\u671f\u9593\u300d\u3001\u300c\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3\u300d\u3001\u300c\u30b9\u30ed\u30c3\u30c8\u300d\u3092\u9078\u3076\uff08\u304a\u8a66\u3057\u306a\u3089\u6700\u5c0f\u5358\u4f4d\u3067\u3001\u30b3\u30df\u30c3\u30c8\u671f\u9593\u306f Flex\u3001\u30b9\u30ed\u30c3\u30c8\u306f 500 \u304c\u304a\u3059\u3059\u3081\uff09"),Object(i.b)("li",{parentName:"ol"},"\u300c\u8cfc\u5165\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af")),Object(i.b)("h4",{id:"\u4e88\u7d04\u3092\u4f5c\u6210\u3059\u308b"},"\u4e88\u7d04\u3092\u4f5c\u6210\u3059\u308b"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u4e0a\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u4e88\u7d04\u3092\u4f5c\u6210\u3092\u9078\u3076"),Object(i.b)("li",{parentName:"ol"},"\u300c\u4e88\u7d04\u540d\u300d\u3001\u300c\u5834\u6240\u300d\u3001\u300c\u30b9\u30ed\u30c3\u30c8\u6570\u300d\u3092\u5165\u529b\u3059\u308b\uff08\u304a\u8a66\u3057\u306a\u3089\u6700\u5c0f\u5358\u4f4d\u3067\u3001\u30b9\u30ed\u30c3\u30c8\u6570\u306f 500 \u304c\u304a\u3059\u3059\u3081\uff09"),Object(i.b)("li",{parentName:"ol"},"\u300c\u4fdd\u5b58\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af")),Object(i.b)("h4",{id:"\u5272\u308a\u5f53\u3066\u3092\u4f5c\u6210\u3059\u308b"},"\u5272\u308a\u5f53\u3066\u3092\u4f5c\u6210\u3059\u308b"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u753b\u9762\u4e2d\u592e\u304b\u3089\u300c\u5272\u308a\u5f53\u3066\u300d\u306e\u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af"),Object(i.b)("li",{parentName:"ol"},"\u300c\u7d44\u7e54\u3001\u30d5\u30a9\u30eb\u30c0\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u9078\u629e\u300d\u3001\u300c\u4e88\u7d04\u300d\u3092\u5165\u529b\u3059\u308b\uff08\u4e88\u7d04\u306b\u306f\u4f5c\u6210\u3057\u305f\u3082\u306e\u3092\u5165\u529b\u3059\u308b\uff09"),Object(i.b)("li",{parentName:"ol"},"\u300c\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af")),Object(i.b)("h3",{id:"bigquery-ml-\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3059\u308b"},"BigQuery ML \u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3059\u308b"),Object(i.b)("h4",{id:"\u8a13\u7df4"},"\u8a13\u7df4"),Object(i.b)("p",null,"\u57fa\u672c\u7684\u306b\u306f\u3001\u4ed6\u306e CREATE MODEL \u3068\u540c\u69d8\u306b\u30af\u30a8\u30ea\u3092\u66f8\u304f\u3060\u3051\u3067\u3059\u3002\u5f15\u6570\u306e\u540d\u524d\u3092\u8a2d\u5b9a\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u8a2d\u5b9a\u3057\u306a\u3044\u5834\u5408\u306b\u306f\u3001user\u3001item\u3001rating \u306e\u5217\u304c\u5fc5\u9808\u306b\u306a\u308a\u307e\u3059\u3002\nuser\u3001item \u306f GROUPABLE \u306a\u4efb\u610f\u306e\u578b\u3001rating \u306f INT64\u3001NUMERIC\u3001FLOAT64 \u306e\u307f\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002"),Object(i.b)("p",null,"\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u8a73\u7d30\u306f ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create-matrix-factorization"}),"The CREATE MODEL statement for Matrix Factorization")," \u3092\u53c2\u7167\u3057\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("p",null,"\u4eca\u56de\u306f\u3001UNNEST \u3067\u8a13\u7df4\u30c7\u30fc\u30bf\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u305f\uff08\u4ed6\u306e\u30e2\u30c7\u30eb\u3092\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u3067\u56de\u3059\u5834\u5408\u306b\u306f\u3001\u53c2\u7167\u91cf\u304c 0 \u306b\u306a\u308b\u305f\u3081\u7121\u6599\u3067\u3059\u304c\u3001Reservations \u3092\u4f7f\u3063\u3066\u308b\u305f\u3081\u3001\u304a\u91d1\u306f\u304b\u304b\u308a\u307e\u3059\u3002\uff09"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"user"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"item"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"rating"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"5")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"5")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"5")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE MODEL\n  `project.dataset.model` OPTIONS(MODEL_TYPE='MATRIX_FACTORIZATION') AS(\n  SELECT\n    *\n  FROM\n    UNNEST(ARRAY<STRUCT<user INT64,item INT64,rating INT64>>[(1,\n        1,\n        5),(1,\n        2,\n        1),(1,\n        3,\n        5),(2,\n        1,\n        3),(2,\n        2,\n        3),(3,\n        1,\n        5)]))\n")),Object(i.b)("h4",{id:"\u63a8\u8ad6"},"\u63a8\u8ad6"),Object(i.b)("p",null,"\u4eca\u56de\u306f\u3001UNNEST \u3067\u63a8\u8ad6\u7528\u30c7\u30fc\u30bf\u3082\u4f5c\u308a\u307e\u3059\u3002\nReservations \u3092\u5229\u7528\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001UNNEST \u3067\u7269\u7406\u30c6\u30fc\u30d6\u30eb\u3092\u4e00\u5207\u53c2\u7167\u3057\u306a\u3051\u308c\u3070\u7121\u6599\u3067\u3067\u304d\u307e\u3059\u3002\n\u6c17\u306b\u306a\u308b\u65b9\u306f\u3001\u30e2\u30c7\u30eb\u4f5c\u6210\u5b8c\u4e86\u5f8c\u306b Reservations \u306e\u8a2d\u5b9a\u3092\u524a\u9664\u3057\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"user"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"item"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  *\nFROM\n  ML.PREDICT(MODEL `project.dataset.model`,\n    (\n    SELECT\n      *\n    FROM\n      UNNEST(ARRAY<STRUCT<user INT64,item INT64>>[(4,\n          1),(2,\n          3)])))\n")),Object(i.b)("p",null,"\u6b63\u3057\u304f\u63a8\u8ad6\u3067\u304d\u3066\u3044\u308c\u3070\u3001rating \u3092\u542b\u3080\u30c6\u30fc\u30d6\u30eb\u304c\u8fd4\u3063\u3066\u304d\u307e\u3059\u3002\n",Object(i.b)("inlineCode",{parentName:"p"},"ML.WEIGHTS")," \u3092\u4f7f\u3046\u3068\u5206\u6563\u8868\u73fe\u3082\u5f97\u3089\u308c\u308b\u306e\u3067\u3001word2vec \u306e\u4ee3\u308f\u308a\u306b\u4f7f\u3048\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),Object(i.b)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),Object(i.b)("p",null,"BigQuery ML \u306b Matrix Factorization \u304c\u6765\u3066\u3001\u7121\u4e8b\u306b\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u3002\n\u5b9f\u884c\u74b0\u5883\u304c\u5206\u96e2\u3055\u308c\u3001\u30c7\u30fc\u30bf\uff08\u3068\u30b3\u30b9\u30c8\uff09\u306e\u307f\u306b\u6ce8\u529b\u3057\u3066 Matrix Factorization \u304c\u5229\u7528\u3067\u304d\u308b\u305f\u3081\u3001\u3068\u3066\u3082\u7d20\u6674\u3089\u3057\u3044\u30ea\u30ea\u30fc\u30b9\u3060\u3068\u601d\u3044\u307e\u3059\u3002\n\u305f\u3060 DNN \u306e\u30ea\u30ea\u30fc\u30b9\u3082\u671b\u307e\u308c\u308b\u4e2d\u3001\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u6599\u91d1\u3092\u30b5\u30dd\u30fc\u30c8\u5916\u306b\u3059\u308b\u30d3\u30b8\u30cd\u30b9\u30e2\u30c7\u30eb\u306e\u5909\u9769\u3068\u3082\u53d6\u308c\u308b\u30ea\u30ea\u30fc\u30b9\u306b\u306a\u308a\u307e\u3057\u305f\u3002\n\u4eca\u5f8c\u306e BigQuery ML \u3092\u542b\u3080 BigQuery \u5168\u4f53\u306e\u6599\u91d1\u4f53\u7cfb\u304c\u3069\u3046\u306a\u3063\u3066\u3044\u304f\u306e\u304b\u6c17\u306b\u306a\u308b\u3068\u3053\u308d\u3067\u3059\u3002"))}u.isMDXComponent=!0},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),u=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=u(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),O=u(a),j=r,m=O["".concat(b,".").concat(j)]||O[j]||p[j]||i;return a?n.a.createElement(m,c(c({ref:t},o),{},{components:a})):n.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=j;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var o=2;o<i;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);