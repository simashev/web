let headers = document.querySelector("h1")
headers.style.color = "green"

// HW 1
function Film (Myfilm){
let input = prompt("Введите Мой любимы фильм")
    if (input != Myfilm){ 
        alert ("Попробуйте еще раз");
    }
    else{
        alert ("Красава");
    }
}

Film("один дома")

// HW 2

var array = ['a','b','c'];

array [0] = 'hello';
array [1] = 'mr buzlighter how are you?';
array [2] = 'Q';
alert (array);





// //1
// alert (158+2);
// //2
// let myName = "Андрей";
// alert ("Привет "+ myName + "!");
// //3
// let myNewName = prompt("Как вас зовут?")
// // alert (myNewName) 
// //4
// function promptName(myNames){
//     alert ("мое имя "+ myNames)
// }
// promptName(myNewName)

// // 5
// let strMyNe = confirm("вы уверены?");
// if (strMyNe)
// {
// alert("Да");
// }else
// {
// alert("Нет");
// }
// //6
// let age = parseInt(prompt("Ваш возраст: ")); 
// switch (age) {
//     case 18:
//         alert('Вы совершеннолетний, все можно!'); 
//         break
//     case 10:
//         alert('Вам надо учить уроки!');
//         break
//     case 30:
//         alert('Ложитесь спать, завтра на работу'); 
//         break
//     default :
//         alert('Мы не знаем что Вам делать');
// }
// //7
// //let massMy = [2, 6, 8, 3, 10, 1]; //massMy.sort(function(a, b) {

// //   return a - b;
// // });
// //alert(massMy);