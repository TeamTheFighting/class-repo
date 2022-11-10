// 검색용
window.onload = function () {
  document.getElementById('bt').addEventListener('click', clickBt);
};
function enterkey() {
  if (window.event.keyCode == 13) {
    // 엔터키가 눌렸을 때
    clickBt();
  }
}
function clickBt() {
  var search = document.getElementById('search').value;
  var gu = [
    '동구',
    '중구',
    '서구',
    '유성구',
    '대덕구',
    '이달의 여행',
    '추천여행',
    '맛집여행',
    '테마여행',
    '축제',
    '행사',
    '대전이야기',
  ];
  var guHtml = [
    '../2_gu_tour/dongGu.html',
    '../2_gu_tour/jungGu.html',
    '../2_gu_tour/seoGu.html',
    '../2_gu_tour/yuseongGu.html',
    '../2_gu_tour/daedeokGu.html',
    '../8_tourpage/tour.html#month',
    '../8_tourpage/tour.html#recommend',
    '../8_tourpage/tour.html#tasty',
    '../8_tourpage/tour.html#thema',
    '../9_festival/fastival.html',
    '../9_festival/fastival.html',
    '../10_storypage/story.html',
  ];
  for (var i = 0; i < gu.length; i++) {
    if (search == gu[i]) window.open(guHtml[i], '_self');
  }
}
