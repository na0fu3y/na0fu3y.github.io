(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},f=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),s=n,m=f["".concat(c,".").concat(s)]||f[s]||b[s]||o;return r?a.a.createElement(m,u(u({ref:t},l),{},{components:r})):a.a.createElement(m,u({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(140)),c={id:"bq-fun-slack",title:"BQ FUN Slack\u3092\u7acb\u3061\u4e0a\u3052\u305f\u8a71",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery"]},u={permalink:"/blog/2020/12/25/bq-fun-slack",editUrl:"https://github.com/na0fu3y/queuery/edit/master/blog/2020-12-25-bq-fun-slack.md",source:"@site/blog/2020-12-25-bq-fun-slack.md",description:"BigQuery Advent Calendar 2020\u6700\u7d42\u65e5\u300125\u65e5\u76ee\u306e\u30dd\u30a8\u30e0\u3067\u3059\u3002",date:"2020-12-25T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"}],title:"BQ FUN Slack\u3092\u7acb\u3061\u4e0a\u3052\u305f\u8a71",readingTime:.53,truncated:!0,nextItem:{title:"Prefect \u89e6\u3063\u3066\u307f\u305f",permalink:"/blog/2020/05/11/prefect"}},i=[],l={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://qiita.com/advent-calendar/2020/bigquery"}),"BigQuery Advent Calendar 2020"),"\u6700\u7d42\u65e5\u300125\u65e5\u76ee\u306e\u30dd\u30a8\u30e0\u3067\u3059\u3002"),Object(o.b)("p",null,"\u79c1\u306f\u4eca\u56de\u521d\u3081\u3066\u3001\u30a2\u30c9\u30d9\u30f3\u30c8\u30ab\u30ec\u30f3\u30c0\u30fc\u3092\u7acb\u3066\u308b\u7d4c\u9a13\u3092\u3057\u307e\u3057\u305f\u304c\u300125\u65e5\u57cb\u307e\u308b",Object(o.b)("strong",{parentName:"p"},"BigQuery\u306e\u6280\u8853\u305d\u306e\u3082\u306e\u3001\u53d6\u308a\u5dfb\u304f\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3001\u3069\u3061\u3089\u3082\u7d20\u6674\u3089\u3057\u3044"),"\u3082\u306e\u3060\u3068\u601d\u3044\u307e\u3057\u305f\u3002\u5b9f\u969b\u7acb\u3066\u306a\u3051\u308c\u3070\u300125\u8a18\u4e8b\u304c\u57cb\u3082\u308c\u3066\u3044\u305f\u306e\u304b\u3068\u601d\u3046\u3068\u611f\u6168\u6df1\u3044\u3067\u3059\u3002"))}p.isMDXComponent=!0}}]);