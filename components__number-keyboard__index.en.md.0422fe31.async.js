(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[81],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("/r+8"),l=a("Vhn3"),r=a("ahKI"),c=a.n(r),o=a("vumQ"),m=a("qEP4");a("P1/K"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,r=e.showCopy,u=void 0===r||r,i=Object(m["useCopy"])(),d=Object(l["a"])(i,2),s=d[0],E=d[1];return c.a.createElement("div",{className:"__dumi-default-code-block"},c.a.createElement(o["a"],Object(n["a"])({},o["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,l=e.tokens,r=e.getLineProps,o=e.getTokenProps;return c.a.createElement("pre",{className:a,style:n},u&&c.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),l.map(((e,t)=>c.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>c.a.createElement("span",o({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("/r+8"),a("ahKI"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var n=a("/r+8"),l=a("ahKI"),r=a.n(l);a("tCeM");t["a"]=e=>r.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},Q2VV:function(e,t,a){},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return p}));var n=a("ahKI"),l=a.n(n),r=a("Vhn3"),c=a("/7QA"),o=a("9kvl"),m=a("qEP4"),u=a("Bjia");a("YWOM");function i(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var d=e=>{var t=Object(n["useRef"])(null),a=Object(n["useContext"])(m["context"]),d=a.locale,s=Object(m["useLocaleProps"])(d,e),E=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(s.identifier),h=1===Object.keys(s.sources).length,v=Object(m["useMotions"])(s.motions||[],t.current),b=Object(r["a"])(v,2),f=b[0],p=b[1],g=Object(m["useCopy"])(),y=Object(r["a"])(g,2),w=y[0],k=y[1],_=Object(n["useState"])("_"),N=Object(r["a"])(_,2),O=N[0],j=N[1],C=Object(n["useState"])(i(O,s.sources[O])),x=Object(r["a"])(C,2),L=x[0],A=x[1],I=s.sources[O][L]||s.sources[O].content,M=Object(m["useTSPlaygroundUrl"])(d,I),V=Object(m["usePrefersColor"])(),T=Object(r["a"])(V,1);T[0];function P(e){j(e),A(i(e,s.sources[e]))}return l.a.createElement("div",{style:s.style,className:[s.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:s.identifier,"data-debug":s.debug||void 0},l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":s.title},s.title&&l.a.createElement(m["AnchorLink"],{to:"#".concat(s.identifier)},s.title),s.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},s.debug&&l.a.createElement("span",{className:"debug-badge"},"Debug Only"),s.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:p,onClick:()=>f()}),l.a.createElement("div",{className:"spacer"}),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":k,onClick:()=>w(I)}),"tsx"===L&&l.a.createElement(m["Link"],{target:"_blank",to:M},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&l.a.createElement(c["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:O,onChange:P},Object.keys(s.sources).map((e=>l.a.createElement(c["Tabs"].Tab,{title:"_"===e?"index.".concat(i(e,s.sources[e])):e,key:e})))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(u["a"],{code:I,lang:L,showCopy:!1}))))},s=d,E=(a("oeoJ"),a("NEWu")),h=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),o=Object(r["a"])(a,2),u=o[0],i=o[1],d=Object(m["usePrefersColor"])(),s=Object(r["a"])(d,1),h=s[0],p=Object(n["useContext"])(m["context"]),g=p.config.mode;return Object(n["useEffect"])((()=>{i(Math.random())}),[h]),l.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":g},l.a.createElement("iframe",{title:"dumi-previewer",src:t,key:u}),l.a.createElement("div",{className:"adm-doc-device-action"},l.a.createElement("a",{onClick:()=>i(Math.random())},v),l.a.createElement(c["Popover"],{content:l.a.createElement(E["a"],{value:t,size:96}),trigger:"click"},l.a.createElement("a",null,b)),l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},f)))}),v=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),b=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),f=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),p="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(m["useDemoUrl"])(e.identifier);return l.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},l.a.createElement("div",{className:"adm-doc-previewer-source"},l.a.createElement(s,e)),l.a.createElement("div",{className:"adm-doc-previewer-device"},l.a.createElement(h,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),r=a("eqKt"),c=a.n(r),o=e=>l.a.createElement("a",{className:c.a.card,href:e.link,target:"_blank"},e.image&&l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("div",{className:c.a.content},l.a.createElement("div",{className:c.a.title},e.title),l.a.createElement("div",{className:c.a.description},e.description)));t["a"]=o},hYKq:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),r=a("bIC1"),c=a.n(r);a("Q2VV");function o(e,t){return s(e)||d(e,t)||u(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){o=!0,l=m}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=o(r,2),u=m[0],i=m[1],d=Object(n["useState"])(!1),s=o(d,2),E=s[0],h=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){i(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":u||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},mVOg:function(e,t,a){"use strict";var n=a("Vhn3"),l=a("ahKI"),r=a.n(l),c=a("qEP4"),o=a("/7QA");t["a"]=()=>{var e=Object(l["useContext"])(c["context"]),t=e.locale,a=Object(l["useState"])(!1),m=Object(n["a"])(a,2),u=m[0],i=m[1];return r.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},style:{verticalAlign:"-0.125em"}},r.a.createElement(o["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:u,mode:"dark"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){},u51k:function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),l=a.n(n),r=a("qEP4"),c=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg")),o=a("ekZX"),m=(a("gKi5"),a("Bjia"),a("0m3q"),a("hYKq")),u=l.a.memo((e=>{var t=e.demos,a=t["number-keyboard-demo1"].component,n=t["number-keyboard-demo2"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"numberkeyboard"},l.a.createElement(r["AnchorLink"],{to:"#numberkeyboard","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"NumberKeyboard ",l.a.createElement(c["a"],null)),l.a.createElement("p",null,"Numeric keypad panel."),l.a.createElement("h2",{id:"when-to-use"},l.a.createElement(r["AnchorLink"],{to:"#when-to-use","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"When to Use"),l.a.createElement("p",null,"Applicable when entering numeric content."),l.a.createElement("p",null,"Can be used with password input box component or custom input box component"),l.a.createElement("p",null,"If possible, we recommend using the native keyboard provided by the system or client. The virtual numeric keypad is just a supplement for some special scenarios."),l.a.createElement("h2",{id:"demos"},l.a.createElement(r["AnchorLink"],{to:"#demos","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Demos")),l.a.createElement(o["default"],t["number-keyboard-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement(o["default"],t["number-keyboard-demo2"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"numberkeyboard-1"},l.a.createElement(r["AnchorLink"],{to:"#numberkeyboard-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"NumberKeyboard"),l.a.createElement("h3",{id:"props"},l.a.createElement(r["AnchorLink"],{to:"#props","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Props"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"afterClose"),l.a.createElement("td",null,"Callback when the keyboard is completely put away"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"afterShow"),l.a.createElement("td",null,"Callback when the keyboard is completely bounced"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"closeOnConfirm"),l.a.createElement("td",null,"Whether to automatically close when the ok button is clicked"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))),l.a.createElement("tr",null,l.a.createElement("td",null,"confirmText"),l.a.createElement("td",null,"The text of the confirm button, if ",l.a.createElement("code",null,"null")," is set, it would be shown"),l.a.createElement("td",null,l.a.createElement("code",null,"string | null")),l.a.createElement("td",null,l.a.createElement("code",null,"null"))),l.a.createElement("tr",null,l.a.createElement("td",null,"customKey"),l.a.createElement("td",null,"Customized button"),l.a.createElement("td",null,l.a.createElement("code",null,"string | [string, string]")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"destroyOnClose"),l.a.createElement("td",null,"Unmount content when not visible"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"forceRender"),l.a.createElement("td",null,"Render content forcely"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"getContainer"),l.a.createElement("td",null,"To get the specified mounted HTML node, the default is ",l.a.createElement("code",null,"body"),", if ",l.a.createElement("code",null,"null")," returned, it would be rendered to the current node"),l.a.createElement("td",null,l.a.createElement("code",null,"HTMLElement | () => HTMLElement | null")),l.a.createElement("td",null,l.a.createElement("code",null,"() => document.body"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onClose"),l.a.createElement("td",null,"Triggered when it is clicked"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"onConfirm"),l.a.createElement("td",null,"Triggered when the ok button is clicked"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"onDelete"),l.a.createElement("td",null,"Callback when the content is deleted"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"onInput"),l.a.createElement("td",null,"Callback when the input content is changed"),l.a.createElement("td",null,l.a.createElement("code",null,"(v: string) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"randomOrder"),l.a.createElement("td",null,"Whether the keyboard is out of order"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"safeArea"),l.a.createElement("td",null,"Whether to enable safe area padding"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))),l.a.createElement("tr",null,l.a.createElement("td",null,"showCloseButton"),l.a.createElement("td",null,"Whether to show the collapsed keyboard arrow"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))),l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"The title of the keyboard"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"visible"),l.a.createElement("td",null,"Whether to show or hide"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,"-")))),l.a.createElement("p",null,"In addition, the following attributes of ",l.a.createElement(r["Link"],{to:"/components/popup"},"Popup")," are supported: ",l.a.createElement("code",null,"stopPropagation")),l.a.createElement("h2",{id:"faq"},l.a.createElement(r["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"FAQ"),l.a.createElement("h3",{id:"does-the-numberkeyboard-support-automatic-reading-of-verification-codes-from-sms"},l.a.createElement(r["AnchorLink"],{to:"#does-the-numberkeyboard-support-automatic-reading-of-verification-codes-from-sms","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Does the NumberKeyboard support automatic reading of verification codes from SMS?"),l.a.createElement("p",null,"No."))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:a})}}}]);