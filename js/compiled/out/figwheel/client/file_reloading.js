// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__23815_SHARP_,p2__23816_SHARP_){
var and__16082__auto__ = p1__23815_SHARP_;
if(cljs.core.truth_(and__16082__auto__)){
return p2__23816_SHARP_;
} else {
return and__16082__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16094__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16094__auto__){
return or__16094__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16094__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16094__auto__){
return or__16094__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16094__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16094__auto__)){
return or__16094__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__16989__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16990__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16991__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16992__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16993__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16993__auto__,method_table__16989__auto__,prefer_table__16990__auto__,method_cache__16991__auto__,cached_hierarchy__16992__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__23817){
var map__23818 = p__23817;
var map__23818__$1 = ((cljs.core.seq_QMARK_.call(null,map__23818))?cljs.core.apply.call(null,cljs.core.hash_map,map__23818):map__23818);
var file = cljs.core.get.call(null,map__23818__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__23819){
var map__23820 = p__23819;
var map__23820__$1 = ((cljs.core.seq_QMARK_.call(null,map__23820))?cljs.core.apply.call(null,cljs.core.hash_map,map__23820):map__23820);
var namespace = cljs.core.get.call(null,map__23820__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__16989__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16990__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16991__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16992__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16993__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16993__auto__,method_table__16989__auto__,prefer_table__16990__auto__,method_cache__16991__auto__,cached_hierarchy__16992__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e23821){if((e23821 instanceof Error)){
var e = e23821;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23821;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__23823 = arguments.length;
switch (G__23823) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23825,callback){
var map__23827 = p__23825;
var map__23827__$1 = ((cljs.core.seq_QMARK_.call(null,map__23827))?cljs.core.apply.call(null,cljs.core.hash_map,map__23827):map__23827);
var file_msg = map__23827__$1;
var request_url = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23827,map__23827__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23827,map__23827__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23828){
var map__23830 = p__23828;
var map__23830__$1 = ((cljs.core.seq_QMARK_.call(null,map__23830))?cljs.core.apply.call(null,cljs.core.hash_map,map__23830):map__23830);
var file_msg = map__23830__$1;
var namespace = cljs.core.get.call(null,map__23830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__23830__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16094__auto__ = meta_data;
if(cljs.core.truth_(or__16094__auto__)){
return or__16094__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16082__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16082__auto__){
var or__16094__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16094__auto__)){
return or__16094__auto__;
} else {
var or__16094__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16094__auto____$1)){
return or__16094__auto____$1;
} else {
var and__16082__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16082__auto____$1){
var or__16094__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16094__auto____$2){
return or__16094__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16082__auto____$1;
}
}
}
} else {
return and__16082__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23831,callback){
var map__23833 = p__23831;
var map__23833__$1 = ((cljs.core.seq_QMARK_.call(null,map__23833))?cljs.core.apply.call(null,cljs.core.hash_map,map__23833):map__23833);
var file_msg = map__23833__$1;
var request_url = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19104__auto___23920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___23920,out){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___23920,out){
return (function (state_23902){
var state_val_23903 = (state_23902[(1)]);
if((state_val_23903 === (1))){
var inst_23880 = cljs.core.nth.call(null,files,(0),null);
var inst_23881 = cljs.core.nthnext.call(null,files,(1));
var inst_23882 = files;
var state_23902__$1 = (function (){var statearr_23904 = state_23902;
(statearr_23904[(7)] = inst_23880);

(statearr_23904[(8)] = inst_23881);

(statearr_23904[(9)] = inst_23882);

return statearr_23904;
})();
var statearr_23905_23921 = state_23902__$1;
(statearr_23905_23921[(2)] = null);

(statearr_23905_23921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (2))){
var inst_23885 = (state_23902[(10)]);
var inst_23882 = (state_23902[(9)]);
var inst_23885__$1 = cljs.core.nth.call(null,inst_23882,(0),null);
var inst_23886 = cljs.core.nthnext.call(null,inst_23882,(1));
var inst_23887 = (inst_23885__$1 == null);
var inst_23888 = cljs.core.not.call(null,inst_23887);
var state_23902__$1 = (function (){var statearr_23906 = state_23902;
(statearr_23906[(10)] = inst_23885__$1);

(statearr_23906[(11)] = inst_23886);

return statearr_23906;
})();
if(inst_23888){
var statearr_23907_23922 = state_23902__$1;
(statearr_23907_23922[(1)] = (4));

} else {
var statearr_23908_23923 = state_23902__$1;
(statearr_23908_23923[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (3))){
var inst_23900 = (state_23902[(2)]);
var state_23902__$1 = state_23902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23902__$1,inst_23900);
} else {
if((state_val_23903 === (4))){
var inst_23885 = (state_23902[(10)]);
var inst_23890 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23885);
var state_23902__$1 = state_23902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23902__$1,(7),inst_23890);
} else {
if((state_val_23903 === (5))){
var inst_23896 = cljs.core.async.close_BANG_.call(null,out);
var state_23902__$1 = state_23902;
var statearr_23909_23924 = state_23902__$1;
(statearr_23909_23924[(2)] = inst_23896);

(statearr_23909_23924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (6))){
var inst_23898 = (state_23902[(2)]);
var state_23902__$1 = state_23902;
var statearr_23910_23925 = state_23902__$1;
(statearr_23910_23925[(2)] = inst_23898);

(statearr_23910_23925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (7))){
var inst_23886 = (state_23902[(11)]);
var inst_23892 = (state_23902[(2)]);
var inst_23893 = cljs.core.async.put_BANG_.call(null,out,inst_23892);
var inst_23882 = inst_23886;
var state_23902__$1 = (function (){var statearr_23911 = state_23902;
(statearr_23911[(9)] = inst_23882);

(statearr_23911[(12)] = inst_23893);

return statearr_23911;
})();
var statearr_23912_23926 = state_23902__$1;
(statearr_23912_23926[(2)] = null);

(statearr_23912_23926[(1)] = (2));


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
});})(c__19104__auto___23920,out))
;
return ((function (switch__19042__auto__,c__19104__auto___23920,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto____0 = (function (){
var statearr_23916 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23916[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto__);

(statearr_23916[(1)] = (1));

return statearr_23916;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto____1 = (function (state_23902){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_23902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e23917){if((e23917 instanceof Object)){
var ex__19046__auto__ = e23917;
var statearr_23918_23927 = state_23902;
(statearr_23918_23927[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23928 = state_23902;
state_23902 = G__23928;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto__ = function(state_23902){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto____1.call(this,state_23902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___23920,out))
})();
var state__19106__auto__ = (function (){var statearr_23919 = f__19105__auto__.call(null);
(statearr_23919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___23920);

return statearr_23919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___23920,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__23929,p__23930){
var map__23933 = p__23929;
var map__23933__$1 = ((cljs.core.seq_QMARK_.call(null,map__23933))?cljs.core.apply.call(null,cljs.core.hash_map,map__23933):map__23933);
var opts = map__23933__$1;
var url_rewriter = cljs.core.get.call(null,map__23933__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__23934 = p__23930;
var map__23934__$1 = ((cljs.core.seq_QMARK_.call(null,map__23934))?cljs.core.apply.call(null,cljs.core.hash_map,map__23934):map__23934);
var file_msg = map__23934__$1;
var file = cljs.core.get.call(null,map__23934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23935,opts){
var map__23938 = p__23935;
var map__23938__$1 = ((cljs.core.seq_QMARK_.call(null,map__23938))?cljs.core.apply.call(null,cljs.core.hash_map,map__23938):map__23938);
var eval_body__$1 = cljs.core.get.call(null,map__23938__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23938__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16082__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16082__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16082__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23939){var e = e23939;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23944,p__23945){
var map__24147 = p__23944;
var map__24147__$1 = ((cljs.core.seq_QMARK_.call(null,map__24147))?cljs.core.apply.call(null,cljs.core.hash_map,map__24147):map__24147);
var opts = map__24147__$1;
var before_jsload = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__24148 = p__23945;
var map__24148__$1 = ((cljs.core.seq_QMARK_.call(null,map__24148))?cljs.core.apply.call(null,cljs.core.hash_map,map__24148):map__24148);
var msg = map__24148__$1;
var files = cljs.core.get.call(null,map__24148__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19104__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files){
return (function (state_24273){
var state_val_24274 = (state_24273[(1)]);
if((state_val_24274 === (7))){
var inst_24163 = (state_24273[(7)]);
var inst_24162 = (state_24273[(8)]);
var inst_24161 = (state_24273[(9)]);
var inst_24160 = (state_24273[(10)]);
var inst_24168 = cljs.core._nth.call(null,inst_24161,inst_24163);
var inst_24169 = figwheel.client.file_reloading.eval_body.call(null,inst_24168,opts);
var inst_24170 = (inst_24163 + (1));
var tmp24275 = inst_24162;
var tmp24276 = inst_24161;
var tmp24277 = inst_24160;
var inst_24160__$1 = tmp24277;
var inst_24161__$1 = tmp24276;
var inst_24162__$1 = tmp24275;
var inst_24163__$1 = inst_24170;
var state_24273__$1 = (function (){var statearr_24278 = state_24273;
(statearr_24278[(7)] = inst_24163__$1);

(statearr_24278[(8)] = inst_24162__$1);

(statearr_24278[(11)] = inst_24169);

(statearr_24278[(9)] = inst_24161__$1);

(statearr_24278[(10)] = inst_24160__$1);

return statearr_24278;
})();
var statearr_24279_24348 = state_24273__$1;
(statearr_24279_24348[(2)] = null);

(statearr_24279_24348[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (20))){
var inst_24206 = (state_24273[(12)]);
var inst_24212 = (state_24273[(13)]);
var inst_24209 = (state_24273[(14)]);
var inst_24210 = (state_24273[(15)]);
var inst_24205 = (state_24273[(16)]);
var inst_24215 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24217 = (function (){var all_files = inst_24205;
var files_SINGLEQUOTE_ = inst_24206;
var res_SINGLEQUOTE_ = inst_24209;
var res = inst_24210;
var files_not_loaded = inst_24212;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24206,inst_24212,inst_24209,inst_24210,inst_24205,inst_24215,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files){
return (function (p__24216){
var map__24280 = p__24216;
var map__24280__$1 = ((cljs.core.seq_QMARK_.call(null,map__24280))?cljs.core.apply.call(null,cljs.core.hash_map,map__24280):map__24280);
var namespace = cljs.core.get.call(null,map__24280__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24280__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24206,inst_24212,inst_24209,inst_24210,inst_24205,inst_24215,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files))
})();
var inst_24218 = cljs.core.map.call(null,inst_24217,inst_24210);
var inst_24219 = cljs.core.pr_str.call(null,inst_24218);
var inst_24220 = figwheel.client.utils.log.call(null,inst_24219);
var inst_24221 = (function (){var all_files = inst_24205;
var files_SINGLEQUOTE_ = inst_24206;
var res_SINGLEQUOTE_ = inst_24209;
var res = inst_24210;
var files_not_loaded = inst_24212;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24206,inst_24212,inst_24209,inst_24210,inst_24205,inst_24215,inst_24217,inst_24218,inst_24219,inst_24220,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24206,inst_24212,inst_24209,inst_24210,inst_24205,inst_24215,inst_24217,inst_24218,inst_24219,inst_24220,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files))
})();
var inst_24222 = setTimeout(inst_24221,(10));
var state_24273__$1 = (function (){var statearr_24281 = state_24273;
(statearr_24281[(17)] = inst_24220);

(statearr_24281[(18)] = inst_24215);

return statearr_24281;
})();
var statearr_24282_24349 = state_24273__$1;
(statearr_24282_24349[(2)] = inst_24222);

(statearr_24282_24349[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (27))){
var inst_24232 = (state_24273[(19)]);
var state_24273__$1 = state_24273;
var statearr_24283_24350 = state_24273__$1;
(statearr_24283_24350[(2)] = inst_24232);

(statearr_24283_24350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (1))){
var inst_24152 = (state_24273[(20)]);
var inst_24149 = before_jsload.call(null,files);
var inst_24150 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24151 = (function (){return ((function (inst_24152,inst_24149,inst_24150,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files){
return (function (p1__23940_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23940_SHARP_);
});
;})(inst_24152,inst_24149,inst_24150,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files))
})();
var inst_24152__$1 = cljs.core.filter.call(null,inst_24151,files);
var inst_24153 = cljs.core.not_empty.call(null,inst_24152__$1);
var state_24273__$1 = (function (){var statearr_24284 = state_24273;
(statearr_24284[(20)] = inst_24152__$1);

(statearr_24284[(21)] = inst_24150);

(statearr_24284[(22)] = inst_24149);

return statearr_24284;
})();
if(cljs.core.truth_(inst_24153)){
var statearr_24285_24351 = state_24273__$1;
(statearr_24285_24351[(1)] = (2));

} else {
var statearr_24286_24352 = state_24273__$1;
(statearr_24286_24352[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (24))){
var state_24273__$1 = state_24273;
var statearr_24287_24353 = state_24273__$1;
(statearr_24287_24353[(2)] = null);

(statearr_24287_24353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (4))){
var inst_24197 = (state_24273[(2)]);
var inst_24198 = (function (){return ((function (inst_24197,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files){
return (function (p1__23941_SHARP_){
var and__16082__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23941_SHARP_);
if(cljs.core.truth_(and__16082__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23941_SHARP_));
} else {
return and__16082__auto__;
}
});
;})(inst_24197,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files))
})();
var inst_24199 = cljs.core.filter.call(null,inst_24198,files);
var state_24273__$1 = (function (){var statearr_24288 = state_24273;
(statearr_24288[(23)] = inst_24199);

(statearr_24288[(24)] = inst_24197);

return statearr_24288;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_24289_24354 = state_24273__$1;
(statearr_24289_24354[(1)] = (16));

} else {
var statearr_24290_24355 = state_24273__$1;
(statearr_24290_24355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (15))){
var inst_24187 = (state_24273[(2)]);
var state_24273__$1 = state_24273;
var statearr_24291_24356 = state_24273__$1;
(statearr_24291_24356[(2)] = inst_24187);

(statearr_24291_24356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (21))){
var state_24273__$1 = state_24273;
var statearr_24292_24357 = state_24273__$1;
(statearr_24292_24357[(2)] = null);

(statearr_24292_24357[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (31))){
var inst_24240 = (state_24273[(25)]);
var inst_24250 = (state_24273[(2)]);
var inst_24251 = cljs.core.not_empty.call(null,inst_24240);
var state_24273__$1 = (function (){var statearr_24293 = state_24273;
(statearr_24293[(26)] = inst_24250);

return statearr_24293;
})();
if(cljs.core.truth_(inst_24251)){
var statearr_24294_24358 = state_24273__$1;
(statearr_24294_24358[(1)] = (32));

} else {
var statearr_24295_24359 = state_24273__$1;
(statearr_24295_24359[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (32))){
var inst_24240 = (state_24273[(25)]);
var inst_24253 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24240);
var inst_24254 = cljs.core.pr_str.call(null,inst_24253);
var inst_24255 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_24254)].join('');
var inst_24256 = figwheel.client.utils.log.call(null,inst_24255);
var state_24273__$1 = state_24273;
var statearr_24296_24360 = state_24273__$1;
(statearr_24296_24360[(2)] = inst_24256);

(statearr_24296_24360[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (33))){
var state_24273__$1 = state_24273;
var statearr_24297_24361 = state_24273__$1;
(statearr_24297_24361[(2)] = null);

(statearr_24297_24361[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (13))){
var inst_24173 = (state_24273[(27)]);
var inst_24177 = cljs.core.chunk_first.call(null,inst_24173);
var inst_24178 = cljs.core.chunk_rest.call(null,inst_24173);
var inst_24179 = cljs.core.count.call(null,inst_24177);
var inst_24160 = inst_24178;
var inst_24161 = inst_24177;
var inst_24162 = inst_24179;
var inst_24163 = (0);
var state_24273__$1 = (function (){var statearr_24298 = state_24273;
(statearr_24298[(7)] = inst_24163);

(statearr_24298[(8)] = inst_24162);

(statearr_24298[(9)] = inst_24161);

(statearr_24298[(10)] = inst_24160);

return statearr_24298;
})();
var statearr_24299_24362 = state_24273__$1;
(statearr_24299_24362[(2)] = null);

(statearr_24299_24362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (22))){
var inst_24212 = (state_24273[(13)]);
var inst_24225 = (state_24273[(2)]);
var inst_24226 = cljs.core.not_empty.call(null,inst_24212);
var state_24273__$1 = (function (){var statearr_24300 = state_24273;
(statearr_24300[(28)] = inst_24225);

return statearr_24300;
})();
if(cljs.core.truth_(inst_24226)){
var statearr_24301_24363 = state_24273__$1;
(statearr_24301_24363[(1)] = (23));

} else {
var statearr_24302_24364 = state_24273__$1;
(statearr_24302_24364[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (36))){
var state_24273__$1 = state_24273;
var statearr_24303_24365 = state_24273__$1;
(statearr_24303_24365[(2)] = null);

(statearr_24303_24365[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (29))){
var inst_24239 = (state_24273[(29)]);
var inst_24244 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24239);
var inst_24245 = cljs.core.pr_str.call(null,inst_24244);
var inst_24246 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24245)].join('');
var inst_24247 = figwheel.client.utils.log.call(null,inst_24246);
var state_24273__$1 = state_24273;
var statearr_24304_24366 = state_24273__$1;
(statearr_24304_24366[(2)] = inst_24247);

(statearr_24304_24366[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (6))){
var inst_24194 = (state_24273[(2)]);
var state_24273__$1 = state_24273;
var statearr_24305_24367 = state_24273__$1;
(statearr_24305_24367[(2)] = inst_24194);

(statearr_24305_24367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (28))){
var inst_24239 = (state_24273[(29)]);
var inst_24238 = (state_24273[(2)]);
var inst_24239__$1 = cljs.core.get.call(null,inst_24238,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24240 = cljs.core.get.call(null,inst_24238,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_24241 = cljs.core.get.call(null,inst_24238,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24242 = cljs.core.not_empty.call(null,inst_24239__$1);
var state_24273__$1 = (function (){var statearr_24306 = state_24273;
(statearr_24306[(25)] = inst_24240);

(statearr_24306[(29)] = inst_24239__$1);

(statearr_24306[(30)] = inst_24241);

return statearr_24306;
})();
if(cljs.core.truth_(inst_24242)){
var statearr_24307_24368 = state_24273__$1;
(statearr_24307_24368[(1)] = (29));

} else {
var statearr_24308_24369 = state_24273__$1;
(statearr_24308_24369[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (25))){
var inst_24271 = (state_24273[(2)]);
var state_24273__$1 = state_24273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24273__$1,inst_24271);
} else {
if((state_val_24274 === (34))){
var inst_24241 = (state_24273[(30)]);
var inst_24259 = (state_24273[(2)]);
var inst_24260 = cljs.core.not_empty.call(null,inst_24241);
var state_24273__$1 = (function (){var statearr_24309 = state_24273;
(statearr_24309[(31)] = inst_24259);

return statearr_24309;
})();
if(cljs.core.truth_(inst_24260)){
var statearr_24310_24370 = state_24273__$1;
(statearr_24310_24370[(1)] = (35));

} else {
var statearr_24311_24371 = state_24273__$1;
(statearr_24311_24371[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (17))){
var inst_24199 = (state_24273[(23)]);
var state_24273__$1 = state_24273;
var statearr_24312_24372 = state_24273__$1;
(statearr_24312_24372[(2)] = inst_24199);

(statearr_24312_24372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (3))){
var state_24273__$1 = state_24273;
var statearr_24313_24373 = state_24273__$1;
(statearr_24313_24373[(2)] = null);

(statearr_24313_24373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (12))){
var inst_24190 = (state_24273[(2)]);
var state_24273__$1 = state_24273;
var statearr_24314_24374 = state_24273__$1;
(statearr_24314_24374[(2)] = inst_24190);

(statearr_24314_24374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (2))){
var inst_24152 = (state_24273[(20)]);
var inst_24159 = cljs.core.seq.call(null,inst_24152);
var inst_24160 = inst_24159;
var inst_24161 = null;
var inst_24162 = (0);
var inst_24163 = (0);
var state_24273__$1 = (function (){var statearr_24315 = state_24273;
(statearr_24315[(7)] = inst_24163);

(statearr_24315[(8)] = inst_24162);

(statearr_24315[(9)] = inst_24161);

(statearr_24315[(10)] = inst_24160);

return statearr_24315;
})();
var statearr_24316_24375 = state_24273__$1;
(statearr_24316_24375[(2)] = null);

(statearr_24316_24375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (23))){
var inst_24206 = (state_24273[(12)]);
var inst_24232 = (state_24273[(19)]);
var inst_24212 = (state_24273[(13)]);
var inst_24209 = (state_24273[(14)]);
var inst_24210 = (state_24273[(15)]);
var inst_24205 = (state_24273[(16)]);
var inst_24228 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24231 = (function (){var all_files = inst_24205;
var files_SINGLEQUOTE_ = inst_24206;
var res_SINGLEQUOTE_ = inst_24209;
var res = inst_24210;
var files_not_loaded = inst_24212;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24206,inst_24232,inst_24212,inst_24209,inst_24210,inst_24205,inst_24228,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files){
return (function (p__24230){
var map__24317 = p__24230;
var map__24317__$1 = ((cljs.core.seq_QMARK_.call(null,map__24317))?cljs.core.apply.call(null,cljs.core.hash_map,map__24317):map__24317);
var meta_data = cljs.core.get.call(null,map__24317__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24206,inst_24232,inst_24212,inst_24209,inst_24210,inst_24205,inst_24228,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files))
})();
var inst_24232__$1 = cljs.core.group_by.call(null,inst_24231,inst_24212);
var inst_24233 = cljs.core.seq_QMARK_.call(null,inst_24232__$1);
var state_24273__$1 = (function (){var statearr_24318 = state_24273;
(statearr_24318[(19)] = inst_24232__$1);

(statearr_24318[(32)] = inst_24228);

return statearr_24318;
})();
if(inst_24233){
var statearr_24319_24376 = state_24273__$1;
(statearr_24319_24376[(1)] = (26));

} else {
var statearr_24320_24377 = state_24273__$1;
(statearr_24320_24377[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (35))){
var inst_24241 = (state_24273[(30)]);
var inst_24262 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24241);
var inst_24263 = cljs.core.pr_str.call(null,inst_24262);
var inst_24264 = [cljs.core.str("not required: "),cljs.core.str(inst_24263)].join('');
var inst_24265 = figwheel.client.utils.log.call(null,inst_24264);
var state_24273__$1 = state_24273;
var statearr_24321_24378 = state_24273__$1;
(statearr_24321_24378[(2)] = inst_24265);

(statearr_24321_24378[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (19))){
var inst_24206 = (state_24273[(12)]);
var inst_24209 = (state_24273[(14)]);
var inst_24210 = (state_24273[(15)]);
var inst_24205 = (state_24273[(16)]);
var inst_24209__$1 = (state_24273[(2)]);
var inst_24210__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24209__$1);
var inst_24211 = (function (){var all_files = inst_24205;
var files_SINGLEQUOTE_ = inst_24206;
var res_SINGLEQUOTE_ = inst_24209__$1;
var res = inst_24210__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_24206,inst_24209,inst_24210,inst_24205,inst_24209__$1,inst_24210__$1,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files){
return (function (p1__23943_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23943_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_24206,inst_24209,inst_24210,inst_24205,inst_24209__$1,inst_24210__$1,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files))
})();
var inst_24212 = cljs.core.filter.call(null,inst_24211,inst_24209__$1);
var inst_24213 = cljs.core.not_empty.call(null,inst_24210__$1);
var state_24273__$1 = (function (){var statearr_24322 = state_24273;
(statearr_24322[(13)] = inst_24212);

(statearr_24322[(14)] = inst_24209__$1);

(statearr_24322[(15)] = inst_24210__$1);

return statearr_24322;
})();
if(cljs.core.truth_(inst_24213)){
var statearr_24323_24379 = state_24273__$1;
(statearr_24323_24379[(1)] = (20));

} else {
var statearr_24324_24380 = state_24273__$1;
(statearr_24324_24380[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (11))){
var state_24273__$1 = state_24273;
var statearr_24325_24381 = state_24273__$1;
(statearr_24325_24381[(2)] = null);

(statearr_24325_24381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (9))){
var inst_24192 = (state_24273[(2)]);
var state_24273__$1 = state_24273;
var statearr_24326_24382 = state_24273__$1;
(statearr_24326_24382[(2)] = inst_24192);

(statearr_24326_24382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (5))){
var inst_24163 = (state_24273[(7)]);
var inst_24162 = (state_24273[(8)]);
var inst_24165 = (inst_24163 < inst_24162);
var inst_24166 = inst_24165;
var state_24273__$1 = state_24273;
if(cljs.core.truth_(inst_24166)){
var statearr_24327_24383 = state_24273__$1;
(statearr_24327_24383[(1)] = (7));

} else {
var statearr_24328_24384 = state_24273__$1;
(statearr_24328_24384[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (14))){
var inst_24173 = (state_24273[(27)]);
var inst_24182 = cljs.core.first.call(null,inst_24173);
var inst_24183 = figwheel.client.file_reloading.eval_body.call(null,inst_24182,opts);
var inst_24184 = cljs.core.next.call(null,inst_24173);
var inst_24160 = inst_24184;
var inst_24161 = null;
var inst_24162 = (0);
var inst_24163 = (0);
var state_24273__$1 = (function (){var statearr_24329 = state_24273;
(statearr_24329[(33)] = inst_24183);

(statearr_24329[(7)] = inst_24163);

(statearr_24329[(8)] = inst_24162);

(statearr_24329[(9)] = inst_24161);

(statearr_24329[(10)] = inst_24160);

return statearr_24329;
})();
var statearr_24330_24385 = state_24273__$1;
(statearr_24330_24385[(2)] = null);

(statearr_24330_24385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (26))){
var inst_24232 = (state_24273[(19)]);
var inst_24235 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24232);
var state_24273__$1 = state_24273;
var statearr_24331_24386 = state_24273__$1;
(statearr_24331_24386[(2)] = inst_24235);

(statearr_24331_24386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (16))){
var inst_24199 = (state_24273[(23)]);
var inst_24201 = (function (){var all_files = inst_24199;
return ((function (all_files,inst_24199,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files){
return (function (p1__23942_SHARP_){
return cljs.core.update_in.call(null,p1__23942_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_24199,state_val_24274,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files))
})();
var inst_24202 = cljs.core.map.call(null,inst_24201,inst_24199);
var state_24273__$1 = state_24273;
var statearr_24332_24387 = state_24273__$1;
(statearr_24332_24387[(2)] = inst_24202);

(statearr_24332_24387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (30))){
var state_24273__$1 = state_24273;
var statearr_24333_24388 = state_24273__$1;
(statearr_24333_24388[(2)] = null);

(statearr_24333_24388[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (10))){
var inst_24173 = (state_24273[(27)]);
var inst_24175 = cljs.core.chunked_seq_QMARK_.call(null,inst_24173);
var state_24273__$1 = state_24273;
if(inst_24175){
var statearr_24334_24389 = state_24273__$1;
(statearr_24334_24389[(1)] = (13));

} else {
var statearr_24335_24390 = state_24273__$1;
(statearr_24335_24390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (18))){
var inst_24206 = (state_24273[(12)]);
var inst_24205 = (state_24273[(16)]);
var inst_24205__$1 = (state_24273[(2)]);
var inst_24206__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_24205__$1);
var inst_24207 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24206__$1);
var state_24273__$1 = (function (){var statearr_24336 = state_24273;
(statearr_24336[(12)] = inst_24206__$1);

(statearr_24336[(16)] = inst_24205__$1);

return statearr_24336;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24273__$1,(19),inst_24207);
} else {
if((state_val_24274 === (37))){
var inst_24268 = (state_24273[(2)]);
var state_24273__$1 = state_24273;
var statearr_24337_24391 = state_24273__$1;
(statearr_24337_24391[(2)] = inst_24268);

(statearr_24337_24391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (8))){
var inst_24173 = (state_24273[(27)]);
var inst_24160 = (state_24273[(10)]);
var inst_24173__$1 = cljs.core.seq.call(null,inst_24160);
var state_24273__$1 = (function (){var statearr_24338 = state_24273;
(statearr_24338[(27)] = inst_24173__$1);

return statearr_24338;
})();
if(inst_24173__$1){
var statearr_24339_24392 = state_24273__$1;
(statearr_24339_24392[(1)] = (10));

} else {
var statearr_24340_24393 = state_24273__$1;
(statearr_24340_24393[(1)] = (11));

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
});})(c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files))
;
return ((function (switch__19042__auto__,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto____0 = (function (){
var statearr_24344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24344[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto__);

(statearr_24344[(1)] = (1));

return statearr_24344;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto____1 = (function (state_24273){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_24273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e24345){if((e24345 instanceof Object)){
var ex__19046__auto__ = e24345;
var statearr_24346_24394 = state_24273;
(statearr_24346_24394[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24395 = state_24273;
state_24273 = G__24395;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto__ = function(state_24273){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto____1.call(this,state_24273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files))
})();
var state__19106__auto__ = (function (){var statearr_24347 = f__19105__auto__.call(null);
(statearr_24347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto__);

return statearr_24347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto__,map__24147,map__24147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24148,map__24148__$1,msg,files))
);

return c__19104__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24398,link){
var map__24400 = p__24398;
var map__24400__$1 = ((cljs.core.seq_QMARK_.call(null,map__24400))?cljs.core.apply.call(null,cljs.core.hash_map,map__24400):map__24400);
var file = cljs.core.get.call(null,map__24400__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24400,map__24400__$1,file){
return (function (p1__24396_SHARP_,p2__24397_SHARP_){
if(cljs.core._EQ_.call(null,p1__24396_SHARP_,p2__24397_SHARP_)){
return p1__24396_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24400,map__24400__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24404){
var map__24405 = p__24404;
var map__24405__$1 = ((cljs.core.seq_QMARK_.call(null,map__24405))?cljs.core.apply.call(null,cljs.core.hash_map,map__24405):map__24405);
var match_length = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24401_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24401_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__24407 = arguments.length;
switch (G__24407) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24409){
var map__24411 = p__24409;
var map__24411__$1 = ((cljs.core.seq_QMARK_.call(null,map__24411))?cljs.core.apply.call(null,cljs.core.hash_map,map__24411):map__24411);
var f_data = map__24411__$1;
var file = cljs.core.get.call(null,map__24411__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__24411__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16094__auto__ = request_url;
if(cljs.core.truth_(or__16094__auto__)){
return or__16094__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24412,files_msg){
var map__24434 = p__24412;
var map__24434__$1 = ((cljs.core.seq_QMARK_.call(null,map__24434))?cljs.core.apply.call(null,cljs.core.hash_map,map__24434):map__24434);
var opts = map__24434__$1;
var on_cssload = cljs.core.get.call(null,map__24434__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24435_24455 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24436_24456 = null;
var count__24437_24457 = (0);
var i__24438_24458 = (0);
while(true){
if((i__24438_24458 < count__24437_24457)){
var f_24459 = cljs.core._nth.call(null,chunk__24436_24456,i__24438_24458);
figwheel.client.file_reloading.reload_css_file.call(null,f_24459);

var G__24460 = seq__24435_24455;
var G__24461 = chunk__24436_24456;
var G__24462 = count__24437_24457;
var G__24463 = (i__24438_24458 + (1));
seq__24435_24455 = G__24460;
chunk__24436_24456 = G__24461;
count__24437_24457 = G__24462;
i__24438_24458 = G__24463;
continue;
} else {
var temp__4425__auto___24464 = cljs.core.seq.call(null,seq__24435_24455);
if(temp__4425__auto___24464){
var seq__24435_24465__$1 = temp__4425__auto___24464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24435_24465__$1)){
var c__16879__auto___24466 = cljs.core.chunk_first.call(null,seq__24435_24465__$1);
var G__24467 = cljs.core.chunk_rest.call(null,seq__24435_24465__$1);
var G__24468 = c__16879__auto___24466;
var G__24469 = cljs.core.count.call(null,c__16879__auto___24466);
var G__24470 = (0);
seq__24435_24455 = G__24467;
chunk__24436_24456 = G__24468;
count__24437_24457 = G__24469;
i__24438_24458 = G__24470;
continue;
} else {
var f_24471 = cljs.core.first.call(null,seq__24435_24465__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24471);

var G__24472 = cljs.core.next.call(null,seq__24435_24465__$1);
var G__24473 = null;
var G__24474 = (0);
var G__24475 = (0);
seq__24435_24455 = G__24472;
chunk__24436_24456 = G__24473;
count__24437_24457 = G__24474;
i__24438_24458 = G__24475;
continue;
}
} else {
}
}
break;
}

var c__19104__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto__,map__24434,map__24434__$1,opts,on_cssload){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto__,map__24434,map__24434__$1,opts,on_cssload){
return (function (state_24445){
var state_val_24446 = (state_24445[(1)]);
if((state_val_24446 === (1))){
var inst_24439 = cljs.core.async.timeout.call(null,(100));
var state_24445__$1 = state_24445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24445__$1,(2),inst_24439);
} else {
if((state_val_24446 === (2))){
var inst_24441 = (state_24445[(2)]);
var inst_24442 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_24443 = on_cssload.call(null,inst_24442);
var state_24445__$1 = (function (){var statearr_24447 = state_24445;
(statearr_24447[(7)] = inst_24441);

return statearr_24447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24445__$1,inst_24443);
} else {
return null;
}
}
});})(c__19104__auto__,map__24434,map__24434__$1,opts,on_cssload))
;
return ((function (switch__19042__auto__,c__19104__auto__,map__24434,map__24434__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto____0 = (function (){
var statearr_24451 = [null,null,null,null,null,null,null,null];
(statearr_24451[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto__);

(statearr_24451[(1)] = (1));

return statearr_24451;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto____1 = (function (state_24445){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_24445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e24452){if((e24452 instanceof Object)){
var ex__19046__auto__ = e24452;
var statearr_24453_24476 = state_24445;
(statearr_24453_24476[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24477 = state_24445;
state_24445 = G__24477;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto__ = function(state_24445){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto____1.call(this,state_24445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto__,map__24434,map__24434__$1,opts,on_cssload))
})();
var state__19106__auto__ = (function (){var statearr_24454 = f__19105__auto__.call(null);
(statearr_24454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto__);

return statearr_24454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto__,map__24434,map__24434__$1,opts,on_cssload))
);

return c__19104__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1438966778739