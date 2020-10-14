## Loops, patterns and repetition

You might have noticed that patterns occur while you are writing lines of code. A loop makes it possible to execute a line of code multiple times; making it possible to write code much more modular and easier to read.

Let's look at this [line drawing](https://github.com/fleshgordo/LaboCreativeCoding/blob/main/Codebook/666_solutions/sketch_011_linedrawing1.png).

The code for this example looks like this:

```javascript
function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  line(0, 0, width, height);
  line(0, 25, width, height);
  line(0, 50, width, height);
  line(0, 75, width, height);
  line(0, 100, width, height);
  line(0, 125, width, height);
  line(0, 150, width, height);
  line(0, 175, width, height);
  line(0, 200, width, height);
  line(0, 225, width, height);
  line(0, 250, width, height);
  line(0, 275, width, height);
  line(0, 300, width, height);
  line(0, 325, width, height);
  line(0, 350, width, height);
  line(0, 375, width, height);
  line(0, 400, width, height);
  line(0, 425, width, height);
  line(0, 450, width, height);
  line(0, 475, width, height);
}
```
Can you identify a pattern? The y coordinate is starting from 0 going up to 475 in 25px steps. This type of pattern can be perfectly simplified by a for loop structure! A for loop is using braces, the { and } characters. Everything written inside of the { } braces will be repeated multiple times according to the construction and parameters of the for loop. Let's look at the construction. Inside of the () parenthesis there are three parameters (separated by ;) with which we define the behaviour of our loop.

```javascript
for (init; test; update) {
statements
}
```

The __init__ declares a new variable that is used with the for loop block. Usually, we use the variable name **i**, but you can use whatever other name for it. The __test__ evaluates if the the variable i has reached a certain value. __Update__ changes the variable value. Applied to our previous line drawing a for loop would be described as:

Initialise **i** with 0 and update it by adding 25 every time the loop is executed until **i** reaches 475:

```javascript
for (let i = 0; i <= 475; i = i + 25) {
  line(0,i,width,height);
}
```

Sometimes it can be useful to use a **println()** statement inside the loop:

```javascript
for (let i = 0; i <= 475; i = i + 25) {
  line(0,i,width,height);
  println(i);
}
```

Observe the console and see what values are being printed!

We can actually use a shortcut for adding a value to a variable by using the assignment +=. Both lines will give the same result.

```javascript
i = i + 25;
i += 25;
```

```javascript
for (let i = 0; i <= 475; i += 25) {
  line(0,i,width,height);
}
```

Our sketch becomes much more modular. Let's imagine we want to increase the lines being drawn. We can just lower the step size of the incrementation of **i**. For more readability I am saving the step size in a variable. Try this:

```javascript
let steps = 5;
for (let i = 0; i <= 475; i += steps) {
  line(0,i,width,height);
}
```

I am noticing that the lines are not drawn on the very bottom of the sketch. The evaluation of **i <= 475** is not correct. Can you fix it?

See [solution](https://editor.p5js.org/ritzdank/sketches/onXrj5o3g).

The test statement is a relational expression. It compares two values (in our case i and the height of the sketch) with a relational operator. In our example we were using **i <= 500**. The operator is the less than equals (<=). The most common operators are:

  - < Lesser than
  - <= Lesser than or equal to
  - == Equal to
  - \>= Greater than or equal to
  - \> Greater than
  - != not equal to

The relational expression returns always true or false. We can ask ourselves the question for our loop example:

  - Is **i** with the value 0 smaller than or equal to 500? Yes ... keep on looping
  - Is **i** with the value 25 smaller than or equal to 500? Yes ... keep on looping
  - Is **i** with the value 50 smaller than or equal to 500? Yes ... keep on looping
  - ... 75, 100, 125, 150, 175, 200, 225, 250, etc... Yes ... keep on looping
  - Is **i** with the value 500 smaller than or equal to 500? Yes ... keep on looping
  - Is **i** with the value 525 smaller than or equal to 500? No ... stop looping

Hence we remember, when the evaluation is true, the code inside the loop function is being executed. Once the evaluation turns false, the code inside the loop function isn't executed and the for loop comes to an end.

Now we can make different patterns by making small changes to our code. Try to change the endpoint of the line:

```javascript
let steps = 1;
for (let i = 0; i <= 500; i += steps) {
  line(0, i, width, 0);
}
```

Or changing the beginning point of the line

```javascript
let steps = 10;
  for (let i = 0; i <= 500; i += steps) {
    line(width - i, i, width, height);
  }
```
Can you re-interpret this [line drawing](misc/sketch_011_linedrawing2.png). by using one (or more for loops) ?

See [solution](solutions/sketch_012_linedrawingX.pde).

### Nested Loops

Another power of loops comes into play when you start embedding one loop into another one. We can rather quickly generate complex patterns just with a few lines of code.

Let's try to create a column/row based grid of ellipses:

```javascript
function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
}
function draw() {
  let steps = 50;
  let yOffset = 50;
  fill (220);
  for (let x = 0; x < width; x += steps) {
    ellipse(x, yOffset, 30, 30);
  }
}
```

The circle row starts right at the left edge of the sketch. We need to adjust the initial parameter of the x coordinate by changing the initial value of **x** to 50:

```javascript
for (let x = 50; x < width; x += steps) {
  ellipse(x, yOffset, 30, 30);
}
```

Now, we want to create a second loop inside of the first for loop that creates at each x position multiple circles on the y coordinate. If we try to describe it in words "Draw circles at the x position **x** and increment the y position within the loop". Hence, the 2nd loop should look something like this:

```javascript
for (let y = yOffset; y < height; y += steps) {
  ellipse(x, y, 30, 30);
}
```

And now we've to place it inside the first for loop:

```javascript
for (let x = 50; x < width; x += steps) {
  for (let y = yOffset; y < height; y += steps) {
    ellipse(x, y, 30, 30);
  }
}
```

See the entire [sketch here](https://editor.p5js.org/ritzdank/sketches/onXrj5o3g)

Try to modify the step variable (for example 5). What can you observe? You'll need to adapt some parameters (circle dimension, offset, etc) to make it modular.

Let's replace the ellipse funtion with the rect() function. Please note the strokeWeight(1) in the setup function. We can also introduce a new variable called numberofRows and use it to calculate the steps automatically according to the sketch size.

```javascript
function setup() {
  createCanvas(500, 500);
  background(255);
  strokeWeight(1);
}

function draw() {

  let numberofRows = 15;
  let steps = width/ numberofRows;
  for (let x = steps / 2; x < width; x += steps) {
    for (let y = steps /2; y < height; y += steps) {
      rect(x, y, steps, steps);
    }
  }
}
```

We notice that the rectangles are offset, because the ellipse function was taking the x,y coordinates of the circle's origin. We can either take away this offset or change the behaviour of rect by modifying its origin. With rectMode() you can control the location from which rectangles are drawn. Default rectMode is CORNER, but changing it to **rectMode(CENTER)** interprets the first two parameters of rect() as the shape's center point, while the third and fourth parameters are its width and height.

See entire [sketch here](https://editor.p5js.org/ritzdank/sketches/onXrj5o3g)

### Morisawa poster

We will try to apply the concept of loops to create new and exciting outputs within broader design constraints. In this way of designing, we become more of a director who sets up the basic constraints of the design. The algorithm renders an original design every time it runs. We will try to interpret one of the Morisawa poster designs by John Maeda which he created in 1996.

See the posters [here](https://flyergoodness.blogspot.com/2012/07/the-10-morisawa-posters-john-maeda.html).

Choose one and try to analyse it. Create a new version by setting your own algorithmic design decisions. 