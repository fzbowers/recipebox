"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1712],{1712:(v,u,r)=>{r.r(u),r.d(u,{AllrecipesPageModule:()=>C});var h=r(177),g=r(4341),o=r(8974),d=r(1626),p=r(7570),m=r(613),e=r(4438),f=r(3366);function A(s,l){if(1&s){const n=e.RV6();e.j41(0,"ion-item",19),e.bIt("click",function(){const i=e.eBV(n).$implicit,c=e.XpG();return e.Njj(c.goToRecipe(i.id.toString()))}),e.j41(1,"ion-label"),e.EFF(2),e.k0s(),e.j41(3,"ion-label",20),e.EFF(4),e.k0s()()}if(2&s){const n=l.$implicit;e.R7$(2),e.JRh(n.title),e.R7$(2),e.Lme("Time: ",n.time," ",n.time_unit,"")}}const M=[{path:"",component:(()=>{var s;class l{constructor(t,i){this._router=t,this.apiService=i,this.recipes=[],this.sortedRecipes=[],this.selectedSortingOption="dateCreatedDesc",this.searchQuery=""}ngOnInit(){this._router.events.subscribe(t=>{t instanceof p.wF&&"/allrecipes"===t.url&&this.loadRecipes()})}ionChange(t){console.log("search event: ",t.detail.value),this.searchQuery="",this._router.navigate(["/search",t.detail.value])}loadRecipes(){console.log("Loading recipes..."),this.apiService.get_all("recipes").subscribe({next:t=>{console.log("All recipes response:",t),this.recipes=t.recipes,this.sortRecipes()},error:t=>{console.error("Error getting all recipes:",t)},complete:()=>{}})}sortRecipes(){switch(console.log("Sorting recipes..."),this.selectedSortingOption){case"alphabetAsc":this.sortedRecipes=this.recipes.slice().sort((t,i)=>t.title.localeCompare(i.title));break;case"alphabetDesc":this.sortedRecipes=this.recipes.slice().sort((t,i)=>i.title.localeCompare(t.title));break;case"dateCreatedAsc":this.sortedRecipes=this.recipes.slice().sort((t,i)=>new Date(t.date).getTime()-new Date(i.date).getTime());break;case"dateCreatedDesc":this.sortedRecipes=this.recipes.slice().sort((t,i)=>new Date(i.date).getTime()-new Date(t.date).getTime());break;case"timeToMakeAsc":this.sortedRecipes=this.recipes.slice().sort((t,i)=>this.calculateTimeInMinutes(t.time,t.time_unit)-this.calculateTimeInMinutes(i.time,i.time_unit));break;case"timeToMakeDesc":this.sortedRecipes=this.recipes.slice().sort((t,i)=>this.calculateTimeInMinutes(i.time,i.time_unit)-this.calculateTimeInMinutes(t.time,t.time_unit));break;default:this.sortedRecipes=[...this.recipes]}console.log("Sorted recipes:",this.sortedRecipes)}calculateTimeInMinutes(t,i){return i===m.y.HOURS?60*t:t}goToAccount(){this._router.navigate(["/useraccount"])}goToRecipe(t){this._router.navigate(["/recipe",t])}goHome(){this._router.navigate(["/home"])}goRecipe(){this._router.navigate(["/singlerecipe"])}}return(s=l).\u0275fac=function(t){return new(t||s)(e.rXU(p.Ix),e.rXU(f.G))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-allrecipes"]],decls:33,vars:5,consts:[[3,"translucent"],["slot","start"],["color","primary"],["enterkeyhint","search","debounce","1000",1,"search",3,"ngModelChange","ionChange","ngModel"],[3,"fullscreen"],["collapse","condense"],["size","large"],["color","secondary"],["color","primary",1,"header"],[1,"ion-text-center"],["interface","popover","label","Sort By:","label-placement","floating",3,"ngModelChange","ionChange","ngModel"],["value","alphabetAsc"],["value","alphabetDesc"],["value","dateCreatedAsc"],["value","dateCreatedDesc"],["value","timeToMakeAsc"],["value","timeToMakeDesc"],[1,"recipe-list"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"],[1,"ion-text-right"]],template:function(t,i){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-menu-button",2),e.k0s(),e.j41(4,"ion-searchbar",3),e.mxI("ngModelChange",function(a){return e.DH7(i.searchQuery,a)||(i.searchQuery=a),a}),e.bIt("ionChange",function(a){return i.ionChange(a)}),e.k0s()()(),e.j41(5,"ion-content",4)(6,"ion-header",5)(7,"ion-toolbar")(8,"ion-title",6),e.EFF(9,"All Recipes"),e.k0s()()(),e.j41(10,"ion-card",7)(11,"ion-card-header",8)(12,"ion-card-title",9),e.EFF(13,"All Recipes"),e.k0s()(),e.j41(14,"ion-card-content")(15,"ion-card")(16,"ion-item")(17,"ion-select",10),e.mxI("ngModelChange",function(a){return e.DH7(i.selectedSortingOption,a)||(i.selectedSortingOption=a),a}),e.bIt("ionChange",function(){return i.sortRecipes()}),e.j41(18,"ion-select-option",11),e.EFF(19,"Alphabetical (A-Z)"),e.k0s(),e.j41(20,"ion-select-option",12),e.EFF(21,"Alphabetical (Z-A)"),e.k0s(),e.j41(22,"ion-select-option",13),e.EFF(23,"Date Created (Oldest first)"),e.k0s(),e.j41(24,"ion-select-option",14),e.EFF(25,"Date Created (Newest first)"),e.k0s(),e.j41(26,"ion-select-option",15),e.EFF(27,"Time to Make (Shortest first)"),e.k0s(),e.j41(28,"ion-select-option",16),e.EFF(29,"Time to Make (Longest first)"),e.k0s()()()(),e.j41(30,"ion-card")(31,"ion-list",17),e.DNE(32,A,5,3,"ion-item",18),e.k0s()()()()()),2&t&&(e.Y8G("translucent",!0),e.R7$(4),e.R50("ngModel",i.searchQuery),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(12),e.R50("ngModel",i.selectedSortingOption),e.R7$(15),e.Y8G("ngForOf",i.sortedRecipes))},dependencies:[h.Sq,g.BC,g.vS,o.QW,o.b_,o.I9,o.ME,o.tN,o.W9,o.eU,o.uz,o.he,o.nf,o.MC,o.S1,o.Nm,o.Ip,o.BC,o.ai,o.Je,o.Gw],styles:[".header[_ngcontent-%COMP%]{font-family:Yeseva One,serif;font-weight:400;font-style:normal}.recipe-list[_ngcontent-%COMP%]{margin-left:3%;margin-right:3%}"]}),l})()}];let R=(()=>{var s;class l{}return(s=l).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[p.iI.forChild(M),p.iI]}),l})(),C=(()=>{var s;class l{}return(s=l).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[h.MD,g.YN,o.bv,R,d.q1]}),l})()}}]);