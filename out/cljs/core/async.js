// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t18077 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18077 = (function (fn_handler,f,meta18078){
this.fn_handler = fn_handler;
this.f = f;
this.meta18078 = meta18078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18079,meta18078__$1){
var self__ = this;
var _18079__$1 = this;
return (new cljs.core.async.t18077(self__.fn_handler,self__.f,meta18078__$1));
});

cljs.core.async.t18077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18079){
var self__ = this;
var _18079__$1 = this;
return self__.meta18078;
});

cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta18078","meta18078",695812164,null)], null);
});

cljs.core.async.t18077.cljs$lang$type = true;

cljs.core.async.t18077.cljs$lang$ctorStr = "cljs.core.async/t18077";

cljs.core.async.t18077.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write.call(null,writer__4790__auto__,"cljs.core.async/t18077");
});

cljs.core.async.__GT_t18077 = (function cljs$core$async$fn_handler_$___GT_t18077(fn_handler__$1,f__$1,meta18078){
return (new cljs.core.async.t18077(fn_handler__$1,f__$1,meta18078));
});

}

return (new cljs.core.async.t18077(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__18081 = buff;
if(G__18081){
var bit__4884__auto__ = null;
if(cljs.core.truth_((function (){var or__4210__auto__ = bit__4884__auto__;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__18081.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18081.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18081);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18081);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__18083 = arguments.length;
switch (G__18083) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__18086 = arguments.length;
switch (G__18086) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18088 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18088);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18088,ret){
return (function (){
return fn1.call(null,val_18088);
});})(val_18088,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__18090 = arguments.length;
switch (G__18090) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5095__auto___18092 = n;
var x_18093 = (0);
while(true){
if((x_18093 < n__5095__auto___18092)){
(a[x_18093] = (0));

var G__18094 = (x_18093 + (1));
x_18093 = G__18094;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__18095 = (i + (1));
i = G__18095;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t18099 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18099 = (function (alt_flag,flag,meta18100){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18100 = meta18100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18101,meta18100__$1){
var self__ = this;
var _18101__$1 = this;
return (new cljs.core.async.t18099(self__.alt_flag,self__.flag,meta18100__$1));
});})(flag))
;

cljs.core.async.t18099.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18101){
var self__ = this;
var _18101__$1 = this;
return self__.meta18100;
});})(flag))
;

cljs.core.async.t18099.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t18099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t18099.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18100","meta18100",-1470845871,null)], null);
});})(flag))
;

cljs.core.async.t18099.cljs$lang$type = true;

cljs.core.async.t18099.cljs$lang$ctorStr = "cljs.core.async/t18099";

cljs.core.async.t18099.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write.call(null,writer__4790__auto__,"cljs.core.async/t18099");
});})(flag))
;

cljs.core.async.__GT_t18099 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t18099(alt_flag__$1,flag__$1,meta18100){
return (new cljs.core.async.t18099(alt_flag__$1,flag__$1,meta18100));
});})(flag))
;

}

return (new cljs.core.async.t18099(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t18105 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18105 = (function (alt_handler,flag,cb,meta18106){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18106 = meta18106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18107,meta18106__$1){
var self__ = this;
var _18107__$1 = this;
return (new cljs.core.async.t18105(self__.alt_handler,self__.flag,self__.cb,meta18106__$1));
});

cljs.core.async.t18105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18107){
var self__ = this;
var _18107__$1 = this;
return self__.meta18106;
});

cljs.core.async.t18105.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t18105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t18105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18106","meta18106",727810277,null)], null);
});

cljs.core.async.t18105.cljs$lang$type = true;

cljs.core.async.t18105.cljs$lang$ctorStr = "cljs.core.async/t18105";

cljs.core.async.t18105.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write.call(null,writer__4790__auto__,"cljs.core.async/t18105");
});

cljs.core.async.__GT_t18105 = (function cljs$core$async$alt_handler_$___GT_t18105(alt_handler__$1,flag__$1,cb__$1,meta18106){
return (new cljs.core.async.t18105(alt_handler__$1,flag__$1,cb__$1,meta18106));
});

}

