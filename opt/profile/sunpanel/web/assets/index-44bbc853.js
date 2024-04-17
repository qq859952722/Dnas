import{f as M,c7 as E,bl as O,bB as W,bv as X,bn as j,bw as G,r as f,bo as l,aW as y,aX as k,b4 as a,a$ as n,b3 as i,b1 as d,b0 as m,b2 as o,ac as c,bC as _}from"./index-bbc3fa35.js";import{N as b,b as N,l as H,d as J,a as S}from"./index-8e5baf15.js";import{a as K}from"./index-7226ac80.js";import{S as Q}from"./index-56d80b10.js";import{_ as Y,w as Z,u as ee,x as se}from"./index-d74e91cd.js";import{N as oe}from"./Divider-94d132d1.js";import"./_plugin-vue_export-helper-c27b6911.js";const ae={class:"bg-slate-200 dark:bg-zinc-900 p-2 h-full"},te={class:"text-slate-500 font-bold"},le={class:"mt-[10px]"},ne={class:"text-slate-500 font-bold"},re={key:0},ie={key:1,class:"flex items-center"},de={class:"max-w-[150px]"},ue={class:"mt-[10px]"},me={class:"text-slate-500 font-bold"},fe={class:"max-w-[200px]"},pe={class:"mt-[10px]"},ve={class:"text-slate-500 font-bold"},ce={class:"max-w-[200px]"},ge={class:"float-right"},Se=M({__name:"index",setup(we){var x;const C=E(),g=O(),p=W(),z=X(),v=j(),L=G(),P=f(p.language),U=f(p.theme),I=f(((x=g.userInfo)==null?void 0:x.name)||""),w=f(!1),$=f(null),T=[{label:l("apps.userInfo.themeStyle.dark"),key:"dark",value:"dark"},{label:l("apps.userInfo.themeStyle.light"),key:"light",value:"light"},{label:l("apps.userInfo.themeStyle.auto"),key:"Auto",value:"auto"}],t=f({show:!1,loading:!1,form:{password:"",oldPassword:"",confirmPassword:""}}),V={oldPassword:{required:!0,trigger:"blur",min:6,max:20,message:l("adminSettingUsers.formRules.passwordLimit")},password:{required:!0,trigger:"blur",min:6,max:20,message:l("adminSettingUsers.formRules.passwordLimit")},confirmPassword:{required:!0,trigger:"blur",min:6,max:20,message:l("adminSettingUsers.formRules.passwordLimit")}};async function R(){await K(),C.resetUserInfo(),g.removeToken(),z.removeState(),p.removeToken(),v.success(l("settingUserInfo.logoutSuccess")),location.reload()}function B(){Z(I.value).then(({code:e,msg:s})=>{e===0?(ee(),w.value=!1):v.error(`${l("common.editFail")}:${s}`)})}function q(e){var s;e.preventDefault(),(s=$.value)==null||s.validate(r=>{if(r){console.log(r);return}if(t.value.form.password!==t.value.form.confirmPassword){v.error(l("settingUserInfo.confirmPasswordInconsistentMsg"));return}t.value.loading=!0,se(t.value.form.oldPassword,t.value.form.password).then(({code:h,msg:u})=>{h===0&&(t.value.show=!1,v.success(l("common.success")))}).finally(()=>{t.value.loading=!1}).catch(()=>{v.error(l("common.serverError"))})})}function A(){L.warning({title:l("common.warning"),content:l("settingUserInfo.confirmLogoutText"),positiveText:l("common.confirm"),negativeText:l("common.cancel"),onPositiveClick:()=>{R()}})}function D(e){P.value=e,p.setLanguage(e),location.reload()}function F(e){U.value=e,p.setTheme(e)}return(e,s)=>(y(),k("div",ae,[a(o(_),{style:{"border-radius":"10px"},size:"small"},{default:n(()=>{var r,h;return[i("div",null,[i("div",te,d(e.$t("common.username")),1),m(" "+d((r=o(g).userInfo)==null?void 0:r.username),1)]),i("div",le,[i("div",ne,d(e.$t("common.nikeName")),1),w.value?(y(),k("div",ie,[i("div",de,[a(o(b),{value:I.value,"onUpdate:value":s[1]||(s[1]=u=>I.value=u),type:"text",placeholder:e.$t("common.inputPlaceholder")},null,8,["value","placeholder"])]),a(o(c),{size:"small",quaternary:"",type:"info",onClick:B},{default:n(()=>[m(d(e.$t("common.save")),1)]),_:1})])):(y(),k("div",re,[m(d((h=o(g).userInfo)==null?void 0:h.name)+" ",1),a(o(c),{size:"small",text:"",type:"info",onClick:s[0]||(s[0]=u=>w.value=!w.value)},{default:n(()=>[m(d(e.$t("common.edit")),1)]),_:1})]))]),i("div",ue,[i("div",me,d(e.$t("common.language")),1),i("div",fe,[a(o(N),{value:P.value,"onUpdate:value":s[2]||(s[2]=u=>P.value=u),options:o(H),onUpdateValue:D},null,8,["value","options"])])]),i("div",pe,[i("div",ve,d(e.$t("apps.userInfo.theme")),1),i("div",ce,[a(o(N),{value:U.value,"onUpdate:value":s[3]||(s[3]=u=>U.value=u),options:T,onUpdateValue:F},null,8,["value"])])]),a(o(oe),{style:{margin:"10px 0"},dashed:""}),i("div",null,[a(o(c),{size:"small",text:"",type:"info",onClick:s[4]||(s[4]=u=>t.value.show=!t.value.show)},{default:n(()=>[m(d(e.$t("settingUserInfo.updatePassword")),1)]),_:1})])]}),_:1}),a(o(_),{style:{"border-radius":"10px"},class:"mt-[10px]",size:"small"},{default:n(()=>[a(o(c),{size:"small",text:"",type:"error",onClick:A},{icon:n(()=>[a(o(Q),{icon:"tabler:logout"})]),default:n(()=>[m(" "+d(e.$t("settingUserInfo.logout")),1)]),_:1})]),_:1}),a(o(Y),{show:t.value.show,"onUpdate:show":s[8]||(s[8]=r=>t.value.show=r),size:"small",preset:"card",style:{width:"400px"},title:e.$t("settingUserInfo.updatePassword")},{footer:n(()=>[i("div",ge,[a(o(c),{type:"success",size:"small",loading:t.value.loading,onClick:q},{default:n(()=>[m(d(e.$t("common.save")),1)]),_:1},8,["loading"])])]),default:n(()=>[a(o(J),{ref_key:"formRef",ref:$,model:t.value.form,rules:V},{default:n(()=>[a(o(S),{path:"oldPassword",label:e.$t("settingUserInfo.oldPassword")},{default:n(()=>[a(o(b),{value:t.value.form.oldPassword,"onUpdate:value":s[5]||(s[5]=r=>t.value.form.oldPassword=r),maxlength:20,type:"password",placeholder:e.$t("settingUserInfo.oldPassword")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(o(S),{path:"password",label:e.$t("settingUserInfo.newPassword")},{default:n(()=>[a(o(b),{value:t.value.form.password,"onUpdate:value":s[6]||(s[6]=r=>t.value.form.password=r),maxlength:20,type:"password",placeholder:e.$t("settingUserInfo.newPassword")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(o(S),{path:"confirmPassword",label:e.$t("settingUserInfo.confirmPassword")},{default:n(()=>[a(o(b),{value:t.value.form.confirmPassword,"onUpdate:value":s[7]||(s[7]=r=>t.value.form.confirmPassword=r),maxlength:20,type:"password",placeholder:e.$t("settingUserInfo.confirmPassword")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["show","title"])]))}});export{Se as default};
