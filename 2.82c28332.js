(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{208:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(226),l=a(204),o=a(210),i="",s="dark",u=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):i),r=a[0],c=a[1],o=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),u=Object(n.useCallback)((function(){c(i),o(i)}),[]),d=Object(n.useCallback)((function(){c(s),o(s)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?s:i)}))}),[]),{isDarkTheme:r===s,setLightTheme:u,setDarkTheme:d}},d=a(230);var h=function(e){var t=u(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},f=a(1),m=(a(227),a(248),a(9)),v=a(205),b=a(220),p=(a(55),a(24),a(20),a(21),a(80),a(206)),g=a.n(p),k=a(221),E=(a(129),function(e){var t=Object(n.useState)(!1),c=t[0],o=t[1],i=Object(n.useRef)(null),s=Object(l.a)().siteConfig,u=(void 0===s?{}:s).themeConfig.algolia,d=Object(k.b)();var h=function(e){void 0===e&&(e=!0),c||Promise.all([a.e(68).then(a.t.bind(null,314,7)),a.e(46).then(a.t.bind(null,315,7))]).then((function(t){var a=t[0].default;o(!0),window.docsearch=a,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;d.push(r)}}),e&&i.current.focus()}(e)}))},f=Object(n.useCallback)((function(){h(),c&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),m=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=Object(n.useCallback)((function(e){var t="mouseover"!==e.type;h(t)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:g()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:g()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:v,onFocus:v,onBlur:m,ref:i}))}),_=a(251),y=a.n(_),O=a(130),j=a.n(O),w=function(){return r.a.createElement("span",{className:g()(j.a.toggle,j.a.moon)})},C=function(){return r.a.createElement("span",{className:g()(j.a.toggle,j.a.sun)})},N=function(e){var t=Object(l.a)().isClient;return r.a.createElement(y.a,Object(f.a)({disabled:!t,icons:{checked:r.a.createElement(w,null),unchecked:r.a.createElement(C,null)}},e))},S=a(231);var T=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},x=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),l=c[0],o=c[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),h=d[0],f=d[1],m=Object(n.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]),v=Object(k.c)(),b=T(v.hash),p=b[0],g=b[1],E=function(){var e=window.pageYOffset||document.documentElement.scrollTop;if(!(e<h)){if(l)return o(!1),r(!1),void u(e);var t=document.documentElement.scrollHeight-h,a=window.innerHeight;s&&e>s?r(!1):e+a<t&&r(!0),u(e)}};return Object(n.useEffect)((function(){if(e)return window.addEventListener("scroll",E),function(){window.removeEventListener("scroll",E)}}),[s,h]),Object(n.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(n.useEffect)((function(){e&&p&&o(!0)}),[p]),{navbarRef:m,isNavbarVisible:a}},B=a(232),M=a(131),D=a.n(M);function L(e){var t=e.activeBasePath,a=e.to,n=e.href,c=e.label,l=(e.position,Object(m.a)(e,["activeBasePath","to","href","label","position"])),i=Object(o.a)(a),s=Object(o.a)(t);return r.a.createElement(v.a,Object(f.a)({className:"navbar__item navbar__link"},n?{target:"_blank",rel:"noopener noreferrer",href:n}:Object.assign({activeClassName:"navbar__link--active",to:i},t?{isActive:function(e,t){return t.pathname.startsWith(s)}}:null),l),c)}var P=function(){var e,t,a=Object(l.a)(),c=a.siteConfig,i=void 0===c?{}:c,s=a.isClient,u=i.baseUrl,d=i.themeConfig,h=void 0===d?{}:d,m=h.navbar,p=void 0===m?{}:m,k=h.disableDarkMode,_=void 0!==k&&k,y=p.title,O=p.logo,j=void 0===O?{}:O,w=p.links,C=void 0===w?[]:w,T=p.hideOnScroll,M=void 0!==T&&T,P=Object(n.useState)(!1),F=P[0],I=P[1],X=Object(n.useState)(!1),R=X[0],H=X[1],A=Object(S.a)(),K=A.isDarkTheme,V=A.setLightTheme,Y=A.setDarkTheme,q=x(M),J=q.navbarRef,U=q.isNavbarVisible;Object(B.a)(F);var W=Object(n.useCallback)((function(){I(!0)}),[I]),z=Object(n.useCallback)((function(){I(!1)}),[I]),G=Object(n.useCallback)((function(e){return e.target.checked?Y():V()}),[V,Y]),Q=j.href||u,Z={};j.target?Z={target:j.target}:Object(b.a)(Q)||(Z={rel:"noopener noreferrer",target:"_blank"});var $=j.srcDark&&K?j.srcDark:j.src,ee=Object(o.a)($);return r.a.createElement("nav",{ref:J,className:g()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":F},e[D.a.navbarHideable]=M,e[D.a.navbarHidden]=!U,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:W,onKeyDown:W},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(v.a,Object(f.a)({className:"navbar__brand",to:Q},Z),null!=j&&r.a.createElement("img",{key:s,className:"navbar__logo",src:ee,alt:j.alt}),null!=y&&r.a.createElement("strong",{className:g()("navbar__title",(t={},t[D.a.hideLogoText]=R,t))},y)),C.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(L,Object(f.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},C.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(L,Object(f.a)({},e,{key:t}))})),!_&&r.a.createElement(N,{className:D.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:K,onChange:G}),r.a.createElement(E,{handleSearchBarToggle:H,isSearchBarExpanded:R}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:z}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(v.a,Object(f.a)({className:"navbar__brand",onClick:z,to:Q},Z),null!=j&&r.a.createElement("img",{key:s,className:"navbar__logo",src:ee,alt:j.alt}),null!=y&&r.a.createElement("strong",{className:"navbar__title"},y)),!_&&F&&r.a.createElement(N,{"aria-label":"Dark mode toggle in sidebar",checked:K,onChange:G})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},C.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(L,Object(f.a)({className:"menu__link"},e,{onClick:z})))})))))))},F=a(132),I=a.n(F);function X(e){var t=e.to,a=e.href,n=e.label,c=Object(m.a)(e,["to","href","label"]),l=Object(o.a)(t);return r.a.createElement(v.a,Object(f.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},c),n)}var R=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var H=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,i=n.links,s=void 0===i?[]:i,u=n.logo,d=void 0===u?{}:u,h=Object(o.a)(d.src);return a?r.a.createElement("footer",{className:g()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(X,e))}))):null)}))),(d||c)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:I.a.footerLogoLink},r.a.createElement(R,{alt:d.alt,url:h})):r.a.createElement(R,{alt:d.alt,url:h})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(133);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.title,s=a.themeConfig.image,u=a.url,d=e.children,f=e.title,m=e.noFooter,v=e.description,b=e.image,p=e.keywords,g=e.permalink,k=e.version,E=f?f+" | "+i:i,_=b||s,y=u+Object(o.a)(_),O=Object(o.a)(n);return r.a.createElement(h,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),n&&r.a.createElement("link",{rel:"shortcut icon",href:O}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),k&&r.a.createElement("meta",{name:"docsearch:version",content:k}),p&&p.length&&r.a.createElement("meta",{name:"keywords",content:p.join(",")}),_&&r.a.createElement("meta",{property:"og:image",content:y}),_&&r.a.createElement("meta",{property:"twitter:image",content:y}),_&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),g&&r.a.createElement("meta",{property:"og:url",content:u+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(P,null),r.a.createElement("div",{className:"main-wrapper"},d),!m&&r.a.createElement(H,null))}},221:function(e,t,a){"use strict";var n=a(37);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},230:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},231:function(e,t,a){"use strict";var n=a(0),r=a(230);t.a=function(){return Object(n.useContext)(r.a)}},232:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},248:function(e,t,a){var n=a(18);n(n.S+n.F,"Object",{assign:a(249)})},249:function(e,t,a){"use strict";var n=a(11),r=a(29),c=a(250),l=a(82),o=a(51),i=a(77),s=Object.assign;e.exports=!s||a(19)((function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach((function(e){t[e]=e})),7!=s({},e)[a]||Object.keys(s({},t)).join("")!=n}))?function(e,t){for(var a=o(e),s=arguments.length,u=1,d=c.f,h=l.f;s>u;)for(var f,m=i(arguments[u++]),v=d?r(m).concat(d(m)):r(m),b=v.length,p=0;b>p;)f=v[p++],n&&!h.call(m,f)||(a[f]=m[f]);return a}:s},250:function(e,t){t.f=Object.getOwnPropertySymbols},251:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=h(c),o=h(a(206)),i=h(a(15)),s=h(a(252)),u=h(a(253)),d=a(254);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},252:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},253:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},254:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);