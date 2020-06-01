#pragma strict

var character : RobotController;
var sound : AudioSource;
var themeSound : AudioSource;
var winGUI : GUIText;
var num : LifeCounter;

function OnTriggerEnter2D( other : Collider2D )
{
	if ( other.tag == "Player" )
	{
		character.controlActivation = false; 
		themeSound.Stop();
		sound.Play();
		winGUI.enabled = true;
		num.number = -1;
		yield WaitForSeconds( 44 );
		Application.LoadLevel( 0 );
	}
}