"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [2540],
  {
    2540: (s, e, i) => {
      i.r(e);
      var l = i(1864),
        t = i(8520);
      window.plr.controllers.SVideoHighlight = class extends l.c {
        bindEvents() {
          super.bindEvents(),
            (this.callbacks.videoToggle = this.videoToggle.bind(this)),
            this.on(this.refs.wrapper, "click", this.callbacks.videoToggle);
        }
        videoToggle() {
          this.el.classList.contains("is-playing")
            ? this.el.classList.contains("is-playing") &&
              (this.el.classList.remove("is-playing"),
              this.el.classList.add("is-paused"),
              this.refs.videoPlayer.pause())
            : (this.el.classList.add("is-playing"),
              this.el.classList.remove("is-paused"),
              this.refs.videoPlayer.play());
        }
        onRevealIn() {
          const s = this.el.querySelector(".js-heading-eye"),
            e = t.w$.timeline();
          e.call(() => {
            s.luge && s.luge.reveal.in();
          }),
            e.from(
              this.refs.bullet,
              { opacity: 0, left: "0.75em", ease: "expo.out", duration: 0.8 },
              0.5
            );
        }
      };
    },
  },
]);
