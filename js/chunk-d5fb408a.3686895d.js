(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5fb408a"],{"60bc":function(t,s,i){},"9ab2":function(t,s,i){"use strict";i.r(s);var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"itemInfo"}},[i("div",{staticClass:"content"},[i("h2",{staticClass:"path"},[t._v("/\n      "),i("router-link",{attrs:{to:"/shop/all"}},[t._v(" Product")]),t._v(" /\n      "),i("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.$router.push("/shop/"+t.$store.state.fromPage)}}},[t._v("\n       "+t._s(t.$store.state.fromPage)+"\n      ")])],1),i("div",{staticClass:"imageWrap"},[i("img",{attrs:{src:t.product.imageUrl}}),t.product.description?i("img",{staticClass:"hoverImg",attrs:{src:t.product.description}}):t._e()]),i("ul",{staticClass:"itemInfo"},[i("li",[i("h2",[t._v(t._s(t.product.title))])]),i("li",[i("h4",[t._v(t._s(t.product.content||"-"))])]),i("li",{staticClass:"origin"},[t._v("NT$ "+t._s(t.product.origin_price))]),i("li",{staticClass:"final"},[t._v("NT$ "+t._s(t.product.price))]),i("li",[i("div",{staticClass:"form-control",on:{click:function(t){t.stopPropagation()}}},[i("button",{staticClass:"btn less",on:{click:function(s){return t.qtyChange(-1)}}},[i("i",{staticClass:"fas fa-minus"})]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.buyQty,expression:"buyQty"}],attrs:{type:"number",max:"10",min:"1"},domProps:{value:t.buyQty},on:{input:function(s){s.target.composing||(t.buyQty=s.target.value)}}}),i("button",{staticClass:"btn plus",on:{click:function(s){return t.qtyChange(1)}}},[i("i",{staticClass:"fas fa-plus"})]),i("button",{staticClass:"btn btn-outline-info commit",on:{click:function(s){return t.addtoCart(t.product.id,t.buyQty)}}},[t._v("加入購物車")])])])])])])},a=[],o={name:"itemInfo",data:function(){return{buyQty:1}},created:function(){this.$store.dispatch("getOnePro",this.$route.params.pro_id)},methods:{addtoCart:function(t){var s=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(this.user.uid){var n="".concat("http://localhost:3000","/api/cart"),a={uid:this.user.uid,product_id:t,qty:i};this.$store.commit("LOADINGCHANGE",!0),this.axios.post(n,a).then((function(){s.$store.commit("LOADINGCHANGE",!1),s.$store.dispatch("getCart")}))}else this.$store.dispatch("updateMessage",{message:"請登入會員",status:"danger"})},qtyChange:function(t){1===t&&this.buyQty>=10?this.buyQty=10:-1===t&&this.buyQty<=1?this.buyQty=1:this.buyQty+=t}},computed:{product:function(){return this.$store.state.product},user:function(){return this.$store.state.user}}},e=o,r=(i("b1bd"),i("2877")),c=Object(r["a"])(e,n,a,!1,null,null,null);s["default"]=c.exports},b1bd:function(t,s,i){"use strict";var n=i("60bc"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-d5fb408a.3686895d.js.map