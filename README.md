# 대전한우 (임시 상호) 웹사이트

가족 손님이 편안하게 한우를 즐길 수 있는 한우 전문점을 위한 홈페이지입니다.
코드를 잘 몰라도 아래 안내만 따라 하면 **식당명, 주소, 전화번호, 메뉴, 가격, 영업시간, 사진**을
쉽게 바꿀 수 있도록 만들었습니다.

---

## 1. 폴더 구조

```
site/
├─ index.html          메인 페이지
├─ menu.html            한우/가족/세트 메뉴 페이지
├─ gallery.html          사진 갤러리 페이지
├─ space.html            공간 안내 페이지
├─ reservation.html      예약 안내 페이지
├─ location.html         오시는 길 페이지
├─ notice.html           공지사항 페이지
├─ privacy.html          개인정보처리방침 (내용 입력 필요)
├─ terms.html            이용약관 (내용 입력 필요)
│
├─ css/
│  └─ style.css          전체 디자인 스타일
│
├─ js/
│  ├─ common.js          헤더/푸터/모바일 메뉴/하단 고정 버튼 (수정 불필요)
│  └─ page-render.js     메뉴/갤러리/공지 등을 화면에 그려주는 기능 (수정 불필요)
│
├─ data/                 ⭐ 실제로 자주 수정하게 될 파일들
│  ├─ site-config.js      식당명, 주소, 전화번호, 영업시간, 예약 링크, 편의시설 설정
│  ├─ menu-data.js        한우 메뉴 / 가족 메뉴 / 세트 메뉴 / 한우 품질 정보 / 공지사항
│  └─ gallery-data.js     사진 갤러리에 보여줄 사진 목록
│
└─ images/               사진 폴더 (실제 사진으로 교체할 위치)
```

---

## 2. 가장 먼저 수정할 파일: `data/site-config.js`

메모장(또는 VS Code)으로 `data/site-config.js` 파일을 열고, 큰따옴표(" ") 안의
내용만 바꿔주세요. 나머지 구조(중괄호, 콜론, 쉼표)는 그대로 두어야 합니다.

| 항목 | 예시 |
|---|---|
| `restaurantName` | `"대전한우"` → 실제 상호명 |
| `phone`, `phoneDisplay` | `"042-635-8892"` |
| `address` | `"대전광역시 ○○구 ○○로 12"` |
| `hours.weekday`, `hours.weekend` | `"11:00 - 22:00"` |
| `hours.closedDay` | `"매주 월요일"` (없으면 빈 문자열로 두면 [정보 입력]으로 표시) |
| `reservation.naverBooking` | 네이버 예약 페이지 링크 |
| `reservation.kakaoChannel` | 카카오톡 채널/오픈채팅 링크 |
| `map.naverMapUrl`, `map.kakaoMapUrl` | 지도 길찾기 링크 |
| `amenities.*` | 실제 제공하는 시설만 `true`, 없으면 `false` |
| `sns.naverPlace`, `sns.instagram`, `sns.blog` | SNS 링크 |

이 파일 하나만 수정하면 **모든 페이지(헤더, 푸터, 모바일 하단 버튼, 예약/오시는길 페이지)**의
전화번호·주소·영업시간·지도 링크가 자동으로 함께 바뀝니다.

---

## 3. 메뉴와 가격 수정: `data/menu-data.js`

- `HANWOO_MENU` : 대표 한우 메뉴 (등심, 안심 등). `price`, `weight`, `part`, `recommendPeople`에
  실제 값을 입력하세요. 비워두면 화면에 `[가격 입력]`처럼 안내 문구가 표시됩니다.
- `FAMILY_MENU` : 불고기, 갈비탕, 어린이 메뉴 등 식사류.
- `FAMILY_SETS` : 인원별 세트 메뉴 구성과 가격.
- `QUALITY_INFO` : 한우 등급, 원산지, 유통 정보 (확인된 내용만 입력).
- `NOTICES` : 공지사항 목록 (제목, 날짜, 분류, 내용).
- `VISIT_PURPOSES` : "부모님을 모시는 식사" 등 추천 방문 목적 카드에 쓰이는 이미지.

메뉴를 새로 추가하고 싶다면, 기존 항목 하나를 복사해서 `{ }` 블록을 통째로 붙여넣고
`id`를 다른 값으로 바꾼 뒤 나머지 내용을 수정하면 됩니다.

---

## 4. 사진 교체 방법 (가장 중요!)

1. `images/` 폴더 안에는 **임시 이미지(플레이스홀더)**가 들어 있습니다.
   각 이미지에는 어떤 실제 사진이 들어가야 하는지 라벨이 적혀 있습니다.
2. 실제 사진 파일 이름을 아래 표와 **똑같이** 지어서 `images/` 폴더에 덮어씌우면
   코드를 전혀 건드리지 않고 사진이 교체됩니다.

