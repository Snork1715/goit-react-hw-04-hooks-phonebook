(this.webpackJsonpphonebook4=this.webpackJsonpphonebook4||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),o=n(9),i=n(2),s=n(8),u=n.n(s),l=(n(22),n(0));function b(e){var t=e.onAdd,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),b=u[0],d=u[1],m=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":d(a);break;default:return}};return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r,b),o(""),d("")},className:"contact-form",children:[Object(l.jsx)("label",{children:"\u0418\u043c\u044f"}),Object(l.jsx)("input",{type:"text",name:"name",value:r,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(l.jsx)("label",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(l.jsx)("input",{type:"tel",name:"number",value:b,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(l.jsx)("button",{type:"submit",className:"form_add-button",children:"Add contact"})]})}n(24);var d=function(e){var t=e.name,n=e.id,a=e.number,c=e.onDelete;return Object(l.jsxs)("li",{className:"contact-item",children:[t," ",a,Object(l.jsx)("button",{type:"button",onClick:function(){return c(n)},className:"contact-item_button",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},m=(n(25),function(e){var t=e.contacts,n=e.onDeleteContact;return Object(l.jsx)("ul",{className:"phonebook-contacts_list",children:t.map((function(e){return Object(l.jsx)(d,{id:e.id,name:e.name,number:e.number,onDelete:n},e.id)}))})}),j=(n(26),function(e){var t=e.value,n=e.onChange;return Object(l.jsxs)("label",{children:["\u041f\u043e\u0438\u0441\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432:",Object(l.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",name:"filter",value:t,onChange:n,className:"filter-input"})]})});n(27);function f(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),d=s[0],f=s[1];Object(a.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var O=d.toLowerCase(),h=n.filter((function(e){return e.name.toLowerCase().includes(O)}));return Object(l.jsxs)("div",{className:"phonebook-warper",children:[Object(l.jsxs)("div",{className:"phonebook-form",children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(b,{onAdd:function(e,t){var a={id:u.a.generate(),name:e,number:t},r=n.find((function(e){return e.name===a.name}));r?alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(r.name," \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")):c((function(e){return[a].concat(Object(o.a)(e))}))}})]}),Object(l.jsxs)("div",{className:"phonebook-contacts",children:[Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(j,{value:d,onChange:function(e){var t=e.currentTarget.value;f(t)}}),Object(l.jsx)(m,{contacts:h,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})}r.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1aadabdd.chunk.js.map