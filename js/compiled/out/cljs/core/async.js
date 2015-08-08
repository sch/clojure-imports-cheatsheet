// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24528 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24528 = (function (fn_handler,f,meta24529){
this.fn_handler = fn_handler;
this.f = f;
this.meta24529 = meta24529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24530,meta24529__$1){
var self__ = this;
var _24530__$1 = this;
return (new cljs.core.async.t24528(self__.fn_handler,self__.f,meta24529__$1));
});

cljs.core.async.t24528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24530){
var self__ = this;
var _24530__$1 = this;
return self__.meta24529;
});

cljs.core.async.t24528.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24529","meta24529",164263602,null)], null);
});

cljs.core.async.t24528.cljs$lang$type = true;

cljs.core.async.t24528.cljs$lang$ctorStr = "cljs.core.async/t24528";

cljs.core.async.t24528.cljs$lang$ctorPrWriter = (function (this__16673__auto__,writer__16674__auto__,opt__16675__auto__){
return cljs.core._write.call(null,writer__16674__auto__,"cljs.core.async/t24528");
});

cljs.core.async.__GT_t24528 = (function cljs$core$async$fn_handler_$___GT_t24528(fn_handler__$1,f__$1,meta24529){
return (new cljs.core.async.t24528(fn_handler__$1,f__$1,meta24529));
});

}

return (new cljs.core.async.t24528(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24532 = buff;
if(G__24532){
var bit__16768__auto__ = null;
if(cljs.core.truth_((function (){var or__16094__auto__ = bit__16768__auto__;
if(cljs.core.truth_(or__16094__auto__)){
return or__16094__auto__;
} else {
return G__24532.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24532.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24532);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24532);
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
var G__24534 = arguments.length;
switch (G__24534) {
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
var G__24537 = arguments.length;
switch (G__24537) {
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
var val_24539 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24539);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24539,ret){
return (function (){
return fn1.call(null,val_24539);
});})(val_24539,ret))
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
var G__24541 = arguments.length;
switch (G__24541) {
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
var n__16979__auto___24543 = n;
var x_24544 = (0);
while(true){
if((x_24544 < n__16979__auto___24543)){
(a[x_24544] = (0));

var G__24545 = (x_24544 + (1));
x_24544 = G__24545;
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

var G__24546 = (i + (1));
i = G__24546;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24550 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24550 = (function (alt_flag,flag,meta24551){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24551 = meta24551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24552,meta24551__$1){
var self__ = this;
var _24552__$1 = this;
return (new cljs.core.async.t24550(self__.alt_flag,self__.flag,meta24551__$1));
});})(flag))
;

cljs.core.async.t24550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24552){
var self__ = this;
var _24552__$1 = this;
return self__.meta24551;
});})(flag))
;

cljs.core.async.t24550.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24550.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24551","meta24551",253597724,null)], null);
});})(flag))
;

cljs.core.async.t24550.cljs$lang$type = true;

cljs.core.async.t24550.cljs$lang$ctorStr = "cljs.core.async/t24550";

cljs.core.async.t24550.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16673__auto__,writer__16674__auto__,opt__16675__auto__){
return cljs.core._write.call(null,writer__16674__auto__,"cljs.core.async/t24550");
});})(flag))
;

cljs.core.async.__GT_t24550 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24550(alt_flag__$1,flag__$1,meta24551){
return (new cljs.core.async.t24550(alt_flag__$1,flag__$1,meta24551));
});})(flag))
;

}

return (new cljs.core.async.t24550(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24556 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24556 = (function (alt_handler,flag,cb,meta24557){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24557 = meta24557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24558,meta24557__$1){
var self__ = this;
var _24558__$1 = this;
return (new cljs.core.async.t24556(self__.alt_handler,self__.flag,self__.cb,meta24557__$1));
});

cljs.core.async.t24556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24558){
var self__ = this;
var _24558__$1 = this;
return self__.meta24557;
});

cljs.core.async.t24556.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24557","meta24557",-857161620,null)], null);
});

cljs.core.async.t24556.cljs$lang$type = true;

cljs.core.async.t24556.cljs$lang$ctorStr = "cljs.core.async/t24556";

cljs.core.async.t24556.cljs$lang$ctorPrWriter = (function (this__16673__auto__,writer__16674__auto__,opt__16675__auto__){
return cljs.core._write.call(null,writer__16674__auto__,"cljs.core.async/t24556");
});

cljs.core.async.__GT_t24556 = (function cljs$core$async$alt_handler_$___GT_t24556(alt_handler__$1,flag__$1,cb__$1,meta24557){
return (new cljs.core.async.t24556(alt_handler__$1,flag__$1,cb__$1,meta24557));
});

}

