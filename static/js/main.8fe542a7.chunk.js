(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{19:function(e,t,n){e.exports=n(47)},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),s=(n(24),n(2)),l=n.n(s),i=n(13),u=n(14),m=n(15),h=n(18),d=n(17);n(26),n(27);function p(e){return a.createElement("div",{className:"card-container"},a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster avatar"}),a.createElement("h2",null,e.monster.name),a.createElement("p",null,e.monster.email))}var f=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(p,{key:e.id,monster:e})})))};n(28);function v(e){var t=e.placeholder,n=e.handleChange;return a.createElement("div",null,a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n}))}var E=n(16),g=n.n(E),w=(n(46),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({searchField:e.target.value})},a.state={monsters:[],searchField:""},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({monsters:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(v,{placeholder:"Search Monsters...",handleChange:this.handleChange}),r.a.createElement(f,{monsters:a}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.8fe542a7.chunk.js.map