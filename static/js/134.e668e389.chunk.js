"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{126:function(e,t,r){r.r(t),r.d(t,{getMovieCredits:function(){return h},getMovieDetails:function(){return v},getMovieReviews:function(){return m},getSearchMovies:function(){return p},getTrending:function(){return o}});var n=r(861),a=r(757),u=r.n(a),c=r(243),s={api_key:"e11933f426665230c05914275e20f129",language:"en-US"};function o(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.Z)("https://api.themoviedb.org/3/trending/movie/day?",{params:s});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.Z)("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&page=1"),{params:s});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.Z)("https://api.themoviedb.org/3/movie/".concat(t,"?"),{params:s});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/credits?"),{params:s});case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?page=1"),{params:s});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var w={getTrending:o,getSearchMovies:p,getMovieDetails:v,getMovieCredits:h,getMovieReviews:m};t.default=w},134:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(126),o=r(791),i=r(87),p=r(689),l=r(184);t.default=function(){var e,t=(0,o.useState)([]),r=(0,a.Z)(t,2),u=r[0],v=r[1],f=(0,i.useSearchParams)(),h=(0,a.Z)(f,2),d=h[0],m=h[1],g=null!==(e=d.get("query"))&&void 0!==e?e:"",w=(0,p.TH)();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.getSearchMovies)(g);case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();g&&e()}),[g]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),g.trim()){var t=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.getSearchMovies)(g);case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t()}else alert("Some search query needed.")},children:[(0,l.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:g,onChange:function(e){e.target.value.toLowerCase()?m({query:e.target.value.toLowerCase()}):m({})}}),(0,l.jsx)("button",{type:"submit",children:(0,l.jsx)("span",{children:"Search"})})]}),u.map((function(e){var t=e.id,r=e.title;return(0,l.jsx)(i.Link,{to:"/movies/".concat(t),state:{from:w},children:(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:r})})},t)}))]})}}}]);
//# sourceMappingURL=134.e668e389.chunk.js.map