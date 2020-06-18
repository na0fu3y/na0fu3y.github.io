(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{158:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return c})),r.d(e,"rightToc",(function(){return u})),r.d(e,"default",(function(){return p}));var n=r(2),a=r(9),i=(r(0),r(208)),o={id:"bigquery-ml-matrix-factorization",title:"BigQuery ML \u3067 Matrix Factorization",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","matrix-factorization"]},c={permalink:"/blog/bigquery-ml-matrix-factorization",editUrl:"https://github.com/na0fu3y/queuery/edit/master/blog/2020-04-23-bigquery-ml-matrix-factorization.md",source:"@site/blog/2020-04-23-bigquery-ml-matrix-factorization.md",description:"BigQuery ML \u306b Matrix Factorization \u304c\u6765\u305f",date:"2020-04-23T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"},{label:"matrix-factorization",permalink:"/blog/tags/matrix-factorization"}],title:"BigQuery ML \u3067 Matrix Factorization",readingTime:1.195,truncated:!0,prevItem:{title:"Python \u958b\u767a\u74b0\u5883\u306e Docker \u5316",permalink:"/blog/python-docker"},nextItem:{title:"BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b",permalink:"/blog/bigquery-ml-tensorflow"}},u=[],l={rightToc:u};function p(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"bigquery-ml-\u306b-matrix-factorization-\u304c\u6765\u305f"},"BigQuery ML \u306b Matrix Factorization \u304c\u6765\u305f"),Object(i.b)("p",null,"\u65e5\u672c\u6642\u9593 2020-04-18 \u306b BigQuery ML \u306e\u65b0\u30e2\u30c7\u30eb Matrix Factorization \u304c",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery-ml/docs/release-notes#April_17_2020"}),"\u30d9\u30fc\u30bf\u30ea\u30ea\u30fc\u30b9"),"\u3055\u308c\u307e\u3057\u305f\u3002"),Object(i.b)("h1",{id:"matrix-factorization-\u3068\u306f"},"Matrix Factorization \u3068\u306f"),Object(i.b)("p",null,"user \u3068 item \u3092\u5165\u529b\u3068\u3057\u3066\u3001\u4f3c\u305f rating \u50be\u5411\u306e\u3042\u308b\u4eba\u3092\u53c2\u8003\u306b\u672a\u77e5\u306e rating \u3092\u4e88\u60f3\u3059\u308b\u3082\u306e\u3067\u3059\u3002\u4f75\u58f2\u3057\u305d\u3046\u306a\u5546\u54c1\u3092\u63a8\u85a6\u3059\u308b\u969b\u306b\u4f7f\u3063\u305f\u308a\u3067\u304d\u307e\u3059\u3002"))}p.isMDXComponent=!0},208:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return g}));var n=r(0),a=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=a.a.createContext({}),p=function(t){var e=a.a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},m=function(t){var e=p(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},f=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),m=p(r),f=n,g=m["".concat(o,".").concat(f)]||m[f]||b[f]||i;return r?a.a.createElement(g,c(c({ref:e},l),{},{components:r})):a.a.createElement(g,c({ref:e},l))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);