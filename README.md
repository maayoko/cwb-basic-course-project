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

