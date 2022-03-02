window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  BottomDragPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9557f3uWGtBFLdoNd9/aMUk", "BottomDragPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.root = null;
        _this.isOpened = false;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.trigger = function() {
        this.isOpened = !this.isOpened;
        this.isOpened ? this.open() : this.close();
      };
      NewClass.prototype.open = function() {
        console.log("open");
        cc.tween(this.node).to(1, {
          position: cc.v3(0, 0, 0)
        }).start();
      };
      NewClass.prototype.close = function() {
        console.log("close");
        cc.tween(this.node).to(1, {
          position: cc.v3(-290, 0, 0)
        }).start();
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "root", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  ButtonAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5ad9KOU8xGubab0fGfAJn+", "ButtonAnimation");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.pumpChild = function(nodeName) {
        cc.log("pump child: " + JSON.stringify(nodeName));
        var node = this.node.getChildByName(nodeName);
        cc.tween(node).to(.2, {
          scale: 1.5
        }).to(.2, {
          scale: 1
        }).start();
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  CameraController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04423cqUTNADrrnc1bTYwZj", "CameraController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodePos = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.nodePos = this.node.getPosition();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      NewClass.prototype.onTouchStart = function(event) {
        var touches = event.getTouches();
        var oldPos = this.node.convertToWorldSpaceAR(touches[0].getStartLocation());
        console.log("touchStart: " + oldPos);
        this.eventNode.emit("touchStart", oldPos);
      };
      NewClass.prototype.onTouchMove = function(event) {
        cc.log("onTouchMove");
        var self = this;
        var touches = event.getTouches();
        var oldPos = self.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        var newPos = self.node.convertToNodeSpaceAR(touches[0].getLocation());
        var subPos = oldPos.sub(newPos);
        self.node.x = self.nodePos.x + subPos.x;
        self.node.y = self.nodePos.y + subPos.y;
        var minX = -760;
        var maxX = 760;
        var minY = -457;
        var maxY = 296;
        var nPos = self.node.getPosition();
        nPos.x < minX && (nPos.x = minX);
        nPos.x > maxX && (nPos.x = maxX);
        nPos.y < minY && (nPos.y = minY);
        nPos.y > maxY && (nPos.y = maxY);
        self.node.setPosition(nPos);
        this.label.string = nPos.toString();
      };
      NewClass.prototype.onTouchEnd = function() {
        this.nodePos = this.node.getPosition();
      };
      NewClass.prototype.onTouchCancel = function() {
        this.nodePos = this.node.getPosition();
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "eventNode", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Dirt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38b93cUgstHHaOVeguS7P6I", "Dirt");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Dirt = function(_super) {
      __extends(Dirt, _super);
      function Dirt() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.uiButton = null;
        _this.subjects = null;
        _this.isTouched = false;
        return _this;
      }
      Dirt.prototype.start = function() {
        var _this = this;
        this.subjects.on("onTouchStart", function(x) {
          return _this.onTouchStart(x);
        });
        this.subjects.on("onTouchEnd", function(x) {
          return _this.onTouchEnd();
        });
      };
      Dirt.prototype.onTouchStart = function(event) {
        var touchNode = event.node;
        if (touchNode === this.node) {
          console.log(this.node.name + " - " + touchNode.name);
          this.uiButton.setPosition(this.node.position.x, this.node.position.y + 20, this.node.position.z);
          this.uiButton.active = true;
          this.uiButton.getComponent(cc.Animation).play();
          this.isTouched = true;
        }
      };
      Dirt.prototype.onTouchEnd = function() {
        this.isTouched = false;
        this.uiButton.active = false;
      };
      __decorate([ property(cc.Node) ], Dirt.prototype, "uiButton", void 0);
      __decorate([ property(cc.Node) ], Dirt.prototype, "subjects", void 0);
      Dirt = __decorate([ ccclass ], Dirt);
      return Dirt;
    }(cc.Component);
    exports.default = Dirt;
    cc._RF.pop();
  }, {} ],
  EventNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50cbfGFoupG1ozIVavMxb7t", "EventNode");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  GrowingTimeDisplayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "912adY5h4lH44DpsIWNUudw", "GrowingTimeDisplayer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.setup = function(getNowTime, getMaxTime) {
        this.progressBar || (this.progressBar = this.getComponent(cc.ProgressBar));
        this.getNowTime = getNowTime;
        this.getMaxTime = getMaxTime;
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {
        this.getNowTime && this.getMaxTime && (this.progressBar.progress = this.getNowTime() / this.getMaxTime());
      };
      NewClass.prototype.close = function() {
        this.getNowTime = null;
        this.getMaxTime = null;
        this.node.active = false;
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed407F5fIlFzJZQvpI6Gtm3", "Main");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlayerData_1 = require("./PlayerData");
    var PlayerInfoPanel_1 = require("./PlayerInfoPanel");
    var StoreItemData_1 = require("./StoreItemData");
    var StorePanel_1 = require("./StorePanel");
    var TouchArea_1 = require("./TouchArea");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Main = function(_super) {
      __extends(Main, _super);
      function Main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.storeOpend = false;
        return _this;
      }
      Main.prototype.start = function() {
        this.InitTouchPanel();
        this.InitPlayerData();
        this.InitStorePanel();
      };
      Main.prototype.InitTouchPanel = function() {
        var _this = this;
        this.touchArea.onTouchStartInStoreMode = function() {
          return _this.onStoreButtonTrigger();
        };
      };
      Main.prototype.InitPlayerData = function() {
        this.playerData = new PlayerData_1.PlayerData("\u9f8d\u50b2", 6666, 7777);
        this.playerInfoPanel.inject(this.playerData);
      };
      Main.prototype.InitStorePanel = function() {
        this.storePanel.updateItemDatas([ new StoreItemData_1.StoreItemData({
          uid: 0,
          cost: 5,
          tags: [ "seed" ]
        }), new StoreItemData_1.StoreItemData({
          uid: 1,
          cost: 10,
          tags: [ "meat" ]
        }), new StoreItemData_1.StoreItemData({
          uid: 0,
          cost: 5,
          tags: [ "seed" ]
        }), new StoreItemData_1.StoreItemData({
          uid: 2,
          cost: 100,
          tags: [ "seed" ]
        }), new StoreItemData_1.StoreItemData({
          uid: 1,
          cost: 1e3,
          tags: [ "seed" ]
        }), new StoreItemData_1.StoreItemData({
          uid: 0,
          cost: 5,
          tags: [ "seed" ]
        }) ]);
      };
      Main.prototype.InitItemInfoData = function() {};
      Main.prototype.InitPlayerBuilding = function() {};
      Main.prototype.onStoreButtonTrigger = function() {
        this.storeOpend = !this.storeOpend;
        if (this.storeOpend) {
          cc.log(this.storePanel);
          this.storePanel.open();
          this.touchArea.enterStoreMode();
        } else {
          this.storePanel.close();
          this.touchArea.exitStoreMode();
        }
        cc.log("onStoreButtonTrigger:" + this.storeOpend);
      };
      __decorate([ property(PlayerInfoPanel_1.default) ], Main.prototype, "playerInfoPanel", void 0);
      __decorate([ property(StorePanel_1.default) ], Main.prototype, "storePanel", void 0);
      __decorate([ property(TouchArea_1.default) ], Main.prototype, "touchArea", void 0);
      Main = __decorate([ ccclass ], Main);
      return Main;
    }(cc.Component);
    exports.default = Main;
    cc._RF.pop();
  }, {
    "./PlayerData": "PlayerData",
    "./PlayerInfoPanel": "PlayerInfoPanel",
    "./StoreItemData": "StoreItemData",
    "./StorePanel": "StorePanel",
    "./TouchArea": "TouchArea"
  } ],
  Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56a1fI+e/NIVrcdb0r/9M6R", "Map");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {
        this.drawGrid();
      };
      NewClass.prototype.drawGrid = function() {
        this.graphic.clear();
        var w = 300;
        var h = 300;
        var w_i = 50;
        var h_i = 50;
        var w_c = w / w_i;
        var h_c = h / h_i;
        for (var y = 0; y < h_c; y++) for (var x = 0; x < w_c; x++) {
          var p = cc.v2(x * w_i, y * h_i);
          this.graphic.strokeColor = cc.Color.RED;
          this.graphic.moveTo(p.x, p.y + 25);
          this.graphic.lineTo(p.x - 25, p.y);
          this.graphic.moveTo(p.x - 25, p.y);
          this.graphic.lineTo(p.x, p.y - 25);
          this.graphic.moveTo(p.x, p.y - 25);
          this.graphic.lineTo(p.x + 25, p.y);
          this.graphic.moveTo(p.x + 25, p.y);
          this.graphic.lineTo(p.x, p.y + 25);
        }
        this.graphic.stroke();
      };
      NewClass.prototype.update = function(dt) {};
      __decorate([ property(cc.Graphics) ], NewClass.prototype, "graphic", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  ObserverPattern: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d3ce+WfZFAeZ2b6yAajGLz", "ObserverPattern");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  PlayerData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5440f5bXMFDlIhDAjBdnRzU", "PlayerData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PlayerData = void 0;
    var PlayerData = function() {
      function PlayerData(name, gem, catCoin) {
        this.observers = [];
        this.name = name;
        this.gem = gem;
        this.catCoin = catCoin;
      }
      PlayerData.prototype.regist = function(o) {
        this.observers.push(o);
        o.updateData(this);
      };
      PlayerData.prototype.unRegist = function(o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
      };
      PlayerData.prototype.notify = function() {
        var _this = this;
        this.observers.forEach(function(observer) {
          observer.updateData(_this);
        });
      };
      return PlayerData;
    }();
    exports.PlayerData = PlayerData;
    cc._RF.pop();
  }, {} ],
  PlayerInfoPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40b9cfGYHhGpIunNU0MivET", "PlayerInfoPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.inject = function(playerData) {
        playerData.regist(this);
      };
      NewClass.prototype.updateData = function(data) {
        this.nameDisplayer.string = data.name;
        this.gemDisplayer.string = "\u7d05\u947d:" + data.gem;
        this.catCoinDisplayer.string = "\u5c0f\u55b5\u5e63:" + data.catCoin;
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "headDisplayer", void 0);
      __decorate([ property(cc.RichText) ], NewClass.prototype, "nameDisplayer", void 0);
      __decorate([ property(cc.RichText) ], NewClass.prototype, "gemDisplayer", void 0);
      __decorate([ property(cc.RichText) ], NewClass.prototype, "catCoinDisplayer", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Seed: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e026AkDt5IPJgX7BjYxQb7", "Seed");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.progressUI = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          console.log("on touch seed");
          var wp = _this.node.convertToWorldSpaceAR(cc.v2(0, -100));
          var lp = _this.progressUI.parent.convertToNodeSpaceAR(wp);
          _this.progressUI.setPosition(lp);
          event.stopPropagation();
        });
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "progressUI", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Singleton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38466Uyn+5Gm64vaCIiiVbz", "Singleton");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Singleton = function() {
      function Singleton() {}
      Singleton.getInstance = function(type) {
        null === this._instance && (this._instance = new type());
        return this._instance;
      };
      Singleton._instance = null;
      return Singleton;
    }();
    exports.default = Singleton;
    cc._RF.pop();
  }, {} ],
  StoreItemBuyPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4bdb4mseeBLLK1wRrxmTtjP", "StoreItemBuyPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.open = function(uid, cost) {
        this.node.active = true;
      };
      NewClass.prototype.close = function() {
        this.node.active = false;
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  StoreItemData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75976JWtfNOU4T9RE3GdE5N", "StoreItemData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StoreItemData = void 0;
    var StoreItemData = function() {
      function StoreItemData(jData) {
        this.tags = [];
        cc.log(JSON.stringify(jData));
        this.uid = jData.uid;
        this.cost = jData.cost;
        this.tags = jData.tags;
      }
      return StoreItemData;
    }();
    exports.StoreItemData = StoreItemData;
    cc._RF.pop();
  }, {} ],
  StoreItemSlot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93b93/D3XlCgK6xgu3/5Hfq", "StoreItemSlot");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StoreItemSlot = function(_super) {
      __extends(StoreItemSlot, _super);
      function StoreItemSlot() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprites = [];
        return _this;
      }
      StoreItemSlot.prototype.setup = function(storeItemData) {
        this.valueDisplayer.string = storeItemData.cost.toString();
        this.sprite.spriteFrame = this.sprites[storeItemData.uid];
      };
      __decorate([ property(cc.Sprite) ], StoreItemSlot.prototype, "sprite", void 0);
      __decorate([ property(cc.RichText) ], StoreItemSlot.prototype, "valueDisplayer", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], StoreItemSlot.prototype, "sprites", void 0);
      StoreItemSlot = __decorate([ ccclass ], StoreItemSlot);
      return StoreItemSlot;
    }(cc.Component);
    exports.default = StoreItemSlot;
    cc._RF.pop();
  }, {} ],
  StorePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19ccdi1w1RGnphuDSaN3dq7", "StorePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StoreItemSlot_1 = require("./StoreItemSlot");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StorePanel = function(_super) {
      __extends(StorePanel, _super);
      function StorePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.storeItemSlots = [];
        _this.storeItemDatas = [];
        _this.tabButtons = [];
        _this.tabIndex = 0;
        return _this;
      }
      StorePanel.prototype.open = function() {
        this.node.active = true;
      };
      StorePanel.prototype.close = function() {
        this.node.active = false;
      };
      StorePanel.prototype.updateItemDatas = function(storeItemDatas) {
        this.storeItemDatas = storeItemDatas;
      };
      StorePanel.prototype.tabClick = function(event, index) {
        this.updateTabButtons(index);
        this.updateDisplay();
      };
      StorePanel.prototype.updateTabButtons = function(index) {
        if (index == this.tabIndex) return;
        cc.tween(this.tabButtons[this.tabIndex].node).to(.1, {
          scale: .8
        }).start();
        var c = cc.Color.WHITE;
        c = c.fromHEX("#57C33B");
        this.tabButtons[this.tabIndex].node.children[0].color = c;
        this.tabIndex = index;
        cc.log(this.tabButtons[this.tabIndex].node.children[0].name);
        cc.tween(this.tabButtons[this.tabIndex].node).to(.1, {
          scale: 1
        }).start();
        c = c.fromHEX("#6CFF47");
        this.tabButtons[this.tabIndex].node.children[0].color = c;
      };
      StorePanel.prototype.updateDisplay = function() {
        cc.log("tabIndex:" + this.tabIndex);
        if (1 == this.tabIndex) {
          cc.log("filter:meat");
          var filers = this.filterDisplayStoreItem([ "meat" ]);
          cc.log("filters length:" + filers.length);
          this.updateStoreItems(filers);
        } else {
          cc.log("filter:nothing");
          this.updateStoreItems(this.storeItemDatas);
        }
      };
      StorePanel.prototype.updateStoreItems = function(storeItemDatas) {
        cc.log("storeItemDatas:" + storeItemDatas.length);
        cc.log("storeItemSlots:" + this.storeItemSlots.length);
        if (storeItemDatas.length > this.storeItemSlots.length) {
          var diff = storeItemDatas.length - this.storeItemSlots.length;
          cc.log("updateStoreItems:" + diff);
          for (var i = 0; i < diff; i++) {
            var itemSlot = cc.instantiate(this.storeItemSlotPrefab);
            itemSlot.setParent(this.storeItemRoot);
            var component = itemSlot.getComponent(StoreItemSlot_1.default);
            this.storeItemSlots.push(component);
          }
        }
        for (var i = 0; i < this.storeItemSlots.length; i++) this.storeItemSlots[i].node.active = i < storeItemDatas.length;
        for (var i = 0; i < storeItemDatas.length; i++) {
          var itemData = storeItemDatas[i];
          this.storeItemSlots[i].setup(itemData);
        }
      };
      StorePanel.prototype.filterDisplayStoreItem = function(tags) {
        var _this = this;
        cc.log("f:" + tags);
        var d = [];
        this.storeItemDatas.forEach(function(data) {
          if (_this.help(data.tags, tags)) {
            d.push(data);
            cc.log("filter is true");
          }
        });
        return d;
      };
      StorePanel.prototype.help = function(tags, tags2) {
        var ret = false;
        cc.log(tags + ", " + tags2);
        for (var i = 0; i < tags.length; i++) {
          var tag = tags[i];
          if (tags2.includes(tag)) {
            ret = true;
            break;
          }
        }
        return ret;
      };
      __decorate([ property(cc.Node) ], StorePanel.prototype, "storeItemRoot", void 0);
      __decorate([ property(cc.Prefab) ], StorePanel.prototype, "storeItemSlotPrefab", void 0);
      __decorate([ property([ cc.Button ]) ], StorePanel.prototype, "tabButtons", void 0);
      StorePanel = __decorate([ ccclass ], StorePanel);
      return StorePanel;
    }(cc.Component);
    exports.default = StorePanel;
    cc._RF.pop();
  }, {
    "./StoreItemSlot": "StoreItemSlot"
  } ],
  TestTileMap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "06759nufx9OxKPr72gXyhxC", "TestTileMap");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TestTileMap = function(_super) {
      __extends(TestTileMap, _super);
      function TestTileMap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      TestTileMap.prototype.start = function() {
        console.log("testtilemap");
        this.graphics.moveTo(0, 0);
        this.graphics.circle(0, 0, 50);
        this.graphics.circle(0, -100, 50);
        var s = cc.winSize;
        cc.log(s);
        this.graphics.circle(-s.width / 2, -s.height / 2, 10);
        this.graphics.fillColor = cc.Color.RED;
        this.graphics.fill();
        this.graphics.stroke();
      };
      __decorate([ property(cc.Label) ], TestTileMap.prototype, "label", void 0);
      __decorate([ property ], TestTileMap.prototype, "text", void 0);
      __decorate([ property(cc.Graphics) ], TestTileMap.prototype, "graphics", void 0);
      TestTileMap = __decorate([ ccclass ], TestTileMap);
      return TestTileMap;
    }(cc.Component);
    exports.default = TestTileMap;
    cc._RF.pop();
  }, {} ],
  TileTest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2862b4z+15P0YEDQHKi0wqo", "TileTest");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GrowingTimeDisplayer_1 = require("./GrowingTimeDisplayer");
    var Vegetable_1 = require("./Vegetable");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TileTest = function(_super) {
      __extends(TileTest, _super);
      function TileTest() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.progressUI = null;
        return _this;
      }
      TileTest.prototype.start = function() {
        var self = this;
        this.eventNode.on("touchStart", this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
      };
      TileTest.prototype.onTouchStart = function(event) {
        var touches = event.getTouches();
        var tiledLayerNode = this.node;
        var vec2 = tiledLayerNode.convertToNodeSpaceAR(touches[0].getStartLocation());
        this.touchEnd(vec2);
      };
      TileTest.prototype.touchStart = function(event) {
        this.progressUI.getComponent(GrowingTimeDisplayer_1.default).close();
      };
      TileTest.prototype.touchEnd = function(vec2) {
        var tiledLayer = this.map.getLayer("base");
        var pos = this.screenToMap(tiledLayer, this.node.convertToNodeSpaceAR(vec2));
        console.log("pos: " + pos + " size:" + tiledLayer.getLayerSize());
        var tile = tiledLayer.getTiledTileAt(pos.x, pos.y, true);
        var tileNode = tile.node;
        if (2 != tile.gid) {
          tile.gid = 2;
          cc.log(tile.gid);
          var vegetable = cc.instantiate(this.vegetablePrefab);
          vegetable.setParent(tileNode);
          vegetable.setPosition(32, 40);
          var veg = vegetable.getComponent(Vegetable_1.default);
          veg.onSpawn(10);
        } else {
          var veg = tile.getComponentInChildren(Vegetable_1.default);
          veg.randomTree();
          var wp = veg.node.convertToWorldSpaceAR(cc.v2(0, -10));
          var sp = this.gameCamera.getWorldToScreenPoint(wp);
          var lp = this.progressUI.parent.convertToNodeSpaceAR(sp);
          this.progressUI.setPosition(lp);
          this.progressUI.active = true;
          var displayer = this.progressUI.getComponent(GrowingTimeDisplayer_1.default);
          displayer.setup(function() {
            return veg.nowTime;
          }, function() {
            return veg.growTime;
          });
        }
        cc.tween(tileNode).to(1, {
          color: cc.color(255, 0, 0)
        }).to(1, {
          color: cc.color(255, 255, 255)
        }).start();
      };
      TileTest.prototype.screenToMap = function(mapLayer, pos) {
        var self = this;
        var wx = pos.x - self.node.width / 2;
        var wy = pos.y - self.node.height;
        console.log("w:" + self.node.width + ", h:" + self.node.height);
        var tw = mapLayer.getMapTileSize().width;
        var th = mapLayer.getMapTileSize().height;
        var twh = tw / 2;
        var thh = th / 2;
        var x = Math.abs(Math.floor((wy / thh - wx / twh) / 2));
        var y = Math.abs(Math.floor((wx / twh + wy / thh) / 2));
        cc.log("pos: " + x + ", " + y);
        return {
          x: x,
          y: y
        };
      };
      __decorate([ property(cc.Label) ], TileTest.prototype, "label", void 0);
      __decorate([ property ], TileTest.prototype, "text", void 0);
      __decorate([ property(cc.TiledMap) ], TileTest.prototype, "map", void 0);
      __decorate([ property(cc.Node) ], TileTest.prototype, "eventNode", void 0);
      __decorate([ property(cc.Prefab) ], TileTest.prototype, "vegetablePrefab", void 0);
      __decorate([ property(cc.Node) ], TileTest.prototype, "progressUI", void 0);
      __decorate([ property(cc.Camera) ], TileTest.prototype, "gameCamera", void 0);
      __decorate([ property(cc.Node) ], TileTest.prototype, "canvasNode", void 0);
      TileTest = __decorate([ ccclass ], TileTest);
      return TileTest;
    }(cc.Component);
    exports.default = TileTest;
    cc._RF.pop();
  }, {
    "./GrowingTimeDisplayer": "GrowingTimeDisplayer",
    "./Vegetable": "Vegetable"
  } ],
  TouchArea: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91b2e5/5gVBNKKNuRdMwOSi", "TouchArea");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TileTest_1 = require("./TileTest");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TouchArea = function(_super) {
      __extends(TouchArea, _super);
      function TouchArea() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.text = "hello";
        _this.nodePos = new cc.Vec2(0, 0);
        _this.storeMode = false;
        return _this;
      }
      TouchArea.prototype.start = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      TouchArea.prototype.onTouchStart = function(event) {
        console.log("onTouchStart");
        this.selected = true;
        this.tileTest.touchStart(event);
      };
      TouchArea.prototype.onTouchMove = function(event) {
        this.selected = false;
        cc.log("onTouchMove");
        var self = this;
        var touches = event.getTouches();
        var oldPos = self.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        var newPos = self.node.convertToNodeSpaceAR(touches[0].getLocation());
        var subPos = oldPos.sub(newPos);
        self.gameCam.node.x = self.nodePos.x + subPos.x;
        self.gameCam.node.y = self.nodePos.y + subPos.y;
        var minX = -760;
        var maxX = 760;
        var minY = -457;
        var maxY = 296;
        var nPos = self.gameCam.node.getPosition();
        nPos.x < minX && (nPos.x = minX);
        nPos.x > maxX && (nPos.x = maxX);
        nPos.y < minY && (nPos.y = minY);
        nPos.y > maxY && (nPos.y = maxY);
        self.gameCam.node.setPosition(nPos);
      };
      TouchArea.prototype.onTouchEnd = function(event) {
        console.log("onTouchEnd");
        this.nodePos = this.gameCam.node.getPosition();
        this.touchEnd(event);
      };
      TouchArea.prototype.onTouchCancel = function(event) {
        console.log("onTouchCancel");
        this.nodePos = this.gameCam.node.getPosition();
        this.touchEnd(event);
      };
      TouchArea.prototype.touchEnd = function(event) {
        if (this.selected) {
          this.selected = false;
          var touches = event.getTouches();
          var oldPos = touches[0].getStartLocation();
          console.log("touchStart: " + oldPos);
          var s = this.gameCam.getScreenToWorldPoint(touches[0].getStartLocation());
          var p1 = this.gameCam.node;
          var p = this.gameCam.node.convertToWorldSpaceAR(oldPos);
          oldPos = oldPos.sub(cc.v2(-1675.609, -365.358));
          cc.log("x:" + p.x + ", y:" + p.y);
          this.tileTest.touchEnd(s);
        }
      };
      TouchArea.prototype.onWheel = function(event) {
        var zoomIn = 0;
        var yScroll = event.getScrollY();
        cc.log(yScroll);
        if (yScroll > 0) {
          zoomIn = 1;
          var r = this.gameCam.zoomRatio;
          r += .1;
          if (r > 1.2) {
            r = 1.2;
            zoomIn = 0;
          }
          this.gameCam.zoomRatio = r;
        } else {
          zoomIn = -1;
          var r = this.gameCam.zoomRatio;
          r -= .1;
          if (r < .8) {
            r = .8;
            zoomIn = 0;
          }
          this.gameCam.zoomRatio = r;
        }
        if (0 != zoomIn) {
          var sp = this.canvas.convertToNodeSpaceAR(event.getLocation());
          cc.log(sp.x / cc.winSize.width + ", " + sp.y / cc.winSize.height);
          var v = event.getLocation();
          var camWp = this.gameCam.node.convertToWorldSpaceAR(cc.v2(0, 0));
          var dir = v.sub(camWp);
          dir.normalizeSelf();
          var movement = dir.mul(50);
          cc.log("dir:" + JSON.stringify(dir) + ", movement:" + JSON.stringify(movement));
          var newCamWp = camWp.add(movement);
          cc.log("camWp:" + JSON.stringify(camWp) + ", camNewWp:" + JSON.stringify(newCamWp));
          var newPoint = this.gameCam.node.parent.convertToNodeSpaceAR(newCamWp);
          this.gameCam.node.setPosition(newPoint);
        }
      };
      TouchArea.prototype.enterStoreMode = function() {
        this.storeMode = true;
      };
      TouchArea.prototype.exitStoreMode = function() {
        this.storeMode = false;
      };
      __decorate([ property ], TouchArea.prototype, "text", void 0);
      __decorate([ property(cc.Camera) ], TouchArea.prototype, "gameCam", void 0);
      __decorate([ property(TileTest_1.default) ], TouchArea.prototype, "tileTest", void 0);
      __decorate([ property(cc.Node) ], TouchArea.prototype, "canvas", void 0);
      TouchArea = __decorate([ ccclass ], TouchArea);
      return TouchArea;
    }(cc.Component);
    exports.default = TouchArea;
    cc._RF.pop();
  }, {
    "./TileTest": "TileTest"
  } ],
  TouchDebug: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "735f8nxt/JJpLxhhXJIX2Ux", "TouchDebug");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TouchDebug = function(_super) {
      __extends(TouchDebug, _super);
      function TouchDebug() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      TouchDebug.prototype.start = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          return cc.log("start");
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function() {
          return cc.log("move");
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          return cc.log("end");
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
          return cc.log("cancel");
        }, this);
      };
      __decorate([ property(cc.Label) ], TouchDebug.prototype, "label", void 0);
      __decorate([ property ], TouchDebug.prototype, "text", void 0);
      TouchDebug = __decorate([ ccclass ], TouchDebug);
      return TouchDebug;
    }(cc.Component);
    exports.default = TouchDebug;
    cc._RF.pop();
  }, {} ],
  TouchEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a65fq6OVRDHYxkxJeMOZEZ", "TouchEvent");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  TouchManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a22f9utFNFMAILjmU1kQnRS", "TouchManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
      };
      NewClass.prototype.touchStart = function(event) {
        console.log("touch start : " + event.toString());
      };
      NewClass.prototype.touchMove = function(event) {
        console.log("touch move : " + event.toString());
        var touchPos = cc.v2(this.node.getPosition().x - event.getDelta().x, this.node.getPosition().y - event.getDelta().y);
        this.gameCameraNode.setPosition(this.gameCameraNode.convertToNodeSpaceAR(touchPos));
      };
      NewClass.prototype.clickEvent = function(event) {
        console.log("event.type - " + event.type);
        switch (event.type) {
         case "touchstart":
          this.startTouch = this.node.getPosition();
          break;

         case "touchmove":
          var touchPos = cc.v2(this.node.getPosition().x - event.getDelta().x, this.node.getPosition().y - event.getDelta().y);
          this.node.getPosition().x > 300 && event.getDelta().x < 0 && (touchPos.x = this.node.getPosition().x);
          this.node.getPosition().x < -300 && event.getDelta().x > 0 && (touchPos.x = this.node.getPosition().x);
          this.node.getPosition().y > 290 && event.getDelta().y < 0 && (touchPos.y = this.node.getPosition().y);
          this.node.getPosition().y < -290 && event.getDelta().y > 0 && (touchPos.y = this.node.getPosition().y);
          console.log("touchPos = " + touchPos);
          this.gameCamera.node.convertToNodeSpaceAR(event.ge);
          this.gameCamera.node.setPosition(touchPos);
        }
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "gameCameraNode", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  TouchSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d2845NW075P3rWGRe5oubXc", "TouchSystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TouchSystem = void 0;
    var TouchSystem = function() {
      function TouchSystem() {}
      TouchSystem.prototype.InvokeOnTouch = function(touchables) {
        this.onTouchStart && this.onTouchStart(touchables[0]);
      };
      return TouchSystem;
    }();
    exports.TouchSystem = TouchSystem;
    cc._RF.pop();
  }, {} ],
  TouchableGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9718cNSR41IMIvmFRAnAtSK", "TouchableGroup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Touchable_1 = require("./Touchable");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TouchableGroup = function(_super) {
      __extends(TouchableGroup, _super);
      function TouchableGroup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.touchables = [];
        return _this;
      }
      TouchableGroup.prototype.onLoad = function() {
        var _this = this;
        cc.director.getCollisionManager().enabled = true;
        this.touchables = this.getComponentsInChildren(Touchable_1.default);
        this.touchables.forEach(function(touchable) {
          touchable.touchEvent = function(t) {
            console.log(t);
            _this.touchables.push(t);
          };
        });
      };
      TouchableGroup.prototype.start = function() {
        this.node.on("touchstart", this.onTouch, this);
      };
      TouchableGroup.prototype.onTouch = function(event) {
        console.log(this.node.name + " - " + event);
        if (this.touchables.length > 0) this.EmitOnTouchStart(); else {
          console.log("no touchable!");
          this.EmitOnTouchEnd();
        }
        this.touchables = [];
      };
      TouchableGroup.prototype.EmitOnTouchStart = function() {
        console.log("EmitOnTouchStart");
        this.node.emit("onTouchStart", this.touchables[0]);
      };
      TouchableGroup.prototype.EmitOnTouchEnd = function() {
        console.log("EmitOnTouchEnd");
        this.node.emit("onTouchEnd");
      };
      TouchableGroup = __decorate([ ccclass ], TouchableGroup);
      return TouchableGroup;
    }(cc.Component);
    exports.default = TouchableGroup;
    cc._RF.pop();
  }, {
    "./Touchable": "Touchable"
  } ],
  Touchable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7b66n2pVBJJpLX8UKhEMGB", "Touchable");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Touchable = function(_super) {
      __extends(Touchable, _super);
      function Touchable() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Touchable.prototype.onLoad = function() {
        this.collider = this.getComponent(cc.PolygonCollider);
      };
      Touchable.prototype.start = function() {
        var _this = this;
        this.collider ? this.collider.node.on(cc.Node.EventType.TOUCH_START, function(touch, event) {
          var touchLoc = touch.getLocation();
          if (cc.Intersection.pointInPolygon(touchLoc, this.collider.world.points)) {
            console.log("Hit!");
            this.touchEvent(this);
          } else console.log("No hit - " + touchLoc + ", " + this.collider.world.points);
        }, this) : this.node.on("touchstart", function() {
          _this.touchEvent(_this);
        }, this);
      };
      Touchable = __decorate([ ccclass ], Touchable);
      return Touchable;
    }(cc.Component);
    exports.default = Touchable;
    cc._RF.pop();
  }, {} ],
  UIButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6fd96vKmoJOzLXYGOxTVZ05", "UIButton");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {};
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  UIController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c65ccblgHVKPIdYMDQ/rsgN", "UIController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isTopOpened = false;
        _this.isItemOpened = false;
        _this.topPanel = null;
        _this.topPanelButton = null;
        _this.itemPanel = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.itemPanel.active = false;
        this.itemPanel.setPosition(cc.v3(0, 0, 0));
      };
      NewClass.prototype.triggerTop = function() {
        this.isTopOpened ? this.hideTop() : this.showTop();
      };
      NewClass.prototype.showTop = function() {
        this.isTopOpened = true;
        cc.tween(this.topPanel).to(.5, {
          position: cc.v3(0, 0, 0)
        }).start();
        cc.tween(this.topPanelButton).to(.5, {
          position: cc.v3(-100, 0, 0)
        }).start();
      };
      NewClass.prototype.hideTop = function() {
        this.isTopOpened = false;
        cc.tween(this.topPanel).to(.5, {
          position: cc.v3(0, 200, 0)
        }).start();
        cc.tween(this.topPanelButton).to(.5, {
          position: cc.v3(0, 0, 0)
        }).start();
      };
      NewClass.prototype.triggerItem = function() {
        this.isItemOpened ? this.hideItem() : this.showItem();
      };
      NewClass.prototype.showItem = function() {
        console.log("show item");
        this.isItemOpened = true;
        this.itemPanel.active = true;
        cc.tween(this.itemPanel).to(.5, {
          position: cc.v3(288.5, 0, 0)
        }).start();
      };
      NewClass.prototype.hideItem = function() {
        this.isItemOpened = false;
        cc.tween(this.itemPanel).to(.5, {
          position: cc.v3(0, 0, 0)
        }).start();
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "topPanel", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "topPanelButton", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemPanel", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Vegetable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b990eeD2+NJ5rbx45pO+wc7", "Vegetable");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.spriteFrames = [];
        _this.index = 0;
        return _this;
      }
      NewClass.prototype.onSpawn = function(growTime) {
        this.growTime = growTime;
        this.nowTime = 0;
      };
      NewClass.prototype.randomTree = function() {
        this.index = this.index + 1;
        this.index == this.spriteFrames.length && (this.index = 0);
        this.sprite.spriteFrame = this.spriteFrames[this.index];
      };
      NewClass.prototype.update = function(dt) {
        this.nowTime += dt;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "sprite", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "spriteFrames", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ]
}, {}, [ "BottomDragPanel", "ButtonAnimation", "CameraController", "Dirt", "EventNode", "GrowingTimeDisplayer", "Main", "Map", "ObserverPattern", "PlayerData", "PlayerInfoPanel", "Seed", "Singleton", "StoreItemBuyPanel", "StoreItemData", "StoreItemSlot", "StorePanel", "TestTileMap", "TileTest", "TouchArea", "TouchDebug", "TouchEvent", "TouchManager", "TouchSystem", "Touchable", "TouchableGroup", "UIButton", "UIController", "Vegetable" ]);