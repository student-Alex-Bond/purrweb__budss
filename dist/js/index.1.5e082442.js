(()=>{"use strict";var e="";(()=>{const e=document.querySelector(".nav__img"),s=document.querySelector(".hamburger"),t=document.querySelector(".nav__overlay"),n=()=>{t.classList.contains("show-menu")?(document.body.style="",t.classList.remove("show-menu")):(document.body.style.overflowY="hidden",t.classList.add("show-menu"))};s.addEventListener("click",n),e.addEventListener("click",n)})(),(()=>{const e=document.querySelector(".form__popup"),s=document.querySelector(".form"),t=s.querySelector(".form__btn-close"),n=s.querySelectorAll(".required__field"),c=s.querySelector(".form__error-message--bottom"),o=s.querySelector(".form__btn"),a=document.querySelector(".success"),i=()=>{e.classList.toggle("show-form")};n[2].classList.add("flag");const r=e=>{const s=Boolean(n[0].value),t=Boolean(n[1].value),a=Boolean(n[2].value),i=e.target,r=i.nextElementSibling;""===i.value?(i.classList.add("form__input--error"),r.style.display="block"):(i.classList.remove("form__input--error"),r.style.display="none"),s&&t&&a?(o.classList.remove("btn-disabled"),c.style.display="none",o.disabled=!1):(o.disabled=!0,c.style.display="block",o.classList.add("btn-disabled"))};n[2].addEventListener("input",(()=>{const e=n[2].value.replace(/\D+/g,"");let s;s=n[2].value.includes("+8")||"8"===n[2].value[0]?"":"+";for(let n=0;n<e.length&&n<11;n+=1){switch(n){case 0:s+="7"===(t=e[n])?"7 (":"8"===t?"8 (":"9"===t?"7 (9":"7 (";continue;case 4:s+=") ";break;case 7:case 9:s+="-"}s+=e[n]}var t;n[2].value=s})),n.forEach((e=>{e.addEventListener("keyup",r)})),t.addEventListener("click",i),s.addEventListener("submit",(e=>{e.preventDefault(),i(),a.style.animationDuration="1s",a.style.animationName="animation-for-modal-success",a.classList.add("show-success")})),document.body.addEventListener("click",(e=>{e.target.classList.contains("show-form")&&i()}))})();const s=document.querySelector(".success"),t=s.querySelectorAll("button"),n=()=>{s.style.animation="",s.classList.toggle("show-success")};t.forEach((e=>{e.addEventListener("click",n)}));const c=e+"assets/img/icons/benefit__item-2-2.d88df042.svg",o=e+"assets/img/icons/benefit__item-2-3.1f4f1b4f.svg",a=e+"assets/img/icons/benefit__item-1.54bfd352.svg",i=e+"assets/img/benefit__item-1__desktop.3c4bc170.webp",r=e+"assets/img/benefit__item-1__desktop__2x.489da3ad.webp";(()=>{const e=document.querySelectorAll(".benefit-budss__item"),s=e[0].querySelector("img"),t=[c,o];for(let s=0;s<2;s+=1){const n=document.createElement("img");n.src=t[s],n.classList.add(`benefit-budss__item-img-1-${s+1}`),e[1].appendChild(n)}const n=`\n        <picture class='benefit-budss__item-img-0 benefit-budss__item-img '>\n            <source media="(max-width: 376px)" srcset=${a}></source>\n            <source media="(min-width: 1240px)" srcset=${i}></source>\n            <source media="(min-width: 1440px)" srcset='${r} 2x'></source>\n            <img class='benefit-budss__item-img-0 benefit-budss__item-img' src=${a}/>\n        <picture/>\n    `;e[0].removeChild(s),e[0].insertAdjacentHTML("beforeend",n)})(),(()=>{const e=document.querySelectorAll(".advantages__string");e[2].insertAdjacentHTML("afterend","<span class='advantages__string'>\n             Growth in New <br class='advantages__br'> Customers</span>"),e[2].parentNode.removeChild(e[2])})(),(()=>{const e=document.querySelectorAll(".tabs__button");e.forEach((s=>{s.addEventListener("click",(s=>{e.forEach((e=>{e.classList.remove("tabs__button-active")})),s.target.classList.add("tabs__button-active")}))}))})()})();