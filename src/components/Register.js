export const Register = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container register';

  $section.innerHTML = `
    <img class="container__logo-register"src="./img/logo_horizontal.png" alt="logo">
    <h4 class="container__title">Sign Up</h4>`;
  const $formR = document.createElement('form');
  $formR.id = 'registerForm';
  $formR.className = 'container form';
  // $formR.action="./lib/index.js"
  $formR.innerHTML = `<input class="input__form" type="email" placeholder="Email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" title="the format does not match what was requested" required>
      <input class="input__form" type="text"  name="name" placeholder="Full name" pattern="\\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
      title="Only letters" required>
      <input class="input__form" type="password" placeholder="Password" pattern= "^(?=.*\\d)(?=.*[\\u0021-\\u002b\\u003c-\\u0040])(?=.*[A-Z])(?=.*[a-z])\\S{8,16}$" title="
      The password must have between 8 and 16 characters, at least one digit, at least one lowercase letter, at least one uppercase letter, and at least one non-alphanumeric character." required>
    <div id="date" class="container__date">
      <label class="label__date">Date of Birth</label>
      <input class="input__date" type="date" required>
    </div>
      <div class="container__terms-conditions">
        <input class="input__conditions" type="checkbox" required>
        <label class="label__conditions" >I agree with terms and conditions</label>
      </div>
    <input class="container__button__signup" type="submit" value="Sign Up">`;

  const $divButtons = document.createElement('div');
  $divButtons.className = 'container__button-register';

  const $buttonBack = document.createElement('button');
  $buttonBack.textContent = 'Return';
  $buttonBack.className = 'container__button__back';

  $divButtons.append($buttonBack);

  $section.append($formR, $divButtons);

  // button retorna al welcome
  $buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  
  $formR.addEventListener('submit', (e) => {
    e.preventDefault();

      console.log("hola form: ",e);

    });

  return $section;
};
