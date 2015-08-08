// Compiled by ClojureScript 0.0-3297 {}
goog.provide('clojure_imports_explained.core');
goog.require('cljs.core');
goog.require('brutha.core');
goog.require('flupot.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Check it out at http://localhost:3449");
if(typeof clojure_imports_explained.core.app_state !== 'undefined'){
} else {
clojure_imports_explained.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
clojure_imports_explained.core.anchor = document.getElementById("app");
clojure_imports_explained.core.prose_anchor = document.getElementById("examples");
clojure_imports_explained.core.namespace_component = (function clojure_imports_explained$core$namespace_component(namespace_declaration){
var opts18713 = [cljs.core.str("(ns "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(namespace_declaration)),cljs.core.str("\n  (require [thing :as two]))")].join('');
if(cljs.core.map_QMARK_.call(null,opts18713)){
return React.DOM.pre(flupot.dom.attrs__GT_react.call(null,opts18713));
} else {
return React.DOM.pre(null,opts18713);
}
});
clojure_imports_explained.core.example_component = (function clojure_imports_explained$core$example_component(prose,declaration){
return React.DOM.div((function (){var obj20599 = {"className":"Example"};
return obj20599;
})(),(function (){var opts18377 = prose;
if(cljs.core.map_QMARK_.call(null,opts18377)){
return React.DOM.div(flupot.dom.attrs__GT_react.call(null,opts18377));
} else {
return React.DOM.div(null,opts18377);
}
})(),(function (){var opts18713 = declaration;
if(cljs.core.map_QMARK_.call(null,opts18713)){
return React.DOM.pre(flupot.dom.attrs__GT_react.call(null,opts18713));
} else {
return React.DOM.pre(null,opts18713);
}
})());
});
clojure_imports_explained.core.example_namespace = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"cool-app",new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.PersistentArrayMap(null, 1, ["thing","two"], null)], null);
clojure_imports_explained.core.docs_url = (function clojure_imports_explained$core$docs_url(item){
return [cljs.core.str("https://clojuredocs.org/clojure.core/"),cljs.core.str(item)].join('');
});
clojure_imports_explained.core.clojure_docs_ns = clojure_imports_explained.core.docs_url.call(null,"ns");
clojure_imports_explained.core.clojure_docs_require = clojure_imports_explained.core.docs_url.call(null,"require");
clojure_imports_explained.core.clojure_docs_import = clojure_imports_explained.core.docs_url.call(null,"import");
/**
 * Paragraph text with some prose styling
 */
clojure_imports_explained.core.paragraph = (function clojure_imports_explained$core$paragraph(text){
return React.DOM.p((function (){var obj20605 = {"style":(function (){var obj20607 = {"maxWidth":"36em","lineHeight":1.45};
return obj20607;
})()};
return obj20605;
})(),text);
});
clojure_imports_explained.core.code = (function clojure_imports_explained$core$code(text){
var opts18713 = text;
if(cljs.core.map_QMARK_.call(null,opts18713)){
return React.DOM.pre(flupot.dom.attrs__GT_react.call(null,opts18713));
} else {
return React.DOM.pre(null,opts18713);
}
});
clojure_imports_explained.core.prose_stuff = (function (){var opts18377 = React.DOM.h1((function (){var obj20609 = {"style":(function (){var obj20611 = {"marginTop":"2em"};
return obj20611;
})()};
return obj20609;
})(),"How do you use libraries in Clojure?");
if(cljs.core.map_QMARK_.call(null,opts18377)){
return React.DOM.div(flupot.dom.attrs__GT_react.call(null,opts18377),clojure_imports_explained.core.example_component.call(null,clojure_imports_explained.core.paragraph.call(null,[cljs.core.str("When you write code in Clojure, you have to put it in a namespace. "),cljs.core.str("The ns macro lets you name that file's code, and bring code from "),cljs.core.str("other namespaces into scope.")].join('')),"(ns name docstring? attr-map? references*)"),clojure_imports_explained.core.example_component.call(null,clojure_imports_explained.core.paragraph.call(null,"The main interesting thing in there is 'references'. The one you'll use the most is 'require':"),"(require [clojure.data.json])"),clojure_imports_explained.core.paragraph.call(null,"And you'll have access to the good JSON functions in that namespace:"),clojure_imports_explained.core.code.call(null,"(clojure.data.json/read-str some-json-string)"),clojure_imports_explained.core.paragraph.call(null,"That's kind of cumbersome though, so you may want to alias the namespace to something short and tidy:"),clojure_imports_explained.core.code.call(null,"(require [clojure.data.json :as json])"),clojure_imports_explained.core.paragraph.call(null,"This is the preferred way of handling imports in Clojure, as it shortens the amount you have to type while hinting the reader on where the function came from:"),clojure_imports_explained.core.code.call(null,"(json/read-str some-json-string)"),clojure_imports_explained.core.paragraph.call(null,"You could skip the namespace entirely and just pluck out individual functions from the namespace:"),clojure_imports_explained.core.code.call(null,"(require [clojure.data.json :refer read-str])\n(read-str some-json-string)"),clojure_imports_explained.core.paragraph.call(null,"This can be really nice for libraries like core.async, where "),clojure_imports_explained.core.code.call(null,"(require [clojure.core.async :refer [go put <!]])"));
} else {
return React.DOM.div(null,opts18377,clojure_imports_explained.core.example_component.call(null,clojure_imports_explained.core.paragraph.call(null,[cljs.core.str("When you write code in Clojure, you have to put it in a namespace. "),cljs.core.str("The ns macro lets you name that file's code, and bring code from "),cljs.core.str("other namespaces into scope.")].join('')),"(ns name docstring? attr-map? references*)"),clojure_imports_explained.core.example_component.call(null,clojure_imports_explained.core.paragraph.call(null,"The main interesting thing in there is 'references'. The one you'll use the most is 'require':"),"(require [clojure.data.json])"),clojure_imports_explained.core.paragraph.call(null,"And you'll have access to the good JSON functions in that namespace:"),clojure_imports_explained.core.code.call(null,"(clojure.data.json/read-str some-json-string)"),clojure_imports_explained.core.paragraph.call(null,"That's kind of cumbersome though, so you may want to alias the namespace to something short and tidy:"),clojure_imports_explained.core.code.call(null,"(require [clojure.data.json :as json])"),clojure_imports_explained.core.paragraph.call(null,"This is the preferred way of handling imports in Clojure, as it shortens the amount you have to type while hinting the reader on where the function came from:"),clojure_imports_explained.core.code.call(null,"(json/read-str some-json-string)"),clojure_imports_explained.core.paragraph.call(null,"You could skip the namespace entirely and just pluck out individual functions from the namespace:"),clojure_imports_explained.core.code.call(null,"(require [clojure.data.json :refer read-str])\n(read-str some-json-string)"),clojure_imports_explained.core.paragraph.call(null,"This can be really nice for libraries like core.async, where "),clojure_imports_explained.core.code.call(null,"(require [clojure.core.async :refer [go put <!]])"));
}
})();
brutha.core.mount.call(null,clojure_imports_explained.core.namespace_component.call(null,clojure_imports_explained.core.example_namespace),clojure_imports_explained.core.anchor);
brutha.core.mount.call(null,clojure_imports_explained.core.prose_stuff,clojure_imports_explained.core.prose_anchor);
clojure_imports_explained.core.on_js_reload = (function clojure_imports_explained$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1439005639538