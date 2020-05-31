(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{197:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(9),i=(r(0),r(201)),a={id:"python-docker",title:"Python \u958b\u767a\u74b0\u5883\u306e Docker \u5316",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["python","docker"]},c={permalink:"/queuery/blog/python-docker",source:"@site/blog/2020-05-11-python-docker.md",description:"Python \u306e\u74b0\u5883 / \u30d1\u30c3\u30b1\u30fc\u30b8\u7ba1\u7406\u8272\u3005\u3042\u308a\u3059\u304e\u554f\u984c",date:"2020-05-11T00:00:00.000Z",tags:[{label:"python",permalink:"/queuery/blog/tags/python"},{label:"docker",permalink:"/queuery/blog/tags/docker"}],title:"Python \u958b\u767a\u74b0\u5883\u306e Docker \u5316",readingTime:.9,truncated:!1,prevItem:{title:"Prefect \u89e6\u3063\u3066\u307f\u305f",permalink:"/queuery/blog/prefect"},nextItem:{title:"BigQuery ML \u3067 Matrix Factorization",permalink:"/queuery/blog/bigquery-ml-matrix-factorization"}},p=[],l={rightToc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"python-\u306e\u74b0\u5883--\u30d1\u30c3\u30b1\u30fc\u30b8\u7ba1\u7406\u8272\u3005\u3042\u308a\u3059\u304e\u554f\u984c"},"Python \u306e\u74b0\u5883 / \u30d1\u30c3\u30b1\u30fc\u30b8\u7ba1\u7406\u8272\u3005\u3042\u308a\u3059\u304e\u554f\u984c"),Object(i.b)("p",null,"Python \u306e\u4eee\u60f3\u74b0\u5883\u3084\u30d1\u30c3\u30b1\u30fc\u30b8\u7ba1\u7406\u5468\u308a\u306e\u30c4\u30fc\u30eb\u306f\u7a2e\u985e\u304c\u591a\u304f\u3066\u3069\u308c\u4f7f\u3063\u305f\u3089\u826f\u3044\u304b\u5206\u304b\u3089\u306a\u3044\u3067\u3059\u306d\u3002\n\u53e4\u53c2\u306e Pip \u6d3e\u3082\u3044\u308c\u3070\u3001\u5b89\u5b9a\u306e Pipenv\u3001toml \u30ab\u30c3\u30b3\u826f\u3044\u304b\u3089 Poetry\u3001Pyflow \u306a\u3069\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pip"),Object(i.b)("li",{parentName:"ul"},"conda"),Object(i.b)("li",{parentName:"ul"},"Pipenv"),Object(i.b)("li",{parentName:"ul"},"Poetry"),Object(i.b)("li",{parentName:"ul"},"Pyflow")),Object(i.b)("p",null,"\u3053\u3053\u306f\u60a9\u307e\u305a\u306b Docker \u306b\u3057\u3066\u3057\u307e\u3044\u307e\u3057\u3087\u3046\u3002\n\u3053\u308c\u3067\u3001\u958b\u767a\u30de\u30b7\u30f3\u3078\u306e\u4f9d\u5b58\u3092 Docker \u306e\u307f\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(i.b)("h1",{id:"dockerfile"},"Dockerfile"),Object(i.b)("p",null,"\u958b\u767a\u304c\u9032\u3093\u3060\u969b\u306b debug \u3068 production \u3067\u30b9\u30c6\u30fc\u30b8\u3092\u5206\u3051\u3084\u3059\u3044\u3088\u3046 pipenv \u304b poetry \u3092\u4f7f\u3044\u307e\u3059\u3002\u3053\u3053\u3067\u306f pipenv \u3092\u4f7f\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dockerfile"}),"FROM python:3.8\n\nRUN mkdir -p /usr/src/app && pip install pipenv\nWORKDIR /usr/src/app\n\nONBUILD COPY Pipfile /usr/src/app/\nONBUILD RUN pipenv install -d\n\nONBUILD COPY . /usr/src/app\n")),Object(i.b)("h1",{id:"makefile"},"Makefile"),Object(i.b)("p",null,"Dockerfile \u3060\u3051\u3067\u306a\u304f\u3001Makefile \u3067\u30e9\u30c3\u30d7\u30b3\u30de\u30f3\u30c9\u3092\u7528\u610f\u3057\u3066\u304a\u304f\u3068\u3001\u958b\u767a\u74b0\u5883\u304b\u3089\u3088\u304f\u4f7f\u3046\u4f5c\u696d\u3092 ",Object(i.b)("inlineCode",{parentName:"p"},"make xxx")," \u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001vet \u3067\u578b\u691c\u67fb\u3001fmt \u3067\u30b3\u30fc\u30c9\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3001doc \u3067\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30d3\u30eb\u30c9\u3001test \u3067\u30c6\u30b9\u30c8\u3092\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u5fc5\u8981\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u3001Pipfile \u306b\u66f8\u3044\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"NAME=docker_example\nLINT_IMAGE=transform_lint\n\nbuild:\n    docker build -t ${NAME} .\n\nvet: build\n    docker run -it --rm ${NAME} pipenv run mypy --ignore-missing-imports /src\n\nfmt: build\n    docker run -it --rm -v $$(pwd):/src ${NAME} pipenv run autoflake -ri /src\n    docker run -it --rm -v $$(pwd):/src ${NAME} pipenv run isort -rc /src\n    docker run -it --rm -v $$(pwd):/src ${NAME} pipenv run black /src\n\ndoc: build\n    docker run -it --rm -v $$(pwd):/src ${NAME} pipenv run mkdocs build /src\n\ntest: build\n    docker run -it --rm ${NAME} pipenv run pytest /src\n\n")),Object(i.b)("h1",{id:"\u304a\u3057\u307e\u3044"},"\u304a\u3057\u307e\u3044"),Object(i.b)("p",null,"Dockerfile \u3068 Makefile \u3092\u4f5c\u3063\u3066\u3001\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5305\u3093\u3067\u3084\u308b\u3053\u3068\u3067\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3\u306b\u4f9d\u5b58\u3057\u306a\u3044\u74b0\u5883\u304c\u3067\u304d\u307e\u3057\u305f\u3002Pipenv \u3067\u3082\u3067\u304d\u307e\u3059\u304c\u3001Makefile \u3067\u30b3\u30de\u30f3\u30c9\u3082\u3064\u3051\u3066\u304a\u304f\u3068\u3001Linux \u74b0\u5883\u3067\u306f ",Object(i.b)("inlineCode",{parentName:"p"},"make xxx")," \u3067\u51e6\u7406\u3092\u30e9\u30c3\u30d7\u3067\u304d\u3066\u6357\u308a\u307e\u3059\u3002"))}u.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(a,".").concat(d)]||b[d]||s[d]||i;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);