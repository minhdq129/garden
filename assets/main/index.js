System.register("chunks:///_virtual/CameraProcessingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./Constants.ts","./index.js"],(function(e){"use strict";var t,a,i,r,n,o,s,c;return{setters:[function(e){t=e.inheritsLoose,a=e.applyDecoratedDescriptor,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,o=e.Vec3},null,function(e){s=e.Constants},function(e){c=e.default}],execute:function(){var l,u,m,h,p,d,g;n._RF.push({},"a7b2bThI51IspotUc3RVGvT","CameraProcessingSystem",void 0);e("CameraProcessingSystem",(l=c.Inject("scene"),u=c.Inject("camera"),m=c.Inject("gameState"),h=function(e){function a(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return t=e.call.apply(e,[this].concat(n))||this,i(t,"scene",p,r(t)),i(t,"camera",d,r(t)),i(t,"gameState",g,r(t)),t.landGroup=void 0,t.currentZoomTarget=s.SHOW_MAP_ORTHO_HEIGHT,t.defaultCameraPos=new o,t.tempVec=new o,t}t(a,e);var n=a.prototype;return n.initialized=function(){this.landGroup=this.scene.getChildByName("LandGroup")},n.lookAt=function(e,t,a){this.tempVec.set(this.camera.node.forward).multiplyScalar(65),this.defaultCameraPos.set(e,t,a).subtract(this.tempVec),this.camera.node.setPosition(this.defaultCameraPos)},n.process=function(){if(this.gameState.cameraZoomToDetail){if(void 0!==this.gameState.selectedLand){var e=this.landGroup.children[this.gameState.selectedLand];this.lookAt(e.position.x,e.position.y,e.position.z)}this.currentZoomTarget=s.SHOW_DETAIL_ORTHO_HEIGHT}else this.currentZoomTarget=s.SHOW_MAP_ORTHO_HEIGHT;var t=this.camera.orthoHeight,a=t+.4*(this.currentZoomTarget-t);Math.abs(a-this.currentZoomTarget)<.01&&(a=this.currentZoomTarget),this.camera.orthoHeight=a},a}(c.System),p=a(h.prototype,"scene",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=a(h.prototype,"camera",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=a(h.prototype,"gameState",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h));n._RF.pop()}}}));

System.register("chunks:///_virtual/Constants.ts",["cc"],(function(t){"use strict";var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){n._RF.push({},"ec99aRQ9OtPeJTqi7gqtULU","Constants",void 0);var s=t("Constants",(function(){}));s.LAND_TOTAL_BLOCK=9,s.FERTILIZE_SKIP_TIME=1800,s.SHOW_MAP_ORTHO_HEIGHT=30,s.SHOW_DETAIL_ORTHO_HEIGHT=10,n._RF.pop()}}}));

System.register("chunks:///_virtual/EventTarget.ts",["cc"],(function(e){"use strict";var t,c;return{setters:[function(e){t=e.cclegacy,c=e.EventTarget}],execute:function(){t._RF.push({},"526c2IS4YBHsJe+yM4iuclr","EventTarget",void 0);e("default",new c);t._RF.pop()}}}));