| 파일명 | 용도 | 권장 크기 |
|---|---|---|
| `hero-main.jpg` | 메인 첫 화면 대표 사진 (가족 상차림) | 1600×900 |
| `menu-special.jpg` | 가족 한우 모둠 | 1000×750 |
| `menu-sirloin.jpg` | 한우 등심 | 1000×750 |
| `menu-tenderloin.jpg` | 한우 안심 | 1000×750 |
| `menu-chaekkeut.jpg` | 한우 채끝 | 1000×750 |
| `menu-teuksu.jpg` | 한우 특수부위 모둠 | 1000×750 |
| `menu-yukhoe.jpg` | 한우 육회 | 1000×750 |
| `menu-galbitang.jpg` | 한우 갈비탕 | 1000×750 |
| `menu-yukgaejang.jpg` | 한우 육개장 | 1000×750 |
| `menu-bulgogi.jpg` | 한우 불고기 | 1000×750 |
| `menu-doenjang.jpg` | 된장찌개 | 900×700 |
| `menu-naengmyeon.jpg` | 냉면 | 900×700 |
| `menu-kids.jpg` | 어린이 메뉴 | 900×700 |
| `family-table.jpg` | 가족 식사 테이블 | 1200×800 |
| `family-full-table.jpg`, `family-full-table2.jpg` | 전체 상차림 | 1300×850 |
| `banchan-set.jpg`, `banchan-detail1.jpg`, `banchan-detail2.jpg` | 밑반찬 | 900~1200 |
| `gomtang-serve.jpg`, `yukhoe-bibimbap.jpg` | 곰탕 / 육회비빔밥 | 1000×750 |
| `meat-raw-showcase.jpg` | 한우 생고기 | 1000×750 |
| `meat-showcase-case.jpg` | 정육 쇼케이스 | 1000×750 |
| `interior-main.jpg` | 메인 홀 | 1200×800 |
| `private-room.jpg`, `private-room2.jpg` | 룸 / 단체석 | 1200×800 |
| `exterior.jpg` | 매장 외관 | 1200×800 |
| `entrance.jpg` | 입구 | 900×700 |
| `parking.jpg` | 주차장 | 900×700 |
| `waiting-area.jpg` | 대기 공간 | 900×700 |
| `certificate.jpg`, `origin-board.jpg` | 인증서 / 원산지 표시판 | 900×700 |
| `staff.jpg` | 직원/서비스 | 900×700 |

갤러리에 사진을 더 추가하고 싶다면 `data/gallery-data.js`에 항목을 추가하고,
`cat` 값을 `hanwoo / menu / table / family / interior / room / exterior` 중
알맞은 분류로 지정해 주세요.

> 사진 용량이 크면 사이트가 느려집니다. 업로드 전 1MB 이하, JPG 또는 WebP로
> 압축하는 것을 권장합니다.

---

## 5. 자주 하는 질문

**Q. 전화번호를 누르면 바로 전화가 걸리나요?**
네. `site-config.js`의 `phone` 값을 기준으로 모든 "전화하기" 버튼이 `tel:` 링크로 연결됩니다.

**Q. 예약 버튼을 누르면 무엇이 열리나요?**
`reservation.naverBooking`, `reservation.kakaoChannel` 값을 입력하면 해당 링크로 연결됩니다.
비워두면 `#`으로 연결되니 꼭 실제 링크를 입력해 주세요.

**Q. 지도에 실제 지도를 넣고 싶어요.**
`location.html`, `index.html`의 `.map-wrap` 부분에 네이버지도/카카오맵 embed 코드를
붙여넣으면 실제 지도로 교체됩니다. (현재는 안내 문구만 표시되는 자리입니다.)

**Q. 편의시설 아이콘을 껐다 켰다 할 수 있나요?**
`site-config.js`의 `amenities` 항목에서 `true` / `false`로 조정하면 메인/공간 안내
페이지의 편의시설 아이콘이 자동으로 켜지고 꺼집니다.

**Q. 공지사항을 추가하려면?**
`data/menu-data.js`의 `NOTICES` 배열에 `{ id, title, date, category, content }` 형태로
새 항목을 추가하면 메인 화면 미리보기와 공지사항 전체 페이지에 자동으로 반영됩니다.

---

## 6. 배포하기

이 폴더 전체를 그대로 웹 호스팅(카페24, 가비아, Netlify, Vercel, GitHub Pages 등)에
업로드하면 별도의 서버 설정 없이 바로 작동합니다. (순수 HTML/CSS/JS로 제작되어
데이터베이스나 별도 빌드 과정이 필요하지 않습니다.)

---

## 7. 참고 - 현재 상태

- 지금 `images/` 폴더의 사진은 **실제 매장/음식 사진이 아직 연결되지 않아** 자리 표시용
  플레이스홀더입니다. 위 표를 참고해 실제 사진으로 교체해 주세요.
- 가격, 중량, 원산지, 등급 등 확인되지 않은 정보는 모두 `[정보 입력]` 형태로 표시되어 있습니다.
  임의로 채워 넣지 않았으니, 확정되는 대로 `site-config.js` / `menu-data.js`에 입력해 주세요.
