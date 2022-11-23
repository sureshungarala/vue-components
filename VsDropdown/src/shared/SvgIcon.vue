<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :color="color"
    :role="role"
    :aria-labelledby="icon"
    focusable="false"
    :aria-hidden="!focusable"
    class="c-btn__icon">
    <title :id="name || icon" >{{ name || icon }} Icon</title>
    <desc>{{ iconDescription || name }}</desc>
    <svg width="16" height="16" viewBox="0 0 16 16" v-html="paths[icon]"/>
  </svg>
</template>

<script>

  const SvgIcon = {
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
    },

    data() {
      return {
        paths: {
          'zd-search': `<circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" d="M15 15l-5-5"></path>`,
          'zd-down-pointer': `<path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"></path>`,
          'zd-check': `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 9l4 4L15 3"></path>`,
          'zd-contains': `<path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 8.5h15"></path>`
        }
      };
    },
  };
  export default SvgIcon;
</script>