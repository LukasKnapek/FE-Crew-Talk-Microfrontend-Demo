import{_ as u}from"./preload-helper-101896b7.js";let r,l,c,p=(async()=>{const h=new Set(["Module","__esModule","default","_export_sfc"]);let d={"./Posts":()=>(r(["style-1d55ef7f.css"]),f("./__federation_expose_Posts-091d44ad.js").then(e=>Object.keys(e).every(t=>h.has(t))?()=>e.default:()=>e))},n;n={},r=e=>{const t=import.meta.url;if(typeof t>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const a=t.substring(0,t.lastIndexOf("remoteEntry.js"));e.forEach(_=>{const s=a+_;if(s in n)return;n[s]=!0;const o=document.head.appendChild(document.createElement("link"));o.href=s,o.rel="stylesheet"})};async function f(e){return u(()=>import(e).then(async t=>(await t.__tla,t)),[])}l=e=>d[e](),c=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([t,a])=>{const _=Object.keys(a)[0],s=Object.values(a)[0],o=s.scope||"default";globalThis.__federation_shared__[o]=globalThis.__federation_shared__[o]||{};const i=globalThis.__federation_shared__[o];(i[t]=i[t]||{})[_]=s})}})();export{p as __tla,r as dynamicLoadingCss,l as get,c as init};
