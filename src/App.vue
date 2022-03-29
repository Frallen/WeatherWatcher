<template lang="pug">
.header
  h1.header-logo WeatherWatcher
  span.header__hamburger(@click="activemenu()")
  ul.header-menu
    li.header-menu__item
      router-link.header-link(to="/") Home
    li.header-menu__item
      router-link.header-link(to="/local") Wether
    li.header-menu__item
      router-link.header-link(to="/contact") Contact
.container
  router-view
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    activemenu() {
      document
        .querySelector(".header__hamburger")
        .classList.toggle("hamburger-active");
      document.querySelector(".header-menu").classList.toggle("visible");
    },
  },
};
</script>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import "styles/_normalize";
@import "styles/_variables";
@import "styles/_mixin";

h1,
h2,
h3,
ul {
  padding: 0;
  margin: 0;
}

body {
  font-family: "Roboto", sans-serif;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 10px;
}

.header {
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: @orange;
  position: relative;
  @media @md {
    padding: 15px 20px;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
  }
  &__hamburger {
    position: absolute;
    right: 20px;
    top: 26px;
    content: " ";
    width: 24px;
    height: 31px;
    display: block;
    @media @xs {
      top: 22px;
    }
  }
  &__hamburger::after,
  &__hamburger::before {
    content: " ";
    width: 100%;
    height: 2px;
    background: #fff;
    display: block;
    position: absolute;
    top: 0;
    transition: all 0.3s;
  }
  &__hamburger::after {
    top: 10px;
  }

  &-logo {
    @media @xs {
      font-size: 1.5em;
    }
  }
  &-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media @md {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1em;
      display: none;
    }
    &__item {
      list-style-type: none;
      margin-left: 10px;
      @media @md {
        margin-top: 10px;
      }
    }
  }
  &-link {
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
  }
}
.header__hamburger {
  display: none;
  @media @md {
    display: block;
  }
}
.hamburger-active::after {
  transform: rotate(90deg);
  transition: all 0.3s;
}
.hamburger-active::before {
  transform: rotate(0deg);
  transition: all 0.3s;
  top: 10px;
}
</style>
