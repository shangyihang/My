const noMoreClick = {
  name: 'noMoreClick',
  inserted(el) {
    el.addEventListener('click', () => {
      el.classList.add('is-disabled');
      el.disabled = true;
      setTimeout(() => {
        el.disabled = false;
        el.classList.remove('is-disabled');
      }, 2000);
    });
  },
};
export default noMoreClick;
