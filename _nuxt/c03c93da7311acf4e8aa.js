(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{199:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1065620c",content,!0,{sourceMap:!1})},200:function(t,e,n){var content=n(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("12076da8",content,!0,{sourceMap:!1})},201:function(t,e,n){var content=n(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2a38d390",content,!0,{sourceMap:!1})},212:function(t,e,n){"use strict";var o=n(199);n.n(o).a},213:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".new-comment{text-align:center}.new-comment .contact-form{max-width:600px;margin:30px auto}.new-comment .controls{margin:30px 0}",""])},214:function(t,e,n){"use strict";var o=n(200);n.n(o).a},215:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".comments{margin:30px auto;text-align:center}.comment{padding:20px;width:600px;margin-bottom:20px;background-color:#fff}.comment .name{margin-bottom:12px;font-size:24px;color:#5c4de7}",""])},216:function(t,e,n){"use strict";var o=n(201);n.n(o).a},217:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".post{max-width:900px;margin:0 auto}.post-header{text-align:center;margin-bottom:30px}.post-header img{margin-bottom:16px;max-width:400px}.post-header p{color:#999}.post-body{text-align:left}",""])},222:function(t,e,n){"use strict";n.r(e);n(74),n(56),n(29),n(75);var o=n(108),c=(n(57),n(9)),r={props:{post:{type:Object,required:!0}}},m=n(2),l=Object(m.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"post"},[n("div",{staticClass:"container"},[n("div",{staticClass:"post-header"},[n("img",{attrs:{src:t.post.img,alt:t.post.title}}),t._v(" "),n("h1",{staticClass:"title"},[t._v(" "+t._s(t.post.title)+" ")]),t._v(" "),n("p",[t._v(t._s(t.post.descr))])]),t._v(" "),n("div",{staticClass:"post-body"},[n("p",[t._v(" "+t._s(t.post.content)+" ")])])])])},[],!1,null,null,null).exports,d=(n(36),n(7)),f={props:{postId:{type:String,requred:!1}},data:function(){return{message:null,comment:{name:"",text:""}}},methods:{onSubmit:function(){var t=this;this.$store.dispatch("addComment",Object(d.a)({postId:this.postId,publish:!1},this.comment)).then(function(){t.message="Submited!",t.comment.name="",t.comment.text=""}).catch(function(t){return console.log(t)})}}},h=(n(212),Object(m.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"new-comment"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v(" New Comment: ")]),t._v(" "),t.message?n("Message",{attrs:{message:t.message}}):t._e(),t._v(" "),n("form",{staticClass:"contact-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("AppInput",{model:{value:t.comment.name,callback:function(e){t.$set(t.comment,"name",e)},expression:"comment.name"}},[t._v(" Name: ")]),t._v(" "),n("AppTextArea",{model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}},[t._v(" Text: ")]),t._v(" "),n("div",{staticClass:"controls"},[n("AppButton",[t._v(" Submit! ")])],1)],1)],1)])},[],!1,null,null,null).exports),v={props:{comments:{type:Array,default:null}}},x=(n(214),Object(m.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comments?n("section",{staticClass:"comments"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v(" Comments: ")]),t._v(" "),0==t.comments.length?n("p",[t._v("Comments: 0")]):t._e(),t._v(" "),t._l(t.comments,function(e){return n("div",{key:e.name,staticClass:"comment"},[n("p",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(e.text))])])})],2)]):t._e()},[],!1,null,null,null).exports),_=n(27),C=n.n(_),w={components:{post:l,comments:x,newComment:h},head:function(){var title=this.post.title,t=this.post.descr;return{title:title,meta:[{hid:"og: title",name:"title",content:title},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:img",name:"og:img",content:"site.com/".concat(this.post.img)}]}},asyncData:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e){var n,c,r,m,l,d,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([C.a.get("https://blog-nuxt-f6865-default-rtdb.firebaseio.com/posts/".concat(e.params.id,".json")),C.a.get("https://blog-nuxt-f6865-default-rtdb.firebaseio.com/comments.json")]);case 2:for(n=t.sent,c=Object(o.a)(n,2),r=c[0],m=c[1],l=[],d=[],Object.keys(m.data).forEach(function(t){l.push(m.data[t])}),i=0;i<l.length;i++)l[i].postId===e.params.id&&!0===l[i].publish&&d.push(l[i]);return t.abrupt("return",{post:r.data,comments:d});case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},y=(n(216),Object(m.a)(w,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper-content wrapper-content--fixed"},[e("post",{attrs:{post:this.post}}),this._v(" "),e("comments",{attrs:{comments:this.comments}}),this._v(" "),e("newComment",{attrs:{postId:this.$route.params.id}})],1)},[],!1,null,null,null));e.default=y.exports}}]);