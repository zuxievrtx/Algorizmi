"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [9264],
  {
    9264: (s, t, e) => {
      e.r(t);
      var h = e(1864);
      window.plr.controllers.SHero = class extends h.c {
        init() {
          (this.a = 0),
            (this.sa = 0),
            super.init(),
            luge.ticker.add(this.tick, this);
        }
        tick() {
          const s = this.refs.illusWrapper;
          if (!s.luge || !s.luge.mouse || !s.luge.mouse.smoothX) return;
          const t = s.luge.mouse,
            e = Math.round(1e3 * (t.x - t.smoothX)) / 1e3,
            h = Math.round(1e3 * (t.y - t.smoothY)) / 1e3,
            i = Math.hypot(e, h),
            a = Math.atan2(h, e) * (180 / Math.PI);
          if (i > 0.1) {
            const s = a - this.a;
            (this.a += s), (this.a += 45);
          }
          (this.sa += 0.1 * (this.a - this.sa)),
            this.el.style.setProperty("--mouse-angle", this.a);
        }
      };
    },
  },
]);
