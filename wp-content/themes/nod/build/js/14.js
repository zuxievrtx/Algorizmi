"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [5416],
  {
    5416: (e, s, t) => {
      t.r(s);
      var $ = t(8432),
        h = t(1864);
      window.plr.controllers.BUspHired = class extends h.c {
        init() {
          super.init(), this.setEyeShape();
        }
        setEyeShape() {
          const { eye: e } = this.refs,
            s = e.offsetWidth,
            t = s / 2,
            $ = e.offsetHeight,
            h = $ / 2,
            i = `M 0 ${h} Q ${t} ${-h} ${s} ${h} Q ${t} ${$ + h} 0 ${h} Z`,
            p = `M 0 ${h} Q ${t} ${h} ${s} ${h} Q ${t} ${h} 0 ${h} Z`;
          e.style.setProperty("--path-open", `path('${i}')`),
            e.style.setProperty("--path-close", `path('${p}')`),
            e.classList.add("is-set");
        }
        onResize() {
          $.Q.widthChanged && this.setEyeShape();
        }
      };
    },
  },
]);
