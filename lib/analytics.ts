/**
 * PostHog, kept to the events the brief actually asks for (§13).
 *
 * Loading is deferred and the snippet is the standard one. Everything else on
 * the page is static, so this is the only third-party script on the site.
 *
 * `site_demo_submitted` from the brief is not implemented, and cannot be:
 * "Book a demo" hands off to WhatsApp, so there is no on-site submit to
 * observe. `site_demo_click` records intent; the booking itself is counted
 * from the WhatsApp inbox.
 */

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

/**
 * One delegated click listener reads `data-yk-event` off any element in the
 * tree. This is why no button on the site needs to be a client component.
 *
 * Scroll depth is reported once per section, per page view, via
 * IntersectionObserver rather than a scroll handler.
 */
export const analyticsBootstrap = `
(function () {
  if (!window.posthog) return;

  document.addEventListener('click', function (e) {
    var el = e.target instanceof Element ? e.target.closest('[data-yk-event]') : null;
    if (!el) return;
    window.posthog.capture(el.getAttribute('data-yk-event'), {
      path: window.location.pathname,
      label: (el.textContent || '').trim().slice(0, 60),
      href: el.getAttribute('href') || null
    });
  }, { capture: true });

  var seen = {};
  var sections = document.querySelectorAll('[data-yk-section]');
  if (!sections.length || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var name = entry.target.getAttribute('data-yk-section');
      if (seen[name]) return;
      seen[name] = 1;
      window.posthog.capture('site_section_view', {
        section: name,
        path: window.location.pathname
      });
      io.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
  sections.forEach(function (el) { io.observe(el); });
})();
`;
