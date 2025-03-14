import{_ as ne,a as ue,i as re,e as g,r as ce,o as de,w as pe,g as i,h as r,j as t,k as l,n as ie,p as b,F as _,c as T,J as F,q as n,s as _e,t as u,v as C,M as me,l as h,z as H,N as J,x as L,O as P,A as fe,B as ve}from"./index.96e8eb14.js";import{T as be}from"./TemplateTable.b71e27ec.js";const y=w=>(fe("data-v-a261735f"),w=w(),ve(),w),ge={class:"d-flex align-items-center mb-2"},he=y(()=>r("i",{class:"bx bx-child"},null,-1)),ye=y(()=>r("label",{class:"fs-3 fw-bold text-dark"},[r("strong",null,"Group Settings")],-1)),ke=y(()=>r("hr",null,null,-1)),we={class:"card-header2"},xe={style:{"padding-top":"8px"}},Ve={class:"d-flex justify-content-end"},Te=y(()=>r("hr",null,null,-1)),Ce={class:"d-flex justify-content-end"},De={class:"pb-5"},Se=y(()=>r("br",null,null,-1)),Ge=y(()=>r("br",null,null,-1)),Ue={__name:"TemplateGroupView",setup(w){const x=ue(),d=re("appSettings"),N=g(),m=ce({groups:[]}),p=g(!1),D=g(!1),S=g([]),$=g([]),G=g({}),R=()=>{let e={key:Date.now(),name:"",template:[],units:[]};m.groups.push(e)},E=e=>{const o=m.groups.indexOf(e);o!==-1&&m.groups.splice(o,1)},K=e=>{let o={key:Date.now(),tool:[],chamber:[]};e.units.push(o)},Q=(e,o)=>{const f=e.units.indexOf(o);f!==-1&&e.units.splice(f,1)},W=e=>{!e||e.validate(async o=>{if(o){p.value=!0;const f=JSON.stringify(m);try{await T.post(x.api_group_settings,f,{headers:{"Content-Type":"application/json"},params:{fab:d.value.fab,stage:d.value.stage}}),F({message:"Group settings saved successfully.",type:"success"})}catch(v){F({message:v,type:"error"})}finally{p.value=!1}}})},z=async()=>{if(d.value.fab!==""){p.value=!0;try{const e=await T.get(x.api_group_settings,{params:{fab:d.value.fab,stage:d.value.stage}});m.groups=e.data.data.groups}catch(e){console.log(e)}finally{p.value=!1}}},X=async()=>{try{const e=await T.get(x.api_map_template);S.value=e.data.data.templates}catch(e){console.log(e)}},B=async()=>{if(d.value.fab!=="")try{const e=await T.get(x.api_get_tools_units,{params:{fab:d.value.fab,stage:d.value.stage}});G.value=e.data.data,$.value=Object.keys(e.data.data)}catch(e){console.log(e)}},Y=e=>G.value[e]===void 0?[]:G.value[e];return de(()=>{X(),B(),z()}),pe(d,e=>{z(),B()}),(e,o)=>{const f=n("Plus"),v=n("el-icon"),k=n("el-button"),Z=n("el-input"),V=n("el-form-item"),U=n("el-option"),j=n("el-select"),I=n("el-card"),O=n("el-col"),A=n("el-row"),ee=n("el-form"),te=n("el-drawer"),le=n("House"),ae=n("el-tooltip"),oe=n("el-backtop"),se=_e("loading");return u(),i(_,null,[r("div",ge,[he,ye,t(k,{class:"ms-4",onClick:o[0]||(o[0]=a=>R()),disabled:p.value},{default:l(()=>[t(v,{class:"me-2"},{default:l(()=>[t(f)]),_:1}),C(" Add Group ")]),_:1},8,["disabled"]),t(k,{type:"success",onClick:o[1]||(o[1]=a=>W(N.value)),disabled:p.value},{default:l(()=>[t(v,{class:"me-2"},{default:l(()=>[(u(),b(me(p.value?"Loading":"Select")))]),_:1}),C(" Save ")]),_:1},8,["disabled"])]),ke,ie((u(),b(ee,{style:{"min-height":"500px"},ref_key:"formRef",ref:N,model:m,"label-width":"120px"},{default:l(()=>[t(A,{gutter:12},{default:l(()=>[(u(!0),i(_,null,h(m.groups,(a,M)=>(u(),b(O,{lg:18,xl:8,key:a.key},{default:l(()=>[t(I,{class:"mt-4"},{header:l(()=>[r("div",we,[r("h4",xe,H(a.name),1),t(k,{type:"danger",plain:"",onClick:J(s=>E(a),["prevent"])},{default:l(()=>[t(v,{class:"me-2"},{default:l(()=>[t(L(P))]),_:1}),C(" Delete Group ")]),_:2},1032,["onClick"])])]),default:l(()=>[t(V,{label:"Group Name:",prop:"groups."+M+".name",rules:{required:!0,message:"Group name can not be null",trigger:"blur"}},{default:l(()=>[t(Z,{modelValue:a.name,"onUpdate:modelValue":s=>a.name=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"]),t(V,{label:"Detect Template:",prop:"groups."+M+".template"},{default:l(()=>[t(j,{style:{width:"100%"},size:"large",modelValue:a.template,"onUpdate:modelValue":s=>a.template=s,placeholder:"",multiple:"",filterable:""},{default:l(()=>[(u(!0),i(_,null,h(S.value,s=>(u(),b(U,{key:s.name,label:s.name,value:s.name},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"]),r("div",Ve,[t(k,{onClick:s=>K(a)},{default:l(()=>[t(v,{class:"me-2"},{default:l(()=>[t(f)]),_:1}),C(" Add Tool ID ")]),_:2},1032,["onClick"])]),(u(!0),i(_,null,h(a.units,(s,q)=>(u(),i(_,{key:s.key},[Te,t(V,{label:"Tool ID:",prop:"groups."+q+".tool"},{default:l(()=>[t(j,{style:{width:"100%"},size:"large",modelValue:s.tool,"onUpdate:modelValue":c=>s.tool=c,placeholder:"",filterable:""},{default:l(()=>[(u(!0),i(_,null,h($.value,c=>(u(),b(U,{key:c,label:c,value:c},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"]),t(V,{label:"Chamber ID:",prop:"groups."+q+".chamber"},{default:l(()=>[t(j,{style:{width:"100%"},size:"large",modelValue:s.chamber,"onUpdate:modelValue":c=>s.chamber=c,placeholder:"",multiple:"",filterable:""},{default:l(()=>[(u(!0),i(_,null,h(Y(s.tool),c=>(u(),b(U,{key:c,label:c,value:c},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"]),r("div",Ce,[t(k,{type:"danger",icon:L(P),circle:"",onClick:J(c=>Q(a,s),["prevent"])},null,8,["icon","onClick"])])],64))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["model"])),[[se,p.value]]),t(te,{class:"text-center",modelValue:D.value,"onUpdate:modelValue":o[2]||(o[2]=a=>D.value=a),title:"\u6A23\u677F\u5546\u57CE",size:"500px"},{default:l(()=>[t(A,{gutter:16},{default:l(()=>[(u(!0),i(_,null,h(S.value,a=>(u(),b(O,{sm:24,key:a.key},{default:l(()=>[r("strong",De,H(a.name),1),Se,t(be,{"column-number":L(d).map_x,"column-min-weigth":14,"table-datas":a.tableData,showoff:""},null,8,["column-number","table-datas"]),Ge]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"]),t(oe,{right:40,bottom:40,class:"bg-primary text-white",onClick:o[3]||(o[3]=a=>D.value=!0)},{default:l(()=>[t(ae,{class:"box-item",effect:"dark",content:"\u6A23\u677F\u5546\u57CE",placement:"left"},{default:l(()=>[t(v,null,{default:l(()=>[t(le)]),_:1})]),_:1})]),_:1})],64)}}},Ne=ne(Ue,[["__scopeId","data-v-a261735f"]]);export{Ne as default};
