"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [1251],
  {
    1251: (i, s, t) => {
      t.r(s);
      var e = t(1864),
        a = t(8520);
      window.plr.controllers.BSliderContent = class extends e.c {
        init() {
          super.init(), (this.waitSwitch = !1);
        }
        bindEvents() {
          super.bindEvents(),
            (this.callbacks.onPageClick = this.onPageClick.bind(this)),
            this.on(this.refs.page, "click", this.callbacks.onPageClick);
        }
        onPageClick(i) {
          i.preventDefault();
          const s = i.currentTarget.dataset.page;
          this.switchSlide(s);
        }
        switchSlide(i) {
          if (this.waitSwitch) return;
          const s = this.refs.slide,
            t = this.refs.page,
            e = s.find((i) => i.classList.contains("is-active")),
            c = s[i],
            l = t.find((i) => i.classList.contains("is-active")),
            n = t[i];
          if (e === c) return;
          this.waitSwitch = !0;
          const h = a.w$.timeline();
          h.call(() => {
            e.classList.remove("is-active"),
              c.classList.add("is-active"),
              l.classList.remove("is-active"),
              n.classList.add("is-active");
          }),
            h.fromTo(
              this.refs.slides,
              { height: this.refs.slides.offsetHeight },
              { height: c.offsetHeight, duration: 0.3, ease: "power3.inOut" },
              0.2
            ),
            h.call(() => {
              (this.refs.slides.style.height = ""), luge.emitter.emit("update");
            }),
            h.call(
              () => {
                this.waitSwitch = !1;
              },
              null,
              "+=1"
            );
        }
      };
    },
  },
]);
