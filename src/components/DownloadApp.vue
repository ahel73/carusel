<template>
  <p class="download">
    Скачать приложение:
    <a
        v-if="isAndroid"
        href="https://play.google.com/store/apps/details?id=com.pkdeveloper.carsharingwhitelabel.carusel.club"
        target="_blank"
    >
      <img src="@/assets/images/store-market.png" alt="" />
    </a>
    <a 
        v-else 
        href="https://apps.apple.com/us/app/id1288212725" 
        target="_blank"
    >
      <img src="@/assets/images/store-app.png" alt="" />
    </a>
  </p>
</template>

<script>
export default {
  name: "DownloadApp",
  computed: {
    isAndroid() {
      return navigator.userAgent.indexOf("Android") != -1 ? true : false;
    }
  }
};
</script>
<style>
.download{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-top: 1px solid rgba(196, 196, 196, 1);
  margin-top: 25px;
  padding-top: 25px;
  width: 100%;
}
.download a {
  margin-left: 15px;
  line-height: 0;
}
</style>
