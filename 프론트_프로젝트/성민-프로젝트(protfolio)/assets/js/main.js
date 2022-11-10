/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// 마우스 클릭 효과
function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px";
  d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  d.addEventListener(
    "animationend",
    function () {
      d.parentElement.removeChild(d);
    }.bind(this)
  );
}
document.addEventListener("click", clickEffect);

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $nav = $("#nav");

  // Breakpoints.
  breakpoints({
    wide: ["961px", "1880px"],
    normal: ["961px", "1620px"],
    narrow: ["961px", "1320px"],
    narrower: ["737px", "960px"],
    mobile: [null, "736px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);

    // 둘쨰 돌 이미지 돋보기
    $(".target")
      .append('<div class="img2"></div>')
      .children(".img2")
      .css({
        "background-image": "url(" + $(".target") + ")",
      });
    $(".target").on("mouseover", function () {
      $(this)
        .children(".img2")
        .css({
          transform: "scale(" + $(this).attr("data-scale") + ")",
        });
    });
    $(".target").on("mouseout", function () {
      $(this).children(".img2").css({
        transform: "scale(1)",
      });
    });
    $(".target").on("mousemove", function (e) {
      $(this)
        .children(".img2")
        .css({
          "transform-origin":
            ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
            "% " +
            ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
            "%",
        });
    });
  });

  // 시간 타입
  var clock_kr = document.querySelector(".clock-kr");

  function getTime() {
    const curr = new Date();

    // 표준시간 UTC 구하기
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

    // UTC to KST 한국 (UTC + 9시간)
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = new Date(utc + KR_TIME_DIFF);

    // 시, 분 변수 저장
    let kr_hr = kr_curr.getHours();
    let kr_mm = kr_curr.getMinutes();

    //am, pm 표시
    var kr_ampm = kr_hr >= 12 ? "pm" : "am";

    // 10이하 숫자일때 보기 좋게 숫자 앞에 0 추가
    clock_kr.innerHTML =
      `${kr_hr < 10 ? `0${kr_hr}` : kr_hr}:${
        kr_mm < 10 ? `0${kr_mm}` : kr_mm
      }` +
      " " +
      kr_ampm;
  }
  // 1초마다 함수를 업데이트
  setInterval(getTime, 1000);

  // Nav.
  var $nav_a = $nav.find("a");

  $nav_a
    .addClass("scrolly")
    .on("click", function (e) {
      var $this = $(this);

      // External link? Bail.
      if ($this.attr("href").charAt(0) != "#") return;

      // Prevent default.
      e.preventDefault();

      // Deactivate all links.
      $nav_a.removeClass("active");

      // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
      $this.addClass("active").addClass("active-locked");
    })
    .each(function () {
      var $this = $(this),
        id = $this.attr("href"),
        $section = $(id);

      // No section for this link? Bail.
      if ($section.length < 1) return;

      // Scrollex.
      $section.scrollex({
        mode: "middle",
        top: "-10vh",
        bottom: "-10vh",
        initialize: function () {
          // Deactivate section.
          $section.addClass("inactive");
        },
        enter: function () {
          // Activate section.
          $section.removeClass("inactive");

          // No locked links? Deactivate all links and activate this section's one.
          if ($nav_a.filter(".active-locked").length == 0) {
            $nav_a.removeClass("active");
            $this.addClass("active");
          }

          // Otherwise, if this section's link is the one that's locked, unlock it.
          else if ($this.hasClass("active-locked"))
            $this.removeClass("active-locked");
        },
      });
    });

  // Scrolly.
  $(".scrolly").scrolly();

  // Header (narrower + mobile).

  // Toggle.
  $(
    '<div id="headerToggle">' +
      '<a href="#header" class="toggle"></a>' +
      "</div>"
  ).appendTo($body);

  // Header.
  $("#header").panel({
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    side: "left",
    target: $body,
    visibleClass: "header-visible",
  });
})(jQuery);

// 유치원 졸업사진 줌인/아웃
function zoomIn(event) {
  event.target.style.transform = "scale(1.2)";
  event.target.style.zIndex = 1;
  event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = 0;
  event.target.style.transition = "all 0.5s";
}

//   hometown 글자색 변경
var rr = 0;
var gg = 0;
var bb = 0;
var cnt = 0;
var timer;

function changeColor() {
  var xx = document.getElementById("hometown");

  if (cnt == 0) {
    if (rr < 255) {
      rr += 5;
    } else if (gg < 255) {
      gg += 5;
    } else {
      bb += 5;

      if (bb == 255) {
        cnt = 1;
      }
    }
  } else {
    if (rr > 0) {
      rr -= 5;
    } else if (gg > 0) {
      gg -= 5;
    } else {
      bb -= 5;

      if (bb == 0) {
        cnt = 0;
      }
    }
  }
  xx.style.color = "rgb(" + rr + "," + gg + "," + bb + ")";
}

function onOver() {
  timer = setInterval(changeColor, 50, 1000);
}

function onOut() {
  var xx = document.getElementById("hometown");

  clearInterval(timer);
  xx.style.color = "black";

  rr = 0;
  gg = 0;
  bb = 0;
  cnt = 0;
}
