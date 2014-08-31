// Compiled by ClojureScript 0.0-2311
goog.provide('teashop.core');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
teashop.core.products = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Alishan Oolong"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Dayuling High-mountain Tea"], null)], null);
if(typeof teashop.core.state !== 'undefined')
{} else
{teashop.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Tea shop!",new cljs.core.Keyword(null,"products","products",1876973544),teashop.core.products], null));
}
om.core.root.call(null,(function (app,owner){if(typeof teashop.core.t18550 !== 'undefined')
{} else
{
/**
* @constructor
*/
teashop.core.t18550 = (function (owner,app,meta18551){
this.owner = owner;
this.app = app;
this.meta18551 = meta18551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
teashop.core.t18550.cljs$lang$type = true;
teashop.core.t18550.cljs$lang$ctorStr = "teashop.core/t18550";
teashop.core.t18550.cljs$lang$ctorPrWriter = (function (this__8511__auto__,writer__8512__auto__,opt__8513__auto__){return cljs.core._write.call(null,writer__8512__auto__,"teashop.core/t18550");
});
teashop.core.t18550.prototype.om$core$IRender$ = true;
teashop.core.t18550.prototype.om$core$IRender$render$arity$1 = (function (this__9537__auto__){var self__ = this;
var this__9537__auto____$1 = this;return React.DOM.div(null,React.DOM.h2(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.ul(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (this__9537__auto____$1){
return (function (product){return React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(product));
});})(this__9537__auto____$1))
,new cljs.core.Keyword(null,"products","products",1876973544).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});
teashop.core.t18550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18552){var self__ = this;
var _18552__$1 = this;return self__.meta18551;
});
teashop.core.t18550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18552,meta18551__$1){var self__ = this;
var _18552__$1 = this;return (new teashop.core.t18550(self__.owner,self__.app,meta18551__$1));
});
teashop.core.__GT_t18550 = (function __GT_t18550(owner__$1,app__$1,meta18551){return (new teashop.core.t18550(owner__$1,app__$1,meta18551));
});
}
return (new teashop.core.t18550(owner,app,null));
}),teashop.core.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return cljs.core.print.call(null,"reloaded");
}));

//# sourceMappingURL=core.js.map