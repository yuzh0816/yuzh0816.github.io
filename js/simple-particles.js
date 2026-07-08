/* Dynamic connected particles effect - Canvas Nest style */
!function(){"use strict";console.log("Simple particles script loaded");const e=60,t=2,n=.5,o=.5,i=.2,l=120,a="#666666";function s(){console.log("Creating particles...");const s=document.createElement("canvas"),d=s.getContext("2d");s.id="particle-canvas",s.style.position="fixed",s.style.top="0",s.style.left="0",s.style.width="100%",s.style.height="100%",s.style.zIndex="-1",s.style.pointerEvents="none",document.body.insertBefore(s,document.body.firstChild),console.log("Canvas element added to body");let c=null,r=null;function h(){s.width=window.innerWidth,s.height=window.innerHeight,console.log("Canvas resized:",s.width,"x",s.height)}h(),window.addEventListener("resize",h),
// 跟踪鼠标位置
document.addEventListener("mousemove",(function(e){c=e.clientX,r=e.clientY})),document.addEventListener("mouseleave",(function(){c=null,r=null}));const y=[];for(let o=0;o<e;o++)y.push({x:Math.random()*s.width,y:Math.random()*s.height,vx:(Math.random()-.5)*n,vy:(Math.random()-.5)*n,size:t});function u(e,t,n,o,i){d.beginPath(),d.moveTo(e,t),d.lineTo(n,o),d.strokeStyle=a,d.globalAlpha=i,d.lineWidth=.5,d.stroke()}console.log("Created",y.length,"particles"),console.log("Starting animation..."),function e(){d.clearRect(0,0,s.width,s.height),
// 更新和绘制粒子
y.forEach(((e,t)=>{e.x+=e.vx,e.y+=e.vy,
// 边界检测
(e.x<0||e.x>s.width)&&(e.vx*=-1),(e.y<0||e.y>s.height)&&(e.vy*=-1),
// 绘制粒子
d.beginPath(),d.arc(e.x,e.y,e.size,0,2*Math.PI),d.fillStyle=a,d.globalAlpha=o,d.fill();
// 绘制粒子之间的连线
for(let n=t+1;n<y.length;n++){const t=y[n],o=e.x-t.x,a=e.y-t.y,s=Math.sqrt(o*o+a*a);if(s<l){const n=(1-s/l)*i;u(e.x,e.y,t.x,t.y,n)}}
// 如果鼠标在页面内，绘制鼠标到粒子的连线
if(null!==c&&null!==r){const t=e.x-c,n=e.y-r,o=Math.sqrt(t*t+n*n);if(o<1.5*l){const t=(1-o/(1.5*l))*i*2;u(e.x,e.y,c,r,t)}}})),requestAnimationFrame(e)}()}
// 确保在页面完全加载后执行
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",s):
// 使用 setTimeout 确保 DOM 完全准备好
setTimeout(s,100)}();