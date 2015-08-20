// Compiled by ClojureScript 0.0-3308 {}
goog.provide('app.parse');
goog.require('cljs.core');
goog.require('cljs.core.async');
if(typeof app.parse.Parse !== 'undefined'){
} else {
app.parse.Parse = (function (){var G__25717 = window.Parse;
G__25717.initialize("GAyi1ijtz2VMauaRRDqgcfqiiJyW5vQtwVFbFjfc","EZ5xm8O1AByYc75LUTFL4dj2vhfZg93vTOFeb1Mh");

return G__25717;
})();
}
app.parse.coll__GT_array = (function app$parse$coll__GT_array(coll){
return cljs.core.apply.call(null,cljs.core.array,cljs.core.flatten.call(null,cljs.core.seq.call(null,coll)));
});
app.parse.stringify_keys_shallow = (function app$parse$stringify_keys_shallow(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4964__auto__ = (function app$parse$stringify_keys_shallow_$_iter__25734(s__25735){
return (new cljs.core.LazySeq(null,(function (){
var s__25735__$1 = s__25735;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25735__$1);
if(temp__4425__auto__){
var s__25735__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25735__$2)){
var c__4962__auto__ = cljs.core.chunk_first.call(null,s__25735__$2);
var size__4963__auto__ = cljs.core.count.call(null,c__4962__auto__);
var b__25737 = cljs.core.chunk_buffer.call(null,size__4963__auto__);
if((function (){var i__25736 = (0);
while(true){
if((i__25736 < size__4963__auto__)){
var vec__25744 = cljs.core._nth.call(null,c__4962__auto__,i__25736);
var k = cljs.core.nth.call(null,vec__25744,(0),null);
var v = cljs.core.nth.call(null,vec__25744,(1),null);
cljs.core.chunk_append.call(null,b__25737,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25745 = k;
var G__25745__$1 = (((k instanceof cljs.core.Keyword))?cljs.core.name.call(null,G__25745):G__25745);
return G__25745__$1;
})(),(function (){var G__25746 = v;
var G__25746__$1 = ((cljs.core.sequential_QMARK_.call(null,v))?app.parse.coll__GT_array.call(null,G__25746):G__25746);
return G__25746__$1;
})()], null));

var G__25750 = (i__25736 + (1));
i__25736 = G__25750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25737),app$parse$stringify_keys_shallow_$_iter__25734.call(null,cljs.core.chunk_rest.call(null,s__25735__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25737),null);
}
} else {
var vec__25747 = cljs.core.first.call(null,s__25735__$2);
var k = cljs.core.nth.call(null,vec__25747,(0),null);
var v = cljs.core.nth.call(null,vec__25747,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25748 = k;
var G__25748__$1 = (((k instanceof cljs.core.Keyword))?cljs.core.name.call(null,G__25748):G__25748);
return G__25748__$1;
})(),(function (){var G__25749 = v;
var G__25749__$1 = ((cljs.core.sequential_QMARK_.call(null,v))?app.parse.coll__GT_array.call(null,G__25749):G__25749);
return G__25749__$1;
})()], null),app$parse$stringify_keys_shallow_$_iter__25734.call(null,cljs.core.rest.call(null,s__25735__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4964__auto__.call(null,m);
})());
});
app.parse.map__GT_js_obj = (function app$parse$map__GT_js_obj(m){
return cljs.core.apply.call(null,cljs.core.js_obj,cljs.core.flatten.call(null,cljs.core.seq.call(null,app.parse.stringify_keys_shallow.call(null,m))));
});
app.parse.parse_obj__GT_map = (function app$parse$parse_obj__GT_map(o){
return cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,o.attributes,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"id","id",-1388402092),o.id);
});
app.parse.query_find = (function app$parse$query_find(q){
var out = cljs.core.async.chan.call(null);
q.find({"success": ((function (out){
return (function (p1__25751_SHARP_){
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__,out){
return (function (state_25784){
var state_val_25785 = (state_25784[(1)]);
if((state_val_25785 === (1))){
var state_25784__$1 = state_25784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25784__$1,(2),out,p1__25751_SHARP_);
} else {
if((state_val_25785 === (2))){
var inst_25781 = (state_25784[(2)]);
var inst_25782 = cljs.core.async.close_BANG_.call(null,out);
var state_25784__$1 = (function (){var statearr_25786 = state_25784;
(statearr_25786[(7)] = inst_25781);

return statearr_25786;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25784__$1,inst_25782);
} else {
return null;
}
}
});})(c__6701__auto__,out))
;
return ((function (switch__6639__auto__,c__6701__auto__,out){
return (function() {
var app$parse$query_find_$_state_machine__6640__auto__ = null;
var app$parse$query_find_$_state_machine__6640__auto____0 = (function (){
var statearr_25790 = [null,null,null,null,null,null,null,null];
(statearr_25790[(0)] = app$parse$query_find_$_state_machine__6640__auto__);

(statearr_25790[(1)] = (1));

return statearr_25790;
});
var app$parse$query_find_$_state_machine__6640__auto____1 = (function (state_25784){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_25784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e25791){if((e25791 instanceof Object)){
var ex__6643__auto__ = e25791;
var statearr_25792_25807 = state_25784;
(statearr_25792_25807[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25808 = state_25784;
state_25784 = G__25808;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
app$parse$query_find_$_state_machine__6640__auto__ = function(state_25784){
switch(arguments.length){
case 0:
return app$parse$query_find_$_state_machine__6640__auto____0.call(this);
case 1:
return app$parse$query_find_$_state_machine__6640__auto____1.call(this,state_25784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$parse$query_find_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = app$parse$query_find_$_state_machine__6640__auto____0;
app$parse$query_find_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = app$parse$query_find_$_state_machine__6640__auto____1;
return app$parse$query_find_$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__,out))
})();
var state__6703__auto__ = (function (){var statearr_25793 = f__6702__auto__.call(null);
(statearr_25793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_25793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__,out))
);

return c__6701__auto__;
});})(out))
, "failure": ((function (out){
return (function (p1__25752_SHARP_){
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__,out){
return (function (state_25797){
var state_val_25798 = (state_25797[(1)]);
if((state_val_25798 === (1))){
var inst_25794 = console.error(p1__25752_SHARP_);
var inst_25795 = cljs.core.async.close_BANG_.call(null,out);
var state_25797__$1 = (function (){var statearr_25799 = state_25797;
(statearr_25799[(7)] = inst_25794);

return statearr_25799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25797__$1,inst_25795);
} else {
return null;
}
});})(c__6701__auto__,out))
;
return ((function (switch__6639__auto__,c__6701__auto__,out){
return (function() {
var app$parse$query_find_$_state_machine__6640__auto__ = null;
var app$parse$query_find_$_state_machine__6640__auto____0 = (function (){
var statearr_25803 = [null,null,null,null,null,null,null,null];
(statearr_25803[(0)] = app$parse$query_find_$_state_machine__6640__auto__);

(statearr_25803[(1)] = (1));

return statearr_25803;
});
var app$parse$query_find_$_state_machine__6640__auto____1 = (function (state_25797){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_25797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e25804){if((e25804 instanceof Object)){
var ex__6643__auto__ = e25804;
var statearr_25805_25809 = state_25797;
(statearr_25805_25809[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25810 = state_25797;
state_25797 = G__25810;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
app$parse$query_find_$_state_machine__6640__auto__ = function(state_25797){
switch(arguments.length){
case 0:
return app$parse$query_find_$_state_machine__6640__auto____0.call(this);
case 1:
return app$parse$query_find_$_state_machine__6640__auto____1.call(this,state_25797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$parse$query_find_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = app$parse$query_find_$_state_machine__6640__auto____0;
app$parse$query_find_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = app$parse$query_find_$_state_machine__6640__auto____1;
return app$parse$query_find_$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__,out))
})();
var state__6703__auto__ = (function (){var statearr_25806 = f__6702__auto__.call(null);
(statearr_25806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_25806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__,out))
);

return c__6701__auto__;
});})(out))
});

return out;
});
app.parse.save = (function app$parse$save(c,m){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

var out = cljs.core.async.chan.call(null);
(new c()).save(app.parse.map__GT_js_obj.call(null,m)).then(((function (out){
return (function (p1__25811_SHARP_){
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__,out){
return (function (state_25854){
var state_val_25855 = (state_25854[(1)]);
if((state_val_25855 === (1))){
var inst_25847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25848 = [new cljs.core.Keyword(null,"success","success",1890645906),p1__25811_SHARP_];
var inst_25849 = (new cljs.core.PersistentVector(null,2,(5),inst_25847,inst_25848,null));
var state_25854__$1 = state_25854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25854__$1,(2),out,inst_25849);
} else {
if((state_val_25855 === (2))){
var inst_25851 = (state_25854[(2)]);
var inst_25852 = cljs.core.async.close_BANG_.call(null,out);
var state_25854__$1 = (function (){var statearr_25856 = state_25854;
(statearr_25856[(7)] = inst_25851);

return statearr_25856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25854__$1,inst_25852);
} else {
return null;
}
}
});})(c__6701__auto__,out))
;
return ((function (switch__6639__auto__,c__6701__auto__,out){
return (function() {
var app$parse$save_$_state_machine__6640__auto__ = null;
var app$parse$save_$_state_machine__6640__auto____0 = (function (){
var statearr_25860 = [null,null,null,null,null,null,null,null];
(statearr_25860[(0)] = app$parse$save_$_state_machine__6640__auto__);

(statearr_25860[(1)] = (1));

return statearr_25860;
});
var app$parse$save_$_state_machine__6640__auto____1 = (function (state_25854){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_25854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e25861){if((e25861 instanceof Object)){
var ex__6643__auto__ = e25861;
var statearr_25862_25881 = state_25854;
(statearr_25862_25881[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25882 = state_25854;
state_25854 = G__25882;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
app$parse$save_$_state_machine__6640__auto__ = function(state_25854){
switch(arguments.length){
case 0:
return app$parse$save_$_state_machine__6640__auto____0.call(this);
case 1:
return app$parse$save_$_state_machine__6640__auto____1.call(this,state_25854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$parse$save_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = app$parse$save_$_state_machine__6640__auto____0;
app$parse$save_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = app$parse$save_$_state_machine__6640__auto____1;
return app$parse$save_$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__,out))
})();
var state__6703__auto__ = (function (){var statearr_25863 = f__6702__auto__.call(null);
(statearr_25863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_25863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__,out))
);

return c__6701__auto__;
});})(out))
,((function (out){
return (function (p1__25812_SHARP_){
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__,out){
return (function (state_25871){
var state_val_25872 = (state_25871[(1)]);
if((state_val_25872 === (1))){
var inst_25864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25865 = [new cljs.core.Keyword(null,"failure","failure",720415879),p1__25812_SHARP_];
var inst_25866 = (new cljs.core.PersistentVector(null,2,(5),inst_25864,inst_25865,null));
var state_25871__$1 = state_25871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25871__$1,(2),out,inst_25866);
} else {
if((state_val_25872 === (2))){
var inst_25868 = (state_25871[(2)]);
var inst_25869 = cljs.core.async.close_BANG_.call(null,out);
var state_25871__$1 = (function (){var statearr_25873 = state_25871;
(statearr_25873[(7)] = inst_25868);

return statearr_25873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25871__$1,inst_25869);
} else {
return null;
}
}
});})(c__6701__auto__,out))
;
return ((function (switch__6639__auto__,c__6701__auto__,out){
return (function() {
var app$parse$save_$_state_machine__6640__auto__ = null;
var app$parse$save_$_state_machine__6640__auto____0 = (function (){
var statearr_25877 = [null,null,null,null,null,null,null,null];
(statearr_25877[(0)] = app$parse$save_$_state_machine__6640__auto__);

(statearr_25877[(1)] = (1));

return statearr_25877;
});
var app$parse$save_$_state_machine__6640__auto____1 = (function (state_25871){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_25871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e25878){if((e25878 instanceof Object)){
var ex__6643__auto__ = e25878;
var statearr_25879_25883 = state_25871;
(statearr_25879_25883[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25884 = state_25871;
state_25871 = G__25884;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
app$parse$save_$_state_machine__6640__auto__ = function(state_25871){
switch(arguments.length){
case 0:
return app$parse$save_$_state_machine__6640__auto____0.call(this);
case 1:
return app$parse$save_$_state_machine__6640__auto____1.call(this,state_25871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$parse$save_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = app$parse$save_$_state_machine__6640__auto____0;
app$parse$save_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = app$parse$save_$_state_machine__6640__auto____1;
return app$parse$save_$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__,out))
})();
var state__6703__auto__ = (function (){var statearr_25880 = f__6702__auto__.call(null);
(statearr_25880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_25880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__,out))
);

return c__6701__auto__;
});})(out))
);

return out;
});
app.parse.query = (function app$parse$query(c){
return (new Parse.Query(c));
});
app.parse.matches = (function app$parse$matches(){
var argseq__5250__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return app.parse.matches.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5250__auto__);
});

app.parse.matches.cljs$core$IFn$_invoke$arity$variadic = (function (q,s,v,p__25889){
var vec__25890 = p__25889;
var map__25891 = cljs.core.nth.call(null,vec__25890,(0),null);
var map__25891__$1 = ((cljs.core.seq_QMARK_.call(null,map__25891))?cljs.core.apply.call(null,cljs.core.hash_map,map__25891):map__25891);
var insensitive = cljs.core.get.call(null,map__25891__$1,new cljs.core.Keyword(null,"insensitive","insensitive",-1609705365));
if(cljs.core.not.call(null,insensitive)){
return q.matches(s,v);
} else {
return q.matches(s,v,"i");
}
});

app.parse.matches.cljs$lang$maxFixedArity = (3);

app.parse.matches.cljs$lang$applyTo = (function (seq25885){
var G__25886 = cljs.core.first.call(null,seq25885);
var seq25885__$1 = cljs.core.next.call(null,seq25885);
var G__25887 = cljs.core.first.call(null,seq25885__$1);
var seq25885__$2 = cljs.core.next.call(null,seq25885__$1);
var G__25888 = cljs.core.first.call(null,seq25885__$2);
var seq25885__$3 = cljs.core.next.call(null,seq25885__$2);
return app.parse.matches.cljs$core$IFn$_invoke$arity$variadic(G__25886,G__25887,G__25888,seq25885__$3);
});
app.parse.matches_query = (function app$parse$matches_query(q0,s,q1){
return q0.matchesQuery(s,q1);
});
app.parse.equal_to = (function app$parse$equal_to(q,s,v){
return q.equalTo(s,v);
});
app.parse.include = (function app$parse$include(q,s){
return q.include(s);
});

//# sourceMappingURL=parse.js.map