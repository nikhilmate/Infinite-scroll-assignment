(this.webpackJsonpinfinite_scroll=this.webpackJsonpinfinite_scroll||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),i=n(15),s=n(0),l=function(e){var t=e.width,n=e.height,c=e.className;return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"60",height:n||"60",className:c||"",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("circle",{cx:"84.908",cy:"76.786",r:"6",fill:"#f3722c",children:Object(s.jsx)("animateTransform",{attributeName:"transform",begin:"0s",calcMode:"spline",dur:"1.4925373134328357s",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})}),Object(s.jsx)("circle",{cx:"76.786",cy:"84.908",r:"6",fill:"#f3722c",children:Object(s.jsx)("animateTransform",{attributeName:"transform",begin:"-0.062s",calcMode:"spline",dur:"1.4925373134328357s",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})}),Object(s.jsx)("circle",{cx:"66.838",cy:"90.651",r:"6",fill:"#f3722c",children:Object(s.jsx)("animateTransform",{attributeName:"transform",begin:"-0.125s",calcMode:"spline",dur:"1.4925373134328357s",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})}),Object(s.jsx)("circle",{cx:"55.743",cy:"93.624",r:"6",fill:"#f3722c",children:Object(s.jsx)("animateTransform",{attributeName:"transform",begin:"-0.187s",calcMode:"spline",dur:"1.4925373134328357s",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})}),Object(s.jsx)("circle",{cx:"44.257",cy:"93.624",r:"6",fill:"#f3722c",children:Object(s.jsx)("animateTransform",{attributeName:"transform",begin:"-0.25s",calcMode:"spline",dur:"1.4925373134328357s",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})}),Object(s.jsx)("circle",{cx:"33.162",cy:"90.651",r:"6",fill:"#f3722c",children:Object(s.jsx)("animateTransform",{attributeName:"transform",begin:"-0.312s",calcMode:"spline",dur:"1.4925373134328357s",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})}),Object(s.jsx)("animateTransform",{attributeName:"transform",calcMode:"spline",dur:"1.4925373134328357s",keySplines:"0.5 0 0.5 1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;0 50 50"})]})})},o=a.a.createContext({}),j=function(e){var t=Object(c.useContext)(o);return Object(s.jsxs)(s.Fragment,{children:[t.AppData.loading&&Object(s.jsx)("div",{className:"main__loader",children:Object(s.jsx)("div",{className:"wrap__loader-ui",children:Object(s.jsx)(l,{className:"apploader-icon",width:160,height:160})})}),e.children]})},u=n(2),m=n(17),d=n(8),b={login:{email:null,isLogged:!1,attempted:!1},loading:!0},p=function(e){return e.preventDefault()},f=function(e){var t=e.children,n=e.reference;return Object(s.jsx)("div",{ref:n,children:t})},h=function(e){var t=e.item,n="female"===t.gender,c=n?"female":"male",a=t.name.first?t.name.first+" ":"",r=t.name.last?t.name.last:"",i=function(e){var t=new Date(e);return t.getTime()===t.getTime()?t.toLocaleString("en-US",{day:"numeric",month:"short",year:"numeric"}):""}(t.dob.date),l=t.picture.medium?t.picture.medium:n?"/Infinite-scroll-assignment/images/female.png":"/Infinite-scroll-assignment/images/male.png";return Object(s.jsx)("li",{className:"list-item",children:Object(s.jsxs)("div",{className:"item-inner",children:[Object(s.jsxs)("div",{className:"item-desc",children:[Object(s.jsxs)("p",{className:"item-para",children:[Object(s.jsx)("span",{className:"item-name",children:"".concat(a).concat(r)}),Object(s.jsx)("span",{className:"item-gender gender-".concat(c),children:Object(s.jsx)("span",{children:n?"F":"M"})})]}),Object(s.jsx)("p",{className:"item-dob",children:i})]}),Object(s.jsx)("span",{className:"item-icon",children:Object(s.jsx)("img",{src:l})})]})})},O=function(){var e={method:"GET",headers:{Accept:"application/json"}},t=Object(c.useContext)(o),n=Object(c.useState)(!0),r=Object(d.a)(n,2),i=r[0],j=r[1],u=Object(c.useState)([]),b=Object(d.a)(u,2),p=b[0],O=b[1],x=Object(c.useRef)(),g=Object(c.useRef)(null),v=Object(c.useState)(!1),_=Object(d.a)(v,2),N=_[0],y=_[1],w=null;Object(c.useEffect)((function(){N||(y(!0),C()),i&&(g.current&&g.current.hasOwnProperty("scrollIntoView")&&console.log("scroll"),g.current.scrollIntoView({behavior:"smooth",block:"end"}))}),[i,N]);var S=a.a.useCallback((function(e){i||(x.current&&x.current.disconnect(),x.current=new IntersectionObserver((function(e){e[0].isIntersecting&&(w||clearTimeout(w),w=setTimeout((function(){C()}),1e3))})),e&&x.current.observe(e))}),[i]),C=function(){j(!0),fetch("https://randomuser.me/api/?results=20&inc=gender,name,dob,picture",e).then((function(e){return e.json()})).then((function(e){var t=e.results;if(t instanceof Array&&t.length>0){var n=[].concat(Object(m.a)(p),Object(m.a)(t));O(n)}j(!1)})).catch((function(e){j(!1)}))};return Object(s.jsx)("main",{className:"main__viewport",children:Object(s.jsx)("main",{className:"main__app",children:Object(s.jsxs)("section",{className:"section__dashboard",children:[Object(s.jsxs)("header",{className:"dashboard-header",children:[Object(s.jsx)("h1",{className:"db-title",children:"Discover People"}),Object(s.jsx)("button",{onClick:function(){t.contextReducer({type:"signOut"})},className:"comn-btn btn_comn-style logout-btn",children:"Logout"})]}),Object(s.jsxs)("section",{className:"people-list-wrap",children:[Object(s.jsx)("ul",{className:"people-list",children:p.map((function(e,t){return t+1===p.length?Object(s.jsx)(f,{reference:S,children:Object(s.jsx)(h,{item:e})},t):Object(s.jsx)(f,{children:Object(s.jsx)(h,{item:e})},t)}))}),i&&Object(s.jsx)("div",{className:"wrap__form-loader",ref:g,children:Object(s.jsx)("div",{className:"loader-shield",children:Object(s.jsx)(l,{className:"dl-blk"})})})]})]})})})},x=function(e){var t=Object(c.useContext)(o).contextReducer,n=Object(c.useState)(""),a=Object(d.a)(n,2),r=a[0],i=a[1],l=Object(c.useState)(""),j=Object(d.a)(l,2),u=j[0],m=j[1],b=Object(c.useState)(!1),f=Object(d.a)(b,2),h=f[0],O=f[1],x=Object(c.useState)(!1),g=Object(d.a)(x,2),v=g[0],_=g[1];return Object(s.jsx)("section",{className:"section__onboarding",children:Object(s.jsxs)("div",{className:"wrap__onboard-form comn-onboard-box",children:[Object(s.jsx)("span",{className:"main-title",children:"Welcome!"}),Object(s.jsx)("h1",{className:"h1_onboard-main",children:Object(s.jsx)("span",{className:"h1_sign-text",children:"Sign In"})}),Object(s.jsx)("div",{className:"wrap__sign-in-box",children:Object(s.jsxs)("form",{className:"form__sign-in",onSubmit:p,encType:"multipart/form-data",children:[Object(s.jsx)("div",{className:"wrap__input-field",children:Object(s.jsx)("input",{onChange:function(e){i(e.currentTarget.value.trim()),O(!1)},autoComplete:"off",value:r,type:"text",name:"email-address",className:"comn-input-form input__email-form ".concat(h?"input__error-show":""),placeholder:"Email address"})}),Object(s.jsx)("div",{className:"wrap__input-field wrap__submit-field",children:Object(s.jsx)("input",{onChange:function(e){m(e.currentTarget.value.trim()),_(!1)},autoComplete:"off",value:u,type:"password",name:"password",className:"comn-input-form input__email-form ".concat(v?"input__error-show":""),placeholder:"Password"})}),Object(s.jsx)("div",{className:"wrap__submit-field",children:Object(s.jsx)("button",{onClick:function(e){e.preventDefault();var n=r.trim().length<16&&r.trim().length>2,c=u.trim().length<16&&u.trim().length>2;n||O(!0),c||_(!0),n&&c&&t({type:"signIn",email:r})},className:"comn-btn btn_comn-style btn__sign-form",children:"Sign In"})})]})})]})})},g=function(){return Object(s.jsx)("main",{className:"main__viewport",children:Object(s.jsx)("main",{className:"main__app main-onboarding",children:Object(s.jsx)(x,{})})})},v=function(){return Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{path:"/",component:g,exact:!0}),Object(s.jsx)(u.a,{path:"/home",component:O,exact:!0})]})},_=function(){var e=Object(c.useContext)(o),t=e.AppData,n=e.contextReducer,a=Object(u.f)(),r=Object(u.g)();Object(c.useEffect)((function(){n({type:"loading",loading:!1}),t.login.isLogged?i("dashboard"):i("homepage")}),[t.login]);var i=function(e){var t=r.pathname;if("dashboard"===e)"/"===t&&a.replace("/home");else"/"!==t&&a.replace("/")};return Object(s.jsx)(v,{})},N=n(4),y=n(21),w=n(22),S=n(24),C=n(23),T="infinite_scroll",k="signIn",I="signOut",D="loading",M=function(e,t){var n=e;try{t instanceof Array?t.map((function(e){var t=R(n,e);n=Object(N.a)({},t)})):n=R(n,t)}catch(c){console.log(c)}return n},R=function(e,t){if(t.hasOwnProperty("type"))switch(t.type){case k:var n=t.email;return Object(N.a)(Object(N.a)({},e),{},{login:Object(N.a)(Object(N.a)({},e.login),{},{email:n,isLogged:!0})});case I:return Object(N.a)({},b);case D:var c=t.loading;return Object(N.a)(Object(N.a)({},e),{},{loading:!!c});default:return e}},A=function(e){Object(S.a)(n,e);var t=Object(C.a)(n);function n(e){var c;return Object(y.a)(this,n),(c=t.call(this,e)).contextReducer=function(e){var t,n=M(c.state,e);!function(e){try{var t=JSON.stringify(e);t&&localStorage.setItem("".concat(T),t)}catch(n){console.log(n)}}((t=n,Object(N.a)(Object(N.a)({},t),{},{loading:!0,users:{list:[]}}))),c.setState(n)},c.localData=function(){try{var e=localStorage.getItem("".concat(T));return e?JSON.parse(e):null}catch(t){return console.log(t),null}}(),c.state=c.localData?c.localData:Object(N.a)({},c.props.initialState),c}return Object(w.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state!==t}},{key:"render",value:function(){var e=this,t={AppData:this.state,contextReducer:function(t){return e.contextReducer(t)}};return Object(s.jsx)(o.Provider,{value:t,children:this.props.children})}}]),n}(c.Component),L=function(){return Object(s.jsx)(A,{initialState:b,children:Object(s.jsx)(j,{children:Object(s.jsx)(i.a,{children:Object(s.jsx)(_,{})})})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},F=(n(38),Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(L,{})}));Object(r.render)(F,document.getElementById("root")),P()}},[[39,1,2]]]);
//# sourceMappingURL=main.e42404c6.chunk.js.map