//Keyboard input is handled by what are called "event listeners",
//which basically are code that gets executed when something happens
//You can think of these as something that happens between frames/update loop iterations.
//This keysdown thing isn't necessary for basic keyboard functionality,
//but it makes keys that are held down behave more sensibly.
//Don't worry about it until you have the basics figured out.
//Scroll down until you the BEGINNER LOOK HERE

var keysdown = [["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," ","w","a","s","d","q"],[false,false,false,false,false,false,false,false,false,false]]

window.addEventListener("keydown", function (event) {
	//the defaultprevented is not my code.  Someone thinks its a good idea.
	if (event.defaultPrevented) {
		return; // Do nothing if the event was already processed
	}
	var thekey = event.key;
	var i = 0;
	while(i<keysdown[0].length){
		if (keysdown[0][i]==thekey){
			//console.log("Key match found for "+keysdown[0][i]+" at "+i);
			if (keysdown[1][i]){console.log("error key is already pressed");}
			else {
				keysdown[1][i] = true;
				i = keysdown[0].length + 10;
				}
			}
		i++;
		}
	/////////////////////////////////
	//BEGINNER LOOK HERE/////////////
	/////////////////////////////////

	//event.key is a string indicating the key that is pressed.
	//For letters and numbers, the string is just that single character (case specific).
	//For some other keys, a longer string describing the key is used (like "ArrowDown").
	//You will probably have to look up the exact string to use for some of the keys.
	//Only one key press is handled at a time.  If one key is held down,
	//the event will happen every frame that the key is depressed.

	//There is a weird delay between the initial event firing from pressing the key,
	//and subsequent events from holding down the key. Maybe a half second?
	//The "keysdown" array is a trick for correcting with that, but it's not fully implemented here.
	//It's a non-issue for many games, and not usually a big deal, so don't worry about it for a while.

	//If multiple keys are held down at the same time, the first key to be depressed will work first,
	//then the next key, and the events firing from holding down the keys will be treated as if
	//only the last key to be pressed was held down.

	//So, since this event is only going to be aware of one keypress at any given time,
	//we start with "if" to check one possible key, and then use "if else" for the rest
	//A switch statement may also be used.
	//Or, in some cases, you just need to know that SOME key was pressed,
	//you can place the code in the event listener without any if logic.
	//None of the code here will run unless some key is pressed.


	if (event.key=="ArrowDown"){
		//do a thing when down arrow is pressed
		otherthingy = otherthingy +10; //moves otherthing down 10 pixels
		}
	else if (event.key=="ArrowUp"){
		//do a thing when up arrow is pressed
		otherthingy = otherthingy -10; //moves otherthing up 10 pixels
		}
	else if (event.key=="ArrowRight"){
		//do a thing when right arrow is pressed
		otherthingx = otherthingx +10; //moves otherthing right 10 pixels
		}
	else if (event.key=="ArrowLeft"){
		//do a thing when left arrow is pressed
		otherthingx = otherthingx -10; //moves otherthing left 10 pixels
		}
	else if (event.key=="Enter"){
		//do a thing when enter key is pressed
		otherthingr = otherthingr + 10;//makes otherthing 10 pixels larger in radius (20 pixels wider)
		if (otherthingr>300){otherthingr = 300;}
		}
	else if (event.key==" "){
		otherthingr = otherthingr - 10;//makes otherthing 10 pixels smaller in radius (20 pixels narrower)
		if (otherthingr<10){otherthingr = 10;}
		}
	else if (event.key=="f"){
		//do a thing when f key is pressed.  Only lower case f, caps lock or shift will make it an F
		//If you want to accept both, just use ((event.key=="f")||(event.key=="F"))
		otherthingvx = 2-Math.random()*4;
		otherthingvy = 2-Math.random()*4;
		}
	//////////////////////////////
	///end of beginner stuff////
	///////////////////////////

  event.preventDefault();// Cancel the default action to avoid it being handled twice
}, true);	//end of event key handling, not clear what the ", true);" is about		


//The extra event listener here will fire when a key is released, instead of when it is pressed.
//You generally won't need to use this.
//There is some code here for the "keysdown" thing I mentioned before for coping with hold-down weirdness.
//You can ignore it unless you really want to git gud.
window.addEventListener("keyup", function (event) {
	var thekey = event.key;
	var i = 0;
	while(i<keysdown[0].length){
		if (keysdown[0][i]==thekey){
			//console.log("Key match found for "+keysdown[0][i]+" at "+i);
			if (keysdown[1][i]==false){console.log("error key is already unpressed");}
			else {
				keysdown[1][i] = false;
				i = keysdown[0].length + 10;
				}
			}
		i++;
		}
	})
