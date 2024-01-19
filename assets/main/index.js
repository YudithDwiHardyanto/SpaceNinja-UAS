System.register("chunks:///_virtual/ChangeCharacterControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,a,c,r,i,h,n,s,o;return{setters:[function(t){e=t.applyDecoratedDescriptor,a=t.inheritsLoose,c=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,h=t._decorator,n=t.AudioSource,s=t.Node,o=t.Component}],execute:function(){var v,l,C,p,u;i._RF.push({},"14d0csiH1xGnYq/ojiYJvVZ","ChangeCharacterControl",void 0);var A=h.ccclass,d=h.property;t("ChangeCaracter",(v=A("ChangeCaracter"),l=d(n),v((u=e((p=function(t){function e(){for(var e,a=arguments.length,i=new Array(a),h=0;h<a;h++)i[h]=arguments[h];return e=t.call.apply(t,[this].concat(i))||this,c(e,"click",u,r(e)),e.character1=void 0,e.character2=void 0,e.character3=void 0,e.character1Active=!0,e.character2Active=!1,e.character3Active=!1,e.btnChangeCharacter=void 0,e}a(e,t);var i=e.prototype;return i.start=function(){this.character1=this.node.parent.getChildByName("Ninja"),this.character1.active=!0,this.character2=this.node.parent.getChildByName("Freeknight"),this.character2.active=!1,this.character3=this.node.parent.getChildByName("Jackfree"),this.character3.active=!1,this.btnChangeCharacter=this.node.parent.getChildByName("MainMenu").getChildByName("Character"),this.btnChangeCharacter.on(s.EventType.TOUCH_END,this.onBtnChangeChar,this)},i.onBtnChangeChar=function(){this.click.play(),1==this.character1Active&&0==this.character2Active&&0==this.character3Active?(this.character1.active=!1,this.character2.active=!0,this.character3.active=!1,this.character1Active=!1,this.character2Active=!0,this.character3Active=!1):0==this.character1Active&&1==this.character2Active&&0==this.character3Active?(this.character1.active=!1,this.character2.active=!1,this.character3.active=!0,this.character1Active=!1,this.character2Active=!1,this.character3Active=!0):0==this.character1Active&&0==this.character2Active&&1==this.character3Active&&(this.character1.active=!0,this.character2.active=!1,this.character3.active=!1,this.character1Active=!0,this.character2Active=!1,this.character3Active=!1)},i.update=function(t){},e}(o)).prototype,"click",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=p))||C));i._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/FreeknightControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,i,o,r,a,s,u,h,d,c,l,p,v;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.AudioSource,u=t.input,h=t.Input,d=t.Collider2D,c=t.Contact2DType,l=t.Node,p=t.director,v=t.Component}],execute:function(){var g,m,y,C,T;r._RF.push({},"41f38PlCHdDv7DEBaYhmtrd","FreeknightControl",void 0);var f=a.ccclass,b=a.property;t("FreeknightControl",(g=f("FreeknightControl"),m=b(s),g((T=e((C=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).speedTurun=0,e.gameOverMenu=void 0,e.timer=void 0,e.btnPause=void 0,e.gameStart=!1,e.btnStart=void 0,e.jump=!1,i(e,"backsound",T,o(e)),e}n(e,t);var r=e.prototype;return r.start=function(){u.on(h.EventType.TOUCH_START,this.onInputReceived,this),this.node.getComponent(d).on(c.BEGIN_CONTACT,this.onCollide,this),this.gameOverMenu=this.node.parent.getChildByName("GameOverMenu"),this.timer=this.node.parent.getChildByName("Timer"),this.btnPause=this.node.parent.getChildByName("Pause_BTN"),this.btnStart=this.node.parent.getChildByName("MainMenu").getChildByName("Start_BTN"),this.btnStart.on(l.EventType.TOUCH_END,this.onBtnStart,this)},r.onBtnStart=function(){this.gameStart=!0},r.onInputReceived=function(){1==this.gameStart&&(this.node.getPosition().y<=-145&&(this.speedTurun=1e3))},r.onCollide=function(){this.gameOverMenu.active=!0,p.pause(),this.timer.active=!1,this.btnPause.active=!1},r.update=function(t){var e=this.node.getPosition();this.speedTurun-=2e3*t,e.y+=this.speedTurun*t,e.y<=-148&&(e.y=-148),this.node.setPosition(e)},e}(v)).prototype,"backsound",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=C))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,i,a,o,r,s,u,l,h,d,p,m,c,g,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,r=e._decorator,s=e.Label,u=e.Prefab,l=e.AudioSource,h=e.input,d=e.Input,p=e.Node,m=e.Collider2D,c=e.Contact2DType,g=e.director,y=e.Component}],execute:function(){var b,v,f,S,C,N,B,T,O,j,P,_,k,G,R,z,M,w,D;o._RF.push({},"6cf85alrIxNlZYPpx354zvC","GameControl",void 0);var E=r.ccclass,I=r.property;e("GameControl",(b=E("GameControl"),v=I({type:s}),f=I({type:s}),S=I({type:u}),C=I(l),N=I(l),B=I(l),T=I(l),O=I(l),b((_=t((P=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o))||this,i(t,"timer",_,a(t)),t.timerNode=void 0,t.sound=!0,t.time=0,i(t,"score",k,a(t)),t.scoreNode=void 0,t.btnRestart=void 0,t.menuGameOver=void 0,t.btnSoundOn=void 0,t.btnSoundOff=void 0,t.btnPause=void 0,t.gameStart=!1,t.btnStart=void 0,i(t,"prefabBase",G,a(t)),i(t,"backsound",R,a(t)),i(t,"jumpSound",z,a(t)),i(t,"runningSound",M,a(t)),i(t,"gameOverSound",w,a(t)),i(t,"playSound",D,a(t)),t.ninja=void 0,t.gamePause=!0,t.jump=!1,t.menuPause=void 0,t.jackfree=void 0,t.freeknight=void 0,t}n(t,e);var o=t.prototype;return o.start=function(){this.backsound.play(),h.on(d.EventType.TOUCH_START,this.onInputReceived,this),this.scoreNode=this.node.parent.getChildByName("GameOverMenu").getChildByName("score"),this.timerNode=this.node.parent.getChildByName("Timer"),this.timerNode.active=!1,this.btnRestart=this.node.parent.getChildByName("GameOverMenu").getChildByName("Replay_BTN"),this.btnRestart.on(p.EventType.TOUCH_END,this.onBtnRestart,this),this.menuGameOver=this.node.parent.getChildByName("GameOverMenu"),this.btnPause=this.node.parent.getChildByName("Pause_BTN"),this.btnRestart.on(p.EventType.TOUCH_END,this.onBtnPause,this),this.menuPause=this.node.parent.getChildByName("PauseMenu"),this.btnStart=this.node.parent.getChildByName("MainMenu").getChildByName("Start_BTN"),this.btnStart.on(p.EventType.TOUCH_END,this.onBtnStart,this),this.ninja=this.node.parent.getChildByName("Ninja"),this.ninja.getComponent(m).on(c.BEGIN_CONTACT,this.onCollide,this),this.btnSoundOn=this.node.parent.getChildByName("PauseMenu").getChildByName("Sound_BTN_on"),this.jackfree=this.node.parent.getChildByName("Jackfree"),this.freeknight=this.node.parent.getChildByName("Freeknight"),this.btnSoundOff=this.node.parent.getChildByName("PauseMenu").getChildByName("Sound_BTN_off"),this.schedule(this.startingGame,1),this.gameOverSound.stop(),this.runningSound.stop(),this.playSound.stop(),this.jumpSound.stop()},o.onBtnPause=function(){},o.onInputReceived=function(){1==this.gameStart&&1==this.btnSoundOn.active&&0==this.menuGameOver.active&&(this.ninja.getPosition().y<=-135&&(this.jumpSound.play(),this.playSound.volume=0),this.playSound.volume=1);1==this.menuPause.active?this.jumpSound.volume=0:0==this.menuPause.active&&1==this.btnSoundOn.active&&(this.jumpSound.volume=1)},o.onCollide=function(){this.playSound.stop(),this.gameOverSound.play(),this.runningSound.stop()},o.onBtnStart=function(){this.gameStart=!0,this.timerNode.active=!0,this.backsound.stop(),this.runningSound.play(),this.playSound.play()},o.startingGame=function(){if(1==this.gameStart)if(this.time+=1,this.updateTimeLabel(),this.time<=5){var e=this.ninja.getComponent(m),t=this.jackfree.getComponent(m),n=this.freeknight.getComponent(m);(e||t||n)&&(e.enabled=!1,t.enabled=!1,n.enabled=!1)}else{e=this.ninja.getComponent(m),t=this.jackfree.getComponent(m),n=this.freeknight.getComponent(m);(e||t||n)&&(e.enabled=!0,t.enabled=!0,n.enabled=!0)}},o.onBtnRestart=function(){g.resume(),this.menuGameOver.active=!1,this.btnPause.active=!0,this.time=-1,this.timerNode.active=!0,this.playSound.play(),this.runningSound.play()},o.updateTime=function(){},o.updateTimeLabel=function(){var e=Math.floor(this.time/60),t=this.time%60,n=(e<10?"0"+e:e.toString())+":"+(t<10?"0"+t:t.toString());this.timer.string=n,this.score.string=n},o.update=function(e){},t}(y)).prototype,"timer",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(P.prototype,"score",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(P.prototype,"prefabBase",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(P.prototype,"backsound",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=t(P.prototype,"jumpSound",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=t(P.prototype,"runningSound",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=t(P.prototype,"gameOverSound",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(P.prototype,"playSound",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=P))||j));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameOverControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,r,n;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,r=t._decorator,n=t.Component}],execute:function(){var c;o._RF.push({},"24fc2RmjORJxYNt+Vzq+oZB","GameOverControl",void 0);var i=r.ccclass;r.property,t("GameOverControl",i("GameOverControl")(c=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var r=o.prototype;return r.start=function(){this.node.active=!1},r.update=function(t){},o}(n))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/GroundControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,s,o,n,a,r,h,d,p,u,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,s=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,r=t.Prefab,h=t.instantiate,d=t.Node,p=t.Collider2D,u=t.Contact2DType,l=t.Component}],execute:function(){var c,b,m,N,v;n._RF.push({},"45344bxushC5IclBK4ot+0r","GroundControl",void 0);var f=a.ccclass,g=a.property;t("GroundControl",(c=f("GroundControl"),b=g({type:r}),c((v=e((N=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n))||this,s(e,"groundPrefab",v,o(e)),e.baseNode=void 0,e.gameStart=!1,e.btnStart=void 0,e.time=0,e.ninja=void 0,e.speedup=void 0,e}i(e,t);var n=e.prototype;return n.start=function(){this.baseNode=h(this.groundPrefab),this.baseNode.setParent(this.node.parent),this.baseNode.setSiblingIndex(-6),this.speedup=this.node.parent.getChildByName("SpeedUp"),this.speedup.active=!1,this.btnStart=this.node.parent.getChildByName("MainMenu").getChildByName("Start_BTN"),this.btnStart.on(d.EventType.TOUCH_END,this.onBtnStart,this),this.ninja=this.node.parent.getChildByName("Ninja"),this.ninja.getComponent(p).on(u.BEGIN_CONTACT,this.onCollide,this),this.schedule(this.updateTime,1)},n.onCollide=function(){this.time=0,this.speedup.active=!1},n.updateTime=function(){1==this.gameStart&&(this.time+=1)},n.onBtnStart=function(){this.gameStart=!0},n.update=function(t){if(0==this.gameStart){var e=this.baseNode.getPosition();e.x-=1e3/3*t,this.baseNode.setPosition(e),e.x<=-864.13&&(e.x+=864.13),this.baseNode.setPosition(e)}if(1==this.gameStart)if(this.time<=15){var i=this.baseNode.getPosition();i.x-=1e3/3*t,this.baseNode.setPosition(i),i.x<=-864.13&&(i.x+=864.13),this.baseNode.setPosition(i)}else if(this.time>=16&&this.time<=30){this.time>=16&&this.time<=20?this.speedup.active=!0:this.speedup.active=!1;var s=this.baseNode.getPosition();s.x-=500*t,this.baseNode.setPosition(s),s.x<=-864.13&&(s.x+=864.13),this.baseNode.setPosition(s)}else if(this.time>=31&&this.time<=60){this.time>=31&&this.time<=35?this.speedup.active=!0:this.speedup.active=!1;var o=this.baseNode.getPosition();o.x-=1700/3*t,this.baseNode.setPosition(o),o.x<=-864.13&&(o.x+=864.13),this.baseNode.setPosition(o)}else if(this.time>=60){this.time>=60&&this.time<=65?this.speedup.active=!0:this.speedup.active=!1;var n=this.baseNode.getPosition();n.x-=1900/3*t,this.baseNode.setPosition(n),n.x<=-864.13&&(n.x+=864.13),this.baseNode.setPosition(n)}},e}(l)).prototype,"groundPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=N))||m));n._RF.pop()}}}));

