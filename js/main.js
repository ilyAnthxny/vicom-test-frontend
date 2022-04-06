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

  


