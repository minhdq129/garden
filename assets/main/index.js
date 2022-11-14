System.register("chunks:///_virtual/Constants.ts",["cc"],(function(t){"use strict";var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){n._RF.push({},"ec99aRQ9OtPeJTqi7gqtULU","Constants",void 0);var s=t("Constants",(function(){}));s.LAND_TOTAL_BLOCK=9,s.FERTILIZE_SKIP_TIME=1800,n._RF.pop()}}}));

System.register("chunks:///_virtual/EventTarget.ts",["cc"],(function(e){"use strict";var t,c;return{setters:[function(e){t=e.cclegacy,c=e.EventTarget}],execute:function(){t._RF.push({},"526c2IS4YBHsJe+yM4iuclr","EventTarget",void 0);e("default",new c);t._RF.pop()}}}));

System.register("chunks:///_virtual/GameInputSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./index.js"],(function(e){"use strict";var t,a,o,i,n,r,l,s,c,h,p,u;return{setters:[function(e){t=e.inheritsLoose,a=e.createForOfIteratorHelperLoose,o=e.applyDecoratedDescriptor,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,l=e.input,s=e.Input,c=e.Vec3,h=e.MeshRenderer,p=e.geometry},null,function(e){u=e.default}],execute:function(){var d,g,m,v,f,y,S,T,b;r._RF.push({},"db0b5PpFcRGC4l8ejhxnsD8","GameInputSystem",void 0);e("GameInputSystem",(d=u.Inject("scene"),g=u.Inject("camera"),m=u.Inject("localStorage"),v=u.Inject("gameState"),f=function(e){function o(){for(var t,a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o))||this,i(t,"scene",y,n(t)),i(t,"camera",S,n(t)),i(t,"localStorage",T,n(t)),i(t,"gameState",b,n(t)),t.landGroup=void 0,t.popupSelectSeed=void 0,t.popupTool=void 0,t.cameraLastPos=void 0,t.ray=new p.Ray,t}t(o,e);var r=o.prototype;return r.initialized=function(){this.landGroup=this.scene.getChildByName("LandGroup");var e=this.scene.getChildByName("UI_Canvas");this.popupSelectSeed=e.getChildByName("PopupSelectSeed"),this.popupTool=e.getChildByName("PopupTool"),l.on(s.EventType.TOUCH_MOVE,this.onTouchMove,this),l.on(s.EventType.TOUCH_END,this.onTouchEnd,this)},r.onTouchMove=function(e){var t=-e.getDeltaY(),a=this.camera.node.rotation.getEulerAngles(new c),o=e.getDeltaX()*Math.sin(a.y*Math.PI/180),i=-e.getDeltaX()*Math.cos(a.y*Math.PI/180);this.cameraLastPos&&this.camera.node.setPosition(this.camera.node.position.add(this.cameraLastPos)),this.cameraLastPos=new c(i/30,t/30,o/30)},r.onTouchEnd=function(e){this.checkTouchLand(e.touch.getLocation())},r.checkTouchLand=function(e){var t=this.camera.screenPointToRay(e.x,e.y,this.ray),a=this.localStorage.getGardenData();if(a){for(var o=a.lands,i=!1,n=0;n<o.length;n++){var r="Land_"+n;if(n>=this.landGroup.children.length)throw Error(r+" not existed on map");var l=o[n];if(l.unlocked){var s=this.landGroup.children[n].getChildByName("Plane");if(s){var c=s.getComponentInChildren(h);if(0!==p.intersect.rayModel(t,c.model)){var u=this.landGroup.getChildByName(r);if(!u)throw Error(r+" not existed on map");for(var d=u.getChildByName("blocks"),g=0;g<d.children.length;g++){var m=d.children[g].getComponentInChildren(h);if(p.intersect.rayModel(t,m.model)>0){this.onTouchBlock(l,n,g),i=!0;break}}}}}}i||(this.gameState.selectingLand=void 0,this.gameState.selectingBlock=void 0,this.gameState.movingPlant=void 0,this.popupSelectSeed.active=!1,this.popupTool.active=!1)}},r.onTouchBlock=function(e,t,o){var i=!0;if(e.plants)for(var n,r=a(e.plants);!(n=r()).done;){if(n.value.blockIndex===o){i=!1;break}}if(void 0!==this.gameState.movingPlant&&t===this.gameState.selectingLand){if(i)for(var l,s=a(e.plants);!(l=s()).done;){var c=l.value;if(c.blockIndex===this.gameState.selectingBlock){c.blockIndex=o;break}}this.popupSelectSeed.active=!1,this.popupTool.active=!1}else this.popupSelectSeed.active=i,this.popupTool.active=!i;this.gameState.movingPlant=void 0,this.gameState.selectingLand=t,this.gameState.selectingBlock=o},r.process=function(){},r.dispose=function(){l.off(s.EventType.TOUCH_MOVE,this.onTouchMove,this),l.off(s.EventType.TOUCH_START,this.onTouchEnd,this)},o}(u.System),y=o(f.prototype,"scene",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=o(f.prototype,"camera",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=o(f.prototype,"localStorage",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=o(f.prototype,"gameState",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameState.ts",["cc"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"d1b527tmnZELILY/NQ5aJ0i","GameState",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/Garden.ts",["cc"],(function(){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"d4e3fm3xdhJBZ7C0Rg1x+oE","Garden",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/GardenScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./GameInputSystem.ts","./PlantProcessingSystem.ts","./PlantRenderingSystem.ts","./LocalStorage.ts","./index.js"],(function(e){"use strict";var t,r,n,a,i,s,o,l,c,d,u,p,f,m,g,S;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){i=e.cclegacy,s=e._decorator,o=e.Prefab,l=e.screen,c=e.director,d=e.CameraComponent,u=e.Component},null,function(e){p=e.GameInputSystem},function(e){f=e.PlantProcessingSytem},function(e){m=e.PlantRenderingSytem},function(e){g=e.LocalStorage},function(e){S=e.default}],execute:function(){var h,w,y,P,b,v,G;i._RF.push({},"734feVQSzdG76tFES30ltsr","GardenScene",void 0);var C=s.ccclass,j=s.property;e("GardenScene",(h=C("GardenScene"),w=j([o]),y=j(o),h((v=t((b=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,n(t,"renderPlantPrefabs",v,a(t)),n(t,"plantPrefab",G,a(t)),t.world=void 0,t}r(t,e);var i=t.prototype;return i.onLoad=function(){l.requestFullScreen()},i.start=function(){var e=c.getScene(),t=e.getChildByName("Camera").getComponent(d),r=new g;this.world=new S.World,this.world.register("scene",e),this.world.register("camera",t),this.world.register("localStorage",r),this.world.register("gameState",{}),this.world.register("renderPlantPrefabs",this.renderPlantPrefabs),this.world.register("plantPrefab",this.plantPrefab),this.world.addSystem(new m,!1),this.world.addSystem(new p,!0),this.world.addSystem(new f,!0)},i.update=function(e){this.world.setDelta(e),this.world.processActiveSystem(),this.world.processPassiveSystem()},t}(u)).prototype,"renderPlantPrefabs",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=t(b.prototype,"plantPrefab",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=b))||P));i._RF.pop()}}}));

System.register("chunks:///_virtual/Land.ts",["cc"],(function(){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"56fdez77edAO51J0uO+1BSC","Land",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/LocalStorage.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"3aaa9U3fW9K8bw2EmSPBgfS","LocalStorage",void 0);e("LocalStorage",(function(){var e=this;if(this.storage={},this.gardenData=void 0,this.getGardenData=function(){return e.gardenData||(e.gardenData=JSON.parse(e.getItem("garden"))),e.gardenData},this.clear=function(){if(window.localStorage)return window.localStorage.clear();e.storage={}},this.getItem=function(t){return window.localStorage?window.localStorage.getItem(t):e.storage[t]},this.setItem=function(t,a){if(window.localStorage)return window.localStorage.setItem(t,a);e.storage[t]=a},this.removeItem=function(t){if(window.localStorage)return window.localStorage.removeItem(t);e.storage[t]=null,delete e.storage[t]},!this.getItem("garden")){this.setItem("garden",'{"lands":[{"unlocked":true},{"unlocked":true},{"unlocked":true},{"unlocked":true},{"unlocked":true},{"unlocked":true}]}')}}));t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Constants.ts","./PlantConfig.ts","./GardenScene.ts","./PlantComponent.ts","./PopupSelectSeed.ts","./PopupTool.ts","./GameInputSystem.ts","./PlantProcessingSystem.ts","./PlantRenderingSystem.ts","./GameState.ts","./Garden.ts","./Land.ts","./Plant.ts","./EventTarget.ts","./LocalStorage.ts","./StringUtils.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Plant.ts",["cc"],(function(t){"use strict";var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){var a,e;t({PlantSize:void 0,PlantStatusType:void 0}),n._RF.push({},"0ab8boy5ydCzqSwxJSzb4sS","Plant",void 0),function(t){t[t.Sprout=0]="Sprout",t[t.Sapling=1]="Sapling",t[t.Mature=2]="Mature"}(a||(a=t("PlantSize",{}))),function(t){t[t.Worm=0]="Worm",t[t.Dry=1]="Dry"}(e||(e=t("PlantStatusType",{}))),n._RF.pop()}}}));

System.register("chunks:///_virtual/PlantComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtils.ts"],(function(t){"use strict";var e,o,i,n,s,a,r,d,l,u,h,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,a=t._decorator,r=t.SpriteFrame,d=t.Vec3,l=t.Label,u=t.instantiate,h=t.Component},function(t){p=t.toHourMinSec}],execute:function(){var c,N,P,f,m;s._RF.push({},"7865329OKBPiq+nR+pIYnyH","PlantComponent",void 0);var b=a.ccclass,v=a.property;t("PlantComponent",(c=b("PlantComponent"),N=v([r]),c((m=e((f=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s))||this,i(e,"statusSpriteFrames",m,n(e)),e.label=void 0,e.labelNode=void 0,e.renderRoot2D=void 0,e.renderPlantNode=void 0,e.statusNode=void 0,e.pos=new d,e.statusOffset=new d(20,25,0),e}o(e,t);var s=e.prototype;return s.onLoad=function(){this.renderRoot2D=this.node.getChildByName("RenderRoot2D"),this.labelNode=this.renderRoot2D.getChildByName("Label"),this.statusNode=this.renderRoot2D.getChildByName("StatusNode"),this.label=this.labelNode.getComponent(l)},s.setRenderPlantPrefab=function(t){this.renderPlantNode&&(this.renderPlantNode.removeFromParent(),this.renderPlantNode=void 0),this.renderPlantNode=u(t),this.node.addChild(this.renderPlantNode)},s.setPlantStatuses=function(t){this.statusNode.active=!!t},s.updateTextPosition=function(t,e){t.camera.update(),t.convertToUINode(this.renderRoot2D.worldPosition,this.labelNode.parent,this.pos),this.labelNode.setPosition(this.pos),e&&this.labelNode.position.add(e),this.statusNode.setPosition(this.pos),this.statusNode.position.add(this.statusOffset)},s.updateTime=function(t){t>0?this.label.string=p(t):this.labelNode.active=!1},e}(h)).prototype,"statusSpriteFrames",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=f))||P));s._RF.pop()}}}));

System.register("chunks:///_virtual/PlantConfig.ts",["cc"],(function(n){"use strict";var t;return{setters:[function(n){t=n.cclegacy}],execute:function(){t._RF.push({},"f8f8d8kLLRPy6u1H0StefIy","PlantConfig",void 0);n("plantConfigs",{plant_00:{id:"plant_00",hp:1,grownTime:3600,premium:!1},plant_01:{id:"plant_01",hp:2,grownTime:7200,premium:!1},plant_02:{id:"plant_02",hp:3,grownTime:9e3,premium:!1},plant_03:{id:"plant_03",hp:4,grownTime:10800,premium:!1},plant_04:{id:"plant_04",hp:5,grownTime:12600,premium:!1}});t._RF.pop()}}}));

System.register("chunks:///_virtual/PlantProcessingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./PlantConfig.ts","./Constants.ts","./Plant.ts","./EventTarget.ts","./index.js"],(function(t){"use strict";var e,n,a,i,o,l,r,s,c,g,d,h;return{setters:[function(t){e=t.inheritsLoose,n=t.createForOfIteratorHelperLoose,a=t.applyDecoratedDescriptor,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){l=t.cclegacy},null,function(t){r=t.plantConfigs},function(t){s=t.Constants},function(t){c=t.PlantSize,g=t.PlantStatusType},function(t){d=t.default},function(t){h=t.default}],execute:function(){var f,u,p,m,v,S,w,y,b;l._RF.push({},"6ac05V8cKtOybnaLTrXx4rH","PlantProcessingSystem",void 0);t("PlantProcessingSytem",(f=h.Inject("scene"),u=h.Inject("camera"),p=h.Inject("localStorage"),m=h.Inject("gameState"),v=function(t){function a(){for(var e,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return e=t.call.apply(t,[this].concat(a))||this,i(e,"scene",S,o(e)),i(e,"camera",w,o(e)),i(e,"localStorage",y,o(e)),i(e,"gameState",b,o(e)),e}e(a,t);var l=a.prototype;return l.initialized=function(){d.on("plant",this.onPlantSeed,this),d.on("water",this.onWatering,this),d.on("fertilize",this.onFertilizing,this),d.on("move",this.onMoving,this)},l.onPlantSeed=function(t){if(t){var e=this.localStorage.getGardenData();if(void 0!==this.gameState.selectingLand&&void 0!==this.gameState.selectingBlock){if(this.gameState.selectingLand>=e.lands.length)throw Error("selecting land index greater than total lands");var n=e.lands[this.gameState.selectingLand];if(void 0===n.plants&&(n.plants=new Array),this.gameState.selectingBlock>=s.LAND_TOTAL_BLOCK)throw Error("selecting block index greater than total blocks");var a=r[t];if(!a)throw Error("No config data for plant with id = "+t);var i={id:a.id,blockIndex:this.gameState.selectingBlock,hp:a.hp,size:c.Sprout,plantTime:Date.now(),cooldown:a.grownTime,status:{type:g.Dry,time:0}};n.plants.push(i)}}},l.onWatering=function(){if(void 0!==this.gameState.selectingLand&&void 0!==this.gameState.selectingBlock){var t=this.localStorage.getGardenData();if(this.gameState.selectingLand>=t.lands.length)throw Error("selecting land index greater than total lands");for(var e,a=t.lands[this.gameState.selectingLand],i=n(a.plants);!(e=i()).done;){var o=e.value;if(o.blockIndex===this.gameState.selectingBlock&&o.status&&o.status.type===g.Dry)return void(o.status=void 0)}}},l.onFertilizing=function(){if(void 0!==this.gameState.selectingLand&&void 0!==this.gameState.selectingBlock){var t=this.localStorage.getGardenData();if(this.gameState.selectingLand>=t.lands.length)throw Error("selecting land index greater than total lands");for(var e,a=t.lands[this.gameState.selectingLand],i=n(a.plants);!(e=i()).done;){var o=e.value;if(o.blockIndex===this.gameState.selectingBlock){var l=o.skipTime?o.skipTime:0;return void(o.skipTime=l+s.FERTILIZE_SKIP_TIME)}}}},l.onMoving=function(){this.gameState.movingPlant=!0},l.process=function(){for(var t,e=this.localStorage.getGardenData(),a=Date.now(),i=n(e.lands);!(t=i()).done;){var o=t.value;if(o.plants)for(var l,s=n(o.plants);!(l=s()).done;){var g=l.value,d=(a-g.plantTime)/1e3,h=r[g.id],f=g.skipTime?g.skipTime:0;if(g.cooldown=h.grownTime-d-f,g.cooldown>0){var u=1-g.cooldown/h.grownTime;g.size=u<.5?c.Sprout:c.Sapling}else g.size=c.Mature}}},l.dispose=function(){d.off("plant",this.onPlantSeed,this),d.off("water",this.onWatering,this),d.off("fertilize",this.onFertilizing,this),d.off("move",this.onMoving,this)},a}(h.System),S=a(v.prototype,"scene",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=a(v.prototype,"camera",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=a(v.prototype,"localStorage",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=a(v.prototype,"gameState",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v));l._RF.pop()}}}));

System.register("chunks:///_virtual/PlantRenderingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./PlantComponent.ts","./index.js"],(function(t){"use strict";var e,n,a,i,l,r,s,o,p,u;return{setters:[function(t){e=t.inheritsLoose,n=t.createForOfIteratorHelperLoose,a=t.applyDecoratedDescriptor,i=t.initializerDefineProperty,l=t.assertThisInitialized},function(t){r=t.cclegacy,s=t.instantiate,o=t.Vec3},null,function(t){p=t.PlantComponent},function(t){u=t.default}],execute:function(){var d,c,h,g,f,P,b,m,v,M,S;r._RF.push({},"7bfa2VhIgNBQLkmDS2HXlGA","PlantRenderingSystem",void 0);t("PlantRenderingSytem",(d=u.Inject("scene"),c=u.Inject("camera"),h=u.Inject("localStorage"),g=u.Inject("plantPrefab"),f=u.Inject("renderPlantPrefabs"),P=function(t){function a(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,i(e,"scene",b,l(e)),i(e,"camera",m,l(e)),i(e,"localStorage",v,l(e)),i(e,"plantPrefab",M,l(e)),i(e,"renderPlantPrefabs",S,l(e)),e.landGroup=void 0,e.plantGroup=void 0,e.labelPlantGroup=void 0,e.plantInLandMapping=void 0,e.plantSizeMapping=void 0,e.plantStatusMapping=void 0,e.plantTextOffset=new o(0,50,5),e.currentPlant=void 0,e}e(a,t);var r=a.prototype;return r.initialized=function(){this.plantInLandMapping=new Map,this.plantSizeMapping=new Map,this.plantStatusMapping=new Map,this.landGroup=this.scene.getChildByName("LandGroup"),this.plantGroup=this.scene.getChildByName("PlantGroup");var t=this.scene.getChildByName("UI_Canvas");this.labelPlantGroup=t.getChildByName("LabelPlantGroup")},r.newPlant=function(t,e){var n=this.landGroup.getChildByName("Land_"+e);if(!n)throw Error("Land_"+e+" not existed on map");var a=n.getChildByName("blocks");if(t.blockIndex>=a.children.length)throw Error("Plant "+t.id+" has block index = "+t.blockIndex+" is greater than blocks's size");var i=a.children[t.blockIndex],l=s(this.plantPrefab);l.setPosition(i.getWorldPosition()),this.plantGroup.addChild(l);var r=l.getComponent(p);return r.setRenderPlantPrefab(this.renderPlantPrefabs[t.size]),r.setPlantStatuses(t.status),this.plantInLandMapping.get(e).set(t.blockIndex,l),this.plantSizeMapping.set(l.uuid,t.size),this.plantStatusMapping.set(l.uuid,t.status),l},r.deletePlantNode=function(t,e){var n=this.plantInLandMapping.get(t),a=n.get(e);this.plantSizeMapping.delete(a.uuid),this.plantStatusMapping.delete(a.uuid),a.removeFromParent(),n.delete(e)},r.updatePlants=function(){var t=this.localStorage.getGardenData();if(t){for(var e=t.lands,a=0;a<e.length;a++){if(a>=this.landGroup.children.length)throw Error("Land with idx = "+a+" not existed on map");var i=e[a];if(i.unlocked&&i.plants){this.plantInLandMapping.has(a)||this.plantInLandMapping.set(a,new Map);for(var l,r=this.plantInLandMapping.get(a),s=n(i.plants);!(l=s()).done;){var o=l.value;if(r.has(o.blockIndex)){if(this.currentPlant=r.get(o.blockIndex),this.plantSizeMapping.get(this.currentPlant.uuid)!==o.size)this.currentPlant.getComponent(p).setRenderPlantPrefab(this.renderPlantPrefabs[o.size]),this.plantSizeMapping.set(this.currentPlant.uuid,o.size);if(this.plantStatusMapping.get(this.currentPlant.uuid)!==o.status)this.currentPlant.getComponent(p).setPlantStatuses(o.status),this.plantStatusMapping.set(this.currentPlant.uuid,o.status)}else this.currentPlant=this.newPlant(o,a);var u=this.currentPlant.getComponent(p);u.updateTime(o.cooldown),u.updateTextPosition(this.camera,this.plantTextOffset)}if(r.size!==i.plants.length)for(var d,c=n(r);!(d=c()).done;){for(var h,g=d.value[0],f=!1,P=n(i.plants);!(h=P()).done;){h.value.blockIndex===g&&(f=!0)}f||this.deletePlantNode(a,g)}}}console.log(this.plantGroup.children.length)}},r.process=function(){this.updatePlants()},r.dispose=function(){},a}(u.System),b=a(P.prototype,"scene",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=a(P.prototype,"camera",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=a(P.prototype,"localStorage",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=a(P.prototype,"plantPrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=a(P.prototype,"renderPlantPrefabs",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P));r._RF.pop()}}}));

System.register("chunks:///_virtual/PopupSelectSeed.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EventTarget.ts"],(function(e){"use strict";var t,n,o,c,u;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,c=e.Component},function(e){u=e.default}],execute:function(){var i;n._RF.push({},"88b43Dzh+dBnLrzmp5945Wu","PopupSelectSeed",void 0);var r=o.ccclass;e("PopupSelectSeed",r("PopupSelectSeed")(i=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var o=n.prototype;return o.plant=function(e,t){u.emit("plant",t),this.hide()},o.hide=function(){this.node.active=!1},n}(c))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/PopupTool.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EventTarget.ts"],(function(t){"use strict";var e,o,i,n,r;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,i=t._decorator,n=t.Component},function(t){r=t.default}],execute:function(){var u;o._RF.push({},"9ddefGqg0dAVpQkQmCMz4vd","PopupTool",void 0);var c=i.ccclass;t("PopupTool",c("PopupTool")(u=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var i=o.prototype;return i.hide=function(){this.node.active=!1},i.water=function(){r.emit("water"),this.hide()},i.fertilize=function(){r.emit("fertilize"),this.hide()},i.move=function(){r.emit("move"),this.hide()},o}(n))||u);o._RF.pop()}}}));

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