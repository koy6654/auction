export const template = [
  { route: "0_template", path: "0_1_template", title: "템플릿" },
];

export const main = [
  { route: "1_main", path: "1_1_main-menu", title: "메인 메뉴" },
  { route: "1_main", path: "1_2_signup-signin", title: "로그인/회원가입" },
  { route: "1_main", path: "1_3_price-info", title: "요금안내" },
  { route: "1_main", path: "1_4_trial-request", title: "무료체험신청" },
];

export const auction = [
  { route: "2_auction", path: "2_1_total-search", title: "경매 - 종합검색" },
  { route: "2_auction", path: "2_2_area-search", title: "경매 - 지역별검색" },
  { route: "2_auction", path: "2_3_date-search", title: "경매 - 기일별검색" },
  { route: "2_auction", path: "2_4_court-search", title: "경매 - 법원별검색" },
  {
    route: "2_auction",
    path: "2_5_purpose-area-search",
    title: "경매 - 용도별지역검색",
  },
  { route: "2_auction", path: "2_6_vehicle-search", title: "경매 - 차량/중기" },
  { route: "2_auction", path: "2_7_apartment", title: "경매 - 아파트" },
  { route: "2_auction", path: "2_8_recommended", title: "경매 - 추천물건" },
  { route: "2_auction", path: "2_9_top50", title: "경매 - 조회수 TOP 50" },
];

export const map = [
  { route: "3_map", path: "3_1_map-search", title: "지도검색" },
];

export const edu_data = [
  {
    route: "4_edu_data",
    path: "4_1_course-info",
    title: "교육/자료실 - 수강안내",
  },
  {
    route: "4_edu_data",
    path: "4_2_court-info",
    title: "교육/자료실 - 법원안내",
  },
  {
    route: "4_edu_data",
    path: "4_3_auction-forms",
    title: "교육/자료실 - 경매서식",
  },
  {
    route: "4_edu_data",
    path: "4_4_bid-form-guide",
    title: "교육/자료실 - 입찰표작성",
  },
];

export const statistics = [
  {
    route: "5_statistics",
    path: "5_1_today-auctions",
    title: "통계 - 오늘진행건수",
  },
  {
    route: "5_statistics",
    path: "5_2_daily-sale-rate",
    title: "통계 - 일일매각가율",
  },
  {
    route: "5_statistics",
    path: "5_3_weekly-sale-rate",
    title: "통계 - 주간매각가율",
  },
  {
    route: "5_statistics",
    path: "5_4_court-stats",
    title: "통계 - 법원별통계",
  },
];

export const favorites = [
  { route: "6_favorites", path: "6_1_favorite-items", title: "관심물건" },
  {
    route: "6_favorites",
    path: "6_2_personal-bid-calendar",
    title: "관심물건 - 개인입찰달력",
  },
];

export const mypage = [
  { route: "7_mypage", path: "7_1_mypage", title: "마이페이지" },
];

export const support = [
  { route: "8_support", path: "8_1_notice", title: "고객지원 - 공지사항" },
  { route: "8_support", path: "8_2_faq", title: "고객지원 - 자주 묻는 질문" },
  { route: "8_support", path: "8_3_inquiry", title: "고객지원 - 1:1 문의" },
  {
    route: "8_support",
    path: "8_4_remote-support",
    title: "고객지원 - 원격지원",
  },
  { route: "8_support", path: "8_5_bug-report", title: "고객지원 - 오류제보" },
  {
    route: "8_support",
    path: "8_6_delete-request",
    title: "고객지원 - 삭제요청",
  },
];

export const details = [
  { route: "9_details", path: "9_1_item-detail", title: "물건상세" },
  { route: "9_details", path: "9_2_email-form", title: "이메일 폼" },
];

export const test = [
  { route: "test", path: "test", title: "테스트페이지" },
];

export const pages = [
  ...template,
  ...main,
  ...auction,
  ...map,
  ...edu_data,
  ...statistics,
  ...favorites,
  ...mypage,
  ...support,
  ...details,
];
