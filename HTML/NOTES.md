# DAY 1
---
### Elements
````
An HTML element is defined by a start tag, some content, and an end tag.
Examples:

<h1>My First Heading</h1>
<p>My first paragraph.</p>
````

### Attributes
````
HTML attributes provide additional information about HTML elements.
- All HTML elements can have attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"

** Example ** 
<a href="https://www.w3schools.com">Visit W3Schools</a>
<img src="img_girl.jpg" width="500" height="600">
````

### Headings
````
HTML headings are defined with the <h1> to <h6> tags.

<h1> defines the most important heading. <h6> defines the least important heading.
````

### Paragraphs
````
The HTML <p> element defines a paragraph.

A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.
````

### Text Formatting
````
Formatting elements were designed to display special types of text:

- <b>  Bold text
- <strong>  Important text
- <i>  Italic text
- <em>  Emphasized text
- <mark>  Marked text
- <small>  Smaller text
- <del>  Deleted text
- <ins>  Inserted text
- <sub>  Subscript text
- <sup>  Superscript text

````

### Comments 
````
You can add comments to your HTML source by using the following syntax:

<!-- Write your comments here -->
````

### Links 
````
Links are found in nearly all web pages. Links allow users to click their way from page to page.

Syntax
---
<a href="url">link text</a>
````

### Images

```
Images can improve the design and the appearance of a web page.

Syntax 
---
<img src="url" alt="alternatetext">
```

### Tables
````
HTML tables allow web developers to arrange data into rows and columns.A table in HTML consists of table cells inside rows and columns. <table> is used as a container for table.


*** Table Cells *** 
Everything between <td> and </td> are the content of the table cell.

*** Table Rows *** 
Each table row starts with a <tr> and ends with a </tr> tag.

*** Table Headers *** 
Sometimes you want your cells to be table header cells. In those cases use the <th> tag instead of the <td> tag

*** Table Colspan & Rowspan ***
HTML tables can have cells that span over multiple rows and/or columns.

To make a cell span over multiple columns, use the colspan attribute:

Example: <th colspan="2">Name</th>

To make a cell span over multiple rows, use the rowspan attribute:

Example : <th rowspan="2">Phone</th>

````

### Lists 

````
We can create two types of lists in html
1. Ordered List : An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.The list items will be marked with bullets (small black circles) by default.
2. Unordered List : An ordered list starts with the <ol> tag. Each list item starts with the <li> tag.The list items will be marked with numbers by default.
````
### Entities
````
ML Entities
Some characters are reserved in HTML.

If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags.

Character entities are used to display reserved characters in HTML.

Example
---
For copyright symbol &copy; &#169;
For less than &lt; 
For euro &euro; &#8364;

For more [visit](https://www.freeformatter.com/html-entities.html)
````
