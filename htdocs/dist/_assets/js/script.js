!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=()=>{if($(".accordion").length){let e=function(e,t){this.el=e||{},this.multiple=t||!1,this.el.find(".accordion__item__head").on("click",{el:this.el,multiple:this.multiple},this.dropdown)};e.prototype.dropdown=function(e){let t=e.data.el;$this=$(this),$acc_content=$this.parent(".accordion__item").find(".accordion__item__body"),$acc_content.slideToggle(),$this.parents(".accordion__item").toggleClass("is-open"),!e.data.multiple&&t.find(".accordion__item__body").not($acc_content).slideUp().parents(".accordion__item").removeClass("is-open")};new e($(".accordion"),!0)}},i=()=>{if($(".custom-select").length){var e,t,n,i,o,s,l;for(e=document.getElementsByClassName("custom-select"),t=0;t<e.length;t++){for(i=e[t].getElementsByTagName("select")[0],(o=document.createElement("DIV")).setAttribute("class","select-selected"),o.innerHTML=i.options[i.selectedIndex].innerHTML,e[t].appendChild(o),(s=document.createElement("DIV")).setAttribute("class","select-items select-hide"),n=1;n<i.length;n++)(l=document.createElement("DIV")).innerHTML=i.options[n].innerHTML,l.addEventListener("click",(function(e){var t,n,i,o,s;for(o=this.parentNode.parentNode.getElementsByTagName("select")[0],s=this.parentNode.previousSibling,n=0;n<o.length;n++)if(o.options[n].innerHTML==this.innerHTML){for(o.selectedIndex=n,s.innerHTML=this.innerHTML,t=this.parentNode.getElementsByClassName("same-as-selected"),i=0;i<t.length;i++)t[i].removeAttribute("class");this.setAttribute("class","same-as-selected");break}s.click()})),s.appendChild(l);e[t].appendChild(s),o.addEventListener("click",(function(e){e.stopPropagation(),r(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")}))}function r(e){var t,n,i,o=[];for(t=document.getElementsByClassName("select-items"),n=document.getElementsByClassName("select-selected"),i=0;i<n.length;i++)e==n[i]?o.push(i):n[i].classList.remove("select-arrow-active");for(i=0;i<t.length;i++)o.indexOf(i)&&t[i].classList.add("select-hide")}document.addEventListener("click",r)}};$((function(){n(),(()=>{if($(".js-kv__slider").length){new Swiper(".js-kv__slider",{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},speed:1e3,slidesPerView:1,observer:!0,observeParents:!0,grabCursor:!0,watchOverflow:!0,pagination:{el:".kv__slider__pagi",clickable:!0},navigation:{nextEl:".kv__slider__next",prevEl:".kv__slider__prev",clickable:!0}})}})(),i(),$(".js-toTop").click((function(e){e.preventDefault(),$("html, body").delay(300).animate({scrollTop:0},800)})),(()=>{let e=$(".modal"),t=$(".modal__box"),n=$(".js-openModal"),i=$(".modal__box__closeButton");n.click(()=>{e.addClass("is-open"),setTimeout(()=>{t.addClass("is-active")},300)}),i.click(()=>{t.removeClass("is-active"),setTimeout(()=>{e.removeClass("is-open")},600)})})()})),$(window).on("load resize scroll",(function(){}))}]);
//# sourceMappingURL=script.js.map