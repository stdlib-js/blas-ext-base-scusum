"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(z,c){
var j=require('@stdlib/blas-ext-base-scusumkbn/dist');function b(e,r,u,s,i,a){return j(e,r,u,s,i,a)}c.exports=b
});var m=t(function(A,q){
var k=require('@stdlib/blas-ext-base-scusumkbn/dist').ndarray;function l(e,r,u,s,i,a,x,f){return k(e,r,u,s,i,a,x,f)}q.exports=l
});var p=t(function(B,d){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=v(),_=m();R(o,"ndarray",_);d.exports=o
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=p(),n,y=O(E(__dirname,"./native.js"));g(y)?n=h:n=y;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
