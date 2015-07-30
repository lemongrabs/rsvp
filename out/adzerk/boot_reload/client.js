// Compiled by ClojureScript 0.0-3308 {}
goog.provide('adzerk.boot_reload.client');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.reload');
goog.require('goog.net.jsloader');
goog.require('adzerk.boot_reload.websocket');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
adzerk.boot_reload.client.ws_conn = cljs.core.atom.call(null,null);
adzerk.boot_reload.client.alive_QMARK_ = (function adzerk$boot_reload$client$alive_QMARK_(){
return !((cljs.core.deref.call(null,adzerk.boot_reload.client.ws_conn) == null));
});
adzerk.boot_reload.client.patch_goog_base_BANG_ = (function adzerk$boot_reload$client$patch_goog_base_BANG_(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = (function (file){
if(cljs.core.truth_(goog.inHtmlDocument_())){
return goog.net.jsloader.load(file);
} else {
return null;
}
});
});
adzerk.boot_reload.client.connect = (function adzerk$boot_reload$client$connect(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20887){
var vec__20888 = p__20887;
var opts = cljs.core.nth.call(null,vec__20888,(0),null);
var conn = adzerk.boot_reload.websocket.websocket_connection.call(null);
adzerk.boot_reload.client.patch_goog_base_BANG_.call(null);

cljs.core.reset_BANG_.call(null,adzerk.boot_reload.client.ws_conn,conn);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (conn,vec__20888,opts){
return (function (evt){
clojure.browser.net.transmit.call(null,conn,cljs.core.pr_str.call(null,window.location.protocol));

return console.info("Reload websocket connected.");
});})(conn,vec__20888,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"message","message",-406056002),((function (conn,vec__20888,opts){
return (function (evt){
var msg = cljs.reader.read_string.call(null,evt.message);
if(cljs.core.vector_QMARK_.call(null,msg)){
return adzerk.boot_reload.reload.reload.call(null,opts,msg);
} else {
return null;
}
});})(conn,vec__20888,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (conn,vec__20888,opts){
return (function (evt){
cljs.core.reset_BANG_.call(null,adzerk.boot_reload.client.ws_conn,null);

return console.info("Reload websocket connection closed.");
});})(conn,vec__20888,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),((function (conn,vec__20888,opts){
return (function (evt){
return console.error("Reload websocket error:",evt);
});})(conn,vec__20888,opts))
);

return clojure.browser.net.connect.call(null,conn,url);
});

adzerk.boot_reload.client.connect.cljs$lang$maxFixedArity = (1);

adzerk.boot_reload.client.connect.cljs$lang$applyTo = (function (seq20885){
var G__20886 = cljs.core.first.call(null,seq20885);
var seq20885__$1 = cljs.core.next.call(null,seq20885);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic(G__20886,seq20885__$1);
});

//# sourceMappingURL=client.js.map