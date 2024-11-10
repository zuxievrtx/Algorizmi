"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [692],
  {
    692: (t, i, e) => {
      e.r(i);
      var s = e(8432),
        h = e(1864),
        l = e(8520),
        o = e(124);
      l.w$.registerPlugin(o.c),
        (window.plr.controllers.BHeroHome = class extends h.c {
          init() {
            super.init(),
              (this.hero = document.querySelector(".s-hero")),
              (this.illus = this.el.parentElement),
              (this.ball = null),
              (this.wait = !0),
              (this.isPaused = !1);
          }
          bindEvents() {
            super.bindEvents(),
              luge.viewportobserver.add(this.el),
              (this.callbacks.viewportIn = this.onViewportIn.bind(this)),
              this.on(this.el, "viewportin", this.callbacks.viewportIn),
              (this.callbacks.viewportOut = this.onViewportOut.bind(this)),
              this.on(this.el, "viewportout", this.callbacks.viewportOut);
          }
          intro() {
            this.initIllus(), this.introAnimation(), (this.wait = !1);
          }
          initRender() {
            (this.sectionWidth = this.hero.clientWidth),
              (this.sectionHeight = this.hero.clientHeight),
              (this.illusHeight = this.el.clientHeight),
              (this.refs.render.style.width = this.sectionWidth + "px"),
              (this.refs.render.style.height = this.sectionHeight + "px"),
              (this.pathPoints = {
                x1: 0,
                y1: this.illusHeight,
                x2: this.sectionWidth / 2,
                y2: this.illusHeight,
                x3: this.sectionWidth,
                y3: this.illusHeight,
                x4: this.sectionWidth,
                y4: this.sectionHeight,
                x5: 0,
                y5: this.sectionHeight,
              }),
              this.setPathD();
          }
          setPathD() {
            const t = `M ${this.pathPoints.x1} ${this.pathPoints.y1} Q ${this.pathPoints.x2} ${this.pathPoints.y2} ${this.pathPoints.x3} ${this.pathPoints.y3} L ${this.pathPoints.x4} ${this.pathPoints.y4} L ${this.pathPoints.x5} ${this.pathPoints.y5} Z`;
            this.refs.renderPath.setAttribute("d", t);
          }
          initFlowers() {
            this.refs.flower.forEach((t) => {
              const i = t.clientHeight;
              t.parentElement.style.setProperty("--flower-height", i + "px");
            }),
              this.refs.stem.forEach((t) => {
                (t.style.width = ""), (t.style.height = "");
                const i = t.clientWidth,
                  e = i / 2,
                  s = t.clientHeight,
                  h = s / 2;
                (t.style.width = i + "px"), (t.style.height = s + "px");
                const l = 0.0052 * window.safeWidth,
                  o = t.getBoundingClientRect(),
                  r = {
                    x1: e,
                    y1: 1.2 * s,
                    x2: e,
                    y2: 0,
                    x2o: 0,
                    y2o: 0,
                    xa: 0,
                    xv: 0,
                    xvs: 0,
                    cx: e,
                    cy: h,
                    cxo: 0,
                    cyo: 0,
                    height: s,
                    angle: 0,
                    oscilliation: 0,
                    force: 0,
                    frequency: 5e-4 + 1e-4 * Math.random(),
                    amplitude: l + Math.random() * l * 2,
                    originX: o.left,
                    originY: o.top + window.unifiedScrollTop,
                  };
                t.pathData = r;
              }),
              this.drawFlowers();
          }
          drawFlowers() {
            if (
              (this.refs.letter.forEach((t) => {
                const i = t.querySelector(".js-stem"),
                  e = i.querySelector(".js-stem-path"),
                  s = i.pathData,
                  h = `M ${s.x1} ${s.y1} Q ${s.cx + s.cxo} ${s.cy + s.cyo} ${
                    s.x2 + s.x2o
                  } ${s.y2 + s.y2o} m -${this.rulerWidth - 0.02 * s.x2o} -${
                    this.rulerWidth
                  } a ${this.rulerWidth} ${this.rulerWidth} 0 1 0 ${
                    2 * this.rulerWidth
                  } 0 a ${this.rulerWidth} ${this.rulerWidth} 0 1 0 -${
                    2 * this.rulerWidth
                  } 0`;
                e.setAttribute("d", h),
                  (t.querySelector(
                    ".js-flower"
                  ).style.transform = `translate3d(${s.x2o}px, ${s.y2o}px, 0) rotate(${s.angle}deg)`);
              }),
              this.ball)
            ) {
              const t = this.refs.stem[5].pathData;
              this.ball.style.transform = `translate3d(${
                1.5 * -t.angle
              }px, 0, 0)`;
            }
          }
          moveFlowers(t) {
            const i = {
              x: 0,
              y: 0,
              mdx: 0,
              mdy: 0,
              angle: window.mouseAngle || 0,
              speed: window.mouseSpeed || 0,
              velocity: 0,
            };
            this.illus.luge &&
              this.illus.luge.mouse &&
              this.illus.luge.mouse.x &&
              ((i.mdx = i.x - this.illus.luge.mouse.x),
              (i.mdy = i.y - this.illus.luge.mouse.y),
              (i.x = this.illus.luge.mouse.x),
              (i.y = this.illus.luge.mouse.y)),
              (i.velocity =
                Math.cos((i.angle * Math.PI) / 180) * i.speed * 0.025),
              (i.velocity = Math.max(Math.min(i.velocity, 1), -1)),
              this.refs.stem.forEach((e, s) => {
                const h = e.pathData,
                  l = i.x - h.x2 - h.x2o - h.originX,
                  o = i.y - h.y2 - h.originY,
                  r = Math.hypot(l, o),
                  a = Math.max(200, i.speed);
                if (r < a) {
                  const t = 1 - r / a,
                    e = Math.cos(0.001 * r) * t;
                  h.xv += i.velocity * e * a * i.speed * 5e-4;
                }
                (h.xv += 0.005 * (0 - h.force)),
                  (h.xv *= 0.95),
                  (h.xv = Math.max(Math.min(h.xv, 10), -10)),
                  (h.force += h.xv),
                  (h.oscilliation = Math.cos(t * h.frequency) * h.amplitude),
                  (h.x2o = h.force + h.oscilliation);
                const n = Math.asin(h.x2o / h.height) - (90 * Math.PI) / 180;
                (h.y2o = (1 + Math.sin(n)) * h.height),
                  (h.angle = n * (180 / Math.PI) + 90),
                  (h.force *= 0.98);
              });
          }
          introAnimation() {
            const t = o.c.create(
                "custom",
                "M0,0 C0.315,0.48 0.195,0.699 0.448,0.908 0.658,1.081 0.855,1 1,1 "
              ),
              i = l.w$.timeline({ onUpdate: this.setPathD.bind(this) });
            i.call(() => {
              (this.refs.letters.style.clipPath = "inset(-100vh -100vw 0)"),
                this.el.classList.add("is-in"),
                (this.refs.bootcamp.style.opacity = ""),
                (this.refs.letters.style.opacity = "");
            }),
              i.from(
                this.refs.letter[0],
                { y: "100%", ease: t, duration: 1.2166 },
                0.4834
              ),
              i.call(
                () => {
                  this.refs.flower[0].play();
                },
                null,
                0.2167
              ),
              i.from(
                this.refs.letter[1],
                { y: "100%", ease: t, duration: 1.5833 },
                0.0667
              ),
              i.call(
                () => {
                  this.refs.flower[1].play();
                },
                null,
                0.2167
              ),
              i.from(
                this.refs.letter[2],
                { y: "100%", ease: t, duration: 1.3666 },
                0.5
              ),
              i.call(
                () => {
                  this.refs.flower[2].play();
                },
                null,
                0.5667
              ),
              i.from(
                this.refs.letter[3],
                { y: "100%", ease: t, duration: 1.3 },
                0.4333
              ),
              i.call(
                () => {
                  this.refs.flower[3].play();
                },
                null,
                0.4333
              ),
              i.from(
                this.refs.letter[4],
                { y: "100%", ease: t, duration: 1.4667 },
                0.4667
              ),
              i.call(
                () => {
                  this.refs.flower[4].play();
                },
                null,
                0.1
              ),
              i.from(
                this.refs.letter[5],
                { y: "100%", ease: t, duration: 1.3333 },
                0.25
              ),
              i.call(
                () => {
                  this.refs.flower[5].play(),
                    (this.ball = this.refs.flower[5].querySelector("g path"));
                },
                null,
                0.25
              ),
              i.fromTo(
                this.pathPoints,
                { y1: this.sectionHeight, y3: this.sectionHeight },
                {
                  y1: this.illusHeight,
                  y3: this.illusHeight,
                  ease: "power2.out",
                  duration: 0.617,
                },
                0.0667
              ),
              i.fromTo(
                this.pathPoints,
                { y2: this.sectionHeight },
                {
                  y2: this.illusHeight - 300,
                  ease: "power2.out",
                  duration: 0.617,
                },
                0.0667
              ),
              i.call(
                () => {
                  this.refs.letters.style.clipPath = "";
                },
                null,
                0.6837
              ),
              i.to(
                this.pathPoints,
                {
                  y2: this.illusHeight,
                  ease: "elastic.out(1.2, 0.3)",
                  duration: 1.8,
                },
                0.6837
              ),
              i.from(
                this.refs.bootcamp,
                {
                  y: "-10%",
                  clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
                  ease: "power3.inOut",
                  duration: 0.8,
                },
                1.2334
              );
          }
          onResize() {
            s.Q.widthChanged && this.initIllus();
          }
          initIllus() {
            (this.rulerWidth = this.refs.ruler.clientWidth),
              (this.limits = {
                distance: 0.15625 * window.safeWidth,
                force: 0.0521 * window.safeWidth,
              }),
              this.initRender(),
              this.initFlowers();
          }
          onViewportIn() {
            this.isPaused = !1;
          }
          onViewportOut() {
            this.isPaused = !0;
          }
          tick(t) {
            this.wait ||
              this.isPaused ||
              (this.moveFlowers(t), this.drawFlowers());
          }
        });
    },
  },
]);
