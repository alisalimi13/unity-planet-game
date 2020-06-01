#pragma strict

var anim : Animator;
var isFlip : boolean = false;
var moveSpeed : int = 1;
var controlActivation : boolean = true;
var num : LifeCounter;

function Start () 
{
	anim = GetComponent( Animator );
}

function FixedUpdate () 
{
	var move = Input.GetAxis( "Horizontal" );
	var jump = Input.GetAxis( "Jump" );
	var esc = Input.GetKey( KeyCode.Escape );
	
	if ( esc )
	{
		num.number = -1;
		Application.LoadLevel( 0 );
	}
	if ( move && controlActivation)
	{
		if ( ( move > 0 && isFlip ) || ( move < 0 && !isFlip ) )
			Flip();
		anim.SetInteger( "State", 1 );
		rigidbody2D.velocity = new Vector2( move * moveSpeed, rigidbody2D.velocity.y);
	}
	
	if ( jump && controlActivation )
		anim.SetInteger( "State", 2 );
		
	if ( !move && !jump )
		anim.SetInteger( "State", 0 );
}

function Flip()
{
	transform.localScale.x *= -1;
	isFlip = !isFlip;
}