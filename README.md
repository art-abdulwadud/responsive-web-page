# A Responsive Web Page

## Table of Contents

* [Navbar](#Navbar)
* [Sidebar](#Sidebar)
* [Flexbox](#Flexbox)
* [Responsive-Containers](#Responsive-Containers)

## Navbar
For a responsive navbar, I have used a header tag and set it's position to relative. By doing this, I am able to separate the navbar from the other sections. 
```
position: relative;
```
For the logo, the important thing to do is to set it to float to left
```
float: left;
```
For the unordered list, it has no list style and for it to be on the right side of the navbar, it's text alignment is set to right
```
list-style: none;
text-align: right;
```
Finally, the `.menu-flexbox` is set to appear only on small devices, while disabling the unordered list `.navlist`. This is done to improve responsiveness in all devices. To place the `.menu-flexbox` at the top of the screen, it's position is set to absolute and then it's right is set to place it on the right side of the screen. `flex` display is used but other displays such as`inline-block`, `table-caption`, `inline-table` etc etc can also work.
```
position: absolute;
right: 5px;
```
Since flex display is applied, it's `flex-direction` is set to row to arrange it's elements horizontally
```
flex-direction: row;
```
## Grid Display
The benefit of a grid display is to be able to place element anywhere you want them to be. The concept is to create a grid made of rows and columns,hence creating cells within which you can fit your data.
e.g
```
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto;
```
In this instance, we have created a grid made up two colums and a row, therefore, two cells, one on the left and another on the right.

In this project, a grid is created to hold all the sections of the page except the Navbar which is on the header section. This is done to make it easier to arrange all other sections and place them where needed.
## Sidebar



## Flexbox

## Responsive Containers

