#pragma strict

var src : RobotController;

function OnMouseDrag()
{
	if ( src.controlActivation )
	{
		src.anim.SetInteger( "State", 2 );
	}
}