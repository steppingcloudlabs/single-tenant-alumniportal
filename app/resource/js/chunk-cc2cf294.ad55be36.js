(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc2cf294"],{1573:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-navigation-drawer",{staticStyle:{"margin-top":"60px","background-image":"linear-gradient(to top, rgba(226, 198, 92, 0.7), rgba(26, 38, 92, 0.7))"},attrs:{id:"app-drawer",app:"",dark:"",floating:"","mobile-break-point":"991",persistent:"",width:"260"},model:{value:t.showDrawer,callback:function(i){t.showDrawer=i},expression:"showDrawer"}},[s("v-list-item",{attrs:{"two-line":""}},[s("v-list-item-avatar",{attrs:{color:"white"}},[s("img",{attrs:{src:e("10ab")}}),t._v("\n      >\n    ")]),s("v-list-item-title",{staticClass:"title"},[t._v("Welcome Admin!!")])],1),s("v-divider",{staticClass:"mx-3 mb-3"}),s("v-list",{attrs:{nav:""}},[s("div"),t._l(t.links,(function(i,e){return s("v-list-item",{key:e,attrs:{to:i.to,"active-class":"primary white--text"}},[s("v-list-item-action",[s("v-icon",{attrs:{color:"white"}},[t._v(t._s(i.icon))])],1),s("v-list-item-title",{domProps:{textContent:t._s(i.text)}})],1)})),s("v-list-item",{on:{click:t.logout}},[s("v-list-item-action",[s("v-icon",[t._v("mdi-logout")])],1),s("v-list-item-title",[t._v("Logout")])],1)],2)],1)},a=[],n=e("fa7d"),r={props:{opened:{type:Boolean,default:!1}},data:()=>({image:"",inputValue:!0,user:{firstname:"hello"},links:[{to:"/admin/dashboard",icon:"mdi-view-dashboard",text:"Dashboard"},{to:"/admin/Add",icon:"mdi-account",text:"Add Alumni"},{to:"/admin/newsupload",icon:"mdi-newspaper",text:"Update News & events"},{to:"/admin/document",icon:"mdi-clipboard",text:"Upload Documents"},{to:"/admin/update",icon:"mdi-chart-bubble",text:"FAQ Update"},{to:"/admin/settings",icon:"mdi-home-modern",text:"Company Settings"}]}),computed:{showDrawer:{set(t){this.$store.commit("adminModule/setshowDrawer",t)},get(){return this.$store.getters["adminModule/getshowDrawer"]}}},beforeMount(){this.showDrawer=!0},methods:{logout(){Object(n["c"])(),this.$router.push({path:"/"}),console.log("session deleted")}}},o=r,h=e("2877"),c=e("6544"),l=e.n(c),d=e("ce7e"),u=e("132d"),p=e("8860"),v=e("da13"),m=e("1800"),g=e("8270"),b=e("5d23"),w=e("f774"),f=Object(h["a"])(o,s,a,!1,null,null,null);i["default"]=f.exports;l()(f,{VDivider:d["a"],VIcon:u["a"],VList:p["a"],VListItem:v["a"],VListItemAction:m["a"],VListItemAvatar:g["a"],VListItemTitle:b["c"],VNavigationDrawer:w["a"]})},7958:function(t,i,e){},f774:function(t,i,e){"use strict";e("7958");var s=e("adda"),a=e("3a66"),n=e("a9ad"),r=e("b848"),o=e("e4cd"),h=e("e707"),c=e("d10f"),l=e("7560"),d=e("a293"),u=e("dc22"),p=e("c3f0"),v=e("80d2"),m=e("58df");const g=Object(m["a"])(Object(a["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),n["a"],r["a"],o["a"],h["a"],c["a"],l["a"]);i["a"]=g.extend({name:"v-navigation-drawer",directives:{ClickOutside:d["a"],Resize:u["a"],Touch:p["a"]},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&o["a"].options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:Object(v["g"])(this.height),top:this.isBottom?"auto":Object(v["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${Object(v["g"])(this.computedMaxHeight)})`:void 0,transform:`${t}(${Object(v["g"])(this.computedTransform,"%")})`,width:Object(v["g"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,i){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=i&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const i=t.getBoundingClientRect();this.touchArea={left:i.left+50,right:i.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},i=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(s["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[i])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),this.expandOnHover&&(t.mouseenter=()=>this.isMouseover=!0,t.mouseleave=()=>this.isMouseover=!1),t},genPosition(t){const i=Object(v["s"])(this,t);return i?this.$createElement("div",{staticClass:"v-navigation-drawer__"+t},i):i},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const i=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(v["s"])(this,"img"))&&i.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),i)}})}}]);
//# sourceMappingURL=chunk-cc2cf294.ad55be36.js.map