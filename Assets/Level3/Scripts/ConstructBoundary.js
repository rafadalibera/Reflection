import System.Math;

var mapAsset : TextAsset;
var mapAsset1 : TextAsset;
var mapAsset2 : TextAsset;
var blockPrefab : Transform;
var particle1 : Transform;
var particle2 : Transform;
var particle3 : Transform;
var particle4 : Transform;
var doorPrefab : Transform;
var characterPrefab : Transform;

var map = mapAsset.text.Split ("\n"[0]);

function Awake () {
//var map = mapAsset.text.Split ("\n"[0]);

	var op = Random.Range(-1,2);

	if (op == 0) {
		map = mapAsset1.text.Split ("\n"[0]);
	} else if (op == 1) {
		map = mapAsset2.text.Split ("\n"[0]);
	}
	
    var v = new Vector3 ();
    v.y = 1.0;
    for (var j = 0; j < map.length; j ++) {
        v.z = (map.length - j - 1);
        for (var i = 0; i < map[j].length; i ++) {
            v.x = (i - map[j].length) + 1;
            if (map[j][i] == "X") {
                var inst = Instantiate (blockPrefab, v, Quaternion.identity);
                inst.transform.parent = transform;
            }  else if (map[j][i] == "1") {
                Instantiate (particle1, v, Quaternion.identity);
            } else if (map[j][i] == "2") {
                Instantiate (particle2, v, Quaternion.identity);
            } else if (map[j][i] == "3") {
                Instantiate (particle3, v, Quaternion.identity);
            } else if (map[j][i] == "4") {
                Instantiate (particle4, v, Quaternion.identity);
            } else if (map[j][i] == "C") {
                Instantiate (characterPrefab, v, Quaternion.identity);
            } else if (map[j][i] == "D") {
                Instantiate (doorPrefab, v, Quaternion.identity);
            }
        }
    }
  
    var w = new Vector3 ();
    w.y = 3.0;
    for (j = 0; j < map.length; j ++) {
        w.z = (map.length - j - 1);
        for (i = 0; i < map[j].length; i ++) {
            w.x = (i - map[j].length) + 1;           
                Instantiate (blockPrefab, w, Quaternion.identity);
        }
    }
    
    
}
