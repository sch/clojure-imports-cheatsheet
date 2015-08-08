// Compiled by ClojureScript 0.0-3297 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22760__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22761__i = 0, G__22761__a = new Array(arguments.length -  0);
while (G__22761__i < G__22761__a.length) {G__22761__a[G__22761__i] = arguments[G__22761__i + 0]; ++G__22761__i;}
  args = new cljs.core.IndexedSeq(G__22761__a,0);
} 
return G__22760__delegate.call(this,args);};
G__22760.cljs$lang$maxFixedArity = 0;
G__22760.cljs$lang$applyTo = (function (arglist__22762){
var args = cljs.core.seq(arglist__22762);
return G__22760__delegate(args);
});
G__22760.cljs$core$IFn$_invoke$arity$variadic = G__22760__delegate;
return G__22760;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__22763){
var map__22765 = p__22763;
var map__22765__$1 = ((cljs.core.seq_QMARK_.call(null,map__22765))?cljs.core.apply.call(null,cljs.core.hash_map,map__22765):map__22765);
var message = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16094__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16094__auto__)){
return or__16094__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16082__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16082__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16082__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19104__auto___22894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___22894,ch){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___22894,ch){
return (function (state_22868){
var state_val_22869 = (state_22868[(1)]);
if((state_val_22869 === (7))){
var inst_22864 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22870_22895 = state_22868__$1;
(statearr_22870_22895[(2)] = inst_22864);

(statearr_22870_22895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (1))){
var state_22868__$1 = state_22868;
var statearr_22871_22896 = state_22868__$1;
(statearr_22871_22896[(2)] = null);

(statearr_22871_22896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (4))){
var inst_22832 = (state_22868[(7)]);
var inst_22832__$1 = (state_22868[(2)]);
var state_22868__$1 = (function (){var statearr_22872 = state_22868;
(statearr_22872[(7)] = inst_22832__$1);

return statearr_22872;
})();
if(cljs.core.truth_(inst_22832__$1)){
var statearr_22873_22897 = state_22868__$1;
(statearr_22873_22897[(1)] = (5));

} else {
var statearr_22874_22898 = state_22868__$1;
(statearr_22874_22898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (13))){
var state_22868__$1 = state_22868;
var statearr_22875_22899 = state_22868__$1;
(statearr_22875_22899[(2)] = null);

(statearr_22875_22899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (6))){
var state_22868__$1 = state_22868;
var statearr_22876_22900 = state_22868__$1;
(statearr_22876_22900[(2)] = null);

(statearr_22876_22900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (3))){
var inst_22866 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22868__$1,inst_22866);
} else {
if((state_val_22869 === (12))){
var inst_22839 = (state_22868[(8)]);
var inst_22852 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22839);
var inst_22853 = cljs.core.first.call(null,inst_22852);
var inst_22854 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22853);
var inst_22855 = console.warn("Figwheel: Not loading code with warnings - ",inst_22854);
var state_22868__$1 = state_22868;
var statearr_22877_22901 = state_22868__$1;
(statearr_22877_22901[(2)] = inst_22855);

(statearr_22877_22901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (2))){
var state_22868__$1 = state_22868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22868__$1,(4),ch);
} else {
if((state_val_22869 === (11))){
var inst_22848 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22878_22902 = state_22868__$1;
(statearr_22878_22902[(2)] = inst_22848);

(statearr_22878_22902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (9))){
var inst_22838 = (state_22868[(9)]);
var inst_22850 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22838,opts);
var state_22868__$1 = state_22868;
if(cljs.core.truth_(inst_22850)){
var statearr_22879_22903 = state_22868__$1;
(statearr_22879_22903[(1)] = (12));

} else {
var statearr_22880_22904 = state_22868__$1;
(statearr_22880_22904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (5))){
var inst_22838 = (state_22868[(9)]);
var inst_22832 = (state_22868[(7)]);
var inst_22834 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22835 = (new cljs.core.PersistentArrayMap(null,2,inst_22834,null));
var inst_22836 = (new cljs.core.PersistentHashSet(null,inst_22835,null));
var inst_22837 = figwheel.client.focus_msgs.call(null,inst_22836,inst_22832);
var inst_22838__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22837);
var inst_22839 = cljs.core.first.call(null,inst_22837);
var inst_22840 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22838__$1,opts);
var state_22868__$1 = (function (){var statearr_22881 = state_22868;
(statearr_22881[(9)] = inst_22838__$1);

(statearr_22881[(8)] = inst_22839);

return statearr_22881;
})();
if(cljs.core.truth_(inst_22840)){
var statearr_22882_22905 = state_22868__$1;
(statearr_22882_22905[(1)] = (8));

} else {
var statearr_22883_22906 = state_22868__$1;
(statearr_22883_22906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (14))){
var inst_22858 = (state_22868[(2)]);
var state_22868__$1 = state_22868;
var statearr_22884_22907 = state_22868__$1;
(statearr_22884_22907[(2)] = inst_22858);

(statearr_22884_22907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (10))){
var inst_22860 = (state_22868[(2)]);
var state_22868__$1 = (function (){var statearr_22885 = state_22868;
(statearr_22885[(10)] = inst_22860);

return statearr_22885;
})();
var statearr_22886_22908 = state_22868__$1;
(statearr_22886_22908[(2)] = null);

(statearr_22886_22908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22869 === (8))){
var inst_22839 = (state_22868[(8)]);
var inst_22842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22843 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22839);
var inst_22844 = cljs.core.async.timeout.call(null,(1000));
var inst_22845 = [inst_22843,inst_22844];
var inst_22846 = (new cljs.core.PersistentVector(null,2,(5),inst_22842,inst_22845,null));
var state_22868__$1 = state_22868;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22868__$1,(11),inst_22846);
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
});})(c__19104__auto___22894,ch))
;
return ((function (switch__19042__auto__,c__19104__auto___22894,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19043__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19043__auto____0 = (function (){
var statearr_22890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22890[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19043__auto__);

(statearr_22890[(1)] = (1));

return statearr_22890;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19043__auto____1 = (function (state_22868){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_22868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e22891){if((e22891 instanceof Object)){
var ex__19046__auto__ = e22891;
var statearr_22892_22909 = state_22868;
(statearr_22892_22909[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22910 = state_22868;
state_22868 = G__22910;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19043__auto__ = function(state_22868){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19043__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19043__auto____1.call(this,state_22868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19043__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19043__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___22894,ch))
})();
var state__19106__auto__ = (function (){var statearr_22893 = f__19105__auto__.call(null);
(statearr_22893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___22894);

return statearr_22893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___22894,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22911_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22911_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_22918 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22918){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_22916 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22917 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_22916,_STAR_print_newline_STAR_22917,base_path_22918){
return (function() { 
var G__22919__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22920__i = 0, G__22920__a = new Array(arguments.length -  0);
while (G__22920__i < G__22920__a.length) {G__22920__a[G__22920__i] = arguments[G__22920__i + 0]; ++G__22920__i;}
  args = new cljs.core.IndexedSeq(G__22920__a,0);
} 
return G__22919__delegate.call(this,args);};
G__22919.cljs$lang$maxFixedArity = 0;
G__22919.cljs$lang$applyTo = (function (arglist__22921){
var args = cljs.core.seq(arglist__22921);
return G__22919__delegate(args);
});
G__22919.cljs$core$IFn$_invoke$arity$variadic = G__22919__delegate;
return G__22919;
})()
;})(_STAR_print_fn_STAR_22916,_STAR_print_newline_STAR_22917,base_path_22918))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22917;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22916;
}}catch (e22915){if((e22915 instanceof Error)){
var e = e22915;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22918], null));
} else {
var e = e22915;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_22918))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__22922){
var map__22927 = p__22922;
var map__22927__$1 = ((cljs.core.seq_QMARK_.call(null,map__22927))?cljs.core.apply.call(null,cljs.core.hash_map,map__22927):map__22927);
var opts = map__22927__$1;
var build_id = cljs.core.get.call(null,map__22927__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22927,map__22927__$1,opts,build_id){
return (function (p__22928){
var vec__22929 = p__22928;
var map__22930 = cljs.core.nth.call(null,vec__22929,(0),null);
var map__22930__$1 = ((cljs.core.seq_QMARK_.call(null,map__22930))?cljs.core.apply.call(null,cljs.core.hash_map,map__22930):map__22930);
var msg = map__22930__$1;
var msg_name = cljs.core.get.call(null,map__22930__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22929,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__22929,map__22930,map__22930__$1,msg,msg_name,_,map__22927,map__22927__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22929,map__22930,map__22930__$1,msg,msg_name,_,map__22927,map__22927__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22927,map__22927__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__22934){
var vec__22935 = p__22934;
var map__22936 = cljs.core.nth.call(null,vec__22935,(0),null);
var map__22936__$1 = ((cljs.core.seq_QMARK_.call(null,map__22936))?cljs.core.apply.call(null,cljs.core.hash_map,map__22936):map__22936);
var msg = map__22936__$1;
var msg_name = cljs.core.get.call(null,map__22936__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22935,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__22937){
var map__22945 = p__22937;
var map__22945__$1 = ((cljs.core.seq_QMARK_.call(null,map__22945))?cljs.core.apply.call(null,cljs.core.hash_map,map__22945):map__22945);
var on_compile_warning = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__22945,map__22945__$1,on_compile_warning,on_compile_fail){
return (function (p__22946){
var vec__22947 = p__22946;
var map__22948 = cljs.core.nth.call(null,vec__22947,(0),null);
var map__22948__$1 = ((cljs.core.seq_QMARK_.call(null,map__22948))?cljs.core.apply.call(null,cljs.core.hash_map,map__22948):map__22948);
var msg = map__22948__$1;
var msg_name = cljs.core.get.call(null,map__22948__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22947,(1));
var pred__22949 = cljs.core._EQ_;
var expr__22950 = msg_name;
if(cljs.core.truth_(pred__22949.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22950))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22949.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22950))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22945,map__22945__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19104__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto__,msg_hist,msg_names,msg){
return (function (state_23151){
var state_val_23152 = (state_23151[(1)]);
if((state_val_23152 === (7))){
var inst_23085 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23153_23194 = state_23151__$1;
(statearr_23153_23194[(2)] = inst_23085);

(statearr_23153_23194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (20))){
var inst_23113 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23113)){
var statearr_23154_23195 = state_23151__$1;
(statearr_23154_23195[(1)] = (22));

} else {
var statearr_23155_23196 = state_23151__$1;
(statearr_23155_23196[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (27))){
var inst_23125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23126 = figwheel.client.heads_up.display_warning.call(null,inst_23125);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(30),inst_23126);
} else {
if((state_val_23152 === (1))){
var inst_23073 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23073)){
var statearr_23156_23197 = state_23151__$1;
(statearr_23156_23197[(1)] = (2));

} else {
var statearr_23157_23198 = state_23151__$1;
(statearr_23157_23198[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (24))){
var inst_23141 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23158_23199 = state_23151__$1;
(statearr_23158_23199[(2)] = inst_23141);

(statearr_23158_23199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (4))){
var inst_23149 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23151__$1,inst_23149);
} else {
if((state_val_23152 === (15))){
var inst_23101 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23102 = figwheel.client.format_messages.call(null,inst_23101);
var inst_23103 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23104 = figwheel.client.heads_up.display_error.call(null,inst_23102,inst_23103);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(18),inst_23104);
} else {
if((state_val_23152 === (21))){
var inst_23143 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23159_23200 = state_23151__$1;
(statearr_23159_23200[(2)] = inst_23143);

(statearr_23159_23200[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (31))){
var inst_23132 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(34),inst_23132);
} else {
if((state_val_23152 === (32))){
var state_23151__$1 = state_23151;
var statearr_23160_23201 = state_23151__$1;
(statearr_23160_23201[(2)] = null);

(statearr_23160_23201[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (33))){
var inst_23137 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23161_23202 = state_23151__$1;
(statearr_23161_23202[(2)] = inst_23137);

(statearr_23161_23202[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (13))){
var inst_23091 = (state_23151[(2)]);
var inst_23092 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23093 = figwheel.client.format_messages.call(null,inst_23092);
var inst_23094 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23095 = figwheel.client.heads_up.display_error.call(null,inst_23093,inst_23094);
var state_23151__$1 = (function (){var statearr_23162 = state_23151;
(statearr_23162[(7)] = inst_23091);

return statearr_23162;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(14),inst_23095);
} else {
if((state_val_23152 === (22))){
var inst_23115 = figwheel.client.heads_up.clear.call(null);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(25),inst_23115);
} else {
if((state_val_23152 === (29))){
var inst_23139 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23163_23203 = state_23151__$1;
(statearr_23163_23203[(2)] = inst_23139);

(statearr_23163_23203[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (6))){
var inst_23081 = figwheel.client.heads_up.clear.call(null);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(9),inst_23081);
} else {
if((state_val_23152 === (28))){
var inst_23130 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23130)){
var statearr_23164_23204 = state_23151__$1;
(statearr_23164_23204[(1)] = (31));

} else {
var statearr_23165_23205 = state_23151__$1;
(statearr_23165_23205[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (25))){
var inst_23117 = (state_23151[(2)]);
var inst_23118 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23119 = figwheel.client.heads_up.display_warning.call(null,inst_23118);
var state_23151__$1 = (function (){var statearr_23166 = state_23151;
(statearr_23166[(8)] = inst_23117);

return statearr_23166;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(26),inst_23119);
} else {
if((state_val_23152 === (34))){
var inst_23134 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23167_23206 = state_23151__$1;
(statearr_23167_23206[(2)] = inst_23134);

(statearr_23167_23206[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (17))){
var inst_23145 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23168_23207 = state_23151__$1;
(statearr_23168_23207[(2)] = inst_23145);

(statearr_23168_23207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (3))){
var inst_23087 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23087)){
var statearr_23169_23208 = state_23151__$1;
(statearr_23169_23208[(1)] = (10));

} else {
var statearr_23170_23209 = state_23151__$1;
(statearr_23170_23209[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (12))){
var inst_23147 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23171_23210 = state_23151__$1;
(statearr_23171_23210[(2)] = inst_23147);

(statearr_23171_23210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (2))){
var inst_23075 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23075)){
var statearr_23172_23211 = state_23151__$1;
(statearr_23172_23211[(1)] = (5));

} else {
var statearr_23173_23212 = state_23151__$1;
(statearr_23173_23212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (23))){
var inst_23123 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23123)){
var statearr_23174_23213 = state_23151__$1;
(statearr_23174_23213[(1)] = (27));

} else {
var statearr_23175_23214 = state_23151__$1;
(statearr_23175_23214[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (19))){
var inst_23110 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23111 = figwheel.client.heads_up.append_message.call(null,inst_23110);
var state_23151__$1 = state_23151;
var statearr_23176_23215 = state_23151__$1;
(statearr_23176_23215[(2)] = inst_23111);

(statearr_23176_23215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (11))){
var inst_23099 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23099)){
var statearr_23177_23216 = state_23151__$1;
(statearr_23177_23216[(1)] = (15));

} else {
var statearr_23178_23217 = state_23151__$1;
(statearr_23178_23217[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (9))){
var inst_23083 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23179_23218 = state_23151__$1;
(statearr_23179_23218[(2)] = inst_23083);

(statearr_23179_23218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (5))){
var inst_23077 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(8),inst_23077);
} else {
if((state_val_23152 === (14))){
var inst_23097 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23180_23219 = state_23151__$1;
(statearr_23180_23219[(2)] = inst_23097);

(statearr_23180_23219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (26))){
var inst_23121 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23181_23220 = state_23151__$1;
(statearr_23181_23220[(2)] = inst_23121);

(statearr_23181_23220[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (16))){
var inst_23108 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23108)){
var statearr_23182_23221 = state_23151__$1;
(statearr_23182_23221[(1)] = (19));

} else {
var statearr_23183_23222 = state_23151__$1;
(statearr_23183_23222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (30))){
var inst_23128 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23184_23223 = state_23151__$1;
(statearr_23184_23223[(2)] = inst_23128);

(statearr_23184_23223[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (10))){
var inst_23089 = figwheel.client.heads_up.clear.call(null);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(13),inst_23089);
} else {
if((state_val_23152 === (18))){
var inst_23106 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23185_23224 = state_23151__$1;
(statearr_23185_23224[(2)] = inst_23106);

(statearr_23185_23224[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (8))){
var inst_23079 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23186_23225 = state_23151__$1;
(statearr_23186_23225[(2)] = inst_23079);

(statearr_23186_23225[(1)] = (7));


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
});})(c__19104__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19042__auto__,c__19104__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto____0 = (function (){
var statearr_23190 = [null,null,null,null,null,null,null,null,null];
(statearr_23190[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto__);

(statearr_23190[(1)] = (1));

return statearr_23190;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto____1 = (function (state_23151){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_23151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e23191){if((e23191 instanceof Object)){
var ex__19046__auto__ = e23191;
var statearr_23192_23226 = state_23151;
(statearr_23192_23226[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23227 = state_23151;
state_23151 = G__23227;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto__ = function(state_23151){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto____1.call(this,state_23151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto__,msg_hist,msg_names,msg))
})();
var state__19106__auto__ = (function (){var statearr_23193 = f__19105__auto__.call(null);
(statearr_23193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto__);

return statearr_23193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto__,msg_hist,msg_names,msg))
);

return c__19104__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19104__auto___23290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto___23290,ch){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto___23290,ch){
return (function (state_23273){
var state_val_23274 = (state_23273[(1)]);
if((state_val_23274 === (1))){
var state_23273__$1 = state_23273;
var statearr_23275_23291 = state_23273__$1;
(statearr_23275_23291[(2)] = null);

(statearr_23275_23291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (2))){
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23273__$1,(4),ch);
} else {
if((state_val_23274 === (3))){
var inst_23271 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23273__$1,inst_23271);
} else {
if((state_val_23274 === (4))){
var inst_23261 = (state_23273[(7)]);
var inst_23261__$1 = (state_23273[(2)]);
var state_23273__$1 = (function (){var statearr_23276 = state_23273;
(statearr_23276[(7)] = inst_23261__$1);

return statearr_23276;
})();
if(cljs.core.truth_(inst_23261__$1)){
var statearr_23277_23292 = state_23273__$1;
(statearr_23277_23292[(1)] = (5));

} else {
var statearr_23278_23293 = state_23273__$1;
(statearr_23278_23293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (5))){
var inst_23261 = (state_23273[(7)]);
var inst_23263 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23261);
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23273__$1,(8),inst_23263);
} else {
if((state_val_23274 === (6))){
var state_23273__$1 = state_23273;
var statearr_23279_23294 = state_23273__$1;
(statearr_23279_23294[(2)] = null);

(statearr_23279_23294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (7))){
var inst_23269 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
var statearr_23280_23295 = state_23273__$1;
(statearr_23280_23295[(2)] = inst_23269);

(statearr_23280_23295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (8))){
var inst_23265 = (state_23273[(2)]);
var state_23273__$1 = (function (){var statearr_23281 = state_23273;
(statearr_23281[(8)] = inst_23265);

return statearr_23281;
})();
var statearr_23282_23296 = state_23273__$1;
(statearr_23282_23296[(2)] = null);

(statearr_23282_23296[(1)] = (2));


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
});})(c__19104__auto___23290,ch))
;
return ((function (switch__19042__auto__,c__19104__auto___23290,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19043__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19043__auto____0 = (function (){
var statearr_23286 = [null,null,null,null,null,null,null,null,null];
(statearr_23286[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19043__auto__);

(statearr_23286[(1)] = (1));

return statearr_23286;
});
var figwheel$client$heads_up_plugin_$_state_machine__19043__auto____1 = (function (state_23273){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_23273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e23287){if((e23287 instanceof Object)){
var ex__19046__auto__ = e23287;
var statearr_23288_23297 = state_23273;
(statearr_23288_23297[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23298 = state_23273;
state_23273 = G__23298;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19043__auto__ = function(state_23273){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19043__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19043__auto____1.call(this,state_23273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19043__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19043__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto___23290,ch))
})();
var state__19106__auto__ = (function (){var statearr_23289 = f__19105__auto__.call(null);
(statearr_23289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto___23290);

return statearr_23289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto___23290,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19104__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19104__auto__){
return (function (){
var f__19105__auto__ = (function (){var switch__19042__auto__ = ((function (c__19104__auto__){
return (function (state_23319){
var state_val_23320 = (state_23319[(1)]);
if((state_val_23320 === (1))){
var inst_23314 = cljs.core.async.timeout.call(null,(3000));
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23319__$1,(2),inst_23314);
} else {
if((state_val_23320 === (2))){
var inst_23316 = (state_23319[(2)]);
var inst_23317 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23319__$1 = (function (){var statearr_23321 = state_23319;
(statearr_23321[(7)] = inst_23316);

return statearr_23321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23319__$1,inst_23317);
} else {
return null;
}
}
});})(c__19104__auto__))
;
return ((function (switch__19042__auto__,c__19104__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19043__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19043__auto____0 = (function (){
var statearr_23325 = [null,null,null,null,null,null,null,null];
(statearr_23325[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19043__auto__);

(statearr_23325[(1)] = (1));

return statearr_23325;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19043__auto____1 = (function (state_23319){
while(true){
var ret_value__19044__auto__ = (function (){try{while(true){
var result__19045__auto__ = switch__19042__auto__.call(null,state_23319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19045__auto__;
}
break;
}
}catch (e23326){if((e23326 instanceof Object)){
var ex__19046__auto__ = e23326;
var statearr_23327_23329 = state_23319;
(statearr_23327_23329[(5)] = ex__19046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23330 = state_23319;
state_23319 = G__23330;
continue;
} else {
return ret_value__19044__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19043__auto__ = function(state_23319){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19043__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19043__auto____1.call(this,state_23319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19043__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19043__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19043__auto__;
})()
;})(switch__19042__auto__,c__19104__auto__))
})();
var state__19106__auto__ = (function (){var statearr_23328 = f__19105__auto__.call(null);
(statearr_23328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19104__auto__);

return statearr_23328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19106__auto__);
});})(c__19104__auto__))
);

return c__19104__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__23331){
var map__23337 = p__23331;
var map__23337__$1 = ((cljs.core.seq_QMARK_.call(null,map__23337))?cljs.core.apply.call(null,cljs.core.hash_map,map__23337):map__23337);
var ed = map__23337__$1;
var formatted_exception = cljs.core.get.call(null,map__23337__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__23337__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__23337__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__23338_23342 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__23339_23343 = null;
var count__23340_23344 = (0);
var i__23341_23345 = (0);
while(true){
if((i__23341_23345 < count__23340_23344)){
var msg_23346 = cljs.core._nth.call(null,chunk__23339_23343,i__23341_23345);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23346);

var G__23347 = seq__23338_23342;
var G__23348 = chunk__23339_23343;
var G__23349 = count__23340_23344;
var G__23350 = (i__23341_23345 + (1));
seq__23338_23342 = G__23347;
chunk__23339_23343 = G__23348;
count__23340_23344 = G__23349;
i__23341_23345 = G__23350;
continue;
} else {
var temp__4425__auto___23351 = cljs.core.seq.call(null,seq__23338_23342);
if(temp__4425__auto___23351){
var seq__23338_23352__$1 = temp__4425__auto___23351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23338_23352__$1)){
var c__16879__auto___23353 = cljs.core.chunk_first.call(null,seq__23338_23352__$1);
var G__23354 = cljs.core.chunk_rest.call(null,seq__23338_23352__$1);
var G__23355 = c__16879__auto___23353;
var G__23356 = cljs.core.count.call(null,c__16879__auto___23353);
var G__23357 = (0);
seq__23338_23342 = G__23354;
chunk__23339_23343 = G__23355;
count__23340_23344 = G__23356;
i__23341_23345 = G__23357;
continue;
} else {
var msg_23358 = cljs.core.first.call(null,seq__23338_23352__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23358);

var G__23359 = cljs.core.next.call(null,seq__23338_23352__$1);
var G__23360 = null;
var G__23361 = (0);
var G__23362 = (0);
seq__23338_23342 = G__23359;
chunk__23339_23343 = G__23360;
count__23340_23344 = G__23361;
i__23341_23345 = G__23362;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__23363){
var map__23365 = p__23363;
var map__23365__$1 = ((cljs.core.seq_QMARK_.call(null,map__23365))?cljs.core.apply.call(null,cljs.core.hash_map,map__23365):map__23365);
var w = map__23365__$1;
var message = cljs.core.get.call(null,map__23365__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16082__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16082__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16082__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__23372 = cljs.core.seq.call(null,plugins);
var chunk__23373 = null;
var count__23374 = (0);
var i__23375 = (0);
while(true){
if((i__23375 < count__23374)){
var vec__23376 = cljs.core._nth.call(null,chunk__23373,i__23375);
var k = cljs.core.nth.call(null,vec__23376,(0),null);
var plugin = cljs.core.nth.call(null,vec__23376,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23378 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23372,chunk__23373,count__23374,i__23375,pl_23378,vec__23376,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_23378.call(null,msg_hist);
});})(seq__23372,chunk__23373,count__23374,i__23375,pl_23378,vec__23376,k,plugin))
);
} else {
}

var G__23379 = seq__23372;
var G__23380 = chunk__23373;
var G__23381 = count__23374;
var G__23382 = (i__23375 + (1));
seq__23372 = G__23379;
chunk__23373 = G__23380;
count__23374 = G__23381;
i__23375 = G__23382;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23372);
if(temp__4425__auto__){
var seq__23372__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23372__$1)){
var c__16879__auto__ = cljs.core.chunk_first.call(null,seq__23372__$1);
var G__23383 = cljs.core.chunk_rest.call(null,seq__23372__$1);
var G__23384 = c__16879__auto__;
var G__23385 = cljs.core.count.call(null,c__16879__auto__);
var G__23386 = (0);
seq__23372 = G__23383;
chunk__23373 = G__23384;
count__23374 = G__23385;
i__23375 = G__23386;
continue;
} else {
var vec__23377 = cljs.core.first.call(null,seq__23372__$1);
var k = cljs.core.nth.call(null,vec__23377,(0),null);
var plugin = cljs.core.nth.call(null,vec__23377,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23387 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23372,chunk__23373,count__23374,i__23375,pl_23387,vec__23377,k,plugin,seq__23372__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_23387.call(null,msg_hist);
});})(seq__23372,chunk__23373,count__23374,i__23375,pl_23387,vec__23377,k,plugin,seq__23372__$1,temp__4425__auto__))
);
} else {
}

var G__23388 = cljs.core.next.call(null,seq__23372__$1);
var G__23389 = null;
var G__23390 = (0);
var G__23391 = (0);
seq__23372 = G__23388;
chunk__23373 = G__23389;
count__23374 = G__23390;
i__23375 = G__23391;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__23393 = arguments.length;
switch (G__23393) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17134__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17134__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__23396){
var map__23397 = p__23396;
var map__23397__$1 = ((cljs.core.seq_QMARK_.call(null,map__23397))?cljs.core.apply.call(null,cljs.core.hash_map,map__23397):map__23397);
var opts = map__23397__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq23395){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23395));
});

//# sourceMappingURL=client.js.map?rel=1438966776395