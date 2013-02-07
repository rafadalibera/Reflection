#pragma strict

//var door : Transform;

var openDoor = false;
var startTime : float;

function Start () {

}

function Update () {
	if (openDoor == true) {
		//*** Play animation of an openning door ***
		
		if(Time.time > startTime + 2) {	
			Application.LoadLevel(4);	  
		}
				
		
	}

}

function OnMouseDown () {
	if (move_celing.end == true) {

		transform.audio.Play();
		animation.Play();
		startTime = Time.time;	
		openDoor = true;
	}

}
