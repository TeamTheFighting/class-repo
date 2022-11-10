// 이달의 여행 좌표
var travelOfTheMonthPositions = [
  new kakao.maps.LatLng(36.331519, 127.433637),
  new kakao.maps.LatLng(36.2886167, 127.3969124),
  new kakao.maps.LatLng(36.3656689, 127.3878868),
  new kakao.maps.LatLng(36.3755897, 127.3766119),
  new kakao.maps.LatLng(36.3605754, 127.3581569),
];
// 추천 여행 좌표
var recommendedTravelPositions = [
  new kakao.maps.LatLng(36.331519, 127.433637),
  new kakao.maps.LatLng(36.3664537, 127.383661),
  new kakao.maps.LatLng(36.3765465, 127.388132),
  new kakao.maps.LatLng(36.3727738, 127.4745761),
  new kakao.maps.LatLng(36.3293875, 127.4319877),
];
// 맛집 투어 좌표
var goodRestaurantPositions = [
  new kakao.maps.LatLng(36.331519, 127.433637),
  new kakao.maps.LatLng(36.3419729, 127.4250897),
  new kakao.maps.LatLng(36.3592139, 127.4266165),
  new kakao.maps.LatLng(36.3526116, 127.3872618),
  new kakao.maps.LatLng(36.3276642, 127.4272908),
];
// 테마 여행 좌표
var themeTourPositions = [
  new kakao.maps.LatLng(36.331519, 127.433637),
  new kakao.maps.LatLng(36.3478241, 127.4567871),
  new kakao.maps.LatLng(36.3649667, 127.4414303),
  new kakao.maps.LatLng(36.3436074, 127.3960741),
  new kakao.maps.LatLng(36.3607227, 127.3783182),
];

// 장소 위치 주소
var travelOfTheMonthPlaces = [
  'https://place.map.kakao.com/7830504',
  'https://place.map.kakao.com/11505186',
  'https://place.map.kakao.com/8130712',
  'https://place.map.kakao.com/8217829',
  'https://place.map.kakao.com/8478591',
];
var recommendedTravelPlaces = [
  'https://place.map.kakao.com/7829860',
  'https://place.map.kakao.com/26363151',
  'https://place.map.kakao.com/1386162489',
  'https://place.map.kakao.com/1408703362',
  'https://place.map.kakao.com/7830504',
];
var goodRestaurantPlaces = [
  'https://place.map.kakao.com/16302660',
  'https://place.map.kakao.com/26975999',
  'https://place.map.kakao.com/1746986738',
  'https://place.map.kakao.com/17733090',
  'https://place.map.kakao.com/7830504',
];
var themeTourPlaces = [
  'https://place.map.kakao.com/8027006',
  'https://place.map.kakao.com/11095487',
  'https://place.map.kakao.com/12683395',
  'https://place.map.kakao.com/10679334',
  'https://place.map.kakao.com/7830504',
];

// 장소 사진 주소
var travelOfTheMonthImages = [
  'https://lh5.googleusercontent.com/p/AF1QipO564CQNFtskz5Chi7YJhZpKw3eeK_ww2lEp5pC=w408-h306-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipP2LQDefthNled7iiCFcV5ONpsXxa8uBch8LUsQ=w408-h306-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipMKvD8zzZLzVmKZENxJsHxT-uO1hHN5LBQAr7jm=w426-h240-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipNiN-L2EqoD4VoMwIsHiZR7cJa7HEt85BLzSSNS=w408-h306-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipPxrf2DE_L7X_kAGmFKeF0RVE2LUyREqVmevNxG=w408-h306-k-no',
];
var recommendedTravelImages = [
  'https://lh5.googleusercontent.com/p/AF1QipO564CQNFtskz5Chi7YJhZpKw3eeK_ww2lEp5pC=w408-h306-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipPNj1A20CmoL815N_9cmAkrrezT_ALuEy8CWJHm=w408-h306-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipMzrsvaDuIcad9JLN6aFHJ3UCTyf2ZSvIWqHA1P=w408-h725-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipOtqUZXZ_vB7r6MQE7ym2Jox9K9Uwi4NIQQcJ9W=w408-h272-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipNtPl4wiWP5ZmShu-ZXer0HYZP9s2O3a3On1v9u=w408-h306-k-no',
];
var goodRestaurantImages = [
  'https://lh5.googleusercontent.com/p/AF1QipO564CQNFtskz5Chi7YJhZpKw3eeK_ww2lEp5pC=w408-h306-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipO8qxGed2LBz-EhaDCf0G0HKnf4o8Lx47Zh6ruF=w408-h544-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipMzCEyQVGaqC5CkEESfocaVYxSWwapD3VRyOZo1=w408-h306-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipNePDIl57vjz6mqoDGFofJqhauhuJI6GFfK_b7G=w426-h240-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipMJY39G1fj04fSFb9JqTf5Zq3-vEzfrGfCjCtB4=w408-h306-k-no',
];
var themeTourImages = [
  'https://lh5.googleusercontent.com/p/AF1QipO564CQNFtskz5Chi7YJhZpKw3eeK_ww2lEp5pC=w408-h306-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipNldX_PRjAsFkzpG_Wzue6aNeMfM0gKA6tPuMZI=w408-h306-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipO5X3qw6dWXel7vyIi083cABsfkzXXLhtX_wbKl=w426-h240-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipPJj7gMETkINOQHEtBBZUJbdCXIu5AKYPxWJflT=w408-h306-k-no',
  'https://lh5.googleusercontent.com/p/AF1QipNjtL1sSUzz5rq8ZMgS3Edz5o3aeLuC8_M79qTX=w408-h306-k-no',
];

//장소 이름
var travelOfTheMonthName = [
  '대전역',
  '오월드 ',
  '한밭수목원',
  '국립중앙과학관',
  '유림공원',
];
var recommendedTravelName = [
  '대전역',
  '예술의 전당',
  '한빛탑',
  '대청호',
  '중앙시장',
];
var goodRestaurantName = [
  '대전역',
  '오씨칼국수',
  '오문창순대국밥',
  '수복삼계탕',
  '성심당본점',
];
var themeTourName = [
  '대전역',
  '우암사적공원',
  '동춘당역사공원',
  '도산서원',
  '둔산선사유적지',
];

var travelOfTheMonthAddress = [
  '대전광역시 동구 중앙로 215',
  '대전광역시 중구 사정공원로 70',
  '대전광역시 서구 둔산대로117번길 169',
  '대전광역시 유성구 대덕대로 481',
  '대전광역시 유성구 어은로 27',
];
var recommendedTravelAddress = [
  '대전광역시 동구 중앙로 215',
  '대전광역시 서구 둔산대로117번길 135',
  '대전광역시 유성구 대덕대로 480',
  '대전광역시 동구 추동 328',
  '대전광역시 동구 대전로 783',
];
var goodRestaurantAddress = [
  '대전광역시 동구 중앙로 215',
  '대전광역시 동구 옛신탄진로 13',
  '대전광역시 대덕구 한밭대로 1153',
  '대전 서구 둔산중로 66',
  '대전광역시 중구 대종로480번길 15',
];
var themeTourAddress = [
  '대전광역시 동구 중앙로 215',
  '대전 동구 충정로 53',
  '대전 대덕구 동춘당로 90',
  '대전 서구 남선로 8',
  '대전 서구 대덕대로317번길 9',
];
