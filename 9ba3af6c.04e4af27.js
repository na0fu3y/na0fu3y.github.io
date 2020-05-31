(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{176:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return o}));var a=t(2),r=t(9),l=(t(0),t(201)),u={id:"two-tables-have-exactly-the-same-data-in-bigquery",title:"BigQuery \u30c6\u30fc\u30d6\u30eb\u540c\u58eb\u306e\u4e00\u81f4\u5224\u5b9a",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery"]},c={permalink:"/queuery/blog/two-tables-have-exactly-the-same-data-in-bigquery",source:"@site/blog/2020-01-26-two-tables-have-exactly-the-same-data-in-bigquery.md",description:"\u306f\u3058\u3081\u306b",date:"2020-01-26T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/queuery/blog/tags/bigquery"}],title:"BigQuery \u30c6\u30fc\u30d6\u30eb\u540c\u58eb\u306e\u4e00\u81f4\u5224\u5b9a",readingTime:1.535,truncated:!0,prevItem:{title:"BigQuery \u65e5\u6642\u578b",permalink:"/queuery/blog/date-and-time-data-types-in-bigquery"},nextItem:{title:"AutoML Tables \u63a8\u8ad6\u7d50\u679c\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u5927\u6383\u9664",permalink:"/queuery/blog/automl-tables-dataset-cleaner"}},i=[{value:"\u4efb\u610f\u306e\u30b9\u30ad\u30fc\u30de\u306e\u30c6\u30fc\u30d6\u30eb",id:"\u4efb\u610f\u306e\u30b9\u30ad\u30fc\u30de\u306e\u30c6\u30fc\u30d6\u30eb",children:[{value:"EXCEPT DISTINCT \u306b\u3088\u308b\u5bfe\u79f0\u5dee",id:"except-distinct-\u306b\u3088\u308b\u5bfe\u79f0\u5dee",children:[]},{value:"FULL JOIN \u5bfe\u79f0\u5dee",id:"full-join-\u5bfe\u79f0\u5dee",children:[]},{value:"TO_JSON_STRING &amp; COUNT",id:"to_json_string--count",children:[]}]},{value:"\u65e2\u77e5\u306e\u30b9\u30ad\u30fc\u30de\u306e\u30c6\u30fc\u30d6\u30eb",id:"\u65e2\u77e5\u306e\u30b9\u30ad\u30fc\u30de\u306e\u30c6\u30fc\u30d6\u30eb",children:[]}],b={rightToc:i};function o(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/na0fu3y/na0fu3y.github.io/issues/26"}),"\u30c6\u30fc\u30d6\u30eb\u306e\u4e00\u81f4\u5224\u5b9a\u306e\u30af\u30a8\u30ea\u3092\u77e5\u308a\u305f\u3044")," \u306e\u5bfe\u5fdc\u8a18\u4e8b\u3067\u3059\u3002\nBigQuery \u30c6\u30fc\u30d6\u30eb\u306f\u3001\u30ea\u30ec\u30fc\u30b7\u30e7\u30ca\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u6bd4\u3079\u3066\u3001\u5f37\u3044\u5236\u7d04\u3092\u304b\u3051\u306b\u304f\u3044\u3067\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30c6\u30b9\u30c8\u6642\u306b\u306f\u4e00\u81f4\u6027\u691c\u8a3c\u304c\u91cd\u8981\u306b\u306a\u3063\u3066\u304f\u308b\u3067\u3057\u3087\u3046\u3002\n\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001BigQuery \u30c6\u30fc\u30d6\u30eb\u4e00\u81f4\u6027\u3092\u5224\u5b9a\u3059\u308b\u30af\u30a8\u30ea\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),Object(l.b)("h1",{id:"\u305d\u3082\u305d\u3082\u4e00\u81f4\u6027\u5224\u5225\u3068\u306f"},"\u305d\u3082\u305d\u3082\u4e00\u81f4\u6027\u5224\u5225\u3068\u306f"),Object(l.b)("p",null,"BigQuery \u306e 2 \u3064\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u6bd4\u8f03\u3057\u3066\u3001\u540c\u4e00\u306e\u5217\u3092\u540c\u4e00\u306e\u6570\u6301\u3063\u3066\u3044\u308b\u72b6\u614b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3053\u3068\u3068\u3057\u307e\u3059\u3002"),Object(l.b)("h1",{id:"\u4e00\u81f4\u6027\u5224\u5225\u306e\u65b9\u6cd5"},"\u4e00\u81f4\u6027\u5224\u5225\u306e\u65b9\u6cd5"),Object(l.b)("p",null,"\u4ee5\u4e0b\u3001\u3069\u306e\u3084\u308a\u65b9\u3082\u5217\u9806\u304c\u4e00\u81f4\u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308b\u70b9\u306b\u7559\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3053\u308c\u306f BigQuery \u306e UNION \u306f\u5217\u540d\u3067\u306f\u306a\u304f\u9806\u5e8f\u3067\u7d50\u5408\u3092\u884c\u3046\u305f\u3081\u3067\u3001\u4efb\u610f\u30b9\u30ad\u30fc\u30de\u3067\u306f\u5bfe\u5fdc\u56f0\u96e3\u3067\u3059\u3002"),Object(l.b)("h2",{id:"\u4efb\u610f\u306e\u30b9\u30ad\u30fc\u30de\u306e\u30c6\u30fc\u30d6\u30eb"},"\u4efb\u610f\u306e\u30b9\u30ad\u30fc\u30de\u306e\u30c6\u30fc\u30d6\u30eb"),Object(l.b)("h3",{id:"except-distinct-\u306b\u3088\u308b\u5bfe\u79f0\u5dee"},"EXCEPT DISTINCT \u306b\u3088\u308b\u5bfe\u79f0\u5dee"),Object(l.b)("p",null,"\u6700\u3082\u304a\u624b\u8efd\u306a\u3084\u308a\u65b9\u3067\u3059\u3002EXCEPT DISTINCT \u3092 2 \u3064\u306e\u30c6\u30fc\u30d6\u30eb\u3067\u53cc\u65b9\u5411\u306b\u884c\u3044\u3001\u5bfe\u79f0\u5dee\u3092\u6c42\u3081\u307e\u3059\u3002\n\u5bfe\u79f0\u5dee\u304c\u5b58\u5728\u3057\u306a\u3051\u308c\u3070\u3001\u4e00\u81f4\u3057\u3066\u3044\u308b\u3068\u898b\u306a\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  *\nFROM\n  (SELECT * FROM table1 EXCEPT DISTINCT SELECT * FROM table2)\nUNION ALL\nSELECT\n  *\nFROM\n  (SELECT * FROM table2 EXCEPT DISTINCT SELECT * FROM table1)\n")),Object(l.b)("p",null,"\u3057\u304b\u3057\u3001Groupable \u3067\u306a\u3044\u578b ARRAY, STRUCT, GEOGRAPHY \u306b\u306f\u5bfe\u5fdc\u3067\u304d\u306a\u3044\u554f\u984c\u304c\u3042\u308a\u307e\u3059\u3002\n\u52a0\u3048\u3066\u3001\u540c\u5024\u884c\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u306b\u5bfe\u5fdc\u3067\u304d\u306a\u3044\u554f\u984c\u3082\u3042\u308a\u307e\u3059\u3002\n\u540c\u5024\u884c\u306f\u3001\u30ea\u30ec\u30fc\u30b7\u30e7\u30ca\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u6b63\u3057\u3044\u30c6\u30fc\u30d6\u30eb\u8a2d\u8a08\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u304c\u3001\u30c7\u30fc\u30bf\u51e6\u7406\u306e\u4e2d\u9593\u3067\u767a\u751f\u3057\u5f97\u308b\u305f\u3081\u5bfe\u5fdc\u3067\u304d\u308b\u306b\u8d8a\u3057\u305f\u3053\u3068\u306f\u306a\u3044\u3067\u3059\u3002\n\u3053\u308c\u3089\u306e\u554f\u984c\u304c\u56de\u907f\u3067\u304d\u308b\u30c6\u30fc\u30d6\u30eb\u3067\u3042\u308c\u3070\u3001\u3053\u306e\u5bfe\u79f0\u5dee\u3092\u7528\u3044\u305f\u3084\u308a\u65b9\u304c\u304a\u3059\u3059\u3081\u3067\u3059\u3002"),Object(l.b)("h3",{id:"full-join-\u5bfe\u79f0\u5dee"},"FULL JOIN \u5bfe\u79f0\u5dee"),Object(l.b)("p",null,"\u30c6\u30fc\u30d6\u30eb\u3092 STRUCT \u3068\u307f\u306a\u3057\u3066 FULL JOIN \u3057\u3066\u5bfe\u8c61\u5dee\u3092\u6c42\u3081\u308b\u3084\u308a\u65b9\u3067\u3059\u3002\n\u5bfe\u79f0\u5dee\u304c\u5b58\u5728\u3057\u306a\u3051\u308c\u3070\u3001\u4e00\u81f4\u3057\u3066\u3044\u308b\u3068\u898b\u306a\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u4e0a\u306e\u3084\u308a\u65b9\u306b\u5bfe\u3057\u3066\u3001STRUCT \u306b\u5bfe\u5fdc\u3059\u308b\u512a\u4f4d\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  table1.primary_key,\n  table2.primary_key\nFROM\n  table1\nFULL JOIN\n  table2\nON\n  table1=table2\nWHERE\n  table1.primary_key IS NULL\n  OR table2.primary_key IS NULL\n")),Object(l.b)("p",null,"\u3057\u304b\u3057\u3001Comparable \u3067\u306a\u3044\u578b ARRAY, GEOGRAPHY \u306b\u306f\u5bfe\u5fdc\u3067\u304d\u306a\u3044\u554f\u984c\u304c\u3042\u308a\u307e\u3059\u3002\n\u52a0\u3048\u3066\u3001\u540c\u5024\u884c\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u306b\u5bfe\u5fdc\u3067\u304d\u306a\u3044\u554f\u984c\u306f\u6b8b\u3063\u305f\u307e\u307e\u3067\u3059\u3002\n\u307e\u305f\u3001JOIN \u3067\u304d\u305f\u304b\u306e\u5224\u5225\u306e\u305f\u3081\u306b Nullable \u3067\u306a\u3044\u5217\u304c 1 \u5217\u5206\u304b\u3063\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u308c\u306f\u3001JOIN \u6642\u306e STRUCT \u306b\u5bfe\u3057\u3066 IS NULL \u304c\u3046\u307e\u304f\u6a5f\u80fd\u3057\u306a\u3044\u3053\u3068\u306e\u5bfe\u5fdc\u306b\u306a\u308a\u307e\u3059\u3002"),Object(l.b)("h3",{id:"to_json_string--count"},"TO_JSON_STRING & COUNT"),Object(l.b)("p",null,"\u578b\u3078\u306e\u4f9d\u5b58\u3092\u306a\u304f\u3059\u3079\u304f TO_JSON_STRING\u3001\u540c\u5024\u5217\u306b\u5bfe\u5fdc\u3059\u3079\u304f COUNT \u3092\u631f\u3093\u3060\u3084\u308a\u65b9\u3067\u3059\u3002\n\u4efb\u610f\u306e\u578b\u3068\u3001\u540c\u5024\u884c\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"SELECT\n  *\nFROM (\n  SELECT\n    TO_JSON_STRING(table1)s,\n    COUNT(*)c\n  FROM\n    table1\n  GROUP BY\n    s)l\nFULL JOIN (\n  SELECT\n    TO_JSON_STRING(table2)s,\n    COUNT(*)c\n  FROM\n    table2\n  GROUP BY\n    s)r\nON\n  l=r\nWHERE\n  l.c IS NULL\n  OR r.c IS NULL\n")),Object(l.b)("p",null,"\u534a\u9762\u3001TO_JSON_STRING \u3067 BigQuery \u5185\u90e8\u5bb9\u91cf\u304c 100 MB \u3092\u8d85\u3048\u308b\u884c\u306b\u5bfe\u5fdc\u3067\u304d\u307e\u305b\u3093\u3002\n\u5bb9\u91cf\u4e0a\u9650\u306b\u59a5\u5354\u3067\u304d\u3001ARRAY \u3084 GEOGRAPHY \u3092\u542b\u3080\u4efb\u610f\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u5fdc\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u3084\u308a\u65b9\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),Object(l.b)("h2",{id:"\u65e2\u77e5\u306e\u30b9\u30ad\u30fc\u30de\u306e\u30c6\u30fc\u30d6\u30eb"},"\u65e2\u77e5\u306e\u30b9\u30ad\u30fc\u30de\u306e\u30c6\u30fc\u30d6\u30eb"),Object(l.b)("p",null,"\u30b9\u30ad\u30fc\u30de\u304c\u5206\u304b\u308b\u306a\u3089\u3001\u5168\u3066\u306e\u5217\u3092 Groupable \u306a\u578b\u306b\u5909\u63db\u3057\u3066 COUNT \u3059\u308b\u3068\u3001\u5217\u306e\u4e26\u3073\u9806\u3001\u540c\u5024\u884c\u3001\u578b\u306e\u30c7\u30e1\u30ea\u30c3\u30c8\u3092\u6d88\u3057\u53bb\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002\nGEOGRAPHY \u578b\u306f\u3001ST_ASBINARY \u306a\u3069\u306e\u95a2\u6570\u3067\u3001BYTES \u578b\u304b STRING \u578b\u306b\u5909\u63db\u3057\u307e\u3059\u3002\nSTRUCT \u578b\u306f\u3001\u89e3\u4f53\u3057\u307e\u3059\u3002ARRAY \u578b\u306f TO_JSON_STRING \u3067 STRING \u578b\u306b\u5909\u63db\u3057\u307e\u3059\u3002\nTO_JSON_STRING \u304c\u540c\u3058\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u3044\u3001INT64\u3001NUMERIC\u3001FLOAT64 \u578b\u540c\u58eb\u306f\u7279\u306b\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\uff08\u4ed6\u306e\u578b\u3082 STRING \u3067\u540c\u5024\u306e\u3082\u306e\u3092\u4f5c\u308c\u307e\u3059\uff09\u3002\n\u3088\u308a\u5805\u7262\u306b\u3084\u308b\u306b\u306f\u3001UNNEST WITH OFFSET \u3067\u540c\u5024\u6bd4\u8f03\u3059\u3079\u304d\u3067\u3059\u306d\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"WITH\n  table1 AS(\n  SELECT\n    1 int64_value,\n    STRUCT(NUMERIC '0.1' AS numeric_value,\n      b'0' AS bytes_value)struct_value,\n    ST_GEOGPOINT(45,\n      45)geography_value,\n    [1,\n    2]array_value),\n  table2 AS(\n  SELECT\n    1 int64_value,\n    STRUCT(NUMERIC '0.1' AS numeric_value,\n      b'0' AS bytes_value)struct_value,\n    ST_GEOGPOINT(45,\n      45)geography_value,\n    [1,\n    2]array_value)\nSELECT\n  l,\n  r\nFROM (\n  SELECT\n    int64_value,\n    struct_value.numeric_value numeric_value,\n    struct_value.bytes_value bytes_value,\n    ST_ASBINARY(geography_value)geography_value,\n    TO_JSON_STRING(array_value)array_value,\n    COUNT(*)c\n  FROM\n    table1\n  GROUP BY\n    int64_value,\n    numeric_value,\n    bytes_value,\n    geography_value,\n    array_value)l\nFULL JOIN (\n  SELECT\n    int64_value,\n    struct_value.numeric_value numeric_value,\n    struct_value.bytes_value bytes_value,\n    ST_ASBINARY(geography_value)geography_value,\n    TO_JSON_STRING(array_value)array_value,\n    COUNT(*)c\n  FROM\n    table2\n  GROUP BY\n    int64_value,\n    numeric_value,\n    bytes_value,\n    geography_value,\n    array_value)r\nON\n  l=r\nWHERE\n  l.c IS NULL\n  OR r.c IS NULL\n")),Object(l.b)("h1",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),Object(l.b)("p",null,"\u30c6\u30fc\u30d6\u30eb\u4e00\u81f4\u6027\u5224\u5225\u306e\u65b9\u6cd5\u3092 4 \u7a2e\u985e\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002\n\u3069\u306e\u65b9\u6cd5\u3082\u30e1\u30ea\u30c3\u30c8\u30c7\u30e1\u30ea\u30c3\u30c8\u3042\u308a\u307e\u3059\u304c\u3001\u30c6\u30fc\u30d6\u30eb\u4e00\u81f4\u6027\u5224\u5225\u306f\u30af\u30a8\u30ea\u306e\u30c6\u30b9\u30c8\u3092\u3059\u308b\u4e0a\u3067\u91cd\u8981\u306a\u89b3\u70b9\u3067\u3059\u3002\n\u305c\u3072\u3001\u30d9\u30b9\u30c8\u306a\u65b9\u6cd5\u3092\u6a21\u7d22\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"))}o.isMDXComponent=!0},201:function(e,n,t){"use strict";t.d(n,"a",(function(){return O})),t.d(n,"b",(function(){return y}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),o=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},O=function(e){var n=o(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},T=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),O=o(t),T=a,y=O["".concat(u,".").concat(T)]||O[T]||p[T]||l;return t?r.a.createElement(y,c(c({ref:n},b),{},{components:t})):r.a.createElement(y,c({ref:n},b))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=T;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var b=2;b<l;b++)u[b]=t[b];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,t)}T.displayName="MDXCreateElement"}}]);