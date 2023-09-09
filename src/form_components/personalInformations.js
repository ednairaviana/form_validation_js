const fsNameInput = document.querySelector("#f_name");
const lsNameInput = document.querySelector("#l_name");
const birthInput = document.querySelector("#birth");

function setPersonalInformations() {
  checkBirth();
}

function checkBirth() {
  birthInput.addEventListener("input", () => {
    const birthday = new Date(birthInput.value);
    const diff = new Date().getTime() - birthday.getTime();
    const year = Math.floor(diff / 31556952000);

    if (year < 15 || year > 100 || year < 0) {
      birthInput.setCustomValidity("Invalid!");
      return;
    } else {
      birthInput.setCustomValidity("");
    }
  });
}

export { setPersonalInformations };
