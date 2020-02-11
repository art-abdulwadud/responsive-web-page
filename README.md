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
Finally, the `.menu-flexbox` is set to appear only on small devices, while disabling the unordered list `.navlist` using CSS media queries. This is done to improve responsiveness in all devices. 
```
.menu-flexbox{
	display: none;
}
@media (min-width: 481px) and (max-width: 767px) {
  .menu-flexbox{
		display: flex;
	}
}
@media (max-width: 480px) {
  .menu-flexbox{
		display: flex;
	}
}
```
To place the `.menu-flexbox` at the top of the screen, it's position is set to absolute and then it's right is set to place it on the right side of the screen. `flex` display is used but other displays such as`inline-block`, `table-caption`, `inline-table` etc etc can also work.
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

In this project, a grid is created to hold all the sections of the page except the Navbar which is on the header section. This is done to make it easier to arrange all other sections and place them where needed. This grid is made up of two columns and two rows.
```
grid-template-columns: auto auto;
grid-template-rows: auto auto;
```
## Sidebar
The sidebar is situated inside the main grid. `.sidebar-sec` is set to be in the first cell on the left and in both rows.
```
grid-row: 1/3;
grid-column: 1/2;
```
Inside `.sidebar-sec`, there's an `aside` tag which is set to a fixed position so that the element within it do not move when scrolling.
```
position: fixed;
```
Inside the `aside` tag, there are `.article-links` which, within them, we have our icons and labels, each for selecting one of the articles.`.article-links` is set to block display to arrange our icons and labes vertically.
```
display: block;
```
The toggling effect is then activated in the JavaScript file on clicking the `.open-menu` span tag. And we also want to hide the `.open-menu` span tag as soon as the sidebar is fully open. For the `.main-grid`, we'll create another class called `.main-grid-active` which will be bigger in size and we'll replace that with the `.main-grid` class.
```
openMenu.addEventListener('click', () => {
	sidebarActive = true;
	for(let i = 0; i < links.length; i++){
		links[i].style.display = 'inline-block';
	}
	mainGrid.classList.remove('main-grid')
	mainGrid.classList.add('main-grid-active')
	closeMenu.style.display = 'inline-table';
	openMenu.style.display = 'none';
})
```
For closing the sidebar, vice versa
```
closeMenu.addEventListener('click', () => {
	sidebarActive = false
	for(let i = 0; i < links.length; i++){
		links[i].style.display = 'none';
	}
	mainGrid.classList.remove('main-grid-active')
	mainGrid.classList.add('main-grid')
	closeMenu.style.display = 'none';
	openMenu.style.display = 'inline-table';
})
```
## Flexbox

## Responsive Containers

