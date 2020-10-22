(this["webpackJsonpVirtual-Pub-Quiz-Frontend"]=this["webpackJsonpVirtual-Pub-Quiz-Frontend"]||[]).push([[0],{30:function(e,t,a){e.exports=a(61)},52:function(e,t,a){e.exports=a.p+"static/media/Ready.0ea0042b.png"},58:function(e,t,a){e.exports=a.p+"static/media/LeaderboardFull.bee86d1d.png"},59:function(e,t,a){e.exports=a.p+"static/media/Logo.608bd790.png"},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),l=a.n(s),o=a(2),c=a(1),i=a(10),u=a(3),m=a.n(u),d=a(8),g=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),s=t[0],l=t[1],u=Object(n.useState)(""),g=Object(c.a)(u,2),b=g[0],p=g[1],E=Object(n.useState)(!1),f=Object(c.a)(E,2),h=f[0],v=f[1],O=Object(n.useState)(!0),w=Object(c.a)(O,2),j=w[0],S=w[1],N=new d.a;return r.a.createElement("div",null,r.a.createElement("div",{className:"ready-graphic"},r.a.createElement("img",{src:a(52),alt:"Ready for a quiz?",width:"500"})),j?null:r.a.createElement("div",null,"Quiz ID not found or nickname already taken"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/newUserAndJoin",{params:{displayName:b,sessionID:s}}).then((function(e){console.log(e.data),N.set("userID",e.data,{path:"/"}),S(e.status),v(!0),S(!0)})).catch((function(e){console.error("There was an error!",e),S(!1)}))}},r.a.createElement("div",{className:"start-form"},r.a.createElement("input",{required:!0,title:"Quiz ID should be 6 digits.",pattern:"\\d{6}",value:s,placeholder:"Quiz ID",onChange:function(e){console.log(e.target.value),l(e.target.value)}}),r.a.createElement("input",{required:!0,value:b,placeholder:"Nickname",onChange:function(e){console.log(e.target.value),p(e.target.value)}}),r.a.createElement("button",{className:"start-button",type:"submit"},"START"),r.a.createElement(i.b,{to:"/host"},r.a.createElement("button",{className:"host-home-button"},"HOST")))),h?r.a.createElement(o.a,{to:"/waiting"}):null)},b=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(""),i=Object(c.a)(l,2),u=i[0],g=i[1],b=Object(n.useState)("1"),p=Object(c.a)(b,2),E=p[0],f=(p[1],Object(n.useState)("")),h=Object(c.a)(f,2),v=h[0],O=h[1],w=Object(n.useState)("0"),j=Object(c.a)(w,2),S=j[0],N=(j[1],Object(n.useState)("")),z=Object(c.a)(N,2),I=z[0],T=z[1],D=Object(n.useState)(!1),q=Object(c.a)(D,2),A=q[0],y=q[1],k=Object(n.useState)(!1),x=Object(c.a)(k,2),C=x[0],Q=x[1],P=new d.a;return!0===A&&!1===C&&(m.a.get("https://team9app.azurewebsites.net/api/quizzarr/newSession",{params:{hostUId:P.get("userID"),quizName:u,numberOfRounds:E,numberOfQuestionsPerRound:v,timeBetweenRounds:S,timePerQuestion:I}}).then((function(e){console.log(e.data)})).catch((function(e){console.error("There was an error!",e)})),Q(!0)),r.a.createElement("div",null,r.a.createElement("div",{className:"host-text"},r.a.createElement("div",null,"HOST A QUIZ"),r.a.createElement("div",null,"We will select all the questions for you")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/newUser",{params:{displayName:a}}).then((function(e){console.log(e.data),P.set("userID",e.data,{path:"/"}),y(!0)})).catch((function(e){console.error("There was an error!",e)})),""===v&&O("10"),""===I&&T("15")}},r.a.createElement("div",{className:"host-form"},r.a.createElement("label",null,"Your Nickname"),r.a.createElement("input",{required:!0,value:a,onChange:function(e){console.log(e.target.value),s(e.target.value)}}),r.a.createElement("label",null,"Quiz Name"),r.a.createElement("input",{required:!0,value:u,onChange:function(e){console.log(e.target.value),g(e.target.value)}}),r.a.createElement("label",null,"Number of Questions"),r.a.createElement("input",{title:"Select the number of questions per round between 1 and 50.",pattern:"[1-9]|[0-4][0-9]|[5][0]",value:v,placeholder:"10",onChange:function(e){console.log(e.target.value),O(e.target.value)}}),r.a.createElement("label",null,"Time per Question (seconds)"),r.a.createElement("input",{title:"Select time per question between 1 and 100 seconds.",pattern:"[1-9]|[0-9][0-9]|[1][0][0]",value:I,placeholder:"15",onChange:function(e){console.log(e.target.value),T(e.target.value)}}),r.a.createElement("button",{className:"host-button",type:"submit"},"HOST"))),A?r.a.createElement(o.a,{to:"/hosting"}):null)},p=function(e){var t=e.timer,a=e.resetFilterAnswer,s=e.handleIsTimeOut,l=e.resetTimeIsOut,o=Object(n.useState)(t),i=Object(c.a)(o,2),u=i[0],m=i[1],d=Object(n.useState)(!1),g=Object(c.a)(d,2),b=g[0],p=g[1];return Object(n.useEffect)((function(){u>0&&setTimeout((function(){return m(u-1)}),1e3)}),[u]),0===u?(!1===b&&(s(),setTimeout((function(){a(),l(),m(t),p(!1)}),5e3),p(!0)),r.a.createElement("div",{className:"timer"},r.a.createElement("div",null))):r.a.createElement("div",{className:"timer"},r.a.createElement("div",null,u))},E=function(e){var t=e.questions;return r.a.createElement("div",null,t.question)},f=function(e){var t=e.type,a=e.answers,s=e.correctAnswer,l=e.userID,o=e.filterAnswer,i=e.handleFilterAnswer,u=e.isTimeOut,d=e.handleIsSelected,g=e.isSelected,b=e.getCorrectAnswer,p=Object(n.useState)(""),E=Object(c.a)(p,2),f=E[0],h=E[1],v=function(e){m.a.get("https://team9app.azurewebsites.net/api/quizzarr/submitAnswer",{params:{userID:l,answer:e}}).then((function(e){console.log(e.data),console.log("Answer sent")})).catch((function(e){console.error("There was an error!",e)}))},O=function(e){return e===f?"button-selected":"button-normal"},w=function(e){return e===s?"button-correct":e===f?"button-selected":"button-normal"},j=function(){return!1===u?r.a.createElement("div",null,r.a.createElement("div",{className:"answer-section"},a.map((function(e){return r.a.createElement("button",{key:e,className:O(e),disabled:!0},e)})))):!0===u?r.a.createElement("div",null,r.a.createElement("div",{className:"answer-section"},a.map((function(e){return r.a.createElement("button",{key:e,className:w(e),disabled:!0},e)})))):void 0};!0===u&&(!1===g&&(console.log("send null answer"),v(""),d(),i()),b());var S=function(e){h(e),d(),v(e),i(),console.log("Click Answer"),console.log(u)};return"TrueFalse"===t||"MultiChoice"===t?r.a.createElement("div",{className:"answer-section"},o?j():r.a.createElement("div",{className:"answer-section"},a.map((function(e){return r.a.createElement("button",{key:e,className:"button-normal",disabled:!1,onClick:function(){return S(e)}},e)})))):r.a.createElement(r.a.Fragment,null)},h=function(e){var t=e.userID,a=Object(n.useState)(!1),s=Object(c.a)(a,2),l=s[0],i=s[1];return!0===l?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("button",{className:"button-leave",onClick:function(e){e.preventDefault(),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/leaveSession",{params:{userID:t}}).then((function(e){console.log(e.data),i(!0)})).catch((function(e){console.error("There was an error!",e)}))}},"LEAVE SESSION"))},v=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(!0),i=Object(c.a)(l,2),u=i[0],g=i[1],b=Object(n.useState)(!0),v=Object(c.a)(b,2),O=v[0],w=v[1],j=Object(n.useState)(!1),S=Object(c.a)(j,2),N=S[0],z=S[1],I=Object(n.useState)(!1),T=Object(c.a)(I,2),D=T[0],q=T[1],A=Object(n.useState)(""),y=Object(c.a)(A,2),k=y[0],x=y[1],C=Object(n.useState)([]),Q=Object(c.a)(C,2),P=Q[0],L=Q[1],F=Object(n.useState)(""),U=Object(c.a)(F,2),R=U[0],G=U[1],J=new d.a,H=Object(n.useState)(!1),V=Object(c.a)(H,2),B=V[0],M=V[1],Y=Object(n.useState)(!1),W=Object(c.a)(Y,2),Z=W[0],K=W[1],X=function(){console.log("Getting Question"),q(!1),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/getQuestion",{params:{userID:J.get("userID")}}).then((function(e){console.log("promise fulfilled"),console.log(e.data),L(e.data),g(!1)})).catch((function(e){console.log("There was an error!",e),404===e.response.status&&s(!0)})),g(!1)},$=function(){console.log("getting Correct Answer"),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/getCorrectAnswer",{params:{userID:J.get("userID")}}).then((function(e){console.log("getCorrectAnswer"),G(e.data),console.log(e.data)})).catch((function(e){console.log("There was an error!",e)}))};if(u)return console.log("loading questions"),X(),r.a.createElement("div",{className:"App"});if(O)return console.log("loading timer"),console.log("Getting Timer"),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/gameSessionStatus",{params:{userID:J.get("userID")}}).then((function(e){console.log("promise fulfilled"),console.log(e.data),x(e.data.timePerQuestion),w(!1)})).catch((function(e){console.log("There was an error!",e)})),r.a.createElement("div",{className:"App"});!1===N&&(setTimeout((function(){q(!1),X(),z(!1)}),1e3*k+5e3),z(!0));var _=function(){console.log("Filter answer is true"),q(!0)};return r.a.createElement("div",null,r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"question"},r.a.createElement(E,{questions:P})),r.a.createElement(f,{type:P.type,answers:P.answers,correctAnswer:R,userID:J.get("userID"),filterAnswer:D,handleFilterAnswer:function(){return _()},isTimeOut:Z,isSelected:B,handleIsSelected:function(){M(!0),console.log("handleisTimeOut",Z)},getCorrectAnswer:function(){$()}})),r.a.createElement("div",{className:"timer"},r.a.createElement(p,{timer:k,resetFilterAnswer:function(){return console.log("resetFilterAnswer"),void q(!1)},handleIsTimeOut:function(){return K(!0),setTimeout((function(){$(),_()}),1e3),void console.log("handleisTimeOut",Z)},resetTimeIsOut:function(){return K(!1),M(!1),void console.log("resetisTimeOut",Z)}})),r.a.createElement("div",null,a?r.a.createElement(o.a,{to:"/leaderboard"}):null),r.a.createElement(h,{userID:J.get("userID")}))},O=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(!1),i=Object(c.a)(l,2),u=i[0],g=i[1],b=Object(n.useState)([]),p=Object(c.a)(b,2),E=p[0],f=p[1],v=new d.a,O=function(){console.log("Getting Game Status"),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/gameSessionStatus",{params:{userID:v.get("userID")}}).then((function(e){console.log("promise fulfilled"),f(e.data),s(!1),console.log(e.data)})).catch((function(e){console.error("There was an error!",e)}))};return!1===u&&(setTimeout((function(){O(),g(!1)}),3e3),g(!0)),a?(console.log("Loading game session"),O(),r.a.createElement("div",{className:"app"},"Loading game session")):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"waiting"},r.a.createElement("div",{className:"quiz-name"},E.quizName.toUpperCase()),r.a.createElement("div",{className:"waiting-text"},E.numberOfQuestionsPerRound," QUESTIONS"),r.a.createElement("div",{className:"waiting-text"},E.timePerQuestion," SECONDS TIMER"),r.a.createElement("div",{className:"waiting-text"}),r.a.createElement("div",{className:"waiting-text"},"PEOPLE JOINED: ",E.numberOfUsers)),r.a.createElement("div",{className:"loadingio-spinner-ellipsis-8ty8wmpuhyh"},r.a.createElement("div",{className:"ldio-ctuwgjg8ktk"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),E.gameInProgress?r.a.createElement(o.a,{to:"/quiz"}):null,r.a.createElement(h,{userID:v.get("userID")}))},w=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(!1),i=Object(c.a)(l,2),u=i[0],g=i[1],b=Object(n.useState)([]),p=Object(c.a)(b,2),E=p[0],f=p[1],v=new d.a,O=function(){console.log("Getting Game Status"),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/gameSessionStatus",{params:{userID:v.get("userID")}}).then((function(e){console.log("promise fulfilled"),f(e.data),s(!1),console.log(e.data)})).catch((function(e){console.error("There was an error!",e)}))};return!1===u&&(setTimeout((function(){O(),g(!1)}),3e3),g(!0)),a?(console.log("Loading game session"),O(),r.a.createElement("div",{className:"app"},"Loading game session")):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"waiting"},r.a.createElement("div",{className:"quiz-name"},E.quizName.toUpperCase()),r.a.createElement("div",{className:"waiting-text"},"TO JOIN THIS GAME ",r.a.createElement("br",null),"TYPE IN"),r.a.createElement("button",{className:"quiz-id-button",disabled:!0},E.sessionId),r.a.createElement("div",{className:"waiting-text"}),r.a.createElement("div",{className:"waiting-text"},"PEOPLE JOINED: ",E.numberOfUsers)),r.a.createElement("button",{className:"start-button",onClick:function(){console.log("Starting Session"),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/startSession",{params:{hostUId:v.get("userID")}}).then((function(e){console.log("promise fulfilled"),console.log(e.data)})).catch((function(e){console.error("There was an error!",e)}))}},"START"),E.gameInProgress?r.a.createElement(o.a,{to:"/quiz"}):null,r.a.createElement(h,{userID:v.get("userID")}))},j=a(29),S=function(e){Object(j.a)(e);var t=Object(n.useState)([]),s=Object(c.a)(t,2),l=s[0],o=s[1],i=Object(n.useState)(!0),u=Object(c.a)(i,2),g=u[0],b=u[1],p=new d.a;return g?(console.log("loading leaderboard"),console.log("Getting Leaderboard"),m.a.get("https://team9app.azurewebsites.net/api/quizzarr/getLeaderBoard",{params:{userID:p.get("userID")}}).then((function(e){console.log("promise fulfilled"),o(e.data),b(!1)})).catch((function(e){console.error("There was an error!",e)})),r.a.createElement("div",{className:"app"})):r.a.createElement("div",null,r.a.createElement("div",{className:"leaderboard"},r.a.createElement("img",{src:a(58),alt:"Leaderboard",width:"800"}),r.a.createElement("div",{className:"leaderboard-text"},l.map((function(e,t){return r.a.createElement("div",{key:t+1,className:"rank"}," ",t+1,". ",e.displayName," Score: ",e.score," Highest Streak: ",e.highestStreak)})))),r.a.createElement(h,{userID:p.get("userID")}))},N=function(){return r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:g}),r.a.createElement(o.b,{exact:!0,path:"/host",component:b}),r.a.createElement(o.b,{exact:!0,path:"/quiz",component:v}),r.a.createElement(o.b,{exact:!0,path:"/waiting",component:O}),r.a.createElement(o.b,{exact:!0,path:"/hosting",component:w}),r.a.createElement(o.b,{exact:!0,path:"/leaderboard",component:S}))},z=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"quiz-logo"},r.a.createElement("img",{src:a(59),alt:"Quiz Logo",width:"280"})),r.a.createElement(N,null))};a(60);l.a.render(r.a.createElement(i.a,{basename:"/Virtual-Pub-Quiz-Frontend"},r.a.createElement(z,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5df732c7.chunk.js.map