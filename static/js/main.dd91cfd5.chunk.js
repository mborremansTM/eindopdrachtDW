(this.webpackJsonpeindopdracht=this.webpackJsonpeindopdracht||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),i=n.n(r),a=(n(9),n(10),n(0));function l(e){var t=e.children;return Object(a.jsx)("div",{className:"section",children:t})}function j(e){var t=e.game;return t.result?Object(a.jsxs)(l,{children:[Object(a.jsx)(d,{result:t.result}),Object(a.jsx)("strong",{children:"Your champion picked:"})," ",t.champion,"\u2003",Object(a.jsx)("strong",{children:"Enemy champion picked:"})," ",t.enemy,"\u2003",Object(a.jsx)("strong",{children:"Damage dealt:"})," ",t.damage,"\u2003",Object(a.jsx)("strong",{children:"CS:"})," ",t.cs,"\u2003",Object(a.jsx)("strong",{children:"Kills:"})," ",t.kills,"\u2003",Object(a.jsx)("strong",{children:"Assists:"})," ",t.assist,"\u2003",Object(a.jsx)("strong",{children:"Deaths:"})," ",t.death,"\u2003",Object(a.jsx)("strong",{children:"KDA:"})," ",Object(a.jsx)(h,{kills:t.kills,deaths:t.death,assists:t.assist})]}):null}function o(e){var t=e.games;return Object(a.jsx)("div",{children:t.map((function(e){return Object(a.jsx)(j,{game:e},e.id)}))})}function d(e){var t=e.result;return"WIN"===t?Object(a.jsx)("h3",{className:"win",children:t}):"LOSE"===t?Object(a.jsx)("h3",{className:"lose",children:t}):void 0}function h(e){var t,n=e.kills,s=e.deaths,c=e.assists;return t=n+c/s,Math.round(10*t)/10}var u=[{champion:"Ezreal",enemy:"Ashe",damage:10423,cs:123,result:"WIN",kills:5,assist:1,death:2},{champion:"Miss fortune",enemy:"Ezreal",damage:5214,cs:98,result:"LOSE",kills:2,assist:2,death:6},{champion:"Ezreal",enemy:"Ashe",damage:10423,cs:123,kills:5,assist:1,death:2}],b={nameUser:"mborrema",lp:55,rank:"BRONZE 4"},O=n(4);function g(e){var t=Object(s.useState)(0),n=Object(O.a)(t,2),c=n[0],r=n[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"dodges:"})," ",c,"\u2003",Object(a.jsx)("button",{onClick:function(){return r(c-1)},children:"-"}),"\u2002",Object(a.jsx)("button",{onClick:function(){return r(c+1)},children:"+"})]})}function m(e){var t=e.profile;return Object(a.jsxs)(l,{children:[Object(a.jsx)("strong",{children:"Username:"})," ",t.nameUser,"\u2003",Object(a.jsx)("strong",{children:"League Points:"})," ",t.lp," lp \u2003",Object(a.jsx)("strong",{children:"Rank:"})," ",t.rank,"\u2003",Object(a.jsx)(g,{})]})}var x=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"League of legends"}),Object(a.jsx)(m,{profile:b}),Object(a.jsx)(o,{games:u})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),r(e),i(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),f()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.dd91cfd5.chunk.js.map