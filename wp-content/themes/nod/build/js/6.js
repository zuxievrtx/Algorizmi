"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [3188],
  {
    3188: (s, e, r) => {
      r.r(e);
      var t = r(1864);
      window.plr.controllers.SUsps = class extends t.c {
        init() {
          super.init(),
            (this.smoothProgress = this.refs.header.scrollProgress ?? 0),
            luge.ticker.add(this.tick, this);
        }
        tick() {
          const { header: s } = this.refs,
            e = s.scrollProgress;
          void 0 !== e &&
            ((this.smoothProgress = this.ease(e)),
            s.style.setProperty("--smooth-progress", this.smoothProgress));
        }
        ease(s) {
          return s < 0.5 ? 4 * Math.pow(s, 3) : 1 - Math.pow(-2 * s + 2, 3) / 2;
        }
      };
    },
  },
]);
