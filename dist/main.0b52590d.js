parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kIr2":[function(require,module,exports) {
module.exports.styleText='\n.skin {\n  position: absolute;\n  top: 48%;\n  width: 34vmin;\n  height: 22vmin;\n  z-index: 0;\n}\n\n.heart {\n  position: absolute;\n  width: 6%;\n  height: 7%;\n  background-color: #e64356;\n  border-bottom-right-radius: 23%;\n  opacity: 0;\n  animation-fill-mode: both;\n}\n@keyframes heart-beat {\n  0% {\n    transform: scale(0.75) rotate(35deg);\n    opacity: 1;\n  }\n  5%, 15%, 25% {\n    transform: scale(1) rotate(35deg);\n  }\n  10%, 20% {\n    transform: scale(0.75) rotate(35deg);\n  }\n  70% {\n    opacity: 1;\n  }\n  100% {\n    transform: rotate(35deg) translateY(-10px) translateX(-10px);\n    opacity: 0;\n  }\n}\n.heart--1 {\n  top: -25%;\n  left: 15%;\n  animation: heart-beat 2s ease-out infinite 1.5s;\n}\n.heart--2 {\n  top: -36%;\n  left: 7%;\n  animation: heart-beat 2s ease-out infinite 1s;\n}\n.heart--3 {\n  top: -48%;\n  left: 14%;\n  animation: heart-beat 2s ease-out infinite 0.5s;\n}\n.heart--4 {\n  top: -53%;\n  left: -3%;\n  animation: heart-beat 2s ease-out infinite;\n}\n\n.heart:before,\n.heart:after {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  content: "";\n  border-radius: 50%;\n  background-color: #e64356;\n}\n\n.heart:after {\n  bottom: 0px;\n  left: -53%;\n}\n\n.heart:before {\n  top: -53%;\n  right: 0px;\n  transform: rotate(45deg);\n}\n\n.body {\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  background-color: #f79e38;\n  border-top-right-radius: 17% 40%;\n  border-top-left-radius: 25%;\n  border-bottom-right-radius: 5% 13%;\n  border-bottom-left-radius: 30% 40%;\n  z-index: 3;\n}\n\n.cheast {\n  position: absolute;\n  width: 45%;\n  height: 100%;\n  background-color: #fff;\n  border-top-right-radius: 17% 40%;\n  border-top-left-radius: 25%;\n  border-bottom-right-radius: 40% 40%;\n  border-bottom-left-radius: 40% 40%;\n  z-index: 4;\n}\n.cheast:after, .cheast:before {\n  position: absolute;\n  content: "";\n  width: 7%;\n  height: 55%;\n  border-radius: 39%;\n  background-color: #fff;\n}\n.cheast:after {\n  top: 36%;\n  left: 3%;\n  transform: rotate(-1deg);\n}\n.cheast:before {\n  top: 19%;\n  left: -4%;\n}\n\n.head {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n  animation: dog-head 1s ease-out infinite;\n  animation-fill-mode: both;\n  animation-direction: alternate;\n}\n@keyframes dog-head {\n  to {\n    transform: translateX(-3px) rotate(3deg);\n  }\n}\n\n.tail {\n  position: absolute;\n  top: -14%;\n  left: 92%;\n  width: 10%;\n  height: 45%;\n  background-color: #f79e38;\n  border-top-right-radius: 30% 30%;\n  border-top-left-radius: 40% 30%;\n  border-bottom-right-radius: 30% 40%;\n  border-bottom-left-radius: 40% 40%;\n  z-index: 2;\n  transform: rotate(20deg);\n  animation: dog-tail 170ms ease-out infinite;\n}\n@keyframes dog-tail {\n  from, to {\n    transform: rotate(10deg);\n  }\n  50%, 60% {\n    transform: rotate(70deg) translateX(10px) translateY(2px);\n  }\n}\n.tail:before {\n  position: absolute;\n  content: "";\n  top: -8%;\n  left: -7%;\n  width: 100%;\n  height: 50%;\n  background-color: #f79e38;\n  border-radius: 50%;\n  animation: dog-tail-before 160ms ease-out infinite;\n}\n@keyframes dog-tail-before {\n  from, to {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(3px);\n  }\n}\n\n.legs {\n  position: absolute;\n  top: 97%;\n  left: 0;\n  width: 100%;\n  height: 30%;\n  z-index: 2;\n  animation: dog-legs 1s ease-out infinite 1.5s;\n  animation-fill-mode: both;\n  animation-direction: alternate;\n}\n@keyframes dog-legs {\n  from {\n    transform: translateY(-1px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n.legs__front, .legs__back {\n  width: 10%;\n  height: 100%;\n  background-color: #f79e38;\n  position: absolute;\n  border-bottom-right-radius: 100%;\n  border-bottom-left-radius: 100%;\n}\n.legs__front:after, .legs__back:after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  height: 49%;\n  background-color: #fff;\n  border-bottom-right-radius: 100%;\n  border-bottom-left-radius: 100%;\n}\n.legs__front--left {\n  left: 38%;\n  transform: rotate(1deg);\n}\n.legs__front--right {\n  left: 20%;\n  transform: rotate(-4deg);\n}\n.legs__back--left {\n  left: 69%;\n  transform: rotate(-7deg);\n}\n.legs__back--right {\n  left: 85%;\n  transform: rotate(2deg);\n}\n\n.face {\n  height: 40%;\n  width: 42%;\n  position: absolute;\n  top: -13%;\n  left: -3%;\n  background-color: #fff;\n  border-top-right-radius: 45% 50%;\n  border-top-left-radius: 35% 50%;\n  border-bottom-left-radius: 35% 21%;\n  z-index: 6;\n}\n.face:after, .face:before {\n  content: "";\n  position: absolute;\n  background-color: #f79e38;\n}\n.face:after {\n  width: 27%;\n  left: 7%;\n  height: 23%;\n  border-top-right-radius: 100% 100%;\n  border-bottom-left-radius: 49% 100%;\n  transform: rotate(-64deg);\n  top: -1%;\n  border-top-left-radius: 0% -20%;\n  border-bottom-right-radius: 52% 0%;\n  box-shadow: rgba(0, 0, 0, 0.1) 2px -6px 11px 1px;\n}\n.face:before {\n  width: 55%;\n  left: 42%;\n  top: 0%;\n  height: 35%;\n  border-radius: 23% 7% 16% 12%;\n  transform: rotate(0deg) scaleX(-1);\n}\n\n.eye {\n  width: 6%;\n  height: 6%;\n  position: absolute;\n  border-radius: 100%;\n  top: 24%;\n  background-color: #000;\n  z-index: 6;\n  animation: dog-eye 1800ms infinite;\n}\n@keyframes dog-eye {\n  from, to {\n    animation-timing-function: step-end;\n    opacity: 1;\n  }\n  50%, 55% {\n    animation-timing-function: step-start;\n    opacity: 0;\n  }\n}\n.eye--left {\n  left: 27%;\n}\n.eye--right {\n  left: 46%;\n}\n\n.mouth {\n  background-color: transparent;\n  border-color: #000;\n  width: 44%;\n  border-style: solid;\n  border-width: 0.7vmin;\n  height: 48%;\n  z-index: 6;\n  position: absolute;\n  bottom: 35%;\n  left: 14%;\n  border-top-color: transparent;\n  border-bottom-left-radius: 72% 100%;\n  border-bottom-right-radius: 77% 100%;\n  border-right-color: transparent;\n  border-top-right-radius: 50%;\n  border-left-color: transparent;\n  transform: rotate(-41deg);\n}\n\n.year {\n  position: absolute;\n}\n.year--left {\n  top: -40%;\n  left: 3%;\n  height: 47%;\n  width: 19%;\n  z-index: 1;\n  background-color: #e99036;\n  border-top-left-radius: 68% 100%;\n  border-top-right-radius: 100% 100%;\n  transform-origin: bottom center;\n  animation: left-year 1000ms ease-out infinite;\n  animation-fill-mode: both;\n  animation-direction: alternate;\n}\n@keyframes left-year {\n  from {\n    transform: rotate(-26deg);\n  }\n  25% {\n    transform: rotate(-35deg);\n  }\n  50% {\n    transform: rotate(-26deg);\n  }\n  to {\n    transform: rotate(-40deg);\n  }\n}\n.year--right {\n  top: -39%;\n  left: 19%;\n  height: 38%;\n  width: 18%;\n  z-index: 1;\n  background-color: #f79e38;\n  border-top-left-radius: 56% 100%;\n  border-top-right-radius: 100% 100%;\n  transform-origin: bottom center;\n  border-bottom-right-radius: 14% 38%;\n  animation: right-year 1000ms ease-out infinite;\n  animation-fill-mode: both;\n  animation-direction: alternate;\n}\n@keyframes right-year {\n  from {\n    transform: rotate(-331deg);\n  }\n  25% {\n    transform: rotate(-320deg);\n  }\n  50% {\n    transform: rotate(-331deg);\n  }\n  to {\n    transform: rotate(-320deg);\n  }\n}\n\n.nose {\n  position: absolute;\n  width: 24%;\n  height: 24%;\n  background-color: #fff;\n  z-index: 7;\n  left: -12%;\n  top: -3%;\n  border-bottom-left-radius: 50% 88%;\n  border-top-left-radius: 11% 43%;\n  transform: rotate(12deg);\n}\n.nose:after {\n  content: "";\n  position: absolute;\n  width: 50%;\n  height: 55%;\n  background-color: #000;\n  border-radius: 100%;\n  left: -7%;\n  top: -18%;\n}\n\n\n';
},{}],"EzG2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./style.js"),n=e.styleText,t={interval:!1,id:void 0,time:0,n:0,ui:{terminal:document.querySelector("#terminal"),styleDiv:document.querySelector("#demo2")},init:function(e){t.music=e,t.ui.terminal.innerText=n.substring(0,t.n),t.ui.styleDiv.innerHTML=n.substring(0,t.n),t.play(),t.bind()},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},bind:function(){for(var e in t.events)if(t.events.hasOwnProperty(e)){var n=t.events[e];document.querySelector(e).onclick=t[n]}},run:function(){t.n=t.n+1,t.n>n.length?t.clearInterval():(t.ui.terminal.innerText=n.substring(0,t.n),t.ui.styleDiv.innerHTML=n.substring(0,t.n),t.ui.terminal.scrollTop=t.ui.terminal.scrollHeight)},play:function(){t.n>n.length&&(t.n=0),t.interval||(t.music&&t.music.play(),t.id=setInterval(t.run,t.time),t.interval=!0)},clearInterval:function(){window.clearInterval(t.id),t.interval=!1},pause:function(){t.music&&t.music.pause(),t.clearInterval()},slow:function(){t.pause(),t.time=200,t.play()},normal:function(){t.pause(),t.time=50,t.play()},fast:function(){t.pause(),t.time=0,t.play()}},i=t;exports.default=i;
},{"./style.js":"kIr2"}],"epB2":[function(require,module,exports) {
var e=require("./player/index"),r=e.Player,i=document.querySelector("#music");r.init(i),document.querySelector(".loading").classList.add("hide");
},{"./player/index":"EzG2"}]},{},["epB2"], null)
//# sourceMappingURL=/main.0b52590d.js.map