"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [6651],
  {
    6651: (e, s, t) => {
      t.r(s);
      var h = t(8432),
        i = t(1864);
      window.plr.controllers.BHead = class extends i.c {
        init() {
          super.init(), this.setEyeShape();
        }
        bindEvents() {
          super.bindEvents(),
            (this.callbacks.onMouseEnter = this.onMouseEnter.bind(this)),
            this.on(this.refs.eye, "mouseenter", this.callbacks.onMouseEnter);
        }
        onMouseEnter() {
          this.refs.pupill.classList.toggle("is-alternate");
        }
        setEyeShape() {
          const { eye: e } = this.refs,
            s = e.offsetWidth,
            t = s / 2,
            h = e.offsetHeight,
            i = h / 2;
          (this.pathOpen = `M 0 ${i} Q ${t} ${-i} ${s} ${i} Q ${t} ${
            h + i
          } 0 ${i} Z`),
            (this.pathClose = `M 0 ${i} Q ${t} ${i} ${s} ${i} Q ${t} ${i} 0 ${i} Z`),
            e.style.setProperty("--path-open", `path('${this.pathOpen}')`),
            e.style.setProperty("--path-close", `path('${this.pathClose}')`),
            e.classList.add("is-set");
        }
        onResize() {
          h.Q.widthChanged && this.setEyeShape();
        }
      };
    },
  },
]);
