$(document).ready(function () {
  // header
  const header = `
    <div class="header-inner">
      <!-- LEFT MENU -->
      <nav class="gnb gnb-left">
        <ul>
          <li class="gnb-menu">
            <a href="#">Brand</a>
            <ul class="sub-menu">
              <li><a href="#">스토리</a></li>
            </ul>
          </li>
          <li class="gnb-menu">
            <a href="#">Online Shop</a>
            <ul class="sub-menu">
              <li><a href="#">푸드</a></li>
              <li><a href="#">리빙</a></li>
            </ul>
          </li>
          <li class="gnb-menu">
            <a href="#">Reservation</a>
            <ul class="sub-menu">
              <li><a href="#">픽업 예약</a></li>
              <li><a href="#">대량 주문</a></li>
              <li><a href="#">매장 안내</a></li>
            </ul>
          </li>
          <li class="gnb-menu">
            <a href="#">Menu</a>
            <ul class="sub-menu">
              <li><a href="#">메뉴 소개</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- LOGO -->
      <h1 class="logo"><a href="/"><img src="/assets/images/knotted.png" alt="Logo"></a></h1>
      <!-- RIGHT MENU -->
      <nav class="gnb gnb-right">
        <ul>
          <li class="gnb-menu">
            <a href="#">Event</a>
            <ul class="sub-menu">
              <li><a href="#">이벤트</a></li>
              <li><a href="#">공지사항</a></li>
            </ul>
          </li>
          <li class="gnb-menu">
            <a href="#">Help</a>
            <ul class="sub-menu">
              <li><a href="#">자주 묻는 질문</a></li>
              <li><a href="#">1:1 문의</a></li>
            </ul>
          </li>
          <li class="gnb-menu">
            <a href="#">Contact</a>
            <ul class="sub-menu">
              <li><a href="#">제안하기</a></li>
              <li><a href="#">채용안내</a></li>
            </ul>
          </li>
          <li class="gnb-menu user-menu">
            <a href="#">Login</a>
          </li>
          <li class="gnb-menu user-menu">
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  `;

  $("#tms-header").append(header);

  // footer
  const footer = `
    <div class="tms-footer-bg1" data-aos="fade-up" data-aos-duration="1000">
      <div class="footer-info">
        <div class="company-info">
          <h4>COMPANY INFOMATION</h4>
          주식회사 지에프에프지 : 서울특별시 강남구 학동로82길 7<br>사업자등록번호: 248-81-00620<br>통신판매업신고번호 : 2020-서울강남-02297<br>대표이사 : 이준범
        </div>
        <div class="help-info">
          <h4>HELP</h4>
          고객센터 : 1800-6067<br>운영시간 : 평일 9시~12시, 13시~17시(주말/공휴일 제외)
        </div>
        <div class="sns-link">
          <h4>SOCIAL</h4>
          <a href="#"><img src="/assets/images/instar.png" alt="instar logo">Instagram</a>
          <a href="#"><img src="/assets/images/kakao.png" alt="Kakaotalk logo">Kakaotalk Channel</a>
        </div>
        <div class="footer-link">
          <a href="#">| 이용약관</a>
          <a href="#">| 개인정보처리방침</a>
          <a href="#">Copyright © 2023 Knotted. All Rights Reserved</a>
        </div>
      </div>
      <div class="tms-footer-bg2">
        <img src="/assets/images/tms-footer-bg2.png" alt="tms-footer-bg2">
      </div>
    </div>
  `;

  $("#tms-footer").append(footer);
});