// Compiled by ClojureScript 0.0-3297 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23767_23779 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23768_23780 = null;
var count__23769_23781 = (0);
var i__23770_23782 = (0);
while(true){
if((i__23770_23782 < count__23769_23781)){
var f_23783 = cljs.core._nth.call(null,chunk__23768_23780,i__23770_23782);
cljs.core.println.call(null,"  ",f_23783);

var G__23784 = seq__23767_23779;
var G__23785 = chunk__23768_23780;
var G__23786 = count__23769_23781;
var G__23787 = (i__23770_23782 + (1));
seq__23767_23779 = G__23784;
chunk__23768_23780 = G__23785;
count__23769_23781 = G__23786;
i__23770_23782 = G__23787;
continue;
} else {
var temp__4425__auto___23788 = cljs.core.seq.call(null,seq__23767_23779);
if(temp__4425__auto___23788){
var seq__23767_23789__$1 = temp__4425__auto___23788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23767_23789__$1)){
var c__16879__auto___23790 = cljs.core.chunk_first.call(null,seq__23767_23789__$1);
var G__23791 = cljs.core.chunk_rest.call(null,seq__23767_23789__$1);
var G__23792 = c__16879__auto___23790;
var G__23793 = cljs.core.count.call(null,c__16879__auto___23790);
var G__23794 = (0);
seq__23767_23779 = G__23791;
chunk__23768_23780 = G__23792;
count__23769_23781 = G__23793;
i__23770_23782 = G__23794;
continue;
} else {
var f_23795 = cljs.core.first.call(null,seq__23767_23789__$1);
cljs.core.println.call(null,"  ",f_23795);

var G__23796 = cljs.core.next.call(null,seq__23767_23789__$1);
var G__23797 = null;
var G__23798 = (0);
var G__23799 = (0);
seq__23767_23779 = G__23796;
chunk__23768_23780 = G__23797;
count__23769_23781 = G__23798;
i__23770_23782 = G__23799;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23800 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16094__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16094__auto__)){
return or__16094__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23800);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23800)))?cljs.core.second.call(null,arglists_23800):arglists_23800));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23771 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23772 = null;
var count__23773 = (0);
var i__23774 = (0);
while(true){
if((i__23774 < count__23773)){
var vec__23775 = cljs.core._nth.call(null,chunk__23772,i__23774);
var name = cljs.core.nth.call(null,vec__23775,(0),null);
var map__23776 = cljs.core.nth.call(null,vec__23775,(1),null);
var map__23776__$1 = ((cljs.core.seq_QMARK_.call(null,map__23776))?cljs.core.apply.call(null,cljs.core.hash_map,map__23776):map__23776);
var doc = cljs.core.get.call(null,map__23776__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23776__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23801 = seq__23771;
var G__23802 = chunk__23772;
var G__23803 = count__23773;
var G__23804 = (i__23774 + (1));
seq__23771 = G__23801;
chunk__23772 = G__23802;
count__23773 = G__23803;
i__23774 = G__23804;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23771);
if(temp__4425__auto__){
var seq__23771__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23771__$1)){
var c__16879__auto__ = cljs.core.chunk_first.call(null,seq__23771__$1);
var G__23805 = cljs.core.chunk_rest.call(null,seq__23771__$1);
var G__23806 = c__16879__auto__;
var G__23807 = cljs.core.count.call(null,c__16879__auto__);
var G__23808 = (0);
seq__23771 = G__23805;
chunk__23772 = G__23806;
count__23773 = G__23807;
i__23774 = G__23808;
continue;
} else {
var vec__23777 = cljs.core.first.call(null,seq__23771__$1);
var name = cljs.core.nth.call(null,vec__23777,(0),null);
var map__23778 = cljs.core.nth.call(null,vec__23777,(1),null);
var map__23778__$1 = ((cljs.core.seq_QMARK_.call(null,map__23778))?cljs.core.apply.call(null,cljs.core.hash_map,map__23778):map__23778);
var doc = cljs.core.get.call(null,map__23778__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23778__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23809 = cljs.core.next.call(null,seq__23771__$1);
var G__23810 = null;
var G__23811 = (0);
var G__23812 = (0);
seq__23771 = G__23809;
chunk__23772 = G__23810;
count__23773 = G__23811;
i__23774 = G__23812;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1438966777761