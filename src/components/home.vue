<template lang="pug">
.welcome
  .welcome__box
  img.welcome__img(src="./../assets/wetherWatcher.png")
  h2.welcome-title WeatherWatcher helps you get your day better
  p.welcome-text Weather forecasts, nowcasts and history in fast and elegant way
  router-link.welcome-btn(to="/local") Lets' go
  router-view
</template>

<script>
export default {
  name: "Home-page",
};
</script>

<style lang="less">
@import "./../styles/_variables";
@import "./../styles/_mixin";
.welcome {
  text-align: center;
  margin: 7em 0;
  &__box {
  }
  &__img {
    @media @md {
      width: 200px;
    }
  }
  &-title {
    font-size: 2em;
    margin-top: 1em;
    color: #eb6e4b;
    @media @md {
      font-size: 1.5em;
    }
  }
  &-text {
    margin-top: 1em;
  }
  &-btn {
    padding: 5px 10px;
    background: @orange;
    border-radius: 10px;
    font-size: 1.5em;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin: 1em 0;
    @media @md {
      font-size: 1.2em;
    }
  }
}
</style>
