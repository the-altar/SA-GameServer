(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45425b14"],{"4f3e":function(e,t,a){},"5ad4":function(e,t,a){},"5daa":function(e,t,a){"use strict";var r=a("5ad4"),n=a.n(r);n.a},c34d:function(e,t,a){"use strict";var r=a("4f3e"),n=a.n(r);n.a},d9c5:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"container"},[a("div",{staticClass:"home__panel"},[a("playerPanel",{attrs:{user:e.userData}}),a("section",{staticClass:"home__roster"},e._l(e.currentTeam,(function(e,t){return a("div",{key:t,staticClass:"home__roster__picture"},[a("img",{attrs:{src:"/img/game/"+e.facepic+".jpg"}})])})),0),a("button",{staticClass:"home__btn",on:{click:e.joinRankedLobby}},[a("p",[e._v("Start Game")]),a("img",{attrs:{src:"/img/icons/whiteball.png"}})]),a("button",{staticClass:"home__btn",on:{click:e.joinLobby}},[a("p",[e._v("Join lobby")]),a("img",{attrs:{src:"/img/icons/whiteball.png"}})])],1),a("router-view",{staticClass:"home__router"})],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"player"},[a("img",{staticClass:"player-avatar",attrs:{src:"https://api.adorable.io/avatars/75/"+e.user.avatarId}}),a("div",{staticClass:"player-info"},[a("p",[e._v("Username: "+e._s(e.user.username))]),a("p",[e._v("id: "+e._s(e.user.id))])])])},o=[],i={props:["user"]},c=i,u=(a("c34d"),a("2877")),l=Object(u["a"])(c,s,o,!1,null,"0762659a",null),m=l.exports,p={playerPanel:m},b=function(){return this.$store.getters["user/getUserData"]},h=function(){return this.$store.state.game.currentTeam},d=function(){return this.$store.state.game.room},f={userData:b,currentTeam:h,battleRoom:d},g=(a("a9e3"),a("96cf"),a("1da1")),v=function(){this.$router.push({name:"lobby"})},_=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(3===this.currentTeam.length){e.next=3;break}return alert("You need exactly 3 characters to start a game!"),e.abrupt("return");case 3:return e.prev=3,e.next=6,this.$colyseus.joinOrCreate("rankedLobby",this.$store.getters["user/ranked"]);case 6:t=e.sent,t.onMessage("seat",function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.$colyseus.consumeSeatReservation(r);case 3:n=e.sent,a.$store.commit("game/setRoom",n),a.battleRoom.onMessage("joined",(function(e){2===Number(e)&&a.battleRoom.send("start-game-data",{team:a.currentTeam,player:a.$store.getters["user/getUserData"]})})),a.battleRoom.onMessage("game-started",(function(e){a.$store.commit("game/setGameState",e),a.$router.push({name:"ingame"})})),t.leave(),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),alert(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),y={joinLobby:v,joinRankedLobby:_},w={},k={components:p,computed:f,methods:y,watchers:w,mounted:function(){this.$store.commit("midori/setUpdate",{value:!0,index:2})}},$=k,R=(a("5daa"),Object(u["a"])($,r,n,!1,null,null,null));t["default"]=R.exports}}]);
//# sourceMappingURL=chunk-45425b14.ee9fb8cb.js.map