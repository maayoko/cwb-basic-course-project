# CWB - Basic Programming Course

Project based on HTML and CSS.

## HTML
- Hyper text markup language
- Defines structure of the page
- Represents what content will be displayed on a page

## CSS
- Cascading style sheet
- Used to create feel and style of a website
- Defines how the website will look like

HTML is used for putting the content on the page while CSS is used how you'd wrap that content into a nice suite.

## Project breakdown
HTML file consists of several tags which are mendatory for every file - 
DOCTYPE, html, head and body.\
DOCTYPE - defines what version of HTML is used (HTML 5), ensures that the web page is parsed the same way by different browsers\
html - indicates the beginning and the end of an html document\
head - place where you define page's title, include styles and stylesheets, scripts, meta descriptions\
body - where the visible part of the content lives, everything you see on a page is written between the body tags

### Definition of the HTML tag
HTML is written in html tags. Every HTML tag has an opening and closing tag. Its the basic building block of every html document.\
Example: `<div> </div>`\
`<div>` - opening tag\
`</div>` - closing tag, keep an eye on the back slash in front of text div

### Tag attributes
Attributes are used to alter tags default behaviour. They provide additional information for tags. They are always written in the opening tag and are defined as a name=value pair.\
Example: `<div id="block"></div>`

### Inline, internal and external styles
Three ways of how styles can be defined: inline, internaly and externaly

#### Inline
Inline styles are written directly in html tag by using an html attribute style.\
Example: `<div style="color: red;"></div>`\
"color: red;" - name/value pair called a rule\
Each rule needs to end with a semicolon (;)

#### Internal
Internal styles are written in the head (`<head></head>`).\
Before writing the styles we need to define `<style></style>` tag.\
Then we write css rules within the style tags.\
Example: 
```
<style type="text/css">
    body {
        font-size: 20px;
    }
</style>

```
```
body {      font-size: 20px; }
selector    property   value
                   rule
```
#### External
External styles are written in the same manner as internal styles but they are extracted into separate file and linked in HTML document using `<link></link>` tag.\
Example: `<link rel="stylesheet" type="text/css" href="/path-to-file"></link>`


### CSS Selectors
Tag selector - body, div, p etc..

ID selector
- Example: #id
- only one id selector per page allowed

Class selector
- Example: .class
- multiple class selectors per page allowed

### Elements family tree
When we are creating html structure we are defining a family tree. We are doing so by nesting (indenting) elements.
```
<div> -> parent
    <h1 class="title" id="title">Title</h1> -> child (sibling to the <p> tag)
    <p>Description</p>
</div>
```
You can have the same name for id and class.\
Ways to access h1 element in css\
`h1 {}`\
`div h1 {}`\
`.title {}`\
`#title {}`\
`div h1.title {}`\
`div h1#title {}`\
More tags you use to reach the child greater is specificity. Greater specificity means advantage to applying styles for the same element. If you have more then one style rules for the same element (e.g. h1), rules with greater specificity will be applied.

### CSS Box model
Every html element has its own width, height, padding, border and margin.\
Width and height - where content lives.\
Content - The content of the box, where text and images appear\
Padding - Clears an area around the content. The padding is transparent\
Border - A border that goes around the padding and content\
Margin - Clears an area outside the border. The margin is transparent\

Adjusting a box model is what you're doing most of the time when designing a page with css (especially when defining a grid).

Grid - 

### PART 1 - HEADER
Links\
Described as anchor tags.\
Links one page to another.\
You can recognize an anchor tag by a handle when you hover the element with a mouse.\
Example: `<a href="#">Link 1</a>`

Nav and Header elements\
One of the HTML5 elements.\
Used to better describe parts of html.\
Example: `<nav></nav>`\
It only describes semantic meaning.

Div element\
The most used html element when creating html structure.\
Element groups other elements together.\
Used for creating grid, placeholder for components.\

Multiple css classes on one HTML element\
Same css class can be used multiple times on different html elements.
```
<div class="media"></div>
<div class="media"></div>
```
Also multiple classes can be applied on one html element
```
<div class="media video"></div>
```

Code organization
- header tag used to group all inner elements
    - also it clearly states its about header
    - header is a section where you typically define navigation links and logo
- div element with class name container
    - container: max width, margin auto




