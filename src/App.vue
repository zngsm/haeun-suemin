<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
body {
  padding: 0px;
  margin: 0px;
}
#app {
  background-color: var(--color-background);
  min-height: 100vh;
  width: 100%;
}
@font-face {
  font-family: "harry";
  src: url("./assets/Harry_porter.ttf") format("truetype");
}
@font-face {
  font-family: "classic";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/국립박물관문화재단클래식B.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
:root {
  --color-title: rgb(240, 208, 26);
  --color-title-shadow: rgb(19, 32, 43);
  --color-background: rgb(77, 57, 58);
  --color-message: rgb(223, 161, 27);
}
.absolute {
  position: absolute;
}
.message {
  font-family: classic;
  color: var(--color-message);
  font-size: 15px;
}
</style>
