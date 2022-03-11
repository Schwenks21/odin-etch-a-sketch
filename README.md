# odin-etch-a-sketch
Etch-a-Sketch Project from Odin Project

Live Preview:

https://schwenks21.github.io/odin-etch-a-sketch/

The goal of this project is the make an etch a sketch web app using primarily javascript to do so.  The window will contain a container full of pixels that can be adjusted up or down in size.  Whenever the user hovers over a pixel in the container, the square beneath the mouse will become dark.

The first hurdle I encountered was creating the grid.  At first I tried to create all 16*16 cells using Flexbox and wrap.  It went nowhere.  I thought about learning CSS Grid but I was determined to learn how to create this using Flexbox.  I then realized that I needed to break it down further into easier steps, so I focused on creating 16 columns instead.  That was easy to do.  Once I had the columns created I only needed to create the cells.  It took me some troubleshooting to realize that I needed to next another for loop within the for loop for creating each column.  So to create the grid I created a for loop to create all 16 columns but during the creation of each column I also created 16 "cells" to flex in the column direction.  This resulted in the grid!

For the most part writing the scripts on this app were pretty straight forward and I felt comfortable.  The entire project took me less than a day, which I am very happy about.  I did have to fumble around with some syntax errors/mistakes but all in all I feel very good about where I'm at.