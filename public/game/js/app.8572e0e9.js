(function(e){function t(t){for(var a,r,u=t[0],c=t[1],s=t[2],d=0,m=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-46f3955e":"65b3b547","chunk-63c3506c":"739c1297","chunk-6e65711b":"0d9aee5f","chunk-e756468a":"c82ccbec"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-46f3955e":1,"chunk-63c3506c":1,"chunk-6e65711b":1,"chunk-e756468a":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-46f3955e":"d5994cc5","chunk-63c3506c":"09adbc0f","chunk-6e65711b":"b4a1ce62","chunk-e756468a":"387eaba0"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===o))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){s=m[u],d=s.getAttribute("data-href");if(d===a||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],l.parentNode.removeChild(l),n(i)},l.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=u(e);var m=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",m.name="ChunkLoadError",m.type=a,m.request=r,n[1](m)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/game/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var l=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[n("canvas",{ref:"canvas",staticClass:"canvas"}),n("transition",{attrs:{name:"fade"}},[e.imagesReady?n("router-view",{directives:[{name:"show",rawName:"v-show",value:e.isLoaded,expression:"isLoaded"}]}):e._e()],1)],1)},o=[],i=(n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("bc3a")),u=n.n(i),c={data:function(){return{imagesReady:!1}},computed:{isLoaded:function(){return this.$store.state.midori.isLoaded},update:function(){return this.$store.state.midori.update}},created:function(){var e=this;u.a.get("/character").then((function(t){e.$store.commit("Roster/setData",t.data)})).catch((function(e){console.log(e)})),this.$store.commit("user/SET_USER",{_id:Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,10),username:Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,9),isLoggedIn:!0,avatarId:Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5)})},mounted:function(){var e=this;this.$store.dispatch("midori/setCanvas",this.$refs.canvas).then((function(t){e.imagesReady=t}))},watch:{update:function(e){e&&(2===this.$store.state.midori.index?this.$store.commit("midori/setHomeBackground"):this.$store.commit("midori/setTurnBackground")),this.$store.state.midori.update=!1}},beforeDestroy:function(){this.$store.commit("midori/cleanUp")}},s=c,d=(n("5c0b"),n("2877")),m=Object(d["a"])(s,r,o,!1,null,null,null),l=m.exports,f=n("8c4f");a["a"].use(f["a"]);var p=[{path:"/",component:function(){return n.e("chunk-6e65711b").then(n.bind(null,"d9c5"))},children:[{path:"",name:"home",component:function(){return n.e("chunk-63c3506c").then(n.bind(null,"ed0b"))}},{path:"lobby",name:"lobby",component:function(){return n.e("chunk-46f3955e").then(n.bind(null,"29e2"))}}]},{path:"/ingame",name:"ingame",component:function(){return n.e("chunk-e756468a").then(n.bind(null,"ab4e"))}}],g=new f["a"]({mode:"history",base:"/game/",routes:p}),h=g,b=n("2f62"),v={namespaced:!0,state:{usermame:"",id:"",isLoggedIn:!1,avatarId:"",elo:0},mutations:{SET_USER:function(e,t){e.id=t._id,e.avatarId=t.avatarId,e.username=t.username,e.elo=t.elo||0,e.isLoggedIn=!0}},getters:{getUserData:function(e){return{id:e.id,avatarId:e.avatarId,username:e.username}},elo:function(e){return{elo:e.elo}}},actions:{}},y={namespaced:!0,state:{data:[],isLoaded:!1},mutations:{setData:function(e,t){e.data=t,e.isLoaded=!0}}},k=(n("4de4"),{namespaced:!0,state:{players:[{},{}],characters:[{},{},{}],currentTeam:[],room:null},getters:{GetMyData:function(e){return function(t){var n=e.players.filter((function(e){return e.id===t}))[0];return n||{}}},GetMyCharacters:function(e){return function(t){return e.characters.filter((function(e){return e.belongs[t]||!1}))}},GetEnemyCharacters:function(e){return function(t){return e.characters.filter((function(e){return!e.belongs[t]}))}},getBattleRoom:function(e){return e.room}},mutations:{setGameState:function(e,t){e.characters=t.characters,e.players=t.players},setRoom:function(e,t){e.room=t},addToTeam:function(e,t){if(!(e.currentTeam.length>=3)){for(var n=0;n<e.currentTeam.length;n++)if(e.currentTeam[n]._id===t._id)return;e.currentTeam.push(t)}}}}),x=(n("96cf"),n("1da1")),O=n("5530"),w=n("0045"),S=(n("b64b"),n("b85c"),function(e){switch(e){case w["e"].Blend:return{duration:1.5,easing:w["b"].Quartic.InOut};case w["e"].Wipe:return{duration:1.5,easing:w["b"].Quartic.InOut,gradient:.5,angle:15,direction:w["f"][Object.keys(w["f"])[Math.floor(Math.random()*Object.keys(w["f"]).length)]]};case w["e"].Blur:return{duration:1,easing:w["b"].Quintic.InOut,intensity:1.5};case w["e"].Slide:return{duration:1.5,easing:w["b"].Quintic.InOut,slides:2,intensity:5,direction:w["d"][Object.keys(w["d"])[Math.floor(Math.random()*Object.keys(w["d"]).length)]]};case w["e"].Glitch:return{seed:Math.random(),duration:1.5,easing:w["b"].Cubic.InOut};default:return{}}}),I=function(e){var t=e.particles;t.generate([{name:"small",amount:200,maxSize:5,maxOpacity:.8,minGradient:.75,maxGradient:1},{name:"medium",amount:50,maxSize:12,maxOpacity:.8,minGradient:.75,maxGradient:1,smoothing:.8},{name:"large",amount:30,minSize:100,maxSize:125,maxOpacity:.04,minGradient:1,maxGradient:1,smoothing:.65}]),t.move("small",{distance:.5,angle:25},{duration:5,loop:!0}),t.move("medium",{distance:.3,angle:45},{duration:5,loop:!0}),t.move("large",{distance:.4,angle:35},{duration:5,loop:!0}),t.sway("small",{x:.025,y:.025},{duration:1.5,easing:w["b"].Sinusoidal.InOut,loop:!0}),t.sway("medium",{x:.025,y:.025},{duration:1.5,easing:w["b"].Sinusoidal.InOut,loop:!0}),t.sway("large",{x:.025,y:.025},{duration:1.5,easing:w["b"].Sinusoidal.InOut,loop:!0})},R=function(e){var t=e.particles;t.generate([{name:"small",amount:100,maxSize:5,maxOpacity:1,minGradient:.75,maxGradient:1,color:16777215},{name:"large",amount:30,minSize:50,maxSize:100,maxOpacity:.1,minGradient:1,maxGradient:1,color:16777215}]),t.sway("large",{x:.025,y:.025},{duration:1.5,easing:w["b"].Sinusoidal.InOut,loop:!0}),t.sway("small",{x:.025,y:.025},{duration:1.5,easing:w["b"].Sinusoidal.InOut,loop:!0})},j={namespaced:!0,state:{canvas:null,background:[],midoriRenderer:null,isLoaded:!1,update:!1,index:0},mutations:{setTurnBackground:function(e){var t=.75;e.midoriRenderer.setBackground(e.background[e.index],{type:w["e"].Blend,delay:t,config:Object(O["a"])(Object(O["a"])({},S(w["e"].Blend)),{},{onInit:function(e,n){e.camera.move({x:Math.random(),y:Math.random(),z:.3+.7*Math.random()},{duration:2.5,easing:w["b"].Quartic.In}),e.camera.rotate(10*Math.random()-5,{duration:2.5,easing:w["b"].Quartic.In}),n.camera.move({x:Math.random(),y:Math.random(),z:.7+.3*Math.random()},{duration:2,delay:t,easing:w["b"].Quartic.Out}),n.camera.sway({x:.1,y:.05,z:.02,zr:1},{duration:3,easing:w["b"].Quadratic.InOut,loop:!0}),n.camera.rotate(10*Math.random()-5,{duration:2,delay:t,easing:w["b"].Quartic.Out})}})});var n=e.midoriRenderer.background.camera;n.sway({x:.1,y:.05,z:.02,zr:1},{duration:2,easing:w["b"].Quadratic.InOut,loop:!0});var a=e.midoriRenderer.background.effects;a.set(w["c"].MotionBlur,{intensity:1,samples:32}),a.set(w["c"].RgbShift,{amount:.005,angle:90}),a.set(w["c"].VignetteBlur,{size:3,radius:1.5,passes:10}),I(e.midoriRenderer.background)},setHomeBackground:function(e){e.midoriRenderer.setBackground(e.background[e.index],{type:w["e"].Glitch,config:{seed:Math.random(),duration:1.5,easing:w["b"].Cubic.InOut}});var t=e.midoriRenderer.background.camera;t.sway({x:.1,y:.05,z:.02,zr:1},{duration:2,easing:w["b"].Quadratic.InOut,loop:!0});var n=e.midoriRenderer.background.effects;n.set(w["c"].MotionBlur,{intensity:1,samples:32}),n.set(w["c"].RgbShift,{amount:.005,angle:90}),n.set(w["c"].VignetteBlur,{size:3,radius:1.5,passes:10}),R(e.midoriRenderer.background),setTimeout((function(){e.isLoaded=!0}),1250)},setCanvas:function(e,t){if(!w["g"])return!1;e.background=t.imgs,e.canvas=t.el,e.midoriRenderer=new w["a"](e.canvas)},setUpdate:function(e,t){e.update=t.value,e.index=t.index},updateCanvas:function(e,t){e.canvas=t},setBackgroundImage:function(e,t){e.background=t},cleanUp:function(e){console.log("DISPOSE OR RESOURCES"),e.midoriRenderer.dispose()}},actions:{setCanvas:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function a(){var r,o,i,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.commit,a.prev=1,a.next=4,Object(w["h"])(n("bd6b"));case 4:return o=a.sent,a.next=7,Object(w["h"])(n("cab6"));case 7:return i=a.sent,a.next=10,Object(w["h"])(n("9cdf"));case 10:return u=a.sent,r("setCanvas",{el:t,imgs:[o,i,u]}),a.abrupt("return",!0);case 15:return a.prev=15,a.t0=a["catch"](1),console.error(a.t0),a.abrupt("return",!1);case 19:case"end":return a.stop()}}),a,null,[[1,15]])})))()}},getters:{updateStatus:function(e){return e.update}}};a["a"].use(b["a"]);var M=new b["a"].Store({modules:{user:v,Roster:y,game:k,midori:j}}),z=n("cd9f"),T=("https:"===window.location.protocol?"wss://":"ws://")+window.location.host;a["a"].prototype.$colyseus=new z["Client"](T),a["a"].config.productionTip=!1,new a["a"]({router:h,store:M,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(e,t,n){},"9cdf":function(e,t,n){e.exports=n.p+"img/bg4.671dfcef.jpg"},bd6b:function(e,t,n){e.exports=n.p+"img/battle1.462aac76.jpg"},cab6:function(e,t,n){e.exports=n.p+"img/battle2.99cdfb67.jpg"}});
//# sourceMappingURL=app.8572e0e9.js.map