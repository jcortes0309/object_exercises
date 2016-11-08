# Object Exercises 2

## Plain Objects

Given the follow function:

```javascript
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
```

## One

Add or modify the above code to attach to the ```like``` function to ```pic1``` and ```pic2``` and then call it as a method to increment the ```timesLiked``` counters of those pics.

## Two

Given this function

```javascript
function hate() {
  this.timesLiked--;
}
```

Apply it to the ```'pic1'``` and ```'pic2'``` without attaching the function to the objects themselves, using either the ```'apply'``` or ```'call'``` method.


## Inheritance

Given the following objects:

```javascript
var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};
```


## One

Write code using ```__proto__``` to make ```daughter``` inherit properties from ```mom```. Print out each property that daughter has. What are they and what are their values?


## Two

Add a method called ```showInfo``` to ```mom``` by attaching a function to it. Calling this method will print out all four properties.

```javascript
firstName: Alice
lastName: Wong
eyeColor: brown
hairColor: black
```

This is what you should get:

```javascript
> daughter.showInfo()
firstName: Ilene
lastName: Wong
eyeColor: brown
hairColor: brown
```


## Three

Given this ```Character``` type

```javascript
function Character () {
}

Character.prototype.attack = function(enemy) {
  enemy.health -= this.power;
};
```

Write a ```Hero``` type that inherits it and overrides the ```attack``` method to randomly with 20% chance, double the dealt damage.


## Four

Given this Person type:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + '! My name is ' + this.name + '.');
};
```

Rewrite the above type by inlining it's ```greet``` method into it's constructor.


## Five

Take the previous Person type and rewrite it in factory function form.
