const studentsData = [
  {
    name: "Dara Nelson",
    profession: "Computer Science",
    favLangs: ["HTML", "CSS","JavaScript", "PHP"],
    quotes: "<strong>QUOTES:</strong> The technology you use impresses no one. The experience you create with it is everything. – <strong>Sean Gerety</strong>",
    photo: "https://res.cloudinary.com/daranel/image/upload/v1606746079/DN_k6qhhg.jpg"
  },
  {
    name: "Mercy Kalu",
    profession: "Web Developer",
    favLangs: ["HTML", "CSS","JavaScript", "PHP"],
    quotes: "<strong>QUOTES:</strong> Once a new technology rolls over you, if you’re not part of the steamroller, you’re part of the road.” – <strong>Stewart Brand</strong>",
    photo: "https://res.cloudinary.com/belrah/image/upload/v1606158853/my_pics_leqpqa.jpg"
  },
  {
    name: "Jennifer Iroh",
    profession: "Front End Developer",
    favLangs: ["HTML", "CSS","JavaScript", "PHP"],
    quotes: "<strong>QUOTES:</strong> Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.” – <strong>Steve Jobs</strong>",
    photo: "https://res.cloudinary.com/iroh-jenny/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1606586839/Jennifer_rlckom.jpg "
  },
  {
    name: "Aisha Olubiyo",
    profession: "Accountant",
    favLangs: ["HTML", "CSS","JavaScript", "PHP"],
    quotes: "<strong>QUOTES:</strong> The technology you use impresses no one. The experience you create with it is everything. – <strong>Sean Gerety</strong>",
    photo: "https://res.cloudinary.com/daranel/image/upload/v1610186687/aisha_js1e17.jpg"
  },
  {
    name: "Abiona Quadrat Adewemimo",
    profession: "BioChemist",
    favLangs: ["HTML", "CSS","JavaScript", "PHP"],
    quotes: "<strong>QUOTES:</strong> Technology is a useful servant but a dangerous master. – <strong>Christian Lous Lange</strong>",
    photo: "https://res.cloudinary.com/daranel/image/upload/v1610186717/Adewemimo_syimt6.jpg"
  },
  {
    name: "Christianah Adeyemi",
    profession: "Lawyer",
    favLangs: ["HTML", "CSS","JavaScript", "PHP"],
    quotes: "<strong>QUOTES:</strong> Technology is best when it brings people together  – <strong>Matt Mullenweg</strong>",
    photo: "https://res.cloudinary.com/daranel/image/upload/v1610186688/Christianah_pxsmmb.jpg "
  }
];

curIndex = 0;
    imgDuration = 2000;        

var home = document.getElementById('app')
var image = document.createElement('img')

function slideShow() {
    if(curIndex != petsData.length-1) { 
      image.src = petsData[curIndex];
      app.appendChild(image)
      curIndex++;
    }else{
      curIndex = 0;
    } 
}
setInterval(slideShow,2000)

function foods(foods) {
  return `
<h4>Tech Languages</h4>
<ul class="langs-list">
${foods.map(food => `<li>${food}</li>`).join("")}
</ul>
`;
}

function studentTemplate(student)  {
  return `
  <div class ="student">
  <img class="student-photo" src="${student.photo}">
  <h2 class="student-name">${student.name} <span class="profession">(${student.profession})</span></h2>
  ${student.favLangs ? foods(student.favLangs) : ""}
  <p class="student-quotes">${student.quotes}</p>

  </div>
  `
}
document.getElementById("app").innerHTML = `
    <h1 class="app-title">Pearls Africa Photobook</h1>
    ${studentsData.map(studentTemplate).join('')}
    <p class="footer">These ${studentsData.length} students of LAW 1 were added recently. Check back soon for updates: <strong>Dara Nelson, 2020</strong></p>
`;
