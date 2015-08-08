// Compiled by ClojureScript 0.0-3297 {}
goog.provide('flupot.dom');
goog.require('cljs.core');
goog.require('cljsjs.react');
flupot.dom.attr_opts = (function (){var obj20697 = {"autofocus":"autoFocus","autocomplete":"autoComplete","http-equiv":"httpEquiv","class":"className","autoplay":"autoPlay","accept-charset":"acceptCharset","srcset":"srcSet","mediagroup":"mediaGroup","formenctype":"formEncType","allowfullscreen":"allowFullScreen","for":"htmlFor","hreflang":"hrefLang","enctype":"encType","colspan":"colSpan","formnovalidate":"formNoValidate","formTarget":"formtarget","usemap":"useMap","rowspan":"rowSpan","crossorigin":"crossOrigin","contextmenu":"contextMenu","formmethod":"formMethod","datetime":"dateTime","contenteditable":"contentEditable","maxlength":"maxLength","accesskey":"accessKey","formaction":"formAction","novalidate":"noValidate","spellcheck":"spellCheck","srcdoc":"srcDoc","tabindex":"tabIndex"};
return obj20697;
})();
flupot.dom.attrs__GT_react = (function flupot$dom$attrs__GT_react(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var k__$1 = cljs.core.name.call(null,k);
(o[(function (){var or__16094__auto__ = (flupot.dom.attr_opts[k__$1]);
if(cljs.core.truth_(or__16094__auto__)){
return or__16094__auto__;
} else {
return k__$1;
}
})()] = cljs.core.clj__GT_js.call(null,v));

return o;
}),(function (){var obj20701 = {};
return obj20701;
})(),m);
});
flupot.dom.a = (function flupot$dom$a(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20704_21374 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20705_21375 = null;
var count__20706_21376 = (0);
var i__20707_21377 = (0);
while(true){
if((i__20707_21377 < count__20706_21376)){
var child__18178__auto___21378 = cljs.core._nth.call(null,chunk__20705_21375,i__20707_21377);
args__18177__auto__.push(child__18178__auto___21378);

var G__21379 = seq__20704_21374;
var G__21380 = chunk__20705_21375;
var G__21381 = count__20706_21376;
var G__21382 = (i__20707_21377 + (1));
seq__20704_21374 = G__21379;
chunk__20705_21375 = G__21380;
count__20706_21376 = G__21381;
i__20707_21377 = G__21382;
continue;
} else {
var temp__4425__auto___21383 = cljs.core.seq.call(null,seq__20704_21374);
if(temp__4425__auto___21383){
var seq__20704_21384__$1 = temp__4425__auto___21383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20704_21384__$1)){
var c__16879__auto___21385 = cljs.core.chunk_first.call(null,seq__20704_21384__$1);
var G__21386 = cljs.core.chunk_rest.call(null,seq__20704_21384__$1);
var G__21387 = c__16879__auto___21385;
var G__21388 = cljs.core.count.call(null,c__16879__auto___21385);
var G__21389 = (0);
seq__20704_21374 = G__21386;
chunk__20705_21375 = G__21387;
count__20706_21376 = G__21388;
i__20707_21377 = G__21389;
continue;
} else {
var child__18178__auto___21390 = cljs.core.first.call(null,seq__20704_21384__$1);
args__18177__auto__.push(child__18178__auto___21390);

var G__21391 = cljs.core.next.call(null,seq__20704_21384__$1);
var G__21392 = null;
var G__21393 = (0);
var G__21394 = (0);
seq__20704_21374 = G__21391;
chunk__20705_21375 = G__21392;
count__20706_21376 = G__21393;
i__20707_21377 = G__21394;
continue;
}
} else {
}
}
break;
}

return React.DOM.a.apply(null,args__18177__auto__);
});

flupot.dom.a.cljs$lang$maxFixedArity = (1);

flupot.dom.a.cljs$lang$applyTo = (function (seq20702){
var G__20703 = cljs.core.first.call(null,seq20702);
var seq20702__$1 = cljs.core.next.call(null,seq20702);
return flupot.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__20703,seq20702__$1);
});

flupot.dom.abbr = (function flupot$dom$abbr(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20710_21395 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20711_21396 = null;
var count__20712_21397 = (0);
var i__20713_21398 = (0);
while(true){
if((i__20713_21398 < count__20712_21397)){
var child__18178__auto___21399 = cljs.core._nth.call(null,chunk__20711_21396,i__20713_21398);
args__18177__auto__.push(child__18178__auto___21399);

var G__21400 = seq__20710_21395;
var G__21401 = chunk__20711_21396;
var G__21402 = count__20712_21397;
var G__21403 = (i__20713_21398 + (1));
seq__20710_21395 = G__21400;
chunk__20711_21396 = G__21401;
count__20712_21397 = G__21402;
i__20713_21398 = G__21403;
continue;
} else {
var temp__4425__auto___21404 = cljs.core.seq.call(null,seq__20710_21395);
if(temp__4425__auto___21404){
var seq__20710_21405__$1 = temp__4425__auto___21404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20710_21405__$1)){
var c__16879__auto___21406 = cljs.core.chunk_first.call(null,seq__20710_21405__$1);
var G__21407 = cljs.core.chunk_rest.call(null,seq__20710_21405__$1);
var G__21408 = c__16879__auto___21406;
var G__21409 = cljs.core.count.call(null,c__16879__auto___21406);
var G__21410 = (0);
seq__20710_21395 = G__21407;
chunk__20711_21396 = G__21408;
count__20712_21397 = G__21409;
i__20713_21398 = G__21410;
continue;
} else {
var child__18178__auto___21411 = cljs.core.first.call(null,seq__20710_21405__$1);
args__18177__auto__.push(child__18178__auto___21411);

var G__21412 = cljs.core.next.call(null,seq__20710_21405__$1);
var G__21413 = null;
var G__21414 = (0);
var G__21415 = (0);
seq__20710_21395 = G__21412;
chunk__20711_21396 = G__21413;
count__20712_21397 = G__21414;
i__20713_21398 = G__21415;
continue;
}
} else {
}
}
break;
}

return React.DOM.abbr.apply(null,args__18177__auto__);
});

flupot.dom.abbr.cljs$lang$maxFixedArity = (1);

flupot.dom.abbr.cljs$lang$applyTo = (function (seq20708){
var G__20709 = cljs.core.first.call(null,seq20708);
var seq20708__$1 = cljs.core.next.call(null,seq20708);
return flupot.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__20709,seq20708__$1);
});

flupot.dom.address = (function flupot$dom$address(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20716_21416 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20717_21417 = null;
var count__20718_21418 = (0);
var i__20719_21419 = (0);
while(true){
if((i__20719_21419 < count__20718_21418)){
var child__18178__auto___21420 = cljs.core._nth.call(null,chunk__20717_21417,i__20719_21419);
args__18177__auto__.push(child__18178__auto___21420);

var G__21421 = seq__20716_21416;
var G__21422 = chunk__20717_21417;
var G__21423 = count__20718_21418;
var G__21424 = (i__20719_21419 + (1));
seq__20716_21416 = G__21421;
chunk__20717_21417 = G__21422;
count__20718_21418 = G__21423;
i__20719_21419 = G__21424;
continue;
} else {
var temp__4425__auto___21425 = cljs.core.seq.call(null,seq__20716_21416);
if(temp__4425__auto___21425){
var seq__20716_21426__$1 = temp__4425__auto___21425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20716_21426__$1)){
var c__16879__auto___21427 = cljs.core.chunk_first.call(null,seq__20716_21426__$1);
var G__21428 = cljs.core.chunk_rest.call(null,seq__20716_21426__$1);
var G__21429 = c__16879__auto___21427;
var G__21430 = cljs.core.count.call(null,c__16879__auto___21427);
var G__21431 = (0);
seq__20716_21416 = G__21428;
chunk__20717_21417 = G__21429;
count__20718_21418 = G__21430;
i__20719_21419 = G__21431;
continue;
} else {
var child__18178__auto___21432 = cljs.core.first.call(null,seq__20716_21426__$1);
args__18177__auto__.push(child__18178__auto___21432);

var G__21433 = cljs.core.next.call(null,seq__20716_21426__$1);
var G__21434 = null;
var G__21435 = (0);
var G__21436 = (0);
seq__20716_21416 = G__21433;
chunk__20717_21417 = G__21434;
count__20718_21418 = G__21435;
i__20719_21419 = G__21436;
continue;
}
} else {
}
}
break;
}

return React.DOM.address.apply(null,args__18177__auto__);
});

flupot.dom.address.cljs$lang$maxFixedArity = (1);

flupot.dom.address.cljs$lang$applyTo = (function (seq20714){
var G__20715 = cljs.core.first.call(null,seq20714);
var seq20714__$1 = cljs.core.next.call(null,seq20714);
return flupot.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__20715,seq20714__$1);
});

flupot.dom.area = (function flupot$dom$area(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20722_21437 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20723_21438 = null;
var count__20724_21439 = (0);
var i__20725_21440 = (0);
while(true){
if((i__20725_21440 < count__20724_21439)){
var child__18178__auto___21441 = cljs.core._nth.call(null,chunk__20723_21438,i__20725_21440);
args__18177__auto__.push(child__18178__auto___21441);

var G__21442 = seq__20722_21437;
var G__21443 = chunk__20723_21438;
var G__21444 = count__20724_21439;
var G__21445 = (i__20725_21440 + (1));
seq__20722_21437 = G__21442;
chunk__20723_21438 = G__21443;
count__20724_21439 = G__21444;
i__20725_21440 = G__21445;
continue;
} else {
var temp__4425__auto___21446 = cljs.core.seq.call(null,seq__20722_21437);
if(temp__4425__auto___21446){
var seq__20722_21447__$1 = temp__4425__auto___21446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20722_21447__$1)){
var c__16879__auto___21448 = cljs.core.chunk_first.call(null,seq__20722_21447__$1);
var G__21449 = cljs.core.chunk_rest.call(null,seq__20722_21447__$1);
var G__21450 = c__16879__auto___21448;
var G__21451 = cljs.core.count.call(null,c__16879__auto___21448);
var G__21452 = (0);
seq__20722_21437 = G__21449;
chunk__20723_21438 = G__21450;
count__20724_21439 = G__21451;
i__20725_21440 = G__21452;
continue;
} else {
var child__18178__auto___21453 = cljs.core.first.call(null,seq__20722_21447__$1);
args__18177__auto__.push(child__18178__auto___21453);

var G__21454 = cljs.core.next.call(null,seq__20722_21447__$1);
var G__21455 = null;
var G__21456 = (0);
var G__21457 = (0);
seq__20722_21437 = G__21454;
chunk__20723_21438 = G__21455;
count__20724_21439 = G__21456;
i__20725_21440 = G__21457;
continue;
}
} else {
}
}
break;
}

return React.DOM.area.apply(null,args__18177__auto__);
});

flupot.dom.area.cljs$lang$maxFixedArity = (1);

flupot.dom.area.cljs$lang$applyTo = (function (seq20720){
var G__20721 = cljs.core.first.call(null,seq20720);
var seq20720__$1 = cljs.core.next.call(null,seq20720);
return flupot.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__20721,seq20720__$1);
});

flupot.dom.article = (function flupot$dom$article(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20728_21458 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20729_21459 = null;
var count__20730_21460 = (0);
var i__20731_21461 = (0);
while(true){
if((i__20731_21461 < count__20730_21460)){
var child__18178__auto___21462 = cljs.core._nth.call(null,chunk__20729_21459,i__20731_21461);
args__18177__auto__.push(child__18178__auto___21462);

var G__21463 = seq__20728_21458;
var G__21464 = chunk__20729_21459;
var G__21465 = count__20730_21460;
var G__21466 = (i__20731_21461 + (1));
seq__20728_21458 = G__21463;
chunk__20729_21459 = G__21464;
count__20730_21460 = G__21465;
i__20731_21461 = G__21466;
continue;
} else {
var temp__4425__auto___21467 = cljs.core.seq.call(null,seq__20728_21458);
if(temp__4425__auto___21467){
var seq__20728_21468__$1 = temp__4425__auto___21467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20728_21468__$1)){
var c__16879__auto___21469 = cljs.core.chunk_first.call(null,seq__20728_21468__$1);
var G__21470 = cljs.core.chunk_rest.call(null,seq__20728_21468__$1);
var G__21471 = c__16879__auto___21469;
var G__21472 = cljs.core.count.call(null,c__16879__auto___21469);
var G__21473 = (0);
seq__20728_21458 = G__21470;
chunk__20729_21459 = G__21471;
count__20730_21460 = G__21472;
i__20731_21461 = G__21473;
continue;
} else {
var child__18178__auto___21474 = cljs.core.first.call(null,seq__20728_21468__$1);
args__18177__auto__.push(child__18178__auto___21474);

var G__21475 = cljs.core.next.call(null,seq__20728_21468__$1);
var G__21476 = null;
var G__21477 = (0);
var G__21478 = (0);
seq__20728_21458 = G__21475;
chunk__20729_21459 = G__21476;
count__20730_21460 = G__21477;
i__20731_21461 = G__21478;
continue;
}
} else {
}
}
break;
}

return React.DOM.article.apply(null,args__18177__auto__);
});

flupot.dom.article.cljs$lang$maxFixedArity = (1);

flupot.dom.article.cljs$lang$applyTo = (function (seq20726){
var G__20727 = cljs.core.first.call(null,seq20726);
var seq20726__$1 = cljs.core.next.call(null,seq20726);
return flupot.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__20727,seq20726__$1);
});

flupot.dom.aside = (function flupot$dom$aside(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20734_21479 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20735_21480 = null;
var count__20736_21481 = (0);
var i__20737_21482 = (0);
while(true){
if((i__20737_21482 < count__20736_21481)){
var child__18178__auto___21483 = cljs.core._nth.call(null,chunk__20735_21480,i__20737_21482);
args__18177__auto__.push(child__18178__auto___21483);

var G__21484 = seq__20734_21479;
var G__21485 = chunk__20735_21480;
var G__21486 = count__20736_21481;
var G__21487 = (i__20737_21482 + (1));
seq__20734_21479 = G__21484;
chunk__20735_21480 = G__21485;
count__20736_21481 = G__21486;
i__20737_21482 = G__21487;
continue;
} else {
var temp__4425__auto___21488 = cljs.core.seq.call(null,seq__20734_21479);
if(temp__4425__auto___21488){
var seq__20734_21489__$1 = temp__4425__auto___21488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20734_21489__$1)){
var c__16879__auto___21490 = cljs.core.chunk_first.call(null,seq__20734_21489__$1);
var G__21491 = cljs.core.chunk_rest.call(null,seq__20734_21489__$1);
var G__21492 = c__16879__auto___21490;
var G__21493 = cljs.core.count.call(null,c__16879__auto___21490);
var G__21494 = (0);
seq__20734_21479 = G__21491;
chunk__20735_21480 = G__21492;
count__20736_21481 = G__21493;
i__20737_21482 = G__21494;
continue;
} else {
var child__18178__auto___21495 = cljs.core.first.call(null,seq__20734_21489__$1);
args__18177__auto__.push(child__18178__auto___21495);

var G__21496 = cljs.core.next.call(null,seq__20734_21489__$1);
var G__21497 = null;
var G__21498 = (0);
var G__21499 = (0);
seq__20734_21479 = G__21496;
chunk__20735_21480 = G__21497;
count__20736_21481 = G__21498;
i__20737_21482 = G__21499;
continue;
}
} else {
}
}
break;
}

return React.DOM.aside.apply(null,args__18177__auto__);
});

flupot.dom.aside.cljs$lang$maxFixedArity = (1);

flupot.dom.aside.cljs$lang$applyTo = (function (seq20732){
var G__20733 = cljs.core.first.call(null,seq20732);
var seq20732__$1 = cljs.core.next.call(null,seq20732);
return flupot.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__20733,seq20732__$1);
});

flupot.dom.audio = (function flupot$dom$audio(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20740_21500 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20741_21501 = null;
var count__20742_21502 = (0);
var i__20743_21503 = (0);
while(true){
if((i__20743_21503 < count__20742_21502)){
var child__18178__auto___21504 = cljs.core._nth.call(null,chunk__20741_21501,i__20743_21503);
args__18177__auto__.push(child__18178__auto___21504);

var G__21505 = seq__20740_21500;
var G__21506 = chunk__20741_21501;
var G__21507 = count__20742_21502;
var G__21508 = (i__20743_21503 + (1));
seq__20740_21500 = G__21505;
chunk__20741_21501 = G__21506;
count__20742_21502 = G__21507;
i__20743_21503 = G__21508;
continue;
} else {
var temp__4425__auto___21509 = cljs.core.seq.call(null,seq__20740_21500);
if(temp__4425__auto___21509){
var seq__20740_21510__$1 = temp__4425__auto___21509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20740_21510__$1)){
var c__16879__auto___21511 = cljs.core.chunk_first.call(null,seq__20740_21510__$1);
var G__21512 = cljs.core.chunk_rest.call(null,seq__20740_21510__$1);
var G__21513 = c__16879__auto___21511;
var G__21514 = cljs.core.count.call(null,c__16879__auto___21511);
var G__21515 = (0);
seq__20740_21500 = G__21512;
chunk__20741_21501 = G__21513;
count__20742_21502 = G__21514;
i__20743_21503 = G__21515;
continue;
} else {
var child__18178__auto___21516 = cljs.core.first.call(null,seq__20740_21510__$1);
args__18177__auto__.push(child__18178__auto___21516);

var G__21517 = cljs.core.next.call(null,seq__20740_21510__$1);
var G__21518 = null;
var G__21519 = (0);
var G__21520 = (0);
seq__20740_21500 = G__21517;
chunk__20741_21501 = G__21518;
count__20742_21502 = G__21519;
i__20743_21503 = G__21520;
continue;
}
} else {
}
}
break;
}

return React.DOM.audio.apply(null,args__18177__auto__);
});

flupot.dom.audio.cljs$lang$maxFixedArity = (1);

flupot.dom.audio.cljs$lang$applyTo = (function (seq20738){
var G__20739 = cljs.core.first.call(null,seq20738);
var seq20738__$1 = cljs.core.next.call(null,seq20738);
return flupot.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__20739,seq20738__$1);
});

flupot.dom.b = (function flupot$dom$b(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20746_21521 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20747_21522 = null;
var count__20748_21523 = (0);
var i__20749_21524 = (0);
while(true){
if((i__20749_21524 < count__20748_21523)){
var child__18178__auto___21525 = cljs.core._nth.call(null,chunk__20747_21522,i__20749_21524);
args__18177__auto__.push(child__18178__auto___21525);

var G__21526 = seq__20746_21521;
var G__21527 = chunk__20747_21522;
var G__21528 = count__20748_21523;
var G__21529 = (i__20749_21524 + (1));
seq__20746_21521 = G__21526;
chunk__20747_21522 = G__21527;
count__20748_21523 = G__21528;
i__20749_21524 = G__21529;
continue;
} else {
var temp__4425__auto___21530 = cljs.core.seq.call(null,seq__20746_21521);
if(temp__4425__auto___21530){
var seq__20746_21531__$1 = temp__4425__auto___21530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20746_21531__$1)){
var c__16879__auto___21532 = cljs.core.chunk_first.call(null,seq__20746_21531__$1);
var G__21533 = cljs.core.chunk_rest.call(null,seq__20746_21531__$1);
var G__21534 = c__16879__auto___21532;
var G__21535 = cljs.core.count.call(null,c__16879__auto___21532);
var G__21536 = (0);
seq__20746_21521 = G__21533;
chunk__20747_21522 = G__21534;
count__20748_21523 = G__21535;
i__20749_21524 = G__21536;
continue;
} else {
var child__18178__auto___21537 = cljs.core.first.call(null,seq__20746_21531__$1);
args__18177__auto__.push(child__18178__auto___21537);

var G__21538 = cljs.core.next.call(null,seq__20746_21531__$1);
var G__21539 = null;
var G__21540 = (0);
var G__21541 = (0);
seq__20746_21521 = G__21538;
chunk__20747_21522 = G__21539;
count__20748_21523 = G__21540;
i__20749_21524 = G__21541;
continue;
}
} else {
}
}
break;
}

return React.DOM.b.apply(null,args__18177__auto__);
});

flupot.dom.b.cljs$lang$maxFixedArity = (1);

flupot.dom.b.cljs$lang$applyTo = (function (seq20744){
var G__20745 = cljs.core.first.call(null,seq20744);
var seq20744__$1 = cljs.core.next.call(null,seq20744);
return flupot.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__20745,seq20744__$1);
});

flupot.dom.base = (function flupot$dom$base(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20752_21542 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20753_21543 = null;
var count__20754_21544 = (0);
var i__20755_21545 = (0);
while(true){
if((i__20755_21545 < count__20754_21544)){
var child__18178__auto___21546 = cljs.core._nth.call(null,chunk__20753_21543,i__20755_21545);
args__18177__auto__.push(child__18178__auto___21546);

var G__21547 = seq__20752_21542;
var G__21548 = chunk__20753_21543;
var G__21549 = count__20754_21544;
var G__21550 = (i__20755_21545 + (1));
seq__20752_21542 = G__21547;
chunk__20753_21543 = G__21548;
count__20754_21544 = G__21549;
i__20755_21545 = G__21550;
continue;
} else {
var temp__4425__auto___21551 = cljs.core.seq.call(null,seq__20752_21542);
if(temp__4425__auto___21551){
var seq__20752_21552__$1 = temp__4425__auto___21551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20752_21552__$1)){
var c__16879__auto___21553 = cljs.core.chunk_first.call(null,seq__20752_21552__$1);
var G__21554 = cljs.core.chunk_rest.call(null,seq__20752_21552__$1);
var G__21555 = c__16879__auto___21553;
var G__21556 = cljs.core.count.call(null,c__16879__auto___21553);
var G__21557 = (0);
seq__20752_21542 = G__21554;
chunk__20753_21543 = G__21555;
count__20754_21544 = G__21556;
i__20755_21545 = G__21557;
continue;
} else {
var child__18178__auto___21558 = cljs.core.first.call(null,seq__20752_21552__$1);
args__18177__auto__.push(child__18178__auto___21558);

var G__21559 = cljs.core.next.call(null,seq__20752_21552__$1);
var G__21560 = null;
var G__21561 = (0);
var G__21562 = (0);
seq__20752_21542 = G__21559;
chunk__20753_21543 = G__21560;
count__20754_21544 = G__21561;
i__20755_21545 = G__21562;
continue;
}
} else {
}
}
break;
}

return React.DOM.base.apply(null,args__18177__auto__);
});

flupot.dom.base.cljs$lang$maxFixedArity = (1);

flupot.dom.base.cljs$lang$applyTo = (function (seq20750){
var G__20751 = cljs.core.first.call(null,seq20750);
var seq20750__$1 = cljs.core.next.call(null,seq20750);
return flupot.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__20751,seq20750__$1);
});

flupot.dom.bdi = (function flupot$dom$bdi(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20758_21563 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20759_21564 = null;
var count__20760_21565 = (0);
var i__20761_21566 = (0);
while(true){
if((i__20761_21566 < count__20760_21565)){
var child__18178__auto___21567 = cljs.core._nth.call(null,chunk__20759_21564,i__20761_21566);
args__18177__auto__.push(child__18178__auto___21567);

var G__21568 = seq__20758_21563;
var G__21569 = chunk__20759_21564;
var G__21570 = count__20760_21565;
var G__21571 = (i__20761_21566 + (1));
seq__20758_21563 = G__21568;
chunk__20759_21564 = G__21569;
count__20760_21565 = G__21570;
i__20761_21566 = G__21571;
continue;
} else {
var temp__4425__auto___21572 = cljs.core.seq.call(null,seq__20758_21563);
if(temp__4425__auto___21572){
var seq__20758_21573__$1 = temp__4425__auto___21572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20758_21573__$1)){
var c__16879__auto___21574 = cljs.core.chunk_first.call(null,seq__20758_21573__$1);
var G__21575 = cljs.core.chunk_rest.call(null,seq__20758_21573__$1);
var G__21576 = c__16879__auto___21574;
var G__21577 = cljs.core.count.call(null,c__16879__auto___21574);
var G__21578 = (0);
seq__20758_21563 = G__21575;
chunk__20759_21564 = G__21576;
count__20760_21565 = G__21577;
i__20761_21566 = G__21578;
continue;
} else {
var child__18178__auto___21579 = cljs.core.first.call(null,seq__20758_21573__$1);
args__18177__auto__.push(child__18178__auto___21579);

var G__21580 = cljs.core.next.call(null,seq__20758_21573__$1);
var G__21581 = null;
var G__21582 = (0);
var G__21583 = (0);
seq__20758_21563 = G__21580;
chunk__20759_21564 = G__21581;
count__20760_21565 = G__21582;
i__20761_21566 = G__21583;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdi.apply(null,args__18177__auto__);
});

flupot.dom.bdi.cljs$lang$maxFixedArity = (1);

flupot.dom.bdi.cljs$lang$applyTo = (function (seq20756){
var G__20757 = cljs.core.first.call(null,seq20756);
var seq20756__$1 = cljs.core.next.call(null,seq20756);
return flupot.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__20757,seq20756__$1);
});

flupot.dom.bdo = (function flupot$dom$bdo(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20764_21584 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20765_21585 = null;
var count__20766_21586 = (0);
var i__20767_21587 = (0);
while(true){
if((i__20767_21587 < count__20766_21586)){
var child__18178__auto___21588 = cljs.core._nth.call(null,chunk__20765_21585,i__20767_21587);
args__18177__auto__.push(child__18178__auto___21588);

var G__21589 = seq__20764_21584;
var G__21590 = chunk__20765_21585;
var G__21591 = count__20766_21586;
var G__21592 = (i__20767_21587 + (1));
seq__20764_21584 = G__21589;
chunk__20765_21585 = G__21590;
count__20766_21586 = G__21591;
i__20767_21587 = G__21592;
continue;
} else {
var temp__4425__auto___21593 = cljs.core.seq.call(null,seq__20764_21584);
if(temp__4425__auto___21593){
var seq__20764_21594__$1 = temp__4425__auto___21593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20764_21594__$1)){
var c__16879__auto___21595 = cljs.core.chunk_first.call(null,seq__20764_21594__$1);
var G__21596 = cljs.core.chunk_rest.call(null,seq__20764_21594__$1);
var G__21597 = c__16879__auto___21595;
var G__21598 = cljs.core.count.call(null,c__16879__auto___21595);
var G__21599 = (0);
seq__20764_21584 = G__21596;
chunk__20765_21585 = G__21597;
count__20766_21586 = G__21598;
i__20767_21587 = G__21599;
continue;
} else {
var child__18178__auto___21600 = cljs.core.first.call(null,seq__20764_21594__$1);
args__18177__auto__.push(child__18178__auto___21600);

var G__21601 = cljs.core.next.call(null,seq__20764_21594__$1);
var G__21602 = null;
var G__21603 = (0);
var G__21604 = (0);
seq__20764_21584 = G__21601;
chunk__20765_21585 = G__21602;
count__20766_21586 = G__21603;
i__20767_21587 = G__21604;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdo.apply(null,args__18177__auto__);
});

flupot.dom.bdo.cljs$lang$maxFixedArity = (1);

flupot.dom.bdo.cljs$lang$applyTo = (function (seq20762){
var G__20763 = cljs.core.first.call(null,seq20762);
var seq20762__$1 = cljs.core.next.call(null,seq20762);
return flupot.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__20763,seq20762__$1);
});

flupot.dom.big = (function flupot$dom$big(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20770_21605 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20771_21606 = null;
var count__20772_21607 = (0);
var i__20773_21608 = (0);
while(true){
if((i__20773_21608 < count__20772_21607)){
var child__18178__auto___21609 = cljs.core._nth.call(null,chunk__20771_21606,i__20773_21608);
args__18177__auto__.push(child__18178__auto___21609);

var G__21610 = seq__20770_21605;
var G__21611 = chunk__20771_21606;
var G__21612 = count__20772_21607;
var G__21613 = (i__20773_21608 + (1));
seq__20770_21605 = G__21610;
chunk__20771_21606 = G__21611;
count__20772_21607 = G__21612;
i__20773_21608 = G__21613;
continue;
} else {
var temp__4425__auto___21614 = cljs.core.seq.call(null,seq__20770_21605);
if(temp__4425__auto___21614){
var seq__20770_21615__$1 = temp__4425__auto___21614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20770_21615__$1)){
var c__16879__auto___21616 = cljs.core.chunk_first.call(null,seq__20770_21615__$1);
var G__21617 = cljs.core.chunk_rest.call(null,seq__20770_21615__$1);
var G__21618 = c__16879__auto___21616;
var G__21619 = cljs.core.count.call(null,c__16879__auto___21616);
var G__21620 = (0);
seq__20770_21605 = G__21617;
chunk__20771_21606 = G__21618;
count__20772_21607 = G__21619;
i__20773_21608 = G__21620;
continue;
} else {
var child__18178__auto___21621 = cljs.core.first.call(null,seq__20770_21615__$1);
args__18177__auto__.push(child__18178__auto___21621);

var G__21622 = cljs.core.next.call(null,seq__20770_21615__$1);
var G__21623 = null;
var G__21624 = (0);
var G__21625 = (0);
seq__20770_21605 = G__21622;
chunk__20771_21606 = G__21623;
count__20772_21607 = G__21624;
i__20773_21608 = G__21625;
continue;
}
} else {
}
}
break;
}

return React.DOM.big.apply(null,args__18177__auto__);
});

flupot.dom.big.cljs$lang$maxFixedArity = (1);

flupot.dom.big.cljs$lang$applyTo = (function (seq20768){
var G__20769 = cljs.core.first.call(null,seq20768);
var seq20768__$1 = cljs.core.next.call(null,seq20768);
return flupot.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__20769,seq20768__$1);
});

flupot.dom.blockquote = (function flupot$dom$blockquote(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20776_21626 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20777_21627 = null;
var count__20778_21628 = (0);
var i__20779_21629 = (0);
while(true){
if((i__20779_21629 < count__20778_21628)){
var child__18178__auto___21630 = cljs.core._nth.call(null,chunk__20777_21627,i__20779_21629);
args__18177__auto__.push(child__18178__auto___21630);

var G__21631 = seq__20776_21626;
var G__21632 = chunk__20777_21627;
var G__21633 = count__20778_21628;
var G__21634 = (i__20779_21629 + (1));
seq__20776_21626 = G__21631;
chunk__20777_21627 = G__21632;
count__20778_21628 = G__21633;
i__20779_21629 = G__21634;
continue;
} else {
var temp__4425__auto___21635 = cljs.core.seq.call(null,seq__20776_21626);
if(temp__4425__auto___21635){
var seq__20776_21636__$1 = temp__4425__auto___21635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20776_21636__$1)){
var c__16879__auto___21637 = cljs.core.chunk_first.call(null,seq__20776_21636__$1);
var G__21638 = cljs.core.chunk_rest.call(null,seq__20776_21636__$1);
var G__21639 = c__16879__auto___21637;
var G__21640 = cljs.core.count.call(null,c__16879__auto___21637);
var G__21641 = (0);
seq__20776_21626 = G__21638;
chunk__20777_21627 = G__21639;
count__20778_21628 = G__21640;
i__20779_21629 = G__21641;
continue;
} else {
var child__18178__auto___21642 = cljs.core.first.call(null,seq__20776_21636__$1);
args__18177__auto__.push(child__18178__auto___21642);

var G__21643 = cljs.core.next.call(null,seq__20776_21636__$1);
var G__21644 = null;
var G__21645 = (0);
var G__21646 = (0);
seq__20776_21626 = G__21643;
chunk__20777_21627 = G__21644;
count__20778_21628 = G__21645;
i__20779_21629 = G__21646;
continue;
}
} else {
}
}
break;
}

return React.DOM.blockquote.apply(null,args__18177__auto__);
});

flupot.dom.blockquote.cljs$lang$maxFixedArity = (1);

flupot.dom.blockquote.cljs$lang$applyTo = (function (seq20774){
var G__20775 = cljs.core.first.call(null,seq20774);
var seq20774__$1 = cljs.core.next.call(null,seq20774);
return flupot.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__20775,seq20774__$1);
});

flupot.dom.body = (function flupot$dom$body(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20782_21647 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20783_21648 = null;
var count__20784_21649 = (0);
var i__20785_21650 = (0);
while(true){
if((i__20785_21650 < count__20784_21649)){
var child__18178__auto___21651 = cljs.core._nth.call(null,chunk__20783_21648,i__20785_21650);
args__18177__auto__.push(child__18178__auto___21651);

var G__21652 = seq__20782_21647;
var G__21653 = chunk__20783_21648;
var G__21654 = count__20784_21649;
var G__21655 = (i__20785_21650 + (1));
seq__20782_21647 = G__21652;
chunk__20783_21648 = G__21653;
count__20784_21649 = G__21654;
i__20785_21650 = G__21655;
continue;
} else {
var temp__4425__auto___21656 = cljs.core.seq.call(null,seq__20782_21647);
if(temp__4425__auto___21656){
var seq__20782_21657__$1 = temp__4425__auto___21656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20782_21657__$1)){
var c__16879__auto___21658 = cljs.core.chunk_first.call(null,seq__20782_21657__$1);
var G__21659 = cljs.core.chunk_rest.call(null,seq__20782_21657__$1);
var G__21660 = c__16879__auto___21658;
var G__21661 = cljs.core.count.call(null,c__16879__auto___21658);
var G__21662 = (0);
seq__20782_21647 = G__21659;
chunk__20783_21648 = G__21660;
count__20784_21649 = G__21661;
i__20785_21650 = G__21662;
continue;
} else {
var child__18178__auto___21663 = cljs.core.first.call(null,seq__20782_21657__$1);
args__18177__auto__.push(child__18178__auto___21663);

var G__21664 = cljs.core.next.call(null,seq__20782_21657__$1);
var G__21665 = null;
var G__21666 = (0);
var G__21667 = (0);
seq__20782_21647 = G__21664;
chunk__20783_21648 = G__21665;
count__20784_21649 = G__21666;
i__20785_21650 = G__21667;
continue;
}
} else {
}
}
break;
}

