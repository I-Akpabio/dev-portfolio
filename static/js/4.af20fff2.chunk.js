(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[4,8],{139:function(e,t,o){},67:function(e,t,o){"use strict";o.r(t);o(0),o(69);var n=o(1);t.default=function(e){const{title:t}=e;return Object(n.jsx)("div",{className:"header",children:t})}},72:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o(138),c=o(119),r=o(51),d=o.n(r),l=o(16),a=o(20),s=o(67),h=o(25),u=(o(139),o(1));t.default=function(e){const t=Object(n.useContext)(l.a),{header:o}=e,[r,j]=Object(n.useState)(null),[v,w]=Object(n.useState)("50vw"),[b,m]=Object(n.useState)("VERTICAL_ALTERNATING");return Object(n.useEffect)((()=>{var e,t,o,n,i,c;fetch(a.a.education,{method:"GET"}).then((e=>e.json())).then((e=>j(e))).catch((e=>e)),(null===(e=window)||void 0===e?void 0:e.innerWidth)<576&&m("VERTICAL"),(null===(t=window)||void 0===t?void 0:t.innerWidth)<576||(null===(o=window)||void 0===o?void 0:o.innerWidth)>=576&&(null===(n=window)||void 0===n?void 0:n.innerWidth)<768?w("90vw"):(null===(i=window)||void 0===i?void 0:i.innerWidth)>=768&&(null===(c=window)||void 0===c?void 0:c.innerWidth)<1024?w("75vw"):w("50vw")}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.default,{title:o}),r?Object(u.jsx)(d.a,{children:Object(u.jsx)("div",{style:{width:v},className:"section-content-container",children:Object(u.jsx)(c.a,{children:Object(u.jsx)(i.a,{hideControls:!0,allowDynamicUpdate:!0,useReadMore:!1,items:r.education,cardHeight:250,mode:b,theme:{primary:t.accentColor,secondary:t.accentColor,cardBgColor:t.chronoTheme.cardBgColor,cardForeColor:t.chronoTheme.cardForeColor,titleColor:t.chronoTheme.titleColor},children:Object(u.jsx)("div",{className:"chrono-icons",children:r.education.map((e=>e.icon?Object(u.jsx)("img",{src:e.icon.src,alt:e.icon.alt},e.icon.src):null))})})})})}):Object(u.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=4.af20fff2.chunk.js.map