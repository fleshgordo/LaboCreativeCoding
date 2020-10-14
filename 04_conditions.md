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

See [solution]().

#### More fine-tuning

Sometimes it's useful to check multiple conditions at once. You can make a chain with if statements by using one **if** statement coupled together with **else if** statements. See this in action:

```java
void draw() {
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

See [solution](solutions/sketch_018_ElseIf.pde)   

Challenge: Look at this sketch and try to change the colour of the rectangle once the mouse hovers over it. You'll need to define x, y, w, h:

```java
void draw() {
  rect(x,y,w,h);
}
```

Here's a [block diagramm](https://bitbucket.org/frescogamba/kickstartprog/src/e995951d634dfc5a9caed23b9625b2876c471d4e/misc/overview_ifelse.png?at=master&fileviewer=file-view-default) explaining the different possibilities of an if/else if/else condition.

See solution [solution](solutions/sketch_019_MouseOverIfElse.pde)   

### Typo and fonts

We can easily draw text within the sketch window with the text function. The function **text()** takes three parameters, i. e. The text as String, its x and its y position. We also need to define a textSize within the setup function:

```java
void setup() {
  size(500, 300);
  textSize(80);
  pixelDensity(2);
  textAlign(CENTER);
}

void draw() {
  text("Hello world!", width/2, height/2);
}
```

The Processing software can display text using TrueType __ttf__ and OpenType __otf__ fonts. If you want to embed a new font you'll have to put it inside of the data folder within the sketch folder. We can also make use of system fonts. There are a couple of steps to do before embedding the font. First, let's check what fonts are available:

```java

void setup() {
  size(480, 120);
  // get an array/liste with all fonts on ur system
  String[] fontList = PFont.list();
  // print fontList into Console
  printArray(fontList);
}
```

You should see a long list of available fonts from your system. Copy and paste the one you'd like to use for the next sketch.

```java
PFont typo;

void setup() {
  size(500, 400);
  pixelDensity(2);
  typo = createFont("STHeitiSC-Medium", 24);
  textFont(typo);
}
void draw() {
background(40);
text("Hello World", 10, height/2);
}
```

First we create the variable typo, which has the datatype PFont. With the function **createFont** we can load the font into the variable **typo**. The first parameter is the name of the font. If you've put a ttf or otf file directly into the data folder of the sketch, you'll have to write the filename. The second parameter is the size in pixel. Then we pass the loaded font (now stored in the variable typo) into the function textFont(). The text function() takes the same arguments as before.

Instead of writing the text directly inside of the text() function, we can also store text in a variable. Since, it's neither a float number nor a integer number, its datatype is called String. Thus, we can write:

```java

PFont typo;
String myText = "Hello world!";

void setup() {
  size(500, 400);
  pixelDensity(2);
  typo = createFont("STHeitiSC-Medium", 24);
  textFont(typo);
}
void draw() {
background(40);
text(myText, 10, height/2);
}
```

Challenge: Can you animate the typo?
