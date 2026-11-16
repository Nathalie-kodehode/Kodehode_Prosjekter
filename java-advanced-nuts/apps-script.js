//JSON: key values skal ha hermetegn, men funker same som JS
//JSON tillater IKKJE kommentarer


//localstorage tar for seg 2 ting: arrays og objects
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

//user og password function
function saveToLocal (username, password) {
    const AllUsers = [];
const User = {
    username: username,
    password: password
}

if(localStorage.getItem("user")) {
    const previousUsers = JSON.parse(localStorage.getItem("user"))
    previousUsers.forEach(e => {
        AllUsers.push(e)
    });
}
AllUsers.push(User)
localStorage.setItem("user", JSON.stringify(AllUsers))
//kan kun lagre strings i localstorage
}

//using JSON
const data = JSON.parse(localStorage.getItem("user"))
console.log(data)

//metode 2 få ut data//

//formField.addEventListener ("submit", (e) => {
//e.preventDefault()

//const user = {
    //username: UserName.value,
    //password: UserPass.value
//}
//console.log(user)
 //})

//herregud denne leksjonen føler så all over the place
//klarer lowkey ikkje å følgje med når ho lager kode, sletter den og lager ny så raskt
