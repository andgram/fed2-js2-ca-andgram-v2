import{r as n}from"./read-DVWSykXA.js";import{d as a}from"./displayMessage-CqJwHQFs.js";import{a as i}from"./authGuard-C2GFzsuy.js";import"./auth-fjUhtDne.js";function c(e,t){if(t.lenght===0){e.innerHTML='<div class="message">No posts yet</div>';return}e.innerHTML="";const r=t.map(s=>d(s));e.append(...r)}function d(e){const{id:t,title:r}=e,s=document.createElement("a");s.classList.add("post"),s.href=`/post/?id=${t}`;const o=document.createElement("h3");return o.innerText=r,s.appendChild(o),s}i();async function m(){const e=document.querySelector("#posts");try{const t=await n();c(e,t.data)}catch(t){console.error(t),a(e,"error",t.message)}}m();