System.register("chunks:///_virtual/JackfreeControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,i,o,r,a,s,u,c,d,h,p,l,v;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.AudioSource,u=t.input,c=t.Input,d=t.Collider2D,h=t.Contact2DType,p=t.Node,l=t.director,v=t.Component}],execute:function(){var m,y,g,C,f;r._RF.push({},"3cd737cl0tBY4jKinpKMFdn","JackfreeControl",void 0);var T=a.ccclass,b=a.property;t("JackfreeControl",(m=T("JackfreeControl"),y=b(s),m((f=e((C=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).speedTurun=0,e.gameOverMenu=void 0,e.timer=void 0,e.btnPause=void 0,e.gameStart=!1,e.btnStart=void 0,e.jump=!1,i(e,"backsound",f,o(e)),e}n(e,t);var r=e.prototype;return r.start=function(){u.on(c.EventType.TOUCH_START,this.onInputReceived,this),this.node.getComponent(d).on(h.BEGIN_CONTACT,this.onCollide,this),this.gameOverMenu=this.node.parent.getChildByName("GameOverMenu"),this.timer=this.node.parent.getChildByName("Timer"),this.btnPause=this.node.parent.getChildByName("Pause_BTN"),this.btnStart=this.node.parent.getChildByName("MainMenu").getChildByName("Start_BTN"),this.btnStart.on(p.EventType.TOUCH_END,this.onBtnStart,this)},r.onBtnStart=function(){this.gameStart=!0},r.onInputReceived=function(){1==this.gameStart&&(this.node.getPosition().y<=-145&&(this.speedTurun=1e3))},r.onCollide=function(){this.gameOverMenu.active=!0,l.pause(),this.timer.active=!1,this.btnPause.active=!1},r.update=function(t){var e=this.node.getPosition();this.speedTurun-=2e3*t,e.y+=this.speedTurun*t,e.y<=-145&&(e.y=-145),this.node.setPosition(e)},e}(v)).prototype,"backsound",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=C))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./ChangeCharacterControl.ts","./FreeknightControl.ts","./GameControl.ts","./GameOverControl.ts","./GroundControl.ts","./JackfreeControl.ts","./MainMenuControl.ts","./NinjaControl.ts","./ParallaxBgControl.ts","./PauseControl.ts","./RestartControl.ts","./RockControl.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainMenuControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,i,r,a,o,c,s,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,c=t.AudioSource,s=t.Node,u=t.Component}],execute:function(){var l,p,h,d,y;a._RF.push({},"954e9FMU7pNTJ6B7+Gpf30A","MainMenuControl",void 0);var f=o.ccclass,v=o.property;t("MainMenuControl",(l=f("MainMenuControl"),p=v(c),l((y=e((d=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,i(e,"click",y,r(e)),e.btnStart=void 0,e.btnPause=void 0,e}n(e,t);var a=e.prototype;return a.start=function(){this.btnStart=this.node.parent.getChildByName("MainMenu").getChildByName("Start_BTN"),this.btnStart.on(s.EventType.TOUCH_END,this.onBtnStart,this),this.btnPause=this.node.parent.getChildByName("Pause_BTN"),this.btnPause.active=!1},a.onBtnStart=function(){this.click.play(),this.node.active=!1,this.btnPause.active=!0},a.update=function(t){},e}(u)).prototype,"click",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=d))||h));a._RF.pop()}}}));

System.register("chunks:///_virtual/NinjaControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,i,o,r,a,s,u,c,h,d,p,l,v;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.AudioSource,u=t.input,c=t.Input,h=t.Collider2D,d=t.Contact2DType,p=t.Node,l=t.director,v=t.Component}],execute:function(){var m,y,g,C,T;r._RF.push({},"66218bcX15NabeAuudFU3j8","NinjaControl",void 0);var N=a.ccclass,b=a.property;t("NinjaControl",(m=N("NinjaControl"),y=b(s),m((T=e((C=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).speedTurun=0,e.gameOverMenu=void 0,e.timer=void 0,e.btnPause=void 0,e.gameStart=!1,e.btnStart=void 0,e.jump=!1,i(e,"backsound",T,o(e)),e}n(e,t);var r=e.prototype;return r.start=function(){u.on(c.EventType.TOUCH_START,this.onInputReceived,this),this.node.getComponent(h).on(d.BEGIN_CONTACT,this.onCollide,this),this.gameOverMenu=this.node.parent.getChildByName("GameOverMenu"),this.timer=this.node.parent.getChildByName("Timer"),this.btnPause=this.node.parent.getChildByName("Pause_BTN"),this.btnStart=this.node.parent.getChildByName("MainMenu").getChildByName("Start_BTN"),this.btnStart.on(p.EventType.TOUCH_END,this.onBtnStart,this)},r.onBtnStart=function(){this.gameStart=!0},r.onInputReceived=function(){1==this.gameStart&&(this.node.getPosition().y<=-145&&(this.speedTurun=1e3))},r.onCollide=function(){this.gameOverMenu.active=!0,l.pause(),this.timer.active=!1,this.btnPause.active=!1},r.update=function(t){var e=this.node.getPosition();this.speedTurun-=2e3*t,e.y+=this.speedTurun*t,e.y<=-148&&(e.y=-148),this.node.setPosition(e)},e}(v)).prototype,"backsound",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=C))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/ParallaxBgControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,o,s,e,a,n,h,l,d;return{setters:[function(t){i=t.applyDecoratedDescriptor,o=t.inheritsLoose,s=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){a=t.cclegacy,n=t._decorator,h=t.AudioSource,l=t.Node,d=t.Component}],execute:function(){var g,r,c,B,u;a._RF.push({},"51d59rarBhIMY7J411e5H+b","ParallaxBgControl",void 0);var P=n.ccclass,x=n.property;t("ParallaxBgControl",(g=P("ParallaxBgControl"),r=x(h),g((u=i((B=function(t){function i(){for(var i,o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return i=t.call.apply(t,[this].concat(a))||this,s(i,"click",u,e(i)),i.ground3=void 0,i.ground2=void 0,i.ground1=void 0,i.clouds2=void 0,i.clouds1=void 0,i.rocks=void 0,i.rocks3=void 0,i.rocks2=void 0,i.rocks1=void 0,i.clouds_1=void 0,i.clouds_2=void 0,i.clouds_3=void 0,i.btnChangeBg=void 0,i.bg1=void 0,i.bg2=void 0,i.bg1active=!0,i.bg2active=!1,i}o(i,t);var a=i.prototype;return a.start=function(){this.ground3=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg1").getChildByName("ground_3"),this.ground2=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg1").getChildByName("ground_2"),this.ground1=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg1").getChildByName("ground_1"),this.clouds2=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg1").getChildByName("clouds_2"),this.clouds1=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg1").getChildByName("clouds_1"),this.rocks=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg1").getChildByName("rocks"),this.rocks1=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg2").getChildByName("rocks_1"),this.rocks2=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg2").getChildByName("rocks_2"),this.rocks3=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg2").getChildByName("rocks_3"),this.clouds_3=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg2").getChildByName("clouds_3"),this.clouds_2=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg2").getChildByName("clouds_2"),this.clouds_1=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg2").getChildByName("clouds_1"),this.btnChangeBg=this.node.parent.getChildByName("MainMenu").getChildByName("Background"),this.btnChangeBg.on(l.EventType.TOUCH_END,this.onBtnChangeBg,this),this.bg1=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg1"),this.bg2=this.node.parent.getChildByName("ParallaxBG").getChildByName("Bg2")},a.onBtnChangeBg=function(){this.click.play(),1==this.bg1active&&0==this.bg2active?(this.bg1.active=!1,this.bg2.active=!0,this.bg1active=!1,this.bg2active=!0):0==this.bg1active&&1==this.bg2active&&(this.bg1.active=!0,this.bg2.active=!1,this.bg1active=!0,this.bg2active=!1)},a.update=function(t){var i=this.ground3.getPosition(),o=this.ground2.getPosition(),s=this.ground1.getPosition(),e=this.clouds2.getPosition(),a=this.clouds1.getPosition(),n=this.rocks.getPosition();i.x-=100*t,o.x-=40*t,s.x-=20*t,e.x-=16*t,a.x-=6*t,n.x-=10*t,this.ground3.setPosition(i),this.ground2.setPosition(o),this.ground1.setPosition(s),this.clouds2.setPosition(e),this.clouds1.setPosition(a),this.rocks.setPosition(n),n.x<=-860.829&&(n.x+=860.829),i.x<=-860.829&&(i.x+=860.829),o.x<=-860.829&&(o.x+=860.829),s.x<=-860.829&&(s.x+=860.829),e.x<=-860.829&&(e.x+=860.829),a.x<=-860.829&&(a.x+=860.829),this.ground3.setPosition(i),this.ground2.setPosition(o),this.ground1.setPosition(s),this.clouds2.setPosition(e),this.clouds1.setPosition(a),this.rocks.setPosition(n);var h=this.rocks1.getPosition(),l=this.rocks2.getPosition(),d=this.rocks3.getPosition(),g=this.clouds_3.getPosition(),r=this.clouds_2.getPosition(),c=this.clouds_1.getPosition();g.x-=100*t,r.x-=40*t,c.x-=10*t,h.x-=60*t,l.x-=30*t,d.x-=30*t,this.rocks1.setPosition(h),this.rocks2.setPosition(l),this.rocks3.setPosition(d),this.clouds_3.setPosition(g),this.clouds_2.setPosition(r),this.clouds_1.setPosition(c),h.x<=-860.829&&(h.x+=860.829),l.x<=-860.829&&(l.x+=860.829),d.x<=-860.829&&(d.x+=860.829),g.x<=-860.829&&(g.x+=860.829),r.x<=-860.829&&(r.x+=860.829),c.x<=-860.829&&(c.x+=860.829),this.rocks1.setPosition(h),this.rocks2.setPosition(l),this.rocks3.setPosition(d),this.clouds_3.setPosition(g),this.clouds_2.setPosition(r),this.clouds_1.setPosition(c)},i}(d)).prototype,"click",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=B))||c));a._RF.pop()}}}));

