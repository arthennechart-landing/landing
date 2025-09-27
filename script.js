// small utilities & interactions
document.addEventListener('DOMContentLoaded', () => {

  // Reveal on scroll (IntersectionObserver)
  const reveals = document.querySelectorAll('.section, .card, .step, .quote, .stat, .device-mockup');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('page-reveal','in');
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));

  // NAV: open modal reserve
  const reserveBtns = document.querySelectorAll('#reserve,#reserveTop');
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');

  reserveBtns.forEach(b => b && b.addEventListener('click', () => {
    modal.setAttribute('aria-hidden','false');
  }));
  modalClose && modalClose.addEventListener('click', () => modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.setAttribute('aria-hidden','true') });

  // Navbar slight shadow on scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) nav.style.transform = 'translateY(-6px)';
    else nav.style.transform = 'none';
  });

  // Fake payment actions (placeholders)
  const payPaypal = document.getElementById('payPaypal');
  const payStripe = document.getElementById('payStripe');
  const modalPayPaypal = document.getElementById('modalPayPaypal');
  const modalPayStripe = document.getElementById('modalPayStripe');

  function openPaymentPlaceholder(provider){
    alert('Placeholder paiement: ' + provider + '\nRemplacez ce comportement par votre lien PayPal / Stripe.');
    // ici, rediriger vers PayPal / Stripe checkout réel
    // window.location.href = 'https://www.paypal.com/checkoutlink';
  }

  payPaypal && payPaypal.addEventListener('click', () => openPaymentPlaceholder('PayPal'));
  payStripe && payStripe.addEventListener('click', () => openPaymentPlaceholder('Stripe'));
  modalPayPaypal && modalPayPaypal.addEventListener('click', () => openPaymentPlaceholder('PayPal'));
  modalPayStripe && modalPayStripe.addEventListener('click', () => openPaymentPlaceholder('Stripe'));

  // simple form submit (no backend) -> show success message
  const reserveForm = document.getElementById('reserveForm');
  reserveForm && reserveForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulaire soumis — vous pouvez intégrer un envoi réel (email / CRM) ici.');
  });

});
