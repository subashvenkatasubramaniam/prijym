/*
 * Re-usable port of assets/js/script.js for the React app.
 * Only the element-bound widgets live here (carousels, accordions, tabs, ...).
 * Header / mobile menu / search / back-to-top are real React components now.
 * `initPlugins()` runs after every page mounts and returns a cleanup function.
 */

const arrows = {
  a: ['<span class="icon-6"></span>', '<span class="icon-7"></span>'],
  b: ['<span class="icon-28"></span>', '<span class="icon-29"></span>'],
  c: ['<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>'],
};

const resp = (a, b, c, d, e, f) => {
  const r = { 0: { items: a }, 480: { items: b }, 600: { items: c }, 800: { items: d }, 1200: { items: e } };
  if (f) r[1200] = { items: f };
  return r;
};

const CAROUSELS = [
  {
    sel: '.banner-carousel',
    opts: {
      loop: true, margin: 0, nav: true, animateOut: 'fadeOut', animateIn: 'fadeIn', active: true,
      smartSpeed: 1000, autoplay: 6000, navText: arrows.a,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 } },
    },
  },
  { sel: '.single-item-carousel', opts: { loop: true, margin: 30, nav: true, smartSpeed: 500, autoplay: 1000, navText: arrows.b, responsive: resp(1, 1, 1, 1, 1) } },
  { sel: '.two-item-carousel', opts: { loop: true, margin: 30, nav: true, smartSpeed: 500, autoplay: 1000, navText: arrows.b, responsive: resp(1, 1, 1, 2, 2) } },
  { sel: '.three-item-carousel', opts: { loop: true, margin: 30, nav: true, smartSpeed: 500, autoplay: 1000, navText: arrows.a, responsive: resp(1, 1, 2, 2, 3) } },
  { sel: '.four-item-carousel', opts: { loop: true, margin: 30, nav: true, smartSpeed: 500, autoplay: 1000, navText: arrows.b, responsive: resp(1, 1, 2, 3, 4) } },
  { sel: '.five-item-carousel', opts: { loop: true, margin: 30, nav: true, smartSpeed: 500, autoplay: 1000, navText: arrows.c, responsive: resp(1, 2, 3, 4, 5) } },
  { sel: '.clients-carousel', opts: { loop: true, margin: 30, nav: true, smartSpeed: 1000, autoplay: 6000, navText: arrows.c, responsive: resp(1, 2, 3, 4, 6) } },
  { sel: '.journey-carousel', opts: { loop: true, margin: 140, nav: true, smartSpeed: 500, autoplay: 1000, navText: arrows.b, responsive: resp(1, 1, 2, 3, 4) } },
];

let titleAnimationBound = false;

function titleAnimation() {
  const { jQuery: $, gsap, SplitText } = window;
  if (!$ || !gsap || !SplitText) return;
  if (!$('.sec-title-animation').length) return;
  const quotes = document.querySelectorAll('.sec-title-animation .title-animation');

  quotes.forEach((quote) => {
    if (quote.animation) {
      quote.animation.progress(1).kill();
      quote.split.revert();
    }
    const getclass = quote.closest('.sec-title-animation').className;
    const animation = getclass.split('animation-');
    if (animation[1] === 'style4') return;

    quote.split = new SplitText(quote, { type: 'lines,words,chars', linesClass: 'split-line' });
    gsap.set(quote, { perspective: 400 });

    if (animation[1] === 'style1') gsap.set(quote.split.chars, { opacity: 0, y: '90%', rotateX: '-40deg' });
    if (animation[1] === 'style2') gsap.set(quote.split.chars, { opacity: 0, x: '50' });
    if (animation[1] === 'style3') gsap.set(quote.split.chars, { opacity: 0 });

    quote.animation = gsap.to(quote.split.chars, {
      scrollTrigger: { trigger: quote, start: 'top 90%' },
      x: '0', y: '0', rotateX: '0', opacity: 1, duration: 1,
      ease: window.Back.easeOut, stagger: 0.02,
    });
  });
}

