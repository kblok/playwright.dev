(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{108:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return p}));var n=t(3),o=t(7),r=(t(0),t(152)),i=(t(155),t(156),{id:"dialogs",title:"Dialogs"}),c={unversionedId:"dialogs",id:"dialogs",isDocsHomePage:!1,title:"Dialogs",description:"Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation.",source:"@site/docs/dialogs.mdx",slug:"/dialogs",permalink:"/java/docs/dialogs",version:"current",sidebar:"docs",previous:{title:"Authentication",permalink:"/java/docs/auth"},next:{title:"Downloads",permalink:"/java/docs/downloads"}},l=[{value:"alert(), confirm(), prompt() dialogs",id:"alert-confirm-prompt-dialogs",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"beforeunload dialog",id:"beforeunload-dialog",children:[]}],s={toc:l};function p(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Playwright can interact with the web page dialogs such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"}),Object(r.b)("inlineCode",{parentName:"a"},"alert")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"}),Object(r.b)("inlineCode",{parentName:"a"},"confirm")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt"}),Object(r.b)("inlineCode",{parentName:"a"},"prompt"))," as well as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"}),Object(r.b)("inlineCode",{parentName:"a"},"beforeunload"))," confirmation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#alert-confirm-prompt-dialogs"}),"alert(), confirm(), prompt() dialogs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#beforeunload-dialog"}),"beforeunload dialog"))),Object(r.b)("h2",{id:"alert-confirm-prompt-dialogs"},"alert(), confirm(), prompt() dialogs"),Object(r.b)("p",null,"By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'page.onDialog(dialog -> dialog.accept());\npage.click("button");\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageondialoghandler"}),"Page.onDialog(handler)")," listener ",Object(r.b)("strong",{parentName:"p"},"must handle")," the dialog. Otherwise your action will stall, be it ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageclickselector-options"}),"Page.click(selector[, options])"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageevaluateexpression-arg"}),"Page.evaluate(expression[, arg])")," or any other. That's because dialogs in Web are modal and block further page execution until they are handled."))),Object(r.b)("p",null,"As a result, following snippet will never resolve:"),Object(r.b)("p",null,":::warn\nWRONG!\n:::"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'page.onDialog(dialog -> System.out.println(dialog.message()));\npage.click("button"); // Will hang here\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If there is no listener for ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageondialoghandler"}),"Page.onDialog(handler)"),", all dialogs are automatically dismissed."))),Object(r.b)("h3",{id:"api-reference"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[",Object(r.b)("inlineCode",{parentName:"li"},"Dialog"),"]"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-dialog#dialogacceptprompttext"}),"Dialog.accept([promptText])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-dialog#dialogdismiss"}),"Dialog.dismiss()"))),Object(r.b)("h2",{id:"beforeunload-dialog"},"beforeunload dialog"),Object(r.b)("p",null,"When ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pagecloseoptions"}),"Page.close([options])")," is invoked with the truthy ",Object(r.b)("inlineCode",{parentName:"p"},"runBeforeUnload")," value, it page runs its unload handlers. This is the only case when ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pagecloseoptions"}),"Page.close([options])")," does not wait for the page to actually close, because it might be that the page stays open in the end of the operation."),Object(r.b)("p",null,"You can register a dialog handler to handle the beforeunload dialog yourself:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'page.onDialog(dialog -> {\n  assertEquals("beforeunload", dialog.type());\n  dialog.dismiss();\n});\npage.close(new Page.CloseOptions().withRunBeforeUnload(true));\n')))}p.isMDXComponent=!0},151:function(e,a,t){"use strict";function n(e){var a,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(o&&(o+=" "),o+=t);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}a.a=function(){for(var e,a,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(o&&(o+=" "),o+=a);return o}},152:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var a=o.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=p(e.components);return o.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return t?o.a.createElement(m,c(c({ref:a},s),{},{components:t})):o.a.createElement(m,c({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},153:function(e,a,t){"use strict";var n=t(0),o=t(154);a.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,a,t){"use strict";var n=t(0),o=Object(n.createContext)(void 0);a.a=o},155:function(e,a,t){"use strict";t(0),t(153),t(151),t(55)},156:function(e,a,t){"use strict";t(3),t(0)}}]);