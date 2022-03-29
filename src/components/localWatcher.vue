<template lang="pug">
.local
  .local-heading
    .local-info
      h3.local-date Today is {{date}}
      h4.local-state City {{MainData.name}}
      .local-stats
        .local-stats__item


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
.local {
  margin: 6em auto;
  &-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
