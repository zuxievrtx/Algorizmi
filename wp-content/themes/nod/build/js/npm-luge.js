"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [4196],
  {
    7272: (e, t, s) => {
      s.d(t, {
        C_: () => W,
        Gm: () => y,
        IN: () => c,
        Ox: () => h,
        QT: () => d,
        So: () => S,
        mw: () => E,
        qn: () => N,
        ye: () => f,
      });
      class i {
        static isObject(e) {
          return e && "object" == typeof e && !Array.isArray(e);
        }
        static isString(e) {
          return e && "string" == typeof e;
        }
        static mergeDeep(e, t) {
          const s = Object.assign({}, e);
          return (
            i.isObject(e) &&
              i.isObject(t) &&
              Object.keys(t).forEach((r) => {
                i.isObject(t[r])
                  ? r in e
                    ? (s[r] =
                        i.isObject(e[r]) && i.isObject(t[r])
                          ? i.mergeDeep(e[r], t[r])
                          : t[r])
                    : Object.assign(s, { [r]: t[r] })
                  : Object.assign(s, { [r]: t[r] });
              }),
            s
          );
        }
        static toCamelCase(e) {
          return i.isString(e)
            ? e
                .replace(/(?:^\w|[A-Z]|\b\w)/g, (e, t) =>
                  0 === t ? e.toLowerCase() : e.toUpperCase()
                )
                .replace(/\W+/g, "")
            : e;
        }
        static deepFreeze(e) {
          return (
            Object.keys(e).forEach((t) => {
              "object" == typeof e[t] && i.deepFreeze(e[t]);
            }),
            Object.freeze(e)
          );
        }
        static clamp(e, t, s) {
          return Math.min(s, Math.max(t, e));
        }
      }
      var r = i,
        o = new (class {
          constructor() {
            this.events = [];
          }
          on(e, t, s, i = !1, r = 10) {
            (this.events[e] || (this.events[e] = [])).push({
              cb: t,
              context: s,
              once: i,
              position: r,
            });
          }
          once(e, t, s) {
            this.on(e, t, s, !0);
          }
          emit(e) {
            const t = this,
              s = [].slice.call(arguments, 1);
            this.events[e] &&
              this.events[e]
                .sort((e, t) => e.position - t.position)
                .forEach((i, r) => {
                  i.cb.apply(i.context, s), i.once && delete t.events[e][r];
                });
          }
          off(e, t) {
            const s = this;
            this.events[e] &&
              this.events[e].forEach((i, r) => {
                i.cb === t && delete s.events[e][r];
              });
          }
        })(),
        n = new (class {
          constructor() {
            (this.eventsName = [
              "siteInit",
              "pageInit",
              "siteLoad",
              "pageLoad",
              "siteIn",
              "pageIn",
              "reveal",
              "pageFetch",
              "pageOut",
              "pageCreate",
              "pageKill",
              "siteReload",
            ]),
              (this.events = {}),
              this.eventsName.forEach((e) => {
                this.events[e] = { callbacks: [], done: 0 };
              }),
              (this.cycles = {
                load: {
                  events: [
                    "siteInit",
                    "pageInit",
                    ["siteLoad", "pageLoad"],
                    "siteIn",
                    "pageIn",
                    "reveal",
                  ],
                },
                reload: { events: ["pageOut", "siteReload"] },
                transition: {
                  events: [
                    ["pageFetch", "pageOut"],
                    "pageCreate",
                    "pageKill",
                    "pageInit",
                    "pageLoad",
                    "pageIn",
                    "reveal",
                  ],
                },
                refresh: {
                  events: [
                    "pageKill",
                    "pageInit",
                    "pageLoad",
                    "pageIn",
                    "reveal",
                  ],
                },
              }),
              (this.debug = !1);
          }
          cycle(e) {
            if (this.cycles[e]) {
              (this.cycles[e].current = 0),
                this.debug && console.log("Start cycle: " + e);
              for (const e in this.events) this.events[e].done = 0;
              this.proceed(e);
            }
          }
          proceed(e) {
            const t = this.cycles[e].events,
              s = this.cycles[e].current;
            if (s < t.length) {
              const i = t[s];
              Array.isArray(i)
                ? i.forEach((t) => {
                    this.do(e, t);
                  })
                : this.do(e, i);
            } else this.debug && console.log(e + " cycle ended");
          }
          next(e) {
            const t = this,
              s = this.cycles[e].events,
              i = this.cycles[e].current;
            if (i < s.length) {
              const r = s[i];
              let o = !0,
                n = [];
              (n = "string" == typeof r ? Array(r) : r),
                n.length > 1 &&
                  n.forEach((e) => {
                    (0 === t.events[e].done ||
                      t.events[e].done < t.events[e].callbacks.length) &&
                      (o = !1);
                  }),
                o &&
                  (this.cycles[e].current++,
                  requestAnimationFrame(this.proceed.bind(this, e)));
            }
          }
          add(e, t, s = 10, i = null) {
            this.events[e] &&
              this.events[e].callbacks.push({
                callback: t,
                position: s,
                cycle: i,
              });
          }
          remove(e, t, s = null) {
            const i = this;
            this.events[e] &&
              this.events[e].callbacks.forEach((r, o) => {
                r.callback === t &&
                  r.cycle === s &&
                  delete i.events[e].callbacks[o];
              });
          }
          do(e, t) {
            (this.events[t].done = 0),
              this.events[t].callbacks.length > 0
                ? (this.debug &&
                    console.log("Do event: " + t + " (" + e + " cycle)"),
                  o.emit(r.toCamelCase("before-" + t)),
                  this.events[t].callbacks
                    .sort((e, t) => e.position - t.position)
                    .forEach((s) => {
                      null === s.cycle || s.cycle === e
                        ? s.callback(() => this.done(e, t))
                        : this.done(e, t);
                    }))
                : this.done(e, t);
          }
          done(e, t) {
            this.events[t].done++,
              this.debug &&
                console.log(
                  "Done event: " +
                    t +
                    " " +
                    this.events[t].done +
                    "/" +
                    this.events[t].callbacks.length +
                    " (" +
                    e +
                    " cycle)"
                ),
              this.events[t].done >= this.events[t].callbacks.length &&
                (o.emit(r.toCamelCase("after-" + t)), this.next(e, t));
          }
          enableDebug(e = !0) {
            this.debug = e;
          }
        })(),
        l = new (class {
          constructor() {
            (this.settings = r.deepFreeze({
              cursor: { inertia: 1, trailLength: 10 },
              intersection: { threshold: 0.3 },
              lottie: { renderer: "svg", subFrame: !0 },
              mouse: { inertia: 0.1 },
              parallax: { inertia: 0.1 },
              preloader: { duration: 0 },
              reveal: { stagger: 0.1, threshold: 0.15 },
              scroll: { inertia: 0.1, start: 1, end: 0 },
              smooth: { inertia: 0.1 },
              ticker: { external: !1 },
              transition: { reload: !1 },
              credits: { show: !0 },
            })),
              (this.timeouts = { resizeThrottle: null, scrollEnd: null }),
              (this.windowWidth = 1),
              (this.windowHeight = 1),
              (this.clientWidth = 1),
              (window.scrollTop = window.scrollY),
              (window.unifiedScrollTop = window.scrollTop),
              (window.maxScrollTop = 1),
              (window.scrollProgress = 0),
              (this.previousScrollTop = window.scrollY),
              (this.isScrolling = !1),
              (window.mouseX = -1),
              (window.mouseY = -1),
              (window.mouseLastScrollTop = 0),
              n.add("siteInit", this.siteInit.bind(this), 999),
              this.bindEvents();
          }
          setSettings(e) {
            this.settings = r.deepFreeze(r.mergeDeep(this.settings, e));
          }
          siteInit(e) {
            this.showCredits(),
              this.setCSSProperties(),
              this.scrollHandler(),
              e();
          }
          bindEvents() {
            window.addEventListener("mousemove", this.mouseHandler.bind(this), {
              passive: !0,
            }),
              window.addEventListener("resize", this.resizeThrottle.bind(this)),
              window.addEventListener("scroll", this.scrollHandler.bind(this), {
                passive: !0,
              });
          }
          mouseHandler(e) {
            const t = e.pageY - window.scrollTop;
            (window.mouseX = e.pageX),
              (window.mouseY = t),
              o.emit("mouseMove", e);
          }
          resizeThrottle() {
            clearTimeout(this.timeouts.resizeThrottle),
              (this.timeouts.resizeThrottle = setTimeout(
                this.resizeHandler.bind(this),
                200
              ));
          }
          resizeHandler() {
            this.setCSSProperties(), o.emit("resize");
          }
          setCSSProperties() {
            const e = window.innerWidth;
            this.windowWidth !== e &&
              ((this.windowWidth = e),
              (this.clientWidth = document.body.clientWidth));
            const t = window.innerHeight;
            this.windowHeight !== t &&
              ((this.windowHeight = t),
              (this.clientHeight = document.body.clientHeight)),
              requestAnimationFrame(() => {
                document.documentElement.style.setProperty(
                  "--vw",
                  0.01 * this.windowWidth + "px"
                ),
                  document.documentElement.style.setProperty(
                    "--cw",
                    0.01 * this.clientWidth + "px"
                  ),
                  document.documentElement.style.setProperty(
                    "--vh",
                    0.01 * this.windowHeight + "px"
                  ),
                  document.documentElement.style.setProperty(
                    "--ch",
                    0.01 * this.clientHeight + "px"
                  );
              });
          }
          scrollHandler() {
            this.isScrolling || this.scrollStart(),
              clearTimeout(this.timeouts.scrollEnd),
              (this.timeouts.scrollEnd = setTimeout(
                this.scrollEnd.bind(this),
                200
              )),
              window.hasSmoothScroll || this.updateScroll();
          }
          updateScroll() {
            (window.scrollTop = window.scrollY),
              (window.unifiedScrollTop = window.scrollTop),
              (this.previousScrollTop = window.scrollTop),
              (window.scrollProgress = window.scrollTop / window.maxScrollTop),
              o.emit("scroll");
          }
          scrollStart() {
            (this.isScrolling = !0),
              document.documentElement.classList.add("is-scrolling"),
              o.emit("scrollStart");
          }
          scrollEnd() {
            (this.isScrolling = !1),
              document.documentElement.classList.remove("is-scrolling"),
              o.emit("scrollEnd");
          }
          showCredits() {
            if (this.settings.credits.show) {
              const e =
                  "background-color: #00FFE5; color: black; font: 400 1em monospace; padding: 0.5em 0; ",
                t = e + "font-weight: bold; ",
                s = "color: black; font: 400 1em monospace; padding: 0.5em 0; ",
                i = "1.0.0-rc.1".includes("npm")
                  ? "$npm_package_version"
                  : "1.0.0-rc.1";
              console.log(
                "%c powered by %cluge%c / " + i + " %c > https://luge.cool ",
                e,
                t,
                e,
                s
              );
            }
          }
        })();
      class a {
        constructor(e) {
          (this.pluginSlug = e),
            n.add("siteInit", this.beforeInit.bind(this), 5);
        }
        beforeInit(e) {
          (this.isDisabled = this.disabled()),
            this.isDisabled
              ? document.documentElement.classList.add(
                  "lg-" + this.pluginSlug + "-disabled"
                )
              : this.init(),
            e();
        }
        init() {
          this.setAttributes();
        }
        disabled() {
          return !!(l.settings[this.pluginSlug] || {}).disabled;
        }
        setAttributes() {
          this.pluginAttributes = {};
        }
        getAttributes(e) {
          const t = this.pluginAttributes,
            s = {};
          for (const i in t) {
            const o = t[i];
            let n = "lg-" + this.pluginSlug;
            "root" !== i && (n += "-" + i), (n = r.toCamelCase(n));
            const l = e.dataset[n];
            let a, c, h;
            "object" == typeof o ? ((a = o[0]), (h = o[1])) : (a = o),
              (c =
                void 0 === l && void 0 !== h
                  ? a(h)
                  : (void 0 !== l || a !== Boolean) &&
                    (void 0 !== l
                      ? a === Boolean
                        ? "false" !== l
                        : a(l)
                      : void 0)),
              (s[i] = c);
          }
          return (e.luge || (e.luge = {})) && (e.luge[this.pluginSlug] = s), s;
        }
      }
      class c extends a {
        constructor(e) {
          super("reveal"),
            (this.luge = e),
            (this.elements = []),
            (this.toRevealIn = []),
            (this.toRevealOut = []),
            (this.removed = []),
            (this.reveals = { in: {}, out: {} }),
            (this.canReveal = !1),
            (this.onScrollProgress = this.onScrollProgress.bind(this)),
            (e.reveal = { add: this.add.bind(this) });
        }
        init() {
          super.init(),
            this.luge.lifecycle.add("pageInit", this.pageInit.bind(this), 11),
            this.luge.lifecycle.add("pageKill", this.pageKill.bind(this)),
            this.luge.lifecycle.add("reveal", this.reveal.bind(this)),
            this.bindEvents();
        }
        setAttributes() {
          super.setAttributes(),
            (this.pluginAttributes = {
              root: String,
              stagger: String,
              manual: [Boolean, !1],
              multiple: Boolean,
              delay: [Number, 0],
            });
        }
        getAttributes(e) {
          const t = super.getAttributes(e);
          return (
            void 0 !== t.stagger && "" === t.stagger
              ? (t.stagger = this.luge._settings.reveal.stagger)
              : void 0 === t.stagger && (t.stagger = !1),
            t
          );
        }
        bindEvents() {
          this.luge.emitter.on("resize", this.resizeHandler, this),
            this.luge.emitter.on("scroll", this.scrollHandler, this),
            this.luge.emitter.on("update", this.updateHandler, this),
            this.luge.emitter.on(
              "afterScrollUpdate",
              this.afterScrollUpdateHandler,
              this
            );
        }
        pageInit(e) {
          this.addElements(), e();
        }
        addElements() {
          const e = document.querySelectorAll("[data-lg-reveal]"),
            t = this;
          e.forEach((e) => {
            t.addElement(e);
          });
        }
        addElement(e) {
          if (!this.elements.includes(e)) {
            const t = this.getAttributes(e);
            if (!t.stagger && null !== e.closest("[data-lg-reveal-stagger]"))
              return;
            const s = t.root;
            (e.luge.reveal.name = r.toCamelCase(s)),
              t.manual
                ? ((e.luge.reveal.in = () => {
                    this.revealCallback(e, e.luge.reveal.name, "in"),
                      this.setRevealClasses(e, "is-in");
                  }),
                  (e.luge.reveal.out = () => {
                    this.revealCallback(e, e.luge.reveal.name, "out"),
                      this.setRevealClasses(e, "is-out");
                  }))
                : (this.luge.scrollobserver.add(e),
                  e.addEventListener("scrollprogress", this.onScrollProgress)),
              (e.luge.reveal.delay = 1e3 * t.delay),
              t.stagger
                ? Array.from(e.children).forEach((e) => {
                    const t = e.dataset.lgReveal;
                    (e.style.transition = "none"),
                      this.luge.ticker.nextTick(() => {
                        e.style.transition = "";
                      }),
                      e.classList.add("lg-reveal", "is-out"),
                      (t || s) &&
                        e.classList.add("lg-reveal--" + (null != t ? t : s)),
                      (e.dataset.lgRevealChild = ""),
                      (e.luge || (e.luge = {})) &&
                        (e.luge.reveal = { isRevealed: !1 });
                  })
                : ((e.style.transition = "none"),
                  this.luge.ticker.nextTick(() => {
                    e.style.transition = "";
                  }),
                  e.classList.add("lg-reveal", "is-out"),
                  s && e.classList.add("lg-reveal--" + s)),
              this.elements.push(e);
          }
        }
        removeElement(e, t = !1) {
          this.luge.scrollobserver.remove(e),
            e.removeEventListener("scrollprogress", this.onScrollProgress),
            t && this.elements.includes(e)
              ? (this.elements.splice(this.elements.indexOf(e), 1),
                this.removed.push(e))
              : t || this.removed.push(e);
        }
        pageKill(e) {
          const t = this;
          (this.canReveal = !1),
            this.elements.forEach((e) => {
              t.removeElement(e);
            }),
            (this.elements = []),
            e();
        }
        onScrollProgress(e) {
          this.checkElement(e.target);
        }
        checkElements() {
          const e = this.luge._settings.reveal.threshold;
          this.elements.forEach((t) => {
            let s = "";
            t.scrollProgress >= e && t.scrollProgress <= 1 - e
              ? (s = "is-in")
              : (t.scrollProgress < e ||
                  (t.scrollProgress > 1 - e &&
                    t.scrollEnd < Math.round(window.unifiedScrollTop))) &&
                (s = "is-out"),
              "" !== s &&
                (this.setRevealClasses(t, s),
                (el.luge.reveal.isRevealed = "is-in" === s));
          });
        }
        checkElement(e) {
          const t = this.luge._settings.reveal.threshold;
          (e.scrollStart < 0 && Math.abs(e.scrollStart) / window.safeHeight) >=
            t ||
          (e.scrollProgress >= t &&
            e.scrollProgress <= 1 - t &&
            !e.luge.reveal.isRevealed)
            ? (this.toRevealOut.includes(e) &&
                this.toRevealOut.splice(this.toRevealOut.indexOf(e), 1),
              this.toRevealIn.includes(e) || this.toRevealIn.push(e))
            : (e.scrollProgress < t ||
                (e.scrollProgress > 1 - t &&
                  e.scrollEnd < Math.round(window.unifiedScrollTop))) &&
              e.luge.reveal.isRevealed &&
              (this.toRevealIn.includes(e) &&
                this.toRevealIn.splice(this.toRevealIn.indexOf(e), 1),
              this.toRevealOut.includes(e) || this.toRevealOut.push(e));
        }
        reveal(e) {
          (this.canReveal = !0),
            this.elements.forEach((e) => {
              e.scrollStart < 0 &&
                (this.toRevealIn.includes(e) || this.toRevealIn.push(e));
            }),
            this.revealElements(),
            e();
        }
        resizeHandler() {
          this.revealElements();
        }
        scrollHandler() {
          this.revealElements();
        }
        updateHandler() {
          this.addElements();
        }
        afterScrollUpdateHandler() {
          this.revealElements();
        }
        revealElements() {
          const e = this;
          if (this.canReveal) {
            let t = 0;
            this.toRevealIn.forEach((s) => {
              if (this.removed.includes(s)) return;
              const i = r.toCamelCase(s.luge.reveal.root);
              (t += s.luge.reveal.delay),
                setTimeout(function () {
                  e.revealCallback(s, i, "in"),
                    s.luge.reveal.stagger
                      ? Array.from(s.children).forEach((t, o) => {
                          const n = r.toCamelCase(t.dataset.lgReveal);
                          setTimeout(() => {
                            (n || i) &&
                              e.revealCallback(t, null != n ? n : i, "in"),
                              e.setRevealClasses(t, "is-in");
                          }, o * s.luge.reveal.stagger * 1e3);
                        })
                      : e.setRevealClasses(s, "is-in");
                }, t),
                (t += 1e3 * this.luge._settings.reveal.stagger),
                s.luge.reveal.multiple || e.removeElement(s, !0);
            }),
              this.toRevealOut.forEach((t) => {
                const s = r.toCamelCase(t.luge.reveal.root);
                void 0 !== t.luge.reveal.isRevealed &&
                  e.revealCallback(t, s, "out");
                let i = "";
                (i =
                  t.scrollProgress > 0.5
                    ? "is-out is-out-top"
                    : "is-out is-out-bottom"),
                  t.luge.reveal.stagger
                    ? Array.from(t.children).forEach((o, n) => {
                        const l = r.toCamelCase(o.dataset.lgReveal);
                        setTimeout(() => {
                          (l || s) &&
                            e.revealCallback(o, null != l ? l : s, "out"),
                            e.setRevealClasses(o, i);
                        }, n * t.luge.reveal.stagger * 1e3);
                      })
                    : e.setRevealClasses(t, i);
              }),
              (this.toRevealIn = []),
              (this.toRevealOut = []);
          }
        }
        setRevealClasses(e, t) {
          (t = t.split(" ")),
            e.classList.remove(
              "is-in",
              "is-out",
              "is-out-top",
              "is-out-bottom"
            ),
            t.forEach((t) => {
              e.classList.add(t);
            });
        }
        revealCallback(e, t, s) {
          e.dispatchEvent(new CustomEvent("reveal" + s)),
            (e.luge.reveal.isRevealed = "in" === s),
            "function" == typeof this.reveals[s][t]
              ? this.reveals[s][t](e)
              : "function" == typeof e["onreveal" + s] && e["onreveal" + s]();
        }
        add(e, t, s) {
          this.reveals[e] &&
            ((t = r.toCamelCase(t)),
            this.reveals[e][t]
              ? console.log("Reveal animation named " + t + " already exists.")
              : (this.reveals[e][t] = s));
        }
      }
      class h extends a {
        constructor(e) {
          super("transition"),
            (this.luge = e),
            (this.url = window.location.href),
            (this.oldUrl = window.location.href),
            (this.pathname = window.location.pathname),
            (this.pageFetched = null),
            (this.currentPage = null),
            (this.reload = this.luge._settings.transition.reload),
            (this.prevScrollTop = 0),
            (this.newScrollTop = 0),
            (this.transitions = { in: {}, out: {} }),
            (this.listeners = { linkHandler: this.linkHandler.bind(this) }),
            (e.transition = {
              add: this.add.bind(this),
              getOldUrl: this.getOldUrl.bind(this),
              getNewUrl: this.getNewUrl.bind(this),
            });
        }
        init() {
          (this.currentPage = document.querySelector("[data-lg-page]")),
            this.currentPage &&
              (this.reload =
                !!this.currentPage.hasAttribute("data-lg-reload") ||
                this.luge._settings.transition.reload),
            this.initLoader(),
            this.reload ||
              window.addEventListener(
                "popstate",
                this.historyStateChanged.bind(this)
              ),
            this.luge.lifecycle.add("pageInit", this.pageInit.bind(this)),
            this.luge.lifecycle.add("pageFetch", this.pageFetch.bind(this)),
            this.luge.lifecycle.add("pageOut", this.pageOut.bind(this)),
            this.luge.lifecycle.add(
              "pageIn",
              this.pageIn.bind(this),
              10,
              "transition"
            ),
            this.luge.lifecycle.add("pageCreate", this.pageCreate.bind(this)),
            this.luge.lifecycle.add(
              "pageKill",
              this.pageKill.bind(this),
              999,
              "transition"
            ),
            this.luge.emitter.on("update", this.updateHandler.bind(this));
        }
        bindLinksEvent() {
          document.querySelector("[data-lg-page]") &&
            document.querySelectorAll("a").forEach((e) => {
              e.addEventListener("click", this.listeners.linkHandler);
            });
        }
        unbindLinksEvent() {
          document.querySelectorAll("a").forEach((e) => {
            e.removeEventListener("click", this.listeners.linkHandler);
          });
        }
        updateHandler() {
          this.unbindLinksEvent(), this.bindLinksEvent();
        }
        linkHandler(e) {
          const t = e.currentTarget,
            s = t.getAttribute("href");
          if (
            s &&
            0 !== s.indexOf("#") &&
            0 !== s.indexOf("tel") &&
            0 !== s.indexOf("mailto") &&
            !t.closest("#wpadminbar") &&
            "disabled" !== t.getAttribute("data-lg-transition") &&
            "_blank" !== t.getAttribute("target") &&
            (0 === s.indexOf(window.location.origin) ||
              0 === s.indexOf("/") ||
              -1 === s.indexOf("/"))
          ) {
            if ((e.preventDefault(), window.location.href === s)) return;
            this.navigateTo(s);
          }
        }
        navigateTo(e) {
          if (((this.oldUrl = this.url), (this.url = e), this.reload)) {
            const t = document.createElement("link");
            (t.rel = "prefetch"),
              (t.href = e),
              document.head.appendChild(t),
              this.luge.lifecycle.add("siteReload", (t) => {
                window.location = e;
              }),
              this.luge.lifecycle._cycle("reload");
          } else this.luge.lifecycle._cycle("transition");
        }
        pageInit(e) {
          this.bindLinksEvent(), e();
        }
        initLoader() {
          const e = document.querySelector("[data-lg-loader]");
          if (
            (e &&
              ((e.style.transition = "none"),
              e.classList.add(
                "lg-loader",
                "lg-loader--" + e.getAttribute("data-lg-loader")
              ),
              this.luge.ticker.nextTick(() => {
                e.style.transition = "";
              })),
            e &&
              "lottie" === e.getAttribute("data-lg-loader") &&
              "object" == typeof lottie)
          ) {
            const t = e.getAttribute("data-lg-loader-out");
            let s = !1,
              i = e.getAttribute("data-lg-loader-in"),
              r = !1;
            t &&
              (s = lottie.loadAnimation({
                container: e,
                renderer: "svg",
                loop: !1,
                autoplay: !1,
                path: t,
                rendererSettings: { preserveAspectRatio: "none" },
              })),
              "reverse" === i && (i = t),
              i &&
                ((r = lottie.loadAnimation({
                  container: e,
                  renderer: "svg",
                  loop: !1,
                  autoplay: !1,
                  path: i,
                  rendererSettings: { preserveAspectRatio: "none" },
                })),
                i === t && r.setDirection(-1)),
              (e.playerOut = s),
              (e.playerIn = r);
          }
        }
        pageFetch(e) {
          const t = this;
          this.url &&
            fetch(this.url, { credentials: "include" })
              .then(function (e) {
                return e.text();
              })
              .then(function (s) {
                (t.pageFetched = s), e();
              });
        }
        pageCreate(e) {
          const t = new DOMParser().parseFromString(
              this.pageFetched,
              "text/html"
            ),
            s = t.querySelector("[data-lg-page]");
          if (s) {
            {
              this.currentPage.insertAdjacentElement("beforebegin", s),
                (s.style.opacity = 0),
                (this.currentPage.style.opacity = 0),
                (this.currentPage.style.position = "absolute"),
                (this.currentPage.style.top = 0),
                (this.currentPage.style.left = "-999em"),
                (this.currentPage.style.width = "100%"),
                (document.querySelector("body").className =
                  t.querySelector("body").className),
                document
                  .querySelectorAll(
                    'meta[name="description"], meta[name="keywords"], meta[property="og:image"]'
                  )
                  .forEach((e) => {
                    e.parentNode.removeChild(e);
                  }),
                t
                  .querySelectorAll(
                    'meta[name="description"], meta[name="keywords"], meta[property="og:image"]'
                  )
                  .forEach((e) => {
                    document
                      .querySelector("head title")
                      .insertAdjacentElement("afterend", e);
                  });
              const e = document.querySelector("head title"),
                i = t.querySelector("head title");
              e && i && (e.innerText = i.innerText);
            }
            window.scroll({
              top: this.newScrollTop,
              left: 0,
              behavior: "instant",
            }),
              (window.scrollTop = 0),
              (window.smoothScrollTop = 0),
              (window.unifiedScrollTop = 0),
              (this.prevScrollTop = 0),
              (this.newScrollTop = 0),
              this.luge.emitter.emit("pageTransition", t),
              history.pushState(null, null, this.url),
              e();
          } else window.location = this.url;
        }
        pageKill(e) {
          const t = this.currentPage;
          t.parentNode.removeChild(t),
            (this.currentPage = document.querySelector("[data-lg-page]")),
            this.currentPage
              ? ((this.reload =
                  !!this.currentPage.hasAttribute("data-lg-reload") ||
                  this.luge._settings.transition.reload),
                e())
              : (window.location = this.url);
        }
        pageOut(e) {
          const t = this,
            s = document.querySelector("[data-lg-page]");
          if (s) {
            const i = r.toCamelCase(s.getAttribute("data-lg-page"));
            let o = !1;
            if (
              ("function" == typeof this.transitions.out[i]
                ? (o = this.transitions.out[i])
                : "function" == typeof s.onpageout
                ? (o = s.onpageout)
                : "function" == typeof this.transitions.out.default &&
                  (o = this.transitions.out.default),
              o)
            )
              o(s, e);
            else {
              const s = document.querySelector("[data-lg-loader]");
              if (s) {
                if (s.playerOut)
                  s.playerOut.stop(),
                    (s.playerOut.renderer.svgElement.style.opacity = 1),
                    s.playerOut.play(),
                    s.playerOut.addEventListener(
                      "complete",
                      () => {
                        t.reload ||
                          (s.playerOut.renderer.svgElement.style.opacity = ""),
                          e();
                      },
                      { once: !0 }
                    );
                else {
                  const t = window
                    .getComputedStyle(
                      document.querySelector("[data-lg-loader]")
                    )
                    .getPropertyValue("transition-duration");
                  "" !== t && "0s" !== t
                    ? s.addEventListener("transitionend", e, { once: !0 })
                    : e();
                }
                s.classList.add("is-visible");
              } else e();
            }
          } else e();
          this.unbindLinksEvent();
        }
        pageIn(e) {
          const t = document.querySelector("[data-lg-page]");
          if (t) {
            const s = r.toCamelCase(t.getAttribute("data-lg-page"));
            let i = !1;
            if (
              ((t.style.opacity = ""),
              "function" == typeof this.transitions.in[s]
                ? (i = this.transitions.in[s])
                : "function" == typeof t.onpagein
                ? (i = t.onpagein)
                : "function" == typeof this.transitions.in.default &&
                  (i = this.transitions.in.default),
              i)
            )
              i(t, e);
            else {
              const t = document.querySelector("[data-lg-loader]");
              if (t && t.classList.contains("is-visible"))
                if (t.playerIn)
                  t.playerIn.stop(),
                    (t.playerIn.renderer.svgElement.style.opacity = 1),
                    "reverse" === t.getAttribute("data-lg-loader-in")
                      ? t.playerIn.goToAndPlay(t.playerIn.totalFrames, !0)
                      : t.playerIn.play(),
                    t.playerIn.addEventListener(
                      "complete",
                      () => {
                        (t.playerIn.renderer.svgElement.style.opacity = ""),
                          t.classList.remove("is-visible"),
                          e();
                      },
                      { once: !0 }
                    );
                else {
                  const s = window
                    .getComputedStyle(
                      document.querySelector("[data-lg-loader]")
                    )
                    .getPropertyValue("transition-duration");
                  "" !== s && "0s" !== s
                    ? t.addEventListener("transitionend", e, { once: !0 })
                    : e(),
                    t.classList.remove("is-visible");
                }
              else e();
            }
          } else e();
        }
        historyStateChanged() {
          let e = "";
          (e =
            0 === this.url.indexOf(window.location.origin)
              ? new URL(this.url)
              : new URL(window.location.origin + this.url)),
            e.pathname !== window.location.pathname &&
              ((this.prevScrollTop = window.scrollY),
              this.luge.ticker.nextTick(() => {
                (this.newScrollTop = window.scrollY),
                  window.scroll({
                    top: this.prevScrollTop,
                    left: 0,
                    behavior: "instant",
                  });
              }),
              this.navigateTo(window.location.href));
        }
        add(e, t = "default", s) {
          this.transitions[e] &&
            ((t = r.toCamelCase(t)),
            this.transitions[e][t]
              ? console.log(
                  "Transition animation for " + t + " page already exists."
                )
              : (this.transitions[e][t] = s));
        }
        getOldUrl() {
          return this.oldUrl;
        }
        getNewUrl() {
          return this.url;
        }
      }
      class d extends a {
        constructor(e) {
          super("scroll"),
            (this.luge = e),
            (this.elements = []),
            (this.allowedProperties = [
              "opacity",
              "background-x",
              "background-y",
            ]),
            (this.transformProperties = [
              "x",
              "y",
              "z",
              "translate3d",
              "rotate",
              "rotateX",
              "rotateY",
              "rotateZ",
              "scale",
              "scaleX",
              "scaleY",
              "scaleZ",
            ]),
            (this.presets = {
              "background-x": { "background-x": ["0%", "100%"] },
              "background-y": { "background-y": ["0%", "100%"] },
            }),
            (this.onScrollProgress = this.onScrollProgress.bind(this));
        }
        init() {
          super.init(),
            this.luge.lifecycle.add("pageInit", this.pageInit.bind(this)),
            this.luge.lifecycle.add("pageKill", this.pageKill.bind(this)),
            this.luge.ticker.add(this.tick, this),
            this.bindEvents();
        }
        setAttributes() {
          this.pluginAttributes = {
            root: String,
            yoyo: Boolean,
            inertia: [String, this.luge._settings.scroll.inertia],
            animate: String,
            start: [Number, this.luge._settings.scroll.start],
            end: [Number, this.luge._settings.scroll.end],
          };
        }
        getAttributes(e) {
          const t = super.getAttributes(e);
          if (t.inertia) {
            const e = t.inertia.match(
              /\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m
            );
            (t.inertia = e
              ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random()
              : Number(t.inertia)),
              (t.inertia = Math.max(Math.min(t.inertia, 0.99), 0));
          }
          return t;
        }
        bindEvents() {
          this.luge.emitter.on("update", this.updateHandler, this);
        }
        updateHandler() {
          this.addElements();
        }
        pageInit(e) {
          this.addElements(), e();
        }
        addElements() {
          const e = document.querySelectorAll("[data-lg-scroll]"),
            t = this;
          e.forEach((e) => {
            t.addElement(e);
          });
        }
        addElement(e) {
          if (!this.elements.includes(e)) {
            const t = this.getAttributes(e);
            this.luge.scrollobserver.add(e, t.start, t.end),
              e.addEventListener("scrollprogress", this.onScrollProgress);
            const s = {};
            (s.smoothProgress =
              void 0 !== e.scrollProgress ? e.scrollProgress : 0),
              (s.yoyo = t.yoyo),
              (s.inertia = t.inertia);
            let i = !1;
            if (
              (void 0 !== t.animate
                ? (i = JSON.parse(t.animate.replace(/'/g, '"')))
                : this.presets[t.root] && (i = this.presets[t.root]),
              i)
            ) {
              const e = {};
              for (const t in i)
                if (
                  this.allowedProperties.includes(t) ||
                  this.transformProperties.includes(t)
                ) {
                  const s = i[t];
                  let r = String(s[0]),
                    o = String(s[1]),
                    n = r.match(/\d+([a-zA-Z%]+)/m);
                  n ? (n = n[1]) : 0 === t.indexOf("rotate") && (n = "deg"),
                    (r = Number(r.replace(n, ""))),
                    (o = Number(o.replace(n, "")));
                  let l = t;
                  "background-x" === t
                    ? (l = "background-position-x")
                    : "background-y" === t && (l = "background-position-y"),
                    (e[l] = { from: r, to: o, current: r, unit: n });
                }
              s.properties = e;
            }
            (e.luge.scroll.animation = s), this.elements.push(e);
          }
        }
        removeElement(e) {
          this.luge.scrollobserver.remove(e),
            e.removeEventListener("scrollprogress", this.onScrollProgress);
        }
        pageKill(e) {
          const t = this;
          this.elements.forEach((e) => {
            t.removeElement(e);
          }),
            (this.elements = []),
            e();
        }
        onScrollProgress(e) {
          e.target.luge.scroll.animation.atDest = !1;
        }
        tick() {
          for (const e of this.elements) {
            if (e.luge.scroll.animation.atDest) continue;
            let t = e.scrollProgress;
            if (
              (e.luge.scroll.yoyo && (t = 1 - Math.abs(1 - 2 * t)),
              (e.luge.scroll.animation.smoothProgress +=
                (t - e.luge.scroll.animation.smoothProgress) *
                (1 - e.luge.scroll.inertia)),
              e.luge.scroll.animation.properties)
            ) {
              const t = {};
              for (const [s, i] of Object.entries(
                e.luge.scroll.animation.properties
              ))
                (i.current =
                  i.from +
                  (i.to - i.from) * e.luge.scroll.animation.smoothProgress),
                  ["x", "y", "z"].includes(s)
                    ? (t.translate3d || (t.translate3d = {})) &&
                      (t.translate3d[s] = i.current + i.unit)
                    : (t[s] = i.current + i.unit);
              const s = [];
              for (const [e, i] of Object.entries(t))
                if (this.transformProperties.includes(e)) {
                  if ("object" == typeof i)
                    if ("translate3d" === e) {
                      const e = Object.assign({ x: 0, y: 0, z: 0 }, i);
                      i.string = e.x + ", " + e.y + ", " + e.z;
                    } else i.string = Object.values(i).join(", ");
                  s.push(e + "(" + ("object" != typeof i ? i : i.string) + ")");
                }
              const i = {},
                r = [];
              s.length > 0 &&
                ((i.transform = s.join(" ")), r.push("transform"));
              for (const [e, s] of Object.entries(t))
                this.transformProperties.includes(e) || ((i[e] = s), r.push(e));
              for (const [t, s] of Object.entries(i)) e.style.setProperty(t, s);
              e.style.setProperty("will-change", r.join(", "));
            } else {
              const t =
                Math.round(
                  1e3 *
                    (e.scrollProgress - e.luge.scroll.animation.smoothProgress)
                ) / 1e3;
              e.style.setProperty(
                "--progress",
                e.luge.scroll.animation.smoothProgress
              ),
                e.style.setProperty("--abs-diff", Math.abs(t)),
                e.style.setProperty("--diff", t);
            }
            Math.abs(t - e.luge.scroll.animation.smoothProgress) < 1e-4 &&
              (e.luge.scroll.animation.atDest = !0);
          }
        }
      }
      function u(e, t, s) {
        return Math.max(e, Math.min(t, s));
      }
      class g {
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            const s = u(0, this.currentTime / this.duration, 1);
            t = s >= 1;
            const i = t ? 1 : this.easing(s);
            this.value = this.from + (this.to - this.from) * i;
          } else
            this.lerp
              ? ((this.value = (function (e, t, s, i) {
                  return (function (e, t, s) {
                    return (1 - s) * e + s * t;
                  })(e, t, 1 - Math.exp(-s * i));
                })(this.value, this.to, 60 * this.lerp, e)),
                Math.round(this.value) === this.to &&
                  ((this.value = this.to), (t = !0)))
              : ((this.value = this.to), (t = !0));
          t && this.stop(), this.onUpdate?.(this.value, t);
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          { lerp: s, duration: i, easing: r, onStart: o, onUpdate: n }
        ) {
          (this.from = this.value = e),
            (this.to = t),
            (this.lerp = s),
            (this.duration = i),
            (this.easing = r),
            (this.currentTime = 0),
            (this.isRunning = !0),
            o?.(),
            (this.onUpdate = n);
        }
      }
      class p {
        constructor({
          wrapper: e,
          content: t,
          autoResize: s = !0,
          debounce: i = 250,
        } = {}) {
          (this.wrapper = e),
            (this.content = t),
            s &&
              ((this.debouncedResize = (function (e, t) {
                let s;
                return function () {
                  let i = arguments,
                    r = this;
                  clearTimeout(s),
                    (s = setTimeout(function () {
                      e.apply(r, i);
                    }, t));
                };
              })(this.resize, i)),
              this.wrapper === window
                ? window.addEventListener("resize", this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize();
        }
        destroy() {
          this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            window.removeEventListener("resize", this.debouncedResize, !1);
        }
        resize = () => {
          this.onWrapperResize(), this.onContentResize();
        };
        onWrapperResize = () => {
          this.wrapper === window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }
      class m {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let s = this.events[e] || [];
          for (let e = 0, i = s.length; e < i; e++) s[e](...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }
      const v = 100 / 6;
      class b {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: s = 1 }) {
          (this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = s),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new m()),
            window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize, !1),
            this.element.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        onTouchStart = (e) => {
          const { clientX: t, clientY: s } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          (this.touchStart.x = t),
            (this.touchStart.y = s),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
        };
        onTouchMove = (e) => {
          const { clientX: t, clientY: s } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            i = -(t - this.touchStart.x) * this.touchMultiplier,
            r = -(s - this.touchStart.y) * this.touchMultiplier;
          (this.touchStart.x = t),
            (this.touchStart.y = s),
            (this.lastDelta = { x: i, y: r }),
            this.emitter.emit("scroll", { deltaX: i, deltaY: r, event: e });
        };
        onTouchEnd = (e) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: s, deltaMode: i } = e;
          (t *= 1 === i ? v : 2 === i ? this.windowWidth : 1),
            (s *= 1 === i ? v : 2 === i ? this.windowHeight : 1),
            (t *= this.wheelMultiplier),
            (s *= this.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: s, event: e });
        };
        onWindowResize = () => {
          (this.windowWidth = window.innerWidth),
            (this.windowHeight = window.innerHeight);
        };
      }
      class w {
        constructor({
          wrapper: e = window,
          content: t = document.documentElement,
          wheelEventsTarget: s = e,
          eventsTarget: i = s,
          smoothWheel: r = !0,
          syncTouch: o = !1,
          syncTouchLerp: n = 0.075,
          touchInertiaMultiplier: l = 35,
          duration: a,
          easing: c = (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
          lerp: h = 0.1,
          infinite: d = !1,
          orientation: u = "vertical",
          gestureOrientation: v = "vertical",
          touchMultiplier: w = 1,
          wheelMultiplier: y = 1,
          autoResize: f = !0,
          prevent: S = !1,
          __experimental__naiveDimensions: E = !1,
        } = {}) {
          (this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.direction = 0),
            (this.onVirtualScroll = ({ deltaX: e, deltaY: t, event: s }) => {
              if (s.ctrlKey) return;
              const i = s.type.includes("touch"),
                r = s.type.includes("wheel");
              if (
                ((this.isTouching =
                  "touchstart" === s.type || "touchmove" === s.type),
                this.options.syncTouch &&
                  i &&
                  "touchstart" === s.type &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              if (
                (0 === e && 0 === t) ||
                ("vertical" === this.options.gestureOrientation && 0 === t) ||
                ("horizontal" === this.options.gestureOrientation && 0 === e)
              )
                return;
              let o = s.composedPath();
              o = o.slice(0, o.indexOf(this.rootElement));
              const n = this.options.prevent;
              if (
                o.find((e) => {
                  var t, s, o, l, a;
                  return (
                    e instanceof Element &&
                    (("function" == typeof n
                      ? null == n
                        ? void 0
                        : n(e)
                      : n) ||
                      (null === (t = e.hasAttribute) || void 0 === t
                        ? void 0
                        : t.call(e, "data-lenis-prevent")) ||
                      (i &&
                        (null === (s = e.hasAttribute) || void 0 === s
                          ? void 0
                          : s.call(e, "data-lenis-prevent-touch"))) ||
                      (r &&
                        (null === (o = e.hasAttribute) || void 0 === o
                          ? void 0
                          : o.call(e, "data-lenis-prevent-wheel"))) ||
                      ((null === (l = e.classList) || void 0 === l
                        ? void 0
                        : l.contains("lenis")) &&
                        !(null === (a = e.classList) || void 0 === a
                          ? void 0
                          : a.contains("lenis-stopped"))))
                  );
                })
              )
                return;
              if (this.isStopped || this.isLocked)
                return void s.preventDefault();
              if (
                !(
                  (this.options.syncTouch && i) ||
                  (this.options.smoothWheel && r)
                )
              )
                return (this.isScrolling = "native"), void this.animate.stop();
              s.preventDefault();
              let l = t;
              "both" === this.options.gestureOrientation
                ? (l = Math.abs(t) > Math.abs(e) ? t : e)
                : "horizontal" === this.options.gestureOrientation && (l = e);
              const a = i && this.options.syncTouch,
                c = i && "touchend" === s.type && Math.abs(l) > 5;
              c && (l = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + l,
                  Object.assign(
                    { programmatic: !1 },
                    a
                      ? { lerp: c ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                );
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (
                !1 === this.isScrolling ||
                "native" === this.isScrolling
              ) {
                const e = this.animatedScroll;
                (this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = "native"),
                  this.emit(),
                  0 !== this.velocity &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      (this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit();
                    }, 400));
              }
            }),
            (window.lenisVersion = "1.1.3"),
            (e && e !== document.documentElement && e !== document.body) ||
              (e = window),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: s,
              eventsTarget: i,
              smoothWheel: r,
              syncTouch: o,
              syncTouchLerp: n,
              touchInertiaMultiplier: l,
              duration: a,
              easing: c,
              lerp: h,
              infinite: d,
              gestureOrientation: v,
              orientation: u,
              touchMultiplier: w,
              wheelMultiplier: y,
              autoResize: f,
              prevent: S,
              __experimental__naiveDimensions: E,
            }),
            (this.animate = new g()),
            (this.emitter = new m()),
            (this.dimensions = new p({
              wrapper: e,
              content: t,
              autoResize: f,
            })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
              !1
            ),
            (this.virtualScroll = new b(i, {
              touchMultiplier: w,
              wheelMultiplier: y,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
              !1
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName();
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = e)
            : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop();
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped ||
            ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          const t = e - (this.time || e);
          (this.time = e), this.animate.advance(0.001 * t);
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: s = !1,
            lock: i = !1,
            duration: r = this.options.duration,
            easing: o = this.options.easing,
            lerp: n = this.options.lerp,
            onStart: l,
            onComplete: a,
            force: c = !1,
            programmatic: h = !0,
            userData: d = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || c) {
            if ("string" == typeof e && ["top", "left", "start"].includes(e))
              e = 0;
            else if (
              "string" == typeof e &&
              ["bottom", "right", "end"].includes(e)
            )
              e = this.limit;
            else {
              let s;
              if (
                ("string" == typeof e
                  ? (s = document.querySelector(e))
                  : e instanceof HTMLElement &&
                    (null == e ? void 0 : e.nodeType) &&
                    (s = e),
                s)
              ) {
                if (this.options.wrapper !== window) {
                  const e = this.rootElement.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                const i = s.getBoundingClientRect();
                e = (this.isHorizontal ? i.left : i.top) + this.animatedScroll;
              }
            }
            if (
              "number" == typeof e &&
              ((e += t),
              (e = Math.round(e)),
              this.options.infinite
                ? h && (this.targetScroll = this.animatedScroll = this.scroll)
                : (e = u(0, e, this.limit)),
              e !== this.targetScroll)
            ) {
              if (((this.userData = d), s))
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  null == a || a(this),
                  void (this.userData = {})
                );
              h || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: r,
                  easing: o,
                  lerp: n,
                  onStart: () => {
                    i && (this.isLocked = !0),
                      (this.isScrolling = "smooth"),
                      null == l || l(this);
                  },
                  onUpdate: (e, t) => {
                    (this.isScrolling = "smooth"),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      h && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        null == a || a(this),
                        (this.userData = {}),
                        this.preventNextNativeScrollEvent());
                  },
                });
            }
          }
        }
        preventNextNativeScrollEvent() {
          (this.__preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              delete this.__preventNextNativeScrollEvent;
            });
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e &&
            ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e &&
            ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e &&
            ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return "smooth" === this.isScrolling;
        }
        get className() {
          let e = "lenis";
          return (
            this.isStopped && (e += " lenis-stopped"),
            this.isLocked && (e += " lenis-locked"),
            this.isScrolling && (e += " lenis-scrolling"),
            "smooth" === this.isScrolling && (e += " lenis-smooth"),
            e
          );
        }
        updateClassName() {
          this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim());
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, "")
            .trim();
        }
      }
      class y extends a {
        constructor(e) {
          super("smooth"),
            (this.luge = e),
            (window.hasSmoothScroll = !1),
            (e.smoothscroll = {});
        }
        init() {
          super.init(),
            (this.element = document.documentElement),
            (this.hasSmooth = this.element.hasAttribute("data-lg-smooth")),
            this.hasSmooth &&
              ((window.hasSmoothScroll = !0),
              (this.lenis = new w()),
              this.lenis.on("scroll", () => {
                l.updateScroll();
              }),
              (this.luge.smoothscroll.lenis = this.lenis),
              document.documentElement.classList.add("has-smooth-scroll"),
              this.luge.ticker.add(this.lenis.raf, this.lenis));
        }
      }
      class f extends a {
        constructor(e) {
          super("lottie"),
            (this.luge = e),
            (this.elements = []),
            (this.doneLoad = null),
            (this.onViewportIntersect = this.onViewportIntersect.bind(this)),
            (this.onScrollProgress = this.onScrollProgress.bind(this)),
            (e.lottie = { deferInit: this.deferInit.bind(this) });
        }
        init() {
          super.init(),
            "object" == typeof lottie &&
              (this.luge.lifecycle.add("pageInit", this.pageInit.bind(this)),
              this.luge.lifecycle.add("pageLoad", this.pageLoad.bind(this)),
              this.luge.lifecycle.add("pageKill", this.pageKill.bind(this)),
              this.luge.lifecycle.add("reveal", this.reveal.bind(this))),
            this.bindEvents();
        }
        deferInit() {
          "object" == typeof lottie &&
            (this.pageInit(() => {}),
            this.luge.lifecycle.add("pageKill", this.pageKill.bind(this)),
            this.luge.lifecycle.add("reveal", this.reveal.bind(this)),
            this.luge.scrollobserver.updateHandler());
        }
        setAttributes() {
          this.pluginAttributes = {
            root: String,
            autoplay: Boolean,
            scroll: Boolean,
            loop: Boolean,
            loopFrame: [Number, 0],
            persistent: Boolean,
            reverse: Boolean,
            required: Boolean,
            force: Boolean,
            lazy: Boolean,
            renderer: [String, this.luge._settings.lottie.renderer],
            subframe: [Boolean, this.luge._settings.lottie.subFrame],
          };
        }
        bindEvents() {
          this.luge.emitter.on("update", this.updateHandler, this);
        }
        updateHandler() {
          this.addElements(), this.reveal(() => {});
        }
        pageLoad(e) {
          let t = !1;
          this.elements.length > 0 &&
            this.elements.forEach((e) => {
              e.luge.lottie.required && !e.player.isLoaded && (t = !0);
            }),
            t ? (this.doneLoad = e) : e();
        }
        pageInit(e) {
          this.addElements(), e();
        }
        addElements() {
          const e = this;
          (this.elements = document.querySelectorAll("[data-lg-lottie]")),
            (this.toAutoplay = []),
            (this.toLoad = 0),
            (this.requireds = 0),
            this.elements.forEach((t) => {
              if (!t.player) {
                const s = this.getAttributes(t);
                this.luge.scrollobserver.add(t),
                  s.lazy
                    ? t.addEventListener(
                        "viewportintersect",
                        e.onViewportIntersect
                      )
                    : (e.initPlayer(t),
                      t.addEventListener("revealin", e.play),
                      s.persistent ||
                        t.addEventListener(
                          "viewportintersect",
                          e.onViewportIntersect
                        ));
              }
            });
        }
        pageKill(e) {
          const t = this;
          let s = [];
          const i = document.querySelector("[data-lg-page] + [data-lg-page]");
          (s = i ? i.querySelectorAll("[data-lg-lottie]") : this.elements),
            s.forEach((e) => {
              e.removeEventListener("revealin", t.play),
                e.luge.lottie.persistent ||
                  e.removeEventListener(
                    "viewportintersect",
                    t.onViewportIntersect
                  ),
                e.hasAttribute("data-lg-lottie-scroll") &&
                  e.removeEventListener("scrollprogress", t.onScrollProgress),
                e.player && (e.player.destroy(), delete e.player);
            }),
            e();
        }
        reveal(e) {
          this.toAutoplay.forEach((e) => {
            "in" === e.viewportPosition && e.play();
          }),
            e();
        }
        onViewportIntersect(e) {
          const t = e.target;
          t.player
            ? t.luge.lottie.force ||
              ("in" === t.viewportPosition
                ? t.player.isPaused &&
                  (t.player.scrollPaused ||
                    t.hasAttribute("data-lg-lottie-autoplay")) &&
                  ((t.player.scrollPaused = !1), t.play())
                : t.player.isPaused ||
                  ((t.player.scrollPaused = !0), t.pause()))
            : "in" === t.viewportPosition && this.initLazy(t);
        }
        initLazy(e) {
          this.initPlayer(e),
            e.player.addEventListener(
              "DOMLoaded",
              () => {
                e.play();
              },
              { once: !0 }
            );
        }
        initPlayer(e) {
          const t = this;
          this.toLoad++;
          const s = this.getAttributes(e);
          (e.player = lottie.loadAnimation({
            container: e,
            renderer: s.renderer,
            loop: s.loop && !s.reverse,
            autoplay: !1,
            path: s.root,
          })),
            void 0 !== s.subframe && e.player.setSubframe(s.subframe),
            e.classList.add("lg-lottie"),
            this.setPlayerStateClasses(e, !1),
            s.autoplay && this.toAutoplay.push(e),
            s.required && this.requireds++,
            s.scroll
              ? e.addEventListener("scrollprogress", this.onScrollProgress)
              : s.loop &&
                e.player.addEventListener("enterFrame", function () {
                  if (e.player.totalFrames > 0) {
                    const i = Math.round(e.player.currentFrame);
                    1 === e.player.playDirection
                      ? i === e.player.totalFrames - 1 &&
                        (e.player.pause(),
                        t.luge.ticker.nextTick(
                          s.reverse
                            ? () => {
                                e.player.setDirection(-1),
                                  e.player.goToAndPlay(
                                    e.player.totalFrames,
                                    !0
                                  ),
                                  t.setPlayerStateClasses(e, "backward");
                              }
                            : () => {
                                e.player.goToAndPlay(s.loopFrame, !0);
                              },
                          t
                        ))
                      : i === s.loopFrame &&
                        (e.player.pause(),
                        t.luge.ticker.nextTick(() => {
                          e.player.setDirection(1),
                            e.player.goToAndPlay(s.loopFrame, !0),
                            t.setPlayerStateClasses(e, "forward");
                        }, t));
                  }
                }),
            (e.play = this.play.bind(this, e)),
            (e.pause = this.pause.bind(this, e)),
            (e.stop = this.stop.bind(this, e)),
            e.player.addEventListener(
              "DOMLoaded",
              () => {
                e.classList.add("is-loaded"), t.playerLoaded(s.required);
              },
              { once: !0 }
            );
        }
        setPlayerStateClasses(e, t) {
          e.classList.remove(
            "is-playing",
            "is-playing-forward",
            "is-playing-backward",
            "is-paused"
          ),
            t
              ? (e.classList.add("is-playing"),
                e.classList.add(
                  "backward" === t
                    ? "is-playing-backward"
                    : "is-playing-forward"
                ))
              : e.classList.add("is-paused");
        }
        playerLoaded(e = !1) {
          this.toLoad--,
            e && this.requireds--,
            0 === this.requireds &&
              "function" == typeof this.doneLoad &&
              (this.doneLoad(), (this.doneLoad = null));
        }
        play(e) {
          e &&
            e.player &&
            (e.player.play(), this.setPlayerStateClasses(e, "forward"));
        }
        pause(e) {
          e &&
            e.player &&
            (e.player.pause(), this.setPlayerStateClasses(e, !1));
        }
        stop(e) {
          e && e.player && (e.player.stop(), this.setPlayerStateClasses(e, !1));
        }
        onScrollProgress(e) {
          const t = e.target;
          t.player.goToAndStop(t.player.totalFrames * t.scrollProgress, !0);
        }
      }
      class S extends a {
        constructor(e) {
          super("mouse"),
            (this.luge = e),
            (this.elements = []),
            (this.mouse = { x: window.mouseX, y: window.mouseY }),
            (window.mouseSpeed = 0);
        }
        init() {
          super.init(),
            this.luge.lifecycle.add("pageInit", this.pageInit.bind(this)),
            this.luge.lifecycle.add("pageKill", this.pageKill.bind(this)),
            this.luge.ticker.add(this.tick, this),
            this.getMouseMovement(),
            this.bindEvents();
        }
        setAttributes() {
          this.pluginAttributes = {
            root: String,
            inertia: [String, this.luge._settings.mouse.inertia],
          };
        }
        getAttributes(e) {
          const t = super.getAttributes(e);
          if (t.inertia) {
            const e = t.inertia.match(
              /\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m
            );
            (t.inertia = e
              ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random()
              : Number(t.inertia)),
              (t.inertia = Math.max(Math.min(t.inertia, 0.99), 0));
          }
          return t;
        }
        bindEvents() {
          this.luge.emitter.on("update", this.updateHandler, this);
        }
        updateHandler() {
          this.addElements();
        }
        pageInit(e) {
          this.addElements(), e();
        }
        addElements() {
          const e = document.querySelectorAll("[data-lg-mouse]"),
            t = this;
          e.forEach((e) => {
            t.addElement(e);
          });
        }
        addElement(e) {
          this.elements.includes(e) ||
            (this.getAttributes(e),
            this.luge.mouseobserver.add(e),
            (e.luge.mouse.smoothX = 0),
            (e.luge.mouse.smoothY = 0),
            (e.luge.mouse.smoothProgressX = 0),
            (e.luge.mouse.smoothProgressY = 0),
            this.elements.push(e));
        }
        removeElement(e) {
          this.luge.mouseobserver.remove(e);
        }
        pageKill(e) {
          const t = this;
          this.elements.forEach((e) => {
            t.removeElement(e);
          }),
            (this.elements = []),
            e();
        }
        getMouseMovement() {
          const e = this.mouse.x - window.mouseX,
            t = this.mouse.y - window.mouseY,
            s = Math.hypot(e, t);
          if (
            ((window.mouseSpeed += 0.5 * (s - window.mouseSpeed)),
            window.mouseSpeed < 0.001 && (window.mouseSpeed = 0),
            s > 1)
          ) {
            const s = Math.atan2(t, e) * (180 / Math.PI) + 180;
            (window.mouseAngle = s),
              (window.mouseDirection =
                s >= 45 && s < 135
                  ? "down"
                  : s >= 135 && s < 225
                  ? "left"
                  : s >= 225 && s < 315
                  ? "up"
                  : "right");
          }
          (this.mouse = { x: window.mouseX, y: window.mouseY }),
            setTimeout(this.getMouseMovement.bind(this), 20);
        }
        tick() {
          this.elements.forEach((e) => {
            const t = e.luge.mouse;
            if (t.x)
              if (t.inertia) {
                (t.smoothX += (t.x - t.smoothX) * t.inertia),
                  (t.smoothY += (t.y - t.smoothY) * t.inertia),
                  (t.smoothProgressX +=
                    (t.progressX - t.smoothProgressX) * t.inertia),
                  (t.smoothProgressY +=
                    (t.progressY - t.smoothProgressY) * t.inertia),
                  e.style.setProperty("--mouse-x", t.smoothX),
                  e.style.setProperty("--mouse-y", t.smoothY),
                  e.style.setProperty("--mouse-progress-x", t.smoothProgressX),
                  e.style.setProperty("--mouse-progress-y", t.smoothProgressY);
                const s = Math.round(1e3 * (t.x - t.smoothX)) / 1e3,
                  i = Math.round(1e3 * (t.y - t.smoothY)) / 1e3;
                e.style.setProperty("--abs-diff-x", Math.abs(s)),
                  e.style.setProperty("--diff-x", s),
                  e.style.setProperty("--abs-diff-y", Math.abs(i)),
                  e.style.setProperty("--diff-y", i);
              } else
                e.style.setProperty("--mouse-x", t.x),
                  e.style.setProperty("--mouse-y", t.y),
                  e.style.setProperty("--mouse-progress-x", t.progressX),
                  e.style.setProperty("--mouse-progress-y", t.progressY);
          });
        }
      }
      class E extends a {
        constructor(e) {
          super("parallax"),
            (this.luge = e),
            (this.elements = []),
            (this.onScrollProgress = this.onScrollProgress.bind(this));
        }
        init() {
          super.init(),
            this.luge.lifecycle.add("pageInit", this.pageInit.bind(this), 30),
            this.luge.lifecycle.add("pageKill", this.pageKill.bind(this)),
            this.luge.ticker.add(this.tick, this),
            this.bindEvents();
        }
        setAttributes() {
          this.pluginAttributes = {
            root: String,
            disable: String,
            amplitude: [String, 1],
            anchor: String,
            inertia: [String, this.luge._settings.parallax.inertia],
          };
        }
        getAttributes(e) {
          const t = super.getAttributes(e);
          if (t.amplitude) {
            const e = t.amplitude.match(
              /\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m
            );
            t.amplitude = e
              ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random()
              : Number(t.amplitude);
          }
          return t;
        }
        bindEvents() {
          this.luge.emitter.on("update", this.updateHandler, this);
        }
        updateHandler() {
          this.addElements();
        }
        pageInit(e) {
          this.addElements(), e();
        }
        pageKill(e) {
          const t = this;
          this.elements.forEach((e) => {
            t.removeElement(e);
          }),
            (this.elements = []),
            e();
        }
        addElements() {
          document.querySelectorAll("[data-lg-parallax]").forEach((e) => {
            const t = this.getAttributes(e).disable;
            let s = !0;
            const i = this.luge.browser || {};
            t &&
              i.is &&
              (("desktop" === t && i.is("desktop")) ||
                ("handheld" === t && !i.is("desktop")) ||
                ("mobile" === t && i.is("mobile")) ||
                ("tablet" === t && i.is("tablet"))) &&
              (s = !1),
              s && this.addElement(e);
          });
        }
        addElement(e) {
          if (!this.elements.includes(e)) {
            if (
              (this.luge.scrollobserver.add(e),
              "child" === e.luge.parallax.root)
            ) {
              e.style.overflow = "hidden";
              const t = e.children;
              let s = null;
              for (let e = 0; e < t.length; e++)
                if ("SOURCE" !== t[e].tagName) {
                  s = t[e];
                  break;
                }
              s && (e.luge.parallax.child = s);
            }
            (e.luge.parallax.movement = 0),
              (e.luge.parallax.smoothMovement = 0),
              this.elements.push(e),
              this.luge.ticker.nextTick(() => {
                e.addEventListener("scrollprogress", this.onScrollProgress),
                  this.moveElement(e);
              });
          }
        }
        removeElement(e) {
          this.luge.scrollobserver.remove(e),
            e.removeEventListener("scrollprogress", this.onScrollProgress);
        }
        onScrollProgress(e) {
          this.moveElement(e.target);
        }
        moveElement(e) {
          let t = 0;
          (t =
            e.scrollStart < 0 ? -e.scrollProgress : 1 - 2 * e.scrollProgress),
            "bottom" === e.luge.parallax.anchor
              ? (t += 1)
              : "top" === e.luge.parallax.anchor && (t -= 1),
            (e.luge.parallax.movement =
              "child" === e.luge.parallax.root
                ? 5 * e.luge.parallax.amplitude * t
                : (e.clientHeight * t * e.luge.parallax.amplitude) / 2);
        }
        tick() {
          this.elements.forEach((e) => {
            (e.luge.parallax.smoothMovement +=
              (e.luge.parallax.movement - e.luge.parallax.smoothMovement) *
              e.luge.parallax.inertia),
              "child" === e.luge.parallax.root && e.luge.parallax.child
                ? (e.luge.parallax.child.style.transform =
                    "translate3d(0, " +
                    e.luge.parallax.smoothMovement +
                    "%, 0) scale(1." +
                    String(Math.abs(e.luge.parallax.amplitude)).replace(
                      ".",
                      ""
                    ) +
                    ")")
                : (e.style.transform =
                    "translate3d(0, " +
                    e.luge.parallax.smoothMovement +
                    "px, 0)");
          });
        }
      }
      const k = {
          "Amazon Silk": "amazon_silk",
          "Android Browser": "android",
          Bada: "bada",
          BlackBerry: "blackberry",
          Chrome: "chrome",
          Chromium: "chromium",
          Electron: "electron",
          Epiphany: "epiphany",
          Firefox: "firefox",
          Focus: "focus",
          Generic: "generic",
          "Google Search": "google_search",
          Googlebot: "googlebot",
          "Internet Explorer": "ie",
          "K-Meleon": "k_meleon",
          Maxthon: "maxthon",
          "Microsoft Edge": "edge",
          "MZ Browser": "mz",
          "NAVER Whale Browser": "naver",
          Opera: "opera",
          "Opera Coast": "opera_coast",
          PhantomJS: "phantomjs",
          Puffin: "puffin",
          QupZilla: "qupzilla",
          QQ: "qq",
          QQLite: "qqlite",
          Safari: "safari",
          Sailfish: "sailfish",
          "Samsung Internet for Android": "samsung_internet",
          SeaMonkey: "seamonkey",
          Sleipnir: "sleipnir",
          Swing: "swing",
          Tizen: "tizen",
          "UC Browser": "uc",
          Vivaldi: "vivaldi",
          "WebOS Browser": "webos",
          WeChat: "wechat",
          "Yandex Browser": "yandex",
          Roku: "roku",
        },
        M = {
          amazon_silk: "Amazon Silk",
          android: "Android Browser",
          bada: "Bada",
          blackberry: "BlackBerry",
          chrome: "Chrome",
          chromium: "Chromium",
          electron: "Electron",
          epiphany: "Epiphany",
          firefox: "Firefox",
          focus: "Focus",
          generic: "Generic",
          googlebot: "Googlebot",
          google_search: "Google Search",
          ie: "Internet Explorer",
          k_meleon: "K-Meleon",
          maxthon: "Maxthon",
          edge: "Microsoft Edge",
          mz: "MZ Browser",
          naver: "NAVER Whale Browser",
          opera: "Opera",
          opera_coast: "Opera Coast",
          phantomjs: "PhantomJS",
          puffin: "Puffin",
          qupzilla: "QupZilla",
          qq: "QQ Browser",
          qqlite: "QQ Browser Lite",
          safari: "Safari",
          sailfish: "Sailfish",
          samsung_internet: "Samsung Internet for Android",
          seamonkey: "SeaMonkey",
          sleipnir: "Sleipnir",
          swing: "Swing",
          tizen: "Tizen",
          uc: "UC Browser",
          vivaldi: "Vivaldi",
          webos: "WebOS Browser",
          wechat: "WeChat",
          yandex: "Yandex Browser",
        },
        T = {
          tablet: "tablet",
          mobile: "mobile",
          desktop: "desktop",
          tv: "tv",
        },
        x = {
          WindowsPhone: "Windows Phone",
          Windows: "Windows",
          MacOS: "macOS",
          iOS: "iOS",
          Android: "Android",
          WebOS: "WebOS",
          BlackBerry: "BlackBerry",
          Bada: "Bada",
          Tizen: "Tizen",
          Linux: "Linux",
          ChromeOS: "Chrome OS",
          PlayStation4: "PlayStation 4",
          Roku: "Roku",
        },
        P = {
          EdgeHTML: "EdgeHTML",
          Blink: "Blink",
          Trident: "Trident",
          Presto: "Presto",
          Gecko: "Gecko",
          WebKit: "WebKit",
        };
      class L {
        static getFirstMatch(e, t) {
          const s = t.match(e);
          return (s && s.length > 0 && s[1]) || "";
        }
        static getSecondMatch(e, t) {
          const s = t.match(e);
          return (s && s.length > 1 && s[2]) || "";
        }
        static matchAndReturnConst(e, t, s) {
          if (e.test(t)) return s;
        }
        static getWindowsVersionName(e) {
          switch (e) {
            case "NT":
              return "NT";
            case "XP":
            case "NT 5.1":
              return "XP";
            case "NT 5.0":
              return "2000";
            case "NT 5.2":
              return "2003";
            case "NT 6.0":
              return "Vista";
            case "NT 6.1":
              return "7";
            case "NT 6.2":
              return "8";
            case "NT 6.3":
              return "8.1";
            case "NT 10.0":
              return "10";
            default:
              return;
          }
        }
        static getMacOSVersionName(e) {
          const t = e
            .split(".")
            .splice(0, 2)
            .map((e) => parseInt(e, 10) || 0);
          if ((t.push(0), 10 === t[0]))
            switch (t[1]) {
              case 5:
                return "Leopard";
              case 6:
                return "Snow Leopard";
              case 7:
                return "Lion";
              case 8:
                return "Mountain Lion";
              case 9:
                return "Mavericks";
              case 10:
                return "Yosemite";
              case 11:
                return "El Capitan";
              case 12:
                return "Sierra";
              case 13:
                return "High Sierra";
              case 14:
                return "Mojave";
              case 15:
                return "Catalina";
              default:
                return;
            }
        }
        static getAndroidVersionName(e) {
          const t = e
            .split(".")
            .splice(0, 2)
            .map((e) => parseInt(e, 10) || 0);
          if ((t.push(0), !(1 === t[0] && t[1] < 5)))
            return 1 === t[0] && t[1] < 6
              ? "Cupcake"
              : 1 === t[0] && t[1] >= 6
              ? "Donut"
              : 2 === t[0] && t[1] < 2
              ? "Eclair"
              : 2 === t[0] && 2 === t[1]
              ? "Froyo"
              : 2 === t[0] && t[1] > 2
              ? "Gingerbread"
              : 3 === t[0]
              ? "Honeycomb"
              : 4 === t[0] && t[1] < 1
              ? "Ice Cream Sandwich"
              : 4 === t[0] && t[1] < 4
              ? "Jelly Bean"
              : 4 === t[0] && t[1] >= 4
              ? "KitKat"
              : 5 === t[0]
              ? "Lollipop"
              : 6 === t[0]
              ? "Marshmallow"
              : 7 === t[0]
              ? "Nougat"
              : 8 === t[0]
              ? "Oreo"
              : 9 === t[0]
              ? "Pie"
              : void 0;
        }
        static getVersionPrecision(e) {
          return e.split(".").length;
        }
        static compareVersions(e, t, s = !1) {
          const i = L.getVersionPrecision(e),
            r = L.getVersionPrecision(t);
          let o = Math.max(i, r),
            n = 0;
          const l = L.map([e, t], (e) => {
            const t = o - L.getVersionPrecision(e),
              s = e + new Array(t + 1).join(".0");
            return L.map(
              s.split("."),
              (e) => new Array(20 - e.length).join("0") + e
            ).reverse();
          });
          for (s && (n = o - Math.min(i, r)), o -= 1; o >= n; ) {
            if (l[0][o] > l[1][o]) return 1;
            if (l[0][o] === l[1][o]) {
              if (o === n) return 0;
              o -= 1;
            } else if (l[0][o] < l[1][o]) return -1;
          }
        }
        static map(e, t) {
          const s = [];
          let i;
          if (Array.prototype.map) return Array.prototype.map.call(e, t);
          for (i = 0; i < e.length; i += 1) s.push(t(e[i]));
          return s;
        }
        static find(e, t) {
          let s, i;
          if (Array.prototype.find) return Array.prototype.find.call(e, t);
          for (s = 0, i = e.length; s < i; s += 1) {
            const i = e[s];
            if (t(i, s)) return i;
          }
        }
        static assign(e, ...t) {
          const s = e;
          let i, r;
          if (Object.assign) return Object.assign(e, ...t);
          for (i = 0, r = t.length; i < r; i += 1) {
            const e = t[i];
            "object" == typeof e &&
              null !== e &&
              Object.keys(e).forEach((t) => {
                s[t] = e[t];
              });
          }
          return e;
        }
        static getBrowserAlias(e) {
          return k[e];
        }
        static getBrowserTypeByAlias(e) {
          return M[e] || "";
        }
      }
      const C = /version\/(\d+(\.?_?\d+)+)/i,
        A = [
          {
            test: [/googlebot/i],
            describe(e) {
              const t = { name: "Googlebot" },
                s =
                  L.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) ||
                  L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/opera/i],
            describe(e) {
              const t = { name: "Opera" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/opr\/|opios/i],
            describe(e) {
              const t = { name: "Opera" },
                s =
                  L.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) ||
                  L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/SamsungBrowser/i],
            describe(e) {
              const t = { name: "Samsung Internet for Android" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(
                    /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  );
              return s && (t.version = s), t;
            },
          },
          {
            test: [/Whale/i],
            describe(e) {
              const t = { name: "NAVER Whale Browser" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/MZBrowser/i],
            describe(e) {
              const t = { name: "MZ Browser" },
                s =
                  L.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) ||
                  L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/focus/i],
            describe(e) {
              const t = { name: "Focus" },
                s =
                  L.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) ||
                  L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/swing/i],
            describe(e) {
              const t = { name: "Swing" },
                s =
                  L.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) ||
                  L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/coast/i],
            describe(e) {
              const t = { name: "Opera Coast" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/opt\/\d+(?:.?_?\d+)+/i],
            describe(e) {
              const t = { name: "Opera Touch" },
                s =
                  L.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                  L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/yabrowser/i],
            describe(e) {
              const t = { name: "Yandex Browser" },
                s =
                  L.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                  L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/ucbrowser/i],
            describe(e) {
              const t = { name: "UC Browser" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/Maxthon|mxios/i],
            describe(e) {
              const t = { name: "Maxthon" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/epiphany/i],
            describe(e) {
              const t = { name: "Epiphany" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/puffin/i],
            describe(e) {
              const t = { name: "Puffin" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/sleipnir/i],
            describe(e) {
              const t = { name: "Sleipnir" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/k-meleon/i],
            describe(e) {
              const t = { name: "K-Meleon" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/micromessenger/i],
            describe(e) {
              const t = { name: "WeChat" },
                s =
                  L.getFirstMatch(
                    /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  ) || L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/qqbrowser/i],
            describe(e) {
              const t = {
                  name: /qqbrowserlite/i.test(e)
                    ? "QQ Browser Lite"
                    : "QQ Browser",
                },
                s =
                  L.getFirstMatch(
                    /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                    e
                  ) || L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/msie|trident/i],
            describe(e) {
              const t = { name: "Internet Explorer" },
                s = L.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/\sedg\//i],
            describe(e) {
              const t = { name: "Microsoft Edge" },
                s = L.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/edg([ea]|ios)/i],
            describe(e) {
              const t = { name: "Microsoft Edge" },
                s = L.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/vivaldi/i],
            describe(e) {
              const t = { name: "Vivaldi" },
                s = L.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/seamonkey/i],
            describe(e) {
              const t = { name: "SeaMonkey" },
                s = L.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/sailfish/i],
            describe(e) {
              const t = { name: "Sailfish" },
                s = L.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/silk/i],
            describe(e) {
              const t = { name: "Amazon Silk" },
                s = L.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/phantom/i],
            describe(e) {
              const t = { name: "PhantomJS" },
                s = L.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/slimerjs/i],
            describe(e) {
              const t = { name: "SlimerJS" },
                s = L.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(e) {
              const t = { name: "BlackBerry" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/(web|hpw)[o0]s/i],
            describe(e) {
              const t = { name: "WebOS Browser" },
                s =
                  L.getFirstMatch(C, e) ||
                  L.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/bada/i],
            describe(e) {
              const t = { name: "Bada" },
                s = L.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/tizen/i],
            describe(e) {
              const t = { name: "Tizen" },
                s =
                  L.getFirstMatch(
                    /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                    e
                  ) || L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/qupzilla/i],
            describe(e) {
              const t = { name: "QupZilla" },
                s =
                  L.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                  L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/firefox|iceweasel|fxios/i],
            describe(e) {
              const t = { name: "Firefox" },
                s = L.getFirstMatch(
                  /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                  e
                );
              return s && (t.version = s), t;
            },
          },
          {
            test: [/electron/i],
            describe(e) {
              const t = { name: "Electron" },
                s = L.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/MiuiBrowser/i],
            describe(e) {
              const t = { name: "Miui" },
                s = L.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/chromium/i],
            describe(e) {
              const t = { name: "Chromium" },
                s =
                  L.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                  L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/chrome|crios|crmo/i],
            describe(e) {
              const t = { name: "Chrome" },
                s = L.getFirstMatch(
                  /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                  e
                );
              return s && (t.version = s), t;
            },
          },
          {
            test: [/GSA/i],
            describe(e) {
              const t = { name: "Google Search" },
                s = L.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test(e) {
              const t = !e.test(/like android/i),
                s = e.test(/android/i);
              return t && s;
            },
            describe(e) {
              const t = { name: "Android Browser" },
                s = L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/playstation 4/i],
            describe(e) {
              const t = { name: "PlayStation 4" },
                s = L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/safari|applewebkit/i],
            describe(e) {
              const t = { name: "Safari" },
                s = L.getFirstMatch(C, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/.*/i],
            describe(e) {
              const t =
                -1 !== e.search("\\(")
                  ? /^(.*)\/(.*)[ \t]\((.*)/
                  : /^(.*)\/(.*) /;
              return {
                name: L.getFirstMatch(t, e),
                version: L.getSecondMatch(t, e),
              };
            },
          },
        ];
      var O = [
          {
            test: [/Roku\/DVP/],
            describe(e) {
              const t = L.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
              return { name: x.Roku, version: t };
            },
          },
          {
            test: [/windows phone/i],
            describe(e) {
              const t = L.getFirstMatch(
                /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                e
              );
              return { name: x.WindowsPhone, version: t };
            },
          },
          {
            test: [/windows /i],
            describe(e) {
              const t = L.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                s = L.getWindowsVersionName(t);
              return { name: x.Windows, version: t, versionName: s };
            },
          },
          {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe(e) {
              const t = { name: x.iOS },
                s = L.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/macintosh/i],
            describe(e) {
              const t = L.getFirstMatch(
                  /mac os x (\d+(\.?_?\d+)+)/i,
                  e
                ).replace(/[_\s]/g, "."),
                s = L.getMacOSVersionName(t),
                i = { name: x.MacOS, version: t };
              return s && (i.versionName = s), i;
            },
          },
          {
            test: [/(ipod|iphone|ipad)/i],
            describe(e) {
              const t = L.getFirstMatch(
                /os (\d+([_\s]\d+)*) like mac os x/i,
                e
              ).replace(/[_\s]/g, ".");
              return { name: x.iOS, version: t };
            },
          },
          {
            test(e) {
              const t = !e.test(/like android/i),
                s = e.test(/android/i);
              return t && s;
            },
            describe(e) {
              const t = L.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                s = L.getAndroidVersionName(t),
                i = { name: x.Android, version: t };
              return s && (i.versionName = s), i;
            },
          },
          {
            test: [/(web|hpw)[o0]s/i],
            describe(e) {
              const t = L.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                s = { name: x.WebOS };
              return t && t.length && (s.version = t), s;
            },
          },
          {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(e) {
              const t =
                L.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) ||
                L.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) ||
                L.getFirstMatch(/\bbb(\d+)/i, e);
              return { name: x.BlackBerry, version: t };
            },
          },
          {
            test: [/bada/i],
            describe(e) {
              const t = L.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
              return { name: x.Bada, version: t };
            },
          },
          {
            test: [/tizen/i],
            describe(e) {
              const t = L.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
              return { name: x.Tizen, version: t };
            },
          },
          { test: [/linux/i], describe: () => ({ name: x.Linux }) },
          { test: [/CrOS/], describe: () => ({ name: x.ChromeOS }) },
          {
            test: [/PlayStation 4/],
            describe(e) {
              const t = L.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
              return { name: x.PlayStation4, version: t };
            },
          },
        ],
        B = [
          {
            test: [/googlebot/i],
            describe: () => ({ type: "bot", vendor: "Google" }),
          },
          {
            test: [/huawei/i],
            describe(e) {
              const t = L.getFirstMatch(/(can-l01)/i, e) && "Nova",
                s = { type: T.mobile, vendor: "Huawei" };
              return t && (s.model = t), s;
            },
          },
          {
            test: [/nexus\s*(?:7|8|9|10).*/i],
            describe: () => ({ type: T.tablet, vendor: "Nexus" }),
          },
          {
            test: [/ipad/i],
            describe: () => ({
              type: T.tablet,
              vendor: "Apple",
              model: "iPad",
            }),
          },
          {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: () => ({
              type: T.tablet,
              vendor: "Apple",
              model: "iPad",
            }),
          },
          {
            test: [/kftt build/i],
            describe: () => ({
              type: T.tablet,
              vendor: "Amazon",
              model: "Kindle Fire HD 7",
            }),
          },
          {
            test: [/silk/i],
            describe: () => ({ type: T.tablet, vendor: "Amazon" }),
          },
          { test: [/tablet(?! pc)/i], describe: () => ({ type: T.tablet }) },
          {
            test(e) {
              const t = e.test(/ipod|iphone/i),
                s = e.test(/like (ipod|iphone)/i);
              return t && !s;
            },
            describe(e) {
              const t = L.getFirstMatch(/(ipod|iphone)/i, e);
              return { type: T.mobile, vendor: "Apple", model: t };
            },
          },
          {
            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
            describe: () => ({ type: T.mobile, vendor: "Nexus" }),
          },
          { test: [/[^-]mobi/i], describe: () => ({ type: T.mobile }) },
          {
            test: (e) => "blackberry" === e.getBrowserName(!0),
            describe: () => ({ type: T.mobile, vendor: "BlackBerry" }),
          },
          {
            test: (e) => "bada" === e.getBrowserName(!0),
            describe: () => ({ type: T.mobile }),
          },
          {
            test: (e) => "windows phone" === e.getBrowserName(),
            describe: () => ({ type: T.mobile, vendor: "Microsoft" }),
          },
          {
            test(e) {
              const t = Number(String(e.getOSVersion()).split(".")[0]);
              return "android" === e.getOSName(!0) && t >= 3;
            },
            describe: () => ({ type: T.tablet }),
          },
          {
            test: (e) => "android" === e.getOSName(!0),
            describe: () => ({ type: T.mobile }),
          },
          {
            test: (e) => "macos" === e.getOSName(!0),
            describe: () => ({ type: T.desktop, vendor: "Apple" }),
          },
          {
            test: (e) => "windows" === e.getOSName(!0),
            describe: () => ({ type: T.desktop }),
          },
          {
            test: (e) => "linux" === e.getOSName(!0),
            describe: () => ({ type: T.desktop }),
          },
          {
            test: (e) => "playstation 4" === e.getOSName(!0),
            describe: () => ({ type: T.tv }),
          },
          {
            test: (e) => "roku" === e.getOSName(!0),
            describe: () => ({ type: T.tv }),
          },
        ],
        _ = [
          {
            test: (e) => "microsoft edge" === e.getBrowserName(!0),
            describe(e) {
              if (/\sedg\//i.test(e)) return { name: P.Blink };
              const t = L.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
              return { name: P.EdgeHTML, version: t };
            },
          },
          {
            test: [/trident/i],
            describe(e) {
              const t = { name: P.Trident },
                s = L.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: (e) => e.test(/presto/i),
            describe(e) {
              const t = { name: P.Presto },
                s = L.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test(e) {
              const t = e.test(/gecko/i),
                s = e.test(/like gecko/i);
              return t && !s;
            },
            describe(e) {
              const t = { name: P.Gecko },
                s = L.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/(apple)?webkit\/537\.36/i],
            describe: () => ({ name: P.Blink }),
          },
          {
            test: [/(apple)?webkit/i],
            describe(e) {
              const t = { name: P.WebKit },
                s = L.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
        ];
      class F {
        constructor(e, t = !1) {
          if (null == e || "" === e)
            throw new Error("UserAgent parameter can't be empty");
          (this._ua = e), (this.parsedResult = {}), !0 !== t && this.parse();
        }
        getUA() {
          return this._ua;
        }
        test(e) {
          return e.test(this._ua);
        }
        parseBrowser() {
          this.parsedResult.browser = {};
          const e = L.find(A, (e) => {
            if ("function" == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw new Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.browser = e.describe(this.getUA())),
            this.parsedResult.browser
          );
        }
        getBrowser() {
          return this.parsedResult.browser
            ? this.parsedResult.browser
            : this.parseBrowser();
        }
        getBrowserName(e) {
          return e
            ? String(this.getBrowser().name).toLowerCase() || ""
            : this.getBrowser().name || "";
        }
        getBrowserVersion() {
          return this.getBrowser().version;
        }
        getOS() {
          return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
        }
        parseOS() {
          this.parsedResult.os = {};
          const e = L.find(O, (e) => {
            if ("function" == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw new Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.os = e.describe(this.getUA())),
            this.parsedResult.os
          );
        }
        getOSName(e) {
          const { name: t } = this.getOS();
          return e ? String(t).toLowerCase() || "" : t || "";
        }
        getOSVersion() {
          return this.getOS().version;
        }
        getPlatform() {
          return this.parsedResult.platform
            ? this.parsedResult.platform
            : this.parsePlatform();
        }
        getPlatformType(e = !1) {
          const { type: t } = this.getPlatform();
          return e ? String(t).toLowerCase() || "" : t || "";
        }
        parsePlatform() {
          this.parsedResult.platform = {};
          const e = L.find(B, (e) => {
            if ("function" == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw new Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.platform = e.describe(this.getUA())),
            this.parsedResult.platform
          );
        }
        getEngine() {
          return this.parsedResult.engine
            ? this.parsedResult.engine
            : this.parseEngine();
        }
        getEngineName(e) {
          return e
            ? String(this.getEngine().name).toLowerCase() || ""
            : this.getEngine().name || "";
        }
        parseEngine() {
          this.parsedResult.engine = {};
          const e = L.find(_, (e) => {
            if ("function" == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw new Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.engine = e.describe(this.getUA())),
            this.parsedResult.engine
          );
        }
        parse() {
          return (
            this.parseBrowser(),
            this.parseOS(),
            this.parsePlatform(),
            this.parseEngine(),
            this
          );
        }
        getResult() {
          return L.assign({}, this.parsedResult);
        }
        satisfies(e) {
          const t = {};
          let s = 0;
          const i = {};
          let r = 0;
          if (
            (Object.keys(e).forEach((o) => {
              const n = e[o];
              "string" == typeof n
                ? ((i[o] = n), (r += 1))
                : "object" == typeof n && ((t[o] = n), (s += 1));
            }),
            s > 0)
          ) {
            const e = Object.keys(t),
              s = L.find(e, (e) => this.isOS(e));
            if (s) {
              const e = this.satisfies(t[s]);
              if (void 0 !== e) return e;
            }
            const i = L.find(e, (e) => this.isPlatform(e));
            if (i) {
              const e = this.satisfies(t[i]);
              if (void 0 !== e) return e;
            }
          }
          if (r > 0) {
            const e = Object.keys(i),
              t = L.find(e, (e) => this.isBrowser(e, !0));
            if (void 0 !== t) return this.compareVersion(i[t]);
          }
        }
        isBrowser(e, t = !1) {
          const s = this.getBrowserName().toLowerCase();
          let i = e.toLowerCase();
          const r = L.getBrowserTypeByAlias(i);
          return t && r && (i = r.toLowerCase()), i === s;
        }
        compareVersion(e) {
          let t = [0],
            s = e,
            i = !1;
          const r = this.getBrowserVersion();
          if ("string" == typeof r)
            return (
              ">" === e[0] || "<" === e[0]
                ? ((s = e.substr(1)),
                  "=" === e[1] ? ((i = !0), (s = e.substr(2))) : (t = []),
                  t.push(">" === e[0] ? 1 : -1))
                : "=" === e[0]
                ? (s = e.substr(1))
                : "~" === e[0] && ((i = !0), (s = e.substr(1))),
              t.indexOf(L.compareVersions(r, s, i)) > -1
            );
        }
        isOS(e) {
          return this.getOSName(!0) === String(e).toLowerCase();
        }
        isPlatform(e) {
          return this.getPlatformType(!0) === String(e).toLowerCase();
        }
        isEngine(e) {
          return this.getEngineName(!0) === String(e).toLowerCase();
        }
        is(e, t = !1) {
          return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
        }
        some(e = []) {
          return e.some((e) => this.is(e));
        }
      }
      var R = class {
        static getParser(e, t = !1) {
          if ("string" != typeof e)
            throw new Error("UserAgent should be a string");
          return new F(e, t);
        }
        static parse(e) {
          return new F(e).getResult();
        }
        static get BROWSER_MAP() {
          return M;
        }
        static get ENGINE_MAP() {
          return P;
        }
        static get OS_MAP() {
          return x;
        }
        static get PLATFORMS_MAP() {
          return T;
        }
      };
      class N {
        constructor(e) {
          const t = document.documentElement,
            s = R.getParser(window.navigator.userAgent);
          t.classList.add("is-" + s.getPlatformType()),
            (s.is("mobile") || s.is("tablet")) &&
              t.classList.add("is-handheld"),
            s.is("Safari") &&
              (t.classList.add("is-safari"),
              t.classList.add("is-safari-" + s.getBrowserVersion())),
            (e.browser = s);
        }
      }
      var z = new (class {
          constructor() {
            (this.elements = []), n.add("siteInit", this.init.bind(this), 20);
          }
          init(e) {
            this.createObserver(), e();
          }
          createObserver() {
            this.observer = new IntersectionObserver(
              this.intersectionCallback.bind(this),
              { threshold: [l.settings.intersection.threshold] }
            );
          }
          intersectionCallback(e) {
            e.forEach((e) => {
              const t = e.target;
              let s = "in";
              e.isIntersecting ||
                (s = e.boundingClientRect.y <= 0 ? "above" : "under"),
                t.luge.viewport.position !== s &&
                  ((t.luge.viewport.position = s),
                  t.dispatchEvent(new CustomEvent("viewportintersect")),
                  "in" === s
                    ? t.dispatchEvent(new CustomEvent("viewportin"))
                    : (t.dispatchEvent(new CustomEvent("viewportout")),
                      t.dispatchEvent(new CustomEvent("viewport" + s))));
            });
          }
          add(e) {
            this.observer.observe(e),
              (e.luge || (e.luge = {})) &&
                (e.luge = r.mergeDeep(e.luge, {
                  viewport: { position: "out" },
                }));
          }
          remove(e) {
            this.observer.unobserve(e);
          }
        })(),
        H = new (class {
          constructor() {
            (this.callbacks = []),
              (this.onceCallbacks = []),
              l.settings.ticker.external ||
                ((this.fps = 60),
                (this.fpsInterval = 1e3 / this.fps),
                (this.lastTickTime = null),
                requestAnimationFrame(this._tick.bind(this)));
          }
          add(e, t) {
            let s = !1;
            this.callbacks.forEach((i) => {
              i.cb === e && i.context === t && (s = !0);
            }),
              s || this.callbacks.push({ cb: e, context: t });
          }
          remove(e, t) {
            const s = this;
            this.callbacks.forEach((i, r) => {
              i.cb === e && i.context === t && delete s.callbacks[r];
            });
          }
          nextTick(e, t) {
            this.onceCallbacks.push({ cb: e, context: t });
          }
          _tick(e) {
            const t = e - this.lastTickTime;
            t > this.fpsInterval &&
              (this.tick(e), (this.lastTickTime = e - (t % this.fpsInterval))),
              l.settings.ticker.external ||
                requestAnimationFrame(this._tick.bind(this));
          }
          tick(e) {
            const t = this;
            this.callbacks.forEach((t) => {
              t.cb.apply(t.context, [e]);
            }),
              this.onceCallbacks.forEach((s, i) => {
                s.cb.apply(s.context, [e]), delete t.onceCallbacks[i];
              });
          }
        })(),
        I = new (class {
          constructor() {
            (this.elements = []),
              (this.elementsToBound = []),
              (this.timeouts = { scroll: null }),
              n.add("pageKill", this.pageKill.bind(this)),
              n.add("pageInit", this.init.bind(this), 20),
              H.add(this.tick, this),
              this.bindEvents();
          }
          bindEvents() {
            o.on("mouseMove", this.mouseHandler, this),
              o.on("resize", this.resizeHandler, this),
              o.on("update", this.updateHandler, this),
              o.on("scroll", this.scrollHandler, this);
          }
          pageKill(e) {
            (this.elements = []), (this.elementsToBound = []), e();
          }
          init(e) {
            this.getBoundingThrottle(), e();
          }
          resizeHandler() {
            this.getBoundingThrottle();
          }
          updateHandler() {
            H.nextTick(() => {
              this.getBoundingThrottle();
            }, this);
          }
          scrollHandler() {
            clearTimeout(this.timeouts.scroll),
              (this.timeouts.scroll = setTimeout(
                this.getBoundingThrottle.bind(this),
                75
              ));
          }
          mouseHandler() {
            const e = this;
            this.elements.forEach((t) => {
              e.setElementPosition(t);
            }),
              (window.mouseLastScrollTop = window.scrollTop);
          }
          getBoundingThrottle() {
            (this.elementsToBound = this.elements),
              H.nextTick(this.getBounding.bind(this));
          }
          getBounding() {
            this.elementsToBound.forEach((e) => {
              this.setElementBounding(e), this.setElementPosition(e);
            }),
              (this.elementsToBound = []);
          }
          setElementBounding(e) {
            const t = e.getAttribute("style");
            e.setAttribute("style", "");
            const s = e.getBoundingClientRect(),
              i = {
                anchor: { x: s.left, y: s.top + window.unifiedScrollTop },
                width: e.offsetWidth,
                height: e.offsetHeight,
              };
            (e.luge || (e.luge = {})) && (e.luge = r.mergeDeep(e.luge, i)),
              e.setAttribute("style", t);
          }
          setElementPosition(e) {
            if (e.luge && e.luge.anchor) {
              const t = {
                x: window.mouseX - e.luge.anchor.x,
                y: window.mouseY - e.luge.anchor.y + window.unifiedScrollTop,
              };
              (t.progressX = r.clamp(t.x / e.luge.width, 0, 1)),
                (t.progressY = r.clamp(t.y / e.luge.height, 0, 1)),
                (e.luge.mouse = r.mergeDeep(e.luge.mouse, t));
            }
          }
          add(e) {
            this.elements.includes(e) ||
              (this.elementsToBound.includes(e) || this.elementsToBound.push(e),
              this.elements.push(e));
          }
          remove(e) {
            this.elements.includes(e) &&
              this.elements.splice(this.elements.indexOf(e), 1),
              this.elementsToBound.includes(e) &&
                this.elementsToBound.splice(this.elementsToBound.indexOf(e), 1);
          }
          tick() {
            const e = this;
            0 != window.scrollTop - window.mouseLastScrollTop &&
              this.elements.forEach((t) => {
                e.setElementPosition(t);
              });
          }
        })(),
        q = new (class {
          constructor() {
            (this.elements = []),
              (this.elementsToBound = []),
              (this.elementsToCheck = []),
              (this.isUpdating = !1),
              this.setMaxScrollTop(),
              n.add("pageKill", this.pageKill.bind(this)),
              n.add("pageInit", this.init.bind(this), 20),
              this.bindEvents();
          }
          bindEvents() {
            o.on("resize", this.resizeHandler, this),
              o.on("scroll", this.scrollHandler, this),
              o.on("update", this.updateHandler, this, !1, 5);
          }
          pageKill(e) {
            (this.elements = []),
              (this.elementsToBound = []),
              (this.elementsToCheck = []),
              e();
          }
          init(e) {
            this.getBoundingThrottle(), this.checkElementsThrottle(), e();
          }
          resizeHandler() {
            this.getBoundingThrottle(), this.checkElementsThrottle();
          }
          scrollHandler() {
            this.checkElementsThrottle();
          }
          updateHandler() {
            (this.isUpdating = !0),
              H.nextTick(() => {
                this.getBoundingThrottle(), this.checkElementsThrottle();
              }, this);
          }
          setMaxScrollTop() {
            window.maxScrollTop =
              Math.max(
                document.body ? document.body.scrollHeight : 0,
                document.body ? document.body.offsetHeight : 0,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
              ) - window.innerHeight;
          }
          getBoundingThrottle() {
            this.setMaxScrollTop(),
              this.elements.forEach((e) => {
                this.elementsToBound.includes(e) ||
                  ((e.scrollProgress = 0), this.elementsToBound.push(e));
              }),
              H.nextTick(this.getBounding.bind(this));
          }
          getBounding() {
            this.elementsToBound.forEach((e) => {
              this.setElementBounding(e);
            }),
              (this.elementsToBound = []);
          }
          setElementBounding(e) {
            const t = e.getAttribute("style");
            e.setAttribute("style", "");
            const s = e.getBoundingClientRect();
            (e.scrollStart =
              s.top +
              window.unifiedScrollTop -
              window.innerHeight * e.scrollTriggerStart),
              (e.scrollEnd =
                e.scrollStart +
                e.clientHeight +
                window.innerHeight *
                  (e.scrollTriggerStart - e.scrollTriggerEnd)),
              (e.scrollEnd = Math.min(e.scrollEnd, window.maxScrollTop)),
              (e.scrollMiddle =
                e.scrollStart + (e.scrollEnd - e.scrollStart) / 2),
              e.setAttribute("style", t);
          }
          checkElementsThrottle() {
            this.elements.forEach((e) => {
              this.elementsToCheck.includes(e) || this.elementsToCheck.push(e);
            }),
              H.nextTick(this.checkElements.bind(this));
          }
          checkElements() {
            this.elementsToCheck.forEach((e) => {
              this.checkElement(e);
            }),
              (this.elementsToCheck = []),
              this.isUpdating &&
                (o.emit("afterScrollUpdate"), (this.isUpdating = !1));
          }
          checkElement(e) {
            const t = window.unifiedScrollTop;
            let s = "",
              i = 0;
            (i =
              e.scrollStart < 0 && !e.scrollStartForce
                ? Math.min(Math.max(t / e.scrollEnd, 0), 1)
                : Math.min(
                    Math.max(
                      (t - e.scrollStart) / (e.scrollEnd - e.scrollStart),
                      0
                    ),
                    1
                  )),
              isNaN(i) && (i = 0),
              (s =
                i <= 0 && e.scrollStart > 0
                  ? "under"
                  : i >= 1 && e.scrollEnd < window.maxScrollTop
                  ? "above"
                  : "in"),
              (e.scrollDirection = i > e.scrollProgress ? "down" : "up"),
              (e.scrollProgress = i),
              e.viewportPosition !== s
                ? ((e.viewportPosition = s),
                  e.dispatchEvent(new CustomEvent("viewportintersect")),
                  e.dispatchEvent(new CustomEvent("viewport" + s)),
                  "in" !== s && e.dispatchEvent(new CustomEvent("viewportout")),
                  e.dispatchEvent(new CustomEvent("scrollprogress")))
                : i > 0 &&
                  i < 1 &&
                  e.dispatchEvent(new CustomEvent("scrollprogress"));
          }
          add(e, t = 1, s = 0, i = !1) {
            this.elements.includes(e) ||
              ((e.scrollProgress = 0),
              (e.scrollTriggerStart = t),
              (e.scrollTriggerEnd = s),
              (e.scrollStartForce = i),
              this.elementsToBound.includes(e) ||
                (this.elementsToBound.push(e), this.elementsToCheck.push(e)),
              this.elements.push(e));
          }
          remove(e) {
            this.elements.includes(e) &&
              this.elements.splice(this.elements.indexOf(e), 1),
              this.elementsToBound.includes(e) &&
                this.elementsToBound.splice(this.elementsToBound.indexOf(e), 1),
              this.elementsToCheck.includes(e) &&
                this.elementsToCheck.splice(this.elementsToCheck.indexOf(e), 1);
          }
        })(),
        W = class {
          constructor() {
            (this.plugins = {}),
              (this.emitter = {
                emit: o.emit.bind(o),
                off: o.off.bind(o),
                on: o.on.bind(o),
                once: o.once.bind(o),
              }),
              (this.viewportobserver = {
                add: z.add.bind(z),
                remove: z.remove.bind(z),
              }),
              (this.lifecycle = {
                add: n.add.bind(n),
                refresh: n.cycle.bind(n, "refresh"),
                remove: n.remove.bind(n),
                debug: n.enableDebug.bind(n),
                _cycle: n.cycle.bind(n),
              }),
              (this.mouseobserver = {
                add: I.add.bind(I),
                remove: I.remove.bind(I),
              }),
              (this.scrollobserver = {
                add: q.add.bind(q),
                remove: q.remove.bind(q),
                updateHandler: q.updateHandler.bind(q),
              }),
              (this.ticker = {
                add: H.add.bind(H),
                nextTick: H.nextTick.bind(H),
                remove: H.remove.bind(H),
                tick: H.tick.bind(H),
              }),
              (this.settings = l.setSettings.bind(l));
          }
          init() {
            "loading" === document.readyState
              ? document.addEventListener(
                  "DOMContentLoaded",
                  n.cycle.bind(n, "load"),
                  { once: !0 }
                )
              : this.ticker.nextTick(() => {
                  n.cycle("load");
                }, null);
          }
          addPlugin(e, t) {
            this.plugins[e] = new t(this);
          }
          get _settings() {
            return l.settings;
          }
        };
    },
  },
]);
