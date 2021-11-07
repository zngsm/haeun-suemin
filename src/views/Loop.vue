<template>
  <div>
    <div>
      <div @click="goToBack" class="nav-arrow">
        <img class="arrow-img" src="../assets/arrow-left.png" />
      </div>
      <div class="jb-text absolute">
        당신은 볼드모트의 공격을 받았습니다. <br />
        다시 시작하려면 뒤로 돌아가세요
      </div>
      <div class="jb-box">
        <div class="jb-video">
          <video autoplay>
            <source src="../assets/avada.mp4" type="video/mp4" />
            <strong>Your browser does not support the video tag.</strong>
          </video>
        </div>
      </div>
      <div class="nav-arrow nav-bottom"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Loop",
  components: {},
  methods: {
    goToBack() {
      this.$router.push("envelope");
    },
  },
};
</script>
<style scoped>
.jb-box {
  width: 100%;
  height: 80vh;
  display: flex;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
  justify-content: center;
  align-items: center;
}
.jb-video {
}
.jb-text {
  font-family: classic;
  color: red;
  font-size: 15px;
  bottom: 20vh;
  left: 10vw;
}
.nav-arrow {
  height: 10vh;
  width: 20vw;
}
.nav-bottom {
  /* display: flex; */
  padding-right: 10px;
  float: right;
}
.arrow-img {
  width: 100%;
  cursor: pointer;
  margin: 10px;
}
video {
  align-content: center;
  width: 100%;
}
</style>
