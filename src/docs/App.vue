<template lang="pug">
  router-view
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isCordovaApp: 'globalModule/isCordovaApp',
      isOnline: 'globalModule/isOnline',
      errorCode: 'globalModule/getError',
    }),
  },
  methods: {
    ...mapActions({
      init: 'globalModule/init',
      checkCordovaApp: 'globalModule/checkCordovaApp',
      onOnline: 'globalModule/onOnline',
      onOffline: 'globalModule/onOffline',
      onPause: 'globalModule/onPause',
      onResume: 'globalModule/onResume',
    }),
  },
  created() {
    console.log('Create app...');
    this.checkCordovaApp();
    this.init();

    // Add listeners
    if (this.isCordovaApp) {
      document.addEventListener('online', this.onOnline, false);
      document.addEventListener('offline', this.onOffline, false);
      document.addEventListener('resume', this.onResume, false);
      document.addEventListener('pause', this.onPause, false);
    } else {
      window.addEventListener('online', this.onOnline);
      window.addEventListener('offline', this.onOffline);
      window.addEventListener('focus', this.onResume);
      window.addEventListener('blur', this.onPause);
    }
  },

  destroyed() {
    if (this.isCordovaApp) {
      document.removeEventListener('online', this.onOnline);
      document.removeEventListener('offline', this.onOffline);
      document.removeEventListener('resume', this.onResume);
      document.removeEventListener('pause', this.onPause);
    } else {
      window.removeEventListener('online', this.onOnline);
      window.removeEventListener('offline', this.onOffline);
      window.removeEventListener('focus', this.onResume);
      window.removeEventListener('blur', this.onPause);
    }
  },
};
</script>
