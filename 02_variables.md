## Variables

As we've seen the previous example, modifying parameters directly inside of the parenthesis can look chaotic.

```javascript
  ellipse(width/2, height/2, width/4, height/4);
```

Another reason is if you are typing the same number more than once, consider using a variable instead so that your code is more easier to update and to read. **What is a variable?** A variable stores a value in a container (or memory). It becomes a placeholder that can be used later in a program. Variables can be used many times within a single program. Their value can change during the execution of the program. Variable names are defined by the person who writes the code. The name should be chosen informative (in our example a variable called diameter would make more sense and be more readable than a variable called just d). When you make a variable, you have to define a name and the value. Let's define the diameter of our ellipse

```javascript
  let diameter = 30;
  ellipse(width/2, height/2, diameter, diameter);
```

We can still enhance readability by writing:

```javascript
  let diameter = 30;
  let x = width/2;
  let y = height/2;
  ellipse(x, y, diameter, diameter);
```

First the variable needs to be declared. Then a value needs to be attributed to the variable. You can do this in two lines, but usually everything is written in one line:

Two-line version
```javascript
  let diameter;
  diameter = 30;
```

One-line version
```javascript
  let diameter = 30;
```

### Basic arithmetic

In code, symbols like +, –, / and * are called operators. If we put two values or variables between them, they create expressions. If we would define a variable like:

```javascript
  let number = 4 * 10; // multiplication
```

The variable __number__ will have stored the value 40, because the expression __4 * 10__ has been evaluated.

Beforehand, we were using the division to calculate positions based on the given height and width of the sketch.

```javascript
  let center = width / 2; // a half of the sketch size
  let diameter = width / 4; // a quarter of sketch size
```

We can use all other basic arithmetic operations:

  - \* Multiplication
  - \+ Addition
  - \- Subtraction
  - / Division

Let's try to draw three ellipses by using only variables and expressions within the ellipse parenthesis:

See [example](https://github.com/fleshgordo/LaboCreativeCoding/blob/main/Codebook/666_solutions/002_ellipses.js).

By placing all variables in one place you can quickly gain an overview of different parameters used in your sketch. You will only have to look at a few lines of code.

Now, let's adapt the code, so it becomes responsive dependent on the sketch size (use the width and height variables).

See [solution](https://github.com/fleshgordo/LaboCreativeCoding/blob/main/Codebook/666_solutions/002_ellipses_responsive.js).

Let's look with more detail to this section:

```javascript
ellipse(x+distance, y, d, d); // middle
ellipse(x+distance * 2, y, d, d); // right
```

In the second line the offset (stored in the variable distance) is multiplied with 2 and than the initial x position is being added. The expression __distance * 2__ is evaluated first because multiplication
has the highest priority. Secondly, the value of x is being added to the product of the multiplication.

There are also shortcuts for operations that are frequently used. You can add to a variable, or subtract from it, with a single operator:

```javascript
x = x + 100; // adding 100 to the variable x
```

The shorter version would look like:

```javascript
x += 100;   // adding 100 to the variable x
```

For the subtraction it would be:

```javascript
x = x - 100;  // longer version
x -= 100;     // shortcut
```

Often you will encounter lines like this:

```javascript
x++;    // this is the same as writing: x = x + 1
```

This is simply incrementing the value of x (incrementation means adding a 1 to the value of the variable). Same rule applies to the subtraction:

```javascript
x--;    // this is the same as writing: x = x - 1
```

### Loops and repetition

As you might have noticed the draw function itself is like an endless loop. This becomes quite clear once you'll put a background fill into the draw loop. Let's assume we are drawing a pixel from left to right on the screen.

```javascript
// global variables
let x = 0;
let y = 0;

function setup() {
  createCanvas(800,500);
  background(255);
  y = height/2;
}

function draw() {
  x = x + 1; // oder x += 1;
  point(x, y);
}
}
```

Each time the draw function is being called it will increment the x variable by 1. Thus, the point will be drawn at an increasing x position while y stays constant. Let's randomize the y position:

```javascript
// global variables
let x = 0;
let y = 0;

function setup() {
  createCanvas(800,500);
  background(255);
}

function draw() {
  x = x + 1; // oder x += 1;
  y = random (height/2);
  point(x, y);
}
```

We can adjust the speed of the sketch by adding a new function called **frameRate()** inside the setup function. **frameRate(framesPerSecond)** accepts exactly one parameter, e.g. 25 or 1 (which means one frame per second)

And instead of drawing a pixel point we can use the line function to draw a vertical line. Try this sketch:

```javascript
// global variables
let x = 0;
let y = 0;

function setup() {
  createCanvas(800, 500);
  background(255);
  frameRate(10);
}

function draw() {
  x = x + 1; // oder x += 1;
  y = random(height / 2);
  point(x, y);
}
```

First execute the sketch and then try to uncomment the line \#11 with the background(255) call. The background is being set to white and all previous lines drawn are being swiped out. This is the explication from the p5js website: It is common to call background() near the beginning of the draw() loop to clear the contents of the window, as shown in the first example above. Since pixels drawn to the window are cumulative, omitting background() may result in unintended results. Read more [here](https://p5js.org/reference/#/p5/draw).

We can also __outsource__ the background() function by putting it in dependence when an interaction happens, let's say a mouseclick. There's by default a function called mousePressed() which you'll have to define outside of draw() and setup().

```javascript
function mousePressed() {
  background(255);
}
```
Try the sketch and click anywhere inside the window. See what happens! 

You can also use the statement **noLoop()** which will stop the code in the draw() function from running continuously. The code below will execute the draw function until the mouse button is pressed:

```javascript
let x = 0;
let y = 0;

function setup() {
  createCanvas(800, 500);
  background(255);
}

function draw() {
  //background(255);
  x += 1;
  y = random (height/2);
  line(x, y, x, height/2);
}

function mousePressed() {
  noLoop();
}
```

By now, we should start noticing that some of our coding requires a lot of "copy and paste" actions with slight modifications. Also, by analysing the behaviour of the draw() function, we start grasping the concept of repetitive function blocks, also called loops in programming language. Loops are an essential element in programming, allowing is to condense repetition into fewer lines and making the code easier to change while producing a much stronger modular output. In the next chapter we will look into repetition.
