var preloadArr = new Array();
var i;
var currImg = 1;

$(function() {
  /* preload images */
  for(i=0; i < imgArr.length; i++){
    preloadArr[i] = new Image();
    preloadArr[i].src = imgArr[i];
  }

  var intID = setInterval(changeImg, 6000);
});

/* image rotator */
function changeImg() {
  $('#header').animate({opacity: 1}, 500, function() {
    $(this).css('background-image', 'url(' + preloadArr[currImg++%preloadArr.length].src +')');
  }).animate({opacity: 1}, 1000);
}