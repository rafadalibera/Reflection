#pragma strict

var particle4 : Transform;

function Start () {
	transform.audio.Play();

	if (Particle1BehaviourScript.particleOn != 3) {
		//transform.audio.Play();
		renderer.enabled = false;
	}

}

function Update () {
	if (Particle1BehaviourScript.particleOn == 3) {
		renderer.enabled = true;
		transform.audio.mute = false;
	} else {
		renderer.enabled = false;
		transform.audio.mute = true;
	}
}

function OnMouseDown() {
		Particle1BehaviourScript.particleOn = 4;
		particle4.transform.audio.Play();
}	