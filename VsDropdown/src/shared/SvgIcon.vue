<template>
  <svg 
    class="c-btn__icon" 
    :color="color"
    :role="role"
    :aria-labelledby="icon"
    :focusable="focusable"
    :aria-hidden="!focusable">
    <title :id="name || icon" >{{ name || icon }} Icon</title>
    <desc>{{ iconDescription || name }}</desc>
    <use :href="'./index.svg#' + icon">
  </use>
  </svg>
</template>

<script>
  const SvgIcon = {
    template,
    props: {
      icon: {
        type: String,
        default: '',
      },
      color: {
        type: String,
      },
      role: {
        type: String,
        default: 'presentation',
      },
      iconDescription: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      focusable: {
        type: Boolean,
        default: false,
      },
    },
  };
  export default SvgIcon;
</script>