(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab17ed1e"],{"5ad4":function(e,t,a){},"5daa":function(e,t,a){"use strict";var r=a("5ad4"),n=a.n(r);n.a},"6a5f":function(e,t,a){"use strict";var r=a("d900"),n=a.n(r);n.a},d900:function(e,t,a){},d9c5:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"container"},[a("div",{staticClass:"home__panel"},[a("playerPanel",{attrs:{user:e.userData}}),a("div",{staticClass:"home-roster"},e._l(e.currentTeam.members,(function(t,r){return a("drop",{key:r,staticClass:"home-roster-pic",attrs:{draggable:!1},on:{drop:function(t){var a=arguments.length,n=Array(a);while(a--)n[a]=arguments[a];return e.handleDrop.apply(void 0,[r].concat(n))}}},[t.facepic?a("img",{attrs:{src:"/img/game/"+t.facepic+".jpg"},on:{dblclick:function(t){return e.removeCharByIndex(r)}}}):a("img",{attrs:{src:"/img/icons/interrogation.png"}})])})),1),a("button",{staticClass:"home__btn",on:{click:e.joinRankedLobby}},[e.searchingGame?a("p",[e._v("Searching...")]):a("p",[e._v("START GAME")]),a("span",[a("img",{class:{"home__btn-active":e.searchingGame},attrs:{src:"/img/icons/whiteball.png"}})])]),a("button",{staticClass:"home__btn",on:{click:e.joinLobby}},[a("p",[e._v("JOIN LOBBY")]),e._m(0)]),a("button",{staticClass:"home__btn",on:{click:e.joinLobby}},[a("p",[e._v("JOBS")]),e._m(1)])],1),a("router-view",{staticClass:"home__router"})],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("img",{attrs:{src:"/img/icons/whiteball.png"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("img",{attrs:{src:"/img/icons/whiteball.png"}})])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"player"},[a("img",{staticClass:"player-avatar",attrs:{src:"https://api.adorable.io/avatars/75/"+e.user.avatar}}),a("div",{staticClass:"player-info"},[a("div",{staticClass:"player-info-title"},[a("h1",{staticClass:"player-info-name"},[e._v(e._s(e.user.username))]),a("div",[a("p",{staticClass:"player-info-rank"},[e._v(e._s(e.user.rank))]),a("p",{staticClass:"player-info-ladder"},[e._v("no rank")])]),a("div",{staticClass:"flex"},[a("p",{staticClass:"player-info-stats"},[e._v(" "+e._s(e.user.wins)+" "),a("span",[e._v("W")])]),a("p",{staticClass:"player-info-stats"},[e._v(" "+e._s(e.user.losses)+" "),a("span",[e._v("L")])]),a("p",{staticClass:"player-info-stats"},[e._v(" "+e._s(e.user.streak)+" "),a("span",[e._v("+")])])])])])])},i=[],o={props:["user"]},c=o,u=(a("6a5f"),a("2877")),l=Object(u["a"])(c,s,i,!1,null,"3bef5d4c",null),m=l.exports,p={playerPanel:m},h=function(){return this.$store.getters["user/getUserData"]},d=function(){return this.$store.state.game.currentTeam},g=function(){return this.$store.state.game.room},f={userData:h,currentTeam:d,battleRoom:g},v=(a("a9e3"),a("96cf"),a("1da1")),b=function(){this.$store.dispatch("audio/playBlocked"),alert("This isn't working yet, sorry!")},_=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===this.gameRoom){e.next=3;break}return this.gameRoom.leave(),e.abrupt("return");case 3:if(this.currentTeam.full){e.next=7;break}return this.$store.dispatch("audio/playBlocked"),alert("You need exactly 3 characters to start a game!"),e.abrupt("return");case 7:return this.searchingGame=!0,this.$store.dispatch("audio/playSnap"),e.prev=9,e.next=12,this.$colyseus.joinOrCreate("rankedLobby",this.$store.getters["user/ranked"]);case 12:this.gameRoom=e.sent,this.gameRoom.onMessage("seat",function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$colyseus.consumeSeatReservation(a);case 3:r=e.sent,t.$store.commit("game/setRoom",r),t.battleRoom.onMessage("joined",(function(e){2===Number(e)&&t.battleRoom.send("start-game-data",{team:t.currentTeam.members,player:t.$store.getters["user/getUserData"]})})),t.battleRoom.onMessage("game-started",(function(e){t.$store.dispatch("audio/changeIntoBattle"),t.$store.commit("game/setGameState",e),t.$router.push({name:"ingame"})})),t.gameRoom.leave(),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),this.gameRoom.onLeave(Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.gameRoom=null,t.searchingGame=!1;case 2:case"end":return e.stop()}}),e)})))),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](9),alert(e.t0);case 20:case"end":return e.stop()}}),e,this,[[9,17]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.searchingGame){e.next=2;break}return e.abrupt("return");case 2:this.$store.commit("game/removeCharByIndex",t);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),k=function(e,t){this.searchingGame||t&&this.$store.commit("game/addToTeamAtIndex",{char:t,index:e})},w={joinLobby:b,handleDrop:k,joinRankedLobby:_,removeCharByIndex:y},R={},C={data:function(){return{searchingGame:!1,btn2:!1,theme:{},gameRoom:null}},components:p,computed:f,methods:w,watchers:R,mounted:function(){this.$store.commit("midori/setUpdate",{value:!0,index:2})}},x=C,$=(a("5daa"),Object(u["a"])(x,r,n,!1,null,null,null));t["default"]=$.exports}}]);
//# sourceMappingURL=chunk-ab17ed1e.a1049f9e.js.map