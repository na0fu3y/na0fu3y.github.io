(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(1),l=n(9),i=(n(0),n(203)),o={id:"google-drive-design",title:"Google \u5171\u6709\u30c9\u30e9\u30a4\u30d6\u8a2d\u8a08\u8ad6",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","brainfuck"]},c={permalink:"/blog/google-drive-design",source:"@site/blog/2020-01-30-google-drive-design.md",description:"# \u306f\u3058\u3081\u306b",date:"2020-01-30T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"},{label:"brainfuck",permalink:"/blog/tags/brainfuck"}],title:"Google \u5171\u6709\u30c9\u30e9\u30a4\u30d6\u8a2d\u8a08\u8ad6",truncated:!0,prevItem:{title:"BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b",permalink:"/blog/bigquery-ml-tensorflow"},nextItem:{title:"Stackdriver Logging \u3067\u3067\u304d\u308b\u3053\u3068",permalink:"/blog/gcp-logging"}},b=[{value:"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u5171\u6709\u6a29\u9650\u3092\u8a2d\u5b9a\u3067\u304d\u306a\u3044",id:"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u5171\u6709\u6a29\u9650\u3092\u8a2d\u5b9a\u3067\u304d\u306a\u3044",children:[]},{value:"Google \u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306f\u5171\u6709\u6a29\u9650\u3054\u3068\u306b\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u3092\u4f5c\u308b",id:"google-\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306f\u5171\u6709\u6a29\u9650\u3054\u3068\u306b\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u3092\u4f5c\u308b",children:[]},{value:"\u30d5\u30a1\u30a4\u30eb\u3092\u500b\u4eba\u3067\u306f\u306a\u304f\u30c1\u30fc\u30e0\u3084\u7d44\u7e54\u304c\u6240\u6709\u3067\u304d\u308b",id:"\u30d5\u30a1\u30a4\u30eb\u3092\u500b\u4eba\u3067\u306f\u306a\u304f\u30c1\u30fc\u30e0\u3084\u7d44\u7e54\u304c\u6240\u6709\u3067\u304d\u308b",children:[]},{value:"\u30d5\u30a9\u30eb\u30c0\u30fb\u30d5\u30a1\u30a4\u30eb\u306e\u7ba1\u7406\u3092\u307f\u3093\u306a\u3067\u6539\u5584\u3067\u304d\u308b",id:"\u30d5\u30a9\u30eb\u30c0\u30fb\u30d5\u30a1\u30a4\u30eb\u306e\u7ba1\u7406\u3092\u307f\u3093\u306a\u3067\u6539\u5584\u3067\u304d\u308b",children:[]},{value:"\u95b2\u89a7\u8005",id:"\u95b2\u89a7\u8005",children:[{value:"\u500b\u4eba",id:"\u500b\u4eba",children:[]},{value:"\u6a5f\u5bc6\u95a2\u4fc2\u8005\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3001\u30c1\u30fc\u30e0\u3001\u90e8\u9580\u3001\u5f79\u54e1\u3001\u6b63\u793e\u54e1\uff09",id:"\u6a5f\u5bc6\u95a2\u4fc2\u8005\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3001\u30c1\u30fc\u30e0\u3001\u90e8\u9580\u3001\u5f79\u54e1\u3001\u6b63\u793e\u54e1\uff09",children:[]},{value:"\u793e\u5185",id:"\u793e\u5185",children:[]},{value:"\u793e\u5916\u3092\u542b\u3080\u6a5f\u5bc6\u95a2\u4fc2\u8005",id:"\u793e\u5916\u3092\u542b\u3080\u6a5f\u5bc6\u95a2\u4fc2\u8005",children:[]}]},{value:"\u8a2d\u8a08\u89b3\u70b9",id:"\u8a2d\u8a08\u89b3\u70b9",children:[{value:"grep \u3057\u3084\u3059\u304f\u3059\u308b",id:"grep-\u3057\u3084\u3059\u304f\u3059\u308b",children:[]},{value:"MECE \u306b\u3059\u308b",id:"mece-\u306b\u3059\u308b",children:[]},{value:"\u968e\u5c64\u306f\u6d45\u304f\u3057\u305f\u3044",id:"\u968e\u5c64\u306f\u6d45\u304f\u3057\u305f\u3044",children:[]},{value:"\u671f\u4e2d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u8ffd\u52a0\u306b\u5bfe\u5fdc\u3057\u305f\u3044",id:"\u671f\u4e2d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u8ffd\u52a0\u306b\u5bfe\u5fdc\u3057\u305f\u3044",children:[]}]},{value:"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306b\u4fdd\u5b58\u3067\u304d\u308b\u30d5\u30a1\u30a4\u30eb\u3068\u30d5\u30a9\u30eb\u30c0\u306f 400,000 \u500b\u307e\u3067",id:"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306b\u4fdd\u5b58\u3067\u304d\u308b\u30d5\u30a1\u30a4\u30eb\u3068\u30d5\u30a9\u30eb\u30c0\u306f-400000-\u500b\u307e\u3067",children:[]},{value:"\u500b\u3005\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u30de\u30a4\u30c9\u30e9\u30a4\u30d6\u304a\u3088\u3073\u3059\u3079\u3066\u306e\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u308b\u306e\u306f\u30011 \u65e5\u3042\u305f\u308a 750 GB \u307e\u3067",id:"\u500b\u3005\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u30de\u30a4\u30c9\u30e9\u30a4\u30d6\u304a\u3088\u3073\u3059\u3079\u3066\u306e\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u308b\u306e\u306f\u30011-\u65e5\u3042\u305f\u308a-750-gb-\u307e\u3067",children:[]},{value:"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u5185\u306e\u30d5\u30a9\u30eb\u30c0\u306f\u3001\u6700\u5927 20 \u30ec\u30d9\u30eb\u306e\u30cd\u30b9\u30c8\u307e\u3067",id:"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u5185\u306e\u30d5\u30a9\u30eb\u30c0\u306f\u3001\u6700\u5927-20-\u30ec\u30d9\u30eb\u306e\u30cd\u30b9\u30c8\u307e\u3067",children:[]}],a={rightToc:b};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(i.b)("p",null,"Google \u30c9\u30e9\u30a4\u30d6\u306e\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u5229\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u304b\u3002\n\u3068\u3066\u3082\u4fbf\u5229\u306a\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u304c\u3001Windows Server \u306e\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d3\u30b9\u306e\u3064\u3082\u308a\u3067\u8a2d\u8a08\u3057\u3066\u30cf\u30de\u3063\u305f\u3053\u3068\u304c\u3042\u308a\u307e\u3057\u305f\u3002\n\u30cf\u30de\u3089\u306a\u3044\u30dd\u30a4\u30f3\u30c8\u306f\u3001Google \u30c9\u30e9\u30a4\u30d6\u306e\u8a2d\u8a08\u7406\u5ff5\u306b\u5f93\u3046\u3053\u3068\u3067\u3059\u3002"),Object(i.b)("h1",{id:"\u91cd\u8981\u306a\u30dd\u30a4\u30f3\u30c8"},"\u91cd\u8981\u306a\u30dd\u30a4\u30f3\u30c8"),Object(i.b)("p",null,"\u300c",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.google.com/a/answer/7212025"}),"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u3068\u306f"),"\u300d\u5168\u3066\u306f\u516c\u5f0f\u306e\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u8a70\u307e\u3063\u3066\u3044\u307e\u3059\u3002\u719f\u8aad\u3057\u307e\u3057\u3087\u3046\u3002\u7279\u306b\u5dee\u7570\u306e\u5927\u304d\u3044\u30dd\u30a4\u30f3\u30c8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),Object(i.b)("h2",{id:"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u5171\u6709\u6a29\u9650\u3092\u8a2d\u5b9a\u3067\u304d\u306a\u3044"},"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u5171\u6709\u6a29\u9650\u3092\u8a2d\u5b9a\u3067\u304d\u306a\u3044"),Object(i.b)("p",null,"\u7ba1\u7406\u8005\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u7ba1\u7406\u8005\u3001\u6295\u7a3f\u8005\u306e\u30e1\u30f3\u30d0\u30fc\u306f\u3001\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u5185\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u5171\u6709\u3067\u304d\u307e\u3059\u3002"),Object(i.b)("p",null,"\u30d5\u30a1\u30a4\u30eb\u306f Google \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u9593\u3067\u306e\u307f\u5171\u6709\u3067\u304d\u307e\u3059\u3002\n\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30d5\u30a9\u30eb\u30c0\u3092\u5171\u6709\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\n\u30de\u30a4\u30c9\u30e9\u30a4\u30d6\u3068\u7570\u306a\u308a\u3001\u5171\u6709\u8a2d\u5b9a\u306f\u30d5\u30a1\u30a4\u30eb\u5358\u4f4d\u306e\u307f\u306e\u305f\u3081\u3001\u4e0b\u4f4d\u30d5\u30a9\u30eb\u30c0\u306b\u6a29\u9650\u3092\u7d99\u627f\u3057\u305f\u308a\u3067\u304d\u307e\u305b\u3093\u3002"),Object(i.b)("h2",{id:"google-\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306f\u5171\u6709\u6a29\u9650\u3054\u3068\u306b\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u3092\u4f5c\u308b"},"Google \u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306f\u5171\u6709\u6a29\u9650\u3054\u3068\u306b\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u3092\u4f5c\u308b"),Object(i.b)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3054\u3068\u306b\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u3092\u4f5c\u6210\u3057\u3001\u3059\u3079\u3066\u306e\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u306b\u6700\u3082\u9ad8\u3044\u30a2\u30af\u30bb\u30b9\u30ec\u30d9\u30eb\uff08\u30d5\u30eb\u30a2\u30af\u30bb\u30b9\u6a29\u306a\u3069\uff09\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"),Object(i.b)("p",null,"\u3053\u308c\u3092\u77e5\u3089\u305a\u306b\u3001Windows Server \u306e\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d3\u30b9\u3068\u540c\u3058\u3088\u3046\u306b\u968e\u5c64\u3067\u6a29\u9650\u7d99\u627f\u3067\u304d\u308b\u3068\u8003\u3048\u3066\u3044\u308b\u3068\u5931\u6557\u3057\u307e\u3059\u3002\n\u6a29\u9650\u304c\u5206\u96e2\u3055\u308c\u308b\u7d44\u7e54\u306f\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u3082\u5206\u96e2\u3057\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("h1",{id:"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306b\u79fb\u884c\u3059\u308b\u7406\u7531"},"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306b\u79fb\u884c\u3059\u308b\u7406\u7531"),Object(i.b)("p",null,"\u4ee5\u4e0b\u306e 2 \u70b9\u304c\u5927\u304d\u3044\u30e1\u30ea\u30c3\u30c8\u3060\u3068\u611f\u3058\u3066\u3044\u307e\u3059\u3002"),Object(i.b)("h2",{id:"\u30d5\u30a1\u30a4\u30eb\u3092\u500b\u4eba\u3067\u306f\u306a\u304f\u30c1\u30fc\u30e0\u3084\u7d44\u7e54\u304c\u6240\u6709\u3067\u304d\u308b"},"\u30d5\u30a1\u30a4\u30eb\u3092\u500b\u4eba\u3067\u306f\u306a\u304f\u30c1\u30fc\u30e0\u3084\u7d44\u7e54\u304c\u6240\u6709\u3067\u304d\u308b"),Object(i.b)("p",null,"\u5f93\u696d\u54e1\u304c\u96e2\u8077\u3057\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u524a\u9664\u3055\u308c\u3066\u3082\u3001\u30d5\u30a1\u30a4\u30eb\u306f\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u5185\u306b\u6b8b\u308a\u307e\u3059\u3002"),Object(i.b)("h2",{id:"\u30d5\u30a9\u30eb\u30c0\u30fb\u30d5\u30a1\u30a4\u30eb\u306e\u7ba1\u7406\u3092\u307f\u3093\u306a\u3067\u6539\u5584\u3067\u304d\u308b"},"\u30d5\u30a9\u30eb\u30c0\u30fb\u30d5\u30a1\u30a4\u30eb\u306e\u7ba1\u7406\u3092\u307f\u3093\u306a\u3067\u6539\u5584\u3067\u304d\u308b"),Object(i.b)("p",null,"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306e\u3059\u3079\u3066\u306e\u30e1\u30f3\u30d0\u30fc\u306b\u540c\u3058\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u540c\u3058\u6a29\u9650\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),Object(i.b)("h1",{id:"\u5171\u6709\u30d5\u30a9\u30eb\u30c0\u8a2d\u8a08"},"\u5171\u6709\u30d5\u30a9\u30eb\u30c0\u8a2d\u8a08"),Object(i.b)("p",null,"\u307f\u306a\u3055\u3093\u306f\u5171\u6709\u30d5\u30a9\u30eb\u30c0\u306e\u8a2d\u8a08\u306f\u3069\u306e\u3088\u3046\u306b\u884c\u3046\u3067\u3057\u3087\u3046\u304b\u3002\n\u3053\u3053\u3067\u306f\u3001\u95b2\u89a7\u8005\u3068\u8a2d\u8a08\u89b3\u70b9\u3092\u6d17\u3044\u51fa\u3057\u3066\u307f\u307e\u3057\u305f\u3002"),Object(i.b)("h2",{id:"\u95b2\u89a7\u8005"},"\u95b2\u89a7\u8005"),Object(i.b)("h3",{id:"\u500b\u4eba"},"\u500b\u4eba"),Object(i.b)("p",null,"\u30de\u30a4\u30c9\u30e9\u30a4\u30d6\u3001\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306e\u500b\u4eba\u30d5\u30a9\u30eb\u30c0\u3092\u4f7f\u3044\u307e\u3059\u3002"),Object(i.b)("h3",{id:"\u6a5f\u5bc6\u95a2\u4fc2\u8005\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3001\u30c1\u30fc\u30e0\u3001\u90e8\u9580\u3001\u5f79\u54e1\u3001\u6b63\u793e\u54e1\uff09"},"\u6a5f\u5bc6\u95a2\u4fc2\u8005\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3001\u30c1\u30fc\u30e0\u3001\u90e8\u9580\u3001\u5f79\u54e1\u3001\u6b63\u793e\u54e1\uff09"),Object(i.b)("p",null,"\u6a5f\u5bc6\u95a2\u4fc2\u8005\u30c1\u30fc\u30e0\u3054\u3068\u306b\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u3092\u4f5c\u308a\u307e\u3059\u3002\nGoogle \u30b0\u30eb\u30fc\u30d7\u5358\u4f4d\u3067\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306e\u6a29\u9650\u3092\u5272\u308a\u5f53\u3066\u308b\u306e\u304c\u304a\u3059\u3059\u3081\u3067\u3059\u3002\n\u3053\u308c\u306b\u3088\u308a\u3001\u30e1\u30f3\u30d0\u30fc\u306e\u5909\u66f4\u304c\u5c11\u3057\u697d\u306b\u306a\u308b\u3068\u3068\u3082\u306b\u3001Google Cloud Platform \u306e\u6a29\u9650\u30c1\u30fc\u30e0\u3092\u4f7f\u3044\u307e\u308f\u305b\u307e\u3059\u3002"),Object(i.b)("h3",{id:"\u793e\u5185"},"\u793e\u5185"),Object(i.b)("p",null,"\u4e00\u756a\u5927\u304d\u306a\u6a29\u9650\u5358\u4f4d\u306e\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u3092\u4f5c\u308a\u307e\u3059\u3002\n\u500b\u4eba\u30d5\u30a9\u30eb\u30c0\u3092\u542b\u3081\u3001\u307f\u3093\u306a\u3067\u5171\u6709\u3057\u3066\u826f\u3044\u60c5\u5831\u306f\u53ef\u80fd\u306a\u304b\u304e\u308a\u3001\u3053\u3053\u306b\u7f6e\u304d\u307e\u3059\u3002"),Object(i.b)("h3",{id:"\u793e\u5916\u3092\u542b\u3080\u6a5f\u5bc6\u95a2\u4fc2\u8005"},"\u793e\u5916\u3092\u542b\u3080\u6a5f\u5bc6\u95a2\u4fc2\u8005"),Object(i.b)("p",null,"\u3053\u308c\u3082\u5225\u9014\u3001\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u3092\u4f5c\u308a\u307e\u3059\u3002Gmail \u30a2\u30c9\u30ec\u30b9\u306e\u307f\u62db\u5f85\u53ef\u80fd\u306a\u305f\u3081\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f\u5225\u9014\u4f5c\u3063\u3066\u3082\u3089\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),Object(i.b)("h2",{id:"\u8a2d\u8a08\u89b3\u70b9"},"\u8a2d\u8a08\u89b3\u70b9"),Object(i.b)("h3",{id:"grep-\u3057\u3084\u3059\u304f\u3059\u308b"},"grep \u3057\u3084\u3059\u304f\u3059\u308b"),Object(i.b)("p",null,"API \u304b\u3089\u691c\u7d22\u3067\u304d\u308b\u3053\u3068\u3067\u6700\u5927\u9650\u306b\u6d3b\u7528\u3057\u3066\u3044\u305f\u3060\u304d\u305f\u3044\u306e\u3067\u3001\u91cd\u8981\u306a\u89b3\u70b9\u3067\u3059\u3002\n\u88dc\u5b8c\u304c\u52b9\u304d\u3084\u3059\u3044\u3088\u3046\u306b\u3001\u30d5\u30a9\u30eb\u30c0\u3084\u30d5\u30a1\u30a4\u30eb\u540d\u306f\u534a\u89d2\u30b9\u30da\u30fc\u30b9\u3084\u30cf\u30a4\u30d5\u30f3\u3092\u907f\u3051\u3066\u3001\u30a2\u30f3\u30c0\u30fc\u30b9\u30b3\u30a2\u3092\u5229\u7528\u3057\u307e\u3059\u3002\n\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u9593\u3067\u3082\u3001\u3042\u308b\u7a0b\u5ea6\u307e\u305f\u3044\u3067\u691c\u7d22\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u7528\u610f\u3059\u308b\u306e\u3082\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),Object(i.b)("h3",{id:"mece-\u306b\u3059\u308b"},"MECE \u306b\u3059\u308b"),Object(i.b)("p",null,"\u3042\u307e\u308a\u91cd\u8907\u7bc4\u56f2\u304c\u5927\u304d\u3044\u5207\u308a\u65b9\u306f\u4e71\u7acb\u306e\u5143\u306b\u306a\u308b\u305f\u3081\u3001\u597d\u307e\u3057\u304f\u306a\u3044\u3067\u3059\u3002\n\u6a29\u9650\u306e\u5207\u308a\u5206\u3051\u6642\u306b\u306f\u3084\u3080\u3092\u5f97\u306a\u3044\u3067\u3059\u304c\u3001\u5168\u793e\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306f MECE \u306b\u306a\u308b\u3088\u3046\u306b\u610f\u8b58\u3057\u3066\u5207\u308a\u5206\u3051\u307e\u3059\u3002\n\u90e8\u9580\u30d5\u30a9\u30eb\u30c0\u3067\u90e8\u9580\u3092\u5207\u308a\u3001\u500b\u4eba\u30d5\u30a9\u30eb\u30c0\u3067\u500b\u4eba\u3092\u5207\u308a\u3001\u6848\u4ef6\u30d5\u30a9\u30eb\u30c0\u3067\u6848\u4ef6\u3092\u5207\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("h3",{id:"\u968e\u5c64\u306f\u6d45\u304f\u3057\u305f\u3044"},"\u968e\u5c64\u306f\u6d45\u304f\u3057\u305f\u3044"),Object(i.b)("p",null,"Google \u30c9\u30e9\u30a4\u30d6\u306e\u691c\u7d22\u306f\u5f37\u529b\u3067\u3059\u3002\u6574\u7406\u306e\u305f\u3081\u306b\u6df1\u304f\u3057\u3059\u304e\u308b\u3088\u308a\u3001\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u3061\u3083\u3093\u3068\u8003\u3048\u308b\u65b9\u304c\u6709\u52b9\u3067\u3059\u3002\n\u3053\u3053\u3082 Windows Server \u306e\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d3\u30b9\u3068\u30ae\u30e3\u30c3\u30d7\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u6163\u308c\u307e\u3057\u3087\u3046\u3002\u610f\u8b58\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u3064\u3051\u308b\u3088\u3046\u306b\u5168\u793e\u306b\u5e03\u6559\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("h3",{id:"\u671f\u4e2d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u8ffd\u52a0\u306b\u5bfe\u5fdc\u3057\u305f\u3044"},"\u671f\u4e2d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u8ffd\u52a0\u306b\u5bfe\u5fdc\u3057\u305f\u3044"),Object(i.b)("p",null,"\u30bd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306e\u9023\u756a\u6587\u5316\u304c\u3042\u308b\u5834\u5408\u306b\u306f\u3001\u6700\u4e0a\u4f4d 99 \u3084\u6700\u4e0b\u4f4d 00 \u3092\u7a7a\u3051\u3066\u304a\u304d\u3001\u57cb\u307e\u3063\u305f\u3089\u68da\u5378\u3057\u306e\u969b\u306b\u518d\u8a2d\u8a08\u3057\u307e\u3057\u3087\u3046\u3002\nGoogle \u30c9\u30e9\u30a4\u30d6\u306e\u691c\u7d22\u6a5f\u80fd\u306b\u4efb\u305b\u3066\u3001\u9023\u756a\u6587\u5316\u3092\u3084\u3081\u308b\u306e\u3082\u4e00\u6848\u3067\u3059\u3002"),Object(i.b)("h1",{id:"\u5f15\u3063\u639b\u304b\u308a\u3084\u3059\u3044\u5236\u7d04\u4e8b\u9805"},"\u5f15\u3063\u639b\u304b\u308a\u3084\u3059\u3044\u5236\u7d04\u4e8b\u9805"),Object(i.b)("h2",{id:"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306b\u4fdd\u5b58\u3067\u304d\u308b\u30d5\u30a1\u30a4\u30eb\u3068\u30d5\u30a9\u30eb\u30c0\u306f-400000-\u500b\u307e\u3067"},"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306b\u4fdd\u5b58\u3067\u304d\u308b\u30d5\u30a1\u30a4\u30eb\u3068\u30d5\u30a9\u30eb\u30c0\u306f 400,000 \u500b\u307e\u3067"),Object(i.b)("p",null,"\u8d85\u5927\u91cf\u306e\u500b\u6570\u306e\u30c7\u30fc\u30bf\u304c\u3042\u308b\u5834\u5408\u306b\u306f\u3001Cloud Storage \u3092\u5229\u7528\u3057\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("h2",{id:"\u500b\u3005\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u30de\u30a4\u30c9\u30e9\u30a4\u30d6\u304a\u3088\u3073\u3059\u3079\u3066\u306e\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u308b\u306e\u306f\u30011-\u65e5\u3042\u305f\u308a-750-gb-\u307e\u3067"},"\u500b\u3005\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u30de\u30a4\u30c9\u30e9\u30a4\u30d6\u304a\u3088\u3073\u3059\u3079\u3066\u306e\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u308b\u306e\u306f\u30011 \u65e5\u3042\u305f\u308a 750 GB \u307e\u3067"),Object(i.b)("p",null,"\u8d85\u5927\u91cf\u306e\u5bb9\u91cf\u306e\u30c7\u30fc\u30bf\u304c\u3042\u308b\u5834\u5408\u306b\u306f\u3001Cloud Storage \u3092\u5229\u7528\u3057\u307e\u3057\u3087\u3046\u3002"),Object(i.b)("h2",{id:"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u5185\u306e\u30d5\u30a9\u30eb\u30c0\u306f\u3001\u6700\u5927-20-\u30ec\u30d9\u30eb\u306e\u30cd\u30b9\u30c8\u307e\u3067"},"\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u5185\u306e\u30d5\u30a9\u30eb\u30c0\u306f\u3001\u6700\u5927 20 \u30ec\u30d9\u30eb\u306e\u30cd\u30b9\u30c8\u307e\u3067"),Object(i.b)("p",null,"\u8a2d\u8a08\u3092\u898b\u76f4\u3057\u307e\u3057\u3087\u3046\u3002\u30d5\u30a1\u30a4\u30eb\u540d\u304c\u6b63\u3057\u304f\u3064\u3044\u3066\u3044\u308c\u3070\u3001\u30d5\u30a9\u30eb\u30c0\u3067\u968e\u5c64\u5316\u3057\u306a\u304f\u3066\u826f\u3044\u30b1\u30fc\u30b9\u3082\u3042\u308a\u307e\u3059\u3002"),Object(i.b)("h1",{id:"\u304a\u308f\u308a\u306b"},"\u304a\u308f\u308a\u306b"),Object(i.b)("p",null,"\u5177\u4f53\u7684\u306a\u8a2d\u8a08\u306f\u7d44\u7e54\u306b\u4f9d\u308b\u305f\u3081\u7701\u7565\u3057\u307e\u3059\u304c\u3001\u3053\u306e\u89b3\u70b9\u3067\u8a2d\u8a08\u3059\u308c\u3070\u5927\u304d\u304f\u5931\u6557\u3059\u308b\u3053\u3068\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u3002\n\u52b9\u7387\u7684\u306a\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u8a2d\u8a08\u304c\u3067\u304d\u305f\u3089\u3001\u305c\u3072\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),l=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=l.a.createContext({}),u=function(e){var t=l.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return l.a.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},g=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,a=b(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,O=d["".concat(o,".").concat(g)]||d[g]||p[g]||i;return n?l.a.createElement(O,c({ref:t},a,{components:n})):l.a.createElement(O,c({ref:t},a))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var a=2;a<i;a++)o[a]=n[a];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);