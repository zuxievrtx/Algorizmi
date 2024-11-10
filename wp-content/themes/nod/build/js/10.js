"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [4896],
  {
    4896: (t, e, i) => {
      i.r(e);
      var s = i(8432),
        n = i(1864),
        o = i(8520);
      window.plr.controllers.BtnText = class extends n.c {
        init() {
          super.init(),
            (this.line = null),
            luge.browser.is("desktop") && this.initLines();
        }
        bindEvents() {
          super.bindEvents(),
            luge.browser.is("desktop") &&
              (this.on(this.el, "mouseenter", this.onLinkMouseEnter.bind(this)),
              this.on(this.el, "mouseleave", this.onLinkMouseLeave.bind(this)));
        }
        initLines() {
          this.line = null;
          const { line: t } = this.refs;
          t.style = "";
          const e = t.getBoundingClientRect(),
            i = e.width,
            s = e.height;
          (t.style.width = i + "px"), (t.style.height = s + "px");
          const n = {
              p1: { x: i / 2, y: 0 },
              p2: { x: i / 2, y: 0 },
              ca: { x: i / 2, y: 0 },
              cb: { x: i / 2, y: 0 },
            },
            o = t.querySelectorAll(".btn-text__path");
          (this.line = { el: t, points: n, paths: o, width: i, height: s }),
            this.updateLine();
        }
        updateLine() {
          const t = this.line,
            { p1: e, p2: i, ca: s, cb: n } = t.points,
            o = t.paths,
            u = `M${e.x},${e.y} Q${s.x},${s.y} ${i.x},${i.y}`;
          o[0].setAttribute("d", u);
          const h = `M${e.x},${e.y} Q${n.x},${n.y} ${i.x},${i.y}`;
          o[1].setAttribute("d", h);
        }
        onLinkMouseEnter() {
          const t = this.line,
            e = t.width,
            i = t.points,
            { p1: s, p2: n, ca: u, cb: h } = i,
            a = o.w$.timeline({
              onUpdate: () => {
                this.updateLine();
              },
            });
          a.to(s, { x: 0, ease: "power3.out", duration: 0.1 }, 0),
            a.to(n, { x: e, ease: "power3.out", duration: 0.1 }, 0),
            a.to(u, { y: -12, ease: "power3.out", duration: 0.1 }, 0),
            a.to(u, { y: 0, ease: "elastic.out(2, 0.25)", duration: 1.2 }, 0.1),
            a.to(h, { y: -6, ease: "power3.out", duration: 0.1 }, 0),
            a.to(h, { y: 0, ease: "elastic.out(2, 0.25)", duration: 1.2 }, 0.1);
        }
        onLinkMouseLeave() {
          const t = this.line,
            e = t.width,
            i = t.points,
            { p1: s, p2: n } = i,
            u = o.w$.timeline({
              onUpdate: () => {
                this.updateLine();
              },
            });
          u.to(s, { x: e / 2, ease: "power3.out", duration: 0.1 }, 0),
            u.to(n, { x: e / 2, ease: "power3.out", duration: 0.1 }, 0);
        }
        onResize() {
          s.Q.widthChanged && this.initLines();
        }
      };
    },
  },
]);