System.register("chunks:///_virtual/GameEvent.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){var n;e("GameEvent",void 0),t._RF.push({},"802dcSUOelIpr+U4NJnD2Mf","GameEvent",void 0),function(e){e.ClearSelect="GameEvent.ClearSelect",e.Plant="GameEvent.Plant",e.Water="GameEvent.Water",e.Fertilize="GameEvent.Fertilize",e.MovePlant="GameEvent.MovePlant"}(n||(n=e("GameEvent",{}))),t._RF.pop()}}}));

System.register("chunks:///_virtual/GameInputSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./GameEvent.ts","./EventTarget.ts","./index.js"],(function(e){"use strict";var t,a,o,i,n,l,r,c,s,h,p,d,u,m;return{setters:[function(e){t=e.inheritsLoose,a=e.createForOfIteratorHelperLoose,o=e.applyDecoratedDescriptor,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){l=e.cclegacy,r=e.input,c=e.Input,s=e.Vec3,h=e.MeshRenderer,p=e.geometry},null,function(e){d=e.GameEvent},function(e){u=e.default},function(e){m=e.default}],execute:function(){var g,v,f,S,y,T,b,C,I;l._RF.push({},"db0b5PpFcRGC4l8ejhxnsD8","GameInputSystem",void 0);e("GameInputSystem",(g=m.Inject("scene"),v=m.Inject("camera"),f=m.Inject("localStorage"),S=m.Inject("gameState"),y=function(e){function o(){for(var t,a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return t=e.call.apply(e,[this].concat(o))||this,i(t,"scene",T,n(t)),i(t,"camera",b,n(t)),i(t,"localStorage",C,n(t)),i(t,"gameState",I,n(t)),t.landGroup=void 0,t.popupSelectSeed=void 0,t.popupTool=void 0,t.cameraLastPos=new s,t.ray=new p.Ray,t}t(o,e);var l=o.prototype;return l.initialized=function(){this.landGroup=this.scene.getChildByName("LandGroup");var e=this.scene.getChildByName("UI_Canvas");this.popupSelectSeed=e.getChildByName("PopupSelectSeed"),this.popupTool=e.getChildByName("PopupTool"),r.on(c.EventType.TOUCH_MOVE,this.onTouchMove,this),r.on(c.EventType.TOUCH_START,this.onTouchStart,this),u.on(d.ClearSelect,this.onClearSelect,this)},l.onTouchStart=function(e){this.checkTouchLand(e.touch.getLocation())},l.onTouchMove=function(e){var t=-e.getDeltaY(),a=this.camera.node.rotation.getEulerAngles(new s),o=e.getDeltaX()*Math.sin(a.y*Math.PI/180),i=-e.getDeltaX()*Math.cos(a.y*Math.PI/180);this.cameraLastPos.set(i/30,t/30,o/30),this.camera.node.setPosition(this.camera.node.position.add(this.cameraLastPos))},l.checkTouchLand=function(e){var t=this.camera.screenPointToRay(e.x,e.y,this.ray),a=this.localStorage.getGardenData();if(a){for(var o=a.lands,i=!1,n=0;n<o.length;n++){var l="Land_"+n;if(n>=this.landGroup.children.length)throw Error(l+" not existed on map");var r=o[n];if(r.unlocked){var c=this.landGroup.children[n].getChildByName("Plane");if(c){var s=c.getComponentInChildren(h);if(0!==p.intersect.rayModel(t,s.model)){var d=this.landGroup.getChildByName(l);if(!d)throw Error(l+" not existed on map");for(var u=d.getChildByName("blocks"),m=0;m<u.children.length;m++){var g=u.children[m].getComponentInChildren(h);if(p.intersect.rayModel(t,g.model)>0){this.onTouchBlock(r,n,m),i=!0,this.gameState.cameraZoomToDetail=!0;break}}}}}}i||(this.gameState.cameraZoomToDetail=!1,this.gameState.selectedLand=void 0,this.gameState.selectedBlock=void 0,this.gameState.movingPlant=void 0,this.popupSelectSeed.active=!1,this.popupTool.active=!1)}},l.onTouchBlock=function(e,t,o){var i=!0;if(e.plants)for(var n,l=a(e.plants);!(n=l()).done;){if(n.value.blockIndex===o){i=!1;break}}if(void 0!==this.gameState.movingPlant&&t===this.gameState.selectedLand){if(i)for(var r,c=a(e.plants);!(r=c()).done;){var s=r.value;if(s.blockIndex===this.gameState.selectedBlock){s.blockIndex=o;break}}this.popupSelectSeed.active=!1,this.popupTool.active=!1}else this.popupSelectSeed.active=i,this.popupTool.active=!i;this.gameState.movingPlant=void 0,this.gameState.selectedLand=t,this.gameState.selectedBlock=o},l.onClearSelect=function(){this.gameState.selectedLand=void 0,this.gameState.selectedBlock=void 0},l.process=function(){},l.dispose=function(){r.off(c.EventType.TOUCH_START,this.onTouchStart,this),r.off(c.EventType.TOUCH_MOVE,this.onTouchMove,this),u.off(d.ClearSelect,this.onClearSelect,this)},o}(m.System),T=o(y.prototype,"scene",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=o(y.prototype,"camera",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=o(y.prototype,"localStorage",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=o(y.prototype,"gameState",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y));l._RF.pop()}}}));

System.register("chunks:///_virtual/GameState.ts",["cc"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"d1b527tmnZELILY/NQ5aJ0i","GameState",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/Garden.ts",["cc"],(function(){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"d4e3fm3xdhJBZ7C0Rg1x+oE","Garden",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/GardenScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./CameraProcessingSystem.ts","./GameInputSystem.ts","./LandRenderingSystem.ts","./PlantProcessingSystem.ts","./PlantRenderingSystem.ts","./LocalStorage.ts","./index.js"],(function(e){"use strict";var t,r,n,a,s,i,o,l,c,d,u,m,f,p,S,y,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){s=e.cclegacy,i=e._decorator,o=e.Prefab,l=e.director,c=e.CameraComponent,d=e.Component},null,function(e){u=e.CameraProcessingSystem},function(e){m=e.GameInputSystem},function(e){f=e.LandRenderSystem},function(e){p=e.PlantProcessingSytem},function(e){S=e.PlantRenderingSytem},function(e){y=e.LocalStorage},function(e){g=e.default}],execute:function(){var w,h,P,b,v,C,G;s._RF.push({},"734feVQSzdG76tFES30ltsr","GardenScene",void 0);var L=i.ccclass,R=i.property;e("GardenScene",(w=L("GardenScene"),h=R([o]),P=R(o),w((C=t((v=function(e){function t(){for(var t,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return t=e.call.apply(e,[this].concat(s))||this,n(t,"renderPlantPrefabs",C,a(t)),n(t,"plantPrefab",G,a(t)),t.world=void 0,t}r(t,e);var s=t.prototype;return s.onLoad=function(){},s.start=function(){var e=l.getScene(),t=e.getChildByName("Camera").getComponent(c),r=new y;this.world=new g.World,this.world.register("scene",e),this.world.register("camera",t),this.world.register("localStorage",r),this.world.register("gameState",{cameraZoomToDetail:!1}),this.world.register("renderPlantPrefabs",this.renderPlantPrefabs),this.world.register("plantPrefab",this.plantPrefab),this.world.addSystem(new f,!1),this.world.addSystem(new S,!1),this.world.addSystem(new m,!0),this.world.addSystem(new p,!0),this.world.addSystem(new u,!0)},s.update=function(e){this.world.setDelta(e),this.world.processActiveSystem(),this.world.processPassiveSystem()},t}(d)).prototype,"renderPlantPrefabs",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=t(v.prototype,"plantPrefab",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=v))||b));s._RF.pop()}}}));

System.register("chunks:///_virtual/Land.ts",["cc"],(function(){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"56fdez77edAO51J0uO+1BSC","Land",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/LandRenderingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./index.js"],(function(e){"use strict";var t,i,n,a,s,r,l;return{setters:[function(e){t=e.inheritsLoose,i=e.applyDecoratedDescriptor,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){s=e.cclegacy,r=e.Vec3},null,function(e){l=e.default}],execute:function(){var c,o,d,u,p;s._RF.push({},"d6fb7UTstNIIKIT/VaRdnDb","LandRenderingSystem",void 0);e("LandRenderSystem",(c=l.Inject("scene"),o=l.Inject("gameState"),d=function(e){function i(){for(var t,i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return t=e.call.apply(e,[this].concat(s))||this,n(t,"scene",u,a(t)),n(t,"gameState",p,a(t)),t.landGroup=void 0,t.temp=new r,t}t(i,e);var s=i.prototype;return s.initialized=function(){this.landGroup=this.scene.getChildByName("LandGroup")},s.updateLands=function(){for(var e=0;e<this.landGroup.children.length;e++){var t=this.landGroup.children[e],i=t.getChildByName("blocks"),n=t.getChildByName("SelectingBlock");if(void 0!==this.gameState.selectedLand)if(this.gameState.selectedLand===e)if(void 0!==this.gameState.selectedBlock){var a=i.children[this.gameState.selectedBlock];n.active=!0,this.temp.set(a.position),this.temp.x+=.1,n.setPosition(this.temp)}else n.active=!1;else n.active=!1;else n.active=!1}},s.process=function(){this.updateLands()},s.dispose=function(){},i}(l.System),u=i(d.prototype,"scene",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=i(d.prototype,"gameState",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d));s._RF.pop()}}}));

System.register("chunks:///_virtual/LocalStorage.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"3aaa9U3fW9K8bw2EmSPBgfS","LocalStorage",void 0);e("LocalStorage",(function(){var e=this;if(this.storage={},this.gardenData=void 0,this.getGardenData=function(){return e.gardenData||(e.gardenData=JSON.parse(e.getItem("garden"))),e.gardenData},this.clear=function(){if(window.localStorage)return window.localStorage.clear();e.storage={}},this.getItem=function(t){return window.localStorage?window.localStorage.getItem(t):e.storage[t]},this.setItem=function(t,a){if(window.localStorage)return window.localStorage.setItem(t,a);e.storage[t]=a},this.removeItem=function(t){if(window.localStorage)return window.localStorage.removeItem(t);e.storage[t]=null,delete e.storage[t]},!this.getItem("garden")){this.setItem("garden",'{"lands":[{"unlocked":true},{"unlocked":true},{"unlocked":true},{"unlocked":true},{"unlocked":true},{"unlocked":true}]}')}}));t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Constants.ts","./PlantConfig.ts","./GardenScene.ts","./PlantComponent.ts","./PopupSelectSeed.ts","./PopupTool.ts","./CameraProcessingSystem.ts","./GameInputSystem.ts","./LandRenderingSystem.ts","./PlantProcessingSystem.ts","./PlantRenderingSystem.ts","./GameEvent.ts","./GameState.ts","./Garden.ts","./Land.ts","./Plant.ts","./EventTarget.ts","./LocalStorage.ts","./StringUtils.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Plant.ts",["cc"],(function(t){"use strict";var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){var a,e;t({PlantSize:void 0,PlantStatusType:void 0}),n._RF.push({},"0ab8boy5ydCzqSwxJSzb4sS","Plant",void 0),function(t){t[t.Sprout=0]="Sprout",t[t.Sapling=1]="Sapling",t[t.Mature=2]="Mature"}(a||(a=t("PlantSize",{}))),function(t){t[t.Worm=0]="Worm",t[t.Dry=1]="Dry"}(e||(e=t("PlantStatusType",{}))),n._RF.pop()}}}));

System.register("chunks:///_virtual/PlantComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constants.ts","./StringUtils.ts"],(function(t){"use strict";var e,o,s,i,n,r,a,l,d,h,u,p,c,m,N,v;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,s=t.initializerDefineProperty,i=t.assertThisInitialized,n=t.createForOfIteratorHelperLoose},function(t){r=t.cclegacy,a=t._decorator,l=t.SpriteFrame,d=t.Vec3,h=t.Label,u=t.instantiate,p=t.Node,c=t.Sprite,m=t.Component},function(t){N=t.Constants},function(t){v=t.toHourMinSec}],execute:function(){var f,P,g,b,y;r._RF.push({},"7865329OKBPiq+nR+pIYnyH","PlantComponent",void 0);var H=a.ccclass,C=a.property;t("PlantComponent",(f=H("PlantComponent"),P=C([l]),f((y=e((b=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n))||this,s(e,"statusSpriteFrames",y,i(e)),e.label=void 0,e.labelNode=void 0,e.renderRoot2D=void 0,e.renderPlantNode=void 0,e.statusNodes=void 0,e.pos=new d,e.temVec=new d,e.isZooming=!1,e}o(e,t);var r=e.prototype;return r.onLoad=function(){this.renderRoot2D=this.node.getChildByName("RenderRoot2D"),this.labelNode=this.renderRoot2D.getChildByName("Label"),this.statusNodes=new Array,this.label=this.labelNode.getComponent(h)},r.setRenderPlantPrefab=function(t){this.renderPlantNode&&(this.renderPlantNode.removeFromParent(),this.renderPlantNode=void 0),this.renderPlantNode=u(t),this.node.addChild(this.renderPlantNode)},r.setPlantStatuses=function(t){for(var e,o=n(this.statusNodes);!(e=o()).done;){e.value.removeFromParent()}this.statusNodes.length=0;for(var s,i=n(t);!(s=i()).done;){var r=s.value,a=new p;a.scale.set(.2,.2,.2),a.layer=this.labelNode.layer,this.renderRoot2D.addChild(a),this.statusNodes.push(a),a.addComponent(c).spriteFrame=this.statusSpriteFrames[r.type]}},r.updateTextPosition=function(t,e){this.isZooming=t.orthoHeight===N.SHOW_DETAIL_ORTHO_HEIGHT,this.label.node.active=this.isZooming;for(var o=0;o<this.statusNodes.length;o++)this.statusNodes[o].active=this.isZooming;if(this.isZooming){t.camera.update(),t.convertToUINode(this.renderRoot2D.worldPosition,this.labelNode.parent,this.pos);var s=t.orthoHeight/N.SHOW_DETAIL_ORTHO_HEIGHT;console.log(s),this.labelNode.setPosition(this.pos),e&&this.labelNode.position.add(e);for(var i=0;i<this.statusNodes.length;i++)this.statusNodes[i].setPosition(this.pos),this.temVec.set(20+20*i,47,0),this.statusNodes[i].position.add(this.temVec)}},r.updateTime=function(t){this.label.string=t>0?v(t):""},e}(m)).prototype,"statusSpriteFrames",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=b))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/PlantConfig.ts",["cc"],(function(n){"use strict";var t;return{setters:[function(n){t=n.cclegacy}],execute:function(){t._RF.push({},"f8f8d8kLLRPy6u1H0StefIy","PlantConfig",void 0);n("plantConfigs",{plant_00:{id:"plant_00",hp:1,grownTime:3600,premium:!1},plant_01:{id:"plant_01",hp:2,grownTime:7200,premium:!1},plant_02:{id:"plant_02",hp:3,grownTime:9e3,premium:!1},plant_03:{id:"plant_03",hp:4,grownTime:10800,premium:!1},plant_04:{id:"plant_04",hp:5,grownTime:12600,premium:!1}});t._RF.pop()}}}));

System.register("chunks:///_virtual/PlantProcessingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./PlantConfig.ts","./Constants.ts","./GameEvent.ts","./Plant.ts","./EventTarget.ts","./index.js"],(function(e){"use strict";var t,a,n,i,o,r,l,s,c,d,g,f,h;return{setters:[function(e){t=e.inheritsLoose,a=e.createForOfIteratorHelperLoose,n=e.applyDecoratedDescriptor,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy},null,function(e){l=e.plantConfigs},function(e){s=e.Constants},function(e){c=e.GameEvent},function(e){d=e.PlantSize,g=e.PlantStatusType},function(e){f=e.default},function(e){h=e.default}],execute:function(){var u,p,v,m,S,y,P,b,k;r._RF.push({},"6ac05V8cKtOybnaLTrXx4rH","PlantProcessingSystem",void 0);e("PlantProcessingSytem",(u=h.Inject("scene"),p=h.Inject("camera"),v=h.Inject("localStorage"),m=h.Inject("gameState"),S=function(e){function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,i(t,"scene",y,o(t)),i(t,"camera",P,o(t)),i(t,"localStorage",b,o(t)),i(t,"gameState",k,o(t)),t}t(n,e);var r=n.prototype;return r.initialized=function(){f.on(c.Plant,this.onPlantSeed,this),f.on(c.Water,this.onWatering,this),f.on(c.Fertilize,this.onFertilizing,this),f.on(c.MovePlant,this.onMoving,this)},r.onPlantSeed=function(e){if(e){var t=this.localStorage.getGardenData();if(void 0!==this.gameState.selectedLand&&void 0!==this.gameState.selectedBlock){if(this.gameState.selectedLand>=t.lands.length)throw Error("selecting land index greater than total lands");var a=t.lands[this.gameState.selectedLand];if(void 0===a.plants&&(a.plants=new Array),this.gameState.selectedBlock>=s.LAND_TOTAL_BLOCK)throw Error("selecting block index greater than total blocks");var n=l[e];if(!n)throw Error("No config data for plant with id = "+e);var i={id:n.id,blockIndex:this.gameState.selectedBlock,hp:n.hp,size:d.Sprout,plantTime:Date.now(),statuses:[{type:g.Dry,time:0}]};a.plants.push(i)}}},r.onWatering=function(){if(void 0!==this.gameState.selectedLand&&void 0!==this.gameState.selectedBlock){var e=this.localStorage.getGardenData();if(this.gameState.selectedLand>=e.lands.length)throw Error("selecting land index greater than total lands");for(var t,n=e.lands[this.gameState.selectedLand],i=a(n.plants);!(t=i()).done;){var o=t.value;if(o.blockIndex===this.gameState.selectedBlock)for(var r,l=a(o.statuses);!(r=l()).done;){var s=r.value;if(s.type===g.Dry){var c=o.statuses.indexOf(s);c>=0&&o.statuses.splice(c,1);break}}}}},r.onFertilizing=function(){if(void 0!==this.gameState.selectedLand&&void 0!==this.gameState.selectedBlock){var e=this.localStorage.getGardenData();if(this.gameState.selectedLand>=e.lands.length)throw Error("selecting land index greater than total lands");for(var t,n=e.lands[this.gameState.selectedLand],i=a(n.plants);!(t=i()).done;){var o=t.value;if(o.blockIndex===this.gameState.selectedBlock){var r=o.skipTime?o.skipTime:0;return void(o.skipTime=r+s.FERTILIZE_SKIP_TIME)}}}},r.onMoving=function(){this.gameState.movingPlant=!0},r.process=function(){for(var e,t=this.localStorage.getGardenData(),n=Date.now(),i=a(t.lands);!(e=i()).done;){var o=e.value;if(o.plants)for(var r,s=a(o.plants);!(r=s()).done;){var c=r.value,g=(n-c.plantTime)/1e3,f=l[c.id],h=c.skipTime?c.skipTime:0,u=f.grownTime-g-h;if(u>0){var p=1-u/f.grownTime;c.size=p<.5?d.Sprout:d.Sapling}else c.size=d.Mature}}},r.dispose=function(){f.off(c.Plant,this.onPlantSeed,this),f.off(c.Water,this.onWatering,this),f.off(c.Fertilize,this.onFertilizing,this),f.off(c.MovePlant,this.onMoving,this)},n}(h.System),y=n(S.prototype,"scene",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=n(S.prototype,"camera",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=n(S.prototype,"localStorage",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=n(S.prototype,"gameState",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S));r._RF.pop()}}}));

System.register("chunks:///_virtual/PlantRenderingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./PlantConfig.ts","./PlantComponent.ts","./index.js"],(function(t){"use strict";var e,n,a,i,l,r,s,o,p,u,d;return{setters:[function(t){e=t.inheritsLoose,n=t.createForOfIteratorHelperLoose,a=t.applyDecoratedDescriptor,i=t.initializerDefineProperty,l=t.assertThisInitialized},function(t){r=t.cclegacy,s=t.instantiate,o=t.Vec3},null,function(t){p=t.plantConfigs},function(t){u=t.PlantComponent},function(t){d=t.default}],execute:function(){var c,h,g,f,P,b,v,m,y,M,S;r._RF.push({},"7bfa2VhIgNBQLkmDS2HXlGA","PlantRenderingSystem",void 0);t("PlantRenderingSytem",(c=d.Inject("scene"),h=d.Inject("camera"),g=d.Inject("localStorage"),f=d.Inject("plantPrefab"),P=d.Inject("renderPlantPrefabs"),b=function(t){function a(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,i(e,"scene",v,l(e)),i(e,"camera",m,l(e)),i(e,"localStorage",y,l(e)),i(e,"plantPrefab",M,l(e)),i(e,"renderPlantPrefabs",S,l(e)),e.landGroup=void 0,e.plantGroup=void 0,e.labelPlantGroup=void 0,e.plantInLandMapping=void 0,e.plantSizeMapping=void 0,e.plantStatusMapping=void 0,e.plantTextOffset=new o(0,70,0),e.currentPlant=void 0,e}e(a,t);var r=a.prototype;return r.initialized=function(){this.plantInLandMapping=new Map,this.plantSizeMapping=new Map,this.plantStatusMapping=new Map,this.landGroup=this.scene.getChildByName("LandGroup"),this.plantGroup=this.scene.getChildByName("PlantGroup");var t=this.scene.getChildByName("UI_Canvas");this.labelPlantGroup=t.getChildByName("LabelPlantGroup")},r.newPlant=function(t,e){var a=this.landGroup.getChildByName("Land_"+e);if(!a)throw Error("Land_"+e+" not existed on map");var i=a.getChildByName("blocks");if(t.blockIndex>=i.children.length)throw Error("Plant "+t.id+" has block index = "+t.blockIndex+" is greater than blocks's size");var l=i.children[t.blockIndex],r=s(this.plantPrefab);r.setPosition(l.getWorldPosition()),this.plantGroup.addChild(r);var o=r.getComponent(u);o.setRenderPlantPrefab(this.renderPlantPrefabs[t.size]),o.setPlantStatuses(t.statuses),this.plantInLandMapping.get(e).set(t.blockIndex,r),this.plantSizeMapping.set(r.uuid,t.size);for(var p,d=[],c=n(t.statuses);!(p=c()).done;){var h=p.value;d.push(h.type)}return this.plantStatusMapping.set(r.uuid,d),r},r.deletePlantNode=function(t,e){var n=this.plantInLandMapping.get(t),a=n.get(e);this.plantSizeMapping.delete(a.uuid),this.plantStatusMapping.delete(a.uuid),a.removeFromParent(),n.delete(e)},r.updatePlants=function(){var t=this.localStorage.getGardenData();if(t)for(var e=t.lands,a=0;a<e.length;a++){if(a>=this.landGroup.children.length)throw Error("Land with idx = "+a+" not existed on map");var i=e[a];if(i.unlocked&&i.plants){this.plantInLandMapping.has(a)||this.plantInLandMapping.set(a,new Map);for(var l,r=this.plantInLandMapping.get(a),s=n(i.plants);!(l=s()).done;){var o=l.value;if(r.has(o.blockIndex)){if(this.currentPlant=r.get(o.blockIndex),this.plantSizeMapping.get(this.currentPlant.uuid)!==o.size)this.currentPlant.getComponent(u).setRenderPlantPrefab(this.renderPlantPrefabs[o.size]),this.plantSizeMapping.set(this.currentPlant.uuid,o.size);if(this.plantStatusMapping.get(this.currentPlant.uuid).length!==o.statuses.length){this.currentPlant.getComponent(u).setPlantStatuses(o.statuses);for(var d,c=[],h=n(o.statuses);!(d=h()).done;){var g=d.value;c.push(g.type)}this.plantStatusMapping.set(this.currentPlant.uuid,c)}}else this.currentPlant=this.newPlant(o,a);var f=this.currentPlant.getComponent(u),P=p[o.id],b=(Date.now()-o.plantTime)/1e3,v=o.skipTime?o.skipTime:0,m=P.grownTime-b-v;f.updateTime(m),f.updateTextPosition(this.camera,this.plantTextOffset)}if(r.size!==i.plants.length)for(var y,M=n(r);!(y=M()).done;){for(var S,I=y.value[0],z=!1,w=n(i.plants);!(S=w()).done;){S.value.blockIndex===I&&(z=!0)}z||this.deletePlantNode(a,I)}}}},r.process=function(){this.updatePlants()},r.dispose=function(){},a}(d.System),v=a(b.prototype,"scene",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=a(b.prototype,"camera",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=a(b.prototype,"localStorage",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=a(b.prototype,"plantPrefab",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=a(b.prototype,"renderPlantPrefabs",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b));r._RF.pop()}}}));

System.register("chunks:///_virtual/PopupSelectSeed.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameEvent.ts","./EventTarget.ts"],(function(e){"use strict";var t,n,c,o,i,u;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,c=e._decorator,o=e.Component},function(e){i=e.GameEvent},function(e){u=e.default}],execute:function(){var r;n._RF.push({},"88b43Dzh+dBnLrzmp5945Wu","PopupSelectSeed",void 0);var s=c.ccclass;e("PopupSelectSeed",s("PopupSelectSeed")(r=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var c=n.prototype;return c.plant=function(e,t){u.emit(i.Plant,t),this.hide()},c.hide=function(){this.node.active=!1,u.emit(i.ClearSelect)},n}(o))||r);n._RF.pop()}}}));

System.register("chunks:///_virtual/PopupTool.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameEvent.ts","./EventTarget.ts"],(function(t){"use strict";var e,o,i,n,c,r;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,i=t._decorator,n=t.Component},function(t){c=t.GameEvent},function(t){r=t.default}],execute:function(){var u;o._RF.push({},"9ddefGqg0dAVpQkQmCMz4vd","PopupTool",void 0);var s=i.ccclass;t("PopupTool",s("PopupTool")(u=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var i=o.prototype;return i.hide=function(){this.node.active=!1,r.emit(c.ClearSelect)},i.water=function(){r.emit(c.Water),this.hide()},i.fertilize=function(){r.emit(c.Fertilize),this.hide()},i.move=function(){r.emit(c.MovePlant),this.node.active=!1},o}(n))||u);o._RF.pop()}}}));

System.register("chunks:///_virtual/StringUtils.ts",["cc"],(function(t){"use strict";var r;return{setters:[function(t){r=t.cclegacy}],execute:function(){r._RF.push({},"c49faWyWCNIFoa4u0bAQSxE","StringUtils",void 0);t("formatTime",(function(t){var r=Math.floor(t/3600);if(r>0)return r+" hrs";var o=Math.floor((t-3600*r)/60);return o>0?o+" mins":Math.floor(t-3600*r-60*o)+" secs"})),t("toHourMinSec",(function(t){var r=Math.floor(t/3600),o=Math.floor((t-3600*r)/60),n=Math.floor(t-3600*r-60*o),e="";return r<10&&(e+="0"),e+=r,e+=":",o<10&&(e+="0"),e+=o,e+=":",n<10&&(e+="0"),e+=n}));r._RF.pop()}}}));

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