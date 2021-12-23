const checkNumInputs = (selector) => {
  const numInp = document.querySelectorAll(selector);
  numInp.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

export default checkNumInputs;
