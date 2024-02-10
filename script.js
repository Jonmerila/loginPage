const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginContainer = document.querySelector(".login-container");
const registerField = document.querySelector(".register-field");
const finishRegisterBtn = document.querySelector(".registerUser");

const loginName = document.querySelector("#loginUser");
const loginPass = document.querySelector("#loginPass");

const newPass = document.querySelector("#regiPass");
const newUser = document.querySelector("#regiUser");
let users = [];
let passwords = [];
console.log(loginBtn, registerBtn);

registerBtn.addEventListener("click", () => {
  loginContainer.classList.add("hide");
  registerField.classList.remove("hide");
});

finishRegisterBtn.addEventListener("click", () => {
  loginName.value = "";
  loginPass.value = "";

  users.push(newUser.value);
  console.log(users);
  console.log(newPass.value);
  passwords.push(newPass.value);
  console.log(passwords);
  sessionStorage.setItem("user", JSON.stringify(users));
  sessionStorage.setItem("password", JSON.stringify(passwords));
  alert("New user registered!");
  loginContainer.classList.remove("hide");
  registerField.classList.add("hide");
  console.log("Data: " + sessionStorage.getItem("password"));
});

loginBtn.addEventListener("click", () => {
  console.log(loginName.value, loginPass.value);
  let dataUsers = JSON.parse(sessionStorage.getItem("user"));
  console.log(dataUsers);
  console.log(users);

  users.forEach((user, index) => {
    console.log("User:" + user);
    if (user === loginName.value) {
      console.log("right user");
      console.log("Index: " + index);
      console.log(sessionStorage.getItem("password"));
      if (loginPass.value === passwords[index]) {
        console.log("Right pass");
      }
    }
  });
});
