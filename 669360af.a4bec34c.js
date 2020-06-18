(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(9),i=(r(0),r(208)),o={id:"bigquery-last-reference-date",title:"Stackdriver Logging \u3092\u7528\u3044\u3066 BigQuery \u30c6\u30fc\u30d6\u30eb\u306e\u6700\u7d42\u53c2\u7167\u65e5\u3092\u6c42\u3081\u308b",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery"]},c={permalink:"/blog/bigquery-last-reference-date",editUrl:"https://github.com/na0fu3y/queuery/edit/master/blog/2020-01-21-bigquery-last-reference-date.md",source:"@site/blog/2020-01-21-bigquery-last-reference-date.md",description:"\u3084\u308a\u305f\u3044\u3053\u3068",date:"2020-01-21T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"}],title:"Stackdriver Logging \u3092\u7528\u3044\u3066 BigQuery \u30c6\u30fc\u30d6\u30eb\u306e\u6700\u7d42\u53c2\u7167\u65e5\u3092\u6c42\u3081\u308b",readingTime:.94,truncated:!0,prevItem:{title:"\u5b89\u3044\u901f\u3044\u65e8\u3044 BigQuery \u306e 19 \u306e\u6700\u9069\u5316\u6cd5",permalink:"/blog/bigquery-cost-performance-tuning"},nextItem:{title:"BigQuery \u3067 1 \u5186\u3082\u6eb6\u304b\u3055\u306a\u3044\u4eba\u306e\u9854 (ZERO BYTE STRUCT \u3092\u8003\u6848\u3057\u305f)",permalink:"/blog/bigquery-sandbox"}},l=[{value:"\u5bff\u547d\u3067\u3088\u3044\u306e\u3067\u306f",id:"\u5bff\u547d\u3067\u3088\u3044\u306e\u3067\u306f",children:[]},{value:"Storage \u306b\u79fb\u52d5\u3059\u308b\u3079\u304d\u304b",id:"storage-\u306b\u79fb\u52d5\u3059\u308b\u3079\u304d\u304b",children:[]},{value:"Stackdriver Logging \u30ed\u30b0\u30b7\u30f3\u30af\u306e\u8a2d\u5b9a",id:"stackdriver-logging-\u30ed\u30b0\u30b7\u30f3\u30af\u306e\u8a2d\u5b9a",children:[]},{value:"\u6700\u7d42\u53c2\u7167\u65e5",id:"\u6700\u7d42\u53c2\u7167\u65e5",children:[]},{value:"\u4f9d\u5b58 VIEW \u306e\u6d17\u3044\u51fa\u3057",id:"\u4f9d\u5b58-view-\u306e\u6d17\u3044\u51fa\u3057",children:[]}],u={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u3084\u308a\u305f\u3044\u3053\u3068"},"\u3084\u308a\u305f\u3044\u3053\u3068"),Object(i.b)("p",null,"BigQuery \u30c6\u30fc\u30d6\u30eb\u306e\u6700\u7d42\u53c2\u7167\u65e5\u3092\u6c42\u3081\u3066\u3001\u4f7f\u3063\u3066\u306a\u3044\u30c6\u30fc\u30d6\u30eb\u3092\u6574\u7406\u3057\u305f\u3044\u3002\n\u6700\u7d42\u66f4\u65b0\u65e5\u306f\u30c6\u30fc\u30d6\u30eb\u306e\u30e1\u30bf\u60c5\u5831\u306b\u8f09\u3063\u3066\u3044\u308b\u304c\u3001\u53c2\u7167\u65e5\u306f\u8f09\u3063\u3066\u304a\u3089\u305a\u7c21\u5358\u306b\u898b\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3002\nBigQuery \u306e\u30af\u30a8\u30ea\u30ed\u30b0\u304c\u5168\u3066\u8f09\u308b Stackdriver Logging \u306b\u96c6\u8a08\u51e6\u7406\u3092\u304b\u3051\u308b\u3053\u3068\u3067\u6c42\u3081\u3066\u307f\u308b\u3002"),Object(i.b)("h2",{id:"\u5bff\u547d\u3067\u3088\u3044\u306e\u3067\u306f"},"\u5bff\u547d\u3067\u3088\u3044\u306e\u3067\u306f"),Object(i.b)("p",null,"\u5bff\u547d\u304c\u6b63\u3057\u304f\u8a2d\u8a08\u3067\u304d\u308b\u306a\u3089\u554f\u984c\u306a\u3044\u304c\u3001\u5f8c\u304b\u3089\u8ffd\u3044\u305f\u304f\u306a\u308b\u5834\u5408\u306f\u5fc5\u305a\u3042\u308b\u3002\n\u307e\u305f\u3001AutoML \u63a8\u8ad6\u3067 BigQuery \u306b\u51fa\u529b\u3059\u308b\u3068\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u898b\u5883\u306a\u304f\u4f5c\u308b\u305f\u3081\u3001\u5bff\u547d\u306e\u8a2d\u5b9a\u304c\u3067\u304d\u306a\u3044\u3002\n\u3053\u308c\u3089\u306e\u554f\u984c\u306b\u5bfe\u51e6\u3059\u3079\u304f\u3001Stackdriver Logging \u3092\u7528\u3044\u308b\u3002\n\u3061\u306a\u307f\u306b\u3001AutoML \u63a8\u8ad6\u306e\u5927\u6383\u9664\u306b\u306f ",Object(i.b)("inlineCode",{parentName:"p"},"prediction_\\w+_20\\d\\d_\\d\\d_\\d\\dT\\d\\d_\\d\\d_\\d\\d_\\d\\d\\dZ")," \u306e\u6b63\u898f\u8868\u73fe\u3092\u5229\u7528\u3057\u305f\u3002"),Object(i.b)("h2",{id:"storage-\u306b\u79fb\u52d5\u3059\u308b\u3079\u304d\u304b"},"Storage \u306b\u79fb\u52d5\u3059\u308b\u3079\u304d\u304b"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Storage Archive Storage $0.004\n< Storage Coldline Storage $0.007\n< Storage Nearline Storage $0.010\n= BigQuery Long-term storage $0.010\n< BigQuery Active storage $0.020\n< Storage Standard Storage $0.026\n(per GB per Month)(US)\n")),Object(i.b)("p",null,"AVRO \u30c7\u30fc\u30bf\u5727\u7e2e\u7387\u306a\u3069\u7121\u8996\u3059\u308b\u3068\u3001\u7de8\u96c6\u304b\u3089 90 \u65e5\u3088\u308a\u524d\u306a\u3089 Nearline \u4ee5\u4e0b\u306e\u300190 \u65e5\u4ee5\u5f8c\u306a\u3089 Coldline \u4ee5\u4e0b\u306e Storage \u306b\u79fb\u52d5\u3059\u308b\u3068\u4fa1\u683c\u3092\u6291\u3048\u3089\u308c\u308b\u3002\n\u7121\u7de8\u96c6\u304b\u3064\u30a2\u30af\u30bb\u30b9\u304c\u5e74 1 \u672a\u6e80\u306a\u3089 Archive\u3001\u5e74 1 \u7a0b\u5ea6\u306a\u3089 Coldline \u304c\u59a5\u5f53\u306a\u30e9\u30a4\u30f3\u3060\u3068\u601d\u308f\u308c\u308b\u3002\n\u305d\u308c\u4ee5\u5916\u306f\uff08\u30b5\u30a4\u30ba\u6b21\u7b2c\u3067\u306f\u3042\u308b\u304c\uff09\u4f5c\u696d\u6642\u9593\u306b\u898b\u5408\u308f\u306a\u305d\u3046\u306a\u305f\u3081\u3001 BigQuery \u306b\u305d\u306e\u307e\u307e\u653e\u7f6e\u3059\u308b\u3002"),Object(i.b)("h1",{id:"\u6e96\u5099"},"\u6e96\u5099"),Object(i.b)("h2",{id:"stackdriver-logging-\u30ed\u30b0\u30b7\u30f3\u30af\u306e\u8a2d\u5b9a"},"Stackdriver Logging \u30ed\u30b0\u30b7\u30f3\u30af\u306e\u8a2d\u5b9a"),Object(i.b)("p",null,"\u30ed\u30b0\u30b7\u30f3\u30af\u8a2d\u5b9a\u306f\u4ee5\u4e0b\u306e\u30d5\u30a3\u30eb\u30bf\u3067\u884c\u3046\u3002\u53c2\u7167\u53ef\u80fd\u306a\u5168\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3001\u5916\u90e8\u516c\u958b\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306b\u3064\u3044\u3066\u306f\u3001\u53c2\u7167\u3092\u8ffd\u3048\u306a\u3044\u70b9\u306b\u7559\u610f\u3059\u308b\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'resource.type="bigquery_resource" AND\nproto_payload.method_name="jobservice.jobcompleted"\n')),Object(i.b)("h1",{id:"\u6383\u9664\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u5f97\u308b"},"\u6383\u9664\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u5f97\u308b"),Object(i.b)("h2",{id:"\u6700\u7d42\u53c2\u7167\u65e5"},"\u6700\u7d42\u53c2\u7167\u65e5"),Object(i.b)("p",null,"\u30ed\u30b0\u30b7\u30f3\u30af\u5148\u304b\u3089 BigQuery \u30c6\u30fc\u30d6\u30eb\u306e\u6700\u8fd1\u53c2\u7167\u65e5\u3092\u51fa\u3059\u30af\u30a8\u30ea\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3002\n\u3053\u306e\u30af\u30a8\u30ea\u3067\u53c2\u7167\u65e5\u3092\u898b\u3066\u3001\u8981\u4e0d\u8981\u306e\u5224\u65ad\u3092\u884c\u3046\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),'CREATE TEMP FUNCTION\n  ADD_PROJECT_ID_IF_NEEDED(table_id STRING,\n    project_id STRING)AS(CASE CHAR_LENGTH(table_id)-CHAR_LENGTH(REPLACE (table_id, ".", ""))\n      WHEN 1 THEN CONCAT(project_id,\'.\',table_id)\n      WHEN 2 THEN table_id\n    ELSE\n    ERROR(\'The format is not supported\')\n  END\n    );\nSELECT\n  table_id,\n  last_referenced\nFROM (\n  SELECT\n    CONCAT(project_id,\'.\',dataset_id,\'.\',table_id)table_id\n  FROM\n    < your-dataset >.__TABLES__)\nFULL JOIN (\n  SELECT\n    ADD_PROJECT_ID_IF_NEEDED(REGEXP_REPLACE(table_id, r"[\\s`]", ""),\n      protopayload_auditlog.servicedata_v1_bigquery.jobCompletedEvent.job.jobName.projectId)table_id,\n    MAX(timestamp)last_referenced\n  FROM\n    < your-bigquery-log >.cloudaudit_googleapis_com_data_access\n  INNER JOIN\n    UNNEST(REGEXP_EXTRACT_ALL(protopayload_auditlog.servicedata_v1_bigquery.jobCompletedEvent.job.jobConfiguration.query.query, r"(?:FROM|JOIN)\\s*(`(?:[\\-\\w]+\\.)?\\w+\\.\\w+`|(?:[\\-\\w]+\\.)?\\w+\\.\\w+\\s|(?:[\\-\\w]+\\.)?\\w+\\.\\w+$)"))table_id\n  GROUP BY\n    table_id)\nUSING\n  (table_id)\n')),Object(i.b)("h2",{id:"\u4f9d\u5b58-view-\u306e\u6d17\u3044\u51fa\u3057"},"\u4f9d\u5b58 VIEW \u306e\u6d17\u3044\u51fa\u3057"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/servian/bigquery-view-analyzer"}),"BigQuery View Analyzer")," \u3092\u7528\u3044\u308b\u3068\u3001\nBigQuery VIEW \u304c\u4f9d\u5b58\u3059\u308b\u30c6\u30fc\u30d6\u30eb\u3092\u518d\u5e30\u7684\u306b\u63a2\u7d22\u3057\u3066\u53ef\u8996\u5316\u3057\u3066\u304f\u308c\u308b\u3002\nVIEW \u4e2d\u5fc3\u306b\u4f5c\u3063\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u3001\u3053\u3061\u3089\u3082\u5b9f\u65bd\u3059\u308b\u3002"),Object(i.b)("h1",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),Object(i.b)("p",null,"\u6700\u7d42\u53c2\u7167\u65e5 & \u4f9d\u5b58 VIEW \u306e\u6d17\u3044\u51fa\u3057\u3067\u5927\u4f53\u4f7f\u3063\u3066\u3044\u306a\u3044\u30c6\u30fc\u30d6\u30eb\u3092\u898b\u5206\u3051\u3066\u6574\u7406\u3067\u304d\u305f\u306f\u305a\u3060\u3002\n\u81ea\u5206\u306e\u7ba1\u7406\u5916\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089\u547c\u3070\u308c\u308b\u516c\u958b\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304c\u3042\u308b\u5834\u5408\u306b\u306f\u3001\u305d\u306e\u544a\u77e5\u3082\u5fc5\u8981\u306b\u306a\u308b\u305f\u3081\u6c17\u3092\u3064\u3051\u3066\u6383\u9664\u3092\u884c\u3063\u3066\u307b\u3057\u3044\u3002"))}b.isMDXComponent=!0},208:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=b(r),p=n,s=d["".concat(o,".").concat(p)]||d[p]||g[p]||i;return r?a.a.createElement(s,c(c({ref:t},u),{},{components:r})):a.a.createElement(s,c({ref:t},u))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);