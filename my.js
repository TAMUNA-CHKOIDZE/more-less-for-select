//select - option - value = როცა სელექთში წერ ბაზებიდან წამოღებულ ინფოს და თითოეული ინფოს არჩევისას სელექთის ქვემოთ გამოდის ინფორმაცია სელექთში ჩაწერელის ინფოზე
let key;
axios.get('https://covid-api.mmediagroup.fr/v1/cases').then((response) => {
    console.log(response.data);

    key = Object.entries(response.data);
    for (let k = 0; k < key.length; k++ ){
        let select = document.getElementById("select");
        let option = document.createElement("option");
        option.innerHTML = key[k][0];
        select.appendChild(option);
    }
});


select.addEventListener('change', function(){
    let text = select.value;
    for (let k = 0; k < key.length; k++){

        if(text == key[k][0]){
            let location = key[k][1].All.location;
            let population = key[k][1].All.population;
            let deaths = key[k][1].All.deaths;
            let showText = document.querySelector("p");
            showText.innerHTML = `population: ${population} <br> location: ${location} <br> deaths: ${deaths}`;
            showText.appendChild(text);
        }
    }
     }); 

document.getElementById('span').addEventListener('click', function(){
    document.querySelector('.container').classList.toggle('active');
})

     










    //  function LESS(){
    //      let dots = document.getElementById("dots");
    //      let invisableText = document.getElementById("invisableText");
    //      let btnText = document.querySelector(".btn")
    //     if(dots.style.display != "none"){
    //         dots.style.display = "none";
    //         btnText.innerHTML = "LESS"
    //     }else{
    //         dots.style.display = "flex";
    //         invisableText.style.display = "none";
    //         btnText.innerHTML = "MORE"
    //     }
    //  }






        




    