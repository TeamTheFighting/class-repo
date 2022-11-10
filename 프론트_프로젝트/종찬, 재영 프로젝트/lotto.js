//***로또 스크립트 시작***
var lotto_ran_count = 0;
var lotto_count = 0;
var isNum = false;
var isStart = false;
var lotto_res = document.getElementById('lotto_result');
var lotto_nums;
var user_lotto = new Array();
var lotto_animate;
var isStart_num = 0;
function lotto_start() {
  if (chk_count < 6) {
    alert('번호 6개를 체크해주세요!');
    return;
  }
  if (isStart == true) {
    return;
  }
  lotto_change();
}
function lotto_change() {
  if (isStart == false) {
    lotto_nums = new Array(1);
    for (var i = 1; i <= 7; i++) {
      var lotto_result_num = document.getElementById('lotto_num' + i);
      lotto_result_num.src = '';
      isStart = true;
    }
    lotto_res.innerHTML = '';
  }
  isNum = false;
  lotto_animate = setTimeout(lotto_change, 50);
  var lotto_ran = Math.floor(Math.random() * 45) + 1;
  var lotto_img = document.getElementById('lotto_ran_num');
  lotto_img.src = lotto_ran + '.png';
  if (lotto_ran_count < 15) {
    lotto_ran_count++;
  }
  if (lotto_ran_count == 15) {
    for (var i = 0; i < lotto_nums.length; i++) {
      if (parseInt(lotto_nums[i]) == parseInt(lotto_ran)) {
        isNum = true;
        lotto_ran_count = 0;
        break;
      }
    }
    if (isNum == false) {
      lotto_nums[lotto_count] = parseInt(lotto_ran);
      if (lotto_count < 6) {
        lotto_nums.sort(function (a, b) {
          return a - b;
        });
        for (var i = 0; i < lotto_nums.length; i++) {
          var lotto_result_num = document.getElementById('lotto_num' + (i + 1));
          lotto_result_num.src = lotto_nums[i] + '.png';
        }
      } else {
        var lotto_result_num = document.getElementById('lotto_num7');
        lotto_result_num.src = lotto_nums[6] + '.png';
      }
      lotto_count++;
      lotto_ran_count = 0;
      clearTimeout(lotto_animate);
      lotto_animate = setTimeout(lotto_change, 500);
    }
  }
  if (lotto_count == 7) {
    clearTimeout(lotto_animate);
    lotto_count = 0;
    isStart = false;
    lotto_chk();
  }
}
var chk_count = 0;
function lotto_num_chk(chk_number) {
  var user_chk = chk_number.id;
  if (chk_number.checked == true) {
    if (chk_count == 6) {
      alert('최대 6개까지 선택가능합니다.');
      chk_number.checked = false;
      return;
    }
    user_lotto[chk_count] = user_chk.substr(8);
    user_lotto.sort(function (a, b) {
      return a - b;
    });
    for (var i = 0; i < user_lotto.length; i++) {
      var lotto_select_num = document.getElementById('user_select_' + (i + 1));
      lotto_select_num.src = user_lotto[i] + '.png';
    }
    chk_count++;
  }
  if (chk_number.checked == false) {
    for (var i = 0; i < user_lotto.length; i++) {
      if (user_lotto[i] == user_chk.substr(8)) {
        for (var j = 0; j < user_lotto.length; j++) {
          var lotto_select_num = document.getElementById('user_select_' + (j + 1));
          lotto_select_num.src = '';
        }
        user_lotto.splice(i, 1);
      }
    }
    user_lotto.sort(function (a, b) {
      return a - b;
    });
    for (var i = 0; i < user_lotto.length; i++) {
      var lotto_select_num = document.getElementById('user_select_' + (i + 1));
      lotto_select_num.src = user_lotto[i] + '.png';
    }
    chk_count--;
  }
}
var same_num = 0;
var bouns_num = 0;
var rank = '';
function lotto_chk() {
  for (var i = 0; i < lotto_nums.length - 1; i++) {
    for (var j = 0; j < user_lotto.length; j++) {
      if (lotto_nums[i] == user_lotto[j]) {
        same_num++;
        break;
      }
    }
    if (lotto_nums[6] == user_lotto[i]) {
      bouns_num++;
    }
  }
  if (same_num + bouns_num < 3) {
    rank = '낙첨!';
  }
  if (same_num + bouns_num == 3) {
    rank = '5등!';
  }
  if (same_num + bouns_num == 4) {
    rank = '4등!';
  }
  if (same_num + bouns_num == 5) {
    rank = '3등!';
  }
  if (same_num == 5 && bouns_num == 1) {
    rank = '2등!';
  }
  if (same_num == 6) {
    rank = '1등!';
  }
  lotto_res.innerHTML = rank;
  same_num = 0;
  bouns_num = 0;
}
//***로또 스크립트 종료***
