(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e26d8"],{"7f3f":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"game"},[i("div",[i("h1",[e._v(e._s(e.timer))]),e.myturn?i("button",{on:{click:e.endTurn}},[e._v("End turn")]):e._e()]),i("div",{staticClass:"game__nav game__nav--ingame"},e._l(e.friends,(function(t,s){return i("div",{key:s,staticClass:"game__charstate"},[i("CharFace",{attrs:{health:t.health,energy:t.energy,facepic:t.facepic}}),i("div",{staticClass:"game__skillset"},e._l(t.skills,(function(a,n){return i("div",{key:n,staticClass:"game__skillset__pic",on:{click:function(i){return e.selectSkill(a,t.id,s,n)}}},[i("img",{attrs:{src:"/img/game/"+a.skillpic+".jpg"}})])})),0)],1)})),0),i("Enemies")],1)},a=[],n=(i("caad"),i("2532"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{staticClass:"game__charface"},[e.targetStatus?i("div",{directives:[{name:"on-click-outside",rawName:"v-on-click-outside",value:e.cancel,expression:"cancel"}],staticClass:"game__char game__char--target",on:{click:e.sel}},[i("img",{attrs:{src:"/img/game/"+e.facepic+".jpg"}})]):i("div",{staticClass:"game__char"},[i("img",{attrs:{src:"/img/game/"+e.facepic+".jpg"}})]),i("div",{staticClass:"game__bar"},[i("p",{staticClass:"game__bar__value",style:{width:e.health+"%"}}),i("p",{staticClass:"game__bar__load"},[e._v(e._s(e.health)+" hp")])]),i("div",{staticClass:"game__bar"},[i("p",{staticClass:"game__bar__value game__bar__value--sp",style:{width:e.energy+"%"}}),i("p",{staticClass:"game__bar__load"},[e._v(e._s(e.energy)+" sp")])])])}),r=[],c={props:["facepic","health","energy"],computed:{targetStatus:function(){return this.$store.getters["ingame/getTargetAllyStatus"]}},methods:{cancel:function(){this.$store.commit("ingame/SET_TARGET_ALLY_STATUS",!1),this.$store.commit("ingame/SET_TARGET_ENEMY_STATUS",!1)},sel:function(){this.$store.getters["ingame/getSelectedSkill"]}}},l=c,o=i("2877"),m=Object(o["a"])(l,n,r,!1,null,null,null),_=m.exports,g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"game__nav game__nav--enemy"},e._l(e.foes,(function(t,s){return i("div",{key:s,staticClass:"game__charstate"},[e._v(" "+e._s(e.effectList(t.id))+" "),i("EnemyCharFace",{attrs:{health:t.health,energy:t.energy,facepic:t.facepic,index:s,id:t.id}})],1)})),0)},u=[],h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{staticClass:"game__charface"},[e.targetStatus?i("div",{directives:[{name:"on-click-outside",rawName:"v-on-click-outside",value:e.cancel,expression:"cancel"}],staticClass:"game__char game__char--target",on:{click:function(t){return e.sel(e.index)}}},[i("img",{attrs:{src:"/img/game/"+e.facepic+".jpg"}})]):i("div",{staticClass:"game__char"},[i("img",{attrs:{src:"/img/game/"+e.facepic+".jpg"}})]),i("Bars",{attrs:{health:e.health,energy:e.energy}})],1)},d=[],p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",{staticClass:"game__bar"},[i("p",{staticClass:"game__bar__value",style:{width:e.health+"%"}}),i("p",{staticClass:"game__bar__load"},[e._v(e._s(e.health)+" hp")])]),i("div",{staticClass:"game__bar"},[i("p",{staticClass:"game__bar__value game__bar__value--sp",style:{width:e.energy+"%"}}),i("p",{staticClass:"game__bar__load"},[e._v(e._s(e.energy)+" sp")])])])},f=[],T={props:["health","energy"]},E=T,v=Object(o["a"])(E,p,f,!1,null,null,null),S=v.exports,k={props:["index","id"],methods:{oneEnemy:function(){return[{target:this.id,position:this.index}]},allEnemies:function(){var e=[{target:this.id,position:this.index}],t=this.$store.getters["ingame/getMyFoes"];for(var i in t)t[i].id!==this.id&&e.push({target:t[i].id,position:i});return e}}},y={components:{Bars:S},mixins:[k],props:["facepic","health","energy"],computed:{targetStatus:function(){return this.$store.getters["ingame/getTargetEnemyStatus"]}},methods:{cancel:function(){this.$store.commit("ingame/SET_TARGET_ALLY_STATUS",!1),this.$store.commit("ingame/SET_TARGET_ENEMY_STATUS",!1),this.$store.commit("ingame/SET_SELECTED_SKILL",{})},sel:function(){var e=this.$store.getters["ingame/getSelectedSkill"].skill.target,t=this[e](),i={skill:this.$store.getters["ingame/getSelectedSkill"].skill,skillIndex:this.$store.getters["ingame/getSelectedSkill"].skillIndex,targets:t,caster:this.$store.getters["ingame/getSelectedSkill"].caster,position:this.$store.getters["ingame/getSelectedSkill"].position};this.$store.commit("ingame/ADD_TO_SKILL_QUEUE",i),this.$store.commit("ingame/SET_SELECTED_SKILL",{})}}},$=y,C=Object(o["a"])($,h,d,!1,null,null,null),b=C.exports,L={components:{EnemyCharFace:b},computed:{foes:function(){return this.$store.getters["ingame/getMyFoes"]},effectList:function(){return this.$store.getters["ingame/getSkillQueueFilter"]}}},A=L,x=Object(o["a"])(A,g,u,!1,null,null,null),w=x.exports,M={components:{CharFace:_,Enemies:w},data:function(){return{timer:60,interval:!1,offensiveTarget:["oneEnemy","allEnemies"]}},sockets:{startTurn:function(e){this.endTimer(),this.$store.commit("ingame/SET_GAME",e),this.timer=60,this.startTimer()},endTurn:function(e){this.endTimer(),this.$store.commit("ingame/SET_TARGET_ENEMY_STATUS",!1),this.$store.commit("ingame/RESET_SKILL_QUEUE"),this.$store.commit("ingame/SET_GAME",e),this.timer=60,this.startTimer()},forcedEndTurn:function(){this.$socket.client.emit("endTurn",[])}},computed:{opponent:function(){return this.$store.getters["ingame/getMyOpponent"]},myturn:function(){return this.$store.getters["ingame/getMyTurn"]},friends:function(){return this.$store.getters["ingame/getMyFriends"]}},methods:{endTurn:function(){this.$socket.client.emit("endTurn",this.$store.getters["ingame/getSkillQueue"])},startTimer:function(){this.interval=setInterval((function(e){e.timer--}),1e3,this)},endTimer:function(){clearInterval(this.interval)},selectSkill:function(e,t,i,s){this.myturn&&this.offensiveTarget.includes(e.target)&&(this.$store.commit("ingame/SET_SELECTED_SKILL",{caster:t,position:i,skill:e,skillIndex:s}),this.$store.commit("ingame/SET_TARGET_ENEMY_STATUS",!0))}},created:function(){this.startTimer()}},j=M,I=Object(o["a"])(j,s,a,!1,null,null,null);t["default"]=I.exports}}]);
//# sourceMappingURL=chunk-2d0e26d8.a4885cb7.js.map