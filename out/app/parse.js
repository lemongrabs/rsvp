// Compiled by ClojureScript 0.0-3308 {}
goog.provide('app.parse');
goog.require('cljs.core');
goog.require('cljs.core.async');
if(typeof app.parse.Parse !== 'undefined'){
} else {
app.parse.Parse = (function (){var G__20706 = window.Parse;
G__20706.initialize("GAyi1ijtz2VMauaRRDqgcfqiiJyW5vQtwVFbFjfc","EZ5xm8O1AByYc75LUTFL4dj2vhfZg93vTOFeb1Mh");

return G__20706;
})();
}
app.parse.coll__GT_array = (function app$parse$coll__GT_array(coll){
return cljs.core.apply.call(null,cljs.core.array,cljs.core.flatten.call(null,cljs.core.seq.call(null,coll)));
});
app.parse.stringify_keys_shallow = (function app$parse$stringify_keys_shallow(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4964__auto__ = (function app$parse$stringify_keys_shallow_$_iter__20723(s__20724){
return (new cljs.core.LazySeq(null,(function (){
var s__20724__$1 = s__20724;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20724__$1);
if(temp__4425__auto__){
var s__20724__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20724__$2)){
var c__4962__auto__ = cljs.core.chunk_first.call(null,s__20724__$2);
var size__4963__auto__ = cljs.core.count.call(null,c__4962__auto__);
var b__20726 = cljs.core.chunk_buffer.call(null,size__4963__auto__);
if((function (){var i__20725 = (0);
while(true){
if((i__20725 < size__4963__auto__)){
var vec__20733 = cljs.core._nth.call(null,c__4962__auto__,i__20725);
var k = cljs.core.nth.call(null,vec__20733,(0),null);
var v = cljs.core.nth.call(null,vec__20733,(1),null);
cljs.core.chunk_append.call(null,b__20726,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20734 = k;
var G__20734__$1 = (((k instanceof cljs.core.Keyword))?cljs.core.name.call(null,G__20734):G__20734);
return G__20734__$1;
})(),(function (){var G__20735 = v;
var G__20735__$1 = ((cljs.core.sequential_QMARK_.call(null,v))?app.parse.coll__GT_array.call(null,G__20735):G__20735);
return G__20735__$1;
})()], null));

var G__20739 = (i__20725 + (1));
i__20725 = G__20739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20726),app$parse$stringify_keys_shallow_$_iter__20723.call(null,cljs.core.chunk_rest.call(null,s__20724__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20726),null);
}
} else {
var vec__20736 = cljs.core.first.call(null,s__20724__$2);
var k = cljs.core.nth.call(null,vec__20736,(0),null);
var v = cljs.core.nth.call(null,vec__20736,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20737 = k;
var G__20737__$1 = (((k instanceof cljs.core.Keyword))?cljs.core.name.call(null,G__20737):G__20737);
return G__20737__$1;
})(),(function (){var G__20738 = v;
var G__20738__$1 = ((cljs.core.sequential_QMARK_.call(null,v))?app.parse.coll__GT_array.call(null,G__20738):G__20738);
return G__20738__$1;
})()], null),app$parse$stringify_keys_shallow_$_iter__20723.call(null,cljs.core.rest.call(null,s__20724__$2)));
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
return (function (p1__20740_SHARP_){
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__,out){
return (function (state_20773){
var state_val_20774 = (state_20773[(1)]);
if((state_val_20774 === (1))){
var state_20773__$1 = state_20773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20773__$1,(2),out,p1__20740_SHARP_);
} else {
if((state_val_20774 === (2))){
var inst_20770 = (state_20773[(2)]);
var inst_20771 = cljs.core.async.close_BANG_.call(null,out);
var state_20773__$1 = (function (){var statearr_20775 = state_20773;
(statearr_20775[(7)] = inst_20770);

return statearr_20775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20773__$1,inst_20771);
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
var statearr_20779 = [null,null,null,null,null,null,null,null];
(statearr_20779[(0)] = app$parse$query_find_$_state_machine__6640__auto__);

(statearr_20779[(1)] = (1));

return statearr_20779;
});
var app$parse$query_find_$_state_machine__6640__auto____1 = (function (state_20773){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_20773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e20780){if((e20780 instanceof Object)){
var ex__6643__auto__ = e20780;
var statearr_20781_20796 = state_20773;
(statearr_20781_20796[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20797 = state_20773;
state_20773 = G__20797;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
app$parse$query_find_$_state_machine__6640__auto__ = function(state_20773){
switch(arguments.length){
case 0:
return app$parse$query_find_$_state_machine__6640__auto____0.call(this);
case 1:
return app$parse$query_find_$_state_machine__6640__auto____1.call(this,state_20773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$parse$query_find_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = app$parse$query_find_$_state_machine__6640__auto____0;
app$parse$query_find_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = app$parse$query_find_$_state_machine__6640__auto____1;
return app$parse$query_find_$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__,out))
})();
var state__6703__auto__ = (function (){var statearr_20782 = f__6702__auto__.call(null);
(statearr_20782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_20782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__,out))
);

return c__6701__auto__;
});})(out))
, "failure": ((function (out){
return (function (p1__20741_SHARP_){
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__,out){
return (function (state_20786){
var state_val_20787 = (state_20786[(1)]);
if((state_val_20787 === (1))){
var inst_20783 = console.error(p1__20741_SHARP_);
var inst_20784 = cljs.core.async.close_BANG_.call(null,out);
var state_20786__$1 = (function (){var statearr_20788 = state_20786;
(statearr_20788[(7)] = inst_20783);

return statearr_20788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20786__$1,inst_20784);
} else {
return null;
}
});})(c__6701__auto__,out))
;
return ((function (switch__6639__auto__,c__6701__auto__,out){
return (function() {
var app$parse$query_find_$_state_machine__6640__auto__ = null;
var app$parse$query_find_$_state_machine__6640__auto____0 = (function (){
var statearr_20792 = [null,null,null,null,null,null,null,null];
(statearr_20792[(0)] = app$parse$query_find_$_state_machine__6640__auto__);

(statearr_20792[(1)] = (1));

return statearr_20792;
});
var app$parse$query_find_$_state_machine__6640__auto____1 = (function (state_20786){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_20786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e20793){if((e20793 instanceof Object)){
var ex__6643__auto__ = e20793;
var statearr_20794_20798 = state_20786;
(statearr_20794_20798[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20799 = state_20786;
state_20786 = G__20799;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
app$parse$query_find_$_state_machine__6640__auto__ = function(state_20786){
switch(arguments.length){
case 0:
return app$parse$query_find_$_state_machine__6640__auto____0.call(this);
case 1:
return app$parse$query_find_$_state_machine__6640__auto____1.call(this,state_20786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$parse$query_find_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = app$parse$query_find_$_state_machine__6640__auto____0;
app$parse$query_find_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = app$parse$query_find_$_state_machine__6640__auto____1;
return app$parse$query_find_$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__,out))
})();
var state__6703__auto__ = (function (){var statearr_20795 = f__6702__auto__.call(null);
(statearr_20795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_20795;
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
return (function (p1__20800_SHARP_){
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__,out){
return (function (state_20843){
var state_val_20844 = (state_20843[(1)]);
if((state_val_20844 === (1))){
var inst_20836 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20837 = [new cljs.core.Keyword(null,"success","success",1890645906),p1__20800_SHARP_];
var inst_20838 = (new cljs.core.PersistentVector(null,2,(5),inst_20836,inst_20837,null));
var state_20843__$1 = state_20843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20843__$1,(2),out,inst_20838);
} else {
if((state_val_20844 === (2))){
var inst_20840 = (state_20843[(2)]);
var inst_20841 = cljs.core.async.close_BANG_.call(null,out);
var state_20843__$1 = (function (){var statearr_20845 = state_20843;
(statearr_20845[(7)] = inst_20840);

return statearr_20845;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20843__$1,inst_20841);
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
var statearr_20849 = [null,null,null,null,null,null,null,null];
(statearr_20849[(0)] = app$parse$save_$_state_machine__6640__auto__);

(statearr_20849[(1)] = (1));

return statearr_20849;
});
var app$parse$save_$_state_machine__6640__auto____1 = (function (state_20843){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_20843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e20850){if((e20850 instanceof Object)){
var ex__6643__auto__ = e20850;
var statearr_20851_20870 = state_20843;
(statearr_20851_20870[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20871 = state_20843;
state_20843 = G__20871;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
app$parse$save_$_state_machine__6640__auto__ = function(state_20843){
switch(arguments.length){
case 0:
return app$parse$save_$_state_machine__6640__auto____0.call(this);
case 1:
return app$parse$save_$_state_machine__6640__auto____1.call(this,state_20843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$parse$save_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = app$parse$save_$_state_machine__6640__auto____0;
app$parse$save_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = app$parse$save_$_state_machine__6640__auto____1;
return app$parse$save_$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__,out))
})();
var state__6703__auto__ = (function (){var statearr_20852 = f__6702__auto__.call(null);
(statearr_20852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_20852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6703__auto__);
});})(c__6701__auto__,out))
);

return c__6701__auto__;
});})(out))
,((function (out){
return (function (p1__20801_SHARP_){
var c__6701__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6701__auto__,out){
return (function (){
var f__6702__auto__ = (function (){var switch__6639__auto__ = ((function (c__6701__auto__,out){
return (function (state_20860){
var state_val_20861 = (state_20860[(1)]);
if((state_val_20861 === (1))){
var inst_20853 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20854 = [new cljs.core.Keyword(null,"failure","failure",720415879),p1__20801_SHARP_];
var inst_20855 = (new cljs.core.PersistentVector(null,2,(5),inst_20853,inst_20854,null));
var state_20860__$1 = state_20860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20860__$1,(2),out,inst_20855);
} else {
if((state_val_20861 === (2))){
var inst_20857 = (state_20860[(2)]);
var inst_20858 = cljs.core.async.close_BANG_.call(null,out);
var state_20860__$1 = (function (){var statearr_20862 = state_20860;
(statearr_20862[(7)] = inst_20857);

return statearr_20862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20860__$1,inst_20858);
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
var statearr_20866 = [null,null,null,null,null,null,null,null];
(statearr_20866[(0)] = app$parse$save_$_state_machine__6640__auto__);

(statearr_20866[(1)] = (1));

return statearr_20866;
});
var app$parse$save_$_state_machine__6640__auto____1 = (function (state_20860){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_20860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e20867){if((e20867 instanceof Object)){
var ex__6643__auto__ = e20867;
var statearr_20868_20872 = state_20860;
(statearr_20868_20872[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20873 = state_20860;
state_20860 = G__20873;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
app$parse$save_$_state_machine__6640__auto__ = function(state_20860){
switch(arguments.length){
case 0:
return app$parse$save_$_state_machine__6640__auto____0.call(this);
case 1:
return app$parse$save_$_state_machine__6640__auto____1.call(this,state_20860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$parse$save_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = app$parse$save_$_state_machine__6640__auto____0;
app$parse$save_$_state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = app$parse$save_$_state_machine__6640__auto____1;
return app$parse$save_$_state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6701__auto__,out))
})();
var state__6703__auto__ = (function (){var statearr_20869 = f__6702__auto__.call(null);
(statearr_20869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6701__auto__);

return statearr_20869;
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

app.parse.matches.cljs$core$IFn$_invoke$arity$variadic = (function (q,s,v,p__20878){
var vec__20879 = p__20878;
var map__20880 = cljs.core.nth.call(null,vec__20879,(0),null);
var map__20880__$1 = ((cljs.core.seq_QMARK_.call(null,map__20880))?cljs.core.apply.call(null,cljs.core.hash_map,map__20880):map__20880);
var insensitive = cljs.core.get.call(null,map__20880__$1,new cljs.core.Keyword(null,"insensitive","insensitive",-1609705365));
if(cljs.core.not.call(null,insensitive)){
return q.matches(s,v);
} else {
return q.matches(s,v,"i");
}
});

app.parse.matches.cljs$lang$maxFixedArity = (3);

app.parse.matches.cljs$lang$applyTo = (function (seq20874){
var G__20875 = cljs.core.first.call(null,seq20874);
var seq20874__$1 = cljs.core.next.call(null,seq20874);
var G__20876 = cljs.core.first.call(null,seq20874__$1);
var seq20874__$2 = cljs.core.next.call(null,seq20874__$1);
var G__20877 = cljs.core.first.call(null,seq20874__$2);
var seq20874__$3 = cljs.core.next.call(null,seq20874__$2);
return app.parse.matches.cljs$core$IFn$_invoke$arity$variadic(G__20875,G__20876,G__20877,seq20874__$3);
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