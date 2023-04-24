import{r as c}from"./index-430f8d94.js";var i={},p={get exports(){return i},set exports(r){i=r}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=c,f=Symbol.for("react.element"),d=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,x=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function _(r,e,s){var t,o={},a=null,l=null;s!==void 0&&(a=""+s),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)g.call(e,t)&&!v.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:f,type:r,key:a,ref:l,props:o,_owner:x.current}}n.Fragment=d;n.jsx=_;n.jsxs=_;(function(r){r.exports=n})(p);const y="_imageGrid_59u5k_1",j="_imageItem_59u5k_8",k="_imageTitle_59u5k_29",m={imageGrid:y,imageItem:j,imageTitle:k},O=({nImages:r=30})=>i.jsx("div",{className:m.imageGrid,children:[...new Array(r)].map((e,s)=>i.jsxs("div",{className:m.imageItem,children:[i.jsx("img",{src:`https://loremflickr.com/400/400/plant?lock=${s}`}),i.jsx("div",{className:m.imageTitle,children:`Plant ${s}`})]},s))});export{O as default,i as j};
