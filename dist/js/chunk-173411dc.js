(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-173411dc"],{4758:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("tg-list",{attrs:{listType:["List"],IsShowAction:!0,ModuleName:"ExpenseApproval",SubModuleCode:"ExpenseApproval",IdentityColumn:"EXPENSEID",showCheckBox:!0,HeaderText:e.$t("ExpenseApproval"),ListData:e.ExpenseApprovalData,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,SortExp:e.SortExp,SortBy:e.SortBy,LegendArray:e.LegendArray,NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var s=t.data;return["Status"==s.column.COLUMN_NAME?[a("a",{staticClass:"inactive-disabled"},["SentForCorrection"!=s.row.Status?a("span",{class:e.getStatusClass(s.row.Status,"Status")},[e._v(" "+e._s(s.row[s.column.COLUMN_NAME])+" ")]):e._e(),"SentForCorrection"==s.row.Status?a("span",{class:e.getStatusClass(s.row.Status,"Status")},[e._v(" "+e._s(e.$t("SentForCorrection"))+" ")]):e._e()])]:e._e(),"Amount"==s.column.COLUMN_NAME?[e._v(" "+e._s(e.convertDecimalValueInFormat(s.row.Amount)+" "+s.row.ISO_CODE)+" ")]:e._e()]}}])}),e.showCommentModal?a("ExpenseComments",{attrs:{access:e.access,expenseid:e.expid,CommentHeader:e.CommentHeader,isSingleCommentforMultipleExpenses:e.isSingleCommentforMultipleExpenses,statuscode:e.statuscode,visibility:e.visibility},on:{CloseExpenseComments:function(t){return e.CloseExpenseComments()},fetchdata:function(t){return e.fetchdata()}}}):e._e(),e.showApproverStatusModal?a("ExpenseApproverStatus",{attrs:{expenseid:e.expid},on:{CloseExpenseApproverStatus:function(t){return e.CloseExpenseApproverStatus()}}}):e._e(),e.showFileModal?a("ExpenseAttachents",{attrs:{expenseid:e.expid,code:e.statuscode},on:{CloseExpenseAttachments:e.CloseExpenseAttachments}}):e._e()],1)},i=[],o=(a("5319"),a("9769"));let n=[{title:"Page Tour",iconClass:"fa fa-road",callbackfunction:"setTourGuideSteps",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Approve",iconClass:"fa fa-check",callbackfunction:"SendForApprovalApprove",additionalClass:"",isdisabled:!0,isvisible:!0,id:"SendForApprove"},{title:"Reject",iconClass:"fa fa-close",callbackfunction:"SendForApprovalReject",additionalClass:"",isdisabled:!0,isvisible:!0,id:"SendForReject"},{title:"View History",iconClass:"fa fa-history",callbackfunction:"ViewHistory",additionalClass:"",isdisabled:!1,isvisible:!0,id:"ViewHistory"}],r=[{fieldName:"DATE",fieldType:"date-range",fieldIcon:"fa-calendar",paramName:"dateFrom",fieldSearchConditionName:["expense_date|expense_date"],isSearch:!1,datePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},secondDatePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},value:"",secondValue:"",listOptions:[]},{fieldName:"Project",fieldType:"ddl-check",fieldIcon:"fa-file",paramName:"projectId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"User",fieldType:"ddl-check",fieldIcon:"fa fa-file-text-o",paramName:"userId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Show Data",fieldType:"ddl-check",fieldIcon:"fa fa-file-text-o",paramName:"showData",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[{value:"My Approvals",name:"My Approvals"},{value:"All Approvals",name:"All Approvals"}]}],l=[{title:"View Attached Files",href:"javascript:void(0)",icon:"fa fa-download",additionalSpan:"",callbackfunction:"downloadAttachment"},{title:"Comments",callbackfunction:"openAddNewEvent",href:"javascript:void(0)",icon:"fa fa-comment",additionalSpan:""},{title:"Send For Correction",callbackfunction:"SendForCorrection",href:"javascript:void(0)",icon:"fa fa-send-o",additionalSpan:""},{title:"Approver Status",callbackfunction:"ApproverStatus",href:"javascript:void(0)",icon:"fa fa-eye",additionalSpan:""}];function c(e,t,a,s){var i=e;let n={};n["type"]=t,n["IsEncrptedId"]=a,n["moduleName"]=s,"Project"==t&&o["a"].ExpenseGetProjectListing(n).then((function(e){var t=e.data;if(null!=t)return t.forEach((function(e,t){let a={name:e.name,value:""+e.value};i.leftSearchFields[1].listOptions.push(a)})),i.$parent.ExpenseGetProjectList=t})),"User"==t&&o["a"].ExpenseGetUserListing(n).then((function(e){var t=e.data;if(null!=t)return t.forEach((function(e,t){let a={name:e.name,value:""+e.value};i.leftSearchFields[2].listOptions.push(a)})),i.$parent.ExpenseGetUserList=t}))}var d={buttons:n,leftsearchSchema:r,listActions:l,bindleftCommonSearchdropdown:c},p=a("9d1d"),m=a("5333"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v(" "+e._s(e.$t("ApproverStatus"))+" ")]),a("button",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(t){return e.CloseExpenseApproverStatus(e.event)}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[e.noRecordForTab?e._e():a("div",{staticClass:"table-responsive table-fix-header"},[a("table",{staticClass:"table dt-responsive nowrap mt-0",attrs:{id:"table-openactivities-content"}},[a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",[a("span",[e._v(e._s(e.$t("ApprovalGroupName")))])]),a("th",[a("span",[e._v(e._s(e.$t("Header_User")))])]),a("th",[a("span",[e._v(e._s(e.$t("Status")))])])])]),a("tbody",e._l(e.ExpenseApproverStatusData,(function(t,s){return a("tr",{key:s},[a("td",[e._v(e._s(t.APPROVAL_GROUP_NAME))]),a("td",[e._v(e._s(t.USERS))]),a("td",[e._v(e._s(t.STATUS))])])})),0)])]),e.noRecordForTab?a("div",{staticClass:"text-center text-danger p-4 border no-record"},[e._v(e._s(e.$t("NoRecordfound")))]):e._e()])])])])],1)},h=[],v={props:{expenseid:{type:String,required:!0}},data:function(){return{isLoading:!1,ExpenseApproverStatusData:null,noRecordForTab:!1}},created:function(){this.FetchData()},methods:{CloseExpenseApproverStatus:function(e){this.$emit("CloseExpenseApproverStatus",e)},FetchData:function(){var e=this;e.isLoading=!0;var t=`id=${e.expenseid}&approvalTypeId=2&approvalChainId=0&approverOrder=0`;o["a"].ExpenseApproverStatusListing(t).then((function(t){null!=t.data&&t.data.length>0?e.ExpenseApproverStatusData=t.data:(e.noRecordForTab=!0,e.ExpenseApproverStatusData=[]),e.isLoading=!1}))}}},C=v,f=a("2877"),E=Object(f["a"])(C,u,h,!1,null,null,null),S=E.exports,A={components:{ExpenseComments:p["a"],ExpenseApproverStatus:S,ExpenseAttachents:m["a"]},data(){return{isLoading:!1,widgets:[],showFileModal:!1,searchCondition:"",TotalRecords:0,PageNumber:1,PageSize:10,SortBy:"",SortExp:"",noRecord:!1,CurrentPage:1,TotalPages:0,ExpenseApprovalData:[],Headers:[{COLUMN_NAME:"Date",DATA_TYPE:"date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Date",DISPLAY_ORDER:1},{COLUMN_NAME:"Title",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Title",DISPLAY_ORDER:2},{COLUMN_NAME:"UserName",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("UserName"),DISPLAY_ORDER:3},{COLUMN_NAME:"Category",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Category",DISPLAY_ORDER:4},{COLUMN_NAME:"Project",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Project_Name"),DISPLAY_ORDER:5},{COLUMN_NAME:"Amount",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Amount",DISPLAY_ORDER:6,settings:{isInSlot:!0}}],listheaderbuttons:d.buttons,leftSearchFields:d.leftsearchSchema,listActions:d.listActions,ExpenseGetProjectList:null,ExpenseGetUserList:null,showCommentModal:!1,CommentHeader:null,UserName:null,isSingleCommentforMultipleExpenses:null,statuscode:"",showApproverStatusModal:!1,IsShowAction:!0,visibility:!0,access:!0,LegendArray:[],showData:""}},created:function(){var e=this;d.bindleftCommonSearchdropdown(e,"Project","no",""),d.bindleftCommonSearchdropdown(e,"User","","EXPENSEAPPROVAL"),d.bindleftCommonSearchdropdown(e,"Show Data","",""),e.FetchData(),e.UserName=e.GetUserInfo.Name,e.LegendArray=[{class:"legend-pending colorboxsquare",text:e.$t("DueExpenses",["Expenses"])},{class:"legends_profile colorboxsquare",text:e.$t("OverdueExpenses",["Expenses"])}]},methods:{FetchData:function(){var e=this;e.isLoading=!0;var t=`pageSize=${e.PageSize}&pageNum=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&${e.searchCondition}`;o["a"].ExpenseApprovalListing(t).then((function(t){if(e.isLoading=!1,null!=t.data&&""!=t.data)if(e.ExpenseApprovalData=t.data,e.ExpenseApprovalData.length>0){for(var a in e.ExpenseApprovalData)e.ExpenseApprovalData[a].isCheckBoxDisabled=!1,"ApprovalPending"!=e.ExpenseApprovalData[a].Status&&(e.ExpenseApprovalData[a].isCheckBoxDisabled=!0);e.ExpenseApprovalData.forEach(e=>{e.additionalClass="",e.EXPENSESCONSIDEREDASOVERDUE<=0&&(e.additionalClass="high-bar"),e.QuicklyExpenseMustBeApproved>=0&&(e.additionalClass="high-profile-bar")}),e.TotalRecords=e.ExpenseApprovalData[0].TotalRecords,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1}else e.noRecord=!0,e.ExpenseApprovalData=[],e.TotalRecords=0;else e.noRecord=!0,e.ExpenseApprovalData=[],e.TotalRecords=0;setTimeout((function(){e.CheckBoxBootstrap()}),100),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500)}))},DisableInputBox:function(e){var t="";switch(e){case"Approved":case"Active":case"ApprovalPending":t="disbaled";break;case"Rejected":case"SentForCorrection":case"Draft":default:t=""}return t},renderActions:function(e){var t=this;let a=[];return t.listActions.forEach(t=>{let s={...t};switch(s.title){case"ViewAttchedFiles":s.isVisible=0!=e.FILESCOUNT;break;case"Comments":s.isVisible=0!=e.filescount;break;case"Send For Correction":s.isVisible=0!=e.commentscount||"ACT"!=e.status_code;break;case"ApproverStatus":s.isVisible=1==e.UseSequence||0==e.UseSequence&&"Approved"==e.Status;break;default:s.isVisible=!0}a.push(s)}),a},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?(this.searchCondition=e.searchConditionJson,this.searchCondition=this.searchCondition.replace("|","&dateTo=")):this.searchCondition="",this.FetchData()},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},actionButtonClick:function(e,t){switch(e){case"Edit":break;case"openAddNewEvent":this.openAddNewEvent(t);break;case"SendForCorrection":this.commonApproval("EXP_SEND_FOR_CORRECTION");break;case"ApproverStatus":this.ApproverStatus(t);break;case"downloadAttachment":this.OpenFileModal(t);break}},CloseExpenseAttachments:function(){this.showFileModal=!1},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"setTourGuideSteps":this.setTourGuideSteps(0);break;case"SendForApprovalApprove":this.CheckPrivilage("EXP_APPROVED");break;case"SendForApprovalReject":this.CheckPrivilage("EXP_REJECTED");break;case"ViewHistory":this.ViewHistoryList();break}},ViewHistoryList:function(){this.privilegeParams="controller=ExpenseApproval&action=",o["a"].CheckPrivilege(this.privilegeParams+"History").then(e=>{1==e.data?this.$router.push({name:"ExpenseHistory"}):this.ShowAlert(this.$t("NotAuthorizedSection"),"failure",!0,"Alert")})},CloseExpenseComments:function(){this.showCommentModal=!1},CheckPrivilage:function(e){var t=this;t.privilegeParams="EXP_APPROVED"==e?"controller=ApprovalRule&action=AddApproverStatusAsync":"controller=ApprovalRule&action=AddApproverStatusAsyncReject",o["a"].CheckPrivilege(t.privilegeParams).then(a=>{1==a.data?t.commonApproval(e):t.ShowAlert(t.$t("NotAuthorizedSection"),"failure",!0,"Alert")})},commonApproval:function(e){var t=this;t.CommentHeader=`Comment for ${t.UserName} Expense Approval`,t.isSingleCommentforMultipleExpenses=1;for(var a=$("input.chkItems:checked"),s="",i=0;i<a.length;i++){var o=$(a[i]).val(),n=0,r=0,l=0;""==n&&(n=0),s=0==i?o+"$"+n+"$"+r+"$"+l+"$":s+","+o+"$"+n+"$"+r+"$"+l+"$",1}t.showCommentModal=!0,t.expid=s,t.statuscode=e,t.visibility=1,t.access=1},openAddNewEvent:function(e){this.privilegeParams="controller=Comment&action=",o["a"].CheckPrivilege(this.privilegeParams+"CommentsList").then(t=>{1==t.data?(this.CommentHeader="Comment",this.isSingleCommentforMultipleExpenses=0,this.showCommentModal=!0,this.statuscode=null,this.expid=e.EXPENSEID,this.visibility=1,this.access=0):this.ShowAlert(this.$t("NotAuthorizedSection"),"failure",!0,"Alert")})},OpenFileModal:function(e){this.showFileModal=!0,this.expid=e.EXPENSEID,this.statuscode=e.status_code},ApproverStatus:function(e){this.privilegeParams="controller=ApprovalRule&action=",o["a"].CheckPrivilege(this.privilegeParams+"ListPriorPendingApprovalGroup").then(t=>{1==t.data?(this.showApproverStatusModal=!0,this.expid=e.EXPENSEID):this.ShowAlert(this.$t("NotAuthorizedSection"),"failure",!0,"Alert")})},CloseExpenseApproverStatus:function(){this.showApproverStatusModal=!1}}},_=A,b=Object(f["a"])(_,s,i,!1,null,null,null);t["default"]=b.exports},5333:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v(" "+e._s(e.$t("Attachments"))+" ")]),a("button",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(t){return e.CloseExpenseAttachments(t)}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"listing"},[e.noRecordForTab?e._e():a("div",{staticClass:"table-responsive table-fix-header"},[a("table",{staticClass:"table dt-responsive nowrap mt-0",attrs:{id:"table-openactivities-content"}},[e._m(0),a("tbody",e._l(e.attachmentsData,(function(t,s){return a("tr",{key:s},[a("td",[e._v(e._s(s+1)+".")]),a("td",[e._v(e._s(t.EXPENSE_FILE_NAME))]),a("td",[a("a",{staticClass:"round-icon-small btn-primary-light",attrs:{title:"DownloadFile",href:"javascript:;"},on:{click:function(a){return e.downloadAttachment(t)}}},[a("i",{staticClass:"fa fa-download"})]),a("a",{staticClass:"round-icon-small btn-danger-light",attrs:{href:"javascript:;",title:"DeleteFile"},on:{click:function(a){return e.deleteAttachment(t)}}},[a("i",{staticClass:"fa fa-trash-o"})])])])})),0)])])]),e.noRecordForTab?a("div",{staticClass:"text-center text-danger p-4 border no-record"},[e._v(e._s(e.$t("NoRecordfound")))]):e._e()])])])])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",[a("span",[e._v("#")])]),a("th",[a("span",[e._v("FileName")])]),a("th",[a("span",[e._v("Action")])])])])}],o=(a("ddb0"),a("2b3d"),a("9769")),n={props:{expenseid:null,code:{type:String,required:!0}},data:function(){return{isLoading:!1,attachmentsData:[],noRecordForTab:!1,statuscode:"",Expense_Id:""}},created:function(){this.statuscode=this.code,this.Expense_Id=this.expenseid,this.Fetchdata()},methods:{Fetchdata:function(){var e=this,t="expenseid="+e.expenseid;o["a"].GetExpenseFileList(t).then((function(t){e.isLoading=!0,t.data.length>0||""!=t.data?(e.attachmentsData=t.data.DATA,e.noRecordForTab=!1):(e.noRecordForTab=!0,e.attachmentsData=null,e.isLoading=!1),e.isLoading=!1}))},downloadAttachment:function(e){var t=this;t.isLoading=!0;var a=`fileId=${e.EXPENSE_ID}&filePath=${e.EXPENSE_FILE_PATH}&fileType=${e.CONTENT_TYPE}&fileName=${e.EXPENSE_FILE_NAME}&downloadType=single`;o["a"].downloadAttachment(a).then((function(a){t.isLoading=!1;var s=window.URL.createObjectURL(new Blob([a.data])),i=document.createElement("a");i.href=s,i.setAttribute("download",e.EXPENSE_FILE_NAME),document.body.appendChild(i),i.click()}))},deleteAttachment:function(e){var t=this;t.confirmR(this.$t("ConfirmDelete"),!0,this.$t("Delete")+"  "+this.$t("Attachment"),(function(){t.isLoading=!0;var a=`fileId=${e.EXPENSE_FILE_ID}&expId=${e.EXPENSE_ID}`;o["a"].DeleteAttachment(a).then((function(e){t.isLoading=!1,200==e.status&&(t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Attachment")]),"success",!0,t.$t("Alert")),t.Fetchdata())}))}))},CloseExpenseAttachments:function(e){this.$emit("CloseExpenseAttachments",e)}}},r=n,l=a("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);t["a"]=c.exports},"9d1d":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v(" "+e._s(this.CommentHeader)+" ")]),a("button",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(t){return e.CloseExpenseComments()}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("Form",{ref:"CommentForm",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.valid,i=t.errors;return[1==e.visibility?a("div",{class:{"d-none":1==e.showModelClientCompany}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[e._v(e._s(e.$t("Title"))+":"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("Field",{attrs:{name:"Title",rules:{required:!0},label:"Title"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.CommentTitle,expression:"CommentTitle"}],class:{"form-control":!0,"is-invalid":s[0]},attrs:{name:"Title",id:"Title",type:"text",maxlength:"100"},domProps:{value:e.CommentTitle},on:{input:function(t){t.target.composing||(e.CommentTitle=t.target.value)}}}),s[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Name"}},[e._v(e._s(s[0]))]):e._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",[e._v(e._s(e.$t("Description"))+":"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("Field",{attrs:{name:"Description",rules:{required:!0},label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Commentdesc,expression:"Commentdesc"}],class:{"form-control":!0,"is-invalid":s[0]},staticStyle:{"max-height":"300px!important","min-height":"100px!important"},attrs:{maxlength:"250",id:"description",name:"Description"},domProps:{value:e.Commentdesc},on:{input:function(t){t.target.composing||(e.Commentdesc=t.target.value)}}}),e._v(" "),s[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Name"}},[e._v(e._s(s[0]))]):e._e()]}}],null,!0)})],1),1==e.access?a("div",{staticClass:"form-group"},[a("label",[e._v("Visibility:"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("div",{staticClass:"form-control pl-0 border-0"},[a("Field",{attrs:{name:"ReimburseBy",rules:{required:!0},label:"Reimburse By"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.SelectedVale,expression:"SelectedVale"}],attrs:{type:"radio",id:"Public",value:"Public",name:"Public"},domProps:{checked:e._q(e.SelectedVale,"Public")},on:{change:function(t){e.SelectedVale="Public"}}}),a("label",{staticClass:"form-check-label font-weight-normal ml-2",attrs:{for:"Client"}},[e._v(e._s(e.$t("Public")))])]),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.SelectedVale,expression:"SelectedVale"}],attrs:{type:"radio",id:"Private",value:"Private",name:"Company"},domProps:{checked:e._q(e.SelectedVale,"Private")},on:{change:function(t){e.SelectedVale="Private"}}}),a("label",{staticClass:"form-check-label font-weight-normal ml-2",attrs:{for:"Company"}},[e._v(e._s(e.$t("Private")))])]),s[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Name"}},[e._v(e._s(s[0]))]):e._e()]}}],null,!0)})],1)]):e._e()]),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"row flex-row-reverse"},[1==e.isSingleCommentforMultipleExpenses?a("div",{staticClass:"col-lg-6 text-right"},[a("a",{staticClass:"btn btn-danger mr-2",attrs:{title:"Skip",href:"javascript:;"},on:{click:function(t){return e.Skip(s,i)}}},[a("span",[e._v(e._s(e.$t("Skip")))]),a("em",{staticClass:"fa fa-forward pl-2"})]),a("a",{staticClass:"btn btn-success",attrs:{title:e.$t("PostNewComment"),href:"javascript:;"},on:{click:function(t){return e.APostNewComment(s,i)}}},[a("em",{staticClass:"fa fa-send pr-2"}),a("span",[e._v(e._s(e.$t("PostNewComment")))])])]):e._e(),0==e.isSingleCommentforMultipleExpenses?a("div",{staticClass:"col-lg-6 text-right"},[a("a",{staticClass:"btn btn-success",attrs:{id:"postcomment",title:e.$t("PostNewComment"),href:"javascript:;"},on:{click:function(t){return e.PostNewComment(s,i)}}},[a("em",{staticClass:"fa fa-send pr-2"}),e._v(e._s(e.$t("PostNewComment")))])]):e._e(),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"py-2"},[a("small",{staticClass:"text-danger mandatory"},[e._v(e._s(e.$t("MandatoryString")))])])])])])])]):e._e(),1==e.isSingleCommentforMultipleExpenses?a("div",[a("div",{staticClass:"col-lg-12"},[e.showModelClientCompany?a("div",{staticClass:"row"},[a("div",{staticClass:"w-100 col-12"},[a("div",{staticClass:"alert alert-warning mb-3"},[e._v(" "+e._s(e.$t("ExpenseEntryWillBeReimbursedBy"))+" ")]),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0"},[a("div",{staticClass:"form-group"},[a("label",[e._v(e._s(e.$t("ReimburseBy"))+":"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("div",{staticClass:"form-control pl-0 border-0"},[a("Field",{attrs:{name:"ReimburseBy",rules:{required:!0},label:"Reimburse By"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.SelectedVale,expression:"SelectedVale"}],attrs:{type:"radio",id:"Client",value:"Client",name:"ReimburseBy"},domProps:{checked:e._q(e.SelectedVale,"Client")},on:{change:function(t){e.SelectedVale="Client"}}}),a("label",{staticClass:"form-check-label font-weight-normal ml-2",attrs:{for:"Client"}},[e._v(e._s(e.$t("Client")))])]),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.SelectedVale,expression:"SelectedVale"}],attrs:{type:"radio",id:"Company",value:"Company",name:"ReimburseBy"},domProps:{checked:e._q(e.SelectedVale,"Company")},on:{change:function(t){e.SelectedVale="Company"}}}),a("label",{staticClass:"form-check-label font-weight-normal ml-2",attrs:{for:"Company"}},[e._v(e._s(e.$t("Company")))])]),s[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Name"}},[e._v(e._s(s[0]))]):e._e()]}}],null,!0)})],1)])]),a("div",{staticClass:"col-lg-12 text-right p-0"},[a("div",{staticClass:"search-btm-btn"},[a("a",{staticClass:"btn btn-success",attrs:{title:"submit",href:"javascript:;"},on:{click:function(t){return e.SubmitExpenseApproval(s,i,"Skip")}}},[a("i",{staticClass:"fa fa-save pr-2"}),e._v(e._s(e.$t("Submit")))])])])])]):e._e()])]):e._e()]}}])}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[0==e.isSingleCommentforMultipleExpenses?a("div",{staticClass:"listing"},[a("div",{staticClass:"w-100 activity-tab",attrs:{id:"Expenseaccordion"}},e._l(e.CommentExpenseData,(function(t,s){return a("div",{key:s,staticClass:"card"},[a("div",{staticClass:"card-header"},[a("a",{staticClass:"card-link collapsed",attrs:{"data-toggle":"collapse",href:"#Expensecollapse"+s}},[a("div",{staticClass:"conversation-date heading-border"},[a("span",[a("em",{staticClass:"pr-1",attrs:{"aria-hidden":"true"}}),e._v(e._s(t.groupKey))])])])]),a("div",{class:{collapse:!0,show:0==s},attrs:{id:"Expensecollapse"+s}},e._l(t.groupData,(function(s,i){return a("div",{key:i,staticClass:"card-body"},[1==s.EXPENSE_ACCESS?a("div",{staticClass:"conversation-main"},[a("div",{staticClass:"conversation-time"},[a("span",[e._v(e._s(e.$options.filters.formatTime(s.CREATED_AT)))])]),a("div",{staticClass:"conversation-box-con"},[a("div",{staticClass:"conversation-box"},[a("div",{staticClass:"name-circle light-yellow"},[a("img",{staticClass:"img-circle avatar",attrs:{src:e.blobUrl,width:"51",height:"51",alt:"Image"}})]),a("div",{staticClass:"conversation-header addednote-ticket"},[a("span",[a("span",{staticClass:"sender-name"},[e._v(e._s(s.EXPENSE_COMMENT_TITLE))]),a("span",{staticClass:"sender-department",attrs:{title:t.EXPENSE_COMMENT_DESC}},[e._v(" ("+e._s(s.EXPENSE_COMMENT_DESC)+")")])])]),a("div",{staticClass:"conversation-content"},[a("div",{staticClass:"col-12 p-0 notesdata"},[a("h6",{staticClass:"text-muted time"},[a("i",[a("b",[e._v(e._s(s.CREATED_BY))]),e._v(", "+e._s(e.$t("PostedOn"))+": "),a("span",{staticClass:"text-danger"},[e._v(e._s(e.$options.filters.formatDateTime(s.CREATED_AT)))])])])])])])])]):e._e(),0==s.EXPENSE_ACCESS?a("div",{staticClass:"conversation-main"},[a("div",{staticClass:"conversation-time"},[a("span",[e._v(e._s(s.CREATED_AT))])]),a("div",{staticClass:"conversation-box-con"},[a("div",{staticClass:"conversation-box"},[a("div",{staticClass:"name-circle light-yellow"},[a("img",{staticClass:"img-circle avatar",attrs:{src:e.blobUrl,width:"51",height:"51",alt:"Image"}})]),a("div",{staticClass:"conversation-header addednote-ticket"},[a("span",[a("span",{staticClass:"sender-department"},[e._v(" "+e._s(s.EXPENSE_COMMENT_DESC))])])]),a("div",{staticClass:"conversation-content"},[a("div",{staticClass:"col-12 p-0 notesdata"},[a("h6",{staticClass:"text-muted time"},[a("i",[a("b",[e._v(e._s(s.CREATED_BY))]),e._v(", "+e._s(e.$t("PostedOn"))+": "),a("span",{staticClass:"text-danger"},[e._v(e._s(s.CREATED_AT))])])])])])])])]):e._e()])})),0)])})),0)]):e._e(),e.noRecordForTab&&0==e.isSingleCommentforMultipleExpenses?a("div",{staticClass:"text-center text-danger border p-3 mt-4"},[e._v(e._s(e.$t("NoRecordfound")))]):e._e()])])],1)])])])])},i=[],o=a("9769"),n={props:{expenseid:{type:String,required:!0},CommentHeader:{type:String,required:!0},isSingleCommentforMultipleExpenses:{type:Number,required:!0},statuscode:{type:String,required:!0},visibility:{type:Number,required:!0},access:{type:Number,required:!0}},data:function(){return{isLoading:!1,CommentTitle:"",Commentdesc:"",Expense_Id:"",userid:"",usertype:"",CommentExpenseData:[],showModelClientCompany:!1,SelectedVale:"",objectPostString:"",noRecordForTab:!0,SkipParam:!1,containerName:null,avatar:"",blobUrl:""}},created:function(){this.userid=this.GetUserInfo.ID,this.usertype=this.GetUserInfo.UserType,this.containerName=this.GetUserInfo.ContainerName,this.CommentList(),this.GetBlobUrl()},updated:function(){this.CommentList(),this.GetBlobUrl()},methods:{GetBlobUrl:function(){o["a"].GetBlobUrl().then(e=>{var t=e.data[0].CONFIG_DATA_VALUE;null==this.avatar?this.blobUrl="/Content/images/DefaultImages/uc_user_new.jpg":this.blobUrl=t+"/"+this.containerName+"/Upload/UserProfileImage/"+this.avatar})},Skip:function(){this.showModelClientCompany=!0,this.CommentTitle="",this.Commentdesc="",this.SkipParam=!0},CloseExpenseComments:function(){this.$emit("CloseExpenseComments")},PostNewComment:function(e,t){var a=this;a.$refs.CommentForm.validate().then(e=>{if(e){var t={ExpenseCommentId:0,CommentTitle:a.CommentTitle,Commentdesc:a.Commentdesc,Expense_Id:a.expenseid,EXPENSE_ACCESS:1,StatusId:1001},s=JSON.stringify(t);o["a"].SaveComment(s).then((function(e){200==e.status&&(a.ShowAlert(a.$t("AddedSuccess",[a.$t("Comments")]),"success",!0,a.$t("Alert")),a.noRecordForTab=!1,a.CommentTitle="",a.Commentdesc="",a.$refs.CommentForm.reset(),a.CommentList())}))}})},APostNewComment:function(e,t){var a=this;a.$refs.CommentForm.validate().then(e=>{a.$refs.CommentForm.errors.ReimburseBy.length>0&&(e=!0),a.$refs.CommentForm.errors.Description.length>0&&(e=!1),a.$refs.CommentForm.errors.Title.length>0&&(e=!1),e?"EXP_SEND_FOR_CORRECTION"==a.statuscode?(a.showModelClientCompany=!1,a.noRecordForTab=!1,a.SubmitExpenseApproval()):0==a.SkipParam&&(a.showModelClientCompany=!0):console.log(a.$refs.CommentForm.errors)})},CommentList:function(){var e=this;e.isLoading=!0;var t="id="+e.expenseid;o["a"].CommentsList(t).then((function(t){if(null!=t.data){e.CommentExpenseData=[];var a=t.data,s="";$.each(a,$.proxy((function(t,i){s=e.$options.filters.formatDate(i.CREATED_AT);var o=$.grep(e.CommentExpenseData,(function(e,t){return e.groupKey==s}));if(0==o.length){var n=$.grep(a,(function(t,a){return e.$options.filters.formatDate(t.CREATED_AT)==s}));if(n.length>0){var r={groupKey:s,groupData:n};e.CommentExpenseData.push(r),e.avatar=e.CommentExpenseData[0].groupData[0].avatar,e.noRecordForTab=!1}}}),this))}else e.noRecordForTab=!0,e.ExpenseData=[];e.ExpenseData=[],e.isLoading=!1}))},SubmitExpenseApproval:function(e,t,a){var s=this;s.$refs.CommentForm.validate().then(e=>{"Skip"==a?(s.$refs.CommentForm.errors.Description.length>0&&(e=!0),s.$refs.CommentForm.errors.Title.length>0&&(e=!0),s.$refs.CommentForm.errors.ReimburseBy.length>0&&(e=!1)):e=!0,e&&s.confirmR(s.$t("ExpenseApprove"),!0,s.$t("Delete")+"  "+s.$t("ExpenseApproval"),(function(){var e=`ids=${s.expenseid}&statusCode=${s.statuscode}&approvalTypeId=2&CommentTitle=${s.CommentTitle}&Commentdesc=${s.Commentdesc}&commentAccess=1&isForciable=0&isOverridable=0&reimburseBy=${s.SelectedVale}`;o["a"].AddApproverStatusListing(e).then((function(e){200==e.status&&("EXP_APPROVED"==s.statuscode?(s.$emit("CloseExpenseComments"),s.$emit("fetchdata"),$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='SendForReject']").removeClass("enable").addClass("disabled"),$("[id^='SendForApprove']").removeClass("enable").addClass("disabled"),s.ShowAlert(s.$t("ExpenseApproveReject",[s.$t("Approve")]),"success",!0,s.$t("Alert"))):"EXP_REJECTED"==s.statuscode?(s.$emit("CloseExpenseComments"),s.$emit("fetchdata"),$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='SendForReject']").removeClass("enable").addClass("disabled"),$("[id^='SendForApprove']").removeClass("enable").addClass("disabled"),s.ShowAlert(s.$t("ExpenseApproveReject",[s.$t("Decline")]),"success",!0,s.$t("Alert"))):(s.$emit("CloseExpenseComments"),s.$emit("fetchdata"),s.ShowAlert(s.$t("ExpenseApproveSendForCorrection",[s.$t("SendForCorrection")]),"success",!0,s.$t("Alert"))))}))}))})}}},r=n,l=a("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-173411dc.js.map