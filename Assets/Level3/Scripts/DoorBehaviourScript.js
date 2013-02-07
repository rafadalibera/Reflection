#pragma strict

var turn = false;

function Start () {
	transform.audio.Play();

}

function Update () {
	if (turn == true) {
		transform.Rotate(0, 10*Time.deltaTime, 0);
		transform.audio.mute = true;
	} else {
		if (Particle1BehaviourScript.particleOn == 5) {
			transform.audio.mute = false;
		} else {
			transform.audio.mute = true;
		}
	}

}

function OnMouseDown() {
	if (Particle4BehaviourScript.doorLocked == false) {
		turn = true;
	}
}