(()=>{"use strict";const t={keyboard:{aux:{}},mouse:{x:0,y:0,clicked:!1},init:function(){t.keyboard.ARROW_LEFT=new e(37),t.keyboard.ARROW_UP=new e(38),t.keyboard.ARROW_RIGHT=new e(39),t.keyboard.ARROW_DOWN=new e(40),t.keyboard.ENTER=new e(13),t.keyboard.ALT=new e(18),t.keyboard.ESC=new e(27),t.keyboard.SPACE=new e(32),t.keyboard.O=new e(79),t.keyboard.C=new e(67),t.keyboard.V=new e(86),t.keyboard.T=new e(84)},keyDown:function(e){let i=t.keyboard.aux[e];i&&i.keyDown()},mouseClick:function(e,i){t.mouse.clicked=!0,t.mouse.x=e,t.mouse.y=i},reset:function(){Object.keys(t.keyboard).forEach(((e,i)=>{t.keyboard[e].execute&&t.keyboard[e].execute()})),t.mouse.clicked=!1}};function e(e){this.isPressed=!1,this.keyCode=e,t.keyboard.aux[e]=this}e.prototype.keyDown=function(){this.isPressed=!0},e.prototype.execute=function(){return!!this.isPressed&&(this.isPressed=!1,!0)};const i=t,o={ctx:null,w:null,h:null,bg:"#000",menuBg:"#151515",color:"#FFF",fonts:{menu:"30px Arial",text:"14px Arial",color:"#F00"}},n={gradient:0,lerp:(t,e,i)=>t+i*(e-t),fontHeight:t=>parseInt(t.match(/\d+/)),updateGradient:t=>{n.gradient=.5*Math.sin(.003*t)+.5}},s=n,h={stack:[],screenExists:()=>h.stack.length>0,addScreen:t=>h.stack.unshift(t),removeScreen:()=>h.stack.shift(),draw:()=>h.stack[0].draw(),update:t=>h.stack[0].update(t)},r=h;function c(t,e,i,o,n,s=[],h=2){this.x=t,this.y=e,this.w=i,this.h=o,this.color=n,this.padding=h,this.options=s,this.selectedOption=0,this.arrangeOptions()}c.prototype.draw=function(){let t,e=o.ctx;for(t in e.fillStyle=this.color,e.fillRect(this.x,this.y,this.w,this.h),this.options)this.options[t].draw(this.selectedOption==t)},c.prototype.update=function(t){i.keyboard.ENTER.execute()&&this.options[this.selectedOption].execute(),i.keyboard.ARROW_UP.execute()&&(this.selectedOption=(this.selectedOption+this.options.length-1)%this.options.length),i.keyboard.ARROW_DOWN.execute()&&(this.selectedOption=(this.selectedOption+1)%this.options.length)},c.prototype.arrangeOptions=function(t){let e,i,o=0;for(e in this.options)o+=this.options[e].h+this.padding;for(e in i=(this.h-o)/2,this.options)this.options[e].y=i+this.y,this.options[e].x=this.x,this.options[e].w=this.w,i+=this.options[e].h+this.padding};const a=c;function d(t,e,i,o){this.text=t,this.font=e,this.color=i,this.callback=o,this.x=0,this.y=0,this.w=0,this.h=s.fontHeight(this.font)}d.prototype.draw=function(t){let e,i=o.ctx;if(i.font=this.font,t){let t=s.lerp(120,220,s.gradient);i.fillStyle=`rgb(255, ${t}, ${t})`}else i.fillStyle=this.color;e=i.measureText(this.text).width,i.fillText(this.text,this.x+(this.w-e)/2,this.y+this.h)},d.prototype.execute=function(){this.callback()};const l=d;function u(){this.menu=new a(0,this.titleHeight,o.w,o.h-this.titleHeight,o.menuBg,[new l("Start",o.fonts.menu,o.fonts.color,(function(){console.log(this)})),new l("Options",o.fonts.menu,o.fonts.color,(function(){console.log(this)}))])}u.prototype.update=function(t){this.menu.update(t)},u.prototype.draw=function(){let t,e,i=o.ctx;i.fillStyle=o.bg,i.fillRect(0,0,o.w,o.h),i.font=o.fonts.menu,i.fillStyle=o.fonts.color,t=i.measureText("MD").width,e=s.fontHeight(i.font),i.fillText("MD",(o.w-t)/2,(this.titleHeight+e)/2),this.menu.draw()},u.prototype.titleHeight=200,u.prototype.menuPadding=100;const p=u;window.onload=function(){let t=document.getElementById("main_canvas");o.ctx=t.getContext("2d"),o.w=t.width,o.h=t.height,i.init(),document.onkeydown=t=>i.keyDown(t.keyCode),t.addEventListener("click",(e=>i.mouseClick(e.pageX-t.offsetLeft,e.pageY-t.offsetTop)),!1),r.addScreen(new p),window.requestAnimationFrame(y)};var f=0;function y(t){let e=t-f;f=t,s.updateGradient(t),r.draw(),r.update(e),i.reset(),window.requestAnimationFrame(y)}})();