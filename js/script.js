var i = 0;  // start point
var images = [];
var time = 3000;

// image list
images[0] = '../image/chez-thoa-suggestion-du-chef-5a2cb.jpg';
images[1] = '../image/chez-thoa-suggestion-du-chef-039dd.jpg';
images[2] = '../image/chez-thoa-suggestion-du-chef-42733.jpg';
images[3] = '../image/chez-thoa-vue-de-la-salle-ab312.jpg';
images[4] = '../image/chez-thoa-vue-de-la-salle-cce05.jpg';
images[5] = '../image/chez-thoa-vue-de-la-salle-e5f91.jpg';
images[6] = '../image/chez-thoa-vue-de-la-salle-e92a4.jpg';



// change image
function changeImg() {
    document.slide.src = images[i];
    if(i < images.length -1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}

