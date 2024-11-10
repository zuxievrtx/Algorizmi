"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [8240],
  {
    8240: (e, s, t) => {
      t.r(s);
      var i = t(1864),
        a = t(8520);
      window.plr.controllers.SiteLoader = class extends i.c {
        constructor(e) {
          super(e),
            luge &&
              (luge.transition.add(
                "in",
                "default",
                this.transitionIn.bind(this)
              ),
              luge.transition.add(
                "out",
                "default",
                this.transitionOut.bind(this)
              ));
        }
        init() {
          super.init(), this.calculateRadius(), this.setEyeShape();
        }
        transitionOut(e, s) {
          const t = e.dataset.plrLayout;
          this.el.dataset.transitionFrom = t;
          const i = luge.transition.getNewUrl().split("#")[0].split("?")[0],
            l = window.plr.transitions[i];
          this.el.dataset.transitionTo = l ? l.layout : "";
          const o = a.w$.timeline();
          o.call(() => {
            luge.smoothscroll.lenis
              ? luge.smoothscroll.lenis.stop()
              : document.documentElement.classList.add("is-blocked"),
              document.body.classList.add("is-nav-hidden"),
              document.body.classList.remove("is-nav-small");
          }),
            o.set(this.el, { opacity: 1 }),
            o.fromTo(
              this.refs.shape,
              { y: this.translateY, scale: 1 },
              {
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power4.inOut",
                stagger: 0.3,
              }
            ),
            o.call(() => {
              s();
            });
        }
        transitionIn(e, s) {
          if ("bootcamp" === this.el.dataset.transitionTo) {
            const t = e.querySelector(".b-hero-bootcamp .js-head"),
              i = e.querySelector(".b-hero-bootcamp .js-eye"),
              l = t.getBoundingClientRect(),
              o = { x: l.left + l.width / 2, y: l.top + l.height / 2 },
              n = {
                x: o.x - window.safeWidth / 2,
                y: o.y - window.safeHeight / 2 - window.unifiedScrollTop,
                scale: l.width / this.radius,
              },
              r = a.w$.timeline();
            r.call(
              () => {
                t.classList.add("is-paused"),
                  (this.refs.shapes.style.opacity = 0),
                  this.refs.head.classList.add("is-visible");
              },
              null,
              0
            ),
              r.to(
                this.refs.eye,
                {
                  scale: 0.9 * this.radiusScale,
                  duration: 3,
                  ease: "power3.out",
                },
                0
              ),
              r.call(
                () => {
                  s();
                },
                null,
                1.75
              ),
              r.fromTo(
                this.refs.head,
                { x: 0, y: 0, scale: 1 },
                {
                  x: n.x,
                  y: n.y,
                  scale: n.scale,
                  duration: 2.5,
                  ease: "power4.inOut",
                },
                1
              ),
              r.to(
                this.refs.eye,
                {
                  scale: 0.92,
                  duration: 1,
                  ease: "power4.out",
                  immediateRender: !1,
                },
                2.3
              ),
              r.call(
                () => {
                  (this.refs.eye.style.animation = "none"),
                    (i.style.animation = "none"),
                    (i.style.clipPath = "var(--path-close)"),
                    luge.ticker.nextTick(() => {
                      this.refs.eye.style.clipPath = "var(--path-close)";
                    });
                },
                null,
                3.3
              ),
              r.call(() => {
                luge.smoothscroll.lenis
                  ? luge.smoothscroll.lenis.start()
                  : document.documentElement.classList.remove("is-blocked"),
                  document.body.classList.remove("is-nav-hidden"),
                  luge.ticker.nextTick(
                    () => {
                      (this.el.style.opacity = 0),
                        (this.refs.shapes.style.opacity = ""),
                        (this.refs.head.style.opacity = ""),
                        (this.refs.head.style.rotate = ""),
                        (this.refs.head.style.scale = ""),
                        (this.refs.head.style.translate = ""),
                        (this.refs.head.style.transform = ""),
                        this.refs.head.classList.remove("is-visible"),
                        (this.refs.eye.style.animation = ""),
                        (this.refs.eye.style.clipPath = ""),
                        (this.refs.eye.style.rotate = ""),
                        (this.refs.eye.style.scale = ""),
                        (this.refs.eye.style.translate = ""),
                        (this.refs.eye.style.transform = ""),
                        t.classList.remove("is-paused"),
                        (i.style.clipPath = ""),
                        setTimeout(() => {
                          i.style.animation = "";
                        }, 200);
                    },
                    null,
                    3.5
                  );
              });
          } else if ("page" === this.el.dataset.transitionTo) {
            s();
            const t = a.w$.timeline();
            t.call(() => {
              (this.el.style.opacity = 0),
                luge.smoothscroll.lenis
                  ? luge.smoothscroll.lenis.start()
                  : document.documentElement.classList.remove("is-blocked"),
                document.body.classList.remove("is-nav-hidden");
            }),
              t.from(e, {
                opacity: 0,
                y: 100,
                duration: 0.8,
                ease: "power4.out",
              });
          } else
            s(),
              luge.smoothscroll.lenis
                ? luge.smoothscroll.lenis.start()
                : document.documentElement.classList.remove("is-blocked"),
              document.body.classList.remove("is-nav-hidden"),
              luge.ticker.nextTick(() => {
                this.el.style.opacity = 0;
              });
        }
        calculateRadius() {
          (this.radius = Math.hypot(window.safeWidth, window.safeHeight)),
            (this.radiusScale = window.safeWidth / this.radius),
            (this.translateY =
              window.safeHeight + (this.radius - window.safeHeight) / 2),
            this.el.style.setProperty("--radius", `${this.radius}px`),
            this.el.style.setProperty("--radius-scale", this.radiusScale);
        }
        setEyeShape() {
          const { eye: e } = this.refs,
            s = e.offsetWidth,
            t = s / 2,
            i = e.offsetHeight,
            a = i / 2,
            l = `M 0 ${a} Q ${t} ${-a} ${s} ${a} Q ${t} ${i + a} 0 ${a} Z`,
            o = `M 0 ${a} Q ${t} ${a} ${s} ${a} Q ${t} ${a} 0 ${a} Z`;
          e.style.setProperty("--path-open", `path('${l}')`),
            e.style.setProperty("--path-close", `path('${o}')`),
            e.classList.add("is-set");
        }
        onResize() {
          this.calculateRadius(), this.setEyeShape();
        }
      };
    },
  },
]);
