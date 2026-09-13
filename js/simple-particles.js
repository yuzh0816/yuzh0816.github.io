/* Dynamic connected particles effect - Canvas Nest style */
!function(){"use strict";const t=28,e=1.25,n=.5,i=.85,o=.5,l=120,d="#666666";function a(){if(document.getElementById("particle-canvas"))return;const a=document.createElement("canvas"),s=a.getContext("2d");a.id="particle-canvas",a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.zIndex="-1",a.style.pointerEvents="none",document.body.insertBefore(a,document.body.firstChild);let c=null,h=null;function r(){a.width=window.innerWidth,a.height=window.innerHeight}r(),window.addEventListener("resize",r),
// 跟踪鼠标位置
document.addEventListener("mousemove",(function(t){c=t.clientX,h=t.clientY})),document.addEventListener("mouseleave",(function(){c=null,h=null}));const u=[];for(let i=0;i<t;i++)u.push({x:Math.random()*a.width,y:Math.random()*a.height,vx:(Math.random()-.5)*n,vy:(Math.random()-.5)*n,size:e});function y(t,e,n,i,o){s.beginPath(),s.moveTo(t,e),s.lineTo(n,i),s.strokeStyle=d,s.globalAlpha=o,s.lineWidth=.5,s.stroke()}!function t(){s.clearRect(0,0,a.width,a.height),
// 更新和绘制粒子
u.forEach(((t,e)=>{t.x+=t.vx,t.y+=t.vy,
// 边界检测
(t.x<0||t.x>a.width)&&(t.vx*=-1),(t.y<0||t.y>a.height)&&(t.vy*=-1),
// 绘制粒子
s.beginPath(),s.arc(t.x,t.y,t.size,0,2*Math.PI),s.fillStyle=d,s.globalAlpha=i,s.fill();
// 绘制粒子之间的连线
for(let n=e+1;n<u.length;n++){const e=u[n],i=t.x-e.x,d=t.y-e.y,a=Math.sqrt(i*i+d*d);if(a<l){const n=(1-a/l)*o;y(t.x,t.y,e.x,e.y,n)}}
// 如果鼠标在页面内，绘制鼠标到粒子的连线
if(null!==c&&null!==h){const e=t.x-c,n=t.y-h,i=Math.sqrt(e*e+n*n);if(i<1.5*l){const e=(1-i/(1.5*l))*o*2;y(t.x,t.y,c,h,e)}}})),requestAnimationFrame(t)}()}
// 确保在页面完全加载后执行
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",a):
// 使用 setTimeout 确保 DOM 完全准备好
setTimeout(a,100)}();