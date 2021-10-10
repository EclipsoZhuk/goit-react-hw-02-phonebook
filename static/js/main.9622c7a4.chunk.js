(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports={title:"App_title__3nD55",contactTitle:"App_contactTitle__35a3C"}},function(t,e,n){t.exports={text:"Filter_text__3jkDd",value:"Filter_value__2G22L"}},,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},function(t,e,n){t.exports={container:"Container_container__3PaQ4"}},function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__EQy8C"}},function(t,e,n){t.exports={buttonDelete:"ContactList_buttonDelete__sjjW7"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(11),o=n.n(c),i=n(8),s=n(16),u=n(3),l=n(4),b=n(6),m=n(5),d=n(12),j=n(9),h=n.n(j),f=n(13),p=n.n(f),v=n(0),O=function(t){var e=t.children;return Object(v.jsx)("div",{className:p.a.container,children:e})},x=n(2),C=n(14),_=n.n(C),g=n(26),S=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(x.a)({},a,r))},t.handleSubmit=function(e){var n=t.state,a=n.name,r=n.number;e.preventDefault();var c={id:Object(g.a)(),name:a,number:r};t.props.onSubmitData(c),t.reset()},t.reset=function(){return t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.handleSubmit,e=this.handleChange,n=this.state,a=n.name,r=n.number;return Object(v.jsx)("div",{className:_.a.contactForm,children:Object(v.jsxs)("form",{type:"submit",onSubmit:t,children:[Object(v.jsxs)("label",{children:["Name",Object(v.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:e,value:a})]}),Object(v.jsxs)("label",{children:["Number",Object(v.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:e,value:r})]}),Object(v.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),y=S,D=n(15),A=n.n(D);function w(t){var e=t.contacts,n=t.onDeleteContact;return Object(v.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(v.jsxs)("li",{children:["".concat(a,": ").concat(r),Object(v.jsx)("button",{className:A.a.buttonDelete,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var F=n(10),N=n.n(F);function k(t){var e=t.value,n=t.onChange;return Object(v.jsxs)("label",{className:N.a.text,children:["Find contacts by name",Object(v.jsx)("input",{placeholder:"Search",className:N.a.value,type:"text",value:e,onChange:n})]})}var L=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:d,filter:""},t.formSubmitHandler=function(e){if(t.state.contacts.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert(" \u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0454 \u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456!!!");t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(s.a)(n))}}))},t.elementDelete=function(t,e){return t.filter((function(t){return t.id!==e}))},t.setFilterToState=function(e){return t.setState(Object(i.a)(Object(i.a)({},t.state),{},{filter:"".concat(e)}))},t.getVisibleContact=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t.changeFilter=function(e){return t.setState({filter:e.currentTarget.value})},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.formSubmitHandler,e=this.changeFilter,n=this.onDeleteContact,a=this.getVisibleContact,r=this.state.filter;return Object(v.jsxs)(O,{children:[Object(v.jsx)("h1",{className:h.a.title,children:"Phonebook"}),Object(v.jsx)(y,{onSubmitData:t}),Object(v.jsx)("h2",{className:h.a.contactTitle,children:"Contacts"}),Object(v.jsx)(k,{value:r,onChange:e}),Object(v.jsx)(w,{contacts:a(),onDeleteContact:n})]})}}]),n}(a.Component),T=L;n(22),n(23);o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(T,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.9622c7a4.chunk.js.map