<template>
  <el-container :style="{ width: menuType === 8 ? '1355px' : '1200px' }">
    <el-aside>
      <h5><span>개인 맞춤 메뉴</span></h5>
      <el-menu @select="onMenuSelect" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span>통합지원서 작성/수정</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-document"></i>
          <span>특기별 지원서 작성/수정</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-search"></i>
          <span>인공지능 입영예측</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-date"></i>
          <span>나만의 입영 일정</span>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>개인정보 설정</span>
          </template>
          <el-menu-item index="5">개인정보 수정</el-menu-item>
          <el-menu-item index="6">상세 정보 인증</el-menu-item>
          <el-menu-item index="7">회원 탈퇴</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <div class="type1" v-if="menuType === 1">
        <h1>통합 지원서 작성/수정</h1>
        <p>모든 특기에 해당하는 공통서류를 작성합니다.</p>
        <CommonApply />
      </div>
      <div class="type8" v-if="menuType === 8">
        <h1>특기별 지원서 작성/수정</h1>
        <p>세부 특기에 해당하는 지원서류를 작성합니다.</p>
        <SpecialityApply />
      </div>
      <div class="type2" v-if="menuType === 2">
        <h1 class="menutitle">인공지능 입영예측</h1>
        <el-card style="margin-bottom: 50px">
          <div slot="header">
            <span>입력된 개인 정보</span>
          </div>
          <div style="display: inline-block">
            이름 <i class="el-icon-check"></i> 전공학과
            <i class="el-icon-check"></i> 자격점수
            <i class="el-icon-check"></i> 자기소개서
            <i class="el-icon-check"></i>
          </div>
        </el-card>
        <el-button
          v-if="apikey === ''"
          round
          size="middle"
          style="font-size: 20px; width: 530px;"
          @click="open"
        >
          인공지능 기능은 Github 소스에는 포함되지 않습니다!
        </el-button>
        <el-button
          v-else
          round
          size="middle"
          style="font-size: 20px; width: 500px; "
          @click="aiapChanger"
        >
          지원하기
        </el-button>
        <div v-if="aiap === 1">
          <el-card
            style="margin-bottom: 50px; margin-top: 30px; width: 250px; float: left"
          >
            <div slot="header">
              <span>자기소개서 통일성</span>
            </div>
            <div style="display: inline-block">{{ airel }} %</div>
          </el-card>
          <el-card
            style="margin-bottom: 50px; margin-top: 30px; margin-left:30px; width: 250px; float: left"
          >
            <div slot="header">
              <span>서류 기준 내 순위</span>
            </div>
            <div style="display: inline-block">
              5 / 30 (3명 선발)
            </div>
          </el-card>
          <el-card
            style="margin-bottom: 50px; margin-top: 30px; margin-left:30px; width: 250px; float: left"
          >
            <div slot="header">
              <span>합격 확률</span>
            </div>
            <div style="display: inline-block">
              60%
            </div>
          </el-card>
          <el-card
            style="margin-bottom: 50px; margin-top: 30px; width: 800px; float: left"
          >
            <div slot="header">
              <span>상세 내용</span>
            </div>
            <div style="display: inline-block">
              <el-card
                style="margin-bottom: 50px; margin-top: 30px; width: 700px; float: left"
              >
                <div slot="header">
                  <span>사용한 단어 별 통일성</span>
                </div>
                <div style="display: inline-block">
                  <pre>{{ aitext1 }}</pre>
                </div>
              </el-card>
            </div>
          </el-card>
        </div>
      </div>
      <div class="type3" v-if="menuType === 3">
        <h1>나만의 입영달력</h1>
        <p>이미 지원한 특기 또는 관심있는 특기에 대한 일정 정보입니다.</p>
        <Schedule />
      </div>
      <div class="type4" v-if="menuType === 5">
        <h1>개인정보 수정</h1>
      </div>
      <div class="type5" v-if="menuType === 6">
        <h1 class="menutitle">복무(전역)자 인증</h1>
        <el-button
          v-if="apikey === ''"
          round
          size="middle"
          style="font-size: 20px; width: 530px;"
          @click="open"
        >
          인공지능 기능은 Github 소스에는 포함되지 않습니다!
        </el-button>
        <vue-upload-multiple-image
          @upload-success="uploadImageSuccess"
          @before-remove="beforeRemove"
          :data-images="images"
          style="float: left"
          v-else
        ></vue-upload-multiple-image>
        <div style="width: 500px; display: inline-block; margin-bottom: 70px;">
          <div v-if="varauth === false" style="margin-left: -50px">
            <el-card class="box-card" style="width: 500px">
              <div slot="header" class="clearfix">
                <span>오류</span>
              </div>
              <div>
                복무 확인서가 인식되지 않습니다. 다른 사진을 업로드해주세요
              </div>
            </el-card>
            <el-button round>예</el-button>
            <el-button type="danger" round>아니오</el-button>
          </div>
          <div v-else-if="varauth === true" style="margin-left: -50px">
            <el-card class="box-card" style="width: 500px">
              <div slot="header" class="clearfix">
                <span>인증</span>
              </div>
              <div>
                인증 완료되었습니다! 아래의 세부 내역이 정보에 추가됩니다.
              </div>
            </el-card>
            <div style="margin-top: 20px; margin-left: -50px;">
              <el-button round style="margin-right: 10px;">예</el-button>
              <el-button type="danger" round>아니오</el-button>
            </div>
          </div>
        </div>
        <div style="height: 200px; width: 730px; margin-top: 80px;">
          <template v-if="varauth === true">
            <el-card>
              소속 :
              {{ ans.slice(ans.indexOf(")") + 1, ans.indexOf("소")) }} 군별 :
              {{ ans.slice(ans.indexOf("별") + 1, ans.indexOf("계")) }} 군번 :
              {{ ans.slice(ans.indexOf("번") + 1, ans.indexOf("성")) }} 이름 :
              {{ ans.slice(ans.indexOf("번") + 14, ans.indexOf("|")) }}
            </el-card>
          </template>
        </div>
      </div>
      <div class="type6" v-if="menuType === 7">
        <el-alert title="주의" type="error" show-icon></el-alert>
        <el-card class="box-card" style="margin: 30px auto; width: 850px">
          <div slot="header" class="clearfix">
            <span>회원 탈퇴</span>
          </div>
          <div style="text-align: left;">
            회원 탈퇴를 하시면 모든 개인정보가 삭제되어 더 이상 서비스를 이용할
            수 없게 됩니다. 정말 탈퇴하시겠습니까? (단, 그동안 활동한 데이터는
            지워지지 않습니다)
          </div>
        </el-card>
        <el-button type="danger" round>예</el-button>
        <el-button round>아니오</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import CommonApply from "./CommonApply";
