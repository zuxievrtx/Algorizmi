"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [8952],
  {
    8952: (e, l, n) => {
      n.r(l);
      var r = n(1864),
        t = n(8520);
      window.plr.controllers.SContentSlider = class extends r.c {
        onRevealIn() {
          const e = this.el.querySelector(".b-heading-eye-2"),
            l = this.el.querySelector(".b-slider-content"),
            n = t.w$.timeline();
          n.call(() => {
            e.luge && e.luge.reveal.in();
          }),
            n.call(
              () => {
                l.luge && l.luge.reveal.in();
              },
              null,
              0.7
            );
        }
      };
    },
  },
]);
