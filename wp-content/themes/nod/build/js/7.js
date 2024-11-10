"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [3240],
  {
    3240: (i, s, t) => {
      t.r(s);
      var e = t(8432),
        a = t(1864),
        l = t(8520),
        n = t(3220),
        h = t(9052);
      l.w$.registerPlugin(n.w, h.gF),
        (window.plr.controllers.BTestimonials = class extends a.c {
          init() {
            super.init(),
              (this.isSingle = this.el.classList.contains(
                "b-testimonials--single"
              )),
              this.isSingle || (this.calculateBound(), this.initDraggable());
          }
          kill() {
            this.draggable.kill(), super.kill();
          }
          calculateBound() {
            const { slider: i, testimonials: s } = this.refs;
            (this.maxX = 0), (this.minX = s.offsetWidth - i.offsetWidth);
          }
          onResize() {
            e.Q.widthChanged &&
              luge.ticker.nextTick(() => {
                this.calculateBound(),
                  this.draggable.applyBounds({
                    maxX: this.maxX,
                    minX: this.minX,
                  }),
                  this.draggable.update(!0);
              });
          }
          initDraggable() {
            this.draggable = n.w.create(this.refs.slider, {
              type: "x",
              bounds: { maxX: this.maxX, minX: this.minX },
              inertia: !0,
            })[0];
          }
        });
    },
  },
]);
