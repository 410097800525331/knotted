document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.querySelector(".menu_grid");
  const tabs = document.querySelectorAll(".category_item");

  /* 메뉴 데이터 */
  const menuList = {
    donut: [
      {
        name: "생딸기 프레지에 도넛",
        image: "donut1",
      },
      {
        name: "생딸기 말차 프레지에 도넛",
        image: "donut2",
      },
      {
        name: "생딸기 프릴 크림 도넛",
        image: "donut3",
      },
      {
        name: "생딸기 몽글 초코 도넛",
        image: "donut4",
      },
      {
        name: "행운 말차 도넛",
        image: "donut5",
      },
      {
        name: "초코 두바이 도넛",
        image: "donut6",
      },
      {
        name: "말차 두바이 도넛",
        image: "donut7",
      },
      {
        name: "그릭 요거트 두바이 도넛",
        image: "donut8",
      },
      {
        name: "제주 말차 라떼 도넛",
        image: "donut9",
      },
      {
        name: "쿠람 부륄레 도넛",
        image: "donut10",
      },
      {
        name: "스마일 보스톤 크림 도넛",
        image: "donut11",
      },
      {
        name: "저당 크림 도넛",
        image: "donut12",
      },
      {
        name: "저당 초코 크림 도넛",
        image: "donut13",
      },
      {
        name: "노티드 글레이즈 도넛",
        image: "donut14",
      },
      {
        name: "딸가우유 생크림 도넛",
        image: "donut15",
      },
      {
        name: "우유 생크림 도넛",
        image: "donut16",
      },
      {
        name: "클래식 바닐라 도넛",
        image: "donut17",
      },
      {
        name: "초코푸딩 도넛",
        image: "donut18",
      },
      {
        name: "얼그레이 도넛",
        image: "donut19",
      },
      {
        name: "레몬 슈가 도넛",
        image: "donut20",
      },
      {
        name: "라즈베리 도넛",
        image: "donut21",
      },
      {
        name: "에그마요 고로케 도넛",
        image: "donut22",
      },
      {
        name: "소세지게티 고로케 도넛",
        image: "donut23",
      },
      {
        name: "시리얼 우유 도넛",
        image: "donut24",
      },
      {
        name: "레몬 케이크 도넛",
        image: "donut25",
      },
      {
        name: "블루베리 케이크 도넛",
        image: "donut26",
      },
      {
        name: "슈가팡팡 케이크 도넛",
        image: "donut27",
      },
      {
        name: "바닐라빈 글레이즈 링도넛",
        image: "donut28",
      },
      {
        name: "시나몬슈가 링도넛",
        image: "donut29",
      },
      {
        name: "카카오 글레이즈 링도넛",
        image: "donut30",
      },
      {
        name: "제주 말차 글레이즈 링도넛",
        image: "donut31",
      },
      {
        name: "오메기 찰떡 쑥크림 도넛",
        image: "donut32",
      },
      {
        name: "우도 땅콩 크림 도넛",
        image: "donut33",
      },
      {
        name: "몬딱 흑임자 크림 도넛",
        image: "donut34",
      },
      {
        name: "유자 한라봉 크림 도넛",
        image: "donut35",
      },
    ],
    bakepy: [
      {
        name: "바바리안 크림 슈넛",
        image: "bakepy1",
      },
      {
        name: "더블초코 크림 슈넛",
        image: "bakepy2",
      },
    ],
    cake: [
      {
        name: "생딸기 초코 가든 케이크",
        image: "cake1",
      },
      {
        name: "화이트 슈가베어",
        image: "cake2",
      },
      {
        name: "코지니트 슈가베어",
        image: "cake3",
      },
      {
        name: "초코 가나슈",
        image: "cake4",
      },
      {
        name: "생딸기 생크림",
        image: "cake5",
      },
      {
        name: "옐로우 스마일 케이크",
        image: "cake6",
      },
      {
        name: "크림버니의 핑크 가든",
        image: "cake7",
      },
      {
        name: "밀크 데이지 케이크",
        image: "cake8",
      },
      {
        name: "땡큐 블루베리 머치",
        image: "cake9",
      },
      {
        name: "마스카포네 치크 케이크",
        image: "cake10",
      },
    ],
    beverage: {
      signature: [
        { name: "크림 아메리카노", image: "signature1" },
        { name: "크림 라떼", image: "signature2" },
        { name: "크림 바닐라빈 라떼", image: "signature3" },
        { name: "크림 제주 말차 라떼", image: "signature4" },
        { name: "제주 말차 클라우드", image: "signature5" },
        { name: "노티드 밀크 클라우드", image: "signature6" },
        { name: "티라미수 클라우드", image: "signature7" },
        { name: "타로 클라우드", image: "signature8" },
        { name: "퓨어 그린 부스트", image: "signature9" },
      ],
      coffee: [
        { name: "에스프레소", image: "coffee1" },
        { name: "아메리카노", image: "coffee2" },
        { name: "아이스 아메리카노", image: "coffee3" },
        { name: "카페라떼", image: "coffee4" },
        { name: "아이스 카페라떼", image: "coffee5" },
        { name: "바닐라빈 라떼", image: "coffee6" },
        { name: "아이스 바닐라빈 라떼", image: "coffee7" },
        { name: "콜드 브루", image: "coffee8" },
        { name: "콜드 브루 라떼", image: "coffee9" },
        { name: "디카페인 콜드 브루", image: "coffee10" },
        { name: "디카페인 콜드 브루 라떼", image: "coffee11" },
      ],
      tea: [
        { name: "생딸기 동백 우롱티", image: "tea1" },
        { name: "레몬티", image: "tea2" },
        { name: "자몽티", image: "tea3" },
        { name: "자몽 허니 블랙티", image: "tea4" },
        { name: "피치 레몬 블랙티", image: "tea5" },
        { name: "애플 캐모마일 티", image: "tea6" },
        { name: "제로슈가 복숭아 아이스티", image: "tea7" },
        { name: "제로슈가 아샷추", image: "tea8" },
        { name: "캐모마일", image: "tea9" },
        { name: "아이스 캐모마일", image: "tea10" },
        { name: "얼그레이", image: "tea11" },
        { name: "아이스 얼그레이", image: "tea12" },
        { name: "페퍼민트", image: "tea13" },
        { name: "아이스 페퍼민트", image: "tea14" },
      ],
      noncoffee: [
        { name: "생딸기 애사비 에이드", image: "noncoffee1" },
        { name: "과일 담은 딸기 주스", image: "noncoffee2" },
        { name: "생딸기 말차 라떼", image: "noncoffee3" },
        { name: "생딸기 라떼", image: "noncoffee4" },
        { name: "군고구마 라떼", image: "noncoffee5" },
        { name: "과일 담은 사과 주스", image: "noncoffee6" },
        { name: "과일 담은 살구 복숭아 주스", image: "noncoffee7" },
        { name: "과일 담은 용과 주스", image: "noncoffee8" },
        { name: "아이스 제주 말차 라떼", image: "noncoffee9" },
        { name: "제주 말차 라떼", image: "noncoffee10" },
        { name: "초콜릿 라떼", image: "noncoffee11" },
        { name: "아이스 초콜릿 라떼", image: "noncoffee12" },
        { name: "레몬에이드", image: "noncoffee13" },
        { name: "제로슈가 레몬에이드", image: "noncoffee14" },
        { name: "얼 그레이 밀크티", image: "noncoffee15" },
        { name: "아이스 얼 그레이 밀크티", image: "noncoffee16" },
        { name: "슈가베어 푸딩 초코 라떼", image: "noncoffee17" },
        { name: "슈가베어 푸딩 딸기 라떼", image: "noncoffee18" },
        { name: "슈가베어 푸딩 바나나 라떼", image: "noncoffee19" },
      ]
    },
  };

  /* 메뉴 렌더링 */
  function renderMenu(category, sub = null) {
    menuGrid.innerHTML = "";

    let items = [];

    if (category === "all") {
      Object.values(menuList).forEach(list => {
        if (Array.isArray(list)) {
          items = items.concat(list);
        } else {
          Object.values(list).forEach(subList => {
            items = items.concat(subList);
          });
        }
      });
    } else if (category === "beverage" && sub) {
      items = menuList.beverage[sub];
    } else if (category === "beverage") {
      Object.values(menuList.beverage).forEach(list => {
        items = items.concat(list);
      });
    } else {
      items = menuList[category];
    }

    if (!items || items.length === 0) {
      menuGrid.innerHTML = "<p>준비 중입니다.</p>";
      return;
    }

    items.forEach(item => {
      menuGrid.insertAdjacentHTML("beforeend", `
      <div class="menu_card">
        <img src="/assets/images/${item.image}.png" alt="${item.name}">
        <h4>${item.name}</h4>
      </div>
    `);
    });
  }

  /* 탭 클릭 */
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;
      const sub = tab.dataset.sub;
      const isParent = tab.dataset.type === "parent";

      // 전체 active 제거
      tabs.forEach(t => t.classList.remove("is_active"));

      // 클릭한 탭 active
      tab.classList.add("is_active");

      // 🔥 beverage 서브 클릭 시 부모도 active 유지
      if (category === "beverage" && sub) {
        document
          .querySelector('.category_item[data-category="beverage"][data-type="parent"]')
          .classList.add("is_active");

        renderMenu("beverage", sub);
        return;
      }

      // BEVERAGE 부모 클릭
      if (isParent) {
        document.querySelectorAll(".category_item.beverage").forEach(el => {
          el.classList.toggle("is_open");
        });

        renderMenu("beverage");
        return;
      }

      // 일반 카테고리
      document.querySelectorAll(".category_item.beverage").forEach(el => {
        el.classList.remove("is_open");
      });

      renderMenu(category);
    });
  });

  /* 최초 전체 */
  renderMenu("all");
});
