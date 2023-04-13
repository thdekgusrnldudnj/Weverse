$(document).ready(function () {//document.ready
  $(".gnb > li").mouseover(function () {
    $(this).find(".sub").stop().slideDown(800);
  });
  $(".gnb > li").mouseout(function () {
    $(this).find(".sub").stop().slideUp(500);
  });
});


$(function () {//document.ready
  function slideImg() {//slideImg 함수를 생성
  var now = $(".imgss>img:first");//변수 now에 첫번째 img요소를 할당
  $(".imgss").stop().animate({ "left": "-1920px" }, 1000, function () {
    //.imgs에 animate함수를 적용 left를 -600px(이미지의 넓이값)만큼 1초동안 이동(.imgs를 왼쪽으로 600px만큼 이동)
    $(this).append(now).css("left", "0px");
    //애니메이션 기능이 모두 종료된후 첫번째 이미지를 마지막위치로 이동시키고 .imgs의 left속성값을 초기위치값(0)으로 변경하여 다음 슬라이드 준비
  })
  }
  var timer = setInterval(slideImg, 3000);//반복함수를 사용하여 slideImg함수의 실행코드를 3초에 한번씩 반복시킵니다.
  
  $("#imgSlidess>button").hover(//button에 hover이벤트 생성
  function () {//mouseover시
    clearInterval(timer); //timer에 들어있는 반복함수를 제거
  }, function () {//mouseout시
    timer = setInterval(slideImg, 3000);
    //timer변수에 반복함수를 다시 할당합니다.
  }
  )
  
  //next버튼 클릭시
  $(".nexts").click(function () {//.next버튼 클릭시
  if ($(".imgss").is(":animated")) return false;
  //if함수로 .imgs에 animate효과가 적용중이면 return false로 함수에 있는 코드를 전달하지 않는다.(결과적으로 animate가 중복으로 실행되지 않는다.)
  var now = $(".imgss>img:first");
  $(".imgss").animate({ "left": "-1920px" }, 300, function () {
    $(this).append(now).css("left", "0px");
  })
  })
  
  //prev버튼 클릭시
  $(".prevs").click(function () {
  if ($(".imgss").is(":animated")) return false;
  var last = $(".imgss>img:last");//마지막 이미지 요소를 last변수에 할당.
  $(".imgss").prepend(last).css("left", "-1920px").animate({ "left": 0 }, 300);//마지막 이미지 요소를 .imgs의 첫번째 자손 위치로 변경하고 left를 -600px만큼 이동시켜 오른쪽으로 이동시킬 준비를 해줍니다. 그후에 animate함수로 left값을 0으로 애니메이션효과를 적용해 왼쪽에서 오른쪽으로 이미지요소가 슬라이드 되도록 합니다.
  })
  });
  


$(function () {//document.ready
  function slideImg() {//slideImg 함수를 생성
  var now = $(".imgsss>img:first");//변수 now에 첫번째 img요소를 할당
  $(".imgsss").stop().animate({ "left": "-1920px" }, 1000, function () {
    //.imgs에 animate함수를 적용 left를 -600px(이미지의 넓이값)만큼 1초동안 이동(.imgs를 왼쪽으로 600px만큼 이동)
    $(this).append(now).css("left", "0px");
    //애니메이션 기능이 모두 종료된후 첫번째 이미지를 마지막위치로 이동시키고 .imgs의 left속성값을 초기위치값(0)으로 변경하여 다음 슬라이드 준비
  })
  }
  var timer = setInterval(slideImg, 3000);//반복함수를 사용하여 slideImg함수의 실행코드를 3초에 한번씩 반복시킵니다.
  
  $("#imgSlidesss>button").hover(//button에 hover이벤트 생성
  function () {//mouseover시
    clearInterval(timer); //timer에 들어있는 반복함수를 제거
  }, function () {//mouseout시
    timer = setInterval(slideImg, 3000);
    //timer변수에 반복함수를 다시 할당합니다.
  }
  )
  
  //next버튼 클릭시
  $(".nexts").click(function () {//.next버튼 클릭시
  if ($(".imgsss").is(":animated")) return false;
  //if함수로 .imgs에 animate효과가 적용중이면 return false로 함수에 있는 코드를 전달하지 않는다.(결과적으로 animate가 중복으로 실행되지 않는다.)
  var now = $(".imgsss>img:first");
  $(".imgsss").animate({ "left": "-1920px" }, 300, function () {
    $(this).append(now).css("left", "0px");
  })
  })
  
  //prev버튼 클릭시
  $(".prevs").click(function () {
  if ($(".imgsss").is(":animated")) return false;
  var last = $(".imgsss>img:last");//마지막 이미지 요소를 last변수에 할당.
  $(".imgsss").prepend(last).css("left", "-1920px").animate({ "left": 0 }, 300);//마지막 이미지 요소를 .imgs의 첫번째 자손 위치로 변경하고 left를 -600px만큼 이동시켜 오른쪽으로 이동시킬 준비를 해줍니다. 그후에 animate함수로 left값을 0으로 애니메이션효과를 적용해 왼쪽에서 오른쪽으로 이미지요소가 슬라이드 되도록 합니다.
  })
  });
  
 