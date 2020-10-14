## Intro

p5js is a web library for writing software to make images, animations, and interactions. Usually, software programming courses focus on algorithms and theory not considering worth experimenting with visual output. p5js offers a way to learn programming through creating interactive graphics. Like human languages, programming languages belong to families of related languages. 

### Installation

Start by playing with the [webeditor](https://editor.p5js.org/) or download the zip folder from [p5js](https://p5js.org/download/) and run it locally ([Video](https://www.youtube.com/watch?v=MOLp_zZ7Dqg) local setup with Visual Studio Code).

### Hello world

A "Hello, World!" program is a computer program that outputs or displays "Hello, World!" to a user. See some examples for a
[Hello World program here.](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)

In p5js the basic construct for a program looks like:

```javascript
function setup() {
}

function draw() {
}
```

We will add a line inside of the draw function ()

```javascript
console.log("Hello World!");
```

This is our first program. The only thing it does is outputting the text "Hello World!" to the console which you'll find on the console tab of the webeditor. 

There's another command called **println()**. Try it and see the difference.

One of the most difficult things about getting used to programming is that you have to be very careful with the syntax. If you have a mispelling, for example **conslo.log()** instead of **console.log**, the Javascript interpretor will throw an error. If you are lucky, it will even tell you which line is in question.

Each instruction should end with a semicolon.

You can also add comments to your code. Comments are ignored when the program is run. They are useful for making notes for yourself and for others to explain what’s happening in the code. If others are reading your code (or you after a couple of weeks), comments will help them (or you) to understand your thought process. With comments your first programm might look like this:

```javascript
function setup() {
  // Set the window size to 640px wide and 480px height
  createCanvas(640,480);
}

function draw() {
  // print one line that displays Hello World in the console
  print("Hello World!");
}
```

We've introduced a new command: **createCanvas()**. Please note, that this one is inside the setup() function. It sets the canvas size to the two parameters that are found inside the parenthesis (in px). Run this line of code to see the result and put in different values to see what is changing. Try very small numbers and numbers larger than your screen.

### Drawing

First, let's draw a simple point that will cover a surface area of 1px. We therefore will use the point() function.

```javascript
    // Drawing a point at horizontal 320px (measured from top left) and at vertical 240px point.
    point(320,240);
```

We can put this in line either into the setup() or the draw() function. The difference is that the the line inside the setup() function will be executed only once at startup.

Try to write a program that puts a point into each of the four corners.

#### Basic shapes

We can draw basic shapes with p5js code, using functions such as line(), ellipse(), triangle(), rect(), arc(). See more on the [reference page](https://p5js.org/reference/) within the section **2D Primitives**.

##### Drawing a line

To draw a line between coordinate (0, 0) and (320, 240), try:

```javascript
    line(0, 0, 320, 240);
```

The four numbers are the x, y pairs for the starting and for the endpoint. Try to draw a cross on the screen.

Try using comments with forward slashes to document your code!


##### Drawing an ellipse

The ellipse function, in case you hadn’t guessed, draws an ellipse to the screen. Ellipse is the function’s name. Functions are always followed by a pair of parentheses; inside these parentheses are a comma-separated list of values. These values are called the function’s parameters. Every function uses its parameters in a slightly different way, and part of learning a function is learning what its parameters mean. In the case of ellipse, the first parameter is the X coordinate of the ellipse, the second parameter is the Y coordinate, the third parameter is the width of the ellipse and the last parameter is the height of the ellipse.

Try this to draw an ellipse:

```javascript
    ellipse(50, 50, 100, 60);
```

Try to draw a circle. Can you identify the parameters?

### Relationship of forms

  * Format - How big is my canvas? What proportions does it have?
  * Shape - Circle, Ellipse, Line, Rectangle?
  * Position - Where do we place it in our canvas?
  * Dimension - What size is it?
  * Rotation - Is it rotated, vertical?

With these five parameters you can do already a lot of things. Look at this example, a visual metaphor for something being sharp:

### Colours

Looking at the previous example, we could observe that the background is always light grey and the strokes are always in black. To change them, we can make use of the background(), fill(), and stroke() functions. The values of the parameters are in the range of 0 to 255, where 255 is white, 128 is medium gray, and 0 is black.

Let's draw three ellipses with different tones of grey:

```javascript
    background(255);
    fill(205); // Light grey
    ellipse(150, 150, 100, 60);
    fill(153); // Medium gray
    ellipse(200, -40, 320, 320);
    fill(102); // Dark gray
    ellipse(350, 90, 200, 200);
```

For getting colours, you can use three parameters to specify the red, green, and blue components of a color. The colors are refered to in RGB. The three numbers are for the values of red, green, and blue. They range from 0 to 255. Let's try a turquoise colour:


```javascript
fill(0, 128, 128);
```

You can even add a forth parameter, which will control the transparency. The transparency parameter is known as the alpha value and ranges from 0 to 255. Try changing the example circles and bring in some colour.

```javascript
fill(0, 128, 128, 100);
```

We still have a rather ugly outline around our circles. We can change the behaviour of the circle outline with another command stroke() and noStroke().

```javascript
function setup() {
  createCanvas(640,480);
  noStroke();
}
```

The stroke() parameter defines the colour of the outline whereas strokeWeight() defines the width in pixels. Try changing these parameters and combine them with the three circle example:

```javascript
  strokeWeight(5);
  stroke(128,128,0);
```

You've gained now almost all commands to create drawings with code. It's hard and not very intuitive, but you'll start to understand the structural part of a program better and better.

### Width and height

If we wanna create drawings depending on the sketch size, we need to know the dimension of the sketch. Usually, this is stored in two variables called width and height. Try to print them to the console with the println() function.

```javascript
  print(width, height);
```

Let's draw a circle exactly in the middle of the sketch. We can make use of a simple division of width by 2 and height by 2. For the division you can use the slash symbol:

```javascript
  ellipse(width/2, height/2, 20, 20);
```

We could even make the size of the circle dependent of the sketch dimensions. Try to adapt the above line. What do you need to consider to keep the circle shape (and not ending up with an ellipse).

See [solution](solutions/sketch_008_circle.pde).

Create two other circles and try to change the sketch size by changing the parameters inside the setup() function.

We'll quickly understand that writing all these operations inside of the ellipse looks messy. We are going to use variables in the next chapter to clean up things.

## References and links

  - Coding Train [Forms](https://www.youtube.com/watch?v=c3TeLi6Ns1E&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=0s)
  - Coding Train [Colours](https://www.youtube.com/watch?v=riiJTF5-N7c&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=0s)