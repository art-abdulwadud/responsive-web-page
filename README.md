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
Finally, the `.menu-flexbox` is set to appear only on small devices, while disabling the unordered list `.navlist`. This is done to improve responsiveness in all devices. To place the `.menu-flexbox` at the top of the screen, it's position is set to absolute and then it's right is set to place it on the right side of the screen.
```
position: absolute;
right: 5px;
```
And also, it's `flex-direction` is set to row to arrange it's elements horizontally
```
flex-direction: row;
```
## Sidebar

## Flexbox

## Responsive Containers

