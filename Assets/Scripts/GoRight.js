#pragma strict

var src : RobotController;
var obj: GameObject;
var col : Collider2D;
var tch : Touch;

function Update()
{
	if ( Input.touchCount > 0 )
	{
		tch = Input.GetTouch(0);
		if ( col.bounds.Contains( Vector3(tch.position.x, tch.position.y ,obj.transform.position.z)) )
		{
			if ( src.isFlip )
			src.Flip();
			src.anim.SetInteger( "State", 1 );
			src.rigidbody2D.velocity = new Vector2( src.moveSpeed, src.rigidbody2D.velocity.y);
		}
	}
}