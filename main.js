(function () {
  document.documentElement.classList.add('js');

  var EMAIL = 'ajayibosun05@gmail.com';

  // Heat bar
  var roles = [
    [0,   'Metallurgical engineering student at the University of Lagos.'],
    [300, 'Front-end developer who builds clear, responsive interfaces.'],
    [600, 'Technical project manager who takes teams from plan to launch.']
  ];

  var stops = [
    [20,   [120, 126, 134]],
    [230,  [226, 194, 122]],
    [260,  [190, 130,  60]],
    [290,  [120,  70, 150]],
    [320,  [ 46,  76, 140]],
    [600,  [110,  60,  60]],
    [800,  [200,  50,  40]],
    [1000, [255, 170,  60]]
  ];

  var tempInput = document.getElementById('temp');
  var bar       = document.getElementById('bar');
  var deg       = document.getElementById('deg');
  var roleEl    = document.getElementById('role');

  function interpolateColor(v) {
    for (var i = 1; i < stops.length; i++) {
      if (v <= stops[i][0]) {
        var a = stops[i - 1], b = stops[i];
        var f = (v - a[0]) / (b[0] - a[0]);
        return a[1].map(function (x, k) {
          return Math.round(x + (b[1][k] - x) * f);
        });
      }
    }
    return stops[stops.length - 1][1];
  }

  function updateBar() {
    var v = +tempInput.value;
    var c = interpolateColor(v);
    var c2 = c.map(function (x) { return Math.min(255, x + 25); });
    var currentRole = roles[0][1];

    roles.forEach(function (r) {
      if (v >= r[0]) currentRole = r[1];
    });

    bar.style.background = 'linear-gradient(90deg, rgb(' + c.join(',') + '), rgb(' + c2.join(',') + '))';
    bar.style.setProperty('--halo', v > 550 ? 'rgb(' + c.join(',') + ')' : 'transparent');
    deg.textContent = v + '\u00b0C';
    roleEl.textContent = currentRole;
  }

  tempInput.addEventListener('input', updateBar);
  updateBar();

  // Theme toggle
  var root   = document.documentElement;
  var themeBtn = document.getElementById('theme');

  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}

  themeBtn.addEventListener('click', function () {
    var isDark = root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
    var next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Mobile nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var mainNav   = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  var revealItems = document.querySelectorAll('.rv');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (el) { io.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('in'); });
  }

  // Footer year + contact form
  document.getElementById('yr').textContent = new Date().getFullYear();

  document.getElementById('form').addEventListener('submit', function (ev) {
    ev.preventDefault();

    var name    = document.getElementById('n').value.trim();
    var email   = document.getElementById('e').value.trim();
    var message = document.getElementById('m').value.trim();
    var status  = document.getElementById('msg');

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      status.textContent = 'Please fill in your name, a valid email address, and a message.';
      return;
    }

    location.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent('Portfolio message from ' + name) +
      '&body='    + encodeURIComponent(message + '\n\n' + name + ' (' + email + ')');

    status.textContent = 'Opening your email app\u2026';
  });
})();
