(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4591],{67602:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account-security",function(){return a(83065)}])},83065:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var i=a(85893),n=a(10682),r=a(34051),t=a(31555),l=a(69421);function d(){return(0,i.jsx)("div",{className:"main-content",children:(0,i.jsx)(n.Z,{fluid:!0,children:(0,i.jsx)(r.Z,{className:"justify-content-center",children:(0,i.jsxs)(t.Z,{xs:12,lg:10,xl:8,children:[(0,i.jsx)(l.uI,{}),(0,i.jsx)(l.ro,{}),(0,i.jsx)("hr",{className:"my-5"}),(0,i.jsx)(l.tI,{}),(0,i.jsx)("hr",{className:"my-5"}),(0,i.jsx)(l.PE,{}),(0,i.jsx)("br",{})]})})})})}},88375:function(e,s,a){"use strict";var i=a(94184),n=a.n(i),r=a(67294),t=a(47150),l=a(51176),d=a(33833),c=a(76792),o=a(41068),u=a(41485),m=a(39602),f=a(66611),v=a(85893);const h=(0,m.Z)("h4");h.displayName="DivStyledAsH4";const x=(0,f.Z)("alert-heading",{Component:h}),p=(0,f.Z)("alert-link",{Component:d.Z}),b={variant:"primary",show:!0,transition:o.Z,closeLabel:"Close alert"},N=r.forwardRef(((e,s)=>{const{bsPrefix:a,show:i,closeLabel:r,closeVariant:d,className:m,children:f,variant:h,onClose:x,dismissible:p,transition:b,...N}=(0,t.Ch)(e,{show:"onClose"}),j=(0,c.vE)(a,"alert"),y=(0,l.Z)((e=>{x&&x(!1,e)})),$=!0===b?o.Z:b,P=(0,v.jsxs)("div",{role:"alert",...$?void 0:N,ref:s,className:n()(m,j,h&&`${j}-${h}`,p&&`${j}-dismissible`),children:[p&&(0,v.jsx)(u.Z,{onClick:y,"aria-label":r,variant:d}),f]});return $?(0,v.jsx)($,{unmountOnExit:!0,...N,ref:void 0,in:i,children:P}):i?P:null}));N.displayName="Alert",N.defaultProps=b,s.Z=Object.assign(N,{Link:p,Heading:x})},53439:function(e,s,a){"use strict";a.d(s,{U:function(){return n}});var i=a(67294);function n(e,s){let a=0;return i.Children.map(e,(e=>i.isValidElement(e)?s(e,a++):e))}},52205:function(e,s,a){"use strict";a.d(s,{Z:function(){return b}});var i=a(94184),n=a.n(i),r=a(67294),t=a(76792),l=a(33833),d=a(85893);const c=r.forwardRef((({active:e,disabled:s,className:a,style:i,activeLabel:r,children:t,...c},o)=>{const u=e||s?"span":l.Z;return(0,d.jsx)("li",{ref:o,style:i,className:n()(a,"page-item",{active:e,disabled:s}),children:(0,d.jsxs)(u,{className:"page-link",disabled:s,...c,children:[t,e&&r&&(0,d.jsx)("span",{className:"visually-hidden",children:r})]})})}));c.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},c.displayName="PageItem";var o=c;function u(e,s,a=e){function i({children:e,...i}){return(0,d.jsxs)(c,{...i,children:[(0,d.jsx)("span",{"aria-hidden":"true",children:e||s}),(0,d.jsx)("span",{className:"visually-hidden",children:a})]})}return i.displayName=e,i}const m=u("First","\xab"),f=u("Prev","\u2039","Previous"),v=u("Ellipsis","\u2026","More"),h=u("Next","\u203a"),x=u("Last","\xbb"),p=r.forwardRef((({bsPrefix:e,className:s,size:a,...i},r)=>{const l=(0,t.vE)(e,"pagination");return(0,d.jsx)("ul",{ref:r,...i,className:n()(s,l,a&&`${l}-${a}`)})}));p.displayName="Pagination";var b=Object.assign(p,{First:m,Prev:f,Ellipsis:v,Item:o,Next:h,Last:x})},51479:function(e,s,a){"use strict";var i=a(94184),n=a.n(i),r=a(67294),t=a(76792),l=a(53439),d=a(85893);function c(e,s,a){const i=(e-s)/(a-s)*100;return Math.round(1e3*i)/1e3}function o({min:e,now:s,max:a,label:i,visuallyHidden:r,striped:t,animated:l,className:o,style:u,variant:m,bsPrefix:f,...v},h){return(0,d.jsx)("div",{ref:h,...v,role:"progressbar",className:n()(o,`${f}-bar`,{[`bg-${m}`]:m,[`${f}-bar-animated`]:l,[`${f}-bar-striped`]:l||t}),style:{width:`${c(s,e,a)}%`,...u},"aria-valuenow":s,"aria-valuemin":e,"aria-valuemax":a,children:r?(0,d.jsx)("span",{className:"visually-hidden",children:i}):i})}const u=r.forwardRef((({isChild:e,...s},a)=>{if(s.bsPrefix=(0,t.vE)(s.bsPrefix,"progress"),e)return o(s,a);const{min:i,now:c,max:u,label:m,visuallyHidden:f,striped:v,animated:h,bsPrefix:x,variant:p,className:b,children:N,...j}=s;return(0,d.jsx)("div",{ref:a,...j,className:n()(b,x),children:N?(0,l.U)(N,(e=>(0,r.cloneElement)(e,{isChild:!0}))):o({min:i,now:c,max:u,label:m,visuallyHidden:f,striped:v,animated:h,bsPrefix:x,variant:p},a)})}));u.displayName="ProgressBar",u.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},s.Z=u},75147:function(e,s,a){"use strict";var i=a(94184),n=a.n(i),r=a(67294),t=a(76792),l=a(85893);const d=r.forwardRef((({bsPrefix:e,className:s,striped:a,bordered:i,borderless:r,hover:d,size:c,variant:o,responsive:u,...m},f)=>{const v=(0,t.vE)(e,"table"),h=n()(s,v,o&&`${v}-${o}`,c&&`${v}-${c}`,a&&`${v}-striped`,i&&`${v}-bordered`,r&&`${v}-borderless`,d&&`${v}-hover`),x=(0,l.jsx)("table",{...m,className:h,ref:f});if(u){let e=`${v}-responsive`;return"string"===typeof u&&(e=`${e}-${u}`),(0,l.jsx)("div",{className:e,children:x})}return x}));s.Z=d}},function(e){e.O(0,[630,8717,9421,9774,2888,179],(function(){return s=67602,e(e.s=s);var s}));var s=e.O();_N_E=s}]);