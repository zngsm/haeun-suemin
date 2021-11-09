<template>
  <div>
    <div>
      <div class="jb-text absolute">
        당신은 누구죠? <br />초대받지 못한 사람에겐 <br />응징만이 있을
        뿐입니다.
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
  name: "Dead",
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
