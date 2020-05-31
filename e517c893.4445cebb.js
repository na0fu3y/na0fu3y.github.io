(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{189:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),i=(r(0),r(201)),o={id:"new-bigquery",title:"BigQuery \u60c5\u5831\u53ce\u96c6",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery"]},c={permalink:"/blog/new-bigquery",source:"@site/blog/2020-01-21-new-bigquery.md",description:"BigQuery \u306e\u60c5\u5831\u53ce\u96c6\u306e\u4ed5\u65b9\u3002",date:"2020-01-21T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"}],title:"BigQuery \u60c5\u5831\u53ce\u96c6",readingTime:.56,truncated:!0,prevItem:{title:"\u3010\u89e3\u6c7a\u6e08\u3011Cloud IAM \u3067\u30b5\u30fc\u30d3\u30b9\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304b\u3089\u5168\u6a29\u9650\u3092\u524a\u9664\u3059\u308b\u3068\u898b\u3048\u306a\u304f\u306a\u308b",permalink:"/blog/invisible-service-agent"},nextItem:{title:"\u5206\u6790 SQL \u306e\u30c6\u30b9\u30c8\u3068\u30c7\u30fc\u30bf\u30c1\u30a7\u30c3\u30af\u30b9\u30bf\u30a4\u30eb\u306e\u63d0\u6848",permalink:"/blog/sql-test-and-data-check"}},b=[{value:"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",children:[{value:"\u30ea\u30ea\u30fc\u30b9\u30ce\u30fc\u30c8",id:"\u30ea\u30ea\u30fc\u30b9\u30ce\u30fc\u30c8",children:[]},{value:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",children:[]},{value:"Google Cloud Next",id:"google-cloud-next",children:[]}]},{value:"\u975e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u975e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",children:[{value:"Twitter",id:"twitter",children:[]}]},{value:"\u6574\u7406\u3055\u308c\u305f\u60c5\u5831",id:"\u6574\u7406\u3055\u308c\u305f\u60c5\u5831",children:[{value:"\u975e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u975e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8-1",children:[]},{value:"Qiita",id:"qiita",children:[]},{value:"\u672c",id:"\u672c",children:[]}]}],l={rightToc:b};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"BigQuery \u306e\u60c5\u5831\u53ce\u96c6\u306e\u4ed5\u65b9\u3002"),Object(i.b)("h1",{id:"\u65b0\u3057\u3044\u60c5\u5831"},"\u65b0\u3057\u3044\u60c5\u5831\u3000"),Object(i.b)("h2",{id:"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),Object(i.b)("h3",{id:"\u30ea\u30ea\u30fc\u30b9\u30ce\u30fc\u30c8"},"\u30ea\u30ea\u30fc\u30b9\u30ce\u30fc\u30c8"),Object(i.b)("p",null,"\u30ea\u30ea\u30fc\u30b9\u304c\u306a\u3044\u304b\u78ba\u8a8d\u3057\u307e\u3059\u3002"),Object(i.b)("h4",{id:"bigquery-release-notes"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"https://cloud.google.com/bigquery/docs/release-notes"}),"BigQuery Release notes")),Object(i.b)("h4",{id:"bigquery-ml-release-notes"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"https://cloud.google.com/bigquery-ml/docs/release-notes"}),"BigQuery ML release notes")),Object(i.b)("h4",{id:"bigquery-data-transfer-service-release-notes"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"https://cloud.google.com/bigquery-transfer/docs/release-notes"}),"BigQuery Data Transfer Service release notes")),Object(i.b)("h4",{id:"bigquery-bi-engine-release-notes"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"https://cloud.google.com/bi-engine/docs/release-notes"}),"BigQuery BI Engine release notes")),Object(i.b)("h4",{id:"cloud-iam-release-notes"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"https://cloud.google.com/iam/docs/release-notes"}),"Cloud IAM release notes")),Object(i.b)("p",null,"Cloud IAM \u306e\u30ea\u30ea\u30fc\u30b9\u3082\u5fae\u5999\u306b\u7d61\u3093\u3067\u305f\u308a\u3059\u308b\u306e\u3067\u6642\u6298\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"),Object(i.b)("h3",{id:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),Object(i.b)("h4",{id:"bigquery-documentation"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"https://cloud.google.com/bigquery/docs/"}),"BigQuery documentation")),Object(i.b)("p",null,"\u5de6\u306e\u30e1\u30cb\u30e5\u30fc\u306b\u65b0\u3057\u3044\u9805\u76ee\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u306a\u3044\u304b\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002\n\u82f1\u8a9e\u7248\u306e\u65b9\u304c\u5148\u306b\u66f4\u65b0\u3055\u308c\u308b\u50be\u5411\u3060\u3063\u305f\u306e\u3067\u3001\u82f1\u8a9e\u7248\u3092\u307f\u3066\u3044\u307e\u3059\u304c\u3001\u6700\u8fd1\u306f\u65e5\u672c\u8a9e\u3082\u3061\u3083\u3093\u3068\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"),Object(i.b)("h3",{id:"google-cloud-next"},"Google Cloud Next"),Object(i.b)("h4",{id:"google-cloud-next-20--april-6-8"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"https://cloud.withgoogle.com/next/sf/"}),"Google Cloud Next '20 | April 6-8")),Object(i.b)("p",null,"Google Cloud Platform \u306e\u6700\u65b0\u60c5\u5831\u3092\u5165\u624b\u3067\u304d\u307e\u3059\u3002"),Object(i.b)("h2",{id:"\u975e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u975e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),Object(i.b)("h3",{id:"twitter"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"https://twitter.com/search?q=bigquery"}),"Twitter")),Object(i.b)("p",null,"\u672c\u5f53\u306f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u7f6e\u304d\u305f\u3044\u306e\u3067\u3059\u304c\u3001",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/search?q=bigquery"}),"search?q=bigquery")," \u304c\u5b9f\u73fe\u3067\u304d\u306a\u3044\u306e\u3067\u3001\u30ea\u30f3\u30af\u3067\u3059\u3002\n\u65b0\u3057\u3044\u60c5\u5831\u3001\u8a66\u3057\u3066\u307f\u305f\u60c5\u5831\u306e\u30ad\u30e3\u30c3\u30c1\u30a2\u30c3\u30d7\u306b\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),Object(i.b)("h2",{id:"\u6574\u7406\u3055\u308c\u305f\u60c5\u5831"},"\u6574\u7406\u3055\u308c\u305f\u60c5\u5831"),Object(i.b)("h3",{id:"\u975e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8-1"},"\u975e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),Object(i.b)("h4",{id:"bigquery-faq"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"https://cloud-textbook.com/3635/"}),"BigQuery FAQ")),Object(i.b)("p",null,"Q&A \u5f62\u5f0f\u3067\u3001\u6d45\u3044\u3068\u3053\u308d\u304b\u3089\u30ac\u30c3\u30c4\u30ea\u6df1\u3044\u3068\u3053\u308d\u307e\u3067\u30ea\u30ec\u30fc\u30b7\u30e7\u30ca\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u6bd4\u8f03\u3059\u308b\u5f62\u3067\u307e\u3068\u307e\u3063\u3066\u3044\u307e\u3059\u3002"),Object(i.b)("h4",{id:"bigquery-\u3067\u30c7\u30fc\u30bf\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u3059\u308b\u3068\u304d\u306b\u4f7f\u3063\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u307e\u3068\u3081\u305f"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"https://qiita.com/na0/items/25eb37b0597b0c7460c3"}),"BigQuery \u3067\u30c7\u30fc\u30bf\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u3059\u308b\u3068\u304d\u306b\u4f7f\u3063\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u307e\u3068\u3081\u305f")),Object(i.b)("p",null,"\u30c7\u30fc\u30bf\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u306b BigQuery \u3092\u6d3b\u7528\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u77e5\u8b58\u3054\u308d\u3063\u3068\u30ea\u30f3\u30af\u96c6\u3067\u3059\u3002"),Object(i.b)("h3",{id:"qiita"},"Qiita"),Object(i.b)("h3",{id:"\u672c"},"\u672c"),Object(i.b)("h4",{id:"google-bigquery-the-definitive-guide-data-warehousing-analytics-and-machine-learning-at-scale"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"https://amzn.to/2Rx8G2p"}),"Google BigQuery: The Definitive Guide: Data Warehousing, Analytics, and Machine Learning at Scale")),Object(i.b)("p",null,"\u8d85\u304a\u3059\u3059\u3081\u3067\u3059\u3002BigQuery \u306e\u6b74\u53f2\u304b\u3089\u3001\u6700\u65b0\u306e\u52b9\u7387\u7684\u306a\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u307e\u3067\u307e\u308b\u3063\u3068\u5b66\u3079\u307e\u3059\u3002"),Object(i.b)("h4",{id:"google-bigquery"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"https://amzn.to/3b4JZ54"}),"Google BigQuery")),Object(i.b)("p",null,"2015 \u5e74\u51fa\u7248\u3068\u5c11\u3057\u53e4\u3044\u3067\u3059\u304c\u3001\u65e5\u672c\u8a9e\u3067 BigQuery \u4e38\u3054\u3068\u5b66\u3076\u306b\u306f\u3053\u306e\u4e00\u518a\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u3002"))}u.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=u(r),g=n,p=s["".concat(o,".").concat(g)]||s[g]||d[g]||i;return r?a.a.createElement(p,c(c({ref:t},l),{},{components:r})):a.a.createElement(p,c({ref:t},l))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);