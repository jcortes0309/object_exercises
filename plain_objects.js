// Given the follow function:

function like() {
  this.timesLiked++;
}

var pic1 = {
  url: 'lolcat.jpg',
  timesLiked: 0
};

var pic2 = {
  url: 'chucknorris.jpg',
  timesLiked: 0
};

// One
//
// Add or modify the above code to attach the like function to pic1 and pic2 and then call it as a method to increment the timesLiked counters of those pics.
pic1.like = like;
pic2.like = like;

pic1.like();
pic2.like();
console.log("Pic1 liked: " + pic1.timesLiked + " times");
console.log("Pic2 liked: " + pic2.timesLiked + " times");
pic1.like();
pic2.like();
console.log("Pic1 liked: " + pic1.timesLiked + " times");
console.log("Pic2 liked: " + pic2.timesLiked + " times");
