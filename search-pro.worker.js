const V=Object.entries,et=Object.fromEntries,st="ENTRIES",L="KEYS",T="VALUES",_="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case T:return this.value();case L:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],nt=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const v=g!==t[F],z=o[p+F]+ +v,A=o[p+F+1]+1,w=o[m+F]+1,j=o[m+F+1]=Math.min(z,A,w);j<l&&(l=j)}if(l>s)continue t}R(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,st)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return nt(this._tree,t,s)}get(t){const s=k(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=k(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new D(this,L)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,I(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},k=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return k(e.get(s),t.slice(s.length))},I=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;q(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&q(e.slice(0,-1),n,o)}},q=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],ut=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,M="or",$="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},N=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[M]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),N(n.terms,u)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);N(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},at=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},gt={k:1.2,b:.7,d:.5},mt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:M,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:gt},pt={combineWith:$,prefix:(e,t,s)=>t===s.length-1},Ft={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},_t={...Ft,...U},K=Symbol("*"),yt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},X=(e,t=M)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=ht[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},S=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){ft(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],v=dt(y,m,e._documentCount,F,p,r),z=n*a*f*v,A=d.get(l);if(A){A.score+=z,ct(A.terms,t);const w=G(A.match,s);w?w.push(c):A.match[s]=[c]}else d.set(l,{score:z,terms:[t],match:{[s]:[c]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:G(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...J.weights,...i},h=e._index.get(t.term),g=S(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);S(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);S(e,t.term,l,F,f,o,u,d,g)}return g},Y=(e,t,s={})=>{if(t===K)return yt(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Y(e,g,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(at(i)).map(a=>At(e,a,i));return X(c,i.combineWith)},Q=(e,t,s={})=>{const n=Y(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===K&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(P),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(P),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?_t:t.autoVacuum;this._options={...mt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...pt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},B=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},wt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),xt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),Z=(e,t,s={})=>{const n={};return Q(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>B(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>B(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>B(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?wt(o,u):xt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=ut(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},tt=(e,t,s={})=>{const n=Ct(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},bt=et(V(JSON.parse("{\"/\":{\"documentCount\":32,\"nextId\":32,\"documentIds\":{\"0\":\"0\",\"1\":\"0#✨-为什么建这个博客\",\"2\":\"0#🧱-笔记结构\",\"3\":\"2\",\"4\":\"3\",\"5\":\"3@0\",\"6\":\"3@1\",\"7\":\"4\",\"8\":\"4@0\",\"9\":\"4@1\",\"10\":\"5\",\"11\":\"5@0\",\"12\":\"5@1\",\"13\":\"6\",\"14\":\"6#知识记录\",\"15\":\"6#平面设计\",\"16\":\"6#音频视频\",\"17\":\"6#屏幕录制\",\"18\":\"6#编程工具\",\"19\":\"7\",\"20\":\"7#浏览器\",\"21\":\"7#标签页\",\"22\":\"7#链接批量\",\"23\":\"7#图片视频\",\"24\":\"7#监视爬虫\",\"25\":\"7#网页优化\",\"26\":\"7#实用工具\",\"27\":\"8\",\"28\":\"9\",\"29\":\"10\",\"30\":\"11\",\"31\":\"12\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,2],\"1\":[3,14],\"2\":[2,3],\"3\":[1,3],\"4\":[1,7],\"5\":[null,null,1],\"6\":[null,null,2],\"7\":[1,7],\"8\":[null,null,1],\"9\":[null,null,2],\"10\":[1,8],\"11\":[null,null,1],\"12\":[null,null,2],\"13\":[1],\"14\":[1,2],\"15\":[1,2],\"16\":[1,4],\"17\":[1,4],\"18\":[1,3],\"19\":[2,8],\"20\":[1,20],\"21\":[1,16],\"22\":[1,23],\"23\":[1,29],\"24\":[1,36],\"25\":[1,56],\"26\":[1,50],\"27\":[1,18],\"28\":[1,9],\"29\":[1,3],\"30\":[1],\"31\":[1]},\"averageFieldLength\":[1.2251420454545454,12.2969696969697,0.7747252747252749],\"storedFields\":{\"0\":{\"h\":\"LuoThink\",\"t\":[\"本博客模板采用 LearnData\"]},\"1\":{\"h\":\"✨ 为什么建这个博客？\",\"t\":[\"曾经在网络上发现了很多很好的文章， 由于没有记录保存，很多文章都已经找寻不到踪迹了，这个博客可以提供一个收集网络资源的功能。\",\"自己有时候要记录一些经验，或者偶尔心血来潮想随便写点东西，存储在本地的话很容易被我误删， 这个博客可以满足一下我随便乱写的欲望。\",\"白嫖一下 github.io 的服务器，闲着也是闲着。\"]},\"2\":{\"h\":\"🧱 笔记结构\",\"t\":[\"No Plan.\"]},\"3\":{\"h\":\"个人介绍\",\"t\":[\"爱自由、爱编程！\"]},\"4\":{\"h\":\"博客文章样例\",\"t\":[\"博客文章内容，支持 Markdown 和 HTML 语言。\"]},\"5\":{\"c\":[\"使用指南\"]},\"6\":{\"c\":[\"页面配置\",\"使用指南\"]},\"7\":{\"h\":\"博客文章样例2\",\"t\":[\"博客文章内容，支持 Markdown 和 HTML 语言。\"]},\"8\":{\"c\":[\"工具\"]},\"9\":{\"c\":[\"页面配置\",\"使用指南\"]},\"10\":{\"h\":\"博客文章测试\",\"t\":[\"博客文章内容，支持 Markdown 和 HTML 语言。 我来测试一下。\"]},\"11\":{\"c\":[\"工具\"]},\"12\":{\"c\":[\"页面配置\",\"使用指南\"]},\"13\":{\"h\":\"必备应用\"},\"14\":{\"h\":\"知识记录\",\"t\":[\"文本编辑：Notepad++\"]},\"15\":{\"h\":\"平面设计\",\"t\":[\"截图：Snipaste\"]},\"16\":{\"h\":\"音频视频\",\"t\":[\"音频播放：Poweramp & 音乐标签 & 音乐搜索\"]},\"17\":{\"h\":\"屏幕录制\",\"t\":[\"投屏工具：scrcpy (手机投屏)\"]},\"18\":{\"h\":\"编程工具\",\"t\":[\"ide： 必须是 vscode\"]},\"19\":{\"h\":\"Chrome 扩展\",\"t\":[\"常用 Chrome 扩展工具，链接多为 Chrome Web Store 项目页面。\"]},\"20\":{\"h\":\"浏览器\",\"t\":[\"扩展管理器：快速管理扩展，对扩展分组启用。\",\"Bookmarks clean up：清理重复书签、空文件夹和失效链接，也能合并重复文件夹。\",\"Better History：按日期、小时罗列历史记录，搜索更便捷。\",\"Cookie Editor：管理、修改、导出 Cookie。\"]},\"21\":{\"h\":\"标签页\",\"t\":[\"Custom New Tab URL：将新标签页重定向到一个特定的网址。\",\"zvTabs：一键关闭左侧标签。\",\"GoTo Tab：关键词搜索，快速定位标签页。\",\"Tab Wrangler：自动关闭不活动的标签页，并允许您轻松还原找回它们。\",\"iTab：自定义你的新标签页。\"]},\"22\":{\"h\":\"链接批量\",\"t\":[\"Bulk URL Opener Extension：批量打开链接，也可批量获取当前浏览器内所有页面网址链接。\",\"Link Grabber：批量提取、筛选、复制网页里各种链接。\",\"Linkclump：按住 Z 键后，长按鼠标左键进行区域框选，区域内的链接可以进行批量打开、复制、书签，操作中会同步显示区域内的链接数。\",\"TabCopy：快速复制标签页链接。\"]},\"23\":{\"h\":\"图片视频\",\"t\":[\"ImageAssistant：用于嗅探、分析网页图片并提供批量下载。\",\"Fatkun 图片批量下载：找出当前页面的所有图片，提供按分辨率、链接等筛选图片。\",\"FireShot：捕捉网页截图。\",\"Screenity：屏幕录像工具，可对屏幕进行捕获，注释，编辑、标注等。\",\"Picture-in-Picture Extension：视频画中画。\",\"Video Speed Controller：使用快捷方式加快，减慢，推进和回放 HTML5 视频。\"]},\"24\":{\"h\":\"监视爬虫\",\"t\":[\"Visualping：简单的监测扩展，不过只能在浏览器上进行通知。\",\"Distill Web Monitor：监控网页或源以获取变更，可邮件、手机提示。\",\"Auto Refresh Plus | Page Monitor：定时刷新页面；页面监视器，找到或丢失指定文本时，弹出提示。\",\"Check 酱：网页内容监控工具，可以监测网页内容变化，并发送异动到微信/飞书。Check 酱可以部署在 Docker 或浏览器插件。\",\"Web Scraper：从网页中提取数据的爬虫。\",\"网页自动化：UI.Vision PRA, iMacros, Automa。\"]},\"25\":{\"h\":\"网页优化\",\"t\":[\"Tampermonkey：油猴脚本插件，可修改网页布局、增减内容、自动化操作，常用脚本库为 Greasy Fork。\",\"Fix Contrast：自动校正网页对比度，让网页内容更易阅读和分辨。\",\"FasterChrome：浏览器预加载链接，提升网络流畅度。\",\"AutoPagerize：自动识别 next 或下一页，将网页合并为同一页。2014 年更新，很多规则已失效。\",\"pakku：合并 B 站视频中绝大多数刷屏弹幕。\",\"Enhanced GitHub：提升 GitHub 易用度。\",\"Sourcegraph：优化 GitHub 代码，支持鼠标悬停、代码搜索、查看引用等。\",\"沉浸式翻译：免费的双语对照网页翻译，彩云小译 的替代品。\",\"SuperCopy：一键破解禁止右键、破解禁止选择、破解禁止复制、破解禁止粘贴，启用复制，启用右键，启用选择，启用粘贴。 据 @sloanlance 提醒，SuperCopy 可能涉及按键记录和快捷键干扰，建议不使用。\"]},\"26\":{\"h\":\"实用工具\",\"t\":[\"Tango：将页面操作转化为逐步指导的流程指南。每一步都自动植入截图，并可以通过链接、HTML、Markdown 来分享。\",\"SingleFile：将完整网页保存到单个文件中，可对文件名、HTML 内容、样式、图片、字体等进行调整。\",\"Vimium C：全键盘操作浏览器，建议启用 chrome://flags/#extensions-on-chrome-urls。\",\"SelectorGadget：轻松获取网页元素的 CSS Path 或 XPath。\",\"Copy as Markdown：将网页文字转为 Markdown 格式文本。\",\"Get Favicon：快速获取当前网站的图标。\",\"Similar Sites：发现与当前浏览的网站相似的其他网站。\",\"Wappalyzer：查看竞争对手网站使用了哪些技术、工具和第三方服务。\",\"Link to Text Fragment：在 Chrome 浏览器中分享网页并突出显示所选文本。\"]},\"27\":{\"h\":\"开源工具\",\"t\":[\"开源工具不仅适用于个人电脑，还可用于项目的前端和后端。此页面将不设使用范围，记录所遇到的使用开源工具。\",\"uncle-novel：一个全网小说下载器及阅读器，可部署在 PC 和安卓上，目录解析与书源结合，支持有声小说与文本小说，可下载 mobi、epub、txt 格式文本小说。\"]},\"28\":{\"h\":\"专题示例\",\"t\":[\"如果想形成专题文章，并想使用独立侧边栏，则参考本目录使用专题文章。\",\"注意修改 .vuepress/sidebar.ts 和下方目录的路径。\"]},\"29\":{\"h\":\"\",\"t\":[\"404 Not Found\"]},\"30\":{\"h\":\"Posts\"},\"31\":{\"h\":\"Apps\"}},\"dirtCount\":0,\"index\":[[\"404\",{\"1\":{\"29\":1}}],[\"注意修改\",{\"1\":{\"28\":1}}],[\"注释\",{\"1\":{\"23\":1}}],[\"则参考本目录使用专题文章\",{\"1\":{\"28\":1}}],[\"如果想形成专题文章\",{\"1\":{\"28\":1}}],[\"专题示例\",{\"0\":{\"28\":1}}],[\"目录解析与书源结合\",{\"1\":{\"27\":1}}],[\"一个全网小说下载器及阅读器\",{\"1\":{\"27\":1}}],[\"一键破解禁止右键\",{\"1\":{\"25\":1}}],[\"一键关闭左侧标签\",{\"1\":{\"21\":1}}],[\"记录所遇到的使用开源工具\",{\"1\":{\"27\":1}}],[\"此页面将不设使用范围\",{\"1\":{\"27\":1}}],[\"还可用于项目的前端和后端\",{\"1\":{\"27\":1}}],[\"开源工具不仅适用于个人电脑\",{\"1\":{\"27\":1}}],[\"开源工具\",{\"0\":{\"27\":1}}],[\"在\",{\"1\":{\"26\":1}}],[\"ts\",{\"1\":{\"28\":1}}],[\"txt\",{\"1\":{\"27\":1}}],[\"text\",{\"1\":{\"26\":1}}],[\"to\",{\"1\":{\"26\":1}}],[\"tango\",{\"1\":{\"26\":1}}],[\"tampermonkey\",{\"1\":{\"25\":1}}],[\"tabcopy\",{\"1\":{\"22\":1}}],[\"tab\",{\"1\":{\"21\":3}}],[\"查看竞争对手网站使用了哪些技术\",{\"1\":{\"26\":1}}],[\"查看引用等\",{\"1\":{\"25\":1}}],[\"发现与当前浏览的网站相似的其他网站\",{\"1\":{\"26\":1}}],[\"格式文本小说\",{\"1\":{\"27\":1}}],[\"格式文本\",{\"1\":{\"26\":1}}],[\"apps\",{\"0\":{\"31\":1}}],[\"as\",{\"1\":{\"26\":1}}],[\"autopagerize\",{\"1\":{\"25\":1}}],[\"automa\",{\"1\":{\"24\":1}}],[\"auto\",{\"1\":{\"24\":1}}],[\"xpath\",{\"1\":{\"26\":1}}],[\"轻松获取网页元素的\",{\"1\":{\"26\":1}}],[\"on\",{\"1\":{\"26\":1}}],[\"opener\",{\"1\":{\"22\":1}}],[\"建议启用\",{\"1\":{\"26\":1}}],[\"建议不使用\",{\"1\":{\"25\":1}}],[\"全键盘操作浏览器\",{\"1\":{\"26\":1}}],[\"字体等进行调整\",{\"1\":{\"26\":1}}],[\"样式\",{\"1\":{\"26\":1}}],[\"内容\",{\"1\":{\"26\":1}}],[\"来分享\",{\"1\":{\"26\":1}}],[\"每一步都自动植入截图\",{\"1\":{\"26\":1}}],[\"实用工具\",{\"0\":{\"26\":1}}],[\"据\",{\"1\":{\"25\":1}}],[\"启用粘贴\",{\"1\":{\"25\":1}}],[\"启用选择\",{\"1\":{\"25\":1}}],[\"启用右键\",{\"1\":{\"25\":1}}],[\"启用复制\",{\"1\":{\"25\":1}}],[\"破解禁止粘贴\",{\"1\":{\"25\":1}}],[\"破解禁止复制\",{\"1\":{\"25\":1}}],[\"破解禁止选择\",{\"1\":{\"25\":1}}],[\"的替代品\",{\"1\":{\"25\":1}}],[\"的服务器\",{\"1\":{\"1\":1}}],[\"彩云小译\",{\"1\":{\"25\":1}}],[\"免费的双语对照网页翻译\",{\"1\":{\"25\":1}}],[\"沉浸式翻译\",{\"1\":{\"25\":1}}],[\"代码搜索\",{\"1\":{\"25\":1}}],[\"代码\",{\"1\":{\"25\":1}}],[\"优化\",{\"1\":{\"25\":1}}],[\"易用度\",{\"1\":{\"25\":1}}],[\"站视频中绝大多数刷屏弹幕\",{\"1\":{\"25\":1}}],[\"合并\",{\"1\":{\"25\":1}}],[\"很多规则已失效\",{\"1\":{\"25\":1}}],[\"很多文章都已经找寻不到踪迹了\",{\"1\":{\"1\":1}}],[\"年更新\",{\"1\":{\"25\":1}}],[\"2014\",{\"1\":{\"25\":1}}],[\"将网页文字转为\",{\"1\":{\"26\":1}}],[\"将网页合并为同一页\",{\"1\":{\"25\":1}}],[\"将完整网页保存到单个文件中\",{\"1\":{\"26\":1}}],[\"将页面操作转化为逐步指导的流程指南\",{\"1\":{\"26\":1}}],[\"将新标签页重定向到一个特定的网址\",{\"1\":{\"21\":1}}],[\"提醒\",{\"1\":{\"25\":1}}],[\"提升\",{\"1\":{\"25\":1}}],[\"提升网络流畅度\",{\"1\":{\"25\":1}}],[\"提供按分辨率\",{\"1\":{\"23\":1}}],[\"让网页内容更易阅读和分辨\",{\"1\":{\"25\":1}}],[\"增减内容\",{\"1\":{\"25\":1}}],[\"油猴脚本插件\",{\"1\":{\"25\":1}}],[\"网页优化\",{\"0\":{\"25\":1}}],[\"网页自动化\",{\"1\":{\"24\":1}}],[\"网页内容监控工具\",{\"1\":{\"24\":1}}],[\"从网页中提取数据的爬虫\",{\"1\":{\"24\":1}}],[\"或\",{\"1\":{\"26\":1}}],[\"或下一页\",{\"1\":{\"25\":1}}],[\"或浏览器插件\",{\"1\":{\"24\":1}}],[\"或者偶尔心血来潮想随便写点东西\",{\"1\":{\"1\":1}}],[\"docker\",{\"1\":{\"24\":1}}],[\"distill\",{\"1\":{\"24\":1}}],[\"飞书\",{\"1\":{\"24\":1}}],[\"并想使用独立侧边栏\",{\"1\":{\"28\":1}}],[\"并可以通过链接\",{\"1\":{\"26\":1}}],[\"并发送异动到微信\",{\"1\":{\"24\":1}}],[\"并允许您轻松还原找回它们\",{\"1\":{\"21\":1}}],[\"酱可以部署在\",{\"1\":{\"24\":1}}],[\"酱\",{\"1\":{\"24\":1}}],[\"弹出提示\",{\"1\":{\"24\":1}}],[\"找到或丢失指定文本时\",{\"1\":{\"24\":1}}],[\"找出当前页面的所有图片\",{\"1\":{\"23\":1}}],[\"页面监视器\",{\"1\":{\"24\":1}}],[\"页面配置\",{\"2\":{\"6\":1,\"9\":1,\"12\":1}}],[\"定时刷新页面\",{\"1\":{\"24\":1}}],[\"|\",{\"1\":{\"24\":1}}],[\"refresh\",{\"1\":{\"24\":1}}],[\"手机提示\",{\"1\":{\"24\":1}}],[\"手机投屏\",{\"1\":{\"17\":1}}],[\"可下载\",{\"1\":{\"27\":1}}],[\"可部署在\",{\"1\":{\"27\":1}}],[\"可对文件名\",{\"1\":{\"26\":1}}],[\"可对屏幕进行捕获\",{\"1\":{\"23\":1}}],[\"可能涉及按键记录和快捷键干扰\",{\"1\":{\"25\":1}}],[\"可修改网页布局\",{\"1\":{\"25\":1}}],[\"可以监测网页内容变化\",{\"1\":{\"24\":1}}],[\"可邮件\",{\"1\":{\"24\":1}}],[\"监控网页或源以获取变更\",{\"1\":{\"24\":1}}],[\"监视爬虫\",{\"0\":{\"24\":1}}],[\"mobi\",{\"1\":{\"27\":1}}],[\"monitor\",{\"1\":{\"24\":2}}],[\"markdown\",{\"1\":{\"4\":1,\"7\":1,\"10\":1,\"26\":3}}],[\"不过只能在浏览器上进行通知\",{\"1\":{\"24\":1}}],[\"简单的监测扩展\",{\"1\":{\"24\":1}}],[\"视频\",{\"1\":{\"23\":1}}],[\"视频画中画\",{\"1\":{\"23\":1}}],[\"推进和回放\",{\"1\":{\"23\":1}}],[\"减慢\",{\"1\":{\"23\":1}}],[\"使用快捷方式加快\",{\"1\":{\"23\":1}}],[\"使用指南\",{\"2\":{\"5\":1,\"6\":1,\"9\":1,\"12\":1}}],[\"vuepress\",{\"1\":{\"28\":1}}],[\"vimium\",{\"1\":{\"26\":1}}],[\"vision\",{\"1\":{\"24\":1}}],[\"visualping\",{\"1\":{\"24\":1}}],[\"video\",{\"1\":{\"23\":1}}],[\"vscode\",{\"1\":{\"18\":1}}],[\"标注等\",{\"1\":{\"23\":1}}],[\"标签页\",{\"0\":{\"21\":1}}],[\"编辑\",{\"1\":{\"23\":1}}],[\"编程工具\",{\"0\":{\"18\":1}}],[\"屏幕录像工具\",{\"1\":{\"23\":1}}],[\"屏幕录制\",{\"0\":{\"17\":1}}],[\"捕捉网页截图\",{\"1\":{\"23\":1}}],[\"found\",{\"1\":{\"29\":1}}],[\"fork\",{\"1\":{\"25\":1}}],[\"fragment\",{\"1\":{\"26\":1}}],[\"flags\",{\"1\":{\"26\":1}}],[\"favicon\",{\"1\":{\"26\":1}}],[\"fasterchrome\",{\"1\":{\"25\":1}}],[\"fatkun\",{\"1\":{\"23\":1}}],[\"fix\",{\"1\":{\"25\":1}}],[\"fireshot\",{\"1\":{\"23\":1}}],[\"图片\",{\"1\":{\"26\":1}}],[\"图片批量下载\",{\"1\":{\"23\":1}}],[\"图片视频\",{\"0\":{\"23\":1}}],[\"分析网页图片并提供批量下载\",{\"1\":{\"23\":1}}],[\"用于嗅探\",{\"1\":{\"23\":1}}],[\"操作中会同步显示区域内的链接数\",{\"1\":{\"22\":1}}],[\"书签\",{\"1\":{\"22\":1}}],[\"复制\",{\"1\":{\"22\":1}}],[\"复制网页里各种链接\",{\"1\":{\"22\":1}}],[\"区域内的链接可以进行批量打开\",{\"1\":{\"22\":1}}],[\"长按鼠标左键进行区域框选\",{\"1\":{\"22\":1}}],[\"键后\",{\"1\":{\"22\":1}}],[\"z\",{\"1\":{\"22\":1}}],[\"zvtabs\",{\"1\":{\"21\":1}}],[\"按住\",{\"1\":{\"22\":1}}],[\"按日期\",{\"1\":{\"20\":1}}],[\"筛选\",{\"1\":{\"22\":1}}],[\"批量提取\",{\"1\":{\"22\":1}}],[\"批量打开链接\",{\"1\":{\"22\":1}}],[\"也可批量获取当前浏览器内所有页面网址链接\",{\"1\":{\"22\":1}}],[\"也能合并重复文件夹\",{\"1\":{\"20\":1}}],[\"epub\",{\"1\":{\"27\":1}}],[\"enhanced\",{\"1\":{\"25\":1}}],[\"extensions\",{\"1\":{\"26\":1}}],[\"extension\",{\"1\":{\"22\":1,\"23\":1}}],[\"editor\",{\"1\":{\"20\":1}}],[\"链接等筛选图片\",{\"1\":{\"23\":1}}],[\"链接批量\",{\"0\":{\"22\":1}}],[\"链接多为\",{\"1\":{\"19\":1}}],[\"自动识别\",{\"1\":{\"25\":1}}],[\"自动校正网页对比度\",{\"1\":{\"25\":1}}],[\"自动化操作\",{\"1\":{\"25\":1}}],[\"自动关闭不活动的标签页\",{\"1\":{\"21\":1}}],[\"自定义你的新标签页\",{\"1\":{\"21\":1}}],[\"自己有时候要记录一些经验\",{\"1\":{\"1\":1}}],[\"wappalyzer\",{\"1\":{\"26\":1}}],[\"wrangler\",{\"1\":{\"21\":1}}],[\"web\",{\"1\":{\"19\":1,\"24\":2}}],[\"快速获取当前网站的图标\",{\"1\":{\"26\":1}}],[\"快速复制标签页链接\",{\"1\":{\"22\":1}}],[\"快速定位标签页\",{\"1\":{\"21\":1}}],[\"快速管理扩展\",{\"1\":{\"20\":1}}],[\"关键词搜索\",{\"1\":{\"21\":1}}],[\"get\",{\"1\":{\"26\":1}}],[\"greasy\",{\"1\":{\"25\":1}}],[\"grabber\",{\"1\":{\"22\":1}}],[\"goto\",{\"1\":{\"21\":1}}],[\"github\",{\"1\":{\"1\":1,\"25\":3}}],[\"uncle\",{\"1\":{\"27\":1}}],[\"ui\",{\"1\":{\"24\":1}}],[\"urls\",{\"1\":{\"26\":1}}],[\"url\",{\"1\":{\"21\":1,\"22\":1}}],[\"up\",{\"1\":{\"20\":1}}],[\"next\",{\"1\":{\"25\":1}}],[\"new\",{\"1\":{\"21\":1}}],[\"not\",{\"1\":{\"29\":1}}],[\"notepad++\",{\"1\":{\"14\":1}}],[\"novel\",{\"1\":{\"27\":1}}],[\"no\",{\"1\":{\"2\":1}}],[\"导出\",{\"1\":{\"20\":1}}],[\"修改\",{\"1\":{\"20\":1}}],[\"管理\",{\"1\":{\"20\":1}}],[\"搜索更便捷\",{\"1\":{\"20\":1}}],[\"小时罗列历史记录\",{\"1\":{\"20\":1}}],[\"history\",{\"1\":{\"20\":1}}],[\"html5\",{\"1\":{\"23\":1}}],[\"html\",{\"1\":{\"4\":1,\"7\":1,\"10\":1,\"26\":2}}],[\"b\",{\"1\":{\"25\":1}}],[\"bulk\",{\"1\":{\"22\":1}}],[\"better\",{\"1\":{\"20\":1}}],[\"bookmarks\",{\"1\":{\"20\":1}}],[\"空文件夹和失效链接\",{\"1\":{\"20\":1}}],[\"清理重复书签\",{\"1\":{\"20\":1}}],[\"css\",{\"1\":{\"26\":1}}],[\"c\",{\"1\":{\"26\":1}}],[\"check\",{\"1\":{\"24\":2}}],[\"chrome\",{\"0\":{\"19\":1},\"1\":{\"19\":2,\"26\":3}}],[\"copy\",{\"1\":{\"26\":1}}],[\"contrast\",{\"1\":{\"25\":1}}],[\"controller\",{\"1\":{\"23\":1}}],[\"cookie\",{\"1\":{\"20\":2}}],[\"custom\",{\"1\":{\"21\":1}}],[\"clean\",{\"1\":{\"20\":1}}],[\"对扩展分组启用\",{\"1\":{\"20\":1}}],[\"浏览器中分享网页并突出显示所选文本\",{\"1\":{\"26\":1}}],[\"浏览器预加载链接\",{\"1\":{\"25\":1}}],[\"浏览器\",{\"0\":{\"20\":1}}],[\"项目页面\",{\"1\":{\"19\":1}}],[\"常用脚本库为\",{\"1\":{\"25\":1}}],[\"常用\",{\"1\":{\"19\":1}}],[\"扩展管理器\",{\"1\":{\"20\":1}}],[\"扩展工具\",{\"1\":{\"19\":1}}],[\"扩展\",{\"0\":{\"19\":1}}],[\"必须是\",{\"1\":{\"18\":1}}],[\"必备应用\",{\"0\":{\"13\":1}}],[\"imacros\",{\"1\":{\"24\":1}}],[\"imageassistant\",{\"1\":{\"23\":1}}],[\"in\",{\"1\":{\"23\":1}}],[\"itab\",{\"1\":{\"21\":1}}],[\"ide\",{\"1\":{\"18\":1}}],[\"io\",{\"1\":{\"1\":1}}],[\"sidebar\",{\"1\":{\"28\":1}}],[\"sites\",{\"1\":{\"26\":1}}],[\"similar\",{\"1\":{\"26\":1}}],[\"singlefile\",{\"1\":{\"26\":1}}],[\"selectorgadget\",{\"1\":{\"26\":1}}],[\"sloanlance\",{\"1\":{\"25\":1}}],[\"supercopy\",{\"1\":{\"25\":2}}],[\"sourcegraph\",{\"1\":{\"25\":1}}],[\"speed\",{\"1\":{\"23\":1}}],[\"scraper\",{\"1\":{\"24\":1}}],[\"screenity\",{\"1\":{\"23\":1}}],[\"scrcpy\",{\"1\":{\"17\":1}}],[\"store\",{\"1\":{\"19\":1}}],[\"snipaste\",{\"1\":{\"15\":1}}],[\"投屏工具\",{\"1\":{\"17\":1}}],[\"音乐搜索\",{\"1\":{\"16\":1}}],[\"音乐标签\",{\"1\":{\"16\":1}}],[\"音频播放\",{\"1\":{\"16\":1}}],[\"音频视频\",{\"0\":{\"16\":1}}],[\"posts\",{\"0\":{\"30\":1}}],[\"poweramp\",{\"1\":{\"16\":1}}],[\"pc\",{\"1\":{\"27\":1}}],[\"path\",{\"1\":{\"26\":1}}],[\"pakku\",{\"1\":{\"25\":1}}],[\"page\",{\"1\":{\"24\":1}}],[\"pra\",{\"1\":{\"24\":1}}],[\"plus\",{\"1\":{\"24\":1}}],[\"plan\",{\"1\":{\"2\":1}}],[\"picture\",{\"1\":{\"23\":2}}],[\"截图\",{\"1\":{\"15\":1}}],[\"平面设计\",{\"0\":{\"15\":1}}],[\"文本编辑\",{\"1\":{\"14\":1}}],[\"知识记录\",{\"0\":{\"14\":1}}],[\"我来测试一下\",{\"1\":{\"10\":1}}],[\"工具和第三方服务\",{\"1\":{\"26\":1}}],[\"工具\",{\"2\":{\"8\":1,\"11\":1}}],[\"语言\",{\"1\":{\"4\":1,\"7\":1,\"10\":1}}],[\"和下方目录的路径\",{\"1\":{\"28\":1}}],[\"和安卓上\",{\"1\":{\"27\":1}}],[\"和\",{\"1\":{\"4\":1,\"7\":1,\"10\":1}}],[\"支持有声小说与文本小说\",{\"1\":{\"27\":1}}],[\"支持鼠标悬停\",{\"1\":{\"25\":1}}],[\"支持\",{\"1\":{\"4\":1,\"7\":1,\"10\":1}}],[\"博客文章测试\",{\"0\":{\"10\":1}}],[\"博客文章内容\",{\"1\":{\"4\":1,\"7\":1,\"10\":1}}],[\"博客文章样例2\",{\"0\":{\"7\":1}}],[\"博客文章样例\",{\"0\":{\"4\":1}}],[\"爱编程\",{\"1\":{\"3\":1}}],[\"爱自由\",{\"1\":{\"3\":1}}],[\"个人介绍\",{\"0\":{\"3\":1}}],[\"笔记结构\",{\"0\":{\"2\":1}}],[\"🧱\",{\"0\":{\"2\":1}}],[\"闲着也是闲着\",{\"1\":{\"1\":1}}],[\"白嫖一下\",{\"1\":{\"1\":1}}],[\"这个博客可以满足一下我随便乱写的欲望\",{\"1\":{\"1\":1}}],[\"这个博客可以提供一个收集网络资源的功能\",{\"1\":{\"1\":1}}],[\"存储在本地的话很容易被我误删\",{\"1\":{\"1\":1}}],[\"由于没有记录保存\",{\"1\":{\"1\":1}}],[\"曾经在网络上发现了很多很好的文章\",{\"1\":{\"1\":1}}],[\"为什么建这个博客\",{\"0\":{\"1\":1}}],[\"✨\",{\"0\":{\"1\":1}}],[\"linkclump\",{\"1\":{\"22\":1}}],[\"link\",{\"1\":{\"22\":1,\"26\":1}}],[\"learndata\",{\"1\":{\"0\":1}}],[\"luothink\",{\"0\":{\"0\":1}}],[\"本博客模板采用\",{\"1\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const u=bt[s];e==="suggest"?self.postMessage([e,o,tt(t,u,n)]):e==="search"?self.postMessage([e,o,Z(t,u,n)]):self.postMessage({suggestions:[e,o,tt(t,u,n)],results:[e,o,Z(t,u,n)]})};
//# sourceMappingURL=index.js.map