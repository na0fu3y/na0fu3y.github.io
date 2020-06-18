(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(208)),i={id:"numerical-data-types-in-bigquery",title:"BigQuery \u6570\u5024\u578b",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery"]},u={permalink:"/blog/numerical-data-types-in-bigquery",editUrl:"https://github.com/na0fu3y/queuery/edit/master/blog/2020-01-23-numerical-data-types-in-bigquery.md",source:"@site/blog/2020-01-23-numerical-data-types-in-bigquery.md",description:"\u306f\u3058\u3081\u306b",date:"2020-01-23T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"}],title:"BigQuery \u6570\u5024\u578b",readingTime:1.325,truncated:!0,prevItem:{title:"AutoML Tables \u63a8\u8ad6\u7d50\u679c\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u5927\u6383\u9664",permalink:"/blog/automl-tables-dataset-cleaner"},nextItem:{title:"\u5b89\u3044\u901f\u3044\u65e8\u3044 BigQuery \u306e 19 \u306e\u6700\u9069\u5316\u6cd5",permalink:"/blog/bigquery-cost-performance-tuning"}},c=[],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#numeric-types"}),"\u6570\u5024\u578b")," \u306f\u3001\u6700\u3082\u4f7f\u3046\u30c7\u30fc\u30bf\u578b\u3068\u884c\u3063\u3066\u3082\u904e\u8a00\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u307e\u305a\u306f\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u307f\u6f01\u308a\u307e\u3057\u3087\u3046\u3002"))}p.isMDXComponent=!0},208:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,m=s["".concat(i,".").concat(f)]||s[f]||b[f]||o;return r?a.a.createElement(m,u(u({ref:t},l),{},{components:r})):a.a.createElement(m,u({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);