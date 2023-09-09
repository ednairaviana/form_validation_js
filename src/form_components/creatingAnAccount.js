import { emailList } from "./emailList";
import { pwCharList } from "./charList";
import { insertPopUp, okMessage } from "../dom_components/createPopup";

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

    if (emailArray.length < 2) {
      if (emailArray[0].length < 3) {
        emailInput.setCustomValidity("Invalid");
        insertPopUp(emailInput, "Too short!");
        return;
      } else if (emailArray[0].length > 50) {
        emailInput.setCustomValidity("Invalid");
        insertPopUp(emailInput, "Too long!");
        return;
      } else {
        emailInput.setCustomValidity("Invalid");
        insertPopUp(emailInput, "Don't forget @!");
        return;
      }
    } else if (emailArray.length == 2) {
      if (!emailList.includes(emailArray[1])) {
        emailInput.setCustomValidity("Invalid!");
        insertPopUp(emailInput, "Your host name is not valid!");
      } else {
        emailInput.setCustomValidity("");
        okMessage(emailInput);
        return;
      }
    }
  });
}

function checkPassword() {
  pwInput.addEventListener("input", () => {
    const password = pwInput.value.split("");

    if (password.includes(" ")) {
      pwInput.setCustomValidity("Invalid!");
      insertPopUp(pwInput, "Your pw can't have spaces!");
      return;
    }
    if (password.length < 10) {
      pwInput.setCustomValidity("Invalid!");
      insertPopUp(pwInput, "Min 10 characteres");
      return;
    }
    if (!checkAlpha(password)) {
      pwInput.setCustomValidity("Invalid!");
      insertPopUp(pwInput, "At least one capital letter!");
      return;
    }
    if (!checkNumber(password)) {
      pwInput.setCustomValidity("Invalid!");
      insertPopUp(pwInput, "At least one number!");
      return;
    }
    if (!checkSymbol(password)) {
      insertPopUp(pwInput, "At least one symbol!");
      return;
    }

    pwInput.setCustomValidity("");
    okMessage(pwInput);
  });
}

function checkConfimrPassword() {
  confirmPwInput.addEventListener("input", () => {
    if (!pwInput.validity.valid) {
      confirmPwInput.setCustomValidity("Invalid!");
      insertPopUp(confirmPwInput, "Your pw is invalid!");
    } else if (pwInput.value !== confirmPwInput.value) {
      confirmPwInput.setCustomValidity("Invalid!");
      insertPopUp(confirmPwInput, "It's not equal to your pw");
    } else {
      confirmPwInput.setCustomValidity("");
      okMessage(confirmPwInput);
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
