<template>
  <div class="mapc component">
     <div id="map"></div>

    <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
    <!-- <script
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
      async
    ></script> -->


  </div>
</template>

<script>
export default {
  name: 'Maps'
};
</script>

<style>
  .mapc{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
</style>