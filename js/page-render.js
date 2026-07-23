/**
 * page-render.js
 * menu-data.js / site-config.js 의 값을 실제 페이지 요소에 그려 넣습니다.
 * 이 파일은 수정할 필요가 없으며, 데이터 파일만 바꾸면 화면이 자동으로 바뀝니다.
 */

function fb(v, f="[정보 입력]"){ return withFallback(v, f); }

/* ---------------- 한우 메뉴 카드 ---------------- */
function hanwooCardHTML(m){
  return `
  <article class="menu-card">
    <div class="menu-card-media">
      <img src="${m.image}" alt="${m.imageAlt}" loading="lazy" width="640" height="480">
      ${m.badge ? `<span class="menu-card-badge">${m.badge}</span>`:""}
      ${m.isSignature ? `<div class="menu-card-sig grade-stamp small"><b>한우</b><span>대표메뉴</span></div>`:""}
    </div>
    <div class="menu-card-body">
      <div class="menu-card-title">${m.name}</div>
      <div class="menu-card-meta">${fb(m.part,"[구성 입력]")} · ${fb(m.weight,"[중량 입력]")}</div>
      <p class="menu-card-desc">${m.description}</p>
      <div class="menu-card-footer">
        <div class="menu-price">${fb(m.price,"[가격 입력]")}<small>추천 인원 ${fb(m.recommendPeople,"[인원 입력]")}</small></div>
      </div>
    </div>
  </article>`;
}

function familyCardHTML(m){
  const chips = [];
  if(m.spicy) chips.push(`<span class="chip chip--spicy">맵기 있음</span>`);
  if(m.kidsRecommend) chips.push(`<span class="chip chip--kids">어린이 추천</span>`);
  if(m.isMeal) chips.push(`<span class="chip">식사 메뉴</span>`);
  if(m.takeout) chips.push(`<span class="chip">포장 가능</span>`);
  return `
  <article class="menu-card">
    ${m.image ? `
    <div class="menu-card-media">
      <img src="${m.image}" alt="${m.imageAlt||m.name}" loading="lazy" width="640" height="480">
    </div>`:""}
    <div class="menu-card-body">
      <div class="menu-card-title">${m.name}</div>
      <div class="menu-card-meta">${fb(m.price,"[가격 입력]")}</div>
      ${m.note ? `<p class="menu-card-desc">${m.note}</p>`:""}
      <div class="chip-row mt-8">${chips.join("")}</div>
    </div>
  </article>`;
}

function setCardHTML(s){
  return `
  <div class="set-card">
    <h3>${s.name}</h3>
    <div class="set-people">권장 ${s.people}</div>
    <div class="set-row"><span class="k">한우 구성</span><span class="v">${s.hanwooComposition}</span></div>
    <div class="set-row"><span class="k">식사 메뉴 구성</span><span class="v">${s.mealComposition}</span></div>
    <div class="set-row"><span class="k">추가 선택 메뉴</span><span class="v">${s.addOn}</span></div>
    <div class="set-row"><span class="k">예약 필요 여부</span><span class="v">${s.reservationRequired?"예약 필요":"예약 없이 방문 가능"}</span></div>
    <div class="set-price"><span>세트 가격</span><span class="amt">${s.price}</span></div>
  </div>`;
}

function renderMenuHighlights(targetId, count=3){
  const mount = document.getElementById(targetId);
  if(!mount) return;
  mount.innerHTML = HANWOO_MENU.slice(0,count).map(hanwooCardHTML).join("");
}

function renderHanwooMenuFull(targetId){
  const mount = document.getElementById(targetId);
  if(!mount) return;
  mount.innerHTML = HANWOO_MENU.map(hanwooCardHTML).join("");
}

function renderFamilyMenuFull(targetId){
  const mount = document.getElementById(targetId);
  if(!mount) return;
  mount.innerHTML = FAMILY_MENU.map(familyCardHTML).join("");
}

function renderSets(targetId){
  const mount = document.getElementById(targetId);
  if(!mount) return;
  mount.innerHTML = FAMILY_SETS.map(setCardHTML).join("");
}

/* ---------------- 방문 목적 ---------------- */
function renderVisitPurposes(targetId){
  const mount = document.getElementById(targetId);
  if(!mount) return;
  mount.innerHTML = VISIT_PURPOSES.map(v=>`
    <div class="purpose-card">
      <img src="${v.image}" alt="${v.label} 이미지" loading="lazy">
      <span>${v.label}</span>
    </div>
  `).join("");
}

/* ---------------- 공지사항 ---------------- */
function renderNoticePreview(targetId, count=3){
  const mount = document.getElementById(targetId);
  if(!mount) return;
  if(NOTICES.length === 0){
    mount.innerHTML = `<div class="review-empty">등록된 공지사항이 없습니다.</div>`;
    return;
  }
  mount.innerHTML = NOTICES.slice(0,count).map(n=>`
    <div class="notice-item">
      <span class="cat">${n.category}</span>
      <span class="title">${n.title}</span>
      <span class="date">${fb(n.date,"날짜 미정")}</span>
    </div>
  `).join("");
}

