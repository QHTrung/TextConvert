const textInput = document.getElementById('text-input');
const upperCaseBtn = document.querySelector('.upper-case-btn');
const lowerCaseBtn = document.querySelector('.lower-case-btn');
const capitalizedCaseBtn = document.querySelector('.capitalized-case-btn');
const copyBtn = document.querySelector('.copy-btn');
const clearBtn = document.querySelector('.clear-btn');
const formatBtn = document.querySelector('.format-btn');
const tooltip = document.getElementById('myTooltip');

function checkEmpty(text) {
  return text.length === 0;
}
upperCaseBtn.addEventListener('click', () => {
  const inputValue = textInput.value;
  if (checkEmpty(inputValue)) {
    alert('Empty string. Please fill the string!');
  } else {
    textInput.value = inputValue.toUpperCase();
  }
});
lowerCaseBtn.addEventListener('click', () => {
  const inputValue = textInput.value;
  if (checkEmpty(inputValue)) {
    alert('Empty string. Please fill the string!');
  } else {
    textInput.value = inputValue.toLowerCase();
  }
});
capitalizedCaseBtn.addEventListener('click', () => {
  const inputValue = textInput.value;
  if (checkEmpty(inputValue)) {
    alert('Empty string. Please fill the string!');
  } else {
    textInput.value = inputValue
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
});
copyBtn.addEventListener('mouseout', () => {
  tooltip.innerHTML = 'Copy to clipboard';
});
copyBtn.addEventListener('click', () => {
  textInput.select();
  textInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textInput.value);
  tooltip.innerHTML = 'Copied';
});
clearBtn.addEventListener('click', () => {
  textInput.value = '';
});
formatBtn.addEventListener('click', () => {
  textInput.value = textInput.value
    .replace(/\d{1}:\d{2}/g, '')
    .replace(/\s+/g, ' ')
    .trim();
});
