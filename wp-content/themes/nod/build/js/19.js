"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [7907],
  {
    7907: (s, e, t) => {
      t.r(e);
      var i = t(8432),
        r = t(1864),
        o = t(8520),
        a = t(3220),
        n = t(9052),
        h = t(124);
      o.w$.registerPlugin(h.c, a.w, n.gF),
        (window.plr.controllers.SYoutube = class extends r.c {
          init() {
            super.init(),
              (this.dragging = !1),
              this.calculateBound(),
              this.initDraggable(),
              this.setObjectsPosition(),
              this.sliderIntro(),
              luge.ticker.add(this.tick, this);
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
          onIntersection(s) {
            s.forEach((s) => {
              s.isIntersecting && this.onSliderIn();
            });
          }
          kill() {
            this.draggable.kill(), super.kill();
          }
          calculateBound() {
            const { slider: s, videos: e } = this.refs;
            (this.maxX = 0), (this.minX = e.offsetWidth - s.offsetWidth);
          }
          sliderIntro() {
            const s = o.w$.timeline({ paused: !0, delay: 0.2 });
            s.set(this.refs.slider, { opacity: 1 }),
              s.fromTo(
                this.refs.slider,
                { x: 0.75 * this.refs.videos.offsetWidth },
                {
                  x: 0,
                  duration: 2.4,
                  ease: h.c.create(
                    "custom",
                    "M0,0 C0.048,0.511 0.071,0.714 0.17,0.854 0.273,1 0.504,1 1,1 "
                  ),
                },
                0
              ),
              s.fromTo(
                this.refs.video,
                { x: "20%" },
                {
                  x: 0,
                  duration: 2.4,
                  ease: h.c.create(
                    "custom",
                    "M0,0 C0.048,0.511 0.071,0.714 0.17,0.854 0.273,1 0.504,1 1,1 "
                  ),
                  stagger: 0.2,
                },
                0
              ),
              s.to(
                this.refs.slider.querySelectorAll(".sb__mask"),
                { scaleX: 0, duration: 1, ease: "expo.inOut", stagger: 0.2 },
                0
              ),
              s.from(
                this.refs.slider.querySelectorAll(".sb__cover__inner"),
                { x: "50%", duration: 1, ease: "expo.out", stagger: 0.2 },
                0
              ),
              s.from(
                this.refs.slider.querySelectorAll(".sb__caption"),
                {
                  opacity: 0,
                  y: "1rem",
                  duration: 1,
                  ease: "power3.out",
                  stagger: 0.2,
                },
                0.4
              ),
              s.from(
                this.refs.slider.querySelectorAll(".a-play"),
                { x: "100%", duration: 1.4, ease: "expo.out", stagger: 0.2 },
                0
              ),
              (this.sliderTl = s);
          }
          onSliderIn() {
            this.sliderTl.play(),
              this.observer.disconnect(),
              (this.observer = null);
          }
          onResize() {
            i.Q.widthChanged &&
              luge.ticker.nextTick(() => {
                this.calculateBound(),
                  this.draggable.applyBounds({
                    maxX: this.maxX,
                    minX: this.minX,
                  }),
                  this.draggable.update(!0),
                  this.setObjectsPosition();
              });
          }
          initDraggable() {
            this.draggable = a.w.create(this.refs.slider, {
              type: "x",
              bounds: { maxX: this.maxX, minX: this.minX },
              inertia: !0,
              cursor: "grab",
              activeCursor: "grabbing",
              onDragStart: this.onDrag.bind(this),
              onRelease: this.onRelease.bind(this),
              onThrowUpdate: this.onThrowUpdate.bind(this),
              onMove: this.onMove.bind(this),
            })[0];
          }
          onDrag() {
            (this.dragging = !0), this.refs.slider.classList.add("is-dragging");
          }
          onRelease() {
            this.draggable.isThrowing ||
              ((this.dragging = !1),
              this.refs.slider.classList.remove("is-dragging"));
          }
          onThrowUpdate() {
            Math.abs(n.gF.getVelocity(this.refs.slider, "x")) < 500 &&
              ((this.dragging = !1),
              this.refs.slider.classList.remove("is-dragging"));
          }
          onMove() {
            this.updateObjectsPosition();
          }
          setObjectsPosition() {
            (this.smoothX = this.draggable.x),
              (this.move = 0),
              this.refs.video.forEach((s) => {
                const e = s.getBoundingClientRect(),
                  t = e.left + e.width / 2;
                (s.data = s.data || {}),
                  (s.data.x = t),
                  (s.data.originX = t),
                  (s.data.destX = t),
                  (s.data.xDiff = 0);
              });
          }
          updateObjectsPosition() {
            this.refs.video.forEach((s) => {
              const e = s.data.originX + this.draggable.x,
                t = Math.min(Math.max(-1, (e / window.safeWidth) * 2 - 1), 1);
              (s.data.progress = t),
                (s.data.destX = e),
                s.style.setProperty("--progress", t);
            });
          }
          tick() {
            (this.smoothX += 0.1 * (this.draggable.x - this.smoothX)),
              (this.move = this.draggable.x - this.smoothX),
              this.refs.slider.style.setProperty("--move", this.move);
          }
        });
    },
  },
]);