return React.DOM.body.apply(null,args__18177__auto__);
});

flupot.dom.body.cljs$lang$maxFixedArity = (1);

flupot.dom.body.cljs$lang$applyTo = (function (seq20780){
var G__20781 = cljs.core.first.call(null,seq20780);
var seq20780__$1 = cljs.core.next.call(null,seq20780);
return flupot.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__20781,seq20780__$1);
});

flupot.dom.br = (function flupot$dom$br(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20788_21668 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20789_21669 = null;
var count__20790_21670 = (0);
var i__20791_21671 = (0);
while(true){
if((i__20791_21671 < count__20790_21670)){
var child__18178__auto___21672 = cljs.core._nth.call(null,chunk__20789_21669,i__20791_21671);
args__18177__auto__.push(child__18178__auto___21672);

var G__21673 = seq__20788_21668;
var G__21674 = chunk__20789_21669;
var G__21675 = count__20790_21670;
var G__21676 = (i__20791_21671 + (1));
seq__20788_21668 = G__21673;
chunk__20789_21669 = G__21674;
count__20790_21670 = G__21675;
i__20791_21671 = G__21676;
continue;
} else {
var temp__4425__auto___21677 = cljs.core.seq.call(null,seq__20788_21668);
if(temp__4425__auto___21677){
var seq__20788_21678__$1 = temp__4425__auto___21677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20788_21678__$1)){
var c__16879__auto___21679 = cljs.core.chunk_first.call(null,seq__20788_21678__$1);
var G__21680 = cljs.core.chunk_rest.call(null,seq__20788_21678__$1);
var G__21681 = c__16879__auto___21679;
var G__21682 = cljs.core.count.call(null,c__16879__auto___21679);
var G__21683 = (0);
seq__20788_21668 = G__21680;
chunk__20789_21669 = G__21681;
count__20790_21670 = G__21682;
i__20791_21671 = G__21683;
continue;
} else {
var child__18178__auto___21684 = cljs.core.first.call(null,seq__20788_21678__$1);
args__18177__auto__.push(child__18178__auto___21684);

var G__21685 = cljs.core.next.call(null,seq__20788_21678__$1);
var G__21686 = null;
var G__21687 = (0);
var G__21688 = (0);
seq__20788_21668 = G__21685;
chunk__20789_21669 = G__21686;
count__20790_21670 = G__21687;
i__20791_21671 = G__21688;
continue;
}
} else {
}
}
break;
}

return React.DOM.br.apply(null,args__18177__auto__);
});

flupot.dom.br.cljs$lang$maxFixedArity = (1);

flupot.dom.br.cljs$lang$applyTo = (function (seq20786){
var G__20787 = cljs.core.first.call(null,seq20786);
var seq20786__$1 = cljs.core.next.call(null,seq20786);
return flupot.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__20787,seq20786__$1);
});

flupot.dom.button = (function flupot$dom$button(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20794_21689 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20795_21690 = null;
var count__20796_21691 = (0);
var i__20797_21692 = (0);
while(true){
if((i__20797_21692 < count__20796_21691)){
var child__18178__auto___21693 = cljs.core._nth.call(null,chunk__20795_21690,i__20797_21692);
args__18177__auto__.push(child__18178__auto___21693);

var G__21694 = seq__20794_21689;
var G__21695 = chunk__20795_21690;
var G__21696 = count__20796_21691;
var G__21697 = (i__20797_21692 + (1));
seq__20794_21689 = G__21694;
chunk__20795_21690 = G__21695;
count__20796_21691 = G__21696;
i__20797_21692 = G__21697;
continue;
} else {
var temp__4425__auto___21698 = cljs.core.seq.call(null,seq__20794_21689);
if(temp__4425__auto___21698){
var seq__20794_21699__$1 = temp__4425__auto___21698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20794_21699__$1)){
var c__16879__auto___21700 = cljs.core.chunk_first.call(null,seq__20794_21699__$1);
var G__21701 = cljs.core.chunk_rest.call(null,seq__20794_21699__$1);
var G__21702 = c__16879__auto___21700;
var G__21703 = cljs.core.count.call(null,c__16879__auto___21700);
var G__21704 = (0);
seq__20794_21689 = G__21701;
chunk__20795_21690 = G__21702;
count__20796_21691 = G__21703;
i__20797_21692 = G__21704;
continue;
} else {
var child__18178__auto___21705 = cljs.core.first.call(null,seq__20794_21699__$1);
args__18177__auto__.push(child__18178__auto___21705);

var G__21706 = cljs.core.next.call(null,seq__20794_21699__$1);
var G__21707 = null;
var G__21708 = (0);
var G__21709 = (0);
seq__20794_21689 = G__21706;
chunk__20795_21690 = G__21707;
count__20796_21691 = G__21708;
i__20797_21692 = G__21709;
continue;
}
} else {
}
}
break;
}

return React.DOM.button.apply(null,args__18177__auto__);
});

flupot.dom.button.cljs$lang$maxFixedArity = (1);

flupot.dom.button.cljs$lang$applyTo = (function (seq20792){
var G__20793 = cljs.core.first.call(null,seq20792);
var seq20792__$1 = cljs.core.next.call(null,seq20792);
return flupot.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__20793,seq20792__$1);
});

flupot.dom.canvas = (function flupot$dom$canvas(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20800_21710 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20801_21711 = null;
var count__20802_21712 = (0);
var i__20803_21713 = (0);
while(true){
if((i__20803_21713 < count__20802_21712)){
var child__18178__auto___21714 = cljs.core._nth.call(null,chunk__20801_21711,i__20803_21713);
args__18177__auto__.push(child__18178__auto___21714);

var G__21715 = seq__20800_21710;
var G__21716 = chunk__20801_21711;
var G__21717 = count__20802_21712;
var G__21718 = (i__20803_21713 + (1));
seq__20800_21710 = G__21715;
chunk__20801_21711 = G__21716;
count__20802_21712 = G__21717;
i__20803_21713 = G__21718;
continue;
} else {
var temp__4425__auto___21719 = cljs.core.seq.call(null,seq__20800_21710);
if(temp__4425__auto___21719){
var seq__20800_21720__$1 = temp__4425__auto___21719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20800_21720__$1)){
var c__16879__auto___21721 = cljs.core.chunk_first.call(null,seq__20800_21720__$1);
var G__21722 = cljs.core.chunk_rest.call(null,seq__20800_21720__$1);
var G__21723 = c__16879__auto___21721;
var G__21724 = cljs.core.count.call(null,c__16879__auto___21721);
var G__21725 = (0);
seq__20800_21710 = G__21722;
chunk__20801_21711 = G__21723;
count__20802_21712 = G__21724;
i__20803_21713 = G__21725;
continue;
} else {
var child__18178__auto___21726 = cljs.core.first.call(null,seq__20800_21720__$1);
args__18177__auto__.push(child__18178__auto___21726);

var G__21727 = cljs.core.next.call(null,seq__20800_21720__$1);
var G__21728 = null;
var G__21729 = (0);
var G__21730 = (0);
seq__20800_21710 = G__21727;
chunk__20801_21711 = G__21728;
count__20802_21712 = G__21729;
i__20803_21713 = G__21730;
continue;
}
} else {
}
}
break;
}

return React.DOM.canvas.apply(null,args__18177__auto__);
});

flupot.dom.canvas.cljs$lang$maxFixedArity = (1);

flupot.dom.canvas.cljs$lang$applyTo = (function (seq20798){
var G__20799 = cljs.core.first.call(null,seq20798);
var seq20798__$1 = cljs.core.next.call(null,seq20798);
return flupot.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__20799,seq20798__$1);
});

flupot.dom.caption = (function flupot$dom$caption(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20806_21731 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20807_21732 = null;
var count__20808_21733 = (0);
var i__20809_21734 = (0);
while(true){
if((i__20809_21734 < count__20808_21733)){
var child__18178__auto___21735 = cljs.core._nth.call(null,chunk__20807_21732,i__20809_21734);
args__18177__auto__.push(child__18178__auto___21735);

var G__21736 = seq__20806_21731;
var G__21737 = chunk__20807_21732;
var G__21738 = count__20808_21733;
var G__21739 = (i__20809_21734 + (1));
seq__20806_21731 = G__21736;
chunk__20807_21732 = G__21737;
count__20808_21733 = G__21738;
i__20809_21734 = G__21739;
continue;
} else {
var temp__4425__auto___21740 = cljs.core.seq.call(null,seq__20806_21731);
if(temp__4425__auto___21740){
var seq__20806_21741__$1 = temp__4425__auto___21740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20806_21741__$1)){
var c__16879__auto___21742 = cljs.core.chunk_first.call(null,seq__20806_21741__$1);
var G__21743 = cljs.core.chunk_rest.call(null,seq__20806_21741__$1);
var G__21744 = c__16879__auto___21742;
var G__21745 = cljs.core.count.call(null,c__16879__auto___21742);
var G__21746 = (0);
seq__20806_21731 = G__21743;
chunk__20807_21732 = G__21744;
count__20808_21733 = G__21745;
i__20809_21734 = G__21746;
continue;
} else {
var child__18178__auto___21747 = cljs.core.first.call(null,seq__20806_21741__$1);
args__18177__auto__.push(child__18178__auto___21747);

var G__21748 = cljs.core.next.call(null,seq__20806_21741__$1);
var G__21749 = null;
var G__21750 = (0);
var G__21751 = (0);
seq__20806_21731 = G__21748;
chunk__20807_21732 = G__21749;
count__20808_21733 = G__21750;
i__20809_21734 = G__21751;
continue;
}
} else {
}
}
break;
}

return React.DOM.caption.apply(null,args__18177__auto__);
});

flupot.dom.caption.cljs$lang$maxFixedArity = (1);

flupot.dom.caption.cljs$lang$applyTo = (function (seq20804){
var G__20805 = cljs.core.first.call(null,seq20804);
var seq20804__$1 = cljs.core.next.call(null,seq20804);
return flupot.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__20805,seq20804__$1);
});

flupot.dom.cite = (function flupot$dom$cite(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20812_21752 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20813_21753 = null;
var count__20814_21754 = (0);
var i__20815_21755 = (0);
while(true){
if((i__20815_21755 < count__20814_21754)){
var child__18178__auto___21756 = cljs.core._nth.call(null,chunk__20813_21753,i__20815_21755);
args__18177__auto__.push(child__18178__auto___21756);

var G__21757 = seq__20812_21752;
var G__21758 = chunk__20813_21753;
var G__21759 = count__20814_21754;
var G__21760 = (i__20815_21755 + (1));
seq__20812_21752 = G__21757;
chunk__20813_21753 = G__21758;
count__20814_21754 = G__21759;
i__20815_21755 = G__21760;
continue;
} else {
var temp__4425__auto___21761 = cljs.core.seq.call(null,seq__20812_21752);
if(temp__4425__auto___21761){
var seq__20812_21762__$1 = temp__4425__auto___21761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20812_21762__$1)){
var c__16879__auto___21763 = cljs.core.chunk_first.call(null,seq__20812_21762__$1);
var G__21764 = cljs.core.chunk_rest.call(null,seq__20812_21762__$1);
var G__21765 = c__16879__auto___21763;
var G__21766 = cljs.core.count.call(null,c__16879__auto___21763);
var G__21767 = (0);
seq__20812_21752 = G__21764;
chunk__20813_21753 = G__21765;
count__20814_21754 = G__21766;
i__20815_21755 = G__21767;
continue;
} else {
var child__18178__auto___21768 = cljs.core.first.call(null,seq__20812_21762__$1);
args__18177__auto__.push(child__18178__auto___21768);

var G__21769 = cljs.core.next.call(null,seq__20812_21762__$1);
var G__21770 = null;
var G__21771 = (0);
var G__21772 = (0);
seq__20812_21752 = G__21769;
chunk__20813_21753 = G__21770;
count__20814_21754 = G__21771;
i__20815_21755 = G__21772;
continue;
}
} else {
}
}
break;
}

return React.DOM.cite.apply(null,args__18177__auto__);
});

flupot.dom.cite.cljs$lang$maxFixedArity = (1);

flupot.dom.cite.cljs$lang$applyTo = (function (seq20810){
var G__20811 = cljs.core.first.call(null,seq20810);
var seq20810__$1 = cljs.core.next.call(null,seq20810);
return flupot.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__20811,seq20810__$1);
});

flupot.dom.code = (function flupot$dom$code(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20818_21773 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20819_21774 = null;
var count__20820_21775 = (0);
var i__20821_21776 = (0);
while(true){
if((i__20821_21776 < count__20820_21775)){
var child__18178__auto___21777 = cljs.core._nth.call(null,chunk__20819_21774,i__20821_21776);
args__18177__auto__.push(child__18178__auto___21777);

var G__21778 = seq__20818_21773;
var G__21779 = chunk__20819_21774;
var G__21780 = count__20820_21775;
var G__21781 = (i__20821_21776 + (1));
seq__20818_21773 = G__21778;
chunk__20819_21774 = G__21779;
count__20820_21775 = G__21780;
i__20821_21776 = G__21781;
continue;
} else {
var temp__4425__auto___21782 = cljs.core.seq.call(null,seq__20818_21773);
if(temp__4425__auto___21782){
var seq__20818_21783__$1 = temp__4425__auto___21782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20818_21783__$1)){
var c__16879__auto___21784 = cljs.core.chunk_first.call(null,seq__20818_21783__$1);
var G__21785 = cljs.core.chunk_rest.call(null,seq__20818_21783__$1);
var G__21786 = c__16879__auto___21784;
var G__21787 = cljs.core.count.call(null,c__16879__auto___21784);
var G__21788 = (0);
seq__20818_21773 = G__21785;
chunk__20819_21774 = G__21786;
count__20820_21775 = G__21787;
i__20821_21776 = G__21788;
continue;
} else {
var child__18178__auto___21789 = cljs.core.first.call(null,seq__20818_21783__$1);
args__18177__auto__.push(child__18178__auto___21789);

var G__21790 = cljs.core.next.call(null,seq__20818_21783__$1);
var G__21791 = null;
var G__21792 = (0);
var G__21793 = (0);
seq__20818_21773 = G__21790;
chunk__20819_21774 = G__21791;
count__20820_21775 = G__21792;
i__20821_21776 = G__21793;
continue;
}
} else {
}
}
break;
}

return React.DOM.code.apply(null,args__18177__auto__);
});

flupot.dom.code.cljs$lang$maxFixedArity = (1);

flupot.dom.code.cljs$lang$applyTo = (function (seq20816){
var G__20817 = cljs.core.first.call(null,seq20816);
var seq20816__$1 = cljs.core.next.call(null,seq20816);
return flupot.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__20817,seq20816__$1);
});

flupot.dom.col = (function flupot$dom$col(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20824_21794 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20825_21795 = null;
var count__20826_21796 = (0);
var i__20827_21797 = (0);
while(true){
if((i__20827_21797 < count__20826_21796)){
var child__18178__auto___21798 = cljs.core._nth.call(null,chunk__20825_21795,i__20827_21797);
args__18177__auto__.push(child__18178__auto___21798);

var G__21799 = seq__20824_21794;
var G__21800 = chunk__20825_21795;
var G__21801 = count__20826_21796;
var G__21802 = (i__20827_21797 + (1));
seq__20824_21794 = G__21799;
chunk__20825_21795 = G__21800;
count__20826_21796 = G__21801;
i__20827_21797 = G__21802;
continue;
} else {
var temp__4425__auto___21803 = cljs.core.seq.call(null,seq__20824_21794);
if(temp__4425__auto___21803){
var seq__20824_21804__$1 = temp__4425__auto___21803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20824_21804__$1)){
var c__16879__auto___21805 = cljs.core.chunk_first.call(null,seq__20824_21804__$1);
var G__21806 = cljs.core.chunk_rest.call(null,seq__20824_21804__$1);
var G__21807 = c__16879__auto___21805;
var G__21808 = cljs.core.count.call(null,c__16879__auto___21805);
var G__21809 = (0);
seq__20824_21794 = G__21806;
chunk__20825_21795 = G__21807;
count__20826_21796 = G__21808;
i__20827_21797 = G__21809;
continue;
} else {
var child__18178__auto___21810 = cljs.core.first.call(null,seq__20824_21804__$1);
args__18177__auto__.push(child__18178__auto___21810);

var G__21811 = cljs.core.next.call(null,seq__20824_21804__$1);
var G__21812 = null;
var G__21813 = (0);
var G__21814 = (0);
seq__20824_21794 = G__21811;
chunk__20825_21795 = G__21812;
count__20826_21796 = G__21813;
i__20827_21797 = G__21814;
continue;
}
} else {
}
}
break;
}

return React.DOM.col.apply(null,args__18177__auto__);
});

flupot.dom.col.cljs$lang$maxFixedArity = (1);

flupot.dom.col.cljs$lang$applyTo = (function (seq20822){
var G__20823 = cljs.core.first.call(null,seq20822);
var seq20822__$1 = cljs.core.next.call(null,seq20822);
return flupot.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__20823,seq20822__$1);
});

flupot.dom.colgroup = (function flupot$dom$colgroup(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20830_21815 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20831_21816 = null;
var count__20832_21817 = (0);
var i__20833_21818 = (0);
while(true){
if((i__20833_21818 < count__20832_21817)){
var child__18178__auto___21819 = cljs.core._nth.call(null,chunk__20831_21816,i__20833_21818);
args__18177__auto__.push(child__18178__auto___21819);

var G__21820 = seq__20830_21815;
var G__21821 = chunk__20831_21816;
var G__21822 = count__20832_21817;
var G__21823 = (i__20833_21818 + (1));
seq__20830_21815 = G__21820;
chunk__20831_21816 = G__21821;
count__20832_21817 = G__21822;
i__20833_21818 = G__21823;
continue;
} else {
var temp__4425__auto___21824 = cljs.core.seq.call(null,seq__20830_21815);
if(temp__4425__auto___21824){
var seq__20830_21825__$1 = temp__4425__auto___21824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20830_21825__$1)){
var c__16879__auto___21826 = cljs.core.chunk_first.call(null,seq__20830_21825__$1);
var G__21827 = cljs.core.chunk_rest.call(null,seq__20830_21825__$1);
var G__21828 = c__16879__auto___21826;
var G__21829 = cljs.core.count.call(null,c__16879__auto___21826);
var G__21830 = (0);
seq__20830_21815 = G__21827;
chunk__20831_21816 = G__21828;
count__20832_21817 = G__21829;
i__20833_21818 = G__21830;
continue;
} else {
var child__18178__auto___21831 = cljs.core.first.call(null,seq__20830_21825__$1);
args__18177__auto__.push(child__18178__auto___21831);

var G__21832 = cljs.core.next.call(null,seq__20830_21825__$1);
var G__21833 = null;
var G__21834 = (0);
var G__21835 = (0);
seq__20830_21815 = G__21832;
chunk__20831_21816 = G__21833;
count__20832_21817 = G__21834;
i__20833_21818 = G__21835;
continue;
}
} else {
}
}
break;
}

return React.DOM.colgroup.apply(null,args__18177__auto__);
});

flupot.dom.colgroup.cljs$lang$maxFixedArity = (1);

flupot.dom.colgroup.cljs$lang$applyTo = (function (seq20828){
var G__20829 = cljs.core.first.call(null,seq20828);
var seq20828__$1 = cljs.core.next.call(null,seq20828);
return flupot.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__20829,seq20828__$1);
});

flupot.dom.data = (function flupot$dom$data(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20836_21836 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20837_21837 = null;
var count__20838_21838 = (0);
var i__20839_21839 = (0);
while(true){
if((i__20839_21839 < count__20838_21838)){
var child__18178__auto___21840 = cljs.core._nth.call(null,chunk__20837_21837,i__20839_21839);
args__18177__auto__.push(child__18178__auto___21840);

var G__21841 = seq__20836_21836;
var G__21842 = chunk__20837_21837;
var G__21843 = count__20838_21838;
var G__21844 = (i__20839_21839 + (1));
seq__20836_21836 = G__21841;
chunk__20837_21837 = G__21842;
count__20838_21838 = G__21843;
i__20839_21839 = G__21844;
continue;
} else {
var temp__4425__auto___21845 = cljs.core.seq.call(null,seq__20836_21836);
if(temp__4425__auto___21845){
var seq__20836_21846__$1 = temp__4425__auto___21845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20836_21846__$1)){
var c__16879__auto___21847 = cljs.core.chunk_first.call(null,seq__20836_21846__$1);
var G__21848 = cljs.core.chunk_rest.call(null,seq__20836_21846__$1);
var G__21849 = c__16879__auto___21847;
var G__21850 = cljs.core.count.call(null,c__16879__auto___21847);
var G__21851 = (0);
seq__20836_21836 = G__21848;
chunk__20837_21837 = G__21849;
count__20838_21838 = G__21850;
i__20839_21839 = G__21851;
continue;
} else {
var child__18178__auto___21852 = cljs.core.first.call(null,seq__20836_21846__$1);
args__18177__auto__.push(child__18178__auto___21852);

var G__21853 = cljs.core.next.call(null,seq__20836_21846__$1);
var G__21854 = null;
var G__21855 = (0);
var G__21856 = (0);
seq__20836_21836 = G__21853;
chunk__20837_21837 = G__21854;
count__20838_21838 = G__21855;
i__20839_21839 = G__21856;
continue;
}
} else {
}
}
break;
}

return React.DOM.data.apply(null,args__18177__auto__);
});

flupot.dom.data.cljs$lang$maxFixedArity = (1);

flupot.dom.data.cljs$lang$applyTo = (function (seq20834){
var G__20835 = cljs.core.first.call(null,seq20834);
var seq20834__$1 = cljs.core.next.call(null,seq20834);
return flupot.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__20835,seq20834__$1);
});

flupot.dom.datalist = (function flupot$dom$datalist(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20842_21857 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20843_21858 = null;
var count__20844_21859 = (0);
var i__20845_21860 = (0);
while(true){
if((i__20845_21860 < count__20844_21859)){
var child__18178__auto___21861 = cljs.core._nth.call(null,chunk__20843_21858,i__20845_21860);
args__18177__auto__.push(child__18178__auto___21861);

var G__21862 = seq__20842_21857;
var G__21863 = chunk__20843_21858;
var G__21864 = count__20844_21859;
var G__21865 = (i__20845_21860 + (1));
seq__20842_21857 = G__21862;
chunk__20843_21858 = G__21863;
count__20844_21859 = G__21864;
i__20845_21860 = G__21865;
continue;
} else {
var temp__4425__auto___21866 = cljs.core.seq.call(null,seq__20842_21857);
if(temp__4425__auto___21866){
var seq__20842_21867__$1 = temp__4425__auto___21866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20842_21867__$1)){
var c__16879__auto___21868 = cljs.core.chunk_first.call(null,seq__20842_21867__$1);
var G__21869 = cljs.core.chunk_rest.call(null,seq__20842_21867__$1);
var G__21870 = c__16879__auto___21868;
var G__21871 = cljs.core.count.call(null,c__16879__auto___21868);
var G__21872 = (0);
seq__20842_21857 = G__21869;
chunk__20843_21858 = G__21870;
count__20844_21859 = G__21871;
i__20845_21860 = G__21872;
continue;
} else {
var child__18178__auto___21873 = cljs.core.first.call(null,seq__20842_21867__$1);
args__18177__auto__.push(child__18178__auto___21873);

var G__21874 = cljs.core.next.call(null,seq__20842_21867__$1);
var G__21875 = null;
var G__21876 = (0);
var G__21877 = (0);
seq__20842_21857 = G__21874;
chunk__20843_21858 = G__21875;
count__20844_21859 = G__21876;
i__20845_21860 = G__21877;
continue;
}
} else {
}
}
break;
}

return React.DOM.datalist.apply(null,args__18177__auto__);
});

flupot.dom.datalist.cljs$lang$maxFixedArity = (1);

flupot.dom.datalist.cljs$lang$applyTo = (function (seq20840){
var G__20841 = cljs.core.first.call(null,seq20840);
var seq20840__$1 = cljs.core.next.call(null,seq20840);
return flupot.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__20841,seq20840__$1);
});

flupot.dom.dd = (function flupot$dom$dd(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20848_21878 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20849_21879 = null;
var count__20850_21880 = (0);
var i__20851_21881 = (0);
while(true){
if((i__20851_21881 < count__20850_21880)){
var child__18178__auto___21882 = cljs.core._nth.call(null,chunk__20849_21879,i__20851_21881);
args__18177__auto__.push(child__18178__auto___21882);

var G__21883 = seq__20848_21878;
var G__21884 = chunk__20849_21879;
var G__21885 = count__20850_21880;
var G__21886 = (i__20851_21881 + (1));
seq__20848_21878 = G__21883;
chunk__20849_21879 = G__21884;
count__20850_21880 = G__21885;
i__20851_21881 = G__21886;
continue;
} else {
var temp__4425__auto___21887 = cljs.core.seq.call(null,seq__20848_21878);
if(temp__4425__auto___21887){
var seq__20848_21888__$1 = temp__4425__auto___21887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20848_21888__$1)){
var c__16879__auto___21889 = cljs.core.chunk_first.call(null,seq__20848_21888__$1);
var G__21890 = cljs.core.chunk_rest.call(null,seq__20848_21888__$1);
var G__21891 = c__16879__auto___21889;
var G__21892 = cljs.core.count.call(null,c__16879__auto___21889);
var G__21893 = (0);
seq__20848_21878 = G__21890;
chunk__20849_21879 = G__21891;
count__20850_21880 = G__21892;
i__20851_21881 = G__21893;
continue;
} else {
var child__18178__auto___21894 = cljs.core.first.call(null,seq__20848_21888__$1);
args__18177__auto__.push(child__18178__auto___21894);

var G__21895 = cljs.core.next.call(null,seq__20848_21888__$1);
var G__21896 = null;
var G__21897 = (0);
var G__21898 = (0);
seq__20848_21878 = G__21895;
chunk__20849_21879 = G__21896;
count__20850_21880 = G__21897;
i__20851_21881 = G__21898;
continue;
}
} else {
}
}
break;
}

return React.DOM.dd.apply(null,args__18177__auto__);
});

flupot.dom.dd.cljs$lang$maxFixedArity = (1);

flupot.dom.dd.cljs$lang$applyTo = (function (seq20846){
var G__20847 = cljs.core.first.call(null,seq20846);
var seq20846__$1 = cljs.core.next.call(null,seq20846);
return flupot.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__20847,seq20846__$1);
});

flupot.dom.del = (function flupot$dom$del(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20854_21899 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20855_21900 = null;
var count__20856_21901 = (0);
var i__20857_21902 = (0);
while(true){
if((i__20857_21902 < count__20856_21901)){
var child__18178__auto___21903 = cljs.core._nth.call(null,chunk__20855_21900,i__20857_21902);
args__18177__auto__.push(child__18178__auto___21903);

var G__21904 = seq__20854_21899;
var G__21905 = chunk__20855_21900;
var G__21906 = count__20856_21901;
var G__21907 = (i__20857_21902 + (1));
seq__20854_21899 = G__21904;
chunk__20855_21900 = G__21905;
count__20856_21901 = G__21906;
i__20857_21902 = G__21907;
continue;
} else {
var temp__4425__auto___21908 = cljs.core.seq.call(null,seq__20854_21899);
if(temp__4425__auto___21908){
var seq__20854_21909__$1 = temp__4425__auto___21908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20854_21909__$1)){
var c__16879__auto___21910 = cljs.core.chunk_first.call(null,seq__20854_21909__$1);
var G__21911 = cljs.core.chunk_rest.call(null,seq__20854_21909__$1);
var G__21912 = c__16879__auto___21910;
var G__21913 = cljs.core.count.call(null,c__16879__auto___21910);
var G__21914 = (0);
seq__20854_21899 = G__21911;
chunk__20855_21900 = G__21912;
count__20856_21901 = G__21913;
i__20857_21902 = G__21914;
continue;
} else {
var child__18178__auto___21915 = cljs.core.first.call(null,seq__20854_21909__$1);
args__18177__auto__.push(child__18178__auto___21915);

var G__21916 = cljs.core.next.call(null,seq__20854_21909__$1);
var G__21917 = null;
var G__21918 = (0);
var G__21919 = (0);
seq__20854_21899 = G__21916;
chunk__20855_21900 = G__21917;
count__20856_21901 = G__21918;
i__20857_21902 = G__21919;
continue;
}
} else {
}
}
break;
}

return React.DOM.del.apply(null,args__18177__auto__);
});

flupot.dom.del.cljs$lang$maxFixedArity = (1);

flupot.dom.del.cljs$lang$applyTo = (function (seq20852){
var G__20853 = cljs.core.first.call(null,seq20852);
var seq20852__$1 = cljs.core.next.call(null,seq20852);
return flupot.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__20853,seq20852__$1);
});

flupot.dom.details = (function flupot$dom$details(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20860_21920 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20861_21921 = null;
var count__20862_21922 = (0);
var i__20863_21923 = (0);
while(true){
if((i__20863_21923 < count__20862_21922)){
var child__18178__auto___21924 = cljs.core._nth.call(null,chunk__20861_21921,i__20863_21923);
args__18177__auto__.push(child__18178__auto___21924);

var G__21925 = seq__20860_21920;
var G__21926 = chunk__20861_21921;
var G__21927 = count__20862_21922;
var G__21928 = (i__20863_21923 + (1));
seq__20860_21920 = G__21925;
chunk__20861_21921 = G__21926;
count__20862_21922 = G__21927;
i__20863_21923 = G__21928;
continue;
} else {
var temp__4425__auto___21929 = cljs.core.seq.call(null,seq__20860_21920);
if(temp__4425__auto___21929){
var seq__20860_21930__$1 = temp__4425__auto___21929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20860_21930__$1)){
var c__16879__auto___21931 = cljs.core.chunk_first.call(null,seq__20860_21930__$1);
var G__21932 = cljs.core.chunk_rest.call(null,seq__20860_21930__$1);
var G__21933 = c__16879__auto___21931;
var G__21934 = cljs.core.count.call(null,c__16879__auto___21931);
var G__21935 = (0);
seq__20860_21920 = G__21932;
chunk__20861_21921 = G__21933;
count__20862_21922 = G__21934;
i__20863_21923 = G__21935;
continue;
} else {
var child__18178__auto___21936 = cljs.core.first.call(null,seq__20860_21930__$1);
args__18177__auto__.push(child__18178__auto___21936);

var G__21937 = cljs.core.next.call(null,seq__20860_21930__$1);
var G__21938 = null;
var G__21939 = (0);
var G__21940 = (0);
seq__20860_21920 = G__21937;
chunk__20861_21921 = G__21938;
count__20862_21922 = G__21939;
i__20863_21923 = G__21940;
continue;
}
} else {
}
}
break;
}

return React.DOM.details.apply(null,args__18177__auto__);
});

flupot.dom.details.cljs$lang$maxFixedArity = (1);

flupot.dom.details.cljs$lang$applyTo = (function (seq20858){
var G__20859 = cljs.core.first.call(null,seq20858);
var seq20858__$1 = cljs.core.next.call(null,seq20858);
return flupot.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__20859,seq20858__$1);
});

flupot.dom.dfn = (function flupot$dom$dfn(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20866_21941 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20867_21942 = null;
var count__20868_21943 = (0);
var i__20869_21944 = (0);
while(true){
if((i__20869_21944 < count__20868_21943)){
var child__18178__auto___21945 = cljs.core._nth.call(null,chunk__20867_21942,i__20869_21944);
args__18177__auto__.push(child__18178__auto___21945);

var G__21946 = seq__20866_21941;
var G__21947 = chunk__20867_21942;
var G__21948 = count__20868_21943;
var G__21949 = (i__20869_21944 + (1));
seq__20866_21941 = G__21946;
chunk__20867_21942 = G__21947;
count__20868_21943 = G__21948;
i__20869_21944 = G__21949;
continue;
} else {
var temp__4425__auto___21950 = cljs.core.seq.call(null,seq__20866_21941);
if(temp__4425__auto___21950){
var seq__20866_21951__$1 = temp__4425__auto___21950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20866_21951__$1)){
var c__16879__auto___21952 = cljs.core.chunk_first.call(null,seq__20866_21951__$1);
var G__21953 = cljs.core.chunk_rest.call(null,seq__20866_21951__$1);
var G__21954 = c__16879__auto___21952;
var G__21955 = cljs.core.count.call(null,c__16879__auto___21952);
var G__21956 = (0);
seq__20866_21941 = G__21953;
chunk__20867_21942 = G__21954;
count__20868_21943 = G__21955;
i__20869_21944 = G__21956;
continue;
} else {
var child__18178__auto___21957 = cljs.core.first.call(null,seq__20866_21951__$1);
args__18177__auto__.push(child__18178__auto___21957);

var G__21958 = cljs.core.next.call(null,seq__20866_21951__$1);
var G__21959 = null;
var G__21960 = (0);
var G__21961 = (0);
seq__20866_21941 = G__21958;
chunk__20867_21942 = G__21959;
count__20868_21943 = G__21960;
i__20869_21944 = G__21961;
continue;
}
} else {
}
}
break;
}

