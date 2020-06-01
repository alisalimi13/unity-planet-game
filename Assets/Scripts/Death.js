#pragma strict

var character : RobotController;
var sound : AudioSource;
var themeSound : AudioSource;
var num : LifeCounter;
var gameOverGUI : GUIText;

function OnTriggerEnter2D( other : Collider2D )
{
	if ( other.tag == "Player" )
	{
		character.controlActivation = false; 
		themeSound.Stop();
		sound.Play();
		num.number--;
		if ( num.number >= 0 )
		{
			yield WaitForSeconds( 21 );
			Application.LoadLevel( 1 );
		}
		else
		{
			gameOverGUI.enabled = true;
			yield WaitForSeconds( 21 );
			Application.LoadLevel( 0 );
		}
	}
}