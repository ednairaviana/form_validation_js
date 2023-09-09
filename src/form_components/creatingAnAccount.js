import { emailList } from "./emailList";
import { pwCharList } from "./charList";

const emailInput = document.querySelector("#email");
const pwInput = document.querySelector("#password");
const confirmPwInput = document.querySelector("#confirm_pw");

function setCreatingAccount() {
  checkEmail();
  checkPassword();
  checkConfimrPassword();
}

function checkEmail() {
  emailInput.addEventListener("input", () => {
    const emailArray = emailInput.value.split("@");

    if (emailArray.length == 2) {
      if (emailList.includes(emailArray[1])) {
        emailInput.setCustomValidity("");
      } else {
        emailInput.setCustomValidity("Invalid!");
        return;
      }
    } else if (emailArray[0].length < 3 || emailArray[0].length > 50) {
      emailInput.setCustomValidity("Invalid");
      return;
    } else {
      emailInput.setCustomValidity("");
    }
  });
}

function checkPassword() {
  pwInput.addEventListener("input", () => {
    const password = pwInput.value.split("");

    if (password.includes(" ")) {
      pwInput.setCustomValidity("Invalid!");
      return;
    }
    if (password.length < 10) {
      pwInput.setCustomValidity("Invalid!");
      return;
    }
    if (!checkAlpha(password)) {
      pwInput.setCustomValidity("Invalid!");
      return;
    }
    if (!checkNumber(password)) {
      pwInput.setCustomValidity("Invalid!");
      return;
    }
    if (!checkSymbol(password)) {
      pwInput.setCustomValidity("Invalid!");
      return;
    }

    pwInput.setCustomValidity("");
  });
}

function checkConfimrPassword() {
  confirmPwInput.addEventListener("input", () => {
    if (pwInput.value !== confirmPwInput.value) {
      confirmPwInput.setCustomValidity("Invalid!");
    } else {
      confirmPwInput.setCustomValidity("");
    }
  });
}

// COMPONENT FUNCTIONS

function checkAlpha(password) {
  let validity = false;
  pwCharList.alpha.forEach((char) => {
    if (password.includes(char)) {
      validity = true;
    }
  });

  return validity;
}

function checkNumber(password) {
  let validity = false;
  pwCharList.numbers.forEach((char) => {
    if (password.includes(char)) {
      validity = true;
    }
  });

  return validity;
}

function checkSymbol(password) {
  let validity = false;
  pwCharList.symbols.forEach((char) => {
    if (password.includes(char)) {
      validity = true;
    }
  });

  return validity;
}

export { setCreatingAccount };
