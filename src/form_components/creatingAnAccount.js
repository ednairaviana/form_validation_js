import { emailList } from "./emailList";

const emailInput = document.querySelector("#email");
const pwInput = document.querySelector("#password");
const confirmPwInput = document.querySelector("#confirm_pw");

function setCreatingAccount() {
  checkEmail();
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

export { setCreatingAccount };