function renderNoticeFull(targetId){
  const mount = document.getElementById(targetId);
  if(!mount) return;
  if(NOTICES.length === 0){
    mount.innerHTML = `<div class="review-empty">등록된 공지사항이 없습니다.</div>`;
    return;
  }
  mount.innerHTML = NOTICES.map(n=>`
    <div class="notice-item">
      <span class="cat">${n.category}</span>
      <span class="title">${n.title}<br><small style="color:var(--brown-mid);font-weight:400;">${n.content||""}</small></span>
      <span class="date">${fb(n.date,"날짜 미정")}</span>
    </div>
  `).join("");
}

/* ---------------- 한우 품질/원산지 ---------------- */
function renderQualityInfo(tableId){
  const mount = document.getElementById(tableId);
  if(!mount) return;
  const q = QUALITY_INFO;
  mount.innerHTML = `
    <tr><td>한우 등급</td><td>${q.grade}</td></tr>
    <tr><td>한우 원산지</td><td>${q.origin}</td></tr>
    <tr><td>납품 및 유통 정보</td><td>${q.supplyInfo}</td></tr>
    <tr><td>부위별 특징</td><td>${q.partFeature}</td></tr>
    <tr><td>보관 및 손질 방식</td><td>${q.storageInfo}</td></tr>
  `;
}

/* ---------------- 예약/영업/오시는길 공통 정보 ---------------- */
function renderInfoTable(tableId, rows){
  const mount = document.getElementById(tableId);
  if(!mount) return;
  mount.innerHTML = rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("");
}

function renderBusinessInfoTable(tableId){
  const c = SITE_CONFIG;
  renderInfoTable(tableId, [
    ["영업시간", `평일 ${fb(c.hours.weekday)} / 주말 ${fb(c.hours.weekend)}`],
    ["브레이크타임", fb(c.hours.breakTime,"없음")],
    ["마지막 주문 시간", fb(c.hours.lastOrder)],
    ["정기 휴무일", fb(c.hours.closedDay)],
    ["전화번호", c.phoneDisplay],
    ["예약 가능 여부", c.amenities.reservation ? "가능":"[정보 입력]"],
    ["주차 가능 여부", c.amenities.freeParking ? "무료 주차 가능":"[정보 입력]"],
    ["포장 가능 여부", c.amenities.takeout ? "가능":"[정보 입력]"],
    ["유아의자 여부", c.amenities.kidsChair ? "비치":"[정보 입력]"],
    ["룸 여부", c.amenities.privateRoom ? "있음":"[정보 입력]"],
  ]);
}

function renderReservationInfoTable(tableId){
  const c = SITE_CONFIG;
  renderInfoTable(tableId, [
    ["예약 가능 시간", `${fb(c.hours.weekday)}`],
    ["당일 예약 가능 여부", fb(c.reservation.sameDayBooking)],
    ["가족석 예약", "가능 (전화 문의)"],
    ["룸 예약 조건", fb("", "[정보 입력]")],
    ["단체 예약 기준", fb("", "[정보 입력]")],
    ["예약금 여부", fb(c.reservation.depositRequired)],
    ["예약 변경 및 취소", "전화로 문의해 주세요"],
    ["생일/기념일 요청", "가능 (전화 문의)"],
  ]);
}

/* ---------------- 편의시설 아이콘 ---------------- */
const AMENITY_META = {
  kidsChair: {icon:"🪑", label:"유아의자"},
  kidsTableware: {icon:"🍽️", label:"어린이 식기"},
  strollerAccess: {icon:"🚼", label:"유모차 출입"},
  wideSeat: {icon:"🛋️", label:"넓은 좌석"},
  groupSeat: {icon:"👨‍👩‍👧‍👦", label:"단체석"},
  privateRoom: {icon:"🚪", label:"프라이빗 룸"},
  freeParking: {icon:"🅿️", label:"무료 주차"},
  takeout: {icon:"🥡", label:"포장 가능"},
  reservation: {icon:"📅", label:"예약 가능"},
  separateRestroom: {icon:"🚻", label:"남녀 화장실 구분"},
  wheelchairAccess: {icon:"♿", label:"장애인 출입"},
  diaperChangingTable: {icon:"🍼", label:"기저귀 교환대"},
  kidsPlayroom: {icon:"🧸", label:"놀이방"},
};

function renderAmenities(targetId){
  const mount = document.getElementById(targetId);
  if(!mount) return;
  const c = SITE_CONFIG.amenities;
  mount.innerHTML = Object.keys(AMENITY_META)
    .filter(k=>c[k])
    .map(k=>`
      <div class="amenity-item">
        <div class="ico">${AMENITY_META[k].icon}</div>
        <span>${AMENITY_META[k].label}</span>
      </div>`).join("");
}