return React.DOM.dfn.apply(null,args__18177__auto__);
});

flupot.dom.dfn.cljs$lang$maxFixedArity = (1);

flupot.dom.dfn.cljs$lang$applyTo = (function (seq20864){
var G__20865 = cljs.core.first.call(null,seq20864);
var seq20864__$1 = cljs.core.next.call(null,seq20864);
return flupot.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__20865,seq20864__$1);
});

flupot.dom.dialog = (function flupot$dom$dialog(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20872_21962 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20873_21963 = null;
var count__20874_21964 = (0);
var i__20875_21965 = (0);
while(true){
if((i__20875_21965 < count__20874_21964)){
var child__18178__auto___21966 = cljs.core._nth.call(null,chunk__20873_21963,i__20875_21965);
args__18177__auto__.push(child__18178__auto___21966);

var G__21967 = seq__20872_21962;
var G__21968 = chunk__20873_21963;
var G__21969 = count__20874_21964;
var G__21970 = (i__20875_21965 + (1));
seq__20872_21962 = G__21967;
chunk__20873_21963 = G__21968;
count__20874_21964 = G__21969;
i__20875_21965 = G__21970;
continue;
} else {
var temp__4425__auto___21971 = cljs.core.seq.call(null,seq__20872_21962);
if(temp__4425__auto___21971){
var seq__20872_21972__$1 = temp__4425__auto___21971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20872_21972__$1)){
var c__16879__auto___21973 = cljs.core.chunk_first.call(null,seq__20872_21972__$1);
var G__21974 = cljs.core.chunk_rest.call(null,seq__20872_21972__$1);
var G__21975 = c__16879__auto___21973;
var G__21976 = cljs.core.count.call(null,c__16879__auto___21973);
var G__21977 = (0);
seq__20872_21962 = G__21974;
chunk__20873_21963 = G__21975;
count__20874_21964 = G__21976;
i__20875_21965 = G__21977;
continue;
} else {
var child__18178__auto___21978 = cljs.core.first.call(null,seq__20872_21972__$1);
args__18177__auto__.push(child__18178__auto___21978);

var G__21979 = cljs.core.next.call(null,seq__20872_21972__$1);
var G__21980 = null;
var G__21981 = (0);
var G__21982 = (0);
seq__20872_21962 = G__21979;
chunk__20873_21963 = G__21980;
count__20874_21964 = G__21981;
i__20875_21965 = G__21982;
continue;
}
} else {
}
}
break;
}

return React.DOM.dialog.apply(null,args__18177__auto__);
});

flupot.dom.dialog.cljs$lang$maxFixedArity = (1);

flupot.dom.dialog.cljs$lang$applyTo = (function (seq20870){
var G__20871 = cljs.core.first.call(null,seq20870);
var seq20870__$1 = cljs.core.next.call(null,seq20870);
return flupot.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__20871,seq20870__$1);
});

flupot.dom.div = (function flupot$dom$div(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20878_21983 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20879_21984 = null;
var count__20880_21985 = (0);
var i__20881_21986 = (0);
while(true){
if((i__20881_21986 < count__20880_21985)){
var child__18178__auto___21987 = cljs.core._nth.call(null,chunk__20879_21984,i__20881_21986);
args__18177__auto__.push(child__18178__auto___21987);

var G__21988 = seq__20878_21983;
var G__21989 = chunk__20879_21984;
var G__21990 = count__20880_21985;
var G__21991 = (i__20881_21986 + (1));
seq__20878_21983 = G__21988;
chunk__20879_21984 = G__21989;
count__20880_21985 = G__21990;
i__20881_21986 = G__21991;
continue;
} else {
var temp__4425__auto___21992 = cljs.core.seq.call(null,seq__20878_21983);
if(temp__4425__auto___21992){
var seq__20878_21993__$1 = temp__4425__auto___21992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20878_21993__$1)){
var c__16879__auto___21994 = cljs.core.chunk_first.call(null,seq__20878_21993__$1);
var G__21995 = cljs.core.chunk_rest.call(null,seq__20878_21993__$1);
var G__21996 = c__16879__auto___21994;
var G__21997 = cljs.core.count.call(null,c__16879__auto___21994);
var G__21998 = (0);
seq__20878_21983 = G__21995;
chunk__20879_21984 = G__21996;
count__20880_21985 = G__21997;
i__20881_21986 = G__21998;
continue;
} else {
var child__18178__auto___21999 = cljs.core.first.call(null,seq__20878_21993__$1);
args__18177__auto__.push(child__18178__auto___21999);

var G__22000 = cljs.core.next.call(null,seq__20878_21993__$1);
var G__22001 = null;
var G__22002 = (0);
var G__22003 = (0);
seq__20878_21983 = G__22000;
chunk__20879_21984 = G__22001;
count__20880_21985 = G__22002;
i__20881_21986 = G__22003;
continue;
}
} else {
}
}
break;
}

return React.DOM.div.apply(null,args__18177__auto__);
});

flupot.dom.div.cljs$lang$maxFixedArity = (1);

flupot.dom.div.cljs$lang$applyTo = (function (seq20876){
var G__20877 = cljs.core.first.call(null,seq20876);
var seq20876__$1 = cljs.core.next.call(null,seq20876);
return flupot.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__20877,seq20876__$1);
});

flupot.dom.dl = (function flupot$dom$dl(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20884_22004 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20885_22005 = null;
var count__20886_22006 = (0);
var i__20887_22007 = (0);
while(true){
if((i__20887_22007 < count__20886_22006)){
var child__18178__auto___22008 = cljs.core._nth.call(null,chunk__20885_22005,i__20887_22007);
args__18177__auto__.push(child__18178__auto___22008);

var G__22009 = seq__20884_22004;
var G__22010 = chunk__20885_22005;
var G__22011 = count__20886_22006;
var G__22012 = (i__20887_22007 + (1));
seq__20884_22004 = G__22009;
chunk__20885_22005 = G__22010;
count__20886_22006 = G__22011;
i__20887_22007 = G__22012;
continue;
} else {
var temp__4425__auto___22013 = cljs.core.seq.call(null,seq__20884_22004);
if(temp__4425__auto___22013){
var seq__20884_22014__$1 = temp__4425__auto___22013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20884_22014__$1)){
var c__16879__auto___22015 = cljs.core.chunk_first.call(null,seq__20884_22014__$1);
var G__22016 = cljs.core.chunk_rest.call(null,seq__20884_22014__$1);
var G__22017 = c__16879__auto___22015;
var G__22018 = cljs.core.count.call(null,c__16879__auto___22015);
var G__22019 = (0);
seq__20884_22004 = G__22016;
chunk__20885_22005 = G__22017;
count__20886_22006 = G__22018;
i__20887_22007 = G__22019;
continue;
} else {
var child__18178__auto___22020 = cljs.core.first.call(null,seq__20884_22014__$1);
args__18177__auto__.push(child__18178__auto___22020);

var G__22021 = cljs.core.next.call(null,seq__20884_22014__$1);
var G__22022 = null;
var G__22023 = (0);
var G__22024 = (0);
seq__20884_22004 = G__22021;
chunk__20885_22005 = G__22022;
count__20886_22006 = G__22023;
i__20887_22007 = G__22024;
continue;
}
} else {
}
}
break;
}

return React.DOM.dl.apply(null,args__18177__auto__);
});

flupot.dom.dl.cljs$lang$maxFixedArity = (1);

flupot.dom.dl.cljs$lang$applyTo = (function (seq20882){
var G__20883 = cljs.core.first.call(null,seq20882);
var seq20882__$1 = cljs.core.next.call(null,seq20882);
return flupot.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__20883,seq20882__$1);
});

flupot.dom.dt = (function flupot$dom$dt(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20890_22025 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20891_22026 = null;
var count__20892_22027 = (0);
var i__20893_22028 = (0);
while(true){
if((i__20893_22028 < count__20892_22027)){
var child__18178__auto___22029 = cljs.core._nth.call(null,chunk__20891_22026,i__20893_22028);
args__18177__auto__.push(child__18178__auto___22029);

var G__22030 = seq__20890_22025;
var G__22031 = chunk__20891_22026;
var G__22032 = count__20892_22027;
var G__22033 = (i__20893_22028 + (1));
seq__20890_22025 = G__22030;
chunk__20891_22026 = G__22031;
count__20892_22027 = G__22032;
i__20893_22028 = G__22033;
continue;
} else {
var temp__4425__auto___22034 = cljs.core.seq.call(null,seq__20890_22025);
if(temp__4425__auto___22034){
var seq__20890_22035__$1 = temp__4425__auto___22034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20890_22035__$1)){
var c__16879__auto___22036 = cljs.core.chunk_first.call(null,seq__20890_22035__$1);
var G__22037 = cljs.core.chunk_rest.call(null,seq__20890_22035__$1);
var G__22038 = c__16879__auto___22036;
var G__22039 = cljs.core.count.call(null,c__16879__auto___22036);
var G__22040 = (0);
seq__20890_22025 = G__22037;
chunk__20891_22026 = G__22038;
count__20892_22027 = G__22039;
i__20893_22028 = G__22040;
continue;
} else {
var child__18178__auto___22041 = cljs.core.first.call(null,seq__20890_22035__$1);
args__18177__auto__.push(child__18178__auto___22041);

var G__22042 = cljs.core.next.call(null,seq__20890_22035__$1);
var G__22043 = null;
var G__22044 = (0);
var G__22045 = (0);
seq__20890_22025 = G__22042;
chunk__20891_22026 = G__22043;
count__20892_22027 = G__22044;
i__20893_22028 = G__22045;
continue;
}
} else {
}
}
break;
}

return React.DOM.dt.apply(null,args__18177__auto__);
});

flupot.dom.dt.cljs$lang$maxFixedArity = (1);

flupot.dom.dt.cljs$lang$applyTo = (function (seq20888){
var G__20889 = cljs.core.first.call(null,seq20888);
var seq20888__$1 = cljs.core.next.call(null,seq20888);
return flupot.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__20889,seq20888__$1);
});

flupot.dom.em = (function flupot$dom$em(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20902_22046 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20903_22047 = null;
var count__20904_22048 = (0);
var i__20905_22049 = (0);
while(true){
if((i__20905_22049 < count__20904_22048)){
var child__18178__auto___22050 = cljs.core._nth.call(null,chunk__20903_22047,i__20905_22049);
args__18177__auto__.push(child__18178__auto___22050);

var G__22051 = seq__20902_22046;
var G__22052 = chunk__20903_22047;
var G__22053 = count__20904_22048;
var G__22054 = (i__20905_22049 + (1));
seq__20902_22046 = G__22051;
chunk__20903_22047 = G__22052;
count__20904_22048 = G__22053;
i__20905_22049 = G__22054;
continue;
} else {
var temp__4425__auto___22055 = cljs.core.seq.call(null,seq__20902_22046);
if(temp__4425__auto___22055){
var seq__20902_22056__$1 = temp__4425__auto___22055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20902_22056__$1)){
var c__16879__auto___22057 = cljs.core.chunk_first.call(null,seq__20902_22056__$1);
var G__22058 = cljs.core.chunk_rest.call(null,seq__20902_22056__$1);
var G__22059 = c__16879__auto___22057;
var G__22060 = cljs.core.count.call(null,c__16879__auto___22057);
var G__22061 = (0);
seq__20902_22046 = G__22058;
chunk__20903_22047 = G__22059;
count__20904_22048 = G__22060;
i__20905_22049 = G__22061;
continue;
} else {
var child__18178__auto___22062 = cljs.core.first.call(null,seq__20902_22056__$1);
args__18177__auto__.push(child__18178__auto___22062);

var G__22063 = cljs.core.next.call(null,seq__20902_22056__$1);
var G__22064 = null;
var G__22065 = (0);
var G__22066 = (0);
seq__20902_22046 = G__22063;
chunk__20903_22047 = G__22064;
count__20904_22048 = G__22065;
i__20905_22049 = G__22066;
continue;
}
} else {
}
}
break;
}

return React.DOM.em.apply(null,args__18177__auto__);
});

flupot.dom.em.cljs$lang$maxFixedArity = (1);

flupot.dom.em.cljs$lang$applyTo = (function (seq20900){
var G__20901 = cljs.core.first.call(null,seq20900);
var seq20900__$1 = cljs.core.next.call(null,seq20900);
return flupot.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__20901,seq20900__$1);
});

flupot.dom.embed = (function flupot$dom$embed(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20908_22067 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20909_22068 = null;
var count__20910_22069 = (0);
var i__20911_22070 = (0);
while(true){
if((i__20911_22070 < count__20910_22069)){
var child__18178__auto___22071 = cljs.core._nth.call(null,chunk__20909_22068,i__20911_22070);
args__18177__auto__.push(child__18178__auto___22071);

var G__22072 = seq__20908_22067;
var G__22073 = chunk__20909_22068;
var G__22074 = count__20910_22069;
var G__22075 = (i__20911_22070 + (1));
seq__20908_22067 = G__22072;
chunk__20909_22068 = G__22073;
count__20910_22069 = G__22074;
i__20911_22070 = G__22075;
continue;
} else {
var temp__4425__auto___22076 = cljs.core.seq.call(null,seq__20908_22067);
if(temp__4425__auto___22076){
var seq__20908_22077__$1 = temp__4425__auto___22076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20908_22077__$1)){
var c__16879__auto___22078 = cljs.core.chunk_first.call(null,seq__20908_22077__$1);
var G__22079 = cljs.core.chunk_rest.call(null,seq__20908_22077__$1);
var G__22080 = c__16879__auto___22078;
var G__22081 = cljs.core.count.call(null,c__16879__auto___22078);
var G__22082 = (0);
seq__20908_22067 = G__22079;
chunk__20909_22068 = G__22080;
count__20910_22069 = G__22081;
i__20911_22070 = G__22082;
continue;
} else {
var child__18178__auto___22083 = cljs.core.first.call(null,seq__20908_22077__$1);
args__18177__auto__.push(child__18178__auto___22083);

var G__22084 = cljs.core.next.call(null,seq__20908_22077__$1);
var G__22085 = null;
var G__22086 = (0);
var G__22087 = (0);
seq__20908_22067 = G__22084;
chunk__20909_22068 = G__22085;
count__20910_22069 = G__22086;
i__20911_22070 = G__22087;
continue;
}
} else {
}
}
break;
}

return React.DOM.embed.apply(null,args__18177__auto__);
});

flupot.dom.embed.cljs$lang$maxFixedArity = (1);

flupot.dom.embed.cljs$lang$applyTo = (function (seq20906){
var G__20907 = cljs.core.first.call(null,seq20906);
var seq20906__$1 = cljs.core.next.call(null,seq20906);
return flupot.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__20907,seq20906__$1);
});

flupot.dom.fieldset = (function flupot$dom$fieldset(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20914_22088 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20915_22089 = null;
var count__20916_22090 = (0);
var i__20917_22091 = (0);
while(true){
if((i__20917_22091 < count__20916_22090)){
var child__18178__auto___22092 = cljs.core._nth.call(null,chunk__20915_22089,i__20917_22091);
args__18177__auto__.push(child__18178__auto___22092);

var G__22093 = seq__20914_22088;
var G__22094 = chunk__20915_22089;
var G__22095 = count__20916_22090;
var G__22096 = (i__20917_22091 + (1));
seq__20914_22088 = G__22093;
chunk__20915_22089 = G__22094;
count__20916_22090 = G__22095;
i__20917_22091 = G__22096;
continue;
} else {
var temp__4425__auto___22097 = cljs.core.seq.call(null,seq__20914_22088);
if(temp__4425__auto___22097){
var seq__20914_22098__$1 = temp__4425__auto___22097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20914_22098__$1)){
var c__16879__auto___22099 = cljs.core.chunk_first.call(null,seq__20914_22098__$1);
var G__22100 = cljs.core.chunk_rest.call(null,seq__20914_22098__$1);
var G__22101 = c__16879__auto___22099;
var G__22102 = cljs.core.count.call(null,c__16879__auto___22099);
var G__22103 = (0);
seq__20914_22088 = G__22100;
chunk__20915_22089 = G__22101;
count__20916_22090 = G__22102;
i__20917_22091 = G__22103;
continue;
} else {
var child__18178__auto___22104 = cljs.core.first.call(null,seq__20914_22098__$1);
args__18177__auto__.push(child__18178__auto___22104);

var G__22105 = cljs.core.next.call(null,seq__20914_22098__$1);
var G__22106 = null;
var G__22107 = (0);
var G__22108 = (0);
seq__20914_22088 = G__22105;
chunk__20915_22089 = G__22106;
count__20916_22090 = G__22107;
i__20917_22091 = G__22108;
continue;
}
} else {
}
}
break;
}

return React.DOM.fieldset.apply(null,args__18177__auto__);
});

flupot.dom.fieldset.cljs$lang$maxFixedArity = (1);

flupot.dom.fieldset.cljs$lang$applyTo = (function (seq20912){
var G__20913 = cljs.core.first.call(null,seq20912);
var seq20912__$1 = cljs.core.next.call(null,seq20912);
return flupot.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__20913,seq20912__$1);
});

flupot.dom.figcaption = (function flupot$dom$figcaption(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20920_22109 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20921_22110 = null;
var count__20922_22111 = (0);
var i__20923_22112 = (0);
while(true){
if((i__20923_22112 < count__20922_22111)){
var child__18178__auto___22113 = cljs.core._nth.call(null,chunk__20921_22110,i__20923_22112);
args__18177__auto__.push(child__18178__auto___22113);

var G__22114 = seq__20920_22109;
var G__22115 = chunk__20921_22110;
var G__22116 = count__20922_22111;
var G__22117 = (i__20923_22112 + (1));
seq__20920_22109 = G__22114;
chunk__20921_22110 = G__22115;
count__20922_22111 = G__22116;
i__20923_22112 = G__22117;
continue;
} else {
var temp__4425__auto___22118 = cljs.core.seq.call(null,seq__20920_22109);
if(temp__4425__auto___22118){
var seq__20920_22119__$1 = temp__4425__auto___22118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20920_22119__$1)){
var c__16879__auto___22120 = cljs.core.chunk_first.call(null,seq__20920_22119__$1);
var G__22121 = cljs.core.chunk_rest.call(null,seq__20920_22119__$1);
var G__22122 = c__16879__auto___22120;
var G__22123 = cljs.core.count.call(null,c__16879__auto___22120);
var G__22124 = (0);
seq__20920_22109 = G__22121;
chunk__20921_22110 = G__22122;
count__20922_22111 = G__22123;
i__20923_22112 = G__22124;
continue;
} else {
var child__18178__auto___22125 = cljs.core.first.call(null,seq__20920_22119__$1);
args__18177__auto__.push(child__18178__auto___22125);

var G__22126 = cljs.core.next.call(null,seq__20920_22119__$1);
var G__22127 = null;
var G__22128 = (0);
var G__22129 = (0);
seq__20920_22109 = G__22126;
chunk__20921_22110 = G__22127;
count__20922_22111 = G__22128;
i__20923_22112 = G__22129;
continue;
}
} else {
}
}
break;
}

return React.DOM.figcaption.apply(null,args__18177__auto__);
});

flupot.dom.figcaption.cljs$lang$maxFixedArity = (1);

flupot.dom.figcaption.cljs$lang$applyTo = (function (seq20918){
var G__20919 = cljs.core.first.call(null,seq20918);
var seq20918__$1 = cljs.core.next.call(null,seq20918);
return flupot.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__20919,seq20918__$1);
});

flupot.dom.figure = (function flupot$dom$figure(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20926_22130 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20927_22131 = null;
var count__20928_22132 = (0);
var i__20929_22133 = (0);
while(true){
if((i__20929_22133 < count__20928_22132)){
var child__18178__auto___22134 = cljs.core._nth.call(null,chunk__20927_22131,i__20929_22133);
args__18177__auto__.push(child__18178__auto___22134);

var G__22135 = seq__20926_22130;
var G__22136 = chunk__20927_22131;
var G__22137 = count__20928_22132;
var G__22138 = (i__20929_22133 + (1));
seq__20926_22130 = G__22135;
chunk__20927_22131 = G__22136;
count__20928_22132 = G__22137;
i__20929_22133 = G__22138;
continue;
} else {
var temp__4425__auto___22139 = cljs.core.seq.call(null,seq__20926_22130);
if(temp__4425__auto___22139){
var seq__20926_22140__$1 = temp__4425__auto___22139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20926_22140__$1)){
var c__16879__auto___22141 = cljs.core.chunk_first.call(null,seq__20926_22140__$1);
var G__22142 = cljs.core.chunk_rest.call(null,seq__20926_22140__$1);
var G__22143 = c__16879__auto___22141;
var G__22144 = cljs.core.count.call(null,c__16879__auto___22141);
var G__22145 = (0);
seq__20926_22130 = G__22142;
chunk__20927_22131 = G__22143;
count__20928_22132 = G__22144;
i__20929_22133 = G__22145;
continue;
} else {
var child__18178__auto___22146 = cljs.core.first.call(null,seq__20926_22140__$1);
args__18177__auto__.push(child__18178__auto___22146);

var G__22147 = cljs.core.next.call(null,seq__20926_22140__$1);
var G__22148 = null;
var G__22149 = (0);
var G__22150 = (0);
seq__20926_22130 = G__22147;
chunk__20927_22131 = G__22148;
count__20928_22132 = G__22149;
i__20929_22133 = G__22150;
continue;
}
} else {
}
}
break;
}

return React.DOM.figure.apply(null,args__18177__auto__);
});

flupot.dom.figure.cljs$lang$maxFixedArity = (1);

flupot.dom.figure.cljs$lang$applyTo = (function (seq20924){
var G__20925 = cljs.core.first.call(null,seq20924);
var seq20924__$1 = cljs.core.next.call(null,seq20924);
return flupot.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__20925,seq20924__$1);
});

flupot.dom.footer = (function flupot$dom$footer(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20932_22151 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20933_22152 = null;
var count__20934_22153 = (0);
var i__20935_22154 = (0);
while(true){
if((i__20935_22154 < count__20934_22153)){
var child__18178__auto___22155 = cljs.core._nth.call(null,chunk__20933_22152,i__20935_22154);
args__18177__auto__.push(child__18178__auto___22155);

var G__22156 = seq__20932_22151;
var G__22157 = chunk__20933_22152;
var G__22158 = count__20934_22153;
var G__22159 = (i__20935_22154 + (1));
seq__20932_22151 = G__22156;
chunk__20933_22152 = G__22157;
count__20934_22153 = G__22158;
i__20935_22154 = G__22159;
continue;
} else {
var temp__4425__auto___22160 = cljs.core.seq.call(null,seq__20932_22151);
if(temp__4425__auto___22160){
var seq__20932_22161__$1 = temp__4425__auto___22160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20932_22161__$1)){
var c__16879__auto___22162 = cljs.core.chunk_first.call(null,seq__20932_22161__$1);
var G__22163 = cljs.core.chunk_rest.call(null,seq__20932_22161__$1);
var G__22164 = c__16879__auto___22162;
var G__22165 = cljs.core.count.call(null,c__16879__auto___22162);
var G__22166 = (0);
seq__20932_22151 = G__22163;
chunk__20933_22152 = G__22164;
count__20934_22153 = G__22165;
i__20935_22154 = G__22166;
continue;
} else {
var child__18178__auto___22167 = cljs.core.first.call(null,seq__20932_22161__$1);
args__18177__auto__.push(child__18178__auto___22167);

var G__22168 = cljs.core.next.call(null,seq__20932_22161__$1);
var G__22169 = null;
var G__22170 = (0);
var G__22171 = (0);
seq__20932_22151 = G__22168;
chunk__20933_22152 = G__22169;
count__20934_22153 = G__22170;
i__20935_22154 = G__22171;
continue;
}
} else {
}
}
break;
}

return React.DOM.footer.apply(null,args__18177__auto__);
});

flupot.dom.footer.cljs$lang$maxFixedArity = (1);

flupot.dom.footer.cljs$lang$applyTo = (function (seq20930){
var G__20931 = cljs.core.first.call(null,seq20930);
var seq20930__$1 = cljs.core.next.call(null,seq20930);
return flupot.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__20931,seq20930__$1);
});

flupot.dom.form = (function flupot$dom$form(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20938_22172 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20939_22173 = null;
var count__20940_22174 = (0);
var i__20941_22175 = (0);
while(true){
if((i__20941_22175 < count__20940_22174)){
var child__18178__auto___22176 = cljs.core._nth.call(null,chunk__20939_22173,i__20941_22175);
args__18177__auto__.push(child__18178__auto___22176);

var G__22177 = seq__20938_22172;
var G__22178 = chunk__20939_22173;
var G__22179 = count__20940_22174;
var G__22180 = (i__20941_22175 + (1));
seq__20938_22172 = G__22177;
chunk__20939_22173 = G__22178;
count__20940_22174 = G__22179;
i__20941_22175 = G__22180;
continue;
} else {
var temp__4425__auto___22181 = cljs.core.seq.call(null,seq__20938_22172);
if(temp__4425__auto___22181){
var seq__20938_22182__$1 = temp__4425__auto___22181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20938_22182__$1)){
var c__16879__auto___22183 = cljs.core.chunk_first.call(null,seq__20938_22182__$1);
var G__22184 = cljs.core.chunk_rest.call(null,seq__20938_22182__$1);
var G__22185 = c__16879__auto___22183;
var G__22186 = cljs.core.count.call(null,c__16879__auto___22183);
var G__22187 = (0);
seq__20938_22172 = G__22184;
chunk__20939_22173 = G__22185;
count__20940_22174 = G__22186;
i__20941_22175 = G__22187;
continue;
} else {
var child__18178__auto___22188 = cljs.core.first.call(null,seq__20938_22182__$1);
args__18177__auto__.push(child__18178__auto___22188);

var G__22189 = cljs.core.next.call(null,seq__20938_22182__$1);
var G__22190 = null;
var G__22191 = (0);
var G__22192 = (0);
seq__20938_22172 = G__22189;
chunk__20939_22173 = G__22190;
count__20940_22174 = G__22191;
i__20941_22175 = G__22192;
continue;
}
} else {
}
}
break;
}

return React.DOM.form.apply(null,args__18177__auto__);
});

flupot.dom.form.cljs$lang$maxFixedArity = (1);

flupot.dom.form.cljs$lang$applyTo = (function (seq20936){
var G__20937 = cljs.core.first.call(null,seq20936);
var seq20936__$1 = cljs.core.next.call(null,seq20936);
return flupot.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__20937,seq20936__$1);
});

flupot.dom.h1 = (function flupot$dom$h1(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20944_22193 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20945_22194 = null;
var count__20946_22195 = (0);
var i__20947_22196 = (0);
while(true){
if((i__20947_22196 < count__20946_22195)){
var child__18178__auto___22197 = cljs.core._nth.call(null,chunk__20945_22194,i__20947_22196);
args__18177__auto__.push(child__18178__auto___22197);

var G__22198 = seq__20944_22193;
var G__22199 = chunk__20945_22194;
var G__22200 = count__20946_22195;
var G__22201 = (i__20947_22196 + (1));
seq__20944_22193 = G__22198;
chunk__20945_22194 = G__22199;
count__20946_22195 = G__22200;
i__20947_22196 = G__22201;
continue;
} else {
var temp__4425__auto___22202 = cljs.core.seq.call(null,seq__20944_22193);
if(temp__4425__auto___22202){
var seq__20944_22203__$1 = temp__4425__auto___22202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20944_22203__$1)){
var c__16879__auto___22204 = cljs.core.chunk_first.call(null,seq__20944_22203__$1);
var G__22205 = cljs.core.chunk_rest.call(null,seq__20944_22203__$1);
var G__22206 = c__16879__auto___22204;
var G__22207 = cljs.core.count.call(null,c__16879__auto___22204);
var G__22208 = (0);
seq__20944_22193 = G__22205;
chunk__20945_22194 = G__22206;
count__20946_22195 = G__22207;
i__20947_22196 = G__22208;
continue;
} else {
var child__18178__auto___22209 = cljs.core.first.call(null,seq__20944_22203__$1);
args__18177__auto__.push(child__18178__auto___22209);

var G__22210 = cljs.core.next.call(null,seq__20944_22203__$1);
var G__22211 = null;
var G__22212 = (0);
var G__22213 = (0);
seq__20944_22193 = G__22210;
chunk__20945_22194 = G__22211;
count__20946_22195 = G__22212;
i__20947_22196 = G__22213;
continue;
}
} else {
}
}
break;
}

return React.DOM.h1.apply(null,args__18177__auto__);
});

flupot.dom.h1.cljs$lang$maxFixedArity = (1);

flupot.dom.h1.cljs$lang$applyTo = (function (seq20942){
var G__20943 = cljs.core.first.call(null,seq20942);
var seq20942__$1 = cljs.core.next.call(null,seq20942);
return flupot.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__20943,seq20942__$1);
});

flupot.dom.h2 = (function flupot$dom$h2(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20950_22214 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20951_22215 = null;
var count__20952_22216 = (0);
var i__20953_22217 = (0);
while(true){
if((i__20953_22217 < count__20952_22216)){
var child__18178__auto___22218 = cljs.core._nth.call(null,chunk__20951_22215,i__20953_22217);
args__18177__auto__.push(child__18178__auto___22218);

var G__22219 = seq__20950_22214;
var G__22220 = chunk__20951_22215;
var G__22221 = count__20952_22216;
var G__22222 = (i__20953_22217 + (1));
seq__20950_22214 = G__22219;
chunk__20951_22215 = G__22220;
count__20952_22216 = G__22221;
i__20953_22217 = G__22222;
continue;
} else {
var temp__4425__auto___22223 = cljs.core.seq.call(null,seq__20950_22214);
if(temp__4425__auto___22223){
var seq__20950_22224__$1 = temp__4425__auto___22223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20950_22224__$1)){
var c__16879__auto___22225 = cljs.core.chunk_first.call(null,seq__20950_22224__$1);
var G__22226 = cljs.core.chunk_rest.call(null,seq__20950_22224__$1);
var G__22227 = c__16879__auto___22225;
var G__22228 = cljs.core.count.call(null,c__16879__auto___22225);
var G__22229 = (0);
seq__20950_22214 = G__22226;
chunk__20951_22215 = G__22227;
count__20952_22216 = G__22228;
i__20953_22217 = G__22229;
continue;
} else {
var child__18178__auto___22230 = cljs.core.first.call(null,seq__20950_22224__$1);
args__18177__auto__.push(child__18178__auto___22230);

var G__22231 = cljs.core.next.call(null,seq__20950_22224__$1);
var G__22232 = null;
var G__22233 = (0);
var G__22234 = (0);
seq__20950_22214 = G__22231;
chunk__20951_22215 = G__22232;
count__20952_22216 = G__22233;
i__20953_22217 = G__22234;
continue;
}
} else {
}
}
break;
}

return React.DOM.h2.apply(null,args__18177__auto__);
});

flupot.dom.h2.cljs$lang$maxFixedArity = (1);

flupot.dom.h2.cljs$lang$applyTo = (function (seq20948){
var G__20949 = cljs.core.first.call(null,seq20948);
var seq20948__$1 = cljs.core.next.call(null,seq20948);
return flupot.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__20949,seq20948__$1);
});

flupot.dom.h3 = (function flupot$dom$h3(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20956_22235 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20957_22236 = null;
var count__20958_22237 = (0);
var i__20959_22238 = (0);
while(true){
if((i__20959_22238 < count__20958_22237)){
var child__18178__auto___22239 = cljs.core._nth.call(null,chunk__20957_22236,i__20959_22238);
args__18177__auto__.push(child__18178__auto___22239);

var G__22240 = seq__20956_22235;
var G__22241 = chunk__20957_22236;
var G__22242 = count__20958_22237;
var G__22243 = (i__20959_22238 + (1));
seq__20956_22235 = G__22240;
chunk__20957_22236 = G__22241;
count__20958_22237 = G__22242;
i__20959_22238 = G__22243;
continue;
} else {
var temp__4425__auto___22244 = cljs.core.seq.call(null,seq__20956_22235);
if(temp__4425__auto___22244){
var seq__20956_22245__$1 = temp__4425__auto___22244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20956_22245__$1)){
var c__16879__auto___22246 = cljs.core.chunk_first.call(null,seq__20956_22245__$1);
var G__22247 = cljs.core.chunk_rest.call(null,seq__20956_22245__$1);
var G__22248 = c__16879__auto___22246;
var G__22249 = cljs.core.count.call(null,c__16879__auto___22246);
var G__22250 = (0);
seq__20956_22235 = G__22247;
chunk__20957_22236 = G__22248;
count__20958_22237 = G__22249;
i__20959_22238 = G__22250;
continue;
} else {
var child__18178__auto___22251 = cljs.core.first.call(null,seq__20956_22245__$1);
args__18177__auto__.push(child__18178__auto___22251);

var G__22252 = cljs.core.next.call(null,seq__20956_22245__$1);
var G__22253 = null;
var G__22254 = (0);
var G__22255 = (0);
seq__20956_22235 = G__22252;
chunk__20957_22236 = G__22253;
count__20958_22237 = G__22254;
i__20959_22238 = G__22255;
continue;
}
} else {
}
}
break;
}

