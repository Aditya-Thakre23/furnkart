var imgPath = document.querySelector("p").innerHTML;
var imgID2 = document.querySelector("#id2").innerHTML;//location of the transarent images
$(document).ready(function(){
  $("#demo").vc3dEye({
    imagePath: imgPath, // the location where you’ve put the images.
    totalImages:18, // the number of images you have.
    imageExtension:"png" // the extension of the images. Make sure all the images have same extension.
  });
});