return (new cljs.core.async.t24556(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24559_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24559_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24560_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24560_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16094__auto__ = wport;
if(cljs.core.truth_(or__16094__auto__)){
return or__16094__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24561 = (i + (1));
i = G__24561;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16094__auto__ = ret;
if(cljs.core.truth_(or__16094__auto__)){
return or__16094__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16082__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16082__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16082__auto__;
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
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24564){
var map__24565 = p__24564;
var map__24565__$1 = ((cljs.core.seq_QMARK_.call(null,map__24565))?cljs.core.apply.call(null,cljs.core.hash_map,map__24565):map__24565);
var opts = map__24565__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24562){
var G__24563 = cljs.core.first.call(null,seq24562);
var seq24562__$1 = cljs.core.next.call(null,seq24562);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24563,seq24562__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__24567 = arguments.length;
switch (G__24567) {
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
var c__19104__auto___24616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___24616){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___24616){
return (function (state_24591){
var state_val_24592 = (state_24591[(1)]);
if((state_val_24592 === (7))){
var inst_24587 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
var statearr_24593_24617 = state_24591__$1;
(statearr_24593_24617[(2)] = inst_24587);

(statearr_24593_24617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (1))){
var state_24591__$1 = state_24591;
var statearr_24594_24618 = state_24591__$1;
(statearr_24594_24618[(2)] = null);

(statearr_24594_24618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (4))){
var inst_24570 = (state_24591[(7)]);
var inst_24570__$1 = (state_24591[(2)]);
var inst_24571 = (inst_24570__$1 == null);
var state_24591__$1 = (function (){var statearr_24595 = state_24591;
(statearr_24595[(7)] = inst_24570__$1);

return statearr_24595;
})();
if(cljs.core.truth_(inst_24571)){
var statearr_24596_24619 = state_24591__$1;
(statearr_24596_24619[(1)] = (5));

} else {
var statearr_24597_24620 = state_24591__$1;
(statearr_24597_24620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (13))){
var state_24591__$1 = state_24591;
var statearr_24598_24621 = state_24591__$1;
(statearr_24598_24621[(2)] = null);

(statearr_24598_24621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (6))){
var inst_24570 = (state_24591[(7)]);
var state_24591__$1 = state_24591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24591__$1,(11),to,inst_24570);
} else {
if((state_val_24592 === (3))){
var inst_24589 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24591__$1,inst_24589);
} else {
if((state_val_24592 === (12))){
var state_24591__$1 = state_24591;
var statearr_24599_24622 = state_24591__$1;
(statearr_24599_24622[(2)] = null);

(statearr_24599_24622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (2))){
var state_24591__$1 = state_24591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24591__$1,(4),from);
} else {
if((state_val_24592 === (11))){
var inst_24580 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
if(cljs.core.truth_(inst_24580)){
var statearr_24600_24623 = state_24591__$1;
(statearr_24600_24623[(1)] = (12));

} else {
var statearr_24601_24624 = state_24591__$1;
(statearr_24601_24624[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (9))){
var state_24591__$1 = state_24591;
var statearr_24602_24625 = state_24591__$1;
(statearr_24602_24625[(2)] = null);

(statearr_24602_24625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (5))){
var state_24591__$1 = state_24591;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24603_24626 = state_24591__$1;
(statearr_24603_24626[(1)] = (8));

} else {
var statearr_24604_24627 = state_24591__$1;
(statearr_24604_24627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (14))){
var inst_24585 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
var statearr_24605_24628 = state_24591__$1;
(statearr_24605_24628[(2)] = inst_24585);

(statearr_24605_24628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (10))){
var inst_24577 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
var statearr_24606_24629 = state_24591__$1;
(statearr_24606_24629[(2)] = inst_24577);

(statearr_24606_24629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (8))){
var inst_24574 = cljs.core.async.close_BANG_.call(null,to);
var state_24591__$1 = state_24591;
var statearr_24607_24630 = state_24591__$1;
(statearr_24607_24630[(2)] = inst_24574);

(statearr_24607_24630[(1)] = (10));


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
});})(c__19104__auto___24616))
;
return ((function (switch__19042__auto__,c__19104__auto___24616){
return (function() {
var cljs$core$async$state_machine__19043__auto__ = null;
var cljs$core$async$state_machine__19043__auto____0 = (function (){
var statearr_24611 = [null,null,null,null,null,null,null,null];
(statearr_24611[(0)] = cljs$core$async$state_machine__19043__auto__);

(statearr_24611[(1)] = (1));

return statearr_24611;
});
var cljs$core$async$state_machine__19043__auto____1 = (function (state_24591){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_24591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e24612){if((e24612 instanceof Object)){
var ex__19046__auto__ = e24612;
var statearr_24613_24631 = state_24591;
(statearr_24613_24631[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24632 = state_24591;
state_24591 = G__24632;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$state_machine__19043__auto__ = function(state_24591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19043__auto____1.call(this,state_24591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19043__auto____0;
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19043__auto____1;
return cljs$core$async$state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___24616))
})();
var state__19106__auto__ = (function (){var statearr_24614 = f__19105__auto__.call(null);
(statearr_24614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___24616);

return statearr_24614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___24616))
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
return (function (p__24816){
var vec__24817 = p__24816;
var v = cljs.core.nth.call(null,vec__24817,(0),null);
var p = cljs.core.nth.call(null,vec__24817,(1),null);
var job = vec__24817;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19104__auto___24999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___24999,res,vec__24817,v,p,job,jobs,results){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___24999,res,vec__24817,v,p,job,jobs,results){
return (function (state_24822){
var state_val_24823 = (state_24822[(1)]);
if((state_val_24823 === (1))){
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24822__$1,(2),res,v);
} else {
if((state_val_24823 === (2))){
var inst_24819 = (state_24822[(2)]);
var inst_24820 = cljs.core.async.close_BANG_.call(null,res);
var state_24822__$1 = (function (){var statearr_24824 = state_24822;
(statearr_24824[(7)] = inst_24819);

return statearr_24824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24822__$1,inst_24820);
} else {
return null;
}
}
});})(c__19104__auto___24999,res,vec__24817,v,p,job,jobs,results))
;
return ((function (switch__19042__auto__,c__19104__auto___24999,res,vec__24817,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0 = (function (){
var statearr_24828 = [null,null,null,null,null,null,null,null];
(statearr_24828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__);

(statearr_24828[(1)] = (1));

return statearr_24828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1 = (function (state_24822){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_24822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e24829){if((e24829 instanceof Object)){
var ex__19046__auto__ = e24829;
var statearr_24830_25000 = state_24822;
(statearr_24830_25000[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25001 = state_24822;
state_24822 = G__25001;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__ = function(state_24822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1.call(this,state_24822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___24999,res,vec__24817,v,p,job,jobs,results))
})();
var state__19106__auto__ = (function (){var statearr_24831 = f__19105__auto__.call(null);
(statearr_24831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___24999);

return statearr_24831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___24999,res,vec__24817,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24832){
var vec__24833 = p__24832;
var v = cljs.core.nth.call(null,vec__24833,(0),null);
var p = cljs.core.nth.call(null,vec__24833,(1),null);
var job = vec__24833;
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
var n__16979__auto___25002 = n;
var __25003 = (0);
while(true){
if((__25003 < n__16979__auto___25002)){
var G__24834_25004 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24834_25004) {
case "compute":
var c__19104__auto___25006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25003,c__19104__auto___25006,G__24834_25004,n__16979__auto___25002,jobs,results,process,async){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (__25003,c__19104__auto___25006,G__24834_25004,n__16979__auto___25002,jobs,results,process,async){
return (function (state_24847){
var state_val_24848 = (state_24847[(1)]);
if((state_val_24848 === (1))){
var state_24847__$1 = state_24847;
var statearr_24849_25007 = state_24847__$1;
(statearr_24849_25007[(2)] = null);

(statearr_24849_25007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24848 === (2))){
var state_24847__$1 = state_24847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24847__$1,(4),jobs);
} else {
if((state_val_24848 === (3))){
var inst_24845 = (state_24847[(2)]);
var state_24847__$1 = state_24847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24847__$1,inst_24845);
} else {
if((state_val_24848 === (4))){
var inst_24837 = (state_24847[(2)]);
var inst_24838 = process.call(null,inst_24837);
var state_24847__$1 = state_24847;
if(cljs.core.truth_(inst_24838)){
var statearr_24850_25008 = state_24847__$1;
(statearr_24850_25008[(1)] = (5));

} else {
var statearr_24851_25009 = state_24847__$1;
(statearr_24851_25009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24848 === (5))){
var state_24847__$1 = state_24847;
var statearr_24852_25010 = state_24847__$1;
(statearr_24852_25010[(2)] = null);

(statearr_24852_25010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24848 === (6))){
var state_24847__$1 = state_24847;
var statearr_24853_25011 = state_24847__$1;
(statearr_24853_25011[(2)] = null);

(statearr_24853_25011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24848 === (7))){
var inst_24843 = (state_24847[(2)]);
var state_24847__$1 = state_24847;
var statearr_24854_25012 = state_24847__$1;
(statearr_24854_25012[(2)] = inst_24843);

(statearr_24854_25012[(1)] = (3));


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
});})(__25003,c__19104__auto___25006,G__24834_25004,n__16979__auto___25002,jobs,results,process,async))
;
return ((function (__25003,switch__19042__auto__,c__19104__auto___25006,G__24834_25004,n__16979__auto___25002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0 = (function (){
var statearr_24858 = [null,null,null,null,null,null,null];
(statearr_24858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__);

(statearr_24858[(1)] = (1));

return statearr_24858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1 = (function (state_24847){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_24847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e24859){if((e24859 instanceof Object)){
var ex__19046__auto__ = e24859;
var statearr_24860_25013 = state_24847;
(statearr_24860_25013[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25014 = state_24847;
state_24847 = G__25014;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__ = function(state_24847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1.call(this,state_24847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__;
})()
;})(__25003,switch__19042__auto__,c__19104__auto___25006,G__24834_25004,n__16979__auto___25002,jobs,results,process,async))
})();
var state__19106__auto__ = (function (){var statearr_24861 = f__19105__auto__.call(null);
(statearr_24861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___25006);

return statearr_24861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(__25003,c__19104__auto___25006,G__24834_25004,n__16979__auto___25002,jobs,results,process,async))
);


break;
case "async":
var c__19104__auto___25015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25003,c__19104__auto___25015,G__24834_25004,n__16979__auto___25002,jobs,results,process,async){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (__25003,c__19104__auto___25015,G__24834_25004,n__16979__auto___25002,jobs,results,process,async){
return (function (state_24874){
var state_val_24875 = (state_24874[(1)]);
if((state_val_24875 === (1))){
var state_24874__$1 = state_24874;
var statearr_24876_25016 = state_24874__$1;
(statearr_24876_25016[(2)] = null);

(statearr_24876_25016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24875 === (2))){
var state_24874__$1 = state_24874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24874__$1,(4),jobs);
} else {
if((state_val_24875 === (3))){
var inst_24872 = (state_24874[(2)]);
var state_24874__$1 = state_24874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24874__$1,inst_24872);
} else {
if((state_val_24875 === (4))){
var inst_24864 = (state_24874[(2)]);
var inst_24865 = async.call(null,inst_24864);
var state_24874__$1 = state_24874;
if(cljs.core.truth_(inst_24865)){
var statearr_24877_25017 = state_24874__$1;
(statearr_24877_25017[(1)] = (5));

} else {
var statearr_24878_25018 = state_24874__$1;
(statearr_24878_25018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24875 === (5))){
var state_24874__$1 = state_24874;
var statearr_24879_25019 = state_24874__$1;
(statearr_24879_25019[(2)] = null);

(statearr_24879_25019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24875 === (6))){
var state_24874__$1 = state_24874;
var statearr_24880_25020 = state_24874__$1;
(statearr_24880_25020[(2)] = null);

(statearr_24880_25020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24875 === (7))){
var inst_24870 = (state_24874[(2)]);
var state_24874__$1 = state_24874;
var statearr_24881_25021 = state_24874__$1;
(statearr_24881_25021[(2)] = inst_24870);

(statearr_24881_25021[(1)] = (3));


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
});})(__25003,c__19104__auto___25015,G__24834_25004,n__16979__auto___25002,jobs,results,process,async))
;
return ((function (__25003,switch__19042__auto__,c__19104__auto___25015,G__24834_25004,n__16979__auto___25002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0 = (function (){
var statearr_24885 = [null,null,null,null,null,null,null];
(statearr_24885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__);

(statearr_24885[(1)] = (1));

return statearr_24885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1 = (function (state_24874){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_24874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e24886){if((e24886 instanceof Object)){
var ex__19046__auto__ = e24886;
var statearr_24887_25022 = state_24874;
(statearr_24887_25022[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25023 = state_24874;
state_24874 = G__25023;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__ = function(state_24874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1.call(this,state_24874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__;
})()
;})(__25003,switch__19042__auto__,c__19104__auto___25015,G__24834_25004,n__16979__auto___25002,jobs,results,process,async))
})();
var state__19106__auto__ = (function (){var statearr_24888 = f__19105__auto__.call(null);
(statearr_24888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___25015);

return statearr_24888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(__25003,c__19104__auto___25015,G__24834_25004,n__16979__auto___25002,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25024 = (__25003 + (1));
__25003 = G__25024;
continue;
} else {
}
break;
}

var c__19104__auto___25025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___25025,jobs,results,process,async){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___25025,jobs,results,process,async){
return (function (state_24910){
var state_val_24911 = (state_24910[(1)]);
if((state_val_24911 === (1))){
var state_24910__$1 = state_24910;
var statearr_24912_25026 = state_24910__$1;
(statearr_24912_25026[(2)] = null);

(statearr_24912_25026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (2))){
var state_24910__$1 = state_24910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24910__$1,(4),from);
} else {
if((state_val_24911 === (3))){
var inst_24908 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24910__$1,inst_24908);
} else {
if((state_val_24911 === (4))){
var inst_24891 = (state_24910[(7)]);
var inst_24891__$1 = (state_24910[(2)]);
var inst_24892 = (inst_24891__$1 == null);
var state_24910__$1 = (function (){var statearr_24913 = state_24910;
(statearr_24913[(7)] = inst_24891__$1);

return statearr_24913;
})();
if(cljs.core.truth_(inst_24892)){
var statearr_24914_25027 = state_24910__$1;
(statearr_24914_25027[(1)] = (5));

} else {
var statearr_24915_25028 = state_24910__$1;
(statearr_24915_25028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (5))){
var inst_24894 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24910__$1 = state_24910;
var statearr_24916_25029 = state_24910__$1;
(statearr_24916_25029[(2)] = inst_24894);

(statearr_24916_25029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (6))){
var inst_24896 = (state_24910[(8)]);
var inst_24891 = (state_24910[(7)]);
var inst_24896__$1 = cljs.core.async.chan.call(null,(1));
var inst_24897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24898 = [inst_24891,inst_24896__$1];
var inst_24899 = (new cljs.core.PersistentVector(null,2,(5),inst_24897,inst_24898,null));
var state_24910__$1 = (function (){var statearr_24917 = state_24910;
(statearr_24917[(8)] = inst_24896__$1);

return statearr_24917;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24910__$1,(8),jobs,inst_24899);
} else {
if((state_val_24911 === (7))){
var inst_24906 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
var statearr_24918_25030 = state_24910__$1;
(statearr_24918_25030[(2)] = inst_24906);

(statearr_24918_25030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (8))){
var inst_24896 = (state_24910[(8)]);
var inst_24901 = (state_24910[(2)]);
var state_24910__$1 = (function (){var statearr_24919 = state_24910;
(statearr_24919[(9)] = inst_24901);

return statearr_24919;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24910__$1,(9),results,inst_24896);
} else {
if((state_val_24911 === (9))){
var inst_24903 = (state_24910[(2)]);
var state_24910__$1 = (function (){var statearr_24920 = state_24910;
(statearr_24920[(10)] = inst_24903);

return statearr_24920;
})();
var statearr_24921_25031 = state_24910__$1;
(statearr_24921_25031[(2)] = null);

(statearr_24921_25031[(1)] = (2));


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
});})(c__19104__auto___25025,jobs,results,process,async))
;
return ((function (switch__19042__auto__,c__19104__auto___25025,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0 = (function (){
var statearr_24925 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__);

(statearr_24925[(1)] = (1));

return statearr_24925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1 = (function (state_24910){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_24910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e24926){if((e24926 instanceof Object)){
var ex__19046__auto__ = e24926;
var statearr_24927_25032 = state_24910;
(statearr_24927_25032[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25033 = state_24910;
state_24910 = G__25033;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__ = function(state_24910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1.call(this,state_24910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___25025,jobs,results,process,async))
})();
var state__19106__auto__ = (function (){var statearr_24928 = f__19105__auto__.call(null);
(statearr_24928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___25025);

return statearr_24928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___25025,jobs,results,process,async))
);


var c__19104__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto__,jobs,results,process,async){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto__,jobs,results,process,async){
return (function (state_24966){
var state_val_24967 = (state_24966[(1)]);
if((state_val_24967 === (7))){
var inst_24962 = (state_24966[(2)]);
var state_24966__$1 = state_24966;
var statearr_24968_25034 = state_24966__$1;
(statearr_24968_25034[(2)] = inst_24962);

(statearr_24968_25034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (20))){
var state_24966__$1 = state_24966;
var statearr_24969_25035 = state_24966__$1;
(statearr_24969_25035[(2)] = null);

(statearr_24969_25035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (1))){
var state_24966__$1 = state_24966;
var statearr_24970_25036 = state_24966__$1;
(statearr_24970_25036[(2)] = null);

(statearr_24970_25036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (4))){
var inst_24931 = (state_24966[(7)]);
var inst_24931__$1 = (state_24966[(2)]);
var inst_24932 = (inst_24931__$1 == null);
var state_24966__$1 = (function (){var statearr_24971 = state_24966;
(statearr_24971[(7)] = inst_24931__$1);

return statearr_24971;
})();
if(cljs.core.truth_(inst_24932)){
var statearr_24972_25037 = state_24966__$1;
(statearr_24972_25037[(1)] = (5));

} else {
var statearr_24973_25038 = state_24966__$1;
(statearr_24973_25038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (15))){
var inst_24944 = (state_24966[(8)]);
var state_24966__$1 = state_24966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24966__$1,(18),to,inst_24944);
} else {
if((state_val_24967 === (21))){
var inst_24957 = (state_24966[(2)]);
var state_24966__$1 = state_24966;
var statearr_24974_25039 = state_24966__$1;
(statearr_24974_25039[(2)] = inst_24957);

(statearr_24974_25039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (13))){
var inst_24959 = (state_24966[(2)]);
var state_24966__$1 = (function (){var statearr_24975 = state_24966;
(statearr_24975[(9)] = inst_24959);

return statearr_24975;
})();
var statearr_24976_25040 = state_24966__$1;
(statearr_24976_25040[(2)] = null);

(statearr_24976_25040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (6))){
var inst_24931 = (state_24966[(7)]);
var state_24966__$1 = state_24966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24966__$1,(11),inst_24931);
} else {
if((state_val_24967 === (17))){
var inst_24952 = (state_24966[(2)]);
var state_24966__$1 = state_24966;
if(cljs.core.truth_(inst_24952)){
var statearr_24977_25041 = state_24966__$1;
(statearr_24977_25041[(1)] = (19));

} else {
var statearr_24978_25042 = state_24966__$1;
(statearr_24978_25042[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (3))){
var inst_24964 = (state_24966[(2)]);
var state_24966__$1 = state_24966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24966__$1,inst_24964);
} else {
if((state_val_24967 === (12))){
var inst_24941 = (state_24966[(10)]);
var state_24966__$1 = state_24966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24966__$1,(14),inst_24941);
} else {
if((state_val_24967 === (2))){
var state_24966__$1 = state_24966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24966__$1,(4),results);
} else {
if((state_val_24967 === (19))){
var state_24966__$1 = state_24966;
var statearr_24979_25043 = state_24966__$1;
(statearr_24979_25043[(2)] = null);

(statearr_24979_25043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (11))){
var inst_24941 = (state_24966[(2)]);
var state_24966__$1 = (function (){var statearr_24980 = state_24966;
(statearr_24980[(10)] = inst_24941);

return statearr_24980;
})();
var statearr_24981_25044 = state_24966__$1;
(statearr_24981_25044[(2)] = null);

(statearr_24981_25044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (9))){
var state_24966__$1 = state_24966;
var statearr_24982_25045 = state_24966__$1;
(statearr_24982_25045[(2)] = null);

(statearr_24982_25045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (5))){
var state_24966__$1 = state_24966;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24983_25046 = state_24966__$1;
(statearr_24983_25046[(1)] = (8));

} else {
var statearr_24984_25047 = state_24966__$1;
(statearr_24984_25047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (14))){
var inst_24946 = (state_24966[(11)]);
var inst_24944 = (state_24966[(8)]);
var inst_24944__$1 = (state_24966[(2)]);
var inst_24945 = (inst_24944__$1 == null);
var inst_24946__$1 = cljs.core.not.call(null,inst_24945);
var state_24966__$1 = (function (){var statearr_24985 = state_24966;
(statearr_24985[(11)] = inst_24946__$1);

(statearr_24985[(8)] = inst_24944__$1);

return statearr_24985;
})();
if(inst_24946__$1){
var statearr_24986_25048 = state_24966__$1;
(statearr_24986_25048[(1)] = (15));

} else {
var statearr_24987_25049 = state_24966__$1;
(statearr_24987_25049[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (16))){
var inst_24946 = (state_24966[(11)]);
var state_24966__$1 = state_24966;
var statearr_24988_25050 = state_24966__$1;
(statearr_24988_25050[(2)] = inst_24946);

(statearr_24988_25050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (10))){
var inst_24938 = (state_24966[(2)]);
var state_24966__$1 = state_24966;
var statearr_24989_25051 = state_24966__$1;
(statearr_24989_25051[(2)] = inst_24938);

(statearr_24989_25051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (18))){
var inst_24949 = (state_24966[(2)]);
var state_24966__$1 = state_24966;
var statearr_24990_25052 = state_24966__$1;
(statearr_24990_25052[(2)] = inst_24949);

(statearr_24990_25052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24967 === (8))){
var inst_24935 = cljs.core.async.close_BANG_.call(null,to);
var state_24966__$1 = state_24966;
var statearr_24991_25053 = state_24966__$1;
(statearr_24991_25053[(2)] = inst_24935);

(statearr_24991_25053[(1)] = (10));


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
});})(c__19104__auto__,jobs,results,process,async))
;
return ((function (switch__19042__auto__,c__19104__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0 = (function (){
var statearr_24995 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__);

(statearr_24995[(1)] = (1));

return statearr_24995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1 = (function (state_24966){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_24966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e24996){if((e24996 instanceof Object)){
var ex__19046__auto__ = e24996;
var statearr_24997_25054 = state_24966;
(statearr_24997_25054[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25055 = state_24966;
state_24966 = G__25055;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__ = function(state_24966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1.call(this,state_24966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto__,jobs,results,process,async))
})();
var state__19106__auto__ = (function (){var statearr_24998 = f__19105__auto__.call(null);
(statearr_24998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto__);

return statearr_24998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto__,jobs,results,process,async))
);

return c__19104__auto__;
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
var G__25057 = arguments.length;
switch (G__25057) {
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
var G__25060 = arguments.length;
switch (G__25060) {
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
var G__25063 = arguments.length;
switch (G__25063) {
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
var c__19104__auto___25115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___25115,tc,fc){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___25115,tc,fc){
return (function (state_25089){
var state_val_25090 = (state_25089[(1)]);
if((state_val_25090 === (7))){
var inst_25085 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
var statearr_25091_25116 = state_25089__$1;
(statearr_25091_25116[(2)] = inst_25085);

(statearr_25091_25116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (1))){
var state_25089__$1 = state_25089;
var statearr_25092_25117 = state_25089__$1;
(statearr_25092_25117[(2)] = null);

(statearr_25092_25117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (4))){
var inst_25066 = (state_25089[(7)]);
var inst_25066__$1 = (state_25089[(2)]);
var inst_25067 = (inst_25066__$1 == null);
var state_25089__$1 = (function (){var statearr_25093 = state_25089;
(statearr_25093[(7)] = inst_25066__$1);

return statearr_25093;
})();
if(cljs.core.truth_(inst_25067)){
var statearr_25094_25118 = state_25089__$1;
(statearr_25094_25118[(1)] = (5));

} else {
var statearr_25095_25119 = state_25089__$1;
(statearr_25095_25119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (13))){
var state_25089__$1 = state_25089;
var statearr_25096_25120 = state_25089__$1;
(statearr_25096_25120[(2)] = null);

(statearr_25096_25120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (6))){
var inst_25066 = (state_25089[(7)]);
var inst_25072 = p.call(null,inst_25066);
var state_25089__$1 = state_25089;
if(cljs.core.truth_(inst_25072)){
var statearr_25097_25121 = state_25089__$1;
(statearr_25097_25121[(1)] = (9));

} else {
var statearr_25098_25122 = state_25089__$1;
(statearr_25098_25122[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (3))){
var inst_25087 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25089__$1,inst_25087);
} else {
if((state_val_25090 === (12))){
var state_25089__$1 = state_25089;
var statearr_25099_25123 = state_25089__$1;
(statearr_25099_25123[(2)] = null);

(statearr_25099_25123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (2))){
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25089__$1,(4),ch);
} else {
if((state_val_25090 === (11))){
var inst_25066 = (state_25089[(7)]);
var inst_25076 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25089__$1,(8),inst_25076,inst_25066);
} else {
if((state_val_25090 === (9))){
var state_25089__$1 = state_25089;
var statearr_25100_25124 = state_25089__$1;
(statearr_25100_25124[(2)] = tc);

(statearr_25100_25124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (5))){
var inst_25069 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25070 = cljs.core.async.close_BANG_.call(null,fc);
var state_25089__$1 = (function (){var statearr_25101 = state_25089;
(statearr_25101[(8)] = inst_25069);

return statearr_25101;
})();
var statearr_25102_25125 = state_25089__$1;
(statearr_25102_25125[(2)] = inst_25070);

(statearr_25102_25125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (14))){
var inst_25083 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
var statearr_25103_25126 = state_25089__$1;
(statearr_25103_25126[(2)] = inst_25083);

(statearr_25103_25126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (10))){
var state_25089__$1 = state_25089;
var statearr_25104_25127 = state_25089__$1;
(statearr_25104_25127[(2)] = fc);

(statearr_25104_25127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (8))){
var inst_25078 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
if(cljs.core.truth_(inst_25078)){
var statearr_25105_25128 = state_25089__$1;
(statearr_25105_25128[(1)] = (12));

} else {
var statearr_25106_25129 = state_25089__$1;
(statearr_25106_25129[(1)] = (13));

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
});})(c__19104__auto___25115,tc,fc))
;
return ((function (switch__19042__auto__,c__19104__auto___25115,tc,fc){
return (function() {
var cljs$core$async$state_machine__19043__auto__ = null;
var cljs$core$async$state_machine__19043__auto____0 = (function (){
var statearr_25110 = [null,null,null,null,null,null,null,null,null];
(statearr_25110[(0)] = cljs$core$async$state_machine__19043__auto__);

(statearr_25110[(1)] = (1));

return statearr_25110;
});
var cljs$core$async$state_machine__19043__auto____1 = (function (state_25089){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_25089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e25111){if((e25111 instanceof Object)){
var ex__19046__auto__ = e25111;
var statearr_25112_25130 = state_25089;
(statearr_25112_25130[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25131 = state_25089;
state_25089 = G__25131;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$state_machine__19043__auto__ = function(state_25089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19043__auto____1.call(this,state_25089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19043__auto____0;
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19043__auto____1;
return cljs$core$async$state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___25115,tc,fc))
})();
var state__19106__auto__ = (function (){var statearr_25113 = f__19105__auto__.call(null);
(statearr_25113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___25115);

return statearr_25113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___25115,tc,fc))
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
var c__19104__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto__){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto__){
return (function (state_25178){
var state_val_25179 = (state_25178[(1)]);
if((state_val_25179 === (1))){
var inst_25164 = init;
var state_25178__$1 = (function (){var statearr_25180 = state_25178;
(statearr_25180[(7)] = inst_25164);

return statearr_25180;
})();
var statearr_25181_25196 = state_25178__$1;
(statearr_25181_25196[(2)] = null);

(statearr_25181_25196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (2))){
var state_25178__$1 = state_25178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25178__$1,(4),ch);
} else {
if((state_val_25179 === (3))){
var inst_25176 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25178__$1,inst_25176);
} else {
if((state_val_25179 === (4))){
var inst_25167 = (state_25178[(8)]);
var inst_25167__$1 = (state_25178[(2)]);
var inst_25168 = (inst_25167__$1 == null);
var state_25178__$1 = (function (){var statearr_25182 = state_25178;
(statearr_25182[(8)] = inst_25167__$1);

return statearr_25182;
})();
if(cljs.core.truth_(inst_25168)){
var statearr_25183_25197 = state_25178__$1;
(statearr_25183_25197[(1)] = (5));

} else {
var statearr_25184_25198 = state_25178__$1;
(statearr_25184_25198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (5))){
var inst_25164 = (state_25178[(7)]);
var state_25178__$1 = state_25178;
var statearr_25185_25199 = state_25178__$1;
(statearr_25185_25199[(2)] = inst_25164);

(statearr_25185_25199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (6))){
var inst_25164 = (state_25178[(7)]);
var inst_25167 = (state_25178[(8)]);
var inst_25171 = f.call(null,inst_25164,inst_25167);
var inst_25164__$1 = inst_25171;
var state_25178__$1 = (function (){var statearr_25186 = state_25178;
(statearr_25186[(7)] = inst_25164__$1);

return statearr_25186;
})();
var statearr_25187_25200 = state_25178__$1;
(statearr_25187_25200[(2)] = null);

(statearr_25187_25200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25179 === (7))){
var inst_25174 = (state_25178[(2)]);
var state_25178__$1 = state_25178;
var statearr_25188_25201 = state_25178__$1;
(statearr_25188_25201[(2)] = inst_25174);

(statearr_25188_25201[(1)] = (3));


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
});})(c__19104__auto__))
;
return ((function (switch__19042__auto__,c__19104__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19043__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19043__auto____0 = (function (){
var statearr_25192 = [null,null,null,null,null,null,null,null,null];
(statearr_25192[(0)] = cljs$core$async$reduce_$_state_machine__19043__auto__);

(statearr_25192[(1)] = (1));

return statearr_25192;
});
var cljs$core$async$reduce_$_state_machine__19043__auto____1 = (function (state_25178){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_25178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e25193){if((e25193 instanceof Object)){
var ex__19046__auto__ = e25193;
var statearr_25194_25202 = state_25178;
(statearr_25194_25202[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25203 = state_25178;
state_25178 = G__25203;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19043__auto__ = function(state_25178){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19043__auto____1.call(this,state_25178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19043__auto____0;
cljs$core$async$reduce_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19043__auto____1;
return cljs$core$async$reduce_$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto__))
})();
var state__19106__auto__ = (function (){var statearr_25195 = f__19105__auto__.call(null);
(statearr_25195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto__);

return statearr_25195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto__))
);

return c__19104__auto__;
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
var G__25205 = arguments.length;
switch (G__25205) {
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
var c__19104__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto__){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto__){
return (function (state_25230){
var state_val_25231 = (state_25230[(1)]);
if((state_val_25231 === (7))){
var inst_25212 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25232_25256 = state_25230__$1;
(statearr_25232_25256[(2)] = inst_25212);

(statearr_25232_25256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (1))){
var inst_25206 = cljs.core.seq.call(null,coll);
var inst_25207 = inst_25206;
var state_25230__$1 = (function (){var statearr_25233 = state_25230;
(statearr_25233[(7)] = inst_25207);

return statearr_25233;
})();
var statearr_25234_25257 = state_25230__$1;
(statearr_25234_25257[(2)] = null);

(statearr_25234_25257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (4))){
var inst_25207 = (state_25230[(7)]);
var inst_25210 = cljs.core.first.call(null,inst_25207);
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25230__$1,(7),ch,inst_25210);
} else {
if((state_val_25231 === (13))){
var inst_25224 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25235_25258 = state_25230__$1;
(statearr_25235_25258[(2)] = inst_25224);

(statearr_25235_25258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (6))){
var inst_25215 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
if(cljs.core.truth_(inst_25215)){
var statearr_25236_25259 = state_25230__$1;
(statearr_25236_25259[(1)] = (8));

} else {
var statearr_25237_25260 = state_25230__$1;
(statearr_25237_25260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (3))){
var inst_25228 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25230__$1,inst_25228);
} else {
if((state_val_25231 === (12))){
var state_25230__$1 = state_25230;
var statearr_25238_25261 = state_25230__$1;
(statearr_25238_25261[(2)] = null);

(statearr_25238_25261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (2))){
var inst_25207 = (state_25230[(7)]);
var state_25230__$1 = state_25230;
if(cljs.core.truth_(inst_25207)){
var statearr_25239_25262 = state_25230__$1;
(statearr_25239_25262[(1)] = (4));

} else {
var statearr_25240_25263 = state_25230__$1;
(statearr_25240_25263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (11))){
var inst_25221 = cljs.core.async.close_BANG_.call(null,ch);
var state_25230__$1 = state_25230;
var statearr_25241_25264 = state_25230__$1;
(statearr_25241_25264[(2)] = inst_25221);

(statearr_25241_25264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (9))){
var state_25230__$1 = state_25230;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25242_25265 = state_25230__$1;
(statearr_25242_25265[(1)] = (11));

} else {
var statearr_25243_25266 = state_25230__$1;
(statearr_25243_25266[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (5))){
var inst_25207 = (state_25230[(7)]);
var state_25230__$1 = state_25230;
var statearr_25244_25267 = state_25230__$1;
(statearr_25244_25267[(2)] = inst_25207);

(statearr_25244_25267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (10))){
var inst_25226 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25245_25268 = state_25230__$1;
(statearr_25245_25268[(2)] = inst_25226);

(statearr_25245_25268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (8))){
var inst_25207 = (state_25230[(7)]);
var inst_25217 = cljs.core.next.call(null,inst_25207);
var inst_25207__$1 = inst_25217;
var state_25230__$1 = (function (){var statearr_25246 = state_25230;
(statearr_25246[(7)] = inst_25207__$1);

return statearr_25246;
})();
var statearr_25247_25269 = state_25230__$1;
(statearr_25247_25269[(2)] = null);

(statearr_25247_25269[(1)] = (2));


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
});})(c__19104__auto__))
;
return ((function (switch__19042__auto__,c__19104__auto__){
return (function() {
var cljs$core$async$state_machine__19043__auto__ = null;
var cljs$core$async$state_machine__19043__auto____0 = (function (){
var statearr_25251 = [null,null,null,null,null,null,null,null];
(statearr_25251[(0)] = cljs$core$async$state_machine__19043__auto__);

(statearr_25251[(1)] = (1));

return statearr_25251;
});
var cljs$core$async$state_machine__19043__auto____1 = (function (state_25230){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_25230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e25252){if((e25252 instanceof Object)){
var ex__19046__auto__ = e25252;
var statearr_25253_25270 = state_25230;
(statearr_25253_25270[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25271 = state_25230;
state_25230 = G__25271;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$state_machine__19043__auto__ = function(state_25230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19043__auto____1.call(this,state_25230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19043__auto____0;
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19043__auto____1;
return cljs$core$async$state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto__))
})();
var state__19106__auto__ = (function (){var statearr_25254 = f__19105__auto__.call(null);
(statearr_25254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto__);

return statearr_25254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto__))
);

return c__19104__auto__;
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

cljs.core.async.Mux = (function (){var obj25273 = {};
return obj25273;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16082__auto__ = _;
if(and__16082__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16082__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16730__auto__ = (((_ == null))?null:_);
return (function (){var or__16094__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25275 = {};
return obj25275;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16082__auto__ = m;
if(and__16082__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16082__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16730__auto__ = (((m == null))?null:m);
return (function (){var or__16094__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16082__auto__ = m;
if(and__16082__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16082__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16730__auto__ = (((m == null))?null:m);
return (function (){var or__16094__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16082__auto__ = m;
if(and__16082__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16082__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16730__auto__ = (((m == null))?null:m);
return (function (){var or__16094__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
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
if(typeof cljs.core.async.t25497 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25497 = (function (mult,ch,cs,meta25498){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25498 = meta25498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25499,meta25498__$1){
var self__ = this;
var _25499__$1 = this;
return (new cljs.core.async.t25497(self__.mult,self__.ch,self__.cs,meta25498__$1));
});})(cs))
;

cljs.core.async.t25497.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25499){
var self__ = this;
var _25499__$1 = this;
return self__.meta25498;
});})(cs))
;

cljs.core.async.t25497.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25497.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25497.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25497.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25497.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25497.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25497.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25498","meta25498",850766451,null)], null);
});})(cs))
;

cljs.core.async.t25497.cljs$lang$type = true;

cljs.core.async.t25497.cljs$lang$ctorStr = "cljs.core.async/t25497";

cljs.core.async.t25497.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16673__auto__,writer__16674__auto__,opt__16675__auto__){
return cljs.core._write.call(null,writer__16674__auto__,"cljs.core.async/t25497");
});})(cs))
;

cljs.core.async.__GT_t25497 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25497(mult__$1,ch__$1,cs__$1,meta25498){
return (new cljs.core.async.t25497(mult__$1,ch__$1,cs__$1,meta25498));
});})(cs))
;

}

return (new cljs.core.async.t25497(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19104__auto___25718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___25718,cs,m,dchan,dctr,done){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___25718,cs,m,dchan,dctr,done){
return (function (state_25630){
var state_val_25631 = (state_25630[(1)]);
if((state_val_25631 === (7))){
var inst_25626 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25632_25719 = state_25630__$1;
(statearr_25632_25719[(2)] = inst_25626);

(statearr_25632_25719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (20))){
var inst_25531 = (state_25630[(7)]);
var inst_25541 = cljs.core.first.call(null,inst_25531);
var inst_25542 = cljs.core.nth.call(null,inst_25541,(0),null);
var inst_25543 = cljs.core.nth.call(null,inst_25541,(1),null);
var state_25630__$1 = (function (){var statearr_25633 = state_25630;
(statearr_25633[(8)] = inst_25542);

return statearr_25633;
})();
if(cljs.core.truth_(inst_25543)){
var statearr_25634_25720 = state_25630__$1;
(statearr_25634_25720[(1)] = (22));

} else {
var statearr_25635_25721 = state_25630__$1;
(statearr_25635_25721[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (27))){
var inst_25571 = (state_25630[(9)]);
var inst_25502 = (state_25630[(10)]);
var inst_25573 = (state_25630[(11)]);
var inst_25578 = (state_25630[(12)]);
var inst_25578__$1 = cljs.core._nth.call(null,inst_25571,inst_25573);
var inst_25579 = cljs.core.async.put_BANG_.call(null,inst_25578__$1,inst_25502,done);
var state_25630__$1 = (function (){var statearr_25636 = state_25630;
(statearr_25636[(12)] = inst_25578__$1);

return statearr_25636;
})();
if(cljs.core.truth_(inst_25579)){
var statearr_25637_25722 = state_25630__$1;
(statearr_25637_25722[(1)] = (30));

} else {
var statearr_25638_25723 = state_25630__$1;
(statearr_25638_25723[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (1))){
var state_25630__$1 = state_25630;
var statearr_25639_25724 = state_25630__$1;
(statearr_25639_25724[(2)] = null);

(statearr_25639_25724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (24))){
var inst_25531 = (state_25630[(7)]);
var inst_25548 = (state_25630[(2)]);
var inst_25549 = cljs.core.next.call(null,inst_25531);
var inst_25511 = inst_25549;
var inst_25512 = null;
var inst_25513 = (0);
var inst_25514 = (0);
var state_25630__$1 = (function (){var statearr_25640 = state_25630;
(statearr_25640[(13)] = inst_25513);

(statearr_25640[(14)] = inst_25512);

(statearr_25640[(15)] = inst_25514);

(statearr_25640[(16)] = inst_25548);

(statearr_25640[(17)] = inst_25511);

return statearr_25640;
})();
var statearr_25641_25725 = state_25630__$1;
(statearr_25641_25725[(2)] = null);

(statearr_25641_25725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (39))){
var state_25630__$1 = state_25630;
var statearr_25645_25726 = state_25630__$1;
(statearr_25645_25726[(2)] = null);

(statearr_25645_25726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (4))){
var inst_25502 = (state_25630[(10)]);
var inst_25502__$1 = (state_25630[(2)]);
var inst_25503 = (inst_25502__$1 == null);
var state_25630__$1 = (function (){var statearr_25646 = state_25630;
(statearr_25646[(10)] = inst_25502__$1);

return statearr_25646;
})();
if(cljs.core.truth_(inst_25503)){
var statearr_25647_25727 = state_25630__$1;
(statearr_25647_25727[(1)] = (5));

} else {
var statearr_25648_25728 = state_25630__$1;
(statearr_25648_25728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (15))){
var inst_25513 = (state_25630[(13)]);
var inst_25512 = (state_25630[(14)]);
var inst_25514 = (state_25630[(15)]);
var inst_25511 = (state_25630[(17)]);
var inst_25527 = (state_25630[(2)]);
var inst_25528 = (inst_25514 + (1));
var tmp25642 = inst_25513;
var tmp25643 = inst_25512;
var tmp25644 = inst_25511;
var inst_25511__$1 = tmp25644;
var inst_25512__$1 = tmp25643;
var inst_25513__$1 = tmp25642;
var inst_25514__$1 = inst_25528;
var state_25630__$1 = (function (){var statearr_25649 = state_25630;
(statearr_25649[(13)] = inst_25513__$1);

(statearr_25649[(14)] = inst_25512__$1);

(statearr_25649[(15)] = inst_25514__$1);

(statearr_25649[(17)] = inst_25511__$1);

(statearr_25649[(18)] = inst_25527);

return statearr_25649;
})();
var statearr_25650_25729 = state_25630__$1;
(statearr_25650_25729[(2)] = null);

(statearr_25650_25729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (21))){
var inst_25552 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25654_25730 = state_25630__$1;
(statearr_25654_25730[(2)] = inst_25552);

(statearr_25654_25730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (31))){
var inst_25578 = (state_25630[(12)]);
var inst_25582 = done.call(null,null);
var inst_25583 = cljs.core.async.untap_STAR_.call(null,m,inst_25578);
var state_25630__$1 = (function (){var statearr_25655 = state_25630;
(statearr_25655[(19)] = inst_25582);

return statearr_25655;
})();
var statearr_25656_25731 = state_25630__$1;
(statearr_25656_25731[(2)] = inst_25583);

(statearr_25656_25731[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (32))){
var inst_25571 = (state_25630[(9)]);
var inst_25573 = (state_25630[(11)]);
var inst_25570 = (state_25630[(20)]);
var inst_25572 = (state_25630[(21)]);
var inst_25585 = (state_25630[(2)]);
var inst_25586 = (inst_25573 + (1));
var tmp25651 = inst_25571;
var tmp25652 = inst_25570;
var tmp25653 = inst_25572;
var inst_25570__$1 = tmp25652;
var inst_25571__$1 = tmp25651;
var inst_25572__$1 = tmp25653;
var inst_25573__$1 = inst_25586;
var state_25630__$1 = (function (){var statearr_25657 = state_25630;
(statearr_25657[(9)] = inst_25571__$1);

(statearr_25657[(11)] = inst_25573__$1);

(statearr_25657[(20)] = inst_25570__$1);

(statearr_25657[(21)] = inst_25572__$1);

(statearr_25657[(22)] = inst_25585);

return statearr_25657;
})();
var statearr_25658_25732 = state_25630__$1;
(statearr_25658_25732[(2)] = null);

(statearr_25658_25732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (40))){
var inst_25598 = (state_25630[(23)]);
var inst_25602 = done.call(null,null);
var inst_25603 = cljs.core.async.untap_STAR_.call(null,m,inst_25598);
var state_25630__$1 = (function (){var statearr_25659 = state_25630;
(statearr_25659[(24)] = inst_25602);

return statearr_25659;
})();
var statearr_25660_25733 = state_25630__$1;
(statearr_25660_25733[(2)] = inst_25603);

(statearr_25660_25733[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (33))){
var inst_25589 = (state_25630[(25)]);
var inst_25591 = cljs.core.chunked_seq_QMARK_.call(null,inst_25589);
var state_25630__$1 = state_25630;
if(inst_25591){
var statearr_25661_25734 = state_25630__$1;
(statearr_25661_25734[(1)] = (36));

} else {
var statearr_25662_25735 = state_25630__$1;
(statearr_25662_25735[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (13))){
var inst_25521 = (state_25630[(26)]);
var inst_25524 = cljs.core.async.close_BANG_.call(null,inst_25521);
var state_25630__$1 = state_25630;
var statearr_25663_25736 = state_25630__$1;
(statearr_25663_25736[(2)] = inst_25524);

(statearr_25663_25736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (22))){
var inst_25542 = (state_25630[(8)]);
var inst_25545 = cljs.core.async.close_BANG_.call(null,inst_25542);
var state_25630__$1 = state_25630;
var statearr_25664_25737 = state_25630__$1;
(statearr_25664_25737[(2)] = inst_25545);

(statearr_25664_25737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (36))){
var inst_25589 = (state_25630[(25)]);
var inst_25593 = cljs.core.chunk_first.call(null,inst_25589);
var inst_25594 = cljs.core.chunk_rest.call(null,inst_25589);
var inst_25595 = cljs.core.count.call(null,inst_25593);
var inst_25570 = inst_25594;
var inst_25571 = inst_25593;
var inst_25572 = inst_25595;
var inst_25573 = (0);
var state_25630__$1 = (function (){var statearr_25665 = state_25630;
(statearr_25665[(9)] = inst_25571);

(statearr_25665[(11)] = inst_25573);

(statearr_25665[(20)] = inst_25570);

(statearr_25665[(21)] = inst_25572);

return statearr_25665;
})();
var statearr_25666_25738 = state_25630__$1;
(statearr_25666_25738[(2)] = null);

(statearr_25666_25738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (41))){
var inst_25589 = (state_25630[(25)]);
var inst_25605 = (state_25630[(2)]);
var inst_25606 = cljs.core.next.call(null,inst_25589);
var inst_25570 = inst_25606;
var inst_25571 = null;
var inst_25572 = (0);
var inst_25573 = (0);
var state_25630__$1 = (function (){var statearr_25667 = state_25630;
(statearr_25667[(9)] = inst_25571);

(statearr_25667[(11)] = inst_25573);

(statearr_25667[(27)] = inst_25605);

(statearr_25667[(20)] = inst_25570);

(statearr_25667[(21)] = inst_25572);

return statearr_25667;
})();
var statearr_25668_25739 = state_25630__$1;
(statearr_25668_25739[(2)] = null);

(statearr_25668_25739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (43))){
var state_25630__$1 = state_25630;
var statearr_25669_25740 = state_25630__$1;
(statearr_25669_25740[(2)] = null);

(statearr_25669_25740[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (29))){
var inst_25614 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25670_25741 = state_25630__$1;
(statearr_25670_25741[(2)] = inst_25614);

(statearr_25670_25741[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (44))){
var inst_25623 = (state_25630[(2)]);
var state_25630__$1 = (function (){var statearr_25671 = state_25630;
(statearr_25671[(28)] = inst_25623);

return statearr_25671;
})();
var statearr_25672_25742 = state_25630__$1;
(statearr_25672_25742[(2)] = null);

(statearr_25672_25742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (6))){
var inst_25562 = (state_25630[(29)]);
var inst_25561 = cljs.core.deref.call(null,cs);
var inst_25562__$1 = cljs.core.keys.call(null,inst_25561);
var inst_25563 = cljs.core.count.call(null,inst_25562__$1);
var inst_25564 = cljs.core.reset_BANG_.call(null,dctr,inst_25563);
var inst_25569 = cljs.core.seq.call(null,inst_25562__$1);
var inst_25570 = inst_25569;
var inst_25571 = null;
var inst_25572 = (0);
var inst_25573 = (0);
var state_25630__$1 = (function (){var statearr_25673 = state_25630;
(statearr_25673[(9)] = inst_25571);

(statearr_25673[(11)] = inst_25573);

(statearr_25673[(29)] = inst_25562__$1);

(statearr_25673[(30)] = inst_25564);

(statearr_25673[(20)] = inst_25570);

(statearr_25673[(21)] = inst_25572);

return statearr_25673;
})();
var statearr_25674_25743 = state_25630__$1;
(statearr_25674_25743[(2)] = null);

(statearr_25674_25743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (28))){
var inst_25570 = (state_25630[(20)]);
var inst_25589 = (state_25630[(25)]);
var inst_25589__$1 = cljs.core.seq.call(null,inst_25570);
var state_25630__$1 = (function (){var statearr_25675 = state_25630;
(statearr_25675[(25)] = inst_25589__$1);

return statearr_25675;
})();
if(inst_25589__$1){
var statearr_25676_25744 = state_25630__$1;
(statearr_25676_25744[(1)] = (33));

} else {
var statearr_25677_25745 = state_25630__$1;
(statearr_25677_25745[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (25))){
var inst_25573 = (state_25630[(11)]);
var inst_25572 = (state_25630[(21)]);
var inst_25575 = (inst_25573 < inst_25572);
var inst_25576 = inst_25575;
var state_25630__$1 = state_25630;
if(cljs.core.truth_(inst_25576)){
var statearr_25678_25746 = state_25630__$1;
(statearr_25678_25746[(1)] = (27));

} else {
var statearr_25679_25747 = state_25630__$1;
(statearr_25679_25747[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (34))){
var state_25630__$1 = state_25630;
var statearr_25680_25748 = state_25630__$1;
(statearr_25680_25748[(2)] = null);

(statearr_25680_25748[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (17))){
var state_25630__$1 = state_25630;
var statearr_25681_25749 = state_25630__$1;
(statearr_25681_25749[(2)] = null);

(statearr_25681_25749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (3))){
var inst_25628 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25630__$1,inst_25628);
} else {
if((state_val_25631 === (12))){
var inst_25557 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25682_25750 = state_25630__$1;
(statearr_25682_25750[(2)] = inst_25557);

(statearr_25682_25750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (2))){
var state_25630__$1 = state_25630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25630__$1,(4),ch);
} else {
if((state_val_25631 === (23))){
var state_25630__$1 = state_25630;
var statearr_25683_25751 = state_25630__$1;
(statearr_25683_25751[(2)] = null);

(statearr_25683_25751[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (35))){
var inst_25612 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25684_25752 = state_25630__$1;
(statearr_25684_25752[(2)] = inst_25612);

(statearr_25684_25752[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (19))){
var inst_25531 = (state_25630[(7)]);
var inst_25535 = cljs.core.chunk_first.call(null,inst_25531);
var inst_25536 = cljs.core.chunk_rest.call(null,inst_25531);
var inst_25537 = cljs.core.count.call(null,inst_25535);
var inst_25511 = inst_25536;
var inst_25512 = inst_25535;
var inst_25513 = inst_25537;
var inst_25514 = (0);
var state_25630__$1 = (function (){var statearr_25685 = state_25630;
(statearr_25685[(13)] = inst_25513);

(statearr_25685[(14)] = inst_25512);

(statearr_25685[(15)] = inst_25514);

(statearr_25685[(17)] = inst_25511);

return statearr_25685;
})();
var statearr_25686_25753 = state_25630__$1;
(statearr_25686_25753[(2)] = null);

(statearr_25686_25753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (11))){
var inst_25531 = (state_25630[(7)]);
var inst_25511 = (state_25630[(17)]);
var inst_25531__$1 = cljs.core.seq.call(null,inst_25511);
var state_25630__$1 = (function (){var statearr_25687 = state_25630;
(statearr_25687[(7)] = inst_25531__$1);

return statearr_25687;
})();
if(inst_25531__$1){
var statearr_25688_25754 = state_25630__$1;
(statearr_25688_25754[(1)] = (16));

} else {
var statearr_25689_25755 = state_25630__$1;
(statearr_25689_25755[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (9))){
var inst_25559 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25690_25756 = state_25630__$1;
(statearr_25690_25756[(2)] = inst_25559);

(statearr_25690_25756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (5))){
var inst_25509 = cljs.core.deref.call(null,cs);
var inst_25510 = cljs.core.seq.call(null,inst_25509);
var inst_25511 = inst_25510;
var inst_25512 = null;
var inst_25513 = (0);
var inst_25514 = (0);
var state_25630__$1 = (function (){var statearr_25691 = state_25630;
(statearr_25691[(13)] = inst_25513);

(statearr_25691[(14)] = inst_25512);

(statearr_25691[(15)] = inst_25514);

(statearr_25691[(17)] = inst_25511);

return statearr_25691;
})();
var statearr_25692_25757 = state_25630__$1;
(statearr_25692_25757[(2)] = null);

(statearr_25692_25757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (14))){
var state_25630__$1 = state_25630;
var statearr_25693_25758 = state_25630__$1;
(statearr_25693_25758[(2)] = null);

(statearr_25693_25758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (45))){
var inst_25620 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25694_25759 = state_25630__$1;
(statearr_25694_25759[(2)] = inst_25620);

(statearr_25694_25759[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (26))){
var inst_25562 = (state_25630[(29)]);
var inst_25616 = (state_25630[(2)]);
var inst_25617 = cljs.core.seq.call(null,inst_25562);
var state_25630__$1 = (function (){var statearr_25695 = state_25630;
(statearr_25695[(31)] = inst_25616);

return statearr_25695;
})();
if(inst_25617){
var statearr_25696_25760 = state_25630__$1;
(statearr_25696_25760[(1)] = (42));

} else {
var statearr_25697_25761 = state_25630__$1;
(statearr_25697_25761[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (16))){
var inst_25531 = (state_25630[(7)]);
var inst_25533 = cljs.core.chunked_seq_QMARK_.call(null,inst_25531);
var state_25630__$1 = state_25630;
if(inst_25533){
var statearr_25698_25762 = state_25630__$1;
(statearr_25698_25762[(1)] = (19));

} else {
var statearr_25699_25763 = state_25630__$1;
(statearr_25699_25763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (38))){
var inst_25609 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25700_25764 = state_25630__$1;
(statearr_25700_25764[(2)] = inst_25609);

(statearr_25700_25764[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (30))){
var state_25630__$1 = state_25630;
var statearr_25701_25765 = state_25630__$1;
(statearr_25701_25765[(2)] = null);

(statearr_25701_25765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (10))){
var inst_25512 = (state_25630[(14)]);
var inst_25514 = (state_25630[(15)]);
var inst_25520 = cljs.core._nth.call(null,inst_25512,inst_25514);
var inst_25521 = cljs.core.nth.call(null,inst_25520,(0),null);
var inst_25522 = cljs.core.nth.call(null,inst_25520,(1),null);
var state_25630__$1 = (function (){var statearr_25702 = state_25630;
(statearr_25702[(26)] = inst_25521);

return statearr_25702;
})();
if(cljs.core.truth_(inst_25522)){
var statearr_25703_25766 = state_25630__$1;
(statearr_25703_25766[(1)] = (13));

} else {
var statearr_25704_25767 = state_25630__$1;
(statearr_25704_25767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (18))){
var inst_25555 = (state_25630[(2)]);
var state_25630__$1 = state_25630;
var statearr_25705_25768 = state_25630__$1;
(statearr_25705_25768[(2)] = inst_25555);

(statearr_25705_25768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (42))){
var state_25630__$1 = state_25630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25630__$1,(45),dchan);
} else {
if((state_val_25631 === (37))){
var inst_25502 = (state_25630[(10)]);
var inst_25598 = (state_25630[(23)]);
var inst_25589 = (state_25630[(25)]);
var inst_25598__$1 = cljs.core.first.call(null,inst_25589);
var inst_25599 = cljs.core.async.put_BANG_.call(null,inst_25598__$1,inst_25502,done);
var state_25630__$1 = (function (){var statearr_25706 = state_25630;
(statearr_25706[(23)] = inst_25598__$1);

return statearr_25706;
})();
if(cljs.core.truth_(inst_25599)){
var statearr_25707_25769 = state_25630__$1;
(statearr_25707_25769[(1)] = (39));

} else {
var statearr_25708_25770 = state_25630__$1;
(statearr_25708_25770[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25631 === (8))){
var inst_25513 = (state_25630[(13)]);
var inst_25514 = (state_25630[(15)]);
var inst_25516 = (inst_25514 < inst_25513);
var inst_25517 = inst_25516;
var state_25630__$1 = state_25630;
if(cljs.core.truth_(inst_25517)){
var statearr_25709_25771 = state_25630__$1;
(statearr_25709_25771[(1)] = (10));

} else {
var statearr_25710_25772 = state_25630__$1;
(statearr_25710_25772[(1)] = (11));

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
});})(c__19104__auto___25718,cs,m,dchan,dctr,done))
;
return ((function (switch__19042__auto__,c__19104__auto___25718,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19043__auto__ = null;
var cljs$core$async$mult_$_state_machine__19043__auto____0 = (function (){
var statearr_25714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25714[(0)] = cljs$core$async$mult_$_state_machine__19043__auto__);

(statearr_25714[(1)] = (1));

return statearr_25714;
});
var cljs$core$async$mult_$_state_machine__19043__auto____1 = (function (state_25630){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_25630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e25715){if((e25715 instanceof Object)){
var ex__19046__auto__ = e25715;
var statearr_25716_25773 = state_25630;
(statearr_25716_25773[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25774 = state_25630;
state_25630 = G__25774;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19043__auto__ = function(state_25630){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19043__auto____1.call(this,state_25630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19043__auto____0;
cljs$core$async$mult_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19043__auto____1;
return cljs$core$async$mult_$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___25718,cs,m,dchan,dctr,done))
})();
var state__19106__auto__ = (function (){var statearr_25717 = f__19105__auto__.call(null);
(statearr_25717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___25718);

return statearr_25717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___25718,cs,m,dchan,dctr,done))
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
var G__25776 = arguments.length;
switch (G__25776) {
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

cljs.core.async.Mix = (function (){var obj25779 = {};
return obj25779;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16082__auto__ = m;
if(and__16082__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16082__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16730__auto__ = (((m == null))?null:m);
return (function (){var or__16094__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16082__auto__ = m;
if(and__16082__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16082__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16730__auto__ = (((m == null))?null:m);
return (function (){var or__16094__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16082__auto__ = m;
if(and__16082__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16082__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16730__auto__ = (((m == null))?null:m);
return (function (){var or__16094__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16082__auto__ = m;
if(and__16082__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16082__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16730__auto__ = (((m == null))?null:m);
return (function (){var or__16094__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16082__auto__ = m;
if(and__16082__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16082__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16730__auto__ = (((m == null))?null:m);
return (function (){var or__16094__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17134__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17134__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25784){
var map__25785 = p__25784;
var map__25785__$1 = ((cljs.core.seq_QMARK_.call(null,map__25785))?cljs.core.apply.call(null,cljs.core.hash_map,map__25785):map__25785);
var opts = map__25785__$1;
var statearr_25786_25789 = state;
(statearr_25786_25789[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25785,map__25785__$1,opts){
return (function (val){
var statearr_25787_25790 = state;
(statearr_25787_25790[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25785,map__25785__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25788_25791 = state;
(statearr_25788_25791[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25780){
var G__25781 = cljs.core.first.call(null,seq25780);
var seq25780__$1 = cljs.core.next.call(null,seq25780);
var G__25782 = cljs.core.first.call(null,seq25780__$1);
var seq25780__$2 = cljs.core.next.call(null,seq25780__$1);
var G__25783 = cljs.core.first.call(null,seq25780__$2);
var seq25780__$3 = cljs.core.next.call(null,seq25780__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25781,G__25782,G__25783,seq25780__$3);
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
if(typeof cljs.core.async.t25911 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25911 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25912){
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
this.meta25912 = meta25912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25913,meta25912__$1){
var self__ = this;
var _25913__$1 = this;
return (new cljs.core.async.t25911(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25912__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25911.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25913){
var self__ = this;
var _25913__$1 = this;
return self__.meta25912;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25911.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25911.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25911.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25911.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25911.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25911.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25911.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25911.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t25911.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25912","meta25912",-1297589359,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25911.cljs$lang$type = true;

cljs.core.async.t25911.cljs$lang$ctorStr = "cljs.core.async/t25911";

cljs.core.async.t25911.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16673__auto__,writer__16674__auto__,opt__16675__auto__){
return cljs.core._write.call(null,writer__16674__auto__,"cljs.core.async/t25911");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25911 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t25911(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25912){
return (new cljs.core.async.t25911(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25912));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25911(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19104__auto___26030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___26030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___26030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25983){
var state_val_25984 = (state_25983[(1)]);
if((state_val_25984 === (7))){
var inst_25927 = (state_25983[(7)]);
var inst_25932 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25927);
var state_25983__$1 = state_25983;
var statearr_25985_26031 = state_25983__$1;
(statearr_25985_26031[(2)] = inst_25932);

(statearr_25985_26031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (20))){
var inst_25942 = (state_25983[(8)]);
var state_25983__$1 = state_25983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25983__$1,(23),out,inst_25942);
} else {
if((state_val_25984 === (1))){
var inst_25917 = (state_25983[(9)]);
var inst_25917__$1 = calc_state.call(null);
var inst_25918 = cljs.core.seq_QMARK_.call(null,inst_25917__$1);
var state_25983__$1 = (function (){var statearr_25986 = state_25983;
(statearr_25986[(9)] = inst_25917__$1);

return statearr_25986;
})();
if(inst_25918){
var statearr_25987_26032 = state_25983__$1;
(statearr_25987_26032[(1)] = (2));

} else {
var statearr_25988_26033 = state_25983__$1;
(statearr_25988_26033[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (24))){
var inst_25935 = (state_25983[(10)]);
var inst_25927 = inst_25935;
var state_25983__$1 = (function (){var statearr_25989 = state_25983;
(statearr_25989[(7)] = inst_25927);

return statearr_25989;
})();
var statearr_25990_26034 = state_25983__$1;
(statearr_25990_26034[(2)] = null);

(statearr_25990_26034[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (4))){
var inst_25917 = (state_25983[(9)]);
var inst_25923 = (state_25983[(2)]);
var inst_25924 = cljs.core.get.call(null,inst_25923,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25925 = cljs.core.get.call(null,inst_25923,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25926 = cljs.core.get.call(null,inst_25923,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25927 = inst_25917;
var state_25983__$1 = (function (){var statearr_25991 = state_25983;
(statearr_25991[(11)] = inst_25926);

(statearr_25991[(12)] = inst_25924);

(statearr_25991[(7)] = inst_25927);

(statearr_25991[(13)] = inst_25925);

return statearr_25991;
})();
var statearr_25992_26035 = state_25983__$1;
(statearr_25992_26035[(2)] = null);

(statearr_25992_26035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (15))){
var state_25983__$1 = state_25983;
var statearr_25993_26036 = state_25983__$1;
(statearr_25993_26036[(2)] = null);

(statearr_25993_26036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (21))){
var inst_25935 = (state_25983[(10)]);
var inst_25927 = inst_25935;
var state_25983__$1 = (function (){var statearr_25994 = state_25983;
(statearr_25994[(7)] = inst_25927);

return statearr_25994;
})();
var statearr_25995_26037 = state_25983__$1;
(statearr_25995_26037[(2)] = null);

(statearr_25995_26037[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (13))){
var inst_25979 = (state_25983[(2)]);
var state_25983__$1 = state_25983;
var statearr_25996_26038 = state_25983__$1;
(statearr_25996_26038[(2)] = inst_25979);

(statearr_25996_26038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (22))){
var inst_25977 = (state_25983[(2)]);
var state_25983__$1 = state_25983;
var statearr_25997_26039 = state_25983__$1;
(statearr_25997_26039[(2)] = inst_25977);

(statearr_25997_26039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (6))){
var inst_25981 = (state_25983[(2)]);
var state_25983__$1 = state_25983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25983__$1,inst_25981);
} else {
if((state_val_25984 === (25))){
var state_25983__$1 = state_25983;
var statearr_25998_26040 = state_25983__$1;
(statearr_25998_26040[(2)] = null);

(statearr_25998_26040[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (17))){
var inst_25957 = (state_25983[(14)]);
var state_25983__$1 = state_25983;
var statearr_25999_26041 = state_25983__$1;
(statearr_25999_26041[(2)] = inst_25957);

(statearr_25999_26041[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (3))){
var inst_25917 = (state_25983[(9)]);
var state_25983__$1 = state_25983;
var statearr_26000_26042 = state_25983__$1;
(statearr_26000_26042[(2)] = inst_25917);

(statearr_26000_26042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (12))){
var inst_25936 = (state_25983[(15)]);
var inst_25943 = (state_25983[(16)]);
var inst_25957 = (state_25983[(14)]);
var inst_25957__$1 = inst_25936.call(null,inst_25943);
var state_25983__$1 = (function (){var statearr_26001 = state_25983;
(statearr_26001[(14)] = inst_25957__$1);

return statearr_26001;
})();
if(cljs.core.truth_(inst_25957__$1)){
var statearr_26002_26043 = state_25983__$1;
(statearr_26002_26043[(1)] = (17));

} else {
var statearr_26003_26044 = state_25983__$1;
(statearr_26003_26044[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (2))){
var inst_25917 = (state_25983[(9)]);
var inst_25920 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25917);
var state_25983__$1 = state_25983;
var statearr_26004_26045 = state_25983__$1;
(statearr_26004_26045[(2)] = inst_25920);

(statearr_26004_26045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (23))){
var inst_25968 = (state_25983[(2)]);
var state_25983__$1 = state_25983;
if(cljs.core.truth_(inst_25968)){
var statearr_26005_26046 = state_25983__$1;
(statearr_26005_26046[(1)] = (24));

} else {
var statearr_26006_26047 = state_25983__$1;
(statearr_26006_26047[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (19))){
var inst_25965 = (state_25983[(2)]);
var state_25983__$1 = state_25983;
if(cljs.core.truth_(inst_25965)){
var statearr_26007_26048 = state_25983__$1;
(statearr_26007_26048[(1)] = (20));

} else {
var statearr_26008_26049 = state_25983__$1;
(statearr_26008_26049[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (11))){
var inst_25942 = (state_25983[(8)]);
var inst_25948 = (inst_25942 == null);
var state_25983__$1 = state_25983;
if(cljs.core.truth_(inst_25948)){
var statearr_26009_26050 = state_25983__$1;
(statearr_26009_26050[(1)] = (14));

} else {
var statearr_26010_26051 = state_25983__$1;
(statearr_26010_26051[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (9))){
var inst_25935 = (state_25983[(10)]);
var inst_25935__$1 = (state_25983[(2)]);
var inst_25936 = cljs.core.get.call(null,inst_25935__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25937 = cljs.core.get.call(null,inst_25935__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25938 = cljs.core.get.call(null,inst_25935__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25983__$1 = (function (){var statearr_26011 = state_25983;
(statearr_26011[(17)] = inst_25937);

(statearr_26011[(15)] = inst_25936);

(statearr_26011[(10)] = inst_25935__$1);

return statearr_26011;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25983__$1,(10),inst_25938);
} else {
if((state_val_25984 === (5))){
var inst_25927 = (state_25983[(7)]);
var inst_25930 = cljs.core.seq_QMARK_.call(null,inst_25927);
var state_25983__$1 = state_25983;
if(inst_25930){
var statearr_26012_26052 = state_25983__$1;
(statearr_26012_26052[(1)] = (7));

} else {
var statearr_26013_26053 = state_25983__$1;
(statearr_26013_26053[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (14))){
var inst_25943 = (state_25983[(16)]);
var inst_25950 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25943);
var state_25983__$1 = state_25983;
var statearr_26014_26054 = state_25983__$1;
(statearr_26014_26054[(2)] = inst_25950);

(statearr_26014_26054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (26))){
var inst_25973 = (state_25983[(2)]);
var state_25983__$1 = state_25983;
var statearr_26015_26055 = state_25983__$1;
(statearr_26015_26055[(2)] = inst_25973);

(statearr_26015_26055[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (16))){
var inst_25953 = (state_25983[(2)]);
var inst_25954 = calc_state.call(null);
var inst_25927 = inst_25954;
var state_25983__$1 = (function (){var statearr_26016 = state_25983;
(statearr_26016[(7)] = inst_25927);

(statearr_26016[(18)] = inst_25953);

return statearr_26016;
})();
var statearr_26017_26056 = state_25983__$1;
(statearr_26017_26056[(2)] = null);

(statearr_26017_26056[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (10))){
var inst_25943 = (state_25983[(16)]);
var inst_25942 = (state_25983[(8)]);
var inst_25941 = (state_25983[(2)]);
var inst_25942__$1 = cljs.core.nth.call(null,inst_25941,(0),null);
var inst_25943__$1 = cljs.core.nth.call(null,inst_25941,(1),null);
var inst_25944 = (inst_25942__$1 == null);
var inst_25945 = cljs.core._EQ_.call(null,inst_25943__$1,change);
var inst_25946 = (inst_25944) || (inst_25945);
var state_25983__$1 = (function (){var statearr_26018 = state_25983;
(statearr_26018[(16)] = inst_25943__$1);

(statearr_26018[(8)] = inst_25942__$1);

return statearr_26018;
})();
if(cljs.core.truth_(inst_25946)){
var statearr_26019_26057 = state_25983__$1;
(statearr_26019_26057[(1)] = (11));

} else {
var statearr_26020_26058 = state_25983__$1;
(statearr_26020_26058[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (18))){
var inst_25937 = (state_25983[(17)]);
var inst_25936 = (state_25983[(15)]);
var inst_25943 = (state_25983[(16)]);
var inst_25960 = cljs.core.empty_QMARK_.call(null,inst_25936);
var inst_25961 = inst_25937.call(null,inst_25943);
var inst_25962 = cljs.core.not.call(null,inst_25961);
var inst_25963 = (inst_25960) && (inst_25962);
var state_25983__$1 = state_25983;
var statearr_26021_26059 = state_25983__$1;
(statearr_26021_26059[(2)] = inst_25963);

(statearr_26021_26059[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25984 === (8))){
var inst_25927 = (state_25983[(7)]);
var state_25983__$1 = state_25983;
var statearr_26022_26060 = state_25983__$1;
(statearr_26022_26060[(2)] = inst_25927);

(statearr_26022_26060[(1)] = (9));


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
});})(c__19104__auto___26030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19042__auto__,c__19104__auto___26030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19043__auto__ = null;
var cljs$core$async$mix_$_state_machine__19043__auto____0 = (function (){
var statearr_26026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26026[(0)] = cljs$core$async$mix_$_state_machine__19043__auto__);

(statearr_26026[(1)] = (1));

return statearr_26026;
});
var cljs$core$async$mix_$_state_machine__19043__auto____1 = (function (state_25983){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_25983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e26027){if((e26027 instanceof Object)){
var ex__19046__auto__ = e26027;
var statearr_26028_26061 = state_25983;
(statearr_26028_26061[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26062 = state_25983;
state_25983 = G__26062;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19043__auto__ = function(state_25983){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19043__auto____1.call(this,state_25983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19043__auto____0;
cljs$core$async$mix_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19043__auto____1;
return cljs$core$async$mix_$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___26030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19106__auto__ = (function (){var statearr_26029 = f__19105__auto__.call(null);
(statearr_26029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___26030);

return statearr_26029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___26030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26064 = {};
return obj26064;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16082__auto__ = p;
if(and__16082__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16082__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16730__auto__ = (((p == null))?null:p);
return (function (){var or__16094__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16082__auto__ = p;
if(and__16082__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16082__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16730__auto__ = (((p == null))?null:p);
return (function (){var or__16094__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__26066 = arguments.length;
switch (G__26066) {
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
if((function (){var and__16082__auto__ = p;
if(and__16082__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16082__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16730__auto__ = (((p == null))?null:p);
return (function (){var or__16094__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16082__auto__ = p;
if(and__16082__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16082__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16730__auto__ = (((p == null))?null:p);
return (function (){var or__16094__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16730__auto__)]);
if(or__16094__auto__){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16094__auto____$1){
return or__16094__auto____$1;
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
var G__26070 = arguments.length;
switch (G__26070) {
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
var or__16094__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16094__auto__)){
return or__16094__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16094__auto__,mults){
return (function (p1__26068_SHARP_){
if(cljs.core.truth_(p1__26068_SHARP_.call(null,topic))){
return p1__26068_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26068_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26071 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26071 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26072){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26072 = meta26072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26073,meta26072__$1){
var self__ = this;
var _26073__$1 = this;
return (new cljs.core.async.t26071(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26072__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26073){
var self__ = this;
var _26073__$1 = this;
return self__.meta26072;
});})(mults,ensure_mult))
;

cljs.core.async.t26071.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26071.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26071.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26071.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26071.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t26071.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26071.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26071.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26072","meta26072",929262243,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t26071.cljs$lang$type = true;

cljs.core.async.t26071.cljs$lang$ctorStr = "cljs.core.async/t26071";

cljs.core.async.t26071.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16673__auto__,writer__16674__auto__,opt__16675__auto__){
return cljs.core._write.call(null,writer__16674__auto__,"cljs.core.async/t26071");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26071 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t26071(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26072){
return (new cljs.core.async.t26071(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26072));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26071(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19104__auto___26194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___26194,mults,ensure_mult,p){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___26194,mults,ensure_mult,p){
return (function (state_26145){
var state_val_26146 = (state_26145[(1)]);
if((state_val_26146 === (7))){
var inst_26141 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26147_26195 = state_26145__$1;
(statearr_26147_26195[(2)] = inst_26141);

(statearr_26147_26195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (20))){
var state_26145__$1 = state_26145;
var statearr_26148_26196 = state_26145__$1;
(statearr_26148_26196[(2)] = null);

(statearr_26148_26196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (1))){
var state_26145__$1 = state_26145;
var statearr_26149_26197 = state_26145__$1;
(statearr_26149_26197[(2)] = null);

(statearr_26149_26197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (24))){
var inst_26124 = (state_26145[(7)]);
var inst_26133 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26124);
var state_26145__$1 = state_26145;
var statearr_26150_26198 = state_26145__$1;
(statearr_26150_26198[(2)] = inst_26133);

(statearr_26150_26198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (4))){
var inst_26076 = (state_26145[(8)]);
var inst_26076__$1 = (state_26145[(2)]);
var inst_26077 = (inst_26076__$1 == null);
var state_26145__$1 = (function (){var statearr_26151 = state_26145;
(statearr_26151[(8)] = inst_26076__$1);

return statearr_26151;
})();
if(cljs.core.truth_(inst_26077)){
var statearr_26152_26199 = state_26145__$1;
(statearr_26152_26199[(1)] = (5));

} else {
var statearr_26153_26200 = state_26145__$1;
(statearr_26153_26200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (15))){
var inst_26118 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26154_26201 = state_26145__$1;
(statearr_26154_26201[(2)] = inst_26118);

(statearr_26154_26201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (21))){
var inst_26138 = (state_26145[(2)]);
var state_26145__$1 = (function (){var statearr_26155 = state_26145;
(statearr_26155[(9)] = inst_26138);

return statearr_26155;
})();
var statearr_26156_26202 = state_26145__$1;
(statearr_26156_26202[(2)] = null);

(statearr_26156_26202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (13))){
var inst_26100 = (state_26145[(10)]);
var inst_26102 = cljs.core.chunked_seq_QMARK_.call(null,inst_26100);
var state_26145__$1 = state_26145;
if(inst_26102){
var statearr_26157_26203 = state_26145__$1;
(statearr_26157_26203[(1)] = (16));

} else {
var statearr_26158_26204 = state_26145__$1;
(statearr_26158_26204[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (22))){
var inst_26130 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
if(cljs.core.truth_(inst_26130)){
var statearr_26159_26205 = state_26145__$1;
(statearr_26159_26205[(1)] = (23));

} else {
var statearr_26160_26206 = state_26145__$1;
(statearr_26160_26206[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (6))){
var inst_26076 = (state_26145[(8)]);
var inst_26126 = (state_26145[(11)]);
var inst_26124 = (state_26145[(7)]);
var inst_26124__$1 = topic_fn.call(null,inst_26076);
var inst_26125 = cljs.core.deref.call(null,mults);
var inst_26126__$1 = cljs.core.get.call(null,inst_26125,inst_26124__$1);
var state_26145__$1 = (function (){var statearr_26161 = state_26145;
(statearr_26161[(11)] = inst_26126__$1);

(statearr_26161[(7)] = inst_26124__$1);

return statearr_26161;
})();
if(cljs.core.truth_(inst_26126__$1)){
var statearr_26162_26207 = state_26145__$1;
(statearr_26162_26207[(1)] = (19));

} else {
var statearr_26163_26208 = state_26145__$1;
(statearr_26163_26208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (25))){
var inst_26135 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26164_26209 = state_26145__$1;
(statearr_26164_26209[(2)] = inst_26135);

(statearr_26164_26209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (17))){
var inst_26100 = (state_26145[(10)]);
var inst_26109 = cljs.core.first.call(null,inst_26100);
var inst_26110 = cljs.core.async.muxch_STAR_.call(null,inst_26109);
var inst_26111 = cljs.core.async.close_BANG_.call(null,inst_26110);
var inst_26112 = cljs.core.next.call(null,inst_26100);
var inst_26086 = inst_26112;
var inst_26087 = null;
var inst_26088 = (0);
var inst_26089 = (0);
var state_26145__$1 = (function (){var statearr_26165 = state_26145;
(statearr_26165[(12)] = inst_26089);

(statearr_26165[(13)] = inst_26111);

(statearr_26165[(14)] = inst_26088);

(statearr_26165[(15)] = inst_26086);

(statearr_26165[(16)] = inst_26087);

return statearr_26165;
})();
var statearr_26166_26210 = state_26145__$1;
(statearr_26166_26210[(2)] = null);

(statearr_26166_26210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (3))){
var inst_26143 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26145__$1,inst_26143);
} else {
if((state_val_26146 === (12))){
var inst_26120 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26167_26211 = state_26145__$1;
(statearr_26167_26211[(2)] = inst_26120);

(statearr_26167_26211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (2))){
var state_26145__$1 = state_26145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26145__$1,(4),ch);
} else {
if((state_val_26146 === (23))){
var state_26145__$1 = state_26145;
var statearr_26168_26212 = state_26145__$1;
(statearr_26168_26212[(2)] = null);

(statearr_26168_26212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (19))){
var inst_26076 = (state_26145[(8)]);
var inst_26126 = (state_26145[(11)]);
var inst_26128 = cljs.core.async.muxch_STAR_.call(null,inst_26126);
var state_26145__$1 = state_26145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26145__$1,(22),inst_26128,inst_26076);
} else {
if((state_val_26146 === (11))){
var inst_26086 = (state_26145[(15)]);
var inst_26100 = (state_26145[(10)]);
var inst_26100__$1 = cljs.core.seq.call(null,inst_26086);
var state_26145__$1 = (function (){var statearr_26169 = state_26145;
(statearr_26169[(10)] = inst_26100__$1);

return statearr_26169;
})();
if(inst_26100__$1){
var statearr_26170_26213 = state_26145__$1;
(statearr_26170_26213[(1)] = (13));

} else {
var statearr_26171_26214 = state_26145__$1;
(statearr_26171_26214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (9))){
var inst_26122 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26172_26215 = state_26145__$1;
(statearr_26172_26215[(2)] = inst_26122);

(statearr_26172_26215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (5))){
var inst_26083 = cljs.core.deref.call(null,mults);
var inst_26084 = cljs.core.vals.call(null,inst_26083);
var inst_26085 = cljs.core.seq.call(null,inst_26084);
var inst_26086 = inst_26085;
var inst_26087 = null;
var inst_26088 = (0);
var inst_26089 = (0);
var state_26145__$1 = (function (){var statearr_26173 = state_26145;
(statearr_26173[(12)] = inst_26089);

(statearr_26173[(14)] = inst_26088);

(statearr_26173[(15)] = inst_26086);

(statearr_26173[(16)] = inst_26087);

return statearr_26173;
})();
var statearr_26174_26216 = state_26145__$1;
(statearr_26174_26216[(2)] = null);

(statearr_26174_26216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (14))){
var state_26145__$1 = state_26145;
var statearr_26178_26217 = state_26145__$1;
(statearr_26178_26217[(2)] = null);

(statearr_26178_26217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (16))){
var inst_26100 = (state_26145[(10)]);
var inst_26104 = cljs.core.chunk_first.call(null,inst_26100);
var inst_26105 = cljs.core.chunk_rest.call(null,inst_26100);
var inst_26106 = cljs.core.count.call(null,inst_26104);
var inst_26086 = inst_26105;
var inst_26087 = inst_26104;
var inst_26088 = inst_26106;
var inst_26089 = (0);
var state_26145__$1 = (function (){var statearr_26179 = state_26145;
(statearr_26179[(12)] = inst_26089);

(statearr_26179[(14)] = inst_26088);

(statearr_26179[(15)] = inst_26086);

(statearr_26179[(16)] = inst_26087);

return statearr_26179;
})();
var statearr_26180_26218 = state_26145__$1;
(statearr_26180_26218[(2)] = null);

(statearr_26180_26218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (10))){
var inst_26089 = (state_26145[(12)]);
var inst_26088 = (state_26145[(14)]);
var inst_26086 = (state_26145[(15)]);
var inst_26087 = (state_26145[(16)]);
var inst_26094 = cljs.core._nth.call(null,inst_26087,inst_26089);
var inst_26095 = cljs.core.async.muxch_STAR_.call(null,inst_26094);
var inst_26096 = cljs.core.async.close_BANG_.call(null,inst_26095);
var inst_26097 = (inst_26089 + (1));
var tmp26175 = inst_26088;
var tmp26176 = inst_26086;
var tmp26177 = inst_26087;
var inst_26086__$1 = tmp26176;
var inst_26087__$1 = tmp26177;
var inst_26088__$1 = tmp26175;
var inst_26089__$1 = inst_26097;
var state_26145__$1 = (function (){var statearr_26181 = state_26145;
(statearr_26181[(12)] = inst_26089__$1);

(statearr_26181[(17)] = inst_26096);

(statearr_26181[(14)] = inst_26088__$1);

(statearr_26181[(15)] = inst_26086__$1);

(statearr_26181[(16)] = inst_26087__$1);

return statearr_26181;
})();
var statearr_26182_26219 = state_26145__$1;
(statearr_26182_26219[(2)] = null);

(statearr_26182_26219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (18))){
var inst_26115 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26183_26220 = state_26145__$1;
(statearr_26183_26220[(2)] = inst_26115);

(statearr_26183_26220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (8))){
var inst_26089 = (state_26145[(12)]);
var inst_26088 = (state_26145[(14)]);
var inst_26091 = (inst_26089 < inst_26088);
var inst_26092 = inst_26091;
var state_26145__$1 = state_26145;
if(cljs.core.truth_(inst_26092)){
var statearr_26184_26221 = state_26145__$1;
(statearr_26184_26221[(1)] = (10));

} else {
var statearr_26185_26222 = state_26145__$1;
(statearr_26185_26222[(1)] = (11));

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
});})(c__19104__auto___26194,mults,ensure_mult,p))
;
return ((function (switch__19042__auto__,c__19104__auto___26194,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19043__auto__ = null;
var cljs$core$async$state_machine__19043__auto____0 = (function (){
var statearr_26189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26189[(0)] = cljs$core$async$state_machine__19043__auto__);

(statearr_26189[(1)] = (1));

return statearr_26189;
});
var cljs$core$async$state_machine__19043__auto____1 = (function (state_26145){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_26145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e26190){if((e26190 instanceof Object)){
var ex__19046__auto__ = e26190;
var statearr_26191_26223 = state_26145;
(statearr_26191_26223[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26224 = state_26145;
state_26145 = G__26224;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$state_machine__19043__auto__ = function(state_26145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19043__auto____1.call(this,state_26145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19043__auto____0;
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19043__auto____1;
return cljs$core$async$state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___26194,mults,ensure_mult,p))
})();
var state__19106__auto__ = (function (){var statearr_26192 = f__19105__auto__.call(null);
(statearr_26192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___26194);

return statearr_26192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___26194,mults,ensure_mult,p))
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
var G__26226 = arguments.length;
switch (G__26226) {
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
var G__26229 = arguments.length;
switch (G__26229) {
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
var G__26232 = arguments.length;
switch (G__26232) {
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
var c__19104__auto___26302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26271){
var state_val_26272 = (state_26271[(1)]);
if((state_val_26272 === (7))){
var state_26271__$1 = state_26271;
var statearr_26273_26303 = state_26271__$1;
(statearr_26273_26303[(2)] = null);

(statearr_26273_26303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (1))){
var state_26271__$1 = state_26271;
var statearr_26274_26304 = state_26271__$1;
(statearr_26274_26304[(2)] = null);

(statearr_26274_26304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (4))){
var inst_26235 = (state_26271[(7)]);
var inst_26237 = (inst_26235 < cnt);
var state_26271__$1 = state_26271;
if(cljs.core.truth_(inst_26237)){
var statearr_26275_26305 = state_26271__$1;
(statearr_26275_26305[(1)] = (6));

} else {
var statearr_26276_26306 = state_26271__$1;
(statearr_26276_26306[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (15))){
var inst_26267 = (state_26271[(2)]);
var state_26271__$1 = state_26271;
var statearr_26277_26307 = state_26271__$1;
(statearr_26277_26307[(2)] = inst_26267);

(statearr_26277_26307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (13))){
var inst_26260 = cljs.core.async.close_BANG_.call(null,out);
var state_26271__$1 = state_26271;
var statearr_26278_26308 = state_26271__$1;
(statearr_26278_26308[(2)] = inst_26260);

(statearr_26278_26308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (6))){
var state_26271__$1 = state_26271;
var statearr_26279_26309 = state_26271__$1;
(statearr_26279_26309[(2)] = null);

(statearr_26279_26309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (3))){
var inst_26269 = (state_26271[(2)]);
var state_26271__$1 = state_26271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26271__$1,inst_26269);
} else {
if((state_val_26272 === (12))){
var inst_26257 = (state_26271[(8)]);
var inst_26257__$1 = (state_26271[(2)]);
var inst_26258 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26257__$1);
var state_26271__$1 = (function (){var statearr_26280 = state_26271;
(statearr_26280[(8)] = inst_26257__$1);

return statearr_26280;
})();
if(cljs.core.truth_(inst_26258)){
var statearr_26281_26310 = state_26271__$1;
(statearr_26281_26310[(1)] = (13));

} else {
var statearr_26282_26311 = state_26271__$1;
(statearr_26282_26311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (2))){
var inst_26234 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26235 = (0);
var state_26271__$1 = (function (){var statearr_26283 = state_26271;
(statearr_26283[(9)] = inst_26234);

(statearr_26283[(7)] = inst_26235);

return statearr_26283;
})();
var statearr_26284_26312 = state_26271__$1;
(statearr_26284_26312[(2)] = null);

(statearr_26284_26312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (11))){
var inst_26235 = (state_26271[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26271,(10),Object,null,(9));
var inst_26244 = chs__$1.call(null,inst_26235);
var inst_26245 = done.call(null,inst_26235);
var inst_26246 = cljs.core.async.take_BANG_.call(null,inst_26244,inst_26245);
var state_26271__$1 = state_26271;
var statearr_26285_26313 = state_26271__$1;
(statearr_26285_26313[(2)] = inst_26246);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26271__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (9))){
var inst_26235 = (state_26271[(7)]);
var inst_26248 = (state_26271[(2)]);
var inst_26249 = (inst_26235 + (1));
var inst_26235__$1 = inst_26249;
var state_26271__$1 = (function (){var statearr_26286 = state_26271;
(statearr_26286[(10)] = inst_26248);

(statearr_26286[(7)] = inst_26235__$1);

return statearr_26286;
})();
var statearr_26287_26314 = state_26271__$1;
(statearr_26287_26314[(2)] = null);

(statearr_26287_26314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (5))){
var inst_26255 = (state_26271[(2)]);
var state_26271__$1 = (function (){var statearr_26288 = state_26271;
(statearr_26288[(11)] = inst_26255);

return statearr_26288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26271__$1,(12),dchan);
} else {
if((state_val_26272 === (14))){
var inst_26257 = (state_26271[(8)]);
var inst_26262 = cljs.core.apply.call(null,f,inst_26257);
var state_26271__$1 = state_26271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26271__$1,(16),out,inst_26262);
} else {
if((state_val_26272 === (16))){
var inst_26264 = (state_26271[(2)]);
var state_26271__$1 = (function (){var statearr_26289 = state_26271;
(statearr_26289[(12)] = inst_26264);

return statearr_26289;
})();
var statearr_26290_26315 = state_26271__$1;
(statearr_26290_26315[(2)] = null);

(statearr_26290_26315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (10))){
var inst_26239 = (state_26271[(2)]);
var inst_26240 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26271__$1 = (function (){var statearr_26291 = state_26271;
(statearr_26291[(13)] = inst_26239);

return statearr_26291;
})();
var statearr_26292_26316 = state_26271__$1;
(statearr_26292_26316[(2)] = inst_26240);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26271__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26272 === (8))){
var inst_26253 = (state_26271[(2)]);
var state_26271__$1 = state_26271;
var statearr_26293_26317 = state_26271__$1;
(statearr_26293_26317[(2)] = inst_26253);

(statearr_26293_26317[(1)] = (5));


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
});})(c__19104__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19042__auto__,c__19104__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19043__auto__ = null;
var cljs$core$async$state_machine__19043__auto____0 = (function (){
var statearr_26297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26297[(0)] = cljs$core$async$state_machine__19043__auto__);

(statearr_26297[(1)] = (1));

return statearr_26297;
});
var cljs$core$async$state_machine__19043__auto____1 = (function (state_26271){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_26271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e26298){if((e26298 instanceof Object)){
var ex__19046__auto__ = e26298;
var statearr_26299_26318 = state_26271;
(statearr_26299_26318[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26319 = state_26271;
state_26271 = G__26319;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$state_machine__19043__auto__ = function(state_26271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19043__auto____1.call(this,state_26271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19043__auto____0;
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19043__auto____1;
return cljs$core$async$state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19106__auto__ = (function (){var statearr_26300 = f__19105__auto__.call(null);
(statearr_26300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___26302);

return statearr_26300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___26302,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26322 = arguments.length;
switch (G__26322) {
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
var c__19104__auto___26377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___26377,out){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___26377,out){
return (function (state_26352){
var state_val_26353 = (state_26352[(1)]);
if((state_val_26353 === (7))){
var inst_26331 = (state_26352[(7)]);
var inst_26332 = (state_26352[(8)]);
var inst_26331__$1 = (state_26352[(2)]);
var inst_26332__$1 = cljs.core.nth.call(null,inst_26331__$1,(0),null);
var inst_26333 = cljs.core.nth.call(null,inst_26331__$1,(1),null);
var inst_26334 = (inst_26332__$1 == null);
var state_26352__$1 = (function (){var statearr_26354 = state_26352;
(statearr_26354[(9)] = inst_26333);

(statearr_26354[(7)] = inst_26331__$1);

(statearr_26354[(8)] = inst_26332__$1);

return statearr_26354;
})();
if(cljs.core.truth_(inst_26334)){
var statearr_26355_26378 = state_26352__$1;
(statearr_26355_26378[(1)] = (8));

} else {
var statearr_26356_26379 = state_26352__$1;
(statearr_26356_26379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (1))){
var inst_26323 = cljs.core.vec.call(null,chs);
var inst_26324 = inst_26323;
var state_26352__$1 = (function (){var statearr_26357 = state_26352;
(statearr_26357[(10)] = inst_26324);

return statearr_26357;
})();
var statearr_26358_26380 = state_26352__$1;
(statearr_26358_26380[(2)] = null);

(statearr_26358_26380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (4))){
var inst_26324 = (state_26352[(10)]);
var state_26352__$1 = state_26352;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26352__$1,(7),inst_26324);
} else {
if((state_val_26353 === (6))){
var inst_26348 = (state_26352[(2)]);
var state_26352__$1 = state_26352;
var statearr_26359_26381 = state_26352__$1;
(statearr_26359_26381[(2)] = inst_26348);

(statearr_26359_26381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (3))){
var inst_26350 = (state_26352[(2)]);
var state_26352__$1 = state_26352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26352__$1,inst_26350);
} else {
if((state_val_26353 === (2))){
var inst_26324 = (state_26352[(10)]);
var inst_26326 = cljs.core.count.call(null,inst_26324);
var inst_26327 = (inst_26326 > (0));
var state_26352__$1 = state_26352;
if(cljs.core.truth_(inst_26327)){
var statearr_26361_26382 = state_26352__$1;
(statearr_26361_26382[(1)] = (4));

} else {
var statearr_26362_26383 = state_26352__$1;
(statearr_26362_26383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (11))){
var inst_26324 = (state_26352[(10)]);
var inst_26341 = (state_26352[(2)]);
var tmp26360 = inst_26324;
var inst_26324__$1 = tmp26360;
var state_26352__$1 = (function (){var statearr_26363 = state_26352;
(statearr_26363[(10)] = inst_26324__$1);

(statearr_26363[(11)] = inst_26341);

return statearr_26363;
})();
var statearr_26364_26384 = state_26352__$1;
(statearr_26364_26384[(2)] = null);

(statearr_26364_26384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (9))){
var inst_26332 = (state_26352[(8)]);
var state_26352__$1 = state_26352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26352__$1,(11),out,inst_26332);
} else {
if((state_val_26353 === (5))){
var inst_26346 = cljs.core.async.close_BANG_.call(null,out);
var state_26352__$1 = state_26352;
var statearr_26365_26385 = state_26352__$1;
(statearr_26365_26385[(2)] = inst_26346);

(statearr_26365_26385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (10))){
var inst_26344 = (state_26352[(2)]);
var state_26352__$1 = state_26352;
var statearr_26366_26386 = state_26352__$1;
(statearr_26366_26386[(2)] = inst_26344);

(statearr_26366_26386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (8))){
var inst_26333 = (state_26352[(9)]);
var inst_26331 = (state_26352[(7)]);
var inst_26324 = (state_26352[(10)]);
var inst_26332 = (state_26352[(8)]);
var inst_26336 = (function (){var cs = inst_26324;
var vec__26329 = inst_26331;
var v = inst_26332;
var c = inst_26333;
return ((function (cs,vec__26329,v,c,inst_26333,inst_26331,inst_26324,inst_26332,state_val_26353,c__19104__auto___26377,out){
return (function (p1__26320_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26320_SHARP_);
});
;})(cs,vec__26329,v,c,inst_26333,inst_26331,inst_26324,inst_26332,state_val_26353,c__19104__auto___26377,out))
})();
var inst_26337 = cljs.core.filterv.call(null,inst_26336,inst_26324);
var inst_26324__$1 = inst_26337;
var state_26352__$1 = (function (){var statearr_26367 = state_26352;
(statearr_26367[(10)] = inst_26324__$1);

return statearr_26367;
})();
var statearr_26368_26387 = state_26352__$1;
(statearr_26368_26387[(2)] = null);

(statearr_26368_26387[(1)] = (2));


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
});})(c__19104__auto___26377,out))
;
return ((function (switch__19042__auto__,c__19104__auto___26377,out){
return (function() {
var cljs$core$async$state_machine__19043__auto__ = null;
var cljs$core$async$state_machine__19043__auto____0 = (function (){
var statearr_26372 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26372[(0)] = cljs$core$async$state_machine__19043__auto__);

(statearr_26372[(1)] = (1));

return statearr_26372;
});
var cljs$core$async$state_machine__19043__auto____1 = (function (state_26352){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_26352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e26373){if((e26373 instanceof Object)){
var ex__19046__auto__ = e26373;
var statearr_26374_26388 = state_26352;
(statearr_26374_26388[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26389 = state_26352;
state_26352 = G__26389;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$state_machine__19043__auto__ = function(state_26352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19043__auto____1.call(this,state_26352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19043__auto____0;
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19043__auto____1;
return cljs$core$async$state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___26377,out))
})();
var state__19106__auto__ = (function (){var statearr_26375 = f__19105__auto__.call(null);
(statearr_26375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___26377);

return statearr_26375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___26377,out))
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
var G__26391 = arguments.length;
switch (G__26391) {
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
var c__19104__auto___26439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___26439,out){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___26439,out){
return (function (state_26415){
var state_val_26416 = (state_26415[(1)]);
if((state_val_26416 === (7))){
var inst_26397 = (state_26415[(7)]);
var inst_26397__$1 = (state_26415[(2)]);
var inst_26398 = (inst_26397__$1 == null);
var inst_26399 = cljs.core.not.call(null,inst_26398);
var state_26415__$1 = (function (){var statearr_26417 = state_26415;
(statearr_26417[(7)] = inst_26397__$1);

return statearr_26417;
})();
if(inst_26399){
var statearr_26418_26440 = state_26415__$1;
(statearr_26418_26440[(1)] = (8));

} else {
var statearr_26419_26441 = state_26415__$1;
(statearr_26419_26441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (1))){
var inst_26392 = (0);
var state_26415__$1 = (function (){var statearr_26420 = state_26415;
(statearr_26420[(8)] = inst_26392);

return statearr_26420;
})();
var statearr_26421_26442 = state_26415__$1;
(statearr_26421_26442[(2)] = null);

(statearr_26421_26442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (4))){
var state_26415__$1 = state_26415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26415__$1,(7),ch);
} else {
if((state_val_26416 === (6))){
var inst_26410 = (state_26415[(2)]);
var state_26415__$1 = state_26415;
var statearr_26422_26443 = state_26415__$1;
(statearr_26422_26443[(2)] = inst_26410);

(statearr_26422_26443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (3))){
var inst_26412 = (state_26415[(2)]);
var inst_26413 = cljs.core.async.close_BANG_.call(null,out);
var state_26415__$1 = (function (){var statearr_26423 = state_26415;
(statearr_26423[(9)] = inst_26412);

return statearr_26423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26415__$1,inst_26413);
} else {
if((state_val_26416 === (2))){
var inst_26392 = (state_26415[(8)]);
var inst_26394 = (inst_26392 < n);
var state_26415__$1 = state_26415;
if(cljs.core.truth_(inst_26394)){
var statearr_26424_26444 = state_26415__$1;
(statearr_26424_26444[(1)] = (4));

} else {
var statearr_26425_26445 = state_26415__$1;
(statearr_26425_26445[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (11))){
var inst_26392 = (state_26415[(8)]);
var inst_26402 = (state_26415[(2)]);
var inst_26403 = (inst_26392 + (1));
var inst_26392__$1 = inst_26403;
var state_26415__$1 = (function (){var statearr_26426 = state_26415;
(statearr_26426[(10)] = inst_26402);

(statearr_26426[(8)] = inst_26392__$1);

return statearr_26426;
})();
var statearr_26427_26446 = state_26415__$1;
(statearr_26427_26446[(2)] = null);

(statearr_26427_26446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (9))){
var state_26415__$1 = state_26415;
var statearr_26428_26447 = state_26415__$1;
(statearr_26428_26447[(2)] = null);

(statearr_26428_26447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (5))){
var state_26415__$1 = state_26415;
var statearr_26429_26448 = state_26415__$1;
(statearr_26429_26448[(2)] = null);

(statearr_26429_26448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (10))){
var inst_26407 = (state_26415[(2)]);
var state_26415__$1 = state_26415;
var statearr_26430_26449 = state_26415__$1;
(statearr_26430_26449[(2)] = inst_26407);

(statearr_26430_26449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (8))){
var inst_26397 = (state_26415[(7)]);
var state_26415__$1 = state_26415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26415__$1,(11),out,inst_26397);
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
});})(c__19104__auto___26439,out))
;
return ((function (switch__19042__auto__,c__19104__auto___26439,out){
return (function() {
var cljs$core$async$state_machine__19043__auto__ = null;
var cljs$core$async$state_machine__19043__auto____0 = (function (){
var statearr_26434 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26434[(0)] = cljs$core$async$state_machine__19043__auto__);

(statearr_26434[(1)] = (1));

return statearr_26434;
});
var cljs$core$async$state_machine__19043__auto____1 = (function (state_26415){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_26415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e26435){if((e26435 instanceof Object)){
var ex__19046__auto__ = e26435;
var statearr_26436_26450 = state_26415;
(statearr_26436_26450[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26451 = state_26415;
state_26415 = G__26451;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$state_machine__19043__auto__ = function(state_26415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19043__auto____1.call(this,state_26415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19043__auto____0;
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19043__auto____1;
return cljs$core$async$state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___26439,out))
})();
var state__19106__auto__ = (function (){var statearr_26437 = f__19105__auto__.call(null);
(statearr_26437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___26439);

return statearr_26437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___26439,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t26459 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26459 = (function (map_LT_,f,ch,meta26460){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26460 = meta26460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26461,meta26460__$1){
var self__ = this;
var _26461__$1 = this;
return (new cljs.core.async.t26459(self__.map_LT_,self__.f,self__.ch,meta26460__$1));
});

cljs.core.async.t26459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26461){
var self__ = this;
var _26461__$1 = this;
return self__.meta26460;
});

cljs.core.async.t26459.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26459.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26459.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26459.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26459.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26462 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26462 = (function (map_LT_,f,ch,meta26460,_,fn1,meta26463){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26460 = meta26460;
this._ = _;
this.fn1 = fn1;
this.meta26463 = meta26463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26464,meta26463__$1){
var self__ = this;
var _26464__$1 = this;
return (new cljs.core.async.t26462(self__.map_LT_,self__.f,self__.ch,self__.meta26460,self__._,self__.fn1,meta26463__$1));
});})(___$1))
;

cljs.core.async.t26462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26464){
var self__ = this;
var _26464__$1 = this;
return self__.meta26463;
});})(___$1))
;

cljs.core.async.t26462.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26452_SHARP_){
return f1.call(null,(((p1__26452_SHARP_ == null))?null:self__.f.call(null,p1__26452_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26462.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26460","meta26460",1816249533,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26463","meta26463",-1027939633,null)], null);
});})(___$1))
;

cljs.core.async.t26462.cljs$lang$type = true;

cljs.core.async.t26462.cljs$lang$ctorStr = "cljs.core.async/t26462";

cljs.core.async.t26462.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16673__auto__,writer__16674__auto__,opt__16675__auto__){
return cljs.core._write.call(null,writer__16674__auto__,"cljs.core.async/t26462");
});})(___$1))
;

cljs.core.async.__GT_t26462 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t26462(map_LT___$1,f__$1,ch__$1,meta26460__$1,___$2,fn1__$1,meta26463){
return (new cljs.core.async.t26462(map_LT___$1,f__$1,ch__$1,meta26460__$1,___$2,fn1__$1,meta26463));
});})(___$1))
;

}

return (new cljs.core.async.t26462(self__.map_LT_,self__.f,self__.ch,self__.meta26460,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16082__auto__ = ret;
if(cljs.core.truth_(and__16082__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16082__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26459.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26459.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26460","meta26460",1816249533,null)], null);
});

cljs.core.async.t26459.cljs$lang$type = true;

cljs.core.async.t26459.cljs$lang$ctorStr = "cljs.core.async/t26459";

cljs.core.async.t26459.cljs$lang$ctorPrWriter = (function (this__16673__auto__,writer__16674__auto__,opt__16675__auto__){
return cljs.core._write.call(null,writer__16674__auto__,"cljs.core.async/t26459");
});

cljs.core.async.__GT_t26459 = (function cljs$core$async$map_LT__$___GT_t26459(map_LT___$1,f__$1,ch__$1,meta26460){
return (new cljs.core.async.t26459(map_LT___$1,f__$1,ch__$1,meta26460));
});

}

return (new cljs.core.async.t26459(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t26468 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26468 = (function (map_GT_,f,ch,meta26469){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26469 = meta26469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26470,meta26469__$1){
var self__ = this;
var _26470__$1 = this;
return (new cljs.core.async.t26468(self__.map_GT_,self__.f,self__.ch,meta26469__$1));
});

cljs.core.async.t26468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26470){
var self__ = this;
var _26470__$1 = this;
return self__.meta26469;
});

cljs.core.async.t26468.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26468.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26468.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26468.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26468.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26468.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t26468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26469","meta26469",79624902,null)], null);
});

cljs.core.async.t26468.cljs$lang$type = true;

cljs.core.async.t26468.cljs$lang$ctorStr = "cljs.core.async/t26468";

cljs.core.async.t26468.cljs$lang$ctorPrWriter = (function (this__16673__auto__,writer__16674__auto__,opt__16675__auto__){
return cljs.core._write.call(null,writer__16674__auto__,"cljs.core.async/t26468");
});

cljs.core.async.__GT_t26468 = (function cljs$core$async$map_GT__$___GT_t26468(map_GT___$1,f__$1,ch__$1,meta26469){
return (new cljs.core.async.t26468(map_GT___$1,f__$1,ch__$1,meta26469));
});

}

return (new cljs.core.async.t26468(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t26474 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26474 = (function (filter_GT_,p,ch,meta26475){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26475 = meta26475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26476,meta26475__$1){
var self__ = this;
var _26476__$1 = this;
return (new cljs.core.async.t26474(self__.filter_GT_,self__.p,self__.ch,meta26475__$1));
});

cljs.core.async.t26474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26476){
var self__ = this;
var _26476__$1 = this;
return self__.meta26475;
});

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t26474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26475","meta26475",-421623457,null)], null);
});

cljs.core.async.t26474.cljs$lang$type = true;

cljs.core.async.t26474.cljs$lang$ctorStr = "cljs.core.async/t26474";

cljs.core.async.t26474.cljs$lang$ctorPrWriter = (function (this__16673__auto__,writer__16674__auto__,opt__16675__auto__){
return cljs.core._write.call(null,writer__16674__auto__,"cljs.core.async/t26474");
});

cljs.core.async.__GT_t26474 = (function cljs$core$async$filter_GT__$___GT_t26474(filter_GT___$1,p__$1,ch__$1,meta26475){
return (new cljs.core.async.t26474(filter_GT___$1,p__$1,ch__$1,meta26475));
});

}

return (new cljs.core.async.t26474(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26478 = arguments.length;
switch (G__26478) {
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
var c__19104__auto___26521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___26521,out){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___26521,out){
return (function (state_26499){
var state_val_26500 = (state_26499[(1)]);
if((state_val_26500 === (7))){
var inst_26495 = (state_26499[(2)]);
var state_26499__$1 = state_26499;
var statearr_26501_26522 = state_26499__$1;
(statearr_26501_26522[(2)] = inst_26495);

(statearr_26501_26522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26500 === (1))){
var state_26499__$1 = state_26499;
var statearr_26502_26523 = state_26499__$1;
(statearr_26502_26523[(2)] = null);

(statearr_26502_26523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26500 === (4))){
var inst_26481 = (state_26499[(7)]);
var inst_26481__$1 = (state_26499[(2)]);
var inst_26482 = (inst_26481__$1 == null);
var state_26499__$1 = (function (){var statearr_26503 = state_26499;
(statearr_26503[(7)] = inst_26481__$1);

return statearr_26503;
})();
if(cljs.core.truth_(inst_26482)){
var statearr_26504_26524 = state_26499__$1;
(statearr_26504_26524[(1)] = (5));

} else {
var statearr_26505_26525 = state_26499__$1;
(statearr_26505_26525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26500 === (6))){
var inst_26481 = (state_26499[(7)]);
var inst_26486 = p.call(null,inst_26481);
var state_26499__$1 = state_26499;
if(cljs.core.truth_(inst_26486)){
var statearr_26506_26526 = state_26499__$1;
(statearr_26506_26526[(1)] = (8));

} else {
var statearr_26507_26527 = state_26499__$1;
(statearr_26507_26527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26500 === (3))){
var inst_26497 = (state_26499[(2)]);
var state_26499__$1 = state_26499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26499__$1,inst_26497);
} else {
if((state_val_26500 === (2))){
var state_26499__$1 = state_26499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26499__$1,(4),ch);
} else {
if((state_val_26500 === (11))){
var inst_26489 = (state_26499[(2)]);
var state_26499__$1 = state_26499;
var statearr_26508_26528 = state_26499__$1;
(statearr_26508_26528[(2)] = inst_26489);

(statearr_26508_26528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26500 === (9))){
var state_26499__$1 = state_26499;
var statearr_26509_26529 = state_26499__$1;
(statearr_26509_26529[(2)] = null);

(statearr_26509_26529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26500 === (5))){
var inst_26484 = cljs.core.async.close_BANG_.call(null,out);
var state_26499__$1 = state_26499;
var statearr_26510_26530 = state_26499__$1;
(statearr_26510_26530[(2)] = inst_26484);

(statearr_26510_26530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26500 === (10))){
var inst_26492 = (state_26499[(2)]);
var state_26499__$1 = (function (){var statearr_26511 = state_26499;
(statearr_26511[(8)] = inst_26492);

return statearr_26511;
})();
var statearr_26512_26531 = state_26499__$1;
(statearr_26512_26531[(2)] = null);

(statearr_26512_26531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26500 === (8))){
var inst_26481 = (state_26499[(7)]);
var state_26499__$1 = state_26499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26499__$1,(11),out,inst_26481);
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
});})(c__19104__auto___26521,out))
;
return ((function (switch__19042__auto__,c__19104__auto___26521,out){
return (function() {
var cljs$core$async$state_machine__19043__auto__ = null;
var cljs$core$async$state_machine__19043__auto____0 = (function (){
var statearr_26516 = [null,null,null,null,null,null,null,null,null];
(statearr_26516[(0)] = cljs$core$async$state_machine__19043__auto__);

(statearr_26516[(1)] = (1));

return statearr_26516;
});
var cljs$core$async$state_machine__19043__auto____1 = (function (state_26499){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_26499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e26517){if((e26517 instanceof Object)){
var ex__19046__auto__ = e26517;
var statearr_26518_26532 = state_26499;
(statearr_26518_26532[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26533 = state_26499;
state_26499 = G__26533;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$state_machine__19043__auto__ = function(state_26499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19043__auto____1.call(this,state_26499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19043__auto____0;
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19043__auto____1;
return cljs$core$async$state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___26521,out))
})();
var state__19106__auto__ = (function (){var statearr_26519 = f__19105__auto__.call(null);
(statearr_26519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___26521);

return statearr_26519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___26521,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__26535 = arguments.length;
switch (G__26535) {
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
var c__19104__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto__){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto__){
return (function (state_26702){
var state_val_26703 = (state_26702[(1)]);
if((state_val_26703 === (7))){
var inst_26698 = (state_26702[(2)]);
var state_26702__$1 = state_26702;
var statearr_26704_26745 = state_26702__$1;
(statearr_26704_26745[(2)] = inst_26698);

(statearr_26704_26745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (20))){
var inst_26668 = (state_26702[(7)]);
var inst_26679 = (state_26702[(2)]);
var inst_26680 = cljs.core.next.call(null,inst_26668);
var inst_26654 = inst_26680;
var inst_26655 = null;
var inst_26656 = (0);
var inst_26657 = (0);
var state_26702__$1 = (function (){var statearr_26705 = state_26702;
(statearr_26705[(8)] = inst_26654);

(statearr_26705[(9)] = inst_26655);

(statearr_26705[(10)] = inst_26656);

(statearr_26705[(11)] = inst_26679);

(statearr_26705[(12)] = inst_26657);

return statearr_26705;
})();
var statearr_26706_26746 = state_26702__$1;
(statearr_26706_26746[(2)] = null);

(statearr_26706_26746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (1))){
var state_26702__$1 = state_26702;
var statearr_26707_26747 = state_26702__$1;
(statearr_26707_26747[(2)] = null);

(statearr_26707_26747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (4))){
var inst_26643 = (state_26702[(13)]);
var inst_26643__$1 = (state_26702[(2)]);
var inst_26644 = (inst_26643__$1 == null);
var state_26702__$1 = (function (){var statearr_26708 = state_26702;
(statearr_26708[(13)] = inst_26643__$1);

return statearr_26708;
})();
if(cljs.core.truth_(inst_26644)){
var statearr_26709_26748 = state_26702__$1;
(statearr_26709_26748[(1)] = (5));

} else {
var statearr_26710_26749 = state_26702__$1;
(statearr_26710_26749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (15))){
var state_26702__$1 = state_26702;
var statearr_26714_26750 = state_26702__$1;
(statearr_26714_26750[(2)] = null);

(statearr_26714_26750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (21))){
var state_26702__$1 = state_26702;
var statearr_26715_26751 = state_26702__$1;
(statearr_26715_26751[(2)] = null);

(statearr_26715_26751[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (13))){
var inst_26654 = (state_26702[(8)]);
var inst_26655 = (state_26702[(9)]);
var inst_26656 = (state_26702[(10)]);
var inst_26657 = (state_26702[(12)]);
var inst_26664 = (state_26702[(2)]);
var inst_26665 = (inst_26657 + (1));
var tmp26711 = inst_26654;
var tmp26712 = inst_26655;
var tmp26713 = inst_26656;
var inst_26654__$1 = tmp26711;
var inst_26655__$1 = tmp26712;
var inst_26656__$1 = tmp26713;
var inst_26657__$1 = inst_26665;
var state_26702__$1 = (function (){var statearr_26716 = state_26702;
(statearr_26716[(14)] = inst_26664);

(statearr_26716[(8)] = inst_26654__$1);

(statearr_26716[(9)] = inst_26655__$1);

(statearr_26716[(10)] = inst_26656__$1);

(statearr_26716[(12)] = inst_26657__$1);

return statearr_26716;
})();
var statearr_26717_26752 = state_26702__$1;
(statearr_26717_26752[(2)] = null);

(statearr_26717_26752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (22))){
var state_26702__$1 = state_26702;
var statearr_26718_26753 = state_26702__$1;
(statearr_26718_26753[(2)] = null);

(statearr_26718_26753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (6))){
var inst_26643 = (state_26702[(13)]);
var inst_26652 = f.call(null,inst_26643);
var inst_26653 = cljs.core.seq.call(null,inst_26652);
var inst_26654 = inst_26653;
var inst_26655 = null;
var inst_26656 = (0);
var inst_26657 = (0);
var state_26702__$1 = (function (){var statearr_26719 = state_26702;
(statearr_26719[(8)] = inst_26654);

(statearr_26719[(9)] = inst_26655);

(statearr_26719[(10)] = inst_26656);

(statearr_26719[(12)] = inst_26657);

return statearr_26719;
})();
var statearr_26720_26754 = state_26702__$1;
(statearr_26720_26754[(2)] = null);

(statearr_26720_26754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (17))){
var inst_26668 = (state_26702[(7)]);
var inst_26672 = cljs.core.chunk_first.call(null,inst_26668);
var inst_26673 = cljs.core.chunk_rest.call(null,inst_26668);
var inst_26674 = cljs.core.count.call(null,inst_26672);
var inst_26654 = inst_26673;
var inst_26655 = inst_26672;
var inst_26656 = inst_26674;
var inst_26657 = (0);
var state_26702__$1 = (function (){var statearr_26721 = state_26702;
(statearr_26721[(8)] = inst_26654);

(statearr_26721[(9)] = inst_26655);

(statearr_26721[(10)] = inst_26656);

(statearr_26721[(12)] = inst_26657);

return statearr_26721;
})();
var statearr_26722_26755 = state_26702__$1;
(statearr_26722_26755[(2)] = null);

(statearr_26722_26755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (3))){
var inst_26700 = (state_26702[(2)]);
var state_26702__$1 = state_26702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26702__$1,inst_26700);
} else {
if((state_val_26703 === (12))){
var inst_26688 = (state_26702[(2)]);
var state_26702__$1 = state_26702;
var statearr_26723_26756 = state_26702__$1;
(statearr_26723_26756[(2)] = inst_26688);

(statearr_26723_26756[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (2))){
var state_26702__$1 = state_26702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26702__$1,(4),in$);
} else {
if((state_val_26703 === (23))){
var inst_26696 = (state_26702[(2)]);
var state_26702__$1 = state_26702;
var statearr_26724_26757 = state_26702__$1;
(statearr_26724_26757[(2)] = inst_26696);

(statearr_26724_26757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (19))){
var inst_26683 = (state_26702[(2)]);
var state_26702__$1 = state_26702;
var statearr_26725_26758 = state_26702__$1;
(statearr_26725_26758[(2)] = inst_26683);

(statearr_26725_26758[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (11))){
var inst_26668 = (state_26702[(7)]);
var inst_26654 = (state_26702[(8)]);
var inst_26668__$1 = cljs.core.seq.call(null,inst_26654);
var state_26702__$1 = (function (){var statearr_26726 = state_26702;
(statearr_26726[(7)] = inst_26668__$1);

return statearr_26726;
})();
if(inst_26668__$1){
var statearr_26727_26759 = state_26702__$1;
(statearr_26727_26759[(1)] = (14));

} else {
var statearr_26728_26760 = state_26702__$1;
(statearr_26728_26760[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (9))){
var inst_26690 = (state_26702[(2)]);
var inst_26691 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26702__$1 = (function (){var statearr_26729 = state_26702;
(statearr_26729[(15)] = inst_26690);

return statearr_26729;
})();
if(cljs.core.truth_(inst_26691)){
var statearr_26730_26761 = state_26702__$1;
(statearr_26730_26761[(1)] = (21));

} else {
var statearr_26731_26762 = state_26702__$1;
(statearr_26731_26762[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (5))){
var inst_26646 = cljs.core.async.close_BANG_.call(null,out);
var state_26702__$1 = state_26702;
var statearr_26732_26763 = state_26702__$1;
(statearr_26732_26763[(2)] = inst_26646);

(statearr_26732_26763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (14))){
var inst_26668 = (state_26702[(7)]);
var inst_26670 = cljs.core.chunked_seq_QMARK_.call(null,inst_26668);
var state_26702__$1 = state_26702;
if(inst_26670){
var statearr_26733_26764 = state_26702__$1;
(statearr_26733_26764[(1)] = (17));

} else {
var statearr_26734_26765 = state_26702__$1;
(statearr_26734_26765[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (16))){
var inst_26686 = (state_26702[(2)]);
var state_26702__$1 = state_26702;
var statearr_26735_26766 = state_26702__$1;
(statearr_26735_26766[(2)] = inst_26686);

(statearr_26735_26766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26703 === (10))){
var inst_26655 = (state_26702[(9)]);
var inst_26657 = (state_26702[(12)]);
var inst_26662 = cljs.core._nth.call(null,inst_26655,inst_26657);
var state_26702__$1 = state_26702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26702__$1,(13),out,inst_26662);
} else {
if((state_val_26703 === (18))){
var inst_26668 = (state_26702[(7)]);
var inst_26677 = cljs.core.first.call(null,inst_26668);
var state_26702__$1 = state_26702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26702__$1,(20),out,inst_26677);
} else {
if((state_val_26703 === (8))){
var inst_26656 = (state_26702[(10)]);
var inst_26657 = (state_26702[(12)]);
var inst_26659 = (inst_26657 < inst_26656);
var inst_26660 = inst_26659;
var state_26702__$1 = state_26702;
if(cljs.core.truth_(inst_26660)){
var statearr_26736_26767 = state_26702__$1;
(statearr_26736_26767[(1)] = (10));

} else {
var statearr_26737_26768 = state_26702__$1;
(statearr_26737_26768[(1)] = (11));

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
});})(c__19104__auto__))
;
return ((function (switch__19042__auto__,c__19104__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19043__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19043__auto____0 = (function (){
var statearr_26741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26741[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19043__auto__);

(statearr_26741[(1)] = (1));

return statearr_26741;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19043__auto____1 = (function (state_26702){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_26702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e26742){if((e26742 instanceof Object)){
var ex__19046__auto__ = e26742;
var statearr_26743_26769 = state_26702;
(statearr_26743_26769[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26770 = state_26702;
state_26702 = G__26770;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19043__auto__ = function(state_26702){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19043__auto____1.call(this,state_26702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19043__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19043__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto__))
})();
var state__19106__auto__ = (function (){var statearr_26744 = f__19105__auto__.call(null);
(statearr_26744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto__);

return statearr_26744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto__))
);

return c__19104__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__26772 = arguments.length;
switch (G__26772) {
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
var G__26775 = arguments.length;
switch (G__26775) {
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
var G__26778 = arguments.length;
switch (G__26778) {
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
var c__19104__auto___26828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___26828,out){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___26828,out){
return (function (state_26802){
var state_val_26803 = (state_26802[(1)]);
if((state_val_26803 === (7))){
var inst_26797 = (state_26802[(2)]);
var state_26802__$1 = state_26802;
var statearr_26804_26829 = state_26802__$1;
(statearr_26804_26829[(2)] = inst_26797);

(statearr_26804_26829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (1))){
var inst_26779 = null;
var state_26802__$1 = (function (){var statearr_26805 = state_26802;
(statearr_26805[(7)] = inst_26779);

return statearr_26805;
})();
var statearr_26806_26830 = state_26802__$1;
(statearr_26806_26830[(2)] = null);

(statearr_26806_26830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (4))){
var inst_26782 = (state_26802[(8)]);
var inst_26782__$1 = (state_26802[(2)]);
var inst_26783 = (inst_26782__$1 == null);
var inst_26784 = cljs.core.not.call(null,inst_26783);
var state_26802__$1 = (function (){var statearr_26807 = state_26802;
(statearr_26807[(8)] = inst_26782__$1);

return statearr_26807;
})();
if(inst_26784){
var statearr_26808_26831 = state_26802__$1;
(statearr_26808_26831[(1)] = (5));

} else {
var statearr_26809_26832 = state_26802__$1;
(statearr_26809_26832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (6))){
var state_26802__$1 = state_26802;
var statearr_26810_26833 = state_26802__$1;
(statearr_26810_26833[(2)] = null);

(statearr_26810_26833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (3))){
var inst_26799 = (state_26802[(2)]);
var inst_26800 = cljs.core.async.close_BANG_.call(null,out);
var state_26802__$1 = (function (){var statearr_26811 = state_26802;
(statearr_26811[(9)] = inst_26799);

return statearr_26811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26802__$1,inst_26800);
} else {
if((state_val_26803 === (2))){
var state_26802__$1 = state_26802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26802__$1,(4),ch);
} else {
if((state_val_26803 === (11))){
var inst_26782 = (state_26802[(8)]);
var inst_26791 = (state_26802[(2)]);
var inst_26779 = inst_26782;
var state_26802__$1 = (function (){var statearr_26812 = state_26802;
(statearr_26812[(10)] = inst_26791);

(statearr_26812[(7)] = inst_26779);

return statearr_26812;
})();
var statearr_26813_26834 = state_26802__$1;
(statearr_26813_26834[(2)] = null);

(statearr_26813_26834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (9))){
var inst_26782 = (state_26802[(8)]);
var state_26802__$1 = state_26802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26802__$1,(11),out,inst_26782);
} else {
if((state_val_26803 === (5))){
var inst_26782 = (state_26802[(8)]);
var inst_26779 = (state_26802[(7)]);
var inst_26786 = cljs.core._EQ_.call(null,inst_26782,inst_26779);
var state_26802__$1 = state_26802;
if(inst_26786){
var statearr_26815_26835 = state_26802__$1;
(statearr_26815_26835[(1)] = (8));

} else {
var statearr_26816_26836 = state_26802__$1;
(statearr_26816_26836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (10))){
var inst_26794 = (state_26802[(2)]);
var state_26802__$1 = state_26802;
var statearr_26817_26837 = state_26802__$1;
(statearr_26817_26837[(2)] = inst_26794);

(statearr_26817_26837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26803 === (8))){
var inst_26779 = (state_26802[(7)]);
var tmp26814 = inst_26779;
var inst_26779__$1 = tmp26814;
var state_26802__$1 = (function (){var statearr_26818 = state_26802;
(statearr_26818[(7)] = inst_26779__$1);

return statearr_26818;
})();
var statearr_26819_26838 = state_26802__$1;
(statearr_26819_26838[(2)] = null);

(statearr_26819_26838[(1)] = (2));


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
});})(c__19104__auto___26828,out))
;
return ((function (switch__19042__auto__,c__19104__auto___26828,out){
return (function() {
var cljs$core$async$state_machine__19043__auto__ = null;
var cljs$core$async$state_machine__19043__auto____0 = (function (){
var statearr_26823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26823[(0)] = cljs$core$async$state_machine__19043__auto__);

(statearr_26823[(1)] = (1));

return statearr_26823;
});
var cljs$core$async$state_machine__19043__auto____1 = (function (state_26802){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_26802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e26824){if((e26824 instanceof Object)){
var ex__19046__auto__ = e26824;
var statearr_26825_26839 = state_26802;
(statearr_26825_26839[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26840 = state_26802;
state_26802 = G__26840;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$state_machine__19043__auto__ = function(state_26802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19043__auto____1.call(this,state_26802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19043__auto____0;
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19043__auto____1;
return cljs$core$async$state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___26828,out))
})();
var state__19106__auto__ = (function (){var statearr_26826 = f__19105__auto__.call(null);
(statearr_26826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___26828);

return statearr_26826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___26828,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__26842 = arguments.length;
switch (G__26842) {
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
var c__19104__auto___26911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___26911,out){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___26911,out){
return (function (state_26880){
var state_val_26881 = (state_26880[(1)]);
if((state_val_26881 === (7))){
var inst_26876 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26882_26912 = state_26880__$1;
(statearr_26882_26912[(2)] = inst_26876);

(statearr_26882_26912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (1))){
var inst_26843 = (new Array(n));
var inst_26844 = inst_26843;
var inst_26845 = (0);
var state_26880__$1 = (function (){var statearr_26883 = state_26880;
(statearr_26883[(7)] = inst_26844);

(statearr_26883[(8)] = inst_26845);

return statearr_26883;
})();
var statearr_26884_26913 = state_26880__$1;
(statearr_26884_26913[(2)] = null);

(statearr_26884_26913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (4))){
var inst_26848 = (state_26880[(9)]);
var inst_26848__$1 = (state_26880[(2)]);
var inst_26849 = (inst_26848__$1 == null);
var inst_26850 = cljs.core.not.call(null,inst_26849);
var state_26880__$1 = (function (){var statearr_26885 = state_26880;
(statearr_26885[(9)] = inst_26848__$1);

return statearr_26885;
})();
if(inst_26850){
var statearr_26886_26914 = state_26880__$1;
(statearr_26886_26914[(1)] = (5));

} else {
var statearr_26887_26915 = state_26880__$1;
(statearr_26887_26915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (15))){
var inst_26870 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26888_26916 = state_26880__$1;
(statearr_26888_26916[(2)] = inst_26870);

(statearr_26888_26916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (13))){
var state_26880__$1 = state_26880;
var statearr_26889_26917 = state_26880__$1;
(statearr_26889_26917[(2)] = null);

(statearr_26889_26917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (6))){
var inst_26845 = (state_26880[(8)]);
var inst_26866 = (inst_26845 > (0));
var state_26880__$1 = state_26880;
if(cljs.core.truth_(inst_26866)){
var statearr_26890_26918 = state_26880__$1;
(statearr_26890_26918[(1)] = (12));

} else {
var statearr_26891_26919 = state_26880__$1;
(statearr_26891_26919[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (3))){
var inst_26878 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26880__$1,inst_26878);
} else {
if((state_val_26881 === (12))){
var inst_26844 = (state_26880[(7)]);
var inst_26868 = cljs.core.vec.call(null,inst_26844);
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26880__$1,(15),out,inst_26868);
} else {
if((state_val_26881 === (2))){
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26880__$1,(4),ch);
} else {
if((state_val_26881 === (11))){
var inst_26860 = (state_26880[(2)]);
var inst_26861 = (new Array(n));
var inst_26844 = inst_26861;
var inst_26845 = (0);
var state_26880__$1 = (function (){var statearr_26892 = state_26880;
(statearr_26892[(7)] = inst_26844);

(statearr_26892[(10)] = inst_26860);

(statearr_26892[(8)] = inst_26845);

return statearr_26892;
})();
var statearr_26893_26920 = state_26880__$1;
(statearr_26893_26920[(2)] = null);

(statearr_26893_26920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (9))){
var inst_26844 = (state_26880[(7)]);
var inst_26858 = cljs.core.vec.call(null,inst_26844);
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26880__$1,(11),out,inst_26858);
} else {
if((state_val_26881 === (5))){
var inst_26844 = (state_26880[(7)]);
var inst_26853 = (state_26880[(11)]);
var inst_26848 = (state_26880[(9)]);
var inst_26845 = (state_26880[(8)]);
var inst_26852 = (inst_26844[inst_26845] = inst_26848);
var inst_26853__$1 = (inst_26845 + (1));
var inst_26854 = (inst_26853__$1 < n);
var state_26880__$1 = (function (){var statearr_26894 = state_26880;
(statearr_26894[(11)] = inst_26853__$1);

(statearr_26894[(12)] = inst_26852);

return statearr_26894;
})();
if(cljs.core.truth_(inst_26854)){
var statearr_26895_26921 = state_26880__$1;
(statearr_26895_26921[(1)] = (8));

} else {
var statearr_26896_26922 = state_26880__$1;
(statearr_26896_26922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (14))){
var inst_26873 = (state_26880[(2)]);
var inst_26874 = cljs.core.async.close_BANG_.call(null,out);
var state_26880__$1 = (function (){var statearr_26898 = state_26880;
(statearr_26898[(13)] = inst_26873);

return statearr_26898;
})();
var statearr_26899_26923 = state_26880__$1;
(statearr_26899_26923[(2)] = inst_26874);

(statearr_26899_26923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (10))){
var inst_26864 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26900_26924 = state_26880__$1;
(statearr_26900_26924[(2)] = inst_26864);

(statearr_26900_26924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (8))){
var inst_26844 = (state_26880[(7)]);
var inst_26853 = (state_26880[(11)]);
var tmp26897 = inst_26844;
var inst_26844__$1 = tmp26897;
var inst_26845 = inst_26853;
var state_26880__$1 = (function (){var statearr_26901 = state_26880;
(statearr_26901[(7)] = inst_26844__$1);

(statearr_26901[(8)] = inst_26845);

return statearr_26901;
})();
var statearr_26902_26925 = state_26880__$1;
(statearr_26902_26925[(2)] = null);

(statearr_26902_26925[(1)] = (2));


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
});})(c__19104__auto___26911,out))
;
return ((function (switch__19042__auto__,c__19104__auto___26911,out){
return (function() {
var cljs$core$async$state_machine__19043__auto__ = null;
var cljs$core$async$state_machine__19043__auto____0 = (function (){
var statearr_26906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26906[(0)] = cljs$core$async$state_machine__19043__auto__);

(statearr_26906[(1)] = (1));

return statearr_26906;
});
var cljs$core$async$state_machine__19043__auto____1 = (function (state_26880){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_26880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e26907){if((e26907 instanceof Object)){
var ex__19046__auto__ = e26907;
var statearr_26908_26926 = state_26880;
(statearr_26908_26926[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26927 = state_26880;
state_26880 = G__26927;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$state_machine__19043__auto__ = function(state_26880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19043__auto____1.call(this,state_26880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19043__auto____0;
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19043__auto____1;
return cljs$core$async$state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___26911,out))
})();
var state__19106__auto__ = (function (){var statearr_26909 = f__19105__auto__.call(null);
(statearr_26909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___26911);

return statearr_26909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___26911,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__26929 = arguments.length;
switch (G__26929) {
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
var c__19104__auto___27002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___27002,out){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___27002,out){
return (function (state_26971){
var state_val_26972 = (state_26971[(1)]);
if((state_val_26972 === (7))){
var inst_26967 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
var statearr_26973_27003 = state_26971__$1;
(statearr_26973_27003[(2)] = inst_26967);

(statearr_26973_27003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (1))){
var inst_26930 = [];
var inst_26931 = inst_26930;
var inst_26932 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26971__$1 = (function (){var statearr_26974 = state_26971;
(statearr_26974[(7)] = inst_26931);

(statearr_26974[(8)] = inst_26932);

return statearr_26974;
})();
var statearr_26975_27004 = state_26971__$1;
(statearr_26975_27004[(2)] = null);

(statearr_26975_27004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (4))){
var inst_26935 = (state_26971[(9)]);
var inst_26935__$1 = (state_26971[(2)]);
var inst_26936 = (inst_26935__$1 == null);
var inst_26937 = cljs.core.not.call(null,inst_26936);
var state_26971__$1 = (function (){var statearr_26976 = state_26971;
(statearr_26976[(9)] = inst_26935__$1);

return statearr_26976;
})();
if(inst_26937){
var statearr_26977_27005 = state_26971__$1;
(statearr_26977_27005[(1)] = (5));

} else {
var statearr_26978_27006 = state_26971__$1;
(statearr_26978_27006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (15))){
var inst_26961 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
var statearr_26979_27007 = state_26971__$1;
(statearr_26979_27007[(2)] = inst_26961);

(statearr_26979_27007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (13))){
var state_26971__$1 = state_26971;
var statearr_26980_27008 = state_26971__$1;
(statearr_26980_27008[(2)] = null);

(statearr_26980_27008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (6))){
var inst_26931 = (state_26971[(7)]);
var inst_26956 = inst_26931.length;
var inst_26957 = (inst_26956 > (0));
var state_26971__$1 = state_26971;
if(cljs.core.truth_(inst_26957)){
var statearr_26981_27009 = state_26971__$1;
(statearr_26981_27009[(1)] = (12));

} else {
var statearr_26982_27010 = state_26971__$1;
(statearr_26982_27010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (3))){
var inst_26969 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26971__$1,inst_26969);
} else {
if((state_val_26972 === (12))){
var inst_26931 = (state_26971[(7)]);
var inst_26959 = cljs.core.vec.call(null,inst_26931);
var state_26971__$1 = state_26971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26971__$1,(15),out,inst_26959);
} else {
if((state_val_26972 === (2))){
var state_26971__$1 = state_26971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26971__$1,(4),ch);
} else {
if((state_val_26972 === (11))){
var inst_26939 = (state_26971[(10)]);
var inst_26935 = (state_26971[(9)]);
var inst_26949 = (state_26971[(2)]);
var inst_26950 = [];
var inst_26951 = inst_26950.push(inst_26935);
var inst_26931 = inst_26950;
var inst_26932 = inst_26939;
var state_26971__$1 = (function (){var statearr_26983 = state_26971;
(statearr_26983[(7)] = inst_26931);

(statearr_26983[(11)] = inst_26949);

(statearr_26983[(12)] = inst_26951);

(statearr_26983[(8)] = inst_26932);

return statearr_26983;
})();
var statearr_26984_27011 = state_26971__$1;
(statearr_26984_27011[(2)] = null);

(statearr_26984_27011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (9))){
var inst_26931 = (state_26971[(7)]);
var inst_26947 = cljs.core.vec.call(null,inst_26931);
var state_26971__$1 = state_26971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26971__$1,(11),out,inst_26947);
} else {
if((state_val_26972 === (5))){
var inst_26939 = (state_26971[(10)]);
var inst_26932 = (state_26971[(8)]);
var inst_26935 = (state_26971[(9)]);
var inst_26939__$1 = f.call(null,inst_26935);
var inst_26940 = cljs.core._EQ_.call(null,inst_26939__$1,inst_26932);
var inst_26941 = cljs.core.keyword_identical_QMARK_.call(null,inst_26932,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26942 = (inst_26940) || (inst_26941);
var state_26971__$1 = (function (){var statearr_26985 = state_26971;
(statearr_26985[(10)] = inst_26939__$1);

return statearr_26985;
})();
if(cljs.core.truth_(inst_26942)){
var statearr_26986_27012 = state_26971__$1;
(statearr_26986_27012[(1)] = (8));

} else {
var statearr_26987_27013 = state_26971__$1;
(statearr_26987_27013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (14))){
var inst_26964 = (state_26971[(2)]);
var inst_26965 = cljs.core.async.close_BANG_.call(null,out);
var state_26971__$1 = (function (){var statearr_26989 = state_26971;
(statearr_26989[(13)] = inst_26964);

return statearr_26989;
})();
var statearr_26990_27014 = state_26971__$1;
(statearr_26990_27014[(2)] = inst_26965);

(statearr_26990_27014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (10))){
var inst_26954 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
var statearr_26991_27015 = state_26971__$1;
(statearr_26991_27015[(2)] = inst_26954);

(statearr_26991_27015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (8))){
var inst_26931 = (state_26971[(7)]);
var inst_26939 = (state_26971[(10)]);
var inst_26935 = (state_26971[(9)]);
var inst_26944 = inst_26931.push(inst_26935);
var tmp26988 = inst_26931;
var inst_26931__$1 = tmp26988;
var inst_26932 = inst_26939;
var state_26971__$1 = (function (){var statearr_26992 = state_26971;
(statearr_26992[(7)] = inst_26931__$1);

(statearr_26992[(8)] = inst_26932);

(statearr_26992[(14)] = inst_26944);

return statearr_26992;
})();
var statearr_26993_27016 = state_26971__$1;
(statearr_26993_27016[(2)] = null);

(statearr_26993_27016[(1)] = (2));


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
});})(c__19104__auto___27002,out))
;
return ((function (switch__19042__auto__,c__19104__auto___27002,out){
return (function() {
var cljs$core$async$state_machine__19043__auto__ = null;
var cljs$core$async$state_machine__19043__auto____0 = (function (){
var statearr_26997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26997[(0)] = cljs$core$async$state_machine__19043__auto__);

(statearr_26997[(1)] = (1));

return statearr_26997;
});
var cljs$core$async$state_machine__19043__auto____1 = (function (state_26971){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_26971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e26998){if((e26998 instanceof Object)){
var ex__19046__auto__ = e26998;
var statearr_26999_27017 = state_26971;
(statearr_26999_27017[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27018 = state_26971;
state_26971 = G__27018;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
cljs$core$async$state_machine__19043__auto__ = function(state_26971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19043__auto____1.call(this,state_26971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19043__auto____0;
cljs$core$async$state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19043__auto____1;
return cljs$core$async$state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___27002,out))
})();
var state__19106__auto__ = (function (){var statearr_27000 = f__19105__auto__.call(null);
(statearr_27000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___27002);

return statearr_27000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___27002,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1438966781434