export function initPlugins() {
  const $ = window.jQuery;
  if (!$) return () => {};
  const timers = [];

  // language picker is now a React component (components/layout/LanguagePicker.jsx)

  // WOW
  if ($('.wow').length && window.WOW) {
    new window.WOW({ mobile: false }).init();
  }

  // contact form validation
  if ($('#contact-form').length && $.fn.validate) {
    $('#contact-form').validate({
      rules: {
        username: { required: true },
        email: { required: true, email: true },
        phone: { required: true },
        subject: { required: true },
        message: { required: true },
      },
    });
  }

  // odometer counters
  $('.odometer').each(function () {
    $(this).appear(function () {
      $(this).html($(this).attr('data-count'));
    });
  });

  // lightbox
  if ($('.lightbox-image').length && $.fn.fancybox) {
    $('.lightbox-image').fancybox({ openEffect: 'fade', closeEffect: 'fade', helpers: { media: {} } });
  }

  // tabs
  $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
    e.preventDefault();
    const target = $($(this).attr('data-tab'));
    if (target.is(':visible')) return false;
    const box = target.parents('.tabs-box');
    box.find('.tab-buttons .tab-btn').removeClass('active-btn');
    $(this).addClass('active-btn');
    box.find('.tabs-content .tab').fadeOut(0).removeClass('active-tab');
    target.fadeIn(100).addClass('active-tab');
  });

  // accordion
  $('.accordion-box').on('click', '.acc-btn', function () {
    const outerBox = $(this).parents('.accordion-box');
    const target = $(this).parents('.accordion');
    if ($(this).hasClass('active') !== true) outerBox.find('.accordion .acc-btn').removeClass('active');
    if ($(this).next('.acc-content').is(':visible')) return false;
    $(this).addClass('active');
    outerBox.children('.accordion').removeClass('active-block');
    outerBox.find('.accordion').children('.acc-content').slideUp(300);
    target.addClass('active-block');
    $(this).next('.acc-content').slideDown(300);
  });

  // owl carousels
  CAROUSELS.forEach(({ sel, opts }) => {
    if ($(sel).length) $(sel).owlCarousel(opts);
  });

  // custom selects
  $('select:not(.ignore)').niceSelect();

  // progress bars
  if ($('.count-bar').length) {
    $('.count-bar').appear(function () {
      const el = $(this);
      el.css('width', el.data('percent')).addClass('counted');
    }, { accY: -50 });
  }

  // isotope masonry + filters (gallery)
  const $container = $('.sortable-masonry .items-container');
  if ($container.length && $.fn.isotope) {
    const $filter = $('.filter-btns');
    const layout = () => $container.isotope({
      filter: '*',
      masonry: { columnWidth: '.masonry-item.small-column' },
      animationOptions: { duration: 500, easing: 'linear' },
    });
    layout();
    $container.find('img').on('load', () => $container.isotope('layout'));
    timers.push(setTimeout(() => $container.isotope('layout'), 600));

    $filter.find('li').on('click', function () {
      const selector = $(this).attr('data-filter');
      try {
        $container.isotope({ filter: selector, animationOptions: { duration: 500, easing: 'linear', queue: false } });
      } catch (err) { /* ignore */ }
      $filter.find('li').removeClass('active');
      $(this).addClass('active');
      return false;
    });
    $(window).on('resize.prijym', () => {
      const selector = $filter.find('li.active').attr('data-filter');
      $container.isotope({ filter: selector, animationOptions: { duration: 500, easing: 'linear', queue: false } });
    });
  }

  // gsap title animation
  const { ScrollTrigger } = window;
  if (ScrollTrigger) {
    if (!titleAnimationBound) {
      ScrollTrigger.addEventListener('refresh', titleAnimation);
      titleAnimationBound = true;
    }
    timers.push(setTimeout(() => ScrollTrigger.refresh(), 50));
  }

  return () => {
    timers.forEach(clearTimeout);
    $(window).off('resize.prijym');
    $('.tabs-box .tab-buttons .tab-btn').off('click');
    $('.accordion-box').off('click');
    CAROUSELS.forEach(({ sel }) => {
      if ($(sel).length && $(sel).data('owl.carousel')) $(sel).trigger('destroy.owl.carousel');
    });
    if (ScrollTrigger) ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}
