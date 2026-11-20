var Je=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);var Js=Je((en,Gt)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();class St{constructor(t=0,e=0,i=0){this.data=new Float32Array([t,e,i]),this._onchange=null}get x(){return this.data[0]}set x(t){this.data[0]=t,this._onchange&&this._onchange()}get y(){return this.data[1]}set y(t){this.data[1]=t,this._onchange&&this._onchange()}get z(){return this.data[2]}set z(t){this.data[2]=t,this._onchange&&this._onchange()}set(t,e,i){return this.data[0]=t,this.data[1]=e,this.data[2]=i,this._onchange&&this._onchange(),this}copy(t){return this.data[0]=t.x,this.data[1]=t.y,this.data[2]=t.z,this._onchange&&this._onchange(),this}toArray(){return[this.data[0],this.data[1],this.data[2]]}add(t){return this.data[0]+=t.data[0],this.data[1]+=t.data[1],this.data[2]+=t.data[2],this._onchange&&this._onchange(),this}subtract(t){return this.data[0]-=t.data[0],this.data[1]-=t.data[1],this.data[2]-=t.data[2],this._onchange&&this._onchange(),this}scale(t){return this.data[0]*=t,this.data[1]*=t,this.data[2]*=t,this._onchange&&this._onchange(),this}magnitude(){const t=this.data[0],e=this.data[1],i=this.data[2];return Math.sqrt(t*t+e*e+i*i)}normalize(){const t=this.magnitude();return t>1e-5&&(this.data[0]/=t,this.data[1]/=t,this.data[2]/=t),this._onchange&&this._onchange(),this}}class K{static identity(t){return mt.identity(t)}static copy(t,e){return t.set(e),t}static multiply(t,e,i){return mt.multiply(t,e,i)}static translate(t,e,i){return mt.translate(t,e,i)}static scale(t,e,i){return mt.scale(t,e,i)}static rotateX(t,e,i){return mt.rotateX(t,e,i)}static rotateY(t,e,i){return mt.rotateY(t,e,i)}static rotateZ(t,e,i){return mt.rotateZ(t,e,i)}static invert(t,e){return mt.invert(t,e)}static compose(t,e,i,s){return mt.compose(t,e,i,s)}}const mt={identity(a){return a.fill(0),a[0]=1,a[5]=1,a[10]=1,a[15]=1,a},multiply(a,t,e){let i=t[0],s=t[1],n=t[2],r=t[3],o=t[4],c=t[5],h=t[6],l=t[7],d=t[8],u=t[9],f=t[10],g=t[11],y=t[12],x=t[13],p=t[14],b=t[15],_=e[0],T=e[1],A=e[2],M=e[3];return a[0]=_*i+T*o+A*d+M*y,a[1]=_*s+T*c+A*u+M*x,a[2]=_*n+T*h+A*f+M*p,a[3]=_*r+T*l+A*g+M*b,_=e[4],T=e[5],A=e[6],M=e[7],a[4]=_*i+T*o+A*d+M*y,a[5]=_*s+T*c+A*u+M*x,a[6]=_*n+T*h+A*f+M*p,a[7]=_*r+T*l+A*g+M*b,_=e[8],T=e[9],A=e[10],M=e[11],a[8]=_*i+T*o+A*d+M*y,a[9]=_*s+T*c+A*u+M*x,a[10]=_*n+T*h+A*f+M*p,a[11]=_*r+T*l+A*g+M*b,_=e[12],T=e[13],A=e[14],M=e[15],a[12]=_*i+T*o+A*d+M*y,a[13]=_*s+T*c+A*u+M*x,a[14]=_*n+T*h+A*f+M*p,a[15]=_*r+T*l+A*g+M*b,a},translate(a,t,e){let i=e.x!==void 0?e.x:e[0],s=e.y!==void 0?e.y:e[1],n=e.z!==void 0?e.z:e[2];if(t===a)a[12]=t[0]*i+t[4]*s+t[8]*n+t[12],a[13]=t[1]*i+t[5]*s+t[9]*n+t[13],a[14]=t[2]*i+t[6]*s+t[10]*n+t[14],a[15]=t[3]*i+t[7]*s+t[11]*n+t[15];else{let r=t[0],o=t[1],c=t[2],h=t[3],l=t[4],d=t[5],u=t[6],f=t[7],g=t[8],y=t[9],x=t[10],p=t[11];a[0]=r,a[1]=o,a[2]=c,a[3]=h,a[4]=l,a[5]=d,a[6]=u,a[7]=f,a[8]=g,a[9]=y,a[10]=x,a[11]=p,a[12]=r*i+l*s+g*n+t[12],a[13]=o*i+d*s+y*n+t[13],a[14]=c*i+u*s+x*n+t[14],a[15]=h*i+f*s+p*n+t[15]}return a},scale(a,t,e){let i=e.x!==void 0?e.x:e[0],s=e.y!==void 0?e.y:e[1],n=e.z!==void 0?e.z:e[2];return a[0]=t[0]*i,a[1]=t[1]*i,a[2]=t[2]*i,a[3]=t[3]*i,a[4]=t[4]*s,a[5]=t[5]*s,a[6]=t[6]*s,a[7]=t[7]*s,a[8]=t[8]*n,a[9]=t[9]*n,a[10]=t[10]*n,a[11]=t[11]*n,a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a},rotateX(a,t,e){let i=Math.sin(e),s=Math.cos(e),n=t[4],r=t[5],o=t[6],c=t[7],h=t[8],l=t[9],d=t[10],u=t[11];return t!==a&&(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[4]=n*s+h*i,a[5]=r*s+l*i,a[6]=o*s+d*i,a[7]=c*s+u*i,a[8]=h*s-n*i,a[9]=l*s-r*i,a[10]=d*s-o*i,a[11]=u*s-c*i,a},rotateY(a,t,e){let i=Math.sin(e),s=Math.cos(e),n=t[0],r=t[1],o=t[2],c=t[3],h=t[8],l=t[9],d=t[10],u=t[11];return t!==a&&(a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[0]=n*s-h*i,a[1]=r*s-l*i,a[2]=o*s-d*i,a[3]=c*s-u*i,a[8]=n*i+h*s,a[9]=r*i+l*s,a[10]=o*i+d*s,a[11]=c*i+u*s,a},rotateZ(a,t,e){let i=Math.sin(e),s=Math.cos(e),n=t[0],r=t[1],o=t[2],c=t[3],h=t[4],l=t[5],d=t[6],u=t[7];return t!==a&&(a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a[0]=n*s+h*i,a[1]=r*s+l*i,a[2]=o*s+d*i,a[3]=c*s+u*i,a[4]=h*s-n*i,a[5]=l*s-r*i,a[6]=d*s-o*i,a[7]=u*s-c*i,a},invert(a,t){let e=t[0],i=t[1],s=t[2],n=t[3],r=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],x=t[14],p=t[15],b=e*o-i*r,_=e*c-s*r,T=e*h-n*r,A=i*c-s*o,M=i*h-n*o,I=s*h-n*c,m=l*y-d*g,E=l*x-u*g,k=l*p-f*g,D=d*x-u*y,W=d*p-f*y,C=u*p-f*x,z=b*C-_*W+T*D+A*k-M*E+I*m;return z?(z=1/z,a[0]=(o*C-c*W+h*D)*z,a[1]=(s*W-i*C-n*D)*z,a[2]=(y*I-x*M+p*A)*z,a[3]=(u*M-d*I-f*A)*z,a[4]=(c*k-r*C-h*E)*z,a[5]=(e*C-s*k+n*E)*z,a[6]=(x*T-g*I-p*_)*z,a[7]=(l*I-u*T+f*_)*z,a[8]=(r*W-o*k+h*m)*z,a[9]=(i*k-e*W-n*m)*z,a[10]=(g*M-y*T+p*b)*z,a[11]=(d*T-l*M-f*b)*z,a[12]=(o*E-r*D-c*m)*z,a[13]=(e*D-i*E+s*m)*z,a[14]=(y*_-g*A-x*b)*z,a[15]=(l*A-d*_+u*b)*z,a):null},compose(a,t,e,i){let s=t.x!==void 0?t.x:t[0],n=t.y!==void 0?t.y:t[1],r=t.z!==void 0?t.z:t[2],o=e.x!==void 0?e.x:e[0],c=e.y!==void 0?e.y:e[1],h=e.z!==void 0?e.z:e[2],l=i.x!==void 0?i.x:i[0],d=i.y!==void 0?i.y:i[1],u=i.z!==void 0?i.z:i[2],f=Math.cos(c),g=Math.sin(c),y=Math.cos(o),x=Math.sin(o),p=Math.cos(h),b=Math.sin(h);return a[0]=(f*p-g*x*b)*l,a[1]=(f*b+g*x*p)*l,a[2]=-g*y*l,a[3]=0,a[4]=-y*b*d,a[5]=y*p*d,a[6]=x*d,a[7]=0,a[8]=(g*p+f*x*b)*u,a[9]=(g*b-f*x*p)*u,a[10]=f*y*u,a[11]=0,a[12]=s,a[13]=n,a[14]=r,a[15]=1,a}};class ti{constructor(){this.position=new St(0,0,0),this.rotation=new St(0,0,0),this.scale=new St(1,1,1),this.localMatrix=new Float32Array(16),this.worldMatrix=new Float32Array(16),K.identity(this.localMatrix),K.identity(this.worldMatrix),this.parent=null,this.children=[],this._isDirty=!0,this.position._onchange=()=>this.markDirty(),this.rotation._onchange=()=>this.markDirty(),this.scale._onchange=()=>this.markDirty()}add(t){t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.markDirty()}remove(t){const e=this.children.indexOf(t);if(e!==-1){t.parent=null;const i=this.children.length-1;e!==i&&(this.children[e]=this.children[i]),this.children.pop()}}markDirty(){this._isDirty=!0}updateLocalMatrix(){this._isDirty&&(K.identity(this.localMatrix),K.translate(this.localMatrix,this.localMatrix,this.position),K.rotateY(this.localMatrix,this.localMatrix,this.rotation.y),K.rotateX(this.localMatrix,this.localMatrix,this.rotation.x),K.rotateZ(this.localMatrix,this.localMatrix,this.rotation.z),K.scale(this.localMatrix,this.localMatrix,this.scale),this._isDirty=!1)}updateWorldMatrix(){this.updateLocalMatrix(),this.parent?K.multiply(this.worldMatrix,this.parent.worldMatrix,this.localMatrix):this.worldMatrix.set(this.localMatrix);for(let t=0;t<this.children.length;t++)this.children[t].updateWorldMatrix()}get globalPosition(){return this.updateWorldMatrix(),new St(this.worldMatrix[12],this.worldMatrix[13],this.worldMatrix[14])}setGlobalPosition(t,e,i){if(!this.parent){this.position.set(t,e,i);return}this.parent.updateWorldMatrix();const s=new Float32Array(16);K.invert(s,this.parent.worldMatrix);const n=t,r=e,o=i,c=s[0]*n+s[4]*r+s[8]*o+s[12],h=s[1]*n+s[5]*r+s[9]*o+s[13],l=s[2]*n+s[6]*r+s[10]*o+s[14];this.position.set(c,h,l)}get globalScale(){this.updateWorldMatrix();const t=Math.sqrt(this.worldMatrix[0]**2+this.worldMatrix[1]**2+this.worldMatrix[2]**2),e=Math.sqrt(this.worldMatrix[4]**2+this.worldMatrix[5]**2+this.worldMatrix[6]**2),i=Math.sqrt(this.worldMatrix[8]**2+this.worldMatrix[9]**2+this.worldMatrix[10]**2);return new St(t,e,i)}}class it{constructor(t,e,i=null,s="GameObject"){this.name=s,this.active=!0,this.transform=new ti,this.transform.gameObject=this,this.renderer=t,this.material=e,this.mesh=i}render(t,e=void 0,i=null){if(!this.active)return;this.transform.updateWorldMatrix();const s=i||this.material;this.renderer&&s&&this.renderer.draw(this,t,e,s)}}class $e extends it{constructor(){super(null),this.projectionMatrix=new Float32Array(16),this.viewMatrix=new Float32Array(16),this.fov=45*Math.PI/180,this.aspect=1,this.near=.1,this.far=100,this.orthographic=!1,this.orthoSize=30,K.identity(this.projectionMatrix),K.identity(this.viewMatrix),this.transform.position.set(0,0,5),this.name="Camera"}setPerspective(t,e,i,s){this.fov=t,this.aspect=e,this.near=i,this.far=s,this.orthographic=!1;const n=1/Math.tan(t/2),r=this.projectionMatrix;r.fill(0),r[0]=n/e,r[5]=n,r[10]=(s+i)/(i-s),r[11]=-1,r[14]=2*s*i/(i-s)}setOrthographic(t,e,i,s,n,r){this.near=n,this.far=r,this.orthographic=!0,this.orthoSize=(s-i)/2;const o=this.projectionMatrix,c=1/(t-e),h=1/(i-s),l=1/(n-r);o.fill(0),o[0]=-2*c,o[5]=-2*h,o[10]=2*l,o[12]=(t+e)*c,o[13]=(s+i)*h,o[14]=(r+n)*l,o[15]=1}updateProjection(){if(this.orthographic){const t=this.orthoSize;this.setOrthographic(-t*this.aspect,t*this.aspect,-t,t,this.near,this.far)}else this.setPerspective(this.fov,this.aspect,this.near,this.far)}updateView(){this.transform.updateWorldMatrix(),K.invert(this.viewMatrix,this.transform.worldMatrix)}getScreenPosition(t,e=null){const i=this.viewMatrix,s=this.projectionMatrix;t.transform.updateWorldMatrix();const n=t.transform.worldMatrix,r=n[12],o=n[13],c=n[14],h=1,l=i[0]*r+i[4]*o+i[8]*c+i[12]*h,d=i[1]*r+i[5]*o+i[9]*c+i[13]*h,u=i[2]*r+i[6]*o+i[10]*c+i[14]*h,f=i[3]*r+i[7]*o+i[11]*c+i[15]*h,g=s[0]*l+s[4]*d+s[8]*u+s[12]*f,y=s[1]*l+s[5]*d+s[9]*u+s[13]*f;s[2]*l+s[6]*d+s[10]*u+s[14]*f;const x=s[3]*l+s[7]*d+s[11]*u+s[15]*f;if(x===0)return e?(e[0]=.5,e[1]=.5):e=[.5,.5],e;const p=g/x,b=y/x,_=(p+1)*.5,T=(b+1)*.5;return e?(e[0]=_,e[1]=T):e=[_,T],e}}class ut{constructor(t,e,i,s=null,n=null){this.gl=t;const r=this.loadShader(t.VERTEX_SHADER,e),o=this.loadShader(t.FRAGMENT_SHADER,i);this.program=t.createProgram(),t.attachShader(this.program,r);let c=!1;if(s&&n){const h=this.loadShader(36488,s),l=this.loadShader(36487,n);h&&l?(t.attachShader(this.program,h),t.attachShader(this.program,l),c=!0):console.warn("Tessellation shaders not supported, falling back to vertex/fragment only")}t.attachShader(this.program,o),t.linkProgram(this.program),t.getProgramParameter(this.program,t.LINK_STATUS)||console.error("Shader init error:",t.getProgramInfoLog(this.program)),this.uniforms={},this.attributes={},this.tessellationSupported=c}getUniformLocation(t){return this.uniforms[t]===void 0&&(this.uniforms[t]=this.gl.getUniformLocation(this.program,t)),this.uniforms[t]}setUniform(t,e,i){const s=this.gl,n=this.getUniformLocation(t);if(n){if(i){i==="1i"?s.uniform1i(n,e):i==="1f"?s.uniform1f(n,e):i==="2fv"?s.uniform2fv(n,e):i==="3fv"?s.uniform3fv(n,e):i==="4fv"?s.uniform4fv(n,e):i==="Matrix4fv"&&s.uniformMatrix4fv(n,!1,e);return}if(typeof e=="number")s.uniform1f(n,e);else if(Array.isArray(e)||e instanceof Float32Array)switch(e.length){case 2:s.uniform2fv(n,e);break;case 3:s.uniform3fv(n,e);break;case 4:s.uniform4fv(n,e);break;case 16:s.uniformMatrix4fv(n,!1,e);break;default:console.warn(`Unsupported uniform array length: ${e.length} for ${t}`)}}}getAttribLocation(t){return this.attributes[t]===void 0&&(this.attributes[t]=this.gl.getAttribLocation(this.program,t)),this.attributes[t]}use(){this.gl.useProgram(this.program)}loadShader(t,e){let i=e;if(Array.isArray(e)){let n="";const r=e.map(o=>{if(typeof o!="string")return"";const c=o.split(/\r?\n/),h=[];for(const l of c){if(l.trim().startsWith("#version")){n||(n=l.trim());continue}h.push(l)}return h.join(`
`)});n?i=`${n}
${r.join(`
`)}`:i=r.join(`
`)}let s;try{if(s=this.gl.createShader(t),!s)return console.warn(`Shader type ${t} not supported`),null}catch(n){return console.warn(`Shader type ${t} not supported:`,n.message),null}return this.gl.shaderSource(s,i),this.gl.compileShader(s),this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS)?s:(console.error("Shader compile error:",this.gl.getShaderInfoLog(s)),this.gl.deleteShader(s),null)}}class fe{constructor(t,e,i,s,n=null){this.gl=t,this.vertices=e,this.uvs=i,this.normals=s,this.indices=n,this.count=n?n.length:e.length/3,this.vertexBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,this.vertices,t.STATIC_DRAW),this.uvs&&this.uvs.length>0&&(this.uvBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer),t.bufferData(t.ARRAY_BUFFER,this.uvs,t.STATIC_DRAW)),this.normals&&this.normals.length>0&&(this.normalBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer),t.bufferData(t.ARRAY_BUFFER,this.normals,t.STATIC_DRAW)),this.indices&&this.indices.length>0&&(this.indexBuffer=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.indices,t.STATIC_DRAW))}bind(t){const e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer);const i=t.getAttribLocation("aVertexPosition");if(i!==-1&&(e.enableVertexAttribArray(i),e.vertexAttribPointer(i,3,e.FLOAT,!1,0,0)),this.uvBuffer){e.bindBuffer(e.ARRAY_BUFFER,this.uvBuffer);const s=t.getAttribLocation("aTexCoord");s!==-1&&(e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,0,0))}if(this.normalBuffer){e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer);const s=t.getAttribLocation("aNormal");s!==-1&&(e.enableVertexAttribArray(s),e.vertexAttribPointer(s,3,e.FLOAT,!1,0,0))}if(this.colorBuffer){e.bindBuffer(e.ARRAY_BUFFER,this.colorBuffer);const s=t.getAttribLocation("aColor");s!==-1&&(e.enableVertexAttribArray(s),e.vertexAttribPointer(s,3,e.FLOAT,!1,0,0))}this.indexBuffer&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer)}draw(){const t=this.gl;this.indices&&this.indices.length>0?t.drawElements(t.TRIANGLES,this.count,t.UNSIGNED_SHORT,0):t.drawArrays(t.TRIANGLES,0,this.count)}}class ei{constructor(t){this.gl=t,this.drawCalls=0,this.currentPassDrawCalls=[],this.drawCallDetails=[],this.currentPassName=null;const e=new Float32Array([-.5,.5,0,-.5,-.5,0,.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),i=new Float32Array([0,1,0,0,1,1,1,1,0,0,1,0]),s=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]);this.defaultMesh=new fe(t,e,i,s)}draw(t,e,i=void 0,s=null){const n=s||t.material;if(!n||!n.shader)return;const r=this.gl,o=t.mesh||this.defaultMesh;i!==void 0&&(i?i.bind():(r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height)));const c=n.shader;c.use(),o.bind(c);const h=r.getUniformBlockIndex(c.program,"FrameData");r.uniformBlockBinding(c.program,h,0),c.setUniform("uModelMatrix",t.transform.worldMatrix);for(const f in n.uniforms){const g=n.uniforms[f];let y=g.value,x=g.type;(y instanceof WebGLTexture||x==="1i"&&y&&typeof y=="object")&&r.bindTexture(r.TEXTURE_2D,y),c.setUniform(f,y,x)}if(!this.currentPassName){o.draw(),this.drawCalls++;return}const l=performance.now();o.draw();const u=performance.now()-l;this.drawCalls++,this.drawCallDetails.push({pass:this.currentPassName,object:t.name,duration:u,vertices:o.count})}resetDrawCalls(){const t={count:this.drawCalls,details:this.drawCallDetails.slice()};return this.drawCalls=0,this.drawCallDetails.length=0,t}}class nt{constructor(t,e="Material"){this.shader=t,this.uniforms={},this.name=e}setUniforms(t){for(const e in t){let i=t[e];Array.isArray(i)||i instanceof Float32Array?i.length===2?this.setVec2(e,i[0],i[1]):i.length===3?this.setVec3(e,i[0],i[1],i[2]):i.length===4?this.setVec4(e,i[0],i[1],i[2],i[3]):i.length===16&&this.setMat4(e,i):typeof i=="number"?this.setFloat(e,i):i instanceof WebGLTexture&&(this.uniforms[e]={value:i,type:"Texture"})}return this}setFloat(t,e){this.uniforms[t]&&this.uniforms[t].type==="1f"?this.uniforms[t].value=e:this.uniforms[t]={type:"1f",value:e}}setVec2(t,e,i){if(this.uniforms[t]&&this.uniforms[t].type==="2fv"){const s=this.uniforms[t].value;s[0]=e,s[1]=i}else this.uniforms[t]={type:"2fv",value:new Float32Array([e,i])}}setVec3(t,e,i,s){if(this.uniforms[t]&&this.uniforms[t].type==="3fv"){const n=this.uniforms[t].value;n[0]=e,n[1]=i,n[2]=s}else this.uniforms[t]={type:"3fv",value:new Float32Array([e,i,s])}}setVec4(t,e,i,s,n){if(this.uniforms[t]&&this.uniforms[t].type==="4fv"){const r=this.uniforms[t].value;r[0]=e,r[1]=i,r[2]=s,r[3]=n}else this.uniforms[t]={type:"4fv",value:new Float32Array([e,i,s,n])}}setMat4(t,e){this.uniforms[t]={type:"Matrix4fv",value:e}}setUniform(t,e,i){this.uniforms[t]={type:i,value:e}}}function ii(a,t,e){var n;const i={RGBA:{8:{internalFormat:a.RGBA8,glFormat:a.RGBA,glType:a.UNSIGNED_BYTE},"16f":{internalFormat:a.RGBA16F,glFormat:a.RGBA,glType:a.HALF_FLOAT},"32f":{internalFormat:a.RGBA32F,glFormat:a.RGBA,glType:a.FLOAT}},RGB:{8:{internalFormat:a.RGB8,glFormat:a.RGB,glType:a.UNSIGNED_BYTE},"16f":{internalFormat:a.RGB16F,glFormat:a.RGB,glType:a.HALF_FLOAT},"32f":{internalFormat:a.RGB32F,glFormat:a.RGB,glType:a.FLOAT}},RG:{8:{internalFormat:a.RG8,glFormat:a.RG,glType:a.UNSIGNED_BYTE},"16f":{internalFormat:a.RG16F,glFormat:a.RG,glType:a.HALF_FLOAT},"32f":{internalFormat:a.RG32F,glFormat:a.RG,glType:a.FLOAT}},R:{8:{internalFormat:a.R8,glFormat:a.RED,glType:a.UNSIGNED_BYTE},"16f":{internalFormat:a.R16F,glFormat:a.RED,glType:a.HALF_FLOAT},"32f":{internalFormat:a.R32F,glFormat:a.RED,glType:a.FLOAT}}},s=(n=i[t])==null?void 0:n[e];return s||(console.warn(`RenderTarget: Unknown format/precision "${t} ${e}", falling back to RGBA8`),i.RGBA[8])}class Qt{constructor(t,e,i,s={}){this.gl=t,this.width=e,this.height=i,this.format=s.format??"RGBA",this.precision=s.precision??"8",this.hasDepth=s.depth??!0,this.framebuffer=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer),this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture);const{internalFormat:n,glFormat:r,glType:o}=ii(t,this.format,this.precision);this._internalFormat=n,this._glFormat=r,this._glType=o,t.texImage2D(t.TEXTURE_2D,0,n,e,i,0,r,o,null);const c=s.minFilter??t.LINEAR,h=s.magFilter??t.LINEAR,l=s.wrapS??t.CLAMP_TO_EDGE,d=s.wrapT??t.CLAMP_TO_EDGE;t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,d),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture,0),this.depthBuffer=null,this.hasDepth&&(this.depthBuffer=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,this.depthBuffer),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,e,i),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,this.depthBuffer));const u=t.checkFramebufferStatus(t.FRAMEBUFFER);u!==t.FRAMEBUFFER_COMPLETE&&console.error("RenderTarget: Framebuffer is not complete — status: "+u),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null)}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.viewport(0,0,this.width,this.height)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}resize(t,e){if(this.width===t&&this.height===e)return;this.width=t,this.height=e;const i=this.gl;i.bindTexture(i.TEXTURE_2D,this.texture),i.texImage2D(i.TEXTURE_2D,0,this._internalFormat,t,e,0,this._glFormat,this._glType,null),this.hasDepth&&this.depthBuffer&&(i.bindRenderbuffer(i.RENDERBUFFER,this.depthBuffer),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,t,e)),i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}invalidate(t=!0){const e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer);const i=[e.COLOR_ATTACHMENT0];t&&this.hasDepth&&i.push(e.DEPTH_ATTACHMENT),e.invalidateFramebuffer(e.FRAMEBUFFER,i),e.bindFramebuffer(e.FRAMEBUFFER,null)}destroy(){const t=this.gl;t.deleteFramebuffer(this.framebuffer),t.deleteTexture(this.texture),this.depthBuffer&&t.deleteRenderbuffer(this.depthBuffer),this.framebuffer=null,this.texture=null,this.depthBuffer=null}getMemorySize(){let t=0;const e=this.format==="RGBA"?4:this.format==="RGB"?3:this.format==="RG"?2:1,i=this.precision==="32f"?4:this.precision==="16f"?2:1;return t+=this.width*this.height*e*i,this.hasDepth&&(t+=this.width*this.height*2),t}}class si{constructor(){this.time=0,this.deltaTime=0,this.unscaledTime=0,this.unscaledDeltaTime=0,this.timeScale=1,this._lastTime=0,this._initialized=!1}update(t){const e=t*.001;this._initialized||(this._lastTime=e,this._initialized=!0),this.unscaledDeltaTime=e-this._lastTime,this.unscaledTime+=this.unscaledDeltaTime,this.deltaTime=this.unscaledDeltaTime*this.timeScale,this.time+=this.deltaTime,this._lastTime=e}}const Q=new si;class xt{static async load(t,e){const s=await(await fetch(e)).text(),n=this.parse(t,s);return new fe(t,n.positions,n.uvs,n.normals)}static parse(t,e){const i=[],s=[],n=[],r=[],o=[],c=[],h=e.split(`
`);for(let l of h){if(l=l.trim(),l.startsWith("#")||l==="")continue;const d=l.split(/\s+/),u=d[0];if(u==="v")i.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="vt")s.push([parseFloat(d[1]),parseFloat(d[2])]);else if(u==="vn")n.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="f"){const f=d.slice(1);for(let g=1;g<f.length-1;g++){const y=f[0],x=f[g],p=f[g+1];this.processVertex(y,i,s,n,r,o,c),this.processVertex(x,i,s,n,r,o,c),this.processVertex(p,i,s,n,r,o,c)}}}return{positions:new Float32Array(r),uvs:new Float32Array(o),normals:new Float32Array(c),vertexCount:r.length/3}}static processVertex(t,e,i,s,n,r,o){const c=t.split("/"),h=parseInt(c[0])-1,l=c[1]?parseInt(c[1])-1:-1,d=c[2]?parseInt(c[2])-1:-1,u=e[h];if(n.push(u[0],u[1],u[2]),l>=0){const f=i[l];r.push(f[0],f[1])}else r.push(0,0);if(d>=0){const f=s[d];o.push(f[0],f[1],f[2])}else o.push(0,1,0)}}class Ht{constructor(t,e){this.gl=t,this.texture=t.createTexture(),this.image=new Image,this.loaded=!1,t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),this.image.onload=()=>{t.bindTexture(t.TEXTURE_2D,this.texture),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,this.image),this.isPowerOf2(this.image.width)&&this.isPowerOf2(this.image.height)?t.generateMipmap(t.TEXTURE_2D):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR)),this.loaded=!0},this.image.src=e}isPowerOf2(t){return(t&t-1)===0}getMemorySize(){if(!this.loaded||!this.image)return 0;const t=this.image.width,e=this.image.height;let i=t*e*4;return this.isPowerOf2(t)&&this.isPowerOf2(e)&&(i=i*1.33),Math.round(i)}}class ni{constructor(t){this.gl=t,this.passes=[]}addPass(t){this.passes.push(t)}removePass(t){const e=this.passes.indexOf(t);return e>-1?(this.passes.splice(e,1),!0):!1}execute(t,e,i){for(const s of this.passes)s.enabled&&s.execute(t,e,i)}resize(t,e){for(const i of this.passes)i.resize(t,e)}}const ht=Object.freeze({WORLD:1,PLAYER:2,NPC:4,ALL:4294967295});class ri{constructor({cellSize:t=16,defaultLayer:e=1}={}){this.cellSize=Math.max(1,t),this.defaultLayer=e,this.cells=new Map,this.colliders=new Set,this.meshBoundsCache=new WeakMap,this.queryStamp=0}_key(t,e){return`${t},${e}`}_cellRange(t,e,i){const s=this.cellSize;return{minX:Math.floor((t-i)/s),maxX:Math.floor((t+i)/s),minZ:Math.floor((e-i)/s),maxZ:Math.floor((e+i)/s)}}_index(t){const e=this._cellRange(t.x,t.z,t.radius);t._range=e,t._cells=[];for(let i=e.minX;i<=e.maxX;i++)for(let s=e.minZ;s<=e.maxZ;s++){const n=this._key(i,s);let r=this.cells.get(n);r||this.cells.set(n,r=new Set),r.add(t),t._cells.push(n)}}_unindex(t){for(const e of t._cells||[]){const i=this.cells.get(e);i&&(i.delete(t),i.size===0&&this.cells.delete(e))}t._cells=[],t._range=null}addCircle({object:t=null,x:e=0,y:i=0,z:s=0,radius:n=.5,minY:r=-1/0,maxY:o=1/0,layer:c=this.defaultLayer,mask:h=4294967295,isStatic:l=!1}={}){const d={object:t,x:e,y:i,z:s,radius:Math.max(0,n),minY:r,maxY:o,layer:c,mask:h,isStatic:l,_cells:[],_range:null,_queryStamp:0};return this.colliders.add(d),this._index(d),d}addStaticObject(t,e={}){var d;if(!((d=t==null?void 0:t.mesh)!=null&&d.vertices)||!t.transform)return null;const i=this._getMeshBounds(t.mesh),s=t.transform.position,n=t.transform.scale,r=Math.max(Math.abs(n.x),Math.abs(n.z)),o=e.radius??i.radius*r*(e.radiusScale??1),c=Math.abs(n.y),l=Math.abs(t.transform.rotation.x)>.001||Math.abs(t.transform.rotation.z)>.001?i.radius3D*Math.max(r,c):i.maxAbsY*c;return this.addCircle({object:t,x:s.x,y:s.y,z:s.z,radius:o,minY:e.minY??s.y-l,maxY:e.maxY??s.y+l,layer:e.layer??this.defaultLayer,mask:e.mask??4294967295,isStatic:!0})}_getMeshBounds(t){let e=this.meshBoundsCache.get(t);if(e)return e;const i=t.vertices;let s=0,n=0,r=0;for(let o=0;o<i.length;o+=3){const c=i[o],h=i[o+1],l=i[o+2];s=Math.max(s,c*c+l*l),n=Math.max(n,c*c+h*h+l*l),r=Math.max(r,Math.abs(h))}return e={radius:Math.sqrt(s),radius3D:Math.sqrt(n),maxAbsY:r},this.meshBoundsCache.set(t,e),e}remove(t){return!t||!this.colliders.has(t)?!1:(this._unindex(t),this.colliders.delete(t),!0)}update(t,e,i=(t==null?void 0:t.y)??0,s=(t==null?void 0:t.z)??0){if(!t||!this.colliders.has(t)||t.isStatic)return!1;const n=this._cellRange(e,s,t.radius),r=t._range,o=r&&r.minX===n.minX&&r.maxX===n.maxX&&r.minZ===n.minZ&&r.maxZ===n.maxZ;return o||this._unindex(t),t.x=e,t.y=i,t.z=s,o||this._index(t),!0}queryNearby(t,e,i=0,{layerMask:s=4294967295,actorLayer:n=4294967295,exclude:r=null,out:o=[]}={}){o.length=0;const c=this._cellRange(t,e,i),h=++this.queryStamp;for(let l=c.minX;l<=c.maxX;l++)for(let d=c.minZ;d<=c.maxZ;d++){const u=this.cells.get(this._key(l,d));if(u)for(const f of u){if(f===r||f._queryStamp===h||!(f.layer&s)||!(f.mask&n)||(f._queryStamp=h,f.object&&!f.object.active))continue;const g=i+f.radius,y=f.x-t,x=f.z-e;y*y+x*x<=g*g&&o.push(f)}}return o}resolveCircle(t,e,i,{minY:s=-1/0,maxY:n=1/0,layerMask:r=4294967295,actorLayer:o=4294967295,exclude:c=null,iterations:h=3}={}){const l=[],d=[];let u=t,f=e;for(let g=0;g<h;g++){this.queryNearby(u,f,i,{layerMask:r,actorLayer:o,exclude:c,out:d});let y=!1;for(const x of d){if(x.maxY<s||x.minY>n)continue;let p=u-x.x,b=f-x.z;const _=i+x.radius,T=p*p+b*b;if(T>=_*_)continue;const A=Math.sqrt(T),M=A<1e-6?1:p/A,I=A<1e-6?0:b/A,m=_-A;u+=M*m,f+=I*m,y=!0,l.includes(x)||l.push(x)}if(!y)break}return{x:u,z:f,collided:l.length>0,contacts:l}}clear({staticOnly:t=!1}={}){for(const e of Array.from(this.colliders))(!t||e.isStatic)&&this.remove(e)}}class Jt{constructor(t,e,i,s="RenderPass"){this.gl=t,this.width=e,this.height=i,this.name=s,this.enabled=!0,this.autoResize=!0,this.drawCount=0,this.executionTime=0}resize(t,e){this.autoResize&&(this.width=t,this.height=e)}execute(t,e,i){console.warn("RenderPass.execute() not implemented")}}const ai=`attribute vec2 aVertexPosition;\r
void main() {\r
    gl_Position = vec4(aVertexPosition, 1.0, 1.0);\r
}`,oi=`precision mediump float;\r
uniform vec4 uClearColor;\r
void main() {\r
    gl_FragColor = uClearColor;\r
}\r
`;class Ue extends Jt{constructor(t,e,i,s=null,n=0,r="ObjectPass"){super(t,e,i,r),this.renderTarget=s,this.renderMode=n,this.clearColor=[0,0,0,1],this.clearDepth=!0,this.camera=null,this._clearShader=new ut(t,ai,oi);const o=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);this._clearVbo=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this._clearVbo),t.bufferData(t.ARRAY_BUFFER,o,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),this._attachmentsWithDepth=[t.COLOR_ATTACHMENT0,t.DEPTH_ATTACHMENT],this._attachmentsDepthOnly=[t.DEPTH_ATTACHMENT]}_drawClearQuad(){const t=this.gl;t.depthFunc(t.ALWAYS),t.depthMask(!0),t.disable(t.CULL_FACE),this._clearShader.use(),this._clearShader.setUniform("uClearColor",this.clearColor),t.bindBuffer(t.ARRAY_BUFFER,this._clearVbo);const e=this._clearShader.getAttribLocation("aVertexPosition");e!==-1&&(t.enableVertexAttribArray(e),t.vertexAttribPointer(e,2,t.FLOAT,!1,0,0)),t.drawArrays(t.TRIANGLES,0,6),t.bindBuffer(t.ARRAY_BUFFER,null),t.depthFunc(t.LEQUAL),t.enable(t.CULL_FACE)}resize(t,e){this.autoResize&&(super.resize(t,e),this.renderTarget&&this.renderTarget.resize(t,e))}execute(t,e,i){const s=this.camera||i;this.camera&&s.updateView();const n=performance.now();if(t.resetDrawCalls(),this.renderTarget){const c=this.gl;c.bindFramebuffer(c.FRAMEBUFFER,this.renderTarget.framebuffer);const h=this.clearDepth?this._attachmentsWithDepth:[c.COLOR_ATTACHMENT0];c.invalidateFramebuffer(c.FRAMEBUFFER,h),c.viewport(0,0,this.renderTarget.width,this.renderTarget.height)}else this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height);this.clearColor!=null&&this._drawClearQuad();const r=c=>{if(c.active&&(c.material&&(c.material.setUniform("uRenderMode",this.renderMode,"1i"),c.material.setUniform("uCameraPos",[s.transform.globalPosition.x,s.transform.globalPosition.y,s.transform.globalPosition.z])),c.render(s,this.renderTarget),c.transform&&c.transform.children))for(const h of c.transform.children)h.gameObject&&r(h.gameObject)};if(e&&Array.isArray(e))for(const c of e)r(c);else e&&e.render&&e.render(s,this.renderTarget);this.renderTarget&&(this.clearDepth&&this.gl.invalidateFramebuffer(this.gl.FRAMEBUFFER,this._attachmentsDepthOnly),this.renderTarget.unbind());const o=t.resetDrawCalls();this.drawCount=o.count,this.drawDetails=o.details,this.executionTime=performance.now()-n}}class Ve{constructor(t){this.gl=t;const e=new Float32Array([-1,1,0,1,-1,-1,0,0,1,1,1,1,1,-1,1,0]);this.buffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW)}draw(t,e={},i=null){const s=this.gl;let n,r=e;if(t.uniforms&&t.shader){n=t.shader,r={};for(const l in t.uniforms)r[l]=t.uniforms[l].value;e&&(e.bind||e===null)&&(i=e)}else n=t;i?i.bind():(s.bindFramebuffer(s.FRAMEBUFFER,null),s.viewport(0,0,s.canvas.width,s.canvas.height)),n.use(),s.bindBuffer(s.ARRAY_BUFFER,this.buffer);const o=n.getAttribLocation("aVertexPosition");o!==-1&&(s.enableVertexAttribArray(o),s.vertexAttribPointer(o,2,s.FLOAT,!1,16,0));const c=n.getAttribLocation("aTexCoord");c!==-1&&(s.enableVertexAttribArray(c),s.vertexAttribPointer(c,2,s.FLOAT,!1,16,8));let h=0;for(const l in r){const d=r[l];d instanceof WebGLTexture?(s.activeTexture(s.TEXTURE0+h),s.bindTexture(s.TEXTURE_2D,d),n.setUniform(l,h,"1i"),h++):n.setUniform(l,d)}s.drawArrays(s.TRIANGLE_STRIP,0,4);for(let l=0;l<h;l++)s.activeTexture(s.TEXTURE0+l),s.bindTexture(s.TEXTURE_2D,null)}}class li extends Jt{constructor(t,e,i,s){super(t,e,i,"ViewportComposition"),this.material=s,this.fullScreenQuad=new Ve(t),this.buffers={},this.viewports=[],this.overlay=null}setBuffer(t,e){this.buffers[t]=e}setOverlay(t){this.overlay=t}setViewports(t){this.viewports=t}execute(t,e,i){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(.1,.1,.1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);for(const s of this.viewports){const n=Math.floor(s.x*this.width),r=Math.floor(s.y*this.height),o=Math.floor(s.w*this.width),c=Math.floor(s.h*this.height);this.gl.viewport(n,r,o,c);let h=this.buffers.Final;const l=s.pass;this.buffers[l]&&(h=this.buffers[l]),this.material.setUniform("uTexture",h),this.fullScreenQuad.draw(this.material)}}}class me extends Jt{constructor(t,e,i,s,n=null,r="ScreenPass"){super(t,e,i,r),this.material=s,this.renderTarget=n,this.fullScreenQuad=new Ve(t),this.inputs={},this.clearColor=null,this._resolutionBuffer=new Float32Array([e,i])}setTexture(t,e){this.inputs[t]=e}resize(t,e){super.resize(t,e),this._resolutionBuffer[0]=t,this._resolutionBuffer[1]=e,this.renderTarget&&this.renderTarget.resize(t,e)}execute(t,e,i){const s=performance.now();t.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor&&(this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT));for(const[r,o]of Object.entries(this.inputs))this.material.setUniform(r,o);this.material.setUniform("uResolution",this._resolutionBuffer),this.fullScreenQuad.draw(this.material,this.renderTarget),this.renderTarget&&this.renderTarget.unbind();const n=t.resetDrawCalls();this.drawCount=n.count,this.drawDetails=n.details,this.executionTime=performance.now()-s}}class hi extends me{constructor(t,e,i,s,n=null,r="Lighting Pass"){super(t,e,i,s,n,r),this.lightCamera=null,this._lightSpace=new Float32Array(16),this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setInputBuffers(t,e){this.setTexture("uSceneTexture",t),this.setTexture("uNormalTexture",e)}execute(t,e,i){this.lightCamera&&this.setMatricesFromCameras(i,this.lightCamera),super.execute(t,e,i)}setMatricesFromCameras(t,e){K.multiply(this._lightSpace,e.projectionMatrix,e.viewMatrix),K.multiply(this._camViewProj,t.projectionMatrix,t.viewMatrix),K.invert(this._invCamViewProj,this._camViewProj);const i=t.transform.position;this.material.setUniforms({uLightSpaceMatrix:this._lightSpace,uInverseViewProjection:this._invCamViewProj,uCameraPos:[i.x,i.y,i.z]})}}class ci extends me{constructor(t,e,i,s,n=null,r="Skybox Pass"){super(t,e,i,s,n,r),this.clearColor=null,this.clearDepth=!1,this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setCamera(t){K.multiply(this._camViewProj,t.projectionMatrix,t.viewMatrix),K.invert(this._invCamViewProj,this._camViewProj),this.material.setUniforms({uInverseViewProjection:this._invCamViewProj,uCameraPos:[t.transform.position.x,t.transform.position.y,t.transform.position.z]})}setLight(t,e,i,s,n){this.material.setUniforms({uLightDir:t,uSunColor:e,uTopColor:i,uMidColor:s,uBottomColor:n})}setInputTexture(t){this.setTexture("uDepthTexture",t)}execute(t,e,i){this.setCamera(i),super.execute(t,e,i)}}class di extends me{constructor(t,e,i,s,n,r="PixelArt Pass"){super(t,e,i,s,n,r),this._resolutionBuffer=new Float32Array([e,i])}setInputBuffers(t,e){this.setTexture("uSceneTexture",t),this.setTexture("uGbufferTexture",e)}resize(t,e){super.resize(t,e),this._resolutionBuffer[0]=t,this._resolutionBuffer[1]=e,this.material.setUniform("uResolution",this._resolutionBuffer)}}const ui=`// Wireframe Vertex Shader (WebGL 1.0 / GLSL ES 1.0)\r
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
`,fi=`precision highp float;\r
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
}`;class mi extends Jt{constructor(t,e,i,s=null,n="Wireframe Pass"){super(t,e,i,n),this.target=s,this.enabled=!1;const r=new ut(t,ui,fi);this.material=new nt(r,"Wireframe"),this.material.setUniforms({uWireColor:[0,1,0],uWireWidth:1,uWireOpacity:1,uShowBackfaces:!1}),this._gl=t,this._polygonMode=null}setWireColor(t,e,i){this.material.setVec3("uWireColor",t,e,i)}setOpacity(t){this.material.setFloat("uWireOpacity",Math.max(0,Math.min(1,t)))}setShowBackfaces(t){this.material.setUniform("uShowBackfaces",t?1:0,"1i")}execute(t,e,i){if(!this.enabled)return;this.target?this.target.bind():(this._gl.bindFramebuffer(this._gl.FRAMEBUFFER,null),this._gl.viewport(0,0,this.width,this.height)),this._gl.clearColor(.1,.1,.15,1),this._gl.clear(this._gl.COLOR_BUFFER_BIT|this._gl.DEPTH_BUFFER_BIT),this._gl.depthMask(!0),this._gl.enable(this._gl.DEPTH_TEST);const s=this.material.shader;s.use(),s.setUniform("uProjectionMatrix",i.projectionMatrix),s.setUniform("uViewMatrix",i.viewMatrix);const n=r=>{if(r.active){if(r.transform.updateWorldMatrix(),r.mesh){s.setUniform("uModelMatrix",r.transform.worldMatrix);for(const c in this.material.uniforms){const h=this.material.uniforms[c];s.setUniform(c,h.value,h.type)}const o=r.mesh;o.bind(s),o.indices&&o.indices.length>0?this._gl.drawElements(this._gl.LINE_STRIP,o.count,this._gl.UNSIGNED_SHORT,0):this._gl.drawArrays(this._gl.LINE_STRIP,0,o.count)}if(r.transform&&r.transform.children)for(const o of r.transform.children)o.gameObject&&n(o.gameObject)}};for(const r of e)n(r)}resize(t,e){this.width=t,this.height=e,this.target&&this.target.resize(t,e)}toggle(){this.enabled=!this.enabled,console.log(this.name+(this.enabled?" enabled":" disabled"))}}class pi{constructor(t=null){this.gameContext=t,this.enabled=!1,this.devToolsEnabled=!1,this.metrics={startTime:0,endTime:0,frameTime:0,cpuTime:0,passes:[],memory:{vertices:0,renderTargets:0,textures:0,total:0}},this.lastFrameStart=0,this.fps=0,this.fpsHistory=[],this.frameTimeHistory=[],this.history=[],this.maxHistory=300,this.currentPass=null}enable(){this.enabled=!0}disable(){this.enabled=!1,this.metrics.passes=[]}beginFrame(){if(!this.enabled)return;const t=performance.now();if(this.lastFrameStart>0){const e=t-this.lastFrameStart;this.fps=1e3/e,this.fpsHistory.push(this.fps),this.fpsHistory.length>300&&this.fpsHistory.shift(),this.frameTimeHistory.push(e),this.frameTimeHistory.length>300&&this.frameTimeHistory.shift()}this.lastFrameStart=t,this.metrics.startTime=t,this.metrics.passes.length=0}endFrame(){this.enabled&&(this.metrics.endTime=performance.now(),this.metrics.cpuTime=this.metrics.endTime-this.metrics.startTime,this.addToHistory(this.metrics.cpuTime))}beginPass(t){if(!this.enabled)return;const e={id:this.metrics.passes.length,name:t,startTime:performance.now(),endTime:0,duration:0,drawCalls:[]};this.metrics.passes.push(e),this.currentPass=e}endPass(){!this.enabled||!this.currentPass||(this.currentPass.endTime=performance.now(),this.currentPass.duration=this.currentPass.endTime-this.currentPass.startTime,this.addPassToHistory(this.currentPass.name,this.currentPass.duration),this.currentPass=null)}addPassToHistory(t,e){this.passHistory||(this.passHistory={}),this.passHistory[t]||(this.passHistory[t]=[]),this.passHistory[t].push(e),this.passHistory[t].length>300&&this.passHistory[t].shift()}recordDrawCall(t,e,i,s,n,r=0){!this.enabled||!this.currentPass||this.currentPass.drawCalls.push({object:t,material:e,shader:i,duration:n-s,vertices:r})}addToHistory(t){this.history.push(t),this.history.length>this.maxHistory&&this.history.shift()}updateMemoryMetrics(){let t=0,e=0,i=0;if(this.metrics&&this.metrics.passes&&this.metrics.passes.forEach(n=>{n.drawCalls.forEach(r=>{t+=(r.vertices||0)*32})}),this.gameContext&&this.gameContext.renderQueue&&this.gameContext.renderQueue.passes&&this.gameContext.renderQueue.passes.forEach(n=>{if(n.renderTarget&&n.renderTarget.getMemorySize){const r=n.renderTarget.getMemorySize();e+=r}}),this.gameContext){if(this.gameContext.textures)for(const n in this.gameContext.textures){const r=this.gameContext.textures[n];if(r&&r.getMemorySize){const o=r.getMemorySize();o>0&&(i+=o)}}if(this.gameContext.textureCache)for(const n in this.gameContext.textureCache){const r=this.gameContext.textureCache[n];if(r&&r.getMemorySize){const o=r.getMemorySize();o>0&&(i+=o)}}if(this.gameContext.assets&&this.gameContext.assets.textures)for(const n in this.gameContext.assets.textures){const r=this.gameContext.assets.textures[n];if(r&&r.getMemorySize){const o=r.getMemorySize();o>0&&(i+=o)}}}const s=t+e+i;return this.metrics.memory={vertices:t,renderTargets:e,textures:i,total:s},this.metrics.memory}}class gi{static attach(t,e,i=null){const s=new pi(i),n=t.execute.bind(t);t.execute=function(o,c,h){s.enabled&&s.beginFrame();const l=t.passes||[];for(let d=0;d<l.length;d++){const u=l[d];if(!u.__profilerInstrumented){const f=u.execute.bind(u);u.execute=function(g,y,x){const p=u.name||"Unnamed Pass";s.enabled&&(s.beginPass(p),g.currentPassName=p,s.devToolsEnabled&&performance.mark(`PassStart-${p}`)),f(g,y,x),s.enabled&&(s.endPass(),g.currentPassName=null,s.devToolsEnabled&&(performance.mark(`PassEnd-${p}`),performance.measure(`Pass: ${p}`,`PassStart-${p}`,`PassEnd-${p}`),performance.clearMarks(`PassStart-${p}`),performance.clearMarks(`PassEnd-${p}`)))},u.__profilerInstrumented=!0}}n(o,c,h),s.enabled&&(s.endFrame(),s.updateMemoryMetrics())};const r=e.draw.bind(e);return e.draw=function(o,c,h,l){if(!s.enabled){r(o,c,h,l);return}const d=o?o.name:"Unknown",u=l?l.name:"Unknown";s.devToolsEnabled&&performance.mark(`DrawStart-${d}`);const f=performance.now();r(o,c,h,l);const g=performance.now();s.devToolsEnabled&&(performance.mark(`DrawEnd-${d}`),performance.measure(`Draw: ${d} [${u}]`,`DrawStart-${d}`,`DrawEnd-${d}`),performance.clearMarks(`DrawStart-${d}`),performance.clearMarks(`DrawEnd-${d}`));const y=o&&o.mesh?o.mesh.count:6;s.recordDrawCall(d,u,0,f,g,y)},s.disable(),s}}class vi{constructor(){this.container=document.createElement("div"),this.container.id="editor-ui-root",Object.assign(this.container.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"9999",fontFamily:"sans-serif"}),document.body.appendChild(this.container),this.initNavBar()}initNavBar(){this.navBar=document.createElement("div"),this.navBar.id="editor-navbar",Object.assign(this.navBar.style,{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"5px",background:"rgba(26, 26, 26, 0.9)",padding:"5px 10px",borderRadius:"20px",border:"1px solid #333",pointerEvents:"auto",boxShadow:"0 4px 10px rgba(0,0,0,0.5)",zIndex:"10001"}),this.container.appendChild(this.navBar),this.addDragLogic(this.navBar,this.navBar)}addNavItem(t,e){const i=document.createElement("button");i.innerText=t,Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 12px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",transition:"background 0.2s",outline:"none"}),i.onclick=()=>{const s=e.style.display==="none";e.style.display=s?"flex":"none",i.style.background=s?"#444":"#252525"},i.onmouseover=()=>{e.style.display==="none"&&(i.style.background="#333")},i.onmouseout=()=>{e.style.display==="none"&&(i.style.background="#252525")},i.style.background=e.style.display==="none"?"#252525":"#444",this.navBar.appendChild(i)}addNavSelect(t,e){const i=document.createElement("select");Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 8px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",outline:"none",marginLeft:"10px"}),t.forEach(s=>{const n=document.createElement("option");n.value=s,n.text=s,i.appendChild(n)}),i.onchange=s=>e(s.target.value),this.navBar.appendChild(i)}toggleVisibility(){const t=this.container.style.display==="none";this.container.style.display=t?"block":"none"}createWindow(t,e,i,s,n){const r=document.createElement("div");Object.assign(r.style,{position:"absolute",left:`${e}px`,top:`${i}px`,width:`${s}px`,height:`${n}px`,backgroundColor:"#1a1a1a",border:"1px solid #333",display:"flex",flexDirection:"column",pointerEvents:"auto",overflow:"hidden",boxShadow:"0 4px 15px rgba(0,0,0,0.5)"});const o=document.createElement("div");o.innerText=t,Object.assign(o.style,{padding:"6px 10px",background:"#252525",color:"#ccc",fontSize:"11px",fontWeight:"bold",cursor:"move",userSelect:"none",borderBottom:"1px solid #333",textTransform:"uppercase",display:"flex",justifyContent:"space-between",alignItems:"center"});const c=document.createElement("span");c.innerHTML="×",Object.assign(c.style,{cursor:"pointer",fontSize:"16px",lineHeight:"1",padding:"0 4px",color:"#888"}),c.onclick=()=>{r.style.display="none"},c.onmouseover=()=>{c.style.color="#fff"},c.onmouseout=()=>{c.style.color="#888"},o.appendChild(c);const h=document.createElement("div");h.classList.add("window-content"),Object.assign(h.style,{flex:"1",overflow:"auto",background:"#111",position:"relative",width:"100%",height:"100%"});const l=document.createElement("div");return Object.assign(l.style,{width:"10px",height:"10px",background:"#444",position:"absolute",right:"0",bottom:"0",cursor:"nwse-resize",zIndex:"10"}),r.appendChild(o),r.appendChild(h),r.appendChild(l),this.container.appendChild(r),this.addDragLogic(r,o),this.addResizeLogic(r,l),{content:h,window:r}}addResizeLogic(t,e){let i=!1,s,n,r,o;e.addEventListener("mousedown",l=>{l.preventDefault(),l.stopPropagation(),i=!0,r=l.clientX,o=l.clientY,s=t.offsetWidth,n=t.offsetHeight,document.addEventListener("mousemove",c),document.addEventListener("mouseup",h)});const c=l=>{if(!i)return;const d=s+(l.clientX-r),u=n+(l.clientY-o);d>100&&(t.style.width=d+"px"),u>100&&(t.style.height=u+"px")},h=()=>{i=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",h)}}addDragLogic(t,e){let i=!1,s,n,r,o;e.addEventListener("mousedown",l=>{l.target.tagName!=="BUTTON"&&(i=!0,s=l.clientX,n=l.clientY,r=t.offsetLeft,o=t.offsetTop,document.addEventListener("mousemove",c),document.addEventListener("mouseup",h),t.style.zIndex="10000",t===this.navBar&&(t.style.zIndex="10001"),t!==this.navBar&&(this.container.querySelectorAll(".window").forEach(d=>d.style.zIndex="9999"),t.style.zIndex="10000"))});const c=l=>{if(!i)return;let d=r+(l.clientX-s),u=o+(l.clientY-n);const f=20;d<f&&(d=0),u<f&&(u=0),Math.abs(window.innerWidth-(d+t.offsetWidth))<f&&(d=window.innerWidth-t.offsetWidth),Math.abs(window.innerHeight-(u+t.offsetHeight))<f&&(u=window.innerHeight-t.offsetHeight),t.style.left=d+"px",t.style.top=u+"px"},h=()=>{i=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",h)}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class dt{constructor(t,e,i,s,n="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(n),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),dt.nextNameID=dt.nextNameID||0,this.$name.id=`lil-gui-name-${++dt.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class yi extends dt{constructor(t,e,i){super(t,e,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ue(a){let t,e;return(t=a.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const xi={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:ue,toHexString:ue},Wt={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},wi={isPrimitive:!1,match:a=>Array.isArray(a)||ArrayBuffer.isView(a),fromHexString(a,t,e=1){const i=Wt.fromHexString(a);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([a,t,e],i=1){i=255/i;const s=a*i<<16^t*i<<8^e*i<<0;return Wt.toHexString(s)}},bi={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,t,e=1){const i=Wt.fromHexString(a);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:a,g:t,b:e},i=1){i=255/i;const s=a*i<<16^t*i<<8^e*i<<0;return Wt.toHexString(s)}},_i=[xi,Wt,wi,bi];function Ci(a){return _i.find(t=>t.match(a))}class Mi extends dt{constructor(t,e,i,s){super(t,e,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ci(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const n=ue(this.$text.value);n&&this._setValueFromHexString(n)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class he extends dt{constructor(t,e,i){super(t,e,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ei extends dt{constructor(t,e,i,s,n,r){super(t,e,i,"lil-number"),this._initInput(),this.min(s),this.max(n);const o=r!==void 0;this.step(o?r:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let b=parseFloat(this.$input.value);isNaN(b)||(this._stepExplicit&&(b=this._snap(b)),this.setValue(this._clamp(b)))},i=b=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+b),this.$input.value=this.getValue())},s=b=>{b.key==="Enter"&&this.$input.blur(),b.code==="ArrowUp"&&(b.preventDefault(),i(this._step*this._arrowKeyMultiplier(b))),b.code==="ArrowDown"&&(b.preventDefault(),i(this._step*this._arrowKeyMultiplier(b)*-1))},n=b=>{this._inputFocused&&(b.preventDefault(),i(this._step*this._normalizeMouseWheel(b)))};let r=!1,o,c,h,l,d;const u=5,f=b=>{o=b.clientX,c=h=b.clientY,r=!0,l=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",y)},g=b=>{if(r){const _=b.clientX-o,T=b.clientY-c;Math.abs(T)>u?(b.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>u&&y()}if(!r){const _=b.clientY-h;d-=_*this._step*this._arrowKeyMultiplier(b),l+d>this._max?d=this._max-l:l+d<this._min&&(d=this._min-l),this._snapClampSetValue(l+d)}h=b.clientY},y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",y)},x=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",n,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(p,b,_,T,A)=>(p-b)/(_-b)*(A-T)+T,e=p=>{const b=this.$slider.getBoundingClientRect();let _=t(p,b.left,b.right,this._min,this._max);this._snapClampSetValue(_)},i=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",n)},s=p=>{e(p.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",n)};let r=!1,o,c;const h=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),r=!1},l=p=>{p.touches.length>1||(this._hasScrollBar?(o=p.touches[0].clientX,c=p.touches[0].clientY,r=!0):h(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=p=>{if(r){const b=p.touches[0].clientX-o,_=p.touches[0].clientY-c;Math.abs(b)>Math.abs(_)?h(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else p.preventDefault(),e(p.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),g=400;let y;const x=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const _=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(y),y=setTimeout(f,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",l,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ti extends dt{constructor(t,e,i,s){super(t,e,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Si extends dt{constructor(t,e,i){super(t,e,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Ri=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function Ai(a){const t=document.createElement("style");t.innerHTML=a;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Re=!1;class _t{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:s,title:n="Controls",closeFolders:r=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),c&&this.domElement.classList.add("lil-allow-touch-styles"),!Re&&o&&(Ai(Ri),Re=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=r}add(t,e,i,s,n){if(Object(i)===i)return new Ti(this,t,e,i);const r=t[e];switch(typeof r){case"number":return new Ei(this,t,e,i,s,n);case"boolean":return new yi(this,t,e);case"string":return new Si(this,t,e);case"function":return new he(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,r)}addColor(t,e,i=1){return new Mi(this,t,e,i)}addFolder(t){const e=new _t({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof he||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof he)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const i=n=>{n.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class Fi{constructor(t,e){this.editor=t,this.gui=new _t({container:e,title:"Hierarchy",touchEventTarget:e,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init(),setInterval(()=>this.refresh(),1e3)}refresh(){const t=this.editor.game.scene||[];this.lastCount!==t.length&&(this.lastCount=t.length,this.init())}init(){[...this.gui.children].forEach(r=>r.destroy());const e=this.editor.game.camera;e&&this.gui.add({select:()=>this.editor.selectObject(e)},"select").name("Main Camera");const i=this.editor.game.lightCamera;i&&this.gui.add({select:()=>this.editor.selectObject(i)},"select").name("Light Camera");const s=(r,o=null)=>{if(!r)return;const c=o||this.gui,h=r.name||"Object";if(c.add({select:()=>this.editor.selectObject(r)},"select").name(h),r.transform&&r.transform.children&&r.transform.children.length>0){const l=c.addFolder(`${h} Children`);for(const d of r.transform.children)d.gameObject&&s(d.gameObject,l)}};(this.editor.game.scene||[]).forEach((r,o)=>{r&&s(r)})}}class Pi{constructor(t,e){this.editor=t,this.container=e,this.gui=new _t({container:e,title:"Inspector",touchEventTarget:e,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedObject=null,this.refresh()}inspect(t){this.selectedObject=t,this.refresh()}refresh(){if([...this.gui.children].forEach(n=>n.destroy()),!this.selectedObject){this.gui.add({status:"No selection"},"status").name("Object").disable();return}const e=this.selectedObject,i=e.name||"GameObject",s=this.gui.addFolder("Object Settings");if(s.add(e,"name").name("Name").listen(),typeof e.active<"u"&&s.add(e,"active").name("Active").listen(),e.transform){const n=e.transform,r=this.gui.addFolder(`Transform: ${i}`),o=r.addFolder("Position");o.add(n.position,"x").step(.01).listen().name("X"),o.add(n.position,"y").step(.01).listen().name("Y"),o.add(n.position,"z").step(.01).listen().name("Z");const c=r.addFolder("Rotation");c.add(n.rotation,"x").step(.01).listen().name("X"),c.add(n.rotation,"y").step(.01).listen().name("Y"),c.add(n.rotation,"z").step(.01).listen().name("Z");const h=r.addFolder("Scale");h.add(n.scale,"x").step(.01).listen().name("X"),h.add(n.scale,"y").step(.01).listen().name("Y"),h.add(n.scale,"z").step(.01).listen().name("Z")}if(e instanceof $e){const n=this.gui.addFolder("Camera Settings");n.add(e,"orthographic").name("Orthographic").onChange(()=>e.updateProjection());const r=n.addFolder("Perspective");r.add(e,"fov",.1,3.14).step(.01).name("FOV").onChange(()=>e.updateProjection()),n.addFolder("Orthographic").add(e,"orthoSize",.1,1e3).step(.01).name("Size (Half Height)").onChange(()=>e.updateProjection()),n.add(e,"near",.01,10).step(.01).name("Near Plane").onChange(()=>e.updateProjection()),n.add(e,"far",10.1,1e3).step(1).name("Far Plane").onChange(()=>e.updateProjection()),r.open()}if(e.material){const n=this.gui.addFolder("Material");n.add(e.material,"name").name("Material Name").disable().listen(),n.add({select:()=>{this.editor.windows.material&&(this.editor.windows.material.inspect(e.material),this.editor.windows.material.container.parentElement.style.display="flex")}},"select").name("Open in Material Editor")}if(e.transform&&e.transform.children&&e.transform.children.length>0){const n=this.gui.addFolder("Children");e.transform.children.forEach((r,o)=>{if(r.gameObject){const c=r.gameObject,h=c.name||`Child ${o}`;n.add({select:()=>this.editor.selectObject(c)},"select").name(h)}}),n.open()}}}class ki{constructor(t,e){this.editor=t,this.container=e,this.gui=new _t({container:e,title:"Material Editor",touchEventTarget:e,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedMaterial=null,this.init()}init(){this.refreshList()}refreshList(){[...this.gui.children].forEach(s=>s.destroy()),this.propertyFolder=null;const e=this.editor.game.materials||{},i=this.gui.addFolder("Project Materials");for(const s in e){const n=e[s];i.add({select:()=>this.inspect(n)},"select").name(s)}this.selectedMaterial?this.drawMaterialProperties(this.selectedMaterial):this.gui.add({info:"Select a material"},"info").name("Status").disable()}inspect(t){this.selectedMaterial=t,this.refreshList()}drawMaterialProperties(t){let e;if(this.propertyFolder?(e=this.propertyFolder,[...e.children].forEach(s=>s.destroy()),e.title(`Properties: ${t.name||"Unnamed"}`)):(e=this.gui.addFolder(`Properties: ${t.name||"Unnamed"}`),this.propertyFolder=e),!!t.uniforms)for(const i in t.uniforms){const s=t.uniforms[i],n=s.value;if(s.type,Array.isArray(n)||n instanceof Float32Array)if(i.toLowerCase().includes("color")&&(n.length===3||n.length===4))e.addColor(s,"value").name(i).listen();else{const o=e.addFolder(i),c=["x","y","z","w"];for(let h=0;h<n.length;h++){const l={get val(){return n[h]},set val(d){n[h]=d}};o.add(l,"val").step(.01).name(c[h]||`[${h}]`).listen()}}else if(typeof n=="number"){const r={get val(){return s.value},set val(c){s.value=c}};let o=e.add(r,"val").name(i);i.toLowerCase().includes("threshold")||i.toLowerCase().includes("factor")?o=o.min(0).max(1).step(.01):o=o.step(.01),o.listen()}else n instanceof WebGLTexture&&e.add({info:"Texture"},"info").name(i).disable()}}}class Di{constructor(t,e){this.editor=t,this.container=e,this.gui=new _t({container:e,title:"Render Passes",touchEventTarget:e,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init()}init(){this.refresh(),setInterval(()=>this.updateStats(),1e3)}refresh(){[...this.gui.children].forEach(i=>i.destroy());const e=this.editor.game.renderQueue;!e||!e.passes||e.passes.forEach((i,s)=>{const n=this.gui.addFolder(`${s}: ${i.name||"Pass"}`);if(n.add(i,"enabled").name("Active"),n.add(i,"drawCount").name("Draw Calls").disable().listen(),n.add(i,"executionTime").name("Time (ms)").disable().listen(),i.clearColor){const c={get color(){return[i.clearColor[0],i.clearColor[1],i.clearColor[2]]},set color(h){i.clearColor[0]=h[0],i.clearColor[1]=h[1],i.clearColor[2]=h[2]}};n.addColor(c,"color").name("Clear Color")}i.renderTarget?n.add({info:`${i.renderTarget.width}x${i.renderTarget.height}`},"info").name("Resolution").disable():n.add({info:"Screen"},"info").name("Target").disable(),i.material&&n.add({select:()=>{this.editor.windows.material&&this.editor.windows.material.inspect(i.material)}},"select").name("Inspect Material");const r={show:!1},o=n.addFolder("Performance Details");o.add(r,"show").name("List Draw Calls").onChange(c=>{c?this.showDetails(o,i):this.clearDetails(o)})})}showDetails(t,e){if(this.clearDetails(t),!e.drawDetails||e.drawDetails.length===0){t.add({info:"No draw calls"},"info").name("Status").disable();return}e.drawDetails.forEach((i,s)=>{const n=t.addFolder(`Draw ${s}: ${i.object}`);n.add(i,"material").name("Material").disable(),n.add(i,"shader").name("Shader").disable(),n.add(i,"target").name("Target").disable()})}clearDetails(t){[...t.children].forEach(i=>{i.property!=="show"&&i.destroy()})}updateStats(){}}class Bi{constructor(t,e){this.editor=t,this.container=e,this.gui=new _t({container:e,title:"Engine Profiler",touchEventTarget:e,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.stats={enabled:!1,devToolsTrace:!1,fps:0,avgFps:0,fps1Low:0,fps1High:0,ms:0,gpuTotal:0,totalDrawCalls:0,totalPasses:0,totalVertices:0,approxMemory:"0 MB",memoryVertices:"0 MB",memoryRenderTargets:"0 MB",memoryTextures:"0 MB",pieMode:"Average",avgFrames:60},this.graphCanvas=document.createElement("canvas"),this.graphCanvas.style.width="100%",this.graphCanvas.style.height="150px",this.graphCanvas.style.background="#222",this.graphCanvas.style.marginTop="5px",this.container.appendChild(this.graphCanvas),this.frameTimeCanvas=document.createElement("canvas"),this.frameTimeCanvas.style.width="100%",this.frameTimeCanvas.style.height="100px",this.frameTimeCanvas.style.background="#222",this.frameTimeCanvas.style.marginTop="5px",this.container.appendChild(this.frameTimeCanvas),this.init()}init(){const t=this.editor.game;this.gui.add(this.stats,"enabled").name("Enable Profiling").onChange(e=>{t&&t.profiler&&(e?t.profiler.enable():t.profiler.disable())}),this.gui.add(this.stats,"devToolsTrace").name("DevTools Trace").onChange(e=>{t&&t.profiler&&(t.profiler.devToolsEnabled=e)}),this.gui.add(this.stats,"fps").name("FPS").disable().listen(),this.gui.add(this.stats,"avgFps").name("Avg FPS").disable().listen(),this.gui.add(this.stats,"fps1Low").name("1% Low FPS").disable().listen(),this.gui.add(this.stats,"fps1High").name("1% High FPS").disable().listen(),this.gui.add(this.stats,"ms").name("Frame Time (ms)").disable().listen(),this.gui.add(this.stats,"gpuTotal").name("GPU Time (est ms)").disable().listen(),this.gui.add(this.stats,"totalDrawCalls").name("Total Draw Calls").disable().listen(),this.gui.add(this.stats,"totalPasses").name("Total Passes").disable().listen(),this.gui.add(this.stats,"totalVertices").name("Total Vertices").disable().listen(),this.gui.add(this.stats,"approxMemory").name("Total Memory").disable().listen(),this.gui.add(this.stats,"memoryVertices").name("  ├─ Vertices").disable().listen(),this.gui.add(this.stats,"memoryRenderTargets").name("  ├─ RenderTargets").disable().listen(),this.gui.add(this.stats,"memoryTextures").name("  └─ Textures").disable().listen(),this.gui.add(this.stats,"pieMode",["Current Frame","Average"]).name("Graph Mode"),this.gui.add(this.stats,"avgFrames",10,300).step(10).name("Avg Sample Count"),this.passesFolder=this.gui.addFolder("Pass Performance"),this.showPassDetails=!1,this.passesFolder.add(this,"showPassDetails").name("Show Details").onChange(()=>this.rebuildPassFolders()),setInterval(()=>{this.update(),this.drawGraph(),this.drawFrameTimeGraph()},100)}drawFrameTimeGraph(){const t=this.frameTimeCanvas.getContext("2d"),e=this.editor.game.profiler;if(!e||!e.enabled||!e.frameTimeHistory)return;this.frameTimeCanvas.width=this.frameTimeCanvas.clientWidth,this.frameTimeCanvas.height=this.frameTimeCanvas.clientHeight;const i=this.frameTimeCanvas.width,s=this.frameTimeCanvas.height;t.clearRect(0,0,i,s);const n=Math.min(e.frameTimeHistory.length,this.stats.avgFrames);if(n<2)return;const r=[];for(let l=e.frameTimeHistory.length-n;l<e.frameTimeHistory.length;l++)r.push(e.frameTimeHistory[l]);let o=0,c=100;const h=c-o;t.beginPath(),t.strokeStyle="#4363d8",t.lineWidth=1.5;for(let l=0;l<r.length;l++){const d=l/(r.length-1)*i,u=s-(r[l]-o)/h*s*.8-s*.1;l===0?t.moveTo(d,u):t.lineTo(d,u)}t.stroke(),t.fillStyle="#fff",t.font="10px monospace",t.textAlign="left",t.textBaseline="top",t.fillText(`Max: ${c.toFixed(1)}ms`,5,5),t.textBaseline="bottom",t.fillText(`Min: ${o.toFixed(1)}ms`,5,s-5),t.textAlign="right",t.textBaseline="top",t.fillText(`Delta time: ${r[n-1].toFixed(2)}`,i-5,5)}drawGraph(){const t=this.graphCanvas.getContext("2d"),e=this.editor.game.profiler;if(!e||!e.enabled)return;this.graphCanvas.width=this.graphCanvas.clientWidth,this.graphCanvas.height=this.graphCanvas.clientHeight;const i=this.graphCanvas.width,s=this.graphCanvas.height;if(t.clearRect(0,0,i,s),!e.metrics||!e.metrics.passes||e.metrics.passes.length===0)return;const n=["#e6194B","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6"];let r=[],o=0;if(this.stats.pieMode==="Average"){let y=0;const x=this.stats.avgFrames;for(const p in e.passHistory){const b=e.passHistory[p];if(b.length>0){let _=0,T=Math.min(b.length,x);for(let M=b.length-T;M<b.length;M++)_+=b[M];const A=_/T;r.push({name:p,duration:A,color:n[y%n.length]}),o+=A}y++}}else e.metrics.passes.forEach((y,x)=>{r.push({name:y.name,duration:y.duration,color:n[x%n.length]}),o+=y.duration});if(o<=0)return;const c=i*.3,h=s/2,l=Math.max(0,Math.min(c,h)-10);if(l<=0)return;let d=-.5*Math.PI;r.forEach(y=>{if(y.duration<=0)return;const x=y.duration/o*2*Math.PI;if(t.beginPath(),t.moveTo(c,h),t.arc(c,h,l,d,d+x),t.closePath(),t.fillStyle=y.color,t.fill(),x>.3){const p=d+x/2,b=c+Math.cos(p)*(l*.6),_=h+Math.sin(p)*(l*.6);t.fillStyle="#000",t.font="10px bold sans-serif",t.textAlign="center",t.textBaseline="middle";const T=y.name.replace("Pass","").substring(0,6);t.fillText(T,b,_)}d+=x});const u=c+l+20;let f=20;const g=16;t.textAlign="left",t.font="10px monospace",r.forEach(y=>{t.fillStyle=y.color,t.fillRect(u,f-8,10,10),t.fillStyle="#fff";const x=(y.duration/o*100).toFixed(1);t.fillText(`${y.name.substring(0,10)}: ${y.duration.toFixed(2)}ms (${x}%)`,u+15,f),f+=g})}rebuildPassFolders(){if([...this.passesFolder.children].forEach(i=>{i.property!=="showPassDetails"&&i.destroy()}),!this.showPassDetails)return;const e=this.editor.game;e.renderQueue&&e.renderQueue.passes&&e.renderQueue.passes.forEach(i=>{const s=this.passesFolder.addFolder(i.name||"Pass");s.add(i,"drawCount").name("Draw Calls").disable().listen(),s.add(i,"executionTime").name("Perf (ms)").disable().listen(),s.add(i,"enabled").name("Active").disable().listen()})}update(){const t=this.editor.game;if(!t)return;const e=t.profiler;if(!e)return;if(this.stats.fps=Math.round(e.fps||0),e.fpsHistory&&e.fpsHistory.length>0){let d=0,u=Math.min(e.fpsHistory.length,this.stats.avgFrames),f=[];for(let x=e.fpsHistory.length-u;x<e.fpsHistory.length;x++)d+=e.fpsHistory[x],f.push(e.fpsHistory[x]);this.stats.avgFps=Math.round(d/u),f.sort((x,p)=>x-p);let g=Math.floor(f.length*.01),y=Math.floor(f.length*.99);y>=f.length&&(y=f.length-1),this.stats.fps1Low=Math.round(f[g]||this.stats.fps),this.stats.fps1High=Math.round(f[y]||this.stats.fps)}else this.stats.avgFps=this.stats.fps,this.stats.fps1Low=this.stats.fps,this.stats.fps1High=this.stats.fps;this.stats.ms=(e.metrics.cpuTime||0).toFixed(2);let i=0,s=0,n=0;e.metrics&&e.metrics.passes&&(this.stats.totalPasses=e.metrics.passes.length,e.metrics.passes.forEach(d=>{i+=d.drawCalls.length,s+=d.duration,d.drawCalls.forEach(u=>n+=u.vertices||0)})),this.stats.totalDrawCalls=i,this.stats.totalVertices=n,this.stats.gpuTotal=s.toFixed(3);const r=e.metrics.memory||{vertices:0,renderTargets:0,textures:0,total:0},o=(r.vertices/(1024*1024)).toFixed(2),c=(r.renderTargets/(1024*1024)).toFixed(2),h=(r.textures/(1024*1024)).toFixed(2),l=(r.total/(1024*1024)).toFixed(2);this.stats.approxMemory=l+" MB",this.stats.memoryVertices=o+" MB",this.stats.memoryRenderTargets=c+" MB",this.stats.memoryTextures=h+" MB",this.showPassDetails}}class Li{constructor(t,e){this.editor=t,this.container=e,this.gui=new _t({container:e,title:"Info & Credits",touchEventTarget:e,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.info={engine:"PiGL.js",version:"1.0.2"},this.init()}init(){this.gui.add(this.info,"engine").name("Engine").disable(),this.gui.add(this.info,"version").name("Version").disable();const t={openGithub:()=>{window.open("https://github.com/itsTanpi","_blank")}};this.gui.add(t,"openGithub").name("Made by Tanpi");const e=this.gui.addFolder("Instructions"),i={move:"WASD to move",look:"Right Mouse Button to look",hideUi:"H to hide Ui"};e.add(i,"move").name("Movement").disable(),e.add(i,"look").name("Camera").disable(),e.add(i,"hideUi").name("Ui").disable();const s=this.gui.addFolder("Asset Credits"),n={openKenney:()=>{window.open("https://www.kenney.nl","_blank")},openWill:()=>{window.open("https://sketchfab.com/3d-models/lowpoly-island-0a514854b7164178a6c7a69961235197","_blank")}};s.add(n,"openKenney").name("Kenney (kenney.nl)"),s.add(n,"openWill").name("will.nsq (Sketchfab)")}}class zi{constructor(t,e){this.editor=t,this.container=e,this.gui=new _t({container:e,title:"World",touchEventTarget:e,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto";const i=this.editor.game&&this.editor.game.floatingSpawnConfig?this.editor.game.floatingSpawnConfig.seed:0;this.state={seed:Number.isFinite(i)?i:0,respawn:()=>this.respawnWithSeed(this.state.seed),randomize:()=>{const s=Math.floor(Math.random()*1e6);this.state.seed=s,this.seedController&&this.seedController.updateDisplay(),this.respawnWithSeed(s)}},this.init()}init(){this.seedController=this.gui.add(this.state,"seed",0,1e6,1).name("Seed"),this.seedController.listen();const t=this.editor.game&&this.editor.game.cameraController?this.editor.game.cameraController.moveSpeed:10;this.state.moveSpeed=t,this.moveSpeedController=this.gui.add(this.state,"moveSpeed",1,100,.5).name("Move Speed"),this.moveSpeedController.onChange(i=>{try{this.editor.game&&this.editor.game.cameraController&&(this.editor.game.cameraController.moveSpeed=i)}catch(s){console.warn("Failed to set camera moveSpeed",s)}}),this.gui.add(this.state,"respawn").name("Respawn"),this.gui.add(this.state,"randomize").name("Random Seed");const e={Random:"Random reroll"};this.gui.add(e,"Random").name("Random").disable()}async respawnWithSeed(t){!this.editor.game||typeof this.editor.game.respawnWithSeed!="function"||await this.editor.game.respawnWithSeed(t)}}class Ii{constructor(t){this.game=t,this.wm=new vi,this.windows={},this.initWindows()}initWindows(){const t=this.wm.createWindow("Hierarchy",20,20,250,400);this.windows.hierarchy=new Fi(this,t.content),this.wm.addNavItem("HIERARCHY",t.window),t.window.style.display="none";const e=this.wm.createWindow("Inspector",290,20,320,500);this.windows.inspector=new Pi(this,e.content),this.wm.addNavItem("INSPECTOR",e.window),e.window.style.display="none";const i=this.wm.createWindow("Materials",630,20,320,500);this.windows.material=new ki(this,i.content),this.wm.addNavItem("MATERIALS",i.window),i.window.style.display="none";const s=this.wm.createWindow("Render Passes",970,20,320,500);this.windows.renderPass=new Di(this,s.content),this.wm.addNavItem("PASSES",s.window),s.window.style.display="none";const n=this.wm.createWindow("Profiler",20,20,500,700);this.windows.profiler=new Bi(this,n.content),this.wm.addNavItem("PROFILER",n.window),n.window.style.display="none";const r=this.wm.createWindow("Info",290,440,380,300);this.windows.info=new Li(this,r.content),this.wm.addNavItem("INFO",r.window),r.window.style.display="none";const o=this.wm.createWindow("World",680,440,260,220);this.windows.world=new zi(this,o.content),this.wm.addNavItem("WORLD",o.window),o.window.style.display="none";let c=["Final"];this.game.viewportPass&&this.game.viewportPass.buffers&&(c=Object.keys(this.game.viewportPass.buffers)),this.wm.addNavSelect(c,h=>{this.game.setViewports(h)}),this.setupShortcuts()}setupShortcuts(){window.addEventListener("keydown",t=>{t.key.toLowerCase()==="h"&&this.wm.toggleVisibility()})}selectObject(t){if(!t)return;this.windows.inspector.inspect(t);const e=this.windows.inspector&&this.windows.inspector.container&&this.windows.inspector.container.parentElement;e&&e.style.display==="none"&&(e.style.display="block")}update(){}}/*! CONTINENT - Optimized Noise Generator */const zt=function(){const a={};function t(v){const S="p_"+v;if(a[S])return a[S];let R=v^305419896;function w(){return R=R*1664525+1013904223>>>0,R/4294967296}const F=new Array(256);for(let L=0;L<256;L++)F[L]=L;for(let L=255;L>0;L--){const O=Math.floor(w()*(L+1)),N=F[L];F[L]=F[O],F[O]=N}const B=new Uint8Array(512);for(let L=0;L<512;L++)B[L]=F[L&255];return a[S]=B,B}function e(v,S,R){let w=R;return w^=v*73856093^S*19349663,w=(w^w>>>16)*2246822507,w=w^w>>>13,w}function i(v){return(v&2147483647)/2147483647}function s(v){return v*v*v*(v*(v*6-15)+10)}function n(v,S,R){return v+R*(S-v)}function r(v,S,R,w){v&=15;const F=v<8?S:R,B=v<4?R:v===12||v===14?S:w;return(v&1?-F:F)+(v&2?-B:B)}function o(v,S,R,w){const F=Math.floor(S)&255,B=Math.floor(R)&255,L=Math.floor(w)&255;S-=Math.floor(S),R-=Math.floor(R),w-=Math.floor(w);const O=s(S),N=s(R),$=s(w),V=v[F]+B,G=v[F+1]+B,q=v[V]+L,Z=v[V+1]+L,tt=v[G]+L,st=v[G+1]+L;return n(n(n(r(v[q],S,R,w),r(v[tt],S-1,R,w),O),n(r(v[Z],S,R-1,w),r(v[st],S-1,R-1,w),O),N),n(n(r(v[q+1],S,R,w-1),r(v[tt+1],S-1,R,w-1),O),n(r(v[Z+1],S,R-1,w-1),r(v[st+1],S-1,R-1,w-1),O),N),$)*.5+.5}function c(v,S,R,w,F,B){let L=0,O=1,N=1,$=0;for(let V=0;V<F;V++)L+=o(v,S*N,R*N,w)*O,$+=O,O*=B,N*=2;return L/$}function h(v,S,R,w,F={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:B=60,octaves:L=4,falloff:O=.5}=F,N=t(w),$=v/B,V=S/B,G=c(N,$,V,R,L,O);return C(G,F)}function l(v,S,R,w,F={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:B=60,octaves:L=4,falloff:O=.5}=F,N=t(w),$=v/B,V=S/B;let G=0,q=1,Z=1,tt=0;for(let st=0;st<L;st++){const Mt=o(N,$*Z,V*Z,R);G+=(1-Math.abs(Mt*2-1))*q,tt+=q,q*=O,Z*=2}return C(G/tt,F)}function d(v,S,R,w,F={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:B=60,octaves:L=4,falloff:O=.5}=F,N=t(w),$=v/B,V=S/B;let G=0,q=1,Z=1,tt=0;for(let st=0;st<L;st++){const Mt=o(N,$*Z,V*Z,R);G+=Math.abs(Mt*2-1)*q,tt+=q,q*=O,Z*=2}return C(G/tt,F)}function u(v,S,R,w=0){const F=Math.sin(v*127.1+S*311.7+R*41.3)*43758.5453,B=Math.sin(v*269.5+S*183.3+R*41.3)*43758.5453;let L=F-Math.floor(F),O=B-Math.floor(B);const N=g(L-.5,O-.5,w);return L=N.x+.5,O=N.y+.5,[L,O]}function f(v,S,R,w,F=0){const B=Math.floor(v/R),L=Math.floor(S/R),O=v/R-B,N=S/R-L;let $=2,V=2,G=B,q=L;for(let Z=-1;Z<=1;Z++)for(let tt=-1;tt<=1;tt++){const st=B+Z,Mt=L+tt,Ee=u(st,Mt,w,F),Te=Z+Ee[0]-O,Se=tt+Ee[1]-N,jt=Math.sqrt(Te*Te+Se*Se);jt<$?(V=$,$=jt,G=st,q=Mt):jt<V&&(V=jt)}return{d1:$,d2:V,cx:G,cy:q}}function g(v,S,R){if(!R)return{x:v,y:S};const w=R*Math.PI/180,F=Math.cos(w),B=Math.sin(w);return{x:v*F-S*B,y:v*B+S*F}}function y(v,S,R,w,F){const B=f(v,S,w,R,F);return Math.min(1,B.d1)}function x(v,S,R,w,F={scale:60,angle:0,contrast:1,threshold:0}){const{scale:B=60,angle:L=0}=F,O=y(v,S,w,B,L);return C(O,F)}function p(v,S,R,w,F,B,L,O){let N=0,$=1,V=0,G=F;for(let q=0;q<L;q++)N+=y(v,S,w+q,G,B)*$,V+=$,$*=O,G*=.5;return N/V}function b(v,S,R,w,F={scale:60,angle:0,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:B=60,angle:L=0,octaves:O=4,falloff:N=.5}=F,$=p(v,S,R,w,B,L,O,N);return C($,F)}function _(v,S,R,w,F={scale:60,angle:0,contrast:1,threshold:0}){const{scale:B=60,angle:L=0}=F,O=f(v,S,B,w,L),N=O.d2-O.d1,$=Math.min(1,N*2);return C($,F)}function T(v,S,R,w,F={scale:60,angle:0,contrast:1,threshold:0}){const{scale:B=60,angle:L=0}=F,O=1-y(v,S,w,B,L);return C(O,F)}function A(v,S,R,w,F={scale:60,angle:0,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:B=60,angle:L=0,octaves:O=4,falloff:N=.5}=F,$=1-p(v,S,R,w,B,L,O,N);return C($,F)}function M(v,S,R,w,F={scale:60,contrast:1,threshold:0}){const{scale:B=60}=F,L=(Math.sin(v/B*6.28+R*5+w*.01)+1)/2;return C(L,F)}function I(v,S,R,w,F={scale:60,contrast:1,threshold:0}){const{scale:B=60}=F,L=(Math.sin(S/B*6.28+R*5+w*.01)+1)/2;return C(L,F)}function m(v,S,R,w,F={scale:60,contrast:1,threshold:0}){const{scale:B=60}=F,L=Math.sqrt(v*v+S*S)/B,O=(Math.sin(L*6.28+R*5+w*.01)+1)/2;return C(O,F)}function E(v,S,R,w,F={scale:60,contrast:1,threshold:0}){const{scale:B=60}=F,L=w%2===0?0:1,O=(Math.floor(v/B)+Math.floor(S/B)+L)%2===0?1:0;return C(O,F)}function k(v,S,R,w,F={scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:1,threshold:0}){const{scale:B=60,octaves:L=4,falloff:O=.5,warpStrength:N=.8}=F,$=t(w),V=v/B,G=S/B,q=t(w+12345),Z=t(w+54321),tt=o(q,V,G,R)*B*N,st=o(Z,V+5.2,G+1.3,R)*B*N,Mt=c($,(v+tt)/B,(S+st)/B,R+.5,L,O);return C(Mt,F)}function D(v,S,R,w,F={scale:60,angle:0,contrast:1,threshold:0}){const{scale:B=60,angle:L=0}=F,O=f(v,S,B,w,L),N=i(e(O.cx,O.cy,w+9001));return C(N,F)}function W(v){return v<0?0:v>1?1:v}function C(v,S){const R=S||{},w=typeof R.contrast=="number"?R.contrast:1,F=typeof R.threshold=="number"?R.threshold:0;return w!==1&&(v=(v-.5)*w+.5),v=W(v),F>0&&(v=v>=F?1:0),W(v)}function z(v){return U[v]||h}const U={perlin:h,ridged:l,billowy:d,voronoi:x,voronoi_edge:T,voronoi_cracks:_,voronoi_cell:D,worley:b,worley_edge:A,sine_x:M,sine_y:I,sine_radial:m,checkerboard:E,domain_warp:k};return{perlin:h,ridged:l,billowy:d,voronoi:x,voronoiEdge:T,voronoiCracks:_,voronoiCell:D,worley:b,worleyEdge:A,sineX:M,sineY:I,sineRadial:m,checkerboard:E,domainWarp:k,getNoiseFunction:z,clamp01:W,seededPerm:t,pnoise:o,fbm:c,types:Object.keys(U)}}();typeof Gt<"u"&&Gt.exports&&(Gt.exports=zt);function Oi(a,t,e,i,s={scale:60,contrast:1,threshold:0,octaves:6,lacunarity:2,persistence:.5}){const n=s.scale??60,r=s.contrast??1,o=s.threshold??0,c=s.octaves??6,h=s.lacunarity??2,l=s.persistence??.5;function d(M){return M*M*M*(M*(M*6-15)+10)}function u(M,I,m){return M+m*(I-M)}function f(M,I,m,E){const k=M&15,D=k<8?I:m,W=k<4?m:k===12||k===14?I:E;return(k&1?-D:D)+(k&2?-W:W)}function g(M){const I=new Uint8Array(256);for(let E=0;E<256;E++)I[E]=E;let m=M>>>0||1;for(let E=255;E>0;E--){m=m*1664525+1013904223>>>0;const k=m%(E+1);[I[E],I[k]]=[I[k],I[E]]}return I}function y(M,I,m,E){const k=Math.floor(M)&255,D=Math.floor(I)&255,W=Math.floor(m)&255,C=M-Math.floor(M),z=I-Math.floor(I),U=m-Math.floor(m),v=d(C),S=d(z),R=d(U),w=V=>E[V&255],F=w(k)+D,B=w(F)+W,L=w(F+1)+W,O=w(k+1)+D,N=w(O)+W,$=w(O+1)+W;return u(u(u(f(w(B),C,z,U),f(w(N),C-1,z,U),v),u(f(w(L),C,z-1,U),f(w($),C-1,z-1,U),v),S),u(u(f(w(B+1),C,z,U-1),f(w(N+1),C-1,z,U-1),v),u(f(w(L+1),C,z-1,U-1),f(w($+1),C-1,z-1,U-1),v),S),R)}const x=g(i);let p=0,b=1,_=1,T=0;for(let M=0;M<c;M++)p+=y(a/n*_,t/n*_,e*_,x)*b,T+=b,b*=l,_*=h;let A=(p/T+1)/2;return A=(A-.5)*r+.5,A=Math.max(0,A-o)/(1-o),Math.min(1,Math.max(0,A))}function Wi(a,t,e,i,s={centerX:250,centerY:250,radius:100,jaggedness:.5,seed:0,power:2,steepness:1}){const n=s.centerX??250,r=s.centerY??250,o=s.radius??100,c=s.jaggedness??.5,h=s.seed??i,l=s.power??2,d=s.steepness??1,u=a-n,f=t-r,g=Math.sqrt(u*u+f*f),y=Math.atan2(f,u),x=Math.sin(y*4+h)*.5+Math.sin(y*7-h*2)*.3+Math.sin(y*12+h*.5)*.2,p=o*(1+x*c);let b=Math.min(1,g/p);return Math.pow(1-Math.pow(b,d),l)}function Ni(a,t,e){let s=t*a;return s=s*(1+1*a),Math.max(0,Math.min(1,s))}const ft=function(){const a={res:4,color:"terrain",offsetX:-220,offsetY:-190,zoom:1.5},t=[{id:1,type:"FBMPerlin",scale:400,octaves:3,falloff:.5,seed:0,weight:1,contrast:2.7,threshold:0,z:0,offsetX:0,offsetY:0,blend:"StrengthBased",visible:!0,collapsed:!1,paramsMeta:{scale:{type:"number"},octaves:{type:"number"},falloff:{type:"number"},contrast:{type:"number"},threshold:{type:"number"},lacunarity:{type:"number"},persistence:{type:"number"}},params:{scale:600,octaves:3,falloff:.5,contrast:.8,threshold:0,lacunarity:2,persistence:5},fixedMeta:{offsetX:{type:"number",step:.01},offsetY:{type:"number",step:.01},z:{type:"number",step:.01},seed:{type:"range",min:0,max:9999,step:1}}},{id:2,type:"domain_warp",seed:0,z:0,offsetX:0,offsetY:0,blend:"StrengthBased",visible:!0,collapsed:!1,params:{scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:.8,threshold:0},paramsMeta:{scale:{type:"number"},octaves:{type:"number"},falloff:{type:"number"},warpStrength:{type:"number"},contrast:{type:"number"},threshold:{type:"number"}},fixedMeta:{},scale:60},{id:3,type:"FallOffNoise",seed:0,z:-.03,offsetX:0,offsetY:0,blend:"StrengthBased",visible:!0,collapsed:!1,params:{centerX:0,centerY:0,radius:800,jaggedness:.2,seed:19.9,power:5,steepness:1.5,scale:60},paramsMeta:{centerX:{type:"range",min:-1e4,max:1e4,step:.01},centerY:{type:"range",min:-1e4,max:1e4,step:.01},radius:{type:"number",step:.01},jaggedness:{type:"number",step:.01},seed:{type:"number",step:.01},power:{type:"number",step:.01},steepness:{type:"number",step:.01},scale:{type:"number",step:.01}},fixedMeta:{offsetX:{type:"number",step:.01},offsetY:{type:"number",step:.01},z:{type:"number",step:.01},seed:{type:"number",step:.01}},scale:60}],e={singleCellNoise:{centerX:240,centerY:180,radius:60,thickness:.1,contrast:1},customNoise:{centerX:250,centerY:250,radius:100,fuzziness:.8},FallOffNoise:{centerX:250,centerY:250,radius:100,jaggedness:.5,seed:0,power:2,steepness:1},FBMPerlin:{scale:60,contrast:1,threshold:0,octaves:6,lacunarity:2,persistence:.5}},i={FBMPerlin:{scale:{type:"number"},contrast:{type:"number"},threshold:{type:"number"},octaves:{type:"number"},lacunarity:{type:"number"},persistence:{type:"number"}},singleCellNoise:{centerX:{type:"number"},centerY:{type:"number"},radius:{type:"number"},thickness:{type:"number"},contrast:{type:"number"}},customNoise:{centerX:{type:"number"},centerY:{type:"number"},radius:{type:"number"},fuzziness:{type:"number"}},FallOffNoise:{centerX:{type:"number"},centerY:{type:"number"},radius:{type:"number"},jaggedness:{type:"number"},seed:{type:"number"},power:{type:"number"},steepness:{type:"number"}}},s={FBMPerlin:Oi,FallOffNoise:Wi},n={avg:(h,l)=>(h+l)/2,add:(h,l)=>Math.min(1,h+l),mul:(h,l)=>h*l,max:(h,l)=>Math.max(h,l),min:(h,l)=>Math.min(h,l),diff:(h,l)=>Math.abs(h-l),StrengthBased:Ni};function r(h){return Number.isFinite(h)?h<0?0:h>1?1:h:0}function o(h,l,d,u){const f=n[d];if(!f)return h;const g=f(h,l,u);return r(+g)}function c(h,l,d=0){let u=0;const f={scale:600,octaves:3,falloff:.5,contrast:.8,threshold:0,lacunarity:2,persistence:5},g=s.FBMPerlin||zt.getNoiseFunction("FBMPerlin"),y=(h+a.offsetX)*a.zoom+0,x=(l+a.offsetY)*a.zoom+0;let p=g(y,x,d+0,0,f);p=p<0?0:p>1?1:p,u=p;const b={scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:.8,threshold:0},_=s.domain_warp||zt.getNoiseFunction("domain_warp"),T=(h+a.offsetX)*a.zoom+0,A=(l+a.offsetY)*a.zoom+0;let M=_(T,A,d+0,0,b);M=M<0?0:M>1?1:M,u=o(u,M,"StrengthBased",{layerIndex:1});const I={centerX:(220+a.offsetX)*a.zoom,centerY:(190+a.offsetY)*a.zoom,radius:800,jaggedness:.2,seed:0,power:5,steepness:1.5,scale:60},m=s.FallOffNoise||zt.getNoiseFunction("FallOffNoise"),E=(h+a.offsetX)*a.zoom+0,k=(l+a.offsetY)*a.zoom+0;let D=m(E,k,d+-.03,0,I);return D=D<0?0:D>1?1:D,u=o(u,D,"StrengthBased",{layerIndex:2}),a.invert&&(u=1-u),u}return{getValue:c,setOffsets:(h,l)=>{a.offsetX=h,a.offsetY=l},getState:()=>({...a}),getLayers:()=>[...t],getParamDefaults:()=>({...e}),getParamMeta:()=>({...i}),NoiseLib:zt,customFunctions:s,projectName:"CONTINENT"}}();typeof window<"u"&&(window.CONTINENT=ft);class Hi{constructor(t,e,i={}){const{collisionWorld:s=null,...n}=i;this.camera=t,this.domElement=e,this.settings={moveSpeed:5,sprintMultiplier:1.7,jumpSpeed:10,gravity:28,eyeHeight:1.2,mouseSensitivity:.12,fov:45,bobbingEnabled:!0,bobFrequency:9,bobVerticalAmount:.25,bobSideAmount:.015,bobSmoothing:12,movementTiltEnabled:!0,movementTiltDegrees:3,movementTiltSmoothing:10,terrainX:-(255*Math.sqrt(3)/2),terrainZ:-191.25,terrainScaleY:.4,waterLevel:-7,minWaterClearance:.35,maxStepHeight:4,collisionRadius:.32,collisionLayerMask:4294967295,collisionActorLayer:4294967295,...n},this.collisionWorld=s,this.keys=new Set,this.pitch=t.transform.rotation.x,this.yaw=t.transform.rotation.y,this.verticalVelocity=0,this.grounded=!1,this.isWalking=!1,this.bobTime=0,this.bobOffsetY=0,this.bobOffsetX=0,this.appliedBobX=0,this.appliedBobZ=0,this.appliedBobY=0,this.tilt=0,this.baseEyeY=t.transform.position.y,this._onKeyDown=r=>{const o=r.key.toLowerCase();["w","a","s","d"," ","shift"].includes(o)&&r.preventDefault(),this.keys.add(o)},this._onKeyUp=r=>this.keys.delete(r.key.toLowerCase()),this._onMouseMove=r=>{if(document.pointerLockElement!==this.domElement)return;const o=this.settings.mouseSensitivity*Math.PI/180;this.yaw-=r.movementX*o,this.pitch-=r.movementY*o;const c=Math.PI/2-.01;this.pitch=Math.max(-c,Math.min(c,this.pitch)),this._applyCameraRotation()},this._onPointerLockChange=()=>{document.pointerLockElement!==this.domElement&&this.keys.clear()},this._onBlur=()=>this.keys.clear(),this._onContextMenu=r=>r.preventDefault(),this._onClick=()=>{var o,c;if(document.pointerLockElement===this.domElement)return;const r=(c=(o=this.domElement).requestPointerLock)==null?void 0:c.call(o);r!=null&&r.catch&&r.catch(()=>{})},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("blur",this._onBlur),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("pointerlockchange",this._onPointerLockChange),this.domElement.addEventListener("click",this._onClick),this.domElement.addEventListener("contextmenu",this._onContextMenu),this._applyFov(),this.placeOnNearestLand()}_applyFov(){this.camera.setPerspective(this.settings.fov*Math.PI/180,this.camera.aspect,this.camera.near,this.camera.far)}setFov(t){this.settings.fov=t,this._applyFov()}_applyCameraRotation(){this.camera.transform.rotation.set(this.pitch,this.yaw,this.tilt)}getGroundHeight(t,e){const i=t-this.settings.terrainX,s=e-this.settings.terrainZ,n=ft.getValue(i,s,0),r=(n<=.3?20/255:.4+n)*20*this.settings.terrainScaleY-11;return r<=this.settings.waterLevel+this.settings.minWaterClearance?null:r}placeOnNearestLand(){const t=this.camera.transform.position;let e=null;for(let i=0;i<=120&&!e;i+=5)for(let s=0;s<Math.PI*2;s+=Math.PI/8){const n=t.x+Math.cos(s)*i,r=t.z+Math.sin(s)*i,o=this.getGroundHeight(n,r);if(o!==null){e={x:n,z:r,height:o};break}}e&&(t.set(e.x,e.height+this.settings.eyeHeight,e.z),this.baseEyeY=t.y,this.bobOffsetX=0,this.bobOffsetY=0,this.grounded=!0)}update(t){const e=Math.min(Math.max(t,0),.05),i=this.camera.transform.position;i.x-=this.appliedBobX,i.z-=this.appliedBobZ,i.y-=this.appliedBobY,this.appliedBobX=this.appliedBobZ=this.appliedBobY=0;const s=(this.keys.has("w")?1:0)-(this.keys.has("s")?1:0),n=(this.keys.has("d")?1:0)-(this.keys.has("a")?1:0),r=Math.hypot(s,n);let o=!1;if(r>0){const x=this.settings.moveSpeed*(this.keys.has("shift")?this.settings.sprintMultiplier:1),p=(-Math.sin(this.yaw)*s+Math.cos(this.yaw)*n)/r*x*e,b=(-Math.cos(this.yaw)*s-Math.sin(this.yaw)*n)/r*x*e,_=this.getGroundHeight(i.x+p,i.z);_!==null&&_>=i.y-this.settings.eyeHeight-this.settings.maxStepHeight&&(i.x+=p,o||(o=Math.abs(p)>0));const T=this.getGroundHeight(i.x,i.z+b);if(T!==null&&T>=i.y-this.settings.eyeHeight-this.settings.maxStepHeight&&(i.z+=b,o||(o=Math.abs(b)>0)),this.collisionWorld){const A=this.collisionWorld.resolveCircle(i.x,i.z,this.settings.collisionRadius,{minY:i.y-this.settings.eyeHeight,maxY:i.y,layerMask:this.settings.collisionLayerMask,actorLayer:this.settings.collisionActorLayer});i.x=A.x,i.z=A.z}}const c=this.getGroundHeight(i.x,i.z);if(c===null){this.placeOnNearestLand(),this.verticalVelocity=0;return}this.grounded&&this.keys.has(" ")&&(this.verticalVelocity=this.settings.jumpSpeed,this.grounded=!1),this.verticalVelocity-=this.settings.gravity*e,i.y+=this.verticalVelocity*e;const h=c+this.settings.eyeHeight;i.y<=h?(i.y=h,this.baseEyeY=h,this.verticalVelocity=0,this.grounded=!0):this.grounded=!1;const l=o&&this.grounded;if(this.isWalking=l,l&&this.settings.bobbingEnabled){const x=this.keys.has("shift")?this.settings.sprintMultiplier:1;this.bobTime+=e*this.settings.bobFrequency*x}const d=1-Math.exp(-this.settings.bobSmoothing*e),u=l&&this.settings.bobbingEnabled?Math.abs(Math.sin(this.bobTime))*this.settings.bobVerticalAmount:0,f=l&&this.settings.bobbingEnabled?Math.cos(this.bobTime*.5)*this.settings.bobSideAmount:0;this.bobOffsetY+=(u-this.bobOffsetY)*d,this.bobOffsetX+=(f-this.bobOffsetX)*d,this.appliedBobX=Math.cos(this.yaw)*this.bobOffsetX,this.appliedBobZ=-Math.sin(this.yaw)*this.bobOffsetX,this.appliedBobY=this.bobOffsetY,i.x+=this.appliedBobX,i.z+=this.appliedBobZ,i.y+=this.appliedBobY;const g=this.settings.movementTiltEnabled?-n*this.settings.movementTiltDegrees*Math.PI/180:0,y=1-Math.exp(-this.settings.movementTiltSmoothing*e);this.tilt+=(g-this.tilt)*y,this._applyCameraRotation()}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("blur",this._onBlur),document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("pointerlockchange",this._onPointerLockChange),this.domElement.removeEventListener("click",this._onClick),this.domElement.removeEventListener("contextmenu",this._onContextMenu)}}class $i{constructor(t,e,i,s,n,r={}){var d,u;const{controller:o=null,inputElement:c=null,onEatFood:h=null,...l}=r;this.settings={modelPath:"./Assets/Characters/hand.obj",texturePath:"./Assets/Characters/colormap.png",position:[.32,-.28,-.55],rotation:[0,-Math.PI/2,0],scale:[.015,.015,.015],bobAmount:.045,bobSideAmount:.02,bobSmoothing:10,attackDamage:10,attackReach:2.5,attackRadius:.65,attackDuration:.34,attackCooldown:.45,attackHitTime:.12,attackThrust:.3,attackCenterShift:.12,attackLift:.04,attackSideSwing:.2,attackDiagonalDrop:.14,attackDiagonalRoll:.55,attackDiagonalPitch:.3,eatDuration:.9,...l},this.camera=s,this.scene=n,this.controller=o,this.onEatFood=h,this.inventory=null,this.inputElement=c,this.bobBlend=0,this.attackElapsed=null,this.attackCooldownRemaining=0,this.attackHitApplied=!1,this.eatElapsed=null,this.eatCompletePulse=0,this.weapon=null,this._onMouseDown=f=>{var g;if(f.button===2){((g=this.inventory)==null?void 0:g.selectedId)==="food"&&this.eatElapsed!==null&&(f.preventDefault(),this.cancelEating());return}f.button===0&&(f.preventDefault(),this.attack())},this._onMouseUp=f=>{f.button===2&&this.eatElapsed!==null&&this.cancelEating()},(d=this.inputElement)==null||d.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this._onContextMenu=f=>{this.eatElapsed!==null&&f.preventDefault()},(u=this.inputElement)==null||u.addEventListener("contextmenu",this._onContextMenu),this.ready=this._load(t,e,i)}async _load(t,e,i){try{const s=await xt.load(t,this.settings.modelPath);this.texture=new Ht(t,this.settings.texturePath),this.material=new nt(i,"First Person Hand"),this.material.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:this.texture.texture,uRoughness:1});const n=new it(e,this.material,s,"First Person Right Hand");return n.transform.position.set(...this.settings.position),n.transform.rotation.set(...this.settings.rotation),n.transform.scale.set(...this.settings.scale),this.camera.transform.add(n.transform),this.scene.push(n),this.gameObject=n,n}catch(s){return console.error("Could not load first-person hand:",s),null}}update(t){var o,c,h,l;const e=(o=this.gameObject)==null?void 0:o.transform;if(!e)return;const i=Math.min(Math.max(t,0),.05);if(this.controller){const d=1-Math.exp(-this.settings.bobSmoothing*i),u=this.controller.isWalking?1:0;this.bobBlend+=(u-this.bobBlend)*d}let s=0,n=0;if(this.eatCompletePulse=Math.max(0,this.eatCompletePulse-i*2.5),this.attackCooldownRemaining>0&&(this.attackCooldownRemaining=Math.max(0,this.attackCooldownRemaining-i)),this.attackElapsed!==null){this.attackElapsed+=i;const d=Math.min(this.attackElapsed/this.settings.attackDuration,1);s=Math.sin(d*Math.PI),!this.attackHitApplied&&this.attackElapsed>=this.settings.attackHitTime&&(this.attackHitApplied=!0,this.lastAttackResult=this._attackDamage()),d>=1&&(this.attackElapsed=null)}if(this.eatElapsed!==null){this.eatElapsed+=i;const d=Math.min(this.eatElapsed/this.settings.eatDuration,1);n=d<.88?Math.pow(Math.max(0,Math.sin(d*Math.PI*6)),1.5):1-(d-.88)/.12,d>=1&&(this.eatElapsed=null,(c=this.inventory)!=null&&c.finishEating()&&(this.eatCompletePulse=1,(h=this.onEatFood)==null||h.call(this,20)))}const r=((l=this.controller)==null?void 0:l.bobTime)||0;e.position.set(this.settings.position[0]+Math.cos(r*.5)*this.settings.bobSideAmount*this.bobBlend-(this.settings.attackCenterShift+this.settings.attackSideSwing)*s+.18*n,this.settings.position[1]+Math.abs(Math.sin(r))*this.settings.bobAmount*this.bobBlend+(this.settings.attackLift-this.settings.attackDiagonalDrop)*s+.2*n,this.settings.position[2]-this.settings.attackThrust*s+.16*n),e.rotation.set(this.settings.rotation[0]-.28*s-.35*n,this.settings.rotation[1],this.settings.rotation[2]+this.settings.attackDiagonalRoll*s-.18*n)}cancelEating(){var t;return this.eatElapsed===null?!1:(this.eatElapsed=null,(t=this.inventory)==null||t.cancelEating(),!0)}attack(){var e,i;if(((e=this.inventory)==null?void 0:e.selectedId)==="sword")return this.inventory.attackSelected(()=>this._attackDamage());const t=(i=this.inventory)==null?void 0:i.selectedItem;return(t==null?void 0:t.id)==="food"&&t.count>0?this.eatElapsed!==null||this.attackElapsed!==null||this.attackCooldownRemaining>0?!1:(this.eatElapsed=0,this.inventory.startEating()?!0:(this.eatElapsed=null,!1)):this.weapon?this.weapon.attack(this._createWeaponContext()):this.attackCooldownRemaining>0||this.attackElapsed!==null?!1:(this.attackElapsed=0,this.attackCooldownRemaining=this.settings.attackCooldown,this.attackHitApplied=!1,this.lastAttackResult=null,!0)}setWeapon(t=null){this.weapon=t}_createWeaponContext(){return{camera:this.camera,scene:this.scene,settings:this.settings,applyDamage:(t,e)=>this.applyDamage(t,e),animateHandAttack:()=>this._startHandAnimation()}}_startHandAnimation(){return this.attackCooldownRemaining>0||this.attackElapsed!==null?!1:(this.attackElapsed=0,this.attackCooldownRemaining=this.settings.attackCooldown,this.attackHitApplied=!0,!0)}_attackDamage(){var c;const t=this.camera.transform.position,e=this.camera.transform.rotation.x,i=this.camera.transform.rotation.y,s=Math.cos(e),n={x:-Math.sin(i)*s,y:Math.sin(e),z:-Math.cos(i)*s};let r=null,o=this.settings.attackReach;for(const h of this.scene){if(!h||h===this.gameObject||!h.active||!(typeof h.takeDamage=="function"||typeof((c=h.health)==null?void 0:c.takeDamage)=="function"||Number.isFinite(h.health)))continue;const d=h.transform.globalPosition,u={x:d.x-t.x,y:d.y-t.y,z:d.z-t.z},f=u.x*n.x+u.y*n.y+u.z*n.z;if(f<0||f>o)continue;const g=u.x-n.x*f,y=u.y-n.y*f,x=u.z-n.z*f,p=h.hitRadius??this.settings.attackRadius;g**2+y**2+x**2>p**2||(r=h,o=f)}return r?{hit:!0,target:r,damage:this.applyDamage(r,this.settings.attackDamage)}:{hit:!1,target:null,damage:0}}applyDamage(t,e=this.settings.attackDamage){var i;if(!t||!Number.isFinite(e)||e<=0)return 0;if(typeof t.takeDamage=="function"){const s=t.takeDamage(e,this.gameObject);return Number.isFinite(s)?s:e}return typeof((i=t.health)==null?void 0:i.takeDamage)=="function"?t.health.takeDamage(e,this.gameObject):Number.isFinite(t.health)?(t.health=Math.max(0,t.health-e),t.health===0&&(t.active=!1),e):0}dispose(){var t,e;(t=this.inputElement)==null||t.removeEventListener("mousedown",this._onMouseDown),(e=this.inputElement)==null||e.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("mouseup",this._onMouseUp)}}class Ui{constructor(t,e,i,s,n,r={}){const{hand:o=null,controller:c=null,...h}=r;this.settings={itemBobAmount:.045,itemBobSideAmount:.02,itemBobSmoothing:10,swordAttackDuration:.62,swordHitTime:.3,swordAttackCooldown:.72,eatDuration:.9,...h},this.camera=s,this.scene=n,this.hand=o,this.controller=c,this.slots=[{id:"sword",key:"1",name:"Sword",countName:null,modelPath:"./Assets/Items/weapon-sword.obj",texturePath:"./Assets/Items/Weapon.png",position:[.48,-.42,-.95],rotation:[0,0,-.45],scale:[.9,.9,.9]},{id:"food",key:"2",name:"Food",countName:"Count",modelPath:"./Assets/Items/Food.obj",texturePath:"./Assets/Items/Food.png",position:[.48,-.36,-.92],rotation:[-Math.PI/2,Math.PI/2,0],scale:[.65,.65,.65]}];for(const l of this.slots)l.owned??(l.owned=!1),l.count??(l.count=0),l.gameObject??(l.gameObject=null);this.selectedId=null,this.listeners=new Set,this.attackElapsed=null,this.attackCooldownRemaining=0,this.attackHitApplied=!1,this.attackOnHit=null,this.eating=!1,this._onKeyDown=l=>{if(l.repeat)return;if(l.key.toLowerCase()==="o"){l.preventDefault(),this.addItem("food",1);return}const d=this.slots.find(u=>u.key===l.key);d&&(l.preventDefault(),d.id==="food"?this.select(d.id,{allowEmpty:!0}):this.grantAndSelect(d.id))},window.addEventListener("keydown",this._onKeyDown),this.ready=this._loadItems(t,e,i),this.updateHud()}get selectedItem(){return this.slots.find(t=>t.id===this.selectedId)||null}getSlot(t){return this.slots.find(e=>e.id===t)||null}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}_notify(){this._updateItemVisibility(),this.updateHud();for(const t of this.listeners)t(this)}_getDebugGrantCount(t){return t.id==="sword",1}grantAndSelect(t){const e=this.getSlot(t);return e?(e.owned||(e.owned=!0,e.count=this._getDebugGrantCount(e)),this.selectedId=t,this._notify(),!0):!1}addItem(t,e=1,{select:i=!1}={}){const s=this.getSlot(t);if(!s||!Number.isFinite(e)||e<=0)return 0;const n=s.id==="sword"?s.owned?0:1:e;return s.owned=!0,s.count+=n,i&&(this.selectedId=t),(n>0||i)&&this._notify(),n}select(t,{allowEmpty:e=!1}={}){const i=this.getSlot(t);return!i||!i.owned&&!e?!1:(this.selectedId=t,this._notify(),!0)}consume(t,e=1){const i=this.getSlot(t);if(!(i!=null&&i.owned)||!Number.isFinite(e)||e<=0)return 0;const s=Math.min(i.count,e);return i.count-=s,this._notify(),s}startEating(){var t;return this.eating||this.selectedId!=="food"||(((t=this.getSlot("food"))==null?void 0:t.count)||0)<=0?!1:(this.eating=!0,this.eatElapsed=0,!0)}finishEating(){return this.eating?(this.eating=!1,this.eatElapsed=null,this.consume("food",1)>0):!1}cancelEating(){return this.eating?(this.eating=!1,this.eatElapsed=null,!0):!1}clearSelection(){this.selectedId=null,this._notify()}attackSelected(t=null){return this.selectedId!=="sword"||this.attackElapsed!==null||this.attackCooldownRemaining>0?!1:(this.attackElapsed=0,this.attackCooldownRemaining=this.settings.swordAttackCooldown,this.attackHitApplied=!1,this.attackOnHit=t,!0)}_updateItemVisibility(){var i;for(const s of this.slots){if(!s.gameObject)continue;const n=s.owned&&(s.id!=="food"||s.count>0);s.gameObject.active=s.id===this.selectedId&&n}const t=this.selectedItem,e=(t==null?void 0:t.id)==="food"&&(!t.owned||t.count<=0);(i=this.hand)!=null&&i.gameObject&&(this.hand.gameObject.active=!t||e)}updateHud(){const t=document.getElementById("inventory-selected");if(t){const e=this.selectedItem;t.textContent=!e||e.id==="food"&&e.count<=0?"EMPTY HAND":`HELD: ${e.name.toUpperCase()}`}for(const e of this.slots){const i=document.getElementById(`inventory-${e.id}`);if(!i)continue;i.classList.toggle("is-selected",e.id===this.selectedId),i.classList.toggle("is-empty",!e.owned);const s=i.querySelector(".inventory-count");s&&(e.owned?e.countName?s.textContent=`${e.countName}: ${e.count}`:s.textContent="READY":s.textContent="EMPTY")}}async _loadItems(t,e,i){const s=new Map;return await Promise.all(this.slots.filter(n=>n.modelPath).map(async n=>{try{const r=await xt.load(t,n.modelPath);let o=s.get(n.texturePath);o||(o=new Ht(t,n.texturePath),s.set(n.texturePath,o));const c=new nt(i,`${n.name} Item`);c.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:o.texture,uRoughness:1});const h=new it(e,c,r,`Held ${n.name}`);h.active=!1,h.transform.position.set(...n.position),h.transform.rotation.set(...n.rotation),h.transform.scale.set(...n.scale),this.camera.transform.add(h.transform),this.scene.push(h),n.gameObject=h,n.mesh=r,n.material=c,n.texture=o}catch(r){console.error(`Could not load inventory item ${n.name}:`,r)}})),this._updateItemVisibility(),this.slots}update(t){var u,f,g,y,x,p,b;const e=Math.min(Math.max(t,0),.05),i=1-Math.exp(-this.settings.itemBobSmoothing*e),s=(u=this.controller)!=null&&u.isWalking?1:0;this.itemBobBlend=(this.itemBobBlend||0)+(s-(this.itemBobBlend||0))*i;const n=((f=this.controller)==null?void 0:f.bobTime)||0,r=Math.cos(n*.5)*this.settings.itemBobSideAmount*this.itemBobBlend,o=Math.abs(Math.sin(n))*this.settings.itemBobAmount*this.itemBobBlend;this.attackCooldownRemaining>0&&(this.attackCooldownRemaining=Math.max(0,this.attackCooldownRemaining-e));const c=(g=this.getSlot("sword"))==null?void 0:g.gameObject;let h={x:0,y:0,z:0,pitch:0,roll:0};const l=((y=this.hand)==null?void 0:y.eatElapsed)===null||((x=this.hand)==null?void 0:x.eatElapsed)===void 0?0:Math.min(this.hand.eatElapsed/(this.hand.settings.eatDuration||this.settings.eatDuration),1),d=this.eating&&l<.88?Math.pow(Math.max(0,Math.sin(l*Math.PI*6)),1.5):0;if(this.attackElapsed!==null){this.attackElapsed+=e;const _=this.settings.swordAttackDuration,T=Math.min(this.attackElapsed/_,1);if(c){const A=m=>{const E=Math.max(0,Math.min(1,m));return E*E*(3-2*E)},M=(m,E,k)=>m+(E-m)*k;let I;if(T<.28){const m=A(T/.28);I={x:M(0,.13,m),y:M(0,.16,m),z:M(0,.03,m),pitch:M(0,-.22,m),roll:M(0,-.9,m)}}else if(T<.52){const m=A((T-.28)/.24);I={x:M(.13,-.28,m),y:M(.16,-.26,m),z:M(.03,-.18,m),pitch:M(-.22,.28,m),roll:M(-.9,1.35,m)}}else{const m=A((T-.52)/.48);I={x:M(-.28,0,m),y:M(-.26,0,m),z:M(-.18,0,m),pitch:M(.28,0,m),roll:M(1.35,0,m)}}h=I}!this.attackHitApplied&&this.attackElapsed>=this.settings.swordHitTime&&(this.attackHitApplied=!0,this.lastAttackResult=((p=this.attackOnHit)==null?void 0:p.call(this))??null,this.attackOnHit=null),T>=1&&(this.attackElapsed=null)}for(const _ of this.slots){if(!_.gameObject)continue;const T=_.id==="food"&&((b=this.hand)==null?void 0:b.eatCompletePulse)||0,A=_.id==="sword"?h:_.id==="food"?{x:-.12*d,y:.22*d+.12*T,z:.16*d,pitch:-.35*d-.18*T,roll:.1*d}:null;if(_.gameObject.transform.position.set(_.position[0]+r+((A==null?void 0:A.x)||0),_.position[1]+o+((A==null?void 0:A.y)||0),_.position[2]+((A==null?void 0:A.z)||0)),_.gameObject.transform.rotation.set(_.rotation[0]+((A==null?void 0:A.pitch)||0),_.rotation[1],_.rotation[2]+((A==null?void 0:A.roll)||0)),_.id==="food"&&_.material){const M=T*.45;_.material.setUniforms({uColor:[1,1-M,1-M,1]})}}}dispose(){window.removeEventListener("keydown",this._onKeyDown)}}class Tt extends fe{static terrainColor(t){return t<=.3?[14/255,54/255,124/255]:t<=.4?[234/255,191/255,145/255]:[112/255,224/255,145/255]}static terrainValue(t){return t<=.3?20/255:.4+t}exportOBJ(t,e,i,s,n){let r="";for(let h=0;h<e.length;h+=3)r+=`v ${e[h]} ${e[h+1]} ${e[h+2]}
`;for(let h=0;h<i.length;h+=2)r+=`vt ${i[h]} ${i[h+1]}
`;for(let h=0;h<s.length;h+=3)r+=`vn ${s[h]} ${s[h+1]} ${s[h+2]}
`;for(let h=0;h<n.length;h+=3){const l=n[h]+1,d=n[h+1]+1,u=n[h+2]+1;r+=`f ${l}/${l}/${l} ${d}/${d}/${d} ${u}/${u}/${u}
`}const o=new Blob([r],{type:"text/plain"}),c=document.createElement("a");c.href=URL.createObjectURL(o),c.download=t,c.click(),URL.revokeObjectURL(c.href)}constructor(t,e=20,i=15,s=1,n=!1){const r=s*Math.sqrt(3),o=s*1.5,c=e*r,h=i*o,l=[],d={},u=[],f=ft,g={};let y=0;for(let m=0;m<=i;m++){const E=m%2!==0?r/2:0;for(let k=0;k<=e;k++){const D=k*r+E,W=m*o,C=f.getValue(D,W,0);n&&(y=Tt.terrainValue(C)*20),g[`${m}_${k}`]=y}}for(let m=0;m<=i;m++){const E=m%2!==0?r/2:0;for(let k=0;k<=e;k++){const D=k*r+E,W=m*o;y=g[`${m}_${k}`];const C=f.getValue(D,W,0),z=Tt.terrainColor(C);d[`${m}_${k}`]=l.length/3,l.push(D,y,W),u.push(z[0],z[1],z[2])}}function x(m,E){return d[`${m}_${E}`]??-1}const p=[];function b(m,E){for(let k=-3;k<=3;k++)for(let D=-3;D<=3;D++){const W=m+k,C=E+D,z=g[`${W}_${C}`],U=g[`${W}_${C+1}`],v=W%2===0?C:C+1,S=W%2===0?C-1:C,R=g[`${W+1}_${v}`],w=g[`${W+1}_${S}`];if(!(z===void 0||U===void 0||R===void 0||w===void 0)&&!(z===U&&U===R&&R===w))return!0}return!1}function _(){let m=2;for(let E=0;E<2;E++){p.length=0;const k=E%2===0?0:m/2;for(let D=0;D<i;D+=m){const W=D/m%2===0?k:k+m/2;for(let C=W;C<e;C+=m){const z=x(D,C),U=x(D,C+m),v=x(D+m,C+m/2);z!==-1&&U!==-1&&v!==-1&&g[`${D}_${C}`]===g[`${D}_${C+m}`]&&g[`${D}_${C}`]===g[`${D+m}_${C+m/2}`]&&p.push(z,v,U);const S=x(D,C+m),R=x(D+m,C+m/2),w=x(D+m,C+m/2+m);S!==-1&&R!==-1&&w!==-1&&g[`${D}_${C+m}`]===g[`${D+m}_${C+m/2}`]&&g[`${D}_${C+m}`]===g[`${D+m}_${C+m/2+m}`]&&p.push(S,R,w)}}m*=2}}function T(){for(let m=0;m<i;m++)for(let E=0;E<e;E++){const k=x(m,E),D=x(m,E+1),W=m%2===0?E:E+1,C=m%2===0?E-1:E,z=x(m+1,W),U=x(m+1,C);k!==-1&&D!==-1&&z!==-1&&p.push(k,z,D),k!==-1&&U!==-1&&z!==-1&&p.push(k,U,z)}}if(!n)T();else{_();for(let m=0;m<i;m++)for(let E=0;E<e;E++){const k=x(m,E),D=x(m,E+1),W=m%2===0?E:E+1,C=m%2===0?E-1:E,z=x(m+1,W),U=x(m+1,C);b(m,E)&&(k!==-1&&D!==-1&&z!==-1&&p.push(k,z,D),k!==-1&&U!==-1&&z!==-1&&p.push(k,U,z))}}function A(){if(p.length===0){l.length=0,u.length=0;return}const m=new Set(p),E=new Map,k=[],D=[];let W=0;for(let C=0;C<l.length/3;C++)m.has(C)&&(E.set(C,W),k.push(l[C*3],l[C*3+1],l[C*3+2]),D.push(u[C*3],u[C*3+1],u[C*3+2]),W++);for(let C=0;C<p.length;C++)p[C]=E.get(p[C]);l.length=k.length,u.length=D.length;for(let C=0;C<k.length;C++)l[C]=k[C];for(let C=0;C<D.length;C++)u[C]=D[C]}A();const M=[];for(let m=0;m<l.length/3;m++){const E=l[m*3],k=l[m*3+2];M.push(E/c,k/h)}const I=new Float32Array(l.length);for(let m=0;m<p.length;m+=3){const E=p[m],k=p[m+1],D=p[m+2],W=l[E*3],C=l[E*3+1],z=l[E*3+2],U=l[k*3],v=l[k*3+1],S=l[k*3+2],R=l[D*3],w=l[D*3+1],F=l[D*3+2],B=U-W,L=v-C,O=S-z,N=R-W,$=w-C,V=F-z,G=L*V-O*$,q=O*N-B*V,Z=B*$-L*N;I[E*3]+=G,I[E*3+1]+=q,I[E*3+2]+=Z,I[k*3]+=G,I[k*3+1]+=q,I[k*3+2]+=Z,I[D*3]+=G,I[D*3+1]+=q,I[D*3+2]+=Z}for(let m=0;m<l.length/3;m++){const E=I[m*3],k=I[m*3+1],D=I[m*3+2],W=Math.sqrt(E*E+k*k+D*D)||1;I[m*3]=E/W,I[m*3+1]=k/W,I[m*3+2]=D/W}super(t,new Float32Array(l),new Float32Array(M),I,new Uint16Array(p)),this.colors=new Float32Array(u),this.colorBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.colorBuffer),t.bufferData(t.ARRAY_BUFFER,this.colors,t.STATIC_DRAW),this.cols=e,this.rows=i,this.radius=s,this.hSpacing=r,this.vSpacing=o,this.totalW=c,this.totalH=h}recomputeNormals(t){const e=this.gl,i=t.length/3,s=new Float32Array(i*3),n=this.indices;for(let r=0;r<n.length;r+=3){const o=n[r],c=n[r+1],h=n[r+2],l=t[o*3],d=t[o*3+1],u=t[o*3+2],f=t[c*3],g=t[c*3+1],y=t[c*3+2],x=t[h*3],p=t[h*3+1],b=t[h*3+2],_=f-l,T=g-d,A=y-u,M=x-l,I=p-d,m=b-u,E=I*A-m*T,k=m*_-M*A,D=M*T-I*_;s[o*3]+=E,s[o*3+1]+=k,s[o*3+2]+=D,s[c*3]+=E,s[c*3+1]+=k,s[c*3+2]+=D,s[h*3]+=E,s[h*3+1]+=k,s[h*3+2]+=D}for(let r=0;r<i;r++){const o=s[r*3],c=s[r*3+1],h=s[r*3+2],l=Math.sqrt(o*o+c*c+h*h)||1;s[r*3]=o/l,s[r*3+1]=c/l,s[r*3+2]=h/l}e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer),e.bufferData(e.ARRAY_BUFFER,s,e.DYNAMIC_DRAW),this.normals=s}}class Vi{constructor(t,e,i,s,n,{camera:r=null,seed:o=68,lootTable:c=null}={}){this.gl=t,this.renderer=e,this.material=i,this.scene=s,this.inventory=n,this.playerCamera=r,this.seed=o>>>0,this.currentState=this.seed,this.noise=ft,this.mesh=null,this.chests=[],this.openDuration=.9,this.interactionRange=5,this.lootTable=c||[{item:"food",probability:1,minCount:2,maxCount:5}],this._keyDown=h=>{h.code==="KeyE"&&!h.repeat&&(this.openingChest=this._findNearbyChest())},this._keyUp=h=>{h.code==="KeyE"&&(this.openingChest=null)},window.addEventListener("keydown",this._keyDown),window.addEventListener("keyup",this._keyUp)}setSeed(t){this.seed=t>>>0,this.currentState=this.seed}random(){this.currentState=this.currentState+1831565813|0;let t=this.currentState;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}async spawnMany(t,e,i=-11){if(this.mesh||(this.mesh=await xt.load(this.gl,"./Assets/3D/Floating/chest.obj")),!this.mesh)return[];const s=[];let n=0;for(;s.length<t&&n++<t*300;){const r=e.minX+this.random()*(e.maxX-e.minX),o=e.minZ+this.random()*(e.maxZ-e.minZ),c=r- -(255*Math.sqrt(3)/2),h=o- -191.25,l=this.noise.getValue(c,h,0);if(l<.42||this.chests.some(f=>Math.hypot(f.transform.position.x-r,f.transform.position.z-o)<12))continue;const d=new it(this.renderer,this.material,this.mesh,"Loot Chest"),u=Tt.terrainValue(l)*20*.4;d.transform.position.set(r,i+u,o),d.transform.rotation.set(0,this.random()*Math.PI*2,0),d.transform.scale.set(1,1,1),d.isLootChest=!0,d.opened=!1,d.openProgress=0,d.lootTable=this.lootTable.map(f=>({...f})),d.update=f=>{d.opened||(this.openingChest===d&&Math.hypot(d.transform.position.x-this._playerPosition().x,d.transform.position.z-this._playerPosition().z)<=this.interactionRange?(d.openProgress=Math.min(1,d.openProgress+f/this.openDuration),d.transform.rotation.x=-1.25*d.openProgress,d.openProgress===1&&this._grantLoot(d)):d.openProgress>0&&(d.openProgress=Math.max(0,d.openProgress-f*2.5/this.openDuration),d.transform.rotation.x=-1.25*d.openProgress))},this.scene.push(d),this.chests.push(d),s.push(d)}return s}_playerPosition(){var t;return((t=this.playerCamera)==null?void 0:t.transform.position)||{x:1/0,y:0,z:1/0}}_findNearbyChest(){const t=this._playerPosition();let e=null,i=this.interactionRange;for(const s of this.chests){if(s.opened)continue;const n=Math.hypot(s.transform.position.x-t.x,s.transform.position.z-t.z);n<=i&&(e=s,i=n)}return e}_grantLoot(t){var i;t.opened=!0;const e=t.lootTable.reduce((s,n)=>s+Math.max(0,n.probability||0),0);for(const s of t.lootTable){const n=e>0?s.probability/e:0;if(this.random()>n)continue;const r=Math.max(1,Math.ceil(s.minCount??1)),o=Math.max(r,Math.floor(s.maxCount??r)),c=r+Math.floor(this.random()*(o-r+1));(i=this.inventory)==null||i.addItem(s.item,c)}}update(t){for(const e of this.chests)e.update(t)}dispose(){window.removeEventListener("keydown",this._keyDown),window.removeEventListener("keyup",this._keyUp)}}class Xi extends it{constructor(t,e,i,s){super(t,e,i,s),this.velocity={x:0,y:0,z:0},this.currentDirection={x:1,y:0,z:0},this.speed=0,this.avoidanceRadius=3,this.avoidanceForce=.5}update(t,e,i,s,n){const r={x:e.x*i*this.speed,z:e.z*i*this.speed},o=this.calculateAvoidance(n);this.velocity.x=r.x+o.x,this.velocity.z=r.z+o.z,this.transform.position.x+=this.velocity.x*t,this.transform.position.z+=this.velocity.z*t,this.wrapBounds(s)}calculateAvoidance(t){const e={x:0,z:0};if(!t||!Array.isArray(t))return e;for(let i of t){if(i===this||!i.transform)continue;const s=this.transform.position.x-i.transform.position.x,n=this.transform.position.z-i.transform.position.z,r=s*s+n*n,o=this.avoidanceRadius+(i.avoidanceRadius||1);if(r<o*o&&r>.01){const c=Math.sqrt(r),h=this.avoidanceForce/(c+.1);e.x+=s/c*h,e.z+=n/c*h}}return e}wrapBounds(t){const e=this.transform.position;t.maxX-t.minX,t.maxZ-t.minZ,e.x>t.maxX?e.x=t.minX+(e.x-t.maxX):e.x<t.minX&&(e.x=t.maxX+(e.x-t.minX)),e.z>t.maxZ?e.z=t.minZ+(e.z-t.maxZ):e.z<t.minZ&&(e.z=t.maxZ+(e.z-t.minZ))}}class ji extends it{constructor(t,e,i,s){super(t,e,i,s),this.velocity={x:0,y:0,z:0},this.forwardDirection={x:0,y:0,z:0},this.speed=0,this.heading=0,this.avoidanceRadius=5,this.avoidanceForce=1,this.viewRadius=20,this.maxTurnSpeed=Math.PI*.5,this.targetHeading=Math.random()*Math.PI*2,this.preferredDirection={x:0,y:0,z:1},this.wanderHeading=this.targetHeading,this.steeringInfluence=0,this.boundsBuffer=15,this.centerAttraction=.3,this.cohesionRadius=30,this.separationRadius=8,this.cohesionWeight=.4,this.separationWeight=.4}update(t,e,i){this.updateWandering(t,e),this.updateSteering(i,e);const s=this.speed/10*Math.PI;this.heading=this.lerpAngle(this.heading,this.targetHeading,s*t),this.forwardDirection.x=Math.sin(this.heading),this.forwardDirection.z=Math.cos(this.heading),this.velocity.x=this.forwardDirection.x*this.speed,this.velocity.z=this.forwardDirection.z*this.speed,this.transform.position.x+=this.velocity.x*t,this.transform.position.z+=this.velocity.z*t,this.enforceBounds(e),this.transform.rotation.y=this.heading}updateWandering(t,e){this.steeringInfluence=Math.sin(Q.time*.628)*.5,this.wanderHeading+=(Math.random()-.5)*.001*t}updateSteering(t,e){if(this.isShipNearby(t)){const s=this.calculateAvoidanceHeading(t);this.targetHeading=s}else{const s=this.calculateCenterAttraction(),n=this.calculateCohesion(t),r=this.calculateSeparation(t),o=this.calculateBoundsHeading(e);let c;if(o!==null)c=o;else if(n!==null||r!==null){let h=0,l=0;n!==null&&(h+=Math.sin(n)*this.cohesionWeight,l+=Math.cos(n)*this.cohesionWeight),r!==null&&(h+=Math.sin(r)*this.separationWeight,l+=Math.cos(r)*this.separationWeight),h+=Math.sin(s)*.1,l+=Math.cos(s)*.1,c=Math.atan2(h,l)}else{const h=this.wanderHeading,l=this.steeringInfluence*.2;let d=Math.sin(h+l)*.7,u=Math.cos(h+l)*.7;d+=Math.sin(s)*this.centerAttraction,u+=Math.cos(s)*this.centerAttraction,c=Math.atan2(d,u)}this.targetHeading=c}}isShipNearby(t){if(!t||!Array.isArray(t))return!1;const e=this.viewRadius*1.5;for(let i of t){if(i===this||!i.transform||i.constructor.name!=="Ship")continue;const s=i.transform.position.x-this.transform.position.x,n=i.transform.position.z-this.transform.position.z;if(s*s+n*n<e*e)return!0}return!1}calculateCenterAttraction(){const t=this.transform.position,e={x:-t.x,z:-t.z},i=Math.sqrt(e.x*e.x+e.z*e.z);return i<.1?Math.atan2(0,1):Math.atan2(e.x/i,e.z/i)}calculateCohesion(t){if(!t||!Array.isArray(t))return null;let e=[];const i=this.transform.position;for(let o of t){if(o===this||!o.transform||o.constructor.name!=="Ship")continue;const c=o.transform.position.x-i.x,h=o.transform.position.z-i.z,l=c*c+h*h;l<this.cohesionRadius*this.cohesionRadius&&l>.01&&e.push({dx:c,dz:h,dist:Math.sqrt(l)})}if(e.length===0)return null;let s=0,n=0;for(let o of e)s+=o.dx/o.dist,n+=o.dz/o.dist;s/=e.length,n/=e.length;const r=Math.sqrt(s*s+n*n);return r<.1?null:Math.atan2(s/r,n/r)}calculateSeparation(t){if(!t||!Array.isArray(t))return null;let e={x:0,z:0};const i=this.transform.position;let s=!1;for(let r of t){if(r===this||!r.transform||r.constructor.name!=="Ship")continue;const o=i.x-r.transform.position.x,c=i.z-r.transform.position.z,h=o*o+c*c;if(h<this.separationRadius*this.separationRadius&&h>.01){const l=Math.sqrt(h),d=(this.separationRadius-l)/this.separationRadius;e.x+=o/l*d,e.z+=c/l*d,s=!0}}if(!s)return null;const n=Math.sqrt(e.x*e.x+e.z*e.z);return n<.1?null:Math.atan2(e.x/n,e.z/n)}calculateAvoidanceHeading(t){let e=0,i=0;if(!t||!Array.isArray(t))return Math.atan2(this.forwardDirection.x,this.forwardDirection.z);for(let r of t){if(r===this||!r.transform)continue;const o=r.transform.position.x-this.transform.position.x,c=r.transform.position.z-this.transform.position.z,h=o*o+c*c;if(o*this.forwardDirection.x+c*this.forwardDirection.z<0||h>this.viewRadius*this.viewRadius)continue;const d=this.avoidanceRadius+(r.avoidanceRadius||1);if(h<d*d&&h>.01){const u=Math.sqrt(h),f=this.avoidanceForce/(u+.1);e-=o/u*f,i-=c/u*f}}const s=this.forwardDirection.x*.7+e*.3,n=this.forwardDirection.z*.7+i*.3;return Math.atan2(s,n)}calculateBoundsHeading(t){const e=this.transform.position;let i=0,s=0,n=!1;const r=e.x-t.minX,o=t.maxX-e.x,c=e.z-t.minZ,h=t.maxZ-e.z;return r<this.boundsBuffer&&(i+=(this.boundsBuffer-r)/this.boundsBuffer,n=!0),o<this.boundsBuffer&&(i-=(this.boundsBuffer-o)/this.boundsBuffer,n=!0),c<this.boundsBuffer&&(s+=(this.boundsBuffer-c)/this.boundsBuffer,n=!0),h<this.boundsBuffer&&(s-=(this.boundsBuffer-h)/this.boundsBuffer,n=!0),n&&(i!==0||s!==0)?Math.atan2(i,s):null}enforceBounds(t,e=2){const i=this.transform.position;t.maxX-t.minX,t.maxZ-t.minZ,i.x>t.maxX?i.x=t.minX+(i.x-t.maxX):i.x<t.minX&&(i.x=t.maxX+(i.x-t.minX)),i.z>t.maxZ?i.z=t.minZ+(i.z-t.maxZ):i.z<t.minZ&&(i.z=t.maxZ+(i.z-t.minZ))}lerpAngle(t,e,i){let s=this.normalizeAngle(e-t);return s=Math.max(-i,Math.min(i,s)),t+s}normalizeAngle(t){for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}}class Yi{constructor(t,e,i,s,n=12345){this.gl=t,this.renderer=e,this.material=i,this.scene=s,this.meshCache={},this.seed=n,this.currentState=n;const r=o=>o<=.2;this.models=[{file:"ship-pirate-large.obj",name:"Pirate Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:r},{file:"ship-pirate-medium.obj",name:"Pirate Ship Medium",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:r},{file:"ship-pirate-small.obj",name:"Pirate Ship Small",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1.5,probability:.007,thresholdCallback:r},{file:"ship-large.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:r},{file:"ship-medium.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:r},{file:"ship-small.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:r}],this.loadedMeshCount=0}seededRandom(){this.currentState|=0,this.currentState=this.currentState+1831565813|0;let t=Math.imul(this.currentState^this.currentState>>>15,1|this.currentState);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}setSeed(t){this.seed=t,this.currentState=t}async loadMesh(t){if(this.meshCache[t])return this.meshCache[t];try{const e=await xt.load(this.gl,`./Assets/3D/Floating/${t}`);return this.meshCache[t]=e,this.loadedMeshCount++,e}catch(e){return console.error(`Failed to load ${t}:`,e),null}}getRandomModel(){const t=this.models.reduce((i,s)=>i+(s.probability||0),0);let e=this.seededRandom()*t;for(let i of this.models)if(e-=i.probability||0,e<=0)return i;return this.models[0]}getRandomPosition(t,e,i,s,n){return{x:t+this.seededRandom()*(e-t),y:n,z:i+this.seededRandom()*(s-i)}}getRandomRotation(t){return t==="y-only"?{x:0,y:this.seededRandom()*Math.PI*2,z:0}:t==="3d"?{x:this.seededRandom()*Math.PI*2,y:this.seededRandom()*Math.PI*2,z:this.seededRandom()*Math.PI*2}:{x:0,y:0,z:0}}async spawnRandomObject(t,e=null){const i=e!==null&&e<this.models.length?this.models[e]:this.getRandomModel(),s=await this.loadMesh(i.file);if(!s)return null;const n=`${i.name} [Floating]`;let r;i.type==="ship"||i.type==="boat"?(r=new ji(this.renderer,this.material,s,n),r.speed=0,r.heading=this.seededRandom()*Math.PI*2):(r=new Xi(this.renderer,this.material,s,n),r.speed=.2+this.seededRandom()*.3,r.avoidanceRadius=2),r.transform.position.set(t.x,t.y+(i.yOffset||0),t.z),r.transform.scale.set(i.scale,i.scale,i.scale);const o=this.getRandomRotation(i.rotationMode);return r.transform.rotation.set(o.x,o.y,o.z),this.scene.push(r),r}async spawnMany(t,e,i=-7){const s=[],n=ft;for(let o=0;o<t;o++){let c,h,l;do{c=this.getRandomPosition(e.minX,e.maxX,e.minZ,e.maxZ,i);let u=c.x+255*Math.sqrt(3)/2,f=c.z+255*1.5/2;var r=n.getValue(u,f);h=this.getRandomModel(),l=h.thresholdCallback?h.thresholdCallback(r):!0}while(!l);const d=await this.spawnRandomObject(c,this.models.indexOf(h));d&&s.push(d)}return s}getAvailableModels(){return this.models.map((t,e)=>({index:e,name:t.name,file:t.file,type:t.type,rotationMode:t.rotationMode,yOffset:t.yOffset,probability:t.probability}))}clearAllSpawned(){}}const pe=`precision highp float;\r
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
`,Gi=`precision highp float;\r
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
`,qi=`precision highp float;\r
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
`,Zi=`precision highp float;\r
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
}`,Ki=`precision highp float;\r
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
}`,Qi=`precision highp float;\r
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
}`,Ji=`precision highp float;\r
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
}`,ts=`precision highp float;\r
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
}`,es=`precision highp float;\r
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
}`,is=`precision highp float;\r
#define VERTEXREC\r
\r
uniform float uTime;\r
uniform float uWaveSpeed;\r
uniform float uWaveStrength;\r
uniform float uWaveFrequency;\r
uniform float uWaveHeight;\r
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
    // Root pinning — vertices near y=0 don't move\r
    float heightMask = smoothstep(0.0, uWaveHeight, localPos.y);\r
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
}`,te=`#version 300 es\r
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
`,ee=`#version 300 es\r
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
}`;class ss{constructor(t,e,i,s,n=[],r={}){this.gl=t,this.renderer=e,this.material=i,this.defaultMaterial=i,this.materials=r.materials||{},this.materialResolver=typeof r.materialResolver=="function"?r.materialResolver:null,this.scene=s,this.meshCache={},n&&typeof n=="object"&&!Array.isArray(n)&&(r=n,n=[]),this.collisionWorld=r.collisionWorld||null,this.colliderHandles=[],this.seed=r.seed||12345,this.currentState=this.seed,this.noise=ft,this.threshold=r.threshold??.45;const o=u=>u>=.35,c=u=>u>=.32&&u<=.35,h=u=>u<=.2,l=u=>u>=.3&&u<=.4,d=u=>u>this.threshold;if(this.modelCatalog=[{file:"palm-detailed-straight.obj",name:"Palm Detailed Straight",rotationMode:"y-only",scale:1,scaleRange:[.75,1.1],yOffset:0,probability:.1,thresholdCallback:o,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"palm-detailed-bend.obj",name:"Palm Detailed Bend",rotationMode:"y-only",scale:1,scaleRange:[.75,1.1],yOffset:0,probability:.1,thresholdCallback:o,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"palm-detailed-bend2.obj",name:"Palm Detailed Bend2",rotationMode:"y-only",scale:1,scaleRange:[.75,1.1],yOffset:0,probability:.1,thresholdCallback:o,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"palm-rare.obj",name:"Palm rare",rotationMode:"y-only",scale:1,yOffset:0,scaleRange:[.75,1.1],probability:.01,thresholdCallback:o,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"palm-s.obj",name:"Palm s",rotationMode:"y-only",scale:1,yOffset:0,scaleRange:[.75,1.1],probability:.1,thresholdCallback:c,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"palm-small.obj",name:"Palm small",rotationMode:"y-only",scale:1,yOffset:-.2,scaleRange:[.75,1.1],probability:.1,thresholdCallback:o,materialKey:"TreeWave",collisionRadiusScale:.65},{file:"rocks-a.obj",name:"Rocks A Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.45],yOffset:0,probability:.001,thresholdCallback:h},{file:"rocks-b.obj",name:"Rocks B Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.45],yOffset:0,probability:.001,thresholdCallback:h},{file:"rocks-c.obj",name:"Rocks C Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.5],yOffset:0,probability:.001,thresholdCallback:h},{file:"rocks-sand-a.obj",name:"Rocks Sand A Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:h},{file:"rocks-sand-b.obj",name:"Rocks Sand B Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:h},{file:"rocks-sand-c.obj",name:"Rocks Sand C Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:h},{file:"platform-planks.obj",name:"Platform Planks",rotationMode:"y-only",scale:1,yOffset:0,probability:.07,thresholdCallback:d},{file:"ship-wreck.obj",name:"Ship Wreck",rotationMode:"3d",scale:1,yOffset:-1,probability:.02,thresholdCallback:l},{file:"tower-complete-small.obj",name:"Tower Complete Small",rotationMode:"y-only",scale:1,yOffset:0,probability:.01,thresholdCallback:l},{file:"tower-complete-large.obj",name:"Tower Complete Large",rotationMode:"y-only",scale:1,yOffset:0,probability:.01,thresholdCallback:l},{file:"structure-roof.obj",name:"Structure Roof",rotationMode:"y-only",scale:1,yOffset:0,probability:.01,thresholdCallback:d},{file:"cannon-mobile.obj",name:"Cannon Mobile",rotationMode:"y-only",scale:1,yOffset:0,probability:.05,thresholdCallback:d},{file:"house.obj",name:"House",rotationMode:"y-only",scale:1,yOffset:0,probability:.08,thresholdCallback:d}],!Array.isArray(n)||n.length===0)this.models=this.modelCatalog.map(u=>({...u}));else{const u=new Map(this.modelCatalog.map(f=>[f.file,f]));this.models=n.map(f=>{const g=u.get(f);return g?{...g}:{file:f,name:f.replace(".obj",""),rotationMode:"y-only",scale:1,yOffset:0,probability:1}})}}resolveMaterial(t){if(t.material)return t.material;if(t.materialKey&&this.materials[t.materialKey])return this.materials[t.materialKey];if(this.materialResolver){const e=this.materialResolver(t,this.materials,this.defaultMaterial);if(e)return e}return this.defaultMaterial}setSeed(t){this.seed=t,this.currentState=t}seededRandom(){this.currentState|=0,this.currentState=this.currentState+1831565813|0;let t=Math.imul(this.currentState^this.currentState>>>15,1|this.currentState);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}async loadMesh(t){if(this.meshCache[t])return this.meshCache[t];try{const e=await xt.load(this.gl,`./Assets/3D/Land/${t}`);return this.meshCache[t]=e,e}catch(e){return console.warn(`LandObjectSpawner: failed to load ${t}`,e),null}}getRandomModel(){if(!this.models.length)return null;const t=this.models.reduce((i,s)=>i+(s.probability||0),0);let e=this.seededRandom()*t;for(let i of this.models)if(e-=i.probability||0,e<=0)return i;return this.models[0]}getRandomPosition(t,e,i,s,n=0){return{x:t+this.seededRandom()*(e-t),y:n,z:i+this.seededRandom()*(s-i)}}getRandomRotation(t="y-only"){t||(t="y-only");let e=Array.isArray(t)?t:String(t).split("|").map(s=>s.trim().toLowerCase());if(e.includes("3d")||e.includes("all")||e.includes("x-y-z")||e.includes("xyz"))return{x:this.seededRandom()*Math.PI*.15,y:this.seededRandom()*Math.PI*2,z:this.seededRandom()*Math.PI*.15};const i={x:0,y:0,z:0};for(const s of e)s&&(s.includes("x")&&(i.x=this.seededRandom()*Math.PI*2),s.includes("y")&&(i.y=this.seededRandom()*Math.PI*2),s.includes("z")&&(i.z=this.seededRandom()*Math.PI*2));return i.x===0&&i.y===0&&i.z===0&&(i.y=this.seededRandom()*Math.PI*2),i}async spawnRandomObject(t,e,i=null){const s=i!==null&&i<this.models.length?this.models[i]:this.getRandomModel();if(!s)return null;const n=await this.loadMesh(s.file);if(!n)return null;const r=`${s.name} [Land]`,o=this.resolveMaterial(s),c=new it(this.renderer,o,n,r);let h=t.y+(s.yOffset||0);h+=Tt.terrainValue(e)*20*.4,c.transform.position.set(t.x,h,t.z);let l=s.scale??1;if(Array.isArray(s.scaleRange)&&s.scaleRange.length===2){const u=s.scaleRange[0],f=s.scaleRange[1];l=u+this.seededRandom()*(f-u)}c.transform.scale.set(l,l,l);const d=this.getRandomRotation(s.rotationMode);if(c.transform.rotation.set(d.x,d.y,d.z),this.collisionWorld){const u=this.collisionWorld.addStaticObject(c,{radiusScale:s.collisionRadiusScale??1});u&&(c.collider=u,this.colliderHandles.push(u))}return this.scene.push(c),c}clearCollisionObjects(){if(this.collisionWorld){for(const t of this.colliderHandles)this.collisionWorld.remove(t),t.object&&delete t.object.collider;this.colliderHandles.length=0}}async spawnMany(t,e,i=0){const s=[];if(!this.models.length)return console.warn("LandObjectSpawner.spawnMany: no model files provided"),s;for(let n=0;n<t;n++){let r,o,c,h;do{r=this.getRandomPosition(e.minX,e.maxX,e.minZ,e.maxZ,i);const u=r.x+255*Math.sqrt(3)/2,f=r.z+255*1.5/2;o=this.noise.getValue(u,f,0),c=this.getRandomModel(),h=c.thresholdCallback?c.thresholdCallback(o):!0}while(!h);const l=this.models.indexOf(c),d=await this.spawnRandomObject(r,o,l);d&&s.push(d)}return s}getAvailableModels(){return this.models.map((t,e)=>({index:e,name:t.name,file:t.file,rotationMode:t.rotationMode,yOffset:t.yOffset,probability:t.probability,materialKey:t.materialKey||null}))}}class ns{constructor({maxHp:t=100,startHp:e=null,onDeath:i=null,onDamage:s=null,onHeal:n=null}={}){this.maxHp=t,this.hp=e??t,this.isDead=!1,this._onDeath=i,this._onDamage=s,this._onHeal=n,this._bar=document.getElementById("health-bar-fill"),this._label=document.getElementById("health-bar-label"),this._root=document.getElementById("health-bar-root"),this._render()}takeDamage(t){var e,i;this.isDead||t<=0||(this.hp=Math.max(0,this.hp-t),(e=this._onDamage)==null||e.call(this,t,this.hp,this.maxHp),this._render(),this._flashDamage(),this.hp===0&&!this.isDead&&(this.isDead=!0,(i=this._onDeath)==null||i.call(this)))}heal(t){var i;if(t<=0)return;const e=this.hp;this.hp=Math.min(this.maxHp,this.hp+t),this.hp>e&&(this.isDead&&(this.isDead=!1),(i=this._onHeal)==null||i.call(this,t,this.hp,this.maxHp),this._render())}setHp(t){this.hp=Math.max(0,Math.min(this.maxHp,t)),this.isDead=this.hp===0,this._render()}setMaxHp(t){const e=this.hp/this.maxHp;this.maxHp=Math.max(1,t),this.hp=Math.round(e*this.maxHp),this._render()}_render(){if(!this._bar||!this._label)return;const t=this.hp/this.maxHp;this._bar.style.width=`${t*100}%`,t>.6?this._bar.style.backgroundColor="#7ecf6e":t>.3?this._bar.style.backgroundColor="#e8a040":this._bar.style.backgroundColor="#d94040",this._label.textContent=`${this.hp} / ${this.maxHp}`,this._root&&this._root.classList.toggle("health-critical",t<=.3&&!this.isDead)}_flashDamage(){const t=document.getElementById("damage-flash");t&&(t.classList.remove("damage-flash-active"),t.offsetWidth,t.classList.add("damage-flash-active"))}}class pt{static worldToScreen(t,e){var i={transform:{updateWorldMatrix:function(){},worldMatrix:new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,t.x,t.y,t.z,1])}},s=e.getScreenPosition(i),n=s[0]*window.innerWidth,r=(1-s[1])*window.innerHeight;return s[0]<-1||s[0]>2||s[1]<-1||s[1]>2?null:{sx:n,sy:r}}static spawn(t,e){var i=pt.worldToScreen(t,e);i&&(pt._burst(i.sx,i.sy,{count:12,minSize:10,maxSize:26,minDist:38,maxDist:90,duration:700,shapes:["circle","circle","circle","star","star"],colors:["#f5c842","#f58c42","#f54242","#fff176","#c8f542","#42d4f5"]}),pt._ring(i.sx,i.sy))}static spawnHit(t,e){var i=pt.worldToScreen(t,e);i&&pt._burst(i.sx,i.sy,{count:5,minSize:5,maxSize:13,minDist:18,maxDist:44,duration:380,shapes:["star","circle"],colors:["#ffffff","#ffd84d","#ff8c42"]})}static _burst(t,e,i){for(var s=0;s<i.count;s++){var n=s/i.count*Math.PI*2+Math.random()*.6,r=i.minDist+Math.random()*(i.maxDist-i.minDist),o=i.minSize+Math.random()*(i.maxSize-i.minSize),c=i.colors[Math.floor(Math.random()*i.colors.length)],h=i.shapes[Math.floor(Math.random()*i.shapes.length)],l=Math.random()*60,d=Math.cos(n)*r,u=Math.sin(n)*r-r*.3;pt._makeParticle(t,e,d,u,o,c,h,i.duration,l)}}static _ring(t,e){var i=document.createElement("div");i.className="poof-ring",i.style.left=t+"px",i.style.top=e+"px",document.body.appendChild(i),setTimeout(function(){i.parentNode&&i.parentNode.removeChild(i)},500)}static _makeParticle(t,e,i,s,n,r,o,c,h){var l=document.createElement("div");o==="star"?(l.className="poof-star",l.textContent="★",l.style.fontSize=n+"px",l.style.color=r,l.style.textShadow="1px 1px 0 #1a0a00"):(l.className="poof-dot",l.style.width=n+"px",l.style.height=n+"px",l.style.background=r,l.style.borderRadius="50%",l.style.border="2px solid #1a0a00"),l.style.left=t+"px",l.style.top=e+"px",l.style.setProperty("--tx",i+"px"),l.style.setProperty("--ty",s+"px"),l.style.animationDuration=c+"ms",l.style.animationDelay=h+"ms",document.body.appendChild(l),setTimeout(function(){l.parentNode&&l.parentNode.removeChild(l)},c+h+100)}}var rs=2.2,as=2.2,os=.18,ls=30,Ae=5,hs=7,Fe={wood:{icon:"🪵",color:"#8B5E3C",label:"Wood"},cloth:{icon:"🧵",color:"#D4A0C0",label:"Cloth"},metal:{icon:"⚙",color:"#9BB0C0",label:"Metal"}};class ge{constructor(t,e,i){this.x=t.x+(Math.random()-.5)*1.6,this.y=t.y,this.z=t.z+(Math.random()-.5)*1.6,this.baseY=this.y,this.resource=e,this.amount=i,this._bobTime=Math.random()*Math.PI*2,this._lifetime=ls,this.collected=!1;var s=Fe[e]||Fe.wood;this._el=document.createElement("div"),this._el.className="enemy-drop",this._el.innerHTML='<span class="drop-icon">'+s.icon+'</span><span class="drop-label" style="color:'+s.color+'">'+(i>1?"x"+i+" ":"")+s.label+"</span>",document.body.appendChild(this._el),this._el.classList.add("drop-spawn");var n=this._el;setTimeout(function(){n.classList.remove("drop-spawn")},400)}update(t,e,i,s){if(this.collected)return!0;if(this._lifetime-=t,this._lifetime<=0)return this._remove(),!0;this._bobTime+=as*t,this.y=this.baseY+Math.sin(this._bobTime)*os;var n=e.x-this.x,r=e.z-this.z,o=Math.sqrt(n*n+r*r);if(o<Ae&&o>.01){var c=1-o/Ae,h=hs*c*t;this.x+=n/o*h,this.z+=r/o*h}if(o<rs)return this._collect(s),!0;var l=ge._worldToScreen({x:this.x,y:this.y+.5,z:this.z},i);if(!l)this._el.style.display="none";else{this._el.style.display="",this._el.style.left=l.sx+"px",this._el.style.top=l.sy+"px";var d=this.x-e.x,u=this.z-e.z,f=Math.sqrt(d*d+u*u),g=Math.max(.5,Math.min(1,8/(f+1)));this._el.style.transform="translate(-50%, -50%) scale("+g.toFixed(2)+")";var y=this._lifetime<5?this._lifetime/5:1;this._el.style.opacity=y.toFixed(2)}return!1}_collect(t){this.collected=!0,t&&t.addResource(this.resource,this.amount);var e=this._el;e.classList.add("drop-collect"),setTimeout(function(){e.parentNode&&e.parentNode.removeChild(e)},500)}_remove(){var t=this._el;t.classList.add("drop-expire"),setTimeout(function(){t.parentNode&&t.parentNode.removeChild(t)},400)}static _worldToScreen(t,e){var i=e.viewMatrix,s=e.projectionMatrix,n=i[0]*t.x+i[4]*t.y+i[8]*t.z+i[12],r=i[1]*t.x+i[5]*t.y+i[9]*t.z+i[13],o=i[2]*t.x+i[6]*t.y+i[10]*t.z+i[14],c=i[3]*t.x+i[7]*t.y+i[11]*t.z+i[15];if(o>0)return null;var h=s[0]*n+s[4]*r+s[8]*o+s[12]*c,l=s[1]*n+s[5]*r+s[9]*o+s[13]*c,d=s[3]*n+s[7]*r+s[11]*o+s[15]*c;if(Math.abs(d)<1e-6)return null;var u=h/d,f=-l/d;return u<-1.3||u>1.3||f<-1.3||f>1.3?null:{sx:(u*.5+.5)*window.innerWidth,sy:(f*.5+.5)*window.innerHeight}}}var Pe=["wood","wood","wood","cloth","cloth","metal"],cs=-(255*Math.sqrt(3)/2),ds=-191.25,us=.4,fs=-7,ms=.35;function Pt(a,t){var e=a-cs,i=t-ds,s=ft.getValue(e,i,0),n=(s<=.3?20/255:.4+s)*20*us-11;return n<=fs+ms?null:n}var ps=Math.PI*1.8,Yt=1.5,ke=4,gs=Math.PI*.6,De=3.5,vs=.55,Be=2.2,Le=90,ys=Le*Le,xs=14,ze=35,ws=ze*ze,bs=4,Ie=1.2,_s=18,Oe=.18,Cs=1.35;class Ms extends it{constructor(t,e,i,s,n){s===void 0&&(s="Enemy"),n===void 0&&(n={}),super(t,e,i,s),this.maxHp=n.maxHp!==void 0?n.maxHp:50,this.hp=this.maxHp,this.damage=n.damage!==void 0?n.damage:10,this.moveSpeed=n.moveSpeed!==void 0?n.moveSpeed:3.2,this.chaseSpeed=n.chaseSpeed!==void 0?n.chaseSpeed:4.5,this.detectionRange=n.detectionRange!==void 0?n.detectionRange:xs,this.attackRange=n.attackRange!==void 0?n.attackRange:1.8,this.hitRadius=n.hitRadius!==void 0?n.hitRadius:2,this.state="wander",this.isDead=!1,this._stateTime=0,this.heading=Math.random()*Math.PI*2,this._targetHeading=this.heading,this._wanderTimer=Yt+Math.random()*(ke-Yt),this._knockbackX=0,this._knockbackZ=0,this._hitFlashTimer=0,this._baseScaleX=null,this._baseScaleY=null,this._baseScaleZ=null,this._giveUpTimer=0,this._attackTimer=0,this.collider=null,this.groupId=-1,this._lastContext=null}takeDamage(t,e,i){if(this.isDead)return 0;var s=this.hp;this.hp=Math.max(0,this.hp-t);var n=s-this.hp;if(e){var r=this.transform.position.x-e.x,o=this.transform.position.z-e.z,c=Math.sqrt(r*r+o*o);c<.001&&(r=1,o=0,c=1);var h=Math.min(t*.55,_s);this._knockbackX=r/c*h,this._knockbackZ=o/c*h}return this._hitFlashTimer=Oe,this.state==="wander"&&this._setState("chase"),this._giveUpTimer=0,this.hp===0&&this._die(i,this._lastContext),n}update(t,e){if(e===void 0&&(e={}),!this.isDead){this._lastContext=e,this._baseScaleX===null&&(this._baseScaleX=this.transform.scale.x,this._baseScaleY=this.transform.scale.y,this._baseScaleZ=this.transform.scale.z);var i=e.playerPosition;if(i){var s=this.transform.position.x-i.x,n=this.transform.position.z-i.z;if(s*s+n*n>ys){this.state!=="wander"&&this._setState("wander");return}}if(this._stateTime+=t,this._hitFlashTimer>0){this._hitFlashTimer-=t,this._hitFlashTimer<0&&(this._hitFlashTimer=0);var r=1-this._hitFlashTimer/Oe,o=1+(Cs-1)*Math.sin(r*Math.PI);this.transform.scale.set(this._baseScaleX*o,this._baseScaleY*o,this._baseScaleZ*o)}else this.transform.scale.set(this._baseScaleX,this._baseScaleY,this._baseScaleZ);var c=Math.abs(this._knockbackX)>.01||Math.abs(this._knockbackZ)>.01;if(c){var h=Math.exp(-8*t);this._knockbackX*=h,this._knockbackZ*=h;var l=this.transform.position,d=l.x+this._knockbackX*t,u=l.z+this._knockbackZ*t,f=Pt(d,l.z);f!==null&&(l.x=d);var g=Pt(l.x,u);g!==null&&(l.z=u);var y=Pt(l.x,l.z);y!==null&&(l.y=y),this.collider&&e.collisionWorld&&e.collisionWorld.update(this.collider,l.x,l.y,l.z)}this.state==="wander"?this._updateWander(t,e):this.state==="chase"?this._updateChase(t,e):this.state==="attack"&&this._updateAttack(t,e),this.collider&&e.collisionWorld&&e.collisionWorld.update(this.collider,this.transform.position.x,this.transform.position.y,this.transform.position.z)}}_updateWander(t,e){var i=e.playerPosition;if(i){var s=i.x-this.transform.position.x,n=i.z-this.transform.position.z;if(s*s+n*n<=this.detectionRange*this.detectionRange){this._setState("chase");return}}this._wanderTimer-=t,this._wanderTimer<=0&&(this._wanderTimer=Yt+Math.random()*(ke-Yt),this._targetHeading=this.heading+(Math.random()-.5)*2*gs),this._moveForward(t,this.moveSpeed,e)}_updateChase(t,e){var i=e.playerPosition;if(!i){this._setState("wander");return}var s=i.x-this.transform.position.x,n=i.z-this.transform.position.z,r=s*s+n*n;if(r>ws){if(this._giveUpTimer+=t,this._giveUpTimer>=bs){this._giveUpTimer=0,this._setState("wander");return}}else this._giveUpTimer=0;if(r<=this.attackRange*this.attackRange){this._setState("attack");return}this._targetHeading=Math.atan2(s,n),this._moveForward(t,this.chaseSpeed,e)}_updateAttack(t,e){var i=e.playerPosition;if(!i){this._setState("wander");return}var s=i.x-this.transform.position.x,n=i.z-this.transform.position.z,r=s*s+n*n;if(r>this.attackRange*this.attackRange*1.6){this._setState("chase");return}this._targetHeading=Math.atan2(s,n),this._smoothTurn(t),this.transform.rotation.y=this.heading,this._attackTimer+=t,this._attackTimer>=Ie&&(this._attackTimer=0,e.playerHealth&&e.playerHealth.takeDamage(this.damage))}_moveForward(t,e,i){this._smoothTurn(t);var s=this.transform.position,n=e*t,r=Math.sin(this.heading)*n,o=Math.cos(this.heading)*n,c=s.x,h=s.z,l=Pt(s.x+r,s.z);l!==null&&Math.abs(l-s.y)<=De?c=s.x+r:this._targetHeading=this.heading+Math.PI*(.4+Math.random()*.4);var d=Pt(c,s.z+o);if(d!==null&&Math.abs(d-s.y)<=De?h=s.z+o:this._targetHeading=this.heading+Math.PI*(.4+Math.random()*.4),i.collisionWorld&&this.collider){var u=s.y-Be*.5,f=s.y+Be,g=i.collisionWorld.resolveCircle(c,h,vs,{minY:u,maxY:f,layerMask:ht.WORLD|ht.NPC,actorLayer:ht.NPC,exclude:this.collider});c=g.x,h=g.z}s.x=c,s.z=h;var y=Pt(s.x,s.z);y!==null&&(s.y=y),this.transform.rotation.y=this.heading}_smoothTurn(t){var e=this._normalizeAngle(this._targetHeading-this.heading),i=ps*t;e>i&&(e=i),e<-i&&(e=-i),this.heading+=e}_normalizeAngle(t){for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}_setState(t){this.state!==t&&(this.state=t,this._stateTime=0,t==="attack"&&(this._attackTimer=Ie),t==="wander"&&(this._giveUpTimer=0))}_die(t,e){if(this.isDead=!0,this.state="dead",this.active=!1,t){var i={x:this.transform.position.x,y:this.transform.position.y+1,z:this.transform.position.z};pt.spawn(i,t)}for(var s=1+Math.floor(Math.random()*3),n={x:this.transform.position.x,y:this.transform.position.y,z:this.transform.position.z},r=0;r<s;r++){var o=Pe[Math.floor(Math.random()*Pe.length)],c=new ge(n,o,1);e&&e.drops&&e.drops.push(c)}}}var Xe=-(255*Math.sqrt(3)/2),je=-191.25,Es=.4,Ts=-7,Ss=.35,We=2,Rs=5,As=5,ce=3,Fs=.55,Ps=2.2;function Ne(a,t){var e=a-Xe,i=t-je,s=ft.getValue(e,i,0),n=(s<=.3?20/255:.4+s)*20*Es-11;return n<=Ts+Ss?null:n}class ks{constructor(t,e,i,s,n){n===void 0&&(n={}),this.gl=t,this.renderer=e,this.material=i,this.scene=s,this.seed=n.seed!==void 0?n.seed:99999,this.currentState=this.seed,this.minNoiseValue=n.minNoiseValue!==void 0?n.minNoiseValue:.42,this.collisionWorld=n.collisionWorld!==void 0?n.collisionWorld:null,this.enemyDefaults=n.enemyDefaults!==void 0?n.enemyDefaults:{maxHp:50,damage:10,moveSpeed:3.2,chaseSpeed:4.5,detectionRange:14,attackRange:1.8},this._mesh=null,this.enemies=[],this._colliders=[]}setSeed(t){this.seed=t,this.currentState=t}_rand(){this.currentState|=0,this.currentState=this.currentState+1831565813|0;var t=Math.imul(this.currentState^this.currentState>>>15,1|this.currentState);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}async _loadMesh(){if(this._mesh)return this._mesh;try{this._mesh=await xt.load(this.gl,"./Assets/Characters/character-male-b.obj")}catch(t){console.error("[EnemySpawner] Failed to load character-male-b.obj:",t)}return this._mesh}_sampleLandPosition(t,e){e===void 0&&(e=500);for(var i=0;i<e;i++){var s=t.minX+this._rand()*(t.maxX-t.minX),n=t.minZ+this._rand()*(t.maxZ-t.minZ),r=s-Xe,o=n-je,c=ft.getValue(r,o,0);if(!(c<this.minNoiseValue)){var h=Ne(s,n);if(h!==null)return{x:s,z:n,y:h}}}return null}async spawnGroups(t,e){var i=await this._loadMesh();if(!i)return console.error("[EnemySpawner] Cannot spawn — mesh failed to load."),[];for(var s=[],n=this.enemies.length,r=0;r<t;r++){var o=this._sampleLandPosition(e);if(!o){console.warn("[EnemySpawner] Group "+r+": no valid anchor — skipping.");continue}for(var c=We+Math.floor(this._rand()*(Rs-We+1)),h=0;h<c;h++){for(var l=o.x,d=o.z,u=o.y,f=0;f<40;f++){var g=this._rand()*Math.PI*2,y=this._rand()*As,x=o.x+Math.cos(g)*y,p=o.z+Math.sin(g)*y,b=Ne(x,p);if(b!==null){l=x,d=p,u=b;break}}var _={maxHp:this.enemyDefaults.maxHp,damage:this.enemyDefaults.damage,moveSpeed:this.enemyDefaults.moveSpeed,chaseSpeed:this.enemyDefaults.chaseSpeed,detectionRange:this.enemyDefaults.detectionRange,attackRange:this.enemyDefaults.attackRange},T=new Ms(this.renderer,this.material,i,"Enemy_"+n+" [Enemy]",_);n++,T.transform.position.set(l,u,d),T.transform.scale.set(ce,ce,ce);var A=this._rand()*Math.PI*2;if(T.heading=A,T._targetHeading=A,T.transform.rotation.set(0,A,0),T.groupId=r,this.collisionWorld){var M=this.collisionWorld.addCircle({object:T,x:l,y:u,z:d,radius:Fs,minY:u,maxY:u+Ps,layer:ht.NPC,mask:ht.WORLD|ht.NPC|ht.PLAYER,isStatic:!1});T.collider=M,this._colliders.push(M)}this.scene.push(T),this.enemies.push(T),s.push(T)}}return console.log("[EnemySpawner] Spawned "+s.length+" enemies in "+t+" groups."),s}async spawnMany(t,e){return this.spawnGroups(t,e)}clearAll(){for(var t=0;t<this.enemies.length;t++){var e=this.scene.indexOf(this.enemies[t]);e!==-1&&this.scene.splice(e,1)}if(this.collisionWorld)for(var i=0;i<this._colliders.length;i++)this.collisionWorld.remove(this._colliders[i]);this.enemies.length=0,this._colliders.length=0}}class Ds{constructor(){this._counts={wood:0,cloth:0,metal:0},this._listeners=[],this._els={wood:document.getElementById("res-wood-count"),cloth:document.getElementById("res-cloth-count"),metal:document.getElementById("res-metal-count")},this._render()}addResource(t,e){!(t in this._counts)||e<=0||(this._counts[t]+=e,this._render(),this._flashCount(t),this._notify(t,e))}get(t){return this._counts[t]||0}getAll(){return{wood:this._counts.wood,cloth:this._counts.cloth,metal:this._counts.metal}}total(){return this._counts.wood+this._counts.cloth+this._counts.metal}reset(){this._counts.wood=0,this._counts.cloth=0,this._counts.metal=0,this._render()}onChange(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(function(e){return e!==t})}}_render(){for(var t in this._counts){var e=this._els[t];e&&(e.textContent=this._counts[t])}}_flashCount(t){var e=this._els[t];if(e){e.classList.remove("res-pop"),e.offsetWidth,e.classList.add("res-pop");var i=e;setTimeout(function(){i.classList.remove("res-pop")},500)}}_notify(t,e){for(var i=this.getAll(),s=0;s<this._listeners.length;s++)this._listeners[s](t,e,i)}}class Bs{constructor(t){if(t||(t={}),this._onRestart=t.onRestart||null,this._root=document.getElementById("death-screen"),this._statsEl=document.getElementById("death-stats"),this._btn=document.getElementById("death-restart-btn"),this._titleEl=document.getElementById("death-title"),this._visible=!1,this._btn){var e=this;this._btn.addEventListener("click",function(){e._restart()})}}show(t){if(!this._visible){if(this._visible=!0,this._statsEl){var e=t||{wood:0,cloth:0,metal:0},i=e.wood+e.cloth+e.metal;this._statsEl.innerHTML='<div class="ds-stat"><span class="ds-stat-icon">🪵</span><span class="ds-stat-label">Wood</span><span class="ds-stat-value">'+e.wood+'</span></div><div class="ds-stat"><span class="ds-stat-icon">🧵</span><span class="ds-stat-label">Cloth</span><span class="ds-stat-value">'+e.cloth+'</span></div><div class="ds-stat"><span class="ds-stat-icon">⚙</span><span class="ds-stat-label">Metal</span><span class="ds-stat-value">'+e.metal+'</span></div><div class="ds-stat ds-stat-total"><span class="ds-stat-icon">📦</span><span class="ds-stat-label">Total</span><span class="ds-stat-value">'+i+"</span></div>"}if(this._root&&(this._root.classList.remove("death-hidden"),this._root.classList.add("death-visible")),this._titleEl){for(var s="YOU DIED",n="",r=0;r<s.length;r++){var o=s[r]===" "?"&nbsp;":s[r];n+='<span class="ds-letter" style="animation-delay:'+r*.07+'s">'+o+"</span>"}this._titleEl.innerHTML=n}document.exitPointerLock&&document.exitPointerLock()}}hide(){this._visible&&(this._visible=!1,this._root&&(this._root.classList.remove("death-visible"),this._root.classList.add("death-hidden")))}_restart(){var t=Math.floor(Math.random()*1e6);this.hide(),this._onRestart&&this._onRestart(t)}}class Ls{constructor(){this._ctx=null,this._buffers={walk:null,sword:null,eat:null},this._paths={walk:"./Assets/Audio/Walking sound.mp3",sword:"./Assets/Audio/Sword sound.mp3",eat:"./Assets/Audio/Eating sound.mp3"},this._gains={walk:.55,sword:.8,eat:.7},this._pitchRange={walk:2,sword:3,eat:4},this._walkSource=null,this._walkGain=null,this._wasWalking=!1,this._ambient=this._makeHtml("./Assets/Audio/Ocean Waves and Seagulls Sound.mp3",{loop:!0,volume:.35}),this._music=this._makeHtml("./Assets/Audio/Background music.mp3",{loop:!0,volume:.28}),this._death=this._makeHtml("./Assets/Audio/Death Sound.mp3",{loop:!1,volume:1}),this._startOnInteraction()}update(t){t&&!this._wasWalking?this._playWalkLoop():!t&&this._wasWalking&&this._stopWalkLoop(),this._wasWalking=t}playSword(){this._playPitched("sword")}playEat(){this._playPitched("eat")}playDeath(){this._stopWalkLoop(),this._wasWalking=!1,this._ambient.pause(),this._music.pause(),this._death.currentTime=0,this._death.play().catch(()=>{});const t=this;setTimeout(function(){t._ambient.play().catch(()=>{}),t._music.play().catch(()=>{})},3e3)}_getCtx(){return this._ctx||(this._ctx=new(window.AudioContext||window.webkitAudioContext)),this._ctx.state==="suspended"&&this._ctx.resume(),this._ctx}async _getBuffer(t){if(this._buffers[t])return this._buffers[t];const e=this._getCtx(),s=await(await fetch(this._paths[t])).arrayBuffer(),n=await e.decodeAudioData(s);return this._buffers[t]=n,n}async _playPitched(t){const e=this._getCtx(),i=await this._getBuffer(t),s=e.createBufferSource();s.buffer=i;const n=this._pitchRange[t],r=(Math.random()*2-1)*n;s.playbackRate.value=Math.pow(2,r/12);const o=e.createGain();o.gain.value=this._gains[t],s.connect(o),o.connect(e.destination),s.start(0)}async _playWalkLoop(){const t=this._getCtx(),e=await this._getBuffer("walk");this._stopWalkLoop();const i=t.createBufferSource();i.buffer=e,i.loop=!0;const s=this._pitchRange.walk,n=(Math.random()*2-1)*s;i.playbackRate.value=Math.pow(2,n/12);const r=t.createGain();r.gain.value=this._gains.walk,i.connect(r),r.connect(t.destination),i.start(0),this._walkSource=i,this._walkGain=r}_stopWalkLoop(){if(this._walkSource){try{this._walkSource.stop()}catch{}this._walkSource.disconnect(),this._walkSource=null}this._walkGain&&(this._walkGain.disconnect(),this._walkGain=null)}_makeHtml(t,{loop:e=!1,volume:i=1}={}){const s=new Audio(t);return s.loop=e,s.volume=i,s}_startOnInteraction(){const t=this,e=function(){t._ctx&&t._ctx.resume(),t._ambient.play().catch(()=>{}),t._music.play().catch(()=>{}),window.removeEventListener("click",e),window.removeEventListener("keydown",e)};window.addEventListener("click",e,{once:!0}),window.addEventListener("keydown",e,{once:!0})}}const lt=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),X=document.getElementById("glcanvas"),P=X.getContext("webgl2")||X.getContext("experimental-webgl");P||alert("Unable to initialize WebGL.");P.enable(P.DEPTH_TEST);P.depthFunc(P.LEQUAL);P.enable(P.CULL_FACE);P.cullFace(P.BACK);P.frontFace(P.CCW);P.getExtension("EXT_color_buffer_float");let ie=new Qt(P,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",minFilter:P.NEAREST,magFilter:P.NEAREST}),Dt=new Qt(P,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",depth:!0,minFilter:P.NEAREST,magFilter:P.NEAREST}),$t=new Qt(P,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:P.NEAREST,magFilter:P.NEAREST}),Ut=new Qt(P,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:P.NEAREST,magFilter:P.NEAREST});const se=new ut(P,te,ee),zs=new ut(P,[es,te],ee),Ye=new ut(P,[is,te],ee),Is=new ut(P,pe,Gi),Os=new ut(P,[Ji,te],[ts,ee]),Ws=new ut(P,qi,Zi),Ns=new ut(P,pe,Ki),Hs=new ut(P,pe,Qi),Vt=new Ht(P,"./Assets/Textures/colormap.png"),$s=new Ht(P,"./Assets/Textures/island.png");new Ht(P,"./Assets/Textures/T_Colobus.png");const ne=new nt(se,"Scene Mat"),re=new nt(se,"Scene Plane"),ae=new nt(Ye,"Tree Wave"),ve=new nt(Ye,"Grass Wave"),Bt=new nt(zs,"Ship Mat"),At=new nt(Os,"Water"),kt=new nt(Ws,"PPL Lighting"),gt=new nt(Ns,"Skybox"),ye=new nt(Hs,"PixelArt"),Us=new nt(Is,"Screen");Bt.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:Vt.texture,uRoughness:1,uSampleRadius:.25});ne.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:Vt.texture,uRoughness:1});ae.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:Vt.texture,uRoughness:1,uTime:0,uWaveSpeed:.5,uWaveStrength:.7,uWaveFrequency:100,uWaveHeight:7,uWindDir:[1,.5]});ve.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:Vt.texture,uRoughness:1,uTime:0,uWaveSpeed:1,uWaveStrength:.7,uWaveFrequency:1,uWaveHeight:1,uWindDir:[1,.5]});re.setUniforms({uColor:[1,1,1,1],uHasTexture:0,uMainTex:$s.texture,uRoughness:1});ye.setUniforms({uPixelSize:1,uEdgeWidth:1,uColorLevels:128,uEdgeDistance:1,uCurvature:2,uDepthThreshold:.01,uNormalThreshold:.3,uSilhouetteDarkening:.2,uCreaseDarkening:.7});kt.setUniforms({uLightDir:[1,.2,10],uLightColor:[1,.8,.75],uAmbient:.5,uSpecularStrength:.3,uShininess:.03,uShadowColor:[.21,.094,.09]});gt.setUniforms({uTopColor:[.133,.137,.251],uMidColor:[.749,.286,.369],uBottomColor:[.996,.431,.243],uSunColor:[.894,.514,.384],uCloudScale:5.4,uCloudThreshold:.01,uCloudDensity:.5,uCloudCoverage:.8,uCloudSpeed:.35,uCloudMainColor:[1,.49,.37],uCloudShadeColor:[.9,.35,.25]});const Ge={uWind:[1,1],uSpeed:.5,udisplacement:1.5,uScale:1,uBuoyancyRotation:.3,uColor1:[.09,.271,.49],uColor2:[.192,.404,.624],uColor3:[.8,.8,1],uColor1Smoothstep:[0,.5],uColor2Smoothstep:[0,2],uWaveA:[-.35,.7,.13,3.92],uWaveB:[-.95,.51,.1,2.25],uWaveC:[-.4,-2,.1,13.5],uColorBands:3,uRoughness:0,uDepthThreshold:.5,uFoamIntensity:1};Bt.setUniforms(Ge);At.setUniforms(Ge);Bt.setUniforms({uRoughness:1});const Vs={Lighting:kt,Skybox:gt,PixelArt:ye,Water:At,Buoyancy:Bt,TreeWave:ae,GrassWave:ve,planeTer:re},et=new ei(P),j=new $e,J=[],at=new ni(P),Lt=new ri({cellSize:16,defaultLayer:ht.WORLD}),xe=new Ue(P,X.width,X.height,Dt,1,"GBuffer Pass");xe.clearColor=[.5,.5,1,1];xe.clearDepth=!0;at.addPass(xe);const we=new Ue(P,X.width,X.height,ie,0,"Albedo Pass");we.clearColor=[0,0,0,1];we.clearDepth=!0;at.addPass(we);const oe=new hi(P,X.width,X.height,kt,Ut,"Lighting Pass");oe.setInputBuffers(ie.texture,Dt.texture);oe.lightDir=new St(0);at.addPass(oe);const be=new ci(P,X.width,X.height,gt,Ut,"Skybox Pass");be.setInputTexture(Dt.texture);at.addPass(be);const qe=new di(P,X.width,X.height,ye,$t,"PixelArt Pass");qe.setInputBuffers(Ut.texture,Dt.texture);at.addPass(qe);const It=new mi(P,X.width,X.height,$t,"Wireframe Pass");lt||(It.setWireColor(0,1,0),It.setOpacity(1),at.addPass(It));const Ct=new li(P,X.width,X.height,Us);Ct.setBuffer("Final",$t.texture);Ct.setBuffer("Pixel",$t.texture);Ct.setBuffer("Lit",Ut.texture);Ct.setBuffer("Albedo",ie.texture);Ct.setBuffer("Gbuffer",Dt.texture);at.addPass(Ct);function Ze(){X.width=window.innerWidth,X.height=window.innerHeight;const a=1,t=Math.floor(X.width*a),e=Math.floor(X.height*a);P.viewport(0,0,t,e),ie.resize(t,e),Dt.resize(t,e),Ut.resize(t,e),$t.resize(t,e),at.resize(t,e);const i=X.width/X.height;j.setPerspective(75*Math.PI/180,i,.1,1e3)}window.addEventListener("resize",Ze);Ze();const Xs=X.width/X.height;j.setPerspective(75*Math.PI/180,Xs,.1,1e3);j.transform.position.set(-39.2,1.8,-47);j.transform.rotation.set(0,lt?3.24:3.22,0);let vt=new it(et,re,new Tt(P,255,255,1,!0),"Scense");vt.transform.position.set(-(255*Math.sqrt(3)/2),-11,-191.25);vt.transform.scale.set(1,.4,1);J.push(vt);const Ft=new Yi(P,et,Bt,J),qt=new Vi(P,et,ne,J,null,{camera:j,seed:68,lootTable:[{item:"food",probability:1,minCount:2,maxCount:5}]}),Et=new ss(P,et,ne,J,[],{threshold:.425,collisionWorld:Lt,materials:{TreeWave:ae}}),js={direction:{x:.207,y:0,z:-.707},speed:0},Y={enabled:!0,count:10,seed:68,bounds:{minX:-(255*Math.sqrt(3)/2),maxX:255*Math.sqrt(3)/2,minZ:-191.25,maxZ:255*1.5/2},yFixed:-6.25};let Zt=[],Kt=[];function Ys(a){let t=a>>>0;return function(){t+=1831565813;let e=Math.imul(t^t>>>15,1|t);return e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}}function Gs(){if(vt){const a=J.indexOf(vt);a>=0&&J.splice(a,1)}vt=new it(et,re,new Tt(P,255,255,1,!0),"Scense"),vt.transform.position.set(-(255*Math.sqrt(3)/2),-11,-191.25),vt.transform.scale.set(1,.4,1),J.push(vt)}Y.enabled&&(Ft.setSeed(Y.seed),Ft.spawnMany(Y.count,Y.bounds,Y.yFixed).then(a=>{Zt=a,console.log(`Spawned ${a.length} floating objects with seed ${Y.seed}`)}),Et.setSeed(Y.seed),Et.spawnMany(320,Y.bounds,-11).then(a=>{Kt=a,console.log(`Spawned ${a.length} land objects with seed ${Y.seed}`)}),qt.setSeed(Y.seed^5370206),qt.spawnMany(16,Y.bounds,-11).then(a=>{console.log(`Spawned ${a.length} loot chests`)}));let qs=new Tt(P,255,255,1);const _e=new it(et,At,qs,"Water Floor [0,0]");_e.transform.position.set(-(255*Math.sqrt(3)/2),-6.5,-191.25);_e.transform.scale.set(1,1,1);J.push(_e);Promise.all([xt.load(P,"./Assets/3D/LOD1.obj"),xt.load(P,"./Assets/3D/LOD2.obj"),xt.load(P,"./Assets/3D/LOD3.obj")]).then(([a,t,e])=>{const o=lt?1:0,c=lt?-1:3,h=lt?t:a,l=lt?"LOD2":"LOD1",d=new it(et,At,h,`Water Floor [0,0] ${l}`);if(d.transform.position.set(-(255*Math.sqrt(3)/2),-6.5-.5,-191.25),d.transform.scale.set(1,1,1),J.push(d),lt)for(let u=0;u<=5;u++)for(let f=-u;f<=u;f++){if(f===0&&u===0)continue;const g=new it(et,At,e,`Water Floor [${f},${u}] LOD3`);d.transform.add(g.transform),g.transform.setGlobalPosition(f*80,-6.5-.5,u*80),g.transform.scale.set(50,50,50)}else for(let u=-5;u<=5;u++)for(let f=-5;f<=5;f++){if(u===0&&f===0)continue;const g=Math.sqrt(u*u+f*f),y=g<=o?a:g<=c?t:e,x=g<=o?1:g<=c?2:3,p=new it(et,At,y,`Water Floor [${u},${f}] LOD${x}`);d.transform.add(p.transform),p.transform.setGlobalPosition(u*80,-6.5,f*80),p.transform.scale.set(50,50,50)}});const Ce=[{x:0,y:0,w:1,h:1,pass:"Final"}];Ct.setViewports(Ce);const H={gl:P,scene:J,camera:j,renderer:et,renderQueue:at,materials:Vs,viewportPass:Ct,wireframePass:It,floatingSpawner:Ft,landSpawner:Et,collisionWorld:Lt,floatingSpawnConfig:Y,textures:{ship:Vt}};H.setViewports=a=>{Ce[0].pass=a};H.spawnFloatingObjects=async a=>{const t=await Ft.spawnMany(a,Y.bounds,Y.yFixed);return console.log(`Spawned ${t.length} additional floating objects`),t};H.spawnLandObjects=async a=>{const t=await Et.spawnMany(a,Y.bounds,-11);return console.log(`Spawned ${t.length} additional land objects`),t};H.respawnWithSeed=a=>{Et.clearCollisionObjects();const t=J.filter(o=>!o.name||!o.name.includes("[Floating]")&&!o.name.includes("[Land]"));J.length=0,J.push(...t),Zt=[],Kt=[],Ft.setSeed(a),Et.setSeed(a),Y.seed=a;const e=Ys(a),i=32e3,s=(e()-.5)*i,n=(e()-.5)*i;ft.setOffsets(s,n),Gs();const r=Ft.spawnMany(Y.count,Y.bounds,Y.yFixed);return Zt=r,Kt=Et.spawnMany(320,Y.bounds,-11),console.log(`Respawned with seed ${a}: ${r.length} objects`),r};let Rt=null;if(!lt){const a=new Ii(H);H.editor=a,Rt=gi.attach(at,et,H),H.profiler=Rt}const le=new Ds;H.resourceTracker=le;const Ke=new Bs({onRestart:a=>{wt.setHp(wt.maxHp),le.reset();for(let t=0;t<yt.length;t++)yt[t]._remove&&yt[t]._remove();yt.length=0,typeof H.respawnWithSeed=="function"&&H.respawnWithSeed(a),Ot.clearAll(),ct.length=0,Ot.setSeed(a^57005),Ot.spawnGroups(3,Y.bounds).then(t=>{for(let e=0;e<t.length;e++)ct.push(t[e]);H.enemies=ct})}});H.deathScreen=Ke;const Xt=new Ls;H.audio=Xt;const wt=new ns({maxHp:100,onDeath:()=>{Xt.playDeath(),Ke.show(le.getAll())},onDamage:(a,t,e)=>{console.log(`Player took ${a} damage — ${t}/${e} HP remaining.`)}});H.playerHealth=wt;H.player={name:"Player",health:wt,takeDamage:a=>wt.takeDamage(a),heal:a=>wt.heal(a)};H.damagePlayer=a=>wt.takeDamage(a);H.healPlayer=a=>wt.heal(a);const Ot=new ks(P,et,ne,J,{seed:Y.seed,minNoiseValue:.42,collisionWorld:Lt});let ct=[];const yt=[];Ot.spawnGroups(3,Y.bounds).then(a=>{ct=a,H.enemies=ct,console.log(`[Enemies] Spawned ${a.length} enemies in 3 groups.`)});H.enemySpawner=Ot;H.enemies=ct;window.game=H;window.floatingSpawner=Ft;window.landSpawner=Et;window.collisionWorld=Lt;window.oceanConfig=js;window.floatingObjects=Zt;window.landObjects=Kt;window.floatingSpawnConfig=Y;const Nt=new Hi(j,X,{collisionWorld:Lt,collisionLayerMask:ht.WORLD,collisionActorLayer:ht.PLAYER});H.cameraController=Nt;const bt=new $i(P,et,se,j,J,{controller:Nt,inputElement:X,onEatFood:a=>H.healPlayer(a),attackDamage:25,attackReach:3.2,attackRadius:.9});H.firstPersonHand=bt;H.attack=()=>bt.attack();const Zs=bt.applyDamage.bind(bt);bt.applyDamage=function(a,t){if(t===void 0&&(t=bt.settings.attackDamage),a&&typeof a.takeDamage=="function"&&a.hitRadius!==void 0){const e=a.takeDamage(t,j.transform.position,j);return e>0&&!a.isDead&&pt.spawnHit(a.transform.position,j),typeof e=="number"?e:t}return Zs(a,t)};const rt=new Ui(P,et,se,j,J,{hand:bt,controller:Nt});qt.inventory=rt;bt.inventory=rt;H.inventory=rt;H.player.inventory=rt;const Ks=rt.attackSelected.bind(rt);rt.attackSelected=function(a){const t=Ks(a);return t&&Xt.playSword(),t};const Qs=rt.startEating.bind(rt);rt.startEating=function(){const a=Qs();return a&&Xt.playEat(),a};window.addEventListener("keydown",a=>{const t=a.key.toLowerCase();if(t==="t"&&It.toggle(),t==="r"){const e=Math.floor(Math.random()*1e6);typeof H.respawnWithSeed=="function"&&H.respawnWithSeed(e);try{if(H.editor&&H.editor.windows&&H.editor.windows.world){const i=H.editor.windows.world;i&&i.state&&(i.state.seed=e,i.seedController&&typeof i.seedController.updateDisplay=="function"&&i.seedController.updateDisplay())}}catch(i){console.warn("Failed to update WorldWindow seed UI",i)}}});const ot=[.5,.8,.2];let de=0,He="";const Me=P.createBuffer();P.bindBuffer(P.UNIFORM_BUFFER,Me);P.bufferData(P.UNIFORM_BUFFER,140,P.DYNAMIC_DRAW);P.bindBufferBase(P.UNIFORM_BUFFER,0,Me);function Qe(a){if(Q.update(a),H.deltaTime=Q.deltaTime,Nt.update(Q.deltaTime),bt.update(Q.deltaTime),rt.update(Q.deltaTime),qt.update(Q.deltaTime),Xt.update(Nt.isWalking),ct.length>0){const i={playerPosition:j.transform.position,allEnemies:ct,playerHealth:wt,collisionWorld:Lt,camera:j,drops:yt};for(let s=0;s<ct.length;s++)ct[s].update(Q.deltaTime,i)}if(yt.length>0){const e=j.transform.position;for(let i=yt.length-1;i>=0;i--)yt[i].update(Q.deltaTime,e,j,le)&&yt.splice(i,1)}if(At.setUniforms({uTime:Q.time}),Bt.setUniforms({uTime:Q.time}),ae.setUniforms({uTime:Q.time}),ve.setUniforms({uTime:Q.time}),gt.setUniforms({uTime:Q.time}),kt.uniforms.uLightDir&&kt.uniforms.uLightDir.value){const e=kt.uniforms.uLightDir.value,i=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);i>.001?(ot[0]=e[0]/i,ot[1]=e[1]/i,ot[2]=e[2]/i):(ot[0]=e[0],ot[1]=e[1],ot[2]=e[2]),oe.lightDir=new St(ot[0],ot[1],ot[2])}j.updateView(),Ct.setViewports(Ce),j.updateProjection(),P.bindBuffer(P.UNIFORM_BUFFER,Me),P.bufferSubData(P.UNIFORM_BUFFER,0,new Float32Array(j.projectionMatrix)),P.bufferSubData(P.UNIFORM_BUFFER,64,new Float32Array(j.viewMatrix)),P.bufferSubData(P.UNIFORM_BUFFER,128,new Float32Array([j.transform.position.x,j.transform.position.y,j.transform.position.z])),gt.uniforms.uSunColor&&be.setLight(ot,gt.uniforms.uSunColor.value,gt.uniforms.uTopColor.value,gt.uniforms.uMidColor.value,gt.uniforms.uBottomColor.value),at.execute(et,J,j),P.flush(),P.finish();const t=document.getElementById("hud");if(t&&(de++,de>=6)){de=0;const i=(Q.unscaledDeltaTime>0?Math.round(1/Q.unscaledDeltaTime):0).toString().padStart(3,"0");let s="";if(Rt&&Rt.fpsHistory&&Rt.fpsHistory.length>0){let r=0;const o=Rt.fpsHistory.length,c=Math.min(o,60);for(let l=o-c;l<o;l++)r+=Rt.fpsHistory[l];s=` <br> Avg FPS: ${Math.round(r/c).toString().padStart(3,"0")}`}const n=(Q.deltaTime*1e3).toFixed(2).padStart(6,"0");He=`FPS: ${i}${s}<br>Δ: ${n} ms`,t.innerHTML=He}requestAnimationFrame(Qe)}requestAnimationFrame(Qe)});export default Js();
