(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports={title:"App_title__152H9",contactTitle:"App_contactTitle__2W1x7"}},function(t,e,n){t.exports={text:"Filter_text__3jkDd",value:"Filter_value__2G22L"}},,,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},function(t,e,n){t.exports={container:"Container_container__3PaQ4"}},function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__EQy8C"}},function(t,e,n){t.exports={buttonDelete:"ContactList_buttonDelete__sjjW7"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),o=n.n(c),i=n(6),s=n(11),l=n(2),u=n(3),b=n(5),m=n(4),j=n(26),d=n(13),h=n(9),p=n.n(h),f=n(14),O=n.n(f),v=n(0),x=function(t){var e=t.children;return Object(v.jsx)("div",{className:O.a.container,children:e})},C=n(7),_=n(15),S=n.n(_),y=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(C.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmitData({name:t.state.name,number:t.state.number}),t.reset()},t.reset=function(){return t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.handleSubmit,e=this.handleChange,n=this.state,a=n.name,r=n.number;return Object(v.jsx)("div",{className:S.a.contactForm,children:Object(v.jsxs)("form",{type:"submit",onSubmit:t,children:[Object(v.jsxs)("label",{children:["Name",Object(v.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:e,value:a})]}),Object(v.jsxs)("label",{children:["Number",Object(v.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:e,value:r})]}),Object(v.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),F=y,g=n(16),A=n.n(g),k=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.deleteContact;return Object(v.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(v.jsxs)("li",{id:e,children:["".concat(a,": ").concat(r),Object(v.jsx)("button",{className:A.a.buttonDelete,"data-id":e,onClick:function(){return n(e)},children:"Delete"})]},e)}))})}}]),n}(a.Component);k.defaultProps={contacts:[]};var D=k,N=n(10),w=n.n(N),T=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).setFilterValue=function(e){var n=e.target.value.toUpperCase();t.props.setFilterToState(n)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("label",{className:w.a.text,children:["Find contacts by name",Object(v.jsx)("input",{placeholder:"Search",className:w.a.value,onChange:this.setFilterValue})]})}}]),n}(a.Component),z=T,H=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:d,filter:""},t.formSubmitHandler=function(e){t.repeatControl(e)},t.repeatControl=function(e){if(!t.state.contacts.map((function(t){return t.name})).includes(e.name)){var n=[].concat(Object(s.a)(t.state.contacts),[{id:Object(j.a)(),name:e.name,number:e.number}]);return t.setState(Object(i.a)(Object(i.a)({},t.state),{},{contacts:n}))}alert(" \u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0454 \u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456!!!")},t.elementDelete=function(t,e){return t.filter((function(t){return t.id!==e}))},t.deleteContactFromContactList=function(e){var n=t.elementDelete(t.state.contacts,e);t.setState(Object(i.a)(Object(i.a)({},t.state),{},{contacts:Object(s.a)(n)}))},t.setFilterToState=function(e){return t.setState(Object(i.a)(Object(i.a)({},t.state),{},{filter:"".concat(e)}))},t.filterArr=function(e){return e.filter((function(e){return e.name.toUpperCase().includes(t.state.filter)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.formSubmitHandler,e=this.setFilterToState,n=this.deleteContactFromContactList,a=this.filterArr,r=this.state.contacts;return Object(v.jsxs)(x,{children:[Object(v.jsx)("h1",{className:p.a.title,children:"Phonebook"}),Object(v.jsx)(F,{onSubmitData:t}),Object(v.jsx)("h2",{className:p.a.contactTitle,children:"Contacts"}),Object(v.jsx)(z,{setFilterToState:e}),Object(v.jsx)(D,{contacts:a(r),deleteContact:n})]})}}]),n}(a.Component),J=H;n(22),n(23);o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.f5a776e3.chunk.js.map