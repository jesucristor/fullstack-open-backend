(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),o=t(15),a=t.n(o),i=(t(20),t(6)),u=t(3),s=t(0),d=function(e){var n=e.query,t=e.handleQuery;return Object(s.jsxs)("div",{children:["filter shown with ",Object(s.jsx)("input",{value:n,onChange:t})]})},f=function(e){var n=e.newName,t=e.handleNames,c=e.newNumber,r=e.handleNumbers,o=e.addPerson;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:n,onChange:t})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:c,onChange:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",onClick:o,children:"add"})})]})},j=function(e){var n=e.filterPersons,t=e.deletePersonId;return Object(s.jsx)("div",{children:n.map((function(e){return Object(s.jsxs)("div",{children:[e.name," ",e.number,Object(s.jsx)("button",{onClick:function(){return t(e)},children:"delete"})]},e.name)}))})},b=t(4),h=t.n(b),m="api/persons",l=function(){return h.a.get(m).then((function(e){return e.data}))},O=function(e){return h.a.post(m,e).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},x=function(e){return h.a.put("".concat(m,"/").concat(e.id),e).then((function(e){return e.data}))},p=(t(40),function(e){var n=e.message;return e.error?Object(s.jsx)("div",{className:"error",children:n}):Object(s.jsx)("div",{className:"success",children:n})}),w=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(""),a=Object(u.a)(o,2),b=a[0],h=a[1],m=Object(c.useState)(""),w=Object(u.a)(m,2),N=w[0],g=w[1],y=Object(c.useState)(""),C=Object(u.a)(y,2),k=C[0],P=C[1],S=Object(c.useState)(""),I=Object(u.a)(S,2),T=I[0],L=I[1],D=Object(c.useState)(!1),q=Object(u.a)(D,2),E=q[0],J=q[1];Object(c.useEffect)((function(){l().then((function(e){r(e)}))}),[]);var Q=t.filter((function(e){return e.name.toLowerCase().search(k.toLowerCase())>-1})),A=function(e){var n=t.find((function(n){return n.name===e})),c=Object(i.a)(Object(i.a)({},n),{},{number:N});x(c).then((function(n){r(t.map((function(e){return e.id!==c.id?e:n}))),L("Updated ".concat(e)),setTimeout((function(){L("")}),5e3)})).catch((function(e){L("Information of ".concat(n.name," has alredy been removed from server.")),J(!0),setTimeout((function(){L(""),J(!1)}),5e3)}))};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),T&&Object(s.jsx)(p,{message:T,error:E}),Object(s.jsx)(d,{query:k,handleQuery:function(e){P(e.target.value)}}),Object(s.jsxs)("form",{children:[Object(s.jsx)("h2",{children:"add a new"}),Object(s.jsx)(f,{newName:b,handleNames:function(e){h(e.target.value)},newNumber:N,handleNumbers:function(e){g(e.target.value)},addPerson:function(e){if(e.preventDefault(),t.find((function(e){return b.toLowerCase()===e.name.toLowerCase()})))window.confirm("".concat(b," is alredy added to phonebook, replace the old number with a new one?"))&&A(b);else{var n={name:b,number:N};O(n).then((function(e){r(t.concat(e)),L("Added ".concat(n.name)),setTimeout((function(){L("")}),5e3)})).catch((function(e){L("Information of ".concat(n.name," has alredy been removed from server.")),J(!0),setTimeout((function(){L(""),J(!1)}),5e3)}))}h(""),g("")}})]}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(j,{filterPersons:Q,deletePersonId:function(e){window.confirm("Delete ".concat(e.name,"?"))&&v(e.id).then((function(n){var c=t.filter((function(n){return n.id!=e.id}));L("Deleted ".concat(e.name)),r(c),setTimeout((function(){L("")}),5e3)})).catch((function(n){L("Information of ".concat(e.name," has alredy been removed from server.")),J(!0),setTimeout((function(){L(""),J(!1)}),5e3)}))}})]})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.456dbd1e.chunk.js.map