return React.DOM.h3.apply(null,args__18177__auto__);
});

flupot.dom.h3.cljs$lang$maxFixedArity = (1);

flupot.dom.h3.cljs$lang$applyTo = (function (seq20954){
var G__20955 = cljs.core.first.call(null,seq20954);
var seq20954__$1 = cljs.core.next.call(null,seq20954);
return flupot.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__20955,seq20954__$1);
});

flupot.dom.h4 = (function flupot$dom$h4(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20962_22256 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20963_22257 = null;
var count__20964_22258 = (0);
var i__20965_22259 = (0);
while(true){
if((i__20965_22259 < count__20964_22258)){
var child__18178__auto___22260 = cljs.core._nth.call(null,chunk__20963_22257,i__20965_22259);
args__18177__auto__.push(child__18178__auto___22260);

var G__22261 = seq__20962_22256;
var G__22262 = chunk__20963_22257;
var G__22263 = count__20964_22258;
var G__22264 = (i__20965_22259 + (1));
seq__20962_22256 = G__22261;
chunk__20963_22257 = G__22262;
count__20964_22258 = G__22263;
i__20965_22259 = G__22264;
continue;
} else {
var temp__4425__auto___22265 = cljs.core.seq.call(null,seq__20962_22256);
if(temp__4425__auto___22265){
var seq__20962_22266__$1 = temp__4425__auto___22265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20962_22266__$1)){
var c__16879__auto___22267 = cljs.core.chunk_first.call(null,seq__20962_22266__$1);
var G__22268 = cljs.core.chunk_rest.call(null,seq__20962_22266__$1);
var G__22269 = c__16879__auto___22267;
var G__22270 = cljs.core.count.call(null,c__16879__auto___22267);
var G__22271 = (0);
seq__20962_22256 = G__22268;
chunk__20963_22257 = G__22269;
count__20964_22258 = G__22270;
i__20965_22259 = G__22271;
continue;
} else {
var child__18178__auto___22272 = cljs.core.first.call(null,seq__20962_22266__$1);
args__18177__auto__.push(child__18178__auto___22272);

var G__22273 = cljs.core.next.call(null,seq__20962_22266__$1);
var G__22274 = null;
var G__22275 = (0);
var G__22276 = (0);
seq__20962_22256 = G__22273;
chunk__20963_22257 = G__22274;
count__20964_22258 = G__22275;
i__20965_22259 = G__22276;
continue;
}
} else {
}
}
break;
}

return React.DOM.h4.apply(null,args__18177__auto__);
});

flupot.dom.h4.cljs$lang$maxFixedArity = (1);

flupot.dom.h4.cljs$lang$applyTo = (function (seq20960){
var G__20961 = cljs.core.first.call(null,seq20960);
var seq20960__$1 = cljs.core.next.call(null,seq20960);
return flupot.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__20961,seq20960__$1);
});

flupot.dom.h5 = (function flupot$dom$h5(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20968_22277 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20969_22278 = null;
var count__20970_22279 = (0);
var i__20971_22280 = (0);
while(true){
if((i__20971_22280 < count__20970_22279)){
var child__18178__auto___22281 = cljs.core._nth.call(null,chunk__20969_22278,i__20971_22280);
args__18177__auto__.push(child__18178__auto___22281);

var G__22282 = seq__20968_22277;
var G__22283 = chunk__20969_22278;
var G__22284 = count__20970_22279;
var G__22285 = (i__20971_22280 + (1));
seq__20968_22277 = G__22282;
chunk__20969_22278 = G__22283;
count__20970_22279 = G__22284;
i__20971_22280 = G__22285;
continue;
} else {
var temp__4425__auto___22286 = cljs.core.seq.call(null,seq__20968_22277);
if(temp__4425__auto___22286){
var seq__20968_22287__$1 = temp__4425__auto___22286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20968_22287__$1)){
var c__16879__auto___22288 = cljs.core.chunk_first.call(null,seq__20968_22287__$1);
var G__22289 = cljs.core.chunk_rest.call(null,seq__20968_22287__$1);
var G__22290 = c__16879__auto___22288;
var G__22291 = cljs.core.count.call(null,c__16879__auto___22288);
var G__22292 = (0);
seq__20968_22277 = G__22289;
chunk__20969_22278 = G__22290;
count__20970_22279 = G__22291;
i__20971_22280 = G__22292;
continue;
} else {
var child__18178__auto___22293 = cljs.core.first.call(null,seq__20968_22287__$1);
args__18177__auto__.push(child__18178__auto___22293);

var G__22294 = cljs.core.next.call(null,seq__20968_22287__$1);
var G__22295 = null;
var G__22296 = (0);
var G__22297 = (0);
seq__20968_22277 = G__22294;
chunk__20969_22278 = G__22295;
count__20970_22279 = G__22296;
i__20971_22280 = G__22297;
continue;
}
} else {
}
}
break;
}

return React.DOM.h5.apply(null,args__18177__auto__);
});

flupot.dom.h5.cljs$lang$maxFixedArity = (1);

flupot.dom.h5.cljs$lang$applyTo = (function (seq20966){
var G__20967 = cljs.core.first.call(null,seq20966);
var seq20966__$1 = cljs.core.next.call(null,seq20966);
return flupot.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__20967,seq20966__$1);
});

flupot.dom.h6 = (function flupot$dom$h6(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20974_22298 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20975_22299 = null;
var count__20976_22300 = (0);
var i__20977_22301 = (0);
while(true){
if((i__20977_22301 < count__20976_22300)){
var child__18178__auto___22302 = cljs.core._nth.call(null,chunk__20975_22299,i__20977_22301);
args__18177__auto__.push(child__18178__auto___22302);

var G__22303 = seq__20974_22298;
var G__22304 = chunk__20975_22299;
var G__22305 = count__20976_22300;
var G__22306 = (i__20977_22301 + (1));
seq__20974_22298 = G__22303;
chunk__20975_22299 = G__22304;
count__20976_22300 = G__22305;
i__20977_22301 = G__22306;
continue;
} else {
var temp__4425__auto___22307 = cljs.core.seq.call(null,seq__20974_22298);
if(temp__4425__auto___22307){
var seq__20974_22308__$1 = temp__4425__auto___22307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20974_22308__$1)){
var c__16879__auto___22309 = cljs.core.chunk_first.call(null,seq__20974_22308__$1);
var G__22310 = cljs.core.chunk_rest.call(null,seq__20974_22308__$1);
var G__22311 = c__16879__auto___22309;
var G__22312 = cljs.core.count.call(null,c__16879__auto___22309);
var G__22313 = (0);
seq__20974_22298 = G__22310;
chunk__20975_22299 = G__22311;
count__20976_22300 = G__22312;
i__20977_22301 = G__22313;
continue;
} else {
var child__18178__auto___22314 = cljs.core.first.call(null,seq__20974_22308__$1);
args__18177__auto__.push(child__18178__auto___22314);

var G__22315 = cljs.core.next.call(null,seq__20974_22308__$1);
var G__22316 = null;
var G__22317 = (0);
var G__22318 = (0);
seq__20974_22298 = G__22315;
chunk__20975_22299 = G__22316;
count__20976_22300 = G__22317;
i__20977_22301 = G__22318;
continue;
}
} else {
}
}
break;
}

return React.DOM.h6.apply(null,args__18177__auto__);
});

flupot.dom.h6.cljs$lang$maxFixedArity = (1);

flupot.dom.h6.cljs$lang$applyTo = (function (seq20972){
var G__20973 = cljs.core.first.call(null,seq20972);
var seq20972__$1 = cljs.core.next.call(null,seq20972);
return flupot.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__20973,seq20972__$1);
});

flupot.dom.head = (function flupot$dom$head(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20980_22319 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20981_22320 = null;
var count__20982_22321 = (0);
var i__20983_22322 = (0);
while(true){
if((i__20983_22322 < count__20982_22321)){
var child__18178__auto___22323 = cljs.core._nth.call(null,chunk__20981_22320,i__20983_22322);
args__18177__auto__.push(child__18178__auto___22323);

var G__22324 = seq__20980_22319;
var G__22325 = chunk__20981_22320;
var G__22326 = count__20982_22321;
var G__22327 = (i__20983_22322 + (1));
seq__20980_22319 = G__22324;
chunk__20981_22320 = G__22325;
count__20982_22321 = G__22326;
i__20983_22322 = G__22327;
continue;
} else {
var temp__4425__auto___22328 = cljs.core.seq.call(null,seq__20980_22319);
if(temp__4425__auto___22328){
var seq__20980_22329__$1 = temp__4425__auto___22328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20980_22329__$1)){
var c__16879__auto___22330 = cljs.core.chunk_first.call(null,seq__20980_22329__$1);
var G__22331 = cljs.core.chunk_rest.call(null,seq__20980_22329__$1);
var G__22332 = c__16879__auto___22330;
var G__22333 = cljs.core.count.call(null,c__16879__auto___22330);
var G__22334 = (0);
seq__20980_22319 = G__22331;
chunk__20981_22320 = G__22332;
count__20982_22321 = G__22333;
i__20983_22322 = G__22334;
continue;
} else {
var child__18178__auto___22335 = cljs.core.first.call(null,seq__20980_22329__$1);
args__18177__auto__.push(child__18178__auto___22335);

var G__22336 = cljs.core.next.call(null,seq__20980_22329__$1);
var G__22337 = null;
var G__22338 = (0);
var G__22339 = (0);
seq__20980_22319 = G__22336;
chunk__20981_22320 = G__22337;
count__20982_22321 = G__22338;
i__20983_22322 = G__22339;
continue;
}
} else {
}
}
break;
}

return React.DOM.head.apply(null,args__18177__auto__);
});

flupot.dom.head.cljs$lang$maxFixedArity = (1);

flupot.dom.head.cljs$lang$applyTo = (function (seq20978){
var G__20979 = cljs.core.first.call(null,seq20978);
var seq20978__$1 = cljs.core.next.call(null,seq20978);
return flupot.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__20979,seq20978__$1);
});

flupot.dom.header = (function flupot$dom$header(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20986_22340 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20987_22341 = null;
var count__20988_22342 = (0);
var i__20989_22343 = (0);
while(true){
if((i__20989_22343 < count__20988_22342)){
var child__18178__auto___22344 = cljs.core._nth.call(null,chunk__20987_22341,i__20989_22343);
args__18177__auto__.push(child__18178__auto___22344);

var G__22345 = seq__20986_22340;
var G__22346 = chunk__20987_22341;
var G__22347 = count__20988_22342;
var G__22348 = (i__20989_22343 + (1));
seq__20986_22340 = G__22345;
chunk__20987_22341 = G__22346;
count__20988_22342 = G__22347;
i__20989_22343 = G__22348;
continue;
} else {
var temp__4425__auto___22349 = cljs.core.seq.call(null,seq__20986_22340);
if(temp__4425__auto___22349){
var seq__20986_22350__$1 = temp__4425__auto___22349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20986_22350__$1)){
var c__16879__auto___22351 = cljs.core.chunk_first.call(null,seq__20986_22350__$1);
var G__22352 = cljs.core.chunk_rest.call(null,seq__20986_22350__$1);
var G__22353 = c__16879__auto___22351;
var G__22354 = cljs.core.count.call(null,c__16879__auto___22351);
var G__22355 = (0);
seq__20986_22340 = G__22352;
chunk__20987_22341 = G__22353;
count__20988_22342 = G__22354;
i__20989_22343 = G__22355;
continue;
} else {
var child__18178__auto___22356 = cljs.core.first.call(null,seq__20986_22350__$1);
args__18177__auto__.push(child__18178__auto___22356);

var G__22357 = cljs.core.next.call(null,seq__20986_22350__$1);
var G__22358 = null;
var G__22359 = (0);
var G__22360 = (0);
seq__20986_22340 = G__22357;
chunk__20987_22341 = G__22358;
count__20988_22342 = G__22359;
i__20989_22343 = G__22360;
continue;
}
} else {
}
}
break;
}

return React.DOM.header.apply(null,args__18177__auto__);
});

flupot.dom.header.cljs$lang$maxFixedArity = (1);

flupot.dom.header.cljs$lang$applyTo = (function (seq20984){
var G__20985 = cljs.core.first.call(null,seq20984);
var seq20984__$1 = cljs.core.next.call(null,seq20984);
return flupot.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__20985,seq20984__$1);
});

flupot.dom.hr = (function flupot$dom$hr(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20992_22361 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20993_22362 = null;
var count__20994_22363 = (0);
var i__20995_22364 = (0);
while(true){
if((i__20995_22364 < count__20994_22363)){
var child__18178__auto___22365 = cljs.core._nth.call(null,chunk__20993_22362,i__20995_22364);
args__18177__auto__.push(child__18178__auto___22365);

var G__22366 = seq__20992_22361;
var G__22367 = chunk__20993_22362;
var G__22368 = count__20994_22363;
var G__22369 = (i__20995_22364 + (1));
seq__20992_22361 = G__22366;
chunk__20993_22362 = G__22367;
count__20994_22363 = G__22368;
i__20995_22364 = G__22369;
continue;
} else {
var temp__4425__auto___22370 = cljs.core.seq.call(null,seq__20992_22361);
if(temp__4425__auto___22370){
var seq__20992_22371__$1 = temp__4425__auto___22370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20992_22371__$1)){
var c__16879__auto___22372 = cljs.core.chunk_first.call(null,seq__20992_22371__$1);
var G__22373 = cljs.core.chunk_rest.call(null,seq__20992_22371__$1);
var G__22374 = c__16879__auto___22372;
var G__22375 = cljs.core.count.call(null,c__16879__auto___22372);
var G__22376 = (0);
seq__20992_22361 = G__22373;
chunk__20993_22362 = G__22374;
count__20994_22363 = G__22375;
i__20995_22364 = G__22376;
continue;
} else {
var child__18178__auto___22377 = cljs.core.first.call(null,seq__20992_22371__$1);
args__18177__auto__.push(child__18178__auto___22377);

var G__22378 = cljs.core.next.call(null,seq__20992_22371__$1);
var G__22379 = null;
var G__22380 = (0);
var G__22381 = (0);
seq__20992_22361 = G__22378;
chunk__20993_22362 = G__22379;
count__20994_22363 = G__22380;
i__20995_22364 = G__22381;
continue;
}
} else {
}
}
break;
}

return React.DOM.hr.apply(null,args__18177__auto__);
});

flupot.dom.hr.cljs$lang$maxFixedArity = (1);

flupot.dom.hr.cljs$lang$applyTo = (function (seq20990){
var G__20991 = cljs.core.first.call(null,seq20990);
var seq20990__$1 = cljs.core.next.call(null,seq20990);
return flupot.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__20991,seq20990__$1);
});

flupot.dom.html = (function flupot$dom$html(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20998_22382 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20999_22383 = null;
var count__21000_22384 = (0);
var i__21001_22385 = (0);
while(true){
if((i__21001_22385 < count__21000_22384)){
var child__18178__auto___22386 = cljs.core._nth.call(null,chunk__20999_22383,i__21001_22385);
args__18177__auto__.push(child__18178__auto___22386);

var G__22387 = seq__20998_22382;
var G__22388 = chunk__20999_22383;
var G__22389 = count__21000_22384;
var G__22390 = (i__21001_22385 + (1));
seq__20998_22382 = G__22387;
chunk__20999_22383 = G__22388;
count__21000_22384 = G__22389;
i__21001_22385 = G__22390;
continue;
} else {
var temp__4425__auto___22391 = cljs.core.seq.call(null,seq__20998_22382);
if(temp__4425__auto___22391){
var seq__20998_22392__$1 = temp__4425__auto___22391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20998_22392__$1)){
var c__16879__auto___22393 = cljs.core.chunk_first.call(null,seq__20998_22392__$1);
var G__22394 = cljs.core.chunk_rest.call(null,seq__20998_22392__$1);
var G__22395 = c__16879__auto___22393;
var G__22396 = cljs.core.count.call(null,c__16879__auto___22393);
var G__22397 = (0);
seq__20998_22382 = G__22394;
chunk__20999_22383 = G__22395;
count__21000_22384 = G__22396;
i__21001_22385 = G__22397;
continue;
} else {
var child__18178__auto___22398 = cljs.core.first.call(null,seq__20998_22392__$1);
args__18177__auto__.push(child__18178__auto___22398);

var G__22399 = cljs.core.next.call(null,seq__20998_22392__$1);
var G__22400 = null;
var G__22401 = (0);
var G__22402 = (0);
seq__20998_22382 = G__22399;
chunk__20999_22383 = G__22400;
count__21000_22384 = G__22401;
i__21001_22385 = G__22402;
continue;
}
} else {
}
}
break;
}

return React.DOM.html.apply(null,args__18177__auto__);
});

flupot.dom.html.cljs$lang$maxFixedArity = (1);

flupot.dom.html.cljs$lang$applyTo = (function (seq20996){
var G__20997 = cljs.core.first.call(null,seq20996);
var seq20996__$1 = cljs.core.next.call(null,seq20996);
return flupot.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__20997,seq20996__$1);
});

flupot.dom.i = (function flupot$dom$i(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21004_22403 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21005_22404 = null;
var count__21006_22405 = (0);
var i__21007_22406 = (0);
while(true){
if((i__21007_22406 < count__21006_22405)){
var child__18178__auto___22407 = cljs.core._nth.call(null,chunk__21005_22404,i__21007_22406);
args__18177__auto__.push(child__18178__auto___22407);

var G__22408 = seq__21004_22403;
var G__22409 = chunk__21005_22404;
var G__22410 = count__21006_22405;
var G__22411 = (i__21007_22406 + (1));
seq__21004_22403 = G__22408;
chunk__21005_22404 = G__22409;
count__21006_22405 = G__22410;
i__21007_22406 = G__22411;
continue;
} else {
var temp__4425__auto___22412 = cljs.core.seq.call(null,seq__21004_22403);
if(temp__4425__auto___22412){
var seq__21004_22413__$1 = temp__4425__auto___22412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21004_22413__$1)){
var c__16879__auto___22414 = cljs.core.chunk_first.call(null,seq__21004_22413__$1);
var G__22415 = cljs.core.chunk_rest.call(null,seq__21004_22413__$1);
var G__22416 = c__16879__auto___22414;
var G__22417 = cljs.core.count.call(null,c__16879__auto___22414);
var G__22418 = (0);
seq__21004_22403 = G__22415;
chunk__21005_22404 = G__22416;
count__21006_22405 = G__22417;
i__21007_22406 = G__22418;
continue;
} else {
var child__18178__auto___22419 = cljs.core.first.call(null,seq__21004_22413__$1);
args__18177__auto__.push(child__18178__auto___22419);

var G__22420 = cljs.core.next.call(null,seq__21004_22413__$1);
var G__22421 = null;
var G__22422 = (0);
var G__22423 = (0);
seq__21004_22403 = G__22420;
chunk__21005_22404 = G__22421;
count__21006_22405 = G__22422;
i__21007_22406 = G__22423;
continue;
}
} else {
}
}
break;
}

return React.DOM.i.apply(null,args__18177__auto__);
});

flupot.dom.i.cljs$lang$maxFixedArity = (1);

flupot.dom.i.cljs$lang$applyTo = (function (seq21002){
var G__21003 = cljs.core.first.call(null,seq21002);
var seq21002__$1 = cljs.core.next.call(null,seq21002);
return flupot.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__21003,seq21002__$1);
});

flupot.dom.iframe = (function flupot$dom$iframe(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21010_22424 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21011_22425 = null;
var count__21012_22426 = (0);
var i__21013_22427 = (0);
while(true){
if((i__21013_22427 < count__21012_22426)){
var child__18178__auto___22428 = cljs.core._nth.call(null,chunk__21011_22425,i__21013_22427);
args__18177__auto__.push(child__18178__auto___22428);

var G__22429 = seq__21010_22424;
var G__22430 = chunk__21011_22425;
var G__22431 = count__21012_22426;
var G__22432 = (i__21013_22427 + (1));
seq__21010_22424 = G__22429;
chunk__21011_22425 = G__22430;
count__21012_22426 = G__22431;
i__21013_22427 = G__22432;
continue;
} else {
var temp__4425__auto___22433 = cljs.core.seq.call(null,seq__21010_22424);
if(temp__4425__auto___22433){
var seq__21010_22434__$1 = temp__4425__auto___22433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21010_22434__$1)){
var c__16879__auto___22435 = cljs.core.chunk_first.call(null,seq__21010_22434__$1);
var G__22436 = cljs.core.chunk_rest.call(null,seq__21010_22434__$1);
var G__22437 = c__16879__auto___22435;
var G__22438 = cljs.core.count.call(null,c__16879__auto___22435);
var G__22439 = (0);
seq__21010_22424 = G__22436;
chunk__21011_22425 = G__22437;
count__21012_22426 = G__22438;
i__21013_22427 = G__22439;
continue;
} else {
var child__18178__auto___22440 = cljs.core.first.call(null,seq__21010_22434__$1);
args__18177__auto__.push(child__18178__auto___22440);

var G__22441 = cljs.core.next.call(null,seq__21010_22434__$1);
var G__22442 = null;
var G__22443 = (0);
var G__22444 = (0);
seq__21010_22424 = G__22441;
chunk__21011_22425 = G__22442;
count__21012_22426 = G__22443;
i__21013_22427 = G__22444;
continue;
}
} else {
}
}
break;
}

return React.DOM.iframe.apply(null,args__18177__auto__);
});

flupot.dom.iframe.cljs$lang$maxFixedArity = (1);

flupot.dom.iframe.cljs$lang$applyTo = (function (seq21008){
var G__21009 = cljs.core.first.call(null,seq21008);
var seq21008__$1 = cljs.core.next.call(null,seq21008);
return flupot.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__21009,seq21008__$1);
});

flupot.dom.img = (function flupot$dom$img(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21016_22445 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21017_22446 = null;
var count__21018_22447 = (0);
var i__21019_22448 = (0);
while(true){
if((i__21019_22448 < count__21018_22447)){
var child__18178__auto___22449 = cljs.core._nth.call(null,chunk__21017_22446,i__21019_22448);
args__18177__auto__.push(child__18178__auto___22449);

var G__22450 = seq__21016_22445;
var G__22451 = chunk__21017_22446;
var G__22452 = count__21018_22447;
var G__22453 = (i__21019_22448 + (1));
seq__21016_22445 = G__22450;
chunk__21017_22446 = G__22451;
count__21018_22447 = G__22452;
i__21019_22448 = G__22453;
continue;
} else {
var temp__4425__auto___22454 = cljs.core.seq.call(null,seq__21016_22445);
if(temp__4425__auto___22454){
var seq__21016_22455__$1 = temp__4425__auto___22454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21016_22455__$1)){
var c__16879__auto___22456 = cljs.core.chunk_first.call(null,seq__21016_22455__$1);
var G__22457 = cljs.core.chunk_rest.call(null,seq__21016_22455__$1);
var G__22458 = c__16879__auto___22456;
var G__22459 = cljs.core.count.call(null,c__16879__auto___22456);
var G__22460 = (0);
seq__21016_22445 = G__22457;
chunk__21017_22446 = G__22458;
count__21018_22447 = G__22459;
i__21019_22448 = G__22460;
continue;
} else {
var child__18178__auto___22461 = cljs.core.first.call(null,seq__21016_22455__$1);
args__18177__auto__.push(child__18178__auto___22461);

var G__22462 = cljs.core.next.call(null,seq__21016_22455__$1);
var G__22463 = null;
var G__22464 = (0);
var G__22465 = (0);
seq__21016_22445 = G__22462;
chunk__21017_22446 = G__22463;
count__21018_22447 = G__22464;
i__21019_22448 = G__22465;
continue;
}
} else {
}
}
break;
}

return React.DOM.img.apply(null,args__18177__auto__);
});

flupot.dom.img.cljs$lang$maxFixedArity = (1);

flupot.dom.img.cljs$lang$applyTo = (function (seq21014){
var G__21015 = cljs.core.first.call(null,seq21014);
var seq21014__$1 = cljs.core.next.call(null,seq21014);
return flupot.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__21015,seq21014__$1);
});

flupot.dom.input = (function flupot$dom$input(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21022_22466 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21023_22467 = null;
var count__21024_22468 = (0);
var i__21025_22469 = (0);
while(true){
if((i__21025_22469 < count__21024_22468)){
var child__18178__auto___22470 = cljs.core._nth.call(null,chunk__21023_22467,i__21025_22469);
args__18177__auto__.push(child__18178__auto___22470);

var G__22471 = seq__21022_22466;
var G__22472 = chunk__21023_22467;
var G__22473 = count__21024_22468;
var G__22474 = (i__21025_22469 + (1));
seq__21022_22466 = G__22471;
chunk__21023_22467 = G__22472;
count__21024_22468 = G__22473;
i__21025_22469 = G__22474;
continue;
} else {
var temp__4425__auto___22475 = cljs.core.seq.call(null,seq__21022_22466);
if(temp__4425__auto___22475){
var seq__21022_22476__$1 = temp__4425__auto___22475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21022_22476__$1)){
var c__16879__auto___22477 = cljs.core.chunk_first.call(null,seq__21022_22476__$1);
var G__22478 = cljs.core.chunk_rest.call(null,seq__21022_22476__$1);
var G__22479 = c__16879__auto___22477;
var G__22480 = cljs.core.count.call(null,c__16879__auto___22477);
var G__22481 = (0);
seq__21022_22466 = G__22478;
chunk__21023_22467 = G__22479;
count__21024_22468 = G__22480;
i__21025_22469 = G__22481;
continue;
} else {
var child__18178__auto___22482 = cljs.core.first.call(null,seq__21022_22476__$1);
args__18177__auto__.push(child__18178__auto___22482);

var G__22483 = cljs.core.next.call(null,seq__21022_22476__$1);
var G__22484 = null;
var G__22485 = (0);
var G__22486 = (0);
seq__21022_22466 = G__22483;
chunk__21023_22467 = G__22484;
count__21024_22468 = G__22485;
i__21025_22469 = G__22486;
continue;
}
} else {
}
}
break;
}

return React.DOM.input.apply(null,args__18177__auto__);
});

flupot.dom.input.cljs$lang$maxFixedArity = (1);

flupot.dom.input.cljs$lang$applyTo = (function (seq21020){
var G__21021 = cljs.core.first.call(null,seq21020);
var seq21020__$1 = cljs.core.next.call(null,seq21020);
return flupot.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__21021,seq21020__$1);
});

flupot.dom.ins = (function flupot$dom$ins(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21028_22487 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21029_22488 = null;
var count__21030_22489 = (0);
var i__21031_22490 = (0);
while(true){
if((i__21031_22490 < count__21030_22489)){
var child__18178__auto___22491 = cljs.core._nth.call(null,chunk__21029_22488,i__21031_22490);
args__18177__auto__.push(child__18178__auto___22491);

var G__22492 = seq__21028_22487;
var G__22493 = chunk__21029_22488;
var G__22494 = count__21030_22489;
var G__22495 = (i__21031_22490 + (1));
seq__21028_22487 = G__22492;
chunk__21029_22488 = G__22493;
count__21030_22489 = G__22494;
i__21031_22490 = G__22495;
continue;
} else {
var temp__4425__auto___22496 = cljs.core.seq.call(null,seq__21028_22487);
if(temp__4425__auto___22496){
var seq__21028_22497__$1 = temp__4425__auto___22496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21028_22497__$1)){
var c__16879__auto___22498 = cljs.core.chunk_first.call(null,seq__21028_22497__$1);
var G__22499 = cljs.core.chunk_rest.call(null,seq__21028_22497__$1);
var G__22500 = c__16879__auto___22498;
var G__22501 = cljs.core.count.call(null,c__16879__auto___22498);
var G__22502 = (0);
seq__21028_22487 = G__22499;
chunk__21029_22488 = G__22500;
count__21030_22489 = G__22501;
i__21031_22490 = G__22502;
continue;
} else {
var child__18178__auto___22503 = cljs.core.first.call(null,seq__21028_22497__$1);
args__18177__auto__.push(child__18178__auto___22503);

var G__22504 = cljs.core.next.call(null,seq__21028_22497__$1);
var G__22505 = null;
var G__22506 = (0);
var G__22507 = (0);
seq__21028_22487 = G__22504;
chunk__21029_22488 = G__22505;
count__21030_22489 = G__22506;
i__21031_22490 = G__22507;
continue;
}
} else {
}
}
break;
}

return React.DOM.ins.apply(null,args__18177__auto__);
});

flupot.dom.ins.cljs$lang$maxFixedArity = (1);

flupot.dom.ins.cljs$lang$applyTo = (function (seq21026){
var G__21027 = cljs.core.first.call(null,seq21026);
var seq21026__$1 = cljs.core.next.call(null,seq21026);
return flupot.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__21027,seq21026__$1);
});

flupot.dom.kbd = (function flupot$dom$kbd(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21034_22508 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21035_22509 = null;
var count__21036_22510 = (0);
var i__21037_22511 = (0);
while(true){
if((i__21037_22511 < count__21036_22510)){
var child__18178__auto___22512 = cljs.core._nth.call(null,chunk__21035_22509,i__21037_22511);
args__18177__auto__.push(child__18178__auto___22512);

var G__22513 = seq__21034_22508;
var G__22514 = chunk__21035_22509;
var G__22515 = count__21036_22510;
var G__22516 = (i__21037_22511 + (1));
seq__21034_22508 = G__22513;
chunk__21035_22509 = G__22514;
count__21036_22510 = G__22515;
i__21037_22511 = G__22516;
continue;
} else {
var temp__4425__auto___22517 = cljs.core.seq.call(null,seq__21034_22508);
if(temp__4425__auto___22517){
var seq__21034_22518__$1 = temp__4425__auto___22517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21034_22518__$1)){
var c__16879__auto___22519 = cljs.core.chunk_first.call(null,seq__21034_22518__$1);
var G__22520 = cljs.core.chunk_rest.call(null,seq__21034_22518__$1);
var G__22521 = c__16879__auto___22519;
var G__22522 = cljs.core.count.call(null,c__16879__auto___22519);
var G__22523 = (0);
seq__21034_22508 = G__22520;
chunk__21035_22509 = G__22521;
count__21036_22510 = G__22522;
i__21037_22511 = G__22523;
continue;
} else {
var child__18178__auto___22524 = cljs.core.first.call(null,seq__21034_22518__$1);
args__18177__auto__.push(child__18178__auto___22524);

var G__22525 = cljs.core.next.call(null,seq__21034_22518__$1);
var G__22526 = null;
var G__22527 = (0);
var G__22528 = (0);
seq__21034_22508 = G__22525;
chunk__21035_22509 = G__22526;
count__21036_22510 = G__22527;
i__21037_22511 = G__22528;
continue;
}
} else {
}
}
break;
}

return React.DOM.kbd.apply(null,args__18177__auto__);
});

flupot.dom.kbd.cljs$lang$maxFixedArity = (1);

flupot.dom.kbd.cljs$lang$applyTo = (function (seq21032){
var G__21033 = cljs.core.first.call(null,seq21032);
var seq21032__$1 = cljs.core.next.call(null,seq21032);
return flupot.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__21033,seq21032__$1);
});

flupot.dom.keygen = (function flupot$dom$keygen(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21040_22529 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21041_22530 = null;
var count__21042_22531 = (0);
var i__21043_22532 = (0);
while(true){
if((i__21043_22532 < count__21042_22531)){
var child__18178__auto___22533 = cljs.core._nth.call(null,chunk__21041_22530,i__21043_22532);
args__18177__auto__.push(child__18178__auto___22533);

var G__22534 = seq__21040_22529;
var G__22535 = chunk__21041_22530;
var G__22536 = count__21042_22531;
var G__22537 = (i__21043_22532 + (1));
seq__21040_22529 = G__22534;
chunk__21041_22530 = G__22535;
count__21042_22531 = G__22536;
i__21043_22532 = G__22537;
continue;
} else {
var temp__4425__auto___22538 = cljs.core.seq.call(null,seq__21040_22529);
if(temp__4425__auto___22538){
var seq__21040_22539__$1 = temp__4425__auto___22538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21040_22539__$1)){
var c__16879__auto___22540 = cljs.core.chunk_first.call(null,seq__21040_22539__$1);
var G__22541 = cljs.core.chunk_rest.call(null,seq__21040_22539__$1);
var G__22542 = c__16879__auto___22540;
var G__22543 = cljs.core.count.call(null,c__16879__auto___22540);
var G__22544 = (0);
seq__21040_22529 = G__22541;
chunk__21041_22530 = G__22542;
count__21042_22531 = G__22543;
i__21043_22532 = G__22544;
continue;
} else {
var child__18178__auto___22545 = cljs.core.first.call(null,seq__21040_22539__$1);
args__18177__auto__.push(child__18178__auto___22545);

var G__22546 = cljs.core.next.call(null,seq__21040_22539__$1);
var G__22547 = null;
var G__22548 = (0);
var G__22549 = (0);
seq__21040_22529 = G__22546;
chunk__21041_22530 = G__22547;
count__21042_22531 = G__22548;
i__21043_22532 = G__22549;
continue;
}
} else {
}
}
break;
}

