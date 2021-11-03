(this["webpackJsonp18127136-classroom-18127136-frontend"]=this["webpackJsonp18127136-classroom-18127136-frontend"]||[]).push([[0],{315:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(48),c=n.n(o),i=n(171),s=n(377),l=n(1),u=Object(i.a)({palette:{background:{paper:"#fff"},text:{primary:"#173A5E",secondary:"#46505A"}}}),d=function(e){var t=e.children;return Object(l.jsx)(s.a,{theme:u,children:t})},h=n(14),j=n(13),b=n(98),p=n(387),f=n(383),x=n(384),m=n(362),O=n(358),g=n(380),v=n(360),y=n(361),C=n(378),w=n(382),k=n(385),S=n(386),T={background:"#fff",color:"text.primary",borderBottom:2,borderColor:"grey.200"},z={fontWeight:"medium",fontSize:16,height:60},B={width:300,pr:1},W=n(365),F=function(e){var t=e.children,n=e.items,a=e.loading,o=void 0!==a&&a,c=Object(O.a)({disableHysteresis:!0,threshold:0}),i=r.useState(!1),s=Object(j.a)(i,2),u=s[0],d=s[1],h=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&d(e)}},b=function e(t,n){var r;switch(t.type){case"group":return Object(l.jsx)(l.Fragment,{children:null===t||void 0===t||null===(r=t.children)||void 0===r?void 0:r.map((function(t,n){return e(t,n)}))});case"item":return Object(l.jsxs)(g.a,{selected:1===n,sx:z,children:[Object(l.jsx)(v.a,{children:t.icon}),Object(l.jsx)(y.a,{sx:{fontSize:14,fontWeight:"bold"},primary:t.title})]},n);case"divider":return Object(l.jsx)("div",{})}};return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(m.a,{}),Object(l.jsx)(C.a,{anchor:"left",open:u,onClose:h(!1),children:Object(l.jsx)(w.a,{sx:B,role:"presentation",onKeyDown:h(!1),children:n.map((function(e,t){return b(e,t)}))})}),Object(l.jsxs)(f.a,{elevation:c?4:0,sx:T,children:[Object(l.jsxs)(x.a,{children:[Object(l.jsx)(k.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",onClick:h(!0),children:Object(l.jsx)(W.a,{})}),t]}),o&&Object(l.jsx)(S.a,{})]}),Object(l.jsx)(x.a,{})]})},M=n(63),_=n(173),E=n(373),G={root:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",borderRadius:2,boxShadow:24,p:3,pb:1},title:{fontSize:16,fontWeight:"bold"}},P=["open","handleClose","title","children"],I=function(e){var t=e.open,n=e.handleClose,r=e.title,a=e.children,o=Object(_.a)(e,P);return Object(l.jsx)(E.a,{keepMounted:!0,open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(l.jsxs)(p.a,Object(M.a)(Object(M.a)({sx:G.root},o),{},{children:[Object(l.jsx)(b.a,{id:"modal-modal-title",sx:G.title,gutterBottom:!0,children:r}),a]}))})},L=n(366),R=n(367),D=n(368),q=n(369),A=[{title:"Classes",icon:Object(l.jsx)(L.a,{}),href:"/",type:"item"},{title:"Calendar",icon:Object(l.jsx)(R.a,{}),href:"/",type:"item"},{title:"Teaching",type:"group",children:[{title:"To review",icon:Object(l.jsx)(D.a,{}),href:"/",type:"item"}]},{title:"Enrolled",type:"group",children:[{title:"To-do",icon:Object(l.jsx)(q.a,{}),href:"/",type:"item"}]}],J=n(172),U=n(379),H=n(166),V=n.n(H),K=n(388),N=n(375),Q=n(370),X=n(389),Y={checkboxContainer:{display:"flex",flexDirection:"row",p:1,bgcolor:"grey.100",my:2,justifyContent:"start"}},Z={container:{mt:3,"& .MuiTextField-root":{my:1}}},$=function(e){var t=e.open,n=e.handleClose,r=e.onSubmit,o=a.a.useState(!1),c=Object(j.a)(o,2),i=c[0],s=c[1];return Object(l.jsx)(I,{open:t,handleClose:n,title:"Using Classroom at a school with students?",width:300,children:Object(l.jsxs)(p.a,{sx:{pt:1},children:[Object(l.jsxs)(b.a,{variant:"body2",gutterBottom:!0,component:"p",sx:{pt:1},children:["If so, your school must sign up for a free Google Workspace for Education account before you can use Classroom."," ",Object(l.jsx)(K.a,{href:"#",children:"privacy and security"})]}),Object(l.jsxs)(b.a,{variant:"body2",gutterBottom:!0,component:"p",sx:{pt:1},children:["Google Workspace for Education lets schools decide which Google services their students can use, and provides additional"," ",Object(l.jsx)(K.a,{href:"#",children:"privacy and security"})," protections that are important in a school setting. Students cannot use Google Classroom at a school with personal accounts."]}),Object(l.jsxs)(p.a,{sx:Y.checkboxContainer,children:[Object(l.jsx)("div",{children:Object(l.jsx)(N.a,{checked:i,onChange:function(e){s(e.target.checked)}})}),Object(l.jsx)(b.a,{variant:"body2",gutterBottom:!0,component:"p",sx:{pt:1},children:"I've read and understand the above notice, and I'm not using Classroom at a school with students"})]}),Object(l.jsxs)(Q.a,{direction:"row",spacing:2,justifyContent:"flex-end",children:[Object(l.jsx)(X.a,{onClick:n,children:"Go back"}),Object(l.jsx)(X.a,{onClick:r,disabled:!i,children:"Continue"})]})]})})},ee=n(372),te=n(170),ne=n(74),re=ne.a({title:ne.b().min(1,"Classroom Title should be of 1-100 characters length").max(100,"Classroom Title should be of 1-100 characters length").required("Classroom Title is required"),section:ne.b().min(1,"Section should be of 1-50 characters length").max(50,"Section should be of 1-50 characters length"),subject:ne.b().min(1,"Subject should be of 1-50 characters length").max(50,"Subject should be of 1-50 characters length")}),ae=function(e){var t=e.open,n=e.handleClose,r=e.onSubmit,a=Object(te.a)({initialValues:{title:"",room:"",section:"",subject:""},validationSchema:re,onSubmit:function(e){r(e)}});return Object(l.jsx)(I,{open:t,handleClose:n,title:"Create class",width:500,children:Object(l.jsxs)(p.a,{component:"form",noValidate:!0,autoComplete:"off",sx:Z.container,onSubmit:a.handleSubmit,children:[Object(l.jsx)(ee.a,{id:"title",name:"title",label:"Class name (required)",variant:"filled",fullWidth:!0,value:a.values.title,onChange:a.handleChange,error:a.touched.title&&Boolean(a.errors.title),helperText:a.touched.title&&a.errors.title}),Object(l.jsx)(ee.a,{id:"section",name:"section",label:"Section",variant:"filled",fullWidth:!0,onChange:a.handleChange,value:a.values.section,error:a.touched.section&&Boolean(a.errors.section),helperText:a.touched.section&&a.errors.section}),Object(l.jsx)(ee.a,{id:"subject",name:"subject",label:"Subject",variant:"filled",fullWidth:!0,onChange:a.handleChange,value:a.values.subject,error:a.touched.subject&&Boolean(a.errors.subject),helperText:a.touched.subject&&a.errors.subject}),Object(l.jsx)(ee.a,{id:"room",name:"room",label:"Room",variant:"filled",fullWidth:!0,onChange:a.handleChange,value:a.values.room,error:a.touched.room&&Boolean(a.errors.room),helperText:a.touched.room&&a.errors.room}),Object(l.jsxs)(Q.a,{direction:"row",spacing:2,marginTop:1,justifyContent:"flex-end",children:[Object(l.jsx)(X.a,{onClick:n,children:"Go back"}),Object(l.jsx)(X.a,{type:"submit",onClick:function(){},children:"Continue"})]})]})})},oe=function(e){var t=e.handleSubmit,n=a.a.useState(null),r=Object(j.a)(n,2),o=r[0],c=r[1],i=a.a.useState(!1),s=Object(j.a)(i,2),u=s[0],d=s[1],h=a.a.useState(!1),b=Object(j.a)(h,2),p=b[0],f=b[1],x=function(){c(null),d(!1),f(!1)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(l.jsx)(V.a,{sx:{fontSize:24}})}),Object(l.jsxs)(J.a,{id:"menu-add",anchorEl:o,MenuListProps:{"aria-labelledby":"add-button"},open:Boolean(o),anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},onClose:function(){return c(null)},keepMounted:!0,children:[Object(l.jsx)(U.a,{onClick:function(){},children:"Join class"}),Object(l.jsx)(U.a,{onClick:function(){return d(!0)},children:"Create class"})]}),Object(l.jsx)($,{open:u,handleClose:x,onSubmit:function(){x(),f(!0)}}),Object(l.jsx)(ae,{open:p,handleClose:x,onSubmit:function(e){t(e),x()}})]})},ce=n(390),ie=n(392),se=n(391),le=n(393),ue={card:{":hover":{boxShadow:"0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)"},maxWidth:290,border:2,borderColor:"grey.200",borderRadius:2},header:{flexWrap:"nowrap",whiteSpace:"nowrap",justifyContent:"space-between",alignItems:"start",marginTop:"-100px",p:2,pb:4,color:"#fff","& > .MuiBox-root":{cursor:"pointer",":hover":{textDecoration:"underline"},"& > .MuiBox-root":{textOverflow:"ellipsis",overflow:"hidden"}}},header_title:{fontSize:22},header_section:{fontSize:13},actions:{borderTop:2,borderColor:"grey.200",justifyContent:"end"}},de=n(167),he=n.n(de),je=n(168),be=n.n(je),pe=n(169),fe=n.n(pe),xe=function(e){var t=e.title,n=e.section,r=e.onClick;return Object(l.jsxs)(ce.a,{sx:ue.card,elevation:0,children:[Object(l.jsx)(se.a,{component:"img",height:"100",image:"https://www.gstatic.com/classroom/themes/img_breakfast.jpg",alt:"bg"}),Object(l.jsxs)(Q.a,{spacing:2,direction:"row",sx:ue.header,children:[Object(l.jsxs)(p.a,{width:200,onClick:r,children:[Object(l.jsx)(p.a,{sx:ue.header_title,component:"div",children:t}),Object(l.jsx)(p.a,{sx:ue.header_section,component:"div",children:n})]}),Object(l.jsx)(k.a,{children:Object(l.jsx)(he.a,{sx:{color:"#fff"}})})]}),Object(l.jsx)(ie.a,{sx:{minHeight:100}}),Object(l.jsxs)(le.a,{sx:ue.actions,children:[Object(l.jsx)(k.a,{size:"medium",color:"primary",children:Object(l.jsx)(be.a,{})}),Object(l.jsx)(k.a,{size:"medium",color:"primary",children:Object(l.jsx)(fe.a,{})})]})]})},me=n(371),Oe=function(){var e=a.a.useState(null),t=Object(j.a)(e,2),n=t[0],r=t[1],o=function(){r(null)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:Object(l.jsx)(me.a,{sx:{fontSize:24}})}),Object(l.jsxs)(J.a,{id:"menu-profile",anchorEl:n,MenuListProps:{"aria-labelledby":"profile-button"},open:Boolean(n),anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},onClose:o,keepMounted:!0,children:[Object(l.jsx)(U.a,{onClick:o,children:"Profile"}),Object(l.jsx)(U.a,{onClick:o,children:"My account"})]})]})},ge={px:2},ve={display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"start",gap:3,mt:3},ye=n(16),Ce=n(25),we=n(26),ke=n(23),Se=n.n(ke),Te=n(43),ze=n(17),Be=n(117),We=n.n(Be),Fe="".concat("https://web-classroom-backend.herokuapp.com","/").concat("api","/").concat("v1"),Me=We.a.create({baseURL:Fe}),_e={page:1,per_page:10,sort_by:"created_at",sort_order:"desc"},Ee=function(){function e(){Object(ye.a)(this,e),this.resource=""}return Object(ze.a)(e,[{key:"get",value:function(){var e=Object(Te.a)(Se.a.mark((function e(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me.get("".concat(this.resource," "));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getWithPagination",value:function(){var e=Object(Te.a)(Se.a.mark((function e(t){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me.get("".concat(this.resource,"/").concat(Ge(Object(M.a)(Object(M.a)({},_e),t))));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getOne",value:function(){var e=Object(Te.a)(Se.a.mark((function e(t){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me.get("".concat(this.resource,"/").concat(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getWithCustomQuery",value:function(){var e=Object(Te.a)(Se.a.mark((function e(t){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me.get("".concat(this.resource).concat(Ge(t)));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=Object(Te.a)(Se.a.mark((function e(t){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me.post("".concat(this.resource),t);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(Te.a)(Se.a.mark((function e(t,n){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me.put("".concat(this.resource,"/").concat(t),n);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(Te.a)(Se.a.mark((function e(t){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me.delete("".concat(this.resource,"/").concat(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"customRequest",value:function(){var e=Object(Te.a)(Se.a.mark((function e(t){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",We()(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),Ge=function(e){return new URLSearchParams(e).toString()},Pe=function(e){Object(Ce.a)(n,e);var t=Object(we.a)(n);function n(){var e;Object(ye.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).resource="classes",e}return n}(Ee),Ie=new Pe,Le=function(){var e=a.a.useState(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],o=a.a.useState([]),c=Object(j.a)(o,2),i=c[0],s=c[1];a.a.useEffect((function(){r(!0),Ie.get().then((function(e){console.log("log ~ file: index.tsx ~ line 19 ~ repository.get ~ data",e),s(e),r(!1)}))}),[]);return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)(F,{items:A,loading:n,children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Classroom"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(oe,{handleSubmit:function(e){r(!0),Ie.create(e).then((function(e){console.log(e),r(!1),s((function(t){return[].concat(Object(h.a)(t),[e])}))}))}}),Object(l.jsx)(Oe,{})]})]})}),!n&&Object(l.jsx)(p.a,{sx:ge,children:Object(l.jsx)(p.a,{sx:ve,children:i.map((function(e,t){return Object(l.jsx)(xe,{title:e.title,section:e.section,onClick:function(){}},t)}))})})]})};var Re=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(d,{children:Object(l.jsx)(Le,{})})})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,395)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};n(315);c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(Re,{})}),document.getElementById("root")),De()}},[[316,1,2]]]);
//# sourceMappingURL=main.e6a2848a.chunk.js.map