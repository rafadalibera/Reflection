#pragma strict

var clicked = false;
static var visible = false;
var startTime : float;

function Start () {

}

function Update () {
	//Check if the button is pressed
	if (clicked == true) {
		//Let the celing visible for 5 seconds
		if(Time.time > startTime + 10) {
		  visible = false;
		  clicked = false;
		}
	}

}

function OnMouseDown () {
	//I pressed the button
	
	if (clicked == false) {
		clicked = true;
		visible = true;
		animation.Play();
		startTime = Time.time;
	}
		

}