return React.DOM.keygen.apply(null,args__18177__auto__);
});

flupot.dom.keygen.cljs$lang$maxFixedArity = (1);

flupot.dom.keygen.cljs$lang$applyTo = (function (seq21038){
var G__21039 = cljs.core.first.call(null,seq21038);
var seq21038__$1 = cljs.core.next.call(null,seq21038);
return flupot.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__21039,seq21038__$1);
});

flupot.dom.label = (function flupot$dom$label(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21046_22550 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21047_22551 = null;
var count__21048_22552 = (0);
var i__21049_22553 = (0);
while(true){
if((i__21049_22553 < count__21048_22552)){
var child__18178__auto___22554 = cljs.core._nth.call(null,chunk__21047_22551,i__21049_22553);
args__18177__auto__.push(child__18178__auto___22554);

var G__22555 = seq__21046_22550;
var G__22556 = chunk__21047_22551;
var G__22557 = count__21048_22552;
var G__22558 = (i__21049_22553 + (1));
seq__21046_22550 = G__22555;
chunk__21047_22551 = G__22556;
count__21048_22552 = G__22557;
i__21049_22553 = G__22558;
continue;
} else {
var temp__4425__auto___22559 = cljs.core.seq.call(null,seq__21046_22550);
if(temp__4425__auto___22559){
var seq__21046_22560__$1 = temp__4425__auto___22559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21046_22560__$1)){
var c__16879__auto___22561 = cljs.core.chunk_first.call(null,seq__21046_22560__$1);
var G__22562 = cljs.core.chunk_rest.call(null,seq__21046_22560__$1);
var G__22563 = c__16879__auto___22561;
var G__22564 = cljs.core.count.call(null,c__16879__auto___22561);
var G__22565 = (0);
seq__21046_22550 = G__22562;
chunk__21047_22551 = G__22563;
count__21048_22552 = G__22564;
i__21049_22553 = G__22565;
continue;
} else {
var child__18178__auto___22566 = cljs.core.first.call(null,seq__21046_22560__$1);
args__18177__auto__.push(child__18178__auto___22566);

var G__22567 = cljs.core.next.call(null,seq__21046_22560__$1);
var G__22568 = null;
var G__22569 = (0);
var G__22570 = (0);
seq__21046_22550 = G__22567;
chunk__21047_22551 = G__22568;
count__21048_22552 = G__22569;
i__21049_22553 = G__22570;
continue;
}
} else {
}
}
break;
}

return React.DOM.label.apply(null,args__18177__auto__);
});

flupot.dom.label.cljs$lang$maxFixedArity = (1);

flupot.dom.label.cljs$lang$applyTo = (function (seq21044){
var G__21045 = cljs.core.first.call(null,seq21044);
var seq21044__$1 = cljs.core.next.call(null,seq21044);
return flupot.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__21045,seq21044__$1);
});

flupot.dom.legend = (function flupot$dom$legend(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21052_22571 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21053_22572 = null;
var count__21054_22573 = (0);
var i__21055_22574 = (0);
while(true){
if((i__21055_22574 < count__21054_22573)){
var child__18178__auto___22575 = cljs.core._nth.call(null,chunk__21053_22572,i__21055_22574);
args__18177__auto__.push(child__18178__auto___22575);

var G__22576 = seq__21052_22571;
var G__22577 = chunk__21053_22572;
var G__22578 = count__21054_22573;
var G__22579 = (i__21055_22574 + (1));
seq__21052_22571 = G__22576;
chunk__21053_22572 = G__22577;
count__21054_22573 = G__22578;
i__21055_22574 = G__22579;
continue;
} else {
var temp__4425__auto___22580 = cljs.core.seq.call(null,seq__21052_22571);
if(temp__4425__auto___22580){
var seq__21052_22581__$1 = temp__4425__auto___22580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21052_22581__$1)){
var c__16879__auto___22582 = cljs.core.chunk_first.call(null,seq__21052_22581__$1);
var G__22583 = cljs.core.chunk_rest.call(null,seq__21052_22581__$1);
var G__22584 = c__16879__auto___22582;
var G__22585 = cljs.core.count.call(null,c__16879__auto___22582);
var G__22586 = (0);
seq__21052_22571 = G__22583;
chunk__21053_22572 = G__22584;
count__21054_22573 = G__22585;
i__21055_22574 = G__22586;
continue;
} else {
var child__18178__auto___22587 = cljs.core.first.call(null,seq__21052_22581__$1);
args__18177__auto__.push(child__18178__auto___22587);

var G__22588 = cljs.core.next.call(null,seq__21052_22581__$1);
var G__22589 = null;
var G__22590 = (0);
var G__22591 = (0);
seq__21052_22571 = G__22588;
chunk__21053_22572 = G__22589;
count__21054_22573 = G__22590;
i__21055_22574 = G__22591;
continue;
}
} else {
}
}
break;
}

return React.DOM.legend.apply(null,args__18177__auto__);
});

flupot.dom.legend.cljs$lang$maxFixedArity = (1);

flupot.dom.legend.cljs$lang$applyTo = (function (seq21050){
var G__21051 = cljs.core.first.call(null,seq21050);
var seq21050__$1 = cljs.core.next.call(null,seq21050);
return flupot.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__21051,seq21050__$1);
});

flupot.dom.li = (function flupot$dom$li(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21058_22592 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21059_22593 = null;
var count__21060_22594 = (0);
var i__21061_22595 = (0);
while(true){
if((i__21061_22595 < count__21060_22594)){
var child__18178__auto___22596 = cljs.core._nth.call(null,chunk__21059_22593,i__21061_22595);
args__18177__auto__.push(child__18178__auto___22596);

var G__22597 = seq__21058_22592;
var G__22598 = chunk__21059_22593;
var G__22599 = count__21060_22594;
var G__22600 = (i__21061_22595 + (1));
seq__21058_22592 = G__22597;
chunk__21059_22593 = G__22598;
count__21060_22594 = G__22599;
i__21061_22595 = G__22600;
continue;
} else {
var temp__4425__auto___22601 = cljs.core.seq.call(null,seq__21058_22592);
if(temp__4425__auto___22601){
var seq__21058_22602__$1 = temp__4425__auto___22601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21058_22602__$1)){
var c__16879__auto___22603 = cljs.core.chunk_first.call(null,seq__21058_22602__$1);
var G__22604 = cljs.core.chunk_rest.call(null,seq__21058_22602__$1);
var G__22605 = c__16879__auto___22603;
var G__22606 = cljs.core.count.call(null,c__16879__auto___22603);
var G__22607 = (0);
seq__21058_22592 = G__22604;
chunk__21059_22593 = G__22605;
count__21060_22594 = G__22606;
i__21061_22595 = G__22607;
continue;
} else {
var child__18178__auto___22608 = cljs.core.first.call(null,seq__21058_22602__$1);
args__18177__auto__.push(child__18178__auto___22608);

var G__22609 = cljs.core.next.call(null,seq__21058_22602__$1);
var G__22610 = null;
var G__22611 = (0);
var G__22612 = (0);
seq__21058_22592 = G__22609;
chunk__21059_22593 = G__22610;
count__21060_22594 = G__22611;
i__21061_22595 = G__22612;
continue;
}
} else {
}
}
break;
}

return React.DOM.li.apply(null,args__18177__auto__);
});

flupot.dom.li.cljs$lang$maxFixedArity = (1);

flupot.dom.li.cljs$lang$applyTo = (function (seq21056){
var G__21057 = cljs.core.first.call(null,seq21056);
var seq21056__$1 = cljs.core.next.call(null,seq21056);
return flupot.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__21057,seq21056__$1);
});

flupot.dom.link = (function flupot$dom$link(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21064_22613 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21065_22614 = null;
var count__21066_22615 = (0);
var i__21067_22616 = (0);
while(true){
if((i__21067_22616 < count__21066_22615)){
var child__18178__auto___22617 = cljs.core._nth.call(null,chunk__21065_22614,i__21067_22616);
args__18177__auto__.push(child__18178__auto___22617);

var G__22618 = seq__21064_22613;
var G__22619 = chunk__21065_22614;
var G__22620 = count__21066_22615;
var G__22621 = (i__21067_22616 + (1));
seq__21064_22613 = G__22618;
chunk__21065_22614 = G__22619;
count__21066_22615 = G__22620;
i__21067_22616 = G__22621;
continue;
} else {
var temp__4425__auto___22622 = cljs.core.seq.call(null,seq__21064_22613);
if(temp__4425__auto___22622){
var seq__21064_22623__$1 = temp__4425__auto___22622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21064_22623__$1)){
var c__16879__auto___22624 = cljs.core.chunk_first.call(null,seq__21064_22623__$1);
var G__22625 = cljs.core.chunk_rest.call(null,seq__21064_22623__$1);
var G__22626 = c__16879__auto___22624;
var G__22627 = cljs.core.count.call(null,c__16879__auto___22624);
var G__22628 = (0);
seq__21064_22613 = G__22625;
chunk__21065_22614 = G__22626;
count__21066_22615 = G__22627;
i__21067_22616 = G__22628;
continue;
} else {
var child__18178__auto___22629 = cljs.core.first.call(null,seq__21064_22623__$1);
args__18177__auto__.push(child__18178__auto___22629);

var G__22630 = cljs.core.next.call(null,seq__21064_22623__$1);
var G__22631 = null;
var G__22632 = (0);
var G__22633 = (0);
seq__21064_22613 = G__22630;
chunk__21065_22614 = G__22631;
count__21066_22615 = G__22632;
i__21067_22616 = G__22633;
continue;
}
} else {
}
}
break;
}

return React.DOM.link.apply(null,args__18177__auto__);
});

flupot.dom.link.cljs$lang$maxFixedArity = (1);

flupot.dom.link.cljs$lang$applyTo = (function (seq21062){
var G__21063 = cljs.core.first.call(null,seq21062);
var seq21062__$1 = cljs.core.next.call(null,seq21062);
return flupot.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__21063,seq21062__$1);
});

flupot.dom.main = (function flupot$dom$main(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21070_22634 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21071_22635 = null;
var count__21072_22636 = (0);
var i__21073_22637 = (0);
while(true){
if((i__21073_22637 < count__21072_22636)){
var child__18178__auto___22638 = cljs.core._nth.call(null,chunk__21071_22635,i__21073_22637);
args__18177__auto__.push(child__18178__auto___22638);

var G__22639 = seq__21070_22634;
var G__22640 = chunk__21071_22635;
var G__22641 = count__21072_22636;
var G__22642 = (i__21073_22637 + (1));
seq__21070_22634 = G__22639;
chunk__21071_22635 = G__22640;
count__21072_22636 = G__22641;
i__21073_22637 = G__22642;
continue;
} else {
var temp__4425__auto___22643 = cljs.core.seq.call(null,seq__21070_22634);
if(temp__4425__auto___22643){
var seq__21070_22644__$1 = temp__4425__auto___22643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21070_22644__$1)){
var c__16879__auto___22645 = cljs.core.chunk_first.call(null,seq__21070_22644__$1);
var G__22646 = cljs.core.chunk_rest.call(null,seq__21070_22644__$1);
var G__22647 = c__16879__auto___22645;
var G__22648 = cljs.core.count.call(null,c__16879__auto___22645);
var G__22649 = (0);
seq__21070_22634 = G__22646;
chunk__21071_22635 = G__22647;
count__21072_22636 = G__22648;
i__21073_22637 = G__22649;
continue;
} else {
var child__18178__auto___22650 = cljs.core.first.call(null,seq__21070_22644__$1);
args__18177__auto__.push(child__18178__auto___22650);

var G__22651 = cljs.core.next.call(null,seq__21070_22644__$1);
var G__22652 = null;
var G__22653 = (0);
var G__22654 = (0);
seq__21070_22634 = G__22651;
chunk__21071_22635 = G__22652;
count__21072_22636 = G__22653;
i__21073_22637 = G__22654;
continue;
}
} else {
}
}
break;
}

return React.DOM.main.apply(null,args__18177__auto__);
});

flupot.dom.main.cljs$lang$maxFixedArity = (1);

flupot.dom.main.cljs$lang$applyTo = (function (seq21068){
var G__21069 = cljs.core.first.call(null,seq21068);
var seq21068__$1 = cljs.core.next.call(null,seq21068);
return flupot.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__21069,seq21068__$1);
});

flupot.dom.map = (function flupot$dom$map(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21076_22655 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21077_22656 = null;
var count__21078_22657 = (0);
var i__21079_22658 = (0);
while(true){
if((i__21079_22658 < count__21078_22657)){
var child__18178__auto___22659 = cljs.core._nth.call(null,chunk__21077_22656,i__21079_22658);
args__18177__auto__.push(child__18178__auto___22659);

var G__22660 = seq__21076_22655;
var G__22661 = chunk__21077_22656;
var G__22662 = count__21078_22657;
var G__22663 = (i__21079_22658 + (1));
seq__21076_22655 = G__22660;
chunk__21077_22656 = G__22661;
count__21078_22657 = G__22662;
i__21079_22658 = G__22663;
continue;
} else {
var temp__4425__auto___22664 = cljs.core.seq.call(null,seq__21076_22655);
if(temp__4425__auto___22664){
var seq__21076_22665__$1 = temp__4425__auto___22664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21076_22665__$1)){
var c__16879__auto___22666 = cljs.core.chunk_first.call(null,seq__21076_22665__$1);
var G__22667 = cljs.core.chunk_rest.call(null,seq__21076_22665__$1);
var G__22668 = c__16879__auto___22666;
var G__22669 = cljs.core.count.call(null,c__16879__auto___22666);
var G__22670 = (0);
seq__21076_22655 = G__22667;
chunk__21077_22656 = G__22668;
count__21078_22657 = G__22669;
i__21079_22658 = G__22670;
continue;
} else {
var child__18178__auto___22671 = cljs.core.first.call(null,seq__21076_22665__$1);
args__18177__auto__.push(child__18178__auto___22671);

var G__22672 = cljs.core.next.call(null,seq__21076_22665__$1);
var G__22673 = null;
var G__22674 = (0);
var G__22675 = (0);
seq__21076_22655 = G__22672;
chunk__21077_22656 = G__22673;
count__21078_22657 = G__22674;
i__21079_22658 = G__22675;
continue;
}
} else {
}
}
break;
}

return React.DOM.map.apply(null,args__18177__auto__);
});

flupot.dom.map.cljs$lang$maxFixedArity = (1);

flupot.dom.map.cljs$lang$applyTo = (function (seq21074){
var G__21075 = cljs.core.first.call(null,seq21074);
var seq21074__$1 = cljs.core.next.call(null,seq21074);
return flupot.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__21075,seq21074__$1);
});

flupot.dom.mark = (function flupot$dom$mark(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21082_22676 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21083_22677 = null;
var count__21084_22678 = (0);
var i__21085_22679 = (0);
while(true){
if((i__21085_22679 < count__21084_22678)){
var child__18178__auto___22680 = cljs.core._nth.call(null,chunk__21083_22677,i__21085_22679);
args__18177__auto__.push(child__18178__auto___22680);

var G__22681 = seq__21082_22676;
var G__22682 = chunk__21083_22677;
var G__22683 = count__21084_22678;
var G__22684 = (i__21085_22679 + (1));
seq__21082_22676 = G__22681;
chunk__21083_22677 = G__22682;
count__21084_22678 = G__22683;
i__21085_22679 = G__22684;
continue;
} else {
var temp__4425__auto___22685 = cljs.core.seq.call(null,seq__21082_22676);
if(temp__4425__auto___22685){
var seq__21082_22686__$1 = temp__4425__auto___22685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21082_22686__$1)){
var c__16879__auto___22687 = cljs.core.chunk_first.call(null,seq__21082_22686__$1);
var G__22688 = cljs.core.chunk_rest.call(null,seq__21082_22686__$1);
var G__22689 = c__16879__auto___22687;
var G__22690 = cljs.core.count.call(null,c__16879__auto___22687);
var G__22691 = (0);
seq__21082_22676 = G__22688;
chunk__21083_22677 = G__22689;
count__21084_22678 = G__22690;
i__21085_22679 = G__22691;
continue;
} else {
var child__18178__auto___22692 = cljs.core.first.call(null,seq__21082_22686__$1);
args__18177__auto__.push(child__18178__auto___22692);

var G__22693 = cljs.core.next.call(null,seq__21082_22686__$1);
var G__22694 = null;
var G__22695 = (0);
var G__22696 = (0);
seq__21082_22676 = G__22693;
chunk__21083_22677 = G__22694;
count__21084_22678 = G__22695;
i__21085_22679 = G__22696;
continue;
}
} else {
}
}
break;
}

return React.DOM.mark.apply(null,args__18177__auto__);
});

flupot.dom.mark.cljs$lang$maxFixedArity = (1);

flupot.dom.mark.cljs$lang$applyTo = (function (seq21080){
var G__21081 = cljs.core.first.call(null,seq21080);
var seq21080__$1 = cljs.core.next.call(null,seq21080);
return flupot.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__21081,seq21080__$1);
});

flupot.dom.menu = (function flupot$dom$menu(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21088_22697 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21089_22698 = null;
var count__21090_22699 = (0);
var i__21091_22700 = (0);
while(true){
if((i__21091_22700 < count__21090_22699)){
var child__18178__auto___22701 = cljs.core._nth.call(null,chunk__21089_22698,i__21091_22700);
args__18177__auto__.push(child__18178__auto___22701);

var G__22702 = seq__21088_22697;
var G__22703 = chunk__21089_22698;
var G__22704 = count__21090_22699;
var G__22705 = (i__21091_22700 + (1));
seq__21088_22697 = G__22702;
chunk__21089_22698 = G__22703;
count__21090_22699 = G__22704;
i__21091_22700 = G__22705;
continue;
} else {
var temp__4425__auto___22706 = cljs.core.seq.call(null,seq__21088_22697);
if(temp__4425__auto___22706){
var seq__21088_22707__$1 = temp__4425__auto___22706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21088_22707__$1)){
var c__16879__auto___22708 = cljs.core.chunk_first.call(null,seq__21088_22707__$1);
var G__22709 = cljs.core.chunk_rest.call(null,seq__21088_22707__$1);
var G__22710 = c__16879__auto___22708;
var G__22711 = cljs.core.count.call(null,c__16879__auto___22708);
var G__22712 = (0);
seq__21088_22697 = G__22709;
chunk__21089_22698 = G__22710;
count__21090_22699 = G__22711;
i__21091_22700 = G__22712;
continue;
} else {
var child__18178__auto___22713 = cljs.core.first.call(null,seq__21088_22707__$1);
args__18177__auto__.push(child__18178__auto___22713);

var G__22714 = cljs.core.next.call(null,seq__21088_22707__$1);
var G__22715 = null;
var G__22716 = (0);
var G__22717 = (0);
seq__21088_22697 = G__22714;
chunk__21089_22698 = G__22715;
count__21090_22699 = G__22716;
i__21091_22700 = G__22717;
continue;
}
} else {
}
}
break;
}

return React.DOM.menu.apply(null,args__18177__auto__);
});

flupot.dom.menu.cljs$lang$maxFixedArity = (1);

flupot.dom.menu.cljs$lang$applyTo = (function (seq21086){
var G__21087 = cljs.core.first.call(null,seq21086);
var seq21086__$1 = cljs.core.next.call(null,seq21086);
return flupot.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__21087,seq21086__$1);
});

flupot.dom.menuitem = (function flupot$dom$menuitem(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21094_22718 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21095_22719 = null;
var count__21096_22720 = (0);
var i__21097_22721 = (0);
while(true){
if((i__21097_22721 < count__21096_22720)){
var child__18178__auto___22722 = cljs.core._nth.call(null,chunk__21095_22719,i__21097_22721);
args__18177__auto__.push(child__18178__auto___22722);

var G__22723 = seq__21094_22718;
var G__22724 = chunk__21095_22719;
var G__22725 = count__21096_22720;
var G__22726 = (i__21097_22721 + (1));
seq__21094_22718 = G__22723;
chunk__21095_22719 = G__22724;
count__21096_22720 = G__22725;
i__21097_22721 = G__22726;
continue;
} else {
var temp__4425__auto___22727 = cljs.core.seq.call(null,seq__21094_22718);
if(temp__4425__auto___22727){
var seq__21094_22728__$1 = temp__4425__auto___22727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21094_22728__$1)){
var c__16879__auto___22729 = cljs.core.chunk_first.call(null,seq__21094_22728__$1);
var G__22730 = cljs.core.chunk_rest.call(null,seq__21094_22728__$1);
var G__22731 = c__16879__auto___22729;
var G__22732 = cljs.core.count.call(null,c__16879__auto___22729);
var G__22733 = (0);
seq__21094_22718 = G__22730;
chunk__21095_22719 = G__22731;
count__21096_22720 = G__22732;
i__21097_22721 = G__22733;
continue;
} else {
var child__18178__auto___22734 = cljs.core.first.call(null,seq__21094_22728__$1);
args__18177__auto__.push(child__18178__auto___22734);

var G__22735 = cljs.core.next.call(null,seq__21094_22728__$1);
var G__22736 = null;
var G__22737 = (0);
var G__22738 = (0);
seq__21094_22718 = G__22735;
chunk__21095_22719 = G__22736;
count__21096_22720 = G__22737;
i__21097_22721 = G__22738;
continue;
}
} else {
}
}
break;
}

return React.DOM.menuitem.apply(null,args__18177__auto__);
});

flupot.dom.menuitem.cljs$lang$maxFixedArity = (1);

flupot.dom.menuitem.cljs$lang$applyTo = (function (seq21092){
var G__21093 = cljs.core.first.call(null,seq21092);
var seq21092__$1 = cljs.core.next.call(null,seq21092);
return flupot.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__21093,seq21092__$1);
});

flupot.dom.meta = (function flupot$dom$meta(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21100_22739 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21101_22740 = null;
var count__21102_22741 = (0);
var i__21103_22742 = (0);
while(true){
if((i__21103_22742 < count__21102_22741)){
var child__18178__auto___22743 = cljs.core._nth.call(null,chunk__21101_22740,i__21103_22742);
args__18177__auto__.push(child__18178__auto___22743);

var G__22744 = seq__21100_22739;
var G__22745 = chunk__21101_22740;
var G__22746 = count__21102_22741;
var G__22747 = (i__21103_22742 + (1));
seq__21100_22739 = G__22744;
chunk__21101_22740 = G__22745;
count__21102_22741 = G__22746;
i__21103_22742 = G__22747;
continue;
} else {
var temp__4425__auto___22748 = cljs.core.seq.call(null,seq__21100_22739);
if(temp__4425__auto___22748){
var seq__21100_22749__$1 = temp__4425__auto___22748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21100_22749__$1)){
var c__16879__auto___22750 = cljs.core.chunk_first.call(null,seq__21100_22749__$1);
var G__22751 = cljs.core.chunk_rest.call(null,seq__21100_22749__$1);
var G__22752 = c__16879__auto___22750;
var G__22753 = cljs.core.count.call(null,c__16879__auto___22750);
var G__22754 = (0);
seq__21100_22739 = G__22751;
chunk__21101_22740 = G__22752;
count__21102_22741 = G__22753;
i__21103_22742 = G__22754;
continue;
} else {
var child__18178__auto___22755 = cljs.core.first.call(null,seq__21100_22749__$1);
args__18177__auto__.push(child__18178__auto___22755);

var G__22756 = cljs.core.next.call(null,seq__21100_22749__$1);
var G__22757 = null;
var G__22758 = (0);
var G__22759 = (0);
seq__21100_22739 = G__22756;
chunk__21101_22740 = G__22757;
count__21102_22741 = G__22758;
i__21103_22742 = G__22759;
continue;
}
} else {
}
}
break;
}

return React.DOM.meta.apply(null,args__18177__auto__);
});

flupot.dom.meta.cljs$lang$maxFixedArity = (1);

flupot.dom.meta.cljs$lang$applyTo = (function (seq21098){
var G__21099 = cljs.core.first.call(null,seq21098);
var seq21098__$1 = cljs.core.next.call(null,seq21098);
return flupot.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__21099,seq21098__$1);
});

flupot.dom.meter = (function flupot$dom$meter(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21106_22760 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21107_22761 = null;
var count__21108_22762 = (0);
var i__21109_22763 = (0);
while(true){
if((i__21109_22763 < count__21108_22762)){
var child__18178__auto___22764 = cljs.core._nth.call(null,chunk__21107_22761,i__21109_22763);
args__18177__auto__.push(child__18178__auto___22764);

var G__22765 = seq__21106_22760;
var G__22766 = chunk__21107_22761;
var G__22767 = count__21108_22762;
var G__22768 = (i__21109_22763 + (1));
seq__21106_22760 = G__22765;
chunk__21107_22761 = G__22766;
count__21108_22762 = G__22767;
i__21109_22763 = G__22768;
continue;
} else {
var temp__4425__auto___22769 = cljs.core.seq.call(null,seq__21106_22760);
if(temp__4425__auto___22769){
var seq__21106_22770__$1 = temp__4425__auto___22769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21106_22770__$1)){
var c__16879__auto___22771 = cljs.core.chunk_first.call(null,seq__21106_22770__$1);
var G__22772 = cljs.core.chunk_rest.call(null,seq__21106_22770__$1);
var G__22773 = c__16879__auto___22771;
var G__22774 = cljs.core.count.call(null,c__16879__auto___22771);
var G__22775 = (0);
seq__21106_22760 = G__22772;
chunk__21107_22761 = G__22773;
count__21108_22762 = G__22774;
i__21109_22763 = G__22775;
continue;
} else {
var child__18178__auto___22776 = cljs.core.first.call(null,seq__21106_22770__$1);
args__18177__auto__.push(child__18178__auto___22776);

var G__22777 = cljs.core.next.call(null,seq__21106_22770__$1);
var G__22778 = null;
var G__22779 = (0);
var G__22780 = (0);
seq__21106_22760 = G__22777;
chunk__21107_22761 = G__22778;
count__21108_22762 = G__22779;
i__21109_22763 = G__22780;
continue;
}
} else {
}
}
break;
}

return React.DOM.meter.apply(null,args__18177__auto__);
});

flupot.dom.meter.cljs$lang$maxFixedArity = (1);

flupot.dom.meter.cljs$lang$applyTo = (function (seq21104){
var G__21105 = cljs.core.first.call(null,seq21104);
var seq21104__$1 = cljs.core.next.call(null,seq21104);
return flupot.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__21105,seq21104__$1);
});

flupot.dom.nav = (function flupot$dom$nav(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21112_22781 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21113_22782 = null;
var count__21114_22783 = (0);
var i__21115_22784 = (0);
while(true){
if((i__21115_22784 < count__21114_22783)){
var child__18178__auto___22785 = cljs.core._nth.call(null,chunk__21113_22782,i__21115_22784);
args__18177__auto__.push(child__18178__auto___22785);

var G__22786 = seq__21112_22781;
var G__22787 = chunk__21113_22782;
var G__22788 = count__21114_22783;
var G__22789 = (i__21115_22784 + (1));
seq__21112_22781 = G__22786;
chunk__21113_22782 = G__22787;
count__21114_22783 = G__22788;
i__21115_22784 = G__22789;
continue;
} else {
var temp__4425__auto___22790 = cljs.core.seq.call(null,seq__21112_22781);
if(temp__4425__auto___22790){
var seq__21112_22791__$1 = temp__4425__auto___22790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21112_22791__$1)){
var c__16879__auto___22792 = cljs.core.chunk_first.call(null,seq__21112_22791__$1);
var G__22793 = cljs.core.chunk_rest.call(null,seq__21112_22791__$1);
var G__22794 = c__16879__auto___22792;
var G__22795 = cljs.core.count.call(null,c__16879__auto___22792);
var G__22796 = (0);
seq__21112_22781 = G__22793;
chunk__21113_22782 = G__22794;
count__21114_22783 = G__22795;
i__21115_22784 = G__22796;
continue;
} else {
var child__18178__auto___22797 = cljs.core.first.call(null,seq__21112_22791__$1);
args__18177__auto__.push(child__18178__auto___22797);

var G__22798 = cljs.core.next.call(null,seq__21112_22791__$1);
var G__22799 = null;
var G__22800 = (0);
var G__22801 = (0);
seq__21112_22781 = G__22798;
chunk__21113_22782 = G__22799;
count__21114_22783 = G__22800;
i__21115_22784 = G__22801;
continue;
}
} else {
}
}
break;
}

return React.DOM.nav.apply(null,args__18177__auto__);
});

flupot.dom.nav.cljs$lang$maxFixedArity = (1);

flupot.dom.nav.cljs$lang$applyTo = (function (seq21110){
var G__21111 = cljs.core.first.call(null,seq21110);
var seq21110__$1 = cljs.core.next.call(null,seq21110);
return flupot.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__21111,seq21110__$1);
});

flupot.dom.noscript = (function flupot$dom$noscript(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21118_22802 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21119_22803 = null;
var count__21120_22804 = (0);
var i__21121_22805 = (0);
while(true){
if((i__21121_22805 < count__21120_22804)){
var child__18178__auto___22806 = cljs.core._nth.call(null,chunk__21119_22803,i__21121_22805);
args__18177__auto__.push(child__18178__auto___22806);

var G__22807 = seq__21118_22802;
var G__22808 = chunk__21119_22803;
var G__22809 = count__21120_22804;
var G__22810 = (i__21121_22805 + (1));
seq__21118_22802 = G__22807;
chunk__21119_22803 = G__22808;
count__21120_22804 = G__22809;
i__21121_22805 = G__22810;
continue;
} else {
var temp__4425__auto___22811 = cljs.core.seq.call(null,seq__21118_22802);
if(temp__4425__auto___22811){
var seq__21118_22812__$1 = temp__4425__auto___22811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21118_22812__$1)){
var c__16879__auto___22813 = cljs.core.chunk_first.call(null,seq__21118_22812__$1);
var G__22814 = cljs.core.chunk_rest.call(null,seq__21118_22812__$1);
var G__22815 = c__16879__auto___22813;
var G__22816 = cljs.core.count.call(null,c__16879__auto___22813);
var G__22817 = (0);
seq__21118_22802 = G__22814;
chunk__21119_22803 = G__22815;
count__21120_22804 = G__22816;
i__21121_22805 = G__22817;
continue;
} else {
var child__18178__auto___22818 = cljs.core.first.call(null,seq__21118_22812__$1);
args__18177__auto__.push(child__18178__auto___22818);

var G__22819 = cljs.core.next.call(null,seq__21118_22812__$1);
var G__22820 = null;
var G__22821 = (0);
var G__22822 = (0);
seq__21118_22802 = G__22819;
chunk__21119_22803 = G__22820;
count__21120_22804 = G__22821;
i__21121_22805 = G__22822;
continue;
}
} else {
}
}
break;
}

return React.DOM.noscript.apply(null,args__18177__auto__);
});

flupot.dom.noscript.cljs$lang$maxFixedArity = (1);

flupot.dom.noscript.cljs$lang$applyTo = (function (seq21116){
var G__21117 = cljs.core.first.call(null,seq21116);
var seq21116__$1 = cljs.core.next.call(null,seq21116);
return flupot.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__21117,seq21116__$1);
});

flupot.dom.object = (function flupot$dom$object(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21124_22823 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21125_22824 = null;
var count__21126_22825 = (0);
var i__21127_22826 = (0);
while(true){
if((i__21127_22826 < count__21126_22825)){
var child__18178__auto___22827 = cljs.core._nth.call(null,chunk__21125_22824,i__21127_22826);
args__18177__auto__.push(child__18178__auto___22827);

var G__22828 = seq__21124_22823;
var G__22829 = chunk__21125_22824;
var G__22830 = count__21126_22825;
var G__22831 = (i__21127_22826 + (1));
seq__21124_22823 = G__22828;
chunk__21125_22824 = G__22829;
count__21126_22825 = G__22830;
i__21127_22826 = G__22831;
continue;
} else {
var temp__4425__auto___22832 = cljs.core.seq.call(null,seq__21124_22823);
if(temp__4425__auto___22832){
var seq__21124_22833__$1 = temp__4425__auto___22832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21124_22833__$1)){
var c__16879__auto___22834 = cljs.core.chunk_first.call(null,seq__21124_22833__$1);
var G__22835 = cljs.core.chunk_rest.call(null,seq__21124_22833__$1);
var G__22836 = c__16879__auto___22834;
var G__22837 = cljs.core.count.call(null,c__16879__auto___22834);
var G__22838 = (0);
seq__21124_22823 = G__22835;
chunk__21125_22824 = G__22836;
count__21126_22825 = G__22837;
i__21127_22826 = G__22838;
continue;
} else {
var child__18178__auto___22839 = cljs.core.first.call(null,seq__21124_22833__$1);
args__18177__auto__.push(child__18178__auto___22839);

var G__22840 = cljs.core.next.call(null,seq__21124_22833__$1);
var G__22841 = null;
var G__22842 = (0);
var G__22843 = (0);
seq__21124_22823 = G__22840;
chunk__21125_22824 = G__22841;
count__21126_22825 = G__22842;
i__21127_22826 = G__22843;
continue;
}
} else {
}
}
break;
}

return React.DOM.object.apply(null,args__18177__auto__);
});

flupot.dom.object.cljs$lang$maxFixedArity = (1);

