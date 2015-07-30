// Compiled by ClojureScript 0.0-3308 {}
goog.provide('adzerk.boot_reload');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.client');
goog.require('app.core');
if(cljs.core.truth_(adzerk.boot_reload.client.alive_QMARK_.call(null))){
} else {
adzerk.boot_reload.client.connect.call(null,"ws://localhost:50641",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return app.core.main.call(null);
})], null));
}

//# sourceMappingURL=boot_reload.js.map