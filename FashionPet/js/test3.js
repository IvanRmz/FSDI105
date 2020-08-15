var students = [
    {name:"Michael", ch:"Cohort 11", photo:"https://blick.com.mx/businessimage/097ccd4f03d962011101/P1pjrRlMRM.png"},
    {name:"Masaye", ch:"Cohort 5", photo:"https://blick.com.mx/businessimage/097ccd4f03d962011101/P1pjrRlMRM.png"},
    {name:"Colin", ch:"Cohort 11", photo:"https://blick.com.mx/businessimage/097ccd4f03d962011101/P1pjrRlMRM.png"},
    {name:"Miguel", ch:"Cohort 6", photo:"https://blick.com.mx/businessimage/097ccd4f03d962011101/P1pjrRlMRM.png"},
    {name:"Ingrid", ch:"Cohort 7", photo:"https://blick.com.mx/businessimage/097ccd4f03d962011101/P1pjrRlMRM.png"}
];

const main = document.getElementById("main-students");
var text = "";
students.forEach(student=>{
    text += `
        <div class = "student">
            <img src="${student.photo}">
            <h2>${student.name}</h2>
            <p>${student.ch}</p>
        </div>
    `;
});
main.innerHTML = text;