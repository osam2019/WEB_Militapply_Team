<template>
  <el-container>
    <el-aside>
      <h5><span>개인 맞춤 메뉴</span></h5>
      <el-menu default-active="2" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1" @click="menuType = 1">
          <i class="el-icon-document"></i>
          <span>통합지원서 작성/수정</span>
        </el-menu-item>
        <el-menu-item index="2" @click="menuType = 2">
          <!--disabled-->
          <i class="el-icon-search"></i>
          <span>인공지능 입영예측</span>
        </el-menu-item>
        <el-menu-item index="3" @click="menuType = 3">
          <i class="el-icon-date"></i>
          <span>나만의 입영 일정</span>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>개인정보 설정</span>
          </template>
          <el-menu-item index="1-1" @click="menuType = 4"
            >개인정보 수정</el-menu-item
          >
          <el-menu-item index="1-2" @click="menuType = 5"
            >상세 정보 인증</el-menu-item
          >
          <el-menu-item index="1-3" @click="menuType = 6"
            >회원 탈퇴</el-menu-item
          >
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <div class="type1" v-if="menuType === 1">
        <h1>모의 지원 및 내 순위 보기</h1>
        <el-row>
          <el-button>전문특기병</el-button>
          <el-button>기술행정병</el-button>
          <el-button>어학병</el-button>
        </el-row>
        <section class="container">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="가산항목" width="380">
            </el-table-column>
            <el-table-column prop="name" label="해당여부" width="80">
            </el-table-column>
          </el-table>
        </section>
      </div>
      <div class="type2" v-if="menuType === 2">
        <h1>인공지능 입영예측</h1>
      </div>
      <div class="type3" v-if="menuType === 3">
        <h1>나만의 입영 일정</h1>
      </div>
      <div class="type4" v-if="menuType === 4">
        <h1>개인정보 수정</h1>
      </div>
      <div class="type5" v-if="menuType === 5">
        <h1>복무(전역)자 인증</h1>
      </div>
      <div class="type6" v-if="menuType === 6">
        <el-alert title="주의" type="error" show-icon> </el-alert>
        <el-card class="box-card">
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

export default {
  name: "MyApply",
  data() {
    return {
      menuType: 0,
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom"
        },
        {
          date: "2016-05-02",
          name: "Tom"
        },
        {
          date: "2016-05-04",
          name: "Tom"
        },
        {
          date: "2016-05-01",
          name: "Tom"
        }
      ]
    };
  },
  methods: {
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
  margin-bottom: 30px;
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
