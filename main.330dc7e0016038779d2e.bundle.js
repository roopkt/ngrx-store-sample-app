webpackJsonp([1,4],{"+8P/":function(n,l,t){"use strict";function u(n){return r._17(0,[(n()(),r._18(0,null,null,4,"li",[],null,null,null,null,null)),(n()(),r._19(null,["\n        "])),(n()(),r._18(0,null,null,1,"app-todo",[],null,[[null,"toggleTodo"]],function(n,l,t){var u=!0,e=n.component;if("toggleTodo"===l){u=!1!==e.toggleTodo.emit(t)&&u}return u},i.a,i.b)),r._20(4767744,null,0,a.a,[],{todo:[0,"todo"]},{toggleTodo:"toggleTodo"}),(n()(),r._19(null,["\n    "]))],function(n,l){n(l,3,0,l.context.$implicit)},null)}function e(n){return r._17(2,[(n()(),r._19(null,["\n  "])),(n()(),r._18(0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),r._19(null,["\n    "])),(n()(),r._25(16777216,null,null,1,null,u)),r._20(802816,null,0,d.g,[r._3,r._4,r.m],{ngForOf:[0,"ngForOf"]},null),(n()(),r._19(null,["\n  "])),(n()(),r._19(null,["\n  "]))],function(n,l){n(l,4,0,l.component.todos)},null)}function o(n){return r._17(0,[(n()(),r._18(0,null,null,1,"app-todo-list",[],null,null,null,e,f)),r._20(49152,null,0,c.a,[],null,null)],null,null)}var r=t("3j3K"),i=t("AiGt"),a=t("TTAK"),d=t("2Je8"),c=t("Sz1M");t.d(l,"b",function(){return f}),l.a=e;var s=[],f=r._16({encapsulation:2,styles:s,data:{}});r._21("app-todo-list",c.a,o,{todos:"todos"},{toggleTodo:"toggleTodo"},[])},"/fcW":function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="/fcW"},0:function(n,l,t){n.exports=t("x35b")},"1A80":function(n,l,t){"use strict";function u(n){return r._17(0,[(n()(),r._18(0,null,null,7,"div",[],null,null,null,null,null)),(n()(),r._19(null,["\n  \n    "])),(n()(),r._18(0,null,null,1,"app-todo-container",[],null,null,null,i.a,i.b)),r._20(49152,null,0,a.a,[d.a],null,null),(n()(),r._19(null,["\n    "])),(n()(),r._18(0,null,null,1,"app-tree-container",[],null,null,null,c.a,c.b)),r._20(114688,null,0,s.a,[d.a,f.a],null,null),(n()(),r._19(null,["\n"]))],function(n,l){n(l,6,0)},null)}function e(n){return r._17(0,[(n()(),r._18(0,null,null,1,"app-root",[],null,null,null,u,g)),r._20(49152,null,0,p.a,[],null,null)],null,null)}var o=t("Ni5f"),r=t("3j3K"),i=t("KM/C"),a=t("vwiM"),d=t("Zcpd"),c=t("wPzF"),s=t("b0gX"),f=t("haX/"),p=t("YWx4");t.d(l,"a",function(){return h});var _=[o.a],g=r._16({encapsulation:0,styles:_,data:{}}),h=r._21("app-root",p.a,e,{},{},[])},"3pbj":function(n,l,t){"use strict";function u(n,l){return f(n,l)}var e=t("pCI3"),o=t("Bwff"),r=(t.n(o),t("WWmu")),i=t("bndy"),a=(t.n(i),t("KhQu")),d=(t.n(a),t("htgi")),c=t("ynji");l.a=u,t.d(l,"c",function(){return _}),t.d(l,"b",function(){return h});var s={todos:c.a,tree:d.a},f=t.i(e.a)(a.storeFreeze,t.i(o.storeLogger)(),r.a)(s),p=function(n){return n.todos},_=t.i(i.createSelector)(p,c.b),g=function(n){return n.tree},h=t.i(i.createSelector)(g,d.b)},AiGt:function(n,l,t){"use strict";function u(n){return o._17(2,[(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,8,"li",[],null,null,null,null,null)),(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,2,"span",[],null,null,null,null,null)),o._20(278528,null,0,r.i,[o.m,o.o,o._0,o._1],{ngClass:[0,"ngClass"]},null),(n()(),o._19(null,["\n    "," - \n    ","\n    "])),(n()(),o._19(null,["\n             "])),(n()(),o._18(0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.toggleTodo.emit(e.todo.path)&&u}return u},null,null)),(n()(),o._19(null,["Toggle"])),(n()(),o._19(null,["\n             "])),(n()(),o._19(null,["\n  "]))],function(n,l){n(l,4,0,l.component.todo.complete?"complete":"pending")},function(n,l){var t=l.component;n(l,5,0,t.todo.text,t.todo.complete?"complete":"pending")})}function e(n){return o._17(0,[(n()(),o._18(0,null,null,1,"app-todo",[],null,null,null,u,d)),o._20(4767744,null,0,i.a,[],null,null)],null,null)}var o=t("3j3K"),r=t("2Je8"),i=t("TTAK");t.d(l,"b",function(){return d}),l.a=u;var a=[".complete[_ngcontent-%COMP%]{ text-decoration: line-through;color:gray} .pending[_ngcontent-%COMP%]{text-decoration:'';color:''}"],d=o._16({encapsulation:0,styles:a,data:{}});o._21("app-todo",i.a,e,{todo:"todo"},{toggleTodo:"toggleTodo"},[])},BoPW:function(n,l,t){"use strict";function u(n){return d._17(0,[(n()(),d._18(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),d._19(null,["+"]))],null,null)}function e(n){return d._17(0,[(n()(),d._18(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),d._19(null,["-"]))],null,null)}function o(n){return d._17(0,[(n()(),d._18(0,null,null,2,"app-tree-node-list",[],null,null,null,c.a,c.b)),d._20(49152,null,0,s.a,[],{nodes:[0,"nodes"]},null),(n()(),d._19(null,["\n        "]))],function(n,l){n(l,1,0,l.component.allChildren)},null)}function r(n){return d._17(0,[(n()(),d._18(0,null,null,13,"div",[],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.toggle(e.node)&&u}return u},null,null)),(n()(),d._19(null,["\n        "])),(n()(),d._25(16777216,null,null,1,null,u)),d._20(16384,null,0,f.h,[d._3,d._4],{ngIf:[0,"ngIf"]},null),(n()(),d._19(null,["\n        "])),(n()(),d._25(16777216,null,null,1,null,e)),d._20(16384,null,0,f.h,[d._3,d._4],{ngIf:[0,"ngIf"]},null),(n()(),d._19(null,["\n        "])),(n()(),d._18(0,null,null,1,"span",[["role","treeitem"]],[[2,"selected",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[1,"aria-selected",0],[1,"aria-label",0],[1,"tabindex",0],[1,"title",0]],null,null,null,null)),(n()(),d._19(null,["\n            ","\n        "])),(n()(),d._19(null,["\n   \n        "])),(n()(),d._25(16777216,null,null,1,null,o)),d._20(16384,null,0,f.h,[d._3,d._4],{ngIf:[0,"ngIf"]},null),(n()(),d._19(null,["\n    "]))],function(n,l){var t=l.component;n(l,3,0,t.showExpandButton),n(l,6,0,t.showCollapseButton),n(l,12,0,t.canShowChildren)},function(n,l){var t=l.component;n(l,8,0,t.node.selected,d._26(1,"",t.node.expanded,""),d._26(1,"",!t.node.expanded,""),d._26(1,"",t.node.selected,""),d._26(1,"",t.node.title,""),d._26(1,"",t.node.tabIndex,""),d._26(1,"",t.node.title,"")),n(l,9,0,t.node.title)})}function i(n){return d._17(2,[(n()(),d._19(null,["\n    "])),(n()(),d._25(16777216,null,null,1,null,r)),d._20(16384,null,0,f.h,[d._3,d._4],{ngIf:[0,"ngIf"]},null),(n()(),d._19(null,["\n  "]))],function(n,l){n(l,2,0,l.component.node)},null)}function a(n){return d._17(0,[(n()(),d._18(0,null,null,1,"app-tree-node",[],null,null,null,i,h)),d._20(4833280,null,0,p.a,[_.a],null,null)],function(n,l){n(l,1,0)},null)}var d=t("3j3K"),c=t("X2Sd"),s=t("fesk"),f=t("2Je8"),p=t("Zooh"),_=t("haX/");t.d(l,"b",function(){return h}),l.a=i;var g=[".selected[_ngcontent-%COMP%] {background-color:yellow}"],h=d._16({encapsulation:0,styles:g,data:{}});d._21("app-tree-node",p.a,a,{node:"node"},{},[])},Iksp:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(){}return n}()},"KM/C":function(n,l,t){"use strict";function u(n){return o._17(2,[(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,18,"div",[["class","container"]],null,null,null,null,null)),(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,15,"fieldset",[],null,null,null,null,null)),(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o._19(null,["Todo App"])),(n()(),o._19(null,["\n     "])),(n()(),o._18(0,null,null,2,"app-new-todo-input",[],null,[[null,"create"]],function(n,l,t){var u=!0,e=n.component;if("create"===l){u=!1!==e.addTodo(t)&&u}return u},i.a,i.b)),o._20(49152,null,0,a.a,[],null,{create:"create"}),(n()(),o._19(null,["\n     "])),(n()(),o._19(null,["\n     "])),(n()(),o._18(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,3,"app-todo-list",[],null,[[null,"toggleTodo"]],function(n,l,t){var u=!0,e=n.component;if("toggleTodo"===l){u=!1!==e.toggleTodo(t)&&u}return u},d.a,d.b)),o._20(49152,null,0,c.a,[],{todos:[0,"todos"]},{toggleTodo:"toggleTodo"}),o._22(131072,s.f,[o._11]),(n()(),o._19(null,["\n    "])),(n()(),o._19(null,["\n    "])),(n()(),o._19(null,["\n    "])),(n()(),o._19(null,["\n  "]))],function(n,l){var t=l.component;n(l,15,0,o._23(l,15,0,o._24(l,16).transform(t.todos$)))},null)}function e(n){return o._17(0,[(n()(),o._18(0,null,null,1,"app-todo-container",[],null,null,null,u,_)),o._20(49152,null,0,r.a,[f.a],null,null)],null,null)}var o=t("3j3K"),r=t("vwiM"),i=t("ljxR"),a=t("dxGl"),d=t("+8P/"),c=t("Sz1M"),s=t("2Je8"),f=t("Zcpd");t.d(l,"b",function(){return _}),l.a=u;var p=[],_=o._16({encapsulation:2,styles:p,data:{}});o._21("app-todo-container",r.a,e,{todos$:"todos$"},{},[])},Ni5f:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[""]},Nktb:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(){}return n.prototype.handleError=function(n){console.log("error",n)},n}()},"R07+":function(n,l,t){"use strict";t.d(l,"b",function(){return u}),t.d(l,"a",function(){return e}),t.d(l,"c",function(){return o}),t.d(l,"d",function(){return r});var u="[Tree] toggle node",e="[Tree] load",o=function(n){return{type:u,payload:n}},r=function(){return{type:e,payload:""}}},Sz1M:function(n,l,t){"use strict";var u=t("3j3K");t.d(l,"a",function(){return e});var e=function(){function n(){this.toggleTodo=new u.W,console.log("initialized","TodoListComponent")}return n.ctorParameters=function(){return[]},n}()},TTAK:function(n,l,t){"use strict";var u=t("3j3K");t.d(l,"a",function(){return e});var e=function(){function n(){this.toggleTodo=new u.W,console.log("constructor","TodoComponent")}return n.prototype.ngAfterViewInit=function(){console.log("ngAfterViewInit",""+this.todo.text)},n.prototype.ngOnChanges=function(){console.log("ngOnChanges",""+this.todo.text)},n.ctorParameters=function(){return[]},n}()},X2Sd:function(n,l,t){"use strict";function u(n){return r._17(0,[(n()(),r._18(0,null,null,4,"li",[["style","list-style: none"]],null,null,null,null,null)),(n()(),r._19(null,["\n        "])),(n()(),r._18(0,null,null,1,"app-tree-node",[],null,null,null,i.a,i.b)),r._20(4833280,null,0,a.a,[d.a],{node:[0,"node"]},null),(n()(),r._19(null,["\n    "]))],function(n,l){n(l,3,0,l.context.$implicit)},null)}function e(n){return r._17(2,[(n()(),r._19(null,["\n  "])),(n()(),r._18(0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),r._19(null,["\n    "])),(n()(),r._25(16777216,null,null,1,null,u)),r._20(802816,null,0,c.g,[r._3,r._4,r.m],{ngForOf:[0,"ngForOf"]},null),(n()(),r._19(null,["\n  "])),(n()(),r._19(null,["\n  "]))],function(n,l){n(l,4,0,l.component.nodes)},null)}function o(n){return r._17(0,[(n()(),r._18(0,null,null,1,"app-tree-node-list",[],null,null,null,e,p)),r._20(49152,null,0,s.a,[],null,null)],null,null)}var r=t("3j3K"),i=t("BoPW"),a=t("Zooh"),d=t("haX/"),c=t("2Je8"),s=t("fesk");t.d(l,"b",function(){return p}),l.a=e;var f=[],p=r._16({encapsulation:2,styles:f,data:{}});r._21("app-tree-node-list",s.a,o,{nodes:"nodes"},{},[])},YWx4:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(){}return n}()},Zooh:function(n,l,t){"use strict";var u=t("rCTf"),e=(t.n(u),t("1APj")),o=(t.n(e),t("haX/"));t.d(l,"a",function(){return r});var r=function(){function n(n){this.treeEvents=n,console.log("constructor","TreeNodeComponent")}return n.prototype.toggle=function(n){this.treeEvents.toggle(n.path)},n.prototype.ngOnInit=function(){console.log("ngOnInit "+this.node.title,this.node)},n.prototype.ngAfterViewInit=function(){console.log("ngAfterViewInit",""+this.node.title)},n.prototype.ngOnChanges=function(){console.log("ngOnChanges",""+this.node.title)},Object.defineProperty(n.prototype,"treeNodes",{get:function(){return u.Observable.of(this.node.nodes)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"expanded",{get:function(){return this.node.expanded},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasChildren",{get:function(){return console.log(this.node.title+" hasChildren: ",this.node.nodes.length>0),this.node.nodes.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showExpandButton",{get:function(){return!this.node.expanded&&this.hasChildren},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showCollapseButton",{get:function(){return this.node.expanded&&!this.hasChildren},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"canShowChildren",{get:function(){return this.hasChildren&&this.expanded},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"allChildren",{get:function(){return this.node.nodes},enumerable:!0,configurable:!0}),n.ctorParameters=function(){return[{type:o.a}]},n}()},b0gX:function(n,l,t){"use strict";var u=t("WWmu"),e=t("R07+"),o=t("3pbj"),r=t("haX/");t.d(l,"a",function(){return i});var i=function(){function n(n,l){this.store=n,this.treeEvents=l,console.log("initialized","TreeContainerComponent"),this.nodes$=n.select(o.b),l.toggle$.subscribe(this.onToggle.bind(this))}return n.prototype.onToggle=function(n){this.store.dispatch(e.c(n))},n.prototype.ngOnInit=function(){this.store.dispatch(e.d())},n.ctorParameters=function(){return[{type:u.h},{type:r.a}]},n}()},dxGl:function(n,l,t){"use strict";var u=t("3j3K");t.d(l,"a",function(){return e});var e=function(){function n(){this.create=new u.W}return n.prototype.saveTodo=function(l){this.create.emit({text:l.value,path:["todos",n.id]}),l.value="",n.id+=1},n}();e.id=0},fesk:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(){console.log("constructor","TreeNodeListComponent")}return n.ctorParameters=function(){return[]},n}()},"haX/":function(n,l,t){"use strict";var u=t("EEr4");t.n(u);t.d(l,"a",function(){return e});var e=function(){function n(){this._toggle=new u.Subject,this.toggle$=this._toggle.asObservable()}return n.prototype.toggle=function(n){this._toggle.next(n)},n}()},htgi:function(n,l,t){"use strict";var u=t("tpu8"),e=(t.n(u),t("R07+"));t.d(l,"a",function(){return r}),t.d(l,"b",function(){return i});var o={loading:!1,selectedPath:[],nodes:[{title:"core",nodes:[],expanded:!1,selected:!1,tabIndex:-1,path:["nodes",0]},{title:"shared",nodes:[],expanded:!1,selected:!1,tabIndex:-1,path:["nodes",1]},{title:"features",nodes:[{title:"find-book",expanded:!1,tabIndex:-1,selected:!1,path:["nodes",2,"nodes",0],nodes:[]}],expanded:!1,tabIndex:-1,selected:!1,path:["nodes",2]}]},r=function(n,l){switch(void 0===n&&(n=o),l.type){case e.a:return n;case e.b:return t.i(u.compose)(t.i(u.over)(t.i(u.lensPath)(t.i(u.append)("expanded",l.payload)),u.not),t.i(u.over)(t.i(u.lensPath)(t.i(u.append)("selected",l.payload)),u.not),t.i(u.over)(t.i(u.lensPath)(t.i(u.append)("tabIndex",l.payload)),function(n){return-1===n?0:-1}))(n);default:return n}},i=function(n){return n.nodes}},kZql:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u={production:!0}},kke6:function(n,l,t){"use strict";var u=t("3j3K"),e=t("Iksp"),o=t("YWx4"),r=t("1A80"),i=t("2Je8"),a=t("Qbdm"),d=t("NVOs"),c=t("Fzro"),s=t("MjDH"),f=t("uf2u"),p=t("cnKp"),_=t("osFu"),g=t("cPow"),h=t("oi6x"),b=t("2iB7"),v=t("NPiC"),y=t("Zcpd"),m=t("haX/"),x=t("Nktb"),T=t("3pbj");t.d(l,"a",function(){return w});var w=u.b(e.a,[o.a],function(n){return u.c([u.d(512,u.e,u.f,[[8,[r.a]],[3,u.e],u.g]),u.d(5120,u.h,u.i,[[3,u.h]]),u.d(4608,i.a,i.b,[u.h]),u.d(4608,u.j,u.j,[]),u.d(5120,u.k,u.l,[]),u.d(5120,u.m,u.n,[]),u.d(5120,u.o,u.p,[]),u.d(4608,a.b,a.c,[a.d]),u.d(6144,u.q,null,[a.b]),u.d(4608,a.e,a.f,[]),u.d(5120,a.g,function(n,l,t,u){return[new a.h(n),new a.i(l),new a.j(t,u)]},[a.d,a.d,a.d,a.e]),u.d(4608,a.k,a.k,[a.g,u.r]),u.d(135680,a.l,a.l,[a.d]),u.d(4608,a.m,a.m,[a.k,a.l]),u.d(6144,u.s,null,[a.m]),u.d(6144,a.n,null,[a.l]),u.d(4608,u.t,u.t,[u.r]),u.d(4608,a.o,a.o,[a.d]),u.d(4608,a.p,a.p,[a.d]),u.d(4608,d.a,d.a,[]),u.d(4608,c.a,c.a,[]),u.d(4608,c.b,c.c,[]),u.d(5120,c.d,c.e,[]),u.d(4608,c.f,c.f,[c.a,c.b,c.d]),u.d(4608,c.g,c.h,[]),u.d(5120,c.i,c.j,[c.f,c.g]),u.d(5120,s.a,f.a,[]),u.d(4608,s.b,s.b,[s.a]),u.d(4608,p.a,p.a,[]),u.d(4608,_.a,_.a,[]),u.d(5120,g.a,g.b,[g.c]),u.d(5120,h.a,f.b,[s.a,u.u,g.a]),u.d(5120,g.d,g.e,[g.f,g.a]),u.d(5120,b.a,f.c,[b.b]),u.d(4608,p.b,p.b,[p.a,_.a,h.a,s.b,g.d,b.a]),u.d(5120,v.a,f.d,[s.a,u.u,g.d]),u.d(5120,y.a,g.g,[_.a,h.a,v.a]),u.d(4608,m.a,m.a,[]),u.d(512,i.c,i.c,[]),u.d(512,u.v,x.a,[]),u.d(1024,u.w,function(n,l){return[a.q(n,l)]},[[2,a.r],[2,u.x]]),u.d(512,u.y,u.y,[[2,u.w]]),u.d(131584,u.z,u.z,[u.r,u.A,u.u,u.v,u.e,u.y]),u.d(2048,u.B,null,[u.z]),u.d(512,u.C,u.C,[u.B]),u.d(512,a.s,a.s,[[3,a.s]]),u.d(512,d.b,d.b,[]),u.d(512,d.c,d.c,[]),u.d(512,c.k,c.k,[]),u.d(512,g.h,g.h,[]),u.d(512,f.e,f.e,[]),u.d(512,e.a,e.a,[]),u.d(256,g.c,T.a,[]),u.d(256,g.f,void 0,[]),u.d(256,b.b,{},[])])})},ljxR:function(n,l,t){"use strict";function u(n){return o._17(2,[(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,3,"div",[["class","col-md-7"]],null,null,null,null,null)),(n()(),o._19(null,["\n      "])),(n()(),o._18(0,[["newtodo",1]],null,0,"input",[["class","form-control"],["placeholder","Add a todo"],["type","text"]],null,null,null,null,null)),(n()(),o._19(null,["\n      "])),(n()(),o._19(null,["\n      "])),(n()(),o._18(0,null,null,4,"div",[["class","col-md-5"]],null,null,null,null,null)),(n()(),o._19(null,["\n      "])),(n()(),o._18(0,null,null,1,"button",[["class","btn btn-info btn-lg"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.saveTodo(o._24(n,5))&&u}return u},null,null)),(n()(),o._19(null,["Add"])),(n()(),o._19(null,["\n      "])),(n()(),o._19(null,["\n    "])),(n()(),o._19(null,["\n  "]))],null,null)}function e(n){return o._17(0,[(n()(),o._18(0,null,null,1,"app-new-todo-input",[],null,null,null,u,a)),o._20(49152,null,0,r.a,[],null,null)],null,null)}var o=t("3j3K"),r=t("dxGl");t.d(l,"b",function(){return a}),l.a=u;var i=[],a=o._16({encapsulation:2,styles:i,data:{}});o._21("app-new-todo-input",r.a,e,{},{create:"create"},[])},tUNy:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return e}),t.d(l,"d",function(){return o}),t.d(l,"c",function(){return r});var u="[Todo] Add",e="[Todo] Toggle",o=function(n){return{type:u,payload:n}},r=function(n){return{type:e,payload:n}}},vwiM:function(n,l,t){"use strict";var u=t("WWmu"),e=t("tUNy"),o=t("3pbj");t.d(l,"a",function(){return r});var r=function(){function n(n){this.store=n,console.log("initialized","TodoContainerComponent"),this.todos$=n.select(o.c)}return n.prototype.toggleTodo=function(n){this.store.dispatch(e.c(n))},n.prototype.addTodo=function(n){this.store.dispatch(e.d(n))},n.ctorParameters=function(){return[{type:u.h}]},n}()},wPzF:function(n,l,t){"use strict";function u(n){return o._17(2,[(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,15,"div",[["class","container"]],null,null,null,null,null)),(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,12,"fieldset",[],null,null,null,null,null)),(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,1,"h2",[["id","ta"]],null,null,null,null,null)),(n()(),o._19(null,["Tree App"])),(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,6,"div",[["aria-labelledby","ta"],["role","tree"]],null,null,null,null,null)),(n()(),o._19(null,["\n    "])),(n()(),o._18(0,null,null,3,"app-tree-node-list",[],null,null,null,r.a,r.b)),o._20(49152,null,0,i.a,[],{nodes:[0,"nodes"]},null),o._22(131072,a.f,[o._11]),(n()(),o._19(null,["\n    "])),(n()(),o._19(null,["\n    "])),(n()(),o._19(null,["\n    "])),(n()(),o._19(null,["\n    "])),(n()(),o._19(null,["\n  "]))],function(n,l){var t=l.component;n(l,11,0,o._23(l,11,0,o._24(l,12).transform(t.nodes$)))},null)}function e(n){return o._17(0,[(n()(),o._18(0,null,null,1,"app-tree-container",[],null,null,null,u,p)),o._20(114688,null,0,d.a,[c.a,s.a],null,null)],function(n,l){n(l,1,0)},null)}var o=t("3j3K"),r=t("X2Sd"),i=t("fesk"),a=t("2Je8"),d=t("b0gX"),c=t("Zcpd"),s=t("haX/");t.d(l,"b",function(){return p}),l.a=u;var f=[],p=o._16({encapsulation:2,styles:f,data:{}});o._21("app-tree-container",d.a,e,{},{},[])},x35b:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=t("3j3K"),e=t("kZql"),o=t("Qbdm"),r=t("kke6");e.a.production&&t.i(u.a)(),t.i(o.a)().bootstrapModuleFactory(r.a)},ynji:function(n,l,t){"use strict";var u=t("tpu8"),e=(t.n(u),t("tUNy"));t.d(l,"a",function(){return r}),t.d(l,"b",function(){return i});var o={todos:[]},r=function(n,l){switch(void 0===n&&(n=o),l.type){case e.a:var r=function(n){return t.i(u.append)(l.payload,n)};return t.i(u.over)(t.i(u.lensPath)(["todos"]),r,n);case e.b:return t.i(u.over)(t.i(u.lensPath)(t.i(u.append)("complete",l.payload)),u.not,n);default:return n}},i=function(n){return n.todos}}},[0]);