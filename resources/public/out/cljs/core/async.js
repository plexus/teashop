// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15558 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15558 = (function (f,fn_handler,meta15559){
this.f = f;
this.fn_handler = fn_handler;
this.meta15559 = meta15559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15558.cljs$lang$type = true;
cljs.core.async.t15558.cljs$lang$ctorStr = "cljs.core.async/t15558";
cljs.core.async.t15558.cljs$lang$ctorPrWriter = (function (this__8511__auto__,writer__8512__auto__,opt__8513__auto__){return cljs.core._write.call(null,writer__8512__auto__,"cljs.core.async/t15558");
});
cljs.core.async.t15558.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15560){var self__ = this;
var _15560__$1 = this;return self__.meta15559;
});
cljs.core.async.t15558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15560,meta15559__$1){var self__ = this;
var _15560__$1 = this;return (new cljs.core.async.t15558(self__.f,self__.fn_handler,meta15559__$1));
});
cljs.core.async.__GT_t15558 = (function __GT_t15558(f__$1,fn_handler__$1,meta15559){return (new cljs.core.async.t15558(f__$1,fn_handler__$1,meta15559));
});
}
return (new cljs.core.async.t15558(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15562 = buff;if(G__15562)
{var bit__8594__auto__ = null;if(cljs.core.truth_((function (){var or__7944__auto__ = bit__8594__auto__;if(cljs.core.truth_(or__7944__auto__))
{return or__7944__auto__;
} else
{return G__15562.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15562.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15562);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15562);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_15563 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15563);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15563,ret){
return (function (){return fn1.call(null,val_15563);
});})(val_15563,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8800__auto___15564 = n;var x_15565 = (0);while(true){
if((x_15565 < n__8800__auto___15564))
{(a[x_15565] = (0));
{
var G__15566 = (x_15565 + (1));
x_15565 = G__15566;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15567 = (i + (1));
i = G__15567;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15571 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15571 = (function (flag,alt_flag,meta15572){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15572 = meta15572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15571.cljs$lang$type = true;
cljs.core.async.t15571.cljs$lang$ctorStr = "cljs.core.async/t15571";
cljs.core.async.t15571.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8511__auto__,writer__8512__auto__,opt__8513__auto__){return cljs.core._write.call(null,writer__8512__auto__,"cljs.core.async/t15571");
});})(flag))
;
cljs.core.async.t15571.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15573){var self__ = this;
var _15573__$1 = this;return self__.meta15572;
});})(flag))
;
cljs.core.async.t15571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15573,meta15572__$1){var self__ = this;
var _15573__$1 = this;return (new cljs.core.async.t15571(self__.flag,self__.alt_flag,meta15572__$1));
});})(flag))
;
cljs.core.async.__GT_t15571 = ((function (flag){
return (function __GT_t15571(flag__$1,alt_flag__$1,meta15572){return (new cljs.core.async.t15571(flag__$1,alt_flag__$1,meta15572));
});})(flag))
;
}
return (new cljs.core.async.t15571(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15577 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15577 = (function (cb,flag,alt_handler,meta15578){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15578 = meta15578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15577.cljs$lang$type = true;
cljs.core.async.t15577.cljs$lang$ctorStr = "cljs.core.async/t15577";
cljs.core.async.t15577.cljs$lang$ctorPrWriter = (function (this__8511__auto__,writer__8512__auto__,opt__8513__auto__){return cljs.core._write.call(null,writer__8512__auto__,"cljs.core.async/t15577");
});
cljs.core.async.t15577.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15579){var self__ = this;
var _15579__$1 = this;return self__.meta15578;
});
cljs.core.async.t15577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15579,meta15578__$1){var self__ = this;
var _15579__$1 = this;return (new cljs.core.async.t15577(self__.cb,self__.flag,self__.alt_handler,meta15578__$1));
});
cljs.core.async.__GT_t15577 = (function __GT_t15577(cb__$1,flag__$1,alt_handler__$1,meta15578){return (new cljs.core.async.t15577(cb__$1,flag__$1,alt_handler__$1,meta15578));
});
}
return (new cljs.core.async.t15577(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15580_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15580_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15581_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15581_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7944__auto__ = wport;if(cljs.core.truth_(or__7944__auto__))
{return or__7944__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15582 = (i + (1));
i = G__15582;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7944__auto__ = ret;if(cljs.core.truth_(or__7944__auto__))
{return or__7944__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__7932__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7932__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7932__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15583){var map__15585 = p__15583;var map__15585__$1 = ((cljs.core.seq_QMARK_.call(null,map__15585))?cljs.core.apply.call(null,cljs.core.hash_map,map__15585):map__15585);var opts = map__15585__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__15583 = null;if (arguments.length > 1) {
  p__15583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15583);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15586){
var ports = cljs.core.first(arglist__15586);
var p__15583 = cljs.core.rest(arglist__15586);
return alts_BANG___delegate(ports,p__15583);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15594 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15594 = (function (ch,f,map_LT_,meta15595){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15595 = meta15595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15594.cljs$lang$type = true;
cljs.core.async.t15594.cljs$lang$ctorStr = "cljs.core.async/t15594";
cljs.core.async.t15594.cljs$lang$ctorPrWriter = (function (this__8511__auto__,writer__8512__auto__,opt__8513__auto__){return cljs.core._write.call(null,writer__8512__auto__,"cljs.core.async/t15594");
});
cljs.core.async.t15594.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15594.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t15594.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15594.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15597 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15597 = (function (fn1,_,meta15595,ch,f,map_LT_,meta15598){
this.fn1 = fn1;
this._ = _;
this.meta15595 = meta15595;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15598 = meta15598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15597.cljs$lang$type = true;
cljs.core.async.t15597.cljs$lang$ctorStr = "cljs.core.async/t15597";
cljs.core.async.t15597.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8511__auto__,writer__8512__auto__,opt__8513__auto__){return cljs.core._write.call(null,writer__8512__auto__,"cljs.core.async/t15597");
});})(___$1))
;
cljs.core.async.t15597.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15597.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15587_SHARP_){return f1.call(null,(((p1__15587_SHARP_ == null))?null:self__.f.call(null,p1__15587_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15599){var self__ = this;
var _15599__$1 = this;return self__.meta15598;
});})(___$1))
;
cljs.core.async.t15597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15599,meta15598__$1){var self__ = this;
var _15599__$1 = this;return (new cljs.core.async.t15597(self__.fn1,self__._,self__.meta15595,self__.ch,self__.f,self__.map_LT_,meta15598__$1));
});})(___$1))
;
cljs.core.async.__GT_t15597 = ((function (___$1){
return (function __GT_t15597(fn1__$1,___$2,meta15595__$1,ch__$2,f__$2,map_LT___$2,meta15598){return (new cljs.core.async.t15597(fn1__$1,___$2,meta15595__$1,ch__$2,f__$2,map_LT___$2,meta15598));
});})(___$1))
;
}
return (new cljs.core.async.t15597(fn1,___$1,self__.meta15595,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7932__auto__ = ret;if(cljs.core.truth_(and__7932__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7932__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15594.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15594.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15594.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15596){var self__ = this;
var _15596__$1 = this;return self__.meta15595;
});
cljs.core.async.t15594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15596,meta15595__$1){var self__ = this;
var _15596__$1 = this;return (new cljs.core.async.t15594(self__.ch,self__.f,self__.map_LT_,meta15595__$1));
});
cljs.core.async.__GT_t15594 = (function __GT_t15594(ch__$1,f__$1,map_LT___$1,meta15595){return (new cljs.core.async.t15594(ch__$1,f__$1,map_LT___$1,meta15595));
});
}
return (new cljs.core.async.t15594(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15603 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15603 = (function (ch,f,map_GT_,meta15604){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15604 = meta15604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15603.cljs$lang$type = true;
cljs.core.async.t15603.cljs$lang$ctorStr = "cljs.core.async/t15603";
cljs.core.async.t15603.cljs$lang$ctorPrWriter = (function (this__8511__auto__,writer__8512__auto__,opt__8513__auto__){return cljs.core._write.call(null,writer__8512__auto__,"cljs.core.async/t15603");
});
cljs.core.async.t15603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t15603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15603.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15605){var self__ = this;
var _15605__$1 = this;return self__.meta15604;
});
cljs.core.async.t15603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15605,meta15604__$1){var self__ = this;
var _15605__$1 = this;return (new cljs.core.async.t15603(self__.ch,self__.f,self__.map_GT_,meta15604__$1));
});
cljs.core.async.__GT_t15603 = (function __GT_t15603(ch__$1,f__$1,map_GT___$1,meta15604){return (new cljs.core.async.t15603(ch__$1,f__$1,map_GT___$1,meta15604));
});
}
return (new cljs.core.async.t15603(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15609 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15609 = (function (ch,p,filter_GT_,meta15610){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15610 = meta15610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15609.cljs$lang$type = true;
cljs.core.async.t15609.cljs$lang$ctorStr = "cljs.core.async/t15609";
cljs.core.async.t15609.cljs$lang$ctorPrWriter = (function (this__8511__auto__,writer__8512__auto__,opt__8513__auto__){return cljs.core._write.call(null,writer__8512__auto__,"cljs.core.async/t15609");
});
cljs.core.async.t15609.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15609.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t15609.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15609.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15609.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15609.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15609.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15611){var self__ = this;
var _15611__$1 = this;return self__.meta15610;
});
cljs.core.async.t15609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15611,meta15610__$1){var self__ = this;
var _15611__$1 = this;return (new cljs.core.async.t15609(self__.ch,self__.p,self__.filter_GT_,meta15610__$1));
});
cljs.core.async.__GT_t15609 = (function __GT_t15609(ch__$1,p__$1,filter_GT___$1,meta15610){return (new cljs.core.async.t15609(ch__$1,p__$1,filter_GT___$1,meta15610));
});
}
return (new cljs.core.async.t15609(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11038__auto___15694 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___15694,out){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___15694,out){
return (function (state_15673){var state_val_15674 = (state_15673[(1)]);if((state_val_15674 === (7)))
{var inst_15669 = (state_15673[(2)]);var state_15673__$1 = state_15673;var statearr_15675_15695 = state_15673__$1;(statearr_15675_15695[(2)] = inst_15669);
(statearr_15675_15695[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15674 === (1)))
{var state_15673__$1 = state_15673;var statearr_15676_15696 = state_15673__$1;(statearr_15676_15696[(2)] = null);
(statearr_15676_15696[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15674 === (4)))
{var inst_15655 = (state_15673[(7)]);var inst_15655__$1 = (state_15673[(2)]);var inst_15656 = (inst_15655__$1 == null);var state_15673__$1 = (function (){var statearr_15677 = state_15673;(statearr_15677[(7)] = inst_15655__$1);
return statearr_15677;
})();if(cljs.core.truth_(inst_15656))
{var statearr_15678_15697 = state_15673__$1;(statearr_15678_15697[(1)] = (5));
} else
{var statearr_15679_15698 = state_15673__$1;(statearr_15679_15698[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15674 === (6)))
{var inst_15655 = (state_15673[(7)]);var inst_15660 = p.call(null,inst_15655);var state_15673__$1 = state_15673;if(cljs.core.truth_(inst_15660))
{var statearr_15680_15699 = state_15673__$1;(statearr_15680_15699[(1)] = (8));
} else
{var statearr_15681_15700 = state_15673__$1;(statearr_15681_15700[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15674 === (3)))
{var inst_15671 = (state_15673[(2)]);var state_15673__$1 = state_15673;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15673__$1,inst_15671);
} else
{if((state_val_15674 === (2)))
{var state_15673__$1 = state_15673;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15673__$1,(4),ch);
} else
{if((state_val_15674 === (11)))
{var inst_15663 = (state_15673[(2)]);var state_15673__$1 = state_15673;var statearr_15682_15701 = state_15673__$1;(statearr_15682_15701[(2)] = inst_15663);
(statearr_15682_15701[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15674 === (9)))
{var state_15673__$1 = state_15673;var statearr_15683_15702 = state_15673__$1;(statearr_15683_15702[(2)] = null);
(statearr_15683_15702[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15674 === (5)))
{var inst_15658 = cljs.core.async.close_BANG_.call(null,out);var state_15673__$1 = state_15673;var statearr_15684_15703 = state_15673__$1;(statearr_15684_15703[(2)] = inst_15658);
(statearr_15684_15703[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15674 === (10)))
{var inst_15666 = (state_15673[(2)]);var state_15673__$1 = (function (){var statearr_15685 = state_15673;(statearr_15685[(8)] = inst_15666);
return statearr_15685;
})();var statearr_15686_15704 = state_15673__$1;(statearr_15686_15704[(2)] = null);
(statearr_15686_15704[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15674 === (8)))
{var inst_15655 = (state_15673[(7)]);var state_15673__$1 = state_15673;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15673__$1,(11),out,inst_15655);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___15694,out))
;return ((function (switch__10973__auto__,c__11038__auto___15694,out){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_15690 = [null,null,null,null,null,null,null,null,null];(statearr_15690[(0)] = state_machine__10974__auto__);
(statearr_15690[(1)] = (1));
return statearr_15690;
});
var state_machine__10974__auto____1 = (function (state_15673){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_15673);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e15691){if((e15691 instanceof Object))
{var ex__10977__auto__ = e15691;var statearr_15692_15705 = state_15673;(statearr_15692_15705[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15673);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15691;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15706 = state_15673;
state_15673 = G__15706;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_15673){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_15673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___15694,out))
})();var state__11040__auto__ = (function (){var statearr_15693 = f__11039__auto__.call(null);(statearr_15693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___15694);
return statearr_15693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___15694,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11038__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto__){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto__){
return (function (state_15872){var state_val_15873 = (state_15872[(1)]);if((state_val_15873 === (7)))
{var inst_15868 = (state_15872[(2)]);var state_15872__$1 = state_15872;var statearr_15874_15915 = state_15872__$1;(statearr_15874_15915[(2)] = inst_15868);
(statearr_15874_15915[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (20)))
{var inst_15838 = (state_15872[(7)]);var inst_15849 = (state_15872[(2)]);var inst_15850 = cljs.core.next.call(null,inst_15838);var inst_15824 = inst_15850;var inst_15825 = null;var inst_15826 = (0);var inst_15827 = (0);var state_15872__$1 = (function (){var statearr_15875 = state_15872;(statearr_15875[(8)] = inst_15849);
(statearr_15875[(9)] = inst_15826);
(statearr_15875[(10)] = inst_15827);
(statearr_15875[(11)] = inst_15825);
(statearr_15875[(12)] = inst_15824);
return statearr_15875;
})();var statearr_15876_15916 = state_15872__$1;(statearr_15876_15916[(2)] = null);
(statearr_15876_15916[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (1)))
{var state_15872__$1 = state_15872;var statearr_15877_15917 = state_15872__$1;(statearr_15877_15917[(2)] = null);
(statearr_15877_15917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (4)))
{var inst_15813 = (state_15872[(13)]);var inst_15813__$1 = (state_15872[(2)]);var inst_15814 = (inst_15813__$1 == null);var state_15872__$1 = (function (){var statearr_15878 = state_15872;(statearr_15878[(13)] = inst_15813__$1);
return statearr_15878;
})();if(cljs.core.truth_(inst_15814))
{var statearr_15879_15918 = state_15872__$1;(statearr_15879_15918[(1)] = (5));
} else
{var statearr_15880_15919 = state_15872__$1;(statearr_15880_15919[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (15)))
{var state_15872__$1 = state_15872;var statearr_15884_15920 = state_15872__$1;(statearr_15884_15920[(2)] = null);
(statearr_15884_15920[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (21)))
{var state_15872__$1 = state_15872;var statearr_15885_15921 = state_15872__$1;(statearr_15885_15921[(2)] = null);
(statearr_15885_15921[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (13)))
{var inst_15826 = (state_15872[(9)]);var inst_15827 = (state_15872[(10)]);var inst_15825 = (state_15872[(11)]);var inst_15824 = (state_15872[(12)]);var inst_15834 = (state_15872[(2)]);var inst_15835 = (inst_15827 + (1));var tmp15881 = inst_15826;var tmp15882 = inst_15825;var tmp15883 = inst_15824;var inst_15824__$1 = tmp15883;var inst_15825__$1 = tmp15882;var inst_15826__$1 = tmp15881;var inst_15827__$1 = inst_15835;var state_15872__$1 = (function (){var statearr_15886 = state_15872;(statearr_15886[(14)] = inst_15834);
(statearr_15886[(9)] = inst_15826__$1);
(statearr_15886[(10)] = inst_15827__$1);
(statearr_15886[(11)] = inst_15825__$1);
(statearr_15886[(12)] = inst_15824__$1);
return statearr_15886;
})();var statearr_15887_15922 = state_15872__$1;(statearr_15887_15922[(2)] = null);
(statearr_15887_15922[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (22)))
{var state_15872__$1 = state_15872;var statearr_15888_15923 = state_15872__$1;(statearr_15888_15923[(2)] = null);
(statearr_15888_15923[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (6)))
{var inst_15813 = (state_15872[(13)]);var inst_15822 = f.call(null,inst_15813);var inst_15823 = cljs.core.seq.call(null,inst_15822);var inst_15824 = inst_15823;var inst_15825 = null;var inst_15826 = (0);var inst_15827 = (0);var state_15872__$1 = (function (){var statearr_15889 = state_15872;(statearr_15889[(9)] = inst_15826);
(statearr_15889[(10)] = inst_15827);
(statearr_15889[(11)] = inst_15825);
(statearr_15889[(12)] = inst_15824);
return statearr_15889;
})();var statearr_15890_15924 = state_15872__$1;(statearr_15890_15924[(2)] = null);
(statearr_15890_15924[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (17)))
{var inst_15838 = (state_15872[(7)]);var inst_15842 = cljs.core.chunk_first.call(null,inst_15838);var inst_15843 = cljs.core.chunk_rest.call(null,inst_15838);var inst_15844 = cljs.core.count.call(null,inst_15842);var inst_15824 = inst_15843;var inst_15825 = inst_15842;var inst_15826 = inst_15844;var inst_15827 = (0);var state_15872__$1 = (function (){var statearr_15891 = state_15872;(statearr_15891[(9)] = inst_15826);
(statearr_15891[(10)] = inst_15827);
(statearr_15891[(11)] = inst_15825);
(statearr_15891[(12)] = inst_15824);
return statearr_15891;
})();var statearr_15892_15925 = state_15872__$1;(statearr_15892_15925[(2)] = null);
(statearr_15892_15925[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (3)))
{var inst_15870 = (state_15872[(2)]);var state_15872__$1 = state_15872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15872__$1,inst_15870);
} else
{if((state_val_15873 === (12)))
{var inst_15858 = (state_15872[(2)]);var state_15872__$1 = state_15872;var statearr_15893_15926 = state_15872__$1;(statearr_15893_15926[(2)] = inst_15858);
(statearr_15893_15926[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (2)))
{var state_15872__$1 = state_15872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15872__$1,(4),in$);
} else
{if((state_val_15873 === (23)))
{var inst_15866 = (state_15872[(2)]);var state_15872__$1 = state_15872;var statearr_15894_15927 = state_15872__$1;(statearr_15894_15927[(2)] = inst_15866);
(statearr_15894_15927[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (19)))
{var inst_15853 = (state_15872[(2)]);var state_15872__$1 = state_15872;var statearr_15895_15928 = state_15872__$1;(statearr_15895_15928[(2)] = inst_15853);
(statearr_15895_15928[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (11)))
{var inst_15838 = (state_15872[(7)]);var inst_15824 = (state_15872[(12)]);var inst_15838__$1 = cljs.core.seq.call(null,inst_15824);var state_15872__$1 = (function (){var statearr_15896 = state_15872;(statearr_15896[(7)] = inst_15838__$1);
return statearr_15896;
})();if(inst_15838__$1)
{var statearr_15897_15929 = state_15872__$1;(statearr_15897_15929[(1)] = (14));
} else
{var statearr_15898_15930 = state_15872__$1;(statearr_15898_15930[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (9)))
{var inst_15860 = (state_15872[(2)]);var inst_15861 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15872__$1 = (function (){var statearr_15899 = state_15872;(statearr_15899[(15)] = inst_15860);
return statearr_15899;
})();if(cljs.core.truth_(inst_15861))
{var statearr_15900_15931 = state_15872__$1;(statearr_15900_15931[(1)] = (21));
} else
{var statearr_15901_15932 = state_15872__$1;(statearr_15901_15932[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (5)))
{var inst_15816 = cljs.core.async.close_BANG_.call(null,out);var state_15872__$1 = state_15872;var statearr_15902_15933 = state_15872__$1;(statearr_15902_15933[(2)] = inst_15816);
(statearr_15902_15933[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (14)))
{var inst_15838 = (state_15872[(7)]);var inst_15840 = cljs.core.chunked_seq_QMARK_.call(null,inst_15838);var state_15872__$1 = state_15872;if(inst_15840)
{var statearr_15903_15934 = state_15872__$1;(statearr_15903_15934[(1)] = (17));
} else
{var statearr_15904_15935 = state_15872__$1;(statearr_15904_15935[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (16)))
{var inst_15856 = (state_15872[(2)]);var state_15872__$1 = state_15872;var statearr_15905_15936 = state_15872__$1;(statearr_15905_15936[(2)] = inst_15856);
(statearr_15905_15936[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15873 === (10)))
{var inst_15827 = (state_15872[(10)]);var inst_15825 = (state_15872[(11)]);var inst_15832 = cljs.core._nth.call(null,inst_15825,inst_15827);var state_15872__$1 = state_15872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15872__$1,(13),out,inst_15832);
} else
{if((state_val_15873 === (18)))
{var inst_15838 = (state_15872[(7)]);var inst_15847 = cljs.core.first.call(null,inst_15838);var state_15872__$1 = state_15872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15872__$1,(20),out,inst_15847);
} else
{if((state_val_15873 === (8)))
{var inst_15826 = (state_15872[(9)]);var inst_15827 = (state_15872[(10)]);var inst_15829 = (inst_15827 < inst_15826);var inst_15830 = inst_15829;var state_15872__$1 = state_15872;if(cljs.core.truth_(inst_15830))
{var statearr_15906_15937 = state_15872__$1;(statearr_15906_15937[(1)] = (10));
} else
{var statearr_15907_15938 = state_15872__$1;(statearr_15907_15938[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto__))
;return ((function (switch__10973__auto__,c__11038__auto__){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_15911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15911[(0)] = state_machine__10974__auto__);
(statearr_15911[(1)] = (1));
return statearr_15911;
});
var state_machine__10974__auto____1 = (function (state_15872){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_15872);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e15912){if((e15912 instanceof Object))
{var ex__10977__auto__ = e15912;var statearr_15913_15939 = state_15872;(statearr_15913_15939[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15872);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15912;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15940 = state_15872;
state_15872 = G__15940;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_15872){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_15872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto__))
})();var state__11040__auto__ = (function (){var statearr_15914 = f__11039__auto__.call(null);(statearr_15914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto__);
return statearr_15914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto__))
);
return c__11038__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11038__auto___16035 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___16035){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___16035){
return (function (state_16011){var state_val_16012 = (state_16011[(1)]);if((state_val_16012 === (7)))
{var inst_16007 = (state_16011[(2)]);var state_16011__$1 = state_16011;var statearr_16013_16036 = state_16011__$1;(statearr_16013_16036[(2)] = inst_16007);
(statearr_16013_16036[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (1)))
{var state_16011__$1 = state_16011;var statearr_16014_16037 = state_16011__$1;(statearr_16014_16037[(2)] = null);
(statearr_16014_16037[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (4)))
{var inst_15990 = (state_16011[(7)]);var inst_15990__$1 = (state_16011[(2)]);var inst_15991 = (inst_15990__$1 == null);var state_16011__$1 = (function (){var statearr_16015 = state_16011;(statearr_16015[(7)] = inst_15990__$1);
return statearr_16015;
})();if(cljs.core.truth_(inst_15991))
{var statearr_16016_16038 = state_16011__$1;(statearr_16016_16038[(1)] = (5));
} else
{var statearr_16017_16039 = state_16011__$1;(statearr_16017_16039[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (13)))
{var state_16011__$1 = state_16011;var statearr_16018_16040 = state_16011__$1;(statearr_16018_16040[(2)] = null);
(statearr_16018_16040[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (6)))
{var inst_15990 = (state_16011[(7)]);var state_16011__$1 = state_16011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16011__$1,(11),to,inst_15990);
} else
{if((state_val_16012 === (3)))
{var inst_16009 = (state_16011[(2)]);var state_16011__$1 = state_16011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16011__$1,inst_16009);
} else
{if((state_val_16012 === (12)))
{var state_16011__$1 = state_16011;var statearr_16019_16041 = state_16011__$1;(statearr_16019_16041[(2)] = null);
(statearr_16019_16041[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (2)))
{var state_16011__$1 = state_16011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16011__$1,(4),from);
} else
{if((state_val_16012 === (11)))
{var inst_16000 = (state_16011[(2)]);var state_16011__$1 = state_16011;if(cljs.core.truth_(inst_16000))
{var statearr_16020_16042 = state_16011__$1;(statearr_16020_16042[(1)] = (12));
} else
{var statearr_16021_16043 = state_16011__$1;(statearr_16021_16043[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (9)))
{var state_16011__$1 = state_16011;var statearr_16022_16044 = state_16011__$1;(statearr_16022_16044[(2)] = null);
(statearr_16022_16044[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (5)))
{var state_16011__$1 = state_16011;if(cljs.core.truth_(close_QMARK_))
{var statearr_16023_16045 = state_16011__$1;(statearr_16023_16045[(1)] = (8));
} else
{var statearr_16024_16046 = state_16011__$1;(statearr_16024_16046[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (14)))
{var inst_16005 = (state_16011[(2)]);var state_16011__$1 = state_16011;var statearr_16025_16047 = state_16011__$1;(statearr_16025_16047[(2)] = inst_16005);
(statearr_16025_16047[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (10)))
{var inst_15997 = (state_16011[(2)]);var state_16011__$1 = state_16011;var statearr_16026_16048 = state_16011__$1;(statearr_16026_16048[(2)] = inst_15997);
(statearr_16026_16048[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (8)))
{var inst_15994 = cljs.core.async.close_BANG_.call(null,to);var state_16011__$1 = state_16011;var statearr_16027_16049 = state_16011__$1;(statearr_16027_16049[(2)] = inst_15994);
(statearr_16027_16049[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___16035))
;return ((function (switch__10973__auto__,c__11038__auto___16035){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_16031 = [null,null,null,null,null,null,null,null];(statearr_16031[(0)] = state_machine__10974__auto__);
(statearr_16031[(1)] = (1));
return statearr_16031;
});
var state_machine__10974__auto____1 = (function (state_16011){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_16011);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e16032){if((e16032 instanceof Object))
{var ex__10977__auto__ = e16032;var statearr_16033_16050 = state_16011;(statearr_16033_16050[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16011);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16032;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16051 = state_16011;
state_16011 = G__16051;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_16011){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_16011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___16035))
})();var state__11040__auto__ = (function (){var statearr_16034 = f__11039__auto__.call(null);(statearr_16034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___16035);
return statearr_16034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___16035))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11038__auto___16152 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___16152,tc,fc){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___16152,tc,fc){
return (function (state_16127){var state_val_16128 = (state_16127[(1)]);if((state_val_16128 === (7)))
{var inst_16123 = (state_16127[(2)]);var state_16127__$1 = state_16127;var statearr_16129_16153 = state_16127__$1;(statearr_16129_16153[(2)] = inst_16123);
(statearr_16129_16153[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (1)))
{var state_16127__$1 = state_16127;var statearr_16130_16154 = state_16127__$1;(statearr_16130_16154[(2)] = null);
(statearr_16130_16154[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (4)))
{var inst_16104 = (state_16127[(7)]);var inst_16104__$1 = (state_16127[(2)]);var inst_16105 = (inst_16104__$1 == null);var state_16127__$1 = (function (){var statearr_16131 = state_16127;(statearr_16131[(7)] = inst_16104__$1);
return statearr_16131;
})();if(cljs.core.truth_(inst_16105))
{var statearr_16132_16155 = state_16127__$1;(statearr_16132_16155[(1)] = (5));
} else
{var statearr_16133_16156 = state_16127__$1;(statearr_16133_16156[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (13)))
{var state_16127__$1 = state_16127;var statearr_16134_16157 = state_16127__$1;(statearr_16134_16157[(2)] = null);
(statearr_16134_16157[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (6)))
{var inst_16104 = (state_16127[(7)]);var inst_16110 = p.call(null,inst_16104);var state_16127__$1 = state_16127;if(cljs.core.truth_(inst_16110))
{var statearr_16135_16158 = state_16127__$1;(statearr_16135_16158[(1)] = (9));
} else
{var statearr_16136_16159 = state_16127__$1;(statearr_16136_16159[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (3)))
{var inst_16125 = (state_16127[(2)]);var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16127__$1,inst_16125);
} else
{if((state_val_16128 === (12)))
{var state_16127__$1 = state_16127;var statearr_16137_16160 = state_16127__$1;(statearr_16137_16160[(2)] = null);
(statearr_16137_16160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (2)))
{var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16127__$1,(4),ch);
} else
{if((state_val_16128 === (11)))
{var inst_16104 = (state_16127[(7)]);var inst_16114 = (state_16127[(2)]);var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16127__$1,(8),inst_16114,inst_16104);
} else
{if((state_val_16128 === (9)))
{var state_16127__$1 = state_16127;var statearr_16138_16161 = state_16127__$1;(statearr_16138_16161[(2)] = tc);
(statearr_16138_16161[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (5)))
{var inst_16107 = cljs.core.async.close_BANG_.call(null,tc);var inst_16108 = cljs.core.async.close_BANG_.call(null,fc);var state_16127__$1 = (function (){var statearr_16139 = state_16127;(statearr_16139[(8)] = inst_16107);
return statearr_16139;
})();var statearr_16140_16162 = state_16127__$1;(statearr_16140_16162[(2)] = inst_16108);
(statearr_16140_16162[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (14)))
{var inst_16121 = (state_16127[(2)]);var state_16127__$1 = state_16127;var statearr_16141_16163 = state_16127__$1;(statearr_16141_16163[(2)] = inst_16121);
(statearr_16141_16163[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (10)))
{var state_16127__$1 = state_16127;var statearr_16142_16164 = state_16127__$1;(statearr_16142_16164[(2)] = fc);
(statearr_16142_16164[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16128 === (8)))
{var inst_16116 = (state_16127[(2)]);var state_16127__$1 = state_16127;if(cljs.core.truth_(inst_16116))
{var statearr_16143_16165 = state_16127__$1;(statearr_16143_16165[(1)] = (12));
} else
{var statearr_16144_16166 = state_16127__$1;(statearr_16144_16166[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___16152,tc,fc))
;return ((function (switch__10973__auto__,c__11038__auto___16152,tc,fc){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_16148 = [null,null,null,null,null,null,null,null,null];(statearr_16148[(0)] = state_machine__10974__auto__);
(statearr_16148[(1)] = (1));
return statearr_16148;
});
var state_machine__10974__auto____1 = (function (state_16127){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_16127);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e16149){if((e16149 instanceof Object))
{var ex__10977__auto__ = e16149;var statearr_16150_16167 = state_16127;(statearr_16150_16167[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16127);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16149;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16168 = state_16127;
state_16127 = G__16168;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_16127){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_16127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___16152,tc,fc))
})();var state__11040__auto__ = (function (){var statearr_16151 = f__11039__auto__.call(null);(statearr_16151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___16152);
return statearr_16151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___16152,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11038__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto__){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto__){
return (function (state_16215){var state_val_16216 = (state_16215[(1)]);if((state_val_16216 === (7)))
{var inst_16211 = (state_16215[(2)]);var state_16215__$1 = state_16215;var statearr_16217_16233 = state_16215__$1;(statearr_16217_16233[(2)] = inst_16211);
(statearr_16217_16233[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16216 === (6)))
{var inst_16204 = (state_16215[(7)]);var inst_16201 = (state_16215[(8)]);var inst_16208 = f.call(null,inst_16201,inst_16204);var inst_16201__$1 = inst_16208;var state_16215__$1 = (function (){var statearr_16218 = state_16215;(statearr_16218[(8)] = inst_16201__$1);
return statearr_16218;
})();var statearr_16219_16234 = state_16215__$1;(statearr_16219_16234[(2)] = null);
(statearr_16219_16234[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16216 === (5)))
{var inst_16201 = (state_16215[(8)]);var state_16215__$1 = state_16215;var statearr_16220_16235 = state_16215__$1;(statearr_16220_16235[(2)] = inst_16201);
(statearr_16220_16235[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16216 === (4)))
{var inst_16204 = (state_16215[(7)]);var inst_16204__$1 = (state_16215[(2)]);var inst_16205 = (inst_16204__$1 == null);var state_16215__$1 = (function (){var statearr_16221 = state_16215;(statearr_16221[(7)] = inst_16204__$1);
return statearr_16221;
})();if(cljs.core.truth_(inst_16205))
{var statearr_16222_16236 = state_16215__$1;(statearr_16222_16236[(1)] = (5));
} else
{var statearr_16223_16237 = state_16215__$1;(statearr_16223_16237[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16216 === (3)))
{var inst_16213 = (state_16215[(2)]);var state_16215__$1 = state_16215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16215__$1,inst_16213);
} else
{if((state_val_16216 === (2)))
{var state_16215__$1 = state_16215;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16215__$1,(4),ch);
} else
{if((state_val_16216 === (1)))
{var inst_16201 = init;var state_16215__$1 = (function (){var statearr_16224 = state_16215;(statearr_16224[(8)] = inst_16201);
return statearr_16224;
})();var statearr_16225_16238 = state_16215__$1;(statearr_16225_16238[(2)] = null);
(statearr_16225_16238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__11038__auto__))
;return ((function (switch__10973__auto__,c__11038__auto__){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_16229 = [null,null,null,null,null,null,null,null,null];(statearr_16229[(0)] = state_machine__10974__auto__);
(statearr_16229[(1)] = (1));
return statearr_16229;
});
var state_machine__10974__auto____1 = (function (state_16215){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_16215);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e16230){if((e16230 instanceof Object))
{var ex__10977__auto__ = e16230;var statearr_16231_16239 = state_16215;(statearr_16231_16239[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16215);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16230;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16240 = state_16215;
state_16215 = G__16240;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_16215){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_16215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto__))
})();var state__11040__auto__ = (function (){var statearr_16232 = f__11039__auto__.call(null);(statearr_16232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto__);
return statearr_16232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto__))
);
return c__11038__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11038__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto__){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto__){
return (function (state_16314){var state_val_16315 = (state_16314[(1)]);if((state_val_16315 === (7)))
{var inst_16296 = (state_16314[(2)]);var state_16314__$1 = state_16314;var statearr_16316_16339 = state_16314__$1;(statearr_16316_16339[(2)] = inst_16296);
(statearr_16316_16339[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16315 === (1)))
{var inst_16290 = cljs.core.seq.call(null,coll);var inst_16291 = inst_16290;var state_16314__$1 = (function (){var statearr_16317 = state_16314;(statearr_16317[(7)] = inst_16291);
return statearr_16317;
})();var statearr_16318_16340 = state_16314__$1;(statearr_16318_16340[(2)] = null);
(statearr_16318_16340[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16315 === (4)))
{var inst_16291 = (state_16314[(7)]);var inst_16294 = cljs.core.first.call(null,inst_16291);var state_16314__$1 = state_16314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16314__$1,(7),ch,inst_16294);
} else
{if((state_val_16315 === (13)))
{var inst_16308 = (state_16314[(2)]);var state_16314__$1 = state_16314;var statearr_16319_16341 = state_16314__$1;(statearr_16319_16341[(2)] = inst_16308);
(statearr_16319_16341[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16315 === (6)))
{var inst_16299 = (state_16314[(2)]);var state_16314__$1 = state_16314;if(cljs.core.truth_(inst_16299))
{var statearr_16320_16342 = state_16314__$1;(statearr_16320_16342[(1)] = (8));
} else
{var statearr_16321_16343 = state_16314__$1;(statearr_16321_16343[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16315 === (3)))
{var inst_16312 = (state_16314[(2)]);var state_16314__$1 = state_16314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16314__$1,inst_16312);
} else
{if((state_val_16315 === (12)))
{var state_16314__$1 = state_16314;var statearr_16322_16344 = state_16314__$1;(statearr_16322_16344[(2)] = null);
(statearr_16322_16344[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16315 === (2)))
{var inst_16291 = (state_16314[(7)]);var state_16314__$1 = state_16314;if(cljs.core.truth_(inst_16291))
{var statearr_16323_16345 = state_16314__$1;(statearr_16323_16345[(1)] = (4));
} else
{var statearr_16324_16346 = state_16314__$1;(statearr_16324_16346[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16315 === (11)))
{var inst_16305 = cljs.core.async.close_BANG_.call(null,ch);var state_16314__$1 = state_16314;var statearr_16325_16347 = state_16314__$1;(statearr_16325_16347[(2)] = inst_16305);
(statearr_16325_16347[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16315 === (9)))
{var state_16314__$1 = state_16314;if(cljs.core.truth_(close_QMARK_))
{var statearr_16326_16348 = state_16314__$1;(statearr_16326_16348[(1)] = (11));
} else
{var statearr_16327_16349 = state_16314__$1;(statearr_16327_16349[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16315 === (5)))
{var inst_16291 = (state_16314[(7)]);var state_16314__$1 = state_16314;var statearr_16328_16350 = state_16314__$1;(statearr_16328_16350[(2)] = inst_16291);
(statearr_16328_16350[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16315 === (10)))
{var inst_16310 = (state_16314[(2)]);var state_16314__$1 = state_16314;var statearr_16329_16351 = state_16314__$1;(statearr_16329_16351[(2)] = inst_16310);
(statearr_16329_16351[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16315 === (8)))
{var inst_16291 = (state_16314[(7)]);var inst_16301 = cljs.core.next.call(null,inst_16291);var inst_16291__$1 = inst_16301;var state_16314__$1 = (function (){var statearr_16330 = state_16314;(statearr_16330[(7)] = inst_16291__$1);
return statearr_16330;
})();var statearr_16331_16352 = state_16314__$1;(statearr_16331_16352[(2)] = null);
(statearr_16331_16352[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto__))
;return ((function (switch__10973__auto__,c__11038__auto__){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_16335 = [null,null,null,null,null,null,null,null];(statearr_16335[(0)] = state_machine__10974__auto__);
(statearr_16335[(1)] = (1));
return statearr_16335;
});
var state_machine__10974__auto____1 = (function (state_16314){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_16314);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e16336){if((e16336 instanceof Object))
{var ex__10977__auto__ = e16336;var statearr_16337_16353 = state_16314;(statearr_16337_16353[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16314);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16336;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16354 = state_16314;
state_16314 = G__16354;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_16314){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_16314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto__))
})();var state__11040__auto__ = (function (){var statearr_16338 = f__11039__auto__.call(null);(statearr_16338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto__);
return statearr_16338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto__))
);
return c__11038__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj16356 = {};return obj16356;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7932__auto__ = _;if(and__7932__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7932__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8571__auto__ = (((_ == null))?null:_);return (function (){var or__7944__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16358 = {};return obj16358;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7932__auto__ = m;if(and__7932__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7932__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8571__auto__ = (((m == null))?null:m);return (function (){var or__7944__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7932__auto__ = m;if(and__7932__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7932__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8571__auto__ = (((m == null))?null:m);return (function (){var or__7944__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7932__auto__ = m;if(and__7932__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7932__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8571__auto__ = (((m == null))?null:m);return (function (){var or__7944__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16580 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16580 = (function (cs,ch,mult,meta16581){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16581 = meta16581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16580.cljs$lang$type = true;
cljs.core.async.t16580.cljs$lang$ctorStr = "cljs.core.async/t16580";
cljs.core.async.t16580.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8511__auto__,writer__8512__auto__,opt__8513__auto__){return cljs.core._write.call(null,writer__8512__auto__,"cljs.core.async/t16580");
});})(cs))
;
cljs.core.async.t16580.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16580.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16580.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16580.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16580.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16582){var self__ = this;
var _16582__$1 = this;return self__.meta16581;
});})(cs))
;
cljs.core.async.t16580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16582,meta16581__$1){var self__ = this;
var _16582__$1 = this;return (new cljs.core.async.t16580(self__.cs,self__.ch,self__.mult,meta16581__$1));
});})(cs))
;
cljs.core.async.__GT_t16580 = ((function (cs){
return (function __GT_t16580(cs__$1,ch__$1,mult__$1,meta16581){return (new cljs.core.async.t16580(cs__$1,ch__$1,mult__$1,meta16581));
});})(cs))
;
}
return (new cljs.core.async.t16580(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11038__auto___16801 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___16801,cs,m,dchan,dctr,done){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___16801,cs,m,dchan,dctr,done){
return (function (state_16713){var state_val_16714 = (state_16713[(1)]);if((state_val_16714 === (7)))
{var inst_16709 = (state_16713[(2)]);var state_16713__$1 = state_16713;var statearr_16715_16802 = state_16713__$1;(statearr_16715_16802[(2)] = inst_16709);
(statearr_16715_16802[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (20)))
{var inst_16614 = (state_16713[(7)]);var inst_16624 = cljs.core.first.call(null,inst_16614);var inst_16625 = cljs.core.nth.call(null,inst_16624,(0),null);var inst_16626 = cljs.core.nth.call(null,inst_16624,(1),null);var state_16713__$1 = (function (){var statearr_16716 = state_16713;(statearr_16716[(8)] = inst_16625);
return statearr_16716;
})();if(cljs.core.truth_(inst_16626))
{var statearr_16717_16803 = state_16713__$1;(statearr_16717_16803[(1)] = (22));
} else
{var statearr_16718_16804 = state_16713__$1;(statearr_16718_16804[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (27)))
{var inst_16661 = (state_16713[(9)]);var inst_16654 = (state_16713[(10)]);var inst_16656 = (state_16713[(11)]);var inst_16585 = (state_16713[(12)]);var inst_16661__$1 = cljs.core._nth.call(null,inst_16654,inst_16656);var inst_16662 = cljs.core.async.put_BANG_.call(null,inst_16661__$1,inst_16585,done);var state_16713__$1 = (function (){var statearr_16719 = state_16713;(statearr_16719[(9)] = inst_16661__$1);
return statearr_16719;
})();if(cljs.core.truth_(inst_16662))
{var statearr_16720_16805 = state_16713__$1;(statearr_16720_16805[(1)] = (30));
} else
{var statearr_16721_16806 = state_16713__$1;(statearr_16721_16806[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (1)))
{var state_16713__$1 = state_16713;var statearr_16722_16807 = state_16713__$1;(statearr_16722_16807[(2)] = null);
(statearr_16722_16807[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (24)))
{var inst_16614 = (state_16713[(7)]);var inst_16631 = (state_16713[(2)]);var inst_16632 = cljs.core.next.call(null,inst_16614);var inst_16594 = inst_16632;var inst_16595 = null;var inst_16596 = (0);var inst_16597 = (0);var state_16713__$1 = (function (){var statearr_16723 = state_16713;(statearr_16723[(13)] = inst_16595);
(statearr_16723[(14)] = inst_16631);
(statearr_16723[(15)] = inst_16594);
(statearr_16723[(16)] = inst_16597);
(statearr_16723[(17)] = inst_16596);
return statearr_16723;
})();var statearr_16724_16808 = state_16713__$1;(statearr_16724_16808[(2)] = null);
(statearr_16724_16808[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (39)))
{var state_16713__$1 = state_16713;var statearr_16728_16809 = state_16713__$1;(statearr_16728_16809[(2)] = null);
(statearr_16728_16809[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (4)))
{var inst_16585 = (state_16713[(12)]);var inst_16585__$1 = (state_16713[(2)]);var inst_16586 = (inst_16585__$1 == null);var state_16713__$1 = (function (){var statearr_16729 = state_16713;(statearr_16729[(12)] = inst_16585__$1);
return statearr_16729;
})();if(cljs.core.truth_(inst_16586))
{var statearr_16730_16810 = state_16713__$1;(statearr_16730_16810[(1)] = (5));
} else
{var statearr_16731_16811 = state_16713__$1;(statearr_16731_16811[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (15)))
{var inst_16595 = (state_16713[(13)]);var inst_16594 = (state_16713[(15)]);var inst_16597 = (state_16713[(16)]);var inst_16596 = (state_16713[(17)]);var inst_16610 = (state_16713[(2)]);var inst_16611 = (inst_16597 + (1));var tmp16725 = inst_16595;var tmp16726 = inst_16594;var tmp16727 = inst_16596;var inst_16594__$1 = tmp16726;var inst_16595__$1 = tmp16725;var inst_16596__$1 = tmp16727;var inst_16597__$1 = inst_16611;var state_16713__$1 = (function (){var statearr_16732 = state_16713;(statearr_16732[(18)] = inst_16610);
(statearr_16732[(13)] = inst_16595__$1);
(statearr_16732[(15)] = inst_16594__$1);
(statearr_16732[(16)] = inst_16597__$1);
(statearr_16732[(17)] = inst_16596__$1);
return statearr_16732;
})();var statearr_16733_16812 = state_16713__$1;(statearr_16733_16812[(2)] = null);
(statearr_16733_16812[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (21)))
{var inst_16635 = (state_16713[(2)]);var state_16713__$1 = state_16713;var statearr_16737_16813 = state_16713__$1;(statearr_16737_16813[(2)] = inst_16635);
(statearr_16737_16813[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (31)))
{var inst_16661 = (state_16713[(9)]);var inst_16665 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16666 = cljs.core.async.untap_STAR_.call(null,m,inst_16661);var state_16713__$1 = (function (){var statearr_16738 = state_16713;(statearr_16738[(19)] = inst_16665);
return statearr_16738;
})();var statearr_16739_16814 = state_16713__$1;(statearr_16739_16814[(2)] = inst_16666);
(statearr_16739_16814[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (32)))
{var inst_16653 = (state_16713[(20)]);var inst_16654 = (state_16713[(10)]);var inst_16656 = (state_16713[(11)]);var inst_16655 = (state_16713[(21)]);var inst_16668 = (state_16713[(2)]);var inst_16669 = (inst_16656 + (1));var tmp16734 = inst_16653;var tmp16735 = inst_16654;var tmp16736 = inst_16655;var inst_16653__$1 = tmp16734;var inst_16654__$1 = tmp16735;var inst_16655__$1 = tmp16736;var inst_16656__$1 = inst_16669;var state_16713__$1 = (function (){var statearr_16740 = state_16713;(statearr_16740[(20)] = inst_16653__$1);
(statearr_16740[(10)] = inst_16654__$1);
(statearr_16740[(11)] = inst_16656__$1);
(statearr_16740[(22)] = inst_16668);
(statearr_16740[(21)] = inst_16655__$1);
return statearr_16740;
})();var statearr_16741_16815 = state_16713__$1;(statearr_16741_16815[(2)] = null);
(statearr_16741_16815[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (40)))
{var inst_16681 = (state_16713[(23)]);var inst_16685 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16686 = cljs.core.async.untap_STAR_.call(null,m,inst_16681);var state_16713__$1 = (function (){var statearr_16742 = state_16713;(statearr_16742[(24)] = inst_16685);
return statearr_16742;
})();var statearr_16743_16816 = state_16713__$1;(statearr_16743_16816[(2)] = inst_16686);
(statearr_16743_16816[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (33)))
{var inst_16672 = (state_16713[(25)]);var inst_16674 = cljs.core.chunked_seq_QMARK_.call(null,inst_16672);var state_16713__$1 = state_16713;if(inst_16674)
{var statearr_16744_16817 = state_16713__$1;(statearr_16744_16817[(1)] = (36));
} else
{var statearr_16745_16818 = state_16713__$1;(statearr_16745_16818[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (13)))
{var inst_16604 = (state_16713[(26)]);var inst_16607 = cljs.core.async.close_BANG_.call(null,inst_16604);var state_16713__$1 = state_16713;var statearr_16746_16819 = state_16713__$1;(statearr_16746_16819[(2)] = inst_16607);
(statearr_16746_16819[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (22)))
{var inst_16625 = (state_16713[(8)]);var inst_16628 = cljs.core.async.close_BANG_.call(null,inst_16625);var state_16713__$1 = state_16713;var statearr_16747_16820 = state_16713__$1;(statearr_16747_16820[(2)] = inst_16628);
(statearr_16747_16820[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (36)))
{var inst_16672 = (state_16713[(25)]);var inst_16676 = cljs.core.chunk_first.call(null,inst_16672);var inst_16677 = cljs.core.chunk_rest.call(null,inst_16672);var inst_16678 = cljs.core.count.call(null,inst_16676);var inst_16653 = inst_16677;var inst_16654 = inst_16676;var inst_16655 = inst_16678;var inst_16656 = (0);var state_16713__$1 = (function (){var statearr_16748 = state_16713;(statearr_16748[(20)] = inst_16653);
(statearr_16748[(10)] = inst_16654);
(statearr_16748[(11)] = inst_16656);
(statearr_16748[(21)] = inst_16655);
return statearr_16748;
})();var statearr_16749_16821 = state_16713__$1;(statearr_16749_16821[(2)] = null);
(statearr_16749_16821[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (41)))
{var inst_16672 = (state_16713[(25)]);var inst_16688 = (state_16713[(2)]);var inst_16689 = cljs.core.next.call(null,inst_16672);var inst_16653 = inst_16689;var inst_16654 = null;var inst_16655 = (0);var inst_16656 = (0);var state_16713__$1 = (function (){var statearr_16750 = state_16713;(statearr_16750[(20)] = inst_16653);
(statearr_16750[(27)] = inst_16688);
(statearr_16750[(10)] = inst_16654);
(statearr_16750[(11)] = inst_16656);
(statearr_16750[(21)] = inst_16655);
return statearr_16750;
})();var statearr_16751_16822 = state_16713__$1;(statearr_16751_16822[(2)] = null);
(statearr_16751_16822[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (43)))
{var state_16713__$1 = state_16713;var statearr_16752_16823 = state_16713__$1;(statearr_16752_16823[(2)] = null);
(statearr_16752_16823[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (29)))
{var inst_16697 = (state_16713[(2)]);var state_16713__$1 = state_16713;var statearr_16753_16824 = state_16713__$1;(statearr_16753_16824[(2)] = inst_16697);
(statearr_16753_16824[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (44)))
{var inst_16706 = (state_16713[(2)]);var state_16713__$1 = (function (){var statearr_16754 = state_16713;(statearr_16754[(28)] = inst_16706);
return statearr_16754;
})();var statearr_16755_16825 = state_16713__$1;(statearr_16755_16825[(2)] = null);
(statearr_16755_16825[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (6)))
{var inst_16645 = (state_16713[(29)]);var inst_16644 = cljs.core.deref.call(null,cs);var inst_16645__$1 = cljs.core.keys.call(null,inst_16644);var inst_16646 = cljs.core.count.call(null,inst_16645__$1);var inst_16647 = cljs.core.reset_BANG_.call(null,dctr,inst_16646);var inst_16652 = cljs.core.seq.call(null,inst_16645__$1);var inst_16653 = inst_16652;var inst_16654 = null;var inst_16655 = (0);var inst_16656 = (0);var state_16713__$1 = (function (){var statearr_16756 = state_16713;(statearr_16756[(20)] = inst_16653);
(statearr_16756[(30)] = inst_16647);
(statearr_16756[(10)] = inst_16654);
(statearr_16756[(11)] = inst_16656);
(statearr_16756[(21)] = inst_16655);
(statearr_16756[(29)] = inst_16645__$1);
return statearr_16756;
})();var statearr_16757_16826 = state_16713__$1;(statearr_16757_16826[(2)] = null);
(statearr_16757_16826[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (28)))
{var inst_16653 = (state_16713[(20)]);var inst_16672 = (state_16713[(25)]);var inst_16672__$1 = cljs.core.seq.call(null,inst_16653);var state_16713__$1 = (function (){var statearr_16758 = state_16713;(statearr_16758[(25)] = inst_16672__$1);
return statearr_16758;
})();if(inst_16672__$1)
{var statearr_16759_16827 = state_16713__$1;(statearr_16759_16827[(1)] = (33));
} else
{var statearr_16760_16828 = state_16713__$1;(statearr_16760_16828[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (25)))
{var inst_16656 = (state_16713[(11)]);var inst_16655 = (state_16713[(21)]);var inst_16658 = (inst_16656 < inst_16655);var inst_16659 = inst_16658;var state_16713__$1 = state_16713;if(cljs.core.truth_(inst_16659))
{var statearr_16761_16829 = state_16713__$1;(statearr_16761_16829[(1)] = (27));
} else
{var statearr_16762_16830 = state_16713__$1;(statearr_16762_16830[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (34)))
{var state_16713__$1 = state_16713;var statearr_16763_16831 = state_16713__$1;(statearr_16763_16831[(2)] = null);
(statearr_16763_16831[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (17)))
{var state_16713__$1 = state_16713;var statearr_16764_16832 = state_16713__$1;(statearr_16764_16832[(2)] = null);
(statearr_16764_16832[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (3)))
{var inst_16711 = (state_16713[(2)]);var state_16713__$1 = state_16713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16713__$1,inst_16711);
} else
{if((state_val_16714 === (12)))
{var inst_16640 = (state_16713[(2)]);var state_16713__$1 = state_16713;var statearr_16765_16833 = state_16713__$1;(statearr_16765_16833[(2)] = inst_16640);
(statearr_16765_16833[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (2)))
{var state_16713__$1 = state_16713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16713__$1,(4),ch);
} else
{if((state_val_16714 === (23)))
{var state_16713__$1 = state_16713;var statearr_16766_16834 = state_16713__$1;(statearr_16766_16834[(2)] = null);
(statearr_16766_16834[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (35)))
{var inst_16695 = (state_16713[(2)]);var state_16713__$1 = state_16713;var statearr_16767_16835 = state_16713__$1;(statearr_16767_16835[(2)] = inst_16695);
(statearr_16767_16835[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (19)))
{var inst_16614 = (state_16713[(7)]);var inst_16618 = cljs.core.chunk_first.call(null,inst_16614);var inst_16619 = cljs.core.chunk_rest.call(null,inst_16614);var inst_16620 = cljs.core.count.call(null,inst_16618);var inst_16594 = inst_16619;var inst_16595 = inst_16618;var inst_16596 = inst_16620;var inst_16597 = (0);var state_16713__$1 = (function (){var statearr_16768 = state_16713;(statearr_16768[(13)] = inst_16595);
(statearr_16768[(15)] = inst_16594);
(statearr_16768[(16)] = inst_16597);
(statearr_16768[(17)] = inst_16596);
return statearr_16768;
})();var statearr_16769_16836 = state_16713__$1;(statearr_16769_16836[(2)] = null);
(statearr_16769_16836[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (11)))
{var inst_16614 = (state_16713[(7)]);var inst_16594 = (state_16713[(15)]);var inst_16614__$1 = cljs.core.seq.call(null,inst_16594);var state_16713__$1 = (function (){var statearr_16770 = state_16713;(statearr_16770[(7)] = inst_16614__$1);
return statearr_16770;
})();if(inst_16614__$1)
{var statearr_16771_16837 = state_16713__$1;(statearr_16771_16837[(1)] = (16));
} else
{var statearr_16772_16838 = state_16713__$1;(statearr_16772_16838[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (9)))
{var inst_16642 = (state_16713[(2)]);var state_16713__$1 = state_16713;var statearr_16773_16839 = state_16713__$1;(statearr_16773_16839[(2)] = inst_16642);
(statearr_16773_16839[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (5)))
{var inst_16592 = cljs.core.deref.call(null,cs);var inst_16593 = cljs.core.seq.call(null,inst_16592);var inst_16594 = inst_16593;var inst_16595 = null;var inst_16596 = (0);var inst_16597 = (0);var state_16713__$1 = (function (){var statearr_16774 = state_16713;(statearr_16774[(13)] = inst_16595);
(statearr_16774[(15)] = inst_16594);
(statearr_16774[(16)] = inst_16597);
(statearr_16774[(17)] = inst_16596);
return statearr_16774;
})();var statearr_16775_16840 = state_16713__$1;(statearr_16775_16840[(2)] = null);
(statearr_16775_16840[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (14)))
{var state_16713__$1 = state_16713;var statearr_16776_16841 = state_16713__$1;(statearr_16776_16841[(2)] = null);
(statearr_16776_16841[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (45)))
{var inst_16703 = (state_16713[(2)]);var state_16713__$1 = state_16713;var statearr_16777_16842 = state_16713__$1;(statearr_16777_16842[(2)] = inst_16703);
(statearr_16777_16842[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (26)))
{var inst_16645 = (state_16713[(29)]);var inst_16699 = (state_16713[(2)]);var inst_16700 = cljs.core.seq.call(null,inst_16645);var state_16713__$1 = (function (){var statearr_16778 = state_16713;(statearr_16778[(31)] = inst_16699);
return statearr_16778;
})();if(inst_16700)
{var statearr_16779_16843 = state_16713__$1;(statearr_16779_16843[(1)] = (42));
} else
{var statearr_16780_16844 = state_16713__$1;(statearr_16780_16844[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (16)))
{var inst_16614 = (state_16713[(7)]);var inst_16616 = cljs.core.chunked_seq_QMARK_.call(null,inst_16614);var state_16713__$1 = state_16713;if(inst_16616)
{var statearr_16781_16845 = state_16713__$1;(statearr_16781_16845[(1)] = (19));
} else
{var statearr_16782_16846 = state_16713__$1;(statearr_16782_16846[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (38)))
{var inst_16692 = (state_16713[(2)]);var state_16713__$1 = state_16713;var statearr_16783_16847 = state_16713__$1;(statearr_16783_16847[(2)] = inst_16692);
(statearr_16783_16847[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (30)))
{var state_16713__$1 = state_16713;var statearr_16784_16848 = state_16713__$1;(statearr_16784_16848[(2)] = null);
(statearr_16784_16848[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (10)))
{var inst_16595 = (state_16713[(13)]);var inst_16597 = (state_16713[(16)]);var inst_16603 = cljs.core._nth.call(null,inst_16595,inst_16597);var inst_16604 = cljs.core.nth.call(null,inst_16603,(0),null);var inst_16605 = cljs.core.nth.call(null,inst_16603,(1),null);var state_16713__$1 = (function (){var statearr_16785 = state_16713;(statearr_16785[(26)] = inst_16604);
return statearr_16785;
})();if(cljs.core.truth_(inst_16605))
{var statearr_16786_16849 = state_16713__$1;(statearr_16786_16849[(1)] = (13));
} else
{var statearr_16787_16850 = state_16713__$1;(statearr_16787_16850[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (18)))
{var inst_16638 = (state_16713[(2)]);var state_16713__$1 = state_16713;var statearr_16788_16851 = state_16713__$1;(statearr_16788_16851[(2)] = inst_16638);
(statearr_16788_16851[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (42)))
{var state_16713__$1 = state_16713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16713__$1,(45),dchan);
} else
{if((state_val_16714 === (37)))
{var inst_16681 = (state_16713[(23)]);var inst_16585 = (state_16713[(12)]);var inst_16672 = (state_16713[(25)]);var inst_16681__$1 = cljs.core.first.call(null,inst_16672);var inst_16682 = cljs.core.async.put_BANG_.call(null,inst_16681__$1,inst_16585,done);var state_16713__$1 = (function (){var statearr_16789 = state_16713;(statearr_16789[(23)] = inst_16681__$1);
return statearr_16789;
})();if(cljs.core.truth_(inst_16682))
{var statearr_16790_16852 = state_16713__$1;(statearr_16790_16852[(1)] = (39));
} else
{var statearr_16791_16853 = state_16713__$1;(statearr_16791_16853[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16714 === (8)))
{var inst_16597 = (state_16713[(16)]);var inst_16596 = (state_16713[(17)]);var inst_16599 = (inst_16597 < inst_16596);var inst_16600 = inst_16599;var state_16713__$1 = state_16713;if(cljs.core.truth_(inst_16600))
{var statearr_16792_16854 = state_16713__$1;(statearr_16792_16854[(1)] = (10));
} else
{var statearr_16793_16855 = state_16713__$1;(statearr_16793_16855[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___16801,cs,m,dchan,dctr,done))
;return ((function (switch__10973__auto__,c__11038__auto___16801,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_16797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16797[(0)] = state_machine__10974__auto__);
(statearr_16797[(1)] = (1));
return statearr_16797;
});
var state_machine__10974__auto____1 = (function (state_16713){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_16713);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e16798){if((e16798 instanceof Object))
{var ex__10977__auto__ = e16798;var statearr_16799_16856 = state_16713;(statearr_16799_16856[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16713);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16798;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16857 = state_16713;
state_16713 = G__16857;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_16713){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_16713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___16801,cs,m,dchan,dctr,done))
})();var state__11040__auto__ = (function (){var statearr_16800 = f__11039__auto__.call(null);(statearr_16800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___16801);
return statearr_16800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___16801,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16859 = {};return obj16859;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7932__auto__ = m;if(and__7932__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7932__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8571__auto__ = (((m == null))?null:m);return (function (){var or__7944__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7932__auto__ = m;if(and__7932__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7932__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8571__auto__ = (((m == null))?null:m);return (function (){var or__7944__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7932__auto__ = m;if(and__7932__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7932__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8571__auto__ = (((m == null))?null:m);return (function (){var or__7944__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7932__auto__ = m;if(and__7932__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7932__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8571__auto__ = (((m == null))?null:m);return (function (){var or__7944__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7932__auto__ = m;if(and__7932__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7932__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8571__auto__ = (((m == null))?null:m);return (function (){var or__7944__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16979 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16979 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16980){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16980 = meta16980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16979.cljs$lang$type = true;
cljs.core.async.t16979.cljs$lang$ctorStr = "cljs.core.async/t16979";
cljs.core.async.t16979.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8511__auto__,writer__8512__auto__,opt__8513__auto__){return cljs.core._write.call(null,writer__8512__auto__,"cljs.core.async/t16979");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16979.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16979.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16979.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16979.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16979.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16979.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16979.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16979.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16981){var self__ = this;
var _16981__$1 = this;return self__.meta16980;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16981,meta16980__$1){var self__ = this;
var _16981__$1 = this;return (new cljs.core.async.t16979(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16980__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16979 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16979(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16980){return (new cljs.core.async.t16979(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16980));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16979(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11038__auto___17098 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___17098,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___17098,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17051){var state_val_17052 = (state_17051[(1)]);if((state_val_17052 === (7)))
{var inst_16995 = (state_17051[(7)]);var inst_17000 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16995);var state_17051__$1 = state_17051;var statearr_17053_17099 = state_17051__$1;(statearr_17053_17099[(2)] = inst_17000);
(statearr_17053_17099[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (20)))
{var inst_17010 = (state_17051[(8)]);var state_17051__$1 = state_17051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17051__$1,(23),out,inst_17010);
} else
{if((state_val_17052 === (1)))
{var inst_16985 = (state_17051[(9)]);var inst_16985__$1 = calc_state.call(null);var inst_16986 = cljs.core.seq_QMARK_.call(null,inst_16985__$1);var state_17051__$1 = (function (){var statearr_17054 = state_17051;(statearr_17054[(9)] = inst_16985__$1);
return statearr_17054;
})();if(inst_16986)
{var statearr_17055_17100 = state_17051__$1;(statearr_17055_17100[(1)] = (2));
} else
{var statearr_17056_17101 = state_17051__$1;(statearr_17056_17101[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (24)))
{var inst_17003 = (state_17051[(10)]);var inst_16995 = inst_17003;var state_17051__$1 = (function (){var statearr_17057 = state_17051;(statearr_17057[(7)] = inst_16995);
return statearr_17057;
})();var statearr_17058_17102 = state_17051__$1;(statearr_17058_17102[(2)] = null);
(statearr_17058_17102[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (4)))
{var inst_16985 = (state_17051[(9)]);var inst_16991 = (state_17051[(2)]);var inst_16992 = cljs.core.get.call(null,inst_16991,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16993 = cljs.core.get.call(null,inst_16991,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16994 = cljs.core.get.call(null,inst_16991,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16995 = inst_16985;var state_17051__$1 = (function (){var statearr_17059 = state_17051;(statearr_17059[(11)] = inst_16993);
(statearr_17059[(12)] = inst_16992);
(statearr_17059[(13)] = inst_16994);
(statearr_17059[(7)] = inst_16995);
return statearr_17059;
})();var statearr_17060_17103 = state_17051__$1;(statearr_17060_17103[(2)] = null);
(statearr_17060_17103[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (15)))
{var state_17051__$1 = state_17051;var statearr_17061_17104 = state_17051__$1;(statearr_17061_17104[(2)] = null);
(statearr_17061_17104[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (21)))
{var inst_17003 = (state_17051[(10)]);var inst_16995 = inst_17003;var state_17051__$1 = (function (){var statearr_17062 = state_17051;(statearr_17062[(7)] = inst_16995);
return statearr_17062;
})();var statearr_17063_17105 = state_17051__$1;(statearr_17063_17105[(2)] = null);
(statearr_17063_17105[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (13)))
{var inst_17047 = (state_17051[(2)]);var state_17051__$1 = state_17051;var statearr_17064_17106 = state_17051__$1;(statearr_17064_17106[(2)] = inst_17047);
(statearr_17064_17106[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (22)))
{var inst_17045 = (state_17051[(2)]);var state_17051__$1 = state_17051;var statearr_17065_17107 = state_17051__$1;(statearr_17065_17107[(2)] = inst_17045);
(statearr_17065_17107[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (6)))
{var inst_17049 = (state_17051[(2)]);var state_17051__$1 = state_17051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17051__$1,inst_17049);
} else
{if((state_val_17052 === (25)))
{var state_17051__$1 = state_17051;var statearr_17066_17108 = state_17051__$1;(statearr_17066_17108[(2)] = null);
(statearr_17066_17108[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (17)))
{var inst_17025 = (state_17051[(14)]);var state_17051__$1 = state_17051;var statearr_17067_17109 = state_17051__$1;(statearr_17067_17109[(2)] = inst_17025);
(statearr_17067_17109[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (3)))
{var inst_16985 = (state_17051[(9)]);var state_17051__$1 = state_17051;var statearr_17068_17110 = state_17051__$1;(statearr_17068_17110[(2)] = inst_16985);
(statearr_17068_17110[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (12)))
{var inst_17011 = (state_17051[(15)]);var inst_17006 = (state_17051[(16)]);var inst_17025 = (state_17051[(14)]);var inst_17025__$1 = inst_17006.call(null,inst_17011);var state_17051__$1 = (function (){var statearr_17069 = state_17051;(statearr_17069[(14)] = inst_17025__$1);
return statearr_17069;
})();if(cljs.core.truth_(inst_17025__$1))
{var statearr_17070_17111 = state_17051__$1;(statearr_17070_17111[(1)] = (17));
} else
{var statearr_17071_17112 = state_17051__$1;(statearr_17071_17112[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (2)))
{var inst_16985 = (state_17051[(9)]);var inst_16988 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16985);var state_17051__$1 = state_17051;var statearr_17072_17113 = state_17051__$1;(statearr_17072_17113[(2)] = inst_16988);
(statearr_17072_17113[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (23)))
{var inst_17036 = (state_17051[(2)]);var state_17051__$1 = state_17051;if(cljs.core.truth_(inst_17036))
{var statearr_17073_17114 = state_17051__$1;(statearr_17073_17114[(1)] = (24));
} else
{var statearr_17074_17115 = state_17051__$1;(statearr_17074_17115[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (19)))
{var inst_17033 = (state_17051[(2)]);var state_17051__$1 = state_17051;if(cljs.core.truth_(inst_17033))
{var statearr_17075_17116 = state_17051__$1;(statearr_17075_17116[(1)] = (20));
} else
{var statearr_17076_17117 = state_17051__$1;(statearr_17076_17117[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (11)))
{var inst_17010 = (state_17051[(8)]);var inst_17016 = (inst_17010 == null);var state_17051__$1 = state_17051;if(cljs.core.truth_(inst_17016))
{var statearr_17077_17118 = state_17051__$1;(statearr_17077_17118[(1)] = (14));
} else
{var statearr_17078_17119 = state_17051__$1;(statearr_17078_17119[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (9)))
{var inst_17003 = (state_17051[(10)]);var inst_17003__$1 = (state_17051[(2)]);var inst_17004 = cljs.core.get.call(null,inst_17003__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17005 = cljs.core.get.call(null,inst_17003__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17006 = cljs.core.get.call(null,inst_17003__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_17051__$1 = (function (){var statearr_17079 = state_17051;(statearr_17079[(10)] = inst_17003__$1);
(statearr_17079[(16)] = inst_17006);
(statearr_17079[(17)] = inst_17005);
return statearr_17079;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17051__$1,(10),inst_17004);
} else
{if((state_val_17052 === (5)))
{var inst_16995 = (state_17051[(7)]);var inst_16998 = cljs.core.seq_QMARK_.call(null,inst_16995);var state_17051__$1 = state_17051;if(inst_16998)
{var statearr_17080_17120 = state_17051__$1;(statearr_17080_17120[(1)] = (7));
} else
{var statearr_17081_17121 = state_17051__$1;(statearr_17081_17121[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (14)))
{var inst_17011 = (state_17051[(15)]);var inst_17018 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17011);var state_17051__$1 = state_17051;var statearr_17082_17122 = state_17051__$1;(statearr_17082_17122[(2)] = inst_17018);
(statearr_17082_17122[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (26)))
{var inst_17041 = (state_17051[(2)]);var state_17051__$1 = state_17051;var statearr_17083_17123 = state_17051__$1;(statearr_17083_17123[(2)] = inst_17041);
(statearr_17083_17123[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (16)))
{var inst_17021 = (state_17051[(2)]);var inst_17022 = calc_state.call(null);var inst_16995 = inst_17022;var state_17051__$1 = (function (){var statearr_17084 = state_17051;(statearr_17084[(18)] = inst_17021);
(statearr_17084[(7)] = inst_16995);
return statearr_17084;
})();var statearr_17085_17124 = state_17051__$1;(statearr_17085_17124[(2)] = null);
(statearr_17085_17124[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (10)))
{var inst_17011 = (state_17051[(15)]);var inst_17010 = (state_17051[(8)]);var inst_17009 = (state_17051[(2)]);var inst_17010__$1 = cljs.core.nth.call(null,inst_17009,(0),null);var inst_17011__$1 = cljs.core.nth.call(null,inst_17009,(1),null);var inst_17012 = (inst_17010__$1 == null);var inst_17013 = cljs.core._EQ_.call(null,inst_17011__$1,change);var inst_17014 = (inst_17012) || (inst_17013);var state_17051__$1 = (function (){var statearr_17086 = state_17051;(statearr_17086[(15)] = inst_17011__$1);
(statearr_17086[(8)] = inst_17010__$1);
return statearr_17086;
})();if(cljs.core.truth_(inst_17014))
{var statearr_17087_17125 = state_17051__$1;(statearr_17087_17125[(1)] = (11));
} else
{var statearr_17088_17126 = state_17051__$1;(statearr_17088_17126[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (18)))
{var inst_17011 = (state_17051[(15)]);var inst_17006 = (state_17051[(16)]);var inst_17005 = (state_17051[(17)]);var inst_17028 = cljs.core.empty_QMARK_.call(null,inst_17006);var inst_17029 = inst_17005.call(null,inst_17011);var inst_17030 = cljs.core.not.call(null,inst_17029);var inst_17031 = (inst_17028) && (inst_17030);var state_17051__$1 = state_17051;var statearr_17089_17127 = state_17051__$1;(statearr_17089_17127[(2)] = inst_17031);
(statearr_17089_17127[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17052 === (8)))
{var inst_16995 = (state_17051[(7)]);var state_17051__$1 = state_17051;var statearr_17090_17128 = state_17051__$1;(statearr_17090_17128[(2)] = inst_16995);
(statearr_17090_17128[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___17098,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10973__auto__,c__11038__auto___17098,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_17094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17094[(0)] = state_machine__10974__auto__);
(statearr_17094[(1)] = (1));
return statearr_17094;
});
var state_machine__10974__auto____1 = (function (state_17051){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_17051);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e17095){if((e17095 instanceof Object))
{var ex__10977__auto__ = e17095;var statearr_17096_17129 = state_17051;(statearr_17096_17129[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17051);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17095;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17130 = state_17051;
state_17051 = G__17130;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_17051){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_17051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___17098,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11040__auto__ = (function (){var statearr_17097 = f__11039__auto__.call(null);(statearr_17097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___17098);
return statearr_17097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___17098,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj17132 = {};return obj17132;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7932__auto__ = p;if(and__7932__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7932__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8571__auto__ = (((p == null))?null:p);return (function (){var or__7944__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7932__auto__ = p;if(and__7932__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7932__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8571__auto__ = (((p == null))?null:p);return (function (){var or__7944__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7932__auto__ = p;if(and__7932__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7932__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8571__auto__ = (((p == null))?null:p);return (function (){var or__7944__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7932__auto__ = p;if(and__7932__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7932__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8571__auto__ = (((p == null))?null:p);return (function (){var or__7944__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8571__auto__)]);if(or__7944__auto__)
{return or__7944__auto__;
} else
{var or__7944__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7944__auto____$1)
{return or__7944__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7944__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7944__auto__))
{return or__7944__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7944__auto__,mults){
return (function (p1__17133_SHARP_){if(cljs.core.truth_(p1__17133_SHARP_.call(null,topic)))
{return p1__17133_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17133_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7944__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17248 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17248 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17249){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17249 = meta17249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17248.cljs$lang$type = true;
cljs.core.async.t17248.cljs$lang$ctorStr = "cljs.core.async/t17248";
cljs.core.async.t17248.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8511__auto__,writer__8512__auto__,opt__8513__auto__){return cljs.core._write.call(null,writer__8512__auto__,"cljs.core.async/t17248");
});})(mults,ensure_mult))
;
cljs.core.async.t17248.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17248.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17248.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17248.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17248.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17248.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17250){var self__ = this;
var _17250__$1 = this;return self__.meta17249;
});})(mults,ensure_mult))
;
cljs.core.async.t17248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17250,meta17249__$1){var self__ = this;
var _17250__$1 = this;return (new cljs.core.async.t17248(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17249__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17248 = ((function (mults,ensure_mult){
return (function __GT_t17248(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17249){return (new cljs.core.async.t17248(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17249));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17248(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11038__auto___17362 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___17362,mults,ensure_mult,p){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___17362,mults,ensure_mult,p){
return (function (state_17318){var state_val_17319 = (state_17318[(1)]);if((state_val_17319 === (7)))
{var inst_17314 = (state_17318[(2)]);var state_17318__$1 = state_17318;var statearr_17320_17363 = state_17318__$1;(statearr_17320_17363[(2)] = inst_17314);
(statearr_17320_17363[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (20)))
{var state_17318__$1 = state_17318;var statearr_17321_17364 = state_17318__$1;(statearr_17321_17364[(2)] = null);
(statearr_17321_17364[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (1)))
{var state_17318__$1 = state_17318;var statearr_17322_17365 = state_17318__$1;(statearr_17322_17365[(2)] = null);
(statearr_17322_17365[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (4)))
{var inst_17253 = (state_17318[(7)]);var inst_17253__$1 = (state_17318[(2)]);var inst_17254 = (inst_17253__$1 == null);var state_17318__$1 = (function (){var statearr_17323 = state_17318;(statearr_17323[(7)] = inst_17253__$1);
return statearr_17323;
})();if(cljs.core.truth_(inst_17254))
{var statearr_17324_17366 = state_17318__$1;(statearr_17324_17366[(1)] = (5));
} else
{var statearr_17325_17367 = state_17318__$1;(statearr_17325_17367[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (15)))
{var inst_17295 = (state_17318[(2)]);var state_17318__$1 = state_17318;var statearr_17326_17368 = state_17318__$1;(statearr_17326_17368[(2)] = inst_17295);
(statearr_17326_17368[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (21)))
{var inst_17301 = (state_17318[(8)]);var inst_17309 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17301);var state_17318__$1 = state_17318;var statearr_17327_17369 = state_17318__$1;(statearr_17327_17369[(2)] = inst_17309);
(statearr_17327_17369[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (13)))
{var inst_17277 = (state_17318[(9)]);var inst_17279 = cljs.core.chunked_seq_QMARK_.call(null,inst_17277);var state_17318__$1 = state_17318;if(inst_17279)
{var statearr_17328_17370 = state_17318__$1;(statearr_17328_17370[(1)] = (16));
} else
{var statearr_17329_17371 = state_17318__$1;(statearr_17329_17371[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (22)))
{var inst_17311 = (state_17318[(2)]);var state_17318__$1 = (function (){var statearr_17330 = state_17318;(statearr_17330[(10)] = inst_17311);
return statearr_17330;
})();var statearr_17331_17372 = state_17318__$1;(statearr_17331_17372[(2)] = null);
(statearr_17331_17372[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (6)))
{var inst_17301 = (state_17318[(8)]);var inst_17253 = (state_17318[(7)]);var inst_17301__$1 = topic_fn.call(null,inst_17253);var inst_17302 = cljs.core.deref.call(null,mults);var inst_17303 = cljs.core.get.call(null,inst_17302,inst_17301__$1);var inst_17304 = cljs.core.async.muxch_STAR_.call(null,inst_17303);var state_17318__$1 = (function (){var statearr_17332 = state_17318;(statearr_17332[(8)] = inst_17301__$1);
return statearr_17332;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17318__$1,(19),inst_17304,inst_17253);
} else
{if((state_val_17319 === (17)))
{var inst_17277 = (state_17318[(9)]);var inst_17286 = cljs.core.first.call(null,inst_17277);var inst_17287 = cljs.core.async.muxch_STAR_.call(null,inst_17286);var inst_17288 = cljs.core.async.close_BANG_.call(null,inst_17287);var inst_17289 = cljs.core.next.call(null,inst_17277);var inst_17263 = inst_17289;var inst_17264 = null;var inst_17265 = (0);var inst_17266 = (0);var state_17318__$1 = (function (){var statearr_17333 = state_17318;(statearr_17333[(11)] = inst_17266);
(statearr_17333[(12)] = inst_17263);
(statearr_17333[(13)] = inst_17288);
(statearr_17333[(14)] = inst_17264);
(statearr_17333[(15)] = inst_17265);
return statearr_17333;
})();var statearr_17334_17373 = state_17318__$1;(statearr_17334_17373[(2)] = null);
(statearr_17334_17373[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (3)))
{var inst_17316 = (state_17318[(2)]);var state_17318__$1 = state_17318;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17318__$1,inst_17316);
} else
{if((state_val_17319 === (12)))
{var inst_17297 = (state_17318[(2)]);var state_17318__$1 = state_17318;var statearr_17335_17374 = state_17318__$1;(statearr_17335_17374[(2)] = inst_17297);
(statearr_17335_17374[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (2)))
{var state_17318__$1 = state_17318;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17318__$1,(4),ch);
} else
{if((state_val_17319 === (19)))
{var inst_17306 = (state_17318[(2)]);var state_17318__$1 = state_17318;if(cljs.core.truth_(inst_17306))
{var statearr_17336_17375 = state_17318__$1;(statearr_17336_17375[(1)] = (20));
} else
{var statearr_17337_17376 = state_17318__$1;(statearr_17337_17376[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (11)))
{var inst_17277 = (state_17318[(9)]);var inst_17263 = (state_17318[(12)]);var inst_17277__$1 = cljs.core.seq.call(null,inst_17263);var state_17318__$1 = (function (){var statearr_17338 = state_17318;(statearr_17338[(9)] = inst_17277__$1);
return statearr_17338;
})();if(inst_17277__$1)
{var statearr_17339_17377 = state_17318__$1;(statearr_17339_17377[(1)] = (13));
} else
{var statearr_17340_17378 = state_17318__$1;(statearr_17340_17378[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (9)))
{var inst_17299 = (state_17318[(2)]);var state_17318__$1 = state_17318;var statearr_17341_17379 = state_17318__$1;(statearr_17341_17379[(2)] = inst_17299);
(statearr_17341_17379[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (5)))
{var inst_17260 = cljs.core.deref.call(null,mults);var inst_17261 = cljs.core.vals.call(null,inst_17260);var inst_17262 = cljs.core.seq.call(null,inst_17261);var inst_17263 = inst_17262;var inst_17264 = null;var inst_17265 = (0);var inst_17266 = (0);var state_17318__$1 = (function (){var statearr_17342 = state_17318;(statearr_17342[(11)] = inst_17266);
(statearr_17342[(12)] = inst_17263);
(statearr_17342[(14)] = inst_17264);
(statearr_17342[(15)] = inst_17265);
return statearr_17342;
})();var statearr_17343_17380 = state_17318__$1;(statearr_17343_17380[(2)] = null);
(statearr_17343_17380[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (14)))
{var state_17318__$1 = state_17318;var statearr_17347_17381 = state_17318__$1;(statearr_17347_17381[(2)] = null);
(statearr_17347_17381[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (16)))
{var inst_17277 = (state_17318[(9)]);var inst_17281 = cljs.core.chunk_first.call(null,inst_17277);var inst_17282 = cljs.core.chunk_rest.call(null,inst_17277);var inst_17283 = cljs.core.count.call(null,inst_17281);var inst_17263 = inst_17282;var inst_17264 = inst_17281;var inst_17265 = inst_17283;var inst_17266 = (0);var state_17318__$1 = (function (){var statearr_17348 = state_17318;(statearr_17348[(11)] = inst_17266);
(statearr_17348[(12)] = inst_17263);
(statearr_17348[(14)] = inst_17264);
(statearr_17348[(15)] = inst_17265);
return statearr_17348;
})();var statearr_17349_17382 = state_17318__$1;(statearr_17349_17382[(2)] = null);
(statearr_17349_17382[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (10)))
{var inst_17266 = (state_17318[(11)]);var inst_17263 = (state_17318[(12)]);var inst_17264 = (state_17318[(14)]);var inst_17265 = (state_17318[(15)]);var inst_17271 = cljs.core._nth.call(null,inst_17264,inst_17266);var inst_17272 = cljs.core.async.muxch_STAR_.call(null,inst_17271);var inst_17273 = cljs.core.async.close_BANG_.call(null,inst_17272);var inst_17274 = (inst_17266 + (1));var tmp17344 = inst_17263;var tmp17345 = inst_17264;var tmp17346 = inst_17265;var inst_17263__$1 = tmp17344;var inst_17264__$1 = tmp17345;var inst_17265__$1 = tmp17346;var inst_17266__$1 = inst_17274;var state_17318__$1 = (function (){var statearr_17350 = state_17318;(statearr_17350[(11)] = inst_17266__$1);
(statearr_17350[(12)] = inst_17263__$1);
(statearr_17350[(16)] = inst_17273);
(statearr_17350[(14)] = inst_17264__$1);
(statearr_17350[(15)] = inst_17265__$1);
return statearr_17350;
})();var statearr_17351_17383 = state_17318__$1;(statearr_17351_17383[(2)] = null);
(statearr_17351_17383[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (18)))
{var inst_17292 = (state_17318[(2)]);var state_17318__$1 = state_17318;var statearr_17352_17384 = state_17318__$1;(statearr_17352_17384[(2)] = inst_17292);
(statearr_17352_17384[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17319 === (8)))
{var inst_17266 = (state_17318[(11)]);var inst_17265 = (state_17318[(15)]);var inst_17268 = (inst_17266 < inst_17265);var inst_17269 = inst_17268;var state_17318__$1 = state_17318;if(cljs.core.truth_(inst_17269))
{var statearr_17353_17385 = state_17318__$1;(statearr_17353_17385[(1)] = (10));
} else
{var statearr_17354_17386 = state_17318__$1;(statearr_17354_17386[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___17362,mults,ensure_mult,p))
;return ((function (switch__10973__auto__,c__11038__auto___17362,mults,ensure_mult,p){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_17358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17358[(0)] = state_machine__10974__auto__);
(statearr_17358[(1)] = (1));
return statearr_17358;
});
var state_machine__10974__auto____1 = (function (state_17318){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_17318);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e17359){if((e17359 instanceof Object))
{var ex__10977__auto__ = e17359;var statearr_17360_17387 = state_17318;(statearr_17360_17387[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17318);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17359;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17388 = state_17318;
state_17318 = G__17388;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_17318){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_17318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___17362,mults,ensure_mult,p))
})();var state__11040__auto__ = (function (){var statearr_17361 = f__11039__auto__.call(null);(statearr_17361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___17362);
return statearr_17361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___17362,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11038__auto___17525 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___17525,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___17525,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17495){var state_val_17496 = (state_17495[(1)]);if((state_val_17496 === (7)))
{var state_17495__$1 = state_17495;var statearr_17497_17526 = state_17495__$1;(statearr_17497_17526[(2)] = null);
(statearr_17497_17526[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (1)))
{var state_17495__$1 = state_17495;var statearr_17498_17527 = state_17495__$1;(statearr_17498_17527[(2)] = null);
(statearr_17498_17527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (4)))
{var inst_17459 = (state_17495[(7)]);var inst_17461 = (inst_17459 < cnt);var state_17495__$1 = state_17495;if(cljs.core.truth_(inst_17461))
{var statearr_17499_17528 = state_17495__$1;(statearr_17499_17528[(1)] = (6));
} else
{var statearr_17500_17529 = state_17495__$1;(statearr_17500_17529[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (15)))
{var inst_17491 = (state_17495[(2)]);var state_17495__$1 = state_17495;var statearr_17501_17530 = state_17495__$1;(statearr_17501_17530[(2)] = inst_17491);
(statearr_17501_17530[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (13)))
{var inst_17484 = cljs.core.async.close_BANG_.call(null,out);var state_17495__$1 = state_17495;var statearr_17502_17531 = state_17495__$1;(statearr_17502_17531[(2)] = inst_17484);
(statearr_17502_17531[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (6)))
{var state_17495__$1 = state_17495;var statearr_17503_17532 = state_17495__$1;(statearr_17503_17532[(2)] = null);
(statearr_17503_17532[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (3)))
{var inst_17493 = (state_17495[(2)]);var state_17495__$1 = state_17495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17495__$1,inst_17493);
} else
{if((state_val_17496 === (12)))
{var inst_17481 = (state_17495[(8)]);var inst_17481__$1 = (state_17495[(2)]);var inst_17482 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17481__$1);var state_17495__$1 = (function (){var statearr_17504 = state_17495;(statearr_17504[(8)] = inst_17481__$1);
return statearr_17504;
})();if(cljs.core.truth_(inst_17482))
{var statearr_17505_17533 = state_17495__$1;(statearr_17505_17533[(1)] = (13));
} else
{var statearr_17506_17534 = state_17495__$1;(statearr_17506_17534[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (2)))
{var inst_17458 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17459 = (0);var state_17495__$1 = (function (){var statearr_17507 = state_17495;(statearr_17507[(7)] = inst_17459);
(statearr_17507[(9)] = inst_17458);
return statearr_17507;
})();var statearr_17508_17535 = state_17495__$1;(statearr_17508_17535[(2)] = null);
(statearr_17508_17535[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (11)))
{var inst_17459 = (state_17495[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17495,(10),Object,null,(9));var inst_17468 = chs__$1.call(null,inst_17459);var inst_17469 = done.call(null,inst_17459);var inst_17470 = cljs.core.async.take_BANG_.call(null,inst_17468,inst_17469);var state_17495__$1 = state_17495;var statearr_17509_17536 = state_17495__$1;(statearr_17509_17536[(2)] = inst_17470);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17495__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (9)))
{var inst_17459 = (state_17495[(7)]);var inst_17472 = (state_17495[(2)]);var inst_17473 = (inst_17459 + (1));var inst_17459__$1 = inst_17473;var state_17495__$1 = (function (){var statearr_17510 = state_17495;(statearr_17510[(10)] = inst_17472);
(statearr_17510[(7)] = inst_17459__$1);
return statearr_17510;
})();var statearr_17511_17537 = state_17495__$1;(statearr_17511_17537[(2)] = null);
(statearr_17511_17537[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (5)))
{var inst_17479 = (state_17495[(2)]);var state_17495__$1 = (function (){var statearr_17512 = state_17495;(statearr_17512[(11)] = inst_17479);
return statearr_17512;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17495__$1,(12),dchan);
} else
{if((state_val_17496 === (14)))
{var inst_17481 = (state_17495[(8)]);var inst_17486 = cljs.core.apply.call(null,f,inst_17481);var state_17495__$1 = state_17495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17495__$1,(16),out,inst_17486);
} else
{if((state_val_17496 === (16)))
{var inst_17488 = (state_17495[(2)]);var state_17495__$1 = (function (){var statearr_17513 = state_17495;(statearr_17513[(12)] = inst_17488);
return statearr_17513;
})();var statearr_17514_17538 = state_17495__$1;(statearr_17514_17538[(2)] = null);
(statearr_17514_17538[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (10)))
{var inst_17463 = (state_17495[(2)]);var inst_17464 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17495__$1 = (function (){var statearr_17515 = state_17495;(statearr_17515[(13)] = inst_17463);
return statearr_17515;
})();var statearr_17516_17539 = state_17495__$1;(statearr_17516_17539[(2)] = inst_17464);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17495__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17496 === (8)))
{var inst_17477 = (state_17495[(2)]);var state_17495__$1 = state_17495;var statearr_17517_17540 = state_17495__$1;(statearr_17517_17540[(2)] = inst_17477);
(statearr_17517_17540[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___17525,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10973__auto__,c__11038__auto___17525,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_17521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17521[(0)] = state_machine__10974__auto__);
(statearr_17521[(1)] = (1));
return statearr_17521;
});
var state_machine__10974__auto____1 = (function (state_17495){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_17495);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e17522){if((e17522 instanceof Object))
{var ex__10977__auto__ = e17522;var statearr_17523_17541 = state_17495;(statearr_17523_17541[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17522;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17542 = state_17495;
state_17495 = G__17542;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_17495){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_17495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___17525,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11040__auto__ = (function (){var statearr_17524 = f__11039__auto__.call(null);(statearr_17524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___17525);
return statearr_17524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___17525,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11038__auto___17650 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___17650,out){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___17650,out){
return (function (state_17626){var state_val_17627 = (state_17626[(1)]);if((state_val_17627 === (7)))
{var inst_17605 = (state_17626[(7)]);var inst_17606 = (state_17626[(8)]);var inst_17605__$1 = (state_17626[(2)]);var inst_17606__$1 = cljs.core.nth.call(null,inst_17605__$1,(0),null);var inst_17607 = cljs.core.nth.call(null,inst_17605__$1,(1),null);var inst_17608 = (inst_17606__$1 == null);var state_17626__$1 = (function (){var statearr_17628 = state_17626;(statearr_17628[(7)] = inst_17605__$1);
(statearr_17628[(8)] = inst_17606__$1);
(statearr_17628[(9)] = inst_17607);
return statearr_17628;
})();if(cljs.core.truth_(inst_17608))
{var statearr_17629_17651 = state_17626__$1;(statearr_17629_17651[(1)] = (8));
} else
{var statearr_17630_17652 = state_17626__$1;(statearr_17630_17652[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17627 === (1)))
{var inst_17597 = cljs.core.vec.call(null,chs);var inst_17598 = inst_17597;var state_17626__$1 = (function (){var statearr_17631 = state_17626;(statearr_17631[(10)] = inst_17598);
return statearr_17631;
})();var statearr_17632_17653 = state_17626__$1;(statearr_17632_17653[(2)] = null);
(statearr_17632_17653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17627 === (4)))
{var inst_17598 = (state_17626[(10)]);var state_17626__$1 = state_17626;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17626__$1,(7),inst_17598);
} else
{if((state_val_17627 === (6)))
{var inst_17622 = (state_17626[(2)]);var state_17626__$1 = state_17626;var statearr_17633_17654 = state_17626__$1;(statearr_17633_17654[(2)] = inst_17622);
(statearr_17633_17654[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17627 === (3)))
{var inst_17624 = (state_17626[(2)]);var state_17626__$1 = state_17626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17626__$1,inst_17624);
} else
{if((state_val_17627 === (2)))
{var inst_17598 = (state_17626[(10)]);var inst_17600 = cljs.core.count.call(null,inst_17598);var inst_17601 = (inst_17600 > (0));var state_17626__$1 = state_17626;if(cljs.core.truth_(inst_17601))
{var statearr_17635_17655 = state_17626__$1;(statearr_17635_17655[(1)] = (4));
} else
{var statearr_17636_17656 = state_17626__$1;(statearr_17636_17656[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17627 === (11)))
{var inst_17598 = (state_17626[(10)]);var inst_17615 = (state_17626[(2)]);var tmp17634 = inst_17598;var inst_17598__$1 = tmp17634;var state_17626__$1 = (function (){var statearr_17637 = state_17626;(statearr_17637[(10)] = inst_17598__$1);
(statearr_17637[(11)] = inst_17615);
return statearr_17637;
})();var statearr_17638_17657 = state_17626__$1;(statearr_17638_17657[(2)] = null);
(statearr_17638_17657[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17627 === (9)))
{var inst_17606 = (state_17626[(8)]);var state_17626__$1 = state_17626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17626__$1,(11),out,inst_17606);
} else
{if((state_val_17627 === (5)))
{var inst_17620 = cljs.core.async.close_BANG_.call(null,out);var state_17626__$1 = state_17626;var statearr_17639_17658 = state_17626__$1;(statearr_17639_17658[(2)] = inst_17620);
(statearr_17639_17658[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17627 === (10)))
{var inst_17618 = (state_17626[(2)]);var state_17626__$1 = state_17626;var statearr_17640_17659 = state_17626__$1;(statearr_17640_17659[(2)] = inst_17618);
(statearr_17640_17659[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17627 === (8)))
{var inst_17605 = (state_17626[(7)]);var inst_17598 = (state_17626[(10)]);var inst_17606 = (state_17626[(8)]);var inst_17607 = (state_17626[(9)]);var inst_17610 = (function (){var c = inst_17607;var v = inst_17606;var vec__17603 = inst_17605;var cs = inst_17598;return ((function (c,v,vec__17603,cs,inst_17605,inst_17598,inst_17606,inst_17607,state_val_17627,c__11038__auto___17650,out){
return (function (p1__17543_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17543_SHARP_);
});
;})(c,v,vec__17603,cs,inst_17605,inst_17598,inst_17606,inst_17607,state_val_17627,c__11038__auto___17650,out))
})();var inst_17611 = cljs.core.filterv.call(null,inst_17610,inst_17598);var inst_17598__$1 = inst_17611;var state_17626__$1 = (function (){var statearr_17641 = state_17626;(statearr_17641[(10)] = inst_17598__$1);
return statearr_17641;
})();var statearr_17642_17660 = state_17626__$1;(statearr_17642_17660[(2)] = null);
(statearr_17642_17660[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___17650,out))
;return ((function (switch__10973__auto__,c__11038__auto___17650,out){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_17646 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17646[(0)] = state_machine__10974__auto__);
(statearr_17646[(1)] = (1));
return statearr_17646;
});
var state_machine__10974__auto____1 = (function (state_17626){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_17626);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e17647){if((e17647 instanceof Object))
{var ex__10977__auto__ = e17647;var statearr_17648_17661 = state_17626;(statearr_17648_17661[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17626);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17647;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17662 = state_17626;
state_17626 = G__17662;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_17626){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_17626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___17650,out))
})();var state__11040__auto__ = (function (){var statearr_17649 = f__11039__auto__.call(null);(statearr_17649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___17650);
return statearr_17649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___17650,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11038__auto___17755 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___17755,out){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___17755,out){
return (function (state_17732){var state_val_17733 = (state_17732[(1)]);if((state_val_17733 === (7)))
{var inst_17714 = (state_17732[(7)]);var inst_17714__$1 = (state_17732[(2)]);var inst_17715 = (inst_17714__$1 == null);var inst_17716 = cljs.core.not.call(null,inst_17715);var state_17732__$1 = (function (){var statearr_17734 = state_17732;(statearr_17734[(7)] = inst_17714__$1);
return statearr_17734;
})();if(inst_17716)
{var statearr_17735_17756 = state_17732__$1;(statearr_17735_17756[(1)] = (8));
} else
{var statearr_17736_17757 = state_17732__$1;(statearr_17736_17757[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17733 === (1)))
{var inst_17709 = (0);var state_17732__$1 = (function (){var statearr_17737 = state_17732;(statearr_17737[(8)] = inst_17709);
return statearr_17737;
})();var statearr_17738_17758 = state_17732__$1;(statearr_17738_17758[(2)] = null);
(statearr_17738_17758[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17733 === (4)))
{var state_17732__$1 = state_17732;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17732__$1,(7),ch);
} else
{if((state_val_17733 === (6)))
{var inst_17727 = (state_17732[(2)]);var state_17732__$1 = state_17732;var statearr_17739_17759 = state_17732__$1;(statearr_17739_17759[(2)] = inst_17727);
(statearr_17739_17759[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17733 === (3)))
{var inst_17729 = (state_17732[(2)]);var inst_17730 = cljs.core.async.close_BANG_.call(null,out);var state_17732__$1 = (function (){var statearr_17740 = state_17732;(statearr_17740[(9)] = inst_17729);
return statearr_17740;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17732__$1,inst_17730);
} else
{if((state_val_17733 === (2)))
{var inst_17709 = (state_17732[(8)]);var inst_17711 = (inst_17709 < n);var state_17732__$1 = state_17732;if(cljs.core.truth_(inst_17711))
{var statearr_17741_17760 = state_17732__$1;(statearr_17741_17760[(1)] = (4));
} else
{var statearr_17742_17761 = state_17732__$1;(statearr_17742_17761[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17733 === (11)))
{var inst_17709 = (state_17732[(8)]);var inst_17719 = (state_17732[(2)]);var inst_17720 = (inst_17709 + (1));var inst_17709__$1 = inst_17720;var state_17732__$1 = (function (){var statearr_17743 = state_17732;(statearr_17743[(8)] = inst_17709__$1);
(statearr_17743[(10)] = inst_17719);
return statearr_17743;
})();var statearr_17744_17762 = state_17732__$1;(statearr_17744_17762[(2)] = null);
(statearr_17744_17762[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17733 === (9)))
{var state_17732__$1 = state_17732;var statearr_17745_17763 = state_17732__$1;(statearr_17745_17763[(2)] = null);
(statearr_17745_17763[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17733 === (5)))
{var state_17732__$1 = state_17732;var statearr_17746_17764 = state_17732__$1;(statearr_17746_17764[(2)] = null);
(statearr_17746_17764[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17733 === (10)))
{var inst_17724 = (state_17732[(2)]);var state_17732__$1 = state_17732;var statearr_17747_17765 = state_17732__$1;(statearr_17747_17765[(2)] = inst_17724);
(statearr_17747_17765[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17733 === (8)))
{var inst_17714 = (state_17732[(7)]);var state_17732__$1 = state_17732;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17732__$1,(11),out,inst_17714);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___17755,out))
;return ((function (switch__10973__auto__,c__11038__auto___17755,out){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_17751 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17751[(0)] = state_machine__10974__auto__);
(statearr_17751[(1)] = (1));
return statearr_17751;
});
var state_machine__10974__auto____1 = (function (state_17732){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_17732);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e17752){if((e17752 instanceof Object))
{var ex__10977__auto__ = e17752;var statearr_17753_17766 = state_17732;(statearr_17753_17766[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17732);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17752;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17767 = state_17732;
state_17732 = G__17767;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_17732){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_17732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___17755,out))
})();var state__11040__auto__ = (function (){var statearr_17754 = f__11039__auto__.call(null);(statearr_17754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___17755);
return statearr_17754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___17755,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11038__auto___17864 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___17864,out){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___17864,out){
return (function (state_17839){var state_val_17840 = (state_17839[(1)]);if((state_val_17840 === (7)))
{var inst_17834 = (state_17839[(2)]);var state_17839__$1 = state_17839;var statearr_17841_17865 = state_17839__$1;(statearr_17841_17865[(2)] = inst_17834);
(statearr_17841_17865[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (1)))
{var inst_17816 = null;var state_17839__$1 = (function (){var statearr_17842 = state_17839;(statearr_17842[(7)] = inst_17816);
return statearr_17842;
})();var statearr_17843_17866 = state_17839__$1;(statearr_17843_17866[(2)] = null);
(statearr_17843_17866[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (4)))
{var inst_17819 = (state_17839[(8)]);var inst_17819__$1 = (state_17839[(2)]);var inst_17820 = (inst_17819__$1 == null);var inst_17821 = cljs.core.not.call(null,inst_17820);var state_17839__$1 = (function (){var statearr_17844 = state_17839;(statearr_17844[(8)] = inst_17819__$1);
return statearr_17844;
})();if(inst_17821)
{var statearr_17845_17867 = state_17839__$1;(statearr_17845_17867[(1)] = (5));
} else
{var statearr_17846_17868 = state_17839__$1;(statearr_17846_17868[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (6)))
{var state_17839__$1 = state_17839;var statearr_17847_17869 = state_17839__$1;(statearr_17847_17869[(2)] = null);
(statearr_17847_17869[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (3)))
{var inst_17836 = (state_17839[(2)]);var inst_17837 = cljs.core.async.close_BANG_.call(null,out);var state_17839__$1 = (function (){var statearr_17848 = state_17839;(statearr_17848[(9)] = inst_17836);
return statearr_17848;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17839__$1,inst_17837);
} else
{if((state_val_17840 === (2)))
{var state_17839__$1 = state_17839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17839__$1,(4),ch);
} else
{if((state_val_17840 === (11)))
{var inst_17819 = (state_17839[(8)]);var inst_17828 = (state_17839[(2)]);var inst_17816 = inst_17819;var state_17839__$1 = (function (){var statearr_17849 = state_17839;(statearr_17849[(10)] = inst_17828);
(statearr_17849[(7)] = inst_17816);
return statearr_17849;
})();var statearr_17850_17870 = state_17839__$1;(statearr_17850_17870[(2)] = null);
(statearr_17850_17870[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (9)))
{var inst_17819 = (state_17839[(8)]);var state_17839__$1 = state_17839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17839__$1,(11),out,inst_17819);
} else
{if((state_val_17840 === (5)))
{var inst_17819 = (state_17839[(8)]);var inst_17816 = (state_17839[(7)]);var inst_17823 = cljs.core._EQ_.call(null,inst_17819,inst_17816);var state_17839__$1 = state_17839;if(inst_17823)
{var statearr_17852_17871 = state_17839__$1;(statearr_17852_17871[(1)] = (8));
} else
{var statearr_17853_17872 = state_17839__$1;(statearr_17853_17872[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (10)))
{var inst_17831 = (state_17839[(2)]);var state_17839__$1 = state_17839;var statearr_17854_17873 = state_17839__$1;(statearr_17854_17873[(2)] = inst_17831);
(statearr_17854_17873[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17840 === (8)))
{var inst_17816 = (state_17839[(7)]);var tmp17851 = inst_17816;var inst_17816__$1 = tmp17851;var state_17839__$1 = (function (){var statearr_17855 = state_17839;(statearr_17855[(7)] = inst_17816__$1);
return statearr_17855;
})();var statearr_17856_17874 = state_17839__$1;(statearr_17856_17874[(2)] = null);
(statearr_17856_17874[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___17864,out))
;return ((function (switch__10973__auto__,c__11038__auto___17864,out){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_17860 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17860[(0)] = state_machine__10974__auto__);
(statearr_17860[(1)] = (1));
return statearr_17860;
});
var state_machine__10974__auto____1 = (function (state_17839){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_17839);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e17861){if((e17861 instanceof Object))
{var ex__10977__auto__ = e17861;var statearr_17862_17875 = state_17839;(statearr_17862_17875[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17839);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17861;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17876 = state_17839;
state_17839 = G__17876;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_17839){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_17839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___17864,out))
})();var state__11040__auto__ = (function (){var statearr_17863 = f__11039__auto__.call(null);(statearr_17863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___17864);
return statearr_17863;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___17864,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11038__auto___18011 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___18011,out){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___18011,out){
return (function (state_17981){var state_val_17982 = (state_17981[(1)]);if((state_val_17982 === (7)))
{var inst_17977 = (state_17981[(2)]);var state_17981__$1 = state_17981;var statearr_17983_18012 = state_17981__$1;(statearr_17983_18012[(2)] = inst_17977);
(statearr_17983_18012[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17982 === (1)))
{var inst_17944 = (new Array(n));var inst_17945 = inst_17944;var inst_17946 = (0);var state_17981__$1 = (function (){var statearr_17984 = state_17981;(statearr_17984[(7)] = inst_17945);
(statearr_17984[(8)] = inst_17946);
return statearr_17984;
})();var statearr_17985_18013 = state_17981__$1;(statearr_17985_18013[(2)] = null);
(statearr_17985_18013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17982 === (4)))
{var inst_17949 = (state_17981[(9)]);var inst_17949__$1 = (state_17981[(2)]);var inst_17950 = (inst_17949__$1 == null);var inst_17951 = cljs.core.not.call(null,inst_17950);var state_17981__$1 = (function (){var statearr_17986 = state_17981;(statearr_17986[(9)] = inst_17949__$1);
return statearr_17986;
})();if(inst_17951)
{var statearr_17987_18014 = state_17981__$1;(statearr_17987_18014[(1)] = (5));
} else
{var statearr_17988_18015 = state_17981__$1;(statearr_17988_18015[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17982 === (15)))
{var inst_17971 = (state_17981[(2)]);var state_17981__$1 = state_17981;var statearr_17989_18016 = state_17981__$1;(statearr_17989_18016[(2)] = inst_17971);
(statearr_17989_18016[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17982 === (13)))
{var state_17981__$1 = state_17981;var statearr_17990_18017 = state_17981__$1;(statearr_17990_18017[(2)] = null);
(statearr_17990_18017[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17982 === (6)))
{var inst_17946 = (state_17981[(8)]);var inst_17967 = (inst_17946 > (0));var state_17981__$1 = state_17981;if(cljs.core.truth_(inst_17967))
{var statearr_17991_18018 = state_17981__$1;(statearr_17991_18018[(1)] = (12));
} else
{var statearr_17992_18019 = state_17981__$1;(statearr_17992_18019[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17982 === (3)))
{var inst_17979 = (state_17981[(2)]);var state_17981__$1 = state_17981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17981__$1,inst_17979);
} else
{if((state_val_17982 === (12)))
{var inst_17945 = (state_17981[(7)]);var inst_17969 = cljs.core.vec.call(null,inst_17945);var state_17981__$1 = state_17981;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17981__$1,(15),out,inst_17969);
} else
{if((state_val_17982 === (2)))
{var state_17981__$1 = state_17981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17981__$1,(4),ch);
} else
{if((state_val_17982 === (11)))
{var inst_17961 = (state_17981[(2)]);var inst_17962 = (new Array(n));var inst_17945 = inst_17962;var inst_17946 = (0);var state_17981__$1 = (function (){var statearr_17993 = state_17981;(statearr_17993[(7)] = inst_17945);
(statearr_17993[(10)] = inst_17961);
(statearr_17993[(8)] = inst_17946);
return statearr_17993;
})();var statearr_17994_18020 = state_17981__$1;(statearr_17994_18020[(2)] = null);
(statearr_17994_18020[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17982 === (9)))
{var inst_17945 = (state_17981[(7)]);var inst_17959 = cljs.core.vec.call(null,inst_17945);var state_17981__$1 = state_17981;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17981__$1,(11),out,inst_17959);
} else
{if((state_val_17982 === (5)))
{var inst_17954 = (state_17981[(11)]);var inst_17945 = (state_17981[(7)]);var inst_17946 = (state_17981[(8)]);var inst_17949 = (state_17981[(9)]);var inst_17953 = (inst_17945[inst_17946] = inst_17949);var inst_17954__$1 = (inst_17946 + (1));var inst_17955 = (inst_17954__$1 < n);var state_17981__$1 = (function (){var statearr_17995 = state_17981;(statearr_17995[(11)] = inst_17954__$1);
(statearr_17995[(12)] = inst_17953);
return statearr_17995;
})();if(cljs.core.truth_(inst_17955))
{var statearr_17996_18021 = state_17981__$1;(statearr_17996_18021[(1)] = (8));
} else
{var statearr_17997_18022 = state_17981__$1;(statearr_17997_18022[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17982 === (14)))
{var inst_17974 = (state_17981[(2)]);var inst_17975 = cljs.core.async.close_BANG_.call(null,out);var state_17981__$1 = (function (){var statearr_17999 = state_17981;(statearr_17999[(13)] = inst_17974);
return statearr_17999;
})();var statearr_18000_18023 = state_17981__$1;(statearr_18000_18023[(2)] = inst_17975);
(statearr_18000_18023[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17982 === (10)))
{var inst_17965 = (state_17981[(2)]);var state_17981__$1 = state_17981;var statearr_18001_18024 = state_17981__$1;(statearr_18001_18024[(2)] = inst_17965);
(statearr_18001_18024[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17982 === (8)))
{var inst_17954 = (state_17981[(11)]);var inst_17945 = (state_17981[(7)]);var tmp17998 = inst_17945;var inst_17945__$1 = tmp17998;var inst_17946 = inst_17954;var state_17981__$1 = (function (){var statearr_18002 = state_17981;(statearr_18002[(7)] = inst_17945__$1);
(statearr_18002[(8)] = inst_17946);
return statearr_18002;
})();var statearr_18003_18025 = state_17981__$1;(statearr_18003_18025[(2)] = null);
(statearr_18003_18025[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___18011,out))
;return ((function (switch__10973__auto__,c__11038__auto___18011,out){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_18007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18007[(0)] = state_machine__10974__auto__);
(statearr_18007[(1)] = (1));
return statearr_18007;
});
var state_machine__10974__auto____1 = (function (state_17981){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_17981);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e18008){if((e18008 instanceof Object))
{var ex__10977__auto__ = e18008;var statearr_18009_18026 = state_17981;(statearr_18009_18026[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18008;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18027 = state_17981;
state_17981 = G__18027;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_17981){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_17981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___18011,out))
})();var state__11040__auto__ = (function (){var statearr_18010 = f__11039__auto__.call(null);(statearr_18010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___18011);
return statearr_18010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___18011,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11038__auto___18170 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11038__auto___18170,out){
return (function (){var f__11039__auto__ = (function (){var switch__10973__auto__ = ((function (c__11038__auto___18170,out){
return (function (state_18140){var state_val_18141 = (state_18140[(1)]);if((state_val_18141 === (7)))
{var inst_18136 = (state_18140[(2)]);var state_18140__$1 = state_18140;var statearr_18142_18171 = state_18140__$1;(statearr_18142_18171[(2)] = inst_18136);
(statearr_18142_18171[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18141 === (1)))
{var inst_18099 = [];var inst_18100 = inst_18099;var inst_18101 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_18140__$1 = (function (){var statearr_18143 = state_18140;(statearr_18143[(7)] = inst_18101);
(statearr_18143[(8)] = inst_18100);
return statearr_18143;
})();var statearr_18144_18172 = state_18140__$1;(statearr_18144_18172[(2)] = null);
(statearr_18144_18172[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18141 === (4)))
{var inst_18104 = (state_18140[(9)]);var inst_18104__$1 = (state_18140[(2)]);var inst_18105 = (inst_18104__$1 == null);var inst_18106 = cljs.core.not.call(null,inst_18105);var state_18140__$1 = (function (){var statearr_18145 = state_18140;(statearr_18145[(9)] = inst_18104__$1);
return statearr_18145;
})();if(inst_18106)
{var statearr_18146_18173 = state_18140__$1;(statearr_18146_18173[(1)] = (5));
} else
{var statearr_18147_18174 = state_18140__$1;(statearr_18147_18174[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18141 === (15)))
{var inst_18130 = (state_18140[(2)]);var state_18140__$1 = state_18140;var statearr_18148_18175 = state_18140__$1;(statearr_18148_18175[(2)] = inst_18130);
(statearr_18148_18175[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18141 === (13)))
{var state_18140__$1 = state_18140;var statearr_18149_18176 = state_18140__$1;(statearr_18149_18176[(2)] = null);
(statearr_18149_18176[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18141 === (6)))
{var inst_18100 = (state_18140[(8)]);var inst_18125 = inst_18100.length;var inst_18126 = (inst_18125 > (0));var state_18140__$1 = state_18140;if(cljs.core.truth_(inst_18126))
{var statearr_18150_18177 = state_18140__$1;(statearr_18150_18177[(1)] = (12));
} else
{var statearr_18151_18178 = state_18140__$1;(statearr_18151_18178[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18141 === (3)))
{var inst_18138 = (state_18140[(2)]);var state_18140__$1 = state_18140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18140__$1,inst_18138);
} else
{if((state_val_18141 === (12)))
{var inst_18100 = (state_18140[(8)]);var inst_18128 = cljs.core.vec.call(null,inst_18100);var state_18140__$1 = state_18140;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18140__$1,(15),out,inst_18128);
} else
{if((state_val_18141 === (2)))
{var state_18140__$1 = state_18140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18140__$1,(4),ch);
} else
{if((state_val_18141 === (11)))
{var inst_18104 = (state_18140[(9)]);var inst_18108 = (state_18140[(10)]);var inst_18118 = (state_18140[(2)]);var inst_18119 = [];var inst_18120 = inst_18119.push(inst_18104);var inst_18100 = inst_18119;var inst_18101 = inst_18108;var state_18140__$1 = (function (){var statearr_18152 = state_18140;(statearr_18152[(11)] = inst_18118);
(statearr_18152[(12)] = inst_18120);
(statearr_18152[(7)] = inst_18101);
(statearr_18152[(8)] = inst_18100);
return statearr_18152;
})();var statearr_18153_18179 = state_18140__$1;(statearr_18153_18179[(2)] = null);
(statearr_18153_18179[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18141 === (9)))
{var inst_18100 = (state_18140[(8)]);var inst_18116 = cljs.core.vec.call(null,inst_18100);var state_18140__$1 = state_18140;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18140__$1,(11),out,inst_18116);
} else
{if((state_val_18141 === (5)))
{var inst_18104 = (state_18140[(9)]);var inst_18108 = (state_18140[(10)]);var inst_18101 = (state_18140[(7)]);var inst_18108__$1 = f.call(null,inst_18104);var inst_18109 = cljs.core._EQ_.call(null,inst_18108__$1,inst_18101);var inst_18110 = cljs.core.keyword_identical_QMARK_.call(null,inst_18101,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_18111 = (inst_18109) || (inst_18110);var state_18140__$1 = (function (){var statearr_18154 = state_18140;(statearr_18154[(10)] = inst_18108__$1);
return statearr_18154;
})();if(cljs.core.truth_(inst_18111))
{var statearr_18155_18180 = state_18140__$1;(statearr_18155_18180[(1)] = (8));
} else
{var statearr_18156_18181 = state_18140__$1;(statearr_18156_18181[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18141 === (14)))
{var inst_18133 = (state_18140[(2)]);var inst_18134 = cljs.core.async.close_BANG_.call(null,out);var state_18140__$1 = (function (){var statearr_18158 = state_18140;(statearr_18158[(13)] = inst_18133);
return statearr_18158;
})();var statearr_18159_18182 = state_18140__$1;(statearr_18159_18182[(2)] = inst_18134);
(statearr_18159_18182[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18141 === (10)))
{var inst_18123 = (state_18140[(2)]);var state_18140__$1 = state_18140;var statearr_18160_18183 = state_18140__$1;(statearr_18160_18183[(2)] = inst_18123);
(statearr_18160_18183[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18141 === (8)))
{var inst_18104 = (state_18140[(9)]);var inst_18108 = (state_18140[(10)]);var inst_18100 = (state_18140[(8)]);var inst_18113 = inst_18100.push(inst_18104);var tmp18157 = inst_18100;var inst_18100__$1 = tmp18157;var inst_18101 = inst_18108;var state_18140__$1 = (function (){var statearr_18161 = state_18140;(statearr_18161[(7)] = inst_18101);
(statearr_18161[(14)] = inst_18113);
(statearr_18161[(8)] = inst_18100__$1);
return statearr_18161;
})();var statearr_18162_18184 = state_18140__$1;(statearr_18162_18184[(2)] = null);
(statearr_18162_18184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11038__auto___18170,out))
;return ((function (switch__10973__auto__,c__11038__auto___18170,out){
return (function() {
var state_machine__10974__auto__ = null;
var state_machine__10974__auto____0 = (function (){var statearr_18166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18166[(0)] = state_machine__10974__auto__);
(statearr_18166[(1)] = (1));
return statearr_18166;
});
var state_machine__10974__auto____1 = (function (state_18140){while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_18140);if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10976__auto__;
}
break;
}
}catch (e18167){if((e18167 instanceof Object))
{var ex__10977__auto__ = e18167;var statearr_18168_18185 = state_18140;(statearr_18168_18185[(5)] = ex__10977__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18167;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18186 = state_18140;
state_18140 = G__18186;
continue;
}
} else
{return ret_value__10975__auto__;
}
break;
}
});
state_machine__10974__auto__ = function(state_18140){
switch(arguments.length){
case 0:
return state_machine__10974__auto____0.call(this);
case 1:
return state_machine__10974__auto____1.call(this,state_18140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10974__auto____0;
state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10974__auto____1;
return state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11038__auto___18170,out))
})();var state__11040__auto__ = (function (){var statearr_18169 = f__11039__auto__.call(null);(statearr_18169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11038__auto___18170);
return statearr_18169;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(c__11038__auto___18170,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map