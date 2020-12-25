(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{129:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"toc",(function(){return O})),a.d(e,"default",(function(){return i}));var n=a(3),b=a(7),r=(a(0),a(140)),l={id:"gcp-logging",title:"Stackdriver Logging \u3067\u3067\u304d\u308b\u3053\u3068",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["stackdriverlogging","gcp"]},c={permalink:"/blog/2020/01/28/gcp-logging",editUrl:"https://github.com/na0fu3y/queuery/edit/master/blog/2020-01-28-gcp-logging.md",source:"@site/blog/2020-01-28-gcp-logging.md",description:"\u3053\u306e\u8a18\u4e8b\u306f Stackdriver Logging\u3068BQ\u30b7\u30f3\u30af\u306e\u5dee\uff08\u6599\u91d1\u3068\u691c\u7d22\u6027\u3001\u4fdd\u5b58\u671f\u9593\uff09\u3092\u77e5\u308a\u305f\u3044 \u306e\u5bfe\u5fdc\u8a18\u4e8b\u3067\u3059\u3002rhoboro \u3055\u3093\u3001\u4f9d\u983c\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002",date:"2020-01-28T00:00:00.000Z",tags:[{label:"stackdriverlogging",permalink:"/blog/tags/stackdriverlogging"},{label:"gcp",permalink:"/blog/tags/gcp"}],title:"Stackdriver Logging \u3067\u3067\u304d\u308b\u3053\u3068",readingTime:1.83,truncated:!0,prevItem:{title:"Python \u958b\u767a\u74b0\u5883\u306e Docker \u5316",permalink:"/blog/2020/05/11/python-docker"},nextItem:{title:"BigQuery \u30c6\u30fc\u30d6\u30eb\u540c\u58eb\u306e\u4e00\u81f4\u5224\u5b9a",permalink:"/blog/2020/01/26/two-tables-have-exactly-the-same-data-in-bigquery"}},O=[{value:"\u30ed\u30b0\u306e\u8868\u793a",id:"\u30ed\u30b0\u306e\u8868\u793a",children:[]},{value:"\u30ed\u30b0\u30d9\u30fc\u30b9\u306e\u6307\u6a19\u306e\u6982\u8981",id:"\u30ed\u30b0\u30d9\u30fc\u30b9\u306e\u6307\u6a19\u306e\u6982\u8981",children:[]},{value:"\u76e3\u67fb\u30ed\u30b0",id:"\u76e3\u67fb\u30ed\u30b0",children:[]},{value:"\u30ed\u30b0\u306e\u9664\u5916",id:"\u30ed\u30b0\u306e\u9664\u5916",children:[]},{value:"\u30ed\u30b0\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u6982\u8981",id:"\u30ed\u30b0\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u6982\u8981",children:[{value:"\u8a2d\u5b9a\u5024",id:"\u8a2d\u5b9a\u5024",children:[]},{value:"\u30b7\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b",id:"\u30b7\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b",children:[]},{value:"\u30c7\u30fc\u30bf\u3092\u4f7f\u3046",id:"\u30c7\u30fc\u30bf\u3092\u4f7f\u3046",children:[]}]}],j={toc:O};function i(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(r.b)("wrapper",Object(n.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u3053\u306e\u8a18\u4e8b\u306f ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/na0fu3y/na0fu3y.github.io/issues/25"}),"Stackdriver Logging\u3068BQ\u30b7\u30f3\u30af\u306e\u5dee\uff08\u6599\u91d1\u3068\u691c\u7d22\u6027\u3001\u4fdd\u5b58\u671f\u9593\uff09\u3092\u77e5\u308a\u305f\u3044")," \u306e\u5bfe\u5fdc\u8a18\u4e8b\u3067\u3059\u3002",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rhoboro"}),"rhoboro")," \u3055\u3093\u3001\u4f9d\u983c\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002"),Object(r.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(r.b)("p",null,"1 \u30f6\u6708\u524d\u306b\u3057\u305f\u3053\u3068\u3092\u601d\u3044\u51fa\u305b\u307e\u3059\u304b\u3002\u601d\u3044\u51fa\u305b\u306a\u3044\u306a\u3089 Stackdriver Logging \u3092\u4f7f\u3044\u307e\u3057\u3087\u3046\u3002\n1 \u30f6\u6708\u4ee5\u4e0a\u524d\u306b\u3057\u305f\u3053\u3068\u3092\u601d\u3044\u51fa\u305b\u307e\u3059\u304b\u3002\u601d\u3044\u51fa\u305b\u306a\u3044\u306a\u3089 Stackdriver Logging \u306e\u30ed\u30b0\u30b7\u30f3\u30af\u3092\u4f7f\u3044\u307e\u3057\u3087\u3046\u3002"),Object(r.b)("h1",{id:"\u305d\u3082\u305d\u3082-stackdriver-\u3067\u3067\u304d\u308b\u3053\u3068"},"\u305d\u3082\u305d\u3082 Stackdriver \u3067\u3067\u304d\u308b\u3053\u3068"),Object(r.b)("p",null,"\u300c\u30b5\u30fc\u30d3\u30b9\u3001\u30b3\u30f3\u30c6\u30ca\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3068\u7ba1\u7406\u3002\xa0\u300d\u3068\u3042\u308b\u3088\u3046\u306b\u3001\u76e3\u8996\u7cfb\u3067\u3059\u3002\n\u305d\u306e\u4e2d\u3067\u3082\u3044\u304f\u3064\u304b\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u5206\u304b\u308c\u3066\u3044\u307e\u3059\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.google.com/stackdriver/docs#stackdriver-monitoring"}),"Stackdriver Monitoring")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.google.com/stackdriver/docs#stackdriver-logging"}),"Stackdriver Logging")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.google.com/stackdriver/docs#stackdriver-error-reporting"}),"Stackdriver Error Reporting")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.google.com/stackdriver/docs#stackdriver-debugger"}),"Stackdriver Debugger")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.google.com/stackdriver/docs#stackdriver-trace"}),"Stackdriver Trace")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.google.com/stackdriver/docs#stackdriver-profiler"}),"Stackdriver Profiler"))),Object(r.b)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u300c\u904e\u53bb\u306b\u8d77\u304d\u305f\u3053\u3068\u300d\u306e\u30ed\u30b0\u306b\u7126\u70b9\u3092\u5f53\u3066\u3066\u3001Stackdriver Logging \u3067\u3067\u304d\u308b\u3053\u3068\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),Object(r.b)("h1",{id:"stackdriver-logging-\u3067\u3067\u304d\u308b\u3053\u3068"},"Stackdriver Logging \u3067\u3067\u304d\u308b\u3053\u3068"),Object(r.b)("p",null,"Google Cloud Platform \u3084 Amazon Web Services \u304b\u3089\u306e\u30ed\u30b0\u30c7\u30fc\u30bf\u3084\u30a4\u30d9\u30f3\u30c8\u306e\u683c\u7d0d\u3001\u691c\u7d22\u3001\u5206\u6790\u3001\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3001\u901a\u77e5\u304c\u3067\u304d\u307e\u3059\u3002\n\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3082\u3067\u304d\u308b\u306e\u3067\u3059\u304c\u3001\u4eca\u56de\u306f\u8aad\u307f\u8fbc\u307f\u306b\u7d5e\u3063\u3066\u306e\u7d39\u4ecb\u3067\u3059\u3002"),Object(r.b)("h2",{id:"\u30ed\u30b0\u306e\u8868\u793a"},Object(r.b)("a",Object(n.a)({parentName:"h2"},{href:"https://cloud.google.com/logging/docs/view/overview"}),"\u30ed\u30b0\u306e\u8868\u793a")),Object(r.b)("p",null,"\u307e\u305a\u306f\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u5143\u306b\u3001\u30ed\u30b0\u3092\u8868\u793a\u3057\u3066\u4f55\u304c\u5410\u304b\u308c\u3066\u3044\u308b\u306e\u304b\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002\n\u9664\u5916\u30d5\u30a3\u30eb\u30bf\u3092\u89e6\u3063\u3066\u3044\u306a\u3051\u308c\u3070 Google Cloud Platform \u306e\u5168\u3066\u306e\u30b5\u30fc\u30d3\u30b9\u306e\u30ed\u30b0\u304c\u898b\u3089\u308c\u308b\u306f\u305a\u3067\u3059\u3002\n\u3044\u308d\u3093\u306a\u3068\u3053\u308d\u3092\u30b0\u30ea\u30b0\u30ea\u3057\u3066\u3001\u30ed\u30b0\u30d5\u30a3\u30eb\u30bf\u306b\u6163\u308c\u307e\u3057\u3087\u3046\uff08\u3061\u3087\u3063\u3068\u9045\u5ef6\u304c\u5927\u304d\u3044\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u304c\uff09\u3002"),Object(r.b)("p",null,"\u30b0\u30ea\u30b0\u30ea\u3057\u3066\u3044\u305f\u3089\u3001\u96c6\u8a08\u3082\u3057\u3066\u307f\u305f\u304f\u306a\u3063\u3066\u304d\u307e\u305b\u3093\u304b\u3002\u305d\u3046\u306a\u3063\u305f\u3089\u30ed\u30b0\u30d9\u30fc\u30b9\u306e\u6307\u6a19\u306e\u6982\u8981\u306b\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),Object(r.b)("h2",{id:"\u30ed\u30b0\u30d9\u30fc\u30b9\u306e\u6307\u6a19\u306e\u6982\u8981"},Object(r.b)("a",Object(n.a)({parentName:"h2"},{href:"https://cloud.google.com/logging/docs/logs-based-metrics"}),"\u30ed\u30b0\u30d9\u30fc\u30b9\u306e\u6307\u6a19\u306e\u6982\u8981")),Object(r.b)("p",null,"\u30ed\u30b0\u304c\u30b0\u30ea\u30b0\u30ea\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u3089\u3001\u6307\u6a19\u3092\u95b2\u89a7\u3001\u30b0\u30ea\u30b0\u30ea\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u3087\u3046\u3002\n\u6307\u6a19\u3092\u3044\u3058\u308c\u308b\u3088\u3046\u306b\u306a\u308b\u3068\u3001\u30ed\u30b0\u30d5\u30a3\u30eb\u30bf\u3068\u5408\u308f\u305b\u3066\u3001\u30b0\u30e9\u30d5\u5316\u3084\u30a2\u30e9\u30fc\u30c8\u4f5c\u6210\u304c\u3067\u304d\u307e\u3059\u3002"),Object(r.b)("h2",{id:"\u76e3\u67fb\u30ed\u30b0"},Object(r.b)("a",Object(n.a)({parentName:"h2"},{href:"https://cloud.google.com/logging/docs/audit"}),"\u76e3\u67fb\u30ed\u30b0")),Object(r.b)("p",null,"\u3053\u3053\u307e\u3067\u30b0\u30ea\u30b0\u30ea\u3084\u3063\u3066\u304d\u305f\u3082\u306e\u8ab0\u304c\u3044\u3064\u5410\u3044\u305f\u3082\u306e\u3067\u3057\u3087\u3046\u304b\u3002\n\u7b54\u3048\u306f\u3001\u76e3\u67fb\u30ed\u30b0\u3067\u3059\u3002GCP \u306e\u76e3\u67fb\u30ed\u30b0\u306f\u304a\u3057\u3083\u3079\u308a\u3067\u3001\u305a\u3063\u3068\u30ed\u30b0\u3092\u5410\u304d\u7d9a\u3051\u3066\u3044\u307e\u3059\uff08\u5f8c\u8ff0\u3057\u307e\u3059\u304c\u3001\u9ed9\u3089\u305b\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u305b\u3093\uff09\u3002\nstdout \u3084 stderr \u306b\u66f8\u3044\u305f\u308a\u3001\u610f\u56f3\u7684\u306b Logging API \u3092\u4f7f\u3063\u305f\u308a\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u3001\u307b\u3068\u3093\u3069\u5168\u3066\u304c\u76e3\u67fb\u30ed\u30b0\u306a\u306f\u305a\u3067\u3059\u3002"),Object(r.b)("p",null,"\u8a73\u7d30\u306f\u30ea\u30f3\u30af\u5148\u3092\u898b\u3066\u3044\u305f\u3060\u304d\u305f\u3044\u3067\u3059\u304c\u3001\u91cd\u8981\u306a\u8868\u3092\u629c\u7c8b\u3057\u307e\u3059\u3002\n\u3053\u306e\u8868\u306f\u3001\u76e3\u67fb\u30ed\u30b0\u3092\u6301\u3064\u30b5\u30fc\u30d3\u30b9\u4e00\u89a7\u3067\u3059\uff082020 \u5e74 1 \u6708 27 \u65e5\u73fe\u5728\uff09\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u76e3\u67fb\u30ed\u30b0\u3092\u6301\u3064\u30b5\u30fc\u30d3\u30b9"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7ba1\u7406 \u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3 \u30ed\u30b0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u30c7\u30fc\u30bf \u30a2\u30af\u30bb\u30b9 \u30ed\u30b0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"App Engine"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Identity4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BigQuery"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud AutoML"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Bigtable"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Billing"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Composer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Dataflow"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Dataproc"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Datastore"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Deployment Manager"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Data Loss Prevention"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud DNS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Functions"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Genomics"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Healthcare"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Identity and Access Management"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Identity-Aware Proxy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud IoT Core"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Key Management Service"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Memorystore"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AI Platform"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Pub/Sub"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Run"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Source Repositories"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Spanner"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud SQL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Storage5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud AutoML Vision"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Compute Engine"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Compute Engine \u30b7\u30ea\u30a2\u30eb\u30dd\u30fc\u30c8 \u30a2\u30af\u30bb\u30b9"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Container Analysis"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30d9\u30fc\u30bf\u7248")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloud Build"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dialogflow"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Google Kubernetes Engine"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Service Management"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Resource Manager"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stackdriver Debugger"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stackdriver Error Reporting"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stackdriver Logging"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stackdriver Monitoring"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stackdriver Trace"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stackdriver Profiler"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u306a\u3057"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GA")))),Object(r.b)("p",null,"\u3053\u308c\u3089\u306e\u30b5\u30fc\u30d3\u30b9\u306f\u610f\u8b58\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u30ed\u30b0\u3092\u5410\u304d\u7d9a\u3051\u3066\u304f\u308c\u3066\u3044\u3066\u3001\u5f8c\u304b\u3089\u81ea\u7531\u306b\u30ed\u30b0\u3092\u8ffd\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u3057\u304b\u3057\u3001\u4fdd\u5b58\u671f\u9593\u306b\u5236\u9650\u304c\u3042\u308a\u307e\u3059\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u76e3\u67fb\u30ed\u30b0\u306e\u30bf\u30a4\u30d7"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u4fdd\u6301\u671f\u9593"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7ba1\u7406\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400 \u65e5")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30c7\u30fc\u30bf\u30a2\u30af\u30bb\u30b9"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 \u65e5")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u30b7\u30b9\u30c6\u30e0 \u30a4\u30d9\u30f3\u30c8"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400 \u65e5")))),Object(r.b)("p",null,"\u63d0\u4f9b\u3057\u3066\u3044\u308b\u30b5\u30fc\u30d3\u30b9\u306b\u3088\u3063\u3066\u306f\u3001\u30c7\u30fc\u30bf\u30a2\u30af\u30bb\u30b9 30 \u65e5\u306f\u3068\u3066\u3082\u77ed\u3044\u3053\u3068\u3067\u3057\u3087\u3046\u3002\n\u30ed\u30b0\u30a8\u30f3\u30c8\u30ea\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308c\u3070\u3001\u6c38\u7d9a\u5316\u3067\u304d\u307e\u3059\uff08\u3082\u3061\u308d\u3093\u4e0d\u8981\u306b\u306a\u3063\u305f\u3089\u524a\u9664\u3082\u3067\u304d\u307e\u3059\uff09\u3002"),Object(r.b)("p",null,"\u3061\u306a\u307f\u306b\u5177\u4f53\u7684\u306a\u76e3\u67fb\u30ed\u30b0\u3092\u78ba\u8a8d\u3059\u308b\u5834\u5408\u306b\u306f\u3001",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/blog/ja/products/gcp/best-practices-for-working-with-google-cloud-audit-logging"}),"Cloud Audit Logging \u6d3b\u7528\u306e\u30d9\u30b9\u30c8 \u30d7\u30e9\u30af\u30c6\u30a3\u30b9")," \u3092\u53c2\u8003\u306b\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u304c\u3067\u304d\u307e\u3059\u3002\n\u8a18\u4e8b\u304b\u3089\u306e\u629c\u7c8b\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u4ee5\u4e0b\u306e\u30d5\u30a3\u30eb\u30bf\u3067 SetIamPolicy \u306e\u5229\u7528\u72b6\u6cc1\u3084\u4fdd\u6301\u671f\u9593\u306a\u3069\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'resource.type="project"\nlogName="projects/a-project-id-here/logs/cloudaudit.googleapis.com%2Factivity"\nprotoPayload.methodName="SetIamPolicy"\n')),Object(r.b)("h2",{id:"\u30ed\u30b0\u306e\u9664\u5916"},Object(r.b)("a",Object(n.a)({parentName:"h2"},{href:"https://cloud.google.com/logging/docs/exclusions"}),"\u30ed\u30b0\u306e\u9664\u5916")),Object(r.b)("p",null,"\u30ed\u30b0\u304c\u9b31\u9676\u3057\u3044\u5834\u5408\u306b\u306f\u3001\u9664\u5916\u3082\u3067\u304d\u307e\u3059\u3002\nStackdriver Logging \u306e\u6599\u91d1\u306f ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/stackdriver/pricing"}),"$0.5/GiB")," \u3067\u3059\u304c\u3001\u6c17\u306b\u306a\u308b\u5834\u5408\u306b\u306f\u9664\u5916\u3092\u884c\u3044\u307e\u3057\u3087\u3046\u3002"),Object(r.b)("p",null,"\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001\u3053\u306e\u6599\u91d1\u306b\u306f\u76e3\u67fb\u30ed\u30b0\uff08\u3059\u3079\u3066\u306e\u7ba1\u7406\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3 \u30ed\u30b0\u3068 BigQuery \u30c7\u30fc\u30bf\u30a2\u30af\u30bb\u30b9 \u30ed\u30b0\uff09\u306f\u542b\u307e\u308c\u307e\u305b\u3093\u3002\n\u76e3\u67fb\u30ed\u30b0\u306f\u7121\u6599\u3067\u3042\u308a\u3001\u9664\u5916\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3053\u3068\u306b\u7559\u610f\u3057\u307e\u3057\u3087\u3046\u3002"),Object(r.b)("p",null,"\u9006\u306b\u542b\u307e\u308c\u308b\u30ed\u30b0\u306f\u3001\u610f\u56f3\u7684\u306b\u51fa\u3057\u305f\u7269\u3067\u3059\u3002\n\u4f8b\u3048\u3070 Cloud Functions \u3067\u306f\u3001Logging API \u3067\u610f\u56f3\u7684\u306b\u66f8\u3044\u305f\u30c7\u30fc\u30bf\u3001 stdout \u3084 stderr \u306b\u66f8\u304b\u308c\u305f\u30c7\u30fc\u30bf\u306f\u901a\u5e38\u306e\u30ed\u30b0\u306b\u306a\u308a\u307e\u3059\uff08\u60c5\u5831\u5143\uff1a",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/functions/docs/monitoring/logging#writing_logs"}),"\u30ed\u30b0\u306e\u66f8\u304d\u8fbc\u307f"),"\uff09\u3002"),Object(r.b)("h2",{id:"\u30ed\u30b0\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u6982\u8981"},Object(r.b)("a",Object(n.a)({parentName:"h2"},{href:"https://cloud.google.com/logging/docs/export"}),"\u30ed\u30b0\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u6982\u8981")),Object(r.b)("p",null,"Stackdriver Logging \u305d\u306e\u307e\u307e\u3067\u306f\u300130 \u65e5\u3068 400 \u65e5\u306e\u5236\u7d04\u304c\u3042\u308b\u305f\u3081\u3001\u30ed\u30b0\u306e\u9577\u671f\u4fdd\u5b58\u306b\u5411\u304d\u307e\u305b\u3093\u3002\n\u9577\u671f\u4fdd\u5b58\u3084 BigQuery \u3067\u5206\u6790\u3057\u305f\u3044\u3001\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u9023\u643a\u3057\u305f\u3044\u3068\u3044\u3063\u305f\u5834\u5408\u306b\u306f\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u307e\u3057\u3087\u3046\u3002"),Object(r.b)("h3",{id:"\u8a2d\u5b9a\u5024"},"\u8a2d\u5b9a\u5024"),Object(r.b)("p",null,"\u91cd\u8981\u306a\u8a2d\u5b9a\u5024\u3092 2 \u3064\u7d39\u4ecb\u3057\u307e\u3059\u3002"),Object(r.b)("h4",{id:"\u30ed\u30b0\u30d5\u30a3\u30eb\u30bf"},"\u30ed\u30b0\u30d5\u30a3\u30eb\u30bf"),Object(r.b)("p",null,"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u30ed\u30b0\u30a8\u30f3\u30c8\u30ea\u3092\u9078\u629e\u3057\u307e\u3059\u3002\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/logging/docs/view/advanced-queries"}),"\u9ad8\u5ea6\u306a\u30ed\u30b0\u30d5\u30a3\u30eb\u30bf")," \u3092\u307f\u306a\u304c\u3089\u3001\u7528\u9014\u306b\u5408\u308f\u305b\u3066\u8a2d\u8a08\u3057\u307e\u3057\u3087\u3046\u3002"),Object(r.b)("h4",{id:"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u5148"},"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u5148"),Object(r.b)("p",null,"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u5148\u306f 3 \u3064\u3067\u3059\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u9577\u671f\u4fdd\u5b58\u3059\u308b\u306a\u3089 Cloud Storage"),Object(r.b)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u5206\u6790\u3059\u308b\u306a\u3089 BigQuery"),Object(r.b)("li",{parentName:"ul"},"\u9023\u643a\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3059\u308b\u306a\u3089 Cloud Pub/Sub")),Object(r.b)("h3",{id:"\u30b7\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b"},Object(r.b)("a",Object(n.a)({parentName:"h3"},{href:"https://cloud.google.com/logging/docs/export/configure_export_v2#dest-create"}),"\u30b7\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b")),Object(r.b)("p",null,"\u7c21\u5358\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3067\u304d\u308b\u306e\u3067\u3001\u30d3\u30b8\u30cd\u30b9\u3092\u76e3\u8996\u3059\u308b\u306e\u306b\u91cd\u8981\u306a\u5024\u304c\u3042\u308b\u5834\u5408\u306b\u306f\u7a4d\u6975\u7684\u306b\u6d3b\u7528\u3057\u307e\u3057\u3087\u3046\u3002"),Object(r.b)("p",null,"\u6d3b\u7528\u4f8b\u3092\u6319\u3052\u3066\u307f\u307e\u3059\u3002"),Object(r.b)("h4",{id:"app-engine-\u3078\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30ed\u30b0\u30a8\u30f3\u30c8\u30ea"},"App Engine \u3078\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30ed\u30b0\u30a8\u30f3\u30c8\u30ea"),Object(r.b)("p",null,"\u30ea\u30af\u30a8\u30b9\u30c8\u30ed\u30b0\u3092\u3068\u308a\u3042\u3048\u305a\u3001Cloud Storage \u306b\u4fdd\u7ba1\u3057\u3066\u3001\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u306b\u4f7f\u3048\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"resource.type=gae_app AND\n  logName:request_log\n")),Object(r.b)("h4",{id:"bigquery-\u306e\u5b9f\u884c\u5b8c\u4e86\u3057\u305f\u30b8\u30e7\u30d6\u306e\u30ed\u30b0\u30a8\u30f3\u30c8\u30ea"},"BigQuery \u306e\u5b9f\u884c\u5b8c\u4e86\u3057\u305f\u30b8\u30e7\u30d6\u306e\u30ed\u30b0\u30a8\u30f3\u30c8\u30ea"),Object(r.b)("p",null,"\u5b9f\u884c\u30af\u30a8\u30ea\u3092 BigQuery \u3067\u30c7\u30fc\u30bf\u5206\u6790\u3057\u3066\u3001\u91cd\u3044\u30af\u30a8\u30ea\u3092\u767a\u898b\u3059\u308b\u306e\u306b\u4f7f\u3048\u307e\u3059\u3002\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.queuery.com/2020/01/21/bigquery-last-reference-date.html"}),"Stackdriver Logging \u3092\u7528\u3044\u3066 BigQuery \u30c6\u30fc\u30d6\u30eb\u306e\u6700\u7d42\u53c2\u7167\u65e5\u3092\u6c42\u3081\u308b")," \u3067\u3082\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"resource.type=bigquery_resource AND\n  proto_payload.method_name=jobservice.jobcompleted\n")),Object(r.b)("h4",{id:"compute-engine-\u306e\u91cd\u5927\u5ea6\u304c-error-\u4ee5\u4e0a\u306e\u30ed\u30b0\u30a8\u30f3\u30c8\u30ea"},"Compute Engine \u306e\u91cd\u5927\u5ea6\u304c ERROR \u4ee5\u4e0a\u306e\u30ed\u30b0\u30a8\u30f3\u30c8\u30ea"),Object(r.b)("p",null,"ERROR \u3092 Cloud Pub/Sub \u304b\u3089\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u9023\u643a\u3057\u3066\u901a\u77e5\u306b\u4f7f\u3048\u307e\u3059\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"resource.type=gce_instance AND\n   severity>=ERROR\n")),Object(r.b)("h3",{id:"\u30c7\u30fc\u30bf\u3092\u4f7f\u3046"},"\u30c7\u30fc\u30bf\u3092\u4f7f\u3046"),Object(r.b)("p",null,"\u3042\u3068\u306f\u3001\u30c7\u30fc\u30bf\u304c\u968f\u6642\u6e9c\u307e\u3063\u3066\u3044\u304f\u306e\u3067\u3001\u51e6\u7406\u3059\u308b\u30d1\u30a4\u30d7\u3092\u4f5c\u308b\u3060\u3051\u3067\u3059\u3002\nCloud Storage \u306b\u4fdd\u7ba1\u3057\u3066\u3042\u308b\u306a\u3089\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3092\u5143\u306b\u518d\u73fe\u3067\u304d\u308b\u3088\u3046\u306a\u4ed5\u7d44\u307f\u3092\u3001\nBigQuery \u306b\u4fdd\u6301\u3059\u308b\u306a\u3089\u5b9a\u671f\u7684\u306a\u76ee\u8996\u304c\u3067\u304d\u308b\u30c7\u30fc\u30bf\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046\u3002\nCloud Pub/Sub \u306b\u8ee2\u9001\u3057\u3066\u3044\u308b\u306a\u3089 Slack \u901a\u77e5\u306a\u3069\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308b\u4ed5\u7d44\u307f\u307e\u3067\u4f5c\u308a\u8fbc\u307f\u3001\u30ed\u30b0\u3092\u4f59\u3059\u3068\u3053\u306a\u304f\u6d3b\u7528\u3057\u307e\u3057\u3087\u3046\u3002"),Object(r.b)("h1",{id:"\u304a\u308f\u308a\u306b"},"\u304a\u308f\u308a\u306b"),Object(r.b)("p",null,"Stackdriver Logging \u3067\u3067\u304d\u308b\u3053\u3068\u3092\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u304b\u3058\u308a\u306a\u304c\u3089\u4e00\u901a\u308a\u773a\u3081\u307e\u3057\u305f\u3002\nStackdriver Logging \u3082\u9032\u5316\u3057\u7d9a\u3051\u3066\u3044\u308b\u30b5\u30fc\u30d3\u30b9\u306a\u306e\u3067\u3001\u307e\u305a\u306f\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u773a\u3081\u308b\u306e\u304c\u91cd\u8981\u3067\u3059\u3002\n\u5fdc\u7528\u3068\u3057\u3066\u3001\u30ed\u30b0\u30d5\u30a3\u30eb\u30bf\u3092 3 \u3064\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002\u30d3\u30b8\u30cd\u30b9\u306b\u5408\u308f\u305b\u3066\u30ed\u30b0\u3092\u6d3b\u7528\u3067\u304d\u308b\u3068\u3001\n\u3088\u308a\u30c7\u30fc\u30bf\u30c9\u30ea\u30d6\u30f3\u306a\u7d44\u7e54\u904b\u55b6\u304c\u3067\u304d\u308b\u306e\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u304b\u3002\n\u305c\u3072\u3001Stackdriver Logging \u3092\u6d3b\u7528\u3057\u307e\u3057\u3087\u3046\u3002"))}i.isMDXComponent=!0},140:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return g}));var n=a(0),b=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,n,b=function(t,e){if(null==t)return{};var a,n,b={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(b[a]=t[a])}return b}var j=b.a.createContext({}),i=function(t){var e=b.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},o=function(t){var e=i(t.components);return b.a.createElement(j.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},d=b.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),o=i(a),d=n,g=o["".concat(l,".").concat(d)]||o[d]||p[d]||r;return a?b.a.createElement(g,c(c({ref:e},j),{},{components:a})):b.a.createElement(g,c({ref:e},j))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,l=new Array(r);l[0]=d;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var j=2;j<r;j++)l[j]=a[j];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);