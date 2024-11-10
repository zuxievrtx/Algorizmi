"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [3688],
  {
    3688: (t, i, h) => {
      h.r(i);
      var s = h(8432),
        e = h(1864),
        o = h(8520);
      window.plr.controllers.BtnPlain = class extends e.c {
        init() {
          super.init(), (this.points = {}), this.initPaths();
        }
        bindEvents() {
          super.bindEvents(),
            luge.browser.is("desktop") &&
              this.on(this.el, "mouseenter", this.onMouseEnter.bind(this));
        }
        initPaths() {
          const { background: t } = this.refs;
          (this.width = this.el.offsetWidth),
            (this.height = this.el.offsetHeight),
            (this.hHeight = this.height / 2),
            (t.style.width = this.width + "px"),
            (t.style.height = this.height + "px"),
            (this.points = {
              p0: { x: this.hHeight, y: 0 },
              p1: { x: this.width - this.hHeight, y: 0 },
              p2: { x: this.width - this.hHeight, y: this.height },
              p3: { x: this.hHeight, y: this.height },
              c0: { x: 0.315 * -this.hHeight, y: 0 },
              c3: { x: 0.315 * -this.hHeight, y: this.height },
              c1a: { x: this.width + 0.315 * this.hHeight, y: 0 },
              c1b: { x: this.width + 0.315 * this.hHeight, y: 0 },
              c2a: { x: this.width + 0.315 * this.hHeight, y: this.height },
              c2b: { x: this.width + 0.315 * this.hHeight, y: this.height },
            }),
            (this.points.c1a.ox = this.points.c1a.x),
            (this.points.c1b.ox = this.points.c1b.x),
            (this.points.c2a.ox = this.points.c2a.x),
            (this.points.c2b.ox = this.points.c2b.x),
            this.updatePaths();
        }
        updatePaths() {
          const {
              p0: t,
              p1: i,
              p2: h,
              p3: s,
              c0: e,
              c1a: o,
              c1b: n,
              c2a: x,
              c2b: a,
              c3: c,
            } = this.points,
            $ = `M${t.x},${t.y} L${i.x},${i.y} C${o.x},${o.y} ${x.x},${x.y} ${h.x},${h.y} L${s.x},${s.y} C${c.x},${c.y} ${e.x},${e.y} ${t.x},${t.y}`;
          this.refs.backgroundPath[0].setAttribute("d", $);
          const p = `M${t.x},${t.y} L${i.x},${i.y} C${n.x},${n.y} ${a.x},${a.y} ${h.x},${h.y} L${s.x},${s.y} C${c.x},${c.y} ${e.x},${e.y} ${t.x},${t.y}`;
          this.refs.backgroundPath[1].setAttribute("d", p);
        }
        onMouseEnter(t) {
          const { c1a: i, c1b: h, c2a: s, c2b: e } = this.points,
            n = o.w$.timeline({
              onUpdate: () => {
                this.updatePaths();
              },
            });
          n.to(
            [i, s],
            { x: i.ox - 0.075 * h.ox, ease: "power3.out", duration: 0.3 },
            0
          ),
            n.to(
              [i, s],
              { x: i.ox, ease: "elastic.out(1.5, 0.25)", duration: 1.2 },
              0.3
            ),
            n.to(
              [h, e],
              { x: h.ox - 0.2 * h.ox, ease: "power3.out", duration: 0.3 },
              0
            ),
            n.to(
              [h, e],
              { x: h.ox, ease: "elastic.out(1.5, 0.25)", duration: 1.2 },
              0.3
            );
        }
        onResize() {
          s.Q.widthChanged && this.initPaths();
        }
      };
    },
  },
]);