flupot.dom.object.cljs$lang$applyTo = (function (seq21122){
var G__21123 = cljs.core.first.call(null,seq21122);
var seq21122__$1 = cljs.core.next.call(null,seq21122);
return flupot.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__21123,seq21122__$1);
});

flupot.dom.ol = (function flupot$dom$ol(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21130_22844 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21131_22845 = null;
var count__21132_22846 = (0);
var i__21133_22847 = (0);
while(true){
if((i__21133_22847 < count__21132_22846)){
var child__18178__auto___22848 = cljs.core._nth.call(null,chunk__21131_22845,i__21133_22847);
args__18177__auto__.push(child__18178__auto___22848);

var G__22849 = seq__21130_22844;
var G__22850 = chunk__21131_22845;
var G__22851 = count__21132_22846;
var G__22852 = (i__21133_22847 + (1));
seq__21130_22844 = G__22849;
chunk__21131_22845 = G__22850;
count__21132_22846 = G__22851;
i__21133_22847 = G__22852;
continue;
} else {
var temp__4425__auto___22853 = cljs.core.seq.call(null,seq__21130_22844);
if(temp__4425__auto___22853){
var seq__21130_22854__$1 = temp__4425__auto___22853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21130_22854__$1)){
var c__16879__auto___22855 = cljs.core.chunk_first.call(null,seq__21130_22854__$1);
var G__22856 = cljs.core.chunk_rest.call(null,seq__21130_22854__$1);
var G__22857 = c__16879__auto___22855;
var G__22858 = cljs.core.count.call(null,c__16879__auto___22855);
var G__22859 = (0);
seq__21130_22844 = G__22856;
chunk__21131_22845 = G__22857;
count__21132_22846 = G__22858;
i__21133_22847 = G__22859;
continue;
} else {
var child__18178__auto___22860 = cljs.core.first.call(null,seq__21130_22854__$1);
args__18177__auto__.push(child__18178__auto___22860);

var G__22861 = cljs.core.next.call(null,seq__21130_22854__$1);
var G__22862 = null;
var G__22863 = (0);
var G__22864 = (0);
seq__21130_22844 = G__22861;
chunk__21131_22845 = G__22862;
count__21132_22846 = G__22863;
i__21133_22847 = G__22864;
continue;
}
} else {
}
}
break;
}

return React.DOM.ol.apply(null,args__18177__auto__);
});

flupot.dom.ol.cljs$lang$maxFixedArity = (1);

flupot.dom.ol.cljs$lang$applyTo = (function (seq21128){
var G__21129 = cljs.core.first.call(null,seq21128);
var seq21128__$1 = cljs.core.next.call(null,seq21128);
return flupot.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__21129,seq21128__$1);
});

flupot.dom.optgroup = (function flupot$dom$optgroup(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21136_22865 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21137_22866 = null;
var count__21138_22867 = (0);
var i__21139_22868 = (0);
while(true){
if((i__21139_22868 < count__21138_22867)){
var child__18178__auto___22869 = cljs.core._nth.call(null,chunk__21137_22866,i__21139_22868);
args__18177__auto__.push(child__18178__auto___22869);

var G__22870 = seq__21136_22865;
var G__22871 = chunk__21137_22866;
var G__22872 = count__21138_22867;
var G__22873 = (i__21139_22868 + (1));
seq__21136_22865 = G__22870;
chunk__21137_22866 = G__22871;
count__21138_22867 = G__22872;
i__21139_22868 = G__22873;
continue;
} else {
var temp__4425__auto___22874 = cljs.core.seq.call(null,seq__21136_22865);
if(temp__4425__auto___22874){
var seq__21136_22875__$1 = temp__4425__auto___22874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21136_22875__$1)){
var c__16879__auto___22876 = cljs.core.chunk_first.call(null,seq__21136_22875__$1);
var G__22877 = cljs.core.chunk_rest.call(null,seq__21136_22875__$1);
var G__22878 = c__16879__auto___22876;
var G__22879 = cljs.core.count.call(null,c__16879__auto___22876);
var G__22880 = (0);
seq__21136_22865 = G__22877;
chunk__21137_22866 = G__22878;
count__21138_22867 = G__22879;
i__21139_22868 = G__22880;
continue;
} else {
var child__18178__auto___22881 = cljs.core.first.call(null,seq__21136_22875__$1);
args__18177__auto__.push(child__18178__auto___22881);

var G__22882 = cljs.core.next.call(null,seq__21136_22875__$1);
var G__22883 = null;
var G__22884 = (0);
var G__22885 = (0);
seq__21136_22865 = G__22882;
chunk__21137_22866 = G__22883;
count__21138_22867 = G__22884;
i__21139_22868 = G__22885;
continue;
}
} else {
}
}
break;
}

return React.DOM.optgroup.apply(null,args__18177__auto__);
});

flupot.dom.optgroup.cljs$lang$maxFixedArity = (1);

flupot.dom.optgroup.cljs$lang$applyTo = (function (seq21134){
var G__21135 = cljs.core.first.call(null,seq21134);
var seq21134__$1 = cljs.core.next.call(null,seq21134);
return flupot.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__21135,seq21134__$1);
});

flupot.dom.option = (function flupot$dom$option(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21142_22886 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21143_22887 = null;
var count__21144_22888 = (0);
var i__21145_22889 = (0);
while(true){
if((i__21145_22889 < count__21144_22888)){
var child__18178__auto___22890 = cljs.core._nth.call(null,chunk__21143_22887,i__21145_22889);
args__18177__auto__.push(child__18178__auto___22890);

var G__22891 = seq__21142_22886;
var G__22892 = chunk__21143_22887;
var G__22893 = count__21144_22888;
var G__22894 = (i__21145_22889 + (1));
seq__21142_22886 = G__22891;
chunk__21143_22887 = G__22892;
count__21144_22888 = G__22893;
i__21145_22889 = G__22894;
continue;
} else {
var temp__4425__auto___22895 = cljs.core.seq.call(null,seq__21142_22886);
if(temp__4425__auto___22895){
var seq__21142_22896__$1 = temp__4425__auto___22895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21142_22896__$1)){
var c__16879__auto___22897 = cljs.core.chunk_first.call(null,seq__21142_22896__$1);
var G__22898 = cljs.core.chunk_rest.call(null,seq__21142_22896__$1);
var G__22899 = c__16879__auto___22897;
var G__22900 = cljs.core.count.call(null,c__16879__auto___22897);
var G__22901 = (0);
seq__21142_22886 = G__22898;
chunk__21143_22887 = G__22899;
count__21144_22888 = G__22900;
i__21145_22889 = G__22901;
continue;
} else {
var child__18178__auto___22902 = cljs.core.first.call(null,seq__21142_22896__$1);
args__18177__auto__.push(child__18178__auto___22902);

var G__22903 = cljs.core.next.call(null,seq__21142_22896__$1);
var G__22904 = null;
var G__22905 = (0);
var G__22906 = (0);
seq__21142_22886 = G__22903;
chunk__21143_22887 = G__22904;
count__21144_22888 = G__22905;
i__21145_22889 = G__22906;
continue;
}
} else {
}
}
break;
}

return React.DOM.option.apply(null,args__18177__auto__);
});

flupot.dom.option.cljs$lang$maxFixedArity = (1);

flupot.dom.option.cljs$lang$applyTo = (function (seq21140){
var G__21141 = cljs.core.first.call(null,seq21140);
var seq21140__$1 = cljs.core.next.call(null,seq21140);
return flupot.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__21141,seq21140__$1);
});

flupot.dom.output = (function flupot$dom$output(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21148_22907 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21149_22908 = null;
var count__21150_22909 = (0);
var i__21151_22910 = (0);
while(true){
if((i__21151_22910 < count__21150_22909)){
var child__18178__auto___22911 = cljs.core._nth.call(null,chunk__21149_22908,i__21151_22910);
args__18177__auto__.push(child__18178__auto___22911);

var G__22912 = seq__21148_22907;
var G__22913 = chunk__21149_22908;
var G__22914 = count__21150_22909;
var G__22915 = (i__21151_22910 + (1));
seq__21148_22907 = G__22912;
chunk__21149_22908 = G__22913;
count__21150_22909 = G__22914;
i__21151_22910 = G__22915;
continue;
} else {
var temp__4425__auto___22916 = cljs.core.seq.call(null,seq__21148_22907);
if(temp__4425__auto___22916){
var seq__21148_22917__$1 = temp__4425__auto___22916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21148_22917__$1)){
var c__16879__auto___22918 = cljs.core.chunk_first.call(null,seq__21148_22917__$1);
var G__22919 = cljs.core.chunk_rest.call(null,seq__21148_22917__$1);
var G__22920 = c__16879__auto___22918;
var G__22921 = cljs.core.count.call(null,c__16879__auto___22918);
var G__22922 = (0);
seq__21148_22907 = G__22919;
chunk__21149_22908 = G__22920;
count__21150_22909 = G__22921;
i__21151_22910 = G__22922;
continue;
} else {
var child__18178__auto___22923 = cljs.core.first.call(null,seq__21148_22917__$1);
args__18177__auto__.push(child__18178__auto___22923);

var G__22924 = cljs.core.next.call(null,seq__21148_22917__$1);
var G__22925 = null;
var G__22926 = (0);
var G__22927 = (0);
seq__21148_22907 = G__22924;
chunk__21149_22908 = G__22925;
count__21150_22909 = G__22926;
i__21151_22910 = G__22927;
continue;
}
} else {
}
}
break;
}

return React.DOM.output.apply(null,args__18177__auto__);
});

flupot.dom.output.cljs$lang$maxFixedArity = (1);

flupot.dom.output.cljs$lang$applyTo = (function (seq21146){
var G__21147 = cljs.core.first.call(null,seq21146);
var seq21146__$1 = cljs.core.next.call(null,seq21146);
return flupot.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__21147,seq21146__$1);
});

flupot.dom.p = (function flupot$dom$p(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21154_22928 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21155_22929 = null;
var count__21156_22930 = (0);
var i__21157_22931 = (0);
while(true){
if((i__21157_22931 < count__21156_22930)){
var child__18178__auto___22932 = cljs.core._nth.call(null,chunk__21155_22929,i__21157_22931);
args__18177__auto__.push(child__18178__auto___22932);

var G__22933 = seq__21154_22928;
var G__22934 = chunk__21155_22929;
var G__22935 = count__21156_22930;
var G__22936 = (i__21157_22931 + (1));
seq__21154_22928 = G__22933;
chunk__21155_22929 = G__22934;
count__21156_22930 = G__22935;
i__21157_22931 = G__22936;
continue;
} else {
var temp__4425__auto___22937 = cljs.core.seq.call(null,seq__21154_22928);
if(temp__4425__auto___22937){
var seq__21154_22938__$1 = temp__4425__auto___22937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21154_22938__$1)){
var c__16879__auto___22939 = cljs.core.chunk_first.call(null,seq__21154_22938__$1);
var G__22940 = cljs.core.chunk_rest.call(null,seq__21154_22938__$1);
var G__22941 = c__16879__auto___22939;
var G__22942 = cljs.core.count.call(null,c__16879__auto___22939);
var G__22943 = (0);
seq__21154_22928 = G__22940;
chunk__21155_22929 = G__22941;
count__21156_22930 = G__22942;
i__21157_22931 = G__22943;
continue;
} else {
var child__18178__auto___22944 = cljs.core.first.call(null,seq__21154_22938__$1);
args__18177__auto__.push(child__18178__auto___22944);

var G__22945 = cljs.core.next.call(null,seq__21154_22938__$1);
var G__22946 = null;
var G__22947 = (0);
var G__22948 = (0);
seq__21154_22928 = G__22945;
chunk__21155_22929 = G__22946;
count__21156_22930 = G__22947;
i__21157_22931 = G__22948;
continue;
}
} else {
}
}
break;
}

return React.DOM.p.apply(null,args__18177__auto__);
});

flupot.dom.p.cljs$lang$maxFixedArity = (1);

flupot.dom.p.cljs$lang$applyTo = (function (seq21152){
var G__21153 = cljs.core.first.call(null,seq21152);
var seq21152__$1 = cljs.core.next.call(null,seq21152);
return flupot.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__21153,seq21152__$1);
});

flupot.dom.param = (function flupot$dom$param(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21160_22949 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21161_22950 = null;
var count__21162_22951 = (0);
var i__21163_22952 = (0);
while(true){
if((i__21163_22952 < count__21162_22951)){
var child__18178__auto___22953 = cljs.core._nth.call(null,chunk__21161_22950,i__21163_22952);
args__18177__auto__.push(child__18178__auto___22953);

var G__22954 = seq__21160_22949;
var G__22955 = chunk__21161_22950;
var G__22956 = count__21162_22951;
var G__22957 = (i__21163_22952 + (1));
seq__21160_22949 = G__22954;
chunk__21161_22950 = G__22955;
count__21162_22951 = G__22956;
i__21163_22952 = G__22957;
continue;
} else {
var temp__4425__auto___22958 = cljs.core.seq.call(null,seq__21160_22949);
if(temp__4425__auto___22958){
var seq__21160_22959__$1 = temp__4425__auto___22958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21160_22959__$1)){
var c__16879__auto___22960 = cljs.core.chunk_first.call(null,seq__21160_22959__$1);
var G__22961 = cljs.core.chunk_rest.call(null,seq__21160_22959__$1);
var G__22962 = c__16879__auto___22960;
var G__22963 = cljs.core.count.call(null,c__16879__auto___22960);
var G__22964 = (0);
seq__21160_22949 = G__22961;
chunk__21161_22950 = G__22962;
count__21162_22951 = G__22963;
i__21163_22952 = G__22964;
continue;
} else {
var child__18178__auto___22965 = cljs.core.first.call(null,seq__21160_22959__$1);
args__18177__auto__.push(child__18178__auto___22965);

var G__22966 = cljs.core.next.call(null,seq__21160_22959__$1);
var G__22967 = null;
var G__22968 = (0);
var G__22969 = (0);
seq__21160_22949 = G__22966;
chunk__21161_22950 = G__22967;
count__21162_22951 = G__22968;
i__21163_22952 = G__22969;
continue;
}
} else {
}
}
break;
}

return React.DOM.param.apply(null,args__18177__auto__);
});

flupot.dom.param.cljs$lang$maxFixedArity = (1);

flupot.dom.param.cljs$lang$applyTo = (function (seq21158){
var G__21159 = cljs.core.first.call(null,seq21158);
var seq21158__$1 = cljs.core.next.call(null,seq21158);
return flupot.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__21159,seq21158__$1);
});

flupot.dom.picture = (function flupot$dom$picture(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21166_22970 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21167_22971 = null;
var count__21168_22972 = (0);
var i__21169_22973 = (0);
while(true){
if((i__21169_22973 < count__21168_22972)){
var child__18178__auto___22974 = cljs.core._nth.call(null,chunk__21167_22971,i__21169_22973);
args__18177__auto__.push(child__18178__auto___22974);

var G__22975 = seq__21166_22970;
var G__22976 = chunk__21167_22971;
var G__22977 = count__21168_22972;
var G__22978 = (i__21169_22973 + (1));
seq__21166_22970 = G__22975;
chunk__21167_22971 = G__22976;
count__21168_22972 = G__22977;
i__21169_22973 = G__22978;
continue;
} else {
var temp__4425__auto___22979 = cljs.core.seq.call(null,seq__21166_22970);
if(temp__4425__auto___22979){
var seq__21166_22980__$1 = temp__4425__auto___22979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21166_22980__$1)){
var c__16879__auto___22981 = cljs.core.chunk_first.call(null,seq__21166_22980__$1);
var G__22982 = cljs.core.chunk_rest.call(null,seq__21166_22980__$1);
var G__22983 = c__16879__auto___22981;
var G__22984 = cljs.core.count.call(null,c__16879__auto___22981);
var G__22985 = (0);
seq__21166_22970 = G__22982;
chunk__21167_22971 = G__22983;
count__21168_22972 = G__22984;
i__21169_22973 = G__22985;
continue;
} else {
var child__18178__auto___22986 = cljs.core.first.call(null,seq__21166_22980__$1);
args__18177__auto__.push(child__18178__auto___22986);

var G__22987 = cljs.core.next.call(null,seq__21166_22980__$1);
var G__22988 = null;
var G__22989 = (0);
var G__22990 = (0);
seq__21166_22970 = G__22987;
chunk__21167_22971 = G__22988;
count__21168_22972 = G__22989;
i__21169_22973 = G__22990;
continue;
}
} else {
}
}
break;
}

return React.DOM.picture.apply(null,args__18177__auto__);
});

flupot.dom.picture.cljs$lang$maxFixedArity = (1);

flupot.dom.picture.cljs$lang$applyTo = (function (seq21164){
var G__21165 = cljs.core.first.call(null,seq21164);
var seq21164__$1 = cljs.core.next.call(null,seq21164);
return flupot.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__21165,seq21164__$1);
});

flupot.dom.pre = (function flupot$dom$pre(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21172_22991 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21173_22992 = null;
var count__21174_22993 = (0);
var i__21175_22994 = (0);
while(true){
if((i__21175_22994 < count__21174_22993)){
var child__18178__auto___22995 = cljs.core._nth.call(null,chunk__21173_22992,i__21175_22994);
args__18177__auto__.push(child__18178__auto___22995);

var G__22996 = seq__21172_22991;
var G__22997 = chunk__21173_22992;
var G__22998 = count__21174_22993;
var G__22999 = (i__21175_22994 + (1));
seq__21172_22991 = G__22996;
chunk__21173_22992 = G__22997;
count__21174_22993 = G__22998;
i__21175_22994 = G__22999;
continue;
} else {
var temp__4425__auto___23000 = cljs.core.seq.call(null,seq__21172_22991);
if(temp__4425__auto___23000){
var seq__21172_23001__$1 = temp__4425__auto___23000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21172_23001__$1)){
var c__16879__auto___23002 = cljs.core.chunk_first.call(null,seq__21172_23001__$1);
var G__23003 = cljs.core.chunk_rest.call(null,seq__21172_23001__$1);
var G__23004 = c__16879__auto___23002;
var G__23005 = cljs.core.count.call(null,c__16879__auto___23002);
var G__23006 = (0);
seq__21172_22991 = G__23003;
chunk__21173_22992 = G__23004;
count__21174_22993 = G__23005;
i__21175_22994 = G__23006;
continue;
} else {
var child__18178__auto___23007 = cljs.core.first.call(null,seq__21172_23001__$1);
args__18177__auto__.push(child__18178__auto___23007);

var G__23008 = cljs.core.next.call(null,seq__21172_23001__$1);
var G__23009 = null;
var G__23010 = (0);
var G__23011 = (0);
seq__21172_22991 = G__23008;
chunk__21173_22992 = G__23009;
count__21174_22993 = G__23010;
i__21175_22994 = G__23011;
continue;
}
} else {
}
}
break;
}

return React.DOM.pre.apply(null,args__18177__auto__);
});

flupot.dom.pre.cljs$lang$maxFixedArity = (1);

flupot.dom.pre.cljs$lang$applyTo = (function (seq21170){
var G__21171 = cljs.core.first.call(null,seq21170);
var seq21170__$1 = cljs.core.next.call(null,seq21170);
return flupot.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__21171,seq21170__$1);
});

flupot.dom.progress = (function flupot$dom$progress(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21178_23012 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21179_23013 = null;
var count__21180_23014 = (0);
var i__21181_23015 = (0);
while(true){
if((i__21181_23015 < count__21180_23014)){
var child__18178__auto___23016 = cljs.core._nth.call(null,chunk__21179_23013,i__21181_23015);
args__18177__auto__.push(child__18178__auto___23016);

var G__23017 = seq__21178_23012;
var G__23018 = chunk__21179_23013;
var G__23019 = count__21180_23014;
var G__23020 = (i__21181_23015 + (1));
seq__21178_23012 = G__23017;
chunk__21179_23013 = G__23018;
count__21180_23014 = G__23019;
i__21181_23015 = G__23020;
continue;
} else {
var temp__4425__auto___23021 = cljs.core.seq.call(null,seq__21178_23012);
if(temp__4425__auto___23021){
var seq__21178_23022__$1 = temp__4425__auto___23021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21178_23022__$1)){
var c__16879__auto___23023 = cljs.core.chunk_first.call(null,seq__21178_23022__$1);
var G__23024 = cljs.core.chunk_rest.call(null,seq__21178_23022__$1);
var G__23025 = c__16879__auto___23023;
var G__23026 = cljs.core.count.call(null,c__16879__auto___23023);
var G__23027 = (0);
seq__21178_23012 = G__23024;
chunk__21179_23013 = G__23025;
count__21180_23014 = G__23026;
i__21181_23015 = G__23027;
continue;
} else {
var child__18178__auto___23028 = cljs.core.first.call(null,seq__21178_23022__$1);
args__18177__auto__.push(child__18178__auto___23028);

var G__23029 = cljs.core.next.call(null,seq__21178_23022__$1);
var G__23030 = null;
var G__23031 = (0);
var G__23032 = (0);
seq__21178_23012 = G__23029;
chunk__21179_23013 = G__23030;
count__21180_23014 = G__23031;
i__21181_23015 = G__23032;
continue;
}
} else {
}
}
break;
}

return React.DOM.progress.apply(null,args__18177__auto__);
});

flupot.dom.progress.cljs$lang$maxFixedArity = (1);

flupot.dom.progress.cljs$lang$applyTo = (function (seq21176){
var G__21177 = cljs.core.first.call(null,seq21176);
var seq21176__$1 = cljs.core.next.call(null,seq21176);
return flupot.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__21177,seq21176__$1);
});

flupot.dom.q = (function flupot$dom$q(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21184_23033 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21185_23034 = null;
var count__21186_23035 = (0);
var i__21187_23036 = (0);
while(true){
if((i__21187_23036 < count__21186_23035)){
var child__18178__auto___23037 = cljs.core._nth.call(null,chunk__21185_23034,i__21187_23036);
args__18177__auto__.push(child__18178__auto___23037);

var G__23038 = seq__21184_23033;
var G__23039 = chunk__21185_23034;
var G__23040 = count__21186_23035;
var G__23041 = (i__21187_23036 + (1));
seq__21184_23033 = G__23038;
chunk__21185_23034 = G__23039;
count__21186_23035 = G__23040;
i__21187_23036 = G__23041;
continue;
} else {
var temp__4425__auto___23042 = cljs.core.seq.call(null,seq__21184_23033);
if(temp__4425__auto___23042){
var seq__21184_23043__$1 = temp__4425__auto___23042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21184_23043__$1)){
var c__16879__auto___23044 = cljs.core.chunk_first.call(null,seq__21184_23043__$1);
var G__23045 = cljs.core.chunk_rest.call(null,seq__21184_23043__$1);
var G__23046 = c__16879__auto___23044;
var G__23047 = cljs.core.count.call(null,c__16879__auto___23044);
var G__23048 = (0);
seq__21184_23033 = G__23045;
chunk__21185_23034 = G__23046;
count__21186_23035 = G__23047;
i__21187_23036 = G__23048;
continue;
} else {
var child__18178__auto___23049 = cljs.core.first.call(null,seq__21184_23043__$1);
args__18177__auto__.push(child__18178__auto___23049);

var G__23050 = cljs.core.next.call(null,seq__21184_23043__$1);
var G__23051 = null;
var G__23052 = (0);
var G__23053 = (0);
seq__21184_23033 = G__23050;
chunk__21185_23034 = G__23051;
count__21186_23035 = G__23052;
i__21187_23036 = G__23053;
continue;
}
} else {
}
}
break;
}

return React.DOM.q.apply(null,args__18177__auto__);
});

flupot.dom.q.cljs$lang$maxFixedArity = (1);

flupot.dom.q.cljs$lang$applyTo = (function (seq21182){
var G__21183 = cljs.core.first.call(null,seq21182);
var seq21182__$1 = cljs.core.next.call(null,seq21182);
return flupot.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__21183,seq21182__$1);
});

flupot.dom.rp = (function flupot$dom$rp(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21190_23054 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21191_23055 = null;
var count__21192_23056 = (0);
var i__21193_23057 = (0);
while(true){
if((i__21193_23057 < count__21192_23056)){
var child__18178__auto___23058 = cljs.core._nth.call(null,chunk__21191_23055,i__21193_23057);
args__18177__auto__.push(child__18178__auto___23058);

var G__23059 = seq__21190_23054;
var G__23060 = chunk__21191_23055;
var G__23061 = count__21192_23056;
var G__23062 = (i__21193_23057 + (1));
seq__21190_23054 = G__23059;
chunk__21191_23055 = G__23060;
count__21192_23056 = G__23061;
i__21193_23057 = G__23062;
continue;
} else {
var temp__4425__auto___23063 = cljs.core.seq.call(null,seq__21190_23054);
if(temp__4425__auto___23063){
var seq__21190_23064__$1 = temp__4425__auto___23063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21190_23064__$1)){
var c__16879__auto___23065 = cljs.core.chunk_first.call(null,seq__21190_23064__$1);
var G__23066 = cljs.core.chunk_rest.call(null,seq__21190_23064__$1);
var G__23067 = c__16879__auto___23065;
var G__23068 = cljs.core.count.call(null,c__16879__auto___23065);
var G__23069 = (0);
seq__21190_23054 = G__23066;
chunk__21191_23055 = G__23067;
count__21192_23056 = G__23068;
i__21193_23057 = G__23069;
continue;
} else {
var child__18178__auto___23070 = cljs.core.first.call(null,seq__21190_23064__$1);
args__18177__auto__.push(child__18178__auto___23070);

var G__23071 = cljs.core.next.call(null,seq__21190_23064__$1);
var G__23072 = null;
var G__23073 = (0);
var G__23074 = (0);
seq__21190_23054 = G__23071;
chunk__21191_23055 = G__23072;
count__21192_23056 = G__23073;
i__21193_23057 = G__23074;
continue;
}
} else {
}
}
break;
}

return React.DOM.rp.apply(null,args__18177__auto__);
});

flupot.dom.rp.cljs$lang$maxFixedArity = (1);

flupot.dom.rp.cljs$lang$applyTo = (function (seq21188){
var G__21189 = cljs.core.first.call(null,seq21188);
var seq21188__$1 = cljs.core.next.call(null,seq21188);
return flupot.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__21189,seq21188__$1);
});

flupot.dom.rt = (function flupot$dom$rt(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21196_23075 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21197_23076 = null;
var count__21198_23077 = (0);
var i__21199_23078 = (0);
while(true){
if((i__21199_23078 < count__21198_23077)){
var child__18178__auto___23079 = cljs.core._nth.call(null,chunk__21197_23076,i__21199_23078);
args__18177__auto__.push(child__18178__auto___23079);

var G__23080 = seq__21196_23075;
var G__23081 = chunk__21197_23076;
var G__23082 = count__21198_23077;
var G__23083 = (i__21199_23078 + (1));
seq__21196_23075 = G__23080;
chunk__21197_23076 = G__23081;
count__21198_23077 = G__23082;
i__21199_23078 = G__23083;
continue;
} else {
var temp__4425__auto___23084 = cljs.core.seq.call(null,seq__21196_23075);
if(temp__4425__auto___23084){
var seq__21196_23085__$1 = temp__4425__auto___23084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21196_23085__$1)){
var c__16879__auto___23086 = cljs.core.chunk_first.call(null,seq__21196_23085__$1);
var G__23087 = cljs.core.chunk_rest.call(null,seq__21196_23085__$1);
var G__23088 = c__16879__auto___23086;
var G__23089 = cljs.core.count.call(null,c__16879__auto___23086);
var G__23090 = (0);
seq__21196_23075 = G__23087;
chunk__21197_23076 = G__23088;
count__21198_23077 = G__23089;
i__21199_23078 = G__23090;
continue;
} else {
var child__18178__auto___23091 = cljs.core.first.call(null,seq__21196_23085__$1);
args__18177__auto__.push(child__18178__auto___23091);

var G__23092 = cljs.core.next.call(null,seq__21196_23085__$1);
var G__23093 = null;
var G__23094 = (0);
var G__23095 = (0);
seq__21196_23075 = G__23092;
chunk__21197_23076 = G__23093;
count__21198_23077 = G__23094;
i__21199_23078 = G__23095;
continue;
}
} else {
}
}
break;
}

return React.DOM.rt.apply(null,args__18177__auto__);
});

flupot.dom.rt.cljs$lang$maxFixedArity = (1);

flupot.dom.rt.cljs$lang$applyTo = (function (seq21194){
var G__21195 = cljs.core.first.call(null,seq21194);
var seq21194__$1 = cljs.core.next.call(null,seq21194);
return flupot.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__21195,seq21194__$1);
});

flupot.dom.ruby = (function flupot$dom$ruby(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21202_23096 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21203_23097 = null;
var count__21204_23098 = (0);
var i__21205_23099 = (0);
while(true){
if((i__21205_23099 < count__21204_23098)){
var child__18178__auto___23100 = cljs.core._nth.call(null,chunk__21203_23097,i__21205_23099);
args__18177__auto__.push(child__18178__auto___23100);

var G__23101 = seq__21202_23096;
var G__23102 = chunk__21203_23097;
var G__23103 = count__21204_23098;
var G__23104 = (i__21205_23099 + (1));
seq__21202_23096 = G__23101;
chunk__21203_23097 = G__23102;
count__21204_23098 = G__23103;
i__21205_23099 = G__23104;
continue;
} else {
var temp__4425__auto___23105 = cljs.core.seq.call(null,seq__21202_23096);
if(temp__4425__auto___23105){
var seq__21202_23106__$1 = temp__4425__auto___23105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21202_23106__$1)){
var c__16879__auto___23107 = cljs.core.chunk_first.call(null,seq__21202_23106__$1);
var G__23108 = cljs.core.chunk_rest.call(null,seq__21202_23106__$1);
var G__23109 = c__16879__auto___23107;
var G__23110 = cljs.core.count.call(null,c__16879__auto___23107);
var G__23111 = (0);
seq__21202_23096 = G__23108;
chunk__21203_23097 = G__23109;
count__21204_23098 = G__23110;
i__21205_23099 = G__23111;
continue;
} else {
var child__18178__auto___23112 = cljs.core.first.call(null,seq__21202_23106__$1);
args__18177__auto__.push(child__18178__auto___23112);

var G__23113 = cljs.core.next.call(null,seq__21202_23106__$1);
var G__23114 = null;
var G__23115 = (0);
var G__23116 = (0);
seq__21202_23096 = G__23113;
chunk__21203_23097 = G__23114;
count__21204_23098 = G__23115;
i__21205_23099 = G__23116;
continue;
}
} else {
}
}
break;
}

return React.DOM.ruby.apply(null,args__18177__auto__);
});

flupot.dom.ruby.cljs$lang$maxFixedArity = (1);

flupot.dom.ruby.cljs$lang$applyTo = (function (seq21200){
var G__21201 = cljs.core.first.call(null,seq21200);
var seq21200__$1 = cljs.core.next.call(null,seq21200);
return flupot.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__21201,seq21200__$1);
});

flupot.dom.s = (function flupot$dom$s(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21208_23117 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21209_23118 = null;
var count__21210_23119 = (0);
var i__21211_23120 = (0);
while(true){
if((i__21211_23120 < count__21210_23119)){
var child__18178__auto___23121 = cljs.core._nth.call(null,chunk__21209_23118,i__21211_23120);
args__18177__auto__.push(child__18178__auto___23121);

var G__23122 = seq__21208_23117;
var G__23123 = chunk__21209_23118;
var G__23124 = count__21210_23119;
var G__23125 = (i__21211_23120 + (1));
seq__21208_23117 = G__23122;
chunk__21209_23118 = G__23123;
count__21210_23119 = G__23124;
i__21211_23120 = G__23125;
continue;
} else {
var temp__4425__auto___23126 = cljs.core.seq.call(null,seq__21208_23117);
if(temp__4425__auto___23126){
var seq__21208_23127__$1 = temp__4425__auto___23126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21208_23127__$1)){
var c__16879__auto___23128 = cljs.core.chunk_first.call(null,seq__21208_23127__$1);
var G__23129 = cljs.core.chunk_rest.call(null,seq__21208_23127__$1);
var G__23130 = c__16879__auto___23128;
var G__23131 = cljs.core.count.call(null,c__16879__auto___23128);
var G__23132 = (0);
seq__21208_23117 = G__23129;
chunk__21209_23118 = G__23130;
count__21210_23119 = G__23131;
i__21211_23120 = G__23132;
continue;
} else {
var child__18178__auto___23133 = cljs.core.first.call(null,seq__21208_23127__$1);
args__18177__auto__.push(child__18178__auto___23133);

var G__23134 = cljs.core.next.call(null,seq__21208_23127__$1);
var G__23135 = null;
var G__23136 = (0);
var G__23137 = (0);
seq__21208_23117 = G__23134;
chunk__21209_23118 = G__23135;
count__21210_23119 = G__23136;
i__21211_23120 = G__23137;
continue;
}
} else {
}
}
break;
}

return React.DOM.s.apply(null,args__18177__auto__);
});

flupot.dom.s.cljs$lang$maxFixedArity = (1);

flupot.dom.s.cljs$lang$applyTo = (function (seq21206){
var G__21207 = cljs.core.first.call(null,seq21206);
var seq21206__$1 = cljs.core.next.call(null,seq21206);
return flupot.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__21207,seq21206__$1);
});

