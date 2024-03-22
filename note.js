(function (window) {
    "use strict";
  
    Modernizr.addTest("csstransformspreserve3d", function () {
      var prop = Modernizr.prefixed("transformStyle");
      var val = "preserve-3d";
      var computedStyle;
      if (!prop) return false;
  
      prop = prop
        .replace(/([A-Z])/g, function (str, m1) {
          return "-" + m1.toLowerCase();
        })
        .replace(/^ms-/, "-ms-");
  
      Modernizr.testStyles(
        "#modernizr{" + prop + ":" + val + ";}",
        function (el, rule) {
          computedStyle = window.getComputedStyle
            ? getComputedStyle(el, null).getPropertyValue(prop)
            : "";
        }
      );
  
      return computedStyle === val;
    });
  
    var support = {
        animations: Modernizr.cssanimations,
        preserve3d: Modernizr.csstransformspreserve3d,
        transforms3d: Modernizr.csstransforms3d,
      },
      isSupported =
        support.animations && support.preserve3d && support.transforms3d,
      animEndEventNames = {
        WebkitAnimation: "webkitAnimationEnd",
        OAnimation: "oAnimationEnd",
        msAnimation: "MSAnimationEnd",
        animation: "animationend",
      },
      // animation end event name
      animEndEventName = animEndEventNames[Modernizr.prefixed("animation")];
  
    function extend(a, b) {
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    }
  
    document.addEventListener("DOMContentLoaded", function () {
      var el = document.querySelector("#slideshow");
      if (el) {
        new TiltSlider(el);
      } else {
        console.log("Slideshow element not found");
      }
    });
  
    function TiltSlider(el, options) {
      this.el = el;
      // available effects for the animations (animation class names) - when a item comes in / out
      this.animEffectsOut = ["slideRightOut"];
      this.animEffectsIn = ["slideRightIn"];
  
      // the items olの子のliを取得
      this.items = this.el.querySelector("ol.slides").children;
  
      // total items
      this.itemsCount = this.items.length;
      if (!this.itemsCount) return;
  
      // index of the current item
      this.current = 0;
      this.options = extend({}, this.options);
      extend(this.options, options);
      this._init();
    }
  
    TiltSlider.prototype.options = {};
  
    TiltSlider.prototype._init = function () {
      this._addNavigation();
      this._initEvents();
    };
  
    // add the navigation to the DOM　ナビ
    TiltSlider.prototype._addNavigation = function () {
      // add nav "dots"
      this.nav = document.createElement("nav");
      var inner = "";
      for (var i = 0; i < this.itemsCount; ++i) {
        inner += i === 0 ? '<span class="current"></span>' : "<span></span>";
      }
      this.nav.innerHTML = inner;
      this.el.appendChild(this.nav);
      this.navDots = [].slice.call(this.nav.children);
    };
  
    TiltSlider.prototype._initEvents = function () {
      var self = this;
      // show a new item when clicking the navigation "dots"　ナビのアニメーション
      this.navDots.forEach(function (dot, idx) {
        dot.addEventListener("click", function () {
          if (idx !== self.current) {
            self._showItem(idx);
          }
        });
      });
    };
  

  
  TiltSlider.prototype.initEvents = function() {
    var self = this;
    this.navDots.forEach(function(dot, idx) {
        dot.addEventListener('click', function() {
            self._showItem(idx);
        });
    });
  };
  
  TiltSlider.prototype._showItem = function(pos) {
    if (this.isAnimating) return false;
    this.isAnimating = true;
  
    var self = this,
        currentItem = this.items[this.current],
        nextItem = this.items[pos];
  
    var outEffect = "slideRightOut",
        inEffect = "slideRightIn";
  
    currentItem.setAttribute("data-effect-out", outEffect);
    nextItem.setAttribute("data-effect-in", inEffect);
  
    var onEndAnimationCurrentItem = function() {
        currentItem.removeEventListener(animEndEventName, onEndAnimationCurrentItem);
        classie.removeClass(currentItem, "hide");
        classie.addClass(nextItem, "show");
    };
  
    var onEndAnimationNextItem = function() {
        nextItem.removeEventListener(animEndEventName, onEndAnimationNextItem);
        classie.removeClass(nextItem, "show");
        classie.addClass(nextItem, "current");
        self.isAnimating = false;
    };
  
    currentItem.addEventListener(animEndEventName, onEndAnimationCurrentItem);
    nextItem.addEventListener(animEndEventName, onEndAnimationNextItem);
  
    this.current = pos; // Update the current position
    classie.addClass(currentItem, "hide"); // Start the 'out' animation
  };
  
  
  
  // Initialize events
  tiltSlider.initEvents();
  
  
  
  
  
    // add to global namespace
    window.TiltSlider = TiltSlider;
  })(window);