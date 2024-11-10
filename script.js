
// const hotel = {
//     hotelName: "Resort Hotel",
//     userName: "Petro",
//     userAge: 41,
//     city: "Lviv",
//     stars: 5,
//     showHello: function(){
//         // alert(this.hotelName)
//         console.log(`my name is ${this.userName}, I am ${this.userAge} years old`)
        
//     },
//     capacity: 100,
// };
// // hotel.showHello()
// // console.log(hotel);
// // console.log(hotel.name);
// // delete hotel.stars
// // console.log(hotel);
// const hotelName = "Ibis"
// const userName = "Yana"
// hotel.showHello()
// console.log(hotel.hotelName);



// 1) Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.

// const person ={
//     name: "Petro",
//     age: 41,
//     gender: "male",
//     message: function (){
//         alert (`my name is ${person.name}, I am ${person.age} years old, and I am ${person.gender}`)
//     }
// }
// const text = document.querySelector('.text')
// text.textContent = person.name
// person.message()



// 2) Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.

// const students = [
//     {
//      name: "Petro",
//      age: 41,
//      gender: "male",
//      grade: 5.5  
//     }, 
//     {
//         name: "Anna",
//         age: 440,
//         gender: "female",
//         grade: 4.5  
//        },
//     {
//         name: "Olena",
//         age: 42,
//         gender: "female",
//         grade: 5   
//        }
// ]

// const score = function (params) {
//     let totalScore = 0
// // for (const element of params) {
// //     finalScore = finalScore+students.grade
// // }
// for (let index = 0; index < params.length; index++) {
//     totalScore += params[index].grade;
    
// }
// let averageScore = totalScore/score.length
// return averageScore
// }


// console.log(score(students));


// 3) Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.

// const book = {
//     title: "Vanilla sky",
//     author: "J Chase",
//     year: "2023",
//     genre: "Science fiction",
//     change: function (newTitle, newAuthor, newYear, newGenre) {
//         this.title = newTitle;
//         this.author = newAuthor;
//         this.year = newYear;
//         this.genre = newGenre;
//     }
// };

// book.change("Avatar", "Elon Musk", "2100", "Alien");

// console.log(book.title,book.author,book.year, book.genre);


// 4) Створіть об’єкт "сar", який буде мати властивості "brand", "model", "year" та "color". Додайте метод, який буде виводити на екран повідомлення про автомобіль зі значеннями всіх властивостей.

// const car = {
//     brand: "Tesla",
//     model: "Model 3",
//     year: "2023",
//     color: "grey",
//     message: function () {
// console.log(`My car is ${this.brand} ${this.model}, production year is ${this.year}, and color is ${this.color}`);

// }
// }
// car.message();





// 5) Створіть об'єкт "restaurant" з властивостями "name", "cuisine", "address" та "rating". Додайте до об'єкту метод, який дозволить змінювати значення властивостей "address" та "rating"

const restaurant = {
    name: "Alpine",
    cuisine: "Italian",
    address: "Luzern, Zurich strasse, 145",
    rating: 10,
    changeAddressRating: function (newAddress, newRating) {
this.address = newAddress;
this.rating = newRating
}
}
restaurant.changeAddressRating("Zurich, Bernstrasse, 2", 8)
console.log(restaurant.name,restaurant.cuisine, restaurant.address, restaurant.rating);

