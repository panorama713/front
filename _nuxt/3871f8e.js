(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{364:function(t,e,n){"use strict";var o=n(66),r=n.n(o);e.a=r.a.create({baseURL:"http://localhost:8000/api",headers:{"Content-type":"application/json"}})},369:function(t,e,n){"use strict";var o=n(23),r=n(24),c=n(364),l=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"upload",value:function(title,content,t,e,n){var o=new FormData;return o.append("title",title),o.append("content",content),o.append("userIdx",t),o.append("file",e),c.a.post("/inform/upload",o,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:n})}},{key:"getReplyCount",value:function(t){return c.a.get("/inform/detail/replyCount/".concat(t))}},{key:"getAllFiles",value:function(){return c.a.get("/inform/files/all")}},{key:"topThree",value:function(){return c.a.get("/inform/topthree/all")}},{key:"getFiles",value:function(t){return c.a.get("/inform/files/".concat(t))}},{key:"getDetailFiles",value:function(t){return c.a.get("/inform/files/detail/".concat(t))}},{key:"getAll",value:function(){return c.a.get("/inform/list")}},{key:"get",value:function(t){return c.a.get("/inform/detail/".concat(t))}},{key:"create",value:function(data){return c.a.post("/inform/write",data)}},{key:"update",value:function(t,data){return c.a.put("/inform/detail/update/".concat(t),data)}},{key:"delete",value:function(t){return c.a.put("/inform/deletion/".concat(t))}}]),t}();e.a=new l},399:function(t,e,n){var content=n(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("249caa21",content,!0,{sourceMap:!1})},447:function(t,e,n){t.exports=n.p+"img/top-beach2-pic.04174bc.jpg"},448:function(t,e,n){"use strict";n(399)},449:function(t,e,n){var o=n(58)(!1);o.push([t.i,".main-container .sub-title[data-v-6e10aaba]{margin:40px 0 40px 18vw}.top3-card[data-v-6e10aaba]{position:relative;width:350px}.top3-card:hover .topcard-body[data-v-6e10aaba]{opacity:.8;transition:.6s ease}.topcard-body[data-v-6e10aaba]{position:absolute;bottom:0;width:350px;height:45%;opacity:0;padding:20px 10px 5px}.card-footer[data-v-6e10aaba]{bottom:0;position:absolute;margin:0;background:none;border:none;padding:10px 0;font-size:13px;font-weight:200}.card-img[data-v-6e10aaba]{width:350px;height:350px}.list-container[data-v-6e10aaba]{margin:40px 0 40px 18vw}.top-banner[data-v-6e10aaba]{display:flex;align-items:center;justify-content:center}.top-banner[data-v-6e10aaba],.top-img[data-v-6e10aaba]{height:300px;width:100%}.top-img[data-v-6e10aaba]{position:relative;filter:opacity(80%)}.top-text[data-v-6e10aaba]{position:absolute;text-align:center}.top-banner>p[data-v-6e10aaba]{font-weight:200;font-size:14px}.sub-title[data-v-6e10aaba]{margin-top:50px}.top-container[data-v-6e10aaba]{width:1200px;height:450px;display:flex;padding:30px;margin:0 auto;align-content:center;justify-content:space-evenly;flex-wrap:wrap}.top-card[data-v-6e10aaba]{margin:0 auto 20px}.board-card[data-v-6e10aaba],.top-card[data-v-6e10aaba]{display:flex;align-items:flex-start;height:180px;flex-wrap:wrap;width:900px;box-sizing:content-box}.board-card[data-v-6e10aaba]{margin:0 auto;border:none;background-color:#f0f0f0;align-content:flex-start}.content-border[data-v-6e10aaba]{width:900px;margin:20px auto}.thumbnail[data-v-6e10aaba]{width:250px;height:180px;-o-object-fit:cover;object-fit:cover;border-radius:5px 0 0 5px;margin-right:10px}.card-bottom[data-v-6e10aaba]{padding:10px 16px 20px}.card-body[data-v-6e10aaba]{width:620px;padding-bottom:0}.card-title[data-v-6e10aaba]{font-size:18px;font-weight:500;margin-bottom:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card-text[data-v-6e10aaba]{font-size:15px}.card-content[data-v-6e10aaba],.card-text[data-v-6e10aaba]{font-weight:300;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.card-content[data-v-6e10aaba]{margin:0;font-size:12}.btn[data-v-6e10aaba]{border:none;background-color:#a30000;color:#fff;margin-right:auto;display:flex}",""]),t.exports=o},524:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"top-banner"},[o("img",{staticClass:"top-img",attrs:{src:n(447),alt:"배너이미지"}}),t._v(" "),o("div",{staticClass:"top-text"},[o("h4",[t._v("여행정보")]),t._v(" "),o("p",{staticClass:"small text-muted"},[t._v("\n                국내의 다양한 여행지를 선별해 소개해 드립니다\n            ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-container"},[n("h5",{staticClass:"sub-title"},[t._v("오늘의 TOP3🥇")])])}],r=n(369),c={name:"travel-info",layout:"MyPage",data:function(){return{uploads:[],topts:[]}},methods:{moveTo:function(t){this.$router.push("/inform/detail/"+t)},moveTo2:function(t){this.$router.push("/inform/detail/"+t)},retrieveShowImage:function(){var t=this;r.a.getAllFiles().then((function(e){t.uploads=e.data})).catch((function(t){alert(t)}))},retrieveTopThree:function(){var t=this;r.a.topThree().then((function(e){t.topts=e.data})).catch((function(t){alert(t)}))}},mounted:function(){this.retrieveShowImage(),this.retrieveTopThree(),localStorage.setItem("idx","141"),localStorage.getItem("idx")}},l=(n(448),n(46)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticStyle:{background:"#f0f0f0"}},[n("div",{staticClass:"top-container"},t._l(t.topts,(function(e,o){return n("div",{key:o,staticClass:"top3-card",staticStyle:{cursor:"pointer"},on:{click:function(n){return t.moveTo(e.idx)}}},[n("img",{staticClass:"card-img",attrs:{src:e.url,alt:"게시물 이미지"}}),t._v(" "),n("div",{staticClass:"bg-light text-black topcard-body"},[n("p",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("\n                        "+t._s(e.content)+"\n                    ")]),t._v(" "),n("p",{staticClass:"card-footer"},[t._v("\n                            "+t._s(e.insertTime)+" | 조회수\n                            "+t._s(e.count)+" | 댓글수\n                            "+t._s(e.replyCount)+"\n                    ")])])])})),0)]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"main-container"},[n("div",{staticClass:"main-container"},[n("h5",{staticClass:"sub-title"},[t._v("전체 게시글")]),t._v(" "),n("hr"),t._v(" "),t._l(t.uploads,(function(e,o){return n("div",{key:o,staticClass:"card board-card cardheight",staticStyle:{cursor:"pointer","margin-bottom":"15px"},on:{click:function(n){return t.moveTo2(e.idx)}}},[n("div",{staticClass:"thumbnail-container"},[n("img",{staticClass:"thumbnail",attrs:{src:e.url,alt:"컨텐츠 이미지"}})]),t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"card-content"},[t._v("\n                        "+t._s(e.content)+"\n                    ")])]),t._v(" "),n("div",{staticClass:"card-bottom"},[n("p",{staticClass:"card-text"},[n("small",{staticClass:"text-muted"},[t._v(t._s(e.insertTime)+" | 조회수\n                            "+t._s(e.count)+" | 댓글수\n                            "+t._s(e.replyCount)+"\n                        ")])])])])})),t._v(" "),n("hr")],2)])])}),o,!1,null,"6e10aaba",null);e.default=component.exports}}]);