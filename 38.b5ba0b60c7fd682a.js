"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[38],{4038:(z,l,o)=>{o.r(l),o.d(l,{CountriesModule:()=>D});var u=o(9808),d=o(325),m=o(6087),p=o(4850),h=o(2986),t=o(5e3),g=o(3582),c=o(9224),C=o(7423),f=o(5245),v=o(953),S=o(3160);const Z=function(){return[20,50,100]},y=[{path:"",component:(()=>{class n{constructor(e){this.locationService=e,this.columns=[{title:"id",col:"id"},{title:"Nombre",col:"name"},{title:"C\xf3digo",col:"code"}],this.pageDefault=1,this.perPage=10,this.orden="desc",this.filter="",this.result=this.locationService.resultItems$}paginatorChange(e){this.getCities(e.pageIndex+1,e.pageSize)}ngOnInit(){this.getCities(this.pageDefault,this.perPage,this.filter,this.orden)}getCities(e,a,i,r){this.subcription=this.locationService.getItems(e,a,i,r,"countries").subscribe(M=>this.loadData())}loadData(){this.dataSource=this.result.pipe((0,p.U)(e=>e.data.data.map(i=>({id:i.id,code:i.code,name:i.name})))),this.totalResut=this.result.pipe((0,p.U)(e=>e.data.total))}search(e){this.getCities(this.pageDefault,this.perPage,e,this.orden)}openDialog(e){this.locationService.openDialog("countries",e)}itemAction(e){"delete"===e.action&&this.deleteItem(e.element.id).pipe((0,h.q)(1)).subscribe(),"edit"===e.action&&this.openDialog(e.element)}deleteItem(e){return this.locationService.deleteLocation(e,"countries")}ngOnDestroy(){this.subcription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.a))},n.\u0275cmp=t.Xpm({type:n,selectors:[["mvd-countries"]],viewQuery:function(e,a){if(1&e&&t.Gf(m.NW,7),2&e){let i;t.iGM(i=t.CRH())&&(a.paginator=i.first)}},decls:19,vars:11,consts:[[1,"card","mat-elevation-z16","animate__animated","animate__slideInRight"],[1,"actions"],["mat-flat-button","","color","primary",3,"click"],[1,"material-icons-round"],[3,"noteFilterBy","changeSearch"],[3,"columns","dataSource","actionChange"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"],[1,"border"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),t._uU(3,"Pa\xedses"),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5,"Administrar Pa\xedses"),t.qZA(),t.TgZ(6,"div",1)(7,"button",2),t.NdJ("click",function(){return a.openDialog()}),t.TgZ(8,"mat-icon",3),t._uU(9,"add"),t.qZA(),t.TgZ(10,"span"),t._uU(11,"Crear"),t.qZA()()(),t.TgZ(12,"mvd-input-search",4),t.NdJ("changeSearch",function(r){return a.search(r)}),t.qZA()(),t.TgZ(13,"mat-card-content")(14,"mvd-data-table",5),t.NdJ("actionChange",function(r){return a.itemAction(r)}),t.ALo(15,"async"),t.qZA(),t.TgZ(16,"mat-paginator",6),t.NdJ("page",function(r){return a.paginatorChange(r)}),t.ALo(17,"async"),t.qZA()(),t._UZ(18,"span",7),t.qZA()),2&e&&(t.xp6(12),t.Q6J("noteFilterBy","Filtra por Nombre, Id o Coordenadas"),t.xp6(2),t.Q6J("columns",a.columns)("dataSource",t.lcZ(15,6,a.dataSource)),t.xp6(2),t.Q6J("length",t.lcZ(17,8,a.totalResut))("pageSize",a.perPage)("pageSizeOptions",t.DdM(10,Z)))},directives:[c.a8,c.dk,c.n5,c.$j,C.lW,f.Hw,v.V,c.dn,S.Q,m.NW],pipes:[u.Ov],styles:[""]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(y)],d.Bz]}),n})();var T=o(8203);let D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,A,T.m]]}),n})()}}]);