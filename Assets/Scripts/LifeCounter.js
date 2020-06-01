#pragma strict

static var number : int = 1;

@script ExecuteInEditMode
function Start () 
{
	if ( number < 0 )
		number = 1;
	guiText.text =  "x" + number;
}
