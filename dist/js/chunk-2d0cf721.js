(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf721"],{"646c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"main-content",attrs:{id:"main-content"}},[a("div",{staticClass:"left-menu-tab new_tab"},[a("div",{staticClass:"left-menu-tab div-click-event hr_jobpost_a"},[a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"theme-primary partition"},[a("span",{staticClass:"p-name text-white textelipsis"},[e._v(e._s(e.$t("EventExpensesReport")))])])]),a("div",{staticClass:"pt-2 mb-1 w-100 d-none d-lg-block"},[a("div",{staticClass:"input-group customsearchbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.SearchText,expression:"SearchText"}],staticClass:"form-control border-right-0",attrs:{type:"text",maxlength:"50",placeholder:"Search By Name",autocomplete:"off"},domProps:{value:e.SearchText},on:{keyup:e.SearchTab,input:function(t){t.target.composing||(e.SearchText=t.target.value)}}}),e._m(0)])]),a("ul",{staticClass:"nav nav-pills flex-column left-tab mt-2 responivecustomtab",attrs:{id:"myTab",role:"tablist"}},["CA"==e.UserType||"NU"==e.UserType||"PM"==e.UserType?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link left-menu",class:{active:1==e.activeKey},attrs:{"data-bs-target":"#tab-overlimlit-content",href:"javascript:void(0)","data-bs-toggle":"tab",role:"tab",id:"tab-ExpenseOverLimit"},on:{click:function(t){return e.loadData("ExpenseOverLimit")}}},[a("em",{staticClass:"fa fa-print clsexpense",attrs:{"aria-hidden":"true","aria-selected":"true"}}),e._v(" "+e._s(e.$t("ExpenseOverLimit"))+" ")])]):e._e(),"CA"==e.UserType?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link left-menu",class:{active:2==e.activeKey},attrs:{"data-bs-target":"#tab-expensereport-content",href:"javascript:void(0)",id:"tab-expensereport","data-bs-toggle":"tab",role:"tab"},on:{click:function(t){return e.loadData("expensereport")}}},[a("em",{staticClass:"fa fa-file-text-o",attrs:{"aria-hidden":"true","aria-selected":"false"}}),e._v(" "+e._s(e.$t("ExpenseReport"))+" ")])]):e._e(),"CA"==e.UserType||"PM"==e.UserType?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link left-menu",class:{active:3==e.activeKey},attrs:{"data-bs-target":"#tab-Reimbursements-content",href:"javascript:void(0)",id:"tab-attachment","data-bs-toggle":"tab",role:"tab"},on:{click:function(t){return e.loadData("Reimbursements")}}},[a("em",{staticClass:"fa fa-file-pdf-o",attrs:{"aria-hidden":"true","aria-selected":"false"}}),e._v(" "+e._s(e.$t("Reimbursements"))+" ")])]):e._e()])])]),a("div",{staticClass:"right-content"},[a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"theme-primary partition p-actions-expand",staticStyle:{overflow:"visible"}},[a("span",{staticClass:"p-name text-white",attrs:{id:"spnreporttext"}},[e._v(e._s(this.headerText))])])]),a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[e._m(1),a("div",{staticClass:"tab-pane pb-2",class:{"active show":1==e.activeKey},attrs:{role:"tabpanel",id:"tab-overlimlit-content","aria-labelledby":"tab-overlimlit-content"}},[a("div",{attrs:{id:"listing"}},[a("div",{staticClass:"col-md-12 p-0"},[a("Form",{ref:"Expenseform"},[a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)],1)])]),e.expensereportTab?a("div",{staticClass:"tab-pane pb-2",class:{"active show":2==e.activeKey},attrs:{role:"tabpanel",id:"tab-expensereport-content","aria-labelledby":"tab-expensereport-content"}},[a("div",{staticClass:"listing"},[a("Form",{ref:"Expenseform"},[a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema1},on:{OnSubmit:e.onSubmit1}})],1)],1)]):e._e(),e.ReimbursementsTab?a("div",{staticClass:"tab-pane pb-2",class:{"active show":3==e.activeKey},attrs:{role:"tabpanel",id:"tab-Reimbursements-content","aria-labelledby":"tab-Reimbursements-content"}},[a("div",{staticClass:"listing"},[a("Form",{ref:"Expenseform"},[a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema2},on:{OnSubmit:e.onSubmit2}})],1)],1)]):e._e(),a("div",{staticClass:"col-lg-12 float-left p-0 "},[a("div",{staticClass:"col-md-12  placeholder border mt-0 py-3 w-100 float-left border-top-0"},[e.parameter.length>0?a("ReportViewer",{attrs:{parameter:e.parameter,reportPath:e.reportPath}}):e._e()],1)])])])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text bg-transparent bg-white border-left-0"},[a("i",{staticClass:"fa fa-search"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"expand-list"},[a("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])}],i=a("9769"),s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"600px"}},[a("div",{staticStyle:{width:"100%","min-height":"650px","margin-bottom":"0%",height:"auto"},attrs:{id:"viewer"}})])}],l={props:{reportPath:null,parameter:null},data:function(){return{Token:null}},created:function(){this.Token=this.GetUserInfo.Token},mounted(){var e=this;setTimeout((function(){$("#viewer").boldReportViewer({reportServiceUrl:"http://localhost:12597/api/ReportViewer",reportPath:e.reportPath,processingMode:"Remote",parameters:e.parameter,reportServerUrl:"http://192.168.0.200/ReportServer",ajaxBeforeLoad:e.setReportToken})}),2e3)},methods:{setReportToken:function(e){e.headers.push({Key:"content-type",Value:"application/json;charset=UTF-8"}),e.headers.push({Key:"Authorization",Value:"Bearer "+this.Token})}}},c=l,p=a("2877"),m=Object(p["a"])(c,s,n,!1,null,null,null),u=m.exports,d={components:{ReportViewer:u},data:function(){return{UserType:null,SearchText:"",activeKey:1,headerText:"Expense Over Limit",FormSchema:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:"Project",name:"Project",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!1}},{astype:"MultiSelectField",label:"Category",name:"Category",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!1}},{astype:"CheckBoxField",label:"Over Limit",name:"OverLimit",value:"",placeholder:"",validationRules:{required:!1},config:{options:[{value:"1"}]}},{astype:"DateField",label:"Date From (M/D/YYYY)",name:"ExpenseDateFrom",value:"",placeholder:"M/D/YYYY",validationRules:{required:!1},config:{format:"MM/DD/YYYY"}},{astype:"DateField",label:"Date To (M/D/YYYY)",name:"ExpenseDateTo",value:"",placeholder:"M/D/YYYY",validationRules:{required:!1},config:{format:"MM/DD/YYYY"}}]}],FormSchema1:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:"Project",name:"Project",value:"",placeholder:"Select",config:{options:[],onChange:this.onChangeDropdown},validationRules:{required:!1}},{astype:"MultiSelectField",label:"Category",name:"Category",value:[],placeholder:"Select",config:{options:[]},validationRules:{required:!1}},{astype:"MultiSelectField",label:"Trip",name:"Trip",value:[],placeholder:"Select",config:{options:[]},validationRules:{required:!1}},{astype:"MultiSelectField",label:"User",name:"User",value:[],placeholder:"Select",config:{options:[]},validationRules:{required:!1}},{astype:"MultiSelectField",label:"Approver",name:"Approver",value:[],placeholder:"Select",config:{options:[]},validationRules:{required:!1}},{astype:"MultiSelectField",label:"Status",name:"Status",value:[],placeholder:"Select",config:{options:[]},validationRules:{required:!1}},{astype:"TextField",label:this.$t("ExpenseTitletext"),name:"ExpenseTitle",value:"",placeholder:"",validationRules:{required:!1,max:250}},{astype:"DateField",label:"Date From (M/D/YYYY)",name:"ExpenseDateFrom",value:"",placeholder:"M/D/YYYY",validationRules:{required:!1},config:{format:"MM/DD/YYYY"}},{astype:"DateField",label:"Date To (M/D/YYYY)",name:"ExpenseDateTo",value:"",placeholder:"M/D/YYYY",validationRules:{required:!1},config:{format:"MM/DD/YYYY"}},{astype:"RadioField",label:"Group By",name:"GroupBy",value:"1",config:{options:[{value:"1",name:"Project"},{value:"2",name:"Category"},{value:"3",name:"Trip"}]},validationRules:{required:!1}}]}],FormSchema2:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:"Project",name:"Project",value:[],placeholder:"Select",config:{options:[]},validationRules:{required:!1}},{astype:"MultiSelectField",label:"The Approver",name:"TheApprover",value:[],placeholder:"Select",config:{options:[]},validationRules:{required:!1}},{astype:"MultiSelectField",label:"User",name:"User",value:[],placeholder:"Select",config:{options:[]},validationRules:{required:!1}},{astype:"RadioField",label:"Group By",name:"GroupBy",value:"1",config:{options:[{value:"1",name:"Company"},{value:"2",name:"Client"}]},validationRules:{required:!1}},{astype:"DateField",label:"Date From (M/D/YYYY)",name:"ExpenseDateFrom",value:"",placeholder:"M/D/YYYY",validationRules:{required:!1},config:{format:"MM/DD/YYYY"}},{astype:"DateField",label:"Date To (M/D/YYYY)",name:"ExpenseDateTo",value:"",placeholder:"M/D/YYYY",validationRules:{required:!1},config:{format:"MM/DD/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear All",onClick:this.onClear}],reportPath:null,parameter:[],ExpenseOverLimittab:!0,expensereportTab:!1,ReimbursementsTab:!1,componentKey:0}},created:function(){this.GetProjectByCompanyIdAndUserId(),this.GetAllCategoriesByCompanyId(),this.ExpenseGetApproverListing(),this.GetTripNameDDL(),this.GetStatusList("Expense","en"),this.UserType=this.GetUserInfo.UserType,this.GetUsersByProjectIds()},methods:{SearchTab:function(e){var t=this.SearchText;$("ul#myTab").find("li").each((function(){t=t.toLowerCase();var e=$(this).find("a").text().toLowerCase();e.includes(t)?$(this).closest("li").show():$(this).closest("li").hide()}))},loadData:function(e){var t=this;"expensereport"==e?(t.activeKey=2,t.ExpenseOverLimittab=!1,t.expensereportTab=!0,t.Reimbursements=!1,t.headerText="Expense Report",t.parameter=[],t.componentKey=1):"Reimbursements"==e?(t.activeKey=3,t.ExpenseOverLimittab=!1,t.expensereportTab=!1,t.ReimbursementsTab=!0,t.headerText="Reimbursements",t.parameter=[],t.componentKey=2):(t.activeKey=1,t.ExpenseOverLimittab=!0,t.expensereportTab=!1,t.ReimbursementsTab=!1,t.headerText="Expense Over limit",t.parameter=[],t.componentKey=0)},onClear:function(){var e=this;1==e.componentKey?(e.FormSchema1[0].Data[0].value=[],e.FormSchema1[0].Data[1].value=[],e.FormSchema1[0].Data[2].value=[],e.FormSchema1[0].Data[3].value=[],e.FormSchema1[0].Data[4].value=[],e.FormSchema1[0].Data[5].value=[],e.FormSchema1[0].Data[6].value="",e.FormSchema1[0].Data[7].value="",e.FormSchema1[0].Data[8].value="",e.FormSchema1[0].Data[9].value="",e.parameter=[]):2==e.componentKey?(e.FormSchema2[0].Data[0].value=[],e.FormSchema2[0].Data[1].value=[],e.FormSchema2[0].Data[2].value=[],e.FormSchema2[0].Data[3].value="",e.FormSchema2[0].Data[4].value="",e.FormSchema2[0].Data[5].value="",e.parameter=[]):(e.FormSchema[0].Data[0].value=[],e.FormSchema[0].Data[1].value=[],e.FormSchema[0].Data[2].value="",e.FormSchema[0].Data[3].value="",e.FormSchema[0].Data[4].value="",e.parameter=[])},GetProjectByCompanyIdAndUserId:function(){var e=this;i["a"].GetProjectByCompanyIdAndUserId().then((function(t){t.data.forEach((t,a)=>{e.FormSchema[0].Data[0].config.options.push({value:t.projectId,name:t.projectName}),e.FormSchema2[0].Data[0].config.options.push({value:t.projectId,name:t.projectName}),e.FormSchema1[0].Data[0].config.options.push({value:t.projectId,name:t.projectName})})}))},GetAllCategoriesByCompanyId:function(){var e=this;i["a"].GetAllCategoriesByCompanyId().then((function(t){t.data.forEach((t,a)=>{e.FormSchema[0].Data[1].config.options.push({value:t.expensE_CATEGORY_ID,name:t.categorY_NAME}),e.FormSchema1[0].Data[1].config.options.push({value:t.expensE_CATEGORY_ID,name:t.categorY_NAME})})}))},ExpenseGetApproverListing:function(){let e={};var t=this;e["IsEncrptedId"]="",e["moduleName"]="Expenses",i["a"].ExpenseGetUserListing(e).then((function(e){e.data.forEach((e,a)=>{t.FormSchema2[0].Data[1].config.options.push({value:e.value,name:e.name}),t.FormSchema2[0].Data[2].config.options.push({value:e.value,name:e.name}),t.FormSchema1[0].Data[4].config.options.push({value:e.value,name:e.name})})}))},GetTripNameDDL:function(){var e=this;i["a"].GettTripListingddl().then((function(t){t.data.forEach((t,a)=>{e.FormSchema1[0].Data[2].config.options.push({value:t.TRIP_ID,name:t.TRIP_NAME})})}))},GetStatusList:function(e,t){var a=this,r="langCode="+t+"&statusType="+e+"&hasglobal=true";i["a"].GetStatusList(r).then((function(e){let t={};e.data.forEach(e=>{t="ApprovalPending"==e.STATUS?{value:e.STATUS_ID,name:"Approval Pending"}:"SentForCorrection"==e.STATUS?{value:e.STATUS_ID,name:"Send For Correction"}:{value:e.STATUS_ID,name:e.STATUS},a.FormSchema1[0].Data[5].config.options.push(t)})}))},onSubmit:function(e){var t=this,a="",r="";e.Project.forEach(e=>{a+=e.value+","}),e.Category.forEach(e=>{r+=e.value+","});var o={reportName:"expenseoverlimit",moduleName:"Expense",projectIds:a,categoryIds:r,dateFrom:e.ExpenseDateFrom,dateTo:e.ExpenseDateTo,expenseOverLimit:"1"==e.OverLimit?1:0},s=JSON.stringify(o);i["a"].ReportMain(s).then(e=>{t.reportPath=e.data.reportpath,t.parameter=e.data.parameters})},onSubmit1:function(e){var t=this,a="",r="",o="",s="",n="",l="";e.Project.forEach(e=>{a+=e.value+","}),e.Category.forEach(e=>{r+=e.value+","}),e.Approver.forEach(e=>{o+=e.value+","}),e.Trip.forEach(e=>{s+=e.value+","}),e.User.forEach(e=>{n+=e.value+","}),e.Status.forEach(e=>{l+=e.value+","});var c={reportName:"expensereport",moduleName:"Expense",projectIds:a,categoryIds:r,dateFrom:e.ExpenseDateFrom,dateTo:e.ExpenseDateTo,approverIds:o,tripIds:s,userIds:n,StatusIds:l,expTitle:e.ExpenseTitle,groupByVal:e.GroupBy},p=JSON.stringify(c);i["a"].ReportMain(p).then(e=>{t.reportPath=e.data.reportpath,t.parameter=e.data.parameters})},onSubmit2:function(e){var t=this,a="",r="",o="";e.Project.forEach(e=>{a+=e.value+","}),e.TheApprover.forEach(e=>{r+=e.value+","}),e.User.forEach(e=>{o+=e.value+","});var s={reportName:"reimbursementreport",moduleName:"Expense",projectIds:a,dateFrom:e.ExpenseDateFrom,dateTo:e.ExpenseDateTo,approverIds:r,userIds:o,groupByVal:e.GroupBy},n=JSON.stringify(s);i["a"].ReportMain(n).then(e=>{t.reportPath=e.data.reportpath,t.parameter=e.data.parameters})},GetUsersByProjectIds:function(e){var t=this,a="projectIds=&moduleName=Project";i["a"].GetUsersByProjectIds(a).then((function(e){e.data.forEach(e=>{t.FormSchema1[0].Data[3].config.options.push({value:""+e.USER_ID,name:e.USER_NAME})})}))}}},v=d,h=Object(p["a"])(v,r,o,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0cf721.js.map