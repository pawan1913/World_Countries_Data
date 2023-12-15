const apiUrl = 'https://restcountries.com/v3.1/all';
// const apiUrl = 'https://restcountries.com/v3.1/lang';
const world0ApiUrl = 'https://restcountries.com/v3.1/alpha?codes=OWID_WRL';

let popuBtn = document.querySelector(".Population")
let languagesBtn = document.querySelector(".Languages")
console.log(popuBtn);
let thirdsec = document.querySelector("#third_sec")
let forth_sec = document.querySelector("#forth_sec")

let secondSec = document.querySelector("#mainHeading")
secondSec.textContent = `10 Most Populated Countries in the world`
// console.log(secondSec);
// secondSec.innerHTML=`   <h3 >10 Most Populated Countries in the world</h3>`

popuBtn.addEventListener('click' , ( ) => {
  console.log("Hello Popu");
  thirdsec.style.display ="block"
  forth_sec.style.display ="none"
})


languagesBtn.addEventListener('click' , ( ) => {
  console.log("Hello Popu");
  thirdsec.style.display ="none"
  forth_sec.style.display ="block"
})


// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    
    const sortedCountries = data.sort((a, b) => b.population - a.population);
    for (let i = 0; i < 10; i++) {
    const country = sortedCountries[i];
    // console.log(country);
   

    // console.log(thirdsec);
      //   console.log(`Country: ${country.name.common}, Population: ${country.population}`);
    let data = document.createElement("div")
    data.classList.add("data")
    let name = document.createElement("div")
    name.classList.add("name")
    let nameh2 = document.createElement("h3")
    nameh2.textContent = country.name.common
    // console.log(nameh2);
    let bo = document.createElement('div')
    bo.classList.add("bo")
    bo.style.width =" 44vw"
    let box = document.createElement("div")
    box.classList.add("box")
    box.style.width = `${40-i*4 }vw`
    let population = document.createElement("h3")
    population.textContent = country.population 
    population.style.color ="#F2A93B";
    population.style.width ="6vw";


    // console.log(population);

    data.appendChild(name)
    bo.appendChild(box)
    data.appendChild(bo)
    name.appendChild(nameh2)
    data.appendChild(population)
    
    thirdsec.appendChild(data)
    // console.log(data);
  }
    
      // if (country.languages) {
        // const mostSpokenLanguage = country.languages[Object.keys(country.languages)[0]];
        // console.log(`Most Spoken Language: ${mostSpokenLanguage}`);
      // }
    // });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


  
 
  

  // const apiUrl = 'https://restcountries.com/v3.1/all';

// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const sortedCountries = data.sort((a, b) => b.population - a.population);

    // Display information for individual countries
    for (let i = 0; i < 10; i++) {
      const country = sortedCountries[i];

      // Create and append HTML elements for country data
      // (your existing code here)

      // Display information about the most spoken languages
      if (country.languages) {
        const languages = Object.keys(country.languages);
        console.log(`Country: ${country.name.common}, Most Spoken Languages: ${languages.slice(0, 10).join(', ')}`);
      }
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


  const languageArray = [
    { "language": "English", "countries": 54 },
    { "language": "Arabic", "countries": 22 },
    { "language": "Spanish", "countries": 21 },
    { "language": "Portuguese", "countries": 9 },
    { "language": "Indonesian/Malay", "countries": 5 },
    { "language": "Russian", "countries": 4 },
    { "language": "Hindi", "countries": 3 },
    { "language": "Urdu", "countries": 3 },
    { "language": "Bengali", "countries": 2 },
    { "language": "Mandarin Chinese", "countries": 1 },
  ]
  

  languageArray.forEach((country,index) => {
  console.log(country.language);
  console.log(country.countries);



console.log(forth_sec);

  let data = document.createElement("div")
  data.classList.add("data")
  let name = document.createElement("div")
  name.classList.add("name")
  let nameh2 = document.createElement("h3")
  nameh2.textContent = country.language
  // console.log(nameh2);
  let bo = document.createElement('div')
  bo.classList.add("bo")
  let box = document.createElement("div")
  box.classList.add("box")
  bo.style.width =" 44vw"
  let population = document.createElement("h3")
  population.textContent = country.countries 
  population.style.color ="#F2A93B";
  population.style.width ="6vw";
  
  box.style.width = `${country.countries/1.3}vw`;

  data.appendChild(name)
  bo.appendChild(box)
  data.appendChild(bo)
  name.appendChild(nameh2)
  data.appendChild(population)
  
  forth_sec.appendChild(data)
  // console.log(data);



  })
