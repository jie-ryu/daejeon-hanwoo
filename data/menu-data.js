/**
 * ===================================================================
 *  메뉴 데이터 파일 (menu-data.js)
 *  ------------------------------------------------------------------
 *  대표 한우 메뉴 / 가족 메뉴 / 세트 메뉴 / 한우 등급 정보를 관리합니다.
 *  가격, 중량, 구성은 실제 확정된 값으로 바꿔서 사용하세요.
 *  값이 비어 있으면 화면에는 "[가격 입력]" 등으로 안내 문구가 표시됩니다.
 * ===================================================================
 */

// ---------- 1. 대표 한우 메뉴 ----------
const HANWOO_MENU = [
  {
    id: "special",
    name: "가족 한우 모둠",
    image: "images/menu-special.jpg",
    imageAlt: "숯불 위에서 구워지는 대전한우 가족 한우 모둠",
    part: "",              // 구성 → 비면 [구성 입력]
    weight: "",            // 중량 → 비면 [중량 입력]
    price: "",             // 가격 → 비면 [가격 입력]
    recommendPeople: "",   // 추천 인원
    description: "여러 부위를 한 접시에 담아 온 가족이 함께 즐기기 좋은 대표 모둠 메뉴입니다.",
    badge: "모임 추천",
    isSignature: true,
  },
  {
    id: "sirloin",
    name: "한우 등심",
    image: "images/menu-sirloin.jpg",
    imageAlt: "마블링이 살아있는 대전한우 등심 생고기",
    part: "등심",
    weight: "",
    price: "",
    recommendPeople: "",
    description: "부드러운 육질과 고소한 풍미가 어우러진 한우 등심입니다.",
    badge: "부모님 추천",
    isSignature: true,
  },
  {
    id: "tenderloin",
    name: "한우 안심",
    image: "images/menu-tenderloin.jpg",
    imageAlt: "결이 고운 대전한우 안심 생고기",
    part: "안심",
    weight: "",
    price: "",
    recommendPeople: "",
    description: "지방이 적고 부드러워 어르신과 아이들도 편하게 즐길 수 있습니다.",
    badge: "아이와 함께",
    isSignature: true,
  },
  {
    id: "chaekkeut",
    name: "한우 채끝",
    image: "images/menu-chaekkeut.jpg",
    imageAlt: "육즙이 풍부한 대전한우 채끝살",
    part: "채끝살",
    weight: "",
    price: "",
    recommendPeople: "",
    description: "쫄깃한 식감과 진한 육즙이 특징인 채끝살입니다.",
    badge: "",
    isSignature: false,
  },
  {
    id: "teuksu",
    name: "한우 특수부위 모둠",
    image: "images/menu-teuksu.jpg",
    imageAlt: "다양한 부위로 구성된 대전한우 특수부위 모둠",
    part: "",
    weight: "",
    price: "",
    recommendPeople: "",
    description: "특수부위를 다양하게 맛볼 수 있는 구성으로, 고기를 좋아하는 가족에게 추천합니다.",
    badge: "우리 가족 추천",
    isSignature: false,
  },
  {
    id: "yukhoe",
    name: "한우 육회",
    image: "images/menu-yukhoe.jpg",
    imageAlt: "신선한 대전한우 육회",
    part: "우둔살",
    weight: "",
    price: "",
    recommendPeople: "",
    description: "신선한 한우로 정성껏 무쳐낸 육회입니다.",
    badge: "",
    isSignature: false,
  },
];

// ---------- 2. 가족 메뉴 (식사류 / 어린이 / 부모님용) ----------
const FAMILY_MENU = [
  {
    id: "bulgogi",
    name: "한우 불고기",
    image: "images/menu-bulgogi.jpg",
    imageAlt: "달콤짭짤한 대전한우 불고기",
    price: "",
    spicy: false,
    kidsRecommend: true,
    isMeal: true,
    takeout: false,
  },
  {
    id: "galbitang",
    name: "한우 갈비탕",
    image: "images/menu-galbitang.jpg",
    imageAlt: "뜨끈하게 끓여낸 대전한우 갈비탕",
    price: "",
    spicy: false,
    kidsRecommend: true,
    isMeal: true,
    takeout: false,
  },
  {
    id: "yukhoe-bibimbap",
    name: "한우 육회비빔밥",
    image: "images/yukhoe-bibimbap.jpg",
    imageAlt: "신선한 한우 육회가 올라간 비빔밥",
    price: "",
    spicy: true,
    kidsRecommend: false,
    isMeal: true,
    takeout: false,
  },
  {
    id: "doenjang",
    name: "된장찌개",
    image: "images/menu-doenjang.jpg",
    imageAlt: "구수한 된장찌개",
    price: "",
    spicy: false,
    kidsRecommend: true,
    isMeal: true,
    takeout: false,
  },
  {
    id: "naengmyeon",
    name: "냉면",
    image: "images/menu-naengmyeon.jpg",
    imageAlt: "시원한 냉면",
    price: "",
    spicy: false,
    kidsRecommend: false,
    isMeal: true,
    takeout: false,
  },
  {
    id: "kids-menu",
    name: "어린이 메뉴",
    image: "images/menu-kids.jpg",
    imageAlt: "[어린이 메뉴 정보 입력]",
    price: "",
    spicy: false,
    kidsRecommend: true,
    isMeal: true,
    takeout: false,
    note: "[어린이 메뉴 정보 입력]",
  },
  {
    id: "rice",
    name: "공깃밥",
    image: "",
    imageAlt: "",
    price: "",
    spicy: false,
    kidsRecommend: true,
    isMeal: true,
    takeout: false,
  },
  {
    id: "egg-steam",
    name: "계란찜",
    image: "",
    imageAlt: "",
    price: "",
    spicy: false,
    kidsRecommend: true,
    isMeal: false,
    takeout: false,
  },
  {
    id: "nurungji",
    name: "누룽지",
    image: "",
    imageAlt: "",
    price: "",
    spicy: false,
    kidsRecommend: true,
    isMeal: false,
    takeout: false,
  },
  {
    id: "dessert",
    name: "후식 메뉴",
    image: "",
    imageAlt: "",
    price: "",
    spicy: false,
    kidsRecommend: false,
    isMeal: false,
    takeout: false,
  },
];

