System.register("chunks:///_virtual/AnimalRenderingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./ZooComponent.ts","./index.js"],(function(e){"use strict";var n,t,i,o,a,l,r,s,c;return{setters:[function(e){n=e.inheritsLoose,t=e.applyDecoratedDescriptor,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){a=e.cclegacy,l=e.instantiate,r=e.SkeletalAnimation},null,function(e){s=e.ZooComponent},function(e){c=e.default}],execute:function(){var u,d,p,m,f;a._RF.push({},"33d82dgWfRP3qFa8M4vNclt","AnimalRenderingSystem",void 0);e("AnimalRenderingSystem",(u=c.Inject("scene"),d=c.Inject("localStorage"),p=function(e){function t(){for(var n,t=arguments.length,a=new Array(t),l=0;l<t;l++)a[l]=arguments[l];return n=e.call.apply(e,[this].concat(a))||this,i(n,"scene",m,o(n)),i(n,"localStorage",f,o(n)),n.zooGroup=void 0,n.zooNodes=void 0,n}n(t,e);var a=t.prototype;return a.initialized=function(){this.zooGroup=this.scene.getChildByName("ZooGroup")},a.newAnimal=function(e,n){var t=e.getComponent(s);if(t&&t.animalPrefab){var i=l(t.animalPrefab);n.addChild(i);var o=i.getComponent(r);o.play("Armature|Idle"),o.getState("Armature|Idle").speed=3}},a.deleteAnimal=function(e){e.removeAllChildren()},a.updateAnimals=function(){var e=this.localStorage.getGardenData();if(e)for(var n=e.zoos,t=0;t<n.length;t++){var i=n[t],o=this.zooGroup.children[t];if(o){var a=o.getChildByName("AnimalGroup");i.unlocked&&0===a.children.length?this.newAnimal(o,a):!i.unlocked&&a.children.length>0&&this.deleteAnimal(a)}}},a.process=function(){this.updateAnimals()},a.dispose=function(){},t}(c.System),m=t(p.prototype,"scene",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=t(p.prototype,"localStorage",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p));a._RF.pop()}}}));

System.register("chunks:///_virtual/CameraProcessingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./Constants.ts","./index.js"],(function(e){"use strict";var t,i,o,a,r,s,n,c;return{setters:[function(e){t=e.inheritsLoose,i=e.applyDecoratedDescriptor,o=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){r=e.cclegacy,s=e.Vec3},null,function(e){n=e.Constants},function(e){c=e.default}],execute:function(){var l,u,h,m,p,g,d;r._RF.push({},"a7b2bThI51IspotUc3RVGvT","CameraProcessingSystem",void 0);e("CameraProcessingSystem",(l=c.Inject("scene"),u=c.Inject("camera"),h=c.Inject("gameState"),m=function(e){function i(){for(var t,i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r))||this,o(t,"scene",p,a(t)),o(t,"camera",g,a(t)),o(t,"gameState",d,a(t)),t.landGroup=void 0,t.zooGroup=void 0,t.currentZoomTarget=n.SHOW_MAP_ORTHO_HEIGHT,t.cameraPos=new s,t.tempVec=new s,t}t(i,e);var r=i.prototype;return r.initialized=function(){this.zooGroup=this.scene.getChildByName("ZooGroup"),this.landGroup=this.scene.getChildByName("LandGroup"),this.lookAt(25,0,15)},r.lookAt=function(e,t,i){this.tempVec.set(this.camera.node.forward).multiplyScalar(n.CAMERA_DISTANCE),this.cameraPos.set(e,t,i).subtract(this.tempVec),this.camera.node.setPosition(this.cameraPos)},r.process=function(){if(this.gameState.cameraZoomToDetail){if(void 0!==this.gameState.selectedLand){var e=this.landGroup.children[this.gameState.selectedLand];this.lookAt(e.position.x,e.position.y,e.position.z)}else if(void 0!==this.gameState.selectedZoo){var t=this.zooGroup.children[this.gameState.selectedZoo];this.lookAt(t.position.x,t.position.y,t.position.z)}this.currentZoomTarget=n.SHOW_DETAIL_ORTHO_HEIGHT}else this.currentZoomTarget=this.gameState.currentOrthoHeight;var i=this.camera.orthoHeight,o=i+.4*(this.currentZoomTarget-i);Math.abs(o-this.currentZoomTarget)<.01&&(o=this.currentZoomTarget),this.camera.orthoHeight=o},i}(c.System),p=i(m.prototype,"scene",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=i(m.prototype,"camera",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=i(m.prototype,"gameState",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m));r._RF.pop()}}}));

System.register("chunks:///_virtual/Constants.ts",["cc"],(function(t){"use strict";var _;return{setters:[function(t){_=t.cclegacy}],execute:function(){_._RF.push({},"ec99aRQ9OtPeJTqi7gqtULU","Constants",void 0);var n=t("Constants",(function(){}));n.LAND_TOTAL_BLOCK=9,n.FERTILIZE_SKIP_TIME=1800,n.MAX_ORTHO_HEIGHT=50,n.SHOW_MAP_ORTHO_HEIGHT=30,n.SHOW_DETAIL_ORTHO_HEIGHT=10,n.MAP_ZOOM_RATE=.1,n.MAP_DRAG_RATIO=30,n.CAMERA_DISTANCE=350,_._RF.pop()}}}));

System.register("chunks:///_virtual/EventTarget.ts",["cc"],(function(e){"use strict";var t,c;return{setters:[function(e){t=e.cclegacy,c=e.EventTarget}],execute:function(){t._RF.push({},"526c2IS4YBHsJe+yM4iuclr","EventTarget",void 0);e("default",new c);t._RF.pop()}}}));

System.register("chunks:///_virtual/GameEvent.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){var n;e("GameEvent",void 0),t._RF.push({},"802dcSUOelIpr+U4NJnD2Mf","GameEvent",void 0),function(e){e.ClearSelect="GameEvent.ClearSelect",e.Plant="GameEvent.Plant",e.Water="GameEvent.Water",e.Fertilize="GameEvent.Fertilize",e.MovePlant="GameEvent.MovePlant",e.Harvest="GameEvent.Harvest",e.BuyZoo="GameEvent.BuyZoo"}(n||(n=e("GameEvent",{}))),t._RF.pop()}}}));

System.register("chunks:///_virtual/GameHUD.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constants.ts","./GameEvent.ts","./EventTarget.ts"],(function(e){"use strict";var t,a,r,n,i,s,c,o,l,m,u,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,a=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,s=e._decorator,c=e.Camera,o=e.Vec3,l=e.Component},function(e){m=e.Constants},function(e){u=e.GameEvent},function(e){p=e.default}],execute:function(){var f,h,d,C,y;i._RF.push({},"f1b36959pFKfZ6QG9FL2X6r","GameHUD",void 0);var v=s.ccclass,D=s.property;e("GameHUD",(f=v("GameHUD"),h=D(c),f((y=t((C=function(e){function t(){for(var t,a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,r(t,"camera",y,n(t)),t.tempVec=new o,t.cameraPos=new o,t}a(t,e);var i=t.prototype;return i.onBtnZooClick=function(){p.emit(u.ClearSelect),this.tempVec.set(this.camera.node.forward).multiplyScalar(m.CAMERA_DISTANCE),this.cameraPos.set(120,0,90).subtract(this.tempVec),this.camera.node.setPosition(this.cameraPos)},i.onBtnFarmClick=function(){p.emit(u.ClearSelect),this.tempVec.set(this.camera.node.forward).multiplyScalar(m.CAMERA_DISTANCE),this.cameraPos.set(25,0,15).subtract(this.tempVec),this.camera.node.setPosition(this.cameraPos)},t}(l)).prototype,"camera",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=C))||d));i._RF.pop()}}}));

System.register("chunks:///_virtual/GameInputSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./Constants.ts","./GameEvent.ts","./EventTarget.ts","./index.js"],(function(e){"use strict";var t,o,a,i,n,s,c,l,r,h,d,p,u,m,g,v;return{setters:[function(e){t=e.inheritsLoose,o=e.createForOfIteratorHelperLoose,a=e.applyDecoratedDescriptor,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){s=e.cclegacy,c=e.input,l=e.Input,r=e.Vec2,h=e.MeshRenderer,d=e.geometry,p=e.Vec3},null,function(e){u=e.Constants},function(e){m=e.GameEvent},function(e){g=e.default},function(e){v=e.default}],execute:function(){var S,f,T,y,C,_,I,G,L;s._RF.push({},"db0b5PpFcRGC4l8ejhxnsD8","GameInputSystem",void 0);e("GameInputSystem",(S=v.Inject("scene"),f=v.Inject("camera"),T=v.Inject("localStorage"),y=v.Inject("gameState"),C=function(e){function a(){for(var t,o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,i(t,"scene",_,n(t)),i(t,"camera",I,n(t)),i(t,"localStorage",G,n(t)),i(t,"gameState",L,n(t)),t.landGroup=void 0,t.zooGroup=void 0,t.popupSelectSeed=void 0,t.popupTool=void 0,t.popupBuyZoo=void 0,t.tempVec=new p,t.ray=new d.Ray,t}t(a,e);var s=a.prototype;return s.initialized=function(){this.landGroup=this.scene.getChildByName("LandGroup"),this.zooGroup=this.scene.getChildByName("ZooGroup");var e=this.scene.getChildByName("UI_Canvas");this.popupSelectSeed=e.getChildByName("PopupSelectSeed"),this.popupTool=e.getChildByName("PopupTool"),this.popupBuyZoo=e.getChildByName("PopupBuyZoo"),c.on(l.EventType.TOUCH_MOVE,this.onTouchMove,this),c.on(l.EventType.TOUCH_START,this.onTouchStart,this),g.on(m.ClearSelect,this.onClearSelect,this)},s.onTouchStart=function(e){this.checkTouchLand(e.touch.getLocation()),this.checkTouchZoo(e.touch.getLocation()),this.gameState.cameraZoomToDetail=void 0!==this.gameState.selectedLand||void 0!==this.gameState.selectedZoo},s.onTouchMove=function(e){if(!this.gameState.cameraZoomToDetail){var t=e.getTouches();if(1===t.length){var o=-e.getDeltaY(),a=this.camera.node.rotation.getEulerAngles(this.tempVec),i=e.getDeltaX()*Math.sin(a.y*Math.PI/180),n=-e.getDeltaX()*Math.cos(a.y*Math.PI/180);this.tempVec.set(n/u.MAP_DRAG_RATIO,o/u.MAP_DRAG_RATIO,i/u.MAP_DRAG_RATIO),this.camera.node.setPosition(this.camera.node.position.add(this.tempVec))}else{var s=r.distance(t[0].getPreviousLocation(),t[1].getPreviousLocation()),c=r.distance(t[0].getLocation(),t[1].getLocation())-s,l=this.gameState.currentOrthoHeight-c*u.MAP_ZOOM_RATE;l>u.MAX_ORTHO_HEIGHT&&(l=u.MAX_ORTHO_HEIGHT),l<u.SHOW_DETAIL_ORTHO_HEIGHT&&(l=u.SHOW_DETAIL_ORTHO_HEIGHT),this.gameState.currentOrthoHeight=l}}},s.checkTouchZoo=function(e){if(void 0===this.gameState.selectedLand){var t=this.camera.screenPointToRay(e.x,e.y,this.ray),o=this.localStorage.getGardenData();if(o)for(var a=o.zoos,i=0;i<this.zooGroup.children.length;i++){var n=a[i];if(n){var s=this.zooGroup.children[i].getChildByName("Plane");if(s){var c=s.getComponent(h);if(d.intersect.rayModel(t,c.model)>0){this.gameState.selectedZoo=i,this.gameState.selectedLand=void 0,this.gameState.selectedBlock=void 0,this.popupSelectSeed.active=!1,this.popupTool.active=!1,n.unlocked||(this.popupBuyZoo.active=!0);break}this.gameState.selectedZoo=void 0,this.popupBuyZoo.active=!1}}}}},s.checkTouchLand=function(e){var t=this.camera.screenPointToRay(e.x,e.y,this.ray),o=this.localStorage.getGardenData();if(o){for(var a=o.lands,i=!1,n=0;n<a.length;n++){var s="Land_"+n;if(n>=this.landGroup.children.length)throw Error(s+" not existed on map");var c=a[n];if(c.unlocked){var l=this.landGroup.children[n].getChildByName("Plane");if(l){var r=l.getComponentInChildren(h);if(0!==d.intersect.rayModel(t,r.model)){var p=this.landGroup.getChildByName(s);if(!p)throw Error(s+" not existed on map");for(var u=p.getChildByName("blocks"),m=0;m<u.children.length;m++){var g=u.children[m].getComponentInChildren(h);if(d.intersect.rayModel(t,g.model)>0){void 0!==this.gameState.selectedLand&&this.gameState.selectedLand!==n||(this.onTouchBlock(c,n,m),i=!0);break}}}}}}i||(this.gameState.selectedLand=void 0,this.gameState.selectedBlock=void 0,this.gameState.selectedZoo=void 0,this.gameState.movingPlant=void 0,this.popupSelectSeed.active=!1,this.popupTool.active=!1)}},s.onTouchBlock=function(e,t,a){var i=!0;if(e.plants)for(var n,s=o(e.plants);!(n=s()).done;){if(n.value.blockIndex===a){i=!1;break}}if(void 0!==this.gameState.movingPlant&&t===this.gameState.selectedLand){if(i)for(var c,l=o(e.plants);!(c=l()).done;){var r=c.value;if(r.blockIndex===this.gameState.selectedBlock){r.blockIndex=a;break}}this.popupSelectSeed.active=!1,this.popupTool.active=!1}else this.popupSelectSeed.active=i,this.popupTool.active=!i;this.gameState.movingPlant=void 0,this.gameState.selectedLand=t,this.gameState.selectedBlock=a,this.gameState.selectedZoo=void 0},s.onClearSelect=function(){this.gameState.selectedLand=void 0,this.gameState.selectedBlock=void 0,this.gameState.selectedZoo=void 0,this.gameState.cameraZoomToDetail=void 0!==this.gameState.selectedLand||void 0!==this.gameState.selectedZoo,this.popupBuyZoo.active=!1,this.popupSelectSeed.active=!1,this.popupTool.active=!1},s.process=function(){},s.dispose=function(){c.off(l.EventType.TOUCH_START,this.onTouchStart,this),c.off(l.EventType.TOUCH_MOVE,this.onTouchMove,this),g.off(m.ClearSelect,this.onClearSelect,this)},a}(v.System),_=a(C.prototype,"scene",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=a(C.prototype,"camera",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=a(C.prototype,"localStorage",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=a(C.prototype,"gameState",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameState.ts",["cc"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"d1b527tmnZELILY/NQ5aJ0i","GameState",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/Garden.ts",["cc"],(function(){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"d4e3fm3xdhJBZ7C0Rg1x+oE","Garden",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/GardenScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./Constants.ts","./AnimalRenderingSystem.ts","./CameraProcessingSystem.ts","./GameInputSystem.ts","./LandRenderingSystem.ts","./PlantProcessingSystem.ts","./PlantRenderingSystem.ts","./ZooProcessingSystem.ts","./LocalStorage.ts","./index.js"],(function(e){"use strict";var t,n,r,s,i,a,o,l,d,c,m,u,S,f,y,g,p,w,h,P;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,o=e.Prefab,l=e.director,d=e.CameraComponent,c=e.Component},null,function(e){m=e.Constants},function(e){u=e.AnimalRenderingSystem},function(e){S=e.CameraProcessingSystem},function(e){f=e.GameInputSystem},function(e){y=e.LandRenderSystem},function(e){g=e.PlantProcessingSytem},function(e){p=e.PlantRenderingSytem},function(e){w=e.ZooProcessingSystem},function(e){h=e.LocalStorage},function(e){P=e.default}],execute:function(){var b,v,C,R,G,_,L;i._RF.push({},"734feVQSzdG76tFES30ltsr","GardenScene",void 0);var H=a.ccclass,j=a.property;e("GardenScene",(b=H("GardenScene"),v=j([o]),C=j(o),b((_=t((G=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,r(t,"renderPlantPrefabs",_,s(t)),r(t,"plantPrefab",L,s(t)),t.world=void 0,t}n(t,e);var i=t.prototype;return i.onLoad=function(){},i.start=function(){var e=l.getScene(),t=e.getChildByName("Camera").getComponent(d),n=new h,r={cameraZoomToDetail:!1,currentOrthoHeight:m.SHOW_MAP_ORTHO_HEIGHT};this.world=new P.World,this.world.register("scene",e),this.world.register("camera",t),this.world.register("localStorage",n),this.world.register("gameState",r),this.world.register("renderPlantPrefabs",this.renderPlantPrefabs),this.world.register("plantPrefab",this.plantPrefab),this.world.addSystem(new y,!1),this.world.addSystem(new p,!1),this.world.addSystem(new u,!1),this.world.addSystem(new f,!0),this.world.addSystem(new g,!0),this.world.addSystem(new w,!0),this.world.addSystem(new S,!0)},i.update=function(e){this.world.setDelta(e),this.world.processActiveSystem(),this.world.processPassiveSystem()},t}(c)).prototype,"renderPlantPrefabs",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=t(G.prototype,"plantPrefab",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=G))||R));i._RF.pop()}}}));

System.register("chunks:///_virtual/Land.ts",["cc"],(function(){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"56fdez77edAO51J0uO+1BSC","Land",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/LandComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var o,t,i,n,s;return{setters:[function(e){o=e.inheritsLoose},function(e){t=e.cclegacy,i=e._decorator,n=e.Vec3,s=e.Component}],execute:function(){var c;t._RF.push({},"b9fabrseGpEIa1XQdW+4wLU","LandComponent",void 0);var l=i.ccclass;i.property,e("LandComponent",l("LandComponent")(c=function(e){function t(){for(var o,t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return(o=e.call.apply(e,[this].concat(i))||this).labelNode=void 0,o.renderRoot2D=void 0,o.blocksNode=void 0,o.selectingBlock=void 0,o.pos=new n,o.temVec=new n,o}o(t,e);var i=t.prototype;return i.onLoad=function(){this.renderRoot2D=this.node.getChildByName("RenderRoot2D"),this.labelNode=this.renderRoot2D.getChildByName("Label"),this.blocksNode=this.node.getChildByName("blocks"),this.selectingBlock=this.node.getChildByName("SelectingBlock")},i.updateTextPosition=function(e,o){void 0===o&&(o=!1),this.renderRoot2D.active=o,o&&(e.camera.update(),e.convertToUINode(this.renderRoot2D.worldPosition,this.labelNode.parent,this.pos),this.labelNode.setPosition(this.pos))},i.selectBlock=function(e,o){if(void 0===o&&(o=0),this.selectingBlock.active=e,e){var t=this.blocksNode.children[o];this.selectingBlock.active=!0,this.temVec.set(t.position),this.selectingBlock.setPosition(this.temVec)}},t}(s))||c);t._RF.pop()}}}));

System.register("chunks:///_virtual/LandRenderingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./LandComponent.ts","./index.js"],(function(e){"use strict";var t,n,a,i,r,l,o,c;return{setters:[function(e){t=e.inheritsLoose,n=e.applyDecoratedDescriptor,a=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,l=e.Vec3},null,function(e){o=e.LandComponent},function(e){c=e.default}],execute:function(){var s,u,d,p,g,m,f,h,y;r._RF.push({},"d6fb7UTstNIIKIT/VaRdnDb","LandRenderingSystem",void 0);e("LandRenderSystem",(s=c.Inject("scene"),u=c.Inject("camera"),d=c.Inject("gameState"),p=c.Inject("localStorage"),g=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,a(t,"scene",m,i(t)),a(t,"camera",f,i(t)),a(t,"gameState",h,i(t)),a(t,"localStorage",y,i(t)),t.landGroup=void 0,t.temp=new l,t}t(n,e);var r=n.prototype;return r.initialized=function(){this.landGroup=this.scene.getChildByName("LandGroup")},r.updateLands=function(){var e=this.localStorage.getGardenData();if(e)for(var t=e.lands,n=0;n<this.landGroup.children.length;n++)if(!(n>=t.length)){var a=this.landGroup.children[n].getComponent(o);a.updateTextPosition(this.camera,!t[n].unlocked),void 0!==this.gameState.selectedLand&&this.gameState.selectedLand===n&&void 0!==this.gameState.selectedBlock?a.selectBlock(!0,this.gameState.selectedBlock):a.selectBlock(!1)}},r.process=function(){this.updateLands()},r.dispose=function(){},n}(c.System),m=n(g.prototype,"scene",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=n(g.prototype,"camera",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=n(g.prototype,"gameState",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=n(g.prototype,"localStorage",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g));r._RF.pop()}}}));

System.register("chunks:///_virtual/LocalStorage.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"3aaa9U3fW9K8bw2EmSPBgfS","LocalStorage",void 0);var a="data_verison",o="garden";e("LocalStorage",(function(){var e=this;if(this.storage={},this.gardenData=void 0,this.getGardenData=function(){return e.gardenData||(e.gardenData=JSON.parse(e.getItem(o))),e.gardenData},this.updateGardenData=function(){var t=JSON.stringify(e.gardenData);e.setItem(o,t)},this.clear=function(){if(window.localStorage)return window.localStorage.clear();e.storage={}},this.getItem=function(t){return window.localStorage?window.localStorage.getItem(t):e.storage[t]},this.setItem=function(t,a){if(window.localStorage)return window.localStorage.setItem(t,a);e.storage[t]=a},this.removeItem=function(t){if(window.localStorage)return window.localStorage.removeItem(t);e.storage[t]=null,delete e.storage[t]},this.getItem(a)||(this.clear(),this.setItem(a,(0).toString())),!this.getItem("garden")){this.setItem("garden",'{"lands":[{"unlocked":true},{"unlocked":true},{"unlocked":true},{"unlocked":true},{"unlocked":true},{"unlocked":true}],"zoos":[{"unlocked":true,"level":0},{"unlocked":false}, {"unlocked":false}, {"unlocked":false}]}')}}));t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Constants.ts","./PlantConfig.ts","./GardenScene.ts","./LandComponent.ts","./PlantComponent.ts","./ZooComponent.ts","./GameHUD.ts","./PopupBuyZoo.ts","./PopupSelectSeed.ts","./PopupTool.ts","./AnimalRenderingSystem.ts","./CameraProcessingSystem.ts","./GameInputSystem.ts","./LandRenderingSystem.ts","./PlantProcessingSystem.ts","./PlantRenderingSystem.ts","./ZooProcessingSystem.ts","./GameEvent.ts","./GameState.ts","./Garden.ts","./Land.ts","./Plant.ts","./Zoo.ts","./EventTarget.ts","./LocalStorage.ts","./StringUtils.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Plant.ts",["cc"],(function(t){"use strict";var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){var a,e;t({PlantSize:void 0,PlantStatusType:void 0}),n._RF.push({},"0ab8boy5ydCzqSwxJSzb4sS","Plant",void 0),function(t){t[t.Sprout=0]="Sprout",t[t.Sapling=1]="Sapling",t[t.Mature=2]="Mature"}(a||(a=t("PlantSize",{}))),function(t){t[t.Worm=0]="Worm",t[t.Dry=1]="Dry"}(e||(e=t("PlantStatusType",{}))),n._RF.pop()}}}));

System.register("chunks:///_virtual/PlantComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constants.ts","./StringUtils.ts"],(function(e){"use strict";var t,o,r,s,n,i,a,d,l,h,p,u,c,f,g,v,P,C;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,r=e.initializerDefineProperty,s=e.assertThisInitialized,n=e.createForOfIteratorHelperLoose},function(e){i=e.cclegacy,a=e._decorator,d=e.SpriteFrame,l=e.Vec3,h=e.Color,p=e.Label,u=e.ProgressBar,c=e.instantiate,f=e.Node,g=e.Sprite,v=e.Component},function(e){P=e.Constants},function(e){C=e.toHourMinSec}],execute:function(){var m,N,y,R,b;i._RF.push({},"7865329OKBPiq+nR+pIYnyH","PlantComponent",void 0);var D=a.ccclass,S=a.property;e("PlantComponent",(m=D("PlantComponent"),N=S([d]),m((b=t((R=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n))||this,r(t,"statusSpriteFrames",b,s(t)),t.renderRoot2D=void 0,t.renderPlantNode=void 0,t.label=void 0,t.progressBar=void 0,t.statusNodes=void 0,t.pos=new l,t.greenColor=new h(0,255,0,255),t.orangeColor=new h(255,128,0,255),t.redColor=new h(255,0,0,255),t}o(t,e);var i=t.prototype;return i.onLoad=function(){this.statusNodes=new Array,this.renderRoot2D=this.node.getChildByName("RenderRoot2D"),this.label=this.renderRoot2D.getComponentInChildren(p),this.progressBar=this.renderRoot2D.getComponentInChildren(u)},i.setRenderPlantPrefab=function(e){this.renderPlantNode&&(this.renderPlantNode.removeFromParent(),this.renderPlantNode=void 0),this.renderPlantNode=c(e),this.node.addChild(this.renderPlantNode)},i.setPlantStatuses=function(e){for(var t,o=n(this.statusNodes);!(t=o()).done;){t.value.removeFromParent()}this.statusNodes.length=0;for(var r,s=n(e);!(r=s()).done;){var i=r.value,a=new f;a.scale.set(.2,.2,.2),a.layer=this.label.node.layer,this.renderRoot2D.addChild(a),this.statusNodes.push(a),a.addComponent(g).spriteFrame=this.statusSpriteFrames[i.type]}},i.updateUIPosition=function(e){var t=e.orthoHeight===P.SHOW_DETAIL_ORTHO_HEIGHT;if(this.renderRoot2D.active=t,t){e.camera.update(),e.convertToUINode(this.renderRoot2D.worldPosition,this.label.node.parent,this.pos),this.label.node.setPosition(this.pos),this.label.node.position.add3f(0,70,0);for(var o=0;o<this.statusNodes.length;o++)this.statusNodes[o].setPosition(this.pos),this.statusNodes[o].position.add3f(20+20*o,47,0);this.progressBar.node.setPosition(this.pos),this.progressBar.node.position.add3f(0,-8,0)}},i.updatePlantData=function(e,t){this.renderRoot2D.active&&(this.label.string=e>0?C(e):"",this.progressBar.progress=t,this.progressBar.barSprite.color=t>.66?this.greenColor:t>.33?this.orangeColor:this.redColor)},t}(v)).prototype,"statusSpriteFrames",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=R))||y));i._RF.pop()}}}));

System.register("chunks:///_virtual/PlantConfig.ts",["cc"],(function(n){"use strict";var t;return{setters:[function(n){t=n.cclegacy}],execute:function(){t._RF.push({},"f8f8d8kLLRPy6u1H0StefIy","PlantConfig",void 0);n("plantConfigs",{plant_00:{id:"plant_00",hp:1,grownTime:3600,premium:!1},plant_01:{id:"plant_01",hp:2,grownTime:7200,premium:!1},plant_02:{id:"plant_02",hp:3,grownTime:9e3,premium:!1},plant_03:{id:"plant_03",hp:4,grownTime:10800,premium:!1},plant_04:{id:"plant_04",hp:5,grownTime:12600,premium:!1}});t._RF.pop()}}}));

System.register("chunks:///_virtual/PlantProcessingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./PlantConfig.ts","./Constants.ts","./GameEvent.ts","./Plant.ts","./EventTarget.ts","./index.js"],(function(t){"use strict";var e,a,n,i,l,r,o,s,c,g,d,u,h;return{setters:[function(t){e=t.inheritsLoose,a=t.createForOfIteratorHelperLoose,n=t.applyDecoratedDescriptor,i=t.initializerDefineProperty,l=t.assertThisInitialized},function(t){r=t.cclegacy},null,function(t){o=t.plantConfigs},function(t){s=t.Constants},function(t){c=t.GameEvent},function(t){g=t.PlantSize,d=t.PlantStatusType},function(t){u=t.default},function(t){h=t.default}],execute:function(){var f,p,v,S,m,P,y,b,k;r._RF.push({},"6ac05V8cKtOybnaLTrXx4rH","PlantProcessingSystem",void 0);t("PlantProcessingSytem",(f=h.Inject("scene"),p=h.Inject("camera"),v=h.Inject("localStorage"),S=h.Inject("gameState"),m=function(t){function n(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n))||this,i(e,"scene",P,l(e)),i(e,"camera",y,l(e)),i(e,"localStorage",b,l(e)),i(e,"gameState",k,l(e)),e}e(n,t);var r=n.prototype;return r.initialized=function(){u.on(c.Plant,this.onPlantSeed,this),u.on(c.Water,this.onWatering,this),u.on(c.Fertilize,this.onFertilizing,this),u.on(c.MovePlant,this.onMoving,this),u.on(c.Harvest,this.onHarvesting,this)},r.onPlantSeed=function(t){if(t){var e=this.localStorage.getGardenData();if(void 0!==this.gameState.selectedLand&&void 0!==this.gameState.selectedBlock){if(this.gameState.selectedLand>=e.lands.length)throw Error("selecting land index greater than total lands");var a=e.lands[this.gameState.selectedLand];if(void 0===a.plants&&(a.plants=new Array),this.gameState.selectedBlock>=s.LAND_TOTAL_BLOCK)throw Error("selecting block index greater than total blocks");var n=o[t];if(!n)throw Error("No config data for plant with id = "+t);var i={id:n.id,blockIndex:this.gameState.selectedBlock,hp:n.hp,size:g.Sprout,plantTime:Date.now(),statuses:[{type:d.Dry,time:0}]};a.plants.push(i),this.localStorage.updateGardenData()}}},r.getSelectingPlant=function(){if(void 0!==this.gameState.selectedLand&&void 0!==this.gameState.selectedBlock){var t=this.localStorage.getGardenData();if(this.gameState.selectedLand>=t.lands.length)throw Error("selecting land index greater than total lands");for(var e,n=t.lands[this.gameState.selectedLand],i=a(n.plants);!(e=i()).done;){var l=e.value;if(l.blockIndex===this.gameState.selectedBlock)return l}return null}},r.onWatering=function(){var t=this.getSelectingPlant();if(null===t)throw Error("selecting plant === null");for(var e,n=a(t.statuses);!(e=n()).done;){var i=e.value;if(i.type===d.Dry){var l=t.statuses.indexOf(i);l>=0&&t.statuses.splice(l,1);break}}this.localStorage.updateGardenData()},r.onFertilizing=function(){var t=this.getSelectingPlant();if(null===t)throw Error("selecting plant === null");if(t.blockIndex===this.gameState.selectedBlock){var e=t.skipTime?t.skipTime:0;t.skipTime=e+s.FERTILIZE_SKIP_TIME}this.localStorage.updateGardenData()},r.onHarvesting=function(){var t=this.getSelectingPlant();if(null===t)throw Error("selecting plant === null");if(t.size===g.Mature){var e=this.localStorage.getGardenData().lands[this.gameState.selectedLand],a=e.plants.indexOf(t);a>=0&&e.plants.splice(a,1),this.localStorage.updateGardenData()}},r.onMoving=function(){this.gameState.movingPlant=!0},r.process=function(){for(var t,e=this.localStorage.getGardenData(),n=Date.now(),i=a(e.lands);!(t=i()).done;){var l=t.value;if(l.plants)for(var r,s=a(l.plants);!(r=s()).done;){var c=r.value,d=(n-c.plantTime)/1e3,u=o[c.id],h=c.skipTime?c.skipTime:0,f=u.grownTime-d-h;if(f>0){var p=1-f/u.grownTime;c.size=p<.5?g.Sprout:g.Sapling}else c.size=g.Mature}}},r.dispose=function(){u.off(c.Plant,this.onPlantSeed,this),u.off(c.Water,this.onWatering,this),u.off(c.Fertilize,this.onFertilizing,this),u.off(c.MovePlant,this.onMoving,this),u.off(c.Harvest,this.onHarvesting,this)},n}(h.System),P=n(m.prototype,"scene",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=n(m.prototype,"camera",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=n(m.prototype,"localStorage",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=n(m.prototype,"gameState",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m));r._RF.pop()}}}));

System.register("chunks:///_virtual/PlantRenderingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./PlantConfig.ts","./PlantComponent.ts","./index.js"],(function(t){"use strict";var e,n,a,i,l,r,s,o,p,u;return{setters:[function(t){e=t.inheritsLoose,n=t.createForOfIteratorHelperLoose,a=t.applyDecoratedDescriptor,i=t.initializerDefineProperty,l=t.assertThisInitialized},function(t){r=t.cclegacy,s=t.instantiate},null,function(t){o=t.plantConfigs},function(t){p=t.PlantComponent},function(t){u=t.default}],execute:function(){var d,c,h,g,P,f,b,v,m,y,I;r._RF.push({},"7bfa2VhIgNBQLkmDS2HXlGA","PlantRenderingSystem",void 0);t("PlantRenderingSytem",(d=u.Inject("scene"),c=u.Inject("camera"),h=u.Inject("localStorage"),g=u.Inject("plantPrefab"),P=u.Inject("renderPlantPrefabs"),f=function(t){function a(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,i(e,"scene",b,l(e)),i(e,"camera",v,l(e)),i(e,"localStorage",m,l(e)),i(e,"plantPrefab",y,l(e)),i(e,"renderPlantPrefabs",I,l(e)),e.landGroup=void 0,e.plantGroup=void 0,e.labelPlantGroup=void 0,e.plantInLandMapping=void 0,e.plantSizeMapping=void 0,e.plantStatusMapping=void 0,e.currentPlant=void 0,e}e(a,t);var r=a.prototype;return r.initialized=function(){this.plantInLandMapping=new Map,this.plantSizeMapping=new Map,this.plantStatusMapping=new Map,this.landGroup=this.scene.getChildByName("LandGroup"),this.plantGroup=this.scene.getChildByName("PlantGroup");var t=this.scene.getChildByName("UI_Canvas");this.labelPlantGroup=t.getChildByName("LabelPlantGroup")},r.newPlant=function(t,e){var a=this.landGroup.getChildByName("Land_"+e);if(!a)throw Error("Land_"+e+" not existed on map");var i=a.getChildByName("blocks");if(t.blockIndex>=i.children.length)throw Error("Plant "+t.id+" has block index = "+t.blockIndex+" is greater than blocks's size");var l=i.children[t.blockIndex],r=s(this.plantPrefab);r.setPosition(l.getWorldPosition()),this.plantGroup.addChild(r);var o=r.getComponent(p);o.setRenderPlantPrefab(this.renderPlantPrefabs[t.size]),o.setPlantStatuses(t.statuses),this.plantInLandMapping.get(e).set(t.blockIndex,r),this.plantSizeMapping.set(r.uuid,t.size);for(var u,d=[],c=n(t.statuses);!(u=c()).done;){var h=u.value;d.push(h.type)}return this.plantStatusMapping.set(r.uuid,d),r},r.deletePlantNode=function(t,e){var n=this.plantInLandMapping.get(t),a=n.get(e);this.plantSizeMapping.delete(a.uuid),this.plantStatusMapping.delete(a.uuid),a.removeFromParent(),n.delete(e)},r.updatePlants=function(){var t=this.localStorage.getGardenData();if(t)for(var e=t.lands,a=0;a<e.length;a++){if(a>=this.landGroup.children.length)throw Error("Land with idx = "+a+" not existed on map");var i=e[a];if(i.unlocked&&i.plants){this.plantInLandMapping.has(a)||this.plantInLandMapping.set(a,new Map);for(var l,r=this.plantInLandMapping.get(a),s=n(i.plants);!(l=s()).done;){var u=l.value;if(r.has(u.blockIndex)){if(this.currentPlant=r.get(u.blockIndex),this.plantSizeMapping.get(this.currentPlant.uuid)!==u.size)this.currentPlant.getComponent(p).setRenderPlantPrefab(this.renderPlantPrefabs[u.size]),this.plantSizeMapping.set(this.currentPlant.uuid,u.size);if(this.plantStatusMapping.get(this.currentPlant.uuid).length!==u.statuses.length){this.currentPlant.getComponent(p).setPlantStatuses(u.statuses);for(var d,c=[],h=n(u.statuses);!(d=h()).done;){var g=d.value;c.push(g.type)}this.plantStatusMapping.set(this.currentPlant.uuid,c)}}else this.currentPlant=this.newPlant(u,a);var P=this.currentPlant.getComponent(p),f=o[u.id],b=(Date.now()-u.plantTime)/1e3,v=u.skipTime?u.skipTime:0,m=f.grownTime-b-v;P.updatePlantData(m,u.hp/f.hp),P.updateUIPosition(this.camera)}if(r.size!==i.plants.length)for(var y,I=n(r);!(y=I()).done;){for(var M,S=y.value[0],z=!1,w=n(i.plants);!(M=w()).done;){M.value.blockIndex===S&&(z=!0)}z||this.deletePlantNode(a,S)}}}},r.process=function(){this.updatePlants()},r.dispose=function(){},a}(u.System),b=a(f.prototype,"scene",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=a(f.prototype,"camera",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=a(f.prototype,"localStorage",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=a(f.prototype,"plantPrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=a(f.prototype,"renderPlantPrefabs",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f));r._RF.pop()}}}));

System.register("chunks:///_virtual/PopupBuyZoo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameEvent.ts","./EventTarget.ts"],(function(t){"use strict";var o,e,n,u,r,c;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator,u=t.Component},function(t){r=t.GameEvent},function(t){c=t.default}],execute:function(){var i;e._RF.push({},"b9c5214VhNJQ5Ow6JKl8ENE","PopupBuyZoo",void 0);var s=n.ccclass;n.property,t("PopupBuyZoo",s("PopupBuyZoo")(i=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.start=function(){},n.buyZoo=function(){c.emit(r.BuyZoo),this.node.active=!1},e}(u))||i);e._RF.pop()}}}));

System.register("chunks:///_virtual/PopupSelectSeed.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameEvent.ts","./EventTarget.ts"],(function(e){"use strict";var t,n,o,c,u,i;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,c=e.Component},function(e){u=e.GameEvent},function(e){i=e.default}],execute:function(){var r;n._RF.push({},"88b43Dzh+dBnLrzmp5945Wu","PopupSelectSeed",void 0);var s=o.ccclass;e("PopupSelectSeed",s("PopupSelectSeed")(r=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var o=n.prototype;return o.plant=function(e,t){i.emit(u.Plant,t),this.hide()},o.hide=function(){this.node.active=!1},n}(c))||r);n._RF.pop()}}}));

System.register("chunks:///_virtual/PopupTool.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameEvent.ts","./EventTarget.ts"],(function(t){"use strict";var e,o,i,n,r,u;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,i=t._decorator,n=t.Component},function(t){r=t.GameEvent},function(t){u=t.default}],execute:function(){var c;o._RF.push({},"9ddefGqg0dAVpQkQmCMz4vd","PopupTool",void 0);var s=i.ccclass;t("PopupTool",s("PopupTool")(c=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var i=o.prototype;return i.hide=function(){this.node.active=!1},i.water=function(){u.emit(r.Water),this.hide()},i.fertilize=function(){u.emit(r.Fertilize),this.hide()},i.harvest=function(){u.emit(r.Harvest),this.hide()},i.move=function(){u.emit(r.MovePlant),this.node.active=!1},o}(n))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/StringUtils.ts",["cc"],(function(t){"use strict";var r;return{setters:[function(t){r=t.cclegacy}],execute:function(){r._RF.push({},"c49faWyWCNIFoa4u0bAQSxE","StringUtils",void 0);t("formatTime",(function(t){var r=Math.floor(t/3600);if(r>0)return r+" hrs";var o=Math.floor((t-3600*r)/60);return o>0?o+" mins":Math.floor(t-3600*r-60*o)+" secs"})),t("toHourMinSec",(function(t){var r=Math.floor(t/3600),o=Math.floor((t-3600*r)/60),n=Math.floor(t-3600*r-60*o),e="";return r<10&&(e+="0"),e+=r,e+=":",o<10&&(e+="0"),e+=o,e+=":",n<10&&(e+="0"),e+=n}));r._RF.pop()}}}));

System.register("chunks:///_virtual/Zoo.ts",["cc"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"6e12dmBY6NJiJpk20dmn8Uf","Zoo",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/ZooComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,n,r,i,a,c,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,c=e.Prefab,l=e.Component}],execute:function(){var p,s,u,f,m;i._RF.push({},"7844eqBZCNIzIv1ZtYRaDYe","ZooComponent",void 0);var y=a.ccclass,v=a.property;e("ZooComponent",(p=y("ZooComponent"),s=v(c),p((m=t((f=function(e){function t(){for(var t,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,n(t,"animalPrefab",m,r(t)),t}o(t,e);var i=t.prototype;return i.start=function(){},i.update=function(e){},t}(l)).prototype,"animalPrefab",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=f))||u));i._RF.pop()}}}));

System.register("chunks:///_virtual/ZooProcessingSystem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs_cjs=&original=.js","./GameEvent.ts","./EventTarget.ts","./index.js"],(function(e){"use strict";var t,o,i,n,a,r,s,l;return{setters:[function(e){t=e.inheritsLoose,o=e.applyDecoratedDescriptor,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy},null,function(e){r=e.GameEvent},function(e){s=e.default},function(e){l=e.default}],execute:function(){var c,u,g,f,p;a._RF.push({},"4c30b12ZZ5DD6EIfWRwic/M","ZooProcessingSystem",void 0);e("ZooProcessingSystem",(c=l.Inject("gameState"),u=l.Inject("localStorage"),g=function(e){function o(){for(var t,o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,i(t,"gameState",f,n(t)),i(t,"localStorage",p,n(t)),t}t(o,e);var a=o.prototype;return a.initialized=function(){s.on(r.BuyZoo,this.onBuyZoo,this)},a.onBuyZoo=function(){if(void 0!==this.gameState.selectedZoo){var e=this.localStorage.getGardenData();if(this.gameState.selectedZoo>=e.zoos.length)throw Error("selecting zoo index greater than total");e.zoos[this.gameState.selectedZoo].unlocked=!0,this.localStorage.updateGardenData()}},a.process=function(){},a.dispose=function(){s.off(r.BuyZoo,this.onBuyZoo,this)},o}(l.System),f=o(g.prototype,"gameState",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=o(g.prototype,"localStorage",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g));a._RF.pop()}}}));

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