return (new cljs.core.async.t18105(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18108_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18108_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18109_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18109_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4210__auto__ = wport;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18110 = (i + (1));
i = G__18110;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4210__auto__ = ret;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4198__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4198__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
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
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18113){
var map__18114 = p__18113;
var map__18114__$1 = ((cljs.core.seq_QMARK_.call(null,map__18114))?cljs.core.apply.call(null,cljs.core.hash_map,map__18114):map__18114);
var opts = map__18114__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18111){
var G__18112 = cljs.core.first.call(null,seq18111);
var seq18111__$1 = cljs.core.next.call(null,seq18111);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18112,seq18111__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__18116 = arguments.length;
switch (G__18116) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6701__auto___18165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___18165){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___18165){
return (function (state_18140){
var state_val_18141 = (state_18140[(1)]);
if((state_val_18141 === (7))){
var inst_18136 = (state_18140[(2)]);
var state_18140__$1 = state_18140;
var statearr_18142_18166 = state_18140__$1;
(statearr_18142_18166[(2)] = inst_18136);

(statearr_18142_18166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (1))){
var state_18140__$1 = state_18140;
var statearr_18143_18167 = state_18140__$1;
(statearr_18143_18167[(2)] = null);

(statearr_18143_18167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (4))){
var inst_18119 = (state_18140[(7)]);
var inst_18119__$1 = (state_18140[(2)]);
var inst_18120 = (inst_18119__$1 == null);
var state_18140__$1 = (function (){var statearr_18144 = state_18140;
(statearr_18144[(7)] = inst_18119__$1);

return statearr_18144;
})();
if(cljs.core.truth_(inst_18120)){
var statearr_18145_18168 = state_18140__$1;
(statearr_18145_18168[(1)] = (5));

} else {
var statearr_18146_18169 = state_18140__$1;
(statearr_18146_18169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (13))){
var state_18140__$1 = state_18140;
var statearr_18147_18170 = state_18140__$1;
(statearr_18147_18170[(2)] = null);

(statearr_18147_18170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (6))){
var inst_18119 = (state_18140[(7)]);
var state_18140__$1 = state_18140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18140__$1,(11),to,inst_18119);
} else {
if((state_val_18141 === (3))){
var inst_18138 = (state_18140[(2)]);
var state_18140__$1 = state_18140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18140__$1,inst_18138);
} else {
if((state_val_18141 === (12))){
var state_18140__$1 = state_18140;
var statearr_18148_18171 = state_18140__$1;
(statearr_18148_18171[(2)] = null);

(statearr_18148_18171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (2))){
var state_18140__$1 = state_18140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18140__$1,(4),from);
} else {
if((state_val_18141 === (11))){
var inst_18129 = (state_18140[(2)]);
var state_18140__$1 = state_18140;
if(cljs.core.truth_(inst_18129)){
var statearr_18149_18172 = state_18140__$1;
(statearr_18149_18172[(1)] = (12));

} else {
var statearr_18150_18173 = state_18140__$1;
(statearr_18150_18173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (9))){
var state_18140__$1 = state_18140;
var statearr_18151_18174 = state_18140__$1;
(statearr_18151_18174[(2)] = null);

(statearr_18151_18174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (5))){
var state_18140__$1 = state_18140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18152_18175 = state_18140__$1;
(statearr_18152_18175[(1)] = (8));

} else {
var statearr_18153_18176 = state_18140__$1;
(statearr_18153_18176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (14))){
var inst_18134 = (state_18140[(2)]);
var state_18140__$1 = state_18140;
var statearr_18154_18177 = state_18140__$1;
(statearr_18154_18177[(2)] = inst_18134);

(statearr_18154_18177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (10))){
var inst_18126 = (state_18140[(2)]);
var state_18140__$1 = state_18140;
var statearr_18155_18178 = state_18140__$1;
(statearr_18155_18178[(2)] = inst_18126);

(statearr_18155_18178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (8))){
var inst_18123 = cljs.core.async.close_BANG_.call(null,to);
var state_18140__$1 = state_18140;
var statearr_18156_18179 = state_18140__$1;
(statearr_18156_18179[(2)] = inst_18123);

(statearr_18156_18179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto___18165))
;
return ((function (switch__6639__auto__,c__6701__auto___18165){
return (function() {
var cljs$core$async$state_machine__6640__auto__ = null;
var cljs$core$async$state_machine__6640__auto____0 = (function (){
var statearr_18160 = [null,null,null,null,null,null,null,null];
(statearr_18160[(0)] = cljs$core$async$state_machine__6640__auto__);

(statearr_18160[(1)] = (1));

return statearr_18160;
});
var cljs$core$async$state_machine__6640__auto____1 = (function (state_18140){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_18140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e18161){if((e18161 instanceof Object)){
var ex__6643__auto__ = e18161;
var statearr_18162_18180 = state_18140;
(statearr_18162_18180[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18181 = state_18140;
state_18140 = G__18181;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$state_machine__6640__auto__ = function(state_18140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6640__auto____1.call(this,state_18140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6640__auto____0;
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6640__auto____1;
return cljs$core$async$state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___18165))
})();
var state__6703__auto__ = (function (){var statearr_18163 = f__6702__auto__.call(null);
(statearr_18163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___18165);

return statearr_18163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___18165))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18365){
var vec__18366 = p__18365;
var v = cljs.core.nth.call(null,vec__18366,(0),null);
var p = cljs.core.nth.call(null,vec__18366,(1),null);
var job = vec__18366;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6701__auto___18548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___18548,res,vec__18366,v,p,job,jobs,results){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___18548,res,vec__18366,v,p,job,jobs,results){
return (function (state_18371){
var state_val_18372 = (state_18371[(1)]);
if((state_val_18372 === (1))){
var state_18371__$1 = state_18371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18371__$1,(2),res,v);
} else {
if((state_val_18372 === (2))){
var inst_18368 = (state_18371[(2)]);
var inst_18369 = cljs.core.async.close_BANG_.call(null,res);
var state_18371__$1 = (function (){var statearr_18373 = state_18371;
(statearr_18373[(7)] = inst_18368);

return statearr_18373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18371__$1,inst_18369);
} else {
return null;
}
}
});})(c__6701__auto___18548,res,vec__18366,v,p,job,jobs,results))
;
return ((function (switch__6639__auto__,c__6701__auto___18548,res,vec__18366,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0 = (function (){
var statearr_18377 = [null,null,null,null,null,null,null,null];
(statearr_18377[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__);

(statearr_18377[(1)] = (1));

return statearr_18377;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1 = (function (state_18371){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_18371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e18378){if((e18378 instanceof Object)){
var ex__6643__auto__ = e18378;
var statearr_18379_18549 = state_18371;
(statearr_18379_18549[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18550 = state_18371;
state_18371 = G__18550;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__ = function(state_18371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1.call(this,state_18371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___18548,res,vec__18366,v,p,job,jobs,results))
})();
var state__6703__auto__ = (function (){var statearr_18380 = f__6702__auto__.call(null);
(statearr_18380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___18548);

return statearr_18380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___18548,res,vec__18366,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18381){
var vec__18382 = p__18381;
var v = cljs.core.nth.call(null,vec__18382,(0),null);
var p = cljs.core.nth.call(null,vec__18382,(1),null);
var job = vec__18382;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5095__auto___18551 = n;
var __18552 = (0);
while(true){
if((__18552 < n__5095__auto___18551)){
var G__18383_18553 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18383_18553) {
case "compute":
var c__6701__auto___18555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18552,c__6701__auto___18555,G__18383_18553,n__5095__auto___18551,jobs,results,process,async){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (__18552,c__6701__auto___18555,G__18383_18553,n__5095__auto___18551,jobs,results,process,async){
return (function (state_18396){
var state_val_18397 = (state_18396[(1)]);
if((state_val_18397 === (1))){
var state_18396__$1 = state_18396;
var statearr_18398_18556 = state_18396__$1;
(statearr_18398_18556[(2)] = null);

(statearr_18398_18556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (2))){
var state_18396__$1 = state_18396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18396__$1,(4),jobs);
} else {
if((state_val_18397 === (3))){
var inst_18394 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18396__$1,inst_18394);
} else {
if((state_val_18397 === (4))){
var inst_18386 = (state_18396[(2)]);
var inst_18387 = process.call(null,inst_18386);
var state_18396__$1 = state_18396;
if(cljs.core.truth_(inst_18387)){
var statearr_18399_18557 = state_18396__$1;
(statearr_18399_18557[(1)] = (5));

} else {
var statearr_18400_18558 = state_18396__$1;
(statearr_18400_18558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (5))){
var state_18396__$1 = state_18396;
var statearr_18401_18559 = state_18396__$1;
(statearr_18401_18559[(2)] = null);

(statearr_18401_18559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (6))){
var state_18396__$1 = state_18396;
var statearr_18402_18560 = state_18396__$1;
(statearr_18402_18560[(2)] = null);

(statearr_18402_18560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (7))){
var inst_18392 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
var statearr_18403_18561 = state_18396__$1;
(statearr_18403_18561[(2)] = inst_18392);

(statearr_18403_18561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18552,c__6701__auto___18555,G__18383_18553,n__5095__auto___18551,jobs,results,process,async))
;
return ((function (__18552,switch__6639__auto__,c__6701__auto___18555,G__18383_18553,n__5095__auto___18551,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0 = (function (){
var statearr_18407 = [null,null,null,null,null,null,null];
(statearr_18407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__);

(statearr_18407[(1)] = (1));

return statearr_18407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1 = (function (state_18396){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_18396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e18408){if((e18408 instanceof Object)){
var ex__6643__auto__ = e18408;
var statearr_18409_18562 = state_18396;
(statearr_18409_18562[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18563 = state_18396;
state_18396 = G__18563;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__ = function(state_18396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1.call(this,state_18396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__;
})()
;})(__18552,switch__6639__auto__,c__6701__auto___18555,G__18383_18553,n__5095__auto___18551,jobs,results,process,async))
})();
var state__6703__auto__ = (function (){var statearr_18410 = f__6702__auto__.call(null);
(statearr_18410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___18555);

return statearr_18410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(__18552,c__6701__auto___18555,G__18383_18553,n__5095__auto___18551,jobs,results,process,async))
);


break;
case "async":
var c__6701__auto___18564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18552,c__6701__auto___18564,G__18383_18553,n__5095__auto___18551,jobs,results,process,async){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (__18552,c__6701__auto___18564,G__18383_18553,n__5095__auto___18551,jobs,results,process,async){
return (function (state_18423){
var state_val_18424 = (state_18423[(1)]);
if((state_val_18424 === (1))){
var state_18423__$1 = state_18423;
var statearr_18425_18565 = state_18423__$1;
(statearr_18425_18565[(2)] = null);

(statearr_18425_18565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (2))){
var state_18423__$1 = state_18423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18423__$1,(4),jobs);
} else {
if((state_val_18424 === (3))){
var inst_18421 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18423__$1,inst_18421);
} else {
if((state_val_18424 === (4))){
var inst_18413 = (state_18423[(2)]);
var inst_18414 = async.call(null,inst_18413);
var state_18423__$1 = state_18423;
if(cljs.core.truth_(inst_18414)){
var statearr_18426_18566 = state_18423__$1;
(statearr_18426_18566[(1)] = (5));

} else {
var statearr_18427_18567 = state_18423__$1;
(statearr_18427_18567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (5))){
var state_18423__$1 = state_18423;
var statearr_18428_18568 = state_18423__$1;
(statearr_18428_18568[(2)] = null);

(statearr_18428_18568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (6))){
var state_18423__$1 = state_18423;
var statearr_18429_18569 = state_18423__$1;
(statearr_18429_18569[(2)] = null);

(statearr_18429_18569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (7))){
var inst_18419 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
var statearr_18430_18570 = state_18423__$1;
(statearr_18430_18570[(2)] = inst_18419);

(statearr_18430_18570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18552,c__6701__auto___18564,G__18383_18553,n__5095__auto___18551,jobs,results,process,async))
;
return ((function (__18552,switch__6639__auto__,c__6701__auto___18564,G__18383_18553,n__5095__auto___18551,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0 = (function (){
var statearr_18434 = [null,null,null,null,null,null,null];
(statearr_18434[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__);

(statearr_18434[(1)] = (1));

return statearr_18434;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1 = (function (state_18423){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_18423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e18435){if((e18435 instanceof Object)){
var ex__6643__auto__ = e18435;
var statearr_18436_18571 = state_18423;
(statearr_18436_18571[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18572 = state_18423;
state_18423 = G__18572;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__ = function(state_18423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1.call(this,state_18423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__;
})()
;})(__18552,switch__6639__auto__,c__6701__auto___18564,G__18383_18553,n__5095__auto___18551,jobs,results,process,async))
})();
var state__6703__auto__ = (function (){var statearr_18437 = f__6702__auto__.call(null);
(statearr_18437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___18564);

return statearr_18437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(__18552,c__6701__auto___18564,G__18383_18553,n__5095__auto___18551,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18573 = (__18552 + (1));
__18552 = G__18573;
continue;
} else {
}
break;
}

var c__6701__auto___18574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___18574,jobs,results,process,async){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___18574,jobs,results,process,async){
return (function (state_18459){
var state_val_18460 = (state_18459[(1)]);
if((state_val_18460 === (1))){
var state_18459__$1 = state_18459;
var statearr_18461_18575 = state_18459__$1;
(statearr_18461_18575[(2)] = null);

(statearr_18461_18575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (2))){
var state_18459__$1 = state_18459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18459__$1,(4),from);
} else {
if((state_val_18460 === (3))){
var inst_18457 = (state_18459[(2)]);
var state_18459__$1 = state_18459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18459__$1,inst_18457);
} else {
if((state_val_18460 === (4))){
var inst_18440 = (state_18459[(7)]);
var inst_18440__$1 = (state_18459[(2)]);
var inst_18441 = (inst_18440__$1 == null);
var state_18459__$1 = (function (){var statearr_18462 = state_18459;
(statearr_18462[(7)] = inst_18440__$1);

return statearr_18462;
})();
if(cljs.core.truth_(inst_18441)){
var statearr_18463_18576 = state_18459__$1;
(statearr_18463_18576[(1)] = (5));

} else {
var statearr_18464_18577 = state_18459__$1;
(statearr_18464_18577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (5))){
var inst_18443 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18459__$1 = state_18459;
var statearr_18465_18578 = state_18459__$1;
(statearr_18465_18578[(2)] = inst_18443);

(statearr_18465_18578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (6))){
var inst_18445 = (state_18459[(8)]);
var inst_18440 = (state_18459[(7)]);
var inst_18445__$1 = cljs.core.async.chan.call(null,(1));
var inst_18446 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18447 = [inst_18440,inst_18445__$1];
var inst_18448 = (new cljs.core.PersistentVector(null,2,(5),inst_18446,inst_18447,null));
var state_18459__$1 = (function (){var statearr_18466 = state_18459;
(statearr_18466[(8)] = inst_18445__$1);

return statearr_18466;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18459__$1,(8),jobs,inst_18448);
} else {
if((state_val_18460 === (7))){
var inst_18455 = (state_18459[(2)]);
var state_18459__$1 = state_18459;
var statearr_18467_18579 = state_18459__$1;
(statearr_18467_18579[(2)] = inst_18455);

(statearr_18467_18579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (8))){
var inst_18445 = (state_18459[(8)]);
var inst_18450 = (state_18459[(2)]);
var state_18459__$1 = (function (){var statearr_18468 = state_18459;
(statearr_18468[(9)] = inst_18450);

return statearr_18468;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18459__$1,(9),results,inst_18445);
} else {
if((state_val_18460 === (9))){
var inst_18452 = (state_18459[(2)]);
var state_18459__$1 = (function (){var statearr_18469 = state_18459;
(statearr_18469[(10)] = inst_18452);

return statearr_18469;
})();
var statearr_18470_18580 = state_18459__$1;
(statearr_18470_18580[(2)] = null);

(statearr_18470_18580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6701__auto___18574,jobs,results,process,async))
;
return ((function (switch__6639__auto__,c__6701__auto___18574,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0 = (function (){
var statearr_18474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18474[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__);

(statearr_18474[(1)] = (1));

return statearr_18474;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1 = (function (state_18459){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_18459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e18475){if((e18475 instanceof Object)){
var ex__6643__auto__ = e18475;
var statearr_18476_18581 = state_18459;
(statearr_18476_18581[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18582 = state_18459;
state_18459 = G__18582;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__ = function(state_18459){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1.call(this,state_18459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___18574,jobs,results,process,async))
})();
var state__6703__auto__ = (function (){var statearr_18477 = f__6702__auto__.call(null);
(statearr_18477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___18574);

return statearr_18477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___18574,jobs,results,process,async))
);


var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__,jobs,results,process,async){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__,jobs,results,process,async){
return (function (state_18515){
var state_val_18516 = (state_18515[(1)]);
if((state_val_18516 === (7))){
var inst_18511 = (state_18515[(2)]);
var state_18515__$1 = state_18515;
var statearr_18517_18583 = state_18515__$1;
(statearr_18517_18583[(2)] = inst_18511);

(statearr_18517_18583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (20))){
var state_18515__$1 = state_18515;
var statearr_18518_18584 = state_18515__$1;
(statearr_18518_18584[(2)] = null);

(statearr_18518_18584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (1))){
var state_18515__$1 = state_18515;
var statearr_18519_18585 = state_18515__$1;
(statearr_18519_18585[(2)] = null);

(statearr_18519_18585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (4))){
var inst_18480 = (state_18515[(7)]);
var inst_18480__$1 = (state_18515[(2)]);
var inst_18481 = (inst_18480__$1 == null);
var state_18515__$1 = (function (){var statearr_18520 = state_18515;
(statearr_18520[(7)] = inst_18480__$1);

return statearr_18520;
})();
if(cljs.core.truth_(inst_18481)){
var statearr_18521_18586 = state_18515__$1;
(statearr_18521_18586[(1)] = (5));

} else {
var statearr_18522_18587 = state_18515__$1;
(statearr_18522_18587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (15))){
var inst_18493 = (state_18515[(8)]);
var state_18515__$1 = state_18515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18515__$1,(18),to,inst_18493);
} else {
if((state_val_18516 === (21))){
var inst_18506 = (state_18515[(2)]);
var state_18515__$1 = state_18515;
var statearr_18523_18588 = state_18515__$1;
(statearr_18523_18588[(2)] = inst_18506);

(statearr_18523_18588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (13))){
var inst_18508 = (state_18515[(2)]);
var state_18515__$1 = (function (){var statearr_18524 = state_18515;
(statearr_18524[(9)] = inst_18508);

return statearr_18524;
})();
var statearr_18525_18589 = state_18515__$1;
(statearr_18525_18589[(2)] = null);

(statearr_18525_18589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (6))){
var inst_18480 = (state_18515[(7)]);
var state_18515__$1 = state_18515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18515__$1,(11),inst_18480);
} else {
if((state_val_18516 === (17))){
var inst_18501 = (state_18515[(2)]);
var state_18515__$1 = state_18515;
if(cljs.core.truth_(inst_18501)){
var statearr_18526_18590 = state_18515__$1;
(statearr_18526_18590[(1)] = (19));

} else {
var statearr_18527_18591 = state_18515__$1;
(statearr_18527_18591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (3))){
var inst_18513 = (state_18515[(2)]);
var state_18515__$1 = state_18515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18515__$1,inst_18513);
} else {
if((state_val_18516 === (12))){
var inst_18490 = (state_18515[(10)]);
var state_18515__$1 = state_18515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18515__$1,(14),inst_18490);
} else {
if((state_val_18516 === (2))){
var state_18515__$1 = state_18515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18515__$1,(4),results);
} else {
if((state_val_18516 === (19))){
var state_18515__$1 = state_18515;
var statearr_18528_18592 = state_18515__$1;
(statearr_18528_18592[(2)] = null);

(statearr_18528_18592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (11))){
var inst_18490 = (state_18515[(2)]);
var state_18515__$1 = (function (){var statearr_18529 = state_18515;
(statearr_18529[(10)] = inst_18490);

return statearr_18529;
})();
var statearr_18530_18593 = state_18515__$1;
(statearr_18530_18593[(2)] = null);

(statearr_18530_18593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (9))){
var state_18515__$1 = state_18515;
var statearr_18531_18594 = state_18515__$1;
(statearr_18531_18594[(2)] = null);

(statearr_18531_18594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (5))){
var state_18515__$1 = state_18515;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18532_18595 = state_18515__$1;
(statearr_18532_18595[(1)] = (8));

} else {
var statearr_18533_18596 = state_18515__$1;
(statearr_18533_18596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (14))){
var inst_18493 = (state_18515[(8)]);
var inst_18495 = (state_18515[(11)]);
var inst_18493__$1 = (state_18515[(2)]);
var inst_18494 = (inst_18493__$1 == null);
var inst_18495__$1 = cljs.core.not.call(null,inst_18494);
var state_18515__$1 = (function (){var statearr_18534 = state_18515;
(statearr_18534[(8)] = inst_18493__$1);

(statearr_18534[(11)] = inst_18495__$1);

return statearr_18534;
})();
if(inst_18495__$1){
var statearr_18535_18597 = state_18515__$1;
(statearr_18535_18597[(1)] = (15));

} else {
var statearr_18536_18598 = state_18515__$1;
(statearr_18536_18598[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (16))){
var inst_18495 = (state_18515[(11)]);
var state_18515__$1 = state_18515;
var statearr_18537_18599 = state_18515__$1;
(statearr_18537_18599[(2)] = inst_18495);

(statearr_18537_18599[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (10))){
var inst_18487 = (state_18515[(2)]);
var state_18515__$1 = state_18515;
var statearr_18538_18600 = state_18515__$1;
(statearr_18538_18600[(2)] = inst_18487);

(statearr_18538_18600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (18))){
var inst_18498 = (state_18515[(2)]);
var state_18515__$1 = state_18515;
var statearr_18539_18601 = state_18515__$1;
(statearr_18539_18601[(2)] = inst_18498);

(statearr_18539_18601[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (8))){
var inst_18484 = cljs.core.async.close_BANG_.call(null,to);
var state_18515__$1 = state_18515;
var statearr_18540_18602 = state_18515__$1;
(statearr_18540_18602[(2)] = inst_18484);

(statearr_18540_18602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto__,jobs,results,process,async))
;
return ((function (switch__6639__auto__,c__6701__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0 = (function (){
var statearr_18544 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18544[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__);

(statearr_18544[(1)] = (1));

return statearr_18544;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1 = (function (state_18515){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_18515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e18545){if((e18545 instanceof Object)){
var ex__6643__auto__ = e18545;
var statearr_18546_18603 = state_18515;
(statearr_18546_18603[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18604 = state_18515;
state_18515 = G__18604;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__ = function(state_18515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1.call(this,state_18515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__,jobs,results,process,async))
})();
var state__6703__auto__ = (function (){var statearr_18547 = f__6702__auto__.call(null);
(statearr_18547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_18547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__,jobs,results,process,async))
);

return c__6701__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__18606 = arguments.length;
switch (G__18606) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__18609 = arguments.length;
switch (G__18609) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
cljs.core.async.split = (function cljs$core$async$split(){
var G__18612 = arguments.length;
switch (G__18612) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6701__auto___18664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___18664,tc,fc){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___18664,tc,fc){
return (function (state_18638){
var state_val_18639 = (state_18638[(1)]);
if((state_val_18639 === (7))){
var inst_18634 = (state_18638[(2)]);
var state_18638__$1 = state_18638;
var statearr_18640_18665 = state_18638__$1;
(statearr_18640_18665[(2)] = inst_18634);

(statearr_18640_18665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18639 === (1))){
var state_18638__$1 = state_18638;
var statearr_18641_18666 = state_18638__$1;
(statearr_18641_18666[(2)] = null);

(statearr_18641_18666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18639 === (4))){
var inst_18615 = (state_18638[(7)]);
var inst_18615__$1 = (state_18638[(2)]);
var inst_18616 = (inst_18615__$1 == null);
var state_18638__$1 = (function (){var statearr_18642 = state_18638;
(statearr_18642[(7)] = inst_18615__$1);

return statearr_18642;
})();
if(cljs.core.truth_(inst_18616)){
var statearr_18643_18667 = state_18638__$1;
(statearr_18643_18667[(1)] = (5));

} else {
var statearr_18644_18668 = state_18638__$1;
(statearr_18644_18668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18639 === (13))){
var state_18638__$1 = state_18638;
var statearr_18645_18669 = state_18638__$1;
(statearr_18645_18669[(2)] = null);

(statearr_18645_18669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18639 === (6))){
var inst_18615 = (state_18638[(7)]);
var inst_18621 = p.call(null,inst_18615);
var state_18638__$1 = state_18638;
if(cljs.core.truth_(inst_18621)){
var statearr_18646_18670 = state_18638__$1;
(statearr_18646_18670[(1)] = (9));

} else {
var statearr_18647_18671 = state_18638__$1;
(statearr_18647_18671[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18639 === (3))){
var inst_18636 = (state_18638[(2)]);
var state_18638__$1 = state_18638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18638__$1,inst_18636);
} else {
if((state_val_18639 === (12))){
var state_18638__$1 = state_18638;
var statearr_18648_18672 = state_18638__$1;
(statearr_18648_18672[(2)] = null);

(statearr_18648_18672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18639 === (2))){
var state_18638__$1 = state_18638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18638__$1,(4),ch);
} else {
if((state_val_18639 === (11))){
var inst_18615 = (state_18638[(7)]);
var inst_18625 = (state_18638[(2)]);
var state_18638__$1 = state_18638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18638__$1,(8),inst_18625,inst_18615);
} else {
if((state_val_18639 === (9))){
var state_18638__$1 = state_18638;
var statearr_18649_18673 = state_18638__$1;
(statearr_18649_18673[(2)] = tc);

(statearr_18649_18673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18639 === (5))){
var inst_18618 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18619 = cljs.core.async.close_BANG_.call(null,fc);
var state_18638__$1 = (function (){var statearr_18650 = state_18638;
(statearr_18650[(8)] = inst_18618);

return statearr_18650;
})();
var statearr_18651_18674 = state_18638__$1;
(statearr_18651_18674[(2)] = inst_18619);

(statearr_18651_18674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18639 === (14))){
var inst_18632 = (state_18638[(2)]);
var state_18638__$1 = state_18638;
var statearr_18652_18675 = state_18638__$1;
(statearr_18652_18675[(2)] = inst_18632);

(statearr_18652_18675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18639 === (10))){
var state_18638__$1 = state_18638;
var statearr_18653_18676 = state_18638__$1;
(statearr_18653_18676[(2)] = fc);

(statearr_18653_18676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18639 === (8))){
var inst_18627 = (state_18638[(2)]);
var state_18638__$1 = state_18638;
if(cljs.core.truth_(inst_18627)){
var statearr_18654_18677 = state_18638__$1;
(statearr_18654_18677[(1)] = (12));

} else {
var statearr_18655_18678 = state_18638__$1;
(statearr_18655_18678[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto___18664,tc,fc))
;
return ((function (switch__6639__auto__,c__6701__auto___18664,tc,fc){
return (function() {
var cljs$core$async$state_machine__6640__auto__ = null;
var cljs$core$async$state_machine__6640__auto____0 = (function (){
var statearr_18659 = [null,null,null,null,null,null,null,null,null];
(statearr_18659[(0)] = cljs$core$async$state_machine__6640__auto__);

(statearr_18659[(1)] = (1));

return statearr_18659;
});
var cljs$core$async$state_machine__6640__auto____1 = (function (state_18638){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_18638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e18660){if((e18660 instanceof Object)){
var ex__6643__auto__ = e18660;
var statearr_18661_18679 = state_18638;
(statearr_18661_18679[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18680 = state_18638;
state_18638 = G__18680;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$state_machine__6640__auto__ = function(state_18638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6640__auto____1.call(this,state_18638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6640__auto____0;
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6640__auto____1;
return cljs$core$async$state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___18664,tc,fc))
})();
var state__6703__auto__ = (function (){var statearr_18662 = f__6702__auto__.call(null);
(statearr_18662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___18664);

return statearr_18662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___18664,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__){
return (function (state_18727){
var state_val_18728 = (state_18727[(1)]);
if((state_val_18728 === (1))){
var inst_18713 = init;
var state_18727__$1 = (function (){var statearr_18729 = state_18727;
(statearr_18729[(7)] = inst_18713);

return statearr_18729;
})();
var statearr_18730_18745 = state_18727__$1;
(statearr_18730_18745[(2)] = null);

(statearr_18730_18745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18728 === (2))){
var state_18727__$1 = state_18727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18727__$1,(4),ch);
} else {
if((state_val_18728 === (3))){
var inst_18725 = (state_18727[(2)]);
var state_18727__$1 = state_18727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18727__$1,inst_18725);
} else {
if((state_val_18728 === (4))){
var inst_18716 = (state_18727[(8)]);
var inst_18716__$1 = (state_18727[(2)]);
var inst_18717 = (inst_18716__$1 == null);
var state_18727__$1 = (function (){var statearr_18731 = state_18727;
(statearr_18731[(8)] = inst_18716__$1);

return statearr_18731;
})();
if(cljs.core.truth_(inst_18717)){
var statearr_18732_18746 = state_18727__$1;
(statearr_18732_18746[(1)] = (5));

} else {
var statearr_18733_18747 = state_18727__$1;
(statearr_18733_18747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18728 === (5))){
var inst_18713 = (state_18727[(7)]);
var state_18727__$1 = state_18727;
var statearr_18734_18748 = state_18727__$1;
(statearr_18734_18748[(2)] = inst_18713);

(statearr_18734_18748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18728 === (6))){
var inst_18716 = (state_18727[(8)]);
var inst_18713 = (state_18727[(7)]);
var inst_18720 = f.call(null,inst_18713,inst_18716);
var inst_18713__$1 = inst_18720;
var state_18727__$1 = (function (){var statearr_18735 = state_18727;
(statearr_18735[(7)] = inst_18713__$1);

return statearr_18735;
})();
var statearr_18736_18749 = state_18727__$1;
(statearr_18736_18749[(2)] = null);

(statearr_18736_18749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18728 === (7))){
var inst_18723 = (state_18727[(2)]);
var state_18727__$1 = state_18727;
var statearr_18737_18750 = state_18727__$1;
(statearr_18737_18750[(2)] = inst_18723);

(statearr_18737_18750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6701__auto__))
;
return ((function (switch__6639__auto__,c__6701__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6640__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6640__auto____0 = (function (){
var statearr_18741 = [null,null,null,null,null,null,null,null,null];
(statearr_18741[(0)] = cljs$core$async$reduce_$_state_machine__6640__auto__);

(statearr_18741[(1)] = (1));

return statearr_18741;
});
var cljs$core$async$reduce_$_state_machine__6640__auto____1 = (function (state_18727){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_18727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e18742){if((e18742 instanceof Object)){
var ex__6643__auto__ = e18742;
var statearr_18743_18751 = state_18727;
(statearr_18743_18751[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18752 = state_18727;
state_18727 = G__18752;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6640__auto__ = function(state_18727){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6640__auto____1.call(this,state_18727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6640__auto____0;
cljs$core$async$reduce_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6640__auto____1;
return cljs$core$async$reduce_$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__))
})();
var state__6703__auto__ = (function (){var statearr_18744 = f__6702__auto__.call(null);
(statearr_18744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_18744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__))
);

return c__6701__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__18754 = arguments.length;
switch (G__18754) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__){
return (function (state_18779){
var state_val_18780 = (state_18779[(1)]);
if((state_val_18780 === (7))){
var inst_18761 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18781_18805 = state_18779__$1;
(statearr_18781_18805[(2)] = inst_18761);

(statearr_18781_18805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (1))){
var inst_18755 = cljs.core.seq.call(null,coll);
var inst_18756 = inst_18755;
var state_18779__$1 = (function (){var statearr_18782 = state_18779;
(statearr_18782[(7)] = inst_18756);

return statearr_18782;
})();
var statearr_18783_18806 = state_18779__$1;
(statearr_18783_18806[(2)] = null);

(statearr_18783_18806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (4))){
var inst_18756 = (state_18779[(7)]);
var inst_18759 = cljs.core.first.call(null,inst_18756);
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18779__$1,(7),ch,inst_18759);
} else {
if((state_val_18780 === (13))){
var inst_18773 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18784_18807 = state_18779__$1;
(statearr_18784_18807[(2)] = inst_18773);

(statearr_18784_18807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (6))){
var inst_18764 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
if(cljs.core.truth_(inst_18764)){
var statearr_18785_18808 = state_18779__$1;
(statearr_18785_18808[(1)] = (8));

} else {
var statearr_18786_18809 = state_18779__$1;
(statearr_18786_18809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (3))){
var inst_18777 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18779__$1,inst_18777);
} else {
if((state_val_18780 === (12))){
var state_18779__$1 = state_18779;
var statearr_18787_18810 = state_18779__$1;
(statearr_18787_18810[(2)] = null);

(statearr_18787_18810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (2))){
var inst_18756 = (state_18779[(7)]);
var state_18779__$1 = state_18779;
if(cljs.core.truth_(inst_18756)){
var statearr_18788_18811 = state_18779__$1;
(statearr_18788_18811[(1)] = (4));

} else {
var statearr_18789_18812 = state_18779__$1;
(statearr_18789_18812[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (11))){
var inst_18770 = cljs.core.async.close_BANG_.call(null,ch);
var state_18779__$1 = state_18779;
var statearr_18790_18813 = state_18779__$1;
(statearr_18790_18813[(2)] = inst_18770);

(statearr_18790_18813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (9))){
var state_18779__$1 = state_18779;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18791_18814 = state_18779__$1;
(statearr_18791_18814[(1)] = (11));

} else {
var statearr_18792_18815 = state_18779__$1;
(statearr_18792_18815[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (5))){
var inst_18756 = (state_18779[(7)]);
var state_18779__$1 = state_18779;
var statearr_18793_18816 = state_18779__$1;
(statearr_18793_18816[(2)] = inst_18756);

(statearr_18793_18816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (10))){
var inst_18775 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18794_18817 = state_18779__$1;
(statearr_18794_18817[(2)] = inst_18775);

(statearr_18794_18817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (8))){
var inst_18756 = (state_18779[(7)]);
var inst_18766 = cljs.core.next.call(null,inst_18756);
var inst_18756__$1 = inst_18766;
var state_18779__$1 = (function (){var statearr_18795 = state_18779;
(statearr_18795[(7)] = inst_18756__$1);

return statearr_18795;
})();
var statearr_18796_18818 = state_18779__$1;
(statearr_18796_18818[(2)] = null);

(statearr_18796_18818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto__))
;
return ((function (switch__6639__auto__,c__6701__auto__){
return (function() {
var cljs$core$async$state_machine__6640__auto__ = null;
var cljs$core$async$state_machine__6640__auto____0 = (function (){
var statearr_18800 = [null,null,null,null,null,null,null,null];
(statearr_18800[(0)] = cljs$core$async$state_machine__6640__auto__);

(statearr_18800[(1)] = (1));

return statearr_18800;
});
var cljs$core$async$state_machine__6640__auto____1 = (function (state_18779){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_18779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e18801){if((e18801 instanceof Object)){
var ex__6643__auto__ = e18801;
var statearr_18802_18819 = state_18779;
(statearr_18802_18819[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18820 = state_18779;
state_18779 = G__18820;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$state_machine__6640__auto__ = function(state_18779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6640__auto____1.call(this,state_18779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6640__auto____0;
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6640__auto____1;
return cljs$core$async$state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__))
})();
var state__6703__auto__ = (function (){var statearr_18803 = f__6702__auto__.call(null);
(statearr_18803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_18803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__))
);

return c__6701__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj18822 = {};
return obj18822;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4198__auto__ = _;
if(and__4198__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4846__auto__ = (((_ == null))?null:_);
return (function (){var or__4210__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18824 = {};
return obj18824;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t19046 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19046 = (function (mult,ch,cs,meta19047){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19047 = meta19047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19048,meta19047__$1){
var self__ = this;
var _19048__$1 = this;
return (new cljs.core.async.t19046(self__.mult,self__.ch,self__.cs,meta19047__$1));
});})(cs))
;

cljs.core.async.t19046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19048){
var self__ = this;
var _19048__$1 = this;
return self__.meta19047;
});})(cs))
;

cljs.core.async.t19046.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19046.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19046.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19046.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19046.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t19046.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19047","meta19047",-1444594376,null)], null);
});})(cs))
;

cljs.core.async.t19046.cljs$lang$type = true;

cljs.core.async.t19046.cljs$lang$ctorStr = "cljs.core.async/t19046";

cljs.core.async.t19046.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write.call(null,writer__4790__auto__,"cljs.core.async/t19046");
});})(cs))
;

cljs.core.async.__GT_t19046 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t19046(mult__$1,ch__$1,cs__$1,meta19047){
return (new cljs.core.async.t19046(mult__$1,ch__$1,cs__$1,meta19047));
});})(cs))
;

}

return (new cljs.core.async.t19046(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6701__auto___19267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___19267,cs,m,dchan,dctr,done){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___19267,cs,m,dchan,dctr,done){
return (function (state_19179){
var state_val_19180 = (state_19179[(1)]);
if((state_val_19180 === (7))){
var inst_19175 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19181_19268 = state_19179__$1;
(statearr_19181_19268[(2)] = inst_19175);

(statearr_19181_19268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (20))){
var inst_19080 = (state_19179[(7)]);
var inst_19090 = cljs.core.first.call(null,inst_19080);
var inst_19091 = cljs.core.nth.call(null,inst_19090,(0),null);
var inst_19092 = cljs.core.nth.call(null,inst_19090,(1),null);
var state_19179__$1 = (function (){var statearr_19182 = state_19179;
(statearr_19182[(8)] = inst_19091);

return statearr_19182;
})();
if(cljs.core.truth_(inst_19092)){
var statearr_19183_19269 = state_19179__$1;
(statearr_19183_19269[(1)] = (22));

} else {
var statearr_19184_19270 = state_19179__$1;
(statearr_19184_19270[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (27))){
var inst_19120 = (state_19179[(9)]);
var inst_19051 = (state_19179[(10)]);
var inst_19122 = (state_19179[(11)]);
var inst_19127 = (state_19179[(12)]);
var inst_19127__$1 = cljs.core._nth.call(null,inst_19120,inst_19122);
var inst_19128 = cljs.core.async.put_BANG_.call(null,inst_19127__$1,inst_19051,done);
var state_19179__$1 = (function (){var statearr_19185 = state_19179;
(statearr_19185[(12)] = inst_19127__$1);

return statearr_19185;
})();
if(cljs.core.truth_(inst_19128)){
var statearr_19186_19271 = state_19179__$1;
(statearr_19186_19271[(1)] = (30));

} else {
var statearr_19187_19272 = state_19179__$1;
(statearr_19187_19272[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (1))){
var state_19179__$1 = state_19179;
var statearr_19188_19273 = state_19179__$1;
(statearr_19188_19273[(2)] = null);

(statearr_19188_19273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (24))){
var inst_19080 = (state_19179[(7)]);
var inst_19097 = (state_19179[(2)]);
var inst_19098 = cljs.core.next.call(null,inst_19080);
var inst_19060 = inst_19098;
var inst_19061 = null;
var inst_19062 = (0);
var inst_19063 = (0);
var state_19179__$1 = (function (){var statearr_19189 = state_19179;
(statearr_19189[(13)] = inst_19097);

(statearr_19189[(14)] = inst_19063);

(statearr_19189[(15)] = inst_19060);

(statearr_19189[(16)] = inst_19061);

(statearr_19189[(17)] = inst_19062);

return statearr_19189;
})();
var statearr_19190_19274 = state_19179__$1;
(statearr_19190_19274[(2)] = null);

(statearr_19190_19274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (39))){
var state_19179__$1 = state_19179;
var statearr_19194_19275 = state_19179__$1;
(statearr_19194_19275[(2)] = null);

(statearr_19194_19275[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (4))){
var inst_19051 = (state_19179[(10)]);
var inst_19051__$1 = (state_19179[(2)]);
var inst_19052 = (inst_19051__$1 == null);
var state_19179__$1 = (function (){var statearr_19195 = state_19179;
(statearr_19195[(10)] = inst_19051__$1);

return statearr_19195;
})();
if(cljs.core.truth_(inst_19052)){
var statearr_19196_19276 = state_19179__$1;
(statearr_19196_19276[(1)] = (5));

} else {
var statearr_19197_19277 = state_19179__$1;
(statearr_19197_19277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (15))){
var inst_19063 = (state_19179[(14)]);
var inst_19060 = (state_19179[(15)]);
var inst_19061 = (state_19179[(16)]);
var inst_19062 = (state_19179[(17)]);
var inst_19076 = (state_19179[(2)]);
var inst_19077 = (inst_19063 + (1));
var tmp19191 = inst_19060;
var tmp19192 = inst_19061;
var tmp19193 = inst_19062;
var inst_19060__$1 = tmp19191;
var inst_19061__$1 = tmp19192;
var inst_19062__$1 = tmp19193;
var inst_19063__$1 = inst_19077;
var state_19179__$1 = (function (){var statearr_19198 = state_19179;
(statearr_19198[(14)] = inst_19063__$1);

(statearr_19198[(15)] = inst_19060__$1);

(statearr_19198[(16)] = inst_19061__$1);

(statearr_19198[(17)] = inst_19062__$1);

(statearr_19198[(18)] = inst_19076);

return statearr_19198;
})();
var statearr_19199_19278 = state_19179__$1;
(statearr_19199_19278[(2)] = null);

(statearr_19199_19278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (21))){
var inst_19101 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19203_19279 = state_19179__$1;
(statearr_19203_19279[(2)] = inst_19101);

(statearr_19203_19279[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (31))){
var inst_19127 = (state_19179[(12)]);
var inst_19131 = done.call(null,null);
var inst_19132 = cljs.core.async.untap_STAR_.call(null,m,inst_19127);
var state_19179__$1 = (function (){var statearr_19204 = state_19179;
(statearr_19204[(19)] = inst_19131);

return statearr_19204;
})();
var statearr_19205_19280 = state_19179__$1;
(statearr_19205_19280[(2)] = inst_19132);

(statearr_19205_19280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (32))){
var inst_19121 = (state_19179[(20)]);
var inst_19120 = (state_19179[(9)]);
var inst_19122 = (state_19179[(11)]);
var inst_19119 = (state_19179[(21)]);
var inst_19134 = (state_19179[(2)]);
var inst_19135 = (inst_19122 + (1));
var tmp19200 = inst_19121;
var tmp19201 = inst_19120;
var tmp19202 = inst_19119;
var inst_19119__$1 = tmp19202;
var inst_19120__$1 = tmp19201;
var inst_19121__$1 = tmp19200;
var inst_19122__$1 = inst_19135;
var state_19179__$1 = (function (){var statearr_19206 = state_19179;
(statearr_19206[(20)] = inst_19121__$1);

(statearr_19206[(9)] = inst_19120__$1);

(statearr_19206[(22)] = inst_19134);

(statearr_19206[(11)] = inst_19122__$1);

(statearr_19206[(21)] = inst_19119__$1);

return statearr_19206;
})();
var statearr_19207_19281 = state_19179__$1;
(statearr_19207_19281[(2)] = null);

(statearr_19207_19281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (40))){
var inst_19147 = (state_19179[(23)]);
var inst_19151 = done.call(null,null);
var inst_19152 = cljs.core.async.untap_STAR_.call(null,m,inst_19147);
var state_19179__$1 = (function (){var statearr_19208 = state_19179;
(statearr_19208[(24)] = inst_19151);

return statearr_19208;
})();
var statearr_19209_19282 = state_19179__$1;
(statearr_19209_19282[(2)] = inst_19152);

(statearr_19209_19282[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (33))){
var inst_19138 = (state_19179[(25)]);
var inst_19140 = cljs.core.chunked_seq_QMARK_.call(null,inst_19138);
var state_19179__$1 = state_19179;
if(inst_19140){
var statearr_19210_19283 = state_19179__$1;
(statearr_19210_19283[(1)] = (36));

} else {
var statearr_19211_19284 = state_19179__$1;
(statearr_19211_19284[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (13))){
var inst_19070 = (state_19179[(26)]);
var inst_19073 = cljs.core.async.close_BANG_.call(null,inst_19070);
var state_19179__$1 = state_19179;
var statearr_19212_19285 = state_19179__$1;
(statearr_19212_19285[(2)] = inst_19073);

(statearr_19212_19285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (22))){
var inst_19091 = (state_19179[(8)]);
var inst_19094 = cljs.core.async.close_BANG_.call(null,inst_19091);
var state_19179__$1 = state_19179;
var statearr_19213_19286 = state_19179__$1;
(statearr_19213_19286[(2)] = inst_19094);

(statearr_19213_19286[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (36))){
var inst_19138 = (state_19179[(25)]);
var inst_19142 = cljs.core.chunk_first.call(null,inst_19138);
var inst_19143 = cljs.core.chunk_rest.call(null,inst_19138);
var inst_19144 = cljs.core.count.call(null,inst_19142);
var inst_19119 = inst_19143;
var inst_19120 = inst_19142;
var inst_19121 = inst_19144;
var inst_19122 = (0);
var state_19179__$1 = (function (){var statearr_19214 = state_19179;
(statearr_19214[(20)] = inst_19121);

(statearr_19214[(9)] = inst_19120);

(statearr_19214[(11)] = inst_19122);

(statearr_19214[(21)] = inst_19119);

return statearr_19214;
})();
var statearr_19215_19287 = state_19179__$1;
(statearr_19215_19287[(2)] = null);

(statearr_19215_19287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (41))){
var inst_19138 = (state_19179[(25)]);
var inst_19154 = (state_19179[(2)]);
var inst_19155 = cljs.core.next.call(null,inst_19138);
var inst_19119 = inst_19155;
var inst_19120 = null;
var inst_19121 = (0);
var inst_19122 = (0);
var state_19179__$1 = (function (){var statearr_19216 = state_19179;
(statearr_19216[(20)] = inst_19121);

(statearr_19216[(9)] = inst_19120);

(statearr_19216[(27)] = inst_19154);

(statearr_19216[(11)] = inst_19122);

(statearr_19216[(21)] = inst_19119);

return statearr_19216;
})();
var statearr_19217_19288 = state_19179__$1;
(statearr_19217_19288[(2)] = null);

(statearr_19217_19288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (43))){
var state_19179__$1 = state_19179;
var statearr_19218_19289 = state_19179__$1;
(statearr_19218_19289[(2)] = null);

(statearr_19218_19289[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (29))){
var inst_19163 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19219_19290 = state_19179__$1;
(statearr_19219_19290[(2)] = inst_19163);

(statearr_19219_19290[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (44))){
var inst_19172 = (state_19179[(2)]);
var state_19179__$1 = (function (){var statearr_19220 = state_19179;
(statearr_19220[(28)] = inst_19172);

return statearr_19220;
})();
var statearr_19221_19291 = state_19179__$1;
(statearr_19221_19291[(2)] = null);

(statearr_19221_19291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (6))){
var inst_19111 = (state_19179[(29)]);
var inst_19110 = cljs.core.deref.call(null,cs);
var inst_19111__$1 = cljs.core.keys.call(null,inst_19110);
var inst_19112 = cljs.core.count.call(null,inst_19111__$1);
var inst_19113 = cljs.core.reset_BANG_.call(null,dctr,inst_19112);
var inst_19118 = cljs.core.seq.call(null,inst_19111__$1);
var inst_19119 = inst_19118;
var inst_19120 = null;
var inst_19121 = (0);
var inst_19122 = (0);
var state_19179__$1 = (function (){var statearr_19222 = state_19179;
(statearr_19222[(20)] = inst_19121);

(statearr_19222[(30)] = inst_19113);

(statearr_19222[(9)] = inst_19120);

(statearr_19222[(29)] = inst_19111__$1);

(statearr_19222[(11)] = inst_19122);

(statearr_19222[(21)] = inst_19119);

return statearr_19222;
})();
var statearr_19223_19292 = state_19179__$1;
(statearr_19223_19292[(2)] = null);

(statearr_19223_19292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (28))){
var inst_19138 = (state_19179[(25)]);
var inst_19119 = (state_19179[(21)]);
var inst_19138__$1 = cljs.core.seq.call(null,inst_19119);
var state_19179__$1 = (function (){var statearr_19224 = state_19179;
(statearr_19224[(25)] = inst_19138__$1);

return statearr_19224;
})();
if(inst_19138__$1){
var statearr_19225_19293 = state_19179__$1;
(statearr_19225_19293[(1)] = (33));

} else {
var statearr_19226_19294 = state_19179__$1;
(statearr_19226_19294[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (25))){
var inst_19121 = (state_19179[(20)]);
var inst_19122 = (state_19179[(11)]);
var inst_19124 = (inst_19122 < inst_19121);
var inst_19125 = inst_19124;
var state_19179__$1 = state_19179;
if(cljs.core.truth_(inst_19125)){
var statearr_19227_19295 = state_19179__$1;
(statearr_19227_19295[(1)] = (27));

} else {
var statearr_19228_19296 = state_19179__$1;
(statearr_19228_19296[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (34))){
var state_19179__$1 = state_19179;
var statearr_19229_19297 = state_19179__$1;
(statearr_19229_19297[(2)] = null);

(statearr_19229_19297[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (17))){
var state_19179__$1 = state_19179;
var statearr_19230_19298 = state_19179__$1;
(statearr_19230_19298[(2)] = null);

(statearr_19230_19298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (3))){
var inst_19177 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19179__$1,inst_19177);
} else {
if((state_val_19180 === (12))){
var inst_19106 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19231_19299 = state_19179__$1;
(statearr_19231_19299[(2)] = inst_19106);

(statearr_19231_19299[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (2))){
var state_19179__$1 = state_19179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19179__$1,(4),ch);
} else {
if((state_val_19180 === (23))){
var state_19179__$1 = state_19179;
var statearr_19232_19300 = state_19179__$1;
(statearr_19232_19300[(2)] = null);

(statearr_19232_19300[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (35))){
var inst_19161 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19233_19301 = state_19179__$1;
(statearr_19233_19301[(2)] = inst_19161);

(statearr_19233_19301[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (19))){
var inst_19080 = (state_19179[(7)]);
var inst_19084 = cljs.core.chunk_first.call(null,inst_19080);
var inst_19085 = cljs.core.chunk_rest.call(null,inst_19080);
var inst_19086 = cljs.core.count.call(null,inst_19084);
var inst_19060 = inst_19085;
var inst_19061 = inst_19084;
var inst_19062 = inst_19086;
var inst_19063 = (0);
var state_19179__$1 = (function (){var statearr_19234 = state_19179;
(statearr_19234[(14)] = inst_19063);

(statearr_19234[(15)] = inst_19060);

(statearr_19234[(16)] = inst_19061);

(statearr_19234[(17)] = inst_19062);

return statearr_19234;
})();
var statearr_19235_19302 = state_19179__$1;
(statearr_19235_19302[(2)] = null);

(statearr_19235_19302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (11))){
var inst_19080 = (state_19179[(7)]);
var inst_19060 = (state_19179[(15)]);
var inst_19080__$1 = cljs.core.seq.call(null,inst_19060);
var state_19179__$1 = (function (){var statearr_19236 = state_19179;
(statearr_19236[(7)] = inst_19080__$1);

return statearr_19236;
})();
if(inst_19080__$1){
var statearr_19237_19303 = state_19179__$1;
(statearr_19237_19303[(1)] = (16));

} else {
var statearr_19238_19304 = state_19179__$1;
(statearr_19238_19304[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (9))){
var inst_19108 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19239_19305 = state_19179__$1;
(statearr_19239_19305[(2)] = inst_19108);

(statearr_19239_19305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (5))){
var inst_19058 = cljs.core.deref.call(null,cs);
var inst_19059 = cljs.core.seq.call(null,inst_19058);
var inst_19060 = inst_19059;
var inst_19061 = null;
var inst_19062 = (0);
var inst_19063 = (0);
var state_19179__$1 = (function (){var statearr_19240 = state_19179;
(statearr_19240[(14)] = inst_19063);

(statearr_19240[(15)] = inst_19060);

(statearr_19240[(16)] = inst_19061);

(statearr_19240[(17)] = inst_19062);

return statearr_19240;
})();
var statearr_19241_19306 = state_19179__$1;
(statearr_19241_19306[(2)] = null);

(statearr_19241_19306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (14))){
var state_19179__$1 = state_19179;
var statearr_19242_19307 = state_19179__$1;
(statearr_19242_19307[(2)] = null);

(statearr_19242_19307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (45))){
var inst_19169 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19243_19308 = state_19179__$1;
(statearr_19243_19308[(2)] = inst_19169);

(statearr_19243_19308[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (26))){
var inst_19111 = (state_19179[(29)]);
var inst_19165 = (state_19179[(2)]);
var inst_19166 = cljs.core.seq.call(null,inst_19111);
var state_19179__$1 = (function (){var statearr_19244 = state_19179;
(statearr_19244[(31)] = inst_19165);

return statearr_19244;
})();
if(inst_19166){
var statearr_19245_19309 = state_19179__$1;
(statearr_19245_19309[(1)] = (42));

} else {
var statearr_19246_19310 = state_19179__$1;
(statearr_19246_19310[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (16))){
var inst_19080 = (state_19179[(7)]);
var inst_19082 = cljs.core.chunked_seq_QMARK_.call(null,inst_19080);
var state_19179__$1 = state_19179;
if(inst_19082){
var statearr_19247_19311 = state_19179__$1;
(statearr_19247_19311[(1)] = (19));

} else {
var statearr_19248_19312 = state_19179__$1;
(statearr_19248_19312[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (38))){
var inst_19158 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19249_19313 = state_19179__$1;
(statearr_19249_19313[(2)] = inst_19158);

(statearr_19249_19313[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (30))){
var state_19179__$1 = state_19179;
var statearr_19250_19314 = state_19179__$1;
(statearr_19250_19314[(2)] = null);

(statearr_19250_19314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (10))){
var inst_19063 = (state_19179[(14)]);
var inst_19061 = (state_19179[(16)]);
var inst_19069 = cljs.core._nth.call(null,inst_19061,inst_19063);
var inst_19070 = cljs.core.nth.call(null,inst_19069,(0),null);
var inst_19071 = cljs.core.nth.call(null,inst_19069,(1),null);
var state_19179__$1 = (function (){var statearr_19251 = state_19179;
(statearr_19251[(26)] = inst_19070);

return statearr_19251;
})();
if(cljs.core.truth_(inst_19071)){
var statearr_19252_19315 = state_19179__$1;
(statearr_19252_19315[(1)] = (13));

} else {
var statearr_19253_19316 = state_19179__$1;
(statearr_19253_19316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (18))){
var inst_19104 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19254_19317 = state_19179__$1;
(statearr_19254_19317[(2)] = inst_19104);

(statearr_19254_19317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (42))){
var state_19179__$1 = state_19179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19179__$1,(45),dchan);
} else {
if((state_val_19180 === (37))){
var inst_19138 = (state_19179[(25)]);
var inst_19051 = (state_19179[(10)]);
var inst_19147 = (state_19179[(23)]);
var inst_19147__$1 = cljs.core.first.call(null,inst_19138);
var inst_19148 = cljs.core.async.put_BANG_.call(null,inst_19147__$1,inst_19051,done);
var state_19179__$1 = (function (){var statearr_19255 = state_19179;
(statearr_19255[(23)] = inst_19147__$1);

return statearr_19255;
})();
if(cljs.core.truth_(inst_19148)){
var statearr_19256_19318 = state_19179__$1;
(statearr_19256_19318[(1)] = (39));

} else {
var statearr_19257_19319 = state_19179__$1;
(statearr_19257_19319[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (8))){
var inst_19063 = (state_19179[(14)]);
var inst_19062 = (state_19179[(17)]);
var inst_19065 = (inst_19063 < inst_19062);
var inst_19066 = inst_19065;
var state_19179__$1 = state_19179;
if(cljs.core.truth_(inst_19066)){
var statearr_19258_19320 = state_19179__$1;
(statearr_19258_19320[(1)] = (10));

} else {
var statearr_19259_19321 = state_19179__$1;
(statearr_19259_19321[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto___19267,cs,m,dchan,dctr,done))
;
return ((function (switch__6639__auto__,c__6701__auto___19267,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6640__auto__ = null;
var cljs$core$async$mult_$_state_machine__6640__auto____0 = (function (){
var statearr_19263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19263[(0)] = cljs$core$async$mult_$_state_machine__6640__auto__);

(statearr_19263[(1)] = (1));

return statearr_19263;
});
var cljs$core$async$mult_$_state_machine__6640__auto____1 = (function (state_19179){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_19179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e19264){if((e19264 instanceof Object)){
var ex__6643__auto__ = e19264;
var statearr_19265_19322 = state_19179;
(statearr_19265_19322[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19323 = state_19179;
state_19179 = G__19323;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6640__auto__ = function(state_19179){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6640__auto____1.call(this,state_19179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6640__auto____0;
cljs$core$async$mult_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6640__auto____1;
return cljs$core$async$mult_$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___19267,cs,m,dchan,dctr,done))
})();
var state__6703__auto__ = (function (){var statearr_19266 = f__6702__auto__.call(null);
(statearr_19266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___19267);

return statearr_19266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___19267,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__19325 = arguments.length;
switch (G__19325) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj19328 = {};
return obj19328;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5250__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5250__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19333){
var map__19334 = p__19333;
var map__19334__$1 = ((cljs.core.seq_QMARK_.call(null,map__19334))?cljs.core.apply.call(null,cljs.core.hash_map,map__19334):map__19334);
var opts = map__19334__$1;
var statearr_19335_19338 = state;
(statearr_19335_19338[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__19334,map__19334__$1,opts){
return (function (val){
var statearr_19336_19339 = state;
(statearr_19336_19339[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19334,map__19334__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_19337_19340 = state;
(statearr_19337_19340[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19329){
var G__19330 = cljs.core.first.call(null,seq19329);
var seq19329__$1 = cljs.core.next.call(null,seq19329);
var G__19331 = cljs.core.first.call(null,seq19329__$1);
var seq19329__$2 = cljs.core.next.call(null,seq19329__$1);
var G__19332 = cljs.core.first.call(null,seq19329__$2);
var seq19329__$3 = cljs.core.next.call(null,seq19329__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19330,G__19331,G__19332,seq19329__$3);
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
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t19460 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19460 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19461){
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
this.meta19461 = meta19461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19462,meta19461__$1){
var self__ = this;
var _19462__$1 = this;
return (new cljs.core.async.t19460(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19461__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19462){
var self__ = this;
var _19462__$1 = this;
return self__.meta19461;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19460.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19460.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19460.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19460.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19460.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19460.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19460.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19460.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19461","meta19461",1096473145,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19460.cljs$lang$type = true;

cljs.core.async.t19460.cljs$lang$ctorStr = "cljs.core.async/t19460";

cljs.core.async.t19460.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write.call(null,writer__4790__auto__,"cljs.core.async/t19460");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19460 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t19460(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19461){
return (new cljs.core.async.t19460(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19461));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19460(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6701__auto___19579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___19579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___19579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19532){
var state_val_19533 = (state_19532[(1)]);
if((state_val_19533 === (7))){
var inst_19476 = (state_19532[(7)]);
var inst_19481 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19476);
var state_19532__$1 = state_19532;
var statearr_19534_19580 = state_19532__$1;
(statearr_19534_19580[(2)] = inst_19481);

(statearr_19534_19580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (20))){
var inst_19491 = (state_19532[(8)]);
var state_19532__$1 = state_19532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19532__$1,(23),out,inst_19491);
} else {
if((state_val_19533 === (1))){
var inst_19466 = (state_19532[(9)]);
var inst_19466__$1 = calc_state.call(null);
var inst_19467 = cljs.core.seq_QMARK_.call(null,inst_19466__$1);
var state_19532__$1 = (function (){var statearr_19535 = state_19532;
(statearr_19535[(9)] = inst_19466__$1);

return statearr_19535;
})();
if(inst_19467){
var statearr_19536_19581 = state_19532__$1;
(statearr_19536_19581[(1)] = (2));

} else {
var statearr_19537_19582 = state_19532__$1;
(statearr_19537_19582[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (24))){
var inst_19484 = (state_19532[(10)]);
var inst_19476 = inst_19484;
var state_19532__$1 = (function (){var statearr_19538 = state_19532;
(statearr_19538[(7)] = inst_19476);

return statearr_19538;
})();
var statearr_19539_19583 = state_19532__$1;
(statearr_19539_19583[(2)] = null);

(statearr_19539_19583[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (4))){
var inst_19466 = (state_19532[(9)]);
var inst_19472 = (state_19532[(2)]);
var inst_19473 = cljs.core.get.call(null,inst_19472,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19474 = cljs.core.get.call(null,inst_19472,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19475 = cljs.core.get.call(null,inst_19472,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19476 = inst_19466;
var state_19532__$1 = (function (){var statearr_19540 = state_19532;
(statearr_19540[(7)] = inst_19476);

(statearr_19540[(11)] = inst_19473);

(statearr_19540[(12)] = inst_19474);

(statearr_19540[(13)] = inst_19475);

return statearr_19540;
})();
var statearr_19541_19584 = state_19532__$1;
(statearr_19541_19584[(2)] = null);

(statearr_19541_19584[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (15))){
var state_19532__$1 = state_19532;
var statearr_19542_19585 = state_19532__$1;
(statearr_19542_19585[(2)] = null);

(statearr_19542_19585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (21))){
var inst_19484 = (state_19532[(10)]);
var inst_19476 = inst_19484;
var state_19532__$1 = (function (){var statearr_19543 = state_19532;
(statearr_19543[(7)] = inst_19476);

return statearr_19543;
})();
var statearr_19544_19586 = state_19532__$1;
(statearr_19544_19586[(2)] = null);

(statearr_19544_19586[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (13))){
var inst_19528 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
var statearr_19545_19587 = state_19532__$1;
(statearr_19545_19587[(2)] = inst_19528);

(statearr_19545_19587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (22))){
var inst_19526 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
var statearr_19546_19588 = state_19532__$1;
(statearr_19546_19588[(2)] = inst_19526);

(statearr_19546_19588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (6))){
var inst_19530 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19532__$1,inst_19530);
} else {
if((state_val_19533 === (25))){
var state_19532__$1 = state_19532;
var statearr_19547_19589 = state_19532__$1;
(statearr_19547_19589[(2)] = null);

(statearr_19547_19589[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (17))){
var inst_19506 = (state_19532[(14)]);
var state_19532__$1 = state_19532;
var statearr_19548_19590 = state_19532__$1;
(statearr_19548_19590[(2)] = inst_19506);

(statearr_19548_19590[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (3))){
var inst_19466 = (state_19532[(9)]);
var state_19532__$1 = state_19532;
var statearr_19549_19591 = state_19532__$1;
(statearr_19549_19591[(2)] = inst_19466);

(statearr_19549_19591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (12))){
var inst_19485 = (state_19532[(15)]);
var inst_19492 = (state_19532[(16)]);
var inst_19506 = (state_19532[(14)]);
var inst_19506__$1 = inst_19485.call(null,inst_19492);
var state_19532__$1 = (function (){var statearr_19550 = state_19532;
(statearr_19550[(14)] = inst_19506__$1);

return statearr_19550;
})();
if(cljs.core.truth_(inst_19506__$1)){
var statearr_19551_19592 = state_19532__$1;
(statearr_19551_19592[(1)] = (17));

} else {
var statearr_19552_19593 = state_19532__$1;
(statearr_19552_19593[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (2))){
var inst_19466 = (state_19532[(9)]);
var inst_19469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19466);
var state_19532__$1 = state_19532;
var statearr_19553_19594 = state_19532__$1;
(statearr_19553_19594[(2)] = inst_19469);

(statearr_19553_19594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (23))){
var inst_19517 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
if(cljs.core.truth_(inst_19517)){
var statearr_19554_19595 = state_19532__$1;
(statearr_19554_19595[(1)] = (24));

} else {
var statearr_19555_19596 = state_19532__$1;
(statearr_19555_19596[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (19))){
var inst_19514 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
if(cljs.core.truth_(inst_19514)){
var statearr_19556_19597 = state_19532__$1;
(statearr_19556_19597[(1)] = (20));

} else {
var statearr_19557_19598 = state_19532__$1;
(statearr_19557_19598[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (11))){
var inst_19491 = (state_19532[(8)]);
var inst_19497 = (inst_19491 == null);
var state_19532__$1 = state_19532;
if(cljs.core.truth_(inst_19497)){
var statearr_19558_19599 = state_19532__$1;
(statearr_19558_19599[(1)] = (14));

} else {
var statearr_19559_19600 = state_19532__$1;
(statearr_19559_19600[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (9))){
var inst_19484 = (state_19532[(10)]);
var inst_19484__$1 = (state_19532[(2)]);
var inst_19485 = cljs.core.get.call(null,inst_19484__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19486 = cljs.core.get.call(null,inst_19484__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19487 = cljs.core.get.call(null,inst_19484__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19532__$1 = (function (){var statearr_19560 = state_19532;
(statearr_19560[(15)] = inst_19485);

(statearr_19560[(17)] = inst_19486);

(statearr_19560[(10)] = inst_19484__$1);

return statearr_19560;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19532__$1,(10),inst_19487);
} else {
if((state_val_19533 === (5))){
var inst_19476 = (state_19532[(7)]);
var inst_19479 = cljs.core.seq_QMARK_.call(null,inst_19476);
var state_19532__$1 = state_19532;
if(inst_19479){
var statearr_19561_19601 = state_19532__$1;
(statearr_19561_19601[(1)] = (7));

} else {
var statearr_19562_19602 = state_19532__$1;
(statearr_19562_19602[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (14))){
var inst_19492 = (state_19532[(16)]);
var inst_19499 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19492);
var state_19532__$1 = state_19532;
var statearr_19563_19603 = state_19532__$1;
(statearr_19563_19603[(2)] = inst_19499);

(statearr_19563_19603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (26))){
var inst_19522 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
var statearr_19564_19604 = state_19532__$1;
(statearr_19564_19604[(2)] = inst_19522);

(statearr_19564_19604[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (16))){
var inst_19502 = (state_19532[(2)]);
var inst_19503 = calc_state.call(null);
var inst_19476 = inst_19503;
var state_19532__$1 = (function (){var statearr_19565 = state_19532;
(statearr_19565[(7)] = inst_19476);

(statearr_19565[(18)] = inst_19502);

return statearr_19565;
})();
var statearr_19566_19605 = state_19532__$1;
(statearr_19566_19605[(2)] = null);

(statearr_19566_19605[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (10))){
var inst_19492 = (state_19532[(16)]);
var inst_19491 = (state_19532[(8)]);
var inst_19490 = (state_19532[(2)]);
var inst_19491__$1 = cljs.core.nth.call(null,inst_19490,(0),null);
var inst_19492__$1 = cljs.core.nth.call(null,inst_19490,(1),null);
var inst_19493 = (inst_19491__$1 == null);
var inst_19494 = cljs.core._EQ_.call(null,inst_19492__$1,change);
var inst_19495 = (inst_19493) || (inst_19494);
var state_19532__$1 = (function (){var statearr_19567 = state_19532;
(statearr_19567[(16)] = inst_19492__$1);

(statearr_19567[(8)] = inst_19491__$1);

return statearr_19567;
})();
if(cljs.core.truth_(inst_19495)){
var statearr_19568_19606 = state_19532__$1;
(statearr_19568_19606[(1)] = (11));

} else {
var statearr_19569_19607 = state_19532__$1;
(statearr_19569_19607[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (18))){
var inst_19485 = (state_19532[(15)]);
var inst_19486 = (state_19532[(17)]);
var inst_19492 = (state_19532[(16)]);
var inst_19509 = cljs.core.empty_QMARK_.call(null,inst_19485);
var inst_19510 = inst_19486.call(null,inst_19492);
var inst_19511 = cljs.core.not.call(null,inst_19510);
var inst_19512 = (inst_19509) && (inst_19511);
var state_19532__$1 = state_19532;
var statearr_19570_19608 = state_19532__$1;
(statearr_19570_19608[(2)] = inst_19512);

(statearr_19570_19608[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19533 === (8))){
var inst_19476 = (state_19532[(7)]);
var state_19532__$1 = state_19532;
var statearr_19571_19609 = state_19532__$1;
(statearr_19571_19609[(2)] = inst_19476);

(statearr_19571_19609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto___19579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6639__auto__,c__6701__auto___19579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6640__auto__ = null;
var cljs$core$async$mix_$_state_machine__6640__auto____0 = (function (){
var statearr_19575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19575[(0)] = cljs$core$async$mix_$_state_machine__6640__auto__);

(statearr_19575[(1)] = (1));

return statearr_19575;
});
var cljs$core$async$mix_$_state_machine__6640__auto____1 = (function (state_19532){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_19532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e19576){if((e19576 instanceof Object)){
var ex__6643__auto__ = e19576;
var statearr_19577_19610 = state_19532;
(statearr_19577_19610[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19611 = state_19532;
state_19532 = G__19611;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6640__auto__ = function(state_19532){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6640__auto____1.call(this,state_19532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6640__auto____0;
cljs$core$async$mix_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6640__auto____1;
return cljs$core$async$mix_$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___19579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6703__auto__ = (function (){var statearr_19578 = f__6702__auto__.call(null);
(statearr_19578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___19579);

return statearr_19578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___19579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj19613 = {};
return obj19613;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4198__auto__ = p;
if(and__4198__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4198__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4846__auto__ = (((p == null))?null:p);
return (function (){var or__4210__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4198__auto__ = p;
if(and__4198__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4198__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4846__auto__ = (((p == null))?null:p);
return (function (){var or__4210__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__19615 = arguments.length;
switch (G__19615) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4198__auto__ = p;
if(and__4198__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4846__auto__ = (((p == null))?null:p);
return (function (){var or__4210__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4198__auto__ = p;
if(and__4198__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4846__auto__ = (((p == null))?null:p);
return (function (){var or__4210__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4846__auto__)]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__19619 = arguments.length;
switch (G__19619) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4210__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4210__auto__,mults){
return (function (p1__19617_SHARP_){
if(cljs.core.truth_(p1__19617_SHARP_.call(null,topic))){
return p1__19617_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19617_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4210__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19620 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19620 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19621){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19621 = meta19621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19622,meta19621__$1){
var self__ = this;
var _19622__$1 = this;
return (new cljs.core.async.t19620(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19621__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19622){
var self__ = this;
var _19622__$1 = this;
return self__.meta19621;
});})(mults,ensure_mult))
;

cljs.core.async.t19620.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19620.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19620.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19620.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19620.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t19620.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19620.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19621","meta19621",484550038,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t19620.cljs$lang$type = true;

cljs.core.async.t19620.cljs$lang$ctorStr = "cljs.core.async/t19620";

cljs.core.async.t19620.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write.call(null,writer__4790__auto__,"cljs.core.async/t19620");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19620 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t19620(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19621){
return (new cljs.core.async.t19620(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19621));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19620(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6701__auto___19743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___19743,mults,ensure_mult,p){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___19743,mults,ensure_mult,p){
return (function (state_19694){
var state_val_19695 = (state_19694[(1)]);
if((state_val_19695 === (7))){
var inst_19690 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
var statearr_19696_19744 = state_19694__$1;
(statearr_19696_19744[(2)] = inst_19690);

(statearr_19696_19744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (20))){
var state_19694__$1 = state_19694;
var statearr_19697_19745 = state_19694__$1;
(statearr_19697_19745[(2)] = null);

(statearr_19697_19745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (1))){
var state_19694__$1 = state_19694;
var statearr_19698_19746 = state_19694__$1;
(statearr_19698_19746[(2)] = null);

(statearr_19698_19746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (24))){
var inst_19673 = (state_19694[(7)]);
var inst_19682 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19673);
var state_19694__$1 = state_19694;
var statearr_19699_19747 = state_19694__$1;
(statearr_19699_19747[(2)] = inst_19682);

(statearr_19699_19747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (4))){
var inst_19625 = (state_19694[(8)]);
var inst_19625__$1 = (state_19694[(2)]);
var inst_19626 = (inst_19625__$1 == null);
var state_19694__$1 = (function (){var statearr_19700 = state_19694;
(statearr_19700[(8)] = inst_19625__$1);

return statearr_19700;
})();
if(cljs.core.truth_(inst_19626)){
var statearr_19701_19748 = state_19694__$1;
(statearr_19701_19748[(1)] = (5));

} else {
var statearr_19702_19749 = state_19694__$1;
(statearr_19702_19749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (15))){
var inst_19667 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
var statearr_19703_19750 = state_19694__$1;
(statearr_19703_19750[(2)] = inst_19667);

(statearr_19703_19750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (21))){
var inst_19687 = (state_19694[(2)]);
var state_19694__$1 = (function (){var statearr_19704 = state_19694;
(statearr_19704[(9)] = inst_19687);

return statearr_19704;
})();
var statearr_19705_19751 = state_19694__$1;
(statearr_19705_19751[(2)] = null);

(statearr_19705_19751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (13))){
var inst_19649 = (state_19694[(10)]);
var inst_19651 = cljs.core.chunked_seq_QMARK_.call(null,inst_19649);
var state_19694__$1 = state_19694;
if(inst_19651){
var statearr_19706_19752 = state_19694__$1;
(statearr_19706_19752[(1)] = (16));

} else {
var statearr_19707_19753 = state_19694__$1;
(statearr_19707_19753[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (22))){
var inst_19679 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
if(cljs.core.truth_(inst_19679)){
var statearr_19708_19754 = state_19694__$1;
(statearr_19708_19754[(1)] = (23));

} else {
var statearr_19709_19755 = state_19694__$1;
(statearr_19709_19755[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (6))){
var inst_19675 = (state_19694[(11)]);
var inst_19625 = (state_19694[(8)]);
var inst_19673 = (state_19694[(7)]);
var inst_19673__$1 = topic_fn.call(null,inst_19625);
var inst_19674 = cljs.core.deref.call(null,mults);
var inst_19675__$1 = cljs.core.get.call(null,inst_19674,inst_19673__$1);
var state_19694__$1 = (function (){var statearr_19710 = state_19694;
(statearr_19710[(11)] = inst_19675__$1);

(statearr_19710[(7)] = inst_19673__$1);

return statearr_19710;
})();
if(cljs.core.truth_(inst_19675__$1)){
var statearr_19711_19756 = state_19694__$1;
(statearr_19711_19756[(1)] = (19));

} else {
var statearr_19712_19757 = state_19694__$1;
(statearr_19712_19757[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (25))){
var inst_19684 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
var statearr_19713_19758 = state_19694__$1;
(statearr_19713_19758[(2)] = inst_19684);

(statearr_19713_19758[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (17))){
var inst_19649 = (state_19694[(10)]);
var inst_19658 = cljs.core.first.call(null,inst_19649);
var inst_19659 = cljs.core.async.muxch_STAR_.call(null,inst_19658);
var inst_19660 = cljs.core.async.close_BANG_.call(null,inst_19659);
var inst_19661 = cljs.core.next.call(null,inst_19649);
var inst_19635 = inst_19661;
var inst_19636 = null;
var inst_19637 = (0);
var inst_19638 = (0);
var state_19694__$1 = (function (){var statearr_19714 = state_19694;
(statearr_19714[(12)] = inst_19660);

(statearr_19714[(13)] = inst_19638);

(statearr_19714[(14)] = inst_19635);

(statearr_19714[(15)] = inst_19636);

(statearr_19714[(16)] = inst_19637);

return statearr_19714;
})();
var statearr_19715_19759 = state_19694__$1;
(statearr_19715_19759[(2)] = null);

(statearr_19715_19759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (3))){
var inst_19692 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19694__$1,inst_19692);
} else {
if((state_val_19695 === (12))){
var inst_19669 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
var statearr_19716_19760 = state_19694__$1;
(statearr_19716_19760[(2)] = inst_19669);

(statearr_19716_19760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (2))){
var state_19694__$1 = state_19694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19694__$1,(4),ch);
} else {
if((state_val_19695 === (23))){
var state_19694__$1 = state_19694;
var statearr_19717_19761 = state_19694__$1;
(statearr_19717_19761[(2)] = null);

(statearr_19717_19761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (19))){
var inst_19675 = (state_19694[(11)]);
var inst_19625 = (state_19694[(8)]);
var inst_19677 = cljs.core.async.muxch_STAR_.call(null,inst_19675);
var state_19694__$1 = state_19694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19694__$1,(22),inst_19677,inst_19625);
} else {
if((state_val_19695 === (11))){
var inst_19649 = (state_19694[(10)]);
var inst_19635 = (state_19694[(14)]);
var inst_19649__$1 = cljs.core.seq.call(null,inst_19635);
var state_19694__$1 = (function (){var statearr_19718 = state_19694;
(statearr_19718[(10)] = inst_19649__$1);

return statearr_19718;
})();
if(inst_19649__$1){
var statearr_19719_19762 = state_19694__$1;
(statearr_19719_19762[(1)] = (13));

} else {
var statearr_19720_19763 = state_19694__$1;
(statearr_19720_19763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (9))){
var inst_19671 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
var statearr_19721_19764 = state_19694__$1;
(statearr_19721_19764[(2)] = inst_19671);

(statearr_19721_19764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (5))){
var inst_19632 = cljs.core.deref.call(null,mults);
var inst_19633 = cljs.core.vals.call(null,inst_19632);
var inst_19634 = cljs.core.seq.call(null,inst_19633);
var inst_19635 = inst_19634;
var inst_19636 = null;
var inst_19637 = (0);
var inst_19638 = (0);
var state_19694__$1 = (function (){var statearr_19722 = state_19694;
(statearr_19722[(13)] = inst_19638);

(statearr_19722[(14)] = inst_19635);

(statearr_19722[(15)] = inst_19636);

(statearr_19722[(16)] = inst_19637);

return statearr_19722;
})();
var statearr_19723_19765 = state_19694__$1;
(statearr_19723_19765[(2)] = null);

(statearr_19723_19765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (14))){
var state_19694__$1 = state_19694;
var statearr_19727_19766 = state_19694__$1;
(statearr_19727_19766[(2)] = null);

(statearr_19727_19766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (16))){
var inst_19649 = (state_19694[(10)]);
var inst_19653 = cljs.core.chunk_first.call(null,inst_19649);
var inst_19654 = cljs.core.chunk_rest.call(null,inst_19649);
var inst_19655 = cljs.core.count.call(null,inst_19653);
var inst_19635 = inst_19654;
var inst_19636 = inst_19653;
var inst_19637 = inst_19655;
var inst_19638 = (0);
var state_19694__$1 = (function (){var statearr_19728 = state_19694;
(statearr_19728[(13)] = inst_19638);

(statearr_19728[(14)] = inst_19635);

(statearr_19728[(15)] = inst_19636);

(statearr_19728[(16)] = inst_19637);

return statearr_19728;
})();
var statearr_19729_19767 = state_19694__$1;
(statearr_19729_19767[(2)] = null);

(statearr_19729_19767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (10))){
var inst_19638 = (state_19694[(13)]);
var inst_19635 = (state_19694[(14)]);
var inst_19636 = (state_19694[(15)]);
var inst_19637 = (state_19694[(16)]);
var inst_19643 = cljs.core._nth.call(null,inst_19636,inst_19638);
var inst_19644 = cljs.core.async.muxch_STAR_.call(null,inst_19643);
var inst_19645 = cljs.core.async.close_BANG_.call(null,inst_19644);
var inst_19646 = (inst_19638 + (1));
var tmp19724 = inst_19635;
var tmp19725 = inst_19636;
var tmp19726 = inst_19637;
var inst_19635__$1 = tmp19724;
var inst_19636__$1 = tmp19725;
var inst_19637__$1 = tmp19726;
var inst_19638__$1 = inst_19646;
var state_19694__$1 = (function (){var statearr_19730 = state_19694;
(statearr_19730[(13)] = inst_19638__$1);

(statearr_19730[(14)] = inst_19635__$1);

(statearr_19730[(15)] = inst_19636__$1);

(statearr_19730[(17)] = inst_19645);

(statearr_19730[(16)] = inst_19637__$1);

return statearr_19730;
})();
var statearr_19731_19768 = state_19694__$1;
(statearr_19731_19768[(2)] = null);

(statearr_19731_19768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (18))){
var inst_19664 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
var statearr_19732_19769 = state_19694__$1;
(statearr_19732_19769[(2)] = inst_19664);

(statearr_19732_19769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (8))){
var inst_19638 = (state_19694[(13)]);
var inst_19637 = (state_19694[(16)]);
var inst_19640 = (inst_19638 < inst_19637);
var inst_19641 = inst_19640;
var state_19694__$1 = state_19694;
if(cljs.core.truth_(inst_19641)){
var statearr_19733_19770 = state_19694__$1;
(statearr_19733_19770[(1)] = (10));

} else {
var statearr_19734_19771 = state_19694__$1;
(statearr_19734_19771[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto___19743,mults,ensure_mult,p))
;
return ((function (switch__6639__auto__,c__6701__auto___19743,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6640__auto__ = null;
var cljs$core$async$state_machine__6640__auto____0 = (function (){
var statearr_19738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19738[(0)] = cljs$core$async$state_machine__6640__auto__);

(statearr_19738[(1)] = (1));

return statearr_19738;
});
var cljs$core$async$state_machine__6640__auto____1 = (function (state_19694){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_19694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e19739){if((e19739 instanceof Object)){
var ex__6643__auto__ = e19739;
var statearr_19740_19772 = state_19694;
(statearr_19740_19772[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19773 = state_19694;
state_19694 = G__19773;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$state_machine__6640__auto__ = function(state_19694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6640__auto____1.call(this,state_19694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6640__auto____0;
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6640__auto____1;
return cljs$core$async$state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___19743,mults,ensure_mult,p))
})();
var state__6703__auto__ = (function (){var statearr_19741 = f__6702__auto__.call(null);
(statearr_19741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___19743);

return statearr_19741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___19743,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__19775 = arguments.length;
switch (G__19775) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__19778 = arguments.length;
switch (G__19778) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__19781 = arguments.length;
switch (G__19781) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6701__auto___19851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___19851,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___19851,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19820){
var state_val_19821 = (state_19820[(1)]);
if((state_val_19821 === (7))){
var state_19820__$1 = state_19820;
var statearr_19822_19852 = state_19820__$1;
(statearr_19822_19852[(2)] = null);

(statearr_19822_19852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (1))){
var state_19820__$1 = state_19820;
var statearr_19823_19853 = state_19820__$1;
(statearr_19823_19853[(2)] = null);

(statearr_19823_19853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (4))){
var inst_19784 = (state_19820[(7)]);
var inst_19786 = (inst_19784 < cnt);
var state_19820__$1 = state_19820;
if(cljs.core.truth_(inst_19786)){
var statearr_19824_19854 = state_19820__$1;
(statearr_19824_19854[(1)] = (6));

} else {
var statearr_19825_19855 = state_19820__$1;
(statearr_19825_19855[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (15))){
var inst_19816 = (state_19820[(2)]);
var state_19820__$1 = state_19820;
var statearr_19826_19856 = state_19820__$1;
(statearr_19826_19856[(2)] = inst_19816);

(statearr_19826_19856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (13))){
var inst_19809 = cljs.core.async.close_BANG_.call(null,out);
var state_19820__$1 = state_19820;
var statearr_19827_19857 = state_19820__$1;
(statearr_19827_19857[(2)] = inst_19809);

(statearr_19827_19857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (6))){
var state_19820__$1 = state_19820;
var statearr_19828_19858 = state_19820__$1;
(statearr_19828_19858[(2)] = null);

(statearr_19828_19858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (3))){
var inst_19818 = (state_19820[(2)]);
var state_19820__$1 = state_19820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19820__$1,inst_19818);
} else {
if((state_val_19821 === (12))){
var inst_19806 = (state_19820[(8)]);
var inst_19806__$1 = (state_19820[(2)]);
var inst_19807 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19806__$1);
var state_19820__$1 = (function (){var statearr_19829 = state_19820;
(statearr_19829[(8)] = inst_19806__$1);

return statearr_19829;
})();
if(cljs.core.truth_(inst_19807)){
var statearr_19830_19859 = state_19820__$1;
(statearr_19830_19859[(1)] = (13));

} else {
var statearr_19831_19860 = state_19820__$1;
(statearr_19831_19860[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (2))){
var inst_19783 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19784 = (0);
var state_19820__$1 = (function (){var statearr_19832 = state_19820;
(statearr_19832[(9)] = inst_19783);

(statearr_19832[(7)] = inst_19784);

return statearr_19832;
})();
var statearr_19833_19861 = state_19820__$1;
(statearr_19833_19861[(2)] = null);

(statearr_19833_19861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (11))){
var inst_19784 = (state_19820[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19820,(10),Object,null,(9));
var inst_19793 = chs__$1.call(null,inst_19784);
var inst_19794 = done.call(null,inst_19784);
var inst_19795 = cljs.core.async.take_BANG_.call(null,inst_19793,inst_19794);
var state_19820__$1 = state_19820;
var statearr_19834_19862 = state_19820__$1;
(statearr_19834_19862[(2)] = inst_19795);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19820__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (9))){
var inst_19784 = (state_19820[(7)]);
var inst_19797 = (state_19820[(2)]);
var inst_19798 = (inst_19784 + (1));
var inst_19784__$1 = inst_19798;
var state_19820__$1 = (function (){var statearr_19835 = state_19820;
(statearr_19835[(10)] = inst_19797);

(statearr_19835[(7)] = inst_19784__$1);

return statearr_19835;
})();
var statearr_19836_19863 = state_19820__$1;
(statearr_19836_19863[(2)] = null);

(statearr_19836_19863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (5))){
var inst_19804 = (state_19820[(2)]);
var state_19820__$1 = (function (){var statearr_19837 = state_19820;
(statearr_19837[(11)] = inst_19804);

return statearr_19837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19820__$1,(12),dchan);
} else {
if((state_val_19821 === (14))){
var inst_19806 = (state_19820[(8)]);
var inst_19811 = cljs.core.apply.call(null,f,inst_19806);
var state_19820__$1 = state_19820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19820__$1,(16),out,inst_19811);
} else {
if((state_val_19821 === (16))){
var inst_19813 = (state_19820[(2)]);
var state_19820__$1 = (function (){var statearr_19838 = state_19820;
(statearr_19838[(12)] = inst_19813);

return statearr_19838;
})();
var statearr_19839_19864 = state_19820__$1;
(statearr_19839_19864[(2)] = null);

(statearr_19839_19864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (10))){
var inst_19788 = (state_19820[(2)]);
var inst_19789 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19820__$1 = (function (){var statearr_19840 = state_19820;
(statearr_19840[(13)] = inst_19788);

return statearr_19840;
})();
var statearr_19841_19865 = state_19820__$1;
(statearr_19841_19865[(2)] = inst_19789);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19820__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19821 === (8))){
var inst_19802 = (state_19820[(2)]);
var state_19820__$1 = state_19820;
var statearr_19842_19866 = state_19820__$1;
(statearr_19842_19866[(2)] = inst_19802);

(statearr_19842_19866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto___19851,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6639__auto__,c__6701__auto___19851,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6640__auto__ = null;
var cljs$core$async$state_machine__6640__auto____0 = (function (){
var statearr_19846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19846[(0)] = cljs$core$async$state_machine__6640__auto__);

(statearr_19846[(1)] = (1));

return statearr_19846;
});
var cljs$core$async$state_machine__6640__auto____1 = (function (state_19820){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_19820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e19847){if((e19847 instanceof Object)){
var ex__6643__auto__ = e19847;
var statearr_19848_19867 = state_19820;
(statearr_19848_19867[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19868 = state_19820;
state_19820 = G__19868;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$state_machine__6640__auto__ = function(state_19820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6640__auto____1.call(this,state_19820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6640__auto____0;
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6640__auto____1;
return cljs$core$async$state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___19851,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6703__auto__ = (function (){var statearr_19849 = f__6702__auto__.call(null);
(statearr_19849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___19851);

return statearr_19849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___19851,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__19871 = arguments.length;
switch (G__19871) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6701__auto___19926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___19926,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___19926,out){
return (function (state_19901){
var state_val_19902 = (state_19901[(1)]);
if((state_val_19902 === (7))){
var inst_19881 = (state_19901[(7)]);
var inst_19880 = (state_19901[(8)]);
var inst_19880__$1 = (state_19901[(2)]);
var inst_19881__$1 = cljs.core.nth.call(null,inst_19880__$1,(0),null);
var inst_19882 = cljs.core.nth.call(null,inst_19880__$1,(1),null);
var inst_19883 = (inst_19881__$1 == null);
var state_19901__$1 = (function (){var statearr_19903 = state_19901;
(statearr_19903[(7)] = inst_19881__$1);

(statearr_19903[(8)] = inst_19880__$1);

(statearr_19903[(9)] = inst_19882);

return statearr_19903;
})();
if(cljs.core.truth_(inst_19883)){
var statearr_19904_19927 = state_19901__$1;
(statearr_19904_19927[(1)] = (8));

} else {
var statearr_19905_19928 = state_19901__$1;
(statearr_19905_19928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (1))){
var inst_19872 = cljs.core.vec.call(null,chs);
var inst_19873 = inst_19872;
var state_19901__$1 = (function (){var statearr_19906 = state_19901;
(statearr_19906[(10)] = inst_19873);

return statearr_19906;
})();
var statearr_19907_19929 = state_19901__$1;
(statearr_19907_19929[(2)] = null);

(statearr_19907_19929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (4))){
var inst_19873 = (state_19901[(10)]);
var state_19901__$1 = state_19901;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19901__$1,(7),inst_19873);
} else {
if((state_val_19902 === (6))){
var inst_19897 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
var statearr_19908_19930 = state_19901__$1;
(statearr_19908_19930[(2)] = inst_19897);

(statearr_19908_19930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (3))){
var inst_19899 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19901__$1,inst_19899);
} else {
if((state_val_19902 === (2))){
var inst_19873 = (state_19901[(10)]);
var inst_19875 = cljs.core.count.call(null,inst_19873);
var inst_19876 = (inst_19875 > (0));
var state_19901__$1 = state_19901;
if(cljs.core.truth_(inst_19876)){
var statearr_19910_19931 = state_19901__$1;
(statearr_19910_19931[(1)] = (4));

} else {
var statearr_19911_19932 = state_19901__$1;
(statearr_19911_19932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (11))){
var inst_19873 = (state_19901[(10)]);
var inst_19890 = (state_19901[(2)]);
var tmp19909 = inst_19873;
var inst_19873__$1 = tmp19909;
var state_19901__$1 = (function (){var statearr_19912 = state_19901;
(statearr_19912[(10)] = inst_19873__$1);

(statearr_19912[(11)] = inst_19890);

return statearr_19912;
})();
var statearr_19913_19933 = state_19901__$1;
(statearr_19913_19933[(2)] = null);

(statearr_19913_19933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (9))){
var inst_19881 = (state_19901[(7)]);
var state_19901__$1 = state_19901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19901__$1,(11),out,inst_19881);
} else {
if((state_val_19902 === (5))){
var inst_19895 = cljs.core.async.close_BANG_.call(null,out);
var state_19901__$1 = state_19901;
var statearr_19914_19934 = state_19901__$1;
(statearr_19914_19934[(2)] = inst_19895);

(statearr_19914_19934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (10))){
var inst_19893 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
var statearr_19915_19935 = state_19901__$1;
(statearr_19915_19935[(2)] = inst_19893);

(statearr_19915_19935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (8))){
var inst_19881 = (state_19901[(7)]);
var inst_19873 = (state_19901[(10)]);
var inst_19880 = (state_19901[(8)]);
var inst_19882 = (state_19901[(9)]);
var inst_19885 = (function (){var cs = inst_19873;
var vec__19878 = inst_19880;
var v = inst_19881;
var c = inst_19882;
return ((function (cs,vec__19878,v,c,inst_19881,inst_19873,inst_19880,inst_19882,state_val_19902,c__6701__auto___19926,out){
return (function (p1__19869_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19869_SHARP_);
});
;})(cs,vec__19878,v,c,inst_19881,inst_19873,inst_19880,inst_19882,state_val_19902,c__6701__auto___19926,out))
})();
var inst_19886 = cljs.core.filterv.call(null,inst_19885,inst_19873);
var inst_19873__$1 = inst_19886;
var state_19901__$1 = (function (){var statearr_19916 = state_19901;
(statearr_19916[(10)] = inst_19873__$1);

return statearr_19916;
})();
var statearr_19917_19936 = state_19901__$1;
(statearr_19917_19936[(2)] = null);

(statearr_19917_19936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto___19926,out))
;
return ((function (switch__6639__auto__,c__6701__auto___19926,out){
return (function() {
var cljs$core$async$state_machine__6640__auto__ = null;
var cljs$core$async$state_machine__6640__auto____0 = (function (){
var statearr_19921 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19921[(0)] = cljs$core$async$state_machine__6640__auto__);

(statearr_19921[(1)] = (1));

return statearr_19921;
});
var cljs$core$async$state_machine__6640__auto____1 = (function (state_19901){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_19901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e19922){if((e19922 instanceof Object)){
var ex__6643__auto__ = e19922;
var statearr_19923_19937 = state_19901;
(statearr_19923_19937[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19938 = state_19901;
state_19901 = G__19938;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$state_machine__6640__auto__ = function(state_19901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6640__auto____1.call(this,state_19901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6640__auto____0;
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6640__auto____1;
return cljs$core$async$state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___19926,out))
})();
var state__6703__auto__ = (function (){var statearr_19924 = f__6702__auto__.call(null);
(statearr_19924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___19926);

return statearr_19924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___19926,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__19940 = arguments.length;
switch (G__19940) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6701__auto___19988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___19988,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___19988,out){
return (function (state_19964){
var state_val_19965 = (state_19964[(1)]);
if((state_val_19965 === (7))){
var inst_19946 = (state_19964[(7)]);
var inst_19946__$1 = (state_19964[(2)]);
var inst_19947 = (inst_19946__$1 == null);
var inst_19948 = cljs.core.not.call(null,inst_19947);
var state_19964__$1 = (function (){var statearr_19966 = state_19964;
(statearr_19966[(7)] = inst_19946__$1);

return statearr_19966;
})();
if(inst_19948){
var statearr_19967_19989 = state_19964__$1;
(statearr_19967_19989[(1)] = (8));

} else {
var statearr_19968_19990 = state_19964__$1;
(statearr_19968_19990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (1))){
var inst_19941 = (0);
var state_19964__$1 = (function (){var statearr_19969 = state_19964;
(statearr_19969[(8)] = inst_19941);

return statearr_19969;
})();
var statearr_19970_19991 = state_19964__$1;
(statearr_19970_19991[(2)] = null);

(statearr_19970_19991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (4))){
var state_19964__$1 = state_19964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19964__$1,(7),ch);
} else {
if((state_val_19965 === (6))){
var inst_19959 = (state_19964[(2)]);
var state_19964__$1 = state_19964;
var statearr_19971_19992 = state_19964__$1;
(statearr_19971_19992[(2)] = inst_19959);

(statearr_19971_19992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (3))){
var inst_19961 = (state_19964[(2)]);
var inst_19962 = cljs.core.async.close_BANG_.call(null,out);
var state_19964__$1 = (function (){var statearr_19972 = state_19964;
(statearr_19972[(9)] = inst_19961);

return statearr_19972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19964__$1,inst_19962);
} else {
if((state_val_19965 === (2))){
var inst_19941 = (state_19964[(8)]);
var inst_19943 = (inst_19941 < n);
var state_19964__$1 = state_19964;
if(cljs.core.truth_(inst_19943)){
var statearr_19973_19993 = state_19964__$1;
(statearr_19973_19993[(1)] = (4));

} else {
var statearr_19974_19994 = state_19964__$1;
(statearr_19974_19994[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (11))){
var inst_19941 = (state_19964[(8)]);
var inst_19951 = (state_19964[(2)]);
var inst_19952 = (inst_19941 + (1));
var inst_19941__$1 = inst_19952;
var state_19964__$1 = (function (){var statearr_19975 = state_19964;
(statearr_19975[(8)] = inst_19941__$1);

(statearr_19975[(10)] = inst_19951);

return statearr_19975;
})();
var statearr_19976_19995 = state_19964__$1;
(statearr_19976_19995[(2)] = null);

(statearr_19976_19995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (9))){
var state_19964__$1 = state_19964;
var statearr_19977_19996 = state_19964__$1;
(statearr_19977_19996[(2)] = null);

(statearr_19977_19996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (5))){
var state_19964__$1 = state_19964;
var statearr_19978_19997 = state_19964__$1;
(statearr_19978_19997[(2)] = null);

(statearr_19978_19997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (10))){
var inst_19956 = (state_19964[(2)]);
var state_19964__$1 = state_19964;
var statearr_19979_19998 = state_19964__$1;
(statearr_19979_19998[(2)] = inst_19956);

(statearr_19979_19998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (8))){
var inst_19946 = (state_19964[(7)]);
var state_19964__$1 = state_19964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19964__$1,(11),out,inst_19946);
} else {
return null;
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
});})(c__6701__auto___19988,out))
;
return ((function (switch__6639__auto__,c__6701__auto___19988,out){
return (function() {
var cljs$core$async$state_machine__6640__auto__ = null;
var cljs$core$async$state_machine__6640__auto____0 = (function (){
var statearr_19983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19983[(0)] = cljs$core$async$state_machine__6640__auto__);

(statearr_19983[(1)] = (1));

return statearr_19983;
});
var cljs$core$async$state_machine__6640__auto____1 = (function (state_19964){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_19964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e19984){if((e19984 instanceof Object)){
var ex__6643__auto__ = e19984;
var statearr_19985_19999 = state_19964;
(statearr_19985_19999[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20000 = state_19964;
state_19964 = G__20000;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$state_machine__6640__auto__ = function(state_19964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6640__auto____1.call(this,state_19964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6640__auto____0;
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6640__auto____1;
return cljs$core$async$state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___19988,out))
})();
var state__6703__auto__ = (function (){var statearr_19986 = f__6702__auto__.call(null);
(statearr_19986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___19988);

return statearr_19986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___19988,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t20008 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20008 = (function (map_LT_,f,ch,meta20009){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20009 = meta20009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t20008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20010,meta20009__$1){
var self__ = this;
var _20010__$1 = this;
return (new cljs.core.async.t20008(self__.map_LT_,self__.f,self__.ch,meta20009__$1));
});

cljs.core.async.t20008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20010){
var self__ = this;
var _20010__$1 = this;
return self__.meta20009;
});

cljs.core.async.t20008.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20008.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20008.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t20011 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20011 = (function (map_LT_,f,ch,meta20009,_,fn1,meta20012){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20009 = meta20009;
this._ = _;
this.fn1 = fn1;
this.meta20012 = meta20012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t20011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20013,meta20012__$1){
var self__ = this;
var _20013__$1 = this;
return (new cljs.core.async.t20011(self__.map_LT_,self__.f,self__.ch,self__.meta20009,self__._,self__.fn1,meta20012__$1));
});})(___$1))
;

cljs.core.async.t20011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20013){
var self__ = this;
var _20013__$1 = this;
return self__.meta20012;
});})(___$1))
;

cljs.core.async.t20011.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t20011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20001_SHARP_){
return f1.call(null,(((p1__20001_SHARP_ == null))?null:self__.f.call(null,p1__20001_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20011.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20009","meta20009",1213986832,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20012","meta20012",1641772645,null)], null);
});})(___$1))
;

cljs.core.async.t20011.cljs$lang$type = true;

cljs.core.async.t20011.cljs$lang$ctorStr = "cljs.core.async/t20011";

cljs.core.async.t20011.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write.call(null,writer__4790__auto__,"cljs.core.async/t20011");
});})(___$1))
;

cljs.core.async.__GT_t20011 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t20011(map_LT___$1,f__$1,ch__$1,meta20009__$1,___$2,fn1__$1,meta20012){
return (new cljs.core.async.t20011(map_LT___$1,f__$1,ch__$1,meta20009__$1,___$2,fn1__$1,meta20012));
});})(___$1))
;

}

return (new cljs.core.async.t20011(self__.map_LT_,self__.f,self__.ch,self__.meta20009,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4198__auto__ = ret;
if(cljs.core.truth_(and__4198__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4198__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t20008.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t20008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20009","meta20009",1213986832,null)], null);
});

cljs.core.async.t20008.cljs$lang$type = true;

cljs.core.async.t20008.cljs$lang$ctorStr = "cljs.core.async/t20008";

cljs.core.async.t20008.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write.call(null,writer__4790__auto__,"cljs.core.async/t20008");
});

cljs.core.async.__GT_t20008 = (function cljs$core$async$map_LT__$___GT_t20008(map_LT___$1,f__$1,ch__$1,meta20009){
return (new cljs.core.async.t20008(map_LT___$1,f__$1,ch__$1,meta20009));
});

}

return (new cljs.core.async.t20008(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t20017 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20017 = (function (map_GT_,f,ch,meta20018){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20018 = meta20018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t20017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20019,meta20018__$1){
var self__ = this;
var _20019__$1 = this;
return (new cljs.core.async.t20017(self__.map_GT_,self__.f,self__.ch,meta20018__$1));
});

cljs.core.async.t20017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20019){
var self__ = this;
var _20019__$1 = this;
return self__.meta20018;
});

cljs.core.async.t20017.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20017.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20017.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t20017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20018","meta20018",984998571,null)], null);
});

cljs.core.async.t20017.cljs$lang$type = true;

cljs.core.async.t20017.cljs$lang$ctorStr = "cljs.core.async/t20017";

cljs.core.async.t20017.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write.call(null,writer__4790__auto__,"cljs.core.async/t20017");
});

cljs.core.async.__GT_t20017 = (function cljs$core$async$map_GT__$___GT_t20017(map_GT___$1,f__$1,ch__$1,meta20018){
return (new cljs.core.async.t20017(map_GT___$1,f__$1,ch__$1,meta20018));
});

}

return (new cljs.core.async.t20017(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t20023 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20023 = (function (filter_GT_,p,ch,meta20024){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20024 = meta20024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t20023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20025,meta20024__$1){
var self__ = this;
var _20025__$1 = this;
return (new cljs.core.async.t20023(self__.filter_GT_,self__.p,self__.ch,meta20024__$1));
});

cljs.core.async.t20023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20025){
var self__ = this;
var _20025__$1 = this;
return self__.meta20024;
});

cljs.core.async.t20023.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20023.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20023.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20023.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t20023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20024","meta20024",-1266819153,null)], null);
});

cljs.core.async.t20023.cljs$lang$type = true;

cljs.core.async.t20023.cljs$lang$ctorStr = "cljs.core.async/t20023";

cljs.core.async.t20023.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write.call(null,writer__4790__auto__,"cljs.core.async/t20023");
});

cljs.core.async.__GT_t20023 = (function cljs$core$async$filter_GT__$___GT_t20023(filter_GT___$1,p__$1,ch__$1,meta20024){
return (new cljs.core.async.t20023(filter_GT___$1,p__$1,ch__$1,meta20024));
});

}

return (new cljs.core.async.t20023(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__20027 = arguments.length;
switch (G__20027) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6701__auto___20070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___20070,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___20070,out){
return (function (state_20048){
var state_val_20049 = (state_20048[(1)]);
if((state_val_20049 === (7))){
var inst_20044 = (state_20048[(2)]);
var state_20048__$1 = state_20048;
var statearr_20050_20071 = state_20048__$1;
(statearr_20050_20071[(2)] = inst_20044);

(statearr_20050_20071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20049 === (1))){
var state_20048__$1 = state_20048;
var statearr_20051_20072 = state_20048__$1;
(statearr_20051_20072[(2)] = null);

(statearr_20051_20072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20049 === (4))){
var inst_20030 = (state_20048[(7)]);
var inst_20030__$1 = (state_20048[(2)]);
var inst_20031 = (inst_20030__$1 == null);
var state_20048__$1 = (function (){var statearr_20052 = state_20048;
(statearr_20052[(7)] = inst_20030__$1);

return statearr_20052;
})();
if(cljs.core.truth_(inst_20031)){
var statearr_20053_20073 = state_20048__$1;
(statearr_20053_20073[(1)] = (5));

} else {
var statearr_20054_20074 = state_20048__$1;
(statearr_20054_20074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20049 === (6))){
var inst_20030 = (state_20048[(7)]);
var inst_20035 = p.call(null,inst_20030);
var state_20048__$1 = state_20048;
if(cljs.core.truth_(inst_20035)){
var statearr_20055_20075 = state_20048__$1;
(statearr_20055_20075[(1)] = (8));

} else {
var statearr_20056_20076 = state_20048__$1;
(statearr_20056_20076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20049 === (3))){
var inst_20046 = (state_20048[(2)]);
var state_20048__$1 = state_20048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20048__$1,inst_20046);
} else {
if((state_val_20049 === (2))){
var state_20048__$1 = state_20048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20048__$1,(4),ch);
} else {
if((state_val_20049 === (11))){
var inst_20038 = (state_20048[(2)]);
var state_20048__$1 = state_20048;
var statearr_20057_20077 = state_20048__$1;
(statearr_20057_20077[(2)] = inst_20038);

(statearr_20057_20077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20049 === (9))){
var state_20048__$1 = state_20048;
var statearr_20058_20078 = state_20048__$1;
(statearr_20058_20078[(2)] = null);

(statearr_20058_20078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20049 === (5))){
var inst_20033 = cljs.core.async.close_BANG_.call(null,out);
var state_20048__$1 = state_20048;
var statearr_20059_20079 = state_20048__$1;
(statearr_20059_20079[(2)] = inst_20033);

(statearr_20059_20079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20049 === (10))){
var inst_20041 = (state_20048[(2)]);
var state_20048__$1 = (function (){var statearr_20060 = state_20048;
(statearr_20060[(8)] = inst_20041);

return statearr_20060;
})();
var statearr_20061_20080 = state_20048__$1;
(statearr_20061_20080[(2)] = null);

(statearr_20061_20080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20049 === (8))){
var inst_20030 = (state_20048[(7)]);
var state_20048__$1 = state_20048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20048__$1,(11),out,inst_20030);
} else {
return null;
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
});})(c__6701__auto___20070,out))
;
return ((function (switch__6639__auto__,c__6701__auto___20070,out){
return (function() {
var cljs$core$async$state_machine__6640__auto__ = null;
var cljs$core$async$state_machine__6640__auto____0 = (function (){
var statearr_20065 = [null,null,null,null,null,null,null,null,null];
(statearr_20065[(0)] = cljs$core$async$state_machine__6640__auto__);

(statearr_20065[(1)] = (1));

return statearr_20065;
});
var cljs$core$async$state_machine__6640__auto____1 = (function (state_20048){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_20048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e20066){if((e20066 instanceof Object)){
var ex__6643__auto__ = e20066;
var statearr_20067_20081 = state_20048;
(statearr_20067_20081[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20082 = state_20048;
state_20048 = G__20082;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$state_machine__6640__auto__ = function(state_20048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6640__auto____1.call(this,state_20048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6640__auto____0;
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6640__auto____1;
return cljs$core$async$state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___20070,out))
})();
var state__6703__auto__ = (function (){var statearr_20068 = f__6702__auto__.call(null);
(statearr_20068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___20070);

return statearr_20068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___20070,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__20084 = arguments.length;
switch (G__20084) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__){
return (function (state_20251){
var state_val_20252 = (state_20251[(1)]);
if((state_val_20252 === (7))){
var inst_20247 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20253_20294 = state_20251__$1;
(statearr_20253_20294[(2)] = inst_20247);

(statearr_20253_20294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (20))){
var inst_20217 = (state_20251[(7)]);
var inst_20228 = (state_20251[(2)]);
var inst_20229 = cljs.core.next.call(null,inst_20217);
var inst_20203 = inst_20229;
var inst_20204 = null;
var inst_20205 = (0);
var inst_20206 = (0);
var state_20251__$1 = (function (){var statearr_20254 = state_20251;
(statearr_20254[(8)] = inst_20203);

(statearr_20254[(9)] = inst_20228);

(statearr_20254[(10)] = inst_20206);

(statearr_20254[(11)] = inst_20204);

(statearr_20254[(12)] = inst_20205);

return statearr_20254;
})();
var statearr_20255_20295 = state_20251__$1;
(statearr_20255_20295[(2)] = null);

(statearr_20255_20295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (1))){
var state_20251__$1 = state_20251;
var statearr_20256_20296 = state_20251__$1;
(statearr_20256_20296[(2)] = null);

(statearr_20256_20296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (4))){
var inst_20192 = (state_20251[(13)]);
var inst_20192__$1 = (state_20251[(2)]);
var inst_20193 = (inst_20192__$1 == null);
var state_20251__$1 = (function (){var statearr_20257 = state_20251;
(statearr_20257[(13)] = inst_20192__$1);

return statearr_20257;
})();
if(cljs.core.truth_(inst_20193)){
var statearr_20258_20297 = state_20251__$1;
(statearr_20258_20297[(1)] = (5));

} else {
var statearr_20259_20298 = state_20251__$1;
(statearr_20259_20298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (15))){
var state_20251__$1 = state_20251;
var statearr_20263_20299 = state_20251__$1;
(statearr_20263_20299[(2)] = null);

(statearr_20263_20299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (21))){
var state_20251__$1 = state_20251;
var statearr_20264_20300 = state_20251__$1;
(statearr_20264_20300[(2)] = null);

(statearr_20264_20300[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (13))){
var inst_20203 = (state_20251[(8)]);
var inst_20206 = (state_20251[(10)]);
var inst_20204 = (state_20251[(11)]);
var inst_20205 = (state_20251[(12)]);
var inst_20213 = (state_20251[(2)]);
var inst_20214 = (inst_20206 + (1));
var tmp20260 = inst_20203;
var tmp20261 = inst_20204;
var tmp20262 = inst_20205;
var inst_20203__$1 = tmp20260;
var inst_20204__$1 = tmp20261;
var inst_20205__$1 = tmp20262;
var inst_20206__$1 = inst_20214;
var state_20251__$1 = (function (){var statearr_20265 = state_20251;
(statearr_20265[(8)] = inst_20203__$1);

(statearr_20265[(14)] = inst_20213);

(statearr_20265[(10)] = inst_20206__$1);

(statearr_20265[(11)] = inst_20204__$1);

(statearr_20265[(12)] = inst_20205__$1);

return statearr_20265;
})();
var statearr_20266_20301 = state_20251__$1;
(statearr_20266_20301[(2)] = null);

(statearr_20266_20301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (22))){
var state_20251__$1 = state_20251;
var statearr_20267_20302 = state_20251__$1;
(statearr_20267_20302[(2)] = null);

(statearr_20267_20302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (6))){
var inst_20192 = (state_20251[(13)]);
var inst_20201 = f.call(null,inst_20192);
var inst_20202 = cljs.core.seq.call(null,inst_20201);
var inst_20203 = inst_20202;
var inst_20204 = null;
var inst_20205 = (0);
var inst_20206 = (0);
var state_20251__$1 = (function (){var statearr_20268 = state_20251;
(statearr_20268[(8)] = inst_20203);

(statearr_20268[(10)] = inst_20206);

(statearr_20268[(11)] = inst_20204);

(statearr_20268[(12)] = inst_20205);

return statearr_20268;
})();
var statearr_20269_20303 = state_20251__$1;
(statearr_20269_20303[(2)] = null);

(statearr_20269_20303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (17))){
var inst_20217 = (state_20251[(7)]);
var inst_20221 = cljs.core.chunk_first.call(null,inst_20217);
var inst_20222 = cljs.core.chunk_rest.call(null,inst_20217);
var inst_20223 = cljs.core.count.call(null,inst_20221);
var inst_20203 = inst_20222;
var inst_20204 = inst_20221;
var inst_20205 = inst_20223;
var inst_20206 = (0);
var state_20251__$1 = (function (){var statearr_20270 = state_20251;
(statearr_20270[(8)] = inst_20203);

(statearr_20270[(10)] = inst_20206);

(statearr_20270[(11)] = inst_20204);

(statearr_20270[(12)] = inst_20205);

return statearr_20270;
})();
var statearr_20271_20304 = state_20251__$1;
(statearr_20271_20304[(2)] = null);

(statearr_20271_20304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (3))){
var inst_20249 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20251__$1,inst_20249);
} else {
if((state_val_20252 === (12))){
var inst_20237 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20272_20305 = state_20251__$1;
(statearr_20272_20305[(2)] = inst_20237);

(statearr_20272_20305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (2))){
var state_20251__$1 = state_20251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20251__$1,(4),in$);
} else {
if((state_val_20252 === (23))){
var inst_20245 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20273_20306 = state_20251__$1;
(statearr_20273_20306[(2)] = inst_20245);

(statearr_20273_20306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (19))){
var inst_20232 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20274_20307 = state_20251__$1;
(statearr_20274_20307[(2)] = inst_20232);

(statearr_20274_20307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (11))){
var inst_20203 = (state_20251[(8)]);
var inst_20217 = (state_20251[(7)]);
var inst_20217__$1 = cljs.core.seq.call(null,inst_20203);
var state_20251__$1 = (function (){var statearr_20275 = state_20251;
(statearr_20275[(7)] = inst_20217__$1);

return statearr_20275;
})();
if(inst_20217__$1){
var statearr_20276_20308 = state_20251__$1;
(statearr_20276_20308[(1)] = (14));

} else {
var statearr_20277_20309 = state_20251__$1;
(statearr_20277_20309[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (9))){
var inst_20239 = (state_20251[(2)]);
var inst_20240 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20251__$1 = (function (){var statearr_20278 = state_20251;
(statearr_20278[(15)] = inst_20239);

return statearr_20278;
})();
if(cljs.core.truth_(inst_20240)){
var statearr_20279_20310 = state_20251__$1;
(statearr_20279_20310[(1)] = (21));

} else {
var statearr_20280_20311 = state_20251__$1;
(statearr_20280_20311[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (5))){
var inst_20195 = cljs.core.async.close_BANG_.call(null,out);
var state_20251__$1 = state_20251;
var statearr_20281_20312 = state_20251__$1;
(statearr_20281_20312[(2)] = inst_20195);

(statearr_20281_20312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (14))){
var inst_20217 = (state_20251[(7)]);
var inst_20219 = cljs.core.chunked_seq_QMARK_.call(null,inst_20217);
var state_20251__$1 = state_20251;
if(inst_20219){
var statearr_20282_20313 = state_20251__$1;
(statearr_20282_20313[(1)] = (17));

} else {
var statearr_20283_20314 = state_20251__$1;
(statearr_20283_20314[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (16))){
var inst_20235 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20284_20315 = state_20251__$1;
(statearr_20284_20315[(2)] = inst_20235);

(statearr_20284_20315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (10))){
var inst_20206 = (state_20251[(10)]);
var inst_20204 = (state_20251[(11)]);
var inst_20211 = cljs.core._nth.call(null,inst_20204,inst_20206);
var state_20251__$1 = state_20251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20251__$1,(13),out,inst_20211);
} else {
if((state_val_20252 === (18))){
var inst_20217 = (state_20251[(7)]);
var inst_20226 = cljs.core.first.call(null,inst_20217);
var state_20251__$1 = state_20251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20251__$1,(20),out,inst_20226);
} else {
if((state_val_20252 === (8))){
var inst_20206 = (state_20251[(10)]);
var inst_20205 = (state_20251[(12)]);
var inst_20208 = (inst_20206 < inst_20205);
var inst_20209 = inst_20208;
var state_20251__$1 = state_20251;
if(cljs.core.truth_(inst_20209)){
var statearr_20285_20316 = state_20251__$1;
(statearr_20285_20316[(1)] = (10));

} else {
var statearr_20286_20317 = state_20251__$1;
(statearr_20286_20317[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto__))
;
return ((function (switch__6639__auto__,c__6701__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6640__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6640__auto____0 = (function (){
var statearr_20290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20290[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6640__auto__);

(statearr_20290[(1)] = (1));

return statearr_20290;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6640__auto____1 = (function (state_20251){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_20251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e20291){if((e20291 instanceof Object)){
var ex__6643__auto__ = e20291;
var statearr_20292_20318 = state_20251;
(statearr_20292_20318[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20319 = state_20251;
state_20251 = G__20319;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6640__auto__ = function(state_20251){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6640__auto____1.call(this,state_20251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6640__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6640__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__))
})();
var state__6703__auto__ = (function (){var statearr_20293 = f__6702__auto__.call(null);
(statearr_20293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_20293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__))
);

return c__6701__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__20321 = arguments.length;
switch (G__20321) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__20324 = arguments.length;
switch (G__20324) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__20327 = arguments.length;
switch (G__20327) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6701__auto___20377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___20377,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___20377,out){
return (function (state_20351){
var state_val_20352 = (state_20351[(1)]);
if((state_val_20352 === (7))){
var inst_20346 = (state_20351[(2)]);
var state_20351__$1 = state_20351;
var statearr_20353_20378 = state_20351__$1;
(statearr_20353_20378[(2)] = inst_20346);

(statearr_20353_20378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (1))){
var inst_20328 = null;
var state_20351__$1 = (function (){var statearr_20354 = state_20351;
(statearr_20354[(7)] = inst_20328);

return statearr_20354;
})();
var statearr_20355_20379 = state_20351__$1;
(statearr_20355_20379[(2)] = null);

(statearr_20355_20379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (4))){
var inst_20331 = (state_20351[(8)]);
var inst_20331__$1 = (state_20351[(2)]);
var inst_20332 = (inst_20331__$1 == null);
var inst_20333 = cljs.core.not.call(null,inst_20332);
var state_20351__$1 = (function (){var statearr_20356 = state_20351;
(statearr_20356[(8)] = inst_20331__$1);

return statearr_20356;
})();
if(inst_20333){
var statearr_20357_20380 = state_20351__$1;
(statearr_20357_20380[(1)] = (5));

} else {
var statearr_20358_20381 = state_20351__$1;
(statearr_20358_20381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (6))){
var state_20351__$1 = state_20351;
var statearr_20359_20382 = state_20351__$1;
(statearr_20359_20382[(2)] = null);

(statearr_20359_20382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (3))){
var inst_20348 = (state_20351[(2)]);
var inst_20349 = cljs.core.async.close_BANG_.call(null,out);
var state_20351__$1 = (function (){var statearr_20360 = state_20351;
(statearr_20360[(9)] = inst_20348);

return statearr_20360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20351__$1,inst_20349);
} else {
if((state_val_20352 === (2))){
var state_20351__$1 = state_20351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20351__$1,(4),ch);
} else {
if((state_val_20352 === (11))){
var inst_20331 = (state_20351[(8)]);
var inst_20340 = (state_20351[(2)]);
var inst_20328 = inst_20331;
var state_20351__$1 = (function (){var statearr_20361 = state_20351;
(statearr_20361[(7)] = inst_20328);

(statearr_20361[(10)] = inst_20340);

return statearr_20361;
})();
var statearr_20362_20383 = state_20351__$1;
(statearr_20362_20383[(2)] = null);

(statearr_20362_20383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (9))){
var inst_20331 = (state_20351[(8)]);
var state_20351__$1 = state_20351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20351__$1,(11),out,inst_20331);
} else {
if((state_val_20352 === (5))){
var inst_20331 = (state_20351[(8)]);
var inst_20328 = (state_20351[(7)]);
var inst_20335 = cljs.core._EQ_.call(null,inst_20331,inst_20328);
var state_20351__$1 = state_20351;
if(inst_20335){
var statearr_20364_20384 = state_20351__$1;
(statearr_20364_20384[(1)] = (8));

} else {
var statearr_20365_20385 = state_20351__$1;
(statearr_20365_20385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (10))){
var inst_20343 = (state_20351[(2)]);
var state_20351__$1 = state_20351;
var statearr_20366_20386 = state_20351__$1;
(statearr_20366_20386[(2)] = inst_20343);

(statearr_20366_20386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (8))){
var inst_20328 = (state_20351[(7)]);
var tmp20363 = inst_20328;
var inst_20328__$1 = tmp20363;
var state_20351__$1 = (function (){var statearr_20367 = state_20351;
(statearr_20367[(7)] = inst_20328__$1);

return statearr_20367;
})();
var statearr_20368_20387 = state_20351__$1;
(statearr_20368_20387[(2)] = null);

(statearr_20368_20387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto___20377,out))
;
return ((function (switch__6639__auto__,c__6701__auto___20377,out){
return (function() {
var cljs$core$async$state_machine__6640__auto__ = null;
var cljs$core$async$state_machine__6640__auto____0 = (function (){
var statearr_20372 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20372[(0)] = cljs$core$async$state_machine__6640__auto__);

(statearr_20372[(1)] = (1));

return statearr_20372;
});
var cljs$core$async$state_machine__6640__auto____1 = (function (state_20351){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_20351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e20373){if((e20373 instanceof Object)){
var ex__6643__auto__ = e20373;
var statearr_20374_20388 = state_20351;
(statearr_20374_20388[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20389 = state_20351;
state_20351 = G__20389;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$state_machine__6640__auto__ = function(state_20351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6640__auto____1.call(this,state_20351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6640__auto____0;
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6640__auto____1;
return cljs$core$async$state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___20377,out))
})();
var state__6703__auto__ = (function (){var statearr_20375 = f__6702__auto__.call(null);
(statearr_20375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___20377);

return statearr_20375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___20377,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__20391 = arguments.length;
switch (G__20391) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6701__auto___20460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___20460,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___20460,out){
return (function (state_20429){
var state_val_20430 = (state_20429[(1)]);
if((state_val_20430 === (7))){
var inst_20425 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
var statearr_20431_20461 = state_20429__$1;
(statearr_20431_20461[(2)] = inst_20425);

(statearr_20431_20461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (1))){
var inst_20392 = (new Array(n));
var inst_20393 = inst_20392;
var inst_20394 = (0);
var state_20429__$1 = (function (){var statearr_20432 = state_20429;
(statearr_20432[(7)] = inst_20393);

(statearr_20432[(8)] = inst_20394);

return statearr_20432;
})();
var statearr_20433_20462 = state_20429__$1;
(statearr_20433_20462[(2)] = null);

(statearr_20433_20462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (4))){
var inst_20397 = (state_20429[(9)]);
var inst_20397__$1 = (state_20429[(2)]);
var inst_20398 = (inst_20397__$1 == null);
var inst_20399 = cljs.core.not.call(null,inst_20398);
var state_20429__$1 = (function (){var statearr_20434 = state_20429;
(statearr_20434[(9)] = inst_20397__$1);

return statearr_20434;
})();
if(inst_20399){
var statearr_20435_20463 = state_20429__$1;
(statearr_20435_20463[(1)] = (5));

} else {
var statearr_20436_20464 = state_20429__$1;
(statearr_20436_20464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (15))){
var inst_20419 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
var statearr_20437_20465 = state_20429__$1;
(statearr_20437_20465[(2)] = inst_20419);

(statearr_20437_20465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (13))){
var state_20429__$1 = state_20429;
var statearr_20438_20466 = state_20429__$1;
(statearr_20438_20466[(2)] = null);

(statearr_20438_20466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (6))){
var inst_20394 = (state_20429[(8)]);
var inst_20415 = (inst_20394 > (0));
var state_20429__$1 = state_20429;
if(cljs.core.truth_(inst_20415)){
var statearr_20439_20467 = state_20429__$1;
(statearr_20439_20467[(1)] = (12));

} else {
var statearr_20440_20468 = state_20429__$1;
(statearr_20440_20468[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (3))){
var inst_20427 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20429__$1,inst_20427);
} else {
if((state_val_20430 === (12))){
var inst_20393 = (state_20429[(7)]);
var inst_20417 = cljs.core.vec.call(null,inst_20393);
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20429__$1,(15),out,inst_20417);
} else {
if((state_val_20430 === (2))){
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20429__$1,(4),ch);
} else {
if((state_val_20430 === (11))){
var inst_20409 = (state_20429[(2)]);
var inst_20410 = (new Array(n));
var inst_20393 = inst_20410;
var inst_20394 = (0);
var state_20429__$1 = (function (){var statearr_20441 = state_20429;
(statearr_20441[(7)] = inst_20393);

(statearr_20441[(10)] = inst_20409);

(statearr_20441[(8)] = inst_20394);

return statearr_20441;
})();
var statearr_20442_20469 = state_20429__$1;
(statearr_20442_20469[(2)] = null);

(statearr_20442_20469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (9))){
var inst_20393 = (state_20429[(7)]);
var inst_20407 = cljs.core.vec.call(null,inst_20393);
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20429__$1,(11),out,inst_20407);
} else {
if((state_val_20430 === (5))){
var inst_20402 = (state_20429[(11)]);
var inst_20393 = (state_20429[(7)]);
var inst_20394 = (state_20429[(8)]);
var inst_20397 = (state_20429[(9)]);
var inst_20401 = (inst_20393[inst_20394] = inst_20397);
var inst_20402__$1 = (inst_20394 + (1));
var inst_20403 = (inst_20402__$1 < n);
var state_20429__$1 = (function (){var statearr_20443 = state_20429;
(statearr_20443[(11)] = inst_20402__$1);

(statearr_20443[(12)] = inst_20401);

return statearr_20443;
})();
if(cljs.core.truth_(inst_20403)){
var statearr_20444_20470 = state_20429__$1;
(statearr_20444_20470[(1)] = (8));

} else {
var statearr_20445_20471 = state_20429__$1;
(statearr_20445_20471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (14))){
var inst_20422 = (state_20429[(2)]);
var inst_20423 = cljs.core.async.close_BANG_.call(null,out);
var state_20429__$1 = (function (){var statearr_20447 = state_20429;
(statearr_20447[(13)] = inst_20422);

return statearr_20447;
})();
var statearr_20448_20472 = state_20429__$1;
(statearr_20448_20472[(2)] = inst_20423);

(statearr_20448_20472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (10))){
var inst_20413 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
var statearr_20449_20473 = state_20429__$1;
(statearr_20449_20473[(2)] = inst_20413);

(statearr_20449_20473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20430 === (8))){
var inst_20402 = (state_20429[(11)]);
var inst_20393 = (state_20429[(7)]);
var tmp20446 = inst_20393;
var inst_20393__$1 = tmp20446;
var inst_20394 = inst_20402;
var state_20429__$1 = (function (){var statearr_20450 = state_20429;
(statearr_20450[(7)] = inst_20393__$1);

(statearr_20450[(8)] = inst_20394);

return statearr_20450;
})();
var statearr_20451_20474 = state_20429__$1;
(statearr_20451_20474[(2)] = null);

(statearr_20451_20474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto___20460,out))
;
return ((function (switch__6639__auto__,c__6701__auto___20460,out){
return (function() {
var cljs$core$async$state_machine__6640__auto__ = null;
var cljs$core$async$state_machine__6640__auto____0 = (function (){
var statearr_20455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20455[(0)] = cljs$core$async$state_machine__6640__auto__);

(statearr_20455[(1)] = (1));

return statearr_20455;
});
var cljs$core$async$state_machine__6640__auto____1 = (function (state_20429){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_20429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e20456){if((e20456 instanceof Object)){
var ex__6643__auto__ = e20456;
var statearr_20457_20475 = state_20429;
(statearr_20457_20475[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20476 = state_20429;
state_20429 = G__20476;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$state_machine__6640__auto__ = function(state_20429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6640__auto____1.call(this,state_20429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6640__auto____0;
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6640__auto____1;
return cljs$core$async$state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___20460,out))
})();
var state__6703__auto__ = (function (){var statearr_20458 = f__6702__auto__.call(null);
(statearr_20458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___20460);

return statearr_20458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___20460,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__20478 = arguments.length;
switch (G__20478) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6701__auto___20551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto___20551,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto___20551,out){
return (function (state_20520){
var state_val_20521 = (state_20520[(1)]);
if((state_val_20521 === (7))){
var inst_20516 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20522_20552 = state_20520__$1;
(statearr_20522_20552[(2)] = inst_20516);

(statearr_20522_20552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (1))){
var inst_20479 = [];
var inst_20480 = inst_20479;
var inst_20481 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20520__$1 = (function (){var statearr_20523 = state_20520;
(statearr_20523[(7)] = inst_20480);

(statearr_20523[(8)] = inst_20481);

return statearr_20523;
})();
var statearr_20524_20553 = state_20520__$1;
(statearr_20524_20553[(2)] = null);

(statearr_20524_20553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (4))){
var inst_20484 = (state_20520[(9)]);
var inst_20484__$1 = (state_20520[(2)]);
var inst_20485 = (inst_20484__$1 == null);
var inst_20486 = cljs.core.not.call(null,inst_20485);
var state_20520__$1 = (function (){var statearr_20525 = state_20520;
(statearr_20525[(9)] = inst_20484__$1);

return statearr_20525;
})();
if(inst_20486){
var statearr_20526_20554 = state_20520__$1;
(statearr_20526_20554[(1)] = (5));

} else {
var statearr_20527_20555 = state_20520__$1;
(statearr_20527_20555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (15))){
var inst_20510 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20528_20556 = state_20520__$1;
(statearr_20528_20556[(2)] = inst_20510);

(statearr_20528_20556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (13))){
var state_20520__$1 = state_20520;
var statearr_20529_20557 = state_20520__$1;
(statearr_20529_20557[(2)] = null);

(statearr_20529_20557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (6))){
var inst_20480 = (state_20520[(7)]);
var inst_20505 = inst_20480.length;
var inst_20506 = (inst_20505 > (0));
var state_20520__$1 = state_20520;
if(cljs.core.truth_(inst_20506)){
var statearr_20530_20558 = state_20520__$1;
(statearr_20530_20558[(1)] = (12));

} else {
var statearr_20531_20559 = state_20520__$1;
(statearr_20531_20559[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (3))){
var inst_20518 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20520__$1,inst_20518);
} else {
if((state_val_20521 === (12))){
var inst_20480 = (state_20520[(7)]);
var inst_20508 = cljs.core.vec.call(null,inst_20480);
var state_20520__$1 = state_20520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20520__$1,(15),out,inst_20508);
} else {
if((state_val_20521 === (2))){
var state_20520__$1 = state_20520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20520__$1,(4),ch);
} else {
if((state_val_20521 === (11))){
var inst_20488 = (state_20520[(10)]);
var inst_20484 = (state_20520[(9)]);
var inst_20498 = (state_20520[(2)]);
var inst_20499 = [];
var inst_20500 = inst_20499.push(inst_20484);
var inst_20480 = inst_20499;
var inst_20481 = inst_20488;
var state_20520__$1 = (function (){var statearr_20532 = state_20520;
(statearr_20532[(7)] = inst_20480);

(statearr_20532[(11)] = inst_20500);

(statearr_20532[(8)] = inst_20481);

(statearr_20532[(12)] = inst_20498);

return statearr_20532;
})();
var statearr_20533_20560 = state_20520__$1;
(statearr_20533_20560[(2)] = null);

(statearr_20533_20560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (9))){
var inst_20480 = (state_20520[(7)]);
var inst_20496 = cljs.core.vec.call(null,inst_20480);
var state_20520__$1 = state_20520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20520__$1,(11),out,inst_20496);
} else {
if((state_val_20521 === (5))){
var inst_20481 = (state_20520[(8)]);
var inst_20488 = (state_20520[(10)]);
var inst_20484 = (state_20520[(9)]);
var inst_20488__$1 = f.call(null,inst_20484);
var inst_20489 = cljs.core._EQ_.call(null,inst_20488__$1,inst_20481);
var inst_20490 = cljs.core.keyword_identical_QMARK_.call(null,inst_20481,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20491 = (inst_20489) || (inst_20490);
var state_20520__$1 = (function (){var statearr_20534 = state_20520;
(statearr_20534[(10)] = inst_20488__$1);

return statearr_20534;
})();
if(cljs.core.truth_(inst_20491)){
var statearr_20535_20561 = state_20520__$1;
(statearr_20535_20561[(1)] = (8));

} else {
var statearr_20536_20562 = state_20520__$1;
(statearr_20536_20562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (14))){
var inst_20513 = (state_20520[(2)]);
var inst_20514 = cljs.core.async.close_BANG_.call(null,out);
var state_20520__$1 = (function (){var statearr_20538 = state_20520;
(statearr_20538[(13)] = inst_20513);

return statearr_20538;
})();
var statearr_20539_20563 = state_20520__$1;
(statearr_20539_20563[(2)] = inst_20514);

(statearr_20539_20563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (10))){
var inst_20503 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20540_20564 = state_20520__$1;
(statearr_20540_20564[(2)] = inst_20503);

(statearr_20540_20564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (8))){
var inst_20480 = (state_20520[(7)]);
var inst_20488 = (state_20520[(10)]);
var inst_20484 = (state_20520[(9)]);
var inst_20493 = inst_20480.push(inst_20484);
var tmp20537 = inst_20480;
var inst_20480__$1 = tmp20537;
var inst_20481 = inst_20488;
var state_20520__$1 = (function (){var statearr_20541 = state_20520;
(statearr_20541[(7)] = inst_20480__$1);

(statearr_20541[(8)] = inst_20481);

(statearr_20541[(14)] = inst_20493);

return statearr_20541;
})();
var statearr_20542_20565 = state_20520__$1;
(statearr_20542_20565[(2)] = null);

(statearr_20542_20565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6701__auto___20551,out))
;
return ((function (switch__6639__auto__,c__6701__auto___20551,out){
return (function() {
var cljs$core$async$state_machine__6640__auto__ = null;
var cljs$core$async$state_machine__6640__auto____0 = (function (){
var statearr_20546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20546[(0)] = cljs$core$async$state_machine__6640__auto__);

(statearr_20546[(1)] = (1));

return statearr_20546;
});
var cljs$core$async$state_machine__6640__auto____1 = (function (state_20520){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_20520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e20547){if((e20547 instanceof Object)){
var ex__6643__auto__ = e20547;
var statearr_20548_20566 = state_20520;
(statearr_20548_20566[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20567 = state_20520;
state_20520 = G__20567;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
cljs$core$async$state_machine__6640__auto__ = function(state_20520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6640__auto____1.call(this,state_20520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6640__auto____0;
cljs$core$async$state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6640__auto____1;
return cljs$core$async$state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto___20551,out))
})();
var state__6703__auto__ = (function (){var statearr_20549 = f__6702__auto__.call(null);
(statearr_20549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto___20551);

return statearr_20549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto___20551,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map