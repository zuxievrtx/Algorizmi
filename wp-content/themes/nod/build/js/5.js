"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [2952],
  {
    2952: (e, s, n) => {
      n.r(s);
      var l = n(1864),
        a = n(8520),
        i = n(5684);
      a.w$.registerPlugin(i.o),
        (window.plr.controllers.SBootcamps = class extends l.c {
          bindEvents() {
            super.bindEvents(),
              (this.callbacks.onHeaderRevealIn =
                this.onHeaderRevealIn.bind(this)),
              this.on(
                this.refs.header,
                "revealin",
                this.callbacks.onHeaderRevealIn
              );
          }
          onHeaderRevealIn() {
            a.w$.timeline().call(() => {
              this.refs.title.luge && this.refs.title.luge.reveal.in();
            });
          }
        });
    },
  },
]);
