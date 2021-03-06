const randomNormal = require('random-normal');
const data = {
  groups: [
    { name: "육군", id: 1 },
    { name: "해군", id: 2 },
    { name: "해병대", id: 3 },
    { name: "공군", id: 4 }
  ],
  categories: [
    { id: 4, name: "전문특기병", groupId: 1 },
    { id: 1, name: "기술행정병", groupId: 1 },
    { id: 2, name: "취업맞춤특기병", groupId: 1 },
    { id: 3, name: "유급지원병", groupId: 1 },
    { id: 5, name: "어학병", groupId: 1 },
    { id: 6, name: "카투사", groupId: 1 },
    { id: 7, name: "동반입대병(일반)", groupId: 1 },
    { id: 8, name: "동반입대병(다문화)", groupId: 1 },
    { id: 9, name: "직계가족복무부대병", groupId: 1 },
    { id: 10, name: "연고지복무병", groupId: 1 },
    { id: 11, name: "기술병", groupId: 2 },
    { id: 12, name: "동반입대병", groupId: 2 },
    { id: 13, name: "유급지원병", groupId: 2 },
    { id: 14, name: "취업맞춤특기병", groupId: 2 },
    { id: 15, name: "기술병", groupId: 3 },
    { id: 16, name: "유급지원병", groupId: 3 },
    { id: 17, name: "취업맞춤특기병", groupId: 3 },
    { id: 18, name: "기술병", groupId: 4 },
    { id: 19, name: "유급지원병", groupId: 4 },
    { id: 20, name: "취업맞춤특기병", groupId: 4 }
  ],
  specialities: [
    {
      id: 15,
      detail: "/md/sw-dev.md",
      name: "S/W개발병",
      categoryId: 4,
      stats: {
        labels: [
          "정신적 업무강도",
          "육체적 업무강도",
          "야근",
          "전공적합",
          "휴가",
          "시간휙휙",
          "자유도"
        ],
        datasets: [
          {
            label: "부대 평균",
            data: [3.5, 3.03, 3.16, 2.66, 1.66, 3, 3.66]
          },
          {
            label: "국군지휘통신사령부",
            data: [2, 3, 4, 5, 0, 2, 3]
          },
          {
            label: "4284부대",
            data: [5, 4, 3, 2, 1, 2, 3]
          },
          {
            label: "육군본부",
            data: [3.5, 2.1, 2.2, 0.3, 4, 5, 5]
          }
        ]
      },
      comments: [
        "군대에서 코딩하는 최선의 방법!",
        "일반적인 코딩과는 달리 개발환경에 제약이 많은 편"
      ]
    },
    {
      id: 1,
      detail: "/md/no-data.md",
      name: "특공병",
      categoryId: 4
    },
    {
      id: 2,
      detail: "/md/no-data.md",
      name: "체육학조교병",
      categoryId: 4
    },
    {
      id: 3,
      detail: "/md/no-data.md",
      name: "유해발굴기록병",
      categoryId: 4
    },
    { id: 4, name: "군마병", categoryId: 4 },
    { id: 5, name: "의장병", categoryId: 4 },
    {
      id: 6,
      detail: "/md/no-data.md",
      name: "훈련소조교병",
      categoryId: 4
    },
    { id: 7, detail: "/md/no-data.md", name: "특전병", categoryId: 4 },
    { id: 8, detail: "/md/no-data.md", name: "방송병", categoryId: 4 },
    { id: 9, detail: "/md/no-data.md", name: "신호정보", categoryId: 4 },
    {
      id: 10,
      detail: "/md/no-data.md",
      name: "탐지분석병",
      categoryId: 4
    },
    {
      id: 11,
      detail: "/md/no-data.md",
      name: "드론운용및정비병",
      categoryId: 4
    },
    {
      id: 12,
      detail: "/md/no-data.md",
      name: "지형자료관리병",
      categoryId: 4
    },
    {
      id: 13,
      detail: "/md/no-data.md",
      name: "로더운전병",
      categoryId: 4
    },
    {
      id: 14,
      detail: "/md/no-data.md",
      name: "정보보호병",
      categoryId: 4
    },
    {
      id: 16,
      detail: "/md/no-data.md",
      name: "대형기동헬기정비병",
      categoryId: 4
    },
    {
      id: 17,
      detail: "/md/no-data.md",
      name: "화생방시험병",
      categoryId: 4
    },
    {
      id: 18,
      detail: "/md/no-data.md",
      name: "방사능분석연구보조병",
      categoryId: 4
    },
    {
      id: 19,
      detail: "/md/no-data.md",
      name: "생물학시험병",
      categoryId: 4
    },
    {
      id: 20,
      detail: "/md/no-data.md",
      name: "대형버스운전병",
      categoryId: 4
    },
    {
      id: 21,
      detail: "/md/no-data.md",
      name: "구급차량운전병",
      categoryId: 4
    },
    { id: 22, detail: "/md/no-data.md", name: "속기병", categoryId: 4 },
    {
      id: 23,
      detail: "/md/no-data.md",
      name: "지식재산관리병",
      categoryId: 4
    },
    {
      id: 24,
      detail: "/md/no-data.md",
      name: "특수임무헌병",
      categoryId: 4
    },
    {
      id: 25,
      detail: "/md/no-data.md",
      name: "MC승무헌병",
      categoryId: 4
    },
    { id: 26, detail: "/md/no-data.md", name: "33경호병", categoryId: 4 },
    { id: 27, detail: "/md/no-data.md", name: "수사헌병", categoryId: 4 },
    {
      id: 28,
      detail: "/md/no-data.md",
      name: "회계원가비용분석병",
      categoryId: 4
    },
    {
      id: 29,
      detail: "/md/no-data.md",
      name: "영상콘텐츠디자이너",
      categoryId: 4
    },
    {
      id: 30,
      detail: "/md/no-data.md",
      name: "그래픽디자이너",
      categoryId: 4
    },
    {
      id: 31,
      detail: "/md/no-data.md",
      name: "사진콘텐츠디자이너",
      categoryId: 4
    },
    {
      id: 32,
      detail: "/md/no-data.md",
      name: "군악병(목관악기)",
      categoryId: 4
    },
    {
      id: 33,
      detail: "/md/no-data.md",
      name: "군악병(금관악기)",
      categoryId: 4
    },
    {
      id: 34,
      detail: "/md/no-data.md",
      name: "군악병(타악기)",
      categoryId: 4
    },
    {
      id: 35,
      detail: "/md/no-data.md",
      name: "군악병(현악기)",
      categoryId: 4
    },
    {
      id: 36,
      detail: "/md/no-data.md",
      name: "군악병(국악)",
      categoryId: 4
    },
    {
      id: 37,
      detail: "/md/no-data.md",
      name: "군악병(실용음악)",
      categoryId: 4
    },
    {
      id: 38,
      detail: "/md/no-data.md",
      name: "유해발굴감식병",
      categoryId: 4
    },
    {
      id: 39,
      detail: "/md/no-data.md",
      name: "기독교군종병",
      categoryId: 4
    },
    {
      id: 40,
      detail: "/md/no-data.md",
      name: "천주교군종병",
      categoryId: 4
    },
    { id: 41, detail: "/md/no-data.md", name: "불교군종병", categoryId: 4 }
  ],
  posts: [
    {
      id: 1,
      title: "복무기간 단축 제대로 알고 입영합시다",
      contentSrc: "/md/post1.md",
      type: "information",
      time: 1571880086944
    },
    {
      id: 2,
      title: "'20년 입영대상 각 군 현역병 연간 모집일정 안내",
      contentSrc: "/md/post2.md",
      type: "notice",
      time: 1571880086941
    },
    {
      id: 3,
      title: "'20년 입영대상 해군 특전병, 심해잠수병 모집일정 안내",
      contentSrc: "/md/post1.md",
      type: "notice",
      time: 1571880086940
    },
    {
      id: 4,
      title: "2020년 1월 입영 육군기술행정병 모집안내",
      contentSrc: "/md/post1.md",
      type: "notice",
      time: 1571880086939
    },
    {
      id: 5,
      title: "현역병 모집 봉사활동 가산점 인정단체 확대",
      contentSrc: "/md/post1.md",
      type: "information",
      time: 1571880086938
    },
    {
      id: 6,
      title: "2017 함께성장 중소·벤처 일자리 박람회 개최",
      contentSrc: "/md/post1.md",
      type: "information",
      time: 1571880086937
    },
    {
      id: 7,
      title: "(추가모집) 2019년 11월에 입영하는 육군 기술행정병 추가모집",
      contentSrc: "/md/post1.md",
      type: "notice",
      time: 1571880086936
    },
    {
      id: 8,
      title: "(추가모집) 2019년 10월에 입영하는 육군 기술행정병 추가모집",
      contentSrc: "/md/post1.md",
      type: "notice",
      time: 1571880086935
    },
    {
      id: 9,
      title: "2019년 입영대상 해병대 병 모집안내",
      contentSrc: "/md/post1.md",
      type: "notice",
      time: 1571880086934
    },
    {
      id: 10,
      title: '"군복무 경력으로 취업문 뚫었어요~" - 매일경제(\'16.9.29.)',
      contentSrc: "/md/post1.md",
      type: "information",
      time: 1571880086933
    },
    {
      id: 11,
      title: "복무기간 단축 제대로 알고 입영합시다",
      contentSrc: "/md/post1.md",
      type: "information",
      time: 1571880086744
    },
    {
      id: 12,
      title: "'20년 입영대상 각 군 현역병 연간 모집일정 안내",
      contentSrc: "/md/post1.md",
      type: "notice",
      time: 1571880086741
    },
    {
      id: 13,
      title: "'20년 입영대상 해군 특전병, 심해잠수병 모집일정 안내",
      contentSrc: "/md/post1.md",
      type: "notice",
      time: 1571880086740
    },
    {
      id: 14,
      title: "2020년 1월 입영 육군기술행정병 모집안내",
      contentSrc: "/md/post1.md",
      type: "notice",
      time: 1571880086739
    },
    {
      id: 15,
      title: "현역병 모집 봉사활동 가산점 인정단체 확대",
      contentSrc: "/md/post1.md",
      type: "information",
      time: 1571880086738
    },
    {
      id: 21,
      title: "복무기간 단축 제대로 알고 입영합시다",
      contentSrc: "/md/post1.md",
      type: "information",
      time: 1571880086644
    },
    {
      id: 22,
      title: "'20년 입영대상 각 군 현역병 연간 모집일정 안내",
      contentSrc: "/md/post1.md",
      type: "notice",
      time: 1571880086641
    },
    {
      id: 23,
      title: "'20년 입영대상 해군 특전병, 심해잠수병 모집일정 안내",
      contentSrc: "/md/post1.md",
      type: "notice",
      time: 1571880086640
    },
    {
      id: 24,
      title: "2020년 1월 입영 육군기술행정병 모집안내",
      contentSrc: "/md/post1.md",
      type: "notice",
      time: 1571880086639
    },
    {
      id: 25,
      title: "현역병 모집 봉사활동 가산점 인정단체 확대",
      contentSrc: "/md/post1.md",
      type: "information",
      time: 1571880086638
    }
  ],
  events: [
    {
      title: "20.01 입영 지원서 접수",
      start: "2019-10-10",
      end: "2019-10-17",
      group: 1,
      description: "육군 기술행정병, 해군, 공군, 해병대"
    },
    {
      title: "20.01 1차 발표",
      start: "2019-10-25",
      group: 1,
      description: "육군 기술행정병, 해군, 공군, 해병대"
    },
    {
      title: "20.01 신검 / 면접",
      start: "2019-10-28",
      end: "2019-11-21",
      group: 1,
      description: "육군 기술행정병, 해군, 공군, 해병대"
    },
    {
      title: "20.01 최종 발표",
      start: "2019-11-29",
      group: 1,
      description: "육군 기술행정병, 해군, 공군, 해병대"
    },
    {
      title: "20.02 입영 지원서 접수",
      start: "2019-10-29",
      end: "2019-11-05",
      group: 2,
      description: "육군 기술행정병, 해군, 공군, 해병대"
    },
    {
      title: "20.02 1차 발표",
      start: "2019-11-14",
      group: 2,
      description: "육군 기술행정병, 해군, 공군, 해병대"
    },
    {
      title: "20.01 신검 / 면접",
      start: "2019-11-18",
      end: "2019-12-13",
      group: 2,
      description: "육군 기술행정병, 해군, 공군, 해병대"
    },
    {
      title: "20.01 최종 발표",
      start: "2019-12-27",
      group: 2,
      description: "육군 기술행정병, 해군, 공군, 해병대"
    },
    {
      title: "20.01 입영 지원서 접수",
      start: "2019-10-10",
      end: "2019-10-16",
      group: 3,
      description: "육군 동반입대병, 연고지복무병, 직계가족병"
    },
    {
      title: "20.01 1차 발표",
      start: "2019-10-17",
      group: 3,
      description: "육군 동반입대병, 연고지복무병, 직계가족병"
    },
    {
      title: "20.01 신체검사",
      start: "2019-10-18",
      end: "2019-11-12",
      group: 3,
      description: "육군 동반입대병, 연고지복무병, 직계가족병"
    },
    {
      title: "20.01 최종 발표",
      start: "2019-11-21",
      group: 3,
      description: "육군 동반입대병, 연고지복무병, 직계가족병"
    }
  ],
  users: [
    {
      id: 1
    }
  ]
};

data.watching = [
  {
    name: "SW 개발병",
    value: 2345
  },
  {
    name: "M/W 장비 운용병",
    value: 1243
  },
  {
    name: "의경",
    value: 1056
  },
  {
    name: "카투사",
    value: 852
  },
  {
    name: "공익",
    value: 512
  }
];

data.specialities.forEach(v => {
    v.competitiveRate = Math.round(randomNormal({mean: 5, dev: 2.3}) * 10) / 10 ;
    if(v.competitiveRate < 0) v.competitiveRate = 0;

});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

setInterval(function() {
  const len = data.watching.length;
  for (let i = 0; i < len; i++) {
    data.watching[i].value += getRandomIntInclusive(0, 30);
  }
}, 5000);

module.exports = () => data;