import Schedule from "./Schedule";
import SpecialityApply from "./SpecialityApply";
import VueUploadMultipleImage from "vue-upload-multiple-image-korean";

function authForm(strs) {
  if (!strs.includes("복무확인서")) return false;
  if (!strs.includes("소속")) return false;
  if (!strs.includes("군별")) return false;
  if (!strs.includes("계급")) return false;
  if (!strs.includes("군번")) return false;
  if (!strs.includes("성명")) return false;
  if (!strs.includes("주민등록번호")) return false;

  return strs.includes("발행번호");
}

export default {
  name: "MyApply",
  components: {
    CommonApply,
    Schedule,
    SpecialityApply,
    VueUploadMultipleImage
  },
  data() {
    return {
      menuType: 1,
      aitext1: "",
      airel: "",
      tmpaitext1: {},
      tmpaitext: "",
      aiwordnames: [],
      aiwordsal: [],
      aicnt: 0,
      aisum: 0,
      aiap: "0",
      varauth: "",
      ans: "",
      images: [],
      apikey: ""
    };
  },
  methods: {
    methods: {
      open() {
        this.$alert(
          "인공지능 기능은 Github 소스에는 포함되지 않습니다!",
          "Title",
          {
            confirmButtonText: "OK",
            callback: action => {
              this.$message({
                type: "info",
                message: `action: ${action}`
              });
            }
          }
        );
      }
    },
    aiapChanger() {
      this.aiap = 1;
      const key = this.apikey;
      if (key === "") open();
      const baseURI =
        "https://language.googleapis.com/v1/documents:analyzeEntities?key=" +
        key;
      this.$http
        .post(`${baseURI}`, {
          document: {
            type: "PLAIN_TEXT",
            content:
              "진행한 프로젝트로는 웹 프로그래밍이 있습니다. 데이터베이스와 프론트엔드, 백엔드 기능을 학습했습니다. 주요 프레임워크는 vue.js와 angular.js를 사용했습니다. 서버는 파이썬 기반 도커 서버를 사용했습니다. Java와 C언어, C++, Python 등의 언어를 사용할 수 있습니다."
          }
        })
        .then(result => {
          this.tmpaitext1 = result.data.entities;
          let i;
          for (i = 0; i < this.tmpaitext1.length; i++) {
            if (i !== 0 && i % 4 === 0) {
              this.aitext1 += "\n\n";
            }
            this.aitext1 += "       " + this.tmpaitext1[i].name + " : ";
            if (this.tmpaitext1[i].salience > 0.04) {
              this.aitext1 += "높음";
              this.aisum += 10;
              this.aicnt += 1;
            } else if (this.tmpaitext1[i].salience > 0.01) {
              this.aitext1 += "중간";
              this.aisum += 5;
              this.aicnt += 1;
            } else {
              this.aitext1 += "낮음";
              this.aisum += 1;
              this.aicnt += 1;
            }
            this.airel = ((10 * this.aisum) / this.aicnt).toFixed(3);
          }
        })
        .catch(error => {
          this.aitext2 = error.response;
        });
    },
    uploadImageSuccess(formData, index, fileList) {
      const key = this.apikey; //must delete when source upload
      if (key === "") open();
      const ocrURI =
        "https://vision.googleapis.com/v1/images:annotate?key=" + key;
      const req = {
        requests: [
          {
            image: {
              content: "a"
            },
            features: [
              {
                type: "TEXT_DETECTION",
                maxResults: 1
              }
            ]
          }
        ]
      };
      req.requests[0].image.content = fileList[0].path.split(",")[1];

      this.$http
        .post(`${ocrURI}`, req)
        .then(response => {
          this.ans = response.data.responses[0].textAnnotations[0].description.replace(
            /(\s*)/g,
            ""
          );
          this.varauth = authForm(this.ans);
        })
        .catch(e => {
          this.ans = e.response;
        });
    },
    beforeRemove(index, done, fileList) {
      console.log(fileList);
      let r = confirm("remove image");
      if (r === true) {
        done();
      }
    },
    onMenuSelect(index) {
      this.menuType = parseInt(index);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
section {
  width: 800px;
  margin: 0 auto;
  position: center;
}

h1 {
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.5em;
  font-weight: bold;
  margin: 0 auto 10px;
}

p {
  text-align: left;
  padding: 5px;
  font-size: 0.9rem;
  margin: 10px auto;
}

h5 {
  background-color: blue;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
}

h5 span {
  color: white;
  text-align: left;
}

.el-aside {
  width: 300px;
  height: 500px;
}

.tac {
  text-align: left;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 600px;
}
</style>
