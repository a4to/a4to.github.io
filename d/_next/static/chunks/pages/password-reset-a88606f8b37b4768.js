(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2935],{15613:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/password-reset",function(){return a(82828)}])},82828:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var r=a(85893),i=a(10682),n=a(34051),t=a(31555),l=a(69421);function d(){return(0,r.jsx)("div",{className:"d-flex align-items-center min-vh-100 bg-auth border-top border-top-2 border-primary",children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(n.Z,{className:"justify-content-center",children:(0,r.jsx)(t.Z,{xs:12,md:5,xl:4,className:"my-5",children:(0,r.jsx)(l.x3,{})})})})})}},88375:function(e,s,a){"use strict";var r=a(94184),i=a.n(r),n=a(67294),t=a(47150),l=a(51176),d=a(33833),c=a(76792),o=a(41068),u=a(41485),m=a(39602),f=a(66611),v=a(85893);const h=(0,m.Z)("h4");h.displayName="DivStyledAsH4";const p=(0,f.Z)("alert-heading",{Component:h}),b=(0,f.Z)("alert-link",{Component:d.Z}),x={variant:"primary",show:!0,transition:o.Z,closeLabel:"Close alert"},N=n.forwardRef(((e,s)=>{const{bsPrefix:a,show:r,closeLabel:n,closeVariant:d,className:m,children:f,variant:h,onClose:p,dismissible:b,transition:x,...N}=(0,t.Ch)(e,{show:"onClose"}),j=(0,c.vE)(a,"alert"),y=(0,l.Z)((e=>{p&&p(!1,e)})),$=!0===x?o.Z:x,w=(0,v.jsxs)("div",{role:"alert",...$?void 0:N,ref:s,className:i()(m,j,h&&`${j}-${h}`,b&&`${j}-dismissible`),children:[b&&(0,v.jsx)(u.Z,{onClick:y,"aria-label":n,variant:d}),f]});return $?(0,v.jsx)($,{unmountOnExit:!0,...N,ref:void 0,in:r,children:w}):r?w:null}));N.displayName="Alert",N.defaultProps=x,s.Z=Object.assign(N,{Link:b,Heading:p})},53439:function(e,s,a){"use strict";a.d(s,{U:function(){return i}});var r=a(67294);function i(e,s){let a=0;return r.Children.map(e,(e=>r.isValidElement(e)?s(e,a++):e))}},52205:function(e,s,a){"use strict";a.d(s,{Z:function(){return x}});var r=a(94184),i=a.n(r),n=a(67294),t=a(76792),l=a(33833),d=a(85893);const c=n.forwardRef((({active:e,disabled:s,className:a,style:r,activeLabel:n,children:t,...c},o)=>{const u=e||s?"span":l.Z;return(0,d.jsx)("li",{ref:o,style:r,className:i()(a,"page-item",{active:e,disabled:s}),children:(0,d.jsxs)(u,{className:"page-link",disabled:s,...c,children:[t,e&&n&&(0,d.jsx)("span",{className:"visually-hidden",children:n})]})})}));c.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},c.displayName="PageItem";var o=c;function u(e,s,a=e){function r({children:e,...r}){return(0,d.jsxs)(c,{...r,children:[(0,d.jsx)("span",{"aria-hidden":"true",children:e||s}),(0,d.jsx)("span",{className:"visually-hidden",children:a})]})}return r.displayName=e,r}const m=u("First","\xab"),f=u("Prev","\u2039","Previous"),v=u("Ellipsis","\u2026","More"),h=u("Next","\u203a"),p=u("Last","\xbb"),b=n.forwardRef((({bsPrefix:e,className:s,size:a,...r},n)=>{const l=(0,t.vE)(e,"pagination");return(0,d.jsx)("ul",{ref:n,...r,className:i()(s,l,a&&`${l}-${a}`)})}));b.displayName="Pagination";var x=Object.assign(b,{First:m,Prev:f,Ellipsis:v,Item:o,Next:h,Last:p})},51479:function(e,s,a){"use strict";var r=a(94184),i=a.n(r),n=a(67294),t=a(76792),l=a(53439),d=a(85893);function c(e,s,a){const r=(e-s)/(a-s)*100;return Math.round(1e3*r)/1e3}function o({min:e,now:s,max:a,label:r,visuallyHidden:n,striped:t,animated:l,className:o,style:u,variant:m,bsPrefix:f,...v},h){return(0,d.jsx)("div",{ref:h,...v,role:"progressbar",className:i()(o,`${f}-bar`,{[`bg-${m}`]:m,[`${f}-bar-animated`]:l,[`${f}-bar-striped`]:l||t}),style:{width:`${c(s,e,a)}%`,...u},"aria-valuenow":s,"aria-valuemin":e,"aria-valuemax":a,children:n?(0,d.jsx)("span",{className:"visually-hidden",children:r}):r})}const u=n.forwardRef((({isChild:e,...s},a)=>{if(s.bsPrefix=(0,t.vE)(s.bsPrefix,"progress"),e)return o(s,a);const{min:r,now:c,max:u,label:m,visuallyHidden:f,striped:v,animated:h,bsPrefix:p,variant:b,className:x,children:N,...j}=s;return(0,d.jsx)("div",{ref:a,...j,className:i()(x,p),children:N?(0,l.U)(N,(e=>(0,n.cloneElement)(e,{isChild:!0}))):o({min:r,now:c,max:u,label:m,visuallyHidden:f,striped:v,animated:h,bsPrefix:p,variant:b},a)})}));u.displayName="ProgressBar",u.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},s.Z=u},75147:function(e,s,a){"use strict";var r=a(94184),i=a.n(r),n=a(67294),t=a(76792),l=a(85893);const d=n.forwardRef((({bsPrefix:e,className:s,striped:a,bordered:r,borderless:n,hover:d,size:c,variant:o,responsive:u,...m},f)=>{const v=(0,t.vE)(e,"table"),h=i()(s,v,o&&`${v}-${o}`,c&&`${v}-${c}`,a&&`${v}-striped`,r&&`${v}-bordered`,n&&`${v}-borderless`,d&&`${v}-hover`),p=(0,l.jsx)("table",{...m,className:h,ref:f});if(u){let e=`${v}-responsive`;return"string"===typeof u&&(e=`${e}-${u}`),(0,l.jsx)("div",{className:e,children:p})}return p}));s.Z=d}},function(e){e.O(0,[630,8717,9421,9774,2888,179],(function(){return s=15613,e(e.s=s);var s}));var s=e.O();_N_E=s}]);