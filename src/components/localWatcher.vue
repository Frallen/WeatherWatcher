<template lang="pug">
.local
  .local-heading
    .local-info
      h3.local-date Today is {{date}}
      h4.local-state City {{MainData.name}}
      .local-main(v-for="item in MainData.weather" )
        .local-main__title {{item.main}}
        .local-main__descr {{item.description}}
      .local-stats
        .local-stats__item(v-for="(item,index) in MainData.main")
          .local-stats__item__head {{index}}
          .local-stats__item__body {{item}} °C

    .local-map
  .local-forecast
</template>

<script>
import axios from "axios";
export default {
  name: "localWatcher",
  components: {},
  data() {
    return {
      date: null,
      err: null,
      MainData: {},
      position: {},
    };
  },
  watch: {},
  methods: {},
  mounted: function () {
    let today = new Date();
    let MainData = this.MainData;

    this.date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    var geoOptions = {
      enableHighAccuracy: true,
    };

    var geoSuccess = async (position) => {
      let call = {
        Main() {
          return axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=875149028b73851ae38f7a72d361cc95`
            )
            .then((data) => data.data)
            .catch((err) => console.log(err));
        },
      };
      MainData = await call.Main();
      this.MainData = MainData;
      console.log(this.MainData);
    };

    var geoError = function (error) {
      console.log("Error occurred. Error code: " + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  },
};
</script>

<style lang="less">
@import "../styles/_mixin";
@import "../styles/_variables";
.local {
  margin: 6em auto;
  &-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-main {
    background: #fff;
    padding: 38px 20px;
    border-radius: 20px;
    box-shadow: 0 2px 7px 3px #eee;
    margin-bottom: 20px;
    &__title {
    }
    &__descr {
    }
  }
  &-stats {
    flex-basis: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    gap: 10px;
    &__item {
      width: calc(20% - 10px);
      background: #fff;
      padding: 12px 20px;
      border-radius: 20px;
      box-shadow: 0 2px 7px 3px #eee;
      &__head {
        font-size: 1.2em;
        color: #aeaeae;
        margin-bottom: 5px;
      }
      &__body {
        color: @orange;
      }
    }
  }
  &__map {
    flex-basis: 50%;
  }
}
</style>
