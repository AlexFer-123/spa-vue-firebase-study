<template>
  <div class="base-spinner fa-3x">
    <i class="fas fa-circle-notch fa-spin"></i>
  </div> 
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.base-spinner {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $dark-medium;
    color: $featured;
    z-index: 99999999999;
}

</style>