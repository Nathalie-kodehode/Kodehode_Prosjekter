//JSON: key values skal ha hermetegn, men funker same som JS
//JSON tillater IKKJE kommentarer

let array = [1, 2, ,3 ,4]

let object = {
    name: "per",
    alder: 23
}

//localStorage.setItem("name", "per")

const formField = document.querySelector("#form")
const UserName = document.querySelector("#username");
const UserPass = document.querySelector("#password");

//login screen (not secure, just concept)

//formData eksempel//

formField.addEventListener ("submit", (e) => {
//preventDefault gjer at sida ikkje gjer default funskjoner, som å reloade sida
e.preventDefault();

const formData = new FormData(formField)
let loginData = Object.fromEntries(formData.entries());
console.log(loginData);
saveToLocal(loginData.userName, loginData.passWord)
})

//metode 2 få ut data//

//formField.addEventListener ("submit", (e) => {
//e.preventDefault()

//const user = {
    //username: UserName.value,
    //password: UserPass.value
//}
//console.log(user)
 //})


function saveToLocal (username, password) {
const User = {
    username: username,
    password: password
}
localStorage.setItem("user", JSON.stringify(User)) //kan kun lagre strings i localstorage

}