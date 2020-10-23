(this["webpackJsonpVirtual-Pub-Quiz-Frontend"]=this["webpackJsonpVirtual-Pub-Quiz-Frontend"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/1stPlace.ad230b7d.png"},16:function(e,t,a){e.exports=a.p+"static/media/2ndPlace.d33e7595.png"},29:function(e,t,a){e.exports=a.p+"static/media/3rdPlace.f208fa45.png"},33:function(e,t,a){e.exports=a(64)},55:function(e,t,a){e.exports=a.p+"static/media/Ready.0ea0042b.png"},61:function(e,t,a){e.exports=a.p+"static/media/Leaderboard.99f1ce40.png"},62:function(e,t,a){e.exports=a.p+"static/media/Logo.608bd790.png"},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),s=a(3),i=a(1),o=a(10),u=a(2),m=a.n(u),d=a(8),p=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),l=t[0],c=t[1],u=Object(n.useState)(""),p=Object(i.a)(u,2),b=p[0],E=p[1],g=Object(n.useState)(!1),h=Object(i.a)(g,2),f=h[0],v=h[1],S=Object(n.useState)(!0),O=Object(i.a)(S,2),w=O[0],N=O[1],j=new d.a;return r.a.createElement("div",null,r.a.createElement("div",{className:"ready-graphic"},r.a.createElement("img",{src:a(55),alt:"Ready for a quiz?",width:"500"})),w?null:r.a.createElement("div",null,"Quiz ID not found or nickname already taken"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/newUserAndJoin",{params:{displayName:b,sessionID:l}}).then((function(e){j.set("userID",e.data,{path:"/"}),N(e.status),v(!0),N(!0)})).catch((function(e){console.error("There was an error!",e),N(!1)}))}},r.a.createElement("div",{className:"start-form"},r.a.createElement("input",{required:!0,title:"Quiz ID should be 6 digits.",pattern:"\\d{6}",value:l,placeholder:"Quiz ID",onChange:function(e){console.log(e.target.value),c(e.target.value)}}),r.a.createElement("input",{required:!0,value:b,placeholder:"Nickname",onChange:function(e){console.log(e.target.value),E(e.target.value)}}),r.a.createElement("a",null,r.a.createElement("button",{className:"start-button",type:"submit"},"JOIN")),r.a.createElement(o.b,{to:"/host"},r.a.createElement("button",{className:"host-home-button"},"HOST")))),f?r.a.createElement(s.a,{to:"/waiting"}):null)},b=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),u=Object(i.a)(c,2),p=u[0],b=u[1],E=Object(n.useState)("1"),g=Object(i.a)(E,2),h=g[0],f=(g[1],Object(n.useState)("")),v=Object(i.a)(f,2),S=v[0],O=v[1],w=Object(n.useState)("0"),N=Object(i.a)(w,2),j=N[0],z=(N[1],Object(n.useState)("")),I=Object(i.a)(z,2),T=I[0],D=I[1],k=Object(n.useState)(!1),q=Object(i.a)(k,2),y=q[0],Q=q[1],A=Object(n.useState)(!1),x=Object(i.a)(A,2),P=x[0],C=x[1],H=new d.a;return!0===y&&!1===P&&(m.a.get("https://team9app.azurewebsites.net/api/quizzarr/newSession",{params:{hostUId:H.get("userID"),quizName:p,numberOfRounds:h,numberOfQuestionsPerRound:S,timeBetweenRounds:j,timePerQuestion:T}}).then((function(e){console.log(e.data)})).catch((function(e){console.error("There was an error!",e)})),C(!0)),r.a.createElement("div",null,r.a.createElement("div",{className:"host-text"},r.a.createElement("div",null,"HOST A QUIZ"),r.a.createElement("div",null,"We will select all the questions for you")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/newUser",{params:{displayName:a}}).then((function(e){console.log(e.data),H.set("userID",e.data,{path:"/"}),Q(!0)})).catch((function(e){console.error("There was an error!",e)})),""===S&&O("10"),""===T&&D("15")}},r.a.createElement("div",{className:"host-form"},r.a.createElement("label",null,"Host Nickname"),r.a.createElement("input",{required:!0,value:a,onChange:function(e){console.log(e.target.value),l(e.target.value)}}),r.a.createElement("label",null,"Quiz Name"),r.a.createElement("input",{required:!0,value:p,onChange:function(e){console.log(e.target.value),b(e.target.value)}}),r.a.createElement("label",null,"Number of Questions"),r.a.createElement("input",{title:"Select the number of questions per round between 1 and 50.",pattern:"[1-9]|[0-4][0-9]|[5][0]",value:S,placeholder:"10",onChange:function(e){console.log(e.target.value),O(e.target.value)}}),r.a.createElement("label",null,"Time per Question (seconds)"),r.a.createElement("input",{title:"Select time per question between 5 and 100 seconds.",pattern:"[5-9]|[0-9][0-9]|[1][0][0]",value:T,placeholder:"15",onChange:function(e){console.log(e.target.value),D(e.target.value)}}),r.a.createElement("a",null,r.a.createElement("button",{className:"host-button",type:"submit"},"HOST")))),y?r.a.createElement(s.a,{to:"/hosting"}):null,r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:"button-leave"},"RETURN TO HOMEPAGE"))))},E=function(e){var t=e.timer,a=e.handleIsTimeOut,l=e.resetTimeIsOut,c=Object(n.useState)(t),s=Object(i.a)(c,2),o=s[0],u=s[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),p=d[0],b=d[1];return Object(n.useEffect)((function(){o>0&&setTimeout((function(){return u(o-1)}),1e3)}),[o]),0===o?(!1===p&&(a(),setTimeout((function(){l(),u(t),b(!1)}),2e3),b(!0)),r.a.createElement("div",{className:"timer"},r.a.createElement("div",null,"\xa0"))):r.a.createElement("div",{className:"timer"},r.a.createElement("div",null,o))},g=function(e){var t=e.questions;e.currentQuestion,e.totalQuestions;return r.a.createElement("div",null,r.a.createElement("div",null,t.question))},h=function(e){var t=e.type,a=e.answers,l=e.correctAnswer,c=e.filterAnswer,s=e.isTimeOut,o=e.isSelected,u=e.isSendAnswer,m=e.sendAnswer,d=Object(n.useState)(""),p=Object(i.a)(d,2),b=p[0],E=p[1],g=function(e){return e===b?"button-selected":"button-normal"},h=function(e){return e===l.toString()?"button-correct":e===b?"button-selected":"button-normal"},f=function(){return!1===s?r.a.createElement("div",null,r.a.createElement("div",{className:"answer-section"},a.map((function(e){return r.a.createElement("button",{key:e,className:g(e),disabled:!0},e)})))):!0===s?r.a.createElement("div",null,r.a.createElement("div",{className:"answer-section"},a.map((function(e){return r.a.createElement("button",{key:e,className:h(e),disabled:!0},e)})))):void 0};!0===s&&!1===u&&!1===o&&(console.log("send null answer"),m(""));var v=function(e){E(e),m(e),console.log("Click Answer")};return"TrueFalse"===t||"MultiChoice"===t?r.a.createElement("div",{className:"answer-section"},c?f():r.a.createElement("div",{className:"answer-section"},a.map((function(e){return r.a.createElement("button",{key:e,className:"button-normal",disabled:!1,onClick:function(){return v(e)}},e)})))):r.a.createElement(r.a.Fragment,null)},f=function(e){var t=e.userID,a=e.isLeaderboard,l=Object(n.useState)(!1),c=Object(i.a)(l,2),o=c[0],u=c[1],d=function(e){e.preventDefault(),!1===a&&m.a.get("https://team9app.azurewebsites.net/api/quizzarr/leaveSession",{params:{userID:t}}).then((function(e){console.log("Session Left")})).catch((function(e){console.error("There was an error!",e)})),u(!0)},p=function(){m.a.call("https://team9app.azurewebsites.net/api/quizzarr/admin/endSession",{params:{userID:t}}).then((function(e){console.log(e.data),console.log("Session Deleted")})).catch((function(e){console.error("There was an error!",e)}))};return!0===o?r.a.createElement(s.a,{to:"/"}):!0===a?(m.a.get("https://team9app.azurewebsites.net/api/quizzarr/leaveSession",{params:{userID:t}}).then((function(e){console.log("Session Left"),p()})).catch((function(e){console.error("There was an error!",e)})),r.a.createElement("div",null,r.a.createElement("button",{className:"button-leave",onClick:d},"RETURN TO HOMEPAGE"))):r.a.createElement("div",null,r.a.createElement("button",{className:"button-leave",onClick:d},"LEAVE SESSION"))},v=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),o=Object(i.a)(c,2),u=o[0],p=o[1],b=Object(n.useState)(!0),v=Object(i.a)(b,2),S=v[0],O=v[1],w=Object(n.useState)(!1),N=Object(i.a)(w,2),j=N[0],z=N[1],I=Object(n.useState)(!1),T=Object(i.a)(I,2),D=T[0],k=T[1],q=Object(n.useState)(""),y=Object(i.a)(q,2),Q=y[0],A=y[1],x=Object(n.useState)([]),P=Object(i.a)(x,2),C=P[0],H=P[1],L=Object(n.useState)(""),U=Object(i.a)(L,2),R=U[0],F=U[1],J=new d.a,G=Object(n.useState)(!1),M=Object(i.a)(G,2),V=M[0],B=M[1],W=Object(n.useState)(!1),Y=Object(i.a)(W,2),Z=Y[0],K=Y[1],X=Object(n.useState)(!1),$=Object(i.a)(X,2),_=$[0],ee=$[1],te=Object(n.useState)(0),ae=Object(i.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)(""),ce=Object(i.a)(le,2),se=ce[0],ie=ce[1],oe=function(){console.log("Getting Question"),k(!1),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/getQuestion",{params:{userID:J.get("userID")}}).then((function(e){console.log("promise fulfilled"),console.log(e.data),H(e.data),re(ne+1),console.log(ne),p(!1)})).catch((function(e){console.log("There was an error!",e),404===e.response.status&&l(!0)})),p(!1)},ue=function(){m.a.get("https://team9app.azurewebsites.net/api/quizzarr/getCorrectAnswer",{params:{userID:J.get("userID")}}).then((function(e){console.log("getCorrectAnswer"),F(e.data),console.log(e.data)})).catch((function(e){console.log("There was an error!",e)}))};if(u)return console.log("loading questions"),oe(),r.a.createElement("div",{className:"App"});if(S)return console.log("loading timer"),console.log("Getting Timer"),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/gameSessionStatus",{params:{userID:J.get("userID")}}).then((function(e){console.log("promise fulfilled"),console.log(e.data),A(e.data.timePerQuestion),ie(e.data.numberOfQuestions),O(!1)})).catch((function(e){console.log("There was an error!",e)})),r.a.createElement("div",{className:"App"});!1===j&&(setTimeout((function(){k(!1),z(!1),oe(),K(!1),ee(!1),B(!1)}),1e3*Q+2e3),z(!0));return r.a.createElement("div",null,r.a.createElement("div",{className:"timer"},r.a.createElement(E,{timer:Q,handleIsTimeOut:function(){return K(!0),void console.log("Time is out")},resetTimeIsOut:function(){return K(!1),B(!1),void console.log("resetisTimeOut",Z)}})),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"question"},r.a.createElement(g,{questions:C,currentQuestion:ne,totalQuestions:se})),r.a.createElement(h,{type:C.type,answers:C.answers,correctAnswer:R,userID:J.get("userID"),filterAnswer:D,isTimeOut:Z,isSelected:V,isSendAnswer:_,sendAnswer:function(e){return function(e){m.a.get("https://team9app.azurewebsites.net/api/quizzarr/submitAnswer",{params:{userID:J.get("userID"),answer:e}}).then((function(e){console.log("Answer sent"),ue(),B(!0),ee(!0),k(!0)})).catch((function(e){console.error("There was an error!",e)}))}(e)}})),r.a.createElement("div",null,a?r.a.createElement(s.a,{to:"/leaderboard"}):null),r.a.createElement(f,{userID:J.get("userID"),isLeaderboard:!1}))},S=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),u=o[0],p=o[1],b=Object(n.useState)([]),E=Object(i.a)(b,2),g=E[0],h=E[1],v=new d.a,S=function(){m.a.get("https://team9app.azurewebsites.net/api/quizzarr/gameSessionStatus",{params:{userID:v.get("userID")}}).then((function(e){h(e.data),l(!1)})).catch((function(e){console.error("There was an error!",e)}))};return!1===u&&(setTimeout((function(){S(),p(!1)}),1500),p(!0)),a?(S(),r.a.createElement("div",{className:"app"})):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"waiting"},r.a.createElement("div",{className:"quiz-name"},g.quizName.toUpperCase()),r.a.createElement("div",{className:"waiting-text"},g.numberOfQuestions," QUESTIONS",r.a.createElement("br",null),g.timePerQuestion," SECONDS TIMER"),r.a.createElement("div",{className:"waiting-text"})),r.a.createElement("div",{className:"loadingio-spinner-ellipsis-8ty8wmpuhyh"},r.a.createElement("div",{className:"ldio-ctuwgjg8ktk"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"waiting-text"},"PEOPLE JOINED: ",g.numberOfUsers),g.gameInProgress?r.a.createElement(s.a,{to:"/quiz"}):null,r.a.createElement(f,{userID:v.get("userID")}))},O=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),u=o[0],p=o[1],b=Object(n.useState)([]),E=Object(i.a)(b,2),g=E[0],h=E[1],v=new d.a,S=function(){m.a.get("https://team9app.azurewebsites.net/api/quizzarr/gameSessionStatus",{params:{userID:v.get("userID")}}).then((function(e){h(e.data),l(!1)})).catch((function(e){console.error("There was an error!",e)}))};return!1===u&&(setTimeout((function(){S(),p(!1)}),1500),p(!0)),a?(S(),r.a.createElement("div",{className:"app"})):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"waiting"},r.a.createElement("div",{className:"quiz-name"},g.quizName.toUpperCase()),r.a.createElement("div",{className:"waiting-text"},"TO JOIN THIS GAME ",r.a.createElement("br",null),"TYPE IN"),r.a.createElement("button",{className:"quiz-id-button",disabled:!0},g.sessionId),r.a.createElement("div",{className:"waiting-text"}),r.a.createElement("div",{className:"waiting-text"},"PEOPLE JOINED: ",g.numberOfUsers)),r.a.createElement("button",{className:"start-button",onClick:function(){console.log("Starting Session"),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/startSession",{params:{hostUId:v.get("userID")}}).then((function(e){console.log("Session started")})).catch((function(e){console.error("There was an error!",e)}))}},"START"),g.gameInProgress?r.a.createElement(s.a,{to:"/quiz"}):null,r.a.createElement(f,{userID:v.get("userID")}))},w=a(32),N=function(e){Object(w.a)(e);var t=Object(n.useState)([]),l=Object(i.a)(t,2),c=l[0],s=l[1],o=Object(n.useState)(!0),u=Object(i.a)(o,2),p=u[0],b=u[1],E=new d.a;return p?(console.log("loading leaderboard"),console.log("Getting Leaderboard"),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/getLeaderBoard",{params:{userID:E.get("userID")}}).then((function(e){console.log("promise fulfilled"),s(e.data),b(!1)})).catch((function(e){console.error("There was an error!",e)})),r.a.createElement("div",{className:"app"})):1===c.length?r.a.createElement("div",null,r.a.createElement("div",{className:"first-place"},r.a.createElement("img",{src:a(14),alt:"First place",width:"300"}),r.a.createElement("div",null,c[0].displayName," / Score ",r.a.createElement("b",null,c[0].score)," / Highest Streak ",r.a.createElement("b",null,c[0].highestStreak)))):2===c.length?r.a.createElement("div",null,r.a.createElement("div",{className:"first-place"},r.a.createElement("img",{src:a(14),alt:"First place",width:"300"}),r.a.createElement("div",null,c[0].displayName," / Score ",r.a.createElement("b",null,c[0].score)," / Highest Streak ",r.a.createElement("b",null,c[0].highestStreak))),r.a.createElement("div",{className:"second-place"},r.a.createElement("img",{src:a(16),alt:"Second place",width:"300"}),r.a.createElement("div",null,c[1].displayName," / Score ",r.a.createElement("b",null,c[1].score)," / Highest Streak ",r.a.createElement("b",null,c[1].highestStreak)))):3===c.length?r.a.createElement("div",null,r.a.createElement("div",{className:"first-place"},r.a.createElement("img",{src:a(14),alt:"First place",width:"300"}),r.a.createElement("div",null,c[0].displayName," / Score ",r.a.createElement("b",null,c[0].score)," / Highest Streak ",r.a.createElement("b",null,c[0].highestStreak))),r.a.createElement("div",{className:"second-place"},r.a.createElement("img",{src:a(16),alt:"Second place",width:"300"}),r.a.createElement("div",null,c[1].displayName," / Score ",r.a.createElement("b",null,c[1].score)," / Highest Streak ",r.a.createElement("b",null,c[1].highestStreak))),r.a.createElement("div",{className:"third-place"},r.a.createElement("img",{src:a(29),alt:"Third place",width:"300"}),r.a.createElement("div",null,c[2].displayName," / Score ",r.a.createElement("b",null,c[2].score)," / Highest Streak ",r.a.createElement("b",null,c[2].highestStreak)))):r.a.createElement("div",null,r.a.createElement("div",{className:"first-place"},r.a.createElement("img",{src:a(14),alt:"First place",width:"300"}),r.a.createElement("div",null,c[0].displayName," / Score ",r.a.createElement("b",null,c[0].score)," / Highest Streak ",r.a.createElement("b",null,c[0].highestStreak))),r.a.createElement("div",{className:"second-place"},r.a.createElement("img",{src:a(16),alt:"Second place",width:"300"}),r.a.createElement("div",null,c[1].displayName," / Score ",r.a.createElement("b",null,c[1].score)," / Highest Streak ",r.a.createElement("b",null,c[1].highestStreak))),r.a.createElement("div",{className:"third-place"},r.a.createElement("img",{src:a(29),alt:"Third place",width:"300"}),r.a.createElement("div",null,c[2].displayName," / Score ",r.a.createElement("b",null,c[2].score)," / Highest Streak ",r.a.createElement("b",null,c[2].highestStreak))),r.a.createElement("div",{className:"leaderboard"},r.a.createElement("img",{src:a(61),alt:"Leaderboard",width:"1000"}),r.a.createElement("div",{className:"leaderboard-text"},c.map((function(e,t){return r.a.createElement("div",{key:t+1,className:"rank"}," ",r.a.createElement("b",null,t+1,".")," ",e.displayName," / Score ",r.a.createElement("b",null,e.score)," / Highest Streak ",r.a.createElement("b",null,e.highestStreak))})))))},j=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:p}),r.a.createElement(s.b,{exact:!0,path:"/host",component:b}),r.a.createElement(s.b,{exact:!0,path:"/quiz",component:v}),r.a.createElement(s.b,{exact:!0,path:"/waiting",component:S}),r.a.createElement(s.b,{exact:!0,path:"/hosting",component:O}),r.a.createElement(s.b,{exact:!0,path:"/leaderboard",component:N}))},z=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"quiz-logo"},r.a.createElement("img",{src:a(62),alt:"Quiz Logo",width:"280"})),r.a.createElement(j,null))};a(63);c.a.render(r.a.createElement(o.a,{basename:"/Virtual-Pub-Quiz-Frontend"},r.a.createElement(z,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.b60beadf.chunk.js.map