(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),b=(n(0),n(201)),l={id:"date-and-time-data-types-in-bigquery",title:"BigQuery \u65e5\u6642\u578b",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","brainfuck"]},c={permalink:"/blog/date-and-time-data-types-in-bigquery",source:"@site/blog/2020-01-26-date-and-time-data-types-in-bigquery.md",description:"\u306f\u3058\u3081\u306b",date:"2020-01-26T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"},{label:"brainfuck",permalink:"/blog/tags/brainfuck"}],title:"BigQuery \u65e5\u6642\u578b",readingTime:.61,truncated:!0,prevItem:{title:"BigQuery \u30c7\u30fc\u30bf\u54c1\u8cea\u306e\u30c1\u30a7\u30c3\u30af\u65b9\u91dd",permalink:"/blog/data-quality"},nextItem:{title:"BigQuery \u30c6\u30fc\u30d6\u30eb\u540c\u58eb\u306e\u4e00\u81f4\u5224\u5b9a",permalink:"/blog/two-tables-have-exactly-the-same-data-in-bigquery"}},i=[{value:"\u65e5\u4ed8\u578b DATE",id:"\u65e5\u4ed8\u578b-date",children:[]},{value:"\u65e5\u6642\u578b DATETIME",id:"\u65e5\u6642\u578b-datetime",children:[]},{value:"\u6642\u523b\u578b TIME",id:"\u6642\u523b\u578b-time",children:[]},{value:"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u578b TIMESTAMP",id:"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u578b-timestamp",children:[]},{value:"\u3069\u3046\u4f7f\u3044\u5206\u3051\u308b\u304b",id:"\u3069\u3046\u4f7f\u3044\u5206\u3051\u308b\u304b",children:[]}],u={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#date-type"}),"\u65e5\u6642\u578b")," \u306f\u3001\u6642\u7cfb\u5217\u30c7\u30fc\u30bf\u3092\u6271\u3046\u969b\u3001\u5fc5\u9808\u306e\u30c7\u30fc\u30bf\u578b\u3067\u3059\u3002\u307e\u305a\u306f\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u307f\u6f01\u308a\u307e\u3057\u3087\u3046\u3002"),Object(b.b)("h1",{id:"\u65e5\u6642\u578b\u3068\u306f"},"\u65e5\u6642\u578b\u3068\u306f"),Object(b.b)("p",null,"BigQuery \u3067\u30b0\u30eb\u30fc\u30d4\u30f3\u30b0\u3055\u308c\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u3044\u3067\u3059\u304c\u3001\u3053\u306e\u8a18\u4e8b\u3067\u306f\u65e5\u4ed8\u3084\u6642\u9593\u3092\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u578b\u3092\u7dcf\u79f0\u3059\u308b\u3053\u3068\u3068\u3057\u307e\u3059\u3002\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u3092\u6271\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\n\u5177\u4f53\u7684\u306a\u578b\u306f DATE\u3001DATETIME\u3001TIME\u3001TIMESTAMP \u306e 4 \u3064\u3067\u3059\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u540d\u524d"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8aac\u660e"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u30b9\u30c8\u30ec\u30fc\u30b8 \u30b5\u30a4\u30ba"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7bc4\u56f2"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DATE"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u65e5\u4ed8\u578b"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 \u30d0\u30a4\u30c8"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0001-01-01\uff5e9999-12-31")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DATETIME"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u65e5\u6642\u578b"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 \u30d0\u30a4\u30c8"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0001-01-01 00:00:00\uff5e9999-12-31 23:59:59.999999")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TIME"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u6642\u523b\u578b"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 \u30d0\u30a4\u30c8"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"00:00:00\uff5e23:59:59.999999")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TIMESTAMP"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u578b"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 \u30d0\u30a4\u30c8"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0001-01-01 00:00:00\uff5e9999-12-31 23:59:59.999999 UTC")))),Object(b.b)("h2",{id:"\u65e5\u4ed8\u578b-date"},"\u65e5\u4ed8\u578b DATE"),Object(b.b)("p",null,"DATE \u578b\u306f\u3001\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u306b\u95a2\u4fc2\u306a\u304f\u3001\u65e5\u3092\u8868\u3057\u307e\u3059\u3002\u6642\u9593\u3092\u542b\u307f\u307e\u305b\u3093\u3002\n\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u306e\u89e3\u91c8\u306b\u3088\u3063\u3066\u793a\u3059 24 \u6642\u9593\u306e\u7bc4\u56f2\u304c\u305a\u308c\u305f\u308a\u3001\u30b5\u30de\u30fc\u30bf\u30a4\u30e0\u3067\u4e00\u65e5\u306e\u9577\u3055\u304c\u5909\u308f\u3063\u305f\u308a\u3057\u307e\u3059\u3002\n\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u5225\u306b\u76f8\u5bfe\u5316\u3055\u308c\u305f\u65e5\u4ed8\u3092\u8868\u3057\u305f\u3044\u6642\u306b DATE \u3092\u5229\u7528\u3057\u307e\u3057\u3087\u3046\u3002\nBigQuery \u4e0a\u3067\u306f ",Object(b.b)("inlineCode",{parentName:"p"},"DATE(2020, 1, 25)")," \u304b\u3001",Object(b.b)("inlineCode",{parentName:"p"},"DATE '2020-01-25'")," \u306e\u3088\u3046\u306b\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),Object(b.b)("h2",{id:"\u65e5\u6642\u578b-datetime"},"\u65e5\u6642\u578b DATETIME"),Object(b.b)("p",null,"DATETIME \u306f\u7279\u5b9a\u306e\u65e5\u6642\u3092\u8868\u3057\u307e\u3059\u3002 DATETIME \u306b\u306f\u3001\u5e74\u6708\u65e5\u3001\u6642\u5206\u79d2 + \u30df\u30ea\u79d2\u304c\u542b\u307e\u308c\u307e\u3059\u3002\nDATE \u578b\u3068\u540c\u69d8\u306b\u3001\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u306e\u89e3\u91c8\u306b\u3088\u3063\u3066\u793a\u3059 24 \u6642\u9593\u306e\u7bc4\u56f2\u304c\u305a\u308c\u305f\u308a\u3001\u30b5\u30de\u30fc\u30bf\u30a4\u30e0\u3067\u4e00\u65e5\u306e\u9577\u3055\u304c\u5909\u308f\u3063\u305f\u308a\u3057\u307e\u3059\u3002\n\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u5225\u306b\u76f8\u5bfe\u5316\u3055\u308c\u305f\u65e5\u6642\u3092\u8868\u3057\u305f\u3044\u6642\u306b DATETIME\u3001\u7d76\u5bfe\u6642\u9593\u3092\u8868\u3059\u969b\u306b\u306f\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3092\u5229\u7528\u3057\u307e\u3057\u3087\u3046\u3002\nBigQuery \u4e0a\u3067\u306f ",Object(b.b)("inlineCode",{parentName:"p"},"DATETIME(2020, 1, 26, 12, 26, 41)")," \u304b\u3001",Object(b.b)("inlineCode",{parentName:"p"},"DATETIME '2020-01-26T12:26:41'")," \u306e\u3088\u3046\u306b\u5b9a\u7fa9\u3057\u307e\u3059\u3002\nSTRING \u306b DATETIME \u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u5b9a\u7fa9\u3059\u308b\u5834\u5408\u3001T \u306f\u30b9\u30da\u30fc\u30b9\u3067\u3082\u826f\u304f\u3001\u6642\u9593\u3092\u7701\u7565\u3059\u308b\u3068 0 \u6642 0 \u5206 0 \u79d2\u3092\u6307\u3057\u307e\u3059\u3002"),Object(b.b)("h2",{id:"\u6642\u523b\u578b-time"},"\u6642\u523b\u578b TIME"),Object(b.b)("p",null,"TIME \u30c7\u30fc\u30bf\u578b\u306f\u3001\u7279\u5b9a\u306e\u65e5\u4ed8\u3068\u306f\u95a2\u4fc2\u306a\u304f\u3001\u6642\u523b\u3092\u8868\u3057\u307e\u3059\u3002"),Object(b.b)("h2",{id:"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u578b-timestamp"},"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u578b TIMESTAMP"),Object(b.b)("p",null,"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u306f\u3001\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u3084\u590f\u6642\u9593\u306a\u3069\u306e\u6163\u7fd2\u306b\u95a2\u4fc2\u306a\u304f\u3001\u7d76\u5bfe\u7684\u306a\u6642\u523b\u3092\u8868\u3057\u307e\u3059\u3002"),Object(b.b)("h2",{id:"\u3069\u3046\u4f7f\u3044\u5206\u3051\u308b\u304b"},"\u3069\u3046\u4f7f\u3044\u5206\u3051\u308b\u304b"),Object(b.b)("p",null,"\u30bb\u30f3\u30b5\u3084\u3001\u8cfc\u8cb7\u306a\u3069\u30a4\u30d9\u30f3\u30c8\u3092\u8a18\u9332\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u578b\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002\n\u89e3\u91c8\u306b\u3088\u3063\u3066\u76f8\u5bfe\u5316\u3055\u308c\u308b\u3079\u304d\u3067\u306a\u3044\u304b\u3089\u3067\u3059\u3002"),Object(b.b)("p",null,"\u89e3\u91c8\u306b\u3088\u3063\u3066\u76f8\u5bfe\u5316\u3055\u308c\u308b\u3079\u304d\u3001\u30ab\u30ec\u30f3\u30c0\u30fc\u306e\u795d\u65e5\u60c5\u5831\u306a\u3069\u306f\u3001DATE \u578b\u304c\u826f\u3044\u3067\u3059\u306d\u3002\n\u7e70\u308a\u8fd4\u3057\u30a4\u30d9\u30f3\u30c8\u306e\u4f5c\u6210\u306b\u3001TIME \u3068 DATE \u306e\u30da\u30a2\u3092\u4f5c\u3063\u3066\u3001\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u306e\u89e3\u91c8\u3092\u52a0\u3048\u3066 TIMESTAMP \u3068\u3057\u3066\u8a18\u9332\u3059\u308b\u306a\u3069\u3082\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),Object(b.b)("p",null,"DATETIME \u578b\u304c\u9069\u5207\u306a\u5834\u9762\u306f\u601d\u3044\u3064\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u3069\u306a\u305f\u304b ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/na0fu3y/na0fu3y.github.io/pulls"}),"\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8")," \u307e\u305f\u306f\u3001Twitter \u3067\u9023\u7d61\u304f\u3060\u3055\u3044\u307e\u305b\u3002"),Object(b.b)("h1",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),Object(b.b)("p",null,"BigQuery \u306b\u306f\u3001DATE\u3001DATETIME\u3001TIME\u3001TIMESTAMP \u306e 4 \u3064\u306e\u65e5\u4ed8\u578b\u304c\u3042\u308a\u307e\u3059\u3002\n\u7528\u9014\u306b\u3088\u3063\u3066\u9069\u5207\u306b\u9078\u3076\u3053\u3068\u3067\u3001\u6b63\u3057\u304f\u610f\u601d\u6c7a\u5b9a\u306b\u4f7f\u3048\u308b\u30c7\u30fc\u30bf\u5206\u6790\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\n\u7279\u306b\u65e5\u6642\u306f\u3001\u89e3\u91c8\u3059\u308b\u4eba\u9593\u306b\u3088\u3063\u3066\u63fa\u308c\u3084\u3059\u3044\u8868\u73fe\u3067\u3059\u3002\u524d\u63d0\u3068\u3059\u308b\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u3092\u5171\u6709\u3057\u305f\u308a\u3001\u524d\u3082\u3063\u3066\u30c7\u30fc\u30bf\u306b\u5165\u308c\u3066\u89e3\u91c8\u304c\u63fa\u308c\u306a\u3044\u3088\u3046\u306b\u3059\u3079\u304d\u3067\u3059\u3002\u6b63\u3057\u3044\u30c7\u30fc\u30bf\u3067\u6b63\u3057\u3044\u30c7\u30fc\u30bf\u6d3b\u7528\u3092\u9032\u3081\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"))}p.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=p(n),d=a,j=o["".concat(l,".").concat(d)]||o[d]||O[d]||b;return n?r.a.createElement(j,c(c({ref:t},u),{},{components:n})):r.a.createElement(j,c({ref:t},u))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<b;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);