<template>
  <section>
      <el-button type="success" style="float: right;">저장</el-button>
    <h1 style="clear: both;">학력사항</h1>
    <el-table :data="eduData">
      <el-table-column align="center" label="구분" prop="type">
      </el-table-column>
      <el-table-column align="center" label="학교명" prop="name">
        <template slot-scope="scope">
          <el-input placeholder="학교명" v-model="scope.row.name" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="학제" prop="hakje">
        <template slot-scope="scope">
          <el-select v-model="scope.row.hakje" placeholder="선택" value="">
            <el-option
              v-for="item in ['학제가', '뭐지']"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center" label="전공학과" prop="major">
        <template slot-scope="scope">
          <el-input placeholder="전공학과" v-model="scope.row.major" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="학년" prop="grade">
        <template slot-scope="scope">
          <el-select v-model="scope.row.grade" placeholder="선택" value="">
            <el-option
              v-for="item in [
                '1학년',
                '2학년',
                '3학년',
                '4학년',
                '5학년',
                '6학년'
              ]"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center" label="졸업구분" prop="graduate">
        <template slot-scope="scope">
          <el-select v-model="scope.row.graduation" placeholder="선택" value="">
            <el-option
              v-for="item in ['재학', '수료', '졸업', '중퇴']"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center" label="초기화">
        <template>
          <el-button style="background-color: #444; color: white;"
            >초기화</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <h1>자격/면허사항</h1>
    <p>
      자격/면허를 추가로 등록한 경우는 해당 첨부파일을 제출하여 증빙할 수
      있으며(필수 X),<br />
      첨부 가능한 용량은 파일별로 최대 3MB까지입니다.<br />
      (확장자 GIF, PNG, JPG, JPEG)
    </p>
    <el-table :data="certData">
      <el-table-column align="center" label="명칭" prop="name">
        <template slot-scope="scope">
          <el-input placeholder="명칭" v-model="scope.row.name" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="취득시기" prop="time">
        <template slot-scope="scope">
            <el-date-picker
                    v-model="scope.row.date"
                    type="date"
                    placeholder="날짜 선택"
            style="width: 95%; margin: 0 auto;">
            </el-date-picker>
        </template>
      </el-table-column>
        <el-table-column align="center" label="증빙서류">
            <template>
                <el-button>파일 선택</el-button>
            </template>
        </el-table-column>
        <el-table-column align="center" label="증빙서류">
            <template>
                <el-button type="danger">삭제</el-button>
                <el-button type="info">초기화</el-button>
            </template>
        </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      eduData: [
        {
          type: "중학교",
          name: "",
          hakje: "",
          major: "",
          grade: "",
          graduation: ""
        },
        {
          type: "고등학교",
          name: "",
          hakje: "",
          major: "",
          grade: "",
          graduation: ""
        },
        {
          type: "대학교",
          name: "",
          hakje: "",
          major: "",
          grade: "",
          graduation: ""
        },
        {
          type: "대학원",
          name: "",
          hakje: "",
          major: "",
          grade: "",
          graduation: ""
        },
        {
          type: "직업전문/인력개발원",
          name: "",
          hakje: "",
          major: "",
          grade: "",
          graduation: ""
        }
      ],
      certData: [
        {
          name: "",
          date: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.5em;
  font-weight: bold;
  margin: 20px auto 10px;
}
p {
  text-align: left;
  padding: 5px;
  font-size: 0.9rem;
  margin: 10px auto;
}
</style>
