var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");const i={form:document.querySelector(".form"),delay:document.querySelector("[name ='delay']"),step:document.querySelector("[name ='step']"),amount:document.querySelector("[name ='amount']")};function l(e,o){const t=Math.random()>.3;return new Promise(((n,r)=>{setInterval((()=>{t?n({position:e,delay:o}):r({position:e,delay:o})}),o)}))}i.form.addEventListener("submit",(e=>{e.preventDefault(),function({delay:e,step:o,amount:t}){let n=Number(e.value),i=Number(t.value);for(let e=0;e<i;e++)l(e+1,n).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),n+=Number(o.value)}(i)}));
//# sourceMappingURL=03-promises.208ee3b2.js.map