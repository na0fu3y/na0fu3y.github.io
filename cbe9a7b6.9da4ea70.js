(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{185:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(1),a=t(9),i=(t(0),t(203)),o={id:"brainfuck-in-bigquery",title:"BigQuery Scripting \u3067 Brainf*ck",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","brainfuck"]},c={permalink:"/blog/brainfuck-in-bigquery",source:"@site/blog/2020-01-21-brainfuck-in-bigquery.md",description:"# \u66f8\u3044\u305f\u52d5\u6a5f",date:"2020-01-21T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"},{label:"brainfuck",permalink:"/blog/tags/brainfuck"}],title:"BigQuery Scripting \u3067 Brainf*ck",truncated:!0,prevItem:{title:"BigQuery \u3067 1 \u5186\u3082\u6eb6\u304b\u3055\u306a\u3044\u4eba\u306e\u9854 (ZERO BYTE STRUCT \u3092\u8003\u6848\u3057\u305f)",permalink:"/blog/bigquery-sandbox"},nextItem:{title:"\u3010\u89e3\u6c7a\u6e08\u3011Cloud IAM \u3067\u30b5\u30fc\u30d3\u30b9\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304b\u3089\u5168\u6a29\u9650\u3092\u524a\u9664\u3059\u308b\u3068\u898b\u3048\u306a\u304f\u306a\u308b",permalink:"/blog/invisible-service-agent"}},u=[],l={rightToc:u};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u66f8\u3044\u305f\u52d5\u6a5f"},"\u66f8\u3044\u305f\u52d5\u6a5f"),Object(i.b)("p",null,"BigQuery \u4e2d\u5fc3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3067\u306f\u3001\u7d71\u8a08\u5206\u6790\u3084\u6a5f\u68b0\u5b66\u7fd2\u306e\u30c7\u30fc\u30bf\u6e96\u5099\u3092\u3001Cloud Composer \u306a\u3069\u304b\u3089 SQL \u3092\u4f7f\u3063\u305f\u30c7\u30fc\u30bf\u5909\u63db\u306b\u3088\u3063\u3066\u5b9f\u73fe\u3059\u308b\u3002\u3057\u304b\u3057\u3001\u76f4\u5217\u3067\u30c7\u30fc\u30bf\u5909\u63db\u3092\u884c\u3046\u5834\u5408\u306b\u306f ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/scripting"}),"\u6a19\u6e96 SQL \u306e\u30b9\u30af\u30ea\u30d7\u30c8")," \u3067\u5341\u5206\u306a\u30b1\u30fc\u30b9\u3082\u3042\u308a\u3001\u958b\u767a\u3092\u3057\u3066\u3064\u3089\u304f\u306a\u3044\u306a\u3089\u63a1\u7528\u3057\u305f\u3044\u601d\u3044\u304c\u3042\u3063\u305f\u3002\n\u5148\u65e5\u306e\u30b5\u30a4\u30ec\u30f3\u30c8\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3067\u3001\u5c0f\u3055\u306a\u30af\u30a8\u30ea\u306e\u9ad8\u901f\u5316\u304c\u884c\u308f\u308c\u305f\u3053\u3068\u304b\u3089\u3001\u5341\u5206\u306a\u901f\u5ea6\u304c\u3067\u308b\u3068\u4e88\u60f3\u3057\u305f\u3002\nBigQuery \u3067 Brainf*ck \u3092\u5b9f\u73fe\u3057\u3066\u3001\u30c1\u30e5\u30fc\u30ea\u30f3\u30b0\u5b8c\u5168\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u305f\u304b\u3063\u305f\u3002\u6b32\u3092\u8a00\u3048\u3070 SELECT \u6587\u3060\u3051\u3067\u5b9f\u73fe\u3057\u305f\u3044\u304c\u3001\u518d\u5e30 WITH \u53e5\u304c\u4f7f\u3048\u306a\u3044\u3053\u3068\u304b\u3089\u81ea\u5206\u306b\u306f\u5b9f\u73fe\u624b\u6bb5\u304c\u308f\u304b\u3089\u306a\u304b\u3063\u305f\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u306a\u3089\u3067\u304d\u308b\u3068\u601d\u3044\u3001\u3084\u3063\u3066\u307f\u305f\u3002"))}p.isMDXComponent=!0},203:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return g}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},b=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(t),s=n,g=b["".concat(o,".").concat(s)]||b[s]||f[s]||i;return t?a.a.createElement(g,c({ref:r},l,{components:t})):a.a.createElement(g,c({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=s;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);