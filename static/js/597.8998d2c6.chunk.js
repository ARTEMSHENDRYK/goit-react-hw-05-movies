"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{126:function(e,t,r){r.r(t),r.d(t,{getMovieCredits:function(){return h},getMovieDetails:function(){return v},getMovieReviews:function(){return g},getSearchMovies:function(){return p},getTrending:function(){return i}});var n=r(861),a=r(757),c=r.n(a),s=r(243),u={api_key:"e11933f426665230c05914275e20f129",language:"en-US"};function i(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("https://api.themoviedb.org/3/trending/movie/day?",{params:u});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&page=1"),{params:u});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("https://api.themoviedb.org/3/movie/".concat(t,"?"),{params:u});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/credits?"),{params:u});case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?page=1"),{params:u});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var w={getTrending:i,getSearchMovies:p,getMovieDetails:v,getMovieCredits:h,getMovieReviews:g};t.default=w},597:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(126),i=r(791),o=r(689),p=r(184);t.default=function(){var e=(0,i.useState)(),t=(0,a.Z)(e,2),r=t[0],c=t[1],l=(0,o.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getMovieCredits)(l);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,p.jsx)(p.Fragment,{children:r&&(0,p.jsx)("ul",{children:r.map((function(e){var t=e.id,r=e.profile_path,n=e.name,a=e.original_name,c=e.character;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(r),alt:n}),(0,p.jsx)("p",{children:a}),(0,p.jsxs)("p",{children:["Character: ",c]})]},t)}))})})}}}]);
//# sourceMappingURL=597.8998d2c6.chunk.js.map