(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(201)),i={id:"date-and-time-data-types-in-bigquery",title:"BigQuery \u65e5\u6642\u578b",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","brainfuck"]},u={permalink:"/queuery/blog/date-and-time-data-types-in-bigquery",source:"@site/blog/2020-01-26-date-and-time-data-types-in-bigquery.md",description:"\u306f\u3058\u3081\u306b",date:"2020-01-26T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/queuery/blog/tags/bigquery"},{label:"brainfuck",permalink:"/queuery/blog/tags/brainfuck"}],title:"BigQuery \u65e5\u6642\u578b",readingTime:.61,truncated:!0,prevItem:{title:"BigQuery \u30c7\u30fc\u30bf\u54c1\u8cea\u306e\u30c1\u30a7\u30c3\u30af\u65b9\u91dd",permalink:"/queuery/blog/data-quality"},nextItem:{title:"BigQuery \u30c6\u30fc\u30d6\u30eb\u540c\u58eb\u306e\u4e00\u81f4\u5224\u5b9a",permalink:"/queuery/blog/two-tables-have-exactly-the-same-data-in-bigquery"}},c=[],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#date-type"}),"\u65e5\u6642\u578b")," \u306f\u3001\u6642\u7cfb\u5217\u30c7\u30fc\u30bf\u3092\u6271\u3046\u969b\u3001\u5fc5\u9808\u306e\u30c7\u30fc\u30bf\u578b\u3067\u3059\u3002\u307e\u305a\u306f\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u307f\u6f01\u308a\u307e\u3057\u3087\u3046\u3002"))}p.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,s=b["".concat(i,".").concat(f)]||b[f]||y[f]||o;return r?a.a.createElement(s,u(u({ref:t},l),{},{components:r})):a.a.createElement(s,u({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);