flupot.dom.samp = (function flupot$dom$samp(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21214_23138 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21215_23139 = null;
var count__21216_23140 = (0);
var i__21217_23141 = (0);
while(true){
if((i__21217_23141 < count__21216_23140)){
var child__18178__auto___23142 = cljs.core._nth.call(null,chunk__21215_23139,i__21217_23141);
args__18177__auto__.push(child__18178__auto___23142);

var G__23143 = seq__21214_23138;
var G__23144 = chunk__21215_23139;
var G__23145 = count__21216_23140;
var G__23146 = (i__21217_23141 + (1));
seq__21214_23138 = G__23143;
chunk__21215_23139 = G__23144;
count__21216_23140 = G__23145;
i__21217_23141 = G__23146;
continue;
} else {
var temp__4425__auto___23147 = cljs.core.seq.call(null,seq__21214_23138);
if(temp__4425__auto___23147){
var seq__21214_23148__$1 = temp__4425__auto___23147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21214_23148__$1)){
var c__16879__auto___23149 = cljs.core.chunk_first.call(null,seq__21214_23148__$1);
var G__23150 = cljs.core.chunk_rest.call(null,seq__21214_23148__$1);
var G__23151 = c__16879__auto___23149;
var G__23152 = cljs.core.count.call(null,c__16879__auto___23149);
var G__23153 = (0);
seq__21214_23138 = G__23150;
chunk__21215_23139 = G__23151;
count__21216_23140 = G__23152;
i__21217_23141 = G__23153;
continue;
} else {
var child__18178__auto___23154 = cljs.core.first.call(null,seq__21214_23148__$1);
args__18177__auto__.push(child__18178__auto___23154);

var G__23155 = cljs.core.next.call(null,seq__21214_23148__$1);
var G__23156 = null;
var G__23157 = (0);
var G__23158 = (0);
seq__21214_23138 = G__23155;
chunk__21215_23139 = G__23156;
count__21216_23140 = G__23157;
i__21217_23141 = G__23158;
continue;
}
} else {
}
}
break;
}

return React.DOM.samp.apply(null,args__18177__auto__);
});

flupot.dom.samp.cljs$lang$maxFixedArity = (1);

flupot.dom.samp.cljs$lang$applyTo = (function (seq21212){
var G__21213 = cljs.core.first.call(null,seq21212);
var seq21212__$1 = cljs.core.next.call(null,seq21212);
return flupot.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__21213,seq21212__$1);
});

flupot.dom.script = (function flupot$dom$script(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21220_23159 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21221_23160 = null;
var count__21222_23161 = (0);
var i__21223_23162 = (0);
while(true){
if((i__21223_23162 < count__21222_23161)){
var child__18178__auto___23163 = cljs.core._nth.call(null,chunk__21221_23160,i__21223_23162);
args__18177__auto__.push(child__18178__auto___23163);

var G__23164 = seq__21220_23159;
var G__23165 = chunk__21221_23160;
var G__23166 = count__21222_23161;
var G__23167 = (i__21223_23162 + (1));
seq__21220_23159 = G__23164;
chunk__21221_23160 = G__23165;
count__21222_23161 = G__23166;
i__21223_23162 = G__23167;
continue;
} else {
var temp__4425__auto___23168 = cljs.core.seq.call(null,seq__21220_23159);
if(temp__4425__auto___23168){
var seq__21220_23169__$1 = temp__4425__auto___23168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21220_23169__$1)){
var c__16879__auto___23170 = cljs.core.chunk_first.call(null,seq__21220_23169__$1);
var G__23171 = cljs.core.chunk_rest.call(null,seq__21220_23169__$1);
var G__23172 = c__16879__auto___23170;
var G__23173 = cljs.core.count.call(null,c__16879__auto___23170);
var G__23174 = (0);
seq__21220_23159 = G__23171;
chunk__21221_23160 = G__23172;
count__21222_23161 = G__23173;
i__21223_23162 = G__23174;
continue;
} else {
var child__18178__auto___23175 = cljs.core.first.call(null,seq__21220_23169__$1);
args__18177__auto__.push(child__18178__auto___23175);

var G__23176 = cljs.core.next.call(null,seq__21220_23169__$1);
var G__23177 = null;
var G__23178 = (0);
var G__23179 = (0);
seq__21220_23159 = G__23176;
chunk__21221_23160 = G__23177;
count__21222_23161 = G__23178;
i__21223_23162 = G__23179;
continue;
}
} else {
}
}
break;
}

return React.DOM.script.apply(null,args__18177__auto__);
});

flupot.dom.script.cljs$lang$maxFixedArity = (1);

flupot.dom.script.cljs$lang$applyTo = (function (seq21218){
var G__21219 = cljs.core.first.call(null,seq21218);
var seq21218__$1 = cljs.core.next.call(null,seq21218);
return flupot.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__21219,seq21218__$1);
});

flupot.dom.section = (function flupot$dom$section(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21226_23180 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21227_23181 = null;
var count__21228_23182 = (0);
var i__21229_23183 = (0);
while(true){
if((i__21229_23183 < count__21228_23182)){
var child__18178__auto___23184 = cljs.core._nth.call(null,chunk__21227_23181,i__21229_23183);
args__18177__auto__.push(child__18178__auto___23184);

var G__23185 = seq__21226_23180;
var G__23186 = chunk__21227_23181;
var G__23187 = count__21228_23182;
var G__23188 = (i__21229_23183 + (1));
seq__21226_23180 = G__23185;
chunk__21227_23181 = G__23186;
count__21228_23182 = G__23187;
i__21229_23183 = G__23188;
continue;
} else {
var temp__4425__auto___23189 = cljs.core.seq.call(null,seq__21226_23180);
if(temp__4425__auto___23189){
var seq__21226_23190__$1 = temp__4425__auto___23189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21226_23190__$1)){
var c__16879__auto___23191 = cljs.core.chunk_first.call(null,seq__21226_23190__$1);
var G__23192 = cljs.core.chunk_rest.call(null,seq__21226_23190__$1);
var G__23193 = c__16879__auto___23191;
var G__23194 = cljs.core.count.call(null,c__16879__auto___23191);
var G__23195 = (0);
seq__21226_23180 = G__23192;
chunk__21227_23181 = G__23193;
count__21228_23182 = G__23194;
i__21229_23183 = G__23195;
continue;
} else {
var child__18178__auto___23196 = cljs.core.first.call(null,seq__21226_23190__$1);
args__18177__auto__.push(child__18178__auto___23196);

var G__23197 = cljs.core.next.call(null,seq__21226_23190__$1);
var G__23198 = null;
var G__23199 = (0);
var G__23200 = (0);
seq__21226_23180 = G__23197;
chunk__21227_23181 = G__23198;
count__21228_23182 = G__23199;
i__21229_23183 = G__23200;
continue;
}
} else {
}
}
break;
}

return React.DOM.section.apply(null,args__18177__auto__);
});

flupot.dom.section.cljs$lang$maxFixedArity = (1);

flupot.dom.section.cljs$lang$applyTo = (function (seq21224){
var G__21225 = cljs.core.first.call(null,seq21224);
var seq21224__$1 = cljs.core.next.call(null,seq21224);
return flupot.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__21225,seq21224__$1);
});

flupot.dom.select = (function flupot$dom$select(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21232_23201 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21233_23202 = null;
var count__21234_23203 = (0);
var i__21235_23204 = (0);
while(true){
if((i__21235_23204 < count__21234_23203)){
var child__18178__auto___23205 = cljs.core._nth.call(null,chunk__21233_23202,i__21235_23204);
args__18177__auto__.push(child__18178__auto___23205);

var G__23206 = seq__21232_23201;
var G__23207 = chunk__21233_23202;
var G__23208 = count__21234_23203;
var G__23209 = (i__21235_23204 + (1));
seq__21232_23201 = G__23206;
chunk__21233_23202 = G__23207;
count__21234_23203 = G__23208;
i__21235_23204 = G__23209;
continue;
} else {
var temp__4425__auto___23210 = cljs.core.seq.call(null,seq__21232_23201);
if(temp__4425__auto___23210){
var seq__21232_23211__$1 = temp__4425__auto___23210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21232_23211__$1)){
var c__16879__auto___23212 = cljs.core.chunk_first.call(null,seq__21232_23211__$1);
var G__23213 = cljs.core.chunk_rest.call(null,seq__21232_23211__$1);
var G__23214 = c__16879__auto___23212;
var G__23215 = cljs.core.count.call(null,c__16879__auto___23212);
var G__23216 = (0);
seq__21232_23201 = G__23213;
chunk__21233_23202 = G__23214;
count__21234_23203 = G__23215;
i__21235_23204 = G__23216;
continue;
} else {
var child__18178__auto___23217 = cljs.core.first.call(null,seq__21232_23211__$1);
args__18177__auto__.push(child__18178__auto___23217);

var G__23218 = cljs.core.next.call(null,seq__21232_23211__$1);
var G__23219 = null;
var G__23220 = (0);
var G__23221 = (0);
seq__21232_23201 = G__23218;
chunk__21233_23202 = G__23219;
count__21234_23203 = G__23220;
i__21235_23204 = G__23221;
continue;
}
} else {
}
}
break;
}

return React.DOM.select.apply(null,args__18177__auto__);
});

flupot.dom.select.cljs$lang$maxFixedArity = (1);

flupot.dom.select.cljs$lang$applyTo = (function (seq21230){
var G__21231 = cljs.core.first.call(null,seq21230);
var seq21230__$1 = cljs.core.next.call(null,seq21230);
return flupot.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__21231,seq21230__$1);
});

flupot.dom.small = (function flupot$dom$small(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21238_23222 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21239_23223 = null;
var count__21240_23224 = (0);
var i__21241_23225 = (0);
while(true){
if((i__21241_23225 < count__21240_23224)){
var child__18178__auto___23226 = cljs.core._nth.call(null,chunk__21239_23223,i__21241_23225);
args__18177__auto__.push(child__18178__auto___23226);

var G__23227 = seq__21238_23222;
var G__23228 = chunk__21239_23223;
var G__23229 = count__21240_23224;
var G__23230 = (i__21241_23225 + (1));
seq__21238_23222 = G__23227;
chunk__21239_23223 = G__23228;
count__21240_23224 = G__23229;
i__21241_23225 = G__23230;
continue;
} else {
var temp__4425__auto___23231 = cljs.core.seq.call(null,seq__21238_23222);
if(temp__4425__auto___23231){
var seq__21238_23232__$1 = temp__4425__auto___23231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21238_23232__$1)){
var c__16879__auto___23233 = cljs.core.chunk_first.call(null,seq__21238_23232__$1);
var G__23234 = cljs.core.chunk_rest.call(null,seq__21238_23232__$1);
var G__23235 = c__16879__auto___23233;
var G__23236 = cljs.core.count.call(null,c__16879__auto___23233);
var G__23237 = (0);
seq__21238_23222 = G__23234;
chunk__21239_23223 = G__23235;
count__21240_23224 = G__23236;
i__21241_23225 = G__23237;
continue;
} else {
var child__18178__auto___23238 = cljs.core.first.call(null,seq__21238_23232__$1);
args__18177__auto__.push(child__18178__auto___23238);

var G__23239 = cljs.core.next.call(null,seq__21238_23232__$1);
var G__23240 = null;
var G__23241 = (0);
var G__23242 = (0);
seq__21238_23222 = G__23239;
chunk__21239_23223 = G__23240;
count__21240_23224 = G__23241;
i__21241_23225 = G__23242;
continue;
}
} else {
}
}
break;
}

return React.DOM.small.apply(null,args__18177__auto__);
});

flupot.dom.small.cljs$lang$maxFixedArity = (1);

flupot.dom.small.cljs$lang$applyTo = (function (seq21236){
var G__21237 = cljs.core.first.call(null,seq21236);
var seq21236__$1 = cljs.core.next.call(null,seq21236);
return flupot.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__21237,seq21236__$1);
});

flupot.dom.source = (function flupot$dom$source(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21244_23243 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21245_23244 = null;
var count__21246_23245 = (0);
var i__21247_23246 = (0);
while(true){
if((i__21247_23246 < count__21246_23245)){
var child__18178__auto___23247 = cljs.core._nth.call(null,chunk__21245_23244,i__21247_23246);
args__18177__auto__.push(child__18178__auto___23247);

var G__23248 = seq__21244_23243;
var G__23249 = chunk__21245_23244;
var G__23250 = count__21246_23245;
var G__23251 = (i__21247_23246 + (1));
seq__21244_23243 = G__23248;
chunk__21245_23244 = G__23249;
count__21246_23245 = G__23250;
i__21247_23246 = G__23251;
continue;
} else {
var temp__4425__auto___23252 = cljs.core.seq.call(null,seq__21244_23243);
if(temp__4425__auto___23252){
var seq__21244_23253__$1 = temp__4425__auto___23252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21244_23253__$1)){
var c__16879__auto___23254 = cljs.core.chunk_first.call(null,seq__21244_23253__$1);
var G__23255 = cljs.core.chunk_rest.call(null,seq__21244_23253__$1);
var G__23256 = c__16879__auto___23254;
var G__23257 = cljs.core.count.call(null,c__16879__auto___23254);
var G__23258 = (0);
seq__21244_23243 = G__23255;
chunk__21245_23244 = G__23256;
count__21246_23245 = G__23257;
i__21247_23246 = G__23258;
continue;
} else {
var child__18178__auto___23259 = cljs.core.first.call(null,seq__21244_23253__$1);
args__18177__auto__.push(child__18178__auto___23259);

var G__23260 = cljs.core.next.call(null,seq__21244_23253__$1);
var G__23261 = null;
var G__23262 = (0);
var G__23263 = (0);
seq__21244_23243 = G__23260;
chunk__21245_23244 = G__23261;
count__21246_23245 = G__23262;
i__21247_23246 = G__23263;
continue;
}
} else {
}
}
break;
}

return React.DOM.source.apply(null,args__18177__auto__);
});

flupot.dom.source.cljs$lang$maxFixedArity = (1);

flupot.dom.source.cljs$lang$applyTo = (function (seq21242){
var G__21243 = cljs.core.first.call(null,seq21242);
var seq21242__$1 = cljs.core.next.call(null,seq21242);
return flupot.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__21243,seq21242__$1);
});

flupot.dom.span = (function flupot$dom$span(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21250_23264 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21251_23265 = null;
var count__21252_23266 = (0);
var i__21253_23267 = (0);
while(true){
if((i__21253_23267 < count__21252_23266)){
var child__18178__auto___23268 = cljs.core._nth.call(null,chunk__21251_23265,i__21253_23267);
args__18177__auto__.push(child__18178__auto___23268);

var G__23269 = seq__21250_23264;
var G__23270 = chunk__21251_23265;
var G__23271 = count__21252_23266;
var G__23272 = (i__21253_23267 + (1));
seq__21250_23264 = G__23269;
chunk__21251_23265 = G__23270;
count__21252_23266 = G__23271;
i__21253_23267 = G__23272;
continue;
} else {
var temp__4425__auto___23273 = cljs.core.seq.call(null,seq__21250_23264);
if(temp__4425__auto___23273){
var seq__21250_23274__$1 = temp__4425__auto___23273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21250_23274__$1)){
var c__16879__auto___23275 = cljs.core.chunk_first.call(null,seq__21250_23274__$1);
var G__23276 = cljs.core.chunk_rest.call(null,seq__21250_23274__$1);
var G__23277 = c__16879__auto___23275;
var G__23278 = cljs.core.count.call(null,c__16879__auto___23275);
var G__23279 = (0);
seq__21250_23264 = G__23276;
chunk__21251_23265 = G__23277;
count__21252_23266 = G__23278;
i__21253_23267 = G__23279;
continue;
} else {
var child__18178__auto___23280 = cljs.core.first.call(null,seq__21250_23274__$1);
args__18177__auto__.push(child__18178__auto___23280);

var G__23281 = cljs.core.next.call(null,seq__21250_23274__$1);
var G__23282 = null;
var G__23283 = (0);
var G__23284 = (0);
seq__21250_23264 = G__23281;
chunk__21251_23265 = G__23282;
count__21252_23266 = G__23283;
i__21253_23267 = G__23284;
continue;
}
} else {
}
}
break;
}

return React.DOM.span.apply(null,args__18177__auto__);
});

flupot.dom.span.cljs$lang$maxFixedArity = (1);

flupot.dom.span.cljs$lang$applyTo = (function (seq21248){
var G__21249 = cljs.core.first.call(null,seq21248);
var seq21248__$1 = cljs.core.next.call(null,seq21248);
return flupot.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__21249,seq21248__$1);
});

flupot.dom.strong = (function flupot$dom$strong(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21256_23285 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21257_23286 = null;
var count__21258_23287 = (0);
var i__21259_23288 = (0);
while(true){
if((i__21259_23288 < count__21258_23287)){
var child__18178__auto___23289 = cljs.core._nth.call(null,chunk__21257_23286,i__21259_23288);
args__18177__auto__.push(child__18178__auto___23289);

var G__23290 = seq__21256_23285;
var G__23291 = chunk__21257_23286;
var G__23292 = count__21258_23287;
var G__23293 = (i__21259_23288 + (1));
seq__21256_23285 = G__23290;
chunk__21257_23286 = G__23291;
count__21258_23287 = G__23292;
i__21259_23288 = G__23293;
continue;
} else {
var temp__4425__auto___23294 = cljs.core.seq.call(null,seq__21256_23285);
if(temp__4425__auto___23294){
var seq__21256_23295__$1 = temp__4425__auto___23294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21256_23295__$1)){
var c__16879__auto___23296 = cljs.core.chunk_first.call(null,seq__21256_23295__$1);
var G__23297 = cljs.core.chunk_rest.call(null,seq__21256_23295__$1);
var G__23298 = c__16879__auto___23296;
var G__23299 = cljs.core.count.call(null,c__16879__auto___23296);
var G__23300 = (0);
seq__21256_23285 = G__23297;
chunk__21257_23286 = G__23298;
count__21258_23287 = G__23299;
i__21259_23288 = G__23300;
continue;
} else {
var child__18178__auto___23301 = cljs.core.first.call(null,seq__21256_23295__$1);
args__18177__auto__.push(child__18178__auto___23301);

var G__23302 = cljs.core.next.call(null,seq__21256_23295__$1);
var G__23303 = null;
var G__23304 = (0);
var G__23305 = (0);
seq__21256_23285 = G__23302;
chunk__21257_23286 = G__23303;
count__21258_23287 = G__23304;
i__21259_23288 = G__23305;
continue;
}
} else {
}
}
break;
}

return React.DOM.strong.apply(null,args__18177__auto__);
});

flupot.dom.strong.cljs$lang$maxFixedArity = (1);

flupot.dom.strong.cljs$lang$applyTo = (function (seq21254){
var G__21255 = cljs.core.first.call(null,seq21254);
var seq21254__$1 = cljs.core.next.call(null,seq21254);
return flupot.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__21255,seq21254__$1);
});

flupot.dom.style = (function flupot$dom$style(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21262_23306 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21263_23307 = null;
var count__21264_23308 = (0);
var i__21265_23309 = (0);
while(true){
if((i__21265_23309 < count__21264_23308)){
var child__18178__auto___23310 = cljs.core._nth.call(null,chunk__21263_23307,i__21265_23309);
args__18177__auto__.push(child__18178__auto___23310);

var G__23311 = seq__21262_23306;
var G__23312 = chunk__21263_23307;
var G__23313 = count__21264_23308;
var G__23314 = (i__21265_23309 + (1));
seq__21262_23306 = G__23311;
chunk__21263_23307 = G__23312;
count__21264_23308 = G__23313;
i__21265_23309 = G__23314;
continue;
} else {
var temp__4425__auto___23315 = cljs.core.seq.call(null,seq__21262_23306);
if(temp__4425__auto___23315){
var seq__21262_23316__$1 = temp__4425__auto___23315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21262_23316__$1)){
var c__16879__auto___23317 = cljs.core.chunk_first.call(null,seq__21262_23316__$1);
var G__23318 = cljs.core.chunk_rest.call(null,seq__21262_23316__$1);
var G__23319 = c__16879__auto___23317;
var G__23320 = cljs.core.count.call(null,c__16879__auto___23317);
var G__23321 = (0);
seq__21262_23306 = G__23318;
chunk__21263_23307 = G__23319;
count__21264_23308 = G__23320;
i__21265_23309 = G__23321;
continue;
} else {
var child__18178__auto___23322 = cljs.core.first.call(null,seq__21262_23316__$1);
args__18177__auto__.push(child__18178__auto___23322);

var G__23323 = cljs.core.next.call(null,seq__21262_23316__$1);
var G__23324 = null;
var G__23325 = (0);
var G__23326 = (0);
seq__21262_23306 = G__23323;
chunk__21263_23307 = G__23324;
count__21264_23308 = G__23325;
i__21265_23309 = G__23326;
continue;
}
} else {
}
}
break;
}

return React.DOM.style.apply(null,args__18177__auto__);
});

flupot.dom.style.cljs$lang$maxFixedArity = (1);

flupot.dom.style.cljs$lang$applyTo = (function (seq21260){
var G__21261 = cljs.core.first.call(null,seq21260);
var seq21260__$1 = cljs.core.next.call(null,seq21260);
return flupot.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__21261,seq21260__$1);
});

flupot.dom.sub = (function flupot$dom$sub(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21268_23327 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21269_23328 = null;
var count__21270_23329 = (0);
var i__21271_23330 = (0);
while(true){
if((i__21271_23330 < count__21270_23329)){
var child__18178__auto___23331 = cljs.core._nth.call(null,chunk__21269_23328,i__21271_23330);
args__18177__auto__.push(child__18178__auto___23331);

var G__23332 = seq__21268_23327;
var G__23333 = chunk__21269_23328;
var G__23334 = count__21270_23329;
var G__23335 = (i__21271_23330 + (1));
seq__21268_23327 = G__23332;
chunk__21269_23328 = G__23333;
count__21270_23329 = G__23334;
i__21271_23330 = G__23335;
continue;
} else {
var temp__4425__auto___23336 = cljs.core.seq.call(null,seq__21268_23327);
if(temp__4425__auto___23336){
var seq__21268_23337__$1 = temp__4425__auto___23336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21268_23337__$1)){
var c__16879__auto___23338 = cljs.core.chunk_first.call(null,seq__21268_23337__$1);
var G__23339 = cljs.core.chunk_rest.call(null,seq__21268_23337__$1);
var G__23340 = c__16879__auto___23338;
var G__23341 = cljs.core.count.call(null,c__16879__auto___23338);
var G__23342 = (0);
seq__21268_23327 = G__23339;
chunk__21269_23328 = G__23340;
count__21270_23329 = G__23341;
i__21271_23330 = G__23342;
continue;
} else {
var child__18178__auto___23343 = cljs.core.first.call(null,seq__21268_23337__$1);
args__18177__auto__.push(child__18178__auto___23343);

var G__23344 = cljs.core.next.call(null,seq__21268_23337__$1);
var G__23345 = null;
var G__23346 = (0);
var G__23347 = (0);
seq__21268_23327 = G__23344;
chunk__21269_23328 = G__23345;
count__21270_23329 = G__23346;
i__21271_23330 = G__23347;
continue;
}
} else {
}
}
break;
}

return React.DOM.sub.apply(null,args__18177__auto__);
});

flupot.dom.sub.cljs$lang$maxFixedArity = (1);

flupot.dom.sub.cljs$lang$applyTo = (function (seq21266){
var G__21267 = cljs.core.first.call(null,seq21266);
var seq21266__$1 = cljs.core.next.call(null,seq21266);
return flupot.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__21267,seq21266__$1);
});

flupot.dom.summary = (function flupot$dom$summary(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21274_23348 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21275_23349 = null;
var count__21276_23350 = (0);
var i__21277_23351 = (0);
while(true){
if((i__21277_23351 < count__21276_23350)){
var child__18178__auto___23352 = cljs.core._nth.call(null,chunk__21275_23349,i__21277_23351);
args__18177__auto__.push(child__18178__auto___23352);

var G__23353 = seq__21274_23348;
var G__23354 = chunk__21275_23349;
var G__23355 = count__21276_23350;
var G__23356 = (i__21277_23351 + (1));
seq__21274_23348 = G__23353;
chunk__21275_23349 = G__23354;
count__21276_23350 = G__23355;
i__21277_23351 = G__23356;
continue;
} else {
var temp__4425__auto___23357 = cljs.core.seq.call(null,seq__21274_23348);
if(temp__4425__auto___23357){
var seq__21274_23358__$1 = temp__4425__auto___23357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21274_23358__$1)){
var c__16879__auto___23359 = cljs.core.chunk_first.call(null,seq__21274_23358__$1);
var G__23360 = cljs.core.chunk_rest.call(null,seq__21274_23358__$1);
var G__23361 = c__16879__auto___23359;
var G__23362 = cljs.core.count.call(null,c__16879__auto___23359);
var G__23363 = (0);
seq__21274_23348 = G__23360;
chunk__21275_23349 = G__23361;
count__21276_23350 = G__23362;
i__21277_23351 = G__23363;
continue;
} else {
var child__18178__auto___23364 = cljs.core.first.call(null,seq__21274_23358__$1);
args__18177__auto__.push(child__18178__auto___23364);

var G__23365 = cljs.core.next.call(null,seq__21274_23358__$1);
var G__23366 = null;
var G__23367 = (0);
var G__23368 = (0);
seq__21274_23348 = G__23365;
chunk__21275_23349 = G__23366;
count__21276_23350 = G__23367;
i__21277_23351 = G__23368;
continue;
}
} else {
}
}
break;
}

return React.DOM.summary.apply(null,args__18177__auto__);
});

flupot.dom.summary.cljs$lang$maxFixedArity = (1);

flupot.dom.summary.cljs$lang$applyTo = (function (seq21272){
var G__21273 = cljs.core.first.call(null,seq21272);
var seq21272__$1 = cljs.core.next.call(null,seq21272);
return flupot.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__21273,seq21272__$1);
});

flupot.dom.sup = (function flupot$dom$sup(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21280_23369 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21281_23370 = null;
var count__21282_23371 = (0);
var i__21283_23372 = (0);
while(true){
if((i__21283_23372 < count__21282_23371)){
var child__18178__auto___23373 = cljs.core._nth.call(null,chunk__21281_23370,i__21283_23372);
args__18177__auto__.push(child__18178__auto___23373);

var G__23374 = seq__21280_23369;
var G__23375 = chunk__21281_23370;
var G__23376 = count__21282_23371;
var G__23377 = (i__21283_23372 + (1));
seq__21280_23369 = G__23374;
chunk__21281_23370 = G__23375;
count__21282_23371 = G__23376;
i__21283_23372 = G__23377;
continue;
} else {
var temp__4425__auto___23378 = cljs.core.seq.call(null,seq__21280_23369);
if(temp__4425__auto___23378){
var seq__21280_23379__$1 = temp__4425__auto___23378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21280_23379__$1)){
var c__16879__auto___23380 = cljs.core.chunk_first.call(null,seq__21280_23379__$1);
var G__23381 = cljs.core.chunk_rest.call(null,seq__21280_23379__$1);
var G__23382 = c__16879__auto___23380;
var G__23383 = cljs.core.count.call(null,c__16879__auto___23380);
var G__23384 = (0);
seq__21280_23369 = G__23381;
chunk__21281_23370 = G__23382;
count__21282_23371 = G__23383;
i__21283_23372 = G__23384;
continue;
} else {
var child__18178__auto___23385 = cljs.core.first.call(null,seq__21280_23379__$1);
args__18177__auto__.push(child__18178__auto___23385);

var G__23386 = cljs.core.next.call(null,seq__21280_23379__$1);
var G__23387 = null;
var G__23388 = (0);
var G__23389 = (0);
seq__21280_23369 = G__23386;
chunk__21281_23370 = G__23387;
count__21282_23371 = G__23388;
i__21283_23372 = G__23389;
continue;
}
} else {
}
}
break;
}

return React.DOM.sup.apply(null,args__18177__auto__);
});

flupot.dom.sup.cljs$lang$maxFixedArity = (1);

flupot.dom.sup.cljs$lang$applyTo = (function (seq21278){
var G__21279 = cljs.core.first.call(null,seq21278);
var seq21278__$1 = cljs.core.next.call(null,seq21278);
return flupot.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__21279,seq21278__$1);
});

flupot.dom.table = (function flupot$dom$table(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21286_23390 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21287_23391 = null;
var count__21288_23392 = (0);
var i__21289_23393 = (0);
while(true){
if((i__21289_23393 < count__21288_23392)){
var child__18178__auto___23394 = cljs.core._nth.call(null,chunk__21287_23391,i__21289_23393);
args__18177__auto__.push(child__18178__auto___23394);

var G__23395 = seq__21286_23390;
var G__23396 = chunk__21287_23391;
var G__23397 = count__21288_23392;
var G__23398 = (i__21289_23393 + (1));
seq__21286_23390 = G__23395;
chunk__21287_23391 = G__23396;
count__21288_23392 = G__23397;
i__21289_23393 = G__23398;
continue;
} else {
var temp__4425__auto___23399 = cljs.core.seq.call(null,seq__21286_23390);
if(temp__4425__auto___23399){
var seq__21286_23400__$1 = temp__4425__auto___23399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21286_23400__$1)){
var c__16879__auto___23401 = cljs.core.chunk_first.call(null,seq__21286_23400__$1);
var G__23402 = cljs.core.chunk_rest.call(null,seq__21286_23400__$1);
var G__23403 = c__16879__auto___23401;
var G__23404 = cljs.core.count.call(null,c__16879__auto___23401);
var G__23405 = (0);
seq__21286_23390 = G__23402;
chunk__21287_23391 = G__23403;
count__21288_23392 = G__23404;
i__21289_23393 = G__23405;
continue;
} else {
var child__18178__auto___23406 = cljs.core.first.call(null,seq__21286_23400__$1);
args__18177__auto__.push(child__18178__auto___23406);

var G__23407 = cljs.core.next.call(null,seq__21286_23400__$1);
var G__23408 = null;
var G__23409 = (0);
var G__23410 = (0);
seq__21286_23390 = G__23407;
chunk__21287_23391 = G__23408;
count__21288_23392 = G__23409;
i__21289_23393 = G__23410;
continue;
}
} else {
}
}
break;
}

return React.DOM.table.apply(null,args__18177__auto__);
});

flupot.dom.table.cljs$lang$maxFixedArity = (1);

flupot.dom.table.cljs$lang$applyTo = (function (seq21284){
var G__21285 = cljs.core.first.call(null,seq21284);
var seq21284__$1 = cljs.core.next.call(null,seq21284);
return flupot.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__21285,seq21284__$1);
});

flupot.dom.tbody = (function flupot$dom$tbody(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21292_23411 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21293_23412 = null;
var count__21294_23413 = (0);
var i__21295_23414 = (0);
while(true){
if((i__21295_23414 < count__21294_23413)){
var child__18178__auto___23415 = cljs.core._nth.call(null,chunk__21293_23412,i__21295_23414);
args__18177__auto__.push(child__18178__auto___23415);

var G__23416 = seq__21292_23411;
var G__23417 = chunk__21293_23412;
var G__23418 = count__21294_23413;
var G__23419 = (i__21295_23414 + (1));
seq__21292_23411 = G__23416;
chunk__21293_23412 = G__23417;
count__21294_23413 = G__23418;
i__21295_23414 = G__23419;
continue;
} else {
var temp__4425__auto___23420 = cljs.core.seq.call(null,seq__21292_23411);
if(temp__4425__auto___23420){
var seq__21292_23421__$1 = temp__4425__auto___23420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21292_23421__$1)){
var c__16879__auto___23422 = cljs.core.chunk_first.call(null,seq__21292_23421__$1);
var G__23423 = cljs.core.chunk_rest.call(null,seq__21292_23421__$1);
var G__23424 = c__16879__auto___23422;
var G__23425 = cljs.core.count.call(null,c__16879__auto___23422);
var G__23426 = (0);
seq__21292_23411 = G__23423;
chunk__21293_23412 = G__23424;
count__21294_23413 = G__23425;
i__21295_23414 = G__23426;
continue;
} else {
var child__18178__auto___23427 = cljs.core.first.call(null,seq__21292_23421__$1);
args__18177__auto__.push(child__18178__auto___23427);

var G__23428 = cljs.core.next.call(null,seq__21292_23421__$1);
var G__23429 = null;
var G__23430 = (0);
var G__23431 = (0);
seq__21292_23411 = G__23428;
chunk__21293_23412 = G__23429;
count__21294_23413 = G__23430;
i__21295_23414 = G__23431;
continue;
}
} else {
}
}
break;
}

return React.DOM.tbody.apply(null,args__18177__auto__);
});

flupot.dom.tbody.cljs$lang$maxFixedArity = (1);

flupot.dom.tbody.cljs$lang$applyTo = (function (seq21290){
var G__21291 = cljs.core.first.call(null,seq21290);
var seq21290__$1 = cljs.core.next.call(null,seq21290);
return flupot.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__21291,seq21290__$1);
});

