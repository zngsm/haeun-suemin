<template>
  <div class="name-page">
    <div class="name-title">
      당신이 배정받은 기숙사는
    </div>
    <div class="name-body">
      <div v-if="academy == 'gryffin'">
        <div class="name-img">
          <img src="../assets/gryffin.png" alt="" />
        </div>
        <div class="name-academy">
          그리핀도르
        </div>
        <div class="name-description">
          용감하고 대담한 자를 위한 기숙사
        </div>
        <div class="name-message">
          "그 이름에 걸맞은 용기를 보여주는 아이들은 누구나 다 가르치도록 하세."
        </div>
      </div>
      <div v-else-if="academy == 'slytherin'">
        <div class="name-img">
          <img src="../assets/slytherin.png" alt="" />
        </div>
        <div class="name-academy">
          슬리데린
        </div>
        <div class="name-description">
          재간꾼들을 위한 기숙사
        </div>
        <div class="name-message">
          "가장 순수한 혈통을 지닌 아이들만 가르치도록 하세."
        </div>
      </div>
      <div v-else-if="academy == 'ravenclaw'">
        <div class="name-img">
          <img src="../assets/ravenclaw.png" alt="" />
        </div>
        <div class="name-academy">
          래번클로
        </div>
        <div class="name-description">
          현명하고 사려 깊은 자들을 위한 기숙사
        </div>
        <div class="name-message">
          "가장 똑똑한 아이들만 가르치도록 하세."
        </div>
      </div>
      <div v-else-if="academy == 'huffle'">
        <div class="name-img">
          <img src="../assets/huffle.png" alt="" />
        </div>
        <div class="name-academy">
          후플푸프
        </div>
        <div class="name-description">성실하고 진실된 자들을 위한 기숙사</div>
        <div class="name-message">"나는 그 아이들을 똑같이 가르칠 걸세."</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Name",
  components: {},
  data() {
    return {
      academy: this.$route.query.academy,
    };
  },
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
.name-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* justify-content: space-between; */
}
.name-body {
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  height: 70vh;
}
.name-title {
  /* height: 10vh; */
  font-family: classic;
  color: var(--color-title);
  font-size: 20px;
  margin: auto;
  text-align: center;
}
.name-img {
  text-align: center;
  margin: 20px 0px;
}
.name-academy {
  text-align: center;
  font-size: 18px;
  font-family: ELAND;
  color: var(--color-message);
  margin: 20px 0px;
}
.name-description {
  text-align: center;
  font-family: ELAND;
  color: rgb(219, 215, 179);
  margin: 20px 0px;
}
.name-message {
  font-family: Eulyoo;
  padding: 0 20px;
  margin: 20px 0px;
  color: beige;
  text-align: center;
}
</style>
