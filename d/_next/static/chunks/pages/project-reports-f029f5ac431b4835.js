(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4821],{93569:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project-reports",function(){return a(18688)}])},18688:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return o}});var i=a(85893),r=a(10682),n=a(34051),t=a(31555),l=a(78182),d=a(35005),c=a(69421);function o(){return(0,i.jsxs)("div",{className:"main-content",children:[(0,i.jsx)(c.T4,{}),(0,i.jsx)(r.Z,{fluid:!0,children:(0,i.jsx)(n.Z,{children:(0,i.jsx)(t.Z,{xs:12,children:(0,i.jsx)(l.Z,{className:"card-inactive",children:(0,i.jsxs)(l.Z.Body,{className:"text-center",children:[(0,i.jsx)("img",{className:"img-fluid",src:"/img/illustrations/scale.svg",style:{maxWidth:182},alt:"..."}),(0,i.jsx)("h1",{children:"No reports yet."}),(0,i.jsx)("p",{className:"text-muted",children:"Create a report to find our more about this project."}),(0,i.jsx)(d.Z,{children:"Create Report"})]})})})})})]})}},88375:function(e,s,a){"use strict";var i=a(94184),r=a.n(i),n=a(67294),t=a(47150),l=a(51176),d=a(33833),c=a(76792),o=a(41068),u=a(41485),m=a(39602),f=a(66611),v=a(85893);const h=(0,m.Z)("h4");h.displayName="DivStyledAsH4";const p=(0,f.Z)("alert-heading",{Component:h}),x=(0,f.Z)("alert-link",{Component:d.Z}),b={variant:"primary",show:!0,transition:o.Z,closeLabel:"Close alert"},N=n.forwardRef(((e,s)=>{const{bsPrefix:a,show:i,closeLabel:n,closeVariant:d,className:m,children:f,variant:h,onClose:p,dismissible:x,transition:b,...N}=(0,t.Ch)(e,{show:"onClose"}),j=(0,c.vE)(a,"alert"),y=(0,l.Z)((e=>{p&&p(!1,e)})),$=!0===b?o.Z:b,w=(0,v.jsxs)("div",{role:"alert",...$?void 0:N,ref:s,className:r()(m,j,h&&`${j}-${h}`,x&&`${j}-dismissible`),children:[x&&(0,v.jsx)(u.Z,{onClick:y,"aria-label":n,variant:d}),f]});return $?(0,v.jsx)($,{unmountOnExit:!0,...N,ref:void 0,in:i,children:w}):i?w:null}));N.displayName="Alert",N.defaultProps=b,s.Z=Object.assign(N,{Link:x,Heading:p})},53439:function(e,s,a){"use strict";a.d(s,{U:function(){return r}});var i=a(67294);function r(e,s){let a=0;return i.Children.map(e,(e=>i.isValidElement(e)?s(e,a++):e))}},52205:function(e,s,a){"use strict";a.d(s,{Z:function(){return b}});var i=a(94184),r=a.n(i),n=a(67294),t=a(76792),l=a(33833),d=a(85893);const c=n.forwardRef((({active:e,disabled:s,className:a,style:i,activeLabel:n,children:t,...c},o)=>{const u=e||s?"span":l.Z;return(0,d.jsx)("li",{ref:o,style:i,className:r()(a,"page-item",{active:e,disabled:s}),children:(0,d.jsxs)(u,{className:"page-link",disabled:s,...c,children:[t,e&&n&&(0,d.jsx)("span",{className:"visually-hidden",children:n})]})})}));c.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},c.displayName="PageItem";var o=c;function u(e,s,a=e){function i({children:e,...i}){return(0,d.jsxs)(c,{...i,children:[(0,d.jsx)("span",{"aria-hidden":"true",children:e||s}),(0,d.jsx)("span",{className:"visually-hidden",children:a})]})}return i.displayName=e,i}const m=u("First","\xab"),f=u("Prev","\u2039","Previous"),v=u("Ellipsis","\u2026","More"),h=u("Next","\u203a"),p=u("Last","\xbb"),x=n.forwardRef((({bsPrefix:e,className:s,size:a,...i},n)=>{const l=(0,t.vE)(e,"pagination");return(0,d.jsx)("ul",{ref:n,...i,className:r()(s,l,a&&`${l}-${a}`)})}));x.displayName="Pagination";var b=Object.assign(x,{First:m,Prev:f,Ellipsis:v,Item:o,Next:h,Last:p})},51479:function(e,s,a){"use strict";var i=a(94184),r=a.n(i),n=a(67294),t=a(76792),l=a(53439),d=a(85893);function c(e,s,a){const i=(e-s)/(a-s)*100;return Math.round(1e3*i)/1e3}function o({min:e,now:s,max:a,label:i,visuallyHidden:n,striped:t,animated:l,className:o,style:u,variant:m,bsPrefix:f,...v},h){return(0,d.jsx)("div",{ref:h,...v,role:"progressbar",className:r()(o,`${f}-bar`,{[`bg-${m}`]:m,[`${f}-bar-animated`]:l,[`${f}-bar-striped`]:l||t}),style:{width:`${c(s,e,a)}%`,...u},"aria-valuenow":s,"aria-valuemin":e,"aria-valuemax":a,children:n?(0,d.jsx)("span",{className:"visually-hidden",children:i}):i})}const u=n.forwardRef((({isChild:e,...s},a)=>{if(s.bsPrefix=(0,t.vE)(s.bsPrefix,"progress"),e)return o(s,a);const{min:i,now:c,max:u,label:m,visuallyHidden:f,striped:v,animated:h,bsPrefix:p,variant:x,className:b,children:N,...j}=s;return(0,d.jsx)("div",{ref:a,...j,className:r()(b,p),children:N?(0,l.U)(N,(e=>(0,n.cloneElement)(e,{isChild:!0}))):o({min:i,now:c,max:u,label:m,visuallyHidden:f,striped:v,animated:h,bsPrefix:p,variant:x},a)})}));u.displayName="ProgressBar",u.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},s.Z=u},75147:function(e,s,a){"use strict";var i=a(94184),r=a.n(i),n=a(67294),t=a(76792),l=a(85893);const d=n.forwardRef((({bsPrefix:e,className:s,striped:a,bordered:i,borderless:n,hover:d,size:c,variant:o,responsive:u,...m},f)=>{const v=(0,t.vE)(e,"table"),h=r()(s,v,o&&`${v}-${o}`,c&&`${v}-${c}`,a&&`${v}-striped`,i&&`${v}-bordered`,n&&`${v}-borderless`,d&&`${v}-hover`),p=(0,l.jsx)("table",{...m,className:h,ref:f});if(u){let e=`${v}-responsive`;return"string"===typeof u&&(e=`${e}-${u}`),(0,l.jsx)("div",{className:e,children:p})}return p}));s.Z=d}},function(e){e.O(0,[630,8717,9421,9774,2888,179],(function(){return s=93569,e(e.s=s);var s}));var s=e.O();_N_E=s}]);