/* ---------------- 상단 정보바 / 연락처 자동 채움 ---------------- */
function fillContactFields(){
  const c = SITE_CONFIG;
  document.querySelectorAll("[data-fill='phone']").forEach(el=> el.textContent = c.phoneDisplay);
  document.querySelectorAll("[data-fill='phoneHref']").forEach(el=> el.setAttribute("href", telHref(c.phone)));
  document.querySelectorAll("[data-fill='address']").forEach(el=> el.textContent = fb(c.address));
  document.querySelectorAll("[data-fill='hours']").forEach(el=> el.textContent = `${fb(c.hours.weekday)}`);
  document.querySelectorAll("[data-fill='naverMap']").forEach(el=> el.setAttribute("href", c.map.naverMapUrl || "#"));
  document.querySelectorAll("[data-fill='kakaoMap']").forEach(el=> el.setAttribute("href", c.map.kakaoMapUrl || "#"));
  document.querySelectorAll("[data-fill='naverBooking']").forEach(el=> el.setAttribute("href", c.reservation.naverBooking || "#"));
  document.querySelectorAll("[data-fill='kakaoChannel']").forEach(el=> el.setAttribute("href", c.reservation.kakaoChannel || "#"));
}

/* ---------------- 주소 복사 ---------------- */
function bindCopyAddress(){
  document.querySelectorAll("[data-action='copy-address']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const addr = fb(SITE_CONFIG.address, "");
      if(!addr){ alert("주소 정보가 아직 입력되지 않았습니다."); return; }
      try{
        await navigator.clipboard.writeText(addr);
        const original = btn.textContent;
        btn.textContent = "주소가 복사되었습니다";
        setTimeout(()=> btn.textContent = original, 1800);
      }catch(e){ alert(addr); }
    });
  });
}

/* ---------------- 갤러리 (필터 + 더보기 + 라이트박스) ---------------- */
const GALLERY_PAGE_SIZE = 8;
let galleryState = { filter:"all", shown: GALLERY_PAGE_SIZE, lightboxIndex:0 };

function initGallery(images){
  const grid = document.getElementById("galleryGrid");
  const tabs = document.querySelectorAll(".filter-tab");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if(!grid) return;

  function filtered(){
    return galleryState.filter === "all" ? images : images.filter(i=>i.cat === galleryState.filter);
  }

  function draw(){
    const list = filtered();
    const visible = list.slice(0, galleryState.shown);
    grid.innerHTML = visible.map((img, idx)=>`
      <div class="gallery-item" data-idx="${idx}">
        <img src="${img.thumb}" data-full="${img.full}" alt="${img.alt}" loading="lazy" width="400" height="400">
      </div>
    `).join("");
    loadMoreBtn.style.display = list.length > galleryState.shown ? "inline-flex" : "none";

    grid.querySelectorAll(".gallery-item").forEach(el=>{
      el.addEventListener("click", ()=>{
        openLightbox(list, parseInt(el.dataset.idx,10));
      });
    });
  }

  tabs.forEach(tab=>{
    tab.addEventListener("click", ()=>{
      tabs.forEach(t=>t.classList.remove("is-active"));
      tab.classList.add("is-active");
      galleryState.filter = tab.dataset.filter;
      galleryState.shown = GALLERY_PAGE_SIZE;
      draw();
    });
  });

  loadMoreBtn.addEventListener("click", ()=>{
    galleryState.shown += GALLERY_PAGE_SIZE;
    draw();
  });

  draw();

  let currentList = [];
  function openLightbox(list, idx){
    currentList = list;
    galleryState.lightboxIndex = idx;
    showLightboxImage();
    document.getElementById("lightbox").classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function showLightboxImage(){
    const item = currentList[galleryState.lightboxIndex];
    document.getElementById("lightboxImg").src = item.full;
    document.getElementById("lightboxImg").alt = item.alt;
    document.getElementById("lightboxCaption").textContent = item.alt;
  }
  document.getElementById("lightboxClose")?.addEventListener("click", ()=>{
    document.getElementById("lightbox").classList.remove("is-open");
    document.body.style.overflow = "";
  });
  document.getElementById("lightboxPrev")?.addEventListener("click", ()=>{
    galleryState.lightboxIndex = (galleryState.lightboxIndex - 1 + currentList.length) % currentList.length;
    showLightboxImage();
  });
  document.getElementById("lightboxNext")?.addEventListener("click", ()=>{
    galleryState.lightboxIndex = (galleryState.lightboxIndex + 1) % currentList.length;
    showLightboxImage();
  });
  document.addEventListener("keydown", (e)=>{
    if(!document.getElementById("lightbox")?.classList.contains("is-open")) return;
    if(e.key === "Escape") document.getElementById("lightboxClose").click();
    if(e.key === "ArrowLeft") document.getElementById("lightboxPrev").click();
    if(e.key === "ArrowRight") document.getElementById("lightboxNext").click();
  });

  // 모바일 스와이프
  let touchStartX = null;
  const lb = document.getElementById("lightbox");
  lb?.addEventListener("touchstart", e=> touchStartX = e.touches[0].clientX);
  lb?.addEventListener("touchend", e=>{
    if(touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if(dx > 50) document.getElementById("lightboxPrev").click();
    if(dx < -50) document.getElementById("lightboxNext").click();
    touchStartX = null;
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  fillContactFields();
  bindCopyAddress();
});
