/**
 * Gujarati Consultancy - Client Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const telegramUrl = 'https://t.me/+s6OOTB1_jXY2ZDY1';

  // 1. Auto-Join Countdown Timer Logic
  const countdownSecsEl = document.getElementById('countdownSecs');
  const timerFillEl = document.getElementById('timerFill');
  let timeLeft = 60;
  const totalTime = 60;

  const timerInterval = setInterval(() => {
    timeLeft--;
    if (countdownSecsEl) {
      countdownSecsEl.textContent = `${timeLeft}s`;
    }

    if (timerFillEl) {
      const percentage = (timeLeft / totalTime) * 100;
      timerFillEl.style.transform = `scaleX(${percentage / 100})`;
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (countdownSecsEl) {
        countdownSecsEl.textContent = 'Joining...';
      }
      // Track Meta Pixel Lead event on auto-redirect
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', { content_name: 'Auto Telegram Redirect' });
      }
      // Auto-redirect to Telegram channel
      window.location.href = telegramUrl;
    }
  }, 1000);

  // 2. Dynamic Trader Counter Fluctuation
  const tradersCountEl = document.getElementById('tradersCount');
  let currentCount = 5947;

  setInterval(() => {
    const change = Math.floor(Math.random() * 9) - 3;
    currentCount += change;
    if (currentCount < 5800) currentCount = 5850;
    if (currentCount > 6200) currentCount = 6150;

    if (tradersCountEl) {
      tradersCountEl.textContent = currentCount.toLocaleString('en-IN');
    }
  }, 3500);

  // 3. Sticky Bottom CTA Bar Viewport Visibility
  const stickyCtaBar = document.getElementById('stickyCtaBar');
  const mainCta = document.getElementById('mainCta');

  window.addEventListener('scroll', () => {
    if (!stickyCtaBar || !mainCta) return;

    const mainCtaPosition = mainCta.getBoundingClientRect();
    if (mainCtaPosition.bottom < 0) {
      stickyCtaBar.classList.add('visible');
    } else {
      stickyCtaBar.classList.remove('visible');
    }
  }, { passive: true });

  // 4. CTA Click Handler & Meta Pixel Event Tracking
  const ctaLinks = document.querySelectorAll('.cta-link, .btn-sticky');
  ctaLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', { content_name: 'Join Telegram Channel' });
      }
      console.log('Redirecting to Telegram channel:', telegramUrl);
    });
  });
});
