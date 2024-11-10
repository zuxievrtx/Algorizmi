"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [5800],
  {
    5800: (i, e, s) => {
      s.r(e);
      var t = s(1864);
      window.plr.controllers.SFormModal = class extends t.c {
        init() {
          (this.id = this.el.getAttribute("id")),
            (this.links = []),
            (this.callbacks.onLinkClick = this.onLinkClick.bind(this)),
            luge.emitter.on("afterPageInit", this.bindLinks.bind(this)),
            luge.emitter.on("beforePageKill", this.unbindLinks.bind(this)),
            this.bindLinks(),
            super.init();
        }
        bindEvents() {
          super.bindEvents(),
            (this.callbacks.onCloseClick = this.onCloseClick.bind(this)),
            this.on(this.refs.background, "click", this.callbacks.onCloseClick),
            this.on(this.refs.close, "click", this.callbacks.onCloseClick),
            this.on(this.refs.close, "keydown", this.callbacks.onCloseClick),
            (this.el.style.opacity = "");
        }
        bindLinks() {
          (this.links = document.querySelectorAll(
            'a[href="#' + this.id + '"]'
          )),
            this.links.forEach((i) => {
              i.addEventListener("click", this.callbacks.onLinkClick);
            });
        }
        unbindLinks() {
          this.links.forEach((i) => {
            i.removeEventListener("click", this.callbacks.onLinkClick);
          }),
            (this.links = []);
        }
        onLinkClick(i) {
          i.preventDefault();
          const e = i.currentTarget;
          if (e.hasAttribute("data-bootcamp")) {
            const i = Number(e.getAttribute("data-bootcamp")),
              s = this.el.querySelector('select[name="bootcamp"]');
            s &&
              (s.querySelector("option:nth-child(" + (i + 2) + ")").selected =
                !0);
          }
          this.el.classList.toggle("is-opened"),
            this.el.classList.contains("is-opened") &&
              this.el.querySelector(".wpcf7-form-control").focus();
        }
        onCloseClick(i) {
          i.preventDefault(),
            ("keydown" === i.type && "Enter" !== i.key) ||
              (i.currentTarget.blur(), this.el.classList.remove("is-opened"));
        }
      };
    },
  },
]);
