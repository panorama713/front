(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{379:function(t,o,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("80fe3580",content,!0,{sourceMap:!1})},385:function(t,o,n){"use strict";n(379)},386:function(t,o,n){var e=n(58)(!1);e.push([t.i,'.item-loc{padding:0}.map-list{width:400px;height:100px;list-style:none;padding:10px;margin:10px;border:1px solid #d3d3d3;box-shadow:0 2px 2px 0 rgba(0,0,0,.15);border-radius:10px;cursor:pointer}.activeList{border:2px solid #a30000}.map-list .title{font-weight:500;font-size:16px;padding:10px 0 5px 10px;margin:0}.map-list .content{font-weight:300;font-size:14px;padding:5px 0 5px 10px;margin:0}.map-container{display:flex;justify-content:center}.map-board{width:600px;height:350px}.custom-con{position:absolute;background:#fff!important;right:40px;top:3px;z-index:100;border-radius:5px;text-align:center;width:80px;height:35px;box-shadow:0 2px 2px 0 rgba(0,0,0,.15);line-height:35px;font-size:14px;font-weight:500;cursor:pointer}.customoverlay{position:relative;bottom:65px;border-radius:6px;border:1px solid #ccc!important;border-bottom:2px solid #ddd;float:left}.customoverlay .text{font-family:"Noto Sans KR";background:#fff;margin-right:35px;padding:8px 15px}.customoverlay .text,.customoverlay a{display:block;text-align:center;font-size:14px;font-weight:700}.customoverlay a{text-decoration:none;color:#000;border-radius:6px;overflow:hidden;background:#a30000;background:#a30000 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center}',""]),t.exports=e},420:function(t,o,n){"use strict";n.r(o);n(15);var e={name:"KaKaoMapApiCom",data:function(){return{locations:[{title:"흑돼지식당",content:"- 맛있는 제주 흑돼지를 먹을 수 있는 숯불구이 전문점",position:new kakao.maps.LatLng(33.452278,126.567803)},{title:"멘도롱카페",content:"- 제주감귤을 직접 착즙해 만드는 감귤에이드가 맛있는 카페",position:new kakao.maps.LatLng(33.452671,126.574792)},{title:"제주호텔 임페리얼",content:"- 제주바다가 한눈에 보이는 오션뷰의 5성급 호텔",position:new kakao.maps.LatLng(33.451744,126.572441)}],coords:[],map:null,activeList:null,bounds:null}},methods:{setBounds:function(){for(var i=0;i<this.locations.length;i++)this.bounds.extend(this.locations[i].position),this.map.setBounds(this.bounds)},positionChange:function(t,o){var n=t;this.map.panTo(n),this.activeList=o,console.log(o)},kakaoMapShow:function(){var t=this.$refs.map,o={center:new kakao.maps.LatLng(33.450701,126.570667),level:3},map=new kakao.maps.Map(t,o);this.map=map;var n=new kakao.maps.ZoomControl;map.addControl(n,kakao.maps.ControlPosition.RIGHT);var e=[],l=(new kakao.maps.services.Geocoder,new kakao.maps.LatLngBounds);this.bounds=l;for(var i=0;i<this.locations.length;i++){var r={content:'<div class="customoverlay"><a><span class="text">'+this.locations[i].title+"</span></a></div>",latlng:this.locations[i].position};e.push(r)}console.log("positions = {}",e);for(var c=0;c<e.length;c++){new kakao.maps.Marker({map:map,position:e[c].latlng}),new kakao.maps.CustomOverlay({map:map,position:e[c].latlng,content:e[c].content});this.bounds.extend(e[c].latlng)}map.setBounds(this.bounds)}},mounted:function(){this.kakaoMapShow()}},l=(n(385),n(46)),component=Object(l.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("div",{staticClass:"map-container"},[n("ul",{staticClass:"item-loc"},t._l(t.locations,(function(o,e){return n("li",{key:e,staticClass:"map-list",class:{activeList:t.activeList==e},on:{click:function(n){return t.positionChange(o.position,e)}}},[n("p",{staticClass:"title"},[t._v(t._s(o.title))]),t._v(" "),n("p",{staticClass:"content"},[t._v(t._s(o.content))])])})),0),t._v(" "),n("div",{ref:"map",staticClass:"map-board"},[n("div",{staticClass:"custom-con"},[n("p",{on:{click:t.setBounds}},[t._v("전체보기")])])])])])}),[],!1,null,null,null);o.default=component.exports}}]);