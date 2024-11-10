"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [5231],
  {
    5231: (e, s, t) => {
      t.r(s);
      var r = t(1864),
        i = t(8520),
        o = t(5684);
      i.w$.registerPlugin(o.o),
        (window.plr.controllers.BHills = class extends r.c {
          init() {
            super.init(),
              (this.isFull = this.el.classList.contains("b-hills--full")),
              (this.smoothProgress = this.el.scrollProgress ?? 0),
              this.initTimeline(),
              luge.ticker.add(this.tick, this);
          }
          initTimeline() {
            let e = this.refs.row;
            Array.isArray(e) || (e = [e]),
              e.forEach((e, s) => {
                const t = e.querySelectorAll(".js-line"),
                  r = e.querySelectorAll(".js-dot"),
                  o = 2.5 + 0.5 * s,
                  a = s * o * 0.35,
                  l = i.w$.timeline({ repeat: -1 });
                l.fromTo(
                  t[0],
                  { drawSVG: "100% 100%" },
                  { drawSVG: "0% 100%", ease: "power2.inOut", duration: o },
                  a
                ),
                  l.fromTo(
                    r[0],
                    { scale: 0 },
                    { scale: 1, ease: "elastic.out(1.5, 1)", duration: 0.6 },
                    a + 0.8 * o
                  ),
                  l.to(
                    t[0],
                    { drawSVG: "0% 0%", ease: "power2.inOut", duration: o },
                    a + o
                  ),
                  l.fromTo(
                    t[1],
                    { drawSVG: "0% 0%" },
                    { drawSVG: "0% 100%", ease: "power2.inOut", duration: o },
                    a + o + 0.9 * o
                  ),
                  l.fromTo(
                    r[1],
                    { scale: 0 },
                    { scale: 1, ease: "elastic.out(1.5, 1)", duration: 0.6 },
                    a + 2 * o + 0.8 * o
                  ),
                  l.to(
                    t[1],
                    { drawSVG: "100% 100%", ease: "power2.inOut", duration: o },
                    a + 2 * o + 0.9 * o
                  ),
                  l.to(
                    r[0],
                    { scale: 0, ease: "elastic.in(1.5, 1)", duration: 0.6 },
                    a + 2 * o + 0.8 * o
                  ),
                  l.fromTo(
                    t[2],
                    { drawSVG: "100% 100%" },
                    { drawSVG: "0% 100%", ease: "power2.inOut", duration: o },
                    a + 3 * o + 0.9 * o
                  ),
                  l.to(
                    r[1],
                    { scale: 0, ease: "elastic.in(1.5, 1)", duration: 0.6 },
                    a + 4 * o + 0.8 * o
                  ),
                  l.to(
                    t[2],
                    { drawSVG: "0% 0%", ease: "power2.inOut", duration: o },
                    a + 4 * o + 0.9 * o
                  );
              }),
              this.el.classList.add("is-init");
          }
          tick(e) {
            const s = this.el.scrollProgress;
            (this.smoothProgress = this.ease(s)),
              this.el.style.setProperty(
                "--smooth-progress",
                this.smoothProgress
              );
          }
          ease(e) {
            return 1 - Math.pow(1 - e, 3);
          }
        });
    },
  },
]);
