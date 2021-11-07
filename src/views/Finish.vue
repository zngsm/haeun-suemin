<template>
  <div class="finish">
    <div style="height:8vh"></div>
    <div class="finish-top">
      <div class="finish-top-img-section">
        <img class="finish-top-img" src="../assets/gryffin.png" alt="" />
      </div>
      <div class="finish-top-img-section">
        <img class="finish-top-img" src="../assets/slytherin.png" alt="" />
      </div>
      <div class="finish-top-img-main">
        <img class="finish-top-img" src="../assets/hogwarts-real.png" alt="" />
      </div>
      <div class="finish-top-img-section">
        <img class="finish-top-img" src="../assets/huffle.png" alt="" />
      </div>
      <div class="finish-top-img-section">
        <img class="finish-top-img" src="../assets/ravenclaw.png" alt="" />
      </div>
    </div>
    <div class="finish-title">
      <div class="finish-title-headline">
        <hr />
      </div>
      <div class="finish-title-name">
        <div class="finish-title-message">Haeun & Suemin</div>
        <div class="finish-title-message">Birthday Party</div>
      </div>
      <div class="finish-title-headline">
        <hr />
      </div>
    </div>
    <div class="finish-body">
      <div class="finish-message">
        우리는 당신이 호그와트 마법학교에 합격했다는 것을알려드리게 되어
        기쁩니다. <br /><br />당신은 파자마, 세면도구, 기타 필요한 장비를 가지고
        오셔야 합니다. <br /><br />학기는 11월 13일에 시작하며, 우리는 당신이
        참석할 것이라는 걸 이미 알고 있기 때문에 부엉이를 보낼 필요가 없습니다.
      </div>
    </div>
    <div class="finish-bottom">
      <div class="message">일 시 : 2021년 11월 13일</div>
      <div class="message">
        장 소 : 이마트 트레이더스
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Finish",
  components: {},
  methods: {},
};
</script>
<style scoped>
.finish {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.finish-top {
  margin: 20px;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}
.finish-top-img-main {
  width: 28%;
}
.finish-top-img-section {
  width: 18%;
  padding: 5px;
}
.finish-top-img {
  width: 100%;
}
.finish-body {
  margin: 20px;
}
.finish-message {
  text-align: center;
  font-family: classic;
  color: var(--color-message);
  font-size: 15px;
}
.finish-title {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.finish-title-headline {
  width: 25%;
  margin: auto;
}

.finish-title-name {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.finish-title-message {
  font-family: harry;
  color: var(--color-title);
}
.finish-bottom {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
hr {
  background-color: var(--color-title);
  height: 2px;
  border: 0px;
}
</style>
