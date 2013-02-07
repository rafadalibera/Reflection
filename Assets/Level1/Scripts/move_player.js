#pragma strict

var player : Transform;

function Start () {
	renderer.enabled = false;
	transform.position.x = player.transform.position.x;
	transform.position.z = player.transform.position.z;

}

function Update () {
	transform.position.x = player.transform.position.x;
	transform.position.z = player.transform.position.z;
}