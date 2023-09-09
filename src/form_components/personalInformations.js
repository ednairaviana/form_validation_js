const fsNameInput = document.querySelector("#f_name");
const lsNameInput = document.querySelector("#l_name");
const birthInput = document.querySelector("#birth");

function setPersonalInformations() {
  checkBirth();
}

function checkBirth() {
  birthInput.addEventListener("input", () => {
    const birthday = new Date(birthInput.value);
    const milisecond = Math.abs(new Date() - birthday);
    const year = Math.floor(milisecond / 31556952000);

    if (year < 15 || year > 100) {
      birthInput.setCustomValidity("Invalid!");
      return;
    } else {
      birthInput.setCustomValidity("");
    }
  });
}

export { setPersonalInformations };
