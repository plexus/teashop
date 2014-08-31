// Compiled by ClojureScript 0.0-2311
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__15168,args){var map__15170 = p__15168;var map__15170__$1 = ((cljs.core.seq_QMARK_.call(null,map__15170))?cljs.core.apply.call(null,cljs.core.hash_map,map__15170):map__15170);var debug = cljs.core.get.call(null,map__15170__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__15168,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__15168,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__15171){
var p__15168 = cljs.core.first(arglist__15171);
var args = cljs.core.rest(arglist__15171);
return log__delegate(p__15168,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__15172){var map__15174 = p__15172;var map__15174__$1 = ((cljs.core.seq_QMARK_.call(null,map__15174))?cljs.core.apply.call(null,cljs.core.hash_map,map__15174):map__15174);var websocket_url = cljs.core.get.call(null,map__15174__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__15175,callback){var map__15177 = p__15175;var map__15177__$1 = ((cljs.core.seq_QMARK_.call(null,map__15177))?cljs.core.apply.call(null,cljs.core.hash_map,map__15177):map__15177);var msg = map__15177__$1;var dependency_file = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__7944__auto__ = dependency_file;if(cljs.core.truth_(or__7944__auto__))
{return or__7944__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__15177,map__15177__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__15177,map__15177__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__15178,p__15179){var map__15182 = p__15178;var map__15182__$1 = ((cljs.core.seq_QMARK_.call(null,map__15182))?cljs.core.apply.call(null,cljs.core.hash_map,map__15182):map__15182);var opts = map__15182__$1;var url_rewriter = cljs.core.get.call(null,map__15182__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__15183 = p__15179;var map__15183__$1 = ((cljs.core.seq_QMARK_.call(null,map__15183))?cljs.core.apply.call(null,cljs.core.hash_map,map__15183):map__15183);var d = map__15183__$1;var file = cljs.core.get.call(null,map__15183__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__15184,p__15185){var map__15227 = p__15184;var map__15227__$1 = ((cljs.core.seq_QMARK_.call(null,map__15227))?cljs.core.apply.call(null,cljs.core.hash_map,map__15227):map__15227);var opts = map__15227__$1;var on_jsload = cljs.core.get.call(null,map__15227__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__15227__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__15228 = p__15185;var map__15228__$1 = ((cljs.core.seq_QMARK_.call(null,map__15228))?cljs.core.apply.call(null,cljs.core.hash_map,map__15228):map__15228);var files = cljs.core.get.call(null,map__15228__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11038__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto__,map__15227,map__15227__$1,opts,on_jsload,before_jsload,map__15228,map__15228__$1,files){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto__,map__15227,map__15227__$1,opts,on_jsload,before_jsload,map__15228,map__15228__$1,files){
return (function (state_15251){var state_val_15252 = (state_15251[(1)]);if((state_val_15252 === (6)))
{var inst_15233 = (state_15251[(7)]);var inst_15242 = (state_15251[(2)]);var inst_15243 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15244 = [inst_15233];var inst_15245 = (new cljs.core.PersistentVector(null,1,(5),inst_15243,inst_15244,null));var inst_15246 = cljs.core.apply.call(null,on_jsload,inst_15245);var state_15251__$1 = (function (){var statearr_15253 = state_15251;(statearr_15253[(8)] = inst_15242);
return statearr_15253;
})();var statearr_15254_15268 = state_15251__$1;(statearr_15254_15268[(2)] = inst_15246);
(statearr_15254_15268[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15252 === (5)))
{var inst_15249 = (state_15251[(2)]);var state_15251__$1 = state_15251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15251__$1,inst_15249);
} else
{if((state_val_15252 === (4)))
{var state_15251__$1 = state_15251;var statearr_15255_15269 = state_15251__$1;(statearr_15255_15269[(2)] = null);
(statearr_15255_15269[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15252 === (3)))
{var inst_15233 = (state_15251[(7)]);var inst_15236 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_15237 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_15233);var inst_15238 = cljs.core.prn_str.call(null,inst_15237);var inst_15239 = console.log(inst_15238);var inst_15240 = cljs.core.async.timeout.call(null,(10));var state_15251__$1 = (function (){var statearr_15256 = state_15251;(statearr_15256[(9)] = inst_15236);
(statearr_15256[(10)] = inst_15239);
return statearr_15256;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15251__$1,(6),inst_15240);
} else
{if((state_val_15252 === (2)))
{var inst_15233 = (state_15251[(7)]);var inst_15233__$1 = (state_15251[(2)]);var inst_15234 = cljs.core.not_empty.call(null,inst_15233__$1);var state_15251__$1 = (function (){var statearr_15257 = state_15251;(statearr_15257[(7)] = inst_15233__$1);
return statearr_15257;
})();if(cljs.core.truth_(inst_15234))
{var statearr_15258_15270 = state_15251__$1;(statearr_15258_15270[(1)] = (3));
} else
{var statearr_15259_15271 = state_15251__$1;(statearr_15259_15271[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15252 === (1)))
{var inst_15229 = before_jsload.call(null,files);var inst_15230 = figwheel.client.add_request_urls.call(null,opts,files);var inst_15231 = figwheel.client.load_all_js_files.call(null,inst_15230);var state_15251__$1 = (function (){var statearr_15260 = state_15251;(statearr_15260[(11)] = inst_15229);
return statearr_15260;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15251__$1,(2),inst_15231);
} else
{return null;
}
}
}
}
}
}
});})(c__11038__auto__,map__15227,map__15227__$1,opts,on_jsload,before_jsload,map__15228,map__15228__$1,files))
;return ((function (switch__10973__auto__,c__11038__auto__,map__15227,map__15227__$1,opts,on_jsload,before_jsload,map__15228,map__15228__$1,files){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_15264 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15264[(0)] = state_machine__10974__auto__);
(statearr_15264[(1)] = (1));
return statearr_15264;
});
var state_machine__10974__auto____1 = (function (state_15251){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_15251);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e15265){if((e15265 instanceof Object))
{var ex__10977__auto__ = e15265;var statearr_15266_15272 = state_15251;(statearr_15266_15272[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15251);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15265;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15273 = state_15251;
state_15251 = G__15273;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_15251){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_15251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto__,map__15227,map__15227__$1,opts,on_jsload,before_jsload,map__15228,map__15228__$1,files))
})();var state__11040__auto__ = (function (){var statearr_15267 = f__11039__auto__.call(null);(statearr_15267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto__);
return statearr_15267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto__,map__15227,map__15227__$1,opts,on_jsload,before_jsload,map__15228,map__15228__$1,files))
);
return c__11038__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__15274,link_href){var map__15276 = p__15274;var map__15276__$1 = ((cljs.core.seq_QMARK_.call(null,map__15276))?cljs.core.apply.call(null,cljs.core.hash_map,map__15276):map__15276);var request_url = cljs.core.get.call(null,map__15276__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__15276__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__11038__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto__,parent){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto__,parent){
return (function (state_15297){var state_val_15298 = (state_15297[(1)]);if((state_val_15298 === (2)))
{var inst_15294 = (state_15297[(2)]);var inst_15295 = parent.removeChild(orig_link);var state_15297__$1 = (function (){var statearr_15299 = state_15297;(statearr_15299[(7)] = inst_15294);
return statearr_15299;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15297__$1,inst_15295);
} else
{if((state_val_15298 === (1)))
{var inst_15292 = cljs.core.async.timeout.call(null,(200));var state_15297__$1 = state_15297;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15297__$1,(2),inst_15292);
} else
{return null;
}
}
});})(c__11038__auto__,parent))
;return ((function (switch__10973__auto__,c__11038__auto__,parent){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_15303 = [null,null,null,null,null,null,null,null];(statearr_15303[(0)] = state_machine__10974__auto__);
(statearr_15303[(1)] = (1));
return statearr_15303;
});
var state_machine__10974__auto____1 = (function (state_15297){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_15297);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e15304){if((e15304 instanceof Object))
{var ex__10977__auto__ = e15304;var statearr_15305_15307 = state_15297;(statearr_15305_15307[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15297);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15304;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15308 = state_15297;
state_15297 = G__15308;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_15297){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_15297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto__,parent))
})();var state__11040__auto__ = (function (){var statearr_15306 = f__11039__auto__.call(null);(statearr_15306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto__);
return statearr_15306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto__,parent))
);
return c__11038__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__15309){var map__15311 = p__15309;var map__15311__$1 = ((cljs.core.seq_QMARK_.call(null,map__15311))?cljs.core.apply.call(null,cljs.core.hash_map,map__15311):map__15311);var f_data = map__15311__$1;var request_url = cljs.core.get.call(null,map__15311__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__15311__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__15312,files_msg){var map__15334 = p__15312;var map__15334__$1 = ((cljs.core.seq_QMARK_.call(null,map__15334))?cljs.core.apply.call(null,cljs.core.hash_map,map__15334):map__15334);var opts = map__15334__$1;var on_cssload = cljs.core.get.call(null,map__15334__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__15335_15355 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__15336_15356 = null;var count__15337_15357 = (0);var i__15338_15358 = (0);while(true){
if((i__15338_15358 < count__15337_15357))
{var f_15359 = cljs.core._nth.call(null,chunk__15336_15356,i__15338_15358);figwheel.client.reload_css_file.call(null,f_15359);
{
var G__15360 = seq__15335_15355;
var G__15361 = chunk__15336_15356;
var G__15362 = count__15337_15357;
var G__15363 = (i__15338_15358 + (1));
seq__15335_15355 = G__15360;
chunk__15336_15356 = G__15361;
count__15337_15357 = G__15362;
i__15338_15358 = G__15363;
continue;
}
} else
{var temp__4126__auto___15364 = cljs.core.seq.call(null,seq__15335_15355);if(temp__4126__auto___15364)
{var seq__15335_15365__$1 = temp__4126__auto___15364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15335_15365__$1))
{var c__8700__auto___15366 = cljs.core.chunk_first.call(null,seq__15335_15365__$1);{
var G__15367 = cljs.core.chunk_rest.call(null,seq__15335_15365__$1);
var G__15368 = c__8700__auto___15366;
var G__15369 = cljs.core.count.call(null,c__8700__auto___15366);
var G__15370 = (0);
seq__15335_15355 = G__15367;
chunk__15336_15356 = G__15368;
count__15337_15357 = G__15369;
i__15338_15358 = G__15370;
continue;
}
} else
{var f_15371 = cljs.core.first.call(null,seq__15335_15365__$1);figwheel.client.reload_css_file.call(null,f_15371);
{
var G__15372 = cljs.core.next.call(null,seq__15335_15365__$1);
var G__15373 = null;
var G__15374 = (0);
var G__15375 = (0);
seq__15335_15355 = G__15372;
chunk__15336_15356 = G__15373;
count__15337_15357 = G__15374;
i__15338_15358 = G__15375;
continue;
}
}
} else
{}
}
break;
}
var c__11038__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto__,map__15334,map__15334__$1,opts,on_cssload){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto__,map__15334,map__15334__$1,opts,on_cssload){
return (function (state_15345){var state_val_15346 = (state_15345[(1)]);if((state_val_15346 === (2)))
{var inst_15341 = (state_15345[(2)]);var inst_15342 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_15343 = on_cssload.call(null,inst_15342);var state_15345__$1 = (function (){var statearr_15347 = state_15345;(statearr_15347[(7)] = inst_15341);
return statearr_15347;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15345__$1,inst_15343);
} else
{if((state_val_15346 === (1)))
{var inst_15339 = cljs.core.async.timeout.call(null,(100));var state_15345__$1 = state_15345;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15345__$1,(2),inst_15339);
} else
{return null;
}
}
});})(c__11038__auto__,map__15334,map__15334__$1,opts,on_cssload))
;return ((function (switch__10973__auto__,c__11038__auto__,map__15334,map__15334__$1,opts,on_cssload){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_15351 = [null,null,null,null,null,null,null,null];(statearr_15351[(0)] = state_machine__10974__auto__);
(statearr_15351[(1)] = (1));
return statearr_15351;
});
var state_machine__10974__auto____1 = (function (state_15345){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_15345);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e15352){if((e15352 instanceof Object))
{var ex__10977__auto__ = e15352;var statearr_15353_15376 = state_15345;(statearr_15353_15376[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15345);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15352;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15377 = state_15345;
state_15345 = G__15377;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_15345){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_15345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto__,map__15334,map__15334__$1,opts,on_cssload))
})();var state__11040__auto__ = (function (){var statearr_15354 = f__11039__auto__.call(null);(statearr_15354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto__);
return statearr_15354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto__,map__15334,map__15334__$1,opts,on_cssload))
);
return c__11038__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__15378){var map__15383 = p__15378;var map__15383__$1 = ((cljs.core.seq_QMARK_.call(null,map__15383))?cljs.core.apply.call(null,cljs.core.hash_map,map__15383):map__15383);var opts = map__15383__$1;var on_compile_fail = cljs.core.get.call(null,map__15383__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__15383__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__15383__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__15383__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__15383,map__15383__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__15384 = cljs.core._EQ_;var expr__15385 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__15384.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__15385)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15384.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__15385)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15384.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__15385)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__15383,map__15383__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__15383,map__15383__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__15383,map__15383__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__15383,map__15383__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__15383,map__15383__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__15383,map__15383__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__15383,map__15383__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__15383,map__15383__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__15383,map__15383__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj15390 = {"detail":url};return obj15390;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__15391){var map__15393 = p__15391;var map__15393__$1 = ((cljs.core.seq_QMARK_.call(null,map__15393))?cljs.core.apply.call(null,cljs.core.hash_map,map__15393):map__15393);var class$ = cljs.core.get.call(null,map__15393__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__15393__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__15394){var map__15400 = p__15394;var map__15400__$1 = ((cljs.core.seq_QMARK_.call(null,map__15400))?cljs.core.apply.call(null,cljs.core.hash_map,map__15400):map__15400);var ed = map__15400__$1;var exception_data = cljs.core.get.call(null,map__15400__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__15400__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__15401_15405 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__15402_15406 = null;var count__15403_15407 = (0);var i__15404_15408 = (0);while(true){
if((i__15404_15408 < count__15403_15407))
{var msg_15409 = cljs.core._nth.call(null,chunk__15402_15406,i__15404_15408);console.log(msg_15409);
{
var G__15410 = seq__15401_15405;
var G__15411 = chunk__15402_15406;
var G__15412 = count__15403_15407;
var G__15413 = (i__15404_15408 + (1));
seq__15401_15405 = G__15410;
chunk__15402_15406 = G__15411;
count__15403_15407 = G__15412;
i__15404_15408 = G__15413;
continue;
}
} else
{var temp__4126__auto___15414 = cljs.core.seq.call(null,seq__15401_15405);if(temp__4126__auto___15414)
{var seq__15401_15415__$1 = temp__4126__auto___15414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15401_15415__$1))
{var c__8700__auto___15416 = cljs.core.chunk_first.call(null,seq__15401_15415__$1);{
var G__15417 = cljs.core.chunk_rest.call(null,seq__15401_15415__$1);
var G__15418 = c__8700__auto___15416;
var G__15419 = cljs.core.count.call(null,c__8700__auto___15416);
var G__15420 = (0);
seq__15401_15405 = G__15417;
chunk__15402_15406 = G__15418;
count__15403_15407 = G__15419;
i__15404_15408 = G__15420;
continue;
}
} else
{var msg_15421 = cljs.core.first.call(null,seq__15401_15415__$1);console.log(msg_15421);
{
var G__15422 = cljs.core.next.call(null,seq__15401_15415__$1);
var G__15423 = null;
var G__15424 = (0);
var G__15425 = (0);
seq__15401_15405 = G__15422;
chunk__15402_15406 = G__15423;
count__15403_15407 = G__15424;
i__15404_15408 = G__15425;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__7944__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7944__auto__))
{return or__7944__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__15426){var map__15428 = p__15426;var map__15428__$1 = ((cljs.core.seq_QMARK_.call(null,map__15428))?cljs.core.apply.call(null,cljs.core.hash_map,map__15428):map__15428);var opts = map__15428__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__15426 = null;if (arguments.length > 0) {
  p__15426 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__15426);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__15429){
var p__15426 = cljs.core.seq(arglist__15429);
return watch_and_reload__delegate(p__15426);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map