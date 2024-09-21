var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }];
for (var key in itemsArray) {
    var items = itemsArray[key]
    // console.log(items)
    var itemPrice = items.price * items.quantity
    console.log(` The price of ${items.name} is Rs. ${itemPrice}`);
    document.write(` The price of ${items.name} is Rs. ${itemPrice} ${"<br>"} `);

}

var info = {
    name: "alina",
    email: "abc2020@gmail.com",
    password: "abc123",
    gender: "female",
    age: 20,
    city: "karachi",
    country: "pakistan"
}
console.log(info)
console.log("age" in info)
console.log("country" in info)
console.log("firstname" in info)
console.log("lastname" in info)
document.write("age" in info)
document.write("<br>")
document.write("country" in info)
document.write("<br>")
document.write("firstname" in info)
document.write("<br>")
document.write("lastname" in info)
document.write("<br>")


function Person(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
}

var person1 = new Person("alina", 20, "software developer")
console.log(person1)

var person2 = new Person("ayesha", 22, "data analysis")
console.log(person2)

var person3 = new Person("fatima", 25, "web developer")
console.log(person3)
console.log(person3)



function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to save data to localStorage
function saveToLocalStorage(person) {
    var records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    records.push(person);
    localStorage.setItem('populationRecords', JSON.stringify(records));
}

// Function to display records from localStorage
function displayRecords() {
    var recordsDiv = document.getElementById('records');
    recordsDiv.innerHTML = ""; // Clear previous records

    var records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    records.forEach(function (person, index) {
        recordsDiv.innerHTML += `<p>${index + 1}, Name: ${person.name}, Gender: ${person.gender}, Address: ${person.address}, Education: ${person.education}, Profession: ${person.profession}</p>`;
    });
}

// Handling form submission
document.getElementById('populationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var profession = document.getElementById('profession').value;

    // Create new person object using the constructor
    var person = new Person(name, gender, address, education, profession);

    // Save the record to localStorage
    saveToLocalStorage(person);

    // Display the updated records
    displayRecords();

    // Reset the form
    document.getElementById('populationForm').reset();
});

// Display existing records on page load
window.onload = function () {
    displayRecords();
};