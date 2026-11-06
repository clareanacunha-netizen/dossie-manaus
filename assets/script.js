'use strict';
const printButton=document.querySelector('#print-button');
if(printButton) printButton.addEventListener('click',()=>window.print());
// Progressive enhancement: the complete article, sources and charts work without JavaScript.
const sourceDetails=document.querySelector('#fontes-completas');
function openSource(hash) {
  if (!hash.startsWith('#fonte-') || !sourceDetails) return;
  let id;
  try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
  const source = document.getElementById(id);
  if (!source || !sourceDetails.contains(source)) return;
  sourceDetails.open = true;
  requestAnimationFrame(() => source.scrollIntoView({ block: 'start' }));
}
window.addEventListener('hashchange',()=>openSource(location.hash));
openSource(location.hash);
if('IntersectionObserver' in window){
const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){document.querySelectorAll('nav a').forEach(a=>{const active=a.hash==='#'+e.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-10% 0px -65% 0px',threshold:0});
document.querySelectorAll('main > section[id]').forEach(s=>observer.observe(s));
}
