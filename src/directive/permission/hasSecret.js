export default {
  inserted(el) {
    const isSecret = process.env.VUE_APP_SECRET;
    if (isSecret !== 'true') {
      el.parentNode?.removeChild(el);
    }
  },
};
