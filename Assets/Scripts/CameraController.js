#pragma strict

var p : Transform;

function Update () 
{
	transform.position = new Vector3( p.position.x + 5, 5 , -10);
}