<template>
  <div class="home">
    <div class="home-img-section" @click="goToVideo">
      <img class="home-img" src="../assets/hogwarts_owl.png" alt="" />
      <div class="home-message">
        click me
      </div>
    </div>
    <div class="home-title">
      HaeunSuemin
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    goToVideo() {
      this.$router.push("Video");
    },
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-title {
  position: absolute;
  top: 20vh;
  font-family: harry;
  color: var(--color-title);
  font-size: 36px;
  text-shadow: 5px 5px 5px var(--color-title-shadow);
}
.home-message {
  color: var(--color-message);
  text-align: center;
  font-family: classic;
}
.home-img-section {
  width: 30%;
}
.home-img {
  width: 100%;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
