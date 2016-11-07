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


// Two
//
// Given this function

function hate() {
  this.timesLiked--;
}

// Apply it to the `pic1` and `pic2` without attaching the function to the objects themselves, using either the `apply` or `call` method.

// Using apply method
hate.apply(pic1);
hate.apply(pic2);
console.log("Pic1 liked: " + pic1.timesLiked + " times");
console.log("Pic2 liked: " + pic2.timesLiked + " times");

// Using call method
hate.call(pic1);
hate.call(pic2);
console.log("Pic1 liked: " + pic1.timesLiked + " times");
console.log("Pic2 liked: " + pic2.timesLiked + " times");
