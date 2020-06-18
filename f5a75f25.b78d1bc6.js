(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{201:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(208)),i={id:"data-quality",title:"BigQuery \u30c7\u30fc\u30bf\u54c1\u8cea\u306e\u30c1\u30a7\u30c3\u30af\u65b9\u91dd",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","dataquality"]},u={permalink:"/blog/data-quality",editUrl:"https://github.com/na0fu3y/queuery/edit/master/blog/2020-01-27-data-quality.md",source:"@site/blog/2020-01-27-data-quality.md",description:"\u76ee\u7684",date:"2020-01-27T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"},{label:"dataquality",permalink:"/blog/tags/dataquality"}],title:"BigQuery \u30c7\u30fc\u30bf\u54c1\u8cea\u306e\u30c1\u30a7\u30c3\u30af\u65b9\u91dd",readingTime:4.345,truncated:!0,prevItem:{title:"Stackdriver Logging \u3067\u3067\u304d\u308b\u3053\u3068",permalink:"/blog/gcp-logging"},nextItem:{title:"BigQuery \u30c6\u30fc\u30d6\u30eb\u540c\u58eb\u306e\u4e00\u81f4\u5224\u5b9a",permalink:"/blog/two-tables-have-exactly-the-same-data-in-bigquery"}},c=[],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u76ee\u7684"},"\u76ee\u7684"),Object(o.b)("p",null,"\u6a5f\u68b0\u5b66\u7fd2\u3067\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3059\u308b\u969b\u3001\u5341\u5206\u306b\u304d\u308c\u3044\u306a\u30c7\u30fc\u30bf\u3092\u5165\u529b\u3057\u305f\u65b9\u304c\u5927\u62b5\u306e\u30b1\u30fc\u30b9\u3067\u6709\u671b\u3067\u3059\u3002\n\u6c5a\u3044\u30c7\u30fc\u30bf\u3082\u4f7f\u308f\u306a\u3044\u3088\u308a\u306f\u30de\u30b7\u3067\u3042\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u305d\u306e\u3088\u3046\u306a\u30c7\u30fc\u30bf\u306f\u7d99\u7d9a\u7684\u306b\u540c\u7a0b\u5ea6\u306e\u54c1\u8cea\u3092\u6301\u3063\u3066\u3044\u308b\u304b\u691c\u8a3c\u304c\u56f0\u96e3\u306a\u3053\u3068\u3092\u8a8d\u8b58\u3057\u3066\u5229\u7528\u3059\u3079\u304d\u3067\u3057\u3087\u3046\u3002\n\u3057\u304b\u3057\u3001\u5341\u5206\u306b\u304d\u308c\u3044\u306a\u30c7\u30fc\u30bf\u304b\u3069\u3046\u304b\u3092\u4fdd\u8a3c\u3059\u308b\u89b3\u70b9\u306f\u5c11\u306a\u3044\u3067\u3059\u3002"),Object(o.b)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u5b9f\u969b\u7684\u306a\u3001\u30c7\u30fc\u30bf\u54c1\u8cea\u30c1\u30a7\u30c3\u30af\u306e\u65b9\u6cd5\u8ad6\u3092\u307e\u3068\u3081\u307e\u3057\u305f\u3002"))}p.isMDXComponent=!0},208:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(r),y=n,g=b["".concat(i,".").concat(y)]||b[y]||f[y]||o;return r?a.a.createElement(g,u(u({ref:t},l),{},{components:r})):a.a.createElement(g,u({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);