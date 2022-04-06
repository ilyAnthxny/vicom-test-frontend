// Slick Slider

$('.cards__container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }
      ,
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // Accordion

  const accordions = document.getElementsByClassName("question__item__title");

  for(i = 0; i<accordions.length; i++){
    accordions[i].addEventListener("click", function(){
      this.nextSibling.nextSibling.classList.toggle("active")

     const point = this.querySelector(".title__point")
     point.classList.toggle("rotate")

     if( point.innerHTML == "+"){
      point.innerHTML =  "-"
     }else{
       point.innerHTML = "+"
     }
    })
  }

  
  // Character

  const image = document.getElementById("image")
  const name = document.getElementById("name")
  const gender = document.getElementById("gender")
  const episodeList = document.getElementById("episodes")

  fetch("https://rickandmortyapi.com/api/character/2")
  .then(res => res.ok ? Promise.resolve(res): Promise.reject(res))
  .then(res => res.json())
  .then(res => {
    image.setAttribute("src", `${res.image}`)
    name.innerHTML = `${res.name}`;
    gender.innerHTML = `${res.gender}`;

    for(i = 0; i<5; i++){
      const episode = document.createElement("LI")
      episode.setAttribute("class", "episode")
      episode.textContent = res.episode[i]
      episodeList.appendChild(episode)
    }
  })
  .catch(err => console.log(err))
  


