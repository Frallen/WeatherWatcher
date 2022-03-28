<template lang="pug">

</template>

<script>
export default {
  name: "localWatcher",
  mounted() {
    window.onload = function () {
      var startPos;
      var geoOptions = {
        enableHighAccuracy: true,
      };

      var geoSuccess = function (position) {
        startPos = position;

        console.log(startPos.coords.latitude + " " + startPos.coords.longitude);
      };
      var geoError = function (error) {
        console.log("Error occurred. Error code: " + error.code);
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
      };

      navigator.geolocation.getCurrentPosition(
        geoSuccess,
        geoError,
        geoOptions
      );
    };
  },
};
</script>

<style lang="less"></style>
