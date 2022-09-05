// スムーススクロール
$('a[href^="#"]').click(function(){
  var href= $(this).attr("href");  //出発地点取得
  var target= $(href == "#" || href == "" ? 'html' : href);  //到着地点取得
  var position = target.offset().top;  //到着地点をtopからの数値で取得
  $("html,body").animate({scrollTop:position}, 600, "swing");
});

// ページトップへ戻る
var $pageTop = $(".c-pageTop");
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $pageTop.fadeIn();
  } else {
    $pageTop.fadeOut();
  }
});
$pageTop.on("click", function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    300
  );
  return false;
});

// ヘッダー
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".l-header").addClass("is-active");
  } else {
    $(".l-header").removeClass("is-active");
  }
});

// フェードアップエフェクト
function fadeUpEffect() {
  $('.fadeUpEffect').each(function () {
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    }
  });
}
$(window).scroll(function () {
  fadeUpEffect();
});

// トレーナー タブ切替
$tabs = $('.p-trainer__tab');
$('.p-trainer__tab').on('click', function () {
  $('.active').removeClass('active');
  $(this).addClass('active');
  const index = $tabs.index(this);
  $('.p-trainer__tabContent').removeClass('show').eq(index).addClass('show');
})

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 4000,
  },
  speed: 500,
  loop: true,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// プライス 横スクロール フェードアウト
$(".p-price__list").scroll(function(){
  // scrollLeftメソッドの結果を表示
  if ($(this).scrollLeft() > 20) {
    $(".p-price__scroll").fadeOut();
  }
});

 // FAQ アコーディオン
 $('.c-accordion__question').on('click', function(){
  $(this).toggleClass('active');
  $(this).next().slideToggle(200);
});
