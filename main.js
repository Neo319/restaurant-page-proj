(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var i=t(537),a=t.n(i),o=t(645),r=t.n(o)()(a());r.push([n.id,"* {\n    /* border: 1px solid red; */\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\nbody {\n    margin: 0;\n}\n\n#logo {\n    height: 100px;\n    width: 100px;\n}\n\nheader {\n    background-color: #637A9F;\n    padding-bottom: 1rem;\n}\n\n#content {\n    background-color: #C9D7DD;\n    min-height: 100vh;\n    padding-top: 5vh;\n    padding-bottom: 10vh;\n}\n\n#logoDiv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#logoDiv span {\n    color: #E8C872;\n    font-weight: 700;\n    font-style: italic;\n}\n\n.nav {\n    display: flex;\n    gap: 20px;\n}\n\nbutton {\n    padding: 1rem;\n    background-color: #C9D7DD;\n    font-weight: 700;\n    font-size: 1.2em;\n\n    border: 2px solid #637A9F;\n    border-radius: 25px;\n    color: #637A9F;\n}\n\nbutton:hover {\n    background-color: #E8C872;\n    color: white;\n    border: 2px solid black;\n}\n\nheader,\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.food-img {\n    filter: brightness(50%);\n    border-radius: 5px;\n    width: 85vw;\n\n    object-fit: cover;\n    height: 35vh;\n    margin: 20px;\n}\n\n#firstCard,\n#secondCard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    padding: 20px;\n\n}\n\n#FCtext,\n#SCtext {\n    position: absolute;\n    color: white;\n    z-index: 1;\n\n    font-size: 0.9em;\n    max-width: 85vw;\n\n    margin: 100px;\n\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n}\n\n#FCtext h3,\n#SCtext h3 {\n    font-size: 1.3em;\n}\n\n#FCtext button,\n#SCtext button {\n    font-size: 1em;\n    padding: 10px;\n}\n\n/* menu page */\n.menu-item {\n    margin-left: 15vw;\n    margin-right: 15vw;\n}\n\n\n/* about page */\n#about-page-image {\n    border-radius: 5px;\n    width: 70vw;\n\n    object-fit: cover;\n    height: 35vh;\n    margin: 20px;\n}\n\n#about-main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-left: 20vw;\n    padding-right: 20vw;\n    max-width: 60vw;\n}\n\n#rightPara {\n    max-width: 60vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n@media only screen and (min-width: 700px) {\n\n    .food-img {\n        height: 70vh;\n    }\n\n    #logo {\n        width: 10vw;\n        height: 10vw;\n    }\n\n    #logoDiv span {\n        font-size: 1.6vw;\n    }\n\n    header {\n        flex-direction: row;\n        gap: 5vw;\n        align-items: center;\n        padding-bottom: 0;\n    }\n\n    #FCtext h3,\n    #SCtext h3 {\n        margin-left: 10vw;\n        margin-right: 10vw;\n\n        font-size: 4vw;\n        text-align: center;\n    }\n\n    #FCtext p,\n    #SCtext p {\n        margin-left: 10vw;\n        margin-right: 10vw;\n\n        font-size: 2vw;\n        text-align: center;\n\n    }\n\n    #FCtext button,\n    #SCtext button {\n        font-size: 1.5vw;\n        margin-bottom: 10vh;\n    }\n\n    /* menu page */\n    .menu-item {\n        margin-left: 30vw;\n        margin-right: 30vw;\n    }\n\n    /* about page */\n    #about-main {\n        flex-direction: row;\n        padding-left: 10vw;\n        padding-right: 10vw;\n        max-width: 80vw;\n        align-items:flex-start\n    }\n\n    #about-page-image {\n        width: 30vw;\n    }\n\n    #rightPara, #leftPara {\n        margin-left: 5px;\n        margin-right: 5px;\n        max-width: 30vw;\n    }\n\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,2BAA2B;IAC3B,6EAA6E;AACjF;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;;IAEhB,yBAAyB;IACzB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;;IAEX,iBAAiB;IACjB,YAAY;IACZ,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;;IAEvB,aAAa;;AAEjB;;AAEA;;IAEI,kBAAkB;IAClB,YAAY;IACZ,UAAU;;IAEV,gBAAgB;IAChB,eAAe;;IAEf,aAAa;;IAEb,aAAa;IACb,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,cAAc;IACd,aAAa;AACjB;;AAEA,cAAc;AACd;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA,eAAe;AACf;IACI,kBAAkB;IAClB,WAAW;;IAEX,iBAAiB;IACjB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;;AAGA;;IAEI;QACI,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,mBAAmB;QACnB,QAAQ;QACR,mBAAmB;QACnB,iBAAiB;IACrB;;IAEA;;QAEI,iBAAiB;QACjB,kBAAkB;;QAElB,cAAc;QACd,kBAAkB;IACtB;;IAEA;;QAEI,iBAAiB;QACjB,kBAAkB;;QAElB,cAAc;QACd,kBAAkB;;IAEtB;;IAEA;;QAEI,gBAAgB;QAChB,mBAAmB;IACvB;;IAEA,cAAc;IACd;QACI,iBAAiB;QACjB,kBAAkB;IACtB;;IAEA,eAAe;IACf;QACI,mBAAmB;QACnB,kBAAkB;QAClB,mBAAmB;QACnB,eAAe;QACf;IACJ;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,gBAAgB;QAChB,iBAAiB;QACjB,eAAe;IACnB;;AAEJ",sourcesContent:["* {\n    /* border: 1px solid red; */\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\nbody {\n    margin: 0;\n}\n\n#logo {\n    height: 100px;\n    width: 100px;\n}\n\nheader {\n    background-color: #637A9F;\n    padding-bottom: 1rem;\n}\n\n#content {\n    background-color: #C9D7DD;\n    min-height: 100vh;\n    padding-top: 5vh;\n    padding-bottom: 10vh;\n}\n\n#logoDiv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#logoDiv span {\n    color: #E8C872;\n    font-weight: 700;\n    font-style: italic;\n}\n\n.nav {\n    display: flex;\n    gap: 20px;\n}\n\nbutton {\n    padding: 1rem;\n    background-color: #C9D7DD;\n    font-weight: 700;\n    font-size: 1.2em;\n\n    border: 2px solid #637A9F;\n    border-radius: 25px;\n    color: #637A9F;\n}\n\nbutton:hover {\n    background-color: #E8C872;\n    color: white;\n    border: 2px solid black;\n}\n\nheader,\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.food-img {\n    filter: brightness(50%);\n    border-radius: 5px;\n    width: 85vw;\n\n    object-fit: cover;\n    height: 35vh;\n    margin: 20px;\n}\n\n#firstCard,\n#secondCard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    padding: 20px;\n\n}\n\n#FCtext,\n#SCtext {\n    position: absolute;\n    color: white;\n    z-index: 1;\n\n    font-size: 0.9em;\n    max-width: 85vw;\n\n    margin: 100px;\n\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n}\n\n#FCtext h3,\n#SCtext h3 {\n    font-size: 1.3em;\n}\n\n#FCtext button,\n#SCtext button {\n    font-size: 1em;\n    padding: 10px;\n}\n\n/* menu page */\n.menu-item {\n    margin-left: 15vw;\n    margin-right: 15vw;\n}\n\n\n/* about page */\n#about-page-image {\n    border-radius: 5px;\n    width: 70vw;\n\n    object-fit: cover;\n    height: 35vh;\n    margin: 20px;\n}\n\n#about-main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-left: 20vw;\n    padding-right: 20vw;\n    max-width: 60vw;\n}\n\n#rightPara {\n    max-width: 60vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n@media only screen and (min-width: 700px) {\n\n    .food-img {\n        height: 70vh;\n    }\n\n    #logo {\n        width: 10vw;\n        height: 10vw;\n    }\n\n    #logoDiv span {\n        font-size: 1.6vw;\n    }\n\n    header {\n        flex-direction: row;\n        gap: 5vw;\n        align-items: center;\n        padding-bottom: 0;\n    }\n\n    #FCtext h3,\n    #SCtext h3 {\n        margin-left: 10vw;\n        margin-right: 10vw;\n\n        font-size: 4vw;\n        text-align: center;\n    }\n\n    #FCtext p,\n    #SCtext p {\n        margin-left: 10vw;\n        margin-right: 10vw;\n\n        font-size: 2vw;\n        text-align: center;\n\n    }\n\n    #FCtext button,\n    #SCtext button {\n        font-size: 1.5vw;\n        margin-bottom: 10vh;\n    }\n\n    /* menu page */\n    .menu-item {\n        margin-left: 30vw;\n        margin-right: 30vw;\n    }\n\n    /* about page */\n    #about-main {\n        flex-direction: row;\n        padding-left: 10vw;\n        padding-right: 10vw;\n        max-width: 80vw;\n        align-items:flex-start\n    }\n\n    #about-page-image {\n        width: 30vw;\n    }\n\n    #rightPara, #leftPara {\n        margin-left: 5px;\n        margin-right: 5px;\n        max-width: 30vw;\n    }\n\n}"],sourceRoot:""}]);const c=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(r[d]=!0)}for(var s=0;s<n.length;s++){var A=[].concat(n[s]);i&&r[A[0]]||(void 0!==o&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=o),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),a&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=a):A[4]="".concat(a)),e.push(A))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},r=[],c=0;c<n.length;c++){var d=n[c],s=i.base?d[0]+i.base:d[0],A=o[s]||0,l="".concat(s," ").concat(A);o[s]=A+1;var u=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var p=a(m,i);i.byIndex=c,e.splice(c,0,{identifier:l,updater:p,references:1})}r.push(l)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=i(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var c=t(o[r]);e[c].references--}for(var d=i(n,a),s=0;s<o.length;s++){var A=t(o[s]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var a=i.length-1;a>-1&&!n;)n=i[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=function(){const n=document.getElementById("content");n.innerHTML="";const e=document.createElement("h2");e.textContent="MENU",n.appendChild(e);const t=document.createElement("div");t.classList="menu-item";const i=document.createElement("h3");i.textContent="BREAKFAST";const a=document.createElement("div"),o=document.createElement("h4"),r=document.createElement("p");o.textContent="French Toast Breakfast Sandwich",r.textContent="A sweet and filling treat that combines light, fluffy cream cheese and sweet blueberries and strawberries with pan-fried french toast.",a.appendChild(o),a.appendChild(r);const c=document.createElement("div"),d=document.createElement("h4"),s=document.createElement("p");d.textContent="The Works",s.textContent="Your standard breakfast-diner fare: eggs (done how you like them) and breakfast sausages with hashbrowns and your choice of toast on the side.",c.appendChild(d),c.appendChild(s),t.appendChild(i),t.appendChild(a),t.appendChild(c);const A=document.createElement("div");A.classList="menu-item";const l=document.createElement("h3");l.textContent="LUNCH";const u=document.createElement("div"),m=document.createElement("h4"),p=document.createElement("p");m.textContent="Chicken Noodle Soup Special",p.textContent="Our famous, deliciously savoury chicken noodle soup, with a classy, down-to-earth charm.",u.appendChild(m),u.appendChild(p);const h=document.createElement("div"),g=document.createElement("h4"),C=document.createElement("p");g.textContent="Cucumber Sandwich",C.textContent="A smaller snack, but not passing up on flavor, as this sandwich comes stacked with sliced cucumber, tomato, red onion, and lettuce, with the option to include extra mayonnaise. ",h.appendChild(g),h.appendChild(C),A.appendChild(l),A.appendChild(u),A.appendChild(h);const f=document.createElement("div");f.classList="menu-item";const B=document.createElement("h3");B.textContent="DINNER";const v=document.createElement("div"),x=document.createElement("h4"),I=document.createElement("p");x.textContent="Pizza & Wings Combo",I.textContent="The ultimate in comfort food! Try our fresh, wood-stove cooked pies today!",v.appendChild(x),v.appendChild(I);const b=document.createElement("div"),w=document.createElement("h4"),E=document.createElement("p");w.textContent="Beef Stew",E.textContent="Our beef stew is slow-cooked from the start of each morning to bring you the ultimate in savory goodness. Served with fresh buns for dipping.",b.appendChild(w),b.appendChild(E),f.appendChild(B),f.appendChild(v),f.appendChild(b),n.appendChild(t),n.appendChild(A),n.appendChild(f)},e=t.p+"e12abedd01e3a8f68c66.jpg",i=t.p+"c9448e1649182cae4c8c.jpg",a=function(){const t=document.getElementById("content");t.innerHTML="";const a=document.createElement("div");a.id="firstCard";const o=new Image;o.src=e,o.id="food-1",o.classList="food-img",o.alt="french toast with berries";const r=document.createElement("div"),c=document.createElement("h3"),d=document.createElement("p");c.textContent="BREAKFAST SANDWICH SPECIAL",d.textContent="Don't miss out on the heavenly goodness of our french toast and berry breakfast sandwiches, now available for a limited time at 90% OFF!",r.id="FCtext";const s=document.createElement("button");s.id="FCbtn",s.textContent="ORDER NOW",r.appendChild(c),r.appendChild(d),r.appendChild(s),a.appendChild(r),a.appendChild(o),t.appendChild(a);const A=document.createElement("div");A.id="secondCard";const l=new Image;l.src=i,l.id="food-2",l.classList="food-img",l.alt="chicken noodle soup";const u=document.createElement("div");u.id="SCtext";const m=document.createElement("h3"),p=document.createElement("p");m.textContent="LUNCH OPTION HIGHLIGHTS",p.textContent="Gift yourself with a savoury warm treat with our special lunch offers, including our special chicken noodle stew. ";const h=document.createElement("button");h.id="SCbtn",h.textContent="VIEW MENU",u.appendChild(m),u.appendChild(p),u.appendChild(h),A.appendChild(l),A.appendChild(u),t.appendChild(A),s.addEventListener("click",n),h.addEventListener("click",n)},o=t.p+"a866d4fb74cd1657cab0.png";var r=t(379),c=t.n(r),d=t(795),s=t.n(d),A=t(569),l=t.n(A),u=t(565),m=t.n(u),p=t(216),h=t.n(p),g=t(589),C=t.n(g),f=t(426),B={};B.styleTagTransform=C(),B.setAttributes=m(),B.insert=l().bind(null,"head"),B.domAPI=s(),B.insertStyleElement=h(),c()(f.Z,B),f.Z&&f.Z.locals&&f.Z.locals,console.log("Hi, I am from index.js!"),function(){const n=document.querySelector("header"),e=document.createElement("div");e.id="logoDiv";const t=new Image;t.src=o,t.id="logo";const i=document.createElement("span");i.textContent="Smilee's Diner",e.appendChild(t),e.appendChild(i),n.insertBefore(e,n.firstChild)}(),a();const v=document.getElementById("home"),x=document.getElementById("menu"),I=document.getElementById("about");v.addEventListener("click",a),x.addEventListener("click",n),I.addEventListener("click",(function(){const n=document.getElementById("content");n.innerHTML="";const e=document.createElement("h2");e.textContent="ABOUT",n.appendChild(e);const t=document.createElement("div");t.id="about-main";const i=document.createElement("div");i.id="leftPara";const a=document.createElement("p"),o=document.createElement("p");a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula orci justo. Maecenas mi sapien, lacinia sit amet mattis vitae, dapibus non purus. Duis tincidunt vehicula dictum. Proin luctus, purus id varius rhoncus, ex ipsum maximus lectus, scelerisque pretium metus arcu eu dui. Praesent dignissim pharetra ligula pulvinar gravida. Duis in volutpat mi. Suspendisse vel risus vitae arcu tempus feugiat. Aliquam tincidunt feugiat tellus non sollicitudin.",o.textContent="Duis fermentum dapibus sapien quis dignissim. Integer ac lectus ac arcu luctus molestie ac eget odio. Ut porttitor massa sapien, malesuada posuere odio viverra non. Nam a auctor odio. Suspendisse rutrum lobortis libero, vel tempus ex maximus vitae. Donec dapibus pretium metus eu vehicula. In hac habitasse platea dictumst. Praesent dignissim posuere aliquet. Nunc eget libero ac turpis facilisis scelerisque. Duis viverra rhoncus arcu, sed mollis tellus aliquet vel. Etiam ante ex, placerat sit amet lacinia auctor, placerat nec lacus. Integer sed dapibus ante.",i.appendChild(a),i.appendChild(o),t.appendChild(i);const r=document.createElement("div");r.id="rightPara";const c=document.createElement("p"),d=new Image;d.src="../src/cup.jpg",d.id="about-page-image",c.textContent="Phasellus nec sodales erat. Fusce in nulla at libero tincidunt sagittis. In ut magna nec tellus laoreet gravida. Nunc consequat neque ac velit malesuada, ac fringilla libero ullamcorper. Duis finibus urna quis arcu sodales accumsan. Sed eleifend augue ut justo sodales, at congue augue molestie. Morbi sodales ante quis mattis elementum. Donec elementum bibendum leo, et dapibus justo dictum in. Quisque ac purus cursus, consectetur purus nec, facilisis nunc. Aenean dictum consequat risus, ac ornare mauris porta eu. Fusce ultrices neque id fringilla vulputate. Integer tincidunt enim vitae bibendum aliquet. Morbi pharetra eros quis tortor commodo, eu facilisis purus vulputate. Sed venenatis mi est, sit amet luctus lacus posuere et. Quisque tempor nec elit id vulputate.",r.appendChild(d),r.appendChild(c),t.appendChild(r),n.appendChild(t)}))})()})();
//# sourceMappingURL=main.js.map