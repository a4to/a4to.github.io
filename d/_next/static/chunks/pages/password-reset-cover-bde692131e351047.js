(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63],{86696:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/password-reset-cover",function(){return a(43474)}])},43474:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var r=a(85893),i=a(10682),n=a(34051),t=a(31555),l=a(69421);function d(){return(0,r.jsx)("div",{className:"d-flex align-items-center min-vh-100 bg-auth border-top border-top-2 border-primary",children:(0,r.jsx)(i.Z,{fluid:!0,children:(0,r.jsxs)(n.Z,{className:"align-items-center justify-content-center",children:[(0,r.jsx)(t.Z,{xs:12,md:5,lg:6,xl:4,className:"px-lg-6 my-5",children:(0,r.jsx)(l.x3,{})}),(0,r.jsx)(t.Z,{xs:12,md:7,lg:6,xl:8,className:"d-none d-lg-block",children:(0,r.jsx)("div",{className:"bg-cover vh-100 mt-n1 me-n3",style:{backgroundImage:"url(/img/covers/auth-side-cover.jpg)"}})})]})})})}},88375:function(e,s,a){"use strict";var r=a(94184),i=a.n(r),n=a(67294),t=a(47150),l=a(51176),d=a(33833),c=a(76792),o=a(41068),u=a(41485),m=a(39602),v=a(66611),f=a(85893);const h=(0,m.Z)("h4");h.displayName="DivStyledAsH4";const p=(0,v.Z)("alert-heading",{Component:h}),x=(0,v.Z)("alert-link",{Component:d.Z}),b={variant:"primary",show:!0,transition:o.Z,closeLabel:"Close alert"},N=n.forwardRef(((e,s)=>{const{bsPrefix:a,show:r,closeLabel:n,closeVariant:d,className:m,children:v,variant:h,onClose:p,dismissible:x,transition:b,...N}=(0,t.Ch)(e,{show:"onClose"}),g=(0,c.vE)(a,"alert"),j=(0,l.Z)((e=>{p&&p(!1,e)})),y=!0===b?o.Z:b,$=(0,f.jsxs)("div",{role:"alert",...y?void 0:N,ref:s,className:i()(m,g,h&&`${g}-${h}`,x&&`${g}-dismissible`),children:[x&&(0,f.jsx)(u.Z,{onClick:j,"aria-label":n,variant:d}),v]});return y?(0,f.jsx)(y,{unmountOnExit:!0,...N,ref:void 0,in:r,children:$}):r?$:null}));N.displayName="Alert",N.defaultProps=b,s.Z=Object.assign(N,{Link:x,Heading:p})},53439:function(e,s,a){"use strict";a.d(s,{U:function(){return i}});var r=a(67294);function i(e,s){let a=0;return r.Children.map(e,(e=>r.isValidElement(e)?s(e,a++):e))}},52205:function(e,s,a){"use strict";a.d(s,{Z:function(){return b}});var r=a(94184),i=a.n(r),n=a(67294),t=a(76792),l=a(33833),d=a(85893);const c=n.forwardRef((({active:e,disabled:s,className:a,style:r,activeLabel:n,children:t,...c},o)=>{const u=e||s?"span":l.Z;return(0,d.jsx)("li",{ref:o,style:r,className:i()(a,"page-item",{active:e,disabled:s}),children:(0,d.jsxs)(u,{className:"page-link",disabled:s,...c,children:[t,e&&n&&(0,d.jsx)("span",{className:"visually-hidden",children:n})]})})}));c.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},c.displayName="PageItem";var o=c;function u(e,s,a=e){function r({children:e,...r}){return(0,d.jsxs)(c,{...r,children:[(0,d.jsx)("span",{"aria-hidden":"true",children:e||s}),(0,d.jsx)("span",{className:"visually-hidden",children:a})]})}return r.displayName=e,r}const m=u("First","\xab"),v=u("Prev","\u2039","Previous"),f=u("Ellipsis","\u2026","More"),h=u("Next","\u203a"),p=u("Last","\xbb"),x=n.forwardRef((({bsPrefix:e,className:s,size:a,...r},n)=>{const l=(0,t.vE)(e,"pagination");return(0,d.jsx)("ul",{ref:n,...r,className:i()(s,l,a&&`${l}-${a}`)})}));x.displayName="Pagination";var b=Object.assign(x,{First:m,Prev:v,Ellipsis:f,Item:o,Next:h,Last:p})},51479:function(e,s,a){"use strict";var r=a(94184),i=a.n(r),n=a(67294),t=a(76792),l=a(53439),d=a(85893);function c(e,s,a){const r=(e-s)/(a-s)*100;return Math.round(1e3*r)/1e3}function o({min:e,now:s,max:a,label:r,visuallyHidden:n,striped:t,animated:l,className:o,style:u,variant:m,bsPrefix:v,...f},h){return(0,d.jsx)("div",{ref:h,...f,role:"progressbar",className:i()(o,`${v}-bar`,{[`bg-${m}`]:m,[`${v}-bar-animated`]:l,[`${v}-bar-striped`]:l||t}),style:{width:`${c(s,e,a)}%`,...u},"aria-valuenow":s,"aria-valuemin":e,"aria-valuemax":a,children:n?(0,d.jsx)("span",{className:"visually-hidden",children:r}):r})}const u=n.forwardRef((({isChild:e,...s},a)=>{if(s.bsPrefix=(0,t.vE)(s.bsPrefix,"progress"),e)return o(s,a);const{min:r,now:c,max:u,label:m,visuallyHidden:v,striped:f,animated:h,bsPrefix:p,variant:x,className:b,children:N,...g}=s;return(0,d.jsx)("div",{ref:a,...g,className:i()(b,p),children:N?(0,l.U)(N,(e=>(0,n.cloneElement)(e,{isChild:!0}))):o({min:r,now:c,max:u,label:m,visuallyHidden:v,striped:f,animated:h,bsPrefix:p,variant:x},a)})}));u.displayName="ProgressBar",u.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},s.Z=u},75147:function(e,s,a){"use strict";var r=a(94184),i=a.n(r),n=a(67294),t=a(76792),l=a(85893);const d=n.forwardRef((({bsPrefix:e,className:s,striped:a,bordered:r,borderless:n,hover:d,size:c,variant:o,responsive:u,...m},v)=>{const f=(0,t.vE)(e,"table"),h=i()(s,f,o&&`${f}-${o}`,c&&`${f}-${c}`,a&&`${f}-striped`,r&&`${f}-bordered`,n&&`${f}-borderless`,d&&`${f}-hover`),p=(0,l.jsx)("table",{...m,className:h,ref:v});if(u){let e=`${f}-responsive`;return"string"===typeof u&&(e=`${e}-${u}`),(0,l.jsx)("div",{className:e,children:p})}return p}));s.Z=d}},function(e){e.O(0,[630,8717,9421,9774,2888,179],(function(){return s=86696,e(e.s=s);var s}));var s=e.O();_N_E=s}]);