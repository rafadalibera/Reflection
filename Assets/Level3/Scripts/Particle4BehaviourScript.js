#pragma strict

static var doorLocked = true;
var door : Transform;

function Start () {
	transform.audio.Play();

	if (Particle1BehaviourScript.particleOn != 4) {
		//transform.audio.Play();
		renderer.enabled = false;
	}

}

function Update () {
	if (Particle1BehaviourScript.particleOn == 4) {
		renderer.enabled = true;
		transform.audio.mute = false;
	} else {
		renderer.enabled = false;
		transform.audio.mute = true;
	}
}

function OnMouseDown() {
		Particle1BehaviourScript.particleOn = 5;
		doorLocked = false;
		door.transform.audio.Play();
}	