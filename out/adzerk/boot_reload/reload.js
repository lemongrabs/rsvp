// Compiled by ClojureScript 0.0-3308 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__21067_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__21067_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__21072 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__21073 = null;
var count__21074 = (0);
var i__21075 = (0);
while(true){
if((i__21075 < count__21074)){
var s = cljs.core._nth.call(null,chunk__21073,i__21075);
var temp__4425__auto___21076 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___21076)){
var sheet_21077 = temp__4425__auto___21076;
var temp__4425__auto___21078__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_21077.href,changed);
if(cljs.core.truth_(temp__4425__auto___21078__$1)){
var href_uri_21079 = temp__4425__auto___21078__$1;
sheet_21077.ownerNode.href = href_uri_21079.makeUnique().toString();
} else {
}
} else {
}

var G__21080 = seq__21072;
var G__21081 = chunk__21073;
var G__21082 = count__21074;
var G__21083 = (i__21075 + (1));
seq__21072 = G__21080;
chunk__21073 = G__21081;
count__21074 = G__21082;
i__21075 = G__21083;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21072);
if(temp__4425__auto__){
var seq__21072__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21072__$1)){
var c__4995__auto__ = cljs.core.chunk_first.call(null,seq__21072__$1);
var G__21084 = cljs.core.chunk_rest.call(null,seq__21072__$1);
var G__21085 = c__4995__auto__;
var G__21086 = cljs.core.count.call(null,c__4995__auto__);
var G__21087 = (0);
seq__21072 = G__21084;
chunk__21073 = G__21085;
count__21074 = G__21086;
i__21075 = G__21087;
continue;
} else {
var s = cljs.core.first.call(null,seq__21072__$1);
var temp__4425__auto___21088__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___21088__$1)){
var sheet_21089 = temp__4425__auto___21088__$1;
var temp__4425__auto___21090__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_21089.href,changed);
if(cljs.core.truth_(temp__4425__auto___21090__$2)){
var href_uri_21091 = temp__4425__auto___21090__$2;
sheet_21089.ownerNode.href = href_uri_21091.makeUnique().toString();
} else {
}
} else {
}

var G__21092 = cljs.core.next.call(null,seq__21072__$1);
var G__21093 = null;
var G__21094 = (0);
var G__21095 = (0);
seq__21072 = G__21092;
chunk__21073 = G__21093;
count__21074 = G__21094;
i__21075 = G__21095;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__21100 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__21101 = null;
var count__21102 = (0);
var i__21103 = (0);
while(true){
if((i__21103 < count__21102)){
var s = cljs.core._nth.call(null,chunk__21101,i__21103);
var temp__4425__auto___21104 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___21104)){
var image_21105 = temp__4425__auto___21104;
var temp__4425__auto___21106__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_21105.src,changed);
if(cljs.core.truth_(temp__4425__auto___21106__$1)){
var href_uri_21107 = temp__4425__auto___21106__$1;
image_21105.src = href_uri_21107.makeUnique().toString();
} else {
}
} else {
}

var G__21108 = seq__21100;
var G__21109 = chunk__21101;
var G__21110 = count__21102;
var G__21111 = (i__21103 + (1));
seq__21100 = G__21108;
chunk__21101 = G__21109;
count__21102 = G__21110;
i__21103 = G__21111;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21100);
if(temp__4425__auto__){
var seq__21100__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21100__$1)){
var c__4995__auto__ = cljs.core.chunk_first.call(null,seq__21100__$1);
var G__21112 = cljs.core.chunk_rest.call(null,seq__21100__$1);
var G__21113 = c__4995__auto__;
var G__21114 = cljs.core.count.call(null,c__4995__auto__);
var G__21115 = (0);
seq__21100 = G__21112;
chunk__21101 = G__21113;
count__21102 = G__21114;
i__21103 = G__21115;
continue;
} else {
var s = cljs.core.first.call(null,seq__21100__$1);
var temp__4425__auto___21116__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___21116__$1)){
var image_21117 = temp__4425__auto___21116__$1;
var temp__4425__auto___21118__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_21117.src,changed);
if(cljs.core.truth_(temp__4425__auto___21118__$2)){
var href_uri_21119 = temp__4425__auto___21118__$2;
image_21117.src = href_uri_21119.makeUnique().toString();
} else {
}
} else {
}

