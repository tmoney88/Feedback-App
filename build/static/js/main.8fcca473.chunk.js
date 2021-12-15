(this["webpackJsonpfeedback-app"]=this["webpackJsonpfeedback-app"]||[]).push([[0],{30:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(24),r=c.n(a),s=(c(30),c(19)),j=c(3),l=c(2);function d(e){var t=e.text,c={backgroundColor:e.bgColor,color:e.textColor};return Object(l.jsx)("header",{style:c,children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h2",{children:t})})})}d.defaultProps={text:"Feedback UI",bgColor:"rgba(0,0,0,0.4)",textColor:"#ff6a95"};var b=d,u=c(38),o=c(36);function h(e){var t=e.children,c=e.reverse;return Object(l.jsx)("div",{className:"card",style:{backgroundColor:c?"rgba(0,0,0,0.4)":"#fff",color:c?"#fff":"rgba(0,0,0,0.4)"},children:t})}h.defaultProps={reverse:!1};var O=h,x=c(21),m=c(25),p=c(23),f=c(6),v=c(37),g=Object(n.createContext)(),k=function(e){var t=e.children,c=Object(n.useState)([{id:1,text:"This is feedback item 1",rating:10},{id:2,text:"This is feedback item 2",rating:10},{id:3,text:"This is feedback item 3",rating:10}]),i=Object(f.a)(c,2),a=i[0],r=i[1],s=Object(n.useState)({item:{},edit:!1}),j=Object(f.a)(s,2),d=j[0],b=j[1];return Object(l.jsx)(g.Provider,{value:{feedback:a,deleteFeedback:function(e){window.confirm("Are you sure you want to delete?")&&r(a.filter((function(t){return t.id!==e})))},addFeedback:function(e){e.id=Object(v.a)(),r([e].concat(Object(m.a)(a)))},editFeedback:function(e){b({item:e,edit:!0})},feedbackEdit:d,updateFeedback:function(e,t){r(a.map((function(c){return c.id===e?Object(p.a)(Object(p.a)({},c),t):c})))}},children:t})},y=g;var C=function(e){var t=e.item,c=Object(n.useContext)(y),i=c.deleteFeedback,a=c.editFeedback;return Object(l.jsxs)(O,{children:[Object(l.jsx)("div",{className:"num-display",children:t.rating}),Object(l.jsx)("button",{onClick:function(){return i(t.id)},className:"close",children:Object(l.jsx)(x.c,{color:"purple"})}),Object(l.jsx)("button",{className:"edit",onClick:function(){return a(t)},children:Object(l.jsx)(x.a,{color:"purple"})}),Object(l.jsx)("div",{className:"text-display",children:t.text})]})};var F=function(){var e=Object(n.useContext)(y).feedback;return e&&0!==e.length?Object(l.jsx)("div",{className:"feedback-list",children:Object(l.jsx)(u.a,{children:e.map((function(e){return Object(l.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(l.jsx)(C,{item:e},e.id)},e.id)}))})}):Object(l.jsx)("p",{children:"No Feedback Yet"})};var N=function(){var e=Object(n.useContext)(y).feedback,t=e.reduce((function(e,t){return e+t.rating}),0)/e.length;return t=t.toFixed(1).replace(/[.,]0$/,""),Object(l.jsxs)("div",{className:"feedback-stats",children:[Object(l.jsxs)("h4",{children:[e.length," Reviews"]}),Object(l.jsxs)("h4",{children:["Average Rating: ",isNaN(t)?0:t]})]})};function w(e){var t=e.children,c=e.version,n=e.type,i=e.isDisabled;return Object(l.jsx)("button",{type:n,disabled:i,className:"btn btn-".concat(c),children:t})}w.defaultProps={version:"primary",type:"button",isDisabled:!1};var S=w;var T=function(e){var t=e.select,c=Object(n.useState)(10),i=Object(f.a)(c,2),a=i[0],r=i[1],s=Object(n.useContext)(y).feedbackEdit;Object(n.useEffect)((function(){r(s.item.rating)}),[s]);var j=function(e){r(+e.currentTarget.value),t(+e.currentTarget.value)};return Object(l.jsxs)("ul",{className:"rating",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"radio",id:"num1",name:"rating",value:"1",onChange:j,checked:1===a}),Object(l.jsx)("label",{htmlFor:"num1",children:"1"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"radio",id:"num2",name:"rating",value:"2",onChange:j,checked:2===a}),Object(l.jsx)("label",{htmlFor:"num2",children:"2"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"radio",id:"num3",name:"rating",value:"3",onChange:j,checked:3===a}),Object(l.jsx)("label",{htmlFor:"num3",children:"3"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"radio",id:"num4",name:"rating",value:"4",onChange:j,checked:4===a}),Object(l.jsx)("label",{htmlFor:"num4",children:"4"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"radio",id:"num5",name:"rating",value:"5",onChange:j,checked:5===a}),Object(l.jsx)("label",{htmlFor:"num5",children:"5"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"radio",id:"num6",name:"rating",value:"6",onChange:j,checked:6===a}),Object(l.jsx)("label",{htmlFor:"num6",children:"6"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"radio",id:"num7",name:"rating",value:"7",onChange:j,checked:7===a}),Object(l.jsx)("label",{htmlFor:"num7",children:"7"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"radio",id:"num8",name:"rating",value:"8",onChange:j,checked:8===a}),Object(l.jsx)("label",{htmlFor:"num8",children:"8"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"radio",id:"num9",name:"rating",value:"9",onChange:j,checked:9===a}),Object(l.jsx)("label",{htmlFor:"num9",children:"9"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"radio",id:"num10",name:"rating",value:"10",onChange:j,checked:10===a}),Object(l.jsx)("label",{htmlFor:"num10",children:"10"})]})]})};var E=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(10),r=Object(f.a)(a,2),s=r[0],j=r[1],d=Object(n.useState)(!0),b=Object(f.a)(d,2),u=b[0],o=b[1],h=Object(n.useState)(""),x=Object(f.a)(h,2),m=x[0],p=x[1],v=Object(n.useContext)(y),g=v.addFeedback,k=v.feedbackEdit,C=v.updateFeedback;return Object(n.useEffect)((function(){!0===k.edit&&(o(!1),i(k.item.text),j(k.item.rating))}),[k]),Object(l.jsx)(O,{children:Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),c.trim().length>10){var t={text:c,rating:s};!0===k.edit?C(k.item.id,t):g(t),i("")}},children:[Object(l.jsx)("h2",{children:"How would you rate your service with us?"}),Object(l.jsx)(T,{select:function(e){return j(e)}}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("input",{type:"text",placeholder:"Write a review",onChange:function(e){""===c?(o(!0),p(null)):""!==c&&c.trim().length<=10?(p("Text must be at least 10 characters"),o(!0)):(p(null),o(!1)),i(e.target.value)},value:c}),Object(l.jsx)(S,{isDisabled:u,type:"submit",children:"Send"})]}),m&&Object(l.jsx)("div",{className:"message",children:m})]})})};var P=function(){return Object(l.jsx)(O,{children:Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("h1",{children:"About This Project"}),Object(l.jsx)("p",{children:"This is a React app to leave feedback for a product or service"}),Object(l.jsx)("p",{children:"Version: 1.0.0"}),Object(l.jsx)("p",{children:Object(l.jsx)(s.b,{exact:!0,to:"/",children:"Back To Home"})})]})})};var D=function(){return Object(l.jsx)("div",{className:"about-link",children:Object(l.jsx)(s.b,{to:"/about",children:Object(l.jsx)(x.b,{size:30})})})};var A=function(){return Object(l.jsx)(k,{children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(b,{text:"Feedback UI"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",element:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(E,{}),Object(l.jsx)(N,{}),Object(l.jsx)(F,{})]})}),Object(l.jsx)(j.a,{path:"/about",element:Object(l.jsx)(P,{})})]}),Object(l.jsx)(D,{})]})]})})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8fcca473.chunk.js.map