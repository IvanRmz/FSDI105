const images = [

    ["Dog","https://vignette.wikia.nocookie.net/coraje/images/e/e9/Coraje.jpg/revision/latest/top-crop/width/360/height/450?cb=20160827181700&path-prefix=es"],
    ["Cat","https://cdn.shopify.com/s/files/1/0049/3456/6003/products/STL119381_78fb417e-7812-4cee-bd93-f0e239fc4541_1022x.jpg?v=1571721524"],
    ["Fish","https://i.etsystatic.com/11355950/r/il/9b46ab/1157834439/il_570xN.1157834439_gydm.jpg"],
    ["Bird","https://img.europapress.es/fotoweb/fotonoticia_20110404104002_420.jpg"],
    ["Hamster","https://i.pinimg.com/originals/a2/34/45/a23445277b1df8b57889bf94f079e83c.jpg"]
];

const mapImages = new Map(images)
function display(){
    var pets = salon.pets;
    console.log(pets);

    const petsSection = document.getElementById("pets");
    const petsCount = document.getElementById("pets-count");
    var text = "";

    petsCount.innerHTML = `
        <h1>Total of Pets: ${pets.length}</h1>
    `;
    pets.forEach(pet => {

        text += `
            <div class = "pet">
                <img src="${mapImages.get(pet.type)}" alt="pet image">
                <div class= "pet-description">
                    <h2>Name: ${pet.name}</h2>
                    <p><strong>Age:</strong> ${pet.age}</p>
                    <p><strong>Type:</strong> ${pet.type}</p>
                    <p><strong>Breed:</strong> ${pet.breed}</p>
                    <p><strong>Genger:</strong> ${pet.gender}</p>
                    <p><strong>Service:</strong> ${pet.service}</p>
                    <p><strong>Allergy:</strong> ${pet.allergy}</p>
                    <p><strong>Owner:</strong> ${pet.ownersName}</p>
                    <p><strong>Contact Phone:</strong> ${pet.contactPhone}</p>
                </div>
            </div>
        `;
    });

    petsSection.innerHTML = text;
}

display();