System.register("chunks:///_virtual/PauseControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,t,i,o,u,s,a,r,l,d;return{setters:[function(n){e=n.applyDecoratedDescriptor,t=n.inheritsLoose,i=n.initializerDefineProperty,o=n.assertThisInitialized},function(n){u=n.cclegacy,s=n._decorator,a=n.AudioSource,r=n.Node,l=n.director,d=n.Component}],execute:function(){var h,c,p,b,f,m,y,g,v,S,P,O,B;u._RF.push({},"e708cqJu+pPtYjRHIozxs8J","PauseControl",void 0);var C=s.ccclass,N=s.property;n("PauseControl",(h=C("PauseControl"),c=N(a),p=N(a),b=N(a),f=N(a),m=N(a),h((v=e((g=function(n){function e(){for(var e,t=arguments.length,u=new Array(t),s=0;s<t;s++)u[s]=arguments[s];return e=n.call.apply(n,[this].concat(u))||this,i(e,"click",v,o(e)),e.sound=!0,e.btnPause=void 0,e.btnResume=void 0,e.btnSoundOn=void 0,e.btnSoundOff=void 0,i(e,"backsound",S,o(e)),i(e,"runningSound",P,o(e)),i(e,"gameOverSound",O,o(e)),i(e,"playSound",B,o(e)),e.gamePause=!1,e}t(e,n);var u=e.prototype;return u.start=function(){this.node.active=!1,this.btnPause=this.node.parent.getChildByName("Pause_BTN"),this.btnPause.on(r.EventType.TOUCH_END,this.onBtnPause,this),this.btnResume=this.node.parent.getChildByName("PauseMenu").getChildByName("Play_BTN"),this.btnResume.on(r.EventType.TOUCH_END,this.onBtnResume,this),this.btnSoundOn=this.node.parent.getChildByName("PauseMenu").getChildByName("Sound_BTN_on"),this.btnSoundOn.on(r.EventType.TOUCH_END,this.onBtnSoundOn,this),this.btnSoundOff=this.node.parent.getChildByName("PauseMenu").getChildByName("Sound_BTN_off"),this.btnSoundOff.on(r.EventType.TOUCH_END,this.onBtnSoundOff,this)},u.onBtnSoundOff=function(){0==this.sound&&(this.btnSoundOn.active=!0,this.btnSoundOff.active=!1,this.playSound.volume=1,this.sound=!0)},u.onBtnSoundOn=function(){1==this.sound&&(this.btnSoundOn.active=!1,this.btnSoundOff.active=!0,this.playSound.volume=0,this.sound=!1)},u.onBtnPause=function(){this.click.play(),1==this.gamePause?(this.node.active=!1,this.gamePause=!1,l.resume()):0==this.gamePause&&(this.runningSound.stop(),this.node.active=!0,this.gamePause=!0,l.pause())},u.onBtnResume=function(){this.click.play(),1==this.btnSoundOn.active?(this.node.active=!1,l.resume(),this.runningSound.play(),this.gamePause=!0):(this.runningSound.volume=0,l.resume(),this.node.active=!1,this.gamePause=!0)},u.update=function(n){},e}(d)).prototype,"click",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=e(g.prototype,"backsound",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=e(g.prototype,"runningSound",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=e(g.prototype,"gameOverSound",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=e(g.prototype,"playSound",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=g))||y));u._RF.pop()}}}));

System.register("chunks:///_virtual/RestartControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var r,o,n,e;return{setters:[function(t){r=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,e=t.Component}],execute:function(){var c;o._RF.push({},"6377asWB6RE0Jb1rXc9ihPU","RestartControl",void 0);var a=n.ccclass;n.property,t("RestartControl",a("RestartControl")(c=function(t){function o(){for(var r,o=arguments.length,n=new Array(o),e=0;e<o;e++)n[e]=arguments[e];return(r=t.call.apply(t,[this].concat(n))||this).character1=void 0,r}r(o,t);var n=o.prototype;return n.start=function(){},n.update=function(t){},o}(e))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/RockControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,o,n,r,s,a,h,c,l,p,g,f;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,a=t.Prefab,h=t.Node,c=t.Collider2D,l=t.Contact2DType,p=t.instantiate,g=t.Vec3,f=t.Component}],execute:function(){var u,m,d,k,v;r._RF.push({},"42602zdtVRPUZmOJGM28dAD","RockControl",void 0);var y=s.ccclass,C=s.property;t("RockControl",(u=y("RockControl"),m=C(a),u((v=i((k=function(t){function i(){for(var i,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return i=t.call.apply(t,[this].concat(r))||this,o(i,"prefabRock",v,n(i)),i.rock=[],i.btnStart=void 0,i.gameStart=!1,i.time=0,i.btnRestart=void 0,i.ninja=void 0,i}e(i,t);var r=i.prototype;return r.start=function(){this.btnStart=this.node.parent.getChildByName("MainMenu").getChildByName("Start_BTN"),this.btnStart.on(h.EventType.TOUCH_END,this.onBtnStart,this),this.btnRestart=this.node.parent.getChildByName("GameOverMenu").getChildByName("Replay_BTN"),this.btnRestart.on(h.EventType.TOUCH_END,this.onBtnRestart,this),this.ninja=this.node.parent.getChildByName("Ninja"),this.ninja.getComponent(c).on(l.BEGIN_CONTACT,this.onCollide,this),this.schedule(this.updateTime,1)},r.onCollide=function(){this.gameStart=!1},r.updateTime=function(){1==this.gameStart&&(this.time+=1)},r.onBtnRestart=function(){for(var t=0;t<this.rock.length;t++)this.rock[t].destroy();this.rock.length=0;var i=p(this.prefabRock);i.setParent(this.node.parent),i.setPosition(new g(0,0,0)),i.setSiblingIndex(-7),this.rock.push(i),this.gameStart=!0,this.time=0},r.onBtnStart=function(){this.gameStart=!0,this.startingGame()},r.startingGame=function(){if(1==this.gameStart){var t=p(this.prefabRock);t.setParent(this.node.parent),t.setPosition(new g(0,0,0)),t.setSiblingIndex(-7),this.rock.push(t)}},r.update=function(t){if(0==this.gameStart)for(var i=0;i<this.rock.length;i++){var e=this.rock[i].getPosition();e.x-=1e3/3*t,e.x<=-1565&&(e.x+=1565),this.rock[i].setPosition(e)}else if(1==this.gameStart)if(this.time<=15)for(var o=0;o<this.rock.length;o++){var n=this.rock[o].getPosition();n.x-=1e3/3*t,n.x<=-1565&&(n.x+=1565),this.rock[o].setPosition(n)}else if(this.time>=16&&this.time<=30)for(var r=0;r<this.rock.length;r++){var s=this.rock[r].getPosition();s.x-=500*t,s.x<=-1565&&(s.x+=1565),this.rock[r].setPosition(s)}else if(this.time>=31&&this.time<=60)for(var a=0;a<this.rock.length;a++){var h=this.rock[a].getPosition();h.x-=1700/3*t,h.x<=-1565&&(h.x+=1565),this.rock[a].setPosition(h)}else if(this.time>=31)for(var c=0;c<this.rock.length;c++){var l=this.rock[c].getPosition();l.x-=1900/3*t,l.x<=-1565&&(l.x+=1565),this.rock[c].setPosition(l)}},i}(f)).prototype,"prefabRock",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=k))||d));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});