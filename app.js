var models = [
  {
    name : 'Bmw 418d',
    image : 'img/bmw.jpg',
    link : 'hhtp://www.arabalar.com'
  },
  {
    name : 'Mazda 418d',
    image : 'img/mzd.jpg',
    link : 'hhtp://www.arabalar.com'
  },
  {
    name : 'skoda 418d',
    image : 'img/skd.jpg',
    link : 'hhtp://www.arabalar.com'
  },
]

var index = 0;
var slaytCount = models.length;
var settings = {
  duration: '2000',
  random : true 
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener
('click',function(){
  indek--;
  showSlide(index);
  console.log(index);
});
document.querySelector('.fa-arrow-circle-right').addEventListener
('click',function(){
  indek++;
  showSlide(index);
  console.log(index);
});

function init (set){
  setInterval(function(){
    if(set.random){
      //random index
      index= Math.floor(Math.random() * slaytCount);
    }else{
      //artan index

    }
  },settings.duration)
}

function showSlide(i){
  
  index = i;

  if (i<0) {
    index = slaytCount-1;
  }
  if(i>= slaytCount){
    index =0;
  }
  document.querySelector('.card-title').textContent = models[index]
  .name;
  document.querySelector('.card-img-top').setAttribute('src',models
  [index].image);
  document.querySelector('.card-link').setAttribute('href',models
  [index].link);
}

