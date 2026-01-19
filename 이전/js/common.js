$(document).ready(function () {
  // header
  const header = `
  <div class="header-bg"></div>
    <div class="header-inner">
      <!-- LEFT MENU -->
      <nav class="gnb gnb-left">
        <ul>
          <li class="gnb-menu">
            <a href="/knottedstore/story.html">Brand</a>
            <ul class="sub-menu">
              <li><a href="/knottedstore/story.html">스토리</a></li>
            </ul>
          </li>
          <li class="gnb-menu">
            <a href="/knottedstore/shop.html">Online Shop</a>
            <ul class="sub-menu">
              <li><a href="/knottedstore/shop.html">푸드</a></li>
              <li><a href="/knottedstore/shop.html">리빙</a></li>
            </ul>
          </li>
          <li class="gnb-menu">
            <a href="/knottedstore/pickup.html">Reservation</a>
            <ul class="sub-menu">
              <li><a href="/knottedstore/pickup.html">픽업 예약</a></li>
              <li><a href="/knottedstore/bulk-order.html">대량 주문</a></li>
              <li><a href="/knottedstore/location.html">매장 안내</a></li>
            </ul>
          </li>
          <li class="gnb-menu">
            <a href="/knottedstore/menu.html">Menu</a>
            <ul class="sub-menu">
              <li><a href="/knottedstore/menu.html">메뉴 소개</a></li>
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
            <a href="/knottedstore/event.html">Event</a>
            <ul class="sub-menu">
              <li><a href="/knottedstore/event.html">이벤트</a></li>
              <li><a href="/knottedstore/notice.html">공지사항</a></li>
            </ul>
          </li>
          <li class="gnb-menu">
            <a href="/knottedstore/faq.html">Help</a>
            <ul class="sub-menu">
              <li><a href="/knottedstore/faq.html">자주 묻는 질문</a></li>
              <li><a href="/knottedstore/faq.html">1:1 문의</a></li>
            </ul>
          </li>
          <li class="gnb-menu">
            <a href="/knottedstore/In-Bound.html">Contact</a>
            <ul class="sub-menu">
              <li><a href="/knottedstore/In-Bound.html">제안하기</a></li>
              <li><a href="/knottedstore/employment.html">채용안내</a></li>
            </ul>
          </li>
          <li class="gnb-menu user-menu">
            <a id="header-member" class="login_btn" href="#">Login</a>
          </li>
          <!-- 로그인 팝업 -->
          <div id="member-popup" class="popup-wrap">
            <div class="popup-box">
              <button id="header-member-close" class="popup-close">✕</button>
              <h1><img src="/assets/images/knotted.png" alt="Logo"></h1>
              <form class="login-form">
                <input type="text" placeholder="아이디">
                <input type="password" placeholder="비밀번호">
                <label class="keep-login">
                  <input type="checkbox">
                  <span>로그인 상태 유지</span>
                </label>
                <button type="submit" class="btn-main">로그인</button>
              </form>
              <div class="popup-links">
                <a href="#">회원가입</a>
                <a href="#">아이디 / 비밀번호 찾기</a>
              </div>
              <p class="guest-notice">비회원 주문 시에는 적립금 혜택이 적용되지 않으며<br>사후 적립은 불가합니다.</p>
              <button id="header-guest" class="btn-sub">비회원 주문배송조회</button>
            </div>
          </div>

          <!-- 비회원 주문조회 팝업 -->
          <div id="guest-popup" class="popup-wrap">
            <div class="popup-box">
              <button id="header-guest-close" class="popup-close">✕</button>
              <h4>비회원 주문조회</h4>
              <form class="login-form">
                <input type="text" placeholder="주문번호">
                <input type="text" placeholder="연락처 (숫자만 입력)">
                <button type="submit" class="btn-main">조회하기</button>
              </form>
            </div>
          </div>
          <li class="gnb-menu user-menu">
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  `;

  $("#tms-header").append(header);

  // 스크롤 배경
  const scrollHeader = document.getElementById('tms-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      scrollHeader.classList.add('is-scroll');
    } else {
      scrollHeader.classList.remove('is-scroll');
    }
  });

  // 로그인
  const memberPopup = document.getElementById('member-popup');
  const guestPopup = document.getElementById('guest-popup');

  document.getElementById('header-member').onclick = () => {
    memberPopup.style.display = 'flex';
  };
  document.getElementById('header-member-close').onclick = () => {
    memberPopup.style.display = 'none';
  };

  document.getElementById('header-guest').onclick = () => {
    memberPopup.style.display = 'none';
    guestPopup.style.display = 'flex';
  };
  document.getElementById('header-guest-close').onclick = () => {
    guestPopup.style.display = 'none';
  };

  document.querySelectorAll('.popup-wrap').forEach(popup => {
    popup.addEventListener('click', e => {
      if (e.target === popup) popup.style.display = 'none';
    });
  });

  // footer
  const footer = `
    <div class="tms-footer-bg1">
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
    </div>
  `;

  $("#tms-footer").append(footer);
});