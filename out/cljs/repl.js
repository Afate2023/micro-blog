// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24250){
var map__24251 = p__24250;
var map__24251__$1 = (((((!((map__24251 == null))))?(((((map__24251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24251):map__24251);
var m = map__24251__$1;
var n = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24253_24285 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24254_24286 = null;
var count__24255_24287 = (0);
var i__24256_24288 = (0);
while(true){
if((i__24256_24288 < count__24255_24287)){
var f_24289 = cljs.core._nth.call(null,chunk__24254_24286,i__24256_24288);
cljs.core.println.call(null,"  ",f_24289);


var G__24290 = seq__24253_24285;
var G__24291 = chunk__24254_24286;
var G__24292 = count__24255_24287;
var G__24293 = (i__24256_24288 + (1));
seq__24253_24285 = G__24290;
chunk__24254_24286 = G__24291;
count__24255_24287 = G__24292;
i__24256_24288 = G__24293;
continue;
} else {
var temp__5735__auto___24294 = cljs.core.seq.call(null,seq__24253_24285);
if(temp__5735__auto___24294){
var seq__24253_24295__$1 = temp__5735__auto___24294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24253_24295__$1)){
var c__4550__auto___24296 = cljs.core.chunk_first.call(null,seq__24253_24295__$1);
var G__24297 = cljs.core.chunk_rest.call(null,seq__24253_24295__$1);
var G__24298 = c__4550__auto___24296;
var G__24299 = cljs.core.count.call(null,c__4550__auto___24296);
var G__24300 = (0);
seq__24253_24285 = G__24297;
chunk__24254_24286 = G__24298;
count__24255_24287 = G__24299;
i__24256_24288 = G__24300;
continue;
} else {
var f_24301 = cljs.core.first.call(null,seq__24253_24295__$1);
cljs.core.println.call(null,"  ",f_24301);


var G__24302 = cljs.core.next.call(null,seq__24253_24295__$1);
var G__24303 = null;
var G__24304 = (0);
var G__24305 = (0);
seq__24253_24285 = G__24302;
chunk__24254_24286 = G__24303;
count__24255_24287 = G__24304;
i__24256_24288 = G__24305;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24306 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24306);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24306)))?cljs.core.second.call(null,arglists_24306):arglists_24306));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24257_24307 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24258_24308 = null;
var count__24259_24309 = (0);
var i__24260_24310 = (0);
while(true){
if((i__24260_24310 < count__24259_24309)){
var vec__24271_24311 = cljs.core._nth.call(null,chunk__24258_24308,i__24260_24310);
var name_24312 = cljs.core.nth.call(null,vec__24271_24311,(0),null);
var map__24274_24313 = cljs.core.nth.call(null,vec__24271_24311,(1),null);
var map__24274_24314__$1 = (((((!((map__24274_24313 == null))))?(((((map__24274_24313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24274_24313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24274_24313):map__24274_24313);
var doc_24315 = cljs.core.get.call(null,map__24274_24314__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24316 = cljs.core.get.call(null,map__24274_24314__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24312);

cljs.core.println.call(null," ",arglists_24316);

if(cljs.core.truth_(doc_24315)){
cljs.core.println.call(null," ",doc_24315);
} else {
}


var G__24317 = seq__24257_24307;
var G__24318 = chunk__24258_24308;
var G__24319 = count__24259_24309;
var G__24320 = (i__24260_24310 + (1));
seq__24257_24307 = G__24317;
chunk__24258_24308 = G__24318;
count__24259_24309 = G__24319;
i__24260_24310 = G__24320;
continue;
} else {
var temp__5735__auto___24321 = cljs.core.seq.call(null,seq__24257_24307);
if(temp__5735__auto___24321){
var seq__24257_24322__$1 = temp__5735__auto___24321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24257_24322__$1)){
var c__4550__auto___24323 = cljs.core.chunk_first.call(null,seq__24257_24322__$1);
var G__24324 = cljs.core.chunk_rest.call(null,seq__24257_24322__$1);
var G__24325 = c__4550__auto___24323;
var G__24326 = cljs.core.count.call(null,c__4550__auto___24323);
var G__24327 = (0);
seq__24257_24307 = G__24324;
chunk__24258_24308 = G__24325;
count__24259_24309 = G__24326;
i__24260_24310 = G__24327;
continue;
} else {
var vec__24276_24328 = cljs.core.first.call(null,seq__24257_24322__$1);
var name_24329 = cljs.core.nth.call(null,vec__24276_24328,(0),null);
var map__24279_24330 = cljs.core.nth.call(null,vec__24276_24328,(1),null);
var map__24279_24331__$1 = (((((!((map__24279_24330 == null))))?(((((map__24279_24330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24279_24330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24279_24330):map__24279_24330);
var doc_24332 = cljs.core.get.call(null,map__24279_24331__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24333 = cljs.core.get.call(null,map__24279_24331__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24329);

cljs.core.println.call(null," ",arglists_24333);

if(cljs.core.truth_(doc_24332)){
cljs.core.println.call(null," ",doc_24332);
} else {
}


var G__24334 = cljs.core.next.call(null,seq__24257_24322__$1);
var G__24335 = null;
var G__24336 = (0);
var G__24337 = (0);
seq__24257_24307 = G__24334;
chunk__24258_24308 = G__24335;
count__24259_24309 = G__24336;
i__24260_24310 = G__24337;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__24281 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24282 = null;
var count__24283 = (0);
var i__24284 = (0);
while(true){
if((i__24284 < count__24283)){
var role = cljs.core._nth.call(null,chunk__24282,i__24284);
var temp__5735__auto___24338__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___24338__$1)){
var spec_24339 = temp__5735__auto___24338__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24339));
} else {
}


var G__24340 = seq__24281;
var G__24341 = chunk__24282;
var G__24342 = count__24283;
var G__24343 = (i__24284 + (1));
seq__24281 = G__24340;
chunk__24282 = G__24341;
count__24283 = G__24342;
i__24284 = G__24343;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__24281);
if(temp__5735__auto____$1){
var seq__24281__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24281__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24281__$1);
var G__24344 = cljs.core.chunk_rest.call(null,seq__24281__$1);
var G__24345 = c__4550__auto__;
var G__24346 = cljs.core.count.call(null,c__4550__auto__);
var G__24347 = (0);
seq__24281 = G__24344;
chunk__24282 = G__24345;
count__24283 = G__24346;
i__24284 = G__24347;
continue;
} else {
var role = cljs.core.first.call(null,seq__24281__$1);
var temp__5735__auto___24348__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___24348__$2)){
var spec_24349 = temp__5735__auto___24348__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24349));
} else {
}


var G__24350 = cljs.core.next.call(null,seq__24281__$1);
var G__24351 = null;
var G__24352 = (0);
var G__24353 = (0);
seq__24281 = G__24350;
chunk__24282 = G__24351;
count__24283 = G__24352;
i__24284 = G__24353;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__24354 = cljs.core.conj.call(null,via,t);
var G__24355 = cljs.core.ex_cause.call(null,t);
via = G__24354;
t = G__24355;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24358 = datafied_throwable;
var map__24358__$1 = (((((!((map__24358 == null))))?(((((map__24358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24358):map__24358);
var via = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24359 = cljs.core.last.call(null,via);
var map__24359__$1 = (((((!((map__24359 == null))))?(((((map__24359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24359):map__24359);
var type = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24360 = data;
var map__24360__$1 = (((((!((map__24360 == null))))?(((((map__24360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24360):map__24360);
var problems = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24361 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__24361__$1 = (((((!((map__24361 == null))))?(((((map__24361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24361):map__24361);
var top_data = map__24361__$1;
var source = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__24366 = phase;
var G__24366__$1 = (((G__24366 instanceof cljs.core.Keyword))?G__24366.fqn:null);
switch (G__24366__$1) {
case "read-source":
var map__24367 = data;
var map__24367__$1 = (((((!((map__24367 == null))))?(((((map__24367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24367):map__24367);
var line = cljs.core.get.call(null,map__24367__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24367__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24369 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__24369__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24369,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24369);
var G__24369__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24369__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24369__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24369__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24369__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24370 = top_data;
var G__24370__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24370,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24370);
var G__24370__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24370__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24370__$1);
var G__24370__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24370__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24370__$2);
var G__24370__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24370__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24370__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24370__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24370__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24371 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24371,(0),null);
var method = cljs.core.nth.call(null,vec__24371,(1),null);
var file = cljs.core.nth.call(null,vec__24371,(2),null);
var line = cljs.core.nth.call(null,vec__24371,(3),null);
var G__24374 = top_data;
var G__24374__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__24374,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24374);
var G__24374__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__24374__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24374__$1);
var G__24374__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__24374__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24374__$2);
var G__24374__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24374__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24374__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24374__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24374__$4;
}

break;
case "execution":
var vec__24375 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24375,(0),null);
var method = cljs.core.nth.call(null,vec__24375,(1),null);
var file = cljs.core.nth.call(null,vec__24375,(2),null);
var line = cljs.core.nth.call(null,vec__24375,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__24375,source__$1,method,file,line,G__24366,G__24366__$1,map__24358,map__24358__$1,via,trace,phase,map__24359,map__24359__$1,type,message,data,map__24360,map__24360__$1,problems,fn,caller,map__24361,map__24361__$1,top_data,source){
return (function (p1__24357_SHARP_){
var or__4131__auto__ = (p1__24357_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__24357_SHARP_);
}
});})(vec__24375,source__$1,method,file,line,G__24366,G__24366__$1,map__24358,map__24358__$1,via,trace,phase,map__24359,map__24359__$1,type,message,data,map__24360,map__24360__$1,problems,fn,caller,map__24361,map__24361__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__24378 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24378__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__24378,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24378);
var G__24378__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24378__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24378__$1);
var G__24378__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__24378__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24378__$2);
var G__24378__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__24378__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24378__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24378__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24378__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24366__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24382){
var map__24383 = p__24382;
var map__24383__$1 = (((((!((map__24383 == null))))?(((((map__24383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24383):map__24383);
var triage_data = map__24383__$1;
var phase = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24385 = phase;
var G__24385__$1 = (((G__24385 instanceof cljs.core.Keyword))?G__24385.fqn:null);
switch (G__24385__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24386_24395 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24387_24396 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24388_24397 = true;
var _STAR_print_fn_STAR__temp_val__24389_24398 = ((function (_STAR_print_newline_STAR__orig_val__24386_24395,_STAR_print_fn_STAR__orig_val__24387_24396,_STAR_print_newline_STAR__temp_val__24388_24397,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__24386_24395,_STAR_print_fn_STAR__orig_val__24387_24396,_STAR_print_newline_STAR__temp_val__24388_24397,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24388_24397;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24389_24398;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__24386_24395,_STAR_print_fn_STAR__orig_val__24387_24396,_STAR_print_newline_STAR__temp_val__24388_24397,_STAR_print_fn_STAR__temp_val__24389_24398,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__24386_24395,_STAR_print_fn_STAR__orig_val__24387_24396,_STAR_print_newline_STAR__temp_val__24388_24397,_STAR_print_fn_STAR__temp_val__24389_24398,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__24380_SHARP_){
return cljs.core.dissoc.call(null,p1__24380_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__24386_24395,_STAR_print_fn_STAR__orig_val__24387_24396,_STAR_print_newline_STAR__temp_val__24388_24397,_STAR_print_fn_STAR__temp_val__24389_24398,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__24386_24395,_STAR_print_fn_STAR__orig_val__24387_24396,_STAR_print_newline_STAR__temp_val__24388_24397,_STAR_print_fn_STAR__temp_val__24389_24398,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24387_24396;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24386_24395;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24390_24399 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24391_24400 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24392_24401 = true;
var _STAR_print_fn_STAR__temp_val__24393_24402 = ((function (_STAR_print_newline_STAR__orig_val__24390_24399,_STAR_print_fn_STAR__orig_val__24391_24400,_STAR_print_newline_STAR__temp_val__24392_24401,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__24390_24399,_STAR_print_fn_STAR__orig_val__24391_24400,_STAR_print_newline_STAR__temp_val__24392_24401,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24392_24401;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24393_24402;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__24390_24399,_STAR_print_fn_STAR__orig_val__24391_24400,_STAR_print_newline_STAR__temp_val__24392_24401,_STAR_print_fn_STAR__temp_val__24393_24402,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__24390_24399,_STAR_print_fn_STAR__orig_val__24391_24400,_STAR_print_newline_STAR__temp_val__24392_24401,_STAR_print_fn_STAR__temp_val__24393_24402,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__24381_SHARP_){
return cljs.core.dissoc.call(null,p1__24381_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__24390_24399,_STAR_print_fn_STAR__orig_val__24391_24400,_STAR_print_newline_STAR__temp_val__24392_24401,_STAR_print_fn_STAR__temp_val__24393_24402,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__24390_24399,_STAR_print_fn_STAR__orig_val__24391_24400,_STAR_print_newline_STAR__temp_val__24392_24401,_STAR_print_fn_STAR__temp_val__24393_24402,sb__4661__auto__,G__24385,G__24385__$1,loc,class_name,simple_class,cause_type,format,map__24383,map__24383__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24391_24400;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24390_24399;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24385__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
