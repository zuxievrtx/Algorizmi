"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [5336],
  {
    5336: (t, i, s) => {
      s.r(i);
      var e = s(8432),
        h = s(1864);
      window.plr.controllers.BInterludeBubbles = class extends h.c {
        init() {
          super.init(),
            (this.mouse = { x: 0, y: 0, dx: 0, dy: 0, speed: 0 }),
            (this.isStuck = !0),
            (this.isDisabled = !1),
            (this.limit = 0.3),
            this.setBubble(),
            this.setLines(),
            luge.ticker.add(this.tick, this);
        }
        setBubble() {
          const t = this.refs.render.getBoundingClientRect();
          if (
            ((this.isDisabled = 0 === t.width || 0 === t.height),
            this.isDisabled)
          )
            return;
          const i = this.el.getBoundingClientRect();
          (this.width = i.width),
            (this.height = i.height),
            (this.hWidth = 0.5 * this.width),
            (this.hHeight = 0.5 * this.height),
            (this.bubbleSize = this.refs.bubble[0].offsetWidth),
            (this.bubbles = []),
            this.refs.bubble.forEach((t) => {
              const s = t.getBoundingClientRect(),
                e = {
                  x: s.left + 0.5 * s.width - i.left,
                  y: s.top + 0.5 * s.height - i.top,
                  mx: 0,
                  my: 0,
                  vx: 0,
                  vy: 0,
                  el: t,
                };
              this.bubbles.push(e);
            });
        }
        setLines() {
          window.safeWidth > window.safeHeight
            ? (this.limit = 0.3)
            : (this.limit = 0.15);
          const { bubbles: t, render: i, ruler: s } = this.refs;
          if (this.isDisabled) return;
          (this.rulerWidth = s.clientWidth),
            (this.renderWidth = window.safeWidth),
            (this.renderHeight = this.rulerWidth),
            (this.bubblesWidth = t.offsetWidth),
            (this.bubblesHeight = t.offsetHeight),
            (i.style.width = this.renderWidth + "px"),
            (i.style.height = this.renderHeight + "px"),
            (this.lines = []);
          const e = {
            p1: { x: 0, y: this.renderHeight / 2 },
            p2: {
              x:
                this.renderWidth / 2 -
                this.bubblesWidth / 2 -
                -0.015 * this.bubblesWidth,
              y: this.renderHeight / 2,
              my: 0,
              v: 0,
            },
          };
          e.c = { x: e.p1.x + 0.4 * (e.p2.x - e.p1.x), y: e.p1.y };
          const h = {
            p1: { x: this.renderWidth, y: this.renderHeight / 2 },
            p2: {
              x:
                this.renderWidth / 2 +
                this.bubblesWidth / 2 +
                -0.015 * this.bubblesWidth,
              y: this.renderHeight / 2,
              my: 0,
              v: 0,
            },
          };
          (h.c = { x: h.p1.x + 0.4 * (h.p2.x - h.p1.x), y: h.p1.y }),
            this.lines.push(e, h),
            this.drawLines();
        }
        drawLines() {
          if (this.isDisabled) return;
          const t = this.refs.renderPath,
            i = this.lines[0],
            s = this.lines[1],
            e = this.bubbles[3],
            h = this.bubbles[5],
            r = `M ${i.p1.x} ${i.p1.y} Q ${i.c.x} ${i.c.y} ${i.p2.x + e.mx} ${
              i.p2.y + i.p2.my + e.my
            } m 0 ${0.02 * i.p2.my} a ${this.rulerWidth} ${
              this.rulerWidth
            } 0 1 0 ${2 * this.rulerWidth} 0 a ${this.rulerWidth} ${
              this.rulerWidth
            } 0 1 0 -${2 * this.rulerWidth} 0 M ${s.p1.x} ${s.p1.y} Q ${
              s.c.x
            } ${s.c.y} ${s.p2.x + h.mx} ${s.p2.y + s.p2.my + h.my} m -${
              2 * this.rulerWidth
            } ${0.02 * i.p2.my} a ${this.rulerWidth} ${this.rulerWidth} 0 1 0 ${
              2 * this.rulerWidth
            } 0 a ${this.rulerWidth} ${this.rulerWidth} 0 1 0 -${
              2 * this.rulerWidth
            } 0`;
          t.setAttribute("d", r);
        }
        moveLines() {
          if (this.isDisabled) return;
          const t = this.refs.render.scrollProgress;
          0 === t || 1 === t
            ? (this.isStuck = !0)
            : this.isStuck && (t < this.limit || t > 1 - this.limit)
            ? this.lines.forEach((i) => {
                i.p2.my =
                  t < 0.5
                    ? t * window.safeHeight * 0.5
                    : (1 - t) * window.safeHeight * -0.5;
              })
            : ((this.isStuck = !1),
              this.lines.forEach((t) => {
                (t.p2.v += 0.075 * (0 - t.p2.my)),
                  (t.p2.v *= 0.85),
                  (t.p2.my += t.p2.v);
              })),
            this.el.style.setProperty("--bounce", this.lines[0].p2.my + "px"),
            this.drawLines();
        }
        onResize() {
          e.Q.widthChanged && (this.setBubble(), this.setLines());
        }
        moveBubbles() {
          if (this.isDisabled) return;
          const t = this.el.luge.mouse;
          if (!t || !t.x || !t.y) return;
          (this.mouse.dx = this.hWidth - t.x),
            (this.mouse.dy = this.hHeight - t.y),
            (this.mouse.x = t.x),
            (this.mouse.y = t.y),
            (this.mouse.speed = Math.min(window.mouseSpeed, 10));
          const i = 0.04 * this.width;
          this.bubbles.forEach((s, e) => {
            const h = s.x - t.x,
              r = s.y - t.y,
              d = Math.hypot(h, r),
              l = Math.min(20 / (d + 0.01), 0.2),
              n = this.mouse.dx * this.mouse.speed * 0.1 * l,
              u = this.mouse.dy * this.mouse.speed * 0.1 * l;
            (s.vx += 0.1 * (n - s.vx)),
              (s.vy += 0.1 * (u - s.vy)),
              (s.vx = Math.max(-i, Math.min(i, s.vx))),
              (s.vy = Math.max(-i, Math.min(i, s.vy))),
              (s.mx += s.vx * l),
              (s.my += s.vy * l),
              s.el.style.setProperty("--x", s.mx + "px"),
              s.el.style.setProperty(
                "--y",
                s.my +
                  this.lines[0].p2.my * (1 + 0.05 * Math.floor(e / 3)) +
                  "px"
              ),
              (s.vx *= 0.99),
              (s.vy *= 0.99),
              (s.mx *= 0.925),
              (s.my *= 0.925);
          });
        }
        tick() {
          this.moveBubbles(), this.moveLines();
        }
      };
    },
  },
]);
