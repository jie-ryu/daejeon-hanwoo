/**
 * gallery-data.js
 * 사진 갤러리에 표시될 이미지 목록입니다.
 * cat 값: all 표시용 분류 - hanwoo(한우) / menu(대표메뉴) / table(상차림) /
 *          family(가족메뉴) / interior(매장내부) / room(룸과단체석) / exterior(외관과주차장)
 * thumb: 목록에 쓰이는 작은 이미지, full: 확대 시 보여줄 원본 이미지
 * (지금은 임시 플레이스홀더이며 같은 파일을 골라 넣으면 그대로 교체됩니다.)
 */
const GALLERY_IMAGES = [
  { cat:"hanwoo", thumb:"images/meat-raw-showcase.jpg", full:"images/meat-raw-showcase.jpg", alt:"신선한 대전한우 생고기" },
  { cat:"hanwoo", thumb:"images/menu-sirloin.jpg", full:"images/menu-sirloin.jpg", alt:"마블링이 좋은 한우 등심" },
  { cat:"hanwoo", thumb:"images/menu-tenderloin.jpg", full:"images/menu-tenderloin.jpg", alt:"부드러운 한우 안심" },
  { cat:"hanwoo", thumb:"images/meat-showcase-case.jpg", full:"images/meat-showcase-case.jpg", alt:"매장 내 한우 정육 쇼케이스" },
  { cat:"menu", thumb:"images/menu-special.jpg", full:"images/menu-special.jpg", alt:"숯불에 구워지는 가족 한우 모둠" },
  { cat:"menu", thumb:"images/menu-galbitang.jpg", full:"images/menu-galbitang.jpg", alt:"뜨끈한 한우 갈비탕" },
  { cat:"menu", thumb:"images/gomtang-serve.jpg", full:"images/gomtang-serve.jpg", alt:"정성껏 끓여낸 한우 곰탕" },
  { cat:"menu", thumb:"images/yukhoe-bibimbap.jpg", full:"images/yukhoe-bibimbap.jpg", alt:"신선한 한우 육회비빔밥" },
  { cat:"table", thumb:"images/family-full-table.jpg", full:"images/family-full-table.jpg", alt:"온 가족을 위한 정성스러운 한 상" },
  { cat:"table", thumb:"images/family-full-table2.jpg", full:"images/family-full-table2.jpg", alt:"풍성한 밑반찬이 함께하는 상차림" },
  { cat:"table", thumb:"images/banchan-set.jpg", full:"images/banchan-set.jpg", alt:"정갈한 밑반찬 모음" },
  { cat:"table", thumb:"images/banchan-detail1.jpg", full:"images/banchan-detail1.jpg", alt:"제철 나물 밑반찬" },
  { cat:"table", thumb:"images/banchan-detail2.jpg", full:"images/banchan-detail2.jpg", alt:"매콤 새콤한 밑반찬" },
  { cat:"family", thumb:"images/family-table.jpg", full:"images/family-table.jpg", alt:"가족이 함께 앉는 식사 테이블" },
  { cat:"family", thumb:"images/menu-bulgogi.jpg", full:"images/menu-bulgogi.jpg", alt:"온 가족이 즐기는 한우 불고기" },
  { cat:"family", thumb:"images/menu-kids.jpg", full:"images/menu-kids.jpg", alt:"어린이 메뉴 이미지 자리" },
  { cat:"interior", thumb:"images/interior-main.jpg", full:"images/interior-main.jpg", alt:"넉넉한 좌석의 메인 홀" },
  { cat:"interior", thumb:"images/waiting-area.jpg", full:"images/waiting-area.jpg", alt:"편안한 대기 공간" },
  { cat:"room", thumb:"images/private-room.jpg", full:"images/private-room.jpg", alt:"가족 모임 좋은 프라이빗 룸" },
  { cat:"room", thumb:"images/private-room2.jpg", full:"images/private-room2.jpg", alt:"단체 모임이 가능한 룸" },
  { cat:"exterior", thumb:"images/exterior.jpg", full:"images/exterior.jpg", alt:"대전한우 매장 외관" },
  { cat:"exterior", thumb:"images/entrance.jpg", full:"images/entrance.jpg", alt:"매장 입구" },
  { cat:"exterior", thumb:"images/parking.jpg", full:"images/parking.jpg", alt:"이용 가능한 주차장" },
  { cat:"hanwoo", thumb:"images/hanwoo-bite1.jpg", full:"images/hanwoo-bite1.jpg", alt:"노릇하게 구워진 한우 한 점" },
  { cat:"table", thumb:"images/banchan-detail3.jpg", full:"images/banchan-detail3.jpg", alt:"깻잎짠지와 무말랭이 밑반찬" },
  { cat:"table", thumb:"images/banchan-detail4.jpg", full:"images/banchan-detail4.jpg", alt:"나물과 김자반 밑반찬" },
  { cat:"table", thumb:"images/banchan-detail5.jpg", full:"images/banchan-detail5.jpg", alt:"고들빼기와 무말랭이 밑반찬" },
  { cat:"table", thumb:"images/banchan-bite1.jpg", full:"images/banchan-bite1.jpg", alt:"젓가락으로 집은 나물 밑반찬" },
  { cat:"table", thumb:"images/banchan-bite2.jpg", full:"images/banchan-bite2.jpg", alt:"젓가락으로 집은 깻잎짠지" },
  { cat:"hanwoo", thumb:"images/grill-scene1.jpg", full:"images/grill-scene1.jpg", alt:"숯불 위에서 노릇하게 구워지는 한우" },
  { cat:"table", thumb:"images/table-set3.jpg", full:"images/table-set3.jpg", alt:"정성스럽게 차려진 한 상" },
];

if (typeof module !== "undefined") { module.exports = { GALLERY_IMAGES }; }
