$(document).ready(function () {
  // header
  const header = `
    <h1><a href="/"><img src="/assets/images/knotted.png" alt="노티드 로고"></a></h1>
    <nav>
      <ul class="nav_menu">
        <li class="nav_item">
          <button class="nav_title">Brand</button>
          <ul class="nav_sub">
            <li><a href="/knottedstore/story.html">스토리</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Online Shop</button>
          <ul class="nav_sub">
            <li><a href="/knottedstore/shop.html">푸드</a></li>
            <li><a href="/knottedstore/shop.html">리빙</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Reservation</button>
          <ul class="nav_sub">
            <li><a href="/knottedstore/pickup.html">픽업 예약</a></li>
            <li><a href="/knottedstore/bulk-order.html">대량 주문</a></li>
            <li><a href="/knottedstore/location.html">매장 안내</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Menu</button>
          <ul class="nav_sub">
          <li><a href="/knottedstore/menu.html">빵</a></li>
            <li><a href="/knottedstore/menu.html">도넛</a></li>
            <li><a href="/knottedstore/menu.html">케이크</a></li>
            <li><a href="/knottedstore/menu.html">음료</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Event</button>
          <ul class="nav_sub">
            <li><a href="/knottedstore/event.html">이벤트</a></li>
            <li><a href="/knottedstore/notice.html">공지사항</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Help</button>
          <ul class="nav_sub">
          <li><a href="/knottedstore/inquiry.html">1:1 문의</a></li>
          <li><a href="/knottedstore/faq.html">자주 묻는 질문</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Contact</button>
          <ul class="nav_sub">
            <li><a href="/knottedstore/In-Bound.html">제안하기</a></li>
            <li><a href="/knottedstore/employment.html">채용안내</a></li>
          </ul>
        </li>

      </ul>
    </nav>
  `;

  $(".header").append(header);

  const nav_items = document.querySelectorAll(".nav_item");
  const nav_titles = document.querySelectorAll(".nav_title");

  nav_titles.forEach((title) => {
    title.addEventListener("click", (e) => {
      e.preventDefault();

      const current_item = title.closest(".nav_item");

      nav_items.forEach((item) => {
        if (item !== current_item) {
          item.classList.remove("is_active");
        }
      });

      current_item.classList.toggle("is_active");
    });
  });



  const user = `
    <input class="search" placeholder="Search" />
    <div>
      <a href="#">Login</a>
      <a href="#">Join</a>
      <a href="#">Cart</a>
    </div>
  `;

  $(".user").append(user);
  
  // footer
  const footer = `
    
    <div class="footer_inner">

      <!-- 정보 영역 -->
      <div class="footer_info">
        <div class="footer_col">
          <div>
            <h4>Help</h4>
            <p>
              고객센터: 1800-6067<br>
              운영시간: 평일 9시~12시, 13시~17시<br>
              (주말/공휴일 제외)
            </p>

            <h4 class="mt">Social</h4>
            <ul class="footer_list">
              <li><a href="#"><img src="/assets/images/instar.png"> Instagram</a></li>
              <li><a href="#"><img src="/assets/images/kakao.png"> Kakaotalk Channel</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Company Information</h4>
            <p>
              주식회사 지에프에프지 
              서울특별시 강남구 학동로82길 7<br>
              사업자등록번호: 248-81-00620<br>
              통신판매업신고번호: 2020-서울강남-02297<br>
              대표이사: 이준범
            </p>
          </div>
        </div>

        <div class="footer_policy_wrap">
          <p class="footer_copy">
            Copyright © 2023 Knotted. All Rights Reserved.
          </p>
          <div class="footer_policy">
            <a href="#">이용약관</a>
            <span>|</span>
            <a href="#">개인정보처리방침</a>
          </div>
        </div>
      </div>

    </div>
  `;

  $(".footer").append(footer);
});