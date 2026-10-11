document.documentElement.classList.add('js');

// Warstwice terenu w tle animacji (generowane, żeby nie trzymać długich ścieżek w HTML)
const contours = document.getElementById('contours');
if (contours) {
  const ns = 'http://www.w3.org/2000/svg';
  const cx = 300, cy = 250, n = 36;
  for (let k = 1; k <= 8; k++) {
    const r = 26 * k + 6;
    const pts = [];
    for (let i = 0; i < n; i++) {
      const a = (2 * Math.PI * i) / n;
      const rr = r * (1 + 0.09 * Math.sin(3 * a + k * 0.7) + 0.05 * Math.cos(5 * a - k * 1.3) + 0.03 * Math.sin(2 * a + k));
      pts.push([cx + rr * Math.cos(a) * 1.25, cy + rr * Math.sin(a)]);
    }
    // Catmull-Rom → krzywe Béziera, żeby linie były gładkie
    let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < n; i++) {
      const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', d + 'Z');
    contours.appendChild(path);
  }
}

// Ramka nagłówka po przewinięciu
const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Pojawianie się sekcji
const revealed = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: '0px 0px -10% 0px' });
  revealed.forEach((el) => io.observe(el));
} else {
  revealed.forEach((el) => el.classList.add('is-in'));
}

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
