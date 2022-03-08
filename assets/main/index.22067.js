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
  BackpackItemSlot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9bdaJG5BpE76ZeideTac/h", "BackpackItemSlot");
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
    var BackpackItemSlot = function(_super) {
      __extends(BackpackItemSlot, _super);
      function BackpackItemSlot() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.iconDisplayer = null;
        return _this;
      }
      BackpackItemSlot.prototype.setup = function(uid, count) {};
      __decorate([ property(cc.Sprite) ], BackpackItemSlot.prototype, "iconDisplayer", void 0);
      __decorate([ property(cc.RichText) ], BackpackItemSlot.prototype, "countDisplayer", void 0);
      BackpackItemSlot = __decorate([ ccclass ], BackpackItemSlot);
      return BackpackItemSlot;
    }(cc.Component);
    exports.default = BackpackItemSlot;
    cc._RF.pop();
  }, {} ],
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
    var BottomDragPanel = function(_super) {
      __extends(BottomDragPanel, _super);
      function BottomDragPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.root = null;
        _this.isOpened = false;
        return _this;
      }
      BottomDragPanel.prototype.start = function() {};
      BottomDragPanel.prototype.trigger = function() {
        this.isOpened = !this.isOpened;
        this.isOpened ? this.open() : this.close();
      };
      BottomDragPanel.prototype.open = function() {
        console.log("open");
        cc.tween(this.node).to(1, {
          position: cc.v3(0, 0, 0)
        }).start();
      };
      BottomDragPanel.prototype.close = function() {
        console.log("close");
        cc.tween(this.node).to(1, {
          position: cc.v3(-290, 0, 0)
        }).start();
      };
      __decorate([ property(cc.Label) ], BottomDragPanel.prototype, "label", void 0);
      __decorate([ property ], BottomDragPanel.prototype, "text", void 0);
      __decorate([ property(cc.Node) ], BottomDragPanel.prototype, "root", void 0);
      BottomDragPanel = __decorate([ ccclass ], BottomDragPanel);
      return BottomDragPanel;
    }(cc.Component);
    exports.default = BottomDragPanel;
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
    var ButtonAnimation = function(_super) {
      __extends(ButtonAnimation, _super);
      function ButtonAnimation() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ButtonAnimation.prototype.pumpChild = function(nodeName) {
        cc.log("pump child: " + JSON.stringify(nodeName));
        var node = this.node.getChildByName(nodeName);
        cc.tween(node).to(.2, {
          scale: 1.5
        }).to(.2, {
          scale: 1
        }).start();
      };
      ButtonAnimation = __decorate([ ccclass ], ButtonAnimation);
      return ButtonAnimation;
    }(cc.Component);
    exports.default = ButtonAnimation;
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
    var CameraController = function(_super) {
      __extends(CameraController, _super);
      function CameraController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodePos = null;
        return _this;
      }
      CameraController.prototype.onLoad = function() {
        this.nodePos = this.node.getPosition();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      CameraController.prototype.onTouchStart = function(event) {
        var touches = event.getTouches();
        var oldPos = this.node.convertToWorldSpaceAR(touches[0].getStartLocation());
        console.log("touchStart: " + oldPos);
        this.eventNode.emit("touchStart", oldPos);
      };
      CameraController.prototype.onTouchMove = function(event) {
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
      CameraController.prototype.onTouchEnd = function() {
        this.nodePos = this.node.getPosition();
      };
      CameraController.prototype.onTouchCancel = function() {
        this.nodePos = this.node.getPosition();
      };
      __decorate([ property(cc.Label) ], CameraController.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], CameraController.prototype, "eventNode", void 0);
      CameraController = __decorate([ ccclass ], CameraController);
      return CameraController;
    }(cc.Component);
    exports.default = CameraController;
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
  DragableObject: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "05c1fvPlYpNaKm1PLKSzNgP", "DragableObject");
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
    var DragableObject = function(_super) {
      __extends(DragableObject, _super);
      function DragableObject() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.moveMode = false;
        _this.typeIndex = 0;
        _this.dragScale = 1.5;
        return _this;
      }
      DragableObject.prototype.setup = function(uid, spriteFrame, getCount, dragHandler, layerDragTo) {
        cc.log("setup");
        this.uid = uid;
        spriteFrame && (this.sprite.spriteFrame = spriteFrame);
        this.getCount = getCount;
        this.dragHandler = dragHandler;
        this.layerDragTo = layerDragTo;
        this.originLayer = this.node.parent;
        this.initEvent();
        this.updateValue();
        this.node.active = true;
      };
      DragableObject.prototype.initEvent = function() {
        var _this = this;
        cc.log("init event");
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          var layer = _this.layerDragTo;
          var p = layer.convertToNodeSpaceAR(_this.node.convertToWorldSpaceAR(new cc.Vec2(0, 0)));
          _this.node.setParent(layer);
          _this.node.setPosition(p);
          _this.dragHandler.triggerDragEvent(_this.node, cc.Node.EventType.TOUCH_START, event);
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var diff = event.getLocation().sub(event.getStartLocation());
          if (!_this.moveMode) {
            if (diff.mag() < 20) {
              cc.log("onTouchMove \u79fb\u52d5\u8ddd\u96e2\u904e\u77ed");
              return;
            }
            cc.log("touch move");
            _this.moveMode = true;
            _this.sprite.node.setScale(_this.dragScale.valueOf());
            _this.valueDisplayer && (_this.valueDisplayer.active = true);
          }
          if (_this.moveMode) {
            var lp = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            _this.node.setPosition(lp);
            _this.dragHandler.triggerDragEvent(_this.node, cc.Node.EventType.TOUCH_MOVE, event);
          }
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
          cc.log("TOUCH_CANCEL");
          _this.dragHandler.triggerDragEvent(_this.node, cc.Node.EventType.TOUCH_CANCEL, event);
          _this.cancelDrag();
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          cc.log("TOUCH_END");
          _this.dragHandler.triggerDragEvent(_this.node, cc.Node.EventType.TOUCH_END, event);
          _this.cancelDrag();
        });
      };
      DragableObject.prototype.updateValue = function() {
        this.valueTextDisplayer && (this.valueTextDisplayer.string = this.getCount().toString());
        0 == this.getCount() && this.moveMode && this.node.emit(cc.Node.EventType.TOUCH_END);
      };
      DragableObject.prototype.cancelDrag = function() {
        this.valueDisplayer && (this.valueDisplayer.active = false);
        this.node.setParent(this.originLayer);
        this.node.setPosition(new cc.Vec2(0, 0));
        this.moveMode = false;
        this.node.active = false;
      };
      __decorate([ property(cc.Sprite) ], DragableObject.prototype, "sprite", void 0);
      __decorate([ property(cc.Node) ], DragableObject.prototype, "valueDisplayer", void 0);
      __decorate([ property(cc.RichText) ], DragableObject.prototype, "valueTextDisplayer", void 0);
      __decorate([ property(Number) ], DragableObject.prototype, "typeIndex", void 0);
      __decorate([ property(Number) ], DragableObject.prototype, "dragScale", void 0);
      DragableObject = __decorate([ ccclass ], DragableObject);
      return DragableObject;
    }(cc.Component);
    exports.default = DragableObject;
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
    var EventNode = function(_super) {
      __extends(EventNode, _super);
      function EventNode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      EventNode.prototype.start = function() {};
      __decorate([ property(cc.Label) ], EventNode.prototype, "label", void 0);
      __decorate([ property ], EventNode.prototype, "text", void 0);
      EventNode = __decorate([ ccclass ], EventNode);
      return EventNode;
    }(cc.Component);
    exports.default = EventNode;
    cc._RF.pop();
  }, {} ],
  Extentions: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "186d5wGHqBBC6MECVrrly4X", "Extentions");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.until = void 0;
    function until(conditionFunction) {
      var poll = function(resolve) {
        conditionFunction() ? resolve() : setTimeout(function(_) {
          return poll(resolve);
        }, 400);
      };
      return new Promise(poll);
    }
    exports.until = until;
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
    var GrowingTimeDisplayer = function(_super) {
      __extends(GrowingTimeDisplayer, _super);
      function GrowingTimeDisplayer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GrowingTimeDisplayer.prototype.setup = function(name, getNowTime, getMaxTime, onClickSpeedUp, updateSpeedUpCount, onClickFertilize, updateFertilize, canUseFertilize) {
        this.progressBar || (this.progressBar = this.getComponent(cc.ProgressBar));
        this.nameDisplayer.string = name;
        this.getNowTime = getNowTime;
        this.getMaxTime = getMaxTime;
        this.onClickSpeedUp = onClickSpeedUp;
        this.updateSpeedUpCount = updateSpeedUpCount;
        this.onClickFertilize = onClickFertilize;
        this.updateFertilize = updateFertilize;
        this.canUseFertilize = canUseFertilize;
      };
      GrowingTimeDisplayer.prototype.update = function(dt) {
        this.getNowTime && this.getMaxTime && (this.progressBar.progress = this.getNowTime() / this.getMaxTime());
        this.updateSpeedUp();
        this._updateFertilize();
      };
      GrowingTimeDisplayer.prototype.updateSpeedUp = function() {
        if (this.updateSpeedUpCount) {
          var count = this.updateSpeedUpCount();
          this.speedUpCountDisplayer.string = count.toString();
          this.speedUpBtn.interactable = count > 0;
        } else this.speedUpBtn.interactable = false;
      };
      GrowingTimeDisplayer.prototype._updateFertilize = function() {
        if (this.updateFertilize) {
          var count = this.updateFertilize();
          this.fertilizeCountDisplayer.string = count.toString();
        }
        this.canUseFertilize ? this.fertilizeBtn.interactable = this.canUseFertilize() : this.fertilizeBtn.interactable = false;
      };
      GrowingTimeDisplayer.prototype.close = function() {
        this.getNowTime = null;
        this.getMaxTime = null;
        this.node.active = false;
      };
      GrowingTimeDisplayer.prototype.clickSpeedUp = function() {
        this.onClickSpeedUp && this.onClickSpeedUp();
      };
      GrowingTimeDisplayer.prototype.clickFertilize = function() {
        this.onClickFertilize && this.onClickFertilize();
      };
      GrowingTimeDisplayer.prototype.enableSpeedUp = function(isEnable) {};
      GrowingTimeDisplayer.prototype.enableFertilize = function(isEnable) {};
      __decorate([ property(cc.Label) ], GrowingTimeDisplayer.prototype, "nameDisplayer", void 0);
      __decorate([ property(cc.Label) ], GrowingTimeDisplayer.prototype, "timeDisplayer", void 0);
      __decorate([ property(cc.Label) ], GrowingTimeDisplayer.prototype, "speedUpCountDisplayer", void 0);
      __decorate([ property(cc.Label) ], GrowingTimeDisplayer.prototype, "fertilizeCountDisplayer", void 0);
      __decorate([ property(cc.Button) ], GrowingTimeDisplayer.prototype, "speedUpBtn", void 0);
      __decorate([ property(cc.Button) ], GrowingTimeDisplayer.prototype, "fertilizeBtn", void 0);
      GrowingTimeDisplayer = __decorate([ ccclass ], GrowingTimeDisplayer);
      return GrowingTimeDisplayer;
    }(cc.Component);
    exports.default = GrowingTimeDisplayer;
    cc._RF.pop();
  }, {} ],
  IDragHandler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe06bt+5PdEFYA55TnRZhDm", "IDragHandler");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IItemDatabase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a311WNiaFCjLJXVs9CpsDj", "IItemDatabase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PlayerItemDataSet = exports.ItemDataSet = void 0;
    var ItemDataSet = function() {
      function ItemDataSet(uid, spriteName, tags) {
        this.uid = uid;
        this.spriteName = spriteName;
        this.tags = tags;
      }
      Object.defineProperty(ItemDataSet.prototype, "spriteFrame", {
        get: function() {
          var _this = this;
          return new Promise(function(res) {
            cc.resources.load("Items/" + _this.spriteName, cc.SpriteFrame, function(err, file) {
              if (err) cc.log("can't load image: " + _this.uid + ", " + _this.spriteName); else {
                _this._spriteFrame = file;
                res(_this._spriteFrame);
              }
            });
          });
        },
        enumerable: false,
        configurable: true
      });
      return ItemDataSet;
    }();
    exports.ItemDataSet = ItemDataSet;
    var PlayerItemDataSet = function() {
      function PlayerItemDataSet(uid, count) {
        this.uid = uid;
        this.count = count;
      }
      return PlayerItemDataSet;
    }();
    exports.PlayerItemDataSet = PlayerItemDataSet;
    cc._RF.pop();
  }, {} ],
  ItemDatabase2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "727141EexNCCosIkTMakRjZ", "ItemDatabase2");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ItemDatabase2 = void 0;
    var Extentions_1 = require("./Extentions");
    var IItemDatabase_1 = require("./IItemDatabase");
    var ItemDatabase2 = function() {
      function ItemDatabase2() {
        this.datas = [];
        this.dataInfos = new Map();
        this.spriteFrames = new Map();
        this.playerItems = [];
      }
      Object.defineProperty(ItemDatabase2, "instance", {
        get: function() {
          this._instance || (this._instance = new ItemDatabase2());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      ItemDatabase2.prototype.init = function() {
        var _this = this;
        var text = cc.resources.load("itemDatabase2", function(err, file) {
          if (err) cc.log(err); else {
            var items = file.json["items"];
            items.forEach(function(item) {
              _this.dataInfos.set(item.uid.toString(), item);
            });
            _this.isInit = true;
          }
        });
        this.playerItems = [ new IItemDatabase_1.PlayerItemDataSet("0", 3), new IItemDatabase_1.PlayerItemDataSet("1", 1), new IItemDatabase_1.PlayerItemDataSet("2", 2), new IItemDatabase_1.PlayerItemDataSet("3", 2) ];
        return new Promise(function(res, req) {
          return __awaiter(_this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                return [ 4, Extentions_1.until(function(_) {
                  return true == _this.isInit;
                }) ];

               case 1:
                _a.sent();
                res();
                return [ 2 ];
              }
            });
          });
        });
      };
      ItemDatabase2.prototype.getIconSprite = function(uid) {
        var _this = this;
        return new Promise(function(res, req) {
          return __awaiter(_this, void 0, void 0, function() {
            var dataSet, sprite;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                cc.log("getIconSprite 1, " + JSON.stringify(uid));
                return [ 4, this.getItemInfo(uid) ];

               case 1:
                dataSet = _a.sent();
                cc.log("getIconSprite 2");
                if (!this.spriteFrames.has(uid)) return [ 3, 2 ];
                res(this.spriteFrames[uid]);
                return [ 3, 4 ];

               case 2:
                return [ 4, this.loadSprite(uid) ];

               case 3:
                sprite = _a.sent();
                _a.label = 4;

               case 4:
                res(sprite);
                cc.log("getIconSprite 3");
                return [ 2 ];
              }
            });
          });
        });
      };
      ItemDatabase2.prototype.loadSprite = function(uid) {
        var spriteName = this.getItemInfo(uid)["iconSprite"];
        return new Promise(function(res, req) {
          cc.resources.load("Items/" + spriteName, cc.SpriteFrame, function(err, file) {
            err ? cc.log("can't load image: " + uid + ", " + spriteName) : res(file);
          });
        });
      };
      ItemDatabase2.prototype.getItemInfo = function(uid) {
        cc.log("getItemInfo: " + uid);
        return this.dataInfos.get(uid);
      };
      ItemDatabase2.prototype.getItemDataSet = function(uid) {
        var _this = this;
        return new Promise(function(res, req) {
          return __awaiter(_this, void 0, void 0, function() {
            var find;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                return [ 4, Extentions_1.until(function(_) {
                  return true == _this.isInit;
                }) ];

               case 1:
                _a.sent();
                find = this.datas.find(function(x) {
                  return x.uid === uid;
                });
                find ? res(find) : req("No find");
                return [ 2 ];
              }
            });
          });
        });
      };
      ItemDatabase2.prototype.hasTag = function(uid, tag) {
        cc.log(uid + ", " + tag);
        return "seed" == tag && "0" == uid;
      };
      return ItemDatabase2;
    }();
    exports.ItemDatabase2 = ItemDatabase2;
    cc._RF.pop();
  }, {
    "./Extentions": "Extentions",
    "./IItemDatabase": "IItemDatabase"
  } ],
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
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DragableObject_1 = require("./DragableObject");
    var Extentions_1 = require("./Extentions");
    var ItemDatabase2_1 = require("./ItemDatabase2");
    var PlayerData_1 = require("./PlayerData");
    var PlayerInfoPanel_1 = require("./PlayerInfoPanel");
    var SeedPanel_1 = require("./SeedPanel");
    var StoreItemData_1 = require("./StoreItemData");
    var StorePanel_1 = require("./StorePanel");
    var TestItemDb_1 = require("./TestItemDb");
    var TileTest_1 = require("./TileTest");
    var TouchArea_1 = require("./TouchArea");
    var Vegetable_1 = require("./Vegetable");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Main = function(_super) {
      __extends(Main, _super);
      function Main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.storeOpend = false;
        _this.coinPool = new cc.NodePool();
        return _this;
      }
      Main.prototype.start = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, ItemDatabase2_1.ItemDatabase2.instance.init() ];

             case 1:
              _a.sent();
              this.itemDb = ItemDatabase2_1.ItemDatabase2.instance;
              this.InitPools();
              cc.resources.load("prefabs/Vegetable", cc.Prefab, function(err, asset) {
                err ? cc.log(err) : _this.vegetablePrefab = asset;
              });
              return [ 4, Extentions_1.until(function() {
                return null != _this.vegetablePrefab;
              }) ];

             case 2:
              _a.sent();
              this.InitPlayerData();
              this.InitSeedPanel();
              this.InitTileTest();
              this.InitTouchArea();
              cc.log("\u521d\u59cb\u5316\u5168\u90e8\u5b8c\u6210");
              this.blockUI.active = false;
              return [ 2 ];
            }
          });
        });
      };
      Main.prototype.InitPools = function() {
        for (var i = 0; i < 10; i++) {
          var coin = cc.instantiate(this.coinPrefab);
          this.coinPool.put(coin);
        }
      };
      Main.prototype.InitTileTest = function() {
        var _this = this;
        this.tileTest.inject(this.itemDb);
        this.tileTest.createVegtable = function(uid) {
          var inst = cc.instantiate(_this.vegetablePrefab);
          var veg = inst.getComponent(Vegetable_1.default);
          cc.log(veg);
          veg.onSpawn(uid, 0, 10, _this.itemDb.getItemInfo(uid)["growthSteps"]);
          return inst;
        };
        this.tileTest.setupDragable = function(dragable, uid) {
          dragable.setup(uid, null, function() {
            return 1;
          }, _this.touchArea, _this.dragableLayer);
        };
      };
      Main.prototype.InitTouchArea = function() {
        var _this = this;
        this.touchArea.onTouchStartInStoreMode = function() {
          return _this.onStoreButtonTrigger();
        };
        this.touchArea.plant = function(tile, nodeToDrag, uid) {
          var veg = tile.getComponentInChildren(Vegetable_1.default);
          if (!veg) {
            _this.tileTest.plantOnTile(uid, tile);
            var item = _this.itemDb.playerItems.find(function(x) {
              return x.uid == uid;
            });
            item.count = item.count - 1;
            nodeToDrag.getComponent(DragableObject_1.default).updateValue();
            _this.itemDb.playerItems = _this.itemDb.playerItems.filter(function(x) {
              return x.count > 0;
            });
          }
        };
        this.touchArea.harvest = function(tile, nodeToDrag, uid) {
          var veg = tile.getComponentInChildren(Vegetable_1.default);
          var value = 5;
          veg.isFertilize && (value *= 2);
          veg.node.destroy();
          cc.log("**********\u6536\u6210" + value + "\u500b");
          _this.spawnCoin(value, tile.node.convertToWorldSpaceAR(new cc.Vec3(0, 0, 0)));
        };
        this.touchArea.spawnCoin = function(count, worldPos) {
          return _this.spawnCoin(count, worldPos);
        };
      };
      Main.prototype.InitPlayerData = function() {
        this.playerData = new PlayerData_1.PlayerData("\u9f8d\u50b2", 6666, 7777, [ {
          uid: "0",
          count: 10
        } ]);
        this.playerInfoPanel.inject(this.playerData);
      };
      Main.prototype.InitSeedPanel = function() {
        this.seedPanel.inject(this.itemDb, this.touchArea);
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
      Main.prototype.spawnCoin = function(count, worldPos) {
        var _this = this;
        var endPoint = this.bagpackUI.position;
        var _loop_1 = function() {
          var coin = null;
          coin = this_1.coinPool.size() > 0 ? this_1.coinPool.get() : cc.instantiate(this_1.coinPrefab);
          coin.parent = this_1.rootCanvasNode;
          spawnPoint = this_1.rootCanvasNode.convertToNodeSpaceAR(worldPos);
          spawnPoint.x += 2 * (Math.random() - .5) * 20;
          spawnPoint.y += 2 * (Math.random() - .5) * 20;
          coin.setPosition(spawnPoint);
          coin.active = true;
          cc.tween(coin).delay(.3 * Math.random() + .2).to(.5, {
            position: endPoint
          }).call(function() {
            return _this.recycleCoin(coin);
          }).start();
        };
        var this_1 = this, spawnPoint;
        for (var i = 0; i < count; i++) _loop_1();
      };
      Main.prototype.recycleCoin = function(coin) {
        cc.log("\u56de\u6536\u91d1\u5e63");
        this.coinPool.put(coin);
        coin.active = false;
      };
      __decorate([ property(PlayerInfoPanel_1.default) ], Main.prototype, "playerInfoPanel", void 0);
      __decorate([ property(StorePanel_1.default) ], Main.prototype, "storePanel", void 0);
      __decorate([ property(TileTest_1.default) ], Main.prototype, "tileTest", void 0);
      __decorate([ property(TouchArea_1.default) ], Main.prototype, "touchArea", void 0);
      __decorate([ property(SeedPanel_1.default) ], Main.prototype, "seedPanel", void 0);
      __decorate([ property(TestItemDb_1.default) ], Main.prototype, "test", void 0);
      __decorate([ property(cc.Node) ], Main.prototype, "dragableLayer", void 0);
      __decorate([ property(cc.Node) ], Main.prototype, "rootCanvasNode", void 0);
      __decorate([ property(cc.Node) ], Main.prototype, "bagpackUI", void 0);
      __decorate([ property(cc.Prefab) ], Main.prototype, "coinPrefab", void 0);
      __decorate([ property(cc.Node) ], Main.prototype, "blockUI", void 0);
      Main = __decorate([ ccclass ], Main);
      return Main;
    }(cc.Component);
    exports.default = Main;
    cc._RF.pop();
  }, {
    "./DragableObject": "DragableObject",
    "./Extentions": "Extentions",
    "./ItemDatabase2": "ItemDatabase2",
    "./PlayerData": "PlayerData",
    "./PlayerInfoPanel": "PlayerInfoPanel",
    "./SeedPanel": "SeedPanel",
    "./StoreItemData": "StoreItemData",
    "./StorePanel": "StorePanel",
    "./TestItemDb": "TestItemDb",
    "./TileTest": "TileTest",
    "./TouchArea": "TouchArea",
    "./Vegetable": "Vegetable"
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
      function PlayerData(name, gem, catCoin, items) {
        this.observers = [];
        this.name = name;
        this.gem = gem;
        this.catCoin = catCoin;
        this.items = items;
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
    var PlayerInfoPanel = function(_super) {
      __extends(PlayerInfoPanel, _super);
      function PlayerInfoPanel() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PlayerInfoPanel.prototype.inject = function(playerData) {
        playerData.regist(this);
      };
      PlayerInfoPanel.prototype.updateData = function(data) {
        this.nameDisplayer.string = data.name;
        this.gemDisplayer.string = "\u7d05\u947d:" + data.gem;
        this.catCoinDisplayer.string = "\u5c0f\u55b5\u5e63:" + data.catCoin;
      };
      __decorate([ property(cc.Sprite) ], PlayerInfoPanel.prototype, "headDisplayer", void 0);
      __decorate([ property(cc.RichText) ], PlayerInfoPanel.prototype, "nameDisplayer", void 0);
      __decorate([ property(cc.RichText) ], PlayerInfoPanel.prototype, "gemDisplayer", void 0);
      __decorate([ property(cc.RichText) ], PlayerInfoPanel.prototype, "catCoinDisplayer", void 0);
      PlayerInfoPanel = __decorate([ ccclass ], PlayerInfoPanel);
      return PlayerInfoPanel;
    }(cc.Component);
    exports.default = PlayerInfoPanel;
    cc._RF.pop();
  }, {} ],
  SeedPanelSlot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6014bkvnWpNvIrymGm7I1d/", "SeedPanelSlot");
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
    var DragableObject_1 = require("./DragableObject");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SeedPanelSlot = function(_super) {
      __extends(SeedPanelSlot, _super);
      function SeedPanelSlot() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.uid = "0";
        return _this;
      }
      SeedPanelSlot.prototype.inject = function(itemDb, dragHandler, layerDragTo) {
        this.itemDb = itemDb;
        this.dragHandler = dragHandler;
        this.layerDragTo = layerDragTo;
      };
      SeedPanelSlot.prototype.setup = function(uid) {
        var _this = this;
        this.itemDb.getIconSprite(uid).then(function(spriteFrame) {
          _this.dragableObject.setup(uid, spriteFrame, function() {
            return _this.itemDb.playerItems.find(function(x) {
              return x.uid;
            }).count;
          }, _this.dragHandler, _this.layerDragTo);
        });
        this.uid = uid;
        this.countDisplayer.string = this.itemDb.playerItems.find(function(x) {
          return x.uid;
        }).count.toString();
        cc.log(this.uid);
      };
      __decorate([ property(cc.RichText) ], SeedPanelSlot.prototype, "countDisplayer", void 0);
      __decorate([ property(DragableObject_1.default) ], SeedPanelSlot.prototype, "dragableObject", void 0);
      SeedPanelSlot = __decorate([ ccclass ], SeedPanelSlot);
      return SeedPanelSlot;
    }(cc.Component);
    exports.default = SeedPanelSlot;
    cc._RF.pop();
  }, {
    "./DragableObject": "DragableObject"
  } ],
  SeedPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7cf13qhEZNIcJx1aZy/XrM6", "SeedPanel");
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
    var SeedPanelSlot_1 = require("./SeedPanelSlot");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SeedPanel = function(_super) {
      __extends(SeedPanel, _super);
      function SeedPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.slots = [];
        return _this;
      }
      SeedPanel.prototype.inject = function(itemDb, dragHandler) {
        this.itemDb = itemDb;
        this.dragHandler = dragHandler;
      };
      SeedPanel.prototype.open = function() {
        var _this = this;
        var results = this.itemDb.playerItems.filter(function(x) {
          return _this.itemDb.hasTag(x.uid, "seed");
        });
        cc.log("\u7a2e\u5b50\u7a2e\u985e:" + results.length + ", " + this.itemDb.playerItems.length);
        if (this.slots.length < results.length) {
          var diff = results.length - this.slots.length;
          for (var i = 0; i < diff; i++) {
            var _slot = cc.instantiate(this.slotPrefab);
            _slot.setParent(this.slotRoot);
            var slot = _slot.getComponent(SeedPanelSlot_1.default);
            slot.inject(this.itemDb, this, this.layerDragTo);
            this.slots.push(slot);
          }
        }
        for (var i = 0; i < this.slots.length; i++) if (i >= results.length) this.slots[i].node.active = false; else {
          this.slots[i].setup(results[i].uid);
          this.slots[i].node.active = true;
        }
        this.node.active = true;
      };
      SeedPanel.prototype.triggerDragEvent = function(node, eventType, event) {
        this.dragHandler.triggerDragEvent(node, eventType, event);
        this.node.active = false;
      };
      SeedPanel.prototype.close = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Node) ], SeedPanel.prototype, "slotRoot", void 0);
      __decorate([ property(cc.Prefab) ], SeedPanel.prototype, "slotPrefab", void 0);
      __decorate([ property(cc.Node) ], SeedPanel.prototype, "layerDragTo", void 0);
      SeedPanel = __decorate([ ccclass ], SeedPanel);
      return SeedPanel;
    }(cc.Component);
    exports.default = SeedPanel;
    cc._RF.pop();
  }, {
    "./SeedPanelSlot": "SeedPanelSlot"
  } ],
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
    var Seed = function(_super) {
      __extends(Seed, _super);
      function Seed() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.progressUI = null;
        return _this;
      }
      Seed.prototype.start = function() {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          console.log("on touch seed");
          var wp = _this.node.convertToWorldSpaceAR(cc.v2(0, -100));
          var lp = _this.progressUI.parent.convertToNodeSpaceAR(wp);
          _this.progressUI.setPosition(lp);
          event.stopPropagation();
        });
      };
      __decorate([ property(cc.Node) ], Seed.prototype, "progressUI", void 0);
      Seed = __decorate([ ccclass ], Seed);
      return Seed;
    }(cc.Component);
    exports.default = Seed;
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
    var StoreItemBuyPanel = function(_super) {
      __extends(StoreItemBuyPanel, _super);
      function StoreItemBuyPanel() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StoreItemBuyPanel.prototype.open = function(uid, cost) {
        this.node.active = true;
      };
      StoreItemBuyPanel.prototype.close = function() {
        this.node.active = false;
      };
      StoreItemBuyPanel = __decorate([ ccclass ], StoreItemBuyPanel);
      return StoreItemBuyPanel;
    }(cc.Component);
    exports.default = StoreItemBuyPanel;
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
  TestItemDb: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6484ajYPapCaZVF+zSzjnKp", "TestItemDb");
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
    var TestItemDb = function(_super) {
      __extends(TestItemDb, _super);
      function TestItemDb() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.text = "hello";
        return _this;
      }
      TestItemDb.prototype.start = function() {};
      TestItemDb.prototype.setup = function(itemDb) {
        var _this = this;
        itemDb.getIconSprite("0").then(function(spriteFrame) {
          cc.log("here");
          _this.sprite.spriteFrame = spriteFrame;
          _this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
            _this.node.setParent(cc.find("Canvas"));
          });
          _this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
            _this.node.setPosition(_this.node.parent.convertToNodeSpaceAR(event.getLocation()));
            cc.log("parent: " + _this.node.parent.name);
          });
        });
      };
      __decorate([ property(cc.Sprite) ], TestItemDb.prototype, "sprite", void 0);
      __decorate([ property ], TestItemDb.prototype, "text", void 0);
      TestItemDb = __decorate([ ccclass ], TestItemDb);
      return TestItemDb;
    }(cc.Component);
    exports.default = TestItemDb;
    cc._RF.pop();
  }, {} ],
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
    var SeedPanel_1 = require("./SeedPanel");
    var Vegetable_1 = require("./Vegetable");
    var DragableObject_1 = require("./DragableObject");
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
      TileTest.prototype.inject = function(itemDB) {
        this.itemDB = itemDB;
      };
      TileTest.prototype.touchStart = function(event) {
        this.seedPanel.close();
        this.progressUI.getComponent(GrowingTimeDisplayer_1.default).close();
        this.lastSelectTile && (this.lastSelectTile.node.color = cc.Color.WHITE);
      };
      TileTest.prototype.touchEnd = function(vec2) {
        var _this = this;
        var tiledLayer = this.map.getLayer("base");
        var pos = this.screenToMap(tiledLayer, this.node.convertToNodeSpaceAR(vec2));
        var tile = this.getTileByPosition(vec2);
        var tileNode = tile.node;
        cc.log("gid:" + tile.gid);
        this.lastSelectTile = tile;
        if (3 == tile.gid) {
          var veg = tile.getComponentInChildren(Vegetable_1.default);
          if (veg) if (veg.canHarvest()) {
            var wp = veg.node.convertToWorldSpaceAR(cc.v2(-70, 70));
            var sp = this.gameCamera.getWorldToScreenPoint(wp);
            var lp = this.progressUI.parent.convertToNodeSpaceAR(sp);
            this.harvestUI.setPosition(lp);
            var dragable = this.harvestUI.getComponent(DragableObject_1.default);
            this.setupDragable(dragable, veg.uid);
          } else {
            var wp = veg.node.convertToWorldSpaceAR(cc.v2(0, 0));
            var sp = this.gameCamera.getWorldToScreenPoint(wp);
            var lp = this.progressUI.parent.convertToNodeSpaceAR(sp);
            this.progressUI.setPosition(lp);
            this.progressUI.active = true;
            var displayer = this.progressUI.getComponent(GrowingTimeDisplayer_1.default);
            displayer.setup(this.itemDB.getItemInfo(veg.uid)["name"], function() {
              return veg.nowTime;
            }, function() {
              return veg.growTime;
            }, function() {
              cc.log("Click!!!");
              var item = _this.itemDB.playerItems.find(function(x) {
                return "2" == x.uid;
              });
              item.count = item.count - 1;
              veg.SpeedUp(50);
            }, function() {
              return _this.itemDB.playerItems.find(function(x) {
                return "2" == x.uid;
              }).count;
            }, function() {
              cc.log("\u65bd\u80a5");
              var item = _this.itemDB.playerItems.find(function(x) {
                return "3" == x.uid;
              });
              item.count = item.count - 1;
              veg.enableFertilize(true);
            }, function() {
              return _this.itemDB.playerItems.find(function(x) {
                return "3" == x.uid;
              }).count;
            }, function() {
              return _this.itemDB.playerItems.find(function(x) {
                return "3" == x.uid;
              }).count > 0 && false == veg.isFertilize;
            });
          } else {
            var wp = tile.node.convertToWorldSpaceAR(cc.v2(52, 26));
            var sp = this.gameCamera.getWorldToScreenPoint(wp);
            var winSize = cc.winSize;
            if (sp.x > cc.winSize.width / 2) {
              var wp = tile.node.convertToWorldSpaceAR(cc.v2(52, 26));
              var sp = this.gameCamera.getWorldToScreenPoint(new cc.Vec2(wp.x - winSize.width / 3, wp.y));
              var lp = this.seedPanel.node.parent.convertToNodeSpaceAR(sp);
              cc.log("wp:" + wp + ", sp:" + sp, ", lp:" + lp);
              this.seedPanel.node.setPosition(lp);
              this.seedPanel.open();
            } else {
              var wp = tile.node.convertToWorldSpaceAR(cc.v2(52, 26));
              var sp = this.gameCamera.getWorldToScreenPoint(new cc.Vec2(wp.x + winSize.width / 3, wp.y));
              var lp = this.seedPanel.node.parent.convertToNodeSpaceAR(sp);
              cc.log("w:" + cc.winSize.width + ", wp:" + wp + ", sp:" + sp, ", lp:" + lp);
              this.seedPanel.node.setPosition(lp);
              this.seedPanel.open();
            }
            tile.node.color = cc.Color.RED;
          }
        }
        this.onTileClicked && this.onTileClicked(tile);
      };
      TileTest.prototype.screenToMap = function(mapLayer, pos) {
        var tw = mapLayer.getMapTileSize().width;
        var th = mapLayer.getMapTileSize().height;
        var self = this;
        var wx = pos.x - self.node.width / 2;
        var wy = pos.y - self.node.height + th;
        console.log("w:" + self.node.width + ", h:" + self.node.height);
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
      TileTest.prototype.getTileByPosition = function(p) {
        var tiledLayer = this.map.getLayer("base");
        var pos = this.screenToMap(tiledLayer, this.node.convertToNodeSpaceAR(p));
        var tile = tiledLayer.getTiledTileAt(pos.x, pos.y, true);
        cc.log("gid:" + tile.gid);
        return tile;
      };
      TileTest.prototype.plantOnTile = function(uid, tile) {
        var tileNode = tile.node;
        if (tileNode.getComponentInChildren(Vegetable_1.default)) cc.log("\u5df2\u7d93\u7a2e\u904e\u4e86"); else {
          var vegetable = this.createVegtable(uid);
          vegetable.setParent(tileNode);
          vegetable.setPosition(52, 26);
        }
      };
      __decorate([ property(cc.Label) ], TileTest.prototype, "label", void 0);
      __decorate([ property ], TileTest.prototype, "text", void 0);
      __decorate([ property(cc.TiledMap) ], TileTest.prototype, "map", void 0);
      __decorate([ property(cc.Node) ], TileTest.prototype, "eventNode", void 0);
      __decorate([ property(cc.Prefab) ], TileTest.prototype, "vegetablePrefab", void 0);
      __decorate([ property(cc.Node) ], TileTest.prototype, "progressUI", void 0);
      __decorate([ property(cc.Node) ], TileTest.prototype, "harvestUI", void 0);
      __decorate([ property(cc.Camera) ], TileTest.prototype, "gameCamera", void 0);
      __decorate([ property(cc.Node) ], TileTest.prototype, "canvasNode", void 0);
      __decorate([ property(SeedPanel_1.default) ], TileTest.prototype, "seedPanel", void 0);
      TileTest = __decorate([ ccclass ], TileTest);
      return TileTest;
    }(cc.Component);
    exports.default = TileTest;
    cc._RF.pop();
  }, {
    "./DragableObject": "DragableObject",
    "./GrowingTimeDisplayer": "GrowingTimeDisplayer",
    "./SeedPanel": "SeedPanel",
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
    var DragableObject_1 = require("./DragableObject");
    var TileTest_1 = require("./TileTest");
    var Vegetable_1 = require("./Vegetable");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TouchArea = function(_super) {
      __extends(TouchArea, _super);
      function TouchArea() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.text = "hello";
        _this.nodePos = new cc.Vec2(0, 0);
        _this.moveMode = false;
        _this.storeMode = false;
        _this.dragMode = false;
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
        var touches = event.getTouches();
        if (true === this.dragMode) {
          cc.log("\u6293\u53d6\u66f4\u65b0");
          var s = this.gameCam.getScreenToWorldPoint(touches[0].getLocation());
          var tile = this.tileTest.getTileByPosition(new cc.Vec2(s.x, s.y));
          if (3 == tile.gid) {
            var veg = tile.getComponentInChildren(Vegetable_1.default);
            var drag = this.nodeToDrag.getComponent(DragableObject_1.default);
            if (1 == drag.typeIndex) {
              if (veg && veg.canHarvest()) {
                var uid = veg.uid;
                cc.log("harvest => " + uid);
                this.harvest(tile, this.nodeToDrag, uid);
              }
            } else {
              var uid = this.nodeToDrag.getComponent(DragableObject_1.default).uid;
              cc.log("plant => " + uid);
              this.plant(tile, this.nodeToDrag, uid);
            }
          }
          cc.log(tile.gid);
          return;
        }
        var diff = event.getLocation().sub(event.getStartLocation());
        if (!this.moveMode) {
          if (diff.mag() < 20) return;
          this.selected = false;
          this.moveMode = true;
        }
        cc.log("onTouchMove");
        var self = this;
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
        this.moveMode = false;
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
      TouchArea.prototype.triggerDragEvent = function(node, eventType, event) {
        if (eventType === cc.Node.EventType.TOUCH_START) {
          cc.log("\u9032\u5165\u6293\u53d6\u6a21\u5f0f");
          this.node.setParent(this.dragLayer);
          this.dragMode = true;
          this.nodeToDrag = node;
        } else if (eventType === cc.Node.EventType.TOUCH_MOVE) {
          cc.log("\u6293\u53d6\u79fb\u52d5");
          this.onTouchMove(event);
        } else if (eventType === cc.Node.EventType.TOUCH_CANCEL || eventType === cc.Node.EventType.TOUCH_END) {
          cc.log("\u96e2\u958b\u6293\u53d6\u6a21\u5f0f");
          this.node.setParent(this.defaultLayer);
          this.dragMode = false;
          this.nodeToDrag = null;
        }
      };
      __decorate([ property ], TouchArea.prototype, "text", void 0);
      __decorate([ property(cc.Camera) ], TouchArea.prototype, "gameCam", void 0);
      __decorate([ property(TileTest_1.default) ], TouchArea.prototype, "tileTest", void 0);
      __decorate([ property(cc.Node) ], TouchArea.prototype, "canvas", void 0);
      __decorate([ property(cc.Node) ], TouchArea.prototype, "defaultLayer", void 0);
      __decorate([ property(cc.Node) ], TouchArea.prototype, "dragLayer", void 0);
      TouchArea = __decorate([ ccclass ], TouchArea);
      return TouchArea;
    }(cc.Component);
    exports.default = TouchArea;
    cc._RF.pop();
  }, {
    "./DragableObject": "DragableObject",
    "./TileTest": "TileTest",
    "./Vegetable": "Vegetable"
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
    var Vegetable = function(_super) {
      __extends(Vegetable, _super);
      function Vegetable() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.spriteFrames = [];
        _this.index = 0;
        _this.isFertilize = false;
        return _this;
      }
      Vegetable.prototype.onSpawn = function(uid, nowTime, growTime, growthSteps) {
        this.uid = uid;
        this.nowTime = nowTime;
        this.growTime = growTime;
        this.growthSteps = growthSteps;
        cc.log("onSpawn:" + JSON.stringify(this.growthSteps));
        this.updateSprite();
        this.isFertilize = false;
      };
      Vegetable.prototype.updateSprite = function() {
        var ratio = this.nowTime / this.growTime * 100;
        for (var i = this.growthSteps.length; i >= 0; i--) if (ratio >= this.growthSteps[i]) {
          this.sprite.spriteFrame = this.spriteFrames[i];
          break;
        }
      };
      Vegetable.prototype.randomTree = function() {};
      Vegetable.prototype.update = function(dt) {
        this.nowTime < this.growTime && this.SpeedUp(dt);
      };
      Vegetable.prototype.SpeedUp = function(addTime) {
        this.nowTime += addTime;
        this.nowTime > this.growTime && (this.nowTime = this.growTime);
        this.updateSprite();
      };
      Vegetable.prototype.enableFertilize = function(isEnable) {
        this.isFertilize = isEnable;
        this.fertilizeEffect.active = this.isFertilize;
      };
      Vegetable.prototype.canHarvest = function() {
        return this.nowTime >= this.growTime;
      };
      __decorate([ property(cc.Label) ], Vegetable.prototype, "label", void 0);
      __decorate([ property ], Vegetable.prototype, "text", void 0);
      __decorate([ property(cc.Sprite) ], Vegetable.prototype, "sprite", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Vegetable.prototype, "spriteFrames", void 0);
      __decorate([ property(cc.Node) ], Vegetable.prototype, "fertilizeEffect", void 0);
      Vegetable = __decorate([ ccclass ], Vegetable);
      return Vegetable;
    }(cc.Component);
    exports.default = Vegetable;
    cc._RF.pop();
  }, {} ]
}, {}, [ "BackpackItemSlot", "BottomDragPanel", "ButtonAnimation", "CameraController", "Dirt", "DragableObject", "EventNode", "Extentions", "GrowingTimeDisplayer", "IDragHandler", "IItemDatabase", "ItemDatabase2", "Main", "Map", "ObserverPattern", "PlayerData", "PlayerInfoPanel", "Seed", "SeedPanel", "SeedPanelSlot", "Singleton", "StoreItemBuyPanel", "StoreItemData", "StoreItemSlot", "StorePanel", "TestItemDb", "TestTileMap", "TileTest", "TouchArea", "TouchDebug", "TouchEvent", "TouchManager", "TouchSystem", "Touchable", "TouchableGroup", "UIButton", "UIController", "Vegetable" ]);