<template>
  <div>
    <div @click="goToBack" class="nav-arrow">
      <img class="arrow-img" src="../assets/arrow-left.png" />
    </div>
    <div class="jb-text absolute">어느날 당신에게 도착한 편지..</div>
    <div class="jb-box">
      <div class="jb-video">
        <video autoplay>
          <source src="../assets/Hogwarts_invitation.mp4" type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </video>
      </div>
    </div>
    <div @click="goToNext" class="nav-arrow nav-bottom">
      <img class="arrow-img" src="../assets/arrow-right.png" alt="" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Video",
  components: {},
  methods: {
    goToBack() {
      this.$router.push("/");
    },
    goToNext() {
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
  color: var(--color-message);
  font-size: 15px;
  top: 20vh;
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
