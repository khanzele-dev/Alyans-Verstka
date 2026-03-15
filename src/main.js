import "./styles/normalize.scss";
import "./styles/components/header.scss"
import "./styles/pages/development.scss"

document.querySelectorAll('#calc-area, #calc-land').forEach((input) => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '');
  });
});