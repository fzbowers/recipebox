"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4514],{4514:(y,g,a)=>{a.r(g),a.d(g,{UseraccountPageModule:()=>M});var m=a(177),l=a(4341),t=a(8974),h=a(7570),d=a(467),e=a(4438),U=a(1626),v=a(5721),f=a(3366);const p=[{path:"",component:(()=>{var n;class s{constructor(o,r,u,c){this.http=o,this._router=r,this.authService=u,this.apiService=c,this.searchQuery="",this.email="",this.username=""}ngOnInit(){this.loadUserInfo()}ionChange(o){console.log("search event: ",o.detail.value),this.searchQuery="",this._router.navigate(["/search",o.detail.value])}loadUserInfo(){this.apiService.get_all("useraccount").subscribe({next:o=>{console.log("User response:",o),this.user=o.user,this.email=this.user.email,this.username=this.user.username,console.log(this.username),console.log(this.email)},error:o=>{console.error("Error getting user:",o)},complete:()=>{}})}logout(){var o=this;return(0,d.A)(function*(){try{yield o.authService.logout()}catch(r){console.error("Logout failed:",r)}})()}goToAccount(){this._router.navigate(["/useraccount"])}goHome(){this._router.navigate(["/home"])}}return(n=s).\u0275fac=function(o){return new(o||n)(e.rXU(U.Qq),e.rXU(h.Ix),e.rXU(v.u),e.rXU(f.G))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-useraccount"]],decls:23,vars:6,consts:[[3,"translucent"],["slot","start"],["enterkeyhint","search","debounce","1000",1,"search",3,"ngModelChange","ionChange","ngModel"],[3,"fullscreen"],["collapse","condense"],["size","large"],["color","primary",1,"header"],[1,"ion-text-center"],["button","",3,"click"]],template:function(o,r){1&o&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-menu-button"),e.k0s(),e.j41(4,"ion-searchbar",2),e.mxI("ngModelChange",function(c){return e.DH7(r.searchQuery,c)||(r.searchQuery=c),c}),e.bIt("ionChange",function(c){return r.ionChange(c)}),e.k0s()()(),e.j41(5,"ion-content",3)(6,"ion-header",4)(7,"ion-toolbar")(8,"ion-title",5),e.EFF(9,"Login"),e.k0s()()(),e.j41(10,"ion-card")(11,"ion-card-header",6)(12,"ion-card-title",7),e.EFF(13),e.k0s()(),e.j41(14,"ion-card-content")(15,"ion-list")(16,"ion-item"),e.EFF(17),e.k0s(),e.j41(18,"ion-item"),e.EFF(19),e.k0s()(),e.nrm(20,"br"),e.j41(21,"ion-button",8),e.bIt("click",function(){return r.logout()}),e.EFF(22,"Logout"),e.k0s()()()()),2&o&&(e.Y8G("translucent",!1),e.R7$(4),e.R50("ngModel",r.searchQuery),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(8),e.SpI("Hello ",r.username,""),e.R7$(4),e.SpI(" Name: ",r.username," "),e.R7$(2),e.SpI(" Email: ",r.email," "))},dependencies:[l.BC,l.vS,t.Jm,t.QW,t.b_,t.I9,t.ME,t.tN,t.W9,t.eU,t.uz,t.nf,t.MC,t.S1,t.BC,t.ai,t.Gw]}),s})()}];let P=(()=>{var n;class s{}return(n=s).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[h.iI.forChild(p),h.iI]}),s})(),M=(()=>{var n;class s{}return(n=s).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[m.MD,l.YN,t.bv,P]}),s})()}}]);