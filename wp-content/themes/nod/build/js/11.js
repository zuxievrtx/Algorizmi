"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [5108],
  {
    5108: (t, i, s) => {
      s.r(i);
      var h = s(8432),
        e = s(1864);
      window.plr.controllers.BSeparator = class extends e.c {
        init() {
          super.init(),
            (this.isAnimated = this.el.classList.contains("is-animated")),
            (this.isStuck = !0),
            (this.limit = 0.3),
            this.initPath(),
            luge.ticker.add(this.tick, this);
        }
        onResize() {
          h.Q.widthChanged &&
            (window.safeWidth > window.safeHeight
              ? (this.limit = 0.3)
              : (this.limit = 0.15),
            this.initPath());
        }
        initPath() {
          const t = this.el.offsetWidth,
            i = this.el.offsetHeight,
            s = this.refs.render;
          (s.style.width = t + "px"),
            (s.style.height = i + "px"),
            (this.p1 = { x: 0, y: i / 2 }),
            (this.p2 = { x: t, y: i / 2 }),
            (this.c = { x: t / 2, y: i / 2 }),
            (this.cv = 0),
            this.drawPath();
        }
        drawPath() {
          const t = this.refs.renderPath,
            i = `M ${this.p1.x} ${this.p1.y} Q ${this.c.x} ${this.c.y} ${this.p2.x} ${this.p2.y}`;
          t.setAttribute("d", i);
        }
        tick() {
          if (!this.isAnimated) return;
          const t = this.el.scrollProgress;
          0 === t || 1 === t
            ? (this.isStuck = !0)
            : this.isStuck && t < this.limit
            ? (this.c.y = t * window.safeHeight * 1)
            : ((this.isStuck = !1),
              (this.cv += 0.15 * (0 - this.c.y)),
              (this.cv *= 0.8),
              (this.c.y += this.cv)),
            this.drawPath();
        }
      };
    },
  },
]);
