## Conditions

In the program below, the code between the curly braces {}, i. e. __if block__ runs only when a mouse button is pressed. When the mouse button is not pressed, the code is ignored.

```javascript
function setup() {
  createCanvas(500, 500);
  background(255);
}
function draw() {
  if (mousePressed) {
    ellipse(mouseX, mouseY, 10, 10);
  }
}
```

mousePressed is a variable that can be true or false. In programming, we call such a variable [boolean](https://processing.org/reference/boolean.html). The if statement determines whether the test is true or false by evaluating what is inside the parentheses. We could even write it more explicitly:

```javascript
function draw() {
  if (mousePressed === true) {
    ellipse(mouseX, mouseY, 10, 10);
  }
}
```

The === symbol compares the values on the left and right to test whether they are the same value. Boolean variables don't need the explicit character == for comparison, because their value can be only true or false.

Another variable keeps track of the keypress state. You can execute something every time a key is being pressed:

```javascript
function draw() {
  if (keyPressed) {
    line(random(width), random(height), random(width), random(height));
  }
  if (mousePressed) {
    background(255);
  }
}
```

You can also compare other values with relational expression (as we've seen with the for loop):

- < Lesser than
- <= Lesser than or equal to
- == Equal to
- \>= Greater than or equal to
- \> Greater than
- != not equal to

An if block gives you the possibility to detect a certain condition and if true executed a certain action (code). How can we address the other choice, i. e. the other part that's not detected. We can use the simple **else** statement. Everything written inside the else block is going to be executed if the **if** condition wasn't met. In this example we'll draw black circles if the mouse is being pressed, otherwise or let's say __elsewise__ the circles will be white.  

```javascript
function draw() {
  if (mousePressed == true) {
    fill(0);
  }
  else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 10, 10);
}
```

Challenge: Let's split the sketch surface vertically (half of the width). If the mouse position is on the left side, change the background colour. Once moving to the right, change the background colour to another one.

See [solution](https://editor.p5js.org/ritzdank/sketches/PWltbJynP).

#### More fine-tuning

Sometimes it's useful to check multiple conditions at once. You can make a chain with if statements by using one **if** statement coupled together with **else if** statements. See this in action:

```javascript
function draw() {
  if (mouseX > 0 && mouseX < width/3) {
    background(255, 0, 0); // red
  } else if (mouseX > width/3 && mouseX < width) {
    background(0, 255, 0); // green
  } else {
    background(0, 0, 255); // blue
  }
}
```

You can combine two relational expressions with the **&&** sign. Both expressions inside the parenthesis (first && second) need to be true to execute this block. Otherwise it will go to the next **else if** expression and check whether it is true. If so, it will turn the background green. If the mouseX is outside of the first and second condition we were checking against, the code inside the (third) **else** block will be executed. What happens in the sketch above? Why isn't changing to blue?

Looking back onto our first example where we checked left and right side of the sketch. Try to divide the sketch window into an upper-left, upper-right, bottom-left and bottom-right area. Once the mouse moves into one of the area, change the background colour respectively. Try to draw it on paper first and note the conditions that need to be fulfilled, in order to make the sketch work. Be sure what conditions you want to check against before you start coding. Remember to combine two (or more) expressions with the **&&** sign. If you have extra time, try to add a fade function. While the mouse is over fade the colour in. When the mouse leaves do a fade out.

See [solution]([solutions/sketch_018_ElseIf.pde](https://editor.p5js.org/ritzdank/sketches/5iZpKeuOu))   

Here's a [block diagramm]() explaining the different possibilities of an if/else if/else condition.

### Typo and fonts

We can easily draw text within the sketch window with the text function. The function **text()** takes three parameters, i. e. The text as String, its x and its y position. We also need to define a textSize within the setup function:

```javascript
function setup() {
  createCanvas(500, 300);
  textSize(80);
  textAlign(CENTER);
}

function draw() {
  text("Hello world!", width/2, height/2);
}
```

Challenge: Can you load a custom font? Can you animate the typo? Do you need variables?
