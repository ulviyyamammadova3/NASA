let imageAnim = document.getElementById("image-animate");

let imageArray = [
 "https://i.insider.com/5ecd86fcf34d054060482387",
  "https://th.bing.com/th/id/R.2fb2371221760c3a79316146d589f6b5?rik=zJ6ZmJI3xBh%2bdA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.2819cf26bd85a2b48f66a2e77fd65f57?rik=JLtfpSss6XL8rw&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.aaf0bbfa302fe6a45d7369d90466b404?rik=YsIKNl9%2fOGY47A&pid=ImgRaw&r=0"
]

let imageIndex = 0;

const startImage = () =>{
  imageAnim.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if(imageIndex >= imageArray.length){
    imageIndex = 0;
  }
}

setInterval(startImage,900);


let imageAnimm = document.getElementById("image-animates");

let imageArrayy = [
 "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Buzz_salutes_the_U.S._Flag-crop.jpg/1280px-Buzz_salutes_the_U.S._Flag-crop.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/NASA_HQ_Building.jpg/1280px-NASA_HQ_Building.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Portrait_of_ASTP_crews_-_restoration-crop.jpg/1280px-Portrait_of_ASTP_crews_-_restoration-crop.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d4/NASA_Earth_Science_Division_Operating_Missions.jpg"
]

let imageIndexx = 0;

const startImagee = () =>{
  imageAnimm.setAttribute("src",imageArrayy[imageIndexx]);
  imageIndexx++;
  if(imageIndexx >= imageArrayy.length){
    imageIndexx = 0;
  }
}

setInterval(startImagee,900);


let imageAnimmm = document.getElementById("image-animatez");

let imageArrayyy = [ 
     "https://th.bing.com/th/id/R.73b568a15eec25ddd42786200a62cff3?rik=%2bU1OBGRO3DhFZA&pid=ImgRaw&r=0",
 "https://i.insider.com/5fab0abdf24e720018a2ab6f?format=jpeg",
  "https://i.dailymail.co.uk/i/pix/2015/03/12/26915C5600000578-2991467-Pictured_from_left_to_right_in_this_photo_of_the_Expedition_42_c-a-76_1426162836900.jpg",
  "https://th.bing.com/th/id/R.8f0f0f1c49be5873bd489dd4335598a3?rik=F5Av9ZuHs4oHwA&pid=ImgRaw&r=0"
]

let imageIndexxx = 0;

const startImageee = () =>{
  imageAnimmm.setAttribute("src",imageArrayyy[imageIndexxx]);
  imageIndexxx++;
  if(imageIndexxx >= imageArrayyy.length){
    imageIndexxx = 0;
  }
}

setInterval(startImageee,900);

