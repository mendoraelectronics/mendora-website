(function () {
  var C = window.MENDORA_CONFIG || {};
  var $ = function (s) { return document.querySelector(s); };

  // Config-driven content
  if (C.stage) $('#stage').textContent = C.stage;
  if (C.showMilestones === false) $('#milestones').hidden = true;
  if (C.showFaq === false) { $('#faq').hidden = true; }
  if (C.contactEmail) {
    var p = $('#contact-email'); p.hidden = false;
    p.innerHTML = 'Or email <a href="mailto:' + C.contactEmail + '">' + C.contactEmail + '</a>';
    var f = $('#footer-email'); f.hidden = false; f.innerHTML = '<a href="mailto:' + C.contactEmail + '">' + C.contactEmail + '</a>';
  }
  if (C.pitchDeckUrl) { var d = $('#deck-link'); d.href = C.pitchDeckUrl; d.hidden = false; }
  if (C.privacyUrl) { var pv = $('#privacy-link'); pv.href = C.privacyUrl; pv.hidden = false; var fp = $('#footer-privacy'); fp.href = C.privacyUrl; fp.hidden = false; }
  $('#year').textContent = new Date().getFullYear();

  // Inquiry form — truthful states only
  var form = $('#inquiry'), status = $('#form-status'), submit = form.querySelector('button[type=submit]');
  var live = !!(C.formEndpoint && C.privacyUrl);
  function say(kind, text) { status.className = 'status ' + kind; status.textContent = text; }
  if (live) say('', 'Your message will be sent to the Mendora team. See our privacy notice for how we handle your details.');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.website.value) return; // honeypot
    var name = form.name.value.trim(), email = form.email.value.trim(), msg = form.message.value.trim();
    if (!name || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      say('err', 'Please add your name, a valid email address and a message.');
      return;
    }
    if (!live) {
      say('warn', 'Not sent. Online inquiries are not connected yet, so this message was not delivered or stored.');
      return;
    }
    submit.disabled = true; say('', 'Sending…');
    fetch(C.formEndpoint, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        form.reset(); say('ok', 'Thank you — your message has been sent to the Mendora team.');
      })
      .catch(function () { say('err', 'Your message could not be sent. Please try again later.'); })
      .finally(function () { submit.disabled = false; });
  });
})();
