(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{196:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(9),a=(t(0),t(201)),i={id:"google-drive-design",title:"Google \u5171\u6709\u30c9\u30e9\u30a4\u30d6\u8a2d\u8a08\u8ad6",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","brainfuck"]},u={permalink:"/queuery/blog/google-drive-design",source:"@site/blog/2020-01-30-google-drive-design.md",description:"\u306f\u3058\u3081\u306b",date:"2020-01-30T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/queuery/blog/tags/bigquery"},{label:"brainfuck",permalink:"/queuery/blog/tags/brainfuck"}],title:"Google \u5171\u6709\u30c9\u30e9\u30a4\u30d6\u8a2d\u8a08\u8ad6",readingTime:.635,truncated:!0,prevItem:{title:"BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b",permalink:"/queuery/blog/bigquery-ml-tensorflow"},nextItem:{title:"Stackdriver Logging \u3067\u3067\u304d\u308b\u3053\u3068",permalink:"/queuery/blog/gcp-logging"}},c=[],l={rightToc:c};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(a.b)("p",null,"Google \u30c9\u30e9\u30a4\u30d6\u306e\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u5229\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u304b\u3002\n\u3068\u3066\u3082\u4fbf\u5229\u306a\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u304c\u3001Windows Server \u306e\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d3\u30b9\u306e\u3064\u3082\u308a\u3067\u8a2d\u8a08\u3057\u3066\u30cf\u30de\u3063\u305f\u3053\u3068\u304c\u3042\u308a\u307e\u3057\u305f\u3002\n\u30cf\u30de\u3089\u306a\u3044\u30dd\u30a4\u30f3\u30c8\u306f\u3001Google \u30c9\u30e9\u30a4\u30d6\u306e\u8a2d\u8a08\u7406\u5ff5\u306b\u5f93\u3046\u3053\u3068\u3067\u3059\u3002"))}p.isMDXComponent=!0},201:function(e,r,t){"use strict";t.d(r,"a",(function(){return g})),t.d(r,"b",(function(){return s}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},g=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=p(t),b=n,s=g["".concat(i,".").concat(b)]||g[b]||f[b]||a;return t?o.a.createElement(s,u(u({ref:r},l),{},{components:t})):o.a.createElement(s,u({ref:r},l))}));function s(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);