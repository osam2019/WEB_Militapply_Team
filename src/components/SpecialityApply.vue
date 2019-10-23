<template>
  <main>
    <SearchFilter
      :groupId="groupId"
      :categoryId="categoryId"
      :specialityId="specialityId"
      buttonTxt="지원"
      :red="true"
      button-icon="icofont-file-text"
      @search="doApply"
    />
    <section v-if="specialityId === 15">
      <h1>
        [기본 질문]
      </h1>
      <h3>
        1. 군 생활 중 이루고 싶은 것은? (500자)
      </h3>
      <el-input
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 5 }"
        placeholder="Please input"
        v-model="input.selfIntro1"
      >
      </el-input>
      <h3>
        2. S/W 개발병을 지원한 동기는? (500자)
      </h3>
      <el-input
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 5 }"
        placeholder="Please input"
        v-model="input.selfIntro2"
      >
      </el-input>
      <h3>
        3. 지금까지 했던 프로젝트 중 기억에 남는 것은 무엇인가? (500자)
      </h3>
      <el-input
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 5 }"
        placeholder="Please input"
        v-model="input.selfIntro3"
      >
      </el-input>
      <h1>
        [기본 요건]
      </h1>
      <article style="text-align: left; line-height: 1.5rem;">
        <p>○ 다음 중 어느하나에 해당되는 사람</p>
        <p>▶ 병역판정검사 결과 신체등급 1급~3급자로서 현역병입영 대상인 사람</p>
        <p>
          ▶ 병역판정검사를 받지 아니한 사람(18세자 포함)은 현역병지원 신체검사
          결과 신체등급 1급~3급인 사람
        </p>
        <p>
          (다만, 19세 이상인 사람으로 고퇴이하의 학력자는 징병(모병지원)
          신체검사 시에 '현역병입영 희망원서'를 제출하여 현역병입영 대상자로
          처분된 사람만 해당)
        </p>
      </article>
      <h1>
        [자격 요건]
      </h1>
      <article style="text-align: left; line-height: 1.5rem;">
        <el-checkbox>
          전산, 컴퓨터, 소프트웨어, 인터넷, 전자계산, 정보보호, 전기․전자,
          미디어, IT관련, 정보통신, 정보시스템, 산업디자인 관련학과 전공 2년
          수료 이상자
        </el-checkbox>
        <el-checkbox>
          기사(정보처리, 전자계산기, 정보보안, 시각디자인, 컬러리스트),
          산업기사(정보처리, 전자계산기, 정보보안, 시각디자인, 컬러리스트)
        </el-checkbox>
        <el-checkbox>TOPCIT 정기평가 300점 이상 획득한자</el-checkbox>
        <el-checkbox>국제자격증(CISSP, CISA)를 취득한 사람</el-checkbox>
        <el-checkbox>
          SW마에스트로 또는 BoB(Best of the Best) 연수과정 선발/수료/임명자
        </el-checkbox>

        <p style="margin-top: 30px;">SW마에스트로 인정기관 : 과학기술정보통신부, 정보통신기술진흥센터</p>
        <p>
          BoB(Best of the Best) 인정기관 : 과학기술정보통신부,
          정보통신기술진흥센터, 한국정보기술연구원
        </p>
      </article>
      <h1>
        [구비 서류]
      </h1>
      <article>
        <p>최종학력(졸업,수료,휴학,퇴학,재학) 증명서 1부 <el-button type="primary">업로드</el-button></p>
        <p style="font-size: 0.8rem">- 최종학력서류가 해외서류일 경우 한국어 번역공증서류 포함</p>
        <p>고등학교생활기록부 1부 <el-button type="primary">업로드</el-button></p>
        <p>자격증 사본 1부(해당자) <el-button type="primary">업로드</el-button></p>
        <p>연수과정 참가확인서(연수기간 포함) 사본 1부(해당자) <el-button type="primary">업로드</el-button></p>
      </article>
      <el-button type="success" style="display: block; width:100%; margin-top: 50px;">저장</el-button>
    </section>
  </main>
</template>

<script>
import SearchFilter from "./SearchFilter.vue";

export default {
  name: "ApplyPage",
  components: {
    SearchFilter
  },
  data() {
    return {
      groupId: this.$route.params.group
        ? parseInt(this.$route.params.group)
        : -1,
      categoryId: this.$route.params.category
        ? parseInt(this.$route.params.category)
        : -1,
      specialityId: this.$route.params.speciality
        ? parseInt(this.$route.params.speciality)
        : -1,
      input: {
        selfIntro1: "",
        selfIntro2: "",
        selfIntro3: ""
      }
    };
  },
  watch: {
    $route(to) {
      // 경로 변경에 반응하여...
      this.groupId = to.params.group ? parseInt(to.params.group) : -1;
      this.categoryId = to.params.category ? parseInt(to.params.category) : -1;
      this.specialityId = to.params.speciality
        ? parseInt(to.params.speciality)
        : -1;
    }
  },
  methods: {
    doApply(groupId, categoryId, specialityId) {
      console.log("Apply..!");
      this.groupId = groupId;
      this.categoryId = categoryId;
      this.specialityId = specialityId;
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.7rem;
  padding: 5px;
  margin: 15px auto;
}
h3 {
  text-align: left;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.5rem;
  padding: 5px;
  margin: 15px auto;
}
  .el-checkbox {
    display: block;
  }

  article {
    text-align: left;
  }

  article p {
    padding: 5px;
    margin: 10px;
  }
</style>
