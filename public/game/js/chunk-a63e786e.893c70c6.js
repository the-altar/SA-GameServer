(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a63e786e"],{"0500":function(t,e,s){},"0a92":function(t,e,s){},"14d0":function(t,e,s){"use strict";var a=s("6f15"),i=s.n(a);i.a},"1ca1":function(t,e,s){"use strict";var a=s("d317"),i=s.n(a);i.a},"26d6":function(t,e,s){},2763:function(t,e,s){},2928:function(t,e,s){},2958:function(t,e,s){},3387:function(t,e,s){"use strict";var a=s("ea4d"),i=s.n(a);i.a},3998:function(t,e,s){"use strict";var a=s("b84f"),i=s.n(a);i.a},"416b":function(t,e,s){"use strict";var a=s("2958"),i=s.n(a);i.a},5259:function(t,e,s){"use strict";var a=s("0a92"),i=s.n(a);i.a},"5bd7":function(t,e,s){"use strict";var a=s("26d6"),i=s.n(a);i.a},"634a":function(t,e,s){"use strict";var a=s("0500"),i=s.n(a);i.a},6879:function(t,e,s){t.exports=s.p+"img/winner.e34810e7.jpg"},"6f15":function(t,e,s){},"77bb":function(t,e,s){},"8c75":function(t,e,s){"use strict";var a=s("2928"),i=s.n(a);i.a},"9d58":function(t,e,s){},ab4e:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ingame",class:{busy:t.isBusy}},[s("section",{staticClass:"ingame-header"},[s("div",{staticClass:"ingame-player",on:{click:function(e){return t.selectUserView(t.GetMyData)}}},[s("img",{staticClass:"ingame-player-icon",attrs:{src:"/img/avatars/"+t.GetMyData.avatar,alt:""}})]),s("div",{staticClass:"ingame-control"},[s("div",{staticClass:"ingame-control-timebar"},[s("div",{staticClass:"ingame-control-timebar-gauge",style:"width: "+t.timer+"%"})]),t.GetMyData.isTurn?s("button",{staticClass:"ingame-control-btn",on:{click:function(e){return t.endTurn()}}},[t._v("end turn")]):t._e(),t.GetMyData.isTurn?s("ul",{staticClass:"ingame-control-energypool"},t._l(t.GetMyData.energyPool.slice(0,4),(function(e,a){return s("li",{key:a,class:t.energies[a]+" "+t.energies[a]+"-glow"},[t._v(t._s(e))])})),0):t._e()]),s("div",{staticClass:"ingame-player ingame-player-2",on:{click:function(e){return t.selectUserView(t.myEnemyData)}}},[s("img",{staticClass:"ingame-player-icon",attrs:{src:"/img/avatars/"+t.myEnemyData.avatar,alt:""}})])]),s("section",{staticClass:"ingame-field"},[s("MyTeam"),s("EnemyTeam")],1),s("section",{staticClass:"ingame-footer"},[s("button",{staticClass:"ingame-btn",on:{click:t.surrender}},[t._v("Surrender")]),s("Viewer")],1),t.endturn&&t.GetMyData.isTurn?s("EnergyCart",{attrs:{queue:t.GetMyData.payupCart},on:{endturn:t.endTurn,close:function(e){t.endturn=!1}}}):t._e(),t.wantToSurrender?s("Confirmation",{on:{close:function(e){t.wantToSurrender=!1}}}):t._e(),t.gameOver?s("EndGame",{attrs:{data:t.endGameData}}):t._e()],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myteam"},t._l(t.myTeam,(function(e,a){return s("section",{key:a,class:{none:!1===e}},[!1!==e?s("div",{staticClass:"myteam-char"},[s("CharFace",{attrs:{char:e,index:a}}),s("section",{staticClass:"myteam-gamestatus"},[s("div",{staticClass:"myteam-effects"},[t._l(t.skillQueue(a,t.myId).reverse(),(function(e,a){return s("v-popover",{key:a,attrs:{trigger:"hover"}},[s("img",{staticClass:"myteam-effect",attrs:{src:"/img/game/"+e.skillpic+".jpg"}}),s("template",{slot:"popover"},[s("ul",[s("li",[t._v(t._s(e.skillName))]),t._l(e.tips,(function(e,a){return s("li",{key:a},[s("ul",[s("li",[t._v(t._s(e.message))]),s("li",[t._v(t._s(e.duration))])])])})),t._l(e.notifications,(function(e,a){return s("li",{key:a},[s("ul",[s("li",[t._v(t._s(e))])])])}))],2)])],2)})),t._l(t.tempQueue(a).reverse(),(function(e,a){return s("img",{key:a,staticClass:"myteam-effect",attrs:{src:"/img/game/"+t.skill(e.caster,e.skill).skillpic+".jpg"},on:{dblclick:function(s){return t.removeFromTempQueue(e)}}})}))],2),t.myData.isTurn?s("Skills",{attrs:{skills:e.skills,charIndex:a},on:{"selected-skill":t.setSkill}}):s("div",{staticClass:"myteam-skillset"})],1)],1):t._e()])})),0)},n=[],c=s("5530"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"charface-status"},[s("div",{staticClass:"charface-icons"},[t.char.isTarget?s("img",{staticClass:"pulsate",attrs:{src:"/img/game/"+t.char.facepic+".jpg"},on:{click:function(e){return t.selectTarget()}}}):t._e(),s("img",{class:{fainted:t.char.knockedOut},attrs:{src:"/img/game/"+t.char.facepic+".jpg"},on:{click:t.displayCharInfo}})]),s("div",{staticClass:"charface-hp"},[s("div",{staticClass:"charface-hp-value"},[t._v(t._s(t.char.hitPoints))]),s("div",{staticClass:"charface-hp-gauge",style:"width: "+t.char.hitPoints+"%"})])])},o=[],u={props:["char","index"],methods:{selectTarget:function(){this.$eventBus.$emit("set-target",this.index),this.$store.commit("game/setSkillInFocus",{}),this.$store.commit("game/resetTargetables")},displayCharInfo:function(){this.$eventBus.$emit("selected-a-char",this.char)}}},m=u,d=(s("eb15"),s("2877")),g=Object(d["a"])(m,l,o,!1,null,"0c472d39",null),h=g.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myteam-skillset"},t._l(t.skills,(function(e,a){return s("div",{key:a,staticClass:"myteam-skillset-skill",on:{click:function(s){return t.emitSelectedSkill(e,a)}}},[e.cooldown>0?s("p",{staticClass:"myteam-skillset-cd"},[t._v(t._s(e.cooldown))]):t._e(),t.inFocus===e?s("img",{staticClass:"pulsate myteam-skillset-skill-icon",attrs:{src:"/img/game/"+e.skillpic+".jpg"}}):t._e(),s("img",{staticClass:"myteam-skillset-skill-icon",class:{fade:e.disabled},attrs:{src:"/img/game/"+e.skillpic+".jpg"}})])})),0)},p=[],v={props:["skills","charIndex"],methods:{emitSelectedSkill:function(t,e){this.$store.getters["game/isBusy"]||(t.disabled||(this.$store.commit("game/setSkillInFocus",t),this.$store.commit("game/setTargetables",t.targetChoices.choice),this.$emit("selected-skill",{skill:e,caster:this.charIndex})),this.$eventBus.$emit("selected-a-skill",t))}},computed:{inFocus:function(){return this.$store.state.game.skillInFocus}}},y=v,k=Object(d["a"])(y,f,p,!1,null,null,null),_=k.exports,C={CharFace:h,Skills:_},$=function(){return this.$store.getters["game/getMyCharList"](this.myId)},b=function(){return this.$store.getters["game/GetMyData"](this.myId)},w=function(){return this.$store.getters["game/getTempQueueByCharacter"]},S=function(){return this.$store.getters["user/getUserData"].id},T=function(){return this.$store.getters["game/getSkillByCaster"]},B=function(){return this.$store.getters["game/getSkillQueueById"]},D={myId:S,skill:T,myTeam:$,myData:b,skillQueue:B,tempQueue:w},x=function(t){this.selectedSkill=t},j=function(t){if(!this.$store.getters["game/isBusy"]){this.$store.commit("game/setBusyStatus",!0);var e=this.$store.getters["game/getBattleRoom"];e.send("remove-skill-from-queue",t),this.$store.commit("game/setBusyStatus",!0)}},E={setSkill:x,removeFromTempQueue:j},I={},P={data:function(){return{selectedSkill:{}}},components:C,computed:D,methods:E,watchers:I,created:function(){var t=this;this.$eventBus.$on("set-target",(function(e){var s=t.$store.getters["game/getBattleRoom"];s.send("add-skill-to-queue",Object(c["a"])(Object(c["a"])({},t.selectedSkill),{},{target:e})),t.$store.commit("game/setBusyStatus",!0)}))}},U=P,G=(s("14d0"),Object(d["a"])(U,r,n,!1,null,null,null)),Q=G.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"enemy"},t._l(t.enemyTeam,(function(t,e){return s("CharFace",{key:e,attrs:{char:t,index:e}})})),1)},O=[],R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return!1!==t.char?s("section",{staticClass:"enemy-char"},[s("div",{staticClass:"enemy-char-status"},[s("div",{staticClass:"enemy-icon"},[t.isTarget.isTarget?s("img",{staticClass:"pulsate",attrs:{src:"/img/game/"+t.char.facepic+".jpg"},on:{click:function(e){return t.selectTarget()}}}):t._e(),s("img",{class:{fainted:t.char.knockedOut},attrs:{src:"/img/game/"+t.char.facepic+".jpg"},on:{click:function(e){return t.displayChar()}}})]),s("div",{staticClass:"enemy-hp"},[s("div",{staticClass:"enemy-hp-value"},[t._v(t._s(t.char.hitPoints))]),s("div",{staticClass:"enemy-hp-gauge",style:"width: "+t.char.hitPoints+"%"})])]),t._l(t.skillQueue(t.index,t.playerId).reverse(),(function(e,a){return s("v-popover",{key:a,staticClass:"enemy-effect",attrs:{trigger:"hover"}},[s("img",{attrs:{src:"/img/game/"+e.skillpic+".jpg"}}),s("template",{slot:"popover"},[s("ul",[s("li",[t._v(t._s(e.skillName))]),t._l(e.tips,(function(e,a){return s("li",{key:a},[s("ul",[s("li",[t._v(t._s(e.message))]),s("li",[t._v(t._s(Math.floor(e.duration))+" turns left")])])])})),t._l(e.notifications,(function(e,a){return s("li",{key:a},[s("ul",[s("li",[t._v(t._s(e))])])])}))],2)])],2)})),s("div",{staticClass:"enemy-effect"},t._l(t.tempQueue(t.index).reverse(),(function(e,a){return s("img",{key:a,attrs:{src:"/img/game/"+t.skill(e.caster,e.skill).skillpic+".jpg"},on:{dblclick:function(s){return t.removeFromTempQueue(e)}}})})),0)],2):t._e()},F=[],q={props:["char","index"],methods:{selectTarget:function(){this.$eventBus.$emit("set-target",this.index),this.$store.commit("game/setSkillInFocus",{}),this.$store.commit("game/resetTargetables")},removeFromTempQueue:function(t){if(!this.$store.getters["game/isBusy"]){this.$store.commit("game/setBusyStatus",!0);var e=this.$store.getters["game/getBattleRoom"];e.send("remove-skill-from-queue",t)}},displayChar:function(){this.$eventBus.$emit("selected-a-char",this.char)}},computed:{isTarget:function(){return this.$store.getters["game/getCharacterByIndex"](this.index)},tempQueue:function(){return this.$store.getters["game/getTempQueueByCharacter"]},skill:function(){return this.$store.getters["game/getSkillByCaster"]},skillQueue:function(){return this.$store.getters["game/getSkillQueueById"]},playerId:function(){return this.$store.getters["user/getUserData"].id}}},L=q,V=(s("b9f7"),Object(d["a"])(L,R,F,!1,null,null,null)),N=V.exports,Y={CharFace:N},J=function(){var t=this.$store.getters["user/getUserData"].id;return this.$store.getters["game/getEnemyCharList"](t)},A={enemyTeam:J},W={},z={},H={data:function(){return{}},components:Y,computed:A,methods:W,watchers:z},K=H,X=(s("8c75"),Object(d["a"])(K,M,O,!1,null,null,null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"viewer"},[t.isSkill?s("Skill",{attrs:{data:t.data}}):t._e(),t.isChar?s("Char",{attrs:{char:t.data}}):t._e(),t.isUser?s("User",{attrs:{user:t.data}}):t._e()],1)},et=[],st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"skill"},[s("img",{staticClass:"skill-img",attrs:{src:"/img/game/"+t.data.banner+".jpg"}}),s("div",{staticClass:"skill-info"},[s("div",{staticClass:"skill-info-small"},[s("p",{staticClass:"skill-name"},[t._v(t._s(t.data.name))]),s("p",{staticClass:"skill-cost"},[t._v(" Cost: "),t._l(t.costs,(function(t,e){return s("span",{key:e,class:"viewer-energy "+t})}))],2)]),s("div",{staticClass:"skill-info-large"},[t._v(" "+t._s(t.data.description)+" ")]),s("div",{staticClass:"skill-info-small"},[s("p",{staticClass:"skill-classes"},[t._v(" Classes: "),s("span",{class:t.types[t.data.type[0]]+"--text"},[t._v(t._s(t.types[t.data.type[0]]))]),t._v(", "+t._s(t.classes[t.data.class])+" ")]),s("p",{staticClass:"skill-cooldown"},[t._v("Cooldown: "+t._s(t.data.baseCooldown))])])])])},at=[],it={props:["data"],computed:{costs:function(){for(var t=["speed","strength","elemental","wisdom","random"],e=[],s=0;s<t.length;s++)for(var a=0;a<this.data.cost[s];a++)e.push(t[s]);return e},types:function(){return this.$store.getters["enums/getEnum"]("pokemonTypings")},classes:function(){return this.$store.getters["enums/getEnum"]("skillClassTypings")}}},rt=it,nt=(s("634a"),Object(d["a"])(rt,st,at,!1,null,"3306d36f",null)),ct=nt.exports,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user"},[s("div",{staticClass:"user-avatar"},[s("img",{attrs:{src:"https://api.adorable.io/avatars/75/"+t.user.avatar,alt:t.user.username+" avatar"}})]),s("div",{staticClass:"user-info"},[s("div",{staticClass:"user-info-name"},[t._v(t._s(t.user.username))]),s("div",{staticClass:"user-info-stats"},[s("p",[t._v("Rank: "+t._s(t.user.ladderRank))]),s("p",[t._v("Ratio: "+t._s(t.user.wins)+" - "+t._s(t.user.losses)+" ("+t._s(t.user.streak)+")")])])]),s("div",{staticClass:"user-charlist"},t._l(t.charList,(function(t,e){return s("img",{key:e,attrs:{src:"/img/game/"+t.facepic+".jpg"}})})),0)])},ot=[],ut=s("b85c"),mt={props:["user"],computed:{charList:function(){var t,e=[],s=Object(ut["a"])(this.$store.getters["game/getMyCharList"](this.user.id));try{for(s.s();!(t=s.n()).done;){var a=t.value;a&&e.push(a)}}catch(i){s.e(i)}finally{s.f()}return e}}},dt=mt,gt=(s("3387"),Object(d["a"])(dt,lt,ot,!1,null,"32574ec5",null)),ht=gt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"char"},[s("div",{staticClass:"char-avatar"},[s("img",{attrs:{src:"/img/game/"+t.char.banner+".jpg"}})]),s("div",{staticClass:"char-profile"},[s("div",{staticClass:"narrow"},[s("p",{staticClass:"char-name"},[t._v(t._s(t.char.name))]),s("p",{staticClass:"char-gain"},t._l(t.char.energyGain,(function(e,a){return s("span",{key:a,class:"char-cost "+t.energy[e].toLowerCase()})})),0)]),s("div",{staticClass:"wide"},[s("p",[t._v(t._s(t.char.description))])]),s("div",{staticClass:"normal"},t._l(t.char.skills,(function(e,a){return s("div",{key:a,staticClass:"char-skill"},[s("img",{attrs:{src:"/img/game/"+e.skillpic+".jpg"},on:{click:function(s){return t.displaySkill(e)}}})])})),0)])])},pt=[],vt={props:["char"],computed:{energy:function(){return this.$store.getters["enums/getEnum"]("costTypings")}},methods:{displaySkill:function(t){this.$eventBus.$emit("selected-a-skill",t)}}},yt=vt,kt=(s("d986"),Object(d["a"])(yt,ft,pt,!1,null,"479e40b7",null)),_t=kt.exports,Ct={User:ht,Char:_t,Skill:ct},$t=s("e50b"),bt=s.n($t),wt={},St={},Tt={data:function(){return{isSkill:!1,isChar:!1,isUser:!1,data:{skillpic:"",description:""}}},components:Ct,computed:bt.a,methods:wt,watchers:St,created:function(){var t=this;this.$eventBus.$on("selected-a-skill",(function(e){t.isChar=!1,t.isUser=!1,t.isSkill=!0,t.data=e})),this.$eventBus.$on("selected-an-user",(function(e){t.isChar=!1,t.isSkill=!1,t.isUser=!0,t.data=e})),this.$eventBus.$on("selected-a-char",(function(e){t.isUser=!1,t.isSkill=!1,t.isChar=!0,t.data=e}))}},Bt=Tt,Dt=(s("5259"),Object(d["a"])(Bt,tt,et,!1,null,null,null)),xt=Dt.exports,jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[s("section",{staticClass:"cart-cart"},[s("p",{staticClass:"cart-head"},[t._v("Pay "+t._s(t.queue[4])+" PP to proceed")]),t._l(t.energyPool.slice(0,4),(function(e,a){return s("div",{key:a,staticClass:"cart-opt"},[s("div",{staticClass:"cart-field"},[s("p",{staticClass:"cart-energy"},[t._v(t._s(t.energyName[a]))]),s("p",[t._v(t._s(e))]),s("button",{on:{click:function(e){return t.pay(a)}}},[t._v("+")])]),s("div",{staticClass:"cart-field"},[s("button",{on:{click:function(e){return t.refund(a)}}},[t._v("-")]),s("p",[t._v(t._s(t.paid[a]))])])])})),s("div",{staticClass:"cart-skills"},t._l(t.tempQueue,(function(e,a){return s("img",{key:a,attrs:{src:"/img/game/"+t.skill(e.caster,e.skill).skillpic+".jpg"}})})),0),s("button",{staticClass:"btn",on:{click:t.endturn}},[t._v("Proceed")])],2)])},Et=[],It=(s("13d5"),s("a434"),{props:["queue"],data:function(){return{sum:0,paid:[0,0,0,0],energyName:["speed","strength","elemental","wisdom","random"]}},methods:{close:function(){for(var t in this.paid)this.energyPool.splice(t,1,this.energyPool[t]+this.paid[t]);this.$emit("close")},pay:function(t){this.queue[4]!==this.sum&&(this.energyPool[t]<=0||(this.energyPool.splice(t,1,this.energyPool[t]-1),this.paid.splice(t,1,this.paid[t]+1),this.sum++))},refund:function(t){0!==this.queue[4]&&(this.paid[t]<=0||(this.energyPool.splice(t,1,this.energyPool[t]+1),this.paid.splice(t,1,this.paid[t]-1),this.sum--))},endturn:function(){if(!this.$store.getters["game/isBusy"]){var t=this.paid.reduce((function(t,e){return t+e}),0);if(t==this.queue[4]){this.$store.commit("game/setBusyStatus",!0);var e=this.$store.getters["game/getBattleRoom"];e.send("end-game-turn",this.paid)}}}},computed:{tempQueue:function(){return this.$store.getters["game/getTempQueue"]},skill:function(){return this.$store.getters["game/getSkillByCaster"]},energyPool:function(){var t=this.$store.getters["user/getUserData"].id;return this.$store.getters["game/GetMyData"](t).energyPool}}}),Pt=It,Ut=(s("5bd7"),Object(d["a"])(Pt,jt,Et,!1,null,"d65fe936",null)),Gt=Ut.exports,Qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal"},[t.winner?s("div",{staticClass:"content"},[s("img",{attrs:{src:t.winnerPic}}),s("p",{staticClass:"head head-win"},[t._v("You've won!")]),s("div",{staticClass:"results"},[s("p",[t._v("+"+t._s(t.winningRes.expGained)+" exp")]),s("p",{staticClass:"middle"},[t._v("+"+t._s(t.winningRes.coins)+" coins")]),s("p",[t._v("+1 streak")])]),s("button",{staticClass:"btn btn-win",on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v(" Continue ")])]):s("div",{staticClass:"content"},[s("img",{attrs:{src:t.loserPic}}),s("p",{staticClass:"head"},[t._v("You've lost...")]),s("div",{staticClass:"results"},[s("p",[t._v("-"+t._s(t.losingRes.expLost)+" exp")]),s("p",{staticClass:"middle"},[t._v("+"+t._s(t.losingRes.coins)+" coins")]),s("p",[t._v("-"+t._s(1)+" streak")])]),s("button",{staticClass:"btn",on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v(" Continue ")])])])},Mt=[],Ot={props:["data"],data:function(){return{loserPic:s("e0a1"),winnerPic:s("6879")}},computed:{myId:function(){return this.$store.getters["user/getUserData"].id},winner:function(){return this.data.winner.playerData.id===this.myId},winningRes:function(){return this.data.winner.results},losingRes:function(){return this.data.loser.results}},created:function(){this.winner?(this.$store.dispatch("audio/playWin"),this.data.winner.playerData.unlocked=this.$store.getters["user/getUserData"].unlocked,this.$store.commit("user/SET_USER",this.data.winner.playerData)):(this.$store.dispatch("audio/playLose"),this.data.loser.playerData.unlocked=this.$store.getters["user/getUserData"].unlocked,this.$store.commit("user/SET_USER",this.data.loser.playerData))}},Rt=Ot,Ft=(s("3998"),Object(d["a"])(Rt,Qt,Mt,!1,null,"24a3d868",null)),qt=Ft.exports,Lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal"},[s("div",{staticClass:"content"},[s("h1",{staticClass:"header"},[t._v("Are you sure?")]),s("div",{staticClass:"options"},[s("button",{staticClass:"separator",on:{click:t.confirm}},[t._v("Yes")]),s("button",{on:{click:t.close}},[t._v("No")])])])])},Vt=[],Nt={methods:{close:function(){this.$emit("close")},confirm:function(){if(!this.$store.getters["game/isBusy"]){this.$store.commit("game/setBusyStatus",!0);var t=this.$store.getters["game/getBattleRoom"];t.send("surrender",this.$store.getters["user/getUserData"].id)}}}},Yt=Nt,Jt=(s("416b"),Object(d["a"])(Yt,Lt,Vt,!1,null,"f45a2d32",null)),At=Jt.exports,Wt={MyTeam:Q,EndGame:qt,EnergyCart:Gt,Confirmation:At,EnemyTeam:Z,Viewer:xt},zt=function(){return this.$store.state.game},Ht=function(){var t=this.$store.getters["user/getUserData"].id;return this.$store.getters["game/GetMyData"](t)},Kt=function(){var t=this.$store.getters["user/getUserData"].id;return this.$store.getters["game/myEnemyData"](t)},Xt=function(){var t=this.$store.getters["user/getUserData"].id;return this.$store.getters["game/GetMyData"](t).isTurn},Zt=function(){return this.$store.getters["game/getTempQueue"]},te=function(){return this.$store.getters["game/isBusy"]},ee={Game:zt,isBusy:te,isTurn:Xt,GetMyData:Ht,myEnemyData:Kt,tempSkillQueue:Zt},se=function(){if(!this.isBusy)if(this.tempSkillQueue.length>0)this.endturn=!0;else{var t=this.$store.getters["game/getBattleRoom"];t.send("end-game-turn"),this.$store.commit("game/setBusyStatus",!0)}},ae=function(){this.isBusy||(this.wantToSurrender=!0)},ie=function(t){this.$eventBus.$emit("selected-an-user",t)},re={endTurn:se,surrender:ae,selectUserView:ie},ne=function(t){t||(this.endturn=!1)},ce={isTurn:ne},le={data:function(){return{energies:["speed","strength","elemental","wisdom"],endturn:!1,timer:100,count:60,tick:null,gameOver:!1,wantToSurrender:!1,endGameData:null}},components:Wt,computed:ee,methods:re,watch:ce,created:function(){var t=this,e=this.$store.getters["game/getBattleRoom"];null!==e&&(e.onMessage("start-new-turn",(function(e){t.$store.commit("game/setBusyStatus",!1),t.$store.dispatch("audio/playTurnSound"),clearInterval(t.tick),t.timer=100,t.count=60,t.tick=setInterval((function(){t.timer=t.timer-1.66,t.count=t.count-1,0===t.timer&&clearInterval(t.tick)}),1e3),t.$store.commit("game/setGameState",e),t.GetMyData.isTurn?t.$store.commit("midori/setUpdate",{value:!0,index:0}):t.$store.commit("midori/setUpdate",{value:!0,index:1})})),e.onMessage("update-temp-queue",(function(e){t.$store.commit("game/setTempQueue",e),t.$store.commit("game/setPlayerEnergyPool",{playerIndex:e.playerIndex,energyPool:e.energyPool}),t.$store.commit("game/setPayupCart",{p:e.playerIndex,pay:e.payupCart}),t.$store.commit("game/setBusyStatus",!1)})),e.onMessage("end-game",(function(e){clearInterval(t.tick),t.endGameData=e,t.endturn=!1,t.gameOver=!0,t.$store.commit("game/setBusyStatus",!1)}))),this.tick=setInterval((function(){t.timer=t.timer-1.66,t.count=t.count-1,0===t.timer&&clearInterval(t.tick)}),1e3)},mounted:function(){this.GetMyData.isTurn?this.$store.commit("midori/setUpdate",{value:!0,index:0}):this.$store.commit("midori/setUpdate",{value:!0,index:1}),this.selectUserView(this.myEnemyData)},beforeDestroy:function(){this.$store.commit("game/resetState"),this.$eventBus.$off()}},oe=le,ue=(s("1ca1"),Object(d["a"])(oe,a,i,!1,null,null,null));e["default"]=ue.exports},b84f:function(t,e,s){},b9f7:function(t,e,s){"use strict";var a=s("77bb"),i=s.n(a);i.a},d317:function(t,e,s){},d986:function(t,e,s){"use strict";var a=s("9d58"),i=s.n(a);i.a},e0a1:function(t,e,s){t.exports=s.p+"img/loser.90629d12.jpg"},e50b:function(t,e){},ea4d:function(t,e,s){},eb15:function(t,e,s){"use strict";var a=s("2763"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-a63e786e.893c70c6.js.map