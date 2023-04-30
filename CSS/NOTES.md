
# 30th April 2023

### Comment
A CSS comment starts with /* and ends with */:
Example
    p {
         color: red;  /* Set text color to red */
    }

### Colors
Colors are specified using predefined color names, or 
 - RGB : rgb(255, 165, 0), 
 - HEX : #ff6347, 
 - HSL : hsl(0, 100%, 50%), 
 - RGBA : rgb(255, 165, 0,1) , 
 - HSLA : hsl(0, 100%, 50%,1)

### Borders
The CSS border properties allow you to specify the style, width, and color of an element's border.

The following values are allowed:

- dotted - Defines a dotted border
- dashed - Defines a dashed border
- solid - Defines a solid border
- double - Defines a double border
- groove - Defines a 3D grooved border. The effect depends on the border-color value
- ridge - Defines a 3D ridged border. The effect depends on the border-color value
- inset - Defines a 3D inset border. The effect depends on the border-color value
- outset - Defines a 3D outset border. The effect depends on the border-color value
- none - Defines no border
- hidden - Defines a hidden border

```
Properties:
1. border-width.
2. border-color.
3. border-style-top.
4. border-radius.
```

### Margins
Margins are used to create space around elements, outside of any defined borders.

With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).

*** Margin - individual sides

+ margin-top
+ margin-right
+ margin-bottom
+ margin-left
+ margin-auto

### Paddings
Padding is used to create space around an element's content, inside of any defined borders.

*** Padding - individual sides

+ padding-top
+ padding-right
+ padding-bottom
+ padding-left

### Height and width

| Property | Description | 
| --- | --- |
| Height | Sets the height of an element | 
| max-height | Sets the maximum height of an element | 
| max-width | Sets the maximum width of an element | 
| min-height | Sets the minimum height of an element |
| min-width | Sets the minimum width of an element |
| width | Sets the width of an element |

### The css box model

In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model.

![box-model](https://www.kasandbox.org/programming-images/misc/boxmodel.png)

### Display
The display property specifies if/how an element is displayed.

Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.

#### display:block;
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).
Examples of block-level elements:
```
- <div>
- <h1> - <h6>
- <p>
- <form>
- <header>
- <footer>
- <section>
```

#### dispaly:inline;
An inline element does not start on a new line and only takes up as much width as necessary.
Examples of inline elements:
```
- <span>
- <a>
- <img>
```

#### display:none;
display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them.

### CSS Position
The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).

The position property specifies the type of positioning method used for an element.

There are five different position values:

+ static : HTML elements are positioned static by default.

Static positioned elements are not affected by the top, bottom, left, and right properties.

An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:

+ relative : An element with position: relative; is positioned relative to its normal position.

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

+ fixed : An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.


+ absolute : An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

Note: Absolute positioned elements are removed from the normal flow, and can overlap elements.


+ sticky : An element with position: sticky; is positioned based on the user's scroll position.

A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).    





    

