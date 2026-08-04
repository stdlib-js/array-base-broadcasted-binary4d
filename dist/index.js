"use strict";var U=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(y){throw (a=0, y)}};};var T=U(function(Y,R){
var Q=require('@stdlib/array-base-broadcast-array/dist');function V(i,a,y){var A,g,l,p,w,B,C,D,s,f,u,n,t,x,e,o,c,j,k,z,S,b,q,m,E,F,G,H,I,J,K,L,M,v,r,d,N,O,P;if(v=a[2],s=v[3],f=v[2],u=v[1],n=v[0],!(s<=0||f<=0||u<=0||n<=0))for(d=Q(i[0],a[0],v),N=d.data,r=d.strides,A=r[3],g=r[2],l=r[1],p=r[0],d=Q(i[1],a[1],v),O=d.data,r=d.strides,w=r[3],B=r[2],C=r[1],D=r[0],P=i[2],z=0,m=0,o=0;o<n;o++){for(k=0,q=0,G=N[z],J=O[m],M=P[o],e=0;e<u;e++){for(j=0,b=0,F=G[k],I=J[q],L=M[e],x=0;x<f;x++){for(c=0,S=0,E=F[j],H=I[b],K=L[x],t=0;t<s;t++)K[t]=y(E[c],H[S]),c+=A,S+=w;j+=g,b+=B}k+=l,q+=C}z+=p,m+=D}}R.exports=V
});var W=T();module.exports=W;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
