(this["webpackJsonpcourse-app-2"]=this["webpackJsonpcourse-app-2"]||[]).push([[0],{108:function(e,t,a){e.exports=a(141)},113:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"flying",(function(){return A.a})),a.d(n,"ice",(function(){return _.a})),a.d(n,"bug",(function(){return k.a})),a.d(n,"fire",(function(){return w.a})),a.d(n,"dark",(function(){return I.a})),a.d(n,"dragon",(function(){return C.a})),a.d(n,"electric",(function(){return T.a})),a.d(n,"fairy",(function(){return K.a})),a.d(n,"fighting",(function(){return U.a})),a.d(n,"ghost",(function(){return F.a})),a.d(n,"grass",(function(){return H.a})),a.d(n,"ground",(function(){return $.a})),a.d(n,"normal",(function(){return Q.a})),a.d(n,"poison",(function(){return Q.a})),a.d(n,"psychic",(function(){return X.a})),a.d(n,"rock",(function(){return Z.a})),a.d(n,"steel",(function(){return te.a})),a.d(n,"water",(function(){return ne.a}));var r=a(0),c=a.n(r),o=a(15),i=a.n(o),l=(a(113),a(10)),s=a(169),m=a(26),p=a(39),u=a.n(p),d=a(167),f=a(22),E=a(161),g=a(163),h=a(164),b=a(165),O=a(185),y=a(166),v=a(55),x=a(186),j=a(52),N=a(67),k=a.n(N),S=a(68),_=a.n(S),L=a(69),w=a.n(L),M=a(70),I=a.n(M),P=a(71),C=a.n(P),R=a(72),T=a.n(R),D=a(73),K=a.n(D),W=a(74),A=a.n(W),G=a(75),U=a.n(G),B=a(76),F=a.n(B),z=a(77),H=a.n(z),J=a(78),$=a.n(J),q=a(43),Q=a.n(q),V=a(79),X=a.n(V),Y=a(80),Z=a.n(Y),ee=a(81),te=a.n(ee),ae=a(82),ne=a.n(ae),re=Object(E.a)((function(e){return{root:{maxWidth:345},small:{width:e.spacing(3),height:e.spacing(3)},title:{display:"flex",justifyContent:"space-around"},large:{width:e.spacing(10),height:e.spacing(10)},chip:{margin:"3px"},name:{textTransform:"capitalize",color:j.a[600]}}}));function ce(e){var t=e.details,a=re();return c.a.createElement(g.a,{in:t&&!0},c.a.createElement(h.a,{raised:!0,className:a.root},c.a.createElement(b.a,{className:a.title,component:f.b,to:"/pokemon/".concat(t.name,"/")},c.a.createElement(O.a,{width:.5,alt:"Remy Sharp",src:t.sprites.front_default,className:a.large}),c.a.createElement(y.a,null,c.a.createElement(v.a,{className:a.name,width:.5,gutterBottom:!0,variant:"h5",component:"h2"},t.name),c.a.createElement("div",{className:""},t.types.map((function(e){return c.a.createElement(x.a,{key:e.type.name,className:a.chip,avatar:c.a.createElement(O.a,{alt:"Remy Sharp",src:n[e.type.name]}),label:e.type.name,variant:"outlined"})})))))))}var oe=a(34),ie=a(183),le=Object(E.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)},text:{color:"white"}}}}));function se(e){var t=e.FetchData,a=e.count,n=le(),o=Object(l.h)().page,i=Object(l.g)(),s=Object(r.useState)(o||1),m=Object(oe.a)(s,2),p=m[0],u=m[1];return Object(r.useEffect)((function(){p!==o&&(t(p),i.push("/".concat(p)),console.log(p))})),c.a.createElement("div",{className:n.root},c.a.createElement(ie.a,{count:Math.ceil(a/12-1),page:parseInt(p,10),color:"primary",onChange:function(e,t){return u(t)}}))}var me=function(e){var t=e.data,a=e.details,n=e.FetchData;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{container:!0,spacing:5,style:{padding:"24px"}},a.map((function(e,t){return c.a.createElement(d.a,{key:t+1,item:!0,xs:12,sm:6,md:4,lg:4,xl:4},c.a.createElement(ce,{details:e}))}))),c.a.createElement(se,{count:t.count,FetchData:n}))},pe=a(61),ue=a.n(pe),de=a(96),fe=a(54),Ee=a.n(fe),ge=function(e){return function(t){try{t({type:"POKEMON_LIST_LOADING"});var a=12*e-12;Ee.a.get("https://pokeapi.co/api/v2/pokemon?offset=".concat(a,"&limit=").concat(12)).then((function(e){return t(he(e.data))}))}catch(n){t({type:"POKEMON_LIST_ERROR"})}}},he=function(e){return function(t){try{t({type:"RESET_DETAILS"}),t({type:"POKEMON_LIST_SUCCESS",payload:e}),e.results.map((function(e){return Ee.a.get(e.url).then((function(e){return t({type:"SINGLE_POKEMON_SUCCESS",payload:e.data})})).then(t({type:"POKEMONS_LOADED"}))}))}catch(a){t({type:"SINGLE_POKEMON_ERROR"})}}},be=a(168),Oe=Object(E.a)((function(e){return{loader:{margin:"200px auto"}}}));function ye(){var e=Oe(),t=Object(m.b)(),a=Object(m.c)((function(e){return e.PokemonList})),n=Object(l.h)().page,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t(ge(e))};return Object(r.useEffect)((function(){o(n||1)}),[]),a.loading?c.a.createElement("div",{className:e.loader},c.a.createElement(be.a,{color:"secondary"})):!u.a.isEmpty(a.data.results)&&!u.a.isEmpty(a.details)&&a.details.length>11?c.a.createElement(me,{data:a.data,details:a.details,FetchData:o}):""!==a.error?a.error:null}var ve=function(){return c.a.createElement(s.a,null,c.a.createElement(ye,null))},xe=a(20),je=a(104),Ne=a(170),ke=a(171),Se=a(187),_e=a(172),Le=a(173),we=a(176),Me=a(174),Ie=a(175),Pe=function(e){var t=e.pokeData,a=e.classes;return c.a.createElement(c.a.Fragment,null,console.log(t),t&&t.abilities.map((function(e){return c.a.createElement(x.a,{label:e.ability.name,variant:"outlined",color:"secondary",className:a.chip})})))},Ce=function(e){var t=e.pokeData,a=e.classes,n=e.pics;return c.a.createElement(c.a.Fragment,null,t.types.map((function(e){return c.a.createElement(x.a,{color:"secondary",className:a.chip,avatar:c.a.createElement(O.a,{alt:"Remy Sharp",src:n[e.type.name]}),label:e.type.name,variant:"outlined"})})))},Re=Object(E.a)((function(e){return{root:{flexGrow:1,paddingTop:"30px"},chip:{margin:"3px"},card:{maxWidth:"600px",border:"1px solid #000"},loader:{margin:"200px auto"},abilities:{display:"block",margin:"0 auto"},img:{maxHeight:"auto",maxWidth:"250px"},imgs:{display:"flex",justifyContent:"space-evenly"},stat:{padding:"25px"},title:Object(xe.a)({color:"#fff",marginTop:"15px",flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block",textTransform:"capitalize"})}})),Te=[{path:"/:page",component:ve,exact:!0},{path:"/pokemon/:pokemon",component:function(e){var t=Re(),a=e.match.params.pokemon,o=Object(m.b)(),i=Object(m.c)((function(e){return e.Pokemon}));c.a.useEffect((function(){var e;o((e=a,function(){var t=Object(de.a)(ue.a.mark((function t(a){var n;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"POKEMON_MULTIPLE_LOADING"}),t.next=4,Ee.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 4:n=t.sent,a({type:"POKEMON_MULTIPLE_SUCCESS",payload:n.data,pokemonName:e}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:"POKEMON_MULTIPLE_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[a]);var l=Object(r.useState)(!0),p=Object(oe.a)(l,2),f=p[0],E=p[1],b=function(){E(!f)};return c.a.createElement("div",null,function(){if(!u.a.isEmpty(i.data[a])){var e=i.data[a];return c.a.createElement(g.a,{in:e,timeout:1100},c.a.createElement(s.a,{maxWidth:"lg"},c.a.createElement(v.a,{className:t.title,variant:"h5",component:"h2",noWrap:!0},a),c.a.createElement("div",{className:t.root},c.a.createElement(d.a,{container:!0,spacing:3},c.a.createElement(d.a,{item:!0,direction:"column",spacing:10,container:!0,xs:7},c.a.createElement(d.a,{spacing:3,item:!0},c.a.createElement(je.a,{className:t.imgs},e.sprites.other.dream_world.front_default&&c.a.createElement(Ne.a,{className:t.img,component:"img",alt:a,image:e.sprites.other.dream_world.front_default,title:"Contemplative Reptile"}),e.sprites.other["official-artwork"].front_default&&c.a.createElement(Ne.a,{className:t.img,component:"img",alt:a,image:e.sprites.other["official-artwork"].front_default,title:"Contemplative Reptile"}))),c.a.createElement(d.a,{item:!0,container:!0,spacing:3},c.a.createElement(d.a,{item:!0},c.a.createElement(h.a,{className:t.root,raised:!0},c.a.createElement(y.a,{style:{display:"flex"}},c.a.createElement(v.a,{variant:"h5",component:"h2",noWrap:!0},"Abilities:"),c.a.createElement(v.a,{style:{marginLeft:"10px"},variant:"body2",component:"p"},c.a.createElement(Pe,{pokeData:e,classes:t}))))),c.a.createElement(d.a,{item:!0,spacing:3},c.a.createElement(h.a,{className:t.root,raised:!0},c.a.createElement(y.a,{style:{display:"flex"}},c.a.createElement(v.a,{variant:"h5",component:"h2",noWrap:!0},"Type:"),c.a.createElement(v.a,{style:{marginLeft:"10px"},variant:"body2",component:"p"},c.a.createElement(Ce,{pokeData:e,classes:t,pics:n}))))))),c.a.createElement(d.a,{item:!0,xs:5},c.a.createElement(je.a,{className:t.paper},c.a.createElement(v.a,{style:{paddingTop:"7px"},variant:"h5",component:"h2",noWrap:!0},"Base characteristics"),c.a.createElement(ke.a,{component:"nav",className:t.list,"aria-label":"mailbox folders"},c.a.createElement(Se.a,null,c.a.createElement(_e.a,{primary:"Height: ".concat(e.height)})),c.a.createElement(Le.a,{light:!0}),c.a.createElement(Se.a,{divider:!0},c.a.createElement(_e.a,{primary:"Base experience: ".concat(e.base_experience)})),c.a.createElement(Se.a,null,c.a.createElement(_e.a,{primary:"Weight: ".concat(e.weight)})),c.a.createElement(Le.a,{light:!0}),c.a.createElement(Se.a,{button:!0,onClick:b},c.a.createElement(_e.a,{primary:"Stats"}),f?c.a.createElement(Me.a,null):c.a.createElement(Ie.a,null)),c.a.createElement(we.a,{in:f,timeout:"auto",unmountOnExit:!0},c.a.createElement(d.a,{className:t.stat,container:!0,spacing:3},e.stats.map((function(e){return c.a.createElement(d.a,{item:!0,md:6},c.a.createElement(je.a,null,c.a.createElement(v.a,{color:"primary",variant:"h6",style:{textTransform:"capitalize"}},"".concat(e.stat.name,": ").concat(e.base_stat))))})))))))))))}return i.loading?c.a.createElement("div",{className:t.loader},c.a.createElement(be.a,{color:"secondary"})):""!==i.errorMsg?c.a.createElement("p",null,i.errorMsg):c.a.createElement("p",null,"error getting pokemon")}())},exact:!0}],De=function(){return c.a.createElement("div",null,c.a.createElement(l.d,null,Te.map((function(e,t){var a=e.path,n=e.component,r=e.exact;return c.a.createElement(l.b,{key:n,path:a,component:n,exact:r})})),c.a.createElement(l.a,{to:"/1"})))},Ke=a(36),We=a(177),Ae=a(178),Ge=a(179),Ue=a(184),Be=a(180),Fe=a(6),ze=a(97),He=a.n(ze),Je=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(xe.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(xe.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Fe.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Fe.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchBtn:{color:"#fff"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(xe.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function $e(e){return c.a.createElement(Ke.a,e,c.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}function qe(){var e=Je(),t=Object(r.useState)(""),a=Object(oe.a)(t,2),n=a[0],o=a[1],i=Object(l.g)();return c.a.createElement("div",{className:e.root},c.a.createElement(We.a,{position:"static"},c.a.createElement(Ae.a,null,c.a.createElement(Ge.a,{onClick:function(){i.push("/1")},edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},c.a.createElement($e,null)),c.a.createElement(v.a,{className:e.title,variant:"h6",noWrap:!0},"PokeBase"),c.a.createElement("div",{className:e.search},c.a.createElement("div",{className:e.searchIcon},c.a.createElement(He.a,null)),c.a.createElement(Ue.a,{value:n,onChange:function(e){var t=e.target.value.toLowerCase().trim();o(t)},placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}}),c.a.createElement(Be.a,{className:e.searchBtn,onClick:function(){o("")},component:f.b,to:"/pokemon/".concat(n)},"Search")))))}a(140);var Qe=a(182),Ve=a(100),Xe=a(181),Ye=a(53),Ze=Object(Ve.a)({palette:{primary:{main:j.a[600]},secondary:{main:Ye.a[500]},background:{default:"#333"}}});var et=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(Xe.a,{theme:Ze},c.a.createElement(Qe.a,null),c.a.createElement(qe,null),c.a.createElement(De,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tt=a(23),at=a(98),nt=a(99),rt=a(101),ct=a(8),ot={data:[],error:"",loading:!1,details:[]},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_LIST_LOADING":return Object(ct.a)(Object(ct.a)({},e),{},{loading:!0,error:""});case"POKEMON_LIST_ERROR":return Object(ct.a)(Object(ct.a)({},e),{},{loading:!1,error:"PokemonList error"});case"POKEMON_LIST_SUCCESS":return Object(ct.a)(Object(ct.a)({},e),{},{data:t.payload,error:""});case"SINGLE_POKEMON_SUCCESS":return Object(ct.a)(Object(ct.a)({},e),{},{details:[].concat(Object(rt.a)(e.details),[t.payload]),error:""});case"SINGLE_POKEMON_ERROR":return Object(ct.a)(Object(ct.a)({},e),{},{loading:!1,error:"Single pokemon error error"});case"POKEMONS_LOADED":return Object(ct.a)(Object(ct.a)({},e),{},{loading:!1,error:""});case"RESET_DETAILS":return Object(ct.a)(Object(ct.a)({},e),{},{details:[]});default:return e}},lt={loading:!1,data:{},errorMsg:""},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_MULTIPLE_LOADING":return Object(ct.a)(Object(ct.a)({},e),{},{loading:!0,errorMsg:""});case"POKEMON_MULTIPLE_FAIL":return Object(ct.a)(Object(ct.a)({},e),{},{loading:!1,errorMsg:"unable to find pokemon"});case"POKEMON_MULTIPLE_SUCCESS":return Object(ct.a)(Object(ct.a)({},e),{},{loading:!1,errorMsg:"",data:Object(ct.a)(Object(ct.a)({},e.data),{},Object(xe.a)({},t.pokemonName,t.payload))});default:return e}},mt=Object(tt.combineReducers)({PokemonList:it,Pokemon:st}),pt=Object(tt.createStore)(mt,Object(at.composeWithDevTools)(Object(tt.applyMiddleware)(nt.a)));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f.a,null,c.a.createElement(m.a,{store:pt},c.a.createElement(et,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){e.exports=a.p+"static/media/normal.47d2e7b2.png"},67:function(e,t,a){e.exports=a.p+"static/media/bug.b3d23c0c.png"},68:function(e,t,a){e.exports=a.p+"static/media/ice.d03edb7e.png"},69:function(e,t,a){e.exports=a.p+"static/media/fire.eac89c9a.png"},70:function(e,t,a){e.exports=a.p+"static/media/dark.43fad52b.png"},71:function(e,t,a){e.exports=a.p+"static/media/dragon.3c95d051.png"},72:function(e,t,a){e.exports=a.p+"static/media/electric.a640e222.png"},73:function(e,t,a){e.exports=a.p+"static/media/fairy.d882ac5f.png"},74:function(e,t,a){e.exports=a.p+"static/media/flying.31e9a60b.png"},75:function(e,t,a){e.exports=a.p+"static/media/fighting.94e1c660.png"},76:function(e,t,a){e.exports=a.p+"static/media/ghost.c3242dce.png"},77:function(e,t,a){e.exports=a.p+"static/media/grass.2b9b1bfc.png"},78:function(e,t,a){e.exports=a.p+"static/media/ground.f3a61fdc.png"},79:function(e,t,a){e.exports=a.p+"static/media/psycic.f4486dcb.png"},80:function(e,t,a){e.exports=a.p+"static/media/rock.c6a84bf6.png"},81:function(e,t,a){e.exports=a.p+"static/media/steel.00b3109a.png"},82:function(e,t,a){e.exports=a.p+"static/media/water.e43fbc98.png"}},[[108,1,2]]]);
//# sourceMappingURL=main.8afbfbb2.chunk.js.map