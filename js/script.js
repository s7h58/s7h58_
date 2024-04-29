function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // 시, 분, 초를 두 자리수로 표시하기 위해 조건문 사용
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    // 시계 업데이트
    document.getElementById("clock").innerText = timeString;
    
    // 1초마다 시계 업데이트
    setTimeout(updateClock, 1000);
  }
  
  // 페이지 로딩 후 시계 업데이트 시작
  $(document).ready(function() {
    updateClock();
  });
  