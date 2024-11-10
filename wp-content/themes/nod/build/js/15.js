"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [5692],
  {
    5692: (e, t, i) => {
      i.r(t);
      var s = i(8432),
        o = i(1864),
        n = i(8520);
      window.plr.controllers.SiteHead = class extends o.c {
        init() {
          super.init(),
            (this.lines = []),
            (this.previousScrollTop = 0),
            (this.scrollDirection = "down"),
            (this.scrollHeadLimit = 0.075 * window.safeHeight),
            (this.waitToggle = !1),
            window.unifiedScrollTop > this.scrollHeadLimit &&
              this.el.classList.add("is-small"),
            luge.browser.is("desktop") && this.initLines();
        }
        bindEvents() {
          super.bindEvents(),
            this.on(this.refs.navToggle, "click", this.navToggle.bind(this)),
            luge.browser.is("desktop") &&
              (this.on(
                this.refs.link,
                "mouseenter",
                this.onLinkMouseEnter.bind(this)
              ),
              this.on(
                this.refs.link,
                "mouseleave",
                this.onLinkMouseLeave.bind(this)
              )),
            luge &&
              (luge.emitter.on(
                "beforePageFetch",
                this.beforeTransition.bind(this)
              ),
              luge.emitter.on(
                "pageTransition",
                this.onPageTransition.bind(this)
              ));
        }
        onResize() {
          s.Q.widthChanged &&
            ((this.scrollHeadLimit = 0.075 * window.safeHeight),
            this.initLines());
        }
        onScroll() {
          window.unifiedScrollTop !== this.previousScrollTop &&
            (this.scrollDirection =
              window.unifiedScrollTop > this.previousScrollTop ? "down" : "up");
          const e = document.body.classList;
          e.toggle(
            "is-nav-small",
            window.unifiedScrollTop > this.scrollHeadLimit
          ),
            e.toggle(
              "is-nav-hidden",
              "down" === this.scrollDirection && window.unifiedScrollTop > 100
            ),
            (this.previousScrollTop = window.unifiedScrollTop);
        }
        beforeTransition() {
          document.body.classList.contains("is-nav-opened") && this.navToggle();
        }
        onPageTransition(e) {
          this.refs.nav.querySelectorAll(".menu-item").forEach((t) => {
            const i = t.getAttribute("id");
            if (i) {
              const s = e.querySelector("#" + i);
              s && (t.className = s.className);
            }
          });
        }
        navToggle() {
          if (this.waitToggle) return;
          const { wrapper: e, wrapperInner: t, background: i } = this.refs,
            s = this.el.querySelectorAll(".js-item, .js-socials"),
            o = this.el.querySelector(".js-head");
          if (
            ((this.waitToggle = !0),
            document.body.classList.contains("is-nav-opened"))
          ) {
            document.body.classList.remove("is-nav-opened");
            const i = n.w$.timeline();
            i.set(e, { opacity: 1 }),
              i.set(t, { width: t.offsetWidth, height: t.offsetHeight }),
              i.to(e, {
                y: "-1.1112rem",
                height: 0,
                duration: 0.6,
                ease: "expo.inOut",
              }),
              i.call(() => {
                (e.style = ""), (t.style = ""), (this.waitToggle = !1);
              });
          } else {
            document.body.classList.add("is-nav-opened");
            const l = e.offsetWidth,
              a = e.offsetHeight,
              r = n.w$.timeline();
            r.call(() => {}),
              r.set(t, { width: t.offsetWidth, height: t.offsetHeight }),
              r.set(e, {
                y: "-4.1112rem",
                scaleX: 0.1,
                width: "3rem",
                height: "3rem",
              }),
              r.to(e, {
                y: 0,
                scaleX: 1,
                height: a,
                duration: 0.6,
                ease: "expo.inOut",
              }),
              r.to(e, { width: l, duration: 0.6, ease: "expo.inOut" }, 0.3),
              r.from(
                s,
                {
                  opacity: 0,
                  x: 60,
                  duration: 0.8,
                  ease: "expo.out",
                  stagger: 0.1,
                },
                0.5
              ),
              r.from(i, { scaleX: 0, duration: 1, ease: "expo.inOut" }, 0.2),
              r.from(o, { y: "100%", duration: 1, ease: "expo.inOut" }, 0.5),
              r.call(() => {
                (e.style = ""),
                  (t.style = ""),
                  (o.style = ""),
                  (i.style = ""),
                  s.forEach((e) => {
                    e.style = "";
                  }),
                  (this.waitToggle = !1);
              });
          }
        }
        initLines() {
          (this.lines = []),
            this.refs.line.forEach((e) => {
              e.style = "";
              const t = e.getBoundingClientRect(),
                i = t.width,
                s = t.height;
              (e.style.width = i + "px"), (e.style.height = s + "px");
              const o = {
                  p1: { x: i / 2, y: 0 },
                  p2: { x: i / 2, y: 0 },
                  ca: { x: i / 2, y: 0 },
                  cb: { x: i / 2, y: 0 },
                },
                n = e.querySelectorAll(".menu-item__path"),
                l = { el: e, points: o, paths: n, width: i, height: s };
              this.updateLine(l), this.lines.push(l);
            });
        }
        updateLine(e) {
          const { p1: t, p2: i, ca: s, cb: o } = e.points,
            n = e.paths,
            l = `M${t.x},${t.y} Q${s.x},${s.y} ${i.x},${i.y}`;
          n[0].setAttribute("d", l);
          const a = `M${t.x},${t.y} Q${o.x},${o.y} ${i.x},${i.y}`;
          n[1].setAttribute("d", a);
        }
        onLinkMouseEnter(e) {
          const t = e.currentTarget,
            i = this.refs.link.indexOf(t),
            s = this.lines[i],
            o = s.width,
            l = s.points,
            { p1: a, p2: r, ca: h, cb: d } = l,
            c = n.w$.timeline({
              onUpdate: () => {
                this.updateLine(s);
              },
            });
          c.to(a, { x: 0, ease: "power3.out", duration: 0.1 }, 0),
            c.to(r, { x: o, ease: "power3.out", duration: 0.1 }, 0),
            c.to(h, { y: -12, ease: "power3.out", duration: 0.1 }, 0),
            c.to(h, { y: 0, ease: "elastic.out(2, 0.25)", duration: 1.2 }, 0.1),
            c.to(d, { y: -6, ease: "power3.out", duration: 0.1 }, 0),
            c.to(d, { y: 0, ease: "elastic.out(2, 0.25)", duration: 1.2 }, 0.1);
        }
        onLinkMouseLeave(e) {
          const t = e.currentTarget,
            i = this.refs.link.indexOf(t),
            s = this.lines[i],
            o = s.width,
            l = s.points,
            { p1: a, p2: r } = l,
            h = n.w$.timeline({
              onUpdate: () => {
                this.updateLine(s);
              },
            });
          h.to(a, { x: o / 2, ease: "power3.out", duration: 0.1 }, 0),
            h.to(r, { x: o / 2, ease: "power3.out", duration: 0.1 }, 0);
        }
      };
    },
  },
]);