flupot.dom.td = (function flupot$dom$td(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21298_23432 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21299_23433 = null;
var count__21300_23434 = (0);
var i__21301_23435 = (0);
while(true){
if((i__21301_23435 < count__21300_23434)){
var child__18178__auto___23436 = cljs.core._nth.call(null,chunk__21299_23433,i__21301_23435);
args__18177__auto__.push(child__18178__auto___23436);

var G__23437 = seq__21298_23432;
var G__23438 = chunk__21299_23433;
var G__23439 = count__21300_23434;
var G__23440 = (i__21301_23435 + (1));
seq__21298_23432 = G__23437;
chunk__21299_23433 = G__23438;
count__21300_23434 = G__23439;
i__21301_23435 = G__23440;
continue;
} else {
var temp__4425__auto___23441 = cljs.core.seq.call(null,seq__21298_23432);
if(temp__4425__auto___23441){
var seq__21298_23442__$1 = temp__4425__auto___23441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21298_23442__$1)){
var c__16879__auto___23443 = cljs.core.chunk_first.call(null,seq__21298_23442__$1);
var G__23444 = cljs.core.chunk_rest.call(null,seq__21298_23442__$1);
var G__23445 = c__16879__auto___23443;
var G__23446 = cljs.core.count.call(null,c__16879__auto___23443);
var G__23447 = (0);
seq__21298_23432 = G__23444;
chunk__21299_23433 = G__23445;
count__21300_23434 = G__23446;
i__21301_23435 = G__23447;
continue;
} else {
var child__18178__auto___23448 = cljs.core.first.call(null,seq__21298_23442__$1);
args__18177__auto__.push(child__18178__auto___23448);

var G__23449 = cljs.core.next.call(null,seq__21298_23442__$1);
var G__23450 = null;
var G__23451 = (0);
var G__23452 = (0);
seq__21298_23432 = G__23449;
chunk__21299_23433 = G__23450;
count__21300_23434 = G__23451;
i__21301_23435 = G__23452;
continue;
}
} else {
}
}
break;
}

return React.DOM.td.apply(null,args__18177__auto__);
});

flupot.dom.td.cljs$lang$maxFixedArity = (1);

flupot.dom.td.cljs$lang$applyTo = (function (seq21296){
var G__21297 = cljs.core.first.call(null,seq21296);
var seq21296__$1 = cljs.core.next.call(null,seq21296);
return flupot.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__21297,seq21296__$1);
});

flupot.dom.textarea = (function flupot$dom$textarea(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21304_23453 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21305_23454 = null;
var count__21306_23455 = (0);
var i__21307_23456 = (0);
while(true){
if((i__21307_23456 < count__21306_23455)){
var child__18178__auto___23457 = cljs.core._nth.call(null,chunk__21305_23454,i__21307_23456);
args__18177__auto__.push(child__18178__auto___23457);

var G__23458 = seq__21304_23453;
var G__23459 = chunk__21305_23454;
var G__23460 = count__21306_23455;
var G__23461 = (i__21307_23456 + (1));
seq__21304_23453 = G__23458;
chunk__21305_23454 = G__23459;
count__21306_23455 = G__23460;
i__21307_23456 = G__23461;
continue;
} else {
var temp__4425__auto___23462 = cljs.core.seq.call(null,seq__21304_23453);
if(temp__4425__auto___23462){
var seq__21304_23463__$1 = temp__4425__auto___23462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21304_23463__$1)){
var c__16879__auto___23464 = cljs.core.chunk_first.call(null,seq__21304_23463__$1);
var G__23465 = cljs.core.chunk_rest.call(null,seq__21304_23463__$1);
var G__23466 = c__16879__auto___23464;
var G__23467 = cljs.core.count.call(null,c__16879__auto___23464);
var G__23468 = (0);
seq__21304_23453 = G__23465;
chunk__21305_23454 = G__23466;
count__21306_23455 = G__23467;
i__21307_23456 = G__23468;
continue;
} else {
var child__18178__auto___23469 = cljs.core.first.call(null,seq__21304_23463__$1);
args__18177__auto__.push(child__18178__auto___23469);

var G__23470 = cljs.core.next.call(null,seq__21304_23463__$1);
var G__23471 = null;
var G__23472 = (0);
var G__23473 = (0);
seq__21304_23453 = G__23470;
chunk__21305_23454 = G__23471;
count__21306_23455 = G__23472;
i__21307_23456 = G__23473;
continue;
}
} else {
}
}
break;
}

return React.DOM.textarea.apply(null,args__18177__auto__);
});

flupot.dom.textarea.cljs$lang$maxFixedArity = (1);

flupot.dom.textarea.cljs$lang$applyTo = (function (seq21302){
var G__21303 = cljs.core.first.call(null,seq21302);
var seq21302__$1 = cljs.core.next.call(null,seq21302);
return flupot.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__21303,seq21302__$1);
});

flupot.dom.tfoot = (function flupot$dom$tfoot(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21310_23474 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21311_23475 = null;
var count__21312_23476 = (0);
var i__21313_23477 = (0);
while(true){
if((i__21313_23477 < count__21312_23476)){
var child__18178__auto___23478 = cljs.core._nth.call(null,chunk__21311_23475,i__21313_23477);
args__18177__auto__.push(child__18178__auto___23478);

var G__23479 = seq__21310_23474;
var G__23480 = chunk__21311_23475;
var G__23481 = count__21312_23476;
var G__23482 = (i__21313_23477 + (1));
seq__21310_23474 = G__23479;
chunk__21311_23475 = G__23480;
count__21312_23476 = G__23481;
i__21313_23477 = G__23482;
continue;
} else {
var temp__4425__auto___23483 = cljs.core.seq.call(null,seq__21310_23474);
if(temp__4425__auto___23483){
var seq__21310_23484__$1 = temp__4425__auto___23483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21310_23484__$1)){
var c__16879__auto___23485 = cljs.core.chunk_first.call(null,seq__21310_23484__$1);
var G__23486 = cljs.core.chunk_rest.call(null,seq__21310_23484__$1);
var G__23487 = c__16879__auto___23485;
var G__23488 = cljs.core.count.call(null,c__16879__auto___23485);
var G__23489 = (0);
seq__21310_23474 = G__23486;
chunk__21311_23475 = G__23487;
count__21312_23476 = G__23488;
i__21313_23477 = G__23489;
continue;
} else {
var child__18178__auto___23490 = cljs.core.first.call(null,seq__21310_23484__$1);
args__18177__auto__.push(child__18178__auto___23490);

var G__23491 = cljs.core.next.call(null,seq__21310_23484__$1);
var G__23492 = null;
var G__23493 = (0);
var G__23494 = (0);
seq__21310_23474 = G__23491;
chunk__21311_23475 = G__23492;
count__21312_23476 = G__23493;
i__21313_23477 = G__23494;
continue;
}
} else {
}
}
break;
}

return React.DOM.tfoot.apply(null,args__18177__auto__);
});

flupot.dom.tfoot.cljs$lang$maxFixedArity = (1);

flupot.dom.tfoot.cljs$lang$applyTo = (function (seq21308){
var G__21309 = cljs.core.first.call(null,seq21308);
var seq21308__$1 = cljs.core.next.call(null,seq21308);
return flupot.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__21309,seq21308__$1);
});

flupot.dom.th = (function flupot$dom$th(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21316_23495 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21317_23496 = null;
var count__21318_23497 = (0);
var i__21319_23498 = (0);
while(true){
if((i__21319_23498 < count__21318_23497)){
var child__18178__auto___23499 = cljs.core._nth.call(null,chunk__21317_23496,i__21319_23498);
args__18177__auto__.push(child__18178__auto___23499);

var G__23500 = seq__21316_23495;
var G__23501 = chunk__21317_23496;
var G__23502 = count__21318_23497;
var G__23503 = (i__21319_23498 + (1));
seq__21316_23495 = G__23500;
chunk__21317_23496 = G__23501;
count__21318_23497 = G__23502;
i__21319_23498 = G__23503;
continue;
} else {
var temp__4425__auto___23504 = cljs.core.seq.call(null,seq__21316_23495);
if(temp__4425__auto___23504){
var seq__21316_23505__$1 = temp__4425__auto___23504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21316_23505__$1)){
var c__16879__auto___23506 = cljs.core.chunk_first.call(null,seq__21316_23505__$1);
var G__23507 = cljs.core.chunk_rest.call(null,seq__21316_23505__$1);
var G__23508 = c__16879__auto___23506;
var G__23509 = cljs.core.count.call(null,c__16879__auto___23506);
var G__23510 = (0);
seq__21316_23495 = G__23507;
chunk__21317_23496 = G__23508;
count__21318_23497 = G__23509;
i__21319_23498 = G__23510;
continue;
} else {
var child__18178__auto___23511 = cljs.core.first.call(null,seq__21316_23505__$1);
args__18177__auto__.push(child__18178__auto___23511);

var G__23512 = cljs.core.next.call(null,seq__21316_23505__$1);
var G__23513 = null;
var G__23514 = (0);
var G__23515 = (0);
seq__21316_23495 = G__23512;
chunk__21317_23496 = G__23513;
count__21318_23497 = G__23514;
i__21319_23498 = G__23515;
continue;
}
} else {
}
}
break;
}

return React.DOM.th.apply(null,args__18177__auto__);
});

flupot.dom.th.cljs$lang$maxFixedArity = (1);

flupot.dom.th.cljs$lang$applyTo = (function (seq21314){
var G__21315 = cljs.core.first.call(null,seq21314);
var seq21314__$1 = cljs.core.next.call(null,seq21314);
return flupot.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__21315,seq21314__$1);
});

flupot.dom.thead = (function flupot$dom$thead(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21322_23516 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21323_23517 = null;
var count__21324_23518 = (0);
var i__21325_23519 = (0);
while(true){
if((i__21325_23519 < count__21324_23518)){
var child__18178__auto___23520 = cljs.core._nth.call(null,chunk__21323_23517,i__21325_23519);
args__18177__auto__.push(child__18178__auto___23520);

var G__23521 = seq__21322_23516;
var G__23522 = chunk__21323_23517;
var G__23523 = count__21324_23518;
var G__23524 = (i__21325_23519 + (1));
seq__21322_23516 = G__23521;
chunk__21323_23517 = G__23522;
count__21324_23518 = G__23523;
i__21325_23519 = G__23524;
continue;
} else {
var temp__4425__auto___23525 = cljs.core.seq.call(null,seq__21322_23516);
if(temp__4425__auto___23525){
var seq__21322_23526__$1 = temp__4425__auto___23525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21322_23526__$1)){
var c__16879__auto___23527 = cljs.core.chunk_first.call(null,seq__21322_23526__$1);
var G__23528 = cljs.core.chunk_rest.call(null,seq__21322_23526__$1);
var G__23529 = c__16879__auto___23527;
var G__23530 = cljs.core.count.call(null,c__16879__auto___23527);
var G__23531 = (0);
seq__21322_23516 = G__23528;
chunk__21323_23517 = G__23529;
count__21324_23518 = G__23530;
i__21325_23519 = G__23531;
continue;
} else {
var child__18178__auto___23532 = cljs.core.first.call(null,seq__21322_23526__$1);
args__18177__auto__.push(child__18178__auto___23532);

var G__23533 = cljs.core.next.call(null,seq__21322_23526__$1);
var G__23534 = null;
var G__23535 = (0);
var G__23536 = (0);
seq__21322_23516 = G__23533;
chunk__21323_23517 = G__23534;
count__21324_23518 = G__23535;
i__21325_23519 = G__23536;
continue;
}
} else {
}
}
break;
}

return React.DOM.thead.apply(null,args__18177__auto__);
});

flupot.dom.thead.cljs$lang$maxFixedArity = (1);

flupot.dom.thead.cljs$lang$applyTo = (function (seq21320){
var G__21321 = cljs.core.first.call(null,seq21320);
var seq21320__$1 = cljs.core.next.call(null,seq21320);
return flupot.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__21321,seq21320__$1);
});

flupot.dom.time = (function flupot$dom$time(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21328_23537 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21329_23538 = null;
var count__21330_23539 = (0);
var i__21331_23540 = (0);
while(true){
if((i__21331_23540 < count__21330_23539)){
var child__18178__auto___23541 = cljs.core._nth.call(null,chunk__21329_23538,i__21331_23540);
args__18177__auto__.push(child__18178__auto___23541);

var G__23542 = seq__21328_23537;
var G__23543 = chunk__21329_23538;
var G__23544 = count__21330_23539;
var G__23545 = (i__21331_23540 + (1));
seq__21328_23537 = G__23542;
chunk__21329_23538 = G__23543;
count__21330_23539 = G__23544;
i__21331_23540 = G__23545;
continue;
} else {
var temp__4425__auto___23546 = cljs.core.seq.call(null,seq__21328_23537);
if(temp__4425__auto___23546){
var seq__21328_23547__$1 = temp__4425__auto___23546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21328_23547__$1)){
var c__16879__auto___23548 = cljs.core.chunk_first.call(null,seq__21328_23547__$1);
var G__23549 = cljs.core.chunk_rest.call(null,seq__21328_23547__$1);
var G__23550 = c__16879__auto___23548;
var G__23551 = cljs.core.count.call(null,c__16879__auto___23548);
var G__23552 = (0);
seq__21328_23537 = G__23549;
chunk__21329_23538 = G__23550;
count__21330_23539 = G__23551;
i__21331_23540 = G__23552;
continue;
} else {
var child__18178__auto___23553 = cljs.core.first.call(null,seq__21328_23547__$1);
args__18177__auto__.push(child__18178__auto___23553);

var G__23554 = cljs.core.next.call(null,seq__21328_23547__$1);
var G__23555 = null;
var G__23556 = (0);
var G__23557 = (0);
seq__21328_23537 = G__23554;
chunk__21329_23538 = G__23555;
count__21330_23539 = G__23556;
i__21331_23540 = G__23557;
continue;
}
} else {
}
}
break;
}

return React.DOM.time.apply(null,args__18177__auto__);
});

flupot.dom.time.cljs$lang$maxFixedArity = (1);

flupot.dom.time.cljs$lang$applyTo = (function (seq21326){
var G__21327 = cljs.core.first.call(null,seq21326);
var seq21326__$1 = cljs.core.next.call(null,seq21326);
return flupot.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__21327,seq21326__$1);
});

flupot.dom.title = (function flupot$dom$title(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21334_23558 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21335_23559 = null;
var count__21336_23560 = (0);
var i__21337_23561 = (0);
while(true){
if((i__21337_23561 < count__21336_23560)){
var child__18178__auto___23562 = cljs.core._nth.call(null,chunk__21335_23559,i__21337_23561);
args__18177__auto__.push(child__18178__auto___23562);

var G__23563 = seq__21334_23558;
var G__23564 = chunk__21335_23559;
var G__23565 = count__21336_23560;
var G__23566 = (i__21337_23561 + (1));
seq__21334_23558 = G__23563;
chunk__21335_23559 = G__23564;
count__21336_23560 = G__23565;
i__21337_23561 = G__23566;
continue;
} else {
var temp__4425__auto___23567 = cljs.core.seq.call(null,seq__21334_23558);
if(temp__4425__auto___23567){
var seq__21334_23568__$1 = temp__4425__auto___23567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21334_23568__$1)){
var c__16879__auto___23569 = cljs.core.chunk_first.call(null,seq__21334_23568__$1);
var G__23570 = cljs.core.chunk_rest.call(null,seq__21334_23568__$1);
var G__23571 = c__16879__auto___23569;
var G__23572 = cljs.core.count.call(null,c__16879__auto___23569);
var G__23573 = (0);
seq__21334_23558 = G__23570;
chunk__21335_23559 = G__23571;
count__21336_23560 = G__23572;
i__21337_23561 = G__23573;
continue;
} else {
var child__18178__auto___23574 = cljs.core.first.call(null,seq__21334_23568__$1);
args__18177__auto__.push(child__18178__auto___23574);

var G__23575 = cljs.core.next.call(null,seq__21334_23568__$1);
var G__23576 = null;
var G__23577 = (0);
var G__23578 = (0);
seq__21334_23558 = G__23575;
chunk__21335_23559 = G__23576;
count__21336_23560 = G__23577;
i__21337_23561 = G__23578;
continue;
}
} else {
}
}
break;
}

return React.DOM.title.apply(null,args__18177__auto__);
});

flupot.dom.title.cljs$lang$maxFixedArity = (1);

flupot.dom.title.cljs$lang$applyTo = (function (seq21332){
var G__21333 = cljs.core.first.call(null,seq21332);
var seq21332__$1 = cljs.core.next.call(null,seq21332);
return flupot.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__21333,seq21332__$1);
});

flupot.dom.tr = (function flupot$dom$tr(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21340_23579 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21341_23580 = null;
var count__21342_23581 = (0);
var i__21343_23582 = (0);
while(true){
if((i__21343_23582 < count__21342_23581)){
var child__18178__auto___23583 = cljs.core._nth.call(null,chunk__21341_23580,i__21343_23582);
args__18177__auto__.push(child__18178__auto___23583);

var G__23584 = seq__21340_23579;
var G__23585 = chunk__21341_23580;
var G__23586 = count__21342_23581;
var G__23587 = (i__21343_23582 + (1));
seq__21340_23579 = G__23584;
chunk__21341_23580 = G__23585;
count__21342_23581 = G__23586;
i__21343_23582 = G__23587;
continue;
} else {
var temp__4425__auto___23588 = cljs.core.seq.call(null,seq__21340_23579);
if(temp__4425__auto___23588){
var seq__21340_23589__$1 = temp__4425__auto___23588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21340_23589__$1)){
var c__16879__auto___23590 = cljs.core.chunk_first.call(null,seq__21340_23589__$1);
var G__23591 = cljs.core.chunk_rest.call(null,seq__21340_23589__$1);
var G__23592 = c__16879__auto___23590;
var G__23593 = cljs.core.count.call(null,c__16879__auto___23590);
var G__23594 = (0);
seq__21340_23579 = G__23591;
chunk__21341_23580 = G__23592;
count__21342_23581 = G__23593;
i__21343_23582 = G__23594;
continue;
} else {
var child__18178__auto___23595 = cljs.core.first.call(null,seq__21340_23589__$1);
args__18177__auto__.push(child__18178__auto___23595);

var G__23596 = cljs.core.next.call(null,seq__21340_23589__$1);
var G__23597 = null;
var G__23598 = (0);
var G__23599 = (0);
seq__21340_23579 = G__23596;
chunk__21341_23580 = G__23597;
count__21342_23581 = G__23598;
i__21343_23582 = G__23599;
continue;
}
} else {
}
}
break;
}

return React.DOM.tr.apply(null,args__18177__auto__);
});

flupot.dom.tr.cljs$lang$maxFixedArity = (1);

flupot.dom.tr.cljs$lang$applyTo = (function (seq21338){
var G__21339 = cljs.core.first.call(null,seq21338);
var seq21338__$1 = cljs.core.next.call(null,seq21338);
return flupot.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__21339,seq21338__$1);
});

flupot.dom.track = (function flupot$dom$track(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21346_23600 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21347_23601 = null;
var count__21348_23602 = (0);
var i__21349_23603 = (0);
while(true){
if((i__21349_23603 < count__21348_23602)){
var child__18178__auto___23604 = cljs.core._nth.call(null,chunk__21347_23601,i__21349_23603);
args__18177__auto__.push(child__18178__auto___23604);

var G__23605 = seq__21346_23600;
var G__23606 = chunk__21347_23601;
var G__23607 = count__21348_23602;
var G__23608 = (i__21349_23603 + (1));
seq__21346_23600 = G__23605;
chunk__21347_23601 = G__23606;
count__21348_23602 = G__23607;
i__21349_23603 = G__23608;
continue;
} else {
var temp__4425__auto___23609 = cljs.core.seq.call(null,seq__21346_23600);
if(temp__4425__auto___23609){
var seq__21346_23610__$1 = temp__4425__auto___23609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21346_23610__$1)){
var c__16879__auto___23611 = cljs.core.chunk_first.call(null,seq__21346_23610__$1);
var G__23612 = cljs.core.chunk_rest.call(null,seq__21346_23610__$1);
var G__23613 = c__16879__auto___23611;
var G__23614 = cljs.core.count.call(null,c__16879__auto___23611);
var G__23615 = (0);
seq__21346_23600 = G__23612;
chunk__21347_23601 = G__23613;
count__21348_23602 = G__23614;
i__21349_23603 = G__23615;
continue;
} else {
var child__18178__auto___23616 = cljs.core.first.call(null,seq__21346_23610__$1);
args__18177__auto__.push(child__18178__auto___23616);

var G__23617 = cljs.core.next.call(null,seq__21346_23610__$1);
var G__23618 = null;
var G__23619 = (0);
var G__23620 = (0);
seq__21346_23600 = G__23617;
chunk__21347_23601 = G__23618;
count__21348_23602 = G__23619;
i__21349_23603 = G__23620;
continue;
}
} else {
}
}
break;
}

return React.DOM.track.apply(null,args__18177__auto__);
});

flupot.dom.track.cljs$lang$maxFixedArity = (1);

flupot.dom.track.cljs$lang$applyTo = (function (seq21344){
var G__21345 = cljs.core.first.call(null,seq21344);
var seq21344__$1 = cljs.core.next.call(null,seq21344);
return flupot.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__21345,seq21344__$1);
});

flupot.dom.u = (function flupot$dom$u(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21352_23621 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21353_23622 = null;
var count__21354_23623 = (0);
var i__21355_23624 = (0);
while(true){
if((i__21355_23624 < count__21354_23623)){
var child__18178__auto___23625 = cljs.core._nth.call(null,chunk__21353_23622,i__21355_23624);
args__18177__auto__.push(child__18178__auto___23625);

var G__23626 = seq__21352_23621;
var G__23627 = chunk__21353_23622;
var G__23628 = count__21354_23623;
var G__23629 = (i__21355_23624 + (1));
seq__21352_23621 = G__23626;
chunk__21353_23622 = G__23627;
count__21354_23623 = G__23628;
i__21355_23624 = G__23629;
continue;
} else {
var temp__4425__auto___23630 = cljs.core.seq.call(null,seq__21352_23621);
if(temp__4425__auto___23630){
var seq__21352_23631__$1 = temp__4425__auto___23630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21352_23631__$1)){
var c__16879__auto___23632 = cljs.core.chunk_first.call(null,seq__21352_23631__$1);
var G__23633 = cljs.core.chunk_rest.call(null,seq__21352_23631__$1);
var G__23634 = c__16879__auto___23632;
var G__23635 = cljs.core.count.call(null,c__16879__auto___23632);
var G__23636 = (0);
seq__21352_23621 = G__23633;
chunk__21353_23622 = G__23634;
count__21354_23623 = G__23635;
i__21355_23624 = G__23636;
continue;
} else {
var child__18178__auto___23637 = cljs.core.first.call(null,seq__21352_23631__$1);
args__18177__auto__.push(child__18178__auto___23637);

var G__23638 = cljs.core.next.call(null,seq__21352_23631__$1);
var G__23639 = null;
var G__23640 = (0);
var G__23641 = (0);
seq__21352_23621 = G__23638;
chunk__21353_23622 = G__23639;
count__21354_23623 = G__23640;
i__21355_23624 = G__23641;
continue;
}
} else {
}
}
break;
}

return React.DOM.u.apply(null,args__18177__auto__);
});

flupot.dom.u.cljs$lang$maxFixedArity = (1);

flupot.dom.u.cljs$lang$applyTo = (function (seq21350){
var G__21351 = cljs.core.first.call(null,seq21350);
var seq21350__$1 = cljs.core.next.call(null,seq21350);
return flupot.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__21351,seq21350__$1);
});

flupot.dom.ul = (function flupot$dom$ul(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21358_23642 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21359_23643 = null;
var count__21360_23644 = (0);
var i__21361_23645 = (0);
while(true){
if((i__21361_23645 < count__21360_23644)){
var child__18178__auto___23646 = cljs.core._nth.call(null,chunk__21359_23643,i__21361_23645);
args__18177__auto__.push(child__18178__auto___23646);

var G__23647 = seq__21358_23642;
var G__23648 = chunk__21359_23643;
var G__23649 = count__21360_23644;
var G__23650 = (i__21361_23645 + (1));
seq__21358_23642 = G__23647;
chunk__21359_23643 = G__23648;
count__21360_23644 = G__23649;
i__21361_23645 = G__23650;
continue;
} else {
var temp__4425__auto___23651 = cljs.core.seq.call(null,seq__21358_23642);
if(temp__4425__auto___23651){
var seq__21358_23652__$1 = temp__4425__auto___23651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21358_23652__$1)){
var c__16879__auto___23653 = cljs.core.chunk_first.call(null,seq__21358_23652__$1);
var G__23654 = cljs.core.chunk_rest.call(null,seq__21358_23652__$1);
var G__23655 = c__16879__auto___23653;
var G__23656 = cljs.core.count.call(null,c__16879__auto___23653);
var G__23657 = (0);
seq__21358_23642 = G__23654;
chunk__21359_23643 = G__23655;
count__21360_23644 = G__23656;
i__21361_23645 = G__23657;
continue;
} else {
var child__18178__auto___23658 = cljs.core.first.call(null,seq__21358_23652__$1);
args__18177__auto__.push(child__18178__auto___23658);

var G__23659 = cljs.core.next.call(null,seq__21358_23652__$1);
var G__23660 = null;
var G__23661 = (0);
var G__23662 = (0);
seq__21358_23642 = G__23659;
chunk__21359_23643 = G__23660;
count__21360_23644 = G__23661;
i__21361_23645 = G__23662;
continue;
}
} else {
}
}
break;
}

return React.DOM.ul.apply(null,args__18177__auto__);
});

flupot.dom.ul.cljs$lang$maxFixedArity = (1);

flupot.dom.ul.cljs$lang$applyTo = (function (seq21356){
var G__21357 = cljs.core.first.call(null,seq21356);
var seq21356__$1 = cljs.core.next.call(null,seq21356);
return flupot.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__21357,seq21356__$1);
});

flupot.dom.var$ = (function flupot$dom$var(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21364_23663 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21365_23664 = null;
var count__21366_23665 = (0);
var i__21367_23666 = (0);
while(true){
if((i__21367_23666 < count__21366_23665)){
var child__18178__auto___23667 = cljs.core._nth.call(null,chunk__21365_23664,i__21367_23666);
args__18177__auto__.push(child__18178__auto___23667);

var G__23668 = seq__21364_23663;
var G__23669 = chunk__21365_23664;
var G__23670 = count__21366_23665;
var G__23671 = (i__21367_23666 + (1));
seq__21364_23663 = G__23668;
chunk__21365_23664 = G__23669;
count__21366_23665 = G__23670;
i__21367_23666 = G__23671;
continue;
} else {
var temp__4425__auto___23672 = cljs.core.seq.call(null,seq__21364_23663);
if(temp__4425__auto___23672){
var seq__21364_23673__$1 = temp__4425__auto___23672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21364_23673__$1)){
var c__16879__auto___23674 = cljs.core.chunk_first.call(null,seq__21364_23673__$1);
var G__23675 = cljs.core.chunk_rest.call(null,seq__21364_23673__$1);
var G__23676 = c__16879__auto___23674;
var G__23677 = cljs.core.count.call(null,c__16879__auto___23674);
var G__23678 = (0);
seq__21364_23663 = G__23675;
chunk__21365_23664 = G__23676;
count__21366_23665 = G__23677;
i__21367_23666 = G__23678;
continue;
} else {
var child__18178__auto___23679 = cljs.core.first.call(null,seq__21364_23673__$1);
args__18177__auto__.push(child__18178__auto___23679);

var G__23680 = cljs.core.next.call(null,seq__21364_23673__$1);
var G__23681 = null;
var G__23682 = (0);
var G__23683 = (0);
seq__21364_23663 = G__23680;
chunk__21365_23664 = G__23681;
count__21366_23665 = G__23682;
i__21367_23666 = G__23683;
continue;
}
} else {
}
}
break;
}

return React.DOM.var$.apply(null,args__18177__auto__);
});

flupot.dom.var$.cljs$lang$maxFixedArity = (1);

flupot.dom.var$.cljs$lang$applyTo = (function (seq21362){
var G__21363 = cljs.core.first.call(null,seq21362);
var seq21362__$1 = cljs.core.next.call(null,seq21362);
return flupot.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__21363,seq21362__$1);
});

flupot.dom.video = (function flupot$dom$video(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__21370_23684 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__21371_23685 = null;
var count__21372_23686 = (0);
var i__21373_23687 = (0);
while(true){
if((i__21373_23687 < count__21372_23686)){
var child__18178__auto___23688 = cljs.core._nth.call(null,chunk__21371_23685,i__21373_23687);
args__18177__auto__.push(child__18178__auto___23688);

var G__23689 = seq__21370_23684;
var G__23690 = chunk__21371_23685;
var G__23691 = count__21372_23686;
var G__23692 = (i__21373_23687 + (1));
seq__21370_23684 = G__23689;
chunk__21371_23685 = G__23690;
count__21372_23686 = G__23691;
i__21373_23687 = G__23692;
continue;
} else {
var temp__4425__auto___23693 = cljs.core.seq.call(null,seq__21370_23684);
if(temp__4425__auto___23693){
var seq__21370_23694__$1 = temp__4425__auto___23693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21370_23694__$1)){
var c__16879__auto___23695 = cljs.core.chunk_first.call(null,seq__21370_23694__$1);
var G__23696 = cljs.core.chunk_rest.call(null,seq__21370_23694__$1);
var G__23697 = c__16879__auto___23695;
var G__23698 = cljs.core.count.call(null,c__16879__auto___23695);
var G__23699 = (0);
seq__21370_23684 = G__23696;
chunk__21371_23685 = G__23697;
count__21372_23686 = G__23698;
i__21373_23687 = G__23699;
continue;
} else {
var child__18178__auto___23700 = cljs.core.first.call(null,seq__21370_23694__$1);
args__18177__auto__.push(child__18178__auto___23700);

var G__23701 = cljs.core.next.call(null,seq__21370_23694__$1);
var G__23702 = null;
var G__23703 = (0);
var G__23704 = (0);
seq__21370_23684 = G__23701;
chunk__21371_23685 = G__23702;
count__21372_23686 = G__23703;
i__21373_23687 = G__23704;
continue;
}
} else {
}
}
break;
}

return React.DOM.video.apply(null,args__18177__auto__);
});

flupot.dom.video.cljs$lang$maxFixedArity = (1);

flupot.dom.video.cljs$lang$applyTo = (function (seq21368){
var G__21369 = cljs.core.first.call(null,seq21368);
var seq21368__$1 = cljs.core.next.call(null,seq21368);
return flupot.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__21369,seq21368__$1);
});

flupot.dom.wbr = (function flupot$dom$wbr(){
var argseq__17134__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return flupot.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17134__auto__);
});

flupot.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__18175__auto__,children__18176__auto__){
var args__18177__auto__ = [];
if(cljs.core.map_QMARK_.call(null,opts__18175__auto__)){
args__18177__auto__.push(flupot.dom.attrs__GT_react.call(null,opts__18175__auto__));
} else {
args__18177__auto__.push(null);

args__18177__auto__.push(opts__18175__auto__);
}

var seq__20896_23705 = cljs.core.seq.call(null,children__18176__auto__);
var chunk__20897_23706 = null;
var count__20898_23707 = (0);
var i__20899_23708 = (0);
while(true){
if((i__20899_23708 < count__20898_23707)){
var child__18178__auto___23709 = cljs.core._nth.call(null,chunk__20897_23706,i__20899_23708);
args__18177__auto__.push(child__18178__auto___23709);

var G__23710 = seq__20896_23705;
var G__23711 = chunk__20897_23706;
var G__23712 = count__20898_23707;
var G__23713 = (i__20899_23708 + (1));
seq__20896_23705 = G__23710;
chunk__20897_23706 = G__23711;
count__20898_23707 = G__23712;
i__20899_23708 = G__23713;
continue;
} else {
var temp__4425__auto___23714 = cljs.core.seq.call(null,seq__20896_23705);
if(temp__4425__auto___23714){
var seq__20896_23715__$1 = temp__4425__auto___23714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20896_23715__$1)){
var c__16879__auto___23716 = cljs.core.chunk_first.call(null,seq__20896_23715__$1);
var G__23717 = cljs.core.chunk_rest.call(null,seq__20896_23715__$1);
var G__23718 = c__16879__auto___23716;
var G__23719 = cljs.core.count.call(null,c__16879__auto___23716);
var G__23720 = (0);
seq__20896_23705 = G__23717;
chunk__20897_23706 = G__23718;
count__20898_23707 = G__23719;
i__20899_23708 = G__23720;
continue;
} else {
var child__18178__auto___23721 = cljs.core.first.call(null,seq__20896_23715__$1);
args__18177__auto__.push(child__18178__auto___23721);

var G__23722 = cljs.core.next.call(null,seq__20896_23715__$1);
var G__23723 = null;
var G__23724 = (0);
var G__23725 = (0);
seq__20896_23705 = G__23722;
chunk__20897_23706 = G__23723;
count__20898_23707 = G__23724;
i__20899_23708 = G__23725;
continue;
}
} else {
}
}
break;
}

return React.DOM.wbr.apply(null,args__18177__auto__);
});

flupot.dom.wbr.cljs$lang$maxFixedArity = (1);

flupot.dom.wbr.cljs$lang$applyTo = (function (seq20894){
var G__20895 = cljs.core.first.call(null,seq20894);
var seq20894__$1 = cljs.core.next.call(null,seq20894);
return flupot.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__20895,seq20894__$1);
});

//# sourceMappingURL=dom.js.map?rel=1438967828765