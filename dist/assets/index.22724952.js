import{u as e,r as t,M as l,P as a,C as n,R as r,I as c,B as o,a as m,b as s}from"./vendor.e5c1b4e4.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,r)=>{const c=new URL(e,a);if(self[t].moduleMap[c])return l(self[t].moduleMap[c]);const o=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){r(new Error(`Failed to import: ${e}`)),n(m)},onload(){l(self[t].moduleMap[c]),n(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const u=["5","10","20"],i=()=>{const[s,i]=e({family:"",socure:"",house:"",buyHouse:""}),[E,d]=t.useState(null),{family:p,socure:v,house:b,buyHouse:h}=s;return t.createElement(t.Fragment,null,t.createElement("div",{className:"container"},t.createElement(l,{theme:"danger",size:"lg"},"上海买房积分计算器"),t.createElement(a,{title:"家庭情况"},t.createElement("div",{className:"box"},t.createElement(n,null,t.createElement(r.Group,{value:p,onChange:e=>{i((t=>{t.family=e}))}},t.createElement(r,{value:"10"},"家庭 (10分)"),t.createElement(r,{value:"0"},"单身 (0分)"))))),t.createElement(a,{title:"户籍情况"},t.createElement("div",{className:"box"},t.createElement(n,null,t.createElement(r.Group,{value:v,onChange:e=>{i((t=>{t.socure=e}))}},t.createElement(r,{value:"10"},"上海户口 (10分)"),t.createElement(r,{value:"0"},"非上海户口 (0分)"))))),t.createElement(a,{title:"房产情况"},t.createElement("div",{className:"box"},t.createElement(n,null,t.createElement(r.Group,{value:b,onChange:e=>{i((t=>{t.house=e}))}},t.createElement(r,{value:"20"},"上海无房 (20分)"),t.createElement(r,{value:"0"},"上海有房 (0分)"))))),t.createElement(a,{title:"五年内购房情况"},t.createElement("div",{className:"box"},t.createElement(r.Group,{type:"cell",value:h,onChange:e=>{i((t=>{t.buyHouse=e}))}},t.createElement(r,{value:"20"},"无房，5年内无购房记录 (20分)"),t.createElement(r,{value:"5"},"有房，5年内无购房记录 (5分)"),t.createElement(r,{value:"0"},"无房，5年有有购房记录 (0分)"),t.createElement(r,{value:"1"},"有房，5年内有购房记录 (0分)")))),t.createElement(a,{title:"2003年1月起到现在的累计社保月数"},t.createElement("div",{className:"box"},t.createElement(n,{title:"社保月数"},t.createElement(c,{type:"number",value:E,placeholder:"",onChange:e=>{d(e)}})))),t.createElement(o,{block:!0,theme:"primary",style:{marginTop:"50px"},onClick:()=>{const e=(()=>{let e=0;for(let t in s){const l=s[t];u.includes(l)&&(e+=+l)}return e})()+(E?.1*E:0);console.log(e);const t=m.alert({className:"test",title:"提示",content:`你当前的分数是 ${e} 分`,onCancel:()=>{t.hide()}})}},"计算分数")))};s.render(t.createElement(i,null),document.getElementById("root"));