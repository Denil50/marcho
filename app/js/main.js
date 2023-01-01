$(function () {

  let sliderThumb = $('.product-slide__thumb');
  let sliderBig =  $('.product-slide__big');


  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.shop-filters-btn').on('click', function() {
    $('.shop-filters').slideToggle();
  });

  $('.footer-top__title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="9" height="14" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image id="angle-left-" x="0" y="0" width="9" height="14" xlink:href="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACaADAAQAAAABAAAADgAAAACdYkWxAAAArklEQVQoFWNkwAL+24Qa/2di2g2Ues/4j9mEEV0NkgJBsBwj41kmZEUYCkCS//6/h5uEVQHQFMa/TK5gRXgVHFn2npGQApCNTEBfrALSEEeCRBgY7oGtAJoA4YIUMTDsgXGgtBID0780ZDGwm/7ahc8EMtAkGCsYD63oBCmG+w6fQrgikA6cCkGSyACLwvcoIQ5SzHxoZTrQM7NgGhkZGMHugvFR6P92EeUgDBIEAGh8SFmqaQRnAAAAAElFTkSuQmCC"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="10" height="15" viewBox="0 0 10 15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image id="angle-right-" x="0" y="0" width="10" height="15" xlink:href="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAADwAAAADzmDeFAAAAbklEQVQoFWNggIL///8Lwtg4aaCiciAGgZn4FKVB1MBJ7IqB0qFwJQgGTsUwqxFKcTkDqIK+istRQgNovSAQn0F2KJD9DoiV4AqBHFyKjGmgCGQk0Er0YAG5CWEdzF40t2FXhKRYCaihA6tJUEUAbCcte5wuATMAAAAASUVORK5CYII="/></svg></button>',
    infinite: false,
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  sliderThumb.slick(
    {
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: sliderBig,
      vertical: true,
      draggable: false,
      focusOnSelect: true,
    }
  );

  sliderBig.slick(
    {
      asNavFor: sliderThumb,
      arrows: false,
      draggable: false,
      fade: true,
      responsive: [
        {
          breakpoint: 1051,
          settings: {
            draggable: true,
          }
        },
      ],
    }
  );

  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });
  
  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');
  });
  $('.button-grid').on('click', function(){
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');
  });

  $('.select-style, .product-one__num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#FFC35B",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 18 18" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:evenodd;fill-opacity:1;" d="M 5.101562 17.113281 C 4.339844 17.445312 3.457031 17.101562 3.121094 16.34375 C 3.019531 16.109375 2.976562 15.847656 3.003906 15.589844 L 3.433594 11.347656 L 0.59375 8.171875 C 0.0390625 7.550781 0.09375 6.605469 0.710938 6.050781 C 0.90625 5.878906 1.140625 5.761719 1.394531 5.703125 L 5.558594 4.804688 L 7.703125 1.121094 C 8.121094 0.402344 9.039062 0.160156 9.753906 0.578125 C 9.980469 0.710938 10.164062 0.894531 10.296875 1.121094 L 12.441406 4.804688 L 16.605469 5.703125 C 17.417969 5.878906 17.929688 6.679688 17.753906 7.488281 C 17.699219 7.742188 17.582031 7.976562 17.40625 8.171875 L 14.566406 11.347656 L 14.996094 15.589844 C 15.082031 16.414062 14.480469 17.148438 13.65625 17.230469 C 13.398438 17.257812 13.136719 17.21875 12.898438 17.113281 L 9 15.394531 Z M 5.101562 17.113281 "/></g></svg>',
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);

});