var G__21120 = cljs.core.next.call(null,seq__21100__$1);
var G__21121 = null;
var G__21122 = (0);
var G__21123 = (0);
seq__21100 = G__21120;
chunk__21101 = G__21121;
count__21102 = G__21122;
i__21103 = G__21123;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__21126){
var map__21128 = p__21126;
var map__21128__$1 = ((cljs.core.seq_QMARK_.call(null,map__21128))?cljs.core.apply.call(null,cljs.core.hash_map,map__21128):map__21128);
var on_jsload = cljs.core.get.call(null,map__21128__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__21128,map__21128__$1,on_jsload){
return (function (p1__21124_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__21124_SHARP_,".js");
});})(map__21128,map__21128__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__21128,map__21128__$1,on_jsload){
return (function (p1__21125_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__21125_SHARP_).makeUnique());
});})(js_files,map__21128,map__21128__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__21128,map__21128__$1,on_jsload){
return (function() { 
var G__21129__delegate = function (_){
return on_jsload.call(null);
};
var G__21129 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__21130__i = 0, G__21130__a = new Array(arguments.length -  0);
while (G__21130__i < G__21130__a.length) {G__21130__a[G__21130__i] = arguments[G__21130__i + 0]; ++G__21130__i;}
  _ = new cljs.core.IndexedSeq(G__21130__a,0);
} 
return G__21129__delegate.call(this,_);};
G__21129.cljs$lang$maxFixedArity = 0;
G__21129.cljs$lang$applyTo = (function (arglist__21131){
var _ = cljs.core.seq(arglist__21131);
return G__21129__delegate(_);
});
G__21129.cljs$core$IFn$_invoke$arity$variadic = G__21129__delegate;
return G__21129;
})()
;})(js_files,map__21128,map__21128__$1,on_jsload))
,((function (js_files,map__21128,map__21128__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__21128,map__21128__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__21136_21140 = cljs.core.seq.call(null,things_to_log);
var chunk__21137_21141 = null;
var count__21138_21142 = (0);
var i__21139_21143 = (0);
while(true){
if((i__21139_21143 < count__21138_21142)){
var t_21144 = cljs.core._nth.call(null,chunk__21137_21141,i__21139_21143);
console.log(t_21144);

var G__21145 = seq__21136_21140;
var G__21146 = chunk__21137_21141;
var G__21147 = count__21138_21142;
var G__21148 = (i__21139_21143 + (1));
seq__21136_21140 = G__21145;
chunk__21137_21141 = G__21146;
count__21138_21142 = G__21147;
i__21139_21143 = G__21148;
continue;
} else {
var temp__4425__auto___21149 = cljs.core.seq.call(null,seq__21136_21140);
if(temp__4425__auto___21149){
var seq__21136_21150__$1 = temp__4425__auto___21149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21136_21150__$1)){
var c__4995__auto___21151 = cljs.core.chunk_first.call(null,seq__21136_21150__$1);
var G__21152 = cljs.core.chunk_rest.call(null,seq__21136_21150__$1);
var G__21153 = c__4995__auto___21151;
var G__21154 = cljs.core.count.call(null,c__4995__auto___21151);
var G__21155 = (0);
seq__21136_21140 = G__21152;
chunk__21137_21141 = G__21153;
count__21138_21142 = G__21154;
i__21139_21143 = G__21155;
continue;
} else {
var t_21156 = cljs.core.first.call(null,seq__21136_21150__$1);
console.log(t_21156);

var G__21157 = cljs.core.next.call(null,seq__21136_21150__$1);
var G__21158 = null;
var G__21159 = (0);
var G__21160 = (0);
seq__21136_21140 = G__21157;
chunk__21137_21141 = G__21158;
count__21138_21142 = G__21159;
i__21139_21143 = G__21160;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__21162 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__21162,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__21162);

adzerk.boot_reload.reload.reload_css.call(null,G__21162);

adzerk.boot_reload.reload.reload_img.call(null,G__21162);

return G__21162;
});

//# sourceMappingURL=reload.js.map