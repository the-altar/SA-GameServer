(function(e){function t(t){for(var r,a,o=t[0],s=t[1],c=t[2],d=0,l=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&l.push(u[a][0]),u[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);m&&m(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==u[o]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},u={app:0},i=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0e4346b6":"ada8c570","chunk-7065343c":"1b06e5de","chunk-a63e786e":"893c70c6","chunk-af53f910":"ed508208"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0e4346b6":1,"chunk-7065343c":1,"chunk-a63e786e":1,"chunk-af53f910":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0e4346b6":"d2541720","chunk-7065343c":"0fc1550a","chunk-a63e786e":"3e1739ea","chunk-af53f910":"ef18d7cb"}[e]+".css",u=s.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===u))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){c=l[o],d=c.getAttribute("data-href");if(d===r||d===u)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],m.parentNode.removeChild(m),n(i)},m.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(e);var l=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}u[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/game/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var m=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[n("canvas",{ref:"canvas",staticClass:"canvas"}),n("transition",{attrs:{name:"fade"}},[e.imagesReady&&e.loaded?n("router-view",{directives:[{name:"show",rawName:"v-show",value:e.isLoaded,expression:"isLoaded"}]}):n("div",{staticClass:"app-loading"},[n("img",{staticClass:"app-loading-gif",attrs:{src:"/img/icons/pikachurun.gif"}}),n("p",{staticClass:"app-loading-text"},[e._v("Game is loading...")])])],1)],1)},u=[],i=(n("96cf"),n("1da1")),o=n("bc3a"),s=n.n(o),c={data:function(){return{imagesReady:!1,loaded:!1}},computed:{isLoaded:function(){return this.$store.state.midori.isLoaded},update:function(){return this.$store.state.midori.update}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/user/character");case 3:return n=t.sent,t.next=6,s.a.get("/game/enums");case 6:return r=t.sent,t.next=9,s.a.get("/game/user");case 9:a=t.sent,e.$store.commit("audio/setAudio"),e.$store.commit("Roster/setData",n.data),e.$store.commit("enums/setEnums",r.data),e.$store.commit("user/SET_USER",a.data),e.loaded=!0,e.$store.dispatch("audio/playGameStart"),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](0),alert(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()},mounted:function(){var e=this;this.$store.dispatch("midori/setCanvas",this.$refs.canvas).then((function(t){e.imagesReady=t}))},watch:{update:function(e){e&&2===this.$store.state.midori.index&&this.$store.commit("midori/setHomeBackground"),this.$store.state.midori.update=!1}},beforeDestroy:function(){this.$store.commit("midori/cleanUp")}},d=c,l=(n("5c0b"),n("2877")),m=Object(l["a"])(d,a,u,!1,null,null,null),p=m.exports,f=(n("d3b7"),n("8c4f"));r["a"].use(f["a"]);var h=[{path:"/",component:function(){return n.e("chunk-af53f910").then(n.bind(null,"d9c5"))},children:[{path:"",name:"home",component:function(){return n.e("chunk-7065343c").then(n.bind(null,"ed0b"))}},{path:"lobby",name:"lobby",component:function(){return n.e("chunk-0e4346b6").then(n.bind(null,"29e2"))}}]},{path:"/ingame",name:"ingame",component:function(){return n.e("chunk-a63e786e").then(n.bind(null,"ab4e"))}}],g=new f["a"]({mode:"history",base:"/game/",routes:h}),b=g,v=n("2f62"),y=n("5530"),k={namespaced:!0,state:{user:null},mutations:{SET_USER:function(e,t){e.user=Object(y["a"])({},t)}},getters:{getUserData:function(e){return Object(y["a"])({},e.user)},ranked:function(e){return{elo:e.user.elo,id:e.user.id}}},actions:{}},w=(n("d81d"),{namespaced:!0,state:{data:[],isLoaded:!1},mutations:{setData:function(e,t){e.data=t.map((function(e){return e.data})).sort((function(e,t){return e.dexNumber-t.dexNumber})),e.isLoaded=!0}}}),x=(n("caad"),n("a434"),n("a9e3"),n("2532"),n("b85c")),O=(n("4de4"),n("4160"),n("13d5"),n("b0c0"),n("159b"),function(e){return function(t){var n=e.players.filter((function(e){return e.id===t}))[0];return n||{}}}),S=function(e){return function(t){var n=e.players.filter((function(e){return e.id!==t}))[0];return n?{avatar:n.avatar,wins:n.wins,losses:n.losses,streak:n.streak,username:n.username,rank:n.rank,id:n.id}:{}}},T=function(e){return function(t){var n=[];return e.characters.forEach((function(e){e.belongs[t]?n.push(e):n.push(!1)})),n}},j=function(e){return function(t){var n=[];return e.characters.forEach((function(e){e.belongs[t]?n.push(!1):n.push(e)})),n}},R=function(e){return e.room},I=function(e){return e.tempQueue},B=function(e){return function(t,n){var r,a=$(e.skillQueue,e,t,n),u=Object(x["a"])(e.characters[t].notifications);try{for(u.s();!(r=u.n()).done;){var i=r.value;z(i,a)}}catch(o){u.e(o)}finally{u.f()}return a}},C=function(e){return function(t){return e.tempQueue.filter((function(e){return e.targets.includes(t)}))}},Q=function(e){return function(t){return e.characters[t]}},M=function(e){return function(t,n){return e.characters[t].skills[n]}},E=function(e){return e.isBusy},G={isBusy:E,myEnemyData:S,GetMyData:O,getBattleRoom:R,getCharacterByIndex:Q,getEnemyCharList:j,getMyCharList:T,getSkillByCaster:M,getSkillQueueById:B,getTempQueue:I,getTempQueueByCharacter:C};function A(e,t){var n,r=Object(x["a"])(e);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(a.id===t)return a}}catch(u){r.e(u)}finally{r.f()}}function $(e,t,n,r){return e.reduce((function(e,a){var u,i=[],o=Object(x["a"])(a.effects);try{for(o.s();!(u=o.n()).done;){var s=u.value;if(s.targets.includes(n)){var c=A(t.characters,s.caster);if(s.isInvisible&&!c.belongs[r])continue;i.push({message:s.message,duration:Math.floor(s.duration/2)})}}}catch(d){o.e(d)}finally{o.f()}return i.length>0&&e.push({id:a.id,skillpic:a.skillpic,skillName:a.name,tips:i,notifications:[]}),e}),[])}function z(e,t){for(var n=!1,r=0;r<t.length;r++){var a=t[r];if(a.id===e.id){a.notifications.push(e.msg),n=!0;break}}n||t.push({id:e.id,skillName:e.skillName,skillpic:e.skillpic,tips:[],notifications:[e.msg]})}var P={namespaced:!0,state:{playerId:"",players:[{},{}],characters:[{},{},{}],skillQueue:[],currentTeam:{members:[{},{},{}],count:0,full:!1},tempQueue:[],room:null,skillInFocus:null,payupCart:null,isBusy:!1},getters:G,mutations:{setBusyStatus:function(e,t){e.isBusy=t},setGameState:function(e,t){e.playerId=t.playerId,e.characters=t.characters,e.players=t.players,e.tempQueue=[],e.skillQueue=t.skillQueue},setPlayerEnergyPool:function(e,t){e.players[t.playerIndex].energyPool=t.energyPool},setRoom:function(e,t){e.room=t},addToTeam:function(e,t){if(!0===e.currentTeam.full)return!1;for(var n=0;n<e.currentTeam.members.length;n++){if(void 0===e.currentTeam.members[n].id)return e.currentTeam.members.splice(n,1,t),e.currentTeam.count++,3===e.currentTeam.count&&(e.currentTeam.full=!0),!0;if(e.currentTeam.members[n].id===t.id)return!1}},addToTeamAtIndex:function(e,t){var n,r=Object(x["a"])(e.currentTeam.members);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(a.id===t.char.id)return}}catch(u){r.e(u)}finally{r.f()}void 0===e.currentTeam.members[t.index].id&&e.currentTeam.count++,3===e.currentTeam.count&&(e.currentTeam.full=!0),e.currentTeam.members.splice(t.index,1,t.char)},removeCharByIndex:function(e,t){void 0!==e.currentTeam.members[t].id&&(e.currentTeam.members.splice(t,1,{}),e.currentTeam.count--,e.currentTeam.full=!1)},setTargetables:function(e,t){for(var n in e.characters)t.includes(Number(n))?e.characters[n].isTarget=!0:e.characters[n].isTarget=!1},resetTargetables:function(e){var t,n=Object(x["a"])(e.characters);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.isTarget=!1}}catch(a){n.e(a)}finally{n.f()}},setSkillInFocus:function(e,t){e.skillInFocus=t},setTempQueue:function(e,t){e.tempQueue=t.tempQueue,e.characters=t.characters},setPayupCart:function(e,t){e.players[t.p].payupCart=t.pay},resetState:function(e){e.playerId="",e.players=[{},{}],e.characters=[{},{},{}],e.skillQueue=[],e.tempQueue=[],e.room=null,e.skillInFocus=null,e.payupCart=null}}},L=n("0045"),_=(n("b64b"),function(e){switch(e){case L["e"].Blend:return{duration:1.5,easing:L["b"].Quartic.InOut};case L["e"].Wipe:return{duration:1.5,easing:L["b"].Quartic.InOut,gradient:.5,angle:15,direction:L["f"][Object.keys(L["f"])[Math.floor(Math.random()*Object.keys(L["f"]).length)]]};case L["e"].Blur:return{duration:1,easing:L["b"].Quintic.InOut,intensity:1.5};case L["e"].Slide:return{duration:1.5,easing:L["b"].Quintic.InOut,slides:2,intensity:5,direction:L["d"][Object.keys(L["d"])[Math.floor(Math.random()*Object.keys(L["d"]).length)]]};case L["e"].Glitch:return{seed:Math.random(),duration:1.5,easing:L["b"].Cubic.InOut};default:return{}}}),N=function(e){var t=e.particles;t.generate([{name:"small",amount:200,maxSize:5,maxOpacity:.8,minGradient:.75,maxGradient:1},{name:"medium",amount:50,maxSize:12,maxOpacity:.8,minGradient:.75,maxGradient:1,smoothing:.8},{name:"large",amount:30,minSize:100,maxSize:125,maxOpacity:.04,minGradient:1,maxGradient:1,smoothing:.65}]),t.move("small",{distance:.5,angle:25},{duration:5,loop:!0}),t.move("medium",{distance:.3,angle:45},{duration:5,loop:!0}),t.move("large",{distance:.4,angle:35},{duration:5,loop:!0}),t.sway("small",{x:.025,y:.025},{duration:1.5,easing:L["b"].Sinusoidal.InOut,loop:!0}),t.sway("medium",{x:.025,y:.025},{duration:1.5,easing:L["b"].Sinusoidal.InOut,loop:!0}),t.sway("large",{x:.025,y:.025},{duration:1.5,easing:L["b"].Sinusoidal.InOut,loop:!0})},D=function(e){var t=e.particles;t.generate([{name:"small",amount:100,maxSize:5,maxOpacity:1,minGradient:.75,maxGradient:1,color:16777215},{name:"large",amount:30,minSize:50,maxSize:100,maxOpacity:.1,minGradient:1,maxGradient:1,color:16777215}]),t.sway("large",{x:.025,y:.025},{duration:1.5,easing:L["b"].Sinusoidal.InOut,loop:!0}),t.sway("small",{x:.025,y:.025},{duration:1.5,easing:L["b"].Sinusoidal.InOut,loop:!0})},U={namespaced:!0,state:{canvas:null,background:[],midoriRenderer:null,isLoaded:!1,update:!1,index:0},mutations:{setTurnBackground:function(e){var t=.75;e.midoriRenderer.setBackground(e.background[e.index],{type:L["e"].Blend,delay:t,config:Object(y["a"])(Object(y["a"])({},_(L["e"].Blend)),{},{onInit:function(e,n){e.camera.move({x:Math.random(),y:Math.random(),z:.3+.7*Math.random()},{duration:2.5,easing:L["b"].Quartic.In}),e.camera.rotate(10*Math.random()-5,{duration:2.5,easing:L["b"].Quartic.In}),n.camera.move({x:Math.random(),y:Math.random(),z:.7+.3*Math.random()},{duration:2,delay:t,easing:L["b"].Quartic.Out}),n.camera.sway({x:.1,y:.05,z:.02,zr:1},{duration:3,easing:L["b"].Quadratic.InOut,loop:!0}),n.camera.rotate(10*Math.random()-5,{duration:2,delay:t,easing:L["b"].Quartic.Out})}})});var n=e.midoriRenderer.background.camera;n.sway({x:.1,y:.05,z:.02,zr:1},{duration:2,easing:L["b"].Quadratic.InOut,loop:!0});var r=e.midoriRenderer.background.effects;r.set(L["c"].MotionBlur,{intensity:1,samples:32}),r.set(L["c"].RgbShift,{amount:.005,angle:90}),r.set(L["c"].VignetteBlur,{size:3,radius:1.5,passes:10}),N(e.midoriRenderer.background)},setHomeBackground:function(e){e.midoriRenderer.setBackground(e.background[e.index],{type:L["e"].Glitch,config:{seed:Math.random(),duration:1.5,easing:L["b"].Cubic.InOut}});var t=e.midoriRenderer.background.camera;t.sway({x:.1,y:.05,z:.02,zr:1},{duration:2,easing:L["b"].Quadratic.InOut,loop:!0});var n=e.midoriRenderer.background.effects;n.set(L["c"].MotionBlur,{intensity:1,samples:32}),n.set(L["c"].RgbShift,{amount:.005,angle:90}),n.set(L["c"].VignetteBlur,{size:3,radius:1.5,passes:10}),D(e.midoriRenderer.background),setTimeout((function(){e.isLoaded=!0}),1250)},setCanvas:function(e,t){if(!L["g"])return!1;e.background=t.imgs,e.canvas=t.el,e.midoriRenderer=new L["a"](e.canvas)},setUpdate:function(e,t){e.update=t.value,e.index=t.index},updateCanvas:function(e,t){e.canvas=t},setBackgroundImage:function(e,t){e.background=t},cleanUp:function(e){e.midoriRenderer.dispose()}},actions:{setCanvas:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,u,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.prev=1,r.next=4,Object(L["h"])(n("bd6b"));case 4:return u=r.sent,r.next=7,Object(L["h"])(n("cab6"));case 7:return i=r.sent,r.next=10,Object(L["h"])(n("8de0"));case 10:return o=r.sent,a("setCanvas",{el:t,imgs:[u,i,o]}),r.abrupt("return",!0);case 15:return r.prev=15,r.t0=r["catch"](1),r.abrupt("return",!1);case 18:case"end":return r.stop()}}),r,null,[[1,15]])})))()}},getters:{updateStatus:function(e){return e.update}}},F=(n("fb6a"),{namespaced:!0,state:{enums:null},mutations:{setEnums:function(e,t){e.enums=Object(y["a"])({},t)}},getters:{getEnum:function(e){return function(t){var n={},r=Object.keys(e.enums[t]);for(var a in r.slice(0,r.length/2))n[a]=e.enums[t][a];return n}}}}),H={namespaced:!0,state:{turnSound:null,gameStart:null,click:null,home:[],win:null,lose:null},mutations:{setAudio:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.turnSound=new Audio("/sound/endturn.mp3"),t.gameStart=new Audio("/sound/GameStart.mp3"),t.click=new Audio("/sound/click.mp3"),t.changeIntoBattle=new Audio("/sound/ChangeIntoBattle.mp3"),t.snap=new Audio("/sound/snap.mp3"),t.blocked=new Audio("/sound/NotAllowed.mp3"),t.lose=new Audio("/sound/over.mp3"),t.win=new Audio("/sound/period.mp3"),t.home.push({name:"Grand Prix [8-Bit Remix]",author:"branflakes",contact:"https://twitter.com/branflakesmusic",sound:new Audio("/sound/GrandPrix.mp3")}),t.lose.volue=.5,t.win.volume=.5,t.blocked.volume=.5,t.snap.volume=.5,t.click.volume=.5,t.gameStart.volume=.1,t.turnSound.volume=.2,t.changeIntoBattle.volume=.1;case 17:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},getters:{getHomeMusic:function(e){return e.home[0]}},actions:{playTurnSound:function(e){var t=e.state;t.turnSound.play()},playGameStart:function(e){var t=e.state;setTimeout((function(){t.gameStart.play()}),1e3)},playClick:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.state,n.click.play();case 2:case"end":return t.stop()}}),t)})))()},changeIntoBattle:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.state,n.changeIntoBattle.play();case 2:case"end":return t.stop()}}),t)})))()},playSnap:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.state,n.snap.play();case 2:case"end":return t.stop()}}),t)})))()},playBlocked:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.state,n.blocked.play();case 2:case"end":return t.stop()}}),t)})))()},playWin:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.state,n.win.play();case 2:case"end":return t.stop()}}),t)})))()},playLose:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.state,n.lose.play();case 2:case"end":return t.stop()}}),t)})))()}}};r["a"].use(v["a"]);var q=new v["a"].Store({modules:{audio:H,user:k,Roster:w,game:P,midori:U,enums:F}}),J=n("cd9f"),V=n("df76"),W=n.n(V),K=n("e37d"),X=n("1881"),Y=n.n(X);r["a"].use(Y.a,{dialog:!0}),r["a"].use(K["a"]),r["a"].use(W.a);var Z=("https:"===window.location.protocol?"wss://":"ws://")+window.location.host;r["a"].prototype.$colyseus=new J["Client"](Z),r["a"].prototype.$eventBus=new r["a"],r["a"].prototype.$http=s.a,r["a"].config.productionTip=!1,new r["a"]({router:b,store:q,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"8de0":function(e,t,n){e.exports=n.p+"img/bg2.d8978295.jpg"},"9c0c":function(e,t,n){},bd6b:function(e,t,n){e.exports=n.p+"img/battle1.462aac76.jpg"},cab6:function(e,t,n){e.exports=n.p+"img/battle2.99cdfb67.jpg"}});
//# sourceMappingURL=app.28b2a552.js.map