#pragma strict

var src : RobotController;

function OnMouseDrag()
{
	if ( src.controlActivation )
	{
		if ( !src.isFlip )
			src.Flip();
		src.anim.SetInteger( "State", 1 );
		src.rigidbody2D.velocity = new Vector2( -src.moveSpeed, src.rigidbody2D.velocity.y);
	}
}
function OnMouseUp()
{
		src.rigidbody2D.velocity = new Vector2( 2, src.rigidbody2D.velocity.y);
}