// ---------- 3. 가족 세트 및 모임 메뉴 ----------
const FAMILY_SETS = [
  {
    id: "set-2",
    name: "2인 한우 세트",
    people: "2인 기준",
    hanwooComposition: "[구성 입력]",
    mealComposition: "[구성 입력]",
    price: "[가격 입력]",
    addOn: "[추가 선택 메뉴 입력]",
    reservationRequired: false,
  },
  {
    id: "set-3-4",
    name: "3~4인 가족 세트",
    people: "3~4인 기준",
    hanwooComposition: "[구성 입력]",
    mealComposition: "[구성 입력]",
    price: "[가격 입력]",
    addOn: "[추가 선택 메뉴 입력]",
    reservationRequired: false,
  },
  {
    id: "set-5-6",
    name: "5~6인 가족 모임 세트",
    people: "5~6인 기준",
    hanwooComposition: "[구성 입력]",
    mealComposition: "[구성 입력]",
    price: "[가격 입력]",
    addOn: "[추가 선택 메뉴 입력]",
    reservationRequired: true,
  },
  {
    id: "set-parents",
    name: "부모님 모시기 좋은 추천 세트",
    people: "[인원 입력]",
    hanwooComposition: "[구성 입력]",
    mealComposition: "[구성 입력]",
    price: "[가격 입력]",
    addOn: "[추가 선택 메뉴 입력]",
    reservationRequired: true,
  },
  {
    id: "set-birthday",
    name: "생일 및 기념일 추천 세트",
    people: "[인원 입력]",
    hanwooComposition: "[구성 입력]",
    mealComposition: "[구성 입력]",
    price: "[가격 입력]",
    addOn: "[추가 선택 메뉴 입력]",
    reservationRequired: true,
  },
];

// ---------- 4. 한우 품질 / 원산지 정보 ----------
const QUALITY_INFO = {
  grade: "[정보 입력]",
  origin: "[정보 입력]",
  supplyInfo: "[정보 입력]",
  partFeature: "[정보 입력]",
  storageInfo: "[정보 입력]",
  originBoardImage: "images/origin-board.jpg",
  certificateImages: ["images/certificate.jpg"],
};

// ---------- 5. 공지사항 ----------
const NOTICES = [
  {
    id: "n1",
    title: "[공지 예시] 명절 연휴 영업 안내",
    date: "",
    category: "영업안내",
    content: "명절 연휴 기간 영업시간 및 휴무일은 확정되는 대로 안내드립니다.",
  },
  {
    id: "n2",
    title: "[공지 예시] 단체 예약 안내",
    date: "",
    category: "예약안내",
    content: "10인 이상 단체 방문 시 사전 예약을 부탁드립니다.",
  },
];

// ---------- 6. 방문 목적 ----------
const VISIT_PURPOSES = [
  { id: "parents", label: "부모님을 모시는 식사", image: "images/private-room.jpg" },
  { id: "weekend", label: "아이들과 함께하는 주말 외식", image: "images/family-table.jpg" },
  { id: "birthday", label: "생일 및 기념일", image: "images/family-full-table.jpg" },
  { id: "family-gathering", label: "가족 모임", image: "images/private-room2.jpg" },
  { id: "relatives", label: "친척 모임", image: "images/interior-main.jpg" },
  { id: "small-dinner", label: "소규모 회식", image: "images/interior-main.jpg" },
  { id: "group", label: "단체 식사", image: "images/private-room2.jpg" },
];

if (typeof module !== "undefined") {
  module.exports = {
    HANWOO_MENU, FAMILY_MENU, FAMILY_SETS, QUALITY_INFO, NOTICES, VISIT_PURPOSES,
  };
}
