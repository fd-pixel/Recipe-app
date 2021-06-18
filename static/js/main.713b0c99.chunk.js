(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{43:function(e,n,t){},44:function(e,n,t){},69:function(e,n,t){},70:function(e,n,t){"use strict";t.r(n);var i,c,a,r,s,o,l,d,b,j,u,x=t(1),h=t.n(x),p=t(32),m=t.n(p),O=(t(43),t(44),t(12)),f=t(2),g=t(3),v=g.a.div(i||(i=Object(f.a)(['\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100vh - 80px);\n  line-height: 2;\n\n  span {\n    color: white;\n    font-family: "Roboto";"Helvetica";\n    font-size: 3rem;\n  }\n']))),y=g.a.div(c||(c=Object(f.a)(["\n  text-align: right;\n  margin: 0 10px;\n  max-width: 1000px;\n  border: 1px solid white;\n  padding: 25px;\n  border-radius: 5px;\n\n  a {\n    color: white;\n  }\n"]))),w=g.a.div(a||(a=Object(f.a)([""]))),k=g.a.img(r||(r=Object(f.a)(["\n  width: 500px;\n  margin-bottom: 2rem;\n"]))),N=t.p+"static/media/coding.0ee2fc3a.svg",C=t(0),S=function(){return Object(C.jsxs)(v,{children:[Object(C.jsx)(k,{src:N,alt:"coding"}),Object(C.jsx)(w,{children:Object(C.jsxs)("h1",{children:["About Software Developer ",Object(C.jsx)("span",{children:"Fikret D\xfcz\xe7eker"})]})}),Object(C.jsxs)(y,{children:[Object(C.jsx)("h1",{children:"I'm Fikret."}),Object(C.jsx)("h2",{children:"I\u2019m currently learning Full-Stack Development Languages."}),Object(C.jsx)("h2",{children:"I've already known Bootstrap5, JS, ReactJS. I'm planning to learn ReactNative, Django, MongoDB,SQL."}),Object(C.jsxs)("h2",{children:[Object(C.jsx)("a",{href:"mailto:fikretduzceker5@gmail.com",children:"Send email"})," : fikretduzceker5@gmail.com"]})]})]})},L=t(19),z=t.n(L),E=t(36),A=t(37),D=t.n(A),M=t(4),F=function(e){var n=e.recipe,t=Object(M.g)();return Object(C.jsxs)("div",{className:"box",children:[Object(C.jsxs)("div",{className:"label",children:[null===n||void 0===n?void 0:n.label," "]}),Object(C.jsx)("div",{className:"img",children:Object(C.jsx)("img",{className:"meal-img",src:null===n||void 0===n?void 0:n.image,alt:"sd"})}),Object(C.jsx)("button",{onClick:function(){t.push({pathname:"/details",recipe:n})},className:"view-button",children:"View More"})]})},H=(t(69),t.p+"static/media/meal.9eba888b.svg"),R=(g.a.div(s||(s=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  /* background: #e1f1dd; */\n  height: fit-content;\n  /* padding: 5px; */\n"]))),g.a.div(o||(o=Object(f.a)(["\n  height: 300px;\n  background: #e1f1dd;\n  padding: 5px;\n  border-radius: 3px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 10px;\n  box-shadow: 8px 8px 5px black;\n\n  &:hover {\n    box-shadow: none;\n    transition: all 0.3s ease-in;\n  }\n"]))),g.a.img(l||(l=Object(f.a)(["\n  height: 150px;\n  border-radius: 10px;\n"]))),g.a.button(d||(d=Object(f.a)(["\n  background-color: #00adb5;\n  padding: 5px;\n  outline: none;\n  height: 2rem;\n  border: none;\n  margin: 10px;\n  border-radius: 3px;\n  cursor: pointer;\n"]))),g.a.h1(b||(b=Object(f.a)(["\n  font-size: 1.5rem;\n  text-align: center;\n"]))),g.a.div(j||(j=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 50px;\n"])))),q=g.a.img(u||(u=Object(f.a)(["\n  width: 80%;\n  max-width: 750px;\n"])));console.log("b0550759;","6b4b90eb2caa8ff110cbfb949a5f3b9c");var I,B,T,_,G,J,U,K,P,Q,V,W,X,Y=["Breakfast","Lunch","Dinner","Snack","Teatime"],Z=function(){var e=Object(x.useState)(Y[0].toLocaleLowerCase()),n=Object(O.a)(e,2),t=n[0],i=n[1],c=Object(x.useState)(null),a=Object(O.a)(c,2),r=a[0],s=a[1],o=Object(x.useState)(""),l=Object(O.a)(o,2),d=l[0],b=l[1],j=function(){var e=Object(E.a)(z.a.mark((function e(){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===d){e.next=8;break}return e.next=3,D.a.get("https://api.edamam.com/search?q=".concat(d,"\n          &app_id=").concat("b0550759","&app_key=").concat("6b4b90eb2caa8ff110cbfb949a5f3b9c","&mealType=").concat(t));case 3:n=e.sent,console.log("res",n),200===n.status&&s(n.data.hits),e.next=9;break;case 8:alert("Please fill the Form");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)("div",{className:"body",children:[Object(C.jsxs)("div",{className:"header",children:[Object(C.jsx)("h2",{children:"Food App"}),Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(),b("")},action:"",method:"get",children:[Object(C.jsx)("input",{type:"text",value:d,placeholder:"Search",onChange:function(e){console.log(e.target.value),b(e.target.value)}}),Object(C.jsx)("button",{className:"submit-button",type:"submit",children:"Search"}),Object(C.jsx)("select",{className:"meal",id:"meal",name:"mealTypes",onChange:function(e){i(e.target.value)},children:null===Y||void 0===Y?void 0:Y.map((function(e){return Object(C.jsx)("option",{value:e.toLowerCase(),children:e},e)}))})]})]}),r?Object(C.jsx)("div",{className:"main",children:r.map((function(e,n){return Object(C.jsx)(F,{recipe:e.recipe},n)}))}):Object(C.jsx)(R,{children:Object(C.jsx)(q,{src:H})})]})},$=g.a.div(I||(I=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  background: #00adb5;\n  min-height: calc(100vh - 75px);\n  /* height: fit-content; */\n  padding: 5px;\n"]))),ee=g.a.div(B||(B=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: 1rem;\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: #e1f1dd;\n  /* height: calc(100vh - 300px); */\n\n  @media (max-width: 1250px) {\n    /* justify-content: center;\n    background-color: red;\n    border: 1px solid red; */\n  }\n"]))),ne=g.a.div(T||(T=Object(f.a)(["\n  border: 1px solid #00adb5;\n  padding: 10px;\n  border-radius: 3px;\n  margin: 2rem;\n\n  img {\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),te=g.a.div(_||(_=Object(f.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin: 25px;\n  font-size: 3rem;\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  img {\n    width: 200px;\n  }\n"]))),ie=g.a.div(G||(G=Object(f.a)(["\n  width: 400px;\n  font-size: 1.4rem;\n  margin: 2rem;\n"]))),ce=g.a.div(J||(J=Object(f.a)(["\n  width: 400px;\n  text-align: right;\n  font-size: 1.8rem;\n  margin: 2rem;\n"]))),ae=t.p+"static/media/diet.2f19967b.svg",re=function(e){console.log(e.location.recipe);var n=e.location.recipe;return Object(C.jsxs)($,{children:[Object(C.jsxs)(te,{children:[Object(C.jsx)("h1",{children:n.label}),Object(C.jsx)("img",{src:ae,alt:""})]}),Object(C.jsxs)(ee,{children:[Object(C.jsxs)(ce,{children:[Object(C.jsx)(C.Fragment,{children:"Nutrients"}),Object(C.jsxs)("p",{children:[n.totalNutrients.CA.label," :"," ",Math.round(n.totalNutrients.CA.quantity),n.totalNutrients.CA.unit]}),Object(C.jsxs)("p",{children:[n.totalNutrients.CHOCDF.label," :"," ",Math.round(n.totalNutrients.CHOCDF.quantity),n.totalNutrients.CHOCDF.unit]}),Object(C.jsxs)("p",{children:[n.totalNutrients.CHOLE.label," :"," ",Math.round(n.totalNutrients.CHOLE.quantity),n.totalNutrients.CHOLE.unit]}),Object(C.jsxs)("p",{children:[n.totalNutrients.ENERC_KCAL.label," :"," ",Math.round(n.totalNutrients.ENERC_KCAL.quantity),n.totalNutrients.ENERC_KCAL.unit]}),Object(C.jsx)("p",{children:n.totalWeight}),Object(C.jsxs)("p",{children:["Calories: ",Math.round(n.calories)]}),n.digest.slice(0,4).map((function(e,n){return Object(C.jsxs)("p",{children:[e.label," : ",Math.round(e.total)]},n)}))]}),Object(C.jsx)(ne,{children:Object(C.jsx)("img",{src:n.image,alt:n.label})}),Object(C.jsx)(ie,{children:n.ingredientLines.map((function(e,n){return Object(C.jsxs)("div",{children:[Object(C.jsxs)("p",{children:[n+1," - ",e]}),Object(C.jsx)("br",{})]},n)}))})]})]})},se=t(10),oe=function(){return Object(C.jsx)("div",{children:Object(C.jsxs)("nav",{children:[Object(C.jsx)("div",{className:"navleft",children:Object(C.jsx)(se.b,{to:"/",children:"RECIPE"})}),Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)(se.b,{to:"/about",children:"ABOUT ME"})}),Object(C.jsx)("li",{children:Object(C.jsx)(se.b,{to:{pathname:"https://github.com/fd-pixel"},target:"_blank",rel:"noopener noreferrer",children:"GITHUB"})}),Object(C.jsx)("li",{children:Object(C.jsx)(se.b,{to:"/login",children:"LOGOUT"})})]})]})})},le=g.a.div(U||(U=Object(f.a)(['\n  background-image: url("https://picsum.photos/1600/900");\n  background-repeat: no-repeat;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n']))),de=g.a.div(K||(K=Object(f.a)(["\n  width: 600px;\n  min-width: 600px;\n  height: 600px;\n  background-color: rgba(0, 173, 181, 0.5);\n  border-radius: 50%;\n  border: 2px solid #e1f1dd;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),be=g.a.h1(P||(P=Object(f.a)(['\n  color: white;\n  font-family: "Girassol", sans-serif;\n  font-size: 3rem;\n']))),je=g.a.input(Q||(Q=Object(f.a)(['\n  height: 50px;\n  font-size: 2rem;\n  width: 250px;\n  border-radius: 5px;\n  font-family: "Girassol", sans-serif;\n  background-color: rgba(0, 0, 0, 0.6);\n  border: none;\n  color: white;\n  margin: 1rem;\n  text-indent: 20px;\n']))),ue=g.a.form(V||(V=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),xe=g.a.button(W||(W=Object(f.a)(['\n  font-size: 2rem;\n  font-family: "Girassol", sans-serif;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: white;\n  border: none;\n  cursor: pointer;\n  margin: 1rem;\n']))),he=g.a.img(X||(X=Object(f.a)(["\n  width: 150px;\n  margin: 1rem;\n"]))),pe=t.p+"static/media/meal2.8b3981f1.svg",me=function(e){var n=e.setAuth,t=e.auth,i=Object(M.g)();return Object(C.jsx)(le,{children:Object(C.jsxs)(de,{children:[Object(C.jsx)(he,{src:pe,alt:"meal"}),Object(C.jsx)(be,{children:"Recipe"}),Object(C.jsxs)(ue,{onSubmit:function(e){e.preventDefault(),n(!t),i.push("/")},children:[Object(C.jsx)(je,{type:"text",placeholder:"Username",required:!0}),Object(C.jsx)(je,{type:"password",placeholder:"Password",required:!0}),Object(C.jsx)(xe,{type:"submit",children:"Login"})]})]})})},Oe=t(16),fe=t(38),ge=function(e){var n=e.component,t=e.auth,i=Object(fe.a)(e,["component","auth"]);return Object(C.jsx)(M.b,Object(Oe.a)(Object(Oe.a)({},i),{},{render:function(e){return t?Object(C.jsx)(n,Object(Oe.a)({},e)):Object(C.jsx)(M.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ve=function(){var e=Object(x.useState)(!1),n=Object(O.a)(e,2),t=n[0],i=n[1];return Object(C.jsx)("div",{children:Object(C.jsx)(se.a,{children:Object(C.jsxs)(M.d,{children:[Object(C.jsx)(M.b,{path:"/login",exact:!0,component:function(){return Object(C.jsx)(me,{auth:t,setAuth:i})}}),Object(C.jsx)(M.b,{component:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(oe,{}),Object(C.jsx)(ge,{auth:t,path:"/",exact:!0,component:Z}),Object(C.jsx)(ge,{auth:t,path:"/details",exact:!0,component:re}),Object(C.jsx)(ge,{auth:t,path:"/about",exact:!0,component:S})]})}})]})})})},ye=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(ve,{})})};m.a.render(Object(C.jsx)(h.a.StrictMode,{children:Object(C.jsx)(ye,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.713b0c99.chunk.js.map