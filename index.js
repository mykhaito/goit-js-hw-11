import{i as a,S as c}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l="48325175-5a13dcc75d858ba3a77e1c9bf",d="https://pixabay.com/api/";async function u(s){const r=`${d}?key=${l}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const o=await fetch(r);if(!o.ok)throw new Error("Ошибка при загрузке");return(await o.json()).hits}catch(o){throw console.error(o),o}}function f({webformatURL:s,largeImageURL:r,tags:o,likes:n,views:e,comments:t,downloads:i}){return`
      <a href="${r}" class="gallery__item">
          <img src="${s}" alt="${o}" class="gallery__image" />
          <div class="info">
              <p><b>Likes:</b> ${n}</p>
              <p><b>Views:</b> ${e}</p>
              <p><b>Comments:</b> ${t}</p>
              <p><b>Downloads:</b> ${i}</p>
          </div>
      </a>
  `}function m(s){const r=document.querySelector(".gallery");r.innerHTML=s.map(f).join("")}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#search-form"),r=s.querySelector("input");s.addEventListener("submit",async o=>{o.preventDefault();const n=r.value.trim();if(!n){a.error({title:"Error",message:"Введи запрос"});return}document.querySelector(".loader").classList.remove("hidden");try{const e=await u(n);e.length===0?a.info({title:"No Results",message:"Неправильно, введи нормальный запрос"}):(m(e),new c(".gallery a").refresh())}catch{a.error({title:"Error",message:"Не могу загрузить"})}finally{document.querySelector(".loader").classList.add("hidden")}})});
//# sourceMappingURL=index.js.map
