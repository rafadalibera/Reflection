#pragma strict

var isQuitButton = false;

function OnMouseEnter() {
	renderer.material.color = Color.red;

}

function OnMouseExit() {
	renderer.material.color = Color.black;
}

function OnMouseDown() {

	if (isQuitButton) {
		//quit game
		Application.LoadLevel(0);
	}
	else {
		//load level
		Application.LoadLevel(1);
		
	}

}