/**
 * common.js
 * 모든 페이지에서 공통으로 쓰는 헤더/푸터/모바일 하단바를 site-config.js 값 기반으로
 * 렌더링하고, 상단 메뉴 고정 / 햄버거 메뉴 / 스크롤 이동 등 공통 UI 동작을 담당합니다.
 */

const NAV_ITEMS = [
  { label: "식당 소개", href: "index.html#about" },
  { label: "한우 메뉴", href: "menu.html#hanwoo" },
  { label: "가족 메뉴", href: "menu.html#family" },
  { label: "공간 안내", href: "space.html" },
  { label: "사진", href: "gallery.html" },
  { label: "예약 안내", href: "reservation.html" },
  { label: "오시는 길", href: "location.html" },
];

function telHref(phone){ return `tel:${(phone||"").replace(/[^0-9+]/g,"")}`; }

function renderHeader(){
  const mount = document.getElementById("site-header");
  if(!mount) return;
  const c = SITE_CONFIG;
  mount.innerHTML = `
    <header class="site-header" id="siteHeaderEl">
      <div class="container">
        <a href="index.html" class="brand">
          ${c.restaurantName}
          <small>${c.sloganShort}</small>
        </a>
        <nav class="nav-desktop" aria-label="주요 메뉴">
          ${NAV_ITEMS.map(i=>`<a href="${i.href}">${i.label}</a>`).join("")}
        </nav>
        <div class="nav-cta">
          <a class="btn btn--outline btn--sm" href="${telHref(c.phone)}">전화하기</a>
          <a class="btn btn--primary btn--sm" href="reservation.html">예약 안내</a>
        </div>
        <button class="hamburger" id="hamburgerBtn" aria-label="메뉴 열기" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <div class="mobile-nav" id="mobileNav">
      <div class="container">
        ${NAV_ITEMS.map(i=>`<a href="${i.href}">${i.label}</a>`).join("")}
        <div class="nav-cta-mobile">
          <a class="btn btn--primary btn--block" href="reservation.html">예약 안내 보기</a>
          <a class="btn btn--outline btn--block" href="${telHref(c.phone)}">${c.phoneDisplay} 전화하기</a>
        </div>
      </div>
    </div>
  `;

  const hamburger = document.getElementById("hamburgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  hamburger.addEventListener("click", ()=>{
    const open = mobileNav.classList.toggle("is-open");
    hamburger.classList.toggle("is-open", open);
    hamburger.setAttribute("aria-expanded", open ? "true":"false");
    document.body.style.overflow = open ? "hidden":"";
  });
  mobileNav.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>{
      mobileNav.classList.remove("is-open");
      hamburger.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });

  const headerEl = document.getElementById("siteHeaderEl");
  const onScroll = ()=> headerEl.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();
}

function renderFooter(){
  const mount = document.getElementById("site-footer");
  if(!mount) return;
  const c = SITE_CONFIG;
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">${c.restaurantName}</div>
            <p>${withFallback(c.ownerName ? "대표자 " + c.ownerName : "", "대표자명 [정보 입력]")}</p>
            <p>사업자등록번호 ${withFallback(c.businessRegNo)}</p>
            <p>${withFallback(c.address)}</p>
            <p><a href="${telHref(c.phone)}">${c.phoneDisplay}</a></p>
            <div class="footer-sns">
              ${c.sns.naverPlace ? `<a href="${c.sns.naverPlace}" aria-label="네이버 플레이스">N</a>`:""}
              ${c.sns.instagram ? `<a href="${c.sns.instagram}" aria-label="인스타그램">IG</a>`:""}
              ${c.sns.blog ? `<a href="${c.sns.blog}" aria-label="블로그">B</a>`:""}
              ${(!c.sns.naverPlace && !c.sns.instagram && !c.sns.blog) ? `<span style="font-size:13px;color:#9E9580;">SNS 링크 [정보 입력]</span>`:""}
            </div>
          </div>
          <div class="footer-col">
            <h4>영업 안내</h4>
            <ul>
              <li>평일 ${withFallback(c.hours.weekday)}</li>
              <li>주말 ${withFallback(c.hours.weekend)}</li>
              <li>브레이크타임 ${withFallback(c.hours.breakTime, "없음")}</li>
              <li>정기휴무 ${withFallback(c.hours.closedDay)}</li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>바로가기</h4>
            <ul>
              <li><a href="menu.html">한우 메뉴 보기</a></li>
              <li><a href="reservation.html">예약 안내</a></li>
              <li><a href="location.html">오시는 길</a></li>
              <li><a href="notice.html">공지사항</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} ${c.restaurantName}. All rights reserved.</span>
          <span>
            <a href="${c.legal.privacyPolicyUrl}">개인정보처리방침</a> ·
            <a href="${c.legal.termsUrl}">이용약관</a>
          </span>
        </div>
      </div>
    </footer>
  `;
}

function renderStickyBar(){
  const mount = document.getElementById("mobile-stickybar");
  if(!mount) return;
  const c = SITE_CONFIG;
  const mapUrl = c.map.naverMapUrl || c.map.kakaoMapUrl || "location.html";
  mount.innerHTML = `
    <div class="mobile-stickybar">
      <a href="${telHref(c.phone)}"><span class="ico">📞</span>전화하기</a>
      <a href="reservation.html" class="is-primary"><span class="ico">🍽️</span>예약하기</a>
      <a href="${mapUrl}" target="${c.map.naverMapUrl||c.map.kakaoMapUrl?"_blank":"_self"}" rel="noopener"><span class="ico">📍</span>길찾기</a>
    </div>
  `;
}

function setActiveNav(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-desktop a, .mobile-nav a").forEach(a=>{
    const href = a.getAttribute("href").split("#")[0];
    if(href === path){ a.style.fontWeight = "800"; a.style.color = "var(--ember)"; }
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderHeader();
  renderFooter();
  renderStickyBar();
  setActiveNav();
});
