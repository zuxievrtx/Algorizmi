"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [272],
  {
    7892: (t, s, e) => {
      e.r(s);
      var i = e(1864);
      window.plr.controllers.SiteScrollbar = class extends i.c {
        init() {
          if (luge) {
            if (luge.browser.some(["mobile", "safari", "tablet"])) return;
            document.documentElement.classList.add("has-scrollbar"),
              super.init();
          }
        }
        bindEvents() {
          super.bindEvents(),
            luge &&
              (luge.emitter.on("resize", this.setScrollbar.bind(this)),
              luge.emitter.on("scroll", this.setScrollbar.bind(this)),
              luge.emitter.on("afterPageInit", this.setScrollbar.bind(this))),
            this.on(this.refs.thumb, "mousedown", this.dragStart.bind(this)),
            this.on(this.refs.thumb, "touchstart", this.dragStart.bind(this)),
            this.on(document, "mousemove", this.dragMove.bind(this)),
            this.on(document, "touchmove", this.dragMove.bind(this)),
            this.on(document, "mouseup", this.dragEnd.bind(this)),
            this.on(document, "touchend", this.dragEnd.bind(this));
        }
        resizeHandler() {
          this.setScrollbar();
        }
        scrollHandler() {
          this.setScrollbar();
        }
        setScrollbar() {
          const t =
              (window.safeHeight / document.body.scrollHeight) *
              window.safeHeight,
            s = window.scrollProgress * (window.safeHeight - t);
          this.el.style.setProperty("--scrollbar-height", `${t}px`),
            this.el.style.setProperty("--scrollbar-top", `${s}px`);
        }
        dragStart(t) {
          t.preventDefault(),
            (this.dragging = !0),
            (this.dragStartY = t.clientY || t.touches[0].clientY),
            (this.dragStartScroll = window.scrollProgress),
            this.el.classList.add("is-dragging");
        }
        dragMove(t) {
          if (!this.dragging) return;
          t.preventDefault();
          const s =
              ((t.clientY || (t.touches && t.touches[0].clientY)) -
                this.dragStartY) /
              window.safeHeight,
            e = (this.dragStartScroll + s) * window.maxScrollTop;
          luge.smoothscroll.lenis
            ? luge.smoothscroll.lenis.scrollTo(e)
            : window.scrollTo(0, e);
        }
        dragEnd(t) {
          t.preventDefault(),
            (this.dragging = !1),
            this.el.classList.remove("is-dragging");
        }
      };
    },
  },
]);
