"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[7296],{7296:(e,l,t)=>{t.r(l),t.d(l,{default:()=>y});var s=t(4326),a=t(5860),r=t(140),u=t(6408),i=t(2360),o=t(9862),n=t(8825),c=t(1554);const h=["/","/blog.html","/intro.html","/apps/Applist.html","/apps/Chrome.html","/apps/toolbox.html","/apps/topic/","/code/markdown/markdown%E8%AF%AD%E6%B3%95%E7%A4%BA%E4%BE%8B.html","/code/%E4%BF%A1%E6%81%AF%E5%AE%89%E5%85%A8/sql_injection.html","/code/%E4%BF%A1%E6%81%AF%E5%AE%89%E5%85%A8/xss.html","/code/%E7%AE%97%E6%B3%95/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F.html","/code/%E7%AE%97%E6%B3%95/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.html","/code/%E7%AE%97%E6%B3%95/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F%E3%80%81%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.html","/404.html","/apps/","/code/markdown/","/code/","/code/%E4%BF%A1%E6%81%AF%E5%AE%89%E5%85%A8/","/code/%E7%AE%97%E6%B3%95/","/category/","/category/%E4%BB%A3%E7%A0%81%E7%BC%96%E7%A8%8B/","/category/%E4%BF%A1%E6%81%AF%E5%AE%89%E5%85%A8/","/category/%E7%AE%97%E6%B3%95/","/tag/","/tag/markdown/","/tag/%E4%BF%A1%E6%81%AF%E5%AE%89%E5%85%A8/","/tag/%E7%AE%97%E6%B3%95/","/article/","/star/","/timeline/"];t(2610);const v=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),p=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:d}=c.s,E=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var y=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const t=(0,o.rd)(),h=(0,o.Zv)(),y=(0,s.s5)(c.a),{enabled:m,addQueryHistory:A,queryHistory:g,removeQueryHistory:B}=(()=>{const{queryHistoryCount:e}=c.s,l=e>0;return{enabled:l,queryHistory:v,addQueryHistory:t=>{l&&(v.value=Array.from(new Set([t,...v.value.slice(0,e-1)])))},removeQueryHistory:e=>{v.value=[...v.value.slice(0,e),...v.value.slice(e+1)]}}})(),{enabled:H,resultHistory:k,addResultHistory:f,removeResultHistory:F}=(()=>{const e=d>0;return{enabled:e,resultHistory:E,addResultHistory:l=>{if(e){const e={link:p(l),display:l.display};"header"in l&&(e.header=l.header),E.value=[e,...E.value.slice(0,d-1)]}},removeResultHistory:e=>{E.value=[...E.value.slice(0,e),...E.value.slice(e+1)]}}})(),w=m||H,Q=(0,u.lW)(e,"queries"),{results:R,isSearching:C}=(e=>{const l=(0,c.u)(),t=(0,o.Zv)(),s=(0,o.BV)(),a=(0,u.KR)(0),n=(0,i.EW)((()=>a.value>0)),h=(0,u.IJ)([]);return(0,i.sV)((()=>{const{search:u,terminate:o}=(0,c.c)(),n=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=(e=>e),splitWord:o,suggestionsFilter:n,...c}=l.value;r?(a.value+=1,u(e.join(" "),t.value,c).then((e=>i(e,r,t.value,s.value))).then((e=>{a.value-=1,h.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(h.value=[])}))):h.value=[]}),c.s.searchDelay-c.s.suggestDelay);(0,i.wB)([e,t],(([e])=>n(e)),{immediate:!0}),(0,i.hi)((()=>{o()}))})),{isSearching:n,results:h}})(Q),x=(0,u.Kh)({isQuery:!0,index:0}),b=(0,u.KR)(0),q=(0,u.KR)(0),S=(0,i.EW)((()=>w&&(g.value.length>0||k.value.length>0))),D=(0,i.EW)((()=>R.value.length>0)),_=(0,i.EW)((()=>R.value[b.value]||null)),W=e=>e.map((e=>(0,s.Kg)(e)?e:(0,i.h)(e[0],e[1]))),j=e=>{if("customField"===e.type){const l=c.b[e.index]||"$content",[t,a=""]=(0,s.Qd)(l)?l[h.value].split("$content"):l.split("$content");return e.display.map((e=>(0,i.h)("div",W([t,...e,a]))))}return e.display.map((e=>(0,i.h)("div",W(e))))},T=()=>{b.value=0,q.value=0,l("updateQuery",""),l("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(D.value){if("ArrowUp"===s.key)q.value>0?q.value-=1:(b.value=b.value>0?b.value-1:R.value.length-1,q.value=_.value.contents.length-1);else if("ArrowDown"===s.key)q.value<_.value.contents.length-1?q.value+=1:(b.value=b.value<R.value.length-1?b.value+1:0,q.value=0);else if("Enter"===s.key){const l=_.value.contents[q.value];A(e.queries.join(" ")),f(l),t.push(p(l)),T()}}else if(H)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:l}=x;0===l?(x.isQuery=!e,x.index=e?k.value.length-1:g.value.length-1):x.index=l-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:l}=x;l===(e?g.value.length-1:k.value.length-1)?(x.isQuery=!e,x.index=0):x.index=l+1})();else if("Enter"===s.key){const{index:e}=x;x.isQuery?(l("updateQuery",g.value[e]),s.preventDefault()):(t.push(k.value[e].link),T())}})),(0,i.wB)([b,q],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!D.value:!S.value}],id:"search-pro-results"},e.queries.length?C.value?(0,i.h)(n.S,{hint:y.value.searching}):D.value?(0,i.h)("ul",{class:"search-pro-result-list"},R.value.map((({title:l,contents:t},s)=>{const a=b.value===s;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},l||y.value.defaultTitle),t.map(((l,t)=>{const s=a&&q.value===t;return(0,i.h)(o.Wt,{to:p(l),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{A(e.queries.join(" ")),f(l),T()}},(()=>["text"===l.type?null:(0,i.h)("title"===l.type?n.T:"heading"===l.type?n.H:n.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,i.h)("div",{class:"content-header"},l.header):null,(0,i.h)("div",j(l))])]))}))])}))):y.value.emptyResult:w?S.value?[m?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},y.value.queryHistory),g.value.map(((e,t)=>(0,i.h)("div",{class:["search-pro-result-item",{active:x.isQuery&&x.index===t}],onClick:()=>{l("updateQuery",e)}},[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),B(t)}})])))])):null,H?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},y.value.resultHistory),k.value.map(((e,l)=>(0,i.h)(o.Wt,{to:e.link,class:["search-pro-result-item",{active:!x.isQuery&&x.index===l}],onClick:()=>{T()}},(()=>[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>W(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),F(l)}})]))))])):null]:y.value.emptyHistory:y.value.emptyResult)}})}}]);