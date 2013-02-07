#pragma strict

var player : Transform;
var mirror : Transform;
var newPosition : Vector3;

function Start () {
	transform.position.x = mirror.transform.position.x + (mirror.transform.position.x - player.transform.position.x);
	//transform.position.z = mirror.transform.position.z + (mirror.transform.position.z - player.transform.position.z);
	transform.position.z = player.transform.position.z;

}

function Update () {
	//It makes the distance between the player and the image the same
	transform.position.x = mirror.transform.position.x + (mirror.transform.position.x - player.transform.position.x);
	//transform.position.z = mirror.transform.position.z + (mirror.transform.position.z - player.transform.position.z);
	transform.position.z = player.transform.position.z;
	
	//transform.
	//Rotate according to the camera position

}