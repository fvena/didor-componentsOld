<template lang="pug">
  .feedbackDemo
    Demo(title="Uso Básico")
      az-feedback(:isLoading="isLoading" :isSuccess="isSuccess" :isError="isError")

      .text-center
        az-button.margin-right-half(@click="onLoading" size="small") Loading
        az-button.margin-right-half(@click="onSuccess" type="success" size="small") Success
        az-button(@click="onError" type="danger" size="small") Error

    Demo(title="Uso Básico")
      az-feedback(:isLoading="isLoading2" :isSuccess="isSuccess2" :isError="isError2" :scale="1")

      .text-center
        az-button.margin-right-half(@click="onLoading2" size="small") Loading
        az-button.margin-right-half(@click="onSuccess2" type="success" size="small") Success
        az-button(@click="onError2" type="danger" size="small") Error
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      isSuccess: false,
      isError: false,
      isLoading2: true,
      isSuccess2: false,
      isError2: false,
    };
  },
  methods: {
    onLoading() {
      this.isLoading = true;
      this.isSuccess = false;
      this.isError = false;
    },

    onSuccess() {
      this.isLoading = false;
      this.isSuccess = true;
      this.isError = false;
    },

    onError() {
      this.isLoading = false;
      this.isSuccess = false;
      this.isError = true;
    },

    onLoading2() {
      this.isLoading2 = true;
      this.isSuccess2 = false;
      this.isError2 = false;
    },

    onSuccess2() {
      this.isLoading2 = false;
      this.isSuccess2 = true;
      this.isError2 = false;
    },

    onError2() {
      this.isLoading2 = false;
      this.isSuccess2 = false;
      this.isError2 = true;
    },
  },
};
</script>

<style lang="scss">
.az-feedback {
  margin: double() auto;
}
</style>
