<template>
  <el-container :style="{width: menuType === 8 ? '1355px' : '1200px'}">
    <el-aside>
      <h5><span>개인 맞춤 메뉴</span></h5>
      <el-menu
        default-active="2"
        @select="onMenuSelect"
        @open="handleOpen"
        @close="handleClose"
      >
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
        <h1>인공지능 입영예측</h1>
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
        <h1>복무(전역)자 인증</h1>
      </div>
      <div class="type6" v-if="menuType === 7">
        <el-alert title="주의" type="error" show-icon> </el-alert>
        <el-card class="box-card" style="margin: 30px auto">
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

export default {
  name: "MyApply",
  components: { CommonApply, Schedule, SpecialityApply },
  data() {
    return {
      menuType: "1"
    };
  },
  methods: {
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
