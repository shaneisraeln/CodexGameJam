(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();class kt{constructor(t=0,e=0,s=0){this.data=new Float32Array([t,e,s]),this._onchange=null}get x(){return this.data[0]}set x(t){this.data[0]=t,this._onchange&&this._onchange()}get y(){return this.data[1]}set y(t){this.data[1]=t,this._onchange&&this._onchange()}get z(){return this.data[2]}set z(t){this.data[2]=t,this._onchange&&this._onchange()}set(t,e,s){return this.data[0]=t,this.data[1]=e,this.data[2]=s,this._onchange&&this._onchange(),this}copy(t){return this.data[0]=t.x,this.data[1]=t.y,this.data[2]=t.z,this._onchange&&this._onchange(),this}toArray(){return[this.data[0],this.data[1],this.data[2]]}add(t){return this.data[0]+=t.data[0],this.data[1]+=t.data[1],this.data[2]+=t.data[2],this._onchange&&this._onchange(),this}subtract(t){return this.data[0]-=t.data[0],this.data[1]-=t.data[1],this.data[2]-=t.data[2],this._onchange&&this._onchange(),this}scale(t){return this.data[0]*=t,this.data[1]*=t,this.data[2]*=t,this._onchange&&this._onchange(),this}magnitude(){const t=this.data[0],e=this.data[1],s=this.data[2];return Math.sqrt(t*t+e*e+s*s)}normalize(){const t=this.magnitude();return t>1e-5&&(this.data[0]/=t,this.data[1]/=t,this.data[2]/=t),this._onchange&&this._onchange(),this}}class tt{static identity(t){return yt.identity(t)}static copy(t,e){return t.set(e),t}static multiply(t,e,s){return yt.multiply(t,e,s)}static translate(t,e,s){return yt.translate(t,e,s)}static scale(t,e,s){return yt.scale(t,e,s)}static rotateX(t,e,s){return yt.rotateX(t,e,s)}static rotateY(t,e,s){return yt.rotateY(t,e,s)}static rotateZ(t,e,s){return yt.rotateZ(t,e,s)}static invert(t,e){return yt.invert(t,e)}static compose(t,e,s,n){return yt.compose(t,e,s,n)}}const yt={identity(a){return a.fill(0),a[0]=1,a[5]=1,a[10]=1,a[15]=1,a},multiply(a,t,e){let s=t[0],n=t[1],i=t[2],r=t[3],o=t[4],l=t[5],c=t[6],h=t[7],d=t[8],f=t[9],u=t[10],m=t[11],g=t[12],y=t[13],w=t[14],L=t[15],B=e[0],k=e[1],D=e[2],T=e[3];return a[0]=B*s+k*o+D*d+T*g,a[1]=B*n+k*l+D*f+T*y,a[2]=B*i+k*c+D*u+T*w,a[3]=B*r+k*h+D*m+T*L,B=e[4],k=e[5],D=e[6],T=e[7],a[4]=B*s+k*o+D*d+T*g,a[5]=B*n+k*l+D*f+T*y,a[6]=B*i+k*c+D*u+T*w,a[7]=B*r+k*h+D*m+T*L,B=e[8],k=e[9],D=e[10],T=e[11],a[8]=B*s+k*o+D*d+T*g,a[9]=B*n+k*l+D*f+T*y,a[10]=B*i+k*c+D*u+T*w,a[11]=B*r+k*h+D*m+T*L,B=e[12],k=e[13],D=e[14],T=e[15],a[12]=B*s+k*o+D*d+T*g,a[13]=B*n+k*l+D*f+T*y,a[14]=B*i+k*c+D*u+T*w,a[15]=B*r+k*h+D*m+T*L,a},translate(a,t,e){let s=e.x!==void 0?e.x:e[0],n=e.y!==void 0?e.y:e[1],i=e.z!==void 0?e.z:e[2];if(t===a)a[12]=t[0]*s+t[4]*n+t[8]*i+t[12],a[13]=t[1]*s+t[5]*n+t[9]*i+t[13],a[14]=t[2]*s+t[6]*n+t[10]*i+t[14],a[15]=t[3]*s+t[7]*n+t[11]*i+t[15];else{let r=t[0],o=t[1],l=t[2],c=t[3],h=t[4],d=t[5],f=t[6],u=t[7],m=t[8],g=t[9],y=t[10],w=t[11];a[0]=r,a[1]=o,a[2]=l,a[3]=c,a[4]=h,a[5]=d,a[6]=f,a[7]=u,a[8]=m,a[9]=g,a[10]=y,a[11]=w,a[12]=r*s+h*n+m*i+t[12],a[13]=o*s+d*n+g*i+t[13],a[14]=l*s+f*n+y*i+t[14],a[15]=c*s+u*n+w*i+t[15]}return a},scale(a,t,e){let s=e.x!==void 0?e.x:e[0],n=e.y!==void 0?e.y:e[1],i=e.z!==void 0?e.z:e[2];return a[0]=t[0]*s,a[1]=t[1]*s,a[2]=t[2]*s,a[3]=t[3]*s,a[4]=t[4]*n,a[5]=t[5]*n,a[6]=t[6]*n,a[7]=t[7]*n,a[8]=t[8]*i,a[9]=t[9]*i,a[10]=t[10]*i,a[11]=t[11]*i,a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a},rotateX(a,t,e){let s=Math.sin(e),n=Math.cos(e),i=t[4],r=t[5],o=t[6],l=t[7],c=t[8],h=t[9],d=t[10],f=t[11];return t!==a&&(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[4]=i*n+c*s,a[5]=r*n+h*s,a[6]=o*n+d*s,a[7]=l*n+f*s,a[8]=c*n-i*s,a[9]=h*n-r*s,a[10]=d*n-o*s,a[11]=f*n-l*s,a},rotateY(a,t,e){let s=Math.sin(e),n=Math.cos(e),i=t[0],r=t[1],o=t[2],l=t[3],c=t[8],h=t[9],d=t[10],f=t[11];return t!==a&&(a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[0]=i*n-c*s,a[1]=r*n-h*s,a[2]=o*n-d*s,a[3]=l*n-f*s,a[8]=i*s+c*n,a[9]=r*s+h*n,a[10]=o*s+d*n,a[11]=l*s+f*n,a},rotateZ(a,t,e){let s=Math.sin(e),n=Math.cos(e),i=t[0],r=t[1],o=t[2],l=t[3],c=t[4],h=t[5],d=t[6],f=t[7];return t!==a&&(a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[0]=i*n+c*s,a[1]=r*n+h*s,a[2]=o*n+d*s,a[3]=l*n+f*s,a[4]=c*n-i*s,a[5]=h*n-r*s,a[6]=d*n-o*s,a[7]=f*n-l*s,a},invert(a,t){let e=t[0],s=t[1],n=t[2],i=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],g=t[13],y=t[14],w=t[15],L=e*o-s*r,B=e*l-n*r,k=e*c-i*r,D=s*l-n*o,T=s*c-i*o,I=n*c-i*l,p=h*g-d*m,C=h*y-f*m,A=h*w-u*m,P=d*y-f*g,W=d*w-u*g,x=f*w-u*y,z=L*x-B*W+k*P+D*A-T*C+I*p;return z?(z=1/z,a[0]=(o*x-l*W+c*P)*z,a[1]=(n*W-s*x-i*P)*z,a[2]=(g*I-y*T+w*D)*z,a[3]=(f*T-d*I-u*D)*z,a[4]=(l*A-r*x-c*C)*z,a[5]=(e*x-n*A+i*C)*z,a[6]=(y*k-m*I-w*B)*z,a[7]=(h*I-f*k+u*B)*z,a[8]=(r*W-o*A+c*p)*z,a[9]=(s*A-e*W-i*p)*z,a[10]=(m*T-g*k+w*L)*z,a[11]=(d*k-h*T-u*L)*z,a[12]=(o*C-r*P-l*p)*z,a[13]=(e*P-s*C+n*p)*z,a[14]=(g*B-m*D-y*L)*z,a[15]=(h*D-d*B+f*L)*z,a):null},compose(a,t,e,s){let n=t.x!==void 0?t.x:t[0],i=t.y!==void 0?t.y:t[1],r=t.z!==void 0?t.z:t[2],o=e.x!==void 0?e.x:e[0],l=e.y!==void 0?e.y:e[1],c=e.z!==void 0?e.z:e[2],h=s.x!==void 0?s.x:s[0],d=s.y!==void 0?s.y:s[1],f=s.z!==void 0?s.z:s[2],u=Math.cos(l),m=Math.sin(l),g=Math.cos(o),y=Math.sin(o),w=Math.cos(c),L=Math.sin(c);return a[0]=(u*w-m*y*L)*h,a[1]=(u*L+m*y*w)*h,a[2]=-m*g*h,a[3]=0,a[4]=-g*L*d,a[5]=g*w*d,a[6]=y*d,a[7]=0,a[8]=(m*w+u*y*L)*f,a[9]=(m*L-u*y*w)*f,a[10]=u*g*f,a[11]=0,a[12]=n,a[13]=i,a[14]=r,a[15]=1,a}};class hs{constructor(){this.position=new kt(0,0,0),this.rotation=new kt(0,0,0),this.scale=new kt(1,1,1),this.localMatrix=new Float32Array(16),this.worldMatrix=new Float32Array(16),tt.identity(this.localMatrix),tt.identity(this.worldMatrix),this.parent=null,this.children=[],this._isDirty=!0,this.position._onchange=()=>this.markDirty(),this.rotation._onchange=()=>this.markDirty(),this.scale._onchange=()=>this.markDirty()}add(t){t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.markDirty()}remove(t){const e=this.children.indexOf(t);if(e!==-1){t.parent=null;const s=this.children.length-1;e!==s&&(this.children[e]=this.children[s]),this.children.pop()}}markDirty(){this._isDirty=!0}updateLocalMatrix(){this._isDirty&&(tt.identity(this.localMatrix),tt.translate(this.localMatrix,this.localMatrix,this.position),tt.rotateY(this.localMatrix,this.localMatrix,this.rotation.y),tt.rotateX(this.localMatrix,this.localMatrix,this.rotation.x),tt.rotateZ(this.localMatrix,this.localMatrix,this.rotation.z),tt.scale(this.localMatrix,this.localMatrix,this.scale),this._isDirty=!1)}updateWorldMatrix(){this.updateLocalMatrix(),this.parent?tt.multiply(this.worldMatrix,this.parent.worldMatrix,this.localMatrix):this.worldMatrix.set(this.localMatrix);for(let t=0;t<this.children.length;t++)this.children[t].updateWorldMatrix()}get globalPosition(){return this.updateWorldMatrix(),new kt(this.worldMatrix[12],this.worldMatrix[13],this.worldMatrix[14])}setGlobalPosition(t,e,s){if(!this.parent){this.position.set(t,e,s);return}this.parent.updateWorldMatrix();const n=new Float32Array(16);tt.invert(n,this.parent.worldMatrix);const i=t,r=e,o=s,l=n[0]*i+n[4]*r+n[8]*o+n[12],c=n[1]*i+n[5]*r+n[9]*o+n[13],h=n[2]*i+n[6]*r+n[10]*o+n[14];this.position.set(l,c,h)}get globalScale(){this.updateWorldMatrix();const t=Math.sqrt(this.worldMatrix[0]**2+this.worldMatrix[1]**2+this.worldMatrix[2]**2),e=Math.sqrt(this.worldMatrix[4]**2+this.worldMatrix[5]**2+this.worldMatrix[6]**2),s=Math.sqrt(this.worldMatrix[8]**2+this.worldMatrix[9]**2+this.worldMatrix[10]**2);return new kt(t,e,s)}}class rt{constructor(t,e,s=null,n="GameObject"){this.name=n,this.active=!0,this.transform=new hs,this.transform.gameObject=this,this.renderer=t,this.material=e,this.mesh=s}render(t,e=void 0,s=null){if(!this.active)return;this.transform.updateWorldMatrix();const n=s||this.material;this.renderer&&n&&this.renderer.draw(this,t,e,n)}}class cs extends rt{constructor(){super(null),this.projectionMatrix=new Float32Array(16),this.viewMatrix=new Float32Array(16),this.fov=45*Math.PI/180,this.aspect=1,this.near=.1,this.far=100,this.orthographic=!1,this.orthoSize=30,tt.identity(this.projectionMatrix),tt.identity(this.viewMatrix),this.transform.position.set(0,0,5),this.name="Camera"}setPerspective(t,e,s,n){this.fov=t,this.aspect=e,this.near=s,this.far=n,this.orthographic=!1;const i=1/Math.tan(t/2),r=this.projectionMatrix;r.fill(0),r[0]=i/e,r[5]=i,r[10]=(n+s)/(s-n),r[11]=-1,r[14]=2*n*s/(s-n)}setOrthographic(t,e,s,n,i,r){this.near=i,this.far=r,this.orthographic=!0,this.orthoSize=(n-s)/2;const o=this.projectionMatrix,l=1/(t-e),c=1/(s-n),h=1/(i-r);o.fill(0),o[0]=-2*l,o[5]=-2*c,o[10]=2*h,o[12]=(t+e)*l,o[13]=(n+s)*c,o[14]=(r+i)*h,o[15]=1}updateProjection(){if(this.orthographic){const t=this.orthoSize;this.setOrthographic(-t*this.aspect,t*this.aspect,-t,t,this.near,this.far)}else this.setPerspective(this.fov,this.aspect,this.near,this.far)}updateView(){this.transform.updateWorldMatrix(),tt.invert(this.viewMatrix,this.transform.worldMatrix)}getScreenPosition(t,e=null){const s=this.viewMatrix,n=this.projectionMatrix;t.transform.updateWorldMatrix();const i=t.transform.worldMatrix,r=i[12],o=i[13],l=i[14],c=1,h=s[0]*r+s[4]*o+s[8]*l+s[12]*c,d=s[1]*r+s[5]*o+s[9]*l+s[13]*c,f=s[2]*r+s[6]*o+s[10]*l+s[14]*c,u=s[3]*r+s[7]*o+s[11]*l+s[15]*c,m=n[0]*h+n[4]*d+n[8]*f+n[12]*u,g=n[1]*h+n[5]*d+n[9]*f+n[13]*u;n[2]*h+n[6]*d+n[10]*f+n[14]*u;const y=n[3]*h+n[7]*d+n[11]*f+n[15]*u;if(y===0)return e?(e[0]=.5,e[1]=.5):e=[.5,.5],e;const w=m/y,L=g/y,B=(w+1)*.5,k=(L+1)*.5;return e?(e[0]=B,e[1]=k):e=[B,k],e}}class vt{constructor(t,e,s,n=null,i=null){this.gl=t;const r=this.loadShader(t.VERTEX_SHADER,e),o=this.loadShader(t.FRAGMENT_SHADER,s);this.program=t.createProgram(),t.attachShader(this.program,r);let l=!1;if(n&&i){const c=this.loadShader(36488,n),h=this.loadShader(36487,i);c&&h?(t.attachShader(this.program,c),t.attachShader(this.program,h),l=!0):console.warn("Tessellation shaders not supported, falling back to vertex/fragment only")}t.attachShader(this.program,o),t.linkProgram(this.program),t.getProgramParameter(this.program,t.LINK_STATUS)||console.error("Shader init error:",t.getProgramInfoLog(this.program)),this.uniforms={},this.attributes={},this.tessellationSupported=l}getUniformLocation(t){return this.uniforms[t]===void 0&&(this.uniforms[t]=this.gl.getUniformLocation(this.program,t)),this.uniforms[t]}setUniform(t,e,s){const n=this.gl,i=this.getUniformLocation(t);if(i){if(s){s==="1i"?n.uniform1i(i,e):s==="1f"?n.uniform1f(i,e):s==="2fv"?n.uniform2fv(i,e):s==="3fv"?n.uniform3fv(i,e):s==="4fv"?n.uniform4fv(i,e):s==="Matrix4fv"&&n.uniformMatrix4fv(i,!1,e);return}if(typeof e=="number")n.uniform1f(i,e);else if(Array.isArray(e)||e instanceof Float32Array)switch(e.length){case 2:n.uniform2fv(i,e);break;case 3:n.uniform3fv(i,e);break;case 4:n.uniform4fv(i,e);break;case 16:n.uniformMatrix4fv(i,!1,e);break;default:console.warn(`Unsupported uniform array length: ${e.length} for ${t}`)}}}getAttribLocation(t){return this.attributes[t]===void 0&&(this.attributes[t]=this.gl.getAttribLocation(this.program,t)),this.attributes[t]}use(){this.gl.useProgram(this.program)}loadShader(t,e){let s=e;if(Array.isArray(e)){let i="";const r=e.map(o=>{if(typeof o!="string")return"";const l=o.split(/\r?\n/),c=[];for(const h of l){if(h.trim().startsWith("#version")){i||(i=h.trim());continue}c.push(h)}return c.join(`
`)});i?s=`${i}
${r.join(`
`)}`:s=r.join(`
`)}let n;try{if(n=this.gl.createShader(t),!n)return console.warn(`Shader type ${t} not supported`),null}catch(i){return console.warn(`Shader type ${t} not supported:`,i.message),null}return this.gl.shaderSource(n,s),this.gl.compileShader(n),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)?n:(console.error("Shader compile error:",this.gl.getShaderInfoLog(n)),this.gl.deleteShader(n),null)}}class se{constructor(t,e,s,n,i=null){this.gl=t,this.vertices=e,this.uvs=s,this.normals=n,this.indices=i,this.count=i?i.length:e.length/3,this.vertexBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,this.vertices,t.STATIC_DRAW),this.uvs&&this.uvs.length>0&&(this.uvBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer),t.bufferData(t.ARRAY_BUFFER,this.uvs,t.STATIC_DRAW)),this.normals&&this.normals.length>0&&(this.normalBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer),t.bufferData(t.ARRAY_BUFFER,this.normals,t.STATIC_DRAW)),this.indices&&this.indices.length>0&&(this.indexBuffer=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.indices,t.STATIC_DRAW))}bind(t){const e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer);const s=t.getAttribLocation("aVertexPosition");if(s!==-1&&(e.enableVertexAttribArray(s),e.vertexAttribPointer(s,3,e.FLOAT,!1,0,0)),this.uvBuffer){e.bindBuffer(e.ARRAY_BUFFER,this.uvBuffer);const n=t.getAttribLocation("aTexCoord");n!==-1&&(e.enableVertexAttribArray(n),e.vertexAttribPointer(n,2,e.FLOAT,!1,0,0))}if(this.normalBuffer){e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer);const n=t.getAttribLocation("aNormal");n!==-1&&(e.enableVertexAttribArray(n),e.vertexAttribPointer(n,3,e.FLOAT,!1,0,0))}if(this.colorBuffer){e.bindBuffer(e.ARRAY_BUFFER,this.colorBuffer);const n=t.getAttribLocation("aColor");n!==-1&&(e.enableVertexAttribArray(n),e.vertexAttribPointer(n,3,e.FLOAT,!1,0,0))}this.indexBuffer&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer)}draw(){const t=this.gl;this.indices&&this.indices.length>0?t.drawElements(t.TRIANGLES,this.count,t.UNSIGNED_SHORT,0):t.drawArrays(t.TRIANGLES,0,this.count)}}class ds{constructor(t){this.gl=t,this.drawCalls=0,this.currentPassDrawCalls=[],this.drawCallDetails=[],this.currentPassName=null;const e=new Float32Array([-.5,.5,0,-.5,-.5,0,.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),s=new Float32Array([0,1,0,0,1,1,1,1,0,0,1,0]),n=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]);this.defaultMesh=new se(t,e,s,n)}draw(t,e,s=void 0,n=null){const i=n||t.material;if(!i||!i.shader)return;const r=this.gl,o=t.mesh||this.defaultMesh;s!==void 0&&(s?s.bind():(r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height)));const l=i.shader;l.use(),o.bind(l);const c=r.getUniformBlockIndex(l.program,"FrameData");r.uniformBlockBinding(l.program,c,0),l.setUniform("uModelMatrix",t.transform.worldMatrix);for(const u in i.uniforms){const m=i.uniforms[u];let g=m.value,y=m.type;(g instanceof WebGLTexture||y==="1i"&&g&&typeof g=="object")&&r.bindTexture(r.TEXTURE_2D,g),l.setUniform(u,g,y)}if(!this.currentPassName){o.draw(),this.drawCalls++;return}const h=performance.now();o.draw();const f=performance.now()-h;this.drawCalls++,this.drawCallDetails.push({pass:this.currentPassName,object:t.name,duration:f,vertices:o.count})}resetDrawCalls(){const t={count:this.drawCalls,details:this.drawCallDetails.slice()};return this.drawCalls=0,this.drawCallDetails.length=0,t}}class lt{constructor(t,e="Material"){this.shader=t,this.uniforms={},this.name=e}setUniforms(t){for(const e in t){let s=t[e];Array.isArray(s)||s instanceof Float32Array?s.length===2?this.setVec2(e,s[0],s[1]):s.length===3?this.setVec3(e,s[0],s[1],s[2]):s.length===4?this.setVec4(e,s[0],s[1],s[2],s[3]):s.length===16&&this.setMat4(e,s):typeof s=="number"?this.setFloat(e,s):s instanceof WebGLTexture&&(this.uniforms[e]={value:s,type:"Texture"})}return this}setFloat(t,e){this.uniforms[t]&&this.uniforms[t].type==="1f"?this.uniforms[t].value=e:this.uniforms[t]={type:"1f",value:e}}setVec2(t,e,s){if(this.uniforms[t]&&this.uniforms[t].type==="2fv"){const n=this.uniforms[t].value;n[0]=e,n[1]=s}else this.uniforms[t]={type:"2fv",value:new Float32Array([e,s])}}setVec3(t,e,s,n){if(this.uniforms[t]&&this.uniforms[t].type==="3fv"){const i=this.uniforms[t].value;i[0]=e,i[1]=s,i[2]=n}else this.uniforms[t]={type:"3fv",value:new Float32Array([e,s,n])}}setVec4(t,e,s,n,i){if(this.uniforms[t]&&this.uniforms[t].type==="4fv"){const r=this.uniforms[t].value;r[0]=e,r[1]=s,r[2]=n,r[3]=i}else this.uniforms[t]={type:"4fv",value:new Float32Array([e,s,n,i])}}setMat4(t,e){this.uniforms[t]={type:"Matrix4fv",value:e}}setUniform(t,e,s){this.uniforms[t]={type:s,value:e}}}function fs(a,t,e){const s={RGBA:{8:{internalFormat:a.RGBA8,glFormat:a.RGBA,glType:a.UNSIGNED_BYTE},"16f":{internalFormat:a.RGBA16F,glFormat:a.RGBA,glType:a.HALF_FLOAT},"32f":{internalFormat:a.RGBA32F,glFormat:a.RGBA,glType:a.FLOAT}},RGB:{8:{internalFormat:a.RGB8,glFormat:a.RGB,glType:a.UNSIGNED_BYTE},"16f":{internalFormat:a.RGB16F,glFormat:a.RGB,glType:a.HALF_FLOAT},"32f":{internalFormat:a.RGB32F,glFormat:a.RGB,glType:a.FLOAT}},RG:{8:{internalFormat:a.RG8,glFormat:a.RG,glType:a.UNSIGNED_BYTE},"16f":{internalFormat:a.RG16F,glFormat:a.RG,glType:a.HALF_FLOAT},"32f":{internalFormat:a.RG32F,glFormat:a.RG,glType:a.FLOAT}},R:{8:{internalFormat:a.R8,glFormat:a.RED,glType:a.UNSIGNED_BYTE},"16f":{internalFormat:a.R16F,glFormat:a.RED,glType:a.HALF_FLOAT},"32f":{internalFormat:a.R32F,glFormat:a.RED,glType:a.FLOAT}}},n=s[t]?.[e];return n||(console.warn(`RenderTarget: Unknown format/precision "${t} ${e}", falling back to RGBA8`),s.RGBA[8])}class ne{constructor(t,e,s,n={}){this.gl=t,this.width=e,this.height=s,this.format=n.format??"RGBA",this.precision=n.precision??"8",this.hasDepth=n.depth??!0,this.framebuffer=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer),this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture);const{internalFormat:i,glFormat:r,glType:o}=fs(t,this.format,this.precision);this._internalFormat=i,this._glFormat=r,this._glType=o,t.texImage2D(t.TEXTURE_2D,0,i,e,s,0,r,o,null);const l=n.minFilter??t.LINEAR,c=n.magFilter??t.LINEAR,h=n.wrapS??t.CLAMP_TO_EDGE,d=n.wrapT??t.CLAMP_TO_EDGE;t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,d),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture,0),this.depthBuffer=null,this.hasDepth&&(this.depthBuffer=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,this.depthBuffer),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,e,s),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,this.depthBuffer));const f=t.checkFramebufferStatus(t.FRAMEBUFFER);f!==t.FRAMEBUFFER_COMPLETE&&console.error("RenderTarget: Framebuffer is not complete — status: "+f),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null)}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.viewport(0,0,this.width,this.height)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}resize(t,e){if(this.width===t&&this.height===e)return;this.width=t,this.height=e;const s=this.gl;s.bindTexture(s.TEXTURE_2D,this.texture),s.texImage2D(s.TEXTURE_2D,0,this._internalFormat,t,e,0,this._glFormat,this._glType,null),this.hasDepth&&this.depthBuffer&&(s.bindRenderbuffer(s.RENDERBUFFER,this.depthBuffer),s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_COMPONENT16,t,e)),s.bindTexture(s.TEXTURE_2D,null),s.bindRenderbuffer(s.RENDERBUFFER,null)}invalidate(t=!0){const e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer);const s=[e.COLOR_ATTACHMENT0];t&&this.hasDepth&&s.push(e.DEPTH_ATTACHMENT),e.invalidateFramebuffer(e.FRAMEBUFFER,s),e.bindFramebuffer(e.FRAMEBUFFER,null)}destroy(){const t=this.gl;t.deleteFramebuffer(this.framebuffer),t.deleteTexture(this.texture),this.depthBuffer&&t.deleteRenderbuffer(this.depthBuffer),this.framebuffer=null,this.texture=null,this.depthBuffer=null}getMemorySize(){let t=0;const e=this.format==="RGBA"?4:this.format==="RGB"?3:this.format==="RG"?2:1,s=this.precision==="32f"?4:this.precision==="16f"?2:1;return t+=this.width*this.height*e*s,this.hasDepth&&(t+=this.width*this.height*2),t}}class us{constructor(){this.time=0,this.deltaTime=0,this.unscaledTime=0,this.unscaledDeltaTime=0,this.timeScale=1,this._lastTime=0,this._initialized=!1}update(t){const e=t*.001;this._initialized||(this._lastTime=e,this._initialized=!0),this.unscaledDeltaTime=e-this._lastTime,this.unscaledTime+=this.unscaledDeltaTime,this.deltaTime=this.unscaledDeltaTime*this.timeScale,this.time+=this.deltaTime,this._lastTime=e}}const J=new us;class mt{static async load(t,e){const n=await(await fetch(e)).text(),i=this.parse(t,n);return new se(t,i.positions,i.uvs,i.normals)}static parse(t,e){const s=[],n=[],i=[],r=[],o=[],l=[],c=e.split(`
`);for(let h of c){if(h=h.trim(),h.startsWith("#")||h==="")continue;const d=h.split(/\s+/),f=d[0];if(f==="v")s.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(f==="vt")n.push([parseFloat(d[1]),parseFloat(d[2])]);else if(f==="vn")i.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(f==="f"){const u=d.slice(1);for(let m=1;m<u.length-1;m++){const g=u[0],y=u[m],w=u[m+1];this.processVertex(g,s,n,i,r,o,l),this.processVertex(y,s,n,i,r,o,l),this.processVertex(w,s,n,i,r,o,l)}}}return{positions:new Float32Array(r),uvs:new Float32Array(o),normals:new Float32Array(l),vertexCount:r.length/3}}static processVertex(t,e,s,n,i,r,o){const l=t.split("/"),c=parseInt(l[0])-1,h=l[1]?parseInt(l[1])-1:-1,d=l[2]?parseInt(l[2])-1:-1,f=e[c];if(i.push(f[0],f[1],f[2]),h>=0){const u=s[h];r.push(u[0],u[1])}else r.push(0,0);if(d>=0){const u=n[d];o.push(u[0],u[1],u[2])}else o.push(0,1,0)}}class jt{constructor(t,e){this.gl=t,this.texture=t.createTexture(),this.image=new Image,this.loaded=!1,t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),this.image.onload=()=>{t.bindTexture(t.TEXTURE_2D,this.texture),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,this.image),this.isPowerOf2(this.image.width)&&this.isPowerOf2(this.image.height)?t.generateMipmap(t.TEXTURE_2D):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR)),this.loaded=!0},this.image.src=e}isPowerOf2(t){return(t&t-1)===0}getMemorySize(){if(!this.loaded||!this.image)return 0;const t=this.image.width,e=this.image.height;let s=t*e*4;return this.isPowerOf2(t)&&this.isPowerOf2(e)&&(s=s*1.33),Math.round(s)}}class ms{constructor(t){this.gl=t,this.passes=[]}addPass(t){this.passes.push(t)}removePass(t){const e=this.passes.indexOf(t);return e>-1?(this.passes.splice(e,1),!0):!1}execute(t,e,s){for(const n of this.passes)n.enabled&&n.execute(t,e,s)}resize(t,e){for(const s of this.passes)s.resize(t,e)}}const ut=Object.freeze({WORLD:1,PLAYER:2,NPC:4,ALL:4294967295});class ps{constructor({cellSize:t=16,defaultLayer:e=1}={}){this.cellSize=Math.max(1,t),this.defaultLayer=e,this.cells=new Map,this.colliders=new Set,this.meshBoundsCache=new WeakMap,this.queryStamp=0}_key(t,e){return`${t},${e}`}_cellRange(t,e,s){const n=this.cellSize;return{minX:Math.floor((t-s)/n),maxX:Math.floor((t+s)/n),minZ:Math.floor((e-s)/n),maxZ:Math.floor((e+s)/n)}}_index(t){const e=this._cellRange(t.x,t.z,t.radius);t._range=e,t._cells=[];for(let s=e.minX;s<=e.maxX;s++)for(let n=e.minZ;n<=e.maxZ;n++){const i=this._key(s,n);let r=this.cells.get(i);r||this.cells.set(i,r=new Set),r.add(t),t._cells.push(i)}}_unindex(t){for(const e of t._cells||[]){const s=this.cells.get(e);s&&(s.delete(t),s.size===0&&this.cells.delete(e))}t._cells=[],t._range=null}addCircle({object:t=null,x:e=0,y:s=0,z:n=0,radius:i=.5,minY:r=-1/0,maxY:o=1/0,layer:l=this.defaultLayer,mask:c=4294967295,isStatic:h=!1}={}){const d={object:t,x:e,y:s,z:n,radius:Math.max(0,i),minY:r,maxY:o,layer:l,mask:c,isStatic:h,_cells:[],_range:null,_queryStamp:0};return this.colliders.add(d),this._index(d),d}addStaticObject(t,e={}){if(!t?.mesh?.vertices||!t.transform)return null;const s=this._getMeshBounds(t.mesh),n=t.transform.position,i=t.transform.scale,r=Math.max(Math.abs(i.x),Math.abs(i.z)),o=e.radius??s.radius*r*(e.radiusScale??1),l=Math.abs(i.y),h=Math.abs(t.transform.rotation.x)>.001||Math.abs(t.transform.rotation.z)>.001?s.radius3D*Math.max(r,l):s.maxAbsY*l;return this.addCircle({object:t,x:n.x,y:n.y,z:n.z,radius:o,minY:e.minY??n.y-h,maxY:e.maxY??n.y+h,layer:e.layer??this.defaultLayer,mask:e.mask??4294967295,isStatic:!0})}_getMeshBounds(t){let e=this.meshBoundsCache.get(t);if(e)return e;const s=t.vertices;let n=0,i=0,r=0;for(let o=0;o<s.length;o+=3){const l=s[o],c=s[o+1],h=s[o+2];n=Math.max(n,l*l+h*h),i=Math.max(i,l*l+c*c+h*h),r=Math.max(r,Math.abs(c))}return e={radius:Math.sqrt(n),radius3D:Math.sqrt(i),maxAbsY:r},this.meshBoundsCache.set(t,e),e}remove(t){return!t||!this.colliders.has(t)?!1:(this._unindex(t),this.colliders.delete(t),!0)}update(t,e,s=t?.y??0,n=t?.z??0){if(!t||!this.colliders.has(t)||t.isStatic)return!1;const i=this._cellRange(e,n,t.radius),r=t._range,o=r&&r.minX===i.minX&&r.maxX===i.maxX&&r.minZ===i.minZ&&r.maxZ===i.maxZ;return o||this._unindex(t),t.x=e,t.y=s,t.z=n,o||this._index(t),!0}queryNearby(t,e,s=0,{layerMask:n=4294967295,actorLayer:i=4294967295,exclude:r=null,out:o=[]}={}){o.length=0;const l=this._cellRange(t,e,s),c=++this.queryStamp;for(let h=l.minX;h<=l.maxX;h++)for(let d=l.minZ;d<=l.maxZ;d++){const f=this.cells.get(this._key(h,d));if(f)for(const u of f){if(u===r||u._queryStamp===c||!(u.layer&n)||!(u.mask&i)||(u._queryStamp=c,u.object&&!u.object.active))continue;const m=s+u.radius,g=u.x-t,y=u.z-e;g*g+y*y<=m*m&&o.push(u)}}return o}resolveCircle(t,e,s,{minY:n=-1/0,maxY:i=1/0,layerMask:r=4294967295,actorLayer:o=4294967295,exclude:l=null,iterations:c=3}={}){const h=[],d=[];let f=t,u=e;for(let m=0;m<c;m++){this.queryNearby(f,u,s,{layerMask:r,actorLayer:o,exclude:l,out:d});let g=!1;for(const y of d){if(y.maxY<n||y.minY>i)continue;let w=f-y.x,L=u-y.z;const B=s+y.radius,k=w*w+L*L;if(k>=B*B)continue;const D=Math.sqrt(k),T=D<1e-6?1:w/D,I=D<1e-6?0:L/D,p=B-D;f+=T*p,u+=I*p,g=!0,h.includes(y)||h.push(y)}if(!g)break}return{x:f,z:u,collided:h.length>0,contacts:h}}clear({staticOnly:t=!1}={}){for(const e of Array.from(this.colliders))(!t||e.isStatic)&&this.remove(e)}}class ie{constructor(t,e,s,n="RenderPass"){this.gl=t,this.width=e,this.height=s,this.name=n,this.enabled=!0,this.autoResize=!0,this.drawCount=0,this.executionTime=0}resize(t,e){this.autoResize&&(this.width=t,this.height=e)}execute(t,e,s){console.warn("RenderPass.execute() not implemented")}}const vs=`attribute vec2 aVertexPosition;\r
void main() {\r
    gl_Position = vec4(aVertexPosition, 1.0, 1.0);\r
}`,gs=`precision mediump float;\r
uniform vec4 uClearColor;\r
void main() {\r
    gl_FragColor = uClearColor;\r
}\r
`;class $e extends ie{constructor(t,e,s,n=null,i=0,r="ObjectPass"){super(t,e,s,r),this.renderTarget=n,this.renderMode=i,this.clearColor=[0,0,0,1],this.clearDepth=!0,this.camera=null,this._clearShader=new vt(t,vs,gs);const o=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);this._clearVbo=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this._clearVbo),t.bufferData(t.ARRAY_BUFFER,o,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),this._attachmentsWithDepth=[t.COLOR_ATTACHMENT0,t.DEPTH_ATTACHMENT],this._attachmentsDepthOnly=[t.DEPTH_ATTACHMENT]}_drawClearQuad(){const t=this.gl;t.depthFunc(t.ALWAYS),t.depthMask(!0),t.disable(t.CULL_FACE),this._clearShader.use(),this._clearShader.setUniform("uClearColor",this.clearColor),t.bindBuffer(t.ARRAY_BUFFER,this._clearVbo);const e=this._clearShader.getAttribLocation("aVertexPosition");e!==-1&&(t.enableVertexAttribArray(e),t.vertexAttribPointer(e,2,t.FLOAT,!1,0,0)),t.drawArrays(t.TRIANGLES,0,6),t.bindBuffer(t.ARRAY_BUFFER,null),t.depthFunc(t.LEQUAL),t.enable(t.CULL_FACE)}resize(t,e){this.autoResize&&(super.resize(t,e),this.renderTarget&&this.renderTarget.resize(t,e))}execute(t,e,s){const n=this.camera||s;this.camera&&n.updateView();const i=performance.now();if(t.resetDrawCalls(),this.renderTarget){const l=this.gl;l.bindFramebuffer(l.FRAMEBUFFER,this.renderTarget.framebuffer);const c=this.clearDepth?this._attachmentsWithDepth:[l.COLOR_ATTACHMENT0];l.invalidateFramebuffer(l.FRAMEBUFFER,c),l.viewport(0,0,this.renderTarget.width,this.renderTarget.height)}else this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height);this.clearColor!=null&&this._drawClearQuad();const r=l=>{if(l.active&&(l.material&&(l.material.setUniform("uRenderMode",this.renderMode,"1i"),l.material.setUniform("uCameraPos",[n.transform.globalPosition.x,n.transform.globalPosition.y,n.transform.globalPosition.z])),l.render(n,this.renderTarget),l.transform&&l.transform.children))for(const c of l.transform.children)c.gameObject&&r(c.gameObject)};if(e&&Array.isArray(e))for(const l of e)r(l);else e&&e.render&&e.render(n,this.renderTarget);this.renderTarget&&(this.clearDepth&&this.gl.invalidateFramebuffer(this.gl.FRAMEBUFFER,this._attachmentsDepthOnly),this.renderTarget.unbind());const o=t.resetDrawCalls();this.drawCount=o.count,this.drawDetails=o.details,this.executionTime=performance.now()-i}}class qe{constructor(t){this.gl=t;const e=new Float32Array([-1,1,0,1,-1,-1,0,0,1,1,1,1,1,-1,1,0]);this.buffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW)}draw(t,e={},s=null){const n=this.gl;let i,r=e;if(t.uniforms&&t.shader){i=t.shader,r={};for(const h in t.uniforms)r[h]=t.uniforms[h].value;e&&(e.bind||e===null)&&(s=e)}else i=t;s?s.bind():(n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height)),i.use(),n.bindBuffer(n.ARRAY_BUFFER,this.buffer);const o=i.getAttribLocation("aVertexPosition");o!==-1&&(n.enableVertexAttribArray(o),n.vertexAttribPointer(o,2,n.FLOAT,!1,16,0));const l=i.getAttribLocation("aTexCoord");l!==-1&&(n.enableVertexAttribArray(l),n.vertexAttribPointer(l,2,n.FLOAT,!1,16,8));let c=0;for(const h in r){const d=r[h];d instanceof WebGLTexture?(n.activeTexture(n.TEXTURE0+c),n.bindTexture(n.TEXTURE_2D,d),i.setUniform(h,c,"1i"),c++):i.setUniform(h,d)}n.drawArrays(n.TRIANGLE_STRIP,0,4);for(let h=0;h<c;h++)n.activeTexture(n.TEXTURE0+h),n.bindTexture(n.TEXTURE_2D,null)}}class ys extends ie{constructor(t,e,s,n){super(t,e,s,"ViewportComposition"),this.material=n,this.fullScreenQuad=new qe(t),this.buffers={},this.viewports=[],this.overlay=null}setBuffer(t,e){this.buffers[t]=e}setOverlay(t){this.overlay=t}setViewports(t){this.viewports=t}execute(t,e,s){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(.1,.1,.1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);for(const n of this.viewports){const i=Math.floor(n.x*this.width),r=Math.floor(n.y*this.height),o=Math.floor(n.w*this.width),l=Math.floor(n.h*this.height);this.gl.viewport(i,r,o,l);let c=this.buffers.Final;const h=n.pass;this.buffers[h]&&(c=this.buffers[h]),this.material.setUniform("uTexture",c),this.fullScreenQuad.draw(this.material)}}}class ye extends ie{constructor(t,e,s,n,i=null,r="ScreenPass"){super(t,e,s,r),this.material=n,this.renderTarget=i,this.fullScreenQuad=new qe(t),this.inputs={},this.clearColor=null,this._resolutionBuffer=new Float32Array([e,s])}setTexture(t,e){this.inputs[t]=e}resize(t,e){super.resize(t,e),this._resolutionBuffer[0]=t,this._resolutionBuffer[1]=e,this.renderTarget&&this.renderTarget.resize(t,e)}execute(t,e,s){const n=performance.now();t.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor&&(this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT));for(const[r,o]of Object.entries(this.inputs))this.material.setUniform(r,o);this.material.setUniform("uResolution",this._resolutionBuffer),this.fullScreenQuad.draw(this.material,this.renderTarget),this.renderTarget&&this.renderTarget.unbind();const i=t.resetDrawCalls();this.drawCount=i.count,this.drawDetails=i.details,this.executionTime=performance.now()-n}}class xs extends ye{constructor(t,e,s,n,i=null,r="Lighting Pass"){super(t,e,s,n,i,r),this.lightCamera=null,this._lightSpace=new Float32Array(16),this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setInputBuffers(t,e){this.setTexture("uSceneTexture",t),this.setTexture("uNormalTexture",e)}execute(t,e,s){this.lightCamera&&this.setMatricesFromCameras(s,this.lightCamera),super.execute(t,e,s)}setMatricesFromCameras(t,e){tt.multiply(this._lightSpace,e.projectionMatrix,e.viewMatrix),tt.multiply(this._camViewProj,t.projectionMatrix,t.viewMatrix),tt.invert(this._invCamViewProj,this._camViewProj);const s=t.transform.position;this.material.setUniforms({uLightSpaceMatrix:this._lightSpace,uInverseViewProjection:this._invCamViewProj,uCameraPos:[s.x,s.y,s.z]})}}class ws extends ye{constructor(t,e,s,n,i=null,r="Skybox Pass"){super(t,e,s,n,i,r),this.clearColor=null,this.clearDepth=!1,this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setCamera(t){tt.multiply(this._camViewProj,t.projectionMatrix,t.viewMatrix),tt.invert(this._invCamViewProj,this._camViewProj),this.material.setUniforms({uInverseViewProjection:this._invCamViewProj,uCameraPos:[t.transform.position.x,t.transform.position.y,t.transform.position.z]})}setLight(t,e,s,n,i){this.material.setUniforms({uLightDir:t,uSunColor:e,uTopColor:s,uMidColor:n,uBottomColor:i})}setInputTexture(t){this.setTexture("uDepthTexture",t)}execute(t,e,s){this.setCamera(s),super.execute(t,e,s)}}class bs extends ye{constructor(t,e,s,n,i,r="PixelArt Pass"){super(t,e,s,n,i,r),this._resolutionBuffer=new Float32Array([e,s])}setInputBuffers(t,e){this.setTexture("uSceneTexture",t),this.setTexture("uGbufferTexture",e)}resize(t,e){super.resize(t,e),this._resolutionBuffer[0]=t,this._resolutionBuffer[1]=e,this.material.setUniform("uResolution",this._resolutionBuffer)}}const Ms=`// Wireframe Vertex Shader (WebGL 1.0 / GLSL ES 1.0)\r
// Simple passthrough shader for wireframe visualization\r
\r
uniform mat4 uProjectionMatrix;\r
uniform mat4 uViewMatrix;\r
uniform mat4 uModelMatrix;\r
\r
attribute vec3 aVertexPosition;\r
attribute vec2 aTexCoord;\r
attribute vec3 aNormal;\r
\r
varying vec3 vPos;\r
varying vec3 vNormal;\r
\r
void main() {\r
    vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);\r
    vec4 viewPos = uViewMatrix * worldPos;\r
    \r
    vPos = worldPos.xyz;\r
    vNormal = normalize((uModelMatrix * vec4(aNormal, 0.0)).xyz);\r
    \r
    gl_Position = uProjectionMatrix * viewPos;\r
}\r
`,_s=`precision highp float;\r
\r
// Received from Vertex Shader - must match the names in your Vertex Shader exactly\r
varying vec3 vPos;\r
varying vec3 vNormal;\r
\r
// Wireframe uniforms\r
uniform vec3 uWireColor;        // Line color (default: white)\r
uniform float uWireWidth;       // Line thickness (default: 1.0)\r
uniform float uWireOpacity;     // Line opacity (default: 1.0)\r
uniform bool uShowBackfaces;    // Show backface wireframe (default: false)\r
\r
void main() {\r
    vec3 normal = normalize(vNormal);\r
    \r
    // In WebGL 1.0, world position is often used for viewDir calculation \r
    // assuming camera is at (0,0,0) or passed via uniform. \r
    // Since vPos is world space, we calculate direction to origin:\r
    vec3 viewDir = normalize(-vPos);\r
    \r
    // Backface check\r
    float NdotV = dot(normal, viewDir);\r
    if (NdotV < 0.0 && !uShowBackfaces) {\r
        discard;\r
    }\r
    \r
    // Base wireframe color with edge highlighting\r
    vec3 wireColor = uWireColor;\r
    \r
    // Add brightness based on surface angle for depth perception\r
    float surfaceBrightness = 0.5 + 0.5 * max(0.0, NdotV);\r
    wireColor *= mix(0.5, 1.0, surfaceBrightness);\r
    \r
    gl_FragColor = vec4(wireColor, uWireOpacity);\r
}`;class Cs extends ie{constructor(t,e,s,n=null,i="Wireframe Pass"){super(t,e,s,i),this.target=n,this.enabled=!1;const r=new vt(t,Ms,_s);this.material=new lt(r,"Wireframe"),this.material.setUniforms({uWireColor:[0,1,0],uWireWidth:1,uWireOpacity:1,uShowBackfaces:!1}),this._gl=t,this._polygonMode=null}setWireColor(t,e,s){this.material.setVec3("uWireColor",t,e,s)}setOpacity(t){this.material.setFloat("uWireOpacity",Math.max(0,Math.min(1,t)))}setShowBackfaces(t){this.material.setUniform("uShowBackfaces",t?1:0,"1i")}execute(t,e,s){if(!this.enabled)return;this.target?this.target.bind():(this._gl.bindFramebuffer(this._gl.FRAMEBUFFER,null),this._gl.viewport(0,0,this.width,this.height)),this._gl.clearColor(.1,.1,.15,1),this._gl.clear(this._gl.COLOR_BUFFER_BIT|this._gl.DEPTH_BUFFER_BIT),this._gl.depthMask(!0),this._gl.enable(this._gl.DEPTH_TEST);const n=this.material.shader;n.use(),n.setUniform("uProjectionMatrix",s.projectionMatrix),n.setUniform("uViewMatrix",s.viewMatrix);const i=r=>{if(r.active){if(r.transform.updateWorldMatrix(),r.mesh){n.setUniform("uModelMatrix",r.transform.worldMatrix);for(const l in this.material.uniforms){const c=this.material.uniforms[l];n.setUniform(l,c.value,c.type)}const o=r.mesh;o.bind(n),o.indices&&o.indices.length>0?this._gl.drawElements(this._gl.LINE_STRIP,o.count,this._gl.UNSIGNED_SHORT,0):this._gl.drawArrays(this._gl.LINE_STRIP,0,o.count)}if(r.transform&&r.transform.children)for(const o of r.transform.children)o.gameObject&&i(o.gameObject)}};for(const r of e)i(r)}resize(t,e){this.width=t,this.height=e,this.target&&this.target.resize(t,e)}toggle(){this.enabled=!this.enabled,console.log(this.name+(this.enabled?" enabled":" disabled"))}}/*! CONTINENT - Optimized Noise Generator */const Ht=function(){const a={};function t(v){const _="p_"+v;if(a[_])return a[_];let M=v^305419896;function b(){return M=M*1664525+1013904223>>>0,M/4294967296}const S=new Array(256);for(let F=0;F<256;F++)S[F]=F;for(let F=255;F>0;F--){const N=Math.floor(b()*(F+1)),O=S[F];S[F]=S[N],S[N]=O}const E=new Uint8Array(512);for(let F=0;F<512;F++)E[F]=S[F&255];return a[_]=E,E}function e(v,_,M){let b=M;return b^=v*73856093^_*19349663,b=(b^b>>>16)*2246822507,b=b^b>>>13,b}function s(v){return(v&2147483647)/2147483647}function n(v){return v*v*v*(v*(v*6-15)+10)}function i(v,_,M){return v+M*(_-v)}function r(v,_,M,b){v&=15;const S=v<8?_:M,E=v<4?M:v===12||v===14?_:b;return(v&1?-S:S)+(v&2?-E:E)}function o(v,_,M,b){const S=Math.floor(_)&255,E=Math.floor(M)&255,F=Math.floor(b)&255;_-=Math.floor(_),M-=Math.floor(M),b-=Math.floor(b);const N=n(_),O=n(M),U=n(b),V=v[S]+E,Y=v[S+1]+E,q=v[V]+F,K=v[V+1]+F,it=v[Y]+F,at=v[Y+1]+F;return i(i(i(r(v[q],_,M,b),r(v[it],_-1,M,b),N),i(r(v[K],_,M-1,b),r(v[at],_-1,M-1,b),N),O),i(i(r(v[q+1],_,M,b-1),r(v[it+1],_-1,M,b-1),N),i(r(v[K+1],_,M-1,b-1),r(v[at+1],_-1,M-1,b-1),N),O),U)*.5+.5}function l(v,_,M,b,S,E){let F=0,N=1,O=1,U=0;for(let V=0;V<S;V++)F+=o(v,_*O,M*O,b)*N,U+=N,N*=E,O*=2;return F/U}function c(v,_,M,b,S={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:E=60,octaves:F=4,falloff:N=.5}=S,O=t(b),U=v/E,V=_/E,Y=l(O,U,V,M,F,N);return x(Y,S)}function h(v,_,M,b,S={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:E=60,octaves:F=4,falloff:N=.5}=S,O=t(b),U=v/E,V=_/E;let Y=0,q=1,K=1,it=0;for(let at=0;at<F;at++){const Tt=o(O,U*K,V*K,M);Y+=(1-Math.abs(Tt*2-1))*q,it+=q,q*=N,K*=2}return x(Y/it,S)}function d(v,_,M,b,S={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:E=60,octaves:F=4,falloff:N=.5}=S,O=t(b),U=v/E,V=_/E;let Y=0,q=1,K=1,it=0;for(let at=0;at<F;at++){const Tt=o(O,U*K,V*K,M);Y+=Math.abs(Tt*2-1)*q,it+=q,q*=N,K*=2}return x(Y/it,S)}function f(v,_,M,b=0){const S=Math.sin(v*127.1+_*311.7+M*41.3)*43758.5453,E=Math.sin(v*269.5+_*183.3+M*41.3)*43758.5453;let F=S-Math.floor(S),N=E-Math.floor(E);const O=m(F-.5,N-.5,b);return F=O.x+.5,N=O.y+.5,[F,N]}function u(v,_,M,b,S=0){const E=Math.floor(v/M),F=Math.floor(_/M),N=v/M-E,O=_/M-F;let U=2,V=2,Y=E,q=F;for(let K=-1;K<=1;K++)for(let it=-1;it<=1;it++){const at=E+K,Tt=F+it,Pe=f(at,Tt,b,S),Fe=K+Pe[0]-N,ke=it+Pe[1]-O,Qt=Math.sqrt(Fe*Fe+ke*ke);Qt<U?(V=U,U=Qt,Y=at,q=Tt):Qt<V&&(V=Qt)}return{d1:U,d2:V,cx:Y,cy:q}}function m(v,_,M){if(!M)return{x:v,y:_};const b=M*Math.PI/180,S=Math.cos(b),E=Math.sin(b);return{x:v*S-_*E,y:v*E+_*S}}function g(v,_,M,b,S){const E=u(v,_,b,M,S);return Math.min(1,E.d1)}function y(v,_,M,b,S={scale:60,angle:0,contrast:1,threshold:0}){const{scale:E=60,angle:F=0}=S,N=g(v,_,b,E,F);return x(N,S)}function w(v,_,M,b,S,E,F,N){let O=0,U=1,V=0,Y=S;for(let q=0;q<F;q++)O+=g(v,_,b+q,Y,E)*U,V+=U,U*=N,Y*=.5;return O/V}function L(v,_,M,b,S={scale:60,angle:0,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:E=60,angle:F=0,octaves:N=4,falloff:O=.5}=S,U=w(v,_,M,b,E,F,N,O);return x(U,S)}function B(v,_,M,b,S={scale:60,angle:0,contrast:1,threshold:0}){const{scale:E=60,angle:F=0}=S,N=u(v,_,E,b,F),O=N.d2-N.d1,U=Math.min(1,O*2);return x(U,S)}function k(v,_,M,b,S={scale:60,angle:0,contrast:1,threshold:0}){const{scale:E=60,angle:F=0}=S,N=1-g(v,_,b,E,F);return x(N,S)}function D(v,_,M,b,S={scale:60,angle:0,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:E=60,angle:F=0,octaves:N=4,falloff:O=.5}=S,U=1-w(v,_,M,b,E,F,N,O);return x(U,S)}function T(v,_,M,b,S={scale:60,contrast:1,threshold:0}){const{scale:E=60}=S,F=(Math.sin(v/E*6.28+M*5+b*.01)+1)/2;return x(F,S)}function I(v,_,M,b,S={scale:60,contrast:1,threshold:0}){const{scale:E=60}=S,F=(Math.sin(_/E*6.28+M*5+b*.01)+1)/2;return x(F,S)}function p(v,_,M,b,S={scale:60,contrast:1,threshold:0}){const{scale:E=60}=S,F=Math.sqrt(v*v+_*_)/E,N=(Math.sin(F*6.28+M*5+b*.01)+1)/2;return x(N,S)}function C(v,_,M,b,S={scale:60,contrast:1,threshold:0}){const{scale:E=60}=S,F=b%2===0?0:1,N=(Math.floor(v/E)+Math.floor(_/E)+F)%2===0?1:0;return x(N,S)}function A(v,_,M,b,S={scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:1,threshold:0}){const{scale:E=60,octaves:F=4,falloff:N=.5,warpStrength:O=.8}=S,U=t(b),V=v/E,Y=_/E,q=t(b+12345),K=t(b+54321),it=o(q,V,Y,M)*E*O,at=o(K,V+5.2,Y+1.3,M)*E*O,Tt=l(U,(v+it)/E,(_+at)/E,M+.5,F,N);return x(Tt,S)}function P(v,_,M,b,S={scale:60,angle:0,contrast:1,threshold:0}){const{scale:E=60,angle:F=0}=S,N=u(v,_,E,b,F),O=s(e(N.cx,N.cy,b+9001));return x(O,S)}function W(v){return v<0?0:v>1?1:v}function x(v,_){const M=_||{},b=typeof M.contrast=="number"?M.contrast:1,S=typeof M.threshold=="number"?M.threshold:0;return b!==1&&(v=(v-.5)*b+.5),v=W(v),S>0&&(v=v>=S?1:0),W(v)}function z(v){return H[v]||c}const H={perlin:c,ridged:h,billowy:d,voronoi:y,voronoi_edge:k,voronoi_cracks:B,voronoi_cell:P,worley:L,worley_edge:D,sine_x:T,sine_y:I,sine_radial:p,checkerboard:C,domain_warp:A};return{perlin:c,ridged:h,billowy:d,voronoi:y,voronoiEdge:k,voronoiCracks:B,voronoiCell:P,worley:L,worleyEdge:D,sineX:T,sineY:I,sineRadial:p,checkerboard:C,domainWarp:A,getNoiseFunction:z,clamp01:W,seededPerm:t,pnoise:o,fbm:l,types:Object.keys(H)}}();typeof module<"u"&&module.exports&&(module.exports=Ht);function Ss(a,t,e,s,n={scale:60,contrast:1,threshold:0,octaves:6,lacunarity:2,persistence:.5}){const i=n.scale??60,r=n.contrast??1,o=n.threshold??0,l=n.octaves??6,c=n.lacunarity??2,h=n.persistence??.5;function d(T){return T*T*T*(T*(T*6-15)+10)}function f(T,I,p){return T+p*(I-T)}function u(T,I,p,C){const A=T&15,P=A<8?I:p,W=A<4?p:A===12||A===14?I:C;return(A&1?-P:P)+(A&2?-W:W)}function m(T){const I=new Uint8Array(256);for(let C=0;C<256;C++)I[C]=C;let p=T>>>0||1;for(let C=255;C>0;C--){p=p*1664525+1013904223>>>0;const A=p%(C+1);[I[C],I[A]]=[I[A],I[C]]}return I}function g(T,I,p,C){const A=Math.floor(T)&255,P=Math.floor(I)&255,W=Math.floor(p)&255,x=T-Math.floor(T),z=I-Math.floor(I),H=p-Math.floor(p),v=d(x),_=d(z),M=d(H),b=V=>C[V&255],S=b(A)+P,E=b(S)+W,F=b(S+1)+W,N=b(A+1)+P,O=b(N)+W,U=b(N+1)+W;return f(f(f(u(b(E),x,z,H),u(b(O),x-1,z,H),v),f(u(b(F),x,z-1,H),u(b(U),x-1,z-1,H),v),_),f(f(u(b(E+1),x,z,H-1),u(b(O+1),x-1,z,H-1),v),f(u(b(F+1),x,z-1,H-1),u(b(U+1),x-1,z-1,H-1),v),_),M)}const y=m(s);let w=0,L=1,B=1,k=0;for(let T=0;T<l;T++)w+=g(a/i*B,t/i*B,e*B,y)*L,k+=L,L*=h,B*=c;let D=(w/k+1)/2;return D=(D-.5)*r+.5,D=Math.max(0,D-o)/(1-o),Math.min(1,Math.max(0,D))}function Es(a,t,e,s,n={centerX:250,centerY:250,radius:100,jaggedness:.5,seed:0,power:2,steepness:1}){const i=n.centerX??250,r=n.centerY??250,o=n.radius??100,l=n.jaggedness??.5,c=n.seed??s,h=n.power??2,d=n.steepness??1,f=a-i,u=t-r,m=Math.sqrt(f*f+u*u),g=Math.atan2(u,f),y=Math.sin(g*4+c)*.5+Math.sin(g*7-c*2)*.3+Math.sin(g*12+c*.5)*.2,w=o*(1+y*l);let L=Math.min(1,m/w);return Math.pow(1-Math.pow(L,d),h)}function Rs(a,t,e){let n=t*a;return n=n*(1+1*a),Math.max(0,Math.min(1,n))}const nt=function(){const a={res:4,color:"terrain",offsetX:-220,offsetY:-190,zoom:1.5},t=[{id:1,type:"FBMPerlin",scale:400,octaves:3,falloff:.5,seed:0,weight:1,contrast:2.7,threshold:0,z:0,offsetX:0,offsetY:0,blend:"StrengthBased",visible:!0,collapsed:!1,paramsMeta:{scale:{type:"number"},octaves:{type:"number"},falloff:{type:"number"},contrast:{type:"number"},threshold:{type:"number"},lacunarity:{type:"number"},persistence:{type:"number"}},params:{scale:600,octaves:3,falloff:.5,contrast:.8,threshold:0,lacunarity:2,persistence:5},fixedMeta:{offsetX:{type:"number",step:.01},offsetY:{type:"number",step:.01},z:{type:"number",step:.01},seed:{type:"range",min:0,max:9999,step:1}}},{id:2,type:"domain_warp",seed:0,z:0,offsetX:0,offsetY:0,blend:"StrengthBased",visible:!0,collapsed:!1,params:{scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:.8,threshold:0},paramsMeta:{scale:{type:"number"},octaves:{type:"number"},falloff:{type:"number"},warpStrength:{type:"number"},contrast:{type:"number"},threshold:{type:"number"}},fixedMeta:{},scale:60},{id:3,type:"FallOffNoise",seed:0,z:-.03,offsetX:0,offsetY:0,blend:"StrengthBased",visible:!0,collapsed:!1,params:{centerX:0,centerY:0,radius:800,jaggedness:.2,seed:19.9,power:5,steepness:1.5,scale:60},paramsMeta:{centerX:{type:"range",min:-1e4,max:1e4,step:.01},centerY:{type:"range",min:-1e4,max:1e4,step:.01},radius:{type:"number",step:.01},jaggedness:{type:"number",step:.01},seed:{type:"number",step:.01},power:{type:"number",step:.01},steepness:{type:"number",step:.01},scale:{type:"number",step:.01}},fixedMeta:{offsetX:{type:"number",step:.01},offsetY:{type:"number",step:.01},z:{type:"number",step:.01},seed:{type:"number",step:.01}},scale:60}],e={singleCellNoise:{centerX:240,centerY:180,radius:60,thickness:.1,contrast:1},customNoise:{centerX:250,centerY:250,radius:100,fuzziness:.8},FallOffNoise:{centerX:250,centerY:250,radius:100,jaggedness:.5,seed:0,power:2,steepness:1},FBMPerlin:{scale:60,contrast:1,threshold:0,octaves:6,lacunarity:2,persistence:.5}},s={FBMPerlin:{scale:{type:"number"},contrast:{type:"number"},threshold:{type:"number"},octaves:{type:"number"},lacunarity:{type:"number"},persistence:{type:"number"}},singleCellNoise:{centerX:{type:"number"},centerY:{type:"number"},radius:{type:"number"},thickness:{type:"number"},contrast:{type:"number"}},customNoise:{centerX:{type:"number"},centerY:{type:"number"},radius:{type:"number"},fuzziness:{type:"number"}},FallOffNoise:{centerX:{type:"number"},centerY:{type:"number"},radius:{type:"number"},jaggedness:{type:"number"},seed:{type:"number"},power:{type:"number"},steepness:{type:"number"}}},n={FBMPerlin:Ss,FallOffNoise:Es},i={avg:(c,h)=>(c+h)/2,add:(c,h)=>Math.min(1,c+h),mul:(c,h)=>c*h,max:(c,h)=>Math.max(c,h),min:(c,h)=>Math.min(c,h),diff:(c,h)=>Math.abs(c-h),StrengthBased:Rs};function r(c){return Number.isFinite(c)?c<0?0:c>1?1:c:0}function o(c,h,d,f){const u=i[d];if(!u)return c;const m=u(c,h,f);return r(+m)}function l(c,h,d=0){let f=0;const u={scale:600,octaves:3,falloff:.5,contrast:.8,threshold:0,lacunarity:2,persistence:5},m=n.FBMPerlin||Ht.getNoiseFunction("FBMPerlin"),g=(c+a.offsetX)*a.zoom+0,y=(h+a.offsetY)*a.zoom+0;let w=m(g,y,d+0,0,u);w=w<0?0:w>1?1:w,f=w;const L={scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:.8,threshold:0},B=n.domain_warp||Ht.getNoiseFunction("domain_warp"),k=(c+a.offsetX)*a.zoom+0,D=(h+a.offsetY)*a.zoom+0;let T=B(k,D,d+0,0,L);T=T<0?0:T>1?1:T,f=o(f,T,"StrengthBased",{layerIndex:1});const I={centerX:(220+a.offsetX)*a.zoom,centerY:(190+a.offsetY)*a.zoom,radius:800,jaggedness:.2,seed:0,power:5,steepness:1.5,scale:60},p=n.FallOffNoise||Ht.getNoiseFunction("FallOffNoise"),C=(c+a.offsetX)*a.zoom+0,A=(h+a.offsetY)*a.zoom+0;let P=p(C,A,d+-.03,0,I);return P=P<0?0:P>1?1:P,f=o(f,P,"StrengthBased",{layerIndex:2}),a.invert&&(f=1-f),f}return{getValue:l,setOffsets:(c,h)=>{a.offsetX=c,a.offsetY=h},getState:()=>({...a}),getLayers:()=>[...t],getParamDefaults:()=>({...e}),getParamMeta:()=>({...s}),NoiseLib:Ht,customFunctions:n,projectName:"CONTINENT"}}();typeof window<"u"&&(window.CONTINENT=nt);class Ts{constructor(t,e,s={}){const{collisionWorld:n=null,...i}=s;this.camera=t,this.domElement=e,this.settings={moveSpeed:5,sprintMultiplier:1.7,jumpSpeed:10,gravity:28,eyeHeight:1.2,mouseSensitivity:.12,fov:45,bobbingEnabled:!0,bobFrequency:9,bobVerticalAmount:.25,bobSideAmount:.015,bobSmoothing:12,movementTiltEnabled:!0,movementTiltDegrees:3,movementTiltSmoothing:10,terrainX:-(255*Math.sqrt(3)/2),terrainZ:-191.25,terrainScaleY:.4,waterLevel:-7,minWaterClearance:.35,maxStepHeight:4,collisionRadius:.32,collisionLayerMask:4294967295,collisionActorLayer:4294967295,...i},this.collisionWorld=n,this.keys=new Set,this.pitch=t.transform.rotation.x,this.yaw=t.transform.rotation.y,this.verticalVelocity=0,this.grounded=!1,this.isWalking=!1,this.bobTime=0,this.bobOffsetY=0,this.bobOffsetX=0,this.appliedBobX=0,this.appliedBobZ=0,this.appliedBobY=0,this.tilt=0,this.baseEyeY=t.transform.position.y,this._onKeyDown=r=>{const o=r.key.toLowerCase();["w","a","s","d"," ","shift"].includes(o)&&r.preventDefault(),this.keys.add(o)},this._onKeyUp=r=>this.keys.delete(r.key.toLowerCase()),this._onMouseMove=r=>{if(document.pointerLockElement!==this.domElement)return;const o=this.settings.mouseSensitivity*Math.PI/180;this.yaw-=r.movementX*o,this.pitch-=r.movementY*o;const l=Math.PI/2-.01;this.pitch=Math.max(-l,Math.min(l,this.pitch)),this._applyCameraRotation()},this._onPointerLockChange=()=>{document.pointerLockElement!==this.domElement&&this.keys.clear()},this._onBlur=()=>this.keys.clear(),this._onContextMenu=r=>r.preventDefault(),this._onClick=()=>{if(document.pointerLockElement===this.domElement)return;const r=this.domElement.requestPointerLock?.();r?.catch&&r.catch(()=>{})},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("blur",this._onBlur),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("pointerlockchange",this._onPointerLockChange),this.domElement.addEventListener("click",this._onClick),this.domElement.addEventListener("contextmenu",this._onContextMenu),this._applyFov(),this.placeOnNearestLand()}_applyFov(){this.camera.setPerspective(this.settings.fov*Math.PI/180,this.camera.aspect,this.camera.near,this.camera.far)}setFov(t){this.settings.fov=t,this._applyFov()}_applyCameraRotation(){this.camera.transform.rotation.set(this.pitch,this.yaw,this.tilt)}getGroundHeight(t,e){const s=t-this.settings.terrainX,n=e-this.settings.terrainZ,i=nt.getValue(s,n,0),r=(i<=.3?20/255:.4+i)*20*this.settings.terrainScaleY-11;return r<=this.settings.waterLevel+this.settings.minWaterClearance?null:r}placeOnNearestLand(){const t=this.camera.transform.position;let e=null;for(let s=0;s<=120&&!e;s+=5)for(let n=0;n<Math.PI*2;n+=Math.PI/8){const i=t.x+Math.cos(n)*s,r=t.z+Math.sin(n)*s,o=this.getGroundHeight(i,r);if(o!==null){e={x:i,z:r,height:o};break}}e&&(t.set(e.x,e.height+this.settings.eyeHeight,e.z),this.baseEyeY=t.y,this.bobOffsetX=0,this.bobOffsetY=0,this.grounded=!0)}update(t){const e=Math.min(Math.max(t,0),.05),s=this.camera.transform.position;s.x-=this.appliedBobX,s.z-=this.appliedBobZ,s.y-=this.appliedBobY,this.appliedBobX=this.appliedBobZ=this.appliedBobY=0;const n=(this.keys.has("w")?1:0)-(this.keys.has("s")?1:0),i=(this.keys.has("d")?1:0)-(this.keys.has("a")?1:0),r=Math.hypot(n,i);let o=!1;if(r>0){const y=this.settings.moveSpeed*(this.keys.has("shift")?this.settings.sprintMultiplier:1),w=(-Math.sin(this.yaw)*n+Math.cos(this.yaw)*i)/r*y*e,L=(-Math.cos(this.yaw)*n-Math.sin(this.yaw)*i)/r*y*e,B=this.getGroundHeight(s.x+w,s.z);B!==null&&B>=s.y-this.settings.eyeHeight-this.settings.maxStepHeight&&(s.x+=w,o||=Math.abs(w)>0);const k=this.getGroundHeight(s.x,s.z+L);if(k!==null&&k>=s.y-this.settings.eyeHeight-this.settings.maxStepHeight&&(s.z+=L,o||=Math.abs(L)>0),this.collisionWorld){const D=this.collisionWorld.resolveCircle(s.x,s.z,this.settings.collisionRadius,{minY:s.y-this.settings.eyeHeight,maxY:s.y,layerMask:this.settings.collisionLayerMask,actorLayer:this.settings.collisionActorLayer});s.x=D.x,s.z=D.z}}const l=this.getGroundHeight(s.x,s.z);if(l===null){this.placeOnNearestLand(),this.verticalVelocity=0;return}this.grounded&&this.keys.has(" ")&&(this.verticalVelocity=this.settings.jumpSpeed,this.grounded=!1),this.verticalVelocity-=this.settings.gravity*e,s.y+=this.verticalVelocity*e;const c=l+this.settings.eyeHeight;s.y<=c?(s.y=c,this.baseEyeY=c,this.verticalVelocity=0,this.grounded=!0):this.grounded=!1;const h=o&&this.grounded;if(this.isWalking=h,h&&this.settings.bobbingEnabled){const y=this.keys.has("shift")?this.settings.sprintMultiplier:1;this.bobTime+=e*this.settings.bobFrequency*y}const d=1-Math.exp(-this.settings.bobSmoothing*e),f=h&&this.settings.bobbingEnabled?Math.abs(Math.sin(this.bobTime))*this.settings.bobVerticalAmount:0,u=h&&this.settings.bobbingEnabled?Math.cos(this.bobTime*.5)*this.settings.bobSideAmount:0;this.bobOffsetY+=(f-this.bobOffsetY)*d,this.bobOffsetX+=(u-this.bobOffsetX)*d,this.appliedBobX=Math.cos(this.yaw)*this.bobOffsetX,this.appliedBobZ=-Math.sin(this.yaw)*this.bobOffsetX,this.appliedBobY=this.bobOffsetY,s.x+=this.appliedBobX,s.z+=this.appliedBobZ,s.y+=this.appliedBobY;const m=this.settings.movementTiltEnabled?-i*this.settings.movementTiltDegrees*Math.PI/180:0,g=1-Math.exp(-this.settings.movementTiltSmoothing*e);this.tilt+=(m-this.tilt)*g,this._applyCameraRotation()}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("blur",this._onBlur),document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("pointerlockchange",this._onPointerLockChange),this.domElement.removeEventListener("click",this._onClick),this.domElement.removeEventListener("contextmenu",this._onContextMenu)}}function Z(a){return`/CodexGameJam/Assets/${String(a).replace(/^\/+/,"")}`}class As{constructor(t,e,s,n,i,r={}){const{controller:o=null,inputElement:l=null,onEatFood:c=null,...h}=r;this.settings={modelPath:Z("Characters/hand.obj"),texturePath:Z("Characters/colormap.png"),position:[.32,-.28,-.55],rotation:[0,-Math.PI/2,0],scale:[.015,.015,.015],bobAmount:.045,bobSideAmount:.02,bobSmoothing:10,attackDamage:10,attackReach:2.5,attackRadius:.65,attackDuration:.34,attackCooldown:.45,attackHitTime:.12,attackThrust:.3,attackCenterShift:.12,attackLift:.04,attackSideSwing:.2,attackDiagonalDrop:.14,attackDiagonalRoll:.55,attackDiagonalPitch:.3,eatDuration:.9,...h},this.camera=n,this.scene=i,this.controller=o,this.onEatFood=c,this.inventory=null,this.inputElement=l,this.bobBlend=0,this.attackElapsed=null,this.attackCooldownRemaining=0,this.attackHitApplied=!1,this.eatElapsed=null,this.eatCompletePulse=0,this.weapon=null,this._onMouseDown=d=>{if(d.button===2){this.inventory?.selectedId==="food"&&this.eatElapsed!==null&&(d.preventDefault(),this.cancelEating());return}d.button===0&&(d.preventDefault(),this.attack())},this._onMouseUp=d=>{d.button===2&&this.eatElapsed!==null&&this.cancelEating()},this.inputElement?.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this._onContextMenu=d=>{this.eatElapsed!==null&&d.preventDefault()},this.inputElement?.addEventListener("contextmenu",this._onContextMenu),this.ready=this._load(t,e,s)}async _load(t,e,s){try{const n=await mt.load(t,this.settings.modelPath);this.texture=new jt(t,this.settings.texturePath),this.material=new lt(s,"First Person Hand"),this.material.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:this.texture.texture,uRoughness:1});const i=new rt(e,this.material,n,"First Person Right Hand");return i.transform.position.set(...this.settings.position),i.transform.rotation.set(...this.settings.rotation),i.transform.scale.set(...this.settings.scale),this.camera.transform.add(i.transform),this.scene.push(i),this.gameObject=i,this.inventory?._updateItemVisibility(),i}catch(n){return console.error("Could not load first-person hand:",n),null}}update(t){const e=this.gameObject?.transform;if(!e)return;const s=Math.min(Math.max(t,0),.05);if(this.controller){const o=1-Math.exp(-this.settings.bobSmoothing*s),l=this.controller.isWalking?1:0;this.bobBlend+=(l-this.bobBlend)*o}let n=0,i=0;if(this.eatCompletePulse=Math.max(0,this.eatCompletePulse-s*2.5),this.attackCooldownRemaining>0&&(this.attackCooldownRemaining=Math.max(0,this.attackCooldownRemaining-s)),this.attackElapsed!==null){this.attackElapsed+=s;const o=Math.min(this.attackElapsed/this.settings.attackDuration,1);n=Math.sin(o*Math.PI),!this.attackHitApplied&&this.attackElapsed>=this.settings.attackHitTime&&(this.attackHitApplied=!0,this.lastAttackResult=this._attackDamage()),o>=1&&(this.attackElapsed=null)}if(this.eatElapsed!==null){this.eatElapsed+=s;const o=Math.min(this.eatElapsed/this.settings.eatDuration,1);i=o<.88?Math.pow(Math.max(0,Math.sin(o*Math.PI*6)),1.5):1-(o-.88)/.12,o>=1&&(this.eatElapsed=null,this.inventory?.finishEating()&&(this.eatCompletePulse=1,this.onEatFood?.(20)))}const r=this.controller?.bobTime||0;e.position.set(this.settings.position[0]+Math.cos(r*.5)*this.settings.bobSideAmount*this.bobBlend-(this.settings.attackCenterShift+this.settings.attackSideSwing)*n+.18*i,this.settings.position[1]+Math.abs(Math.sin(r))*this.settings.bobAmount*this.bobBlend+(this.settings.attackLift-this.settings.attackDiagonalDrop)*n+.2*i,this.settings.position[2]-this.settings.attackThrust*n+.16*i),e.rotation.set(this.settings.rotation[0]-.28*n-.35*i,this.settings.rotation[1],this.settings.rotation[2]+this.settings.attackDiagonalRoll*n-.18*i)}cancelEating(){return this.eatElapsed===null?!1:(this.eatElapsed=null,this.inventory?.cancelEating(),!0)}attack(){if(this.inventory?.selectedId==="sword")return this.inventory.attackSelected(()=>this._attackDamage());const t=this.inventory?.selectedItem;return t?.id==="food"&&t.count>0?this.eatElapsed!==null||this.attackElapsed!==null||this.attackCooldownRemaining>0?!1:(this.eatElapsed=0,this.inventory.startEating()?!0:(this.eatElapsed=null,!1)):this.weapon?this.weapon.attack(this._createWeaponContext()):this.attackCooldownRemaining>0||this.attackElapsed!==null?!1:(this.attackElapsed=0,this.attackCooldownRemaining=this.settings.attackCooldown,this.attackHitApplied=!1,this.lastAttackResult=null,!0)}setWeapon(t=null){this.weapon=t}_createWeaponContext(){return{camera:this.camera,scene:this.scene,settings:this.settings,applyDamage:(t,e)=>this.applyDamage(t,e),animateHandAttack:()=>this._startHandAnimation()}}_startHandAnimation(){return this.attackCooldownRemaining>0||this.attackElapsed!==null?!1:(this.attackElapsed=0,this.attackCooldownRemaining=this.settings.attackCooldown,this.attackHitApplied=!0,!0)}_attackDamage(){const t=this.camera.transform.position,e=this.camera.transform.rotation.x,s=this.camera.transform.rotation.y,n=Math.cos(e),i={x:-Math.sin(s)*n,y:Math.sin(e),z:-Math.cos(s)*n};let r=null,o=this.settings.attackReach;for(const l of this.scene){if(!l||l===this.gameObject||!l.active||!(typeof l.takeDamage=="function"||typeof l.health?.takeDamage=="function"||Number.isFinite(l.health)))continue;const h=l.transform.globalPosition,d={x:h.x-t.x,y:h.y-t.y,z:h.z-t.z},f=d.x*i.x+d.y*i.y+d.z*i.z;if(f<0||f>o)continue;const u=d.x-i.x*f,m=d.y-i.y*f,g=d.z-i.z*f,y=l.hitRadius??this.settings.attackRadius;u**2+m**2+g**2>y**2||(r=l,o=f)}return r?{hit:!0,target:r,damage:this.applyDamage(r,this.settings.attackDamage)}:{hit:!1,target:null,damage:0}}applyDamage(t,e=this.settings.attackDamage){if(!t||!Number.isFinite(e)||e<=0)return 0;if(typeof t.takeDamage=="function"){const s=t.takeDamage(e,this.gameObject);return Number.isFinite(s)?s:e}return typeof t.health?.takeDamage=="function"?t.health.takeDamage(e,this.gameObject):Number.isFinite(t.health)?(t.health=Math.max(0,t.health-e),t.health===0&&(t.active=!1),e):0}dispose(){this.inputElement?.removeEventListener("mousedown",this._onMouseDown),this.inputElement?.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("mouseup",this._onMouseUp)}}class Ps{constructor(t,e,s,n,i,r={}){const{hand:o=null,controller:l=null,...c}=r;this.settings={itemBobAmount:.045,itemBobSideAmount:.02,itemBobSmoothing:10,swordAttackDuration:.62,swordHitTime:.3,swordAttackCooldown:.72,eatDuration:.9,...c},this.camera=n,this.scene=i,this.hand=o,this.controller=l,this.slots=[{id:"sword",key:"1",name:"Sword",countName:null,modelPath:Z("Items/weapon-sword.obj"),texturePath:Z("Items/Weapon.png"),position:[.48,-.42,-.95],rotation:[0,0,-.45],scale:[.9,.9,.9]},{id:"food",key:"2",name:"Food",countName:"Count",modelPath:Z("Items/Food.obj"),texturePath:Z("Items/Food.png"),position:[.48,-.36,-.92],rotation:[-Math.PI/2,Math.PI/2,0],scale:[.65,.65,.65]}];for(const h of this.slots)h.owned??=!1,h.count??=0,h.gameObject??=null;this.selectedId=null,this.listeners=new Set,this.attackElapsed=null,this.attackCooldownRemaining=0,this.attackHitApplied=!1,this.attackOnHit=null,this.eating=!1,this._onKeyDown=h=>{if(h.repeat)return;if(h.key.toLowerCase()==="o"){h.preventDefault(),this.addItem("food",1);return}const d=this.slots.find(f=>f.key===h.key);d&&(h.preventDefault(),d.id==="food"?this.select(d.id,{allowEmpty:!0}):this.grantAndSelect(d.id))},window.addEventListener("keydown",this._onKeyDown),this.ready=this._loadItems(t,e,s),this.updateHud()}get selectedItem(){return this.slots.find(t=>t.id===this.selectedId)||null}getSlot(t){return this.slots.find(e=>e.id===t)||null}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}_notify(){this._updateItemVisibility(),this.updateHud();for(const t of this.listeners)t(this)}_getDebugGrantCount(t){return t.id==="sword",1}grantAndSelect(t){const e=this.getSlot(t);return e?(e.owned||(e.owned=!0,e.count=this._getDebugGrantCount(e)),this.selectedId=t,this._notify(),!0):!1}addItem(t,e=1,{select:s=!1}={}){const n=this.getSlot(t);if(!n||!Number.isFinite(e)||e<=0)return 0;const i=n.id==="sword"?n.owned?0:1:e;return n.owned=!0,n.count+=i,s&&(this.selectedId=t),(i>0||s)&&this._notify(),i}select(t,{allowEmpty:e=!1}={}){const s=this.getSlot(t);return!s||!s.owned&&!e?!1:(this.selectedId=t,this._notify(),!0)}consume(t,e=1){const s=this.getSlot(t);if(!s?.owned||!Number.isFinite(e)||e<=0)return 0;const n=Math.min(s.count,e);return s.count-=n,this._notify(),n}startEating(){return this.eating||this.selectedId!=="food"||(this.getSlot("food")?.count||0)<=0?!1:(this.eating=!0,this.eatElapsed=0,!0)}finishEating(){return this.eating?(this.eating=!1,this.eatElapsed=null,this.consume("food",1)>0):!1}cancelEating(){return this.eating?(this.eating=!1,this.eatElapsed=null,!0):!1}clearSelection(){this.selectedId=null,this._notify()}attackSelected(t=null){return this.selectedId!=="sword"||this.attackElapsed!==null||this.attackCooldownRemaining>0?!1:(this.attackElapsed=0,this.attackCooldownRemaining=this.settings.swordAttackCooldown,this.attackHitApplied=!1,this.attackOnHit=t,!0)}_updateItemVisibility(){for(const s of this.slots){if(!s.gameObject)continue;const n=s.owned&&(s.id!=="food"||s.count>0);s.gameObject.active=s.id===this.selectedId&&n}const t=this.selectedItem,e=t?.id==="food"&&(!t.owned||t.count<=0);this.hand?.gameObject&&(this.hand.gameObject.active=!t||e)}updateHud(){const t=document.getElementById("inventory-selected");if(t){const e=this.selectedItem;t.textContent=!e||e.id==="food"&&e.count<=0?"EMPTY HAND":`HELD: ${e.name.toUpperCase()}`}for(const e of this.slots){const s=document.getElementById(`inventory-${e.id}`);if(!s)continue;s.classList.toggle("is-selected",e.id===this.selectedId),s.classList.toggle("is-empty",!e.owned);const n=s.querySelector(".inventory-count");n&&(e.owned?e.countName?n.textContent=`${e.countName}: ${e.count}`:n.textContent="READY":n.textContent="EMPTY")}}async _loadItems(t,e,s){const n=new Map;return await Promise.all(this.slots.filter(i=>i.modelPath).map(async i=>{try{const r=await mt.load(t,i.modelPath);let o=n.get(i.texturePath);o||(o=new jt(t,i.texturePath),n.set(i.texturePath,o));const l=new lt(s,`${i.name} Item`);l.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:o.texture,uRoughness:1});const c=new rt(e,l,r,`Held ${i.name}`);c.active=!1,c.transform.position.set(...i.position),c.transform.rotation.set(...i.rotation),c.transform.scale.set(...i.scale),this.camera.transform.add(c.transform),this.scene.push(c),i.gameObject=c,i.mesh=r,i.material=l,i.texture=o}catch(r){console.error(`Could not load inventory item ${i.name}:`,r)}})),this._updateItemVisibility(),this.slots}update(t){this._updateItemVisibility();const e=Math.min(Math.max(t,0),.05),s=1-Math.exp(-this.settings.itemBobSmoothing*e),n=this.controller?.isWalking?1:0;this.itemBobBlend=(this.itemBobBlend||0)+(n-(this.itemBobBlend||0))*s;const i=this.controller?.bobTime||0,r=Math.cos(i*.5)*this.settings.itemBobSideAmount*this.itemBobBlend,o=Math.abs(Math.sin(i))*this.settings.itemBobAmount*this.itemBobBlend;this.attackCooldownRemaining>0&&(this.attackCooldownRemaining=Math.max(0,this.attackCooldownRemaining-e));const l=this.getSlot("sword")?.gameObject;let c={x:0,y:0,z:0,pitch:0,roll:0};const h=this.hand?.eatElapsed===null||this.hand?.eatElapsed===void 0?0:Math.min(this.hand.eatElapsed/(this.hand.settings.eatDuration||this.settings.eatDuration),1),d=this.eating&&h<.88?Math.pow(Math.max(0,Math.sin(h*Math.PI*6)),1.5):0;if(this.attackElapsed!==null){this.attackElapsed+=e;const f=this.settings.swordAttackDuration,u=Math.min(this.attackElapsed/f,1);if(l){const m=w=>{const L=Math.max(0,Math.min(1,w));return L*L*(3-2*L)},g=(w,L,B)=>w+(L-w)*B;let y;if(u<.28){const w=m(u/.28);y={x:g(0,.13,w),y:g(0,.16,w),z:g(0,.03,w),pitch:g(0,-.22,w),roll:g(0,-.9,w)}}else if(u<.52){const w=m((u-.28)/.24);y={x:g(.13,-.28,w),y:g(.16,-.26,w),z:g(.03,-.18,w),pitch:g(-.22,.28,w),roll:g(-.9,1.35,w)}}else{const w=m((u-.52)/.48);y={x:g(-.28,0,w),y:g(-.26,0,w),z:g(-.18,0,w),pitch:g(.28,0,w),roll:g(1.35,0,w)}}c=y}!this.attackHitApplied&&this.attackElapsed>=this.settings.swordHitTime&&(this.attackHitApplied=!0,this.lastAttackResult=this.attackOnHit?.()??null,this.attackOnHit=null),u>=1&&(this.attackElapsed=null)}for(const f of this.slots){if(!f.gameObject)continue;const u=f.id==="food"&&this.hand?.eatCompletePulse||0,m=f.id==="sword"?c:f.id==="food"?{x:-.12*d,y:.22*d+.12*u,z:.16*d,pitch:-.35*d-.18*u,roll:.1*d}:null;if(f.gameObject.transform.position.set(f.position[0]+r+(m?.x||0),f.position[1]+o+(m?.y||0),f.position[2]+(m?.z||0)),f.gameObject.transform.rotation.set(f.rotation[0]+(m?.pitch||0),f.rotation[1],f.rotation[2]+(m?.roll||0)),f.id==="food"&&f.material){const g=u*.45;f.material.setUniforms({uColor:[1,1-g,1-g,1]})}}}dispose(){window.removeEventListener("keydown",this._onKeyDown)}}class pt extends se{static terrainColor(t){return t<=.3?[14/255,54/255,124/255]:t<=.4?[234/255,191/255,145/255]:[112/255,224/255,145/255]}static terrainValue(t){return t<=.3?20/255:.4+t}exportOBJ(t,e,s,n,i){let r="";for(let c=0;c<e.length;c+=3)r+=`v ${e[c]} ${e[c+1]} ${e[c+2]}
`;for(let c=0;c<s.length;c+=2)r+=`vt ${s[c]} ${s[c+1]}
`;for(let c=0;c<n.length;c+=3)r+=`vn ${n[c]} ${n[c+1]} ${n[c+2]}
`;for(let c=0;c<i.length;c+=3){const h=i[c]+1,d=i[c+1]+1,f=i[c+2]+1;r+=`f ${h}/${h}/${h} ${d}/${d}/${d} ${f}/${f}/${f}
`}const o=new Blob([r],{type:"text/plain"}),l=document.createElement("a");l.href=URL.createObjectURL(o),l.download=t,l.click(),URL.revokeObjectURL(l.href)}constructor(t,e=20,s=15,n=1,i=!1){const r=n*Math.sqrt(3),o=n*1.5,l=e*r,c=s*o,h=[],d={},f=[],u=nt,m={};let g=0;for(let p=0;p<=s;p++){const C=p%2!==0?r/2:0;for(let A=0;A<=e;A++){const P=A*r+C,W=p*o,x=u.getValue(P,W,0);i&&(g=pt.terrainValue(x)*20),m[`${p}_${A}`]=g}}for(let p=0;p<=s;p++){const C=p%2!==0?r/2:0;for(let A=0;A<=e;A++){const P=A*r+C,W=p*o;g=m[`${p}_${A}`];const x=u.getValue(P,W,0),z=pt.terrainColor(x);d[`${p}_${A}`]=h.length/3,h.push(P,g,W),f.push(z[0],z[1],z[2])}}function y(p,C){return d[`${p}_${C}`]??-1}const w=[];function L(p,C){for(let A=-3;A<=3;A++)for(let P=-3;P<=3;P++){const W=p+A,x=C+P,z=m[`${W}_${x}`],H=m[`${W}_${x+1}`],v=W%2===0?x:x+1,_=W%2===0?x-1:x,M=m[`${W+1}_${v}`],b=m[`${W+1}_${_}`];if(!(z===void 0||H===void 0||M===void 0||b===void 0)&&!(z===H&&H===M&&M===b))return!0}return!1}function B(){let p=2;for(let C=0;C<2;C++){w.length=0;const A=C%2===0?0:p/2;for(let P=0;P<s;P+=p){const W=P/p%2===0?A:A+p/2;for(let x=W;x<e;x+=p){const z=y(P,x),H=y(P,x+p),v=y(P+p,x+p/2);z!==-1&&H!==-1&&v!==-1&&m[`${P}_${x}`]===m[`${P}_${x+p}`]&&m[`${P}_${x}`]===m[`${P+p}_${x+p/2}`]&&w.push(z,v,H);const _=y(P,x+p),M=y(P+p,x+p/2),b=y(P+p,x+p/2+p);_!==-1&&M!==-1&&b!==-1&&m[`${P}_${x+p}`]===m[`${P+p}_${x+p/2}`]&&m[`${P}_${x+p}`]===m[`${P+p}_${x+p/2+p}`]&&w.push(_,M,b)}}p*=2}}function k(){for(let p=0;p<s;p++)for(let C=0;C<e;C++){const A=y(p,C),P=y(p,C+1),W=p%2===0?C:C+1,x=p%2===0?C-1:C,z=y(p+1,W),H=y(p+1,x);A!==-1&&P!==-1&&z!==-1&&w.push(A,z,P),A!==-1&&H!==-1&&z!==-1&&w.push(A,H,z)}}if(!i)k();else{B();for(let p=0;p<s;p++)for(let C=0;C<e;C++){const A=y(p,C),P=y(p,C+1),W=p%2===0?C:C+1,x=p%2===0?C-1:C,z=y(p+1,W),H=y(p+1,x);L(p,C)&&(A!==-1&&P!==-1&&z!==-1&&w.push(A,z,P),A!==-1&&H!==-1&&z!==-1&&w.push(A,H,z))}}function D(){if(w.length===0){h.length=0,f.length=0;return}const p=new Set(w),C=new Map,A=[],P=[];let W=0;for(let x=0;x<h.length/3;x++)p.has(x)&&(C.set(x,W),A.push(h[x*3],h[x*3+1],h[x*3+2]),P.push(f[x*3],f[x*3+1],f[x*3+2]),W++);for(let x=0;x<w.length;x++)w[x]=C.get(w[x]);h.length=A.length,f.length=P.length;for(let x=0;x<A.length;x++)h[x]=A[x];for(let x=0;x<P.length;x++)f[x]=P[x]}D();const T=[];for(let p=0;p<h.length/3;p++){const C=h[p*3],A=h[p*3+2];T.push(C/l,A/c)}const I=new Float32Array(h.length);for(let p=0;p<w.length;p+=3){const C=w[p],A=w[p+1],P=w[p+2],W=h[C*3],x=h[C*3+1],z=h[C*3+2],H=h[A*3],v=h[A*3+1],_=h[A*3+2],M=h[P*3],b=h[P*3+1],S=h[P*3+2],E=H-W,F=v-x,N=_-z,O=M-W,U=b-x,V=S-z,Y=F*V-N*U,q=N*O-E*V,K=E*U-F*O;I[C*3]+=Y,I[C*3+1]+=q,I[C*3+2]+=K,I[A*3]+=Y,I[A*3+1]+=q,I[A*3+2]+=K,I[P*3]+=Y,I[P*3+1]+=q,I[P*3+2]+=K}for(let p=0;p<h.length/3;p++){const C=I[p*3],A=I[p*3+1],P=I[p*3+2],W=Math.sqrt(C*C+A*A+P*P)||1;I[p*3]=C/W,I[p*3+1]=A/W,I[p*3+2]=P/W}super(t,new Float32Array(h),new Float32Array(T),I,new Uint16Array(w)),this.colors=new Float32Array(f),this.colorBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.colorBuffer),t.bufferData(t.ARRAY_BUFFER,this.colors,t.STATIC_DRAW),this.cols=e,this.rows=s,this.radius=n,this.hSpacing=r,this.vSpacing=o,this.totalW=l,this.totalH=c}recomputeNormals(t){const e=this.gl,s=t.length/3,n=new Float32Array(s*3),i=this.indices;for(let r=0;r<i.length;r+=3){const o=i[r],l=i[r+1],c=i[r+2],h=t[o*3],d=t[o*3+1],f=t[o*3+2],u=t[l*3],m=t[l*3+1],g=t[l*3+2],y=t[c*3],w=t[c*3+1],L=t[c*3+2],B=u-h,k=m-d,D=g-f,T=y-h,I=w-d,p=L-f,C=I*D-p*k,A=p*B-T*D,P=T*k-I*B;n[o*3]+=C,n[o*3+1]+=A,n[o*3+2]+=P,n[l*3]+=C,n[l*3+1]+=A,n[l*3+2]+=P,n[c*3]+=C,n[c*3+1]+=A,n[c*3+2]+=P}for(let r=0;r<s;r++){const o=n[r*3],l=n[r*3+1],c=n[r*3+2],h=Math.sqrt(o*o+l*l+c*c)||1;n[r*3]=o/h,n[r*3+1]=l/h,n[r*3+2]=c/h}e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer),e.bufferData(e.ARRAY_BUFFER,n,e.DYNAMIC_DRAW),this.normals=n}}class Fs{constructor(t,e,s,n,i,{camera:r=null,seed:o=68,lootTable:l=null}={}){this.gl=t,this.renderer=e,this.material=s,this.scene=n,this.inventory=i,this.playerCamera=r,this.seed=o>>>0,this.currentState=this.seed,this.noise=nt,this.mesh=null,this.chests=[],this.openDuration=.9,this.bounceDuration=.42,this.removeDelay=.28,this.interactionRange=5,this.interactionEnabled=!1,this.prompt=document.getElementById("chest-prompt"),this.progress=document.getElementById("chest-progress"),this.progressFill=document.getElementById("chest-progress-fill"),this.lootTable=l||[{item:"food",probability:1,minCount:2,maxCount:5}],this._keyDown=c=>{c.code==="KeyE"&&!c.repeat&&(this.openingChest=this._findNearbyChest())},this._keyUp=c=>{c.code==="KeyE"&&(this.openingChest=null)},window.addEventListener("keydown",this._keyDown),window.addEventListener("keyup",this._keyUp)}setSeed(t){this.seed=t>>>0,this.currentState=this.seed}random(){this.currentState=this.currentState+1831565813|0;let t=this.currentState;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}async spawnMany(t,e,s=-11){if(this.mesh||(this.mesh=await mt.load(this.gl,Z("3D/Floating/chest.obj"))),!this.mesh)return[];const n=[];let i=0;for(;n.length<t&&i++<t*300;){const r=e.minX+this.random()*(e.maxX-e.minX),o=e.minZ+this.random()*(e.maxZ-e.minZ),l=r- -(255*Math.sqrt(3)/2),c=o- -191.25,h=this.noise.getValue(l,c,0);if(h<.42||this.chests.some(u=>Math.hypot(u.transform.position.x-r,u.transform.position.z-o)<12))continue;const d=new rt(this.renderer,this.material,this.mesh,"Loot Chest"),f=pt.terrainValue(h)*20*.4;d.transform.position.set(r,s+f,o),d.transform.rotation.set(0,this.random()*Math.PI*2,0),d.transform.scale.set(1,1,1),d.isLootChest=!0,d.opened=!1,d.openProgress=0,d.interactionScale=1,d.bounceElapsed=null,d.removeElapsed=null,d.baseY=d.transform.position.y,d.baseScale=1,d.baseRotationY=d.transform.rotation.y,d.idleElapsed=this.random()*Math.PI*2,d.lootTable=this.lootTable.map(u=>({...u})),d.update=u=>{if(d.removeElapsed!==null){if(d.removeElapsed+=u,d.bounceElapsed!==null&&d.bounceElapsed<this.bounceDuration){d.bounceElapsed+=u;const y=Math.min(d.bounceElapsed/this.bounceDuration,1),w=Math.abs(Math.sin(y*Math.PI*2.5))*(1-y)*.7;d.transform.position.y=d.baseY+w;const L=Math.max(0,1-y*.18);d.transform.scale.set(L,L,L)}d.removeElapsed>=this.removeDelay&&this._removeChest(d);return}if(d.opened)return;d.idleElapsed+=u,d.transform.position.y=d.baseY+Math.sin(d.idleElapsed*2.1)*.1,d.transform.rotation.y=d.baseRotationY+Math.sin(d.idleElapsed*.9)*.035;const m=1+Math.sin(d.idleElapsed*2.1)*.025;this.openingChest===d&&Math.hypot(d.transform.position.x-this._playerPosition().x,d.transform.position.z-this._playerPosition().z)<=this.interactionRange?(d.interactionScale=Math.min(1.18,d.interactionScale+u*.8),d.openProgress=Math.min(1,d.openProgress+u/this.openDuration),d.transform.scale.set(d.interactionScale*m,d.interactionScale*m,d.interactionScale*m),d.openProgress===1&&(this._grantLoot(d),d.removeElapsed=0,d.bounceElapsed=0,this.openingChest=null)):d.openProgress>0?(d.openProgress=Math.max(0,d.openProgress-u*2.5/this.openDuration),d.interactionScale=Math.max(1,d.interactionScale-u*.8),d.transform.scale.set(d.interactionScale*m,d.interactionScale*m,d.interactionScale*m)):d.interactionScale>1?(d.interactionScale=Math.max(1,d.interactionScale-u*.8),d.transform.scale.set(d.interactionScale*m,d.interactionScale*m,d.interactionScale*m)):d.transform.scale.set(m,m,m)},this.scene.push(d),this.chests.push(d),n.push(d)}return n}_playerPosition(){return this.playerCamera?.transform.position||{x:1/0,y:0,z:1/0}}_findNearbyChest(){if(!this.interactionEnabled)return null;const t=this._playerPosition();let e=null,s=this.interactionRange;for(const n of this.chests){if(n.opened)continue;const i=Math.hypot(n.transform.position.x-t.x,n.transform.position.z-t.z);i<=s&&(e=n,s=i)}return e}_grantLoot(t){t.opened=!0;const e=t.lootTable.reduce((s,n)=>s+Math.max(0,n.probability||0),0);for(const s of t.lootTable){const n=e>0?s.probability/e:0;if(this.random()>n)continue;const i=Math.max(1,Math.ceil(s.minCount??1)),r=Math.max(i,Math.floor(s.maxCount??i)),o=i+Math.floor(this.random()*(r-i+1));this.inventory?.addItem(s.item,o)}}_removeChest(t){const e=this.scene.indexOf(t);e!==-1&&this.scene.splice(e,1);const s=this.chests.indexOf(t);s!==-1&&this.chests.splice(s,1)}_updateInteractionHud(){const t=this._findNearbyChest();if(!t){this.prompt?.classList.remove("chest-prompt-visible"),this.progress?.classList.remove("chest-progress-visible");return}const e=this.openingChest===t;this.prompt&&(this.prompt.textContent=e?"OPENING CHEST…":"PRESS AND HOLD E TO OPEN",this.prompt.classList.add("chest-prompt-visible"));const s=e||t.openProgress>0;this.progress?.classList.toggle("chest-progress-visible",s),this.progressFill&&(this.progressFill.style.width=`${Math.round(t.openProgress*100)}%`)}update(t){for(const e of this.chests)e.update(t);this._updateInteractionHud()}dispose(){window.removeEventListener("keydown",this._keyDown),window.removeEventListener("keyup",this._keyUp)}}class ks extends rt{constructor(t,e,s,n){super(t,e,s,n),this.velocity={x:0,y:0,z:0},this.currentDirection={x:1,y:0,z:0},this.speed=0,this.avoidanceRadius=3,this.avoidanceForce=.5}update(t,e,s,n,i){const r={x:e.x*s*this.speed,z:e.z*s*this.speed},o=this.calculateAvoidance(i);this.velocity.x=r.x+o.x,this.velocity.z=r.z+o.z,this.transform.position.x+=this.velocity.x*t,this.transform.position.z+=this.velocity.z*t,this.wrapBounds(n)}calculateAvoidance(t){const e={x:0,z:0};if(!t||!Array.isArray(t))return e;for(let s of t){if(s===this||!s.transform)continue;const n=this.transform.position.x-s.transform.position.x,i=this.transform.position.z-s.transform.position.z,r=n*n+i*i,o=this.avoidanceRadius+(s.avoidanceRadius||1);if(r<o*o&&r>.01){const l=Math.sqrt(r),c=this.avoidanceForce/(l+.1);e.x+=n/l*c,e.z+=i/l*c}}return e}wrapBounds(t){const e=this.transform.position;t.maxX-t.minX,t.maxZ-t.minZ,e.x>t.maxX?e.x=t.minX+(e.x-t.maxX):e.x<t.minX&&(e.x=t.maxX+(e.x-t.minX)),e.z>t.maxZ?e.z=t.minZ+(e.z-t.maxZ):e.z<t.minZ&&(e.z=t.maxZ+(e.z-t.minZ))}}class Ds extends rt{constructor(t,e,s,n){super(t,e,s,n),this.velocity={x:0,y:0,z:0},this.forwardDirection={x:0,y:0,z:0},this.speed=0,this.heading=0,this.avoidanceRadius=5,this.avoidanceForce=1,this.viewRadius=20,this.maxTurnSpeed=Math.PI*.5,this.targetHeading=Math.random()*Math.PI*2,this.preferredDirection={x:0,y:0,z:1},this.wanderHeading=this.targetHeading,this.steeringInfluence=0,this.boundsBuffer=15,this.centerAttraction=.3,this.cohesionRadius=30,this.separationRadius=8,this.cohesionWeight=.4,this.separationWeight=.4}update(t,e,s){this.updateWandering(t,e),this.updateSteering(s,e);const n=this.speed/10*Math.PI;this.heading=this.lerpAngle(this.heading,this.targetHeading,n*t),this.forwardDirection.x=Math.sin(this.heading),this.forwardDirection.z=Math.cos(this.heading),this.velocity.x=this.forwardDirection.x*this.speed,this.velocity.z=this.forwardDirection.z*this.speed,this.transform.position.x+=this.velocity.x*t,this.transform.position.z+=this.velocity.z*t,this.enforceBounds(e),this.transform.rotation.y=this.heading}updateWandering(t,e){this.steeringInfluence=Math.sin(J.time*.628)*.5,this.wanderHeading+=(Math.random()-.5)*.001*t}updateSteering(t,e){if(this.isShipNearby(t)){const n=this.calculateAvoidanceHeading(t);this.targetHeading=n}else{const n=this.calculateCenterAttraction(),i=this.calculateCohesion(t),r=this.calculateSeparation(t),o=this.calculateBoundsHeading(e);let l;if(o!==null)l=o;else if(i!==null||r!==null){let c=0,h=0;i!==null&&(c+=Math.sin(i)*this.cohesionWeight,h+=Math.cos(i)*this.cohesionWeight),r!==null&&(c+=Math.sin(r)*this.separationWeight,h+=Math.cos(r)*this.separationWeight),c+=Math.sin(n)*.1,h+=Math.cos(n)*.1,l=Math.atan2(c,h)}else{const c=this.wanderHeading,h=this.steeringInfluence*.2;let d=Math.sin(c+h)*.7,f=Math.cos(c+h)*.7;d+=Math.sin(n)*this.centerAttraction,f+=Math.cos(n)*this.centerAttraction,l=Math.atan2(d,f)}this.targetHeading=l}}isShipNearby(t){if(!t||!Array.isArray(t))return!1;const e=this.viewRadius*1.5;for(let s of t){if(s===this||!s.transform||s.constructor.name!=="Ship")continue;const n=s.transform.position.x-this.transform.position.x,i=s.transform.position.z-this.transform.position.z;if(n*n+i*i<e*e)return!0}return!1}calculateCenterAttraction(){const t=this.transform.position,e={x:-t.x,z:-t.z},s=Math.sqrt(e.x*e.x+e.z*e.z);return s<.1?Math.atan2(0,1):Math.atan2(e.x/s,e.z/s)}calculateCohesion(t){if(!t||!Array.isArray(t))return null;let e=[];const s=this.transform.position;for(let o of t){if(o===this||!o.transform||o.constructor.name!=="Ship")continue;const l=o.transform.position.x-s.x,c=o.transform.position.z-s.z,h=l*l+c*c;h<this.cohesionRadius*this.cohesionRadius&&h>.01&&e.push({dx:l,dz:c,dist:Math.sqrt(h)})}if(e.length===0)return null;let n=0,i=0;for(let o of e)n+=o.dx/o.dist,i+=o.dz/o.dist;n/=e.length,i/=e.length;const r=Math.sqrt(n*n+i*i);return r<.1?null:Math.atan2(n/r,i/r)}calculateSeparation(t){if(!t||!Array.isArray(t))return null;let e={x:0,z:0};const s=this.transform.position;let n=!1;for(let r of t){if(r===this||!r.transform||r.constructor.name!=="Ship")continue;const o=s.x-r.transform.position.x,l=s.z-r.transform.position.z,c=o*o+l*l;if(c<this.separationRadius*this.separationRadius&&c>.01){const h=Math.sqrt(c),d=(this.separationRadius-h)/this.separationRadius;e.x+=o/h*d,e.z+=l/h*d,n=!0}}if(!n)return null;const i=Math.sqrt(e.x*e.x+e.z*e.z);return i<.1?null:Math.atan2(e.x/i,e.z/i)}calculateAvoidanceHeading(t){let e=0,s=0;if(!t||!Array.isArray(t))return Math.atan2(this.forwardDirection.x,this.forwardDirection.z);for(let r of t){if(r===this||!r.transform)continue;const o=r.transform.position.x-this.transform.position.x,l=r.transform.position.z-this.transform.position.z,c=o*o+l*l;if(o*this.forwardDirection.x+l*this.forwardDirection.z<0||c>this.viewRadius*this.viewRadius)continue;const d=this.avoidanceRadius+(r.avoidanceRadius||1);if(c<d*d&&c>.01){const f=Math.sqrt(c),u=this.avoidanceForce/(f+.1);e-=o/f*u,s-=l/f*u}}const n=this.forwardDirection.x*.7+e*.3,i=this.forwardDirection.z*.7+s*.3;return Math.atan2(n,i)}calculateBoundsHeading(t){const e=this.transform.position;let s=0,n=0,i=!1;const r=e.x-t.minX,o=t.maxX-e.x,l=e.z-t.minZ,c=t.maxZ-e.z;return r<this.boundsBuffer&&(s+=(this.boundsBuffer-r)/this.boundsBuffer,i=!0),o<this.boundsBuffer&&(s-=(this.boundsBuffer-o)/this.boundsBuffer,i=!0),l<this.boundsBuffer&&(n+=(this.boundsBuffer-l)/this.boundsBuffer,i=!0),c<this.boundsBuffer&&(n-=(this.boundsBuffer-c)/this.boundsBuffer,i=!0),i&&(s!==0||n!==0)?Math.atan2(s,n):null}enforceBounds(t,e=2){const s=this.transform.position;t.maxX-t.minX,t.maxZ-t.minZ,s.x>t.maxX?s.x=t.minX+(s.x-t.maxX):s.x<t.minX&&(s.x=t.maxX+(s.x-t.minX)),s.z>t.maxZ?s.z=t.minZ+(s.z-t.maxZ):s.z<t.minZ&&(s.z=t.maxZ+(s.z-t.minZ))}lerpAngle(t,e,s){let n=this.normalizeAngle(e-t);return n=Math.max(-s,Math.min(s,n)),t+n}normalizeAngle(t){for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}}class Bs{constructor(t,e,s,n,i=12345){this.gl=t,this.renderer=e,this.material=s,this.scene=n,this.meshCache={},this.seed=i,this.currentState=i;const r=o=>o<=.2;this.models=[{file:"ship-pirate-large.obj",name:"Pirate Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:r},{file:"ship-pirate-medium.obj",name:"Pirate Ship Medium",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:r},{file:"ship-pirate-small.obj",name:"Pirate Ship Small",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1.5,probability:.007,thresholdCallback:r},{file:"ship-large.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:r},{file:"ship-medium.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:r},{file:"ship-small.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:r}],this.loadedMeshCount=0}seededRandom(){this.currentState|=0,this.currentState=this.currentState+1831565813|0;let t=Math.imul(this.currentState^this.currentState>>>15,1|this.currentState);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}setSeed(t){this.seed=t,this.currentState=t}async loadMesh(t){if(this.meshCache[t])return this.meshCache[t];try{const e=await mt.load(this.gl,Z(`3D/Floating/${t}`));return this.meshCache[t]=e,this.loadedMeshCount++,e}catch(e){return console.error(`Failed to load ${t}:`,e),null}}getRandomModel(){const t=this.models.reduce((s,n)=>s+(n.probability||0),0);let e=this.seededRandom()*t;for(let s of this.models)if(e-=s.probability||0,e<=0)return s;return this.models[0]}getRandomPosition(t,e,s,n,i){return{x:t+this.seededRandom()*(e-t),y:i,z:s+this.seededRandom()*(n-s)}}getRandomRotation(t){return t==="y-only"?{x:0,y:this.seededRandom()*Math.PI*2,z:0}:t==="3d"?{x:this.seededRandom()*Math.PI*2,y:this.seededRandom()*Math.PI*2,z:this.seededRandom()*Math.PI*2}:{x:0,y:0,z:0}}async spawnRandomObject(t,e=null){const s=e!==null&&e<this.models.length?this.models[e]:this.getRandomModel(),n=await this.loadMesh(s.file);if(!n)return null;const i=`${s.name} [Floating]`;let r;s.type==="ship"||s.type==="boat"?(r=new Ds(this.renderer,this.material,n,i),r.speed=0,r.heading=this.seededRandom()*Math.PI*2):(r=new ks(this.renderer,this.material,n,i),r.speed=.2+this.seededRandom()*.3,r.avoidanceRadius=2),r.transform.position.set(t.x,t.y+(s.yOffset||0),t.z),r.transform.scale.set(s.scale,s.scale,s.scale);const o=this.getRandomRotation(s.rotationMode);return r.transform.rotation.set(o.x,o.y,o.z),this.scene.push(r),r}async spawnMany(t,e,s=-7){const n=[],i=nt;for(let o=0;o<t;o++){let l,c,h;do{l=this.getRandomPosition(e.minX,e.maxX,e.minZ,e.maxZ,s);let f=l.x+255*Math.sqrt(3)/2,u=l.z+255*1.5/2;var r=i.getValue(f,u);c=this.getRandomModel(),h=c.thresholdCallback?c.thresholdCallback(r):!0}while(!h);const d=await this.spawnRandomObject(l,this.models.indexOf(c));d&&n.push(d)}return n}getAvailableModels(){return this.models.map((t,e)=>({index:e,name:t.name,file:t.file,type:t.type,rotationMode:t.rotationMode,yOffset:t.yOffset,probability:t.probability}))}clearAllSpawned(){}}class zs{constructor(t,e,s,n,{density:i=.006,seed:r=68,scaleRange:o=[.75,1.35]}={}){this.gl=t,this.renderer=e,this.material=s,this.scene=n,this.density=i,this.scaleRange=o,this.seed=r>>>0,this.currentState=this.seed,this.objects=[],this.files=["grass.obj","grass-patch.obj","grass-plant.obj"],this.lastSpawnStats={samples:0,landSamples:0,instances:0,batches:0}}setSeed(t){this.seed=t>>>0,this.currentState=this.seed}random(){this.currentState=this.currentState+1831565813|0;let t=this.currentState;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}async spawn(t,e=-11){this.clear(),this.setSeed(this.seed);const s=await Promise.all(this.files.map(async k=>{try{return await mt.load(this.gl,Z(`3D/Land/${k}`))}catch(D){return console.warn(`GrassBatchSpawner: failed to load ${k}`,D),null}})),n=255*Math.sqrt(3),i=255*1.5,r=n*i,o=Math.max(1,Math.floor(r*this.density));this.lastSpawnStats={samples:o,landSamples:0,instances:0,batches:0};const l=s.map(()=>[]),c=s.map(()=>[]),h=s.map(()=>[]),d=s.map(()=>[]),f=s.map(()=>[]),u=s.map(()=>[]),m=-(255*Math.sqrt(3)/2),g=-191.25,y=Math.max(1,Math.ceil(Math.sqrt(o*n/i))),w=Math.max(1,Math.ceil(o/y)),L=n/y,B=i/w;for(let k=0;k<o;k++){const D=k%y,T=Math.floor(k/y),I=(D+.2+this.random()*.6)*L,p=(T+.2+this.random()*.6)*B,C=I+m,A=p+g,P=nt.getValue(I,p,0);if(P<.45)continue;this.lastSpawnStats.landSamples++;const W=Math.min(this.files.length-1,Math.floor(this.random()*this.files.length)),x=s[W];if(!x)continue;this.lastSpawnStats.instances++;const z=e+pt.terrainValue(P)*20*.4,H=this.random()*Math.PI*2,v=Math.min(this.scaleRange[0],this.scaleRange[1]),_=Math.max(this.scaleRange[0],this.scaleRange[1]),M=v+this.random()*(_-v),b=Math.cos(H)*M,S=Math.sin(H)*M;d[W].push(C,z,A),f[W].push(H),u[W].push(M);for(let E=0;E<x.vertices.length;E+=3){const F=x.vertices[E],N=x.vertices[E+1],O=x.vertices[E+2];l[W].push(C+F*b+O*S,z+N*M,A-F*S+O*b);const U=x.normals?.[E]??0,V=x.normals?.[E+1]??1,Y=x.normals?.[E+2]??0;h[W].push(U*Math.cos(H)+Y*Math.sin(H),V,-U*Math.sin(H)+Y*Math.cos(H)),c[W].push(x.uvs?.[E/3*2]??0,x.uvs?.[E/3*2+1]??0)}}for(let k=0;k<this.files.length;k++){if(!l[k].length)continue;const D=new se(this.gl,new Float32Array(l[k]),new Float32Array(c[k]),new Float32Array(h[k])),T=new rt(this.renderer,this.material,D,`Grass Batch: ${this.files[k]}`);T.isGrassBatch=!0,T.instancePositions=d[k],T.instanceYaws=f[k],T.instanceScales=u[k],T.windInstances=!0,this.scene.push(T),this.objects.push(T)}return this.lastSpawnStats.batches=this.objects.length,console.info("[GrassBatchSpawner] Built static grass batches:",this.lastSpawnStats),this.objects}clear(){for(const t of this.objects){const e=this.scene.indexOf(t);e!==-1&&this.scene.splice(e,1)}this.objects.length=0}}const xe=`precision highp float;\r
\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTexCoord;\r
\r
varying vec2 vTexCoord;\r
\r
void main() {\r
    // Just forward texture coordinates, no transforms needed for screen-space quad\r
    gl_Position = vec4(aVertexPosition.x, aVertexPosition.y, 0.0, 1.0);\r
    vTexCoord = aTexCoord;\r
}\r
`,Ls=`precision highp float;\r
\r
varying vec2 vTexCoord;\r
uniform sampler2D uTexture;\r
uniform sampler2D uOverlay; // Optional outline texture\r
uniform float uUseOverlay;   // Toggle overlay blending (float 0.0 or 1.0)\r
\r
void main() {\r
    vec4 baseColor = texture2D(uTexture, vTexCoord);\r
    \r
    if (uUseOverlay > 0.5) {\r
        vec4 overlayColor = texture2D(uOverlay, vTexCoord);\r
        // Simple alpha blend: overlay over base\r
        gl_FragColor = vec4(mix(baseColor.rgb, overlayColor.rgb, overlayColor.a), baseColor.a);\r
    } else {\r
        gl_FragColor = baseColor;\r
    }\r
}\r
`,Is=`precision highp float;\r
\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTexCoord;\r
\r
varying vec2 vUv;\r
\r
void main() {\r
    vUv = aTexCoord;\r
    gl_Position = vec4(aVertexPosition, 0.0, 1.0);\r
}\r
`,Ws=`precision highp float;\r
\r
varying vec2 vUv;\r
\r
uniform sampler2D uSceneTexture;\r
uniform sampler2D uNormalTexture;\r
\r
uniform vec3 uCameraPos; \r
uniform float uTime;\r
\r
uniform vec3 uLightDir;\r
uniform vec3 uLightColor;\r
uniform float uAmbient;\r
\r
uniform float uSpecularStrength;\r
uniform float uShininess;\r
\r
uniform vec3 uShadowColor;\r
\r
void main() {\r
    vec4 sceneColor = texture2D(uSceneTexture, vUv);\r
    vec3 normalOrig = texture2D(uNormalTexture, vUv).rgb;\r
    float depthVal = texture2D(uNormalTexture, vUv).a;\r
    \r
    float roughness = texture2D(uSceneTexture, vUv).a;\r
    \r
    vec3 N = normalize(normalOrig * 2.0 - 1.0);\r
    vec3 L = normalize(uLightDir);\r
    vec3 H = normalize(L);\r
\r
    // --- TOON DIFFUSE (Preserved) ---\r
    float d = dot(N, L); \r
    float intensity = (d > 0.6) ? 1.0 : (d > 0.1 ? 0.7 : 0.2);\r
\r
    // --- 2. CONTROLLED TOON SPECULAR ---\r
    float gloss = (1.0 - roughness);\r
    float specExponent = uShininess * 10.0 * gloss; \r
    \r
    float specVal = pow(max(dot(N, H), 0.0), specExponent);\r
\r
    // Use a high threshold for that "clean dot" look\r
    float threshold = 1.0 - (uSpecularStrength * 0.1 * gloss);\r
    threshold = clamp(threshold, 0.5, 0.99); // Keep it within a sane comic range\r
\r
    float toonSpecular = step(threshold, specVal) * gloss;\r
    \r
    // Final specular color multiplied by uSpecularStrength for brightness\r
    vec3 finalSpecular = uLightColor * toonSpecular * uSpecularStrength;\r
\r
    // --- 3. FINAL COMPOSITION ---\r
    vec3 toonDiffuse = mix(uShadowColor, uLightColor, intensity);\r
\r
    vec3 radiance = (uAmbient * uLightColor + toonDiffuse) * sceneColor.rgb + finalSpecular;\r
\r
    gl_FragColor = vec4(radiance, sceneColor.a);\r
}`,Ns=`precision highp float;\r
\r
varying vec2 vTexCoord;\r
\r
uniform sampler2D uDepthTexture;\r
uniform mat4 uInverseViewProjection;\r
uniform vec3 uCameraPos;\r
uniform vec3 uLightDir;\r
uniform float uTime;\r
\r
uniform vec3 uTopColor;\r
uniform vec3 uMidColor;\r
uniform vec3 uBottomColor;\r
uniform vec3 uSunColor;\r
\r
uniform float uCloudScale;\r
uniform float uCloudThreshold;\r
uniform float uCloudDensity;\r
uniform float uCloudCoverage;\r
uniform float uCloudSpeed;\r
uniform vec3  uCloudMainColor;\r
uniform vec3  uCloudShadeColor;\r
\r
// Cheap hash - single dot product instead of two\r
float hash(vec2 p) {\r
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);\r
}\r
\r
// Cheap value noise - replaces Worley entirely\r
// Worley needs 9 cell lookups, value noise needs 4\r
float valueNoise(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    \r
    // Smooth interpolation\r
    vec2 u = f * f * (3.0 - 2.0 * f);\r
    \r
    // Only 4 lookups instead of 9\r
    float a = hash(i);\r
    float b = hash(i + vec2(1.0, 0.0));\r
    float c = hash(i + vec2(0.0, 1.0));\r
    float d = hash(i + vec2(1.0, 1.0));\r
    \r
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\r
}\r
\r
// 2 octaves only instead of 3 Worley calls\r
float getCloudNoise(vec2 uv, vec2 maskUV) {\r
    float base = valueNoise(uv) * 0.65\r
               + valueNoise(uv * 2.1) * 0.35;\r
\r
    float mask = valueNoise(maskUV * 0.8) * 0.6\r
               + valueNoise(maskUV * 1.7 + vec2(3.1, 7.4)) * 0.4;\r
\r
    return base * mask;\r
}\r
\r
void main() {\r
    float depth = texture2D(uDepthTexture, vTexCoord).a;\r
    if (depth < 0.99) discard;\r
\r
    vec4 clipPos = vec4(vTexCoord * 2.0 - 1.0, 1.0, 1.0);\r
    vec4 worldPosH = uInverseViewProjection * clipPos;\r
    vec3 worldPos = worldPosH.xyz / worldPosH.w;\r
    vec3 dir = normalize(worldPos - uCameraPos);\r
    vec3 lightDir = normalize(uLightDir);\r
\r
    float sunDot = max(dot(dir, lightDir), 0.0);\r
    \r
    // Three-color gradient: bottom (horizon) -> mid (sky) -> top (zenith)\r
    vec3 skyColor;\r
    if (dir.y < 0.5) {\r
        // Bottom half: blend from bottom to mid color\r
        skyColor = mix(uBottomColor, uMidColor, smoothstep(-0.1, 0.5, dir.y));\r
    } else {\r
        // Top half: blend from mid to top color\r
        skyColor = mix(uMidColor, uTopColor, smoothstep(0.5, 0.8, dir.y));\r
    }\r
\r
    float t = uTime * uCloudSpeed;\r
    vec2 cloudUV = (dir.xz / (max(dir.y, 0.01) + 0.2)) * uCloudScale;\r
    vec2 baseUV  = cloudUV + vec2(t * 0.5, t * 0.1);   // slow, different angle\r
    vec2 maskUV  = cloudUV + vec2(t * 0.08, -t * 0.5);   // faster, opposite drift\r
\r
    float density = getCloudNoise(baseUV, maskUV);\r
    \r
    float mask = smoothstep(1.0 - uCloudCoverage, 1.0 - uCloudCoverage + 0.2, density);\r
\r
    // Sun occlusion\r
    float sunOcclusion = smoothstep(0.4, 0.8, density);\r
    float sunVisibility = 1.0 - (sunOcclusion * uCloudDensity);\r
\r
    // Cheap SSS approximation - no second noise sample\r
    float sss = pow(sunDot, 8.0) * (1.0 - density) * 2.0;\r
\r
    // Fake shadow using density alone - removes second getCloudNoise call\r
    float shadow = 1.0 - density * 0.5;\r
\r
    // Color mixing - unchanged, same look\r
    vec3 cloudBase = mix(uCloudShadeColor, uCloudMainColor, shadow);\r
    vec3 cloudWithSSS = mix(cloudBase, uSunColor, sss * mask);\r
\r
    float alpha = mask * uCloudDensity * smoothstep(0.0, 0.1, dir.y);\r
    vec3 finalCloud = mix(skyColor, cloudWithSSS, alpha);\r
\r
    float sunDisk = smoothstep(0.998, 0.999, sunDot) * sunVisibility;\r
    vec3 finalColor = finalCloud + (uSunColor * sunDisk * 2.0);\r
\r
    gl_FragColor = vec4(finalColor, 1.0);\r
}`,Os=`precision highp float;\r
\r
varying vec2 vTexCoord;\r
\r
uniform sampler2D uSceneTexture;\r
uniform sampler2D uGbufferTexture;\r
\r
uniform float uPixelSize;\r
uniform float uColorLevels;\r
uniform vec2 uResolution;\r
\r
// New Uniform for Edge Control\r
uniform float uEdgeWidth; // Try values between 1.0 and 3.0\r
\r
uniform float uDepthThreshold;\r
uniform float uNormalThreshold;\r
\r
uniform float uSilhouetteDarkening;\r
uniform float uCreaseDarkening;\r
uniform float uCurvature;\r
uniform float uEdgeDistance;\r
\r
\r
void main() {\r
    // 1. PIXELATION\r
    vec2 size = uResolution / uPixelSize;\r
    vec2 uv = floor(vTexCoord * size) / size;\r
    vec2 texelSize = 1.0 / size;\r
\r
    // 2. SAMPLING\r
    float depthCenter = texture2D(uGbufferTexture, uv).a;\r
    vec3 normalCenter = texture2D(uGbufferTexture, uv).rgb * 2.0 - 1.0;\r
    vec4 sceneColor = texture2D(uSceneTexture, uv);\r
\r
    vec3 quantizedColor = floor(sceneColor.rgb * uColorLevels) / uColorLevels;\r
\r
    float depthEdge = 0.0;\r
    float normalEdge = 0.0;\r
\r
    \r
    // 3. EDGE DETECTION LOOP\r
    // We multiply the offset by uEdgeWidth to expand the search radius\r
    float base = clamp(depthCenter, 0.0, 1.0); // near 0 far 1\r
    base /= uEdgeDistance; \r
    if(depthCenter>=0.98) base = 0.0; // make far 0.0\r
    \r
    float depthBased = 1.0 - pow(base, uCurvature); \r
    float newiwdth =  clamp(uEdgeWidth * depthBased, 0.0, uEdgeWidth);\r
    \r
    vec2 offsets[4];\r
    offsets[0] = vec2(1.0, 0.0) *  newiwdth;\r
    offsets[1] = vec2(-1.0, 0.0) * newiwdth;\r
    offsets[2] = vec2(0.0, 1.0) *  newiwdth;\r
    offsets[3] = vec2(0.0, -1.0) * newiwdth;\r
\r
    for(int i = 0; i < 4; i++) {\r
        vec2 neighborUV = uv + offsets[i] * texelSize;\r
        \r
        float depthNeighbor = texture2D(uGbufferTexture, neighborUV).a;\r
        // Sensitivity usually needs to decrease as width increases\r
        depthEdge = max(depthEdge, abs(depthCenter - depthNeighbor));\r
\r
        vec3 normalNeighbor = texture2D(uGbufferTexture, neighborUV).rgb * 2.0 - 1.0;\r
        normalEdge = max(normalEdge, (1.0 - dot(normalCenter, normalNeighbor)));\r
    }\r
\r
    // 4. ADAPTIVE COLOR LOGIC\r
    vec3 finalColor = quantizedColor;\r
\r
    float adaptiveDepthThreshold = uDepthThreshold / max(newiwdth, 0.001);\r
\r
    if (newiwdth > 0.1 && depthEdge > adaptiveDepthThreshold) {\r
        finalColor = quantizedColor * uSilhouetteDarkening;\r
    } \r
    else if (newiwdth > 0.1 && normalEdge > uNormalThreshold) {\r
        finalColor = quantizedColor * uCreaseDarkening;\r
    } \r
    else {\r
        finalColor = quantizedColor;\r
    }\r
\r
    gl_FragColor = vec4(finalColor, 1.0);\r
}`,Us=`precision highp float;\r
\r
#define VERTEX\r
\r
uniform vec2 uWind;\r
uniform float uScale;\r
uniform float uTime;\r
uniform float uSpeed; \r
uniform float udisplacement; // Overall amplitude multiplier\r
\r
out float vNoise; // Re-using this to pass wave height to fragment\r
out vec3 vWorldPos; // Pass world position to fragment for wave calculations\r
\r
uniform vec4 uWaveA; \r
uniform vec4 uWaveB;\r
uniform vec4 uWaveC;\r
\r
vec3 GerstnerWave(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {\r
    float steepness = wave.z;\r
    float wavelength = wave.w;\r
    float k = 2.0 * 3.14159 / wavelength;\r
    float c = sqrt(9.8 / k); // Phase speed\r
    vec2 d = normalize(wave.xy);\r
    float f = k * (dot(d, p.xz) - c * uTime * uSpeed);\r
    float a = steepness / k;\r
\r
    // Tangent and Binormal partial derivatives for Normal calculation\r
    tangent += vec3(\r
        -d.x * d.x * (steepness * sin(f)),\r
        d.x * (steepness * cos(f)),\r
        -d.x * d.y * (steepness * sin(f))\r
    );\r
    binormal += vec3(\r
        -d.x * d.y * (steepness * sin(f)),\r
        d.y * (steepness * cos(f)),\r
        -d.y * d.y * (steepness * sin(f))\r
    );\r
\r
    return vec3(\r
        d.x * (a * cos(f)),\r
        a * sin(f),\r
        d.y * (a * cos(f))\r
    );\r
}\r
\r
vec2 hash(vec2 p) {\r
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\r
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);\r
}\r
\r
\r
float gradientNoise(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);\r
    float a = dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0));\r
    float b = dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));\r
    float c = dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));\r
    float d = dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));\r
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\r
}\r
\r
void vertex(inout vec3 localPos, inout vec3 worldPos, inout vec3 yDisplacement, inout vec3 normal, inout vec3 color, inout vec2 texCoord, in mat4 modelMatrix)\r
{\r
    \r
    vec3 gridPoint = worldPos;\r
    vec3 tangent = vec3(1.0, 0.0, 0.0);\r
    vec3 binormal = vec3(0.0, 0.0, 1.0);\r
    vec3 p = gridPoint;\r
\r
    // Sum multiple waves for complexity\r
    p += GerstnerWave(uWaveA, gridPoint, tangent, binormal);\r
    p += GerstnerWave(uWaveB, gridPoint, tangent, binormal);\r
    p += GerstnerWave(uWaveC, gridPoint, tangent, binormal);\r
\r
\r
    float time = uTime * uSpeed;\r
\r
    vec2 movement = uWind * time;\r
\r
    // Use World Position XZ for noise so displacement is seamless across objects\r
    vec2 noiseCoord = worldPos.xz * uScale;\r
\r
    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));\r
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);\r
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5; \r
    float n3 = gradientNoise((noiseCoord * 4.0) + jitterMovement);\r
\r
    float n = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);\r
    p.y += smoothstep(-0.4, 0.4, n);\r
    // Update normal using the cross product of the accumulated derivatives\r
    normal = normalize(cross(binormal, tangent));\r
    \r
    // Output final position\r
    vNoise = ((p.y-worldPos.y)/udisplacement);\r
    vWorldPos = worldPos; // Pass original world position to fragment\r
\r
    worldPos = p;\r
}`,Hs=`precision highp float;\r
\r
#define FRAGMENT\r
in float vNoise;\r
in vec3 vWorldPos;\r
\r
uniform float uTime;\r
uniform float uSpeed;\r
uniform vec2 uWind;\r
uniform float uScale;\r
uniform float udisplacement;\r
\r
uniform vec4 uWaveA;\r
uniform vec4 uWaveB;\r
uniform vec4 uWaveC;\r
\r
uniform vec3 uColor1; \r
uniform vec3 uColor2; \r
uniform vec3 uColor3; \r
\r
uniform float uColorBands; \r
\r
uniform vec2 uColor1Smoothstep;\r
uniform vec2 uColor2Smoothstep;\r
\r
\r
// --- Helper Functions ---\r
vec2 hash(vec2 p) {\r
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\r
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);\r
}\r
\r
float gradientNoise(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);\r
    float a = dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0));\r
    float b = dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));\r
    float c = dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));\r
    float d = dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));\r
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\r
}\r
\r
// Function to calculate height at any XZ coordinate\r
float getFullHeight(vec3 p) {\r
    float time = uTime * uSpeed;\r
    \r
    // 1. Gerstner Heights\r
    float h = 0.0;\r
    vec4 waves[3];\r
    waves[0] = uWaveA; waves[1] = uWaveB; waves[2] = uWaveC;\r
    \r
    for(int i = 0; i < 3; i++) {\r
        float k = 2.0 * 3.14159 / waves[i].w;\r
        float c = sqrt(9.8 / k);\r
        vec2 d = normalize(waves[i].xy);\r
        float f = k * (dot(d, p.xz) - c * time);\r
        h += (waves[i].z / k) * sin(f);\r
    }\r
    \r
    // 2. Noise Heights\r
    vec2 movement = uWind * time;\r
    vec2 noiseCoord = p.xz * uScale;\r
    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));\r
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);\r
    float noiseSum = (n1 * 0.2) + (n2 * 0.5);\r
    \r
    return h + (smoothstep(-0.4, 0.4, noiseSum) * udisplacement);\r
}\r
\r
// This function mimics the vertex logic exactly\r
vec3 GerstnerWaveFull(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {\r
    float steepness = wave.z;\r
    float wavelength = wave.w;\r
    float k = 2.0 * 3.14159 / wavelength;\r
    float c = sqrt(9.8 / k);\r
    vec2 d = normalize(wave.xy);\r
    float f = k * (dot(d, p.xz) - c * uTime * uSpeed);\r
    float a = steepness / k;\r
\r
    // The partial derivatives (slopes)\r
    tangent += vec3(\r
        -d.x * d.x * (steepness * sin(f)),\r
        d.x * (steepness * cos(f)),\r
        -d.x * d.y * (steepness * sin(f))\r
    );\r
    binormal += vec3(\r
        -d.x * d.y * (steepness * sin(f)),\r
        d.y * (steepness * cos(f)),\r
        -d.y * d.y * (steepness * sin(f))\r
    );\r
\r
    return vec3(\r
        d.x * (a * cos(f)),\r
        a * sin(f),\r
        d.y * (a * cos(f))\r
    );\r
}\r
\r
void fragment(inout vec4 color, inout vec3 normal, inout float emission)\r
{\r
    // 1. SETUP DERIVATIVE VECTORS\r
    vec3 tangent = vec3(1.0, 0.0, 0.0);\r
    vec3 binormal = vec3(0.0, 0.0, 1.0);\r
    vec3 p = vWorldPos; // Use the base world position\r
\r
    // 2. ACCUMULATE WAVE DISPLACEMENT AND DERIVATIVES\r
    vec3 displacement = vec3(0.0);\r
    displacement += GerstnerWaveFull(uWaveA, p, tangent, binormal);\r
    displacement += GerstnerWaveFull(uWaveB, p, tangent, binormal);\r
    displacement += GerstnerWaveFull(uWaveC, p, tangent, binormal);\r
\r
    // 3. NOISE CALCULATION (Exact match to Vertex)\r
    float time = uTime * uSpeed;\r
    vec2 movement = uWind * time;\r
    vec2 noiseCoord = p.xz * uScale;\r
\r
    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));\r
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);\r
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5; \r
    float n3 = gradientNoise((noiseCoord * 4.0) + jitterMovement);\r
\r
    float noiseVal = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);\r
    float heightOffset = smoothstep(-0.4, 0.4, noiseVal);\r
\r
    // 4. GENERATE NORMAL\r
    // Important: We use the accumulated tangent and binormal from the waves\r
    // Note: Since noise doesn't have easy analytical derivatives here, \r
    // the cross product will be dominated by the Gerstner waves.\r
    normal = normalize(cross(binormal, tangent));\r
\r
    // 5. COLORING (Using the same height math)\r
    float totalY = displacement.y + heightOffset;\r
    float n = clamp(totalY / udisplacement, 0.0, 1.0);\r
    float quantizedN = floor(n * uColorBands) / uColorBands;\r
\r
    float blend1 = smoothstep(uColor1Smoothstep.x, uColor1Smoothstep.y, quantizedN);\r
    vec3 waterBase = mix(uColor1, uColor2, blend1);\r
\r
    float blend2 = smoothstep(uColor2Smoothstep.x, uColor2Smoothstep.y, quantizedN); // Matches your vertex logic\r
    vec3 finalColor = mix(waterBase, uColor3, blend2);\r
\r
    emission = blend2; \r
    color = vec4(finalColor, 0.8);\r
}`,Xs=`precision highp float;\r
\r
#define VERTEXREC\r
\r
uniform vec2 uWind;\r
uniform float uScale;\r
uniform float uTime;\r
uniform float uSpeed;\r
uniform float udisplacement;\r
uniform float uBuoyancyRotation;\r
uniform float uSampleRadius;  // Radius for multi-point wave sampling\r
\r
uniform vec4 uWaveA;\r
uniform vec4 uWaveB;\r
uniform vec4 uWaveC;\r
\r
out vec3 vWorldPos;\r
\r
vec3 GerstnerWave(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {\r
    float steepness = wave.z;\r
    float wavelength = wave.w;\r
    float k = 2.0 * 3.14159 / wavelength;\r
    float c = sqrt(9.8 / k);\r
    vec2 d = normalize(wave.xy);\r
    float f = k * (dot(d, p.xz) - c * uTime * uSpeed);\r
    float a = steepness / k;\r
\r
    tangent += vec3(\r
        -d.x * d.x * (steepness * sin(f)),\r
        d.x * (steepness * cos(f)),\r
        -d.x * d.y * (steepness * sin(f))\r
    );\r
    binormal += vec3(\r
        -d.x * d.y * (steepness * sin(f)),\r
        d.y * (steepness * cos(f)),\r
        -d.y * d.y * (steepness * sin(f))\r
    );\r
\r
    return vec3(\r
        d.x * (a * cos(f)),\r
        a * sin(f),\r
        d.y * (a * cos(f))\r
    );\r
}\r
\r
vec2 hash(vec2 p) {\r
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\r
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);\r
}\r
\r
float gradientNoise(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);\r
    float a = dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0));\r
    float b = dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));\r
    float c = dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));\r
    float d = dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));\r
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\r
}\r
\r
// Builds a rotation matrix that rotates vector 'from' to vector 'to'\r
// Uses Rodrigues' rotation formula — always produces a pure rotation, no scale\r
mat3 rotationFromTo(vec3 from, vec3 to) {\r
    from = normalize(from);\r
    to = normalize(to);\r
    \r
    vec3 axis = cross(from, to);\r
    float axisLen = length(axis);\r
    \r
    // Vectors are already aligned — return identity\r
    if (axisLen < 0.0001) return mat3(1.0);\r
    \r
    axis = axis / axisLen;\r
    float cosA = dot(from, to);\r
    float sinA = axisLen;\r
    float t = 1.0 - cosA;\r
    \r
    // Rodrigues' rotation matrix\r
    return mat3(\r
        t*axis.x*axis.x + cosA,         t*axis.x*axis.y + sinA*axis.z,  t*axis.x*axis.z - sinA*axis.y,\r
        t*axis.x*axis.y - sinA*axis.z,  t*axis.y*axis.y + cosA,         t*axis.y*axis.z + sinA*axis.x,\r
        t*axis.x*axis.z + sinA*axis.y,  t*axis.y*axis.z - sinA*axis.x,  t*axis.z*axis.z + cosA\r
    );\r
}\r
\r
void vertex(inout vec3 localPos, inout vec3 worldPos, inout vec3 yDisplacement, inout vec3 normal, inout vec3 color, inout vec2 texCoord, in mat4 modelMatrix)\r
{\r
    vec3 objectWorldPos = vec3(modelMatrix[3].x, modelMatrix[3].y, modelMatrix[3].z);\r
\r
    // Sample 8 points around the object center for smooth buoyancy\r
    // This prevents jerky displacement when the object moves across waves\r
    vec3 accumulatedDisplacement = vec3(0.0);\r
    vec3 accumulatedTangent = vec3(0.0);\r
    vec3 accumulatedBinormal = vec3(0.0);\r
    \r
    float samplePoints = 8.0;\r
    for (int i = 0; i < 8; i++) {\r
        float angle = (float(i) / samplePoints) * 6.28318;  // 2*PI\r
        vec2 offset = vec2(cos(angle), sin(angle)) * uSampleRadius;\r
        vec3 samplePos = objectWorldPos + vec3(offset.x, 0.0, offset.y);\r
        \r
        vec3 tangent = vec3(1.0, 0.0, 0.0);\r
        vec3 binormal = vec3(0.0, 0.0, 1.0);\r
        \r
        vec3 waveDisp = vec3(0.0);\r
        waveDisp += GerstnerWave(uWaveA, samplePos, tangent, binormal);\r
        waveDisp += GerstnerWave(uWaveB, samplePos, tangent, binormal);\r
        waveDisp += GerstnerWave(uWaveC, samplePos, tangent, binormal);\r
        \r
        accumulatedDisplacement += waveDisp;\r
        accumulatedTangent += tangent;\r
        accumulatedBinormal += binormal;\r
    }\r
    \r
    // Average all samples\r
    accumulatedDisplacement /= 8.0;\r
    accumulatedTangent /= 8.0;\r
    accumulatedBinormal /= 8.0;\r
\r
    // Noise — matching water shader exactly (sample at center only)\r
    float time = uTime * uSpeed;\r
    vec2 movement = uWind * time;\r
    vec2 noiseCoord = objectWorldPos.xz * uScale;\r
\r
    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));\r
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);\r
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5;\r
    float n3 = gradientNoise((noiseCoord * 4.0) + jitterMovement);\r
\r
    float n = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);\r
    float noiseDisp = smoothstep(-0.4, 0.4, n);\r
\r
    float totalYDisplacement = accumulatedDisplacement.y + noiseDisp;\r
\r
    // Wave surface normal — cross of accumulated tangent/binormal (now averaged)\r
    // normalize() here is critical: Gerstner accumulation drifts from unit length\r
    vec3 waveNormal = normalize(cross(accumulatedBinormal, accumulatedTangent));\r
\r
    // Build rotation from object's rest up (0,1,0) → wave surface normal\r
    // Rodrigues guarantees orthonormal output — no squash/stretch\r
    mat3 R = rotationFromTo(vec3(0.0, 1.0, 0.0), waveNormal);\r
\r
    // Blend rotation strength via uBuoyancyRotation\r
    // lerp identity → full rotation in matrix space via slerp approximation:\r
    // mix(identity * localPos, R * localPos, t) == rotate partially\r
    vec3 rotatedLocalPos = mix(localPos, R * localPos, uBuoyancyRotation);\r
    localPos = rotatedLocalPos;\r
\r
    // Vertical offset applied in world space after model matrix (master.vert handles this)\r
    yDisplacement = vec3(0.0, totalYDisplacement, 0.0);\r
\r
    // Apply rotation to object's normal to match new orientation\r
    normal = normalize(R * normal);\r
\r
    vWorldPos = objectWorldPos;\r
}`,Vs=`precision highp float;\r
#define VERTEXREC\r
\r
uniform float uTime;\r
uniform float uWaveSpeed;\r
uniform float uWaveStrength;\r
uniform float uWaveFrequency;\r
uniform float uWaveHeight;\r
uniform float uGrassBatch;\r
uniform vec2 uWindDir;\r
\r
vec2 grad(vec2 p) {\r
    float h = fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);\r
    float angle = h * 6.2831853;\r
    return vec2(cos(angle), sin(angle));\r
}\r
\r
float perlin2D(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    vec2 u = f * f * (3.0 - 2.0 * f);\r
    return mix(\r
        mix(dot(grad(i + vec2(0,0)), f - vec2(0,0)),\r
            dot(grad(i + vec2(1,0)), f - vec2(1,0)), u.x),\r
        mix(dot(grad(i + vec2(0,1)), f - vec2(0,1)),\r
            dot(grad(i + vec2(1,1)), f - vec2(1,1)), u.x),\r
        u.y\r
    );\r
}\r
\r
void vertex(inout vec3 localPos, inout vec3 worldPos, inout vec3 yDisplacement,\r
            inout vec3 normal, inout vec3 color, inout vec2 texCoord, in mat4 modelMatrix)\r
{\r
    // For merged grass batches localPos is world-space; use the terrain's\r
    // approximate ground level as the blade root. Standalone foliage keeps\r
    // its original local-space root mask.\r
    float heightMask = uGrassBatch > 0.5\r
        ? smoothstep(-11.0, -10.65 + uWaveHeight, localPos.y)\r
        : smoothstep(0.0, uWaveHeight, localPos.y);\r
\r
\r
    vec3 worldOrigin = modelMatrix[3].xyz;\r
    // hard coded for leaf \r
    if((texCoord.x >= 0.125 && texCoord.x <= 0.25 && texCoord.y >=0.25 && texCoord.y <= 0.5) ) worldOrigin = worldPos;\r
    vec2 samplePos = worldOrigin.xz * uWaveFrequency + normalize(uWindDir) * uTime * uWaveSpeed;\r
\r
    float primary   = perlin2D(samplePos);\r
    float secondary = perlin2D(samplePos * 2.3 + vec2(5.7, 9.3)) * 0.35;\r
    float wind = (primary + secondary) * uWaveStrength;\r
\r
    vec3 worldDisp = vec3(normalize(uWindDir), 0.0).xzy * wind * heightMask;\r
    vec3 localDisp = transpose(mat3(modelMatrix)) * worldDisp;\r
\r
    localPos += localDisp;\r
    localPos.y -= abs(wind * heightMask) * 0.15;\r
}\r
`,re=`#version 300 es\r
precision highp float;\r
\r
in vec3 aVertexPosition;\r
in vec3 aNormal;\r
in vec3 aColor;\r
in vec2 aTexCoord;\r
\r
layout(std140) uniform FrameData \r
{\r
    mat4 uProjectionMatrix;\r
    mat4 uViewMatrix;\r
    vec3 uCameraPos;\r
};\r
\r
// uModelMatrix stays as regular uniform (per-object, different every draw)\r
uniform mat4 uModelMatrix;\r
// uniform vec3 uCameraPos;\r
\r
out vec3 vNormal;\r
out vec3 vPosition;\r
out vec3 vColor;\r
out vec2 vTexCoord;\r
\r
void vertex(inout vec3 localPos, inout vec3 worldPos, inout vec3 yDisplacement, inout vec3 normal, inout vec3 color, inout vec2 texCoord, in mat4 modelMatrix);\r
\r
void main()\r
{\r
    vec3 position = aVertexPosition;\r
    vec2 texCoord = aTexCoord;\r
    vec3 color = aColor;\r
    \r
    vec3 worldPos = (uModelMatrix * vec4(position, 1.0)).xyz;\r
    \r
    vec3 worldNormal = normalize((uModelMatrix * vec4(aNormal, 0.0)).xyz);\r
    vec3 yDisplacement = vec3(0.0, 0.0, 0.0);\r
    \r
\r
    #ifdef VERTEXREC\r
        worldNormal = aNormal;\r
        vertex(position, worldPos, yDisplacement, worldNormal, color, texCoord, uModelMatrix);\r
        // Re-apply model matrix after vertex modifications\r
        worldPos = (uModelMatrix * vec4(position, 1.0)).xyz;\r
        // Apply displacement after model matrix\r
        worldPos += yDisplacement;\r
        worldNormal = normalize((uModelMatrix * vec4(worldNormal, 0.0)).xyz);\r
    #endif\r
\r
    #ifdef VERTEX\r
        vertex(position, worldPos, yDisplacement, worldNormal, color, texCoord, uModelMatrix);\r
        // Apply displacement after model matrix\r
        worldPos += yDisplacement;\r
    #endif\r
\r
    vec3 viewNormal = normalize((uViewMatrix * vec4(worldNormal, 0.0)).xyz);\r
\r
    vPosition = worldPos;\r
    vNormal = worldNormal;\r
    vColor = color;\r
    vTexCoord = texCoord;\r
\r
    gl_Position = uProjectionMatrix * uViewMatrix * vec4(worldPos, 1.0);\r
\r
    // Spherical transformation relative to camera position\r
    vec3 pos = worldPos;\r
    vec3 offsetFromCamera = pos - uCameraPos;\r
    float r = (offsetFromCamera.x * offsetFromCamera.x) + (offsetFromCamera.z * offsetFromCamera.z);\r
    \r
    gl_Position = uProjectionMatrix * uViewMatrix * (vec4(pos, 1.0) + vec4(0.0, r / -5000.0, 0.0, 0.0));\r
\r
}\r
`,ae=`#version 300 es\r
precision highp float;\r
\r
uniform int uRenderMode;\r
in vec3 vNormal;\r
in vec3 vPosition;\r
in vec3 vColor;\r
in vec2 vTexCoord;\r
\r
uniform vec4 uColor;\r
uniform float uRoughness;\r
uniform sampler2D uMainTex;\r
uniform float uHasTexture;\r
\r
out vec4 FragColor;\r
\r
void fragment(inout vec4 color, inout vec3 normal, inout float emission);\r
\r
void main() {\r
    vec4 color = vec4(vec3(1.0), 0.0);\r
\r
    if (uHasTexture > 0.1) {\r
        color *= texture(uMainTex, vTexCoord);\r
    }\r
    else\r
    {\r
        color = vec4(vColor, 1.0);\r
    }\r
    \r
    // Flat shading: compute face normal from screen-space derivatives\r
    vec3 fdx = dFdx(vPosition);\r
    vec3 fdy = dFdy(vPosition);\r
    vec3 normal = normalize(cross(fdx, fdy));\r
    \r
    if(uHasTexture > 0.1)\r
    {\r
        normal = normalize(vNormal);\r
    }\r
    float emission = 0.0;\r
    vec2 uv = vTexCoord;\r
\r
    #ifdef FRAGMENT\r
        fragment(color, normal, emission);\r
    #endif\r
\r
    if (uRenderMode == 0)\r
    {\r
        FragColor = vec4(color.rgb, uRoughness);\r
    }\r
    else if (uRenderMode == 1) // Normal + depth\r
    {\r
        float near = 0.1; \r
        float far = 100.0; \r
    \r
        float z = gl_FragCoord.z * 2.0 - 1.0; \r
        float linearDepth = (2.0 * near * far) / (far + near - z * (far - near)); \r
        \r
        linearDepth /= far; \r
\r
        FragColor = vec4(normal * 0.5 + 0.5, linearDepth);\r
    } \r
    else\r
    {\r
        FragColor = vec4(vPosition, 1.0);\r
    }\r
}`;class Ze{constructor(t,e,s,n,i=[],r={}){this.gl=t,this.renderer=e,this.material=s,this.defaultMaterial=s,this.materials=r.materials||{},this.materialResolver=typeof r.materialResolver=="function"?r.materialResolver:null,this.scene=n,this.meshCache={},i&&typeof i=="object"&&!Array.isArray(i)&&(r=i,i=[]),this.collisionWorld=r.collisionWorld||null,this.colliderHandles=[],this.seed=r.seed||12345,this.currentState=this.seed,this.noise=nt,this.threshold=r.threshold??.45;const o=f=>f>=.35,l=f=>f>=.32&&f<=.35,c=f=>f<=.2,h=f=>f>=.3&&f<=.4,d=f=>f>this.threshold;if(this.modelCatalog=[{file:"palm-detailed-straight.obj",name:"Palm Detailed Straight",rotationMode:"y-only",scale:1,scaleRange:[.75,1.1],yOffset:0,probability:.1,thresholdCallback:o,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"palm-detailed-bend.obj",name:"Palm Detailed Bend",rotationMode:"y-only",scale:1,scaleRange:[.75,1.1],yOffset:0,probability:.1,thresholdCallback:o,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"palm-detailed-bend2.obj",name:"Palm Detailed Bend2",rotationMode:"y-only",scale:1,scaleRange:[.75,1.1],yOffset:0,probability:.1,thresholdCallback:o,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"palm-rare.obj",name:"Palm rare",rotationMode:"y-only",scale:1,yOffset:0,scaleRange:[.75,1.1],probability:.01,thresholdCallback:o,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"palm-s.obj",name:"Palm s",rotationMode:"y-only",scale:1,yOffset:0,scaleRange:[.75,1.1],probability:.1,thresholdCallback:l,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"palm-small.obj",name:"Palm small",rotationMode:"y-only",scale:1,yOffset:-.2,scaleRange:[.75,1.1],probability:.1,thresholdCallback:o,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"rocks-a.obj",name:"Rocks A Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.45],yOffset:0,probability:.001,thresholdCallback:c},{file:"rocks-b.obj",name:"Rocks B Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.45],yOffset:0,probability:.001,thresholdCallback:c},{file:"rocks-c.obj",name:"Rocks C Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.5],yOffset:0,probability:.001,thresholdCallback:c},{file:"rocks-sand-a.obj",name:"Rocks Sand A Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:c},{file:"rocks-sand-b.obj",name:"Rocks Sand B Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:c},{file:"rocks-sand-c.obj",name:"Rocks Sand C Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:c},{file:"platform-planks.obj",name:"Platform Planks",rotationMode:"y-only",scale:1,yOffset:0,probability:.07,thresholdCallback:d},{file:"ship-wreck.obj",name:"Ship Wreck",rotationMode:"3d",scale:1,yOffset:-1,probability:.02,thresholdCallback:h},{file:"tower-complete-small.obj",name:"Tower Complete Small",rotationMode:"y-only",scale:1,yOffset:0,probability:.01,thresholdCallback:h},{file:"tower-complete-large.obj",name:"Tower Complete Large",rotationMode:"y-only",scale:1,yOffset:0,probability:.01,thresholdCallback:h},{file:"structure-roof.obj",name:"Structure Roof",rotationMode:"y-only",scale:1,yOffset:0,probability:.01,thresholdCallback:d},{file:"cannon-mobile.obj",name:"Cannon Mobile",rotationMode:"y-only",scale:1,yOffset:0,probability:.05,thresholdCallback:d},{file:"house.obj",name:"House",rotationMode:"y-only",scale:1,yOffset:0,probability:.08,thresholdCallback:d}],!Array.isArray(i)||i.length===0)this.models=this.modelCatalog.map(f=>({...f}));else{const f=new Map(this.modelCatalog.map(u=>[u.file,u]));this.models=i.map(u=>{const m=f.get(u);return m?{...m}:{file:u,name:u.replace(".obj",""),rotationMode:"y-only",scale:1,yOffset:0,probability:1}})}}resolveMaterial(t){if(t.material)return t.material;if(t.materialKey&&this.materials[t.materialKey])return this.materials[t.materialKey];if(this.materialResolver){const e=this.materialResolver(t,this.materials,this.defaultMaterial);if(e)return e}return this.defaultMaterial}setSeed(t){this.seed=t,this.currentState=t}seededRandom(){this.currentState|=0,this.currentState=this.currentState+1831565813|0;let t=Math.imul(this.currentState^this.currentState>>>15,1|this.currentState);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}async loadMesh(t){if(this.meshCache[t])return this.meshCache[t];try{const e=await mt.load(this.gl,Z(`3D/Land/${t}`));return this.meshCache[t]=e,e}catch(e){return console.warn(`LandObjectSpawner: failed to load ${t}`,e),null}}getRandomModel(){if(!this.models.length)return null;const t=this.models.reduce((s,n)=>s+(n.probability||0),0);let e=this.seededRandom()*t;for(let s of this.models)if(e-=s.probability||0,e<=0)return s;return this.models[0]}getRandomPosition(t,e,s,n,i=0){return{x:t+this.seededRandom()*(e-t),y:i,z:s+this.seededRandom()*(n-s)}}getRandomRotation(t="y-only"){t||(t="y-only");let e=Array.isArray(t)?t:String(t).split("|").map(n=>n.trim().toLowerCase());if(e.includes("3d")||e.includes("all")||e.includes("x-y-z")||e.includes("xyz"))return{x:this.seededRandom()*Math.PI*.15,y:this.seededRandom()*Math.PI*2,z:this.seededRandom()*Math.PI*.15};const s={x:0,y:0,z:0};for(const n of e)n&&(n.includes("x")&&(s.x=this.seededRandom()*Math.PI*2),n.includes("y")&&(s.y=this.seededRandom()*Math.PI*2),n.includes("z")&&(s.z=this.seededRandom()*Math.PI*2));return s.x===0&&s.y===0&&s.z===0&&(s.y=this.seededRandom()*Math.PI*2),s}async spawnRandomObject(t,e,s=null){const n=s!==null&&s<this.models.length?this.models[s]:this.getRandomModel();if(!n)return null;const i=await this.loadMesh(n.file);if(!i)return null;const r=`${n.name} [Land]`,o=this.resolveMaterial(n),l=new rt(this.renderer,o,i,r);let c=t.y+(n.yOffset||0);c+=pt.terrainValue(e)*20*.4,l.transform.position.set(t.x,c,t.z);let h=n.scale??1;if(Array.isArray(n.scaleRange)&&n.scaleRange.length===2){const f=n.scaleRange[0],u=n.scaleRange[1];h=f+this.seededRandom()*(u-f)}l.transform.scale.set(h,h,h);const d=this.getRandomRotation(n.rotationMode);if(l.transform.rotation.set(d.x,d.y,d.z),this.collisionWorld){const f=this.collisionWorld.addStaticObject(l,{radiusScale:n.collisionRadiusScale??1});f&&(l.collider=f,this.colliderHandles.push(f))}return this.scene.push(l),l}clearCollisionObjects(){if(this.collisionWorld){for(const t of this.colliderHandles)this.collisionWorld.remove(t),t.object&&delete t.object.collider;this.colliderHandles.length=0}}async spawnMany(t,e,s=0){const n=[];if(!this.models.length)return console.warn("LandObjectSpawner.spawnMany: no model files provided"),n;for(let i=0;i<t;i++){let r,o,l,c;do{r=this.getRandomPosition(e.minX,e.maxX,e.minZ,e.maxZ,s);const f=r.x+255*Math.sqrt(3)/2,u=r.z+255*1.5/2;o=this.noise.getValue(f,u,0),l=this.getRandomModel(),c=l.thresholdCallback?l.thresholdCallback(o):!0}while(!c);const h=this.models.indexOf(l),d=await this.spawnRandomObject(r,o,h);d&&n.push(d)}return n}getAvailableModels(){return this.models.map((t,e)=>({index:e,name:t.name,file:t.file,rotationMode:t.rotationMode,yOffset:t.yOffset,probability:t.probability,materialKey:t.materialKey||null}))}}class js{constructor({maxHp:t=100,startHp:e=null,onDeath:s=null,onDamage:n=null,onHeal:i=null}={}){this.maxHp=t,this.hp=e??t,this.isDead=!1,this._onDeath=s,this._onDamage=n,this._onHeal=i,this._bar=document.getElementById("health-bar-fill"),this._label=document.getElementById("health-bar-label"),this._root=document.getElementById("health-bar-root"),this._render()}takeDamage(t){this.isDead||t<=0||(this.hp=Math.max(0,this.hp-t),this._onDamage?.(t,this.hp,this.maxHp),this._render(),this._flashDamage(),this.hp===0&&!this.isDead&&(this.isDead=!0,this._onDeath?.()))}heal(t){if(t<=0)return;const e=this.hp;this.hp=Math.min(this.maxHp,this.hp+t),this.hp>e&&(this.isDead&&(this.isDead=!1),this._onHeal?.(t,this.hp,this.maxHp),this._render())}setHp(t){this.hp=Math.max(0,Math.min(this.maxHp,t)),this.isDead=this.hp===0,this._render()}setMaxHp(t){const e=this.hp/this.maxHp;this.maxHp=Math.max(1,t),this.hp=Math.round(e*this.maxHp),this._render()}_render(){if(!this._bar||!this._label)return;const t=this.hp/this.maxHp;this._bar.style.width=`${t*100}%`,t>.6?this._bar.style.backgroundColor="#7ecf6e":t>.3?this._bar.style.backgroundColor="#e8a040":this._bar.style.backgroundColor="#d94040",this._label.textContent=`${this.hp} / ${this.maxHp}`,this._root&&this._root.classList.toggle("health-critical",t<=.3&&!this.isDead)}_flashDamage(){const t=document.getElementById("damage-flash");t&&(t.classList.remove("damage-flash-active"),t.offsetWidth,t.classList.add("damage-flash-active"))}}class xt{static worldToScreen(t,e){var s={transform:{updateWorldMatrix:function(){},worldMatrix:new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,t.x,t.y,t.z,1])}},n=e.getScreenPosition(s),i=n[0]*window.innerWidth,r=(1-n[1])*window.innerHeight;return n[0]<-1||n[0]>2||n[1]<-1||n[1]>2?null:{sx:i,sy:r}}static spawn(t,e){var s=xt.worldToScreen(t,e);s&&(xt._burst(s.sx,s.sy,{count:12,minSize:10,maxSize:26,minDist:38,maxDist:90,duration:700,shapes:["circle","circle","circle","star","star"],colors:["#f5c842","#f58c42","#f54242","#fff176","#c8f542","#42d4f5"]}),xt._ring(s.sx,s.sy))}static spawnHit(t,e){var s=xt.worldToScreen(t,e);s&&xt._burst(s.sx,s.sy,{count:5,minSize:5,maxSize:13,minDist:18,maxDist:44,duration:380,shapes:["star","circle"],colors:["#ffffff","#ffd84d","#ff8c42"]})}static _burst(t,e,s){for(var n=0;n<s.count;n++){var i=n/s.count*Math.PI*2+Math.random()*.6,r=s.minDist+Math.random()*(s.maxDist-s.minDist),o=s.minSize+Math.random()*(s.maxSize-s.minSize),l=s.colors[Math.floor(Math.random()*s.colors.length)],c=s.shapes[Math.floor(Math.random()*s.shapes.length)],h=Math.random()*60,d=Math.cos(i)*r,f=Math.sin(i)*r-r*.3;xt._makeParticle(t,e,d,f,o,l,c,s.duration,h)}}static _ring(t,e){var s=document.createElement("div");s.className="poof-ring",s.style.left=t+"px",s.style.top=e+"px",document.body.appendChild(s),setTimeout(function(){s.parentNode&&s.parentNode.removeChild(s)},500)}static _makeParticle(t,e,s,n,i,r,o,l,c){var h=document.createElement("div");o==="star"?(h.className="poof-star",h.textContent="★",h.style.fontSize=i+"px",h.style.color=r,h.style.textShadow="1px 1px 0 #1a0a00"):(h.className="poof-dot",h.style.width=i+"px",h.style.height=i+"px",h.style.background=r,h.style.borderRadius="50%",h.style.border="2px solid #1a0a00"),h.style.left=t+"px",h.style.top=e+"px",h.style.setProperty("--tx",s+"px"),h.style.setProperty("--ty",n+"px"),h.style.animationDuration=l+"ms",h.style.animationDelay=c+"ms",document.body.appendChild(h),setTimeout(function(){h.parentNode&&h.parentNode.removeChild(h)},l+c+100)}}var Gs=2.2,Ys=2.2,$s=.18,qs=30,De=5,Zs=7,Be={wood:{icon:"🪵",color:"#8B5E3C",label:"Wood"},cloth:{icon:"🧵",color:"#D4A0C0",label:"Cloth"},metal:{icon:"⚙",color:"#9BB0C0",label:"Metal"}};class we{constructor(t,e,s){this.x=t.x+(Math.random()-.5)*1.6,this.y=t.y,this.z=t.z+(Math.random()-.5)*1.6,this.baseY=this.y,this.resource=e,this.amount=s,this._bobTime=Math.random()*Math.PI*2,this._lifetime=qs,this.collected=!1;var n=Be[e]||Be.wood;this._el=document.createElement("div"),this._el.className="enemy-drop",this._el.innerHTML='<span class="drop-icon">'+n.icon+'</span><span class="drop-label" style="color:'+n.color+'">'+(s>1?"x"+s+" ":"")+n.label+"</span>",document.body.appendChild(this._el),this._el.classList.add("drop-spawn");var i=this._el;setTimeout(function(){i.classList.remove("drop-spawn")},400)}update(t,e,s,n){if(this.collected)return!0;if(this._lifetime-=t,this._lifetime<=0)return this._remove(),!0;this._bobTime+=Ys*t,this.y=this.baseY+Math.sin(this._bobTime)*$s;var i=e.x-this.x,r=e.z-this.z,o=Math.sqrt(i*i+r*r);if(o<De&&o>.01){var l=1-o/De,c=Zs*l*t;this.x+=i/o*c,this.z+=r/o*c}if(o<Gs)return this._collect(n),!0;var h=we._worldToScreen({x:this.x,y:this.y+.5,z:this.z},s);if(!h)this._el.style.display="none";else{this._el.style.display="",this._el.style.left=h.sx+"px",this._el.style.top=h.sy+"px";var d=this.x-e.x,f=this.z-e.z,u=Math.sqrt(d*d+f*f),m=Math.max(.5,Math.min(1,8/(u+1)));this._el.style.transform="translate(-50%, -50%) scale("+m.toFixed(2)+")";var g=this._lifetime<5?this._lifetime/5:1;this._el.style.opacity=g.toFixed(2)}return!1}_collect(t){this.collected=!0,t&&t.addResource(this.resource,this.amount);var e=this._el;e.classList.add("drop-collect"),setTimeout(function(){e.parentNode&&e.parentNode.removeChild(e)},500)}_remove(){var t=this._el;t.classList.add("drop-expire"),setTimeout(function(){t.parentNode&&t.parentNode.removeChild(t)},400)}static _worldToScreen(t,e){var s=e.viewMatrix,n=e.projectionMatrix,i=s[0]*t.x+s[4]*t.y+s[8]*t.z+s[12],r=s[1]*t.x+s[5]*t.y+s[9]*t.z+s[13],o=s[2]*t.x+s[6]*t.y+s[10]*t.z+s[14],l=s[3]*t.x+s[7]*t.y+s[11]*t.z+s[15];if(o>0)return null;var c=n[0]*i+n[4]*r+n[8]*o+n[12]*l,h=n[1]*i+n[5]*r+n[9]*o+n[13]*l,d=n[3]*i+n[7]*r+n[11]*o+n[15]*l;if(Math.abs(d)<1e-6)return null;var f=c/d,u=-h/d;return f<-1.3||f>1.3||u<-1.3||u>1.3?null:{sx:(f*.5+.5)*window.innerWidth,sy:(u*.5+.5)*window.innerHeight}}}var ze=["wood","wood","wood","cloth","cloth","metal"],Ks=-(255*Math.sqrt(3)/2),Qs=-191.25,Js=.4,tn=-7,en=.35;function Lt(a,t){var e=a-Ks,s=t-Qs,n=nt.getValue(e,s,0),i=(n<=.3?20/255:.4+n)*20*Js-11;return i<=tn+en?null:i}var sn=Math.PI*1.8,Jt=1.5,Le=4,nn=Math.PI*.6,Ie=3.5,rn=.55,We=2.2,Ne=90,an=Ne*Ne,on=14,Oe=35,ln=Oe*Oe,hn=4,Ue=1.2,cn=18,He=.18,dn=1.35;class fn extends rt{constructor(t,e,s,n,i){n===void 0&&(n="Enemy"),i===void 0&&(i={}),super(t,e,s,n),this.maxHp=i.maxHp!==void 0?i.maxHp:50,this.hp=this.maxHp,this.damage=i.damage!==void 0?i.damage:10,this.moveSpeed=i.moveSpeed!==void 0?i.moveSpeed:3.2,this.chaseSpeed=i.chaseSpeed!==void 0?i.chaseSpeed:4.5,this.detectionRange=i.detectionRange!==void 0?i.detectionRange:on,this.attackRange=i.attackRange!==void 0?i.attackRange:1.8,this.hitRadius=i.hitRadius!==void 0?i.hitRadius:2,this.state="wander",this.isDead=!1,this._stateTime=0,this.heading=Math.random()*Math.PI*2,this._targetHeading=this.heading,this._wanderTimer=Jt+Math.random()*(Le-Jt),this._knockbackX=0,this._knockbackZ=0,this._hitFlashTimer=0,this._baseScaleX=null,this._baseScaleY=null,this._baseScaleZ=null,this._giveUpTimer=0,this._attackTimer=0,this.collider=null,this.groupId=-1,this._lastContext=null}takeDamage(t,e,s){if(this.isDead)return 0;var n=this.hp;this.hp=Math.max(0,this.hp-t);var i=n-this.hp;if(e){var r=this.transform.position.x-e.x,o=this.transform.position.z-e.z,l=Math.sqrt(r*r+o*o);l<.001&&(r=1,o=0,l=1);var c=Math.min(t*.55,cn);this._knockbackX=r/l*c,this._knockbackZ=o/l*c}return this._hitFlashTimer=He,this.state==="wander"&&this._setState("chase"),this._giveUpTimer=0,this.hp===0&&this._die(s,this._lastContext),i}update(t,e){if(e===void 0&&(e={}),!this.isDead){this._lastContext=e,this._baseScaleX===null&&(this._baseScaleX=this.transform.scale.x,this._baseScaleY=this.transform.scale.y,this._baseScaleZ=this.transform.scale.z);var s=e.playerPosition;if(s){var n=this.transform.position.x-s.x,i=this.transform.position.z-s.z;if(n*n+i*i>an){this.state!=="wander"&&this._setState("wander");return}}if(this._stateTime+=t,this._hitFlashTimer>0){this._hitFlashTimer-=t,this._hitFlashTimer<0&&(this._hitFlashTimer=0);var r=1-this._hitFlashTimer/He,o=1+(dn-1)*Math.sin(r*Math.PI);this.transform.scale.set(this._baseScaleX*o,this._baseScaleY*o,this._baseScaleZ*o)}else this.transform.scale.set(this._baseScaleX,this._baseScaleY,this._baseScaleZ);var l=Math.abs(this._knockbackX)>.01||Math.abs(this._knockbackZ)>.01;if(l){var c=Math.exp(-8*t);this._knockbackX*=c,this._knockbackZ*=c;var h=this.transform.position,d=h.x+this._knockbackX*t,f=h.z+this._knockbackZ*t,u=Lt(d,h.z);u!==null&&(h.x=d);var m=Lt(h.x,f);m!==null&&(h.z=f);var g=Lt(h.x,h.z);g!==null&&(h.y=g),this.collider&&e.collisionWorld&&e.collisionWorld.update(this.collider,h.x,h.y,h.z)}this.state==="wander"?this._updateWander(t,e):this.state==="chase"?this._updateChase(t,e):this.state==="attack"&&this._updateAttack(t,e),this.collider&&e.collisionWorld&&e.collisionWorld.update(this.collider,this.transform.position.x,this.transform.position.y,this.transform.position.z)}}_updateWander(t,e){var s=e.playerPosition;if(s){var n=s.x-this.transform.position.x,i=s.z-this.transform.position.z;if(n*n+i*i<=this.detectionRange*this.detectionRange){this._setState("chase");return}}this._wanderTimer-=t,this._wanderTimer<=0&&(this._wanderTimer=Jt+Math.random()*(Le-Jt),this._targetHeading=this.heading+(Math.random()-.5)*2*nn),this._moveForward(t,this.moveSpeed,e)}_updateChase(t,e){var s=e.playerPosition;if(!s){this._setState("wander");return}var n=s.x-this.transform.position.x,i=s.z-this.transform.position.z,r=n*n+i*i;if(r>ln){if(this._giveUpTimer+=t,this._giveUpTimer>=hn){this._giveUpTimer=0,this._setState("wander");return}}else this._giveUpTimer=0;if(r<=this.attackRange*this.attackRange){this._setState("attack");return}this._targetHeading=Math.atan2(n,i),this._moveForward(t,this.chaseSpeed,e)}_updateAttack(t,e){var s=e.playerPosition;if(!s){this._setState("wander");return}var n=s.x-this.transform.position.x,i=s.z-this.transform.position.z,r=n*n+i*i;if(r>this.attackRange*this.attackRange*1.6){this._setState("chase");return}this._targetHeading=Math.atan2(n,i),this._smoothTurn(t),this.transform.rotation.y=this.heading,this._attackTimer+=t,this._attackTimer>=Ue&&(this._attackTimer=0,e.playerHealth&&e.playerHealth.takeDamage(this.damage))}_moveForward(t,e,s){this._smoothTurn(t);var n=this.transform.position,i=e*t,r=Math.sin(this.heading)*i,o=Math.cos(this.heading)*i,l=n.x,c=n.z,h=Lt(n.x+r,n.z);h!==null&&Math.abs(h-n.y)<=Ie?l=n.x+r:this._targetHeading=this.heading+Math.PI*(.4+Math.random()*.4);var d=Lt(l,n.z+o);if(d!==null&&Math.abs(d-n.y)<=Ie?c=n.z+o:this._targetHeading=this.heading+Math.PI*(.4+Math.random()*.4),s.collisionWorld&&this.collider){var f=n.y-We*.5,u=n.y+We,m=s.collisionWorld.resolveCircle(l,c,rn,{minY:f,maxY:u,layerMask:ut.WORLD|ut.NPC,actorLayer:ut.NPC,exclude:this.collider});l=m.x,c=m.z}n.x=l,n.z=c;var g=Lt(n.x,n.z);g!==null&&(n.y=g),this.transform.rotation.y=this.heading}_smoothTurn(t){var e=this._normalizeAngle(this._targetHeading-this.heading),s=sn*t;e>s&&(e=s),e<-s&&(e=-s),this.heading+=e}_normalizeAngle(t){for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}_setState(t){this.state!==t&&(this.state=t,this._stateTime=0,t==="attack"&&(this._attackTimer=Ue),t==="wander"&&(this._giveUpTimer=0))}_die(t,e){if(this.isDead=!0,this.state="dead",this.active=!1,t){var s={x:this.transform.position.x,y:this.transform.position.y+1,z:this.transform.position.z};xt.spawn(s,t)}for(var n=2+Math.floor(Math.random()*2),i={x:this.transform.position.x,y:this.transform.position.y,z:this.transform.position.z},r=0;r<n;r++){var o=ze[Math.floor(Math.random()*ze.length)],l=new we(i,o,1);e&&e.drops&&e.drops.push(l)}}}var Ke=-(255*Math.sqrt(3)/2),Qe=-191.25,un=.4,mn=-7,pn=.35,Xe=2,vn=5,gn=5,pe=3,yn=.55,xn=2.2;function Ve(a,t){var e=a-Ke,s=t-Qe,n=nt.getValue(e,s,0),i=(n<=.3?20/255:.4+n)*20*un-11;return i<=mn+pn?null:i}class wn{constructor(t,e,s,n,i){i===void 0&&(i={}),this.gl=t,this.renderer=e,this.material=s,this.scene=n,this.seed=i.seed!==void 0?i.seed:99999,this.currentState=this.seed,this.minNoiseValue=i.minNoiseValue!==void 0?i.minNoiseValue:.42,this.collisionWorld=i.collisionWorld!==void 0?i.collisionWorld:null,this.enemyDefaults=i.enemyDefaults!==void 0?i.enemyDefaults:{maxHp:50,damage:10,moveSpeed:3.2,chaseSpeed:4.5,detectionRange:14,attackRange:1.8},this._mesh=null,this.enemies=[],this._colliders=[]}setSeed(t){this.seed=t,this.currentState=t}_rand(){this.currentState|=0,this.currentState=this.currentState+1831565813|0;var t=Math.imul(this.currentState^this.currentState>>>15,1|this.currentState);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}async _loadMesh(){if(this._mesh)return this._mesh;try{this._mesh=await mt.load(this.gl,Z("Characters/character-male-b.obj"))}catch(t){console.error("[EnemySpawner] Failed to load character-male-b.obj:",t)}return this._mesh}_sampleLandPosition(t,e){e===void 0&&(e=500);for(var s=0;s<e;s++){var n=t.minX+this._rand()*(t.maxX-t.minX),i=t.minZ+this._rand()*(t.maxZ-t.minZ),r=n-Ke,o=i-Qe,l=nt.getValue(r,o,0);if(!(l<this.minNoiseValue)){var c=Ve(n,i);if(c!==null)return{x:n,z:i,y:c}}}return null}async spawnGroups(t,e,s){var n=await this._loadMesh();if(!n)return console.error("[EnemySpawner] Cannot spawn — mesh failed to load."),[];for(var i=[],r=this.enemies.length,o=0;o<t;o++){var l=this._sampleLandPosition(e);if(!l){console.warn("[EnemySpawner] Group "+o+": no valid anchor — skipping.");continue}for(var c=Number.isInteger(s)&&s>0?s:Xe+Math.floor(this._rand()*(vn-Xe+1)),h=0;h<c;h++){for(var d=l.x,f=l.z,u=l.y,m=0;m<40;m++){var g=this._rand()*Math.PI*2,y=this._rand()*gn,w=l.x+Math.cos(g)*y,L=l.z+Math.sin(g)*y,B=Ve(w,L);if(B!==null){d=w,f=L,u=B;break}}var k={maxHp:this.enemyDefaults.maxHp,damage:this.enemyDefaults.damage,moveSpeed:this.enemyDefaults.moveSpeed,chaseSpeed:this.enemyDefaults.chaseSpeed,detectionRange:this.enemyDefaults.detectionRange,attackRange:this.enemyDefaults.attackRange},D=new fn(this.renderer,this.material,n,"Enemy_"+r+" [Enemy]",k);r++,D.transform.position.set(d,u,f),D.transform.scale.set(pe,pe,pe);var T=this._rand()*Math.PI*2;if(D.heading=T,D._targetHeading=T,D.transform.rotation.set(0,T,0),D.groupId=o,this.collisionWorld){var I=this.collisionWorld.addCircle({object:D,x:d,y:u,z:f,radius:yn,minY:u,maxY:u+xn,layer:ut.NPC,mask:ut.WORLD|ut.NPC|ut.PLAYER,isStatic:!1});D.collider=I,this._colliders.push(I)}this.scene.push(D),this.enemies.push(D),i.push(D)}}return console.log("[EnemySpawner] Spawned "+i.length+" enemies in "+t+" groups."),i}scatterEnemies(t,e=24){const s=[];for(const n of this.enemies){if(!n||n.isDead||!n.active)continue;let i=null;for(let o=0;o<60;o++){const l=this._sampleLandPosition(t);if(!l)break;if(s.every(c=>Math.hypot(c.x-l.x,c.z-l.z)>=e)){i=l;break}i=l}if(!i)continue;n.transform.position.set(i.x,i.y,i.z);const r=this._rand()*Math.PI*2;n.heading=r,n._targetHeading=r,n.transform.rotation.set(0,r,0),n.state="wander",n._stateTime=0,n._giveUpTimer=0,n.collider&&this.collisionWorld&&this.collisionWorld.update(n.collider,i.x,i.y,i.z),s.push(i)}return s.length}async spawnMany(t,e){return this.spawnGroups(t,e)}clearAll(){for(var t=0;t<this.enemies.length;t++){var e=this.scene.indexOf(this.enemies[t]);e!==-1&&this.scene.splice(e,1)}if(this.collisionWorld)for(var s=0;s<this._colliders.length;s++)this.collisionWorld.remove(this._colliders[s]);this.enemies.length=0,this._colliders.length=0}}class bn{constructor(){this._counts={wood:0,cloth:0,metal:0},this._listeners=[],this._els={wood:document.getElementById("res-wood-count"),cloth:document.getElementById("res-cloth-count"),metal:document.getElementById("res-metal-count")},this._render()}addResource(t,e){!(t in this._counts)||e<=0||(this._counts[t]+=e,this._render(),this._flashCount(t),this._notify(t,e))}removeResource(t,e){return!(t in this._counts)||e<=0||this._counts[t]<e?!1:(this._counts[t]-=e,this._render(),this._notify(t,-e),!0)}get(t){return this._counts[t]||0}getAll(){return{wood:this._counts.wood,cloth:this._counts.cloth,metal:this._counts.metal}}total(){return this._counts.wood+this._counts.cloth+this._counts.metal}reset(){this._counts.wood=0,this._counts.cloth=0,this._counts.metal=0,this._render()}onChange(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(function(e){return e!==t})}}_render(){for(var t in this._counts){var e=this._els[t];e&&(e.textContent=this._counts[t])}}_flashCount(t){var e=this._els[t];if(e){e.classList.remove("res-pop"),e.offsetWidth,e.classList.add("res-pop");var s=e;setTimeout(function(){s.classList.remove("res-pop")},500)}}_notify(t,e){for(var s=this.getAll(),n=0;n<this._listeners.length;n++)this._listeners[n](t,e,s)}}class Mn{constructor(t){if(t||(t={}),this._onRestart=t.onRestart||null,this._root=document.getElementById("death-screen"),this._statsEl=document.getElementById("death-stats"),this._btn=document.getElementById("death-restart-btn"),this._titleEl=document.getElementById("death-title"),this._visible=!1,this._btn){var e=this;this._btn.addEventListener("click",function(){e._restart()})}}show(t){if(!this._visible){if(this._visible=!0,this._statsEl){var e=t||{wood:0,cloth:0,metal:0},s=e.wood+e.cloth+e.metal;this._statsEl.innerHTML='<div class="ds-stat"><span class="ds-stat-icon">🪵</span><span class="ds-stat-label">Wood</span><span class="ds-stat-value">'+e.wood+'</span></div><div class="ds-stat"><span class="ds-stat-icon">🧵</span><span class="ds-stat-label">Cloth</span><span class="ds-stat-value">'+e.cloth+'</span></div><div class="ds-stat"><span class="ds-stat-icon">⚙</span><span class="ds-stat-label">Metal</span><span class="ds-stat-value">'+e.metal+'</span></div><div class="ds-stat ds-stat-total"><span class="ds-stat-icon">📦</span><span class="ds-stat-label">Total</span><span class="ds-stat-value">'+s+"</span></div>"}if(this._root&&(this._root.classList.remove("death-hidden"),this._root.classList.add("death-visible")),this._titleEl){for(var n="YOU DIED",i="",r=0;r<n.length;r++){var o=n[r]===" "?"&nbsp;":n[r];i+='<span class="ds-letter" style="animation-delay:'+r*.07+'s">'+o+"</span>"}this._titleEl.innerHTML=i}document.exitPointerLock&&document.exitPointerLock()}}hide(){this._visible&&(this._visible=!1,this._root&&(this._root.classList.remove("death-visible"),this._root.classList.add("death-hidden")))}_restart(){var t=Math.floor(Math.random()*1e6);this.hide(),this._onRestart&&this._onRestart(t)}}class _n{constructor(){this._ctx=null,this._buffers={walk:null,sword:null,eat:null},this._paths={walk:Z("Audio/Walking sound.mp3"),sword:Z("Audio/Sword sound.mp3"),eat:Z("Audio/Eating sound.mp3")},this._gains={walk:.55,sword:.8,eat:.7},this._pitchRange={walk:2,sword:3,eat:4},this._walkSource=null,this._walkGain=null,this._wasWalking=!1,this._ambient=this._makeHtml(Z("Audio/Ocean Waves and Seagulls Sound.mp3"),{loop:!0,volume:.35}),this._music=this._makeHtml(Z("Audio/Background music.mp3"),{loop:!0,volume:.28}),this._death=this._makeHtml(Z("Audio/Death Sound.mp3"),{loop:!1,volume:1}),this._startOnInteraction()}update(t){t&&!this._wasWalking?this._playWalkLoop():!t&&this._wasWalking&&this._stopWalkLoop(),this._wasWalking=t}playSword(){this._playPitched("sword")}playEat(){this._playPitched("eat")}playDeath(){this._stopWalkLoop(),this._wasWalking=!1,this._ambient.pause(),this._music.pause(),this._death.currentTime=0,this._death.play().catch(()=>{});const t=this;setTimeout(function(){t._ambient.play().catch(()=>{}),t._music.play().catch(()=>{})},3e3)}_getCtx(){return this._ctx||(this._ctx=new(window.AudioContext||window.webkitAudioContext)),this._ctx.state==="suspended"&&this._ctx.resume(),this._ctx}async _getBuffer(t){if(this._buffers[t])return this._buffers[t];const e=this._getCtx(),n=await(await fetch(this._paths[t])).arrayBuffer(),i=await e.decodeAudioData(n);return this._buffers[t]=i,i}async _playPitched(t){const e=this._getCtx(),s=await this._getBuffer(t),n=e.createBufferSource();n.buffer=s;const i=this._pitchRange[t],r=(Math.random()*2-1)*i;n.playbackRate.value=Math.pow(2,r/12);const o=e.createGain();o.gain.value=this._gains[t],n.connect(o),o.connect(e.destination),n.start(0)}async _playWalkLoop(){const t=this._getCtx(),e=await this._getBuffer("walk");this._stopWalkLoop();const s=t.createBufferSource();s.buffer=e,s.loop=!0;const n=this._pitchRange.walk,i=(Math.random()*2-1)*n;s.playbackRate.value=Math.pow(2,i/12);const r=t.createGain();r.gain.value=this._gains.walk,s.connect(r),r.connect(t.destination),s.start(0),this._walkSource=s,this._walkGain=r}_stopWalkLoop(){if(this._walkSource){try{this._walkSource.stop()}catch{}this._walkSource.disconnect(),this._walkSource=null}this._walkGain&&(this._walkGain.disconnect(),this._walkGain=null)}_makeHtml(t,{loop:e=!1,volume:s=1}={}){const n=new Audio(t);return n.loop=e,n.volume=s,n}_startOnInteraction(){const t=this,e=function(){t._ctx&&t._ctx.resume(),t._ambient.play().catch(()=>{}),t._music.play().catch(()=>{}),window.removeEventListener("click",e),window.removeEventListener("keydown",e)};window.addEventListener("click",e,{once:!0}),window.addEventListener("keydown",e,{once:!0})}}class Cn{constructor({camera:t,controller:e,wreck:s,resources:n,required:i,enemies:r,onWin:o,onIntroComplete:l}){this.camera=t,this.controller=e,this.wreck=s,this.resources=n,this.required=i,this.enemies=r||[],this.onWin=o,this.onIntroComplete=l,this.phase="intro",this.phaseTime=0,this.repairProgress=0,this.nearWreck=!1,this.oldPosition=null,this.oldRotation=null,this.cameraKeys=null,this.shipElapsed=0,this.shipBase=null,this.shotDuration=8,this.overlay=document.getElementById("story-overlay"),this.title=document.getElementById("story-title"),this.subtitle=document.getElementById("story-subtitle"),this.objective=document.getElementById("story-objective"),this.repairFill=document.getElementById("repair-progress-fill"),this.winScreen=document.getElementById("win-screen"),this._keydown=c=>{["Space","Enter"].includes(c.code)&&this.phase==="intro"&&(c.preventDefault(),this.finishIntro())},window.addEventListener("keydown",this._keydown),this._setCard("THE WRECK","Gather what you need to repair your way off the island.",!0)}_setCard(t,e,s=!1){this.title&&(this.title.textContent=t),this.subtitle&&(this.subtitle.textContent=e),this.overlay&&this.overlay.classList.add("story-visible"),this.overlay&&this.overlay.classList.toggle("story-intro",s)}_hideCard(){this.overlay?.classList.remove("story-visible","story-intro")}finishIntro(){this.phase==="intro"&&(this.phase="gameplay",this.phaseTime=0,this._restorePlayerCamera(),this.onIntroComplete?.(),this._hideCard(),this.objective?.classList.add("objective-visible"),this.controller?.keys.clear())}update(t){if(this.phase==="intro"){this.phaseTime+=t;const e=Math.floor(this.phaseTime/this.shotDuration);e===1&&this._lastSegment!==1?(this._lastSegment=1,this._setCard("SURVIVE & ESCAPE","Explore the island and find a way to make it home.",!0)):e===2&&this._lastSegment!==2&&(this._lastSegment=2,this._setCard("DEFEAT THE ENEMIES","Collect the resources they drop to repair your ship.",!0)),e>=3&&this.finishIntro(),this._updateIntroCamera();return}if(this.phase==="repairing"){this._updateRepair(t);return}if(this.phase==="sailing"){this._updateSailing(t);return}this.phase==="gameplay"&&this._updateWreckPrompt()}_updateIntroCamera(){if(!this.wreck)return;this.oldPosition||(this.oldPosition=this.camera.transform.position.toArray(),this.oldRotation=this.camera.transform.rotation.toArray(),this.cameraKeys=this.controller?.keys,this.controller&&(this.controller.keys=new Set));const t=this.phaseTime,e=this.camera.transform.position,s=this.camera.transform.rotation;if(t<this.shotDuration){const n=Math.min(t/this.shotDuration,1),i=n*n*(3-2*n),r=42;e.set(this.wreck.transform.position.x+34-i*15,this.wreck.transform.position.y+r+(23-r)*i,this.wreck.transform.position.z+42-i*18);const l=this.wreck.transform.position.x-e.x,c=this.wreck.transform.position.z-e.z,h=this.wreck.transform.position.y+1.5-e.y;s.set(Math.atan2(h,Math.hypot(l,c)),Math.atan2(-l,-c),0)}else if(t<this.shotDuration*2){const n=Math.min((t-this.shotDuration)/this.shotDuration,1),i=n*n*(3-2*n),r={x:0,z:145},o={x:0,z:-145},l={x:150,z:0};let c,h;if(n<.55){const g=n/.55,y=g*g*(3-2*g);c=r.x+(o.x-r.x)*y,h=r.z+(o.z-r.z)*y}else{const g=(n-.55)/.45,y=g*g*(3-2*g);c=o.x+(l.x-o.x)*y,h=o.z+(l.z-o.z)*y}const d=175-i*35,f=n*Math.PI*.75;e.set(c+Math.sin(f)*d,58+Math.sin(n*Math.PI)*10,h+Math.cos(f)*d);const u=c-e.x,m=h-e.z;s.set(-.42,Math.atan2(-u,-m),0)}else{const i=(typeof this.enemies=="function"?this.enemies():this.enemies).find(y=>y&&y.active&&!y.isDead);if(!i)return;const r=Math.min((t-this.shotDuration*2)/this.shotDuration,1),o=r*r*(3-2*r),l=i.transform.position.x,c=i.transform.position.y+3.3,h=i.transform.position.z,d=.7+o*.8,f=22-o*5;e.set(l+Math.sin(d)*f,c+8-o*1.5,h+Math.cos(d)*f);const u=l-e.x,m=c-e.y,g=h-e.z;s.set(Math.atan2(m,Math.hypot(u,g)),Math.atan2(-u,-g),0)}}_restorePlayerCamera(){this.oldPosition&&(this.camera.transform.position.set(...this.oldPosition),this.camera.transform.rotation.set(...this.oldRotation),this.controller&&this.cameraKeys&&(this.controller.keys=this.cameraKeys),this.controller?.placeOnNearestLand(),this.controller&&(this.controller.pitch=this.camera.transform.rotation.x,this.controller.yaw=this.camera.transform.rotation.y,this.controller._applyCameraRotation()),this.oldPosition=null,this.oldRotation=null,this.cameraKeys=null)}_updateWreckPrompt(){if(!this.wreck||this.wreck.repaired)return;const t=this.camera.transform.position,e=t.x-this.wreck.transform.position.x,s=t.z-this.wreck.transform.position.z;this.nearWreck=Math.hypot(e,s)<=7;const n=document.getElementById("repair-prompt");if(!n)return;n.classList.toggle("repair-prompt-visible",this.nearWreck);const i=this.resources.total()>=this.required.total;n.textContent=i?"HOLD E  •  REPAIR THE WRECK":`COLLECT SCRAP: ${this.resources.total()} / ${this.required.total}`,this.nearWreck&&this.controller?.keys.has("e")&&i&&(this.phase="repairing",this.repairProgress=0,this.repairFill&&(this.repairFill.style.width="0%"),document.getElementById("repair-progress")?.classList.add("repair-progress-visible"))}_updateRepair(t){const e=this.camera.transform.position;if(!(Math.hypot(e.x-this.wreck.transform.position.x,e.z-this.wreck.transform.position.z)<=7)||!this.controller?.keys.has("e")){this.phase="gameplay",this.repairProgress=0,document.getElementById("repair-progress")?.classList.remove("repair-progress-visible");return}this.repairProgress=Math.min(1,this.repairProgress+t/3.5),this.repairFill&&(this.repairFill.style.width=`${this.repairProgress*100}%`),this.repairProgress>=1&&this._repairComplete()}_repairComplete(){let t=this.required.total;for(const e of["wood","cloth","metal"]){const s=Math.min(this.resources.get(e),t);if(s>0&&this.resources.removeResource(e,s),t-=s,!t)break}this.wreck.repaired=!0,this.wreck.name="Repaired Escape Ship",this.phase="sailing",this.shipElapsed=0,this.shipBase=this.wreck.transform.position.toArray(),this.controller?.keys.clear(),document.exitPointerLock?.(),document.getElementById("repair-progress")?.classList.remove("repair-progress-visible"),document.getElementById("repair-prompt")?.classList.remove("repair-prompt-visible"),this._setCard("BOAT REPAIRED","Time to leave this island behind.")}_updateSailing(t){this.shipElapsed+=t;const e=Math.min(this.shipElapsed/5,1);this.wreck.transform.position.set(this.shipBase[0]+e*.4,this.shipBase[1]+Math.sin(this.shipElapsed*2.7)*.15,this.shipBase[2]-e*9),this.wreck.transform.rotation.y+=t*.025,e>=1&&(this.phase="won",this._hideCard(),this.winScreen?.classList.add("win-visible"),this.onWin?.())}restart(){this.phase="gameplay",this.phaseTime=0,this.repairProgress=0,this.wreck&&(this.wreck.repaired=!1,this.wreck.name="Ship Wreck [Objective]",this.shipBase&&this.wreck.transform.position.set(...this.shipBase)),this.shipElapsed=0,this._restorePlayerCamera(),this._hideCard(),this.winScreen?.classList.remove("win-visible"),this.objective?.classList.add("objective-visible")}dispose(){window.removeEventListener("keydown",this._keydown)}}const Mt=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),$=document.getElementById("glcanvas"),R=$.getContext("webgl2")||$.getContext("experimental-webgl");R||alert("Unable to initialize WebGL.");R.enable(R.DEPTH_TEST);R.depthFunc(R.LEQUAL);R.enable(R.CULL_FACE);R.cullFace(R.BACK);R.frontFace(R.CCW);R.getExtension("EXT_color_buffer_float");let oe=new ne(R,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",minFilter:R.NEAREST,magFilter:R.NEAREST}),Ot=new ne(R,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",depth:!0,minFilter:R.NEAREST,magFilter:R.NEAREST}),Gt=new ne(R,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:R.NEAREST,magFilter:R.NEAREST}),Yt=new ne(R,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:R.NEAREST,magFilter:R.NEAREST});const le=new vt(R,re,ae),Sn=new vt(R,[Xs,re],ae),Je=new vt(R,[Vs,re],ae),En=new vt(R,xe,Ls),Rn=new vt(R,[Us,re],[Hs,ae]),Tn=new vt(R,Is,Ws),An=new vt(R,xe,Ns),Pn=new vt(R,xe,Os),$t=new jt(R,Z("Textures/colormap.png")),Fn=new jt(R,Z("Textures/island.png"));new jt(R,Z("Textures/T_Colobus.png"));const qt=new lt(le,"Scene Mat"),he=new lt(le,"Scene Plane"),ce=new lt(Je,"Tree Wave"),de=new lt(Je,"Grass Wave"),Ut=new lt(Sn,"Ship Mat"),Dt=new lt(Rn,"Water"),Nt=new lt(Tn,"PPL Lighting"),wt=new lt(An,"Skybox"),be=new lt(Pn,"PixelArt"),kn=new lt(En,"Screen");Ut.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:$t.texture,uRoughness:1,uSampleRadius:.25});qt.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:$t.texture,uRoughness:1});ce.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:$t.texture,uRoughness:1,uTime:0,uWaveSpeed:.5,uWaveStrength:.7,uWaveFrequency:100,uWaveHeight:7,uGrassBatch:0,uWindDir:[1,.5]});de.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:$t.texture,uRoughness:1,uTime:0,uWaveSpeed:.5,uWaveStrength:.2,uWaveFrequency:200,uWaveHeight:.35,uGrassBatch:1,uWindDir:[1,.5]});he.setUniforms({uColor:[1,1,1,1],uHasTexture:0,uMainTex:Fn.texture,uRoughness:1});be.setUniforms({uPixelSize:1,uEdgeWidth:1,uColorLevels:128,uEdgeDistance:1,uCurvature:2,uDepthThreshold:.01,uNormalThreshold:.3,uSilhouetteDarkening:.2,uCreaseDarkening:.7});Nt.setUniforms({uLightDir:[1,.2,10],uLightColor:[1,.8,.75],uAmbient:.5,uSpecularStrength:.3,uShininess:.03,uShadowColor:[.21,.094,.09]});wt.setUniforms({uTopColor:[.133,.137,.251],uMidColor:[.749,.286,.369],uBottomColor:[.996,.431,.243],uSunColor:[.894,.514,.384],uCloudScale:5.4,uCloudThreshold:.01,uCloudDensity:.5,uCloudCoverage:.8,uCloudSpeed:.35,uCloudMainColor:[1,.49,.37],uCloudShadeColor:[.9,.35,.25]});const ts={uWind:[1,1],uSpeed:.5,udisplacement:1.5,uScale:1,uBuoyancyRotation:.3,uColor1:[.09,.271,.49],uColor2:[.192,.404,.624],uColor3:[.8,.8,1],uColor1Smoothstep:[0,.5],uColor2Smoothstep:[0,2],uWaveA:[-.35,.7,.13,3.92],uWaveB:[-.95,.51,.1,2.25],uWaveC:[-.4,-2,.1,13.5],uColorBands:3,uRoughness:0,uDepthThreshold:.5,uFoamIntensity:1};Ut.setUniforms(ts);Dt.setUniforms(ts);Ut.setUniforms({uRoughness:1});const Dn={Lighting:Nt,Skybox:wt,PixelArt:be,Water:Dt,Buoyancy:Ut,TreeWave:ce,GrassWave:de,planeTer:he},st=new ds(R),G=new cs,Q=[],gt=new ms(R),St=new ps({cellSize:16,defaultLayer:ut.WORLD}),Me=new $e(R,$.width,$.height,Ot,1,"GBuffer Pass");Me.clearColor=[.5,.5,1,1];Me.clearDepth=!0;gt.addPass(Me);const _e=new $e(R,$.width,$.height,oe,0,"Albedo Pass");_e.clearColor=[0,0,0,1];_e.clearDepth=!0;gt.addPass(_e);const fe=new xs(R,$.width,$.height,Nt,Yt,"Lighting Pass");fe.setInputBuffers(oe.texture,Ot.texture);fe.lightDir=new kt(0);gt.addPass(fe);const Ce=new ws(R,$.width,$.height,wt,Yt,"Skybox Pass");Ce.setInputTexture(Ot.texture);gt.addPass(Ce);const es=new bs(R,$.width,$.height,be,Gt,"PixelArt Pass");es.setInputBuffers(Yt.texture,Ot.texture);gt.addPass(es);const Xt=new Cs(R,$.width,$.height,Gt,"Wireframe Pass");Mt||(Xt.setWireColor(0,1,0),Xt.setOpacity(1),gt.addPass(Xt));const Rt=new ys(R,$.width,$.height,kn);Rt.setBuffer("Final",Gt.texture);Rt.setBuffer("Pixel",Gt.texture);Rt.setBuffer("Lit",Yt.texture);Rt.setBuffer("Albedo",oe.texture);Rt.setBuffer("Gbuffer",Ot.texture);gt.addPass(Rt);function ss(){$.width=window.innerWidth,$.height=window.innerHeight;const a=1,t=Math.floor($.width*a),e=Math.floor($.height*a);R.viewport(0,0,t,e),oe.resize(t,e),Ot.resize(t,e),Yt.resize(t,e),Gt.resize(t,e),gt.resize(t,e);const s=$.width/$.height;G.setPerspective(75*Math.PI/180,s,.1,1e3)}window.addEventListener("resize",ss);ss();const Bn=$.width/$.height;G.setPerspective(75*Math.PI/180,Bn,.1,1e3);G.transform.position.set(-39.2,1.8,-47);G.transform.rotation.set(0,Mt?3.24:3.22,0);const Se=Math.floor(Math.random()*4294967296),je=is(Se),Ge=32e3;nt.setOffsets((je()-.5)*Ge,(je()-.5)*Ge);let bt=new rt(st,he,new pt(R,255,255,1,!0),"Scense");bt.transform.position.set(-(255*Math.sqrt(3)/2),-11,-191.25);bt.transform.scale.set(1,.4,1);Q.push(bt);const Bt=new Bs(R,st,Ut,Q),zt=new Fs(R,st,qt,Q,null,{camera:G,seed:Se^5370206,lootTable:[{item:"food",probability:1,minCount:2,maxCount:5}]}),Pt=new Ze(R,st,qt,Q,[],{threshold:.425,collisionWorld:St,materials:{TreeWave:ce}}),zn={direction:{x:.207,y:0,z:-.707},speed:0},X={enabled:!0,count:10,seed:Se,bounds:{minX:-(255*Math.sqrt(3)/2),maxX:255*Math.sqrt(3)/2,minZ:-191.25,maxZ:255*1.5/2},yFixed:-6.25},ns={total:12},Vt=new zs(R,st,de,Q,{density:.03,scaleRange:[.5,1.35],seed:X.seed});let te=[],ee=[];function is(a){let t=a>>>0;return function(){t+=1831565813;let e=Math.imul(t^t>>>15,1|t);return e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}}function Ln(){if(bt){const a=Q.indexOf(bt);a>=0&&Q.splice(a,1)}bt=new rt(st,he,new pt(R,255,255,1,!0),"Scense"),bt.transform.position.set(-(255*Math.sqrt(3)/2),-11,-191.25),bt.transform.scale.set(1,.4,1),Q.push(bt)}X.enabled&&(Bt.setSeed(X.seed),Bt.spawnMany(X.count,X.bounds,X.yFixed).then(a=>{te=a,console.log(`Spawned ${a.length} floating objects with seed ${X.seed}`)}),Pt.setSeed(X.seed),Pt.spawnMany(320,X.bounds,-11).then(a=>{ee=a,console.log(`Spawned ${a.length} land objects with seed ${X.seed}`)}),Vt.setSeed(X.seed),Vt.spawn(X.bounds,-11).then(a=>{console.log(`Spawned ${a.length} static grass batches`)}),zt.setSeed(X.seed^5370206),zt.spawnMany(16,X.bounds,-11).then(a=>{console.log(`Spawned ${a.length} loot chests`)}));let In=new pt(R,255,255,1);const Ee=new rt(st,Dt,In,"Water Floor [0,0]");Ee.transform.position.set(-(255*Math.sqrt(3)/2),-6.5,-191.25);Ee.transform.scale.set(1,1,1);Q.push(Ee);Promise.all([mt.load(R,Z("3D/LOD1.obj")),mt.load(R,Z("3D/LOD2.obj")),mt.load(R,Z("3D/LOD3.obj"))]).then(([a,t,e])=>{const o=Mt?1:0,l=Mt?-1:3,c=Mt?t:a,h=Mt?"LOD2":"LOD1",d=new rt(st,Dt,c,`Water Floor [0,0] ${h}`);if(d.transform.position.set(-(255*Math.sqrt(3)/2),-6.5-.5,-191.25),d.transform.scale.set(1,1,1),Q.push(d),Mt)for(let f=0;f<=5;f++)for(let u=-f;u<=f;u++){if(u===0&&f===0)continue;const m=new rt(st,Dt,e,`Water Floor [${u},${f}] LOD3`);d.transform.add(m.transform),m.transform.setGlobalPosition(u*80,-6.5-.5,f*80),m.transform.scale.set(50,50,50)}else for(let f=-5;f<=5;f++)for(let u=-5;u<=5;u++){if(f===0&&u===0)continue;const m=Math.sqrt(f*f+u*u),g=m<=o?a:m<=l?t:e,y=m<=o?1:m<=l?2:3,w=new rt(st,Dt,g,`Water Floor [${f},${u}] LOD${y}`);d.transform.add(w.transform),w.transform.setGlobalPosition(f*80,-6.5,u*80),w.transform.scale.set(50,50,50)}});const Re=[{x:0,y:0,w:1,h:1,pass:"Final"}];Rt.setViewports(Re);const j={gl:R,scene:Q,camera:G,renderer:st,renderQueue:gt,materials:Dn,viewportPass:Rt,wireframePass:Xt,floatingSpawner:Bt,landSpawner:Pt,collisionWorld:St,floatingSpawnConfig:X,textures:{ship:$t}};j.setViewports=a=>{Re[0].pass=a};j.spawnFloatingObjects=async a=>{const t=await Bt.spawnMany(a,X.bounds,X.yFixed);return console.log(`Spawned ${t.length} additional floating objects`),t};j.spawnLandObjects=async a=>{const t=await Pt.spawnMany(a,X.bounds,-11);return console.log(`Spawned ${t.length} additional land objects`),t};j.respawnWithSeed=a=>{Pt.clearCollisionObjects(),Vt.clear();const t=Q.filter(o=>!o.isGrassBatch&&!o.isLootChest&&(!o.name||!o.name.includes("[Floating]")&&!o.name.includes("[Land]")&&!o.name.startsWith("Grass Batch:")));Q.length=0,Q.push(...t),te=[],ee=[],Bt.setSeed(a),Pt.setSeed(a),Vt.setSeed(a),zt.setSeed(a^5370206),X.seed=a;const e=is(a),s=32e3,n=(e()-.5)*s,i=(e()-.5)*s;nt.setOffsets(n,i),Ln();const r=Bt.spawnMany(X.count,X.bounds,X.yFixed);return te=r,ee=Pt.spawnMany(320,X.bounds,-11),Vt.spawn(X.bounds,-11),zt.spawnMany(16,X.bounds,-11),console.log(`Respawned with seed ${a}: ${r.length} objects`),r};const Zt=new bn;j.resourceTracker=Zt;const rs=new Mn({onRestart:a=>{Ct.setHp(Ct.maxHp),Zt.reset();for(let t=0;t<_t.length;t++)_t[t]._remove&&_t[t]._remove();if(_t.length=0,typeof j.respawnWithSeed=="function"&&j.respawnWithSeed(a),At.clearAll(),ct.length=0,et=as(),Wt=et.y,os=nt.getValue(et.x-ue,et.z-me,0),ht?.transform.position.set(et.x,Wt,et.z),ht?.collider){const t=ht.collider;St.remove(t);const e=ge.colliderHandles.indexOf(t);ht.collider=St.addStaticObject(ht,{radiusScale:1}),e>=0&&(ge.colliderHandles[e]=ht.collider)}G.transform.position.set(et.x+7,Wt+2,et.z),Ft.placeOnNearestLand(),ot.shipBase=[et.x,Wt,et.z],ot.restart(),At.setSeed(a^57005),At.spawnGroups(3,X.bounds,5).then(t=>{for(let e=0;e<t.length;e++)ct.push(t[e]);j.enemies=ct,Te&&At.scatterEnemies(X.bounds,24)})}});j.deathScreen=rs;const Kt=new _n;j.audio=Kt;const Ct=new js({maxHp:100,onDeath:()=>{Kt.playDeath(),rs.show(Zt.getAll())},onDamage:(a,t,e)=>{console.log(`Player took ${a} damage — ${t}/${e} HP remaining.`)}});j.playerHealth=Ct;j.player={name:"Player",health:Ct,takeDamage:a=>Ct.takeDamage(a),heal:a=>Ct.heal(a)};j.damagePlayer=a=>Ct.takeDamage(a);j.healPlayer=a=>Ct.heal(a);const At=new wn(R,st,qt,Q,{seed:X.seed,minNoiseValue:.42,collisionWorld:St});let ct=[],Te=!1;const _t=[];At.spawnGroups(3,X.bounds,5).then(a=>{ct=a,j.enemies=ct,Te&&At.scatterEnemies(X.bounds,24),console.log(`[Enemies] Spawned ${a.length} enemies for the escape story.`)});j.enemySpawner=At;j.enemies=ct;window.game=j;window.floatingSpawner=Bt;window.landSpawner=Pt;window.collisionWorld=St;window.oceanConfig=zn;window.floatingObjects=te;window.landObjects=ee;window.floatingSpawnConfig=X;const Ft=new Ts(G,$,{collisionWorld:St,collisionLayerMask:ut.WORLD,collisionActorLayer:ut.PLAYER});j.cameraController=Ft;const Et=new As(R,st,le,G,Q,{controller:Ft,inputElement:$,onEatFood:a=>j.healPlayer(a),attackDamage:25,attackReach:3.2,attackRadius:.9});j.firstPersonHand=Et;j.attack=()=>Et.attack();const Wn=Et.applyDamage.bind(Et);Et.applyDamage=function(a,t){if(t===void 0&&(t=Et.settings.attackDamage),a&&typeof a.takeDamage=="function"&&a.hitRadius!==void 0){const e=a.takeDamage(t,G.transform.position,G);return e>0&&!a.isDead&&xt.spawnHit(a.transform.position,G),typeof e=="number"?e:t}return Wn(a,t)};const dt=new Ps(R,st,le,G,Q,{hand:Et,controller:Ft});zt.inventory=dt;Et.inventory=dt;j.inventory=dt;j.player.inventory=dt;const ge=new Ze(R,st,qt,Q,["ship-wreck.obj"],{threshold:.45,collisionWorld:St}),ue=-(255*Math.sqrt(3)/2),me=-191.25;function It(a,t){const e=nt.getValue(a-ue,t-me,0);return-11+pt.terrainValue(e)*20*.4}function as(a=-39.2,t=-47){let e=null,s=1/0;for(let n=0;n<=120;n+=12){for(let i=-n;i<=n;i+=3)for(let r=-n;r<=n;r+=3){if(n>0&&Math.max(Math.abs(r),Math.abs(i))!==n)continue;const o=a+r,l=t+i,c=nt.getValue(o-ue,l-me,0);if(c<=.3)continue;const h=It(o,l),d=[It(o+3,l),It(o-3,l),It(o,l+3),It(o,l-3)],f=Math.max(...d.map(g=>Math.abs(g-h)));if(f>2.5)continue;const m=Math.hypot(r,i)+f*7+Math.abs(c-.34)*18;m<s&&(e={x:o,y:h,z:l},s=m)}if(e)break}return e||{x:a,y:It(a,t),z:t}}let et=as(),Wt=et.y,os=nt.getValue(et.x-ue,et.z-me,0);const ht=await ge.spawnRandomObject({...et,y:-11},os,0);ht&&(ht.name="Ship Wreck [Objective]",ht.transform.position.set(et.x,Wt,et.z),ht.transform.scale.set(1.8,1.8,1.8),ht.repaired=!1);G.transform.position.set(et.x+7,Wt+2,et.z);const ot=new Cn({camera:G,controller:Ft,wreck:ht,enemies:()=>ct,resources:Zt,required:ns,onIntroComplete:()=>{Te=!0,At.scatterEnemies(X.bounds,24)}});j.story=ot;j.shipRepairCost=ns;document.getElementById("win-restart-btn")?.addEventListener("click",()=>window.location.reload());const Nn=dt.attackSelected.bind(dt);dt.attackSelected=function(a){const t=Nn(a);return t&&Kt.playSword(),t};const On=dt.startEating.bind(dt);dt.startEating=function(){const a=On();return a&&Kt.playEat(),a};window.addEventListener("keydown",a=>{const t=a.key.toLowerCase();if(t==="t"&&Xt.toggle(),t==="r"){const e=Math.floor(Math.random()*1e6);typeof j.respawnWithSeed=="function"&&j.respawnWithSeed(e)}});const ft=[.5,.8,.2];let ve=0,Ye="";const Ae=R.createBuffer();R.bindBuffer(R.UNIFORM_BUFFER,Ae);R.bufferData(R.UNIFORM_BUFFER,140,R.DYNAMIC_DRAW);R.bindBufferBase(R.UNIFORM_BUFFER,0,Ae);function ls(a){if(J.update(a),j.deltaTime=J.deltaTime,ot.phase==="gameplay"||ot.phase==="repairing"?Ft.update(J.deltaTime):(ot.phase==="intro"||ot.phase==="sailing")&&Ft.keys.clear(),ot.update(J.deltaTime),zt.interactionEnabled=ot.phase==="gameplay",Et.update(J.deltaTime),dt.update(J.deltaTime),zt.update(J.deltaTime),Kt.update(Ft.isWalking),(ot.phase==="gameplay"||ot.phase==="repairing")&&ct.length>0){const s={playerPosition:G.transform.position,allEnemies:ct,playerHealth:Ct,collisionWorld:St,camera:G,drops:_t};for(let n=0;n<ct.length;n++)ct[n].update(J.deltaTime,s)}if((ot.phase==="gameplay"||ot.phase==="repairing")&&_t.length>0){const e=G.transform.position;for(let s=_t.length-1;s>=0;s--)_t[s].update(J.deltaTime,e,G,Zt)&&_t.splice(s,1)}if(Dt.setUniforms({uTime:J.time}),Ut.setUniforms({uTime:J.time}),ce.setUniforms({uTime:J.time}),de.setUniforms({uTime:J.time}),wt.setUniforms({uTime:J.time}),Nt.uniforms.uLightDir&&Nt.uniforms.uLightDir.value){const e=Nt.uniforms.uLightDir.value,s=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);s>.001?(ft[0]=e[0]/s,ft[1]=e[1]/s,ft[2]=e[2]/s):(ft[0]=e[0],ft[1]=e[1],ft[2]=e[2]),fe.lightDir=new kt(ft[0],ft[1],ft[2])}G.updateView(),Rt.setViewports(Re),G.updateProjection(),R.bindBuffer(R.UNIFORM_BUFFER,Ae),R.bufferSubData(R.UNIFORM_BUFFER,0,new Float32Array(G.projectionMatrix)),R.bufferSubData(R.UNIFORM_BUFFER,64,new Float32Array(G.viewMatrix)),R.bufferSubData(R.UNIFORM_BUFFER,128,new Float32Array([G.transform.position.x,G.transform.position.y,G.transform.position.z])),wt.uniforms.uSunColor&&Ce.setLight(ft,wt.uniforms.uSunColor.value,wt.uniforms.uTopColor.value,wt.uniforms.uMidColor.value,wt.uniforms.uBottomColor.value),gt.execute(st,Q,G),R.flush(),R.finish();const t=document.getElementById("hud");if(t&&(ve++,ve>=6)){ve=0;const s=(J.unscaledDeltaTime>0?Math.round(1/J.unscaledDeltaTime):0).toString().padStart(3,"0");let n="";const i=(J.deltaTime*1e3).toFixed(2).padStart(6,"0");Ye=`FPS: ${s}${n}<br>Δ: ${i} ms`,t.innerHTML=Ye}requestAnimationFrame(ls)}requestAnimationFrame(ls);
