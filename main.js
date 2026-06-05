const LINKS = {
    youtube: "https://www.youtube.com/@MasterTheDisciplineCode", // <-- replace with your channel URL
};
/* =============================== */

// wire subscribe buttons + socials
document.querySelectorAll('.js-sub').forEach(b => b.addEventListener('click', () => window.open(LINKS.youtube, '_blank')));
const setHref = (sel, url) => document.querySelectorAll(sel).forEach(a => { a.href = url; a.target = "_blank"; a.rel = "noopener" });
setHref('.js-yt', LINKS.youtube);

// year
document.getElementById('yr').textContent = new Date().getFullYear();

// nav scroll state
const nav = document.getElementById('nav');
addEventListener('scroll', () => { nav.classList.toggle('scrolled', scrollY > 40); });

// mobile menu
const mm = document.getElementById('mobileMenu');
document.getElementById('burger').onclick = () => mm.classList.add('open');
document.getElementById('closeMenu').onclick = () => mm.classList.remove('open');
mm.querySelectorAll('a').forEach(a => a.onclick = () => mm.classList.remove('open'));

// reveal on scroll
const io = new IntersectionObserver((es) => { es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); } }) }, { threshold: .16 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));