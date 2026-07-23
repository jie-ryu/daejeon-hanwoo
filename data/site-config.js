/**
 * ===================================================================
 *  사이트 전체 설정 파일 (site-config.js)
 *  ------------------------------------------------------------------
 *  식당명, 주소, 전화번호, 영업시간, 예약 링크 등 자주 바뀌는 정보는
 *  전부 이 파일 하나에서만 수정하면 사이트 전체(모든 페이지, 상단/하단,
 *  고정 버튼, 지도)에 자동으로 반영됩니다.
 *
 *  ⚠️ 이 파일 외의 html/js 파일은 직접 수정할 필요가 없습니다.
 *  ⚠️ 값을 비워두면 "[정보 입력]"처럼 안내 문구가 대신 표시됩니다.
 * ===================================================================
 */

const SITE_CONFIG = {
  // ---------- 기본 정보 ----------
  restaurantName: "대전한우",              // 식당명 (임시)
  sloganShort: "온 가족이 편안하게 즐기는 한우 한 상",
  ownerName: "",                          // 대표자명 → 없으면 [정보 입력] 표시
  businessRegNo: "",                      // 사업자등록번호
  regionKeyword: "대전",                  // SEO용 지역명 (예: 대전, 유성구 등)

  // ---------- 연락처 ----------
  phone: "042-635-8892",                  // 전화번호 (하이픈 포함, 클릭 시 자동 전화연결)
  phoneDisplay: "042-635-8892",

  // ---------- 주소 ----------
  address: "",                            // 전체 주소 → [정보 입력]
  addressDetail: "",                      // 상세 위치 설명 (예: oo빌딩 1층)
  nearestStation: "",                     // 가까운 버스정류장/지하철역

  // ---------- 영업시간 ----------
  hours: {
    weekday: "11:00 - 22:00",
    weekend: "11:00 - 22:00",
    breakTime: "",                        // 브레이크타임, 없으면 "브레이크타임 없음"
    lastOrder: "21:00",
    closedDay: "",                        // 정기휴무일, 없으면 "[정보 입력]"
  },

  // ---------- 예약 링크 ----------
  reservation: {
    naverBooking: "",                     // 네이버 예약 링크
    kakaoChannel: "",                     // 카카오톡 채널/문의 링크
    groupPhone: "042-635-8892",           // 단체예약 전용 번호(있다면)
    depositRequired: "",                  // 예약금 여부 [정보 입력]
    sameDayBooking: "",                   // 당일예약 가능 여부 [정보 입력]
  },

  // ---------- 지도 ----------
  map: {
    naverMapUrl: "",                      // 네이버지도 길찾기 링크
    kakaoMapUrl: "",                      // 카카오맵 길찾기 링크
    lat: "",                              // 위도
    lng: "",                              // 경도
  },

  // ---------- 편의시설 (실제 제공 여부에 맞게 true/false로 켜고 끄기) ----------
  amenities: {
    kidsChair: true,
    kidsTableware: true,
    strollerAccess: true,
    wideSeat: true,
    groupSeat: true,
    privateRoom: true,
    freeParking: true,
    takeout: false,
    reservation: true,
    separateRestroom: false,
    wheelchairAccess: false,
    diaperChangingTable: false,
    kidsPlayroom: false,
  },

  // ---------- SNS / 외부 링크 ----------
  sns: {
    naverPlace: "",
    instagram: "",
    blog: "",
  },

  // ---------- 법적 정보 ----------
  legal: {
    privacyPolicyUrl: "privacy.html",
    termsUrl: "terms.html",
  },
};

// 값이 비어있으면 안내 문구로 대체해서 돌려주는 헬퍼
function withFallback(value, fallback = "[정보 입력]") {
  return value && String(value).trim().length > 0 ? value : fallback;
}

if (typeof module !== "undefined") {
  module.exports = { SITE_CONFIG, withFallback };
}
