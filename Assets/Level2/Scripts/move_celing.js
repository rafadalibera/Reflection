#pragma strict

static var end = false;
var door : Transform;

function Start () {
	door.renderer.enabled = false;
	end = false;

}

function Update () {
	
	if (end == false) {
		// Celing visible/ not visible
		if (click_button.visible == true) {
			renderer.enabled = true;
		} else {
			renderer.enabled = false;
		}
		
		if (transform.position.y > -1) {
			if (transform.position.y > 1) {
				transform.Translate(0, -0.2*Time.deltaTime, 0); //(0, -0.2*Time.deltaTime, 0);
			} else {
				transform.Translate(0, -10*Time.deltaTime, 0);
			}
		} else {
			end = true;
		}
	} else {
		renderer.enabled = true;
		door.renderer.enabled = true;
		//transform.Translate(0, 0, 0);
	}

}

function OnCollisionStay (c : Collision) {
		end = true;
		//you lost!!!! hahahahhahah
		Application.LoadLevel(3);


}