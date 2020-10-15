## Translate, scale, rotate via push and pop

### Translate

Up till now, we have always assumed that the coordinate system is starting from top left with the coordinates 0,0. Another technique for positioning and moving things is to change the coordinate system. We can move the default coordinate system with the function **translate()** which takes two parameters (the x and y value). It's like an offset. First, try this:

```javascript
function setup() {
  createCanvas(500, 500);
  background(255);
  textSize(40);
  fill(0);
}

function draw() {
  background(255);
  translate(mouseX, mouseY);
  text("uncertainty", 0, 0);
}
```

The translate() function sets the coordinate system of the screen to the mouse location (mouseX and mouseY).

### Rotate

The **rotate()** function rotates the coordinate system. It takes exactly one parameter (the angle in radians). If you want to work with numeric angle parameters (from 0 to 360), you'll to transform the angle from degrees to radians. Read more about conversion [here](https://p5js.org/reference/#/p5/radians). A more profound explanation of the unit radian can be found [here](https://en.wikipedia.org/wiki/Radian)

Or try it yourself to see what is the radians value of 90 degrees:

```javascript
function draw() {
  print(radians(90));
}
```

Now, we will try to save the variable __angle__ and increment it each time the draw() function is being called.

```javascript
let angle = 0;
function draw() {
  angle += 1;
  print(radians(angle));
}
```

Can we tell the program that it should __reset__ the angle variable once it's bigger than 360?

See [solution](https://editor.p5js.org/ritzdank/sketches/9u617TaHP)

Next challenge: Can you make rotate the text we've used before? Try to experiment with both, the translate and the rotate function.

You'll quickly notice that the centre of rotation is the top left corner. What if we want to rotate around the centre of the object? We will have to offset the the coordinates of the text function in this line:

```javascript
text("uncertainty", 0, 0);
```

The function [textWidth](https://p5js.org/reference/#/p5/textWidth) helps us to find out the width of a string. We have to store the text string in a variable in order to get its width:

```javascript
let myText = "uncertainty";
let w = textWidth(myText);
print(w);
```

We know the width of our text in pixels. Now we can offset it by exactly half of that value.

```javascript
let myText = "uncertainty";
let w = textWidth(myText);
text("uncertainty", -w/2, 0);
```

The y value should also be offset by the height of the font divided by two. We initially took 40 within the textSize function. Hence, we can write **-20** to offset the appearance of the text.

```javascript
let myText = "uncertainty";
let w = textWidth(myText);
text("uncertainty", -w/2, -20);
```

See [solution](https://editor.p5js.org/ritzdank/sketches/IRwvmbPNe)

So far, we used the translation function before calling rotate. What happens when you change the order? Try rotating first and then translate. What happens if you for example use a variable that grows over time inside the translate function?

### Scale

As you might guess, the scale function, scales and stretches the coordinate system. The value given is in floating percentages, which means if you pass 1.2 it stretches the system by 120%, passing 2 is equal to 200% (double size), etc.

Try to take the example with the centred text and make it grow. It is growing very quickly. What parameter do we need to change it make it grow slower?

Can you make the text fade in? Use the fill function it make it dependent on the variable that is growing together with the scale function:

### PushMatrix and popMatrix

As we've seen, the translate, rotate and scale function affect all other later drawing functions in our sketch. We can isolate the all these transformations, so they **don't** affect our coordinate system. With **pushMatrix()** you can __save__ the current coordinate system which can be later restored with **popMatrix()**. This is handy if you want to transform some operations onto one object but not on other ones inside your sketch.

Let's say, I want to make the rotating text example and draw a square in the centre of the sketch (that doesn't rotate).

```javascript
function setup() {
  createCanvas(600, 600);
  background(255);
  textSize(20);
  fill(0);
}

let speed = 0;
function draw() {
  speed += 0.1;
  push();
  translate(0,height/2);
  scale(speed);
  fill(0,0,0,(speed));
  String myText = "uncertainty";
  text("uncertainty", 0, 0);
  pop();
  rect(0,0,100,100);
}
```

See the [sketch](https://editor.p5js.org/ritzdank/sketches/rKZaWrp63)

**push()** and **pop()** are always used in pairs. For each **push()** you'll have to call a matching **pop()**.

Challenge: Try to comment out the push()) and the pop)() functions. What happens? Try to perform another transformation by using pushMatrix and popMatrix around the square.

push() stores information related to the current transformation state and style settings controlled by the following functions: fill(), noFill(), noStroke(), stroke(), tint(), noTint(), strokeWeight(), strokeCap(), strokeJoin(), imageMode(), rectMode(), ellipseMode(), colorMode(), textAlign(), textFont(), textSize(), textLeading(), applyMatrix(), resetMatrix(), rotate(), scale(), shearX(), shearY(), translate(), noiseSeed().

See more in the [reference](https://p5js.org/reference/#/p5/push)