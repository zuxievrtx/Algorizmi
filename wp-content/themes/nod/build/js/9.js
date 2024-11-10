"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [4076],
  {
    4076: (e, t, s) => {
      s.r(t);
      var n = s(1864),
        r = s(8520),
        i = s(124);
      r.w$.registerPlugin(i.c),
        (window.plr.controllers.SReviews = class extends n.c {
          init() {
            super.init(), this.reviewsIntro();
          }
          bindEvents() {
            super.bindEvents(),
              (this.callbacks.onIntersection = this.onIntersection.bind(this)),
              (this.observer = new IntersectionObserver(
                this.callbacks.onIntersection,
                { threshold: 0 }
              )),
              this.observer.observe(this.el);
          }
          unbindEvents() {
            super.unbindEvents(),
              this.observer &&
                (this.observer.disconnect(), (this.observer = null));
          }
          onIntersection(e) {
            e.forEach((e) => {
              e.isIntersecting && this.onReviewsIn();
            });
          }
          onReviewsIn() {
            this.reviewTl.play(),
              this.observer.disconnect(),
              (this.observer = null);
          }
          reviewsIntro() {
            const e = r.w$.timeline({ paused: !0 });
            this.refs.counter.forEach((t, s) => {
              const n = Number(t.dataset.note);
              (t.data = { counter: 0 }),
                e.to(
                  t.data,
                  {
                    counter: n,
                    duration: 1.75,
                    ease: "power1.out",
                    onUpdate: () => {
                      let e = Math.round(10 * t.data.counter) / 10;
                      Number.isInteger(e) && (e += ".0");
                      const s = Number(e) / 0.1;
                      t.style.setProperty("--y", -100 * s + "%");
                    },
                  },
                  0.25 + 0.1 * s
                );
            }),
              this.refs.rating.forEach((t, s) => {
                const n = this.refs.logo[s],
                  r = this.refs.line[s],
                  i = this.refs.note[s],
                  o = t.offsetWidth;
                e.from(
                  n,
                  {
                    x: -0.75 * o,
                    ease: "power3.inOut",
                    duration: 1.5 + 0.5 * s,
                  },
                  0
                ),
                  e.from(
                    t,
                    {
                      x: -0.75 * o,
                      ease: "power3.inOut",
                      duration: 1.5 + 0.5 * s,
                    },
                    0.05
                  ),
                  e.from(
                    r,
                    {
                      x: -0.25 * o,
                      ease: "power3.inOut",
                      duration: 1.75 + 0.5 * s,
                    },
                    0.05
                  ),
                  e.from(
                    i,
                    {
                      x: -0.25 * o,
                      ease: "power3.inOut",
                      duration: 1.75 + 0.5 * s,
                    },
                    0.05
                  );
              }),
              (this.reviewTl = e);
          }
        });
    },
  },
]);
