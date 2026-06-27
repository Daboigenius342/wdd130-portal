(function () {

  const output = document.getElementById('output');
  const cta = document.getElementById('cta');
  const lines = [
    { type: 'cmd', text: './launch --portfolio/aboutme' },
    { type: 'out', text: '// Not Available Coding' },
    { type: 'out', text: '// Web Developer | Designer | Student' },
  ];
  function add(text) {
    const div = document.createElement('div');
    div.textContent = (arguments[1] ? '$ ' : '') + text;
    output.appendChild(div);
    return div;
  }
  let step = 0;
  (function run() {
    if (step >= lines.length) { if (cta) cta.style.opacity = 1; return; }
    const s = lines[step++];
    if (s.type === 'cmd') {
      const div = add('', true);
      let i = 0;
      (function tick() {
        if (i <= s.text.length) { div.textContent = '$ ' + s.text.slice(0, i++); setTimeout(tick, 45); }
        else setTimeout(run, 250);
      })();
    } else { add(s.text); setTimeout(run, 180); }
  })();
})();