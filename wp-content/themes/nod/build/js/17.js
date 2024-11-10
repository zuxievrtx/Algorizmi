"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [6520],
  {
    6520: (t, e, s) => {
      s.r(e);
      var n = s(7192),
        i = s.n(n),
        l = s(1864);
      window.plr.controllers.BForm = class extends l.c {
        init() {
          super.init(), this.initTelInputs();
        }
        initTelInputs() {
          (this.telInputs = this.el.querySelectorAll('input[type="tel"]')),
            this.telInputs.forEach((t) => {
              i()(t);
            });
        }
      };
    },
  },
]);
