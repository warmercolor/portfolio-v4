(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489],{4230:function(e,t,r){Promise.resolve().then(r.bind(r,3642))},3642:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return template}});var n=r(7437),o=r(732),i=r(2265),hooks_useScrollProgress=()=>{let[e,t]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let updateScrollCompletion=()=>{let e=window.scrollY,r=document.body.scrollHeight-window.innerHeight;r&&t(100*Number(e/r).toFixed(2))};return window.addEventListener("scroll",updateScrollCompletion),()=>window.removeEventListener("scroll",updateScrollCompletion)},[]),e};let l={hidden:{opacity:0},enter:{opacity:1}};var template=e=>{let{children:t}=e,r=hooks_useScrollProgress();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.E.main,{variants:l,initial:"hidden",animate:"enter",transition:{type:"linear",delay:.2,duration:.4},children:t}),(0,n.jsx)("span",{style:{transform:"translateY(".concat(r-100,"%)")},className:"fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"})]})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,i={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[732,971,472,744],function(){return e(e.s=4230)}),_N_E=e.O()}]);