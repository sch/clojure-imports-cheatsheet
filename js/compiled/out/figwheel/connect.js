// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('clojure_imports_explained.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19951__delegate = function (x){
if(cljs.core.truth_(clojure_imports_explained.core.on_js_reload)){
return cljs.core.apply.call(null,clojure_imports_explained.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'clojure-imports-explained.core/on-js-reload' is missing");
}
};
var G__19951 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19952__i = 0, G__19952__a = new Array(arguments.length -  0);
while (G__19952__i < G__19952__a.length) {G__19952__a[G__19952__i] = arguments[G__19952__i + 0]; ++G__19952__i;}
  x = new cljs.core.IndexedSeq(G__19952__a,0);
} 
return G__19951__delegate.call(this,x);};
G__19951.cljs$lang$maxFixedArity = 0;
G__19951.cljs$lang$applyTo = (function (arglist__19953){
var x = cljs.core.seq(arglist__19953);
return G__19951__delegate(x);
});
G__19951.cljs$core$IFn$_invoke$arity$variadic = G__19951__delegate;
return G__19951;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1438984002659