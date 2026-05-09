"use strict";var U=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var R=U(function(Y,Q){
var P=require('@stdlib/array-base-broadcast-array/dist');function V(i,a,T){var m,A,g,l,p,w,B,C,y,s,f,u,t,x,e,o,n,c,j,k,z,S,b,q,D,E,F,G,H,I,J,K,L,v,r,d,M,N,O;if(v=a[2],y=v[3],s=v[2],f=v[1],u=v[0],!(y<=0||s<=0||f<=0||u<=0))for(d=P(i[0],a[0],v),M=d.data,r=d.strides,m=r[3],A=r[2],g=r[1],l=r[0],d=P(i[1],a[1],v),N=d.data,r=d.strides,p=r[3],w=r[2],B=r[1],C=r[0],O=i[2],k=0,q=0,o=0;o<u;o++){for(j=0,b=0,F=M[k],I=N[q],L=O[o],e=0;e<f;e++){for(c=0,S=0,E=F[j],H=I[b],K=L[e],x=0;x<s;x++){for(n=0,z=0,D=E[c],G=H[S],J=K[x],t=0;t<y;t++)J[t]=T(D[n],G[z]),n+=m,z+=p;c+=A,S+=w}j+=g,b+=B}k+=l,q+=C}}Q.exports=V
});var W=R();module.exports=W;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
