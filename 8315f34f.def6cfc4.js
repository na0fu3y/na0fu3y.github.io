(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{170:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(9),a=(t(0),t(201)),i={id:"bigquery-ml-tensorflow",title:"BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","tensorflow"]},u={permalink:"/queuery/blog/bigquery-ml-tensorflow",source:"@site/blog/2020-02-16-bigquery-ml-tensorflow.md",description:"\u306f\u3058\u3081\u306b",date:"2020-02-16T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/queuery/blog/tags/bigquery"},{label:"tensorflow",permalink:"/queuery/blog/tags/tensorflow"}],title:"BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b",readingTime:4.035,truncated:!0,prevItem:{title:"BigQuery ML \u3067 Matrix Factorization",permalink:"/queuery/blog/bigquery-ml-matrix-factorization"},nextItem:{title:"Google \u5171\u6709\u30c9\u30e9\u30a4\u30d6\u8a2d\u8a08\u8ad6",permalink:"/queuery/blog/google-drive-design"}},l=[],c={rightToc:l};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(a.b)("p",null,"BigQuery ML \u306f ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery-ml/docs/making-predictions-with-imported-tensorflow-models"}),"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f TensorFlow \u30e2\u30c7\u30eb\u3067\u306e\u4e88\u6e2c")," \u304c\u3067\u304d\u307e\u3059\u3002\nBigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b\u305f\u3081\u306b\u8272\u3005\u306a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u5f80\u5fa9\u3057\u305f\u306e\u3067\u3001\u307e\u3068\u3081\u3066\u304a\u304d\u307e\u3059\u3002\nBigQuery ML \u3092\u4f7f\u3063\u3066 TensorFlow \u30e2\u30c7\u30eb\u3092\u7ba1\u7406\u3067\u304d\u308c\u3070\u3001\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u306e\u8ee2\u9001\u3092\u7701\u7565\u3057\u305f\u308a\u3001\n\u30e2\u30c7\u30eb\u3084\u5b9f\u884c\u74b0\u5883\u306e\u7ba1\u7406\u3092 BigQuery \u3068 Cloud Storage \u306b\u4efb\u305b\u305f\u308a\u3067\u304d\u307e\u3059\u3002"),Object(a.b)("p",null,"\u307e\u305f SavedModel \u5f62\u5f0f\u306f\u3001\u4e88\u6e2c\u306b\u9650\u3089\u305a\u6570\u5f0f\u3092\u5165\u308c\u305f\u308a\u3067\u304d\u308b\u306e\u3067\u3001brainfuck \u304c\u5b9f\u88c5\u3067\u304d\u308b\u304b\u904a\u3093\u3067\u307f\u307e\u3057\u305f\uff08\u6557\u5317\uff09\u3002"))}p.isMDXComponent=!0},201:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return g}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=p(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),b=n,g=s["".concat(i,".").concat(b)]||s[b]||f[b]||a;return t?o.a.createElement(g,u(u({ref:r},c),{},{components:t})):o.a.createElement(g,u({ref:r},c))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);