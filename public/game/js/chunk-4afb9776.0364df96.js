(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4afb9776"],{"0571":function(e,t,s){},"0a92":function(e,t,s){},"14d0":function(e,t,s){"use strict";var i=s("6f15"),a=s.n(i);a.a},"1ca1":function(e,t,s){"use strict";var i=s("d317"),a=s.n(i);a.a},2928:function(e,t,s){},5259:function(e,t,s){"use strict";var i=s("0a92"),a=s.n(i);a.a},"6f15":function(e,t,s){},"77bb":function(e,t,s){},"8c75":function(e,t,s){"use strict";var i=s("2928"),a=s.n(i);a.a},"9bd9":function(e,t,s){"use strict";var i=s("fb7a"),a=s.n(i);a.a},a434:function(e,t,s){"use strict";var i=s("23e7"),a=s("23cb"),r=s("a691"),n=s("50c4"),l=s("7b0b"),c=s("65f0"),o=s("8418"),u=s("1dde"),m=s("ae40"),g=u("splice"),d=m("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!g||!d},{splice:function(e,t){var s,i,u,m,g,d,y=l(this),k=n(y.length),_=a(e,k),C=arguments.length;if(0===C?s=i=0:1===C?(s=0,i=k-_):(s=C-2,i=h(f(r(t),0),k-_)),k+s-i>p)throw TypeError(v);for(u=c(y,i),m=0;m<i;m++)g=_+m,g in y&&o(u,m,y[g]);if(u.length=i,s<i){for(m=_;m<k-i;m++)g=m+i,d=m+s,g in y?y[d]=y[g]:delete y[d];for(m=k;m>k-i+s;m--)delete y[m-1]}else if(s>i)for(m=k-i;m>_;m--)g=m+i-1,d=m+s-1,g in y?y[d]=y[g]:delete y[d];for(m=0;m<s;m++)y[m+_]=arguments[m+2];return y.length=k-i+s,u}})},ab4e:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ingame"},[s("section",{staticClass:"ingame-header"},[s("div",{staticClass:"ingame-player"},[s("img",{staticClass:"ingame-player-icon",attrs:{src:"https://api.adorable.io/avatars/75/"+e.GetMyData.avatarId,alt:""}}),s("div",[s("p",[e._v(e._s(e.GetMyData.id))])])]),s("div",{staticClass:"ingame-control"},[s("div",{staticClass:"ingame-control-timebar"},[s("div",{staticClass:"ingame-control-timebar-gauge",style:"width: "+e.timer+"%"})]),e.GetMyData.isTurn?s("button",{staticClass:"ingame-control-btn",on:{click:function(t){return e.endTurn()}}},[s("span",[e._v("end turn")])]):e._e(),e.GetMyData.isTurn?s("ul",{staticClass:"ingame-control-energypool"},e._l(e.GetMyData.energyPool.slice(0,4),(function(t,i){return s("li",{key:i,class:e.energies[i]+" "+e.energies[i]+"-glow"},[e._v(e._s(t))])})),0):e._e()]),s("div",{staticClass:"ingame-player ingame-player-2"},[s("img",{staticClass:"ingame-player-icon",attrs:{src:"https://api.adorable.io/avatars/75/"+e.myEnemyData.avatarId,alt:""}}),s("div",[s("p",[e._v(e._s(e.myEnemyData.id))])])])]),s("section",{staticClass:"ingame-field"},[s("MyTeam"),s("EnemyTeam")],1),s("section",{staticClass:"ingame-footer"},[s("Viewer")],1),e.endturn&&e.GetMyData.isTurn?s("EnergyCart",{attrs:{queue:e.GetMyData.payupCart},on:{endturn:e.endTurn,close:function(t){e.endturn=!1}}}):e._e()],1)},a=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"myteam"},e._l(e.myTeam,(function(t,i){return s("section",{key:i,class:{none:!1===t}},[!1!==t?s("div",{staticClass:"myteam-char"},[s("CharFace",{attrs:{char:t,index:i}}),s("section",{staticClass:"myteam-gamestatus"},[s("div",{staticClass:"myteam-effects"},[e._l(e.skillQueue(i,e.myId).reverse(),(function(t,i){return s("v-popover",{key:i,attrs:{trigger:"hover"}},[s("img",{staticClass:"myteam-effect",attrs:{src:"/img/game/"+t.skillpic+".jpg"}}),s("template",{slot:"popover"},[s("ul",[s("li",[e._v(e._s(t.skillName))]),e._l(t.tips,(function(t,i){return s("li",{key:i},[s("ul",[s("li",[e._v(e._s(t.message))]),s("li",[e._v(e._s(t.duration))])])])})),e._l(t.notifications,(function(t,i){return s("li",{key:i},[s("ul",[s("li",[e._v(e._s(t))])])])}))],2)])],2)})),e._l(e.tempQueue(i).reverse(),(function(t,i){return s("img",{key:i,staticClass:"myteam-effect",attrs:{src:"/img/game/"+e.skill(t.caster,t.skill).skillpic+".jpg"},on:{dblclick:function(s){return e.removeFromTempQueue(t)}}})}))],2),e.myData.isTurn?s("Skills",{attrs:{skills:t.skills,charIndex:i},on:{"selected-skill":e.setSkill}}):s("div",{staticClass:"myteam-skillset"})],1)],1):e._e()])})),0)},n=[],l=s("5530"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"charface-status"},[s("div",{staticClass:"charface-icons"},[e.char.isTarget?s("img",{staticClass:"pulsate",attrs:{src:"/img/game/"+e.char.facepic+".jpg"},on:{click:function(t){return e.selectTarget()}}}):e._e(),s("img",{class:{fainted:e.char.knockedOut},attrs:{src:"/img/game/"+e.char.facepic+".jpg"}})]),s("div",{staticClass:"charface-hp"},[s("div",{staticClass:"charface-hp-value"},[e._v(e._s(e.char.hitPoints))]),s("div",{staticClass:"charface-hp-gauge",style:"width: "+e.char.hitPoints+"%"})])])},o=[],u={props:["char","index"],methods:{selectTarget:function(){this.$eventBus.$emit("set-target",this.index),this.$store.commit("game/setSkillInFocus",{}),this.$store.commit("game/resetTargetables")}}},m=u,g=(s("9bd9"),s("2877")),d=Object(g["a"])(m,c,o,!1,null,"0083a872",null),f=d.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"myteam-skillset"},e._l(e.skills,(function(t,i){return s("div",{key:i,staticClass:"myteam-skillset-skill",on:{click:function(s){return e.emitSelectedSkill(t,i)}}},[t.cooldown>0?s("p",{staticClass:"myteam-skillset-cd"},[e._v(e._s(t.cooldown))]):e._e(),e.inFocus===t?s("img",{staticClass:"pulsate myteam-skillset-skill-icon",attrs:{src:"/img/game/"+t.skillpic+".jpg"}}):e._e(),s("img",{staticClass:"myteam-skillset-skill-icon",class:{fade:t.disabled},attrs:{src:"/img/game/"+t.skillpic+".jpg"}})])})),0)},p=[],v={props:["skills","charIndex"],methods:{emitSelectedSkill:function(e,t){e.disabled||(this.$store.commit("game/setSkillInFocus",e),this.$store.commit("game/setTargetables",e.targetChoices.choice),this.$emit("selected-skill",{skill:t,caster:this.charIndex})),this.$eventBus.$emit("selected-a-skill",e)}},computed:{inFocus:function(){return this.$store.state.game.skillInFocus}}},y=v,k=Object(g["a"])(y,h,p,!1,null,null,null),_=k.exports,C={CharFace:f,Skills:_},$=function(){return this.$store.getters["game/getMyCharList"](this.myId)},b=function(){return this.$store.getters["game/GetMyData"](this.myId)},T=function(){return this.$store.getters["game/getTempQueueByCharacter"]},x=function(){return this.$store.state.user.id},S=function(){return this.$store.getters["game/getSkillByCaster"]},w=function(){return this.$store.getters["game/getSkillQueueById"]},I={myId:x,skill:S,myTeam:$,myData:b,skillQueue:w,tempQueue:T},M=function(e){this.selectedSkill=e},E=function(e){var t=this.$store.getters["game/getBattleRoom"];t.send("remove-skill-from-queue",e)},j={setSkill:M,removeFromTempQueue:E},D={},Q={data:function(){return{selectedSkill:{}}},components:C,computed:I,methods:j,watchers:D,created:function(){var e=this;this.$eventBus.$on("set-target",(function(t){var s=e.$store.getters["game/getBattleRoom"];s.send("add-skill-to-queue",Object(l["a"])(Object(l["a"])({},e.selectedSkill),{},{target:t}))}))}},B=Q,P=(s("14d0"),Object(g["a"])(B,r,n,!1,null,null,null)),G=P.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"enemy"},e._l(e.enemyTeam,(function(e,t){return s("CharFace",{key:t,attrs:{char:e,index:t}})})),1)},F=[],q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return!1!==e.char?s("section",{staticClass:"enemy-char"},[s("div",{staticClass:"enemy-effect"},e._l(e.tempQueue(e.index).reverse(),(function(t,i){return s("img",{key:i,attrs:{src:"/img/game/"+e.skill(t.caster,t.skill).skillpic+".jpg"},on:{dblclick:function(s){return e.removeFromTempQueue(t)}}})})),0),e._l(e.skillQueue(e.index,e.playerId).reverse(),(function(t,i){return s("v-popover",{key:i,staticClass:"enemy-effect",attrs:{trigger:"hover"}},[s("img",{attrs:{src:"/img/game/"+t.skillpic+".jpg"}}),s("template",{slot:"popover"},[s("ul",[s("li",[e._v(e._s(t.skillName))]),e._l(t.tips,(function(t,i){return s("li",{key:i},[s("ul",[s("li",[e._v(e._s(t.message))]),s("li",[e._v(e._s(Math.floor(t.duration))+" turns left")])])])})),e._l(t.notifications,(function(t,i){return s("li",{key:i},[s("ul",[s("li",[e._v(e._s(t))])])])}))],2)])],2)})),s("div",{staticClass:"enemy-char-status"},[s("div",{staticClass:"enemy-icon"},[e.isTarget.isTarget?s("img",{staticClass:"pulsate",attrs:{src:"/img/game/"+e.char.facepic+".jpg"},on:{click:function(t){return e.selectTarget()}}}):e._e(),s("img",{class:{fainted:e.char.knockedOut},attrs:{src:"/img/game/"+e.char.facepic+".jpg"}})]),s("div",{staticClass:"enemy-hp"},[s("div",{staticClass:"enemy-hp-value"},[e._v(e._s(e.char.hitPoints))]),s("div",{staticClass:"enemy-hp-gauge",style:"width: "+e.char.hitPoints+"%"})])])],2):e._e()},R=[],U={props:["char","index"],methods:{selectTarget:function(){this.$eventBus.$emit("set-target",this.index),this.$store.commit("game/setSkillInFocus",{}),this.$store.commit("game/resetTargetables")},removeFromTempQueue:function(e){var t=this.$store.getters["game/getBattleRoom"];t.send("remove-skill-from-queue",e)}},computed:{isTarget:function(){return this.$store.getters["game/getCharacterByIndex"](this.index)},tempQueue:function(){return this.$store.getters["game/getTempQueueByCharacter"]},skill:function(){return this.$store.getters["game/getSkillByCaster"]},skillQueue:function(){return this.$store.getters["game/getSkillQueueById"]},playerId:function(){return this.$store.getters["user/getUserData"].id}}},A=U,V=(s("b9f7"),Object(g["a"])(A,q,R,!1,null,null,null)),J=V.exports,L={CharFace:J},N=function(){var e=this.$store.getters["user/getUserData"].id;return this.$store.getters["game/getEnemyCharList"](e)},z={enemyTeam:N},H={},K={},W={data:function(){return{}},components:L,computed:z,methods:H,watchers:K},X=W,Y=(s("8c75"),Object(g["a"])(X,O,F,!1,null,null,null)),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"viewer"},[s("Skill",{attrs:{data:e.data}})],1)},te=[],se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"skill"},[s("img",{staticClass:"viewer-img",attrs:{src:"/img/game/"+e.data.skillpic+".jpg"}}),s("div",{staticClass:"viewer-description"},[s("h1",[e._v(e._s(e.data.name))]),s("p",[e._v(e._s(e.data.description))]),s("p",[e._v(" cost: "),e._l(e.costs,(function(e,t){return s("span",{key:t,class:"viewer-energy "+e})}))],2)])])},ie=[],ae={props:["data"],computed:{costs:function(){for(var e=["speed","strength","elemental","wisdom","random"],t=[],s=0;s<e.length;s++)for(var i=0;i<this.data.cost[s];i++)t.push(e[s]);return t}}},re=ae,ne=(s("f764"),Object(g["a"])(re,se,ie,!1,null,"8d2c8322",null)),le=ne.exports,ce={Skill:le},oe=s("e50b"),ue=s.n(oe),me={},ge={},de={data:function(){return{data:{skillpic:"",description:""}}},components:ce,computed:ue.a,methods:me,watchers:ge,created:function(){var e=this;this.$eventBus.$on("selected-a-skill",(function(t){e.data=t}))}},fe=de,he=(s("5259"),Object(g["a"])(fe,ee,te,!1,null,null,null)),pe=he.exports,ve=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cart",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[s("section",{staticClass:"cart-cart"},[s("table",[s("tr",[s("th",[e._v("Select "+e._s(e.queue[4])+" more energy to proceed")])]),e._l(e.energyPool.slice(0,4),(function(t,i){return s("tr",{key:i},[s("td",[e._v(" "+e._s(t)+" "),s("button",{on:{click:function(t){return e.pay(i)}}},[e._v("+")])]),s("td",[s("button",{on:{click:function(t){return e.refund(i)}}},[e._v("-")]),e._v(" "+e._s(e.paid[i])+" ")])])}))],2),s("div",{staticClass:"cart-skills"},e._l(e.tempQueue,(function(t,i){return s("img",{key:i,attrs:{src:"/img/game/"+e.skill(t.caster,t.skill).skillpic+".jpg"}})})),0),s("button",{on:{click:e.endturn}},[e._v("End turn")])])])},ye=[],ke=(s("13d5"),s("a434"),{props:["queue"],data:function(){return{paid:[0,0,0,0],energy:["speed","strength","elemental","wisdom","random"]}},methods:{close:function(){this.$emit("close")},pay:function(e){0!==this.queue[4]&&(this.energyPool[e]<=0||(this.energyPool.splice(e,1,this.energyPool[e]-1),this.paid.splice(e,1,this.paid[e]+1)))},refund:function(e){0!==this.queue[4]&&(this.paid[e]<=0||(this.energyPool.splice(e,1,this.energyPool[e]+1),this.paid.splice(e,1,this.paid[e]-1)))},endturn:function(){var e=this.paid.reduce((function(e,t){return e+t}),0);if(e==this.queue[4]){var t=this.$store.getters["game/getBattleRoom"];t.send("end-game-turn",this.paid)}}},computed:{tempQueue:function(){return this.$store.getters["game/getTempQueue"]},skill:function(){return this.$store.getters["game/getSkillByCaster"]},energyPool:function(){var e=this.$store.state.user.id;return this.$store.getters["game/GetMyData"](e).energyPool}}}),_e=ke,Ce=(s("bbe7"),Object(g["a"])(_e,ve,ye,!1,null,"6736c8f8",null)),$e=Ce.exports,be={MyTeam:G,EnergyCart:$e,EnemyTeam:Z,Viewer:pe},Te=function(){return this.$store.state.game},xe=function(){var e=this.$store.state.user.id;return this.$store.getters["game/GetMyData"](e)},Se=function(){var e=this.$store.state.user.id;return this.$store.getters["game/myEnemyData"](e)},we=function(){var e=this.$store.state.user.id;return this.$store.getters["game/GetMyData"](e).isTurn},Ie=function(){return this.$store.getters["game/getTempQueue"]},Me={Game:Te,isTurn:we,GetMyData:xe,myEnemyData:Se,tempSkillQueue:Ie},Ee=function(){if(this.tempSkillQueue.length>0)this.endturn=!0;else{var e=this.$store.getters["game/getBattleRoom"];e.send("end-game-turn")}},je={endTurn:Ee},De=function(e){e||(this.endturn=!1)},Qe={isTurn:De},Be={data:function(){return{energies:["speed","strength","elemental","wisdom"],endturn:!1,timer:100,tick:null}},components:be,computed:Me,methods:je,watch:Qe,created:function(){var e=this,t=this.$store.getters["game/getBattleRoom"];null!==t&&(t.onMessage("start-new-turn",(function(t){clearInterval(e.tick),e.timer=100,e.tick=setInterval((function(){e.timer=e.timer-1.66,0===e.timer&&clearInterval(e.tick)}),1e3),e.$store.commit("game/setGameState",t),e.GetMyData.isTurn?e.$store.commit("midori/setUpdate",{value:!0,index:0}):e.$store.commit("midori/setUpdate",{value:!0,index:1})})),t.onMessage("update-temp-queue",(function(t){e.$store.commit("game/setTempQueue",t),e.$store.commit("game/setPlayerEnergyPool",{playerIndex:t.playerIndex,energyPool:t.energyPool}),e.$store.commit("game/setPayupCart",{p:t.playerIndex,pay:t.payupCart})})),t.onMessage("end-game",(function(t){clearInterval(e.tick),console.log("GAME IS OVER"),console.log(t)}))),this.tick=setInterval((function(){e.timer=e.timer-1.66,0===e.timer&&clearInterval(e.tick)}),1e3)},mounted:function(){this.GetMyData.isTurn?this.$store.commit("midori/setUpdate",{value:!0,index:0}):this.$store.commit("midori/setUpdate",{value:!0,index:1})},beforeDestroy:function(){this.$store.commit("game/setRoom",null)}},Pe=Be,Ge=(s("1ca1"),Object(g["a"])(Pe,i,a,!1,null,null,null));t["default"]=Ge.exports},b9f7:function(e,t,s){"use strict";var i=s("77bb"),a=s.n(i);a.a},bbe7:function(e,t,s){"use strict";var i=s("0571"),a=s.n(i);a.a},d317:function(e,t,s){},e50b:function(e,t){},e9f2:function(e,t,s){},f764:function(e,t,s){"use strict";var i=s("e9f2"),a=s.n(i);a.a},fb7a:function(e,t,s){}}]);
//# sourceMappingURL=chunk-4afb9776.0364df96.js.map