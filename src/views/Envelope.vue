<template>
  <div>
    <div @click="goToBack" class="nav-arrow">
      <img class="arrow-img" src="../assets/arrow-left.png" />
    </div>
    <div class="ev-text absolute">
      <div class="message">
        편지를 열어보시겠습니까?
      </div>
    </div>
    <div class="envelope">
      <div class="envelope-img-section">
        <img class="envelope-img" src="../assets/letter-envelope.png" alt="" />
      </div>
    </div>
    <div class="ev-text2 absolute">
      <div class="message" @click="goToNext">
        열어본다
      </div>
      <div class="message-no" @click="goToNotFinish">
        열지않는다
      </div>
    </div>
    <div class="nav-arrow nav-bottom">
      <!-- <img class="arrow-img" src="../assets/arrow-right.png" alt="" /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Envelope",
  components: {},
  methods: {
    goToBack() {
      this.$router.push("video");
    },
    goToNext() {
      this.$router.push("end");
    },
    goToNotFinish() {
      this.$router.push("loop");
    },
  },
};
</script>
<style scoped>
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
.envelope {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.envelope-img-section {
  width: 70%;
}
.envelope-img {
  width: 100%;
}
.ev-text {
  width: 100%;
  text-align: center;
  top: 30vh;
}
.ev-text2 {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  bottom: 30vh;
}
.message-no {
  font-family: classic;
  font-size: 15px;
  color: rgb(124, 124, 121);
}
</style>
