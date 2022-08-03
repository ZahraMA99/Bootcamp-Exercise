// Form

const btn = document.getElementById("btn");
const name = document.getElementById("name");
const salary = document.getElementById("salary");
const birthday = document.getElementById("birthday");
const phone = document.getElementById("phone");
const sumbit = document.getElementById("submit");


const validate = function () {
  let name = name.value;
  let salary = salary.value;
  let birthday = birthday.value;
  let phone = phone.value;

  let message = " ";
  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("class", "message");
  messageLabel.style.color = "black";

  if (name.length < 2) {
    message += "name must be more than 2 letters";
  } else {
    if (salary <= 10000 || salary >= 16000) {
      message += "enter number between 10000-16000";
    } else {
      if (birthday == "") {
        message += "please enter your birthday" + "\n";
      } else {
        if (phone.length != 10) {
          message += " phone must be 10 digits";
        } else {
          form.style.display = "none";
          const welcome = document.createElement("h2");
          welcome.innerHTML = "Welcome";
          document.body.appendChild(welcome);
        }
      }
    }
  }
  messageLabel.innerHTML = message;
  form.appendChild(messageLabel);
};
