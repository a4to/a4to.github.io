(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7815],{50913:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/crm-deals",function(){return s(28914)}])},28914:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return o}});var l=s(85893),n=s(67294),i=s(10682),r=s(34051),t=s(31555),d=s(6003),c=s(69421);function o(){var e=(0,n.useState)(0),a=e[0],s=e[1];return(0,l.jsxs)("div",{className:"main-content",children:[(0,l.jsx)(i.Z,{fluid:!0,children:(0,l.jsx)(r.Z,{className:"justify-content-center",children:(0,l.jsx)(t.Z,{xs:12,children:(0,l.jsx)(c.jG,{activeTab:a,setActiveTab:s})})})}),0===a&&(0,l.jsx)(i.Z,{fluid:!0,children:(0,l.jsx)(r.Z,{className:"justify-content-center",children:(0,l.jsx)(t.Z,{xs:12,children:(0,l.jsx)(c.Xu,{deals:Object.keys(d.Th.items).map((function(e){return d.Th.items[e]})),leadScoreOptions:[{value:"-1",label:"Any"},{value:"1",label:"1+"},{value:"2",label:"2+"},{value:"3",label:"3+"},{value:"4",label:"4+"},{value:"5",label:"5+"},{value:"6",label:"6+"},{value:"7",label:"7+"},{value:"8",label:"8+"},{value:"9",label:"9+"},{value:"10",label:"10"}],pagesOptions:[{value:5,label:"5 per page"},{value:10,label:"10 per page"},{value:-1,label:"All"}],titleOptions:[{value:"*",label:"Any"},{value:"designer",label:"Designer"},{value:"developer",label:"Developer"},{value:"owner",label:"Owner"},{value:"founder",label:"Founder"}]})})})}),1===a&&(0,l.jsx)(i.Z,{className:"kanban-container",fluid:!0,children:(0,l.jsx)(r.Z,{children:(0,l.jsx)(c.jh,{deals:d.Th})})})]})}},88375:function(e,a,s){"use strict";var l=s(94184),n=s.n(l),i=s(67294),r=s(47150),t=s(51176),d=s(33833),c=s(76792),o=s(41068),u=s(41485),v=s(39602),b=s(66611),f=s(85893);const m=(0,v.Z)("h4");m.displayName="DivStyledAsH4";const h=(0,b.Z)("alert-heading",{Component:m}),p=(0,b.Z)("alert-link",{Component:d.Z}),x={variant:"primary",show:!0,transition:o.Z,closeLabel:"Close alert"},j=i.forwardRef(((e,a)=>{const{bsPrefix:s,show:l,closeLabel:i,closeVariant:d,className:v,children:b,variant:m,onClose:h,dismissible:p,transition:x,...j}=(0,r.Ch)(e,{show:"onClose"}),N=(0,c.vE)(s,"alert"),y=(0,t.Z)((e=>{h&&h(!1,e)})),w=!0===x?o.Z:x,Z=(0,f.jsxs)("div",{role:"alert",...w?void 0:j,ref:a,className:n()(v,N,m&&`${N}-${m}`,p&&`${N}-dismissible`),children:[p&&(0,f.jsx)(u.Z,{onClick:y,"aria-label":i,variant:d}),b]});return w?(0,f.jsx)(w,{unmountOnExit:!0,...j,ref:void 0,in:l,children:Z}):l?Z:null}));j.displayName="Alert",j.defaultProps=x,a.Z=Object.assign(j,{Link:p,Heading:h})},53439:function(e,a,s){"use strict";s.d(a,{U:function(){return n}});var l=s(67294);function n(e,a){let s=0;return l.Children.map(e,(e=>l.isValidElement(e)?a(e,s++):e))}},52205:function(e,a,s){"use strict";s.d(a,{Z:function(){return x}});var l=s(94184),n=s.n(l),i=s(67294),r=s(76792),t=s(33833),d=s(85893);const c=i.forwardRef((({active:e,disabled:a,className:s,style:l,activeLabel:i,children:r,...c},o)=>{const u=e||a?"span":t.Z;return(0,d.jsx)("li",{ref:o,style:l,className:n()(s,"page-item",{active:e,disabled:a}),children:(0,d.jsxs)(u,{className:"page-link",disabled:a,...c,children:[r,e&&i&&(0,d.jsx)("span",{className:"visually-hidden",children:i})]})})}));c.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},c.displayName="PageItem";var o=c;function u(e,a,s=e){function l({children:e,...l}){return(0,d.jsxs)(c,{...l,children:[(0,d.jsx)("span",{"aria-hidden":"true",children:e||a}),(0,d.jsx)("span",{className:"visually-hidden",children:s})]})}return l.displayName=e,l}const v=u("First","\xab"),b=u("Prev","\u2039","Previous"),f=u("Ellipsis","\u2026","More"),m=u("Next","\u203a"),h=u("Last","\xbb"),p=i.forwardRef((({bsPrefix:e,className:a,size:s,...l},i)=>{const t=(0,r.vE)(e,"pagination");return(0,d.jsx)("ul",{ref:i,...l,className:n()(a,t,s&&`${t}-${s}`)})}));p.displayName="Pagination";var x=Object.assign(p,{First:v,Prev:b,Ellipsis:f,Item:o,Next:m,Last:h})},51479:function(e,a,s){"use strict";var l=s(94184),n=s.n(l),i=s(67294),r=s(76792),t=s(53439),d=s(85893);function c(e,a,s){const l=(e-a)/(s-a)*100;return Math.round(1e3*l)/1e3}function o({min:e,now:a,max:s,label:l,visuallyHidden:i,striped:r,animated:t,className:o,style:u,variant:v,bsPrefix:b,...f},m){return(0,d.jsx)("div",{ref:m,...f,role:"progressbar",className:n()(o,`${b}-bar`,{[`bg-${v}`]:v,[`${b}-bar-animated`]:t,[`${b}-bar-striped`]:t||r}),style:{width:`${c(a,e,s)}%`,...u},"aria-valuenow":a,"aria-valuemin":e,"aria-valuemax":s,children:i?(0,d.jsx)("span",{className:"visually-hidden",children:l}):l})}const u=i.forwardRef((({isChild:e,...a},s)=>{if(a.bsPrefix=(0,r.vE)(a.bsPrefix,"progress"),e)return o(a,s);const{min:l,now:c,max:u,label:v,visuallyHidden:b,striped:f,animated:m,bsPrefix:h,variant:p,className:x,children:j,...N}=a;return(0,d.jsx)("div",{ref:s,...N,className:n()(x,h),children:j?(0,t.U)(j,(e=>(0,i.cloneElement)(e,{isChild:!0}))):o({min:l,now:c,max:u,label:v,visuallyHidden:b,striped:f,animated:m,bsPrefix:h,variant:p},s)})}));u.displayName="ProgressBar",u.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},a.Z=u},75147:function(e,a,s){"use strict";var l=s(94184),n=s.n(l),i=s(67294),r=s(76792),t=s(85893);const d=i.forwardRef((({bsPrefix:e,className:a,striped:s,bordered:l,borderless:i,hover:d,size:c,variant:o,responsive:u,...v},b)=>{const f=(0,r.vE)(e,"table"),m=n()(a,f,o&&`${f}-${o}`,c&&`${f}-${c}`,s&&`${f}-striped`,l&&`${f}-bordered`,i&&`${f}-borderless`,d&&`${f}-hover`),h=(0,t.jsx)("table",{...v,className:m,ref:b});if(u){let e=`${f}-responsive`;return"string"===typeof u&&(e=`${e}-${u}`),(0,t.jsx)("div",{className:e,children:h})}return h}));a.Z=d}},function(e){e.O(0,[630,8717,9421,9774,2888,179],(function(){return a=50913,e(e.s=a);var a}));var a=e.O();_N_E=a}]);