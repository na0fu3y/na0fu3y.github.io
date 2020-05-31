(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(201)),i={id:"two-tables-have-exactly-the-same-data-in-bigquery",title:"BigQuery \u30c6\u30fc\u30d6\u30eb\u540c\u58eb\u306e\u4e00\u81f4\u5224\u5b9a",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery"]},u={permalink:"/queuery/blog/two-tables-have-exactly-the-same-data-in-bigquery",source:"@site/blog/2020-01-26-two-tables-have-exactly-the-same-data-in-bigquery.md",description:"\u306f\u3058\u3081\u306b",date:"2020-01-26T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/queuery/blog/tags/bigquery"}],title:"BigQuery \u30c6\u30fc\u30d6\u30eb\u540c\u58eb\u306e\u4e00\u81f4\u5224\u5b9a",readingTime:1.535,truncated:!0,prevItem:{title:"BigQuery \u65e5\u6642\u578b",permalink:"/queuery/blog/date-and-time-data-types-in-bigquery"},nextItem:{title:"AutoML Tables \u63a8\u8ad6\u7d50\u679c\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u5927\u6383\u9664",permalink:"/queuery/blog/automl-tables-dataset-cleaner"}},c=[],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/na0fu3y/na0fu3y.github.io/issues/26"}),"\u30c6\u30fc\u30d6\u30eb\u306e\u4e00\u81f4\u5224\u5b9a\u306e\u30af\u30a8\u30ea\u3092\u77e5\u308a\u305f\u3044")," \u306e\u5bfe\u5fdc\u8a18\u4e8b\u3067\u3059\u3002\nBigQuery \u30c6\u30fc\u30d6\u30eb\u306f\u3001\u30ea\u30ec\u30fc\u30b7\u30e7\u30ca\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u6bd4\u3079\u3066\u3001\u5f37\u3044\u5236\u7d04\u3092\u304b\u3051\u306b\u304f\u3044\u3067\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30c6\u30b9\u30c8\u6642\u306b\u306f\u4e00\u81f4\u6027\u691c\u8a3c\u304c\u91cd\u8981\u306b\u306a\u3063\u3066\u304f\u308b\u3067\u3057\u3087\u3046\u3002\n\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001BigQuery \u30c6\u30fc\u30d6\u30eb\u4e00\u81f4\u6027\u3092\u5224\u5b9a\u3059\u308b\u30af\u30a8\u30ea\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"))}p.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(r),y=n,f=b["".concat(i,".").concat(y)]||b[y]||s[y]||o;return r?a.a.createElement(f,u(u({ref:t},l),{},{components:r})):a.a.createElement(f,u({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);