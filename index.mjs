// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@v0.2.2-esm/index.mjs";function a(a,s,t){var d,e,o,f,i,n,m,b,c,j,l,p,v,h,u,x,y,g,k,q,w,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q;if(c=(L=s[2])[3],j=L[2],l=L[1],p=L[0],!(c<=0||j<=0||l<=0||p<=0))for(O=(N=r(a[0],s[0],L)).data,d=(M=N.strides)[3],e=M[2],o=M[1],f=M[0],P=(N=r(a[1],s[1],L)).data,i=(M=N.strides)[3],n=M[2],m=M[1],b=M[0],Q=a[2],q=0,B=0,x=0;x<p;x++){for(k=0,A=0,E=O[q],H=P[B],K=Q[x],u=0;u<l;u++){for(g=0,z=0,D=E[k],G=H[A],J=K[u],h=0;h<j;h++){for(y=0,w=0,C=D[g],F=G[z],I=J[h],v=0;v<c;v++)I[v]=t(C[y],F[w]),y+=d,w+=i;g+=e,z+=n}k+=o,A+=m}q+=f,B+=b}}export{a as default};
//# sourceMappingURL=index.mjs.map
