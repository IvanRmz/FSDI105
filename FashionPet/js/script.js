console.log("Executed!...");

// object literal for the salon

const salon = {
    name: "The Fashion Pet",
    phone: "555-555-555",
    address:{
        city:"Tijuana",
        av:"Lago",
        number:"1234"
    },
    pets:[]
}

// console.log(salon);
let {name,phone,address:{city,av,number}} = salon;
// console.log(city);

document.getElementById("info").innerHTML = `
<p>
    ${name}, 
    <b>${city}, ${av} ${number}</b>
    <br>
    ${phone}
</p>
`;



// object constructor for the pets
var counter  = 1;
class Pet {
    constructor(name,age,type,breed,gender,service,allergy,ownersName,contactPhone){
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.allergy = allergy;
        this.ownersName = ownersName;
        this.contactPhone = contactPhone;
        this.id = counter++; 
    }
}

const scooby = new Pet("Scooby",30,"Dog","Dane","Male","Full Service","none","Shaggy","555-555-556");
// console.log(scooby);
const scrapy = new Pet("Scrapy",20,"Dog","Dane","Male","Nails cut","none","Shaggy","555-555-556");
const beethoven = new Pet("Beethoven",40,"Dog","St. Bernard","Male","Shower","none","Newton","555-555-557");
const slinky = new Pet("Slinky ",80,"Dog","Dachshund","Male","Shower","none","Andy","555-555-558");

//add pets to the array

salon.pets.push(scooby);
salon.pets.push(scrapy);
salon.pets.push(beethoven);
salon.pets.push(slinky);

// console.log(`Total of pets ${pets.length}`)
// console.log("Pets:")
// pets.forEach(pet=>console.log(`> ${pet.name}`));


const petNameInput =  document.getElementById("petName");
const petAgeInput =  document.getElementById("petAge");
const petTypeInput =  document.getElementById("petType");
const petBreedInput =  document.getElementById("petBreed");
const petGenderInput =  document.getElementById("petGender");
const petServiceInput =  document.getElementById("petServices");
const petAllergyInput =  document.getElementById("petAllergy");
const petOwnerNameInput =  document.getElementById("petOwnerName");
const petOwnerContactPhoneInput =  document.getElementById("petOwnerContactPhone");

function registerPet () {
    var newPet = new Pet(
        petNameInput.value,
        Number(petAgeInput.value),
        petTypeInput.value,
        petBreedInput.value,
        petGenderInput.value,
        petServiceInput.value,
        petAllergyInput.value,
        petOwnerNameInput.value,
        petOwnerContactPhoneInput.value
    );
    // console.log(newPet);
    salon.pets.push(newPet);
    clear();
    displayTable(newPet);
    // display();
}

function clear() {
    petNameInput.value = "";
    petAgeInput.value = "";
    petTypeInput.value = "";
    petBreedInput.value = "";
    petGenderInput.value = "";
    petServiceInput.value = "";
    petAllergyInput.value = "";
    petOwnerNameInput.value = "";
    petOwnerContactPhoneInput .value = "";
}

// display on the console the oldest pet and the youngest pet.



function displayTable(aPet) {
    var tbody = document.getElementById("rowPet");
    var row = `
    <tr id = "${aPet.id}">
        <td>${aPet.name}</td>
        <td>${aPet.age}</td>
        <td>${aPet.type}</td>
        <td>${aPet.gender}</td>
        <td>${aPet.breed}</td>
        <td>${aPet.service}</td>
        <td>${aPet.allergy}</td>
        <td>${aPet.ownersName}</td>
        <td>${aPet.contactPhone}</td>
        <td><button class = "btn btn-danger" onclick="deletePet(${aPet.id})"><i class="fas fa-trash-alt"></i></button><td>
    </tr>`;
    tbody.innerHTML+=row
}

function displayPets(pets) {    
    pets.forEach(pet => {
        displayTable(pet);
    });
}
function refreshTable(){
    var tbody = document.getElementById("rowPet");
    tbody.innerHTML=""
}


function deletePet(petID) {
    console.log("delete pet id : " + petID);
    var tr = $("#"+petID);
    salon.pets.splice(
        salon.pets.forEach(pet=>{
            if(pet.id === petID) 
                return salon.pets.indexOf(pet);
        })
        ,1
    );
    tr.remove();
}

function searchPet() {
    var ss = $("#petSearch").val();
    var searchString = ss.toLowerCase();
    console.log(searchString);
    $("tr").removeClass("highlight");
    $("#msg").hide();
    if(searchString === ""){
        // refreshTable();
        // displayPets(salon.pets);
    } else {
        var petHighlight = false;
        salon.pets.forEach(pet=> { 
            if(pet.name.toLowerCase().includes(searchString) ||
                pet.type.toLowerCase().includes(searchString) || 
                pet.gender.toLowerCase().includes(searchString) || 
                pet.breed.toLowerCase().includes(searchString)||
                pet.service.toLowerCase().includes(searchString)||
                pet.allergy.toLowerCase().includes(searchString)||
                pet.ownersName.toLowerCase().includes(searchString)
                ){
                    $("#" + pet.id).addClass("highlight");
                    petHighlight = true;
            } 
        });
        if(!petHighlight){
            $("#msg").show();
        }
        // refreshTable();
        // displayPets(newArray);

    }
}
displayPets(salon.pets);