//Mouse event handlers are very similar to keyboard event handlers.
//This will generally be executed once after each frame as applicable.
//The mousemove handler here will execute every frame that the mouse is moving.

document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
    //e.clientX and Y refer to the X and Y coordinates of the mouse cursor.
    //Here, we're basically saving the e.clientX and Y variables to mx and my
    //so that the mouse cursor position is available elsewhere in the program.
    //Because e.clientX and Y are only available within the mouse event handlers.

    //The windowmousexoffset and windowmouseyoffset variables are used to transform
    //the e.clientX and Y into accurate coordinates relative to the canvas origin.
    //They refer to the webpage (or window?  or screen?  not sure) origin,
    //so the offsets are needed to precisely get the mouse location relative to the canvas.
    //The offsets aren't large, and in some cases you can get away with not using them
    //mx, my, and the mouse offsets are variables I created, unlike e.clientX and Y.
    //Those offsets are declared and defined in the HTML before the update loop.
    //mx and my are also declared and defined in the HTML, but the initial value is irrelevant for them.
    mx =  e.clientX +windowmousexoffset;
	my =  e.clientY +windowmouseyoffset;
} 

//the mousedown handler will execute when either right or left mouse button is pressed.

document.addEventListener("mousedown", mouseDownHandler, false);
function mouseDownHandler(e) {
    //e.buttons contains the state of the left and right mouse button.
    //0 indicates no buttons pressed (which won't be the case here)
    //+1 if the left button is pressed,+2 if the right button is pressed.
    //the mousestate variable is something I created to save e.buttons in a global variable like mx and my.
	mousestate = e.buttons;
    thingiex = mx;//Moves thingie to the mouse cursor when right or left button is pressed
    thingiey = my;
	}

//the mouseup handler will execute when either right or left mouse button is released.
//There is also a type of event listener for a click, which fires when the left mouse button is released.
//You can basically do that with the mouseup handler just by checking what was released,
//by comparing mousestate and e.buttons before the latter is assigned to the former

document.addEventListener("mouseup", mouseUpHandler, false);
function mouseUpHandler(e) {
    //Just like the mousedown handler, I'm just saving the updated value to mousestate
    mousestate = e.buttons;
}

//The wheel event listener handles mouse wheel movement.
//I think this code just prevents the mouse wheel from scrolling around when you're focused on the game.
//I don't fully understand it, but hey, copypasta.

document.addEventListener("wheel", mouseWheelHandler, {passive: false});
function mouseWheelHandler(e) {
    e.preventDefault();
    e.stopPropagation();
	return false;
}

