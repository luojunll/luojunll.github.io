"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[7296],{7296:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var s=t(4326),a=t(5860),r=t(140),u=t(6408),i=t(2360),o=t(9862),n=t(8825),c=t(1554);const h=["/","/blog.html","/intro.html","/posts/2024-03-01-blog_example.html","/posts/2024-03-02-blog_example2.html","/posts/2024-07-14-blog_test.html","/apps/Applist.html","/apps/Chrome.html","/apps/toolbox.html","/apps/topic/","/code/markdown/markdown%E8%AF%AD%E6%B3%95%E7%A4%BA%E4%BE%8B.html","/404.html","/posts/","/apps/","/code/markdown/","/code/","/category/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/category/%E5%B7%A5%E5%85%B7/","/tag/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/article/","/star/","/timeline/"];t(2610);const v=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),p=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:d}=c.s,y=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var m=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const t=(0,o.rd)(),h=(0,o.Zv)(),m=(0,s.s5)(c.a),{enabled:g,addQueryHistory:E,queryHistory:H,removeQueryHistory:k}=(()=>{const{queryHistoryCount:e}=c.s,l=e>0;return{enabled:l,queryHistory:v,addQueryHistory:t=>{l&&(v.value=Array.from(new Set([t,...v.value.slice(0,e-1)])))},removeQueryHistory:e=>{v.value=[...v.value.slice(0,e),...v.value.slice(e+1)]}}})(),{enabled:f,resultHistory:A,addResultHistory:Q,removeResultHistory:w}=(()=>{const e=d>0;return{enabled:e,resultHistory:y,addResultHistory:l=>{if(e){const e={link:p(l),display:l.display};"header"in l&&(e.header=l.header),y.value=[e,...y.value.slice(0,d-1)]}},removeResultHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),R=g||f,b=(0,u.lW)(e,"queries"),{results:x,isSearching:B}=(e=>{const l=(0,c.u)(),t=(0,o.Zv)(),s=(0,o.BV)(),a=(0,u.KR)(0),n=(0,i.EW)((()=>a.value>0)),h=(0,u.IJ)([]);return(0,i.sV)((()=>{const{search:u,terminate:o}=(0,c.c)(),n=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=(e=>e),splitWord:o,suggestionsFilter:n,...c}=l.value;r?(a.value+=1,u(e.join(" "),t.value,c).then((e=>i(e,r,t.value,s.value))).then((e=>{a.value-=1,h.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(h.value=[])}))):h.value=[]}),c.s.searchDelay-c.s.suggestDelay);(0,i.wB)([e,t],(([e])=>n(e)),{immediate:!0}),(0,i.hi)((()=>{o()}))})),{isSearching:n,results:h}})(b),C=(0,u.Kh)({isQuery:!0,index:0}),D=(0,u.KR)(0),q=(0,u.KR)(0),S=(0,i.EW)((()=>R&&(H.value.length>0||A.value.length>0))),_=(0,i.EW)((()=>x.value.length>0)),F=(0,i.EW)((()=>x.value[D.value]||null)),W=e=>e.map((e=>(0,s.Kg)(e)?e:(0,i.h)(e[0],e[1]))),T=e=>{if("customField"===e.type){const l=c.b[e.index]||"$content",[t,a=""]=(0,s.Qd)(l)?l[h.value].split("$content"):l.split("$content");return e.display.map((e=>(0,i.h)("div",W([t,...e,a]))))}return e.display.map((e=>(0,i.h)("div",W(e))))},j=()=>{D.value=0,q.value=0,l("updateQuery",""),l("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(_.value){if("ArrowUp"===s.key)q.value>0?q.value-=1:(D.value=D.value>0?D.value-1:x.value.length-1,q.value=F.value.contents.length-1);else if("ArrowDown"===s.key)q.value<F.value.contents.length-1?q.value+=1:(D.value=D.value<x.value.length-1?D.value+1:0,q.value=0);else if("Enter"===s.key){const l=F.value.contents[q.value];E(e.queries.join(" ")),Q(l),t.push(p(l)),j()}}else if(f)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:l}=C;0===l?(C.isQuery=!e,C.index=e?A.value.length-1:H.value.length-1):C.index=l-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:l}=C;l===(e?H.value.length-1:A.value.length-1)?(C.isQuery=!e,C.index=0):C.index=l+1})();else if("Enter"===s.key){const{index:e}=C;C.isQuery?(l("updateQuery",H.value[e]),s.preventDefault()):(t.push(A.value[e].link),j())}})),(0,i.wB)([D,q],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!_.value:!S.value}],id:"search-pro-results"},e.queries.length?B.value?(0,i.h)(n.S,{hint:m.value.searching}):_.value?(0,i.h)("ul",{class:"search-pro-result-list"},x.value.map((({title:l,contents:t},s)=>{const a=D.value===s;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},l||m.value.defaultTitle),t.map(((l,t)=>{const s=a&&q.value===t;return(0,i.h)(o.Wt,{to:p(l),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{E(e.queries.join(" ")),Q(l),j()}},(()=>["text"===l.type?null:(0,i.h)("title"===l.type?n.T:"heading"===l.type?n.H:n.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,i.h)("div",{class:"content-header"},l.header):null,(0,i.h)("div",T(l))])]))}))])}))):m.value.emptyResult:R?S.value?[g?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.queryHistory),H.value.map(((e,t)=>(0,i.h)("div",{class:["search-pro-result-item",{active:C.isQuery&&C.index===t}],onClick:()=>{l("updateQuery",e)}},[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),k(t)}})])))])):null,f?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.resultHistory),A.value.map(((e,l)=>(0,i.h)(o.Wt,{to:e.link,class:["search-pro-result-item",{active:!C.isQuery&&C.index===l}],onClick:()=>{j()}},(()=>[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>W(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),w(l)}})]))))])):null]:m.value.emptyHistory:m.value.emptyResult)}})}}]);