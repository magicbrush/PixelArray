// ------------- 键盘控制 ----------------------//
var key_TurnValueDisp = 'T';

function KeyControl()
{
	//print('key is ' + key);
	//pressedKey = key;
	//fill(0);
	//text(pressedKey,100,100);
	if(!keyIsPressed)
	{
		return;
	}

	KeyControl_Brush(key);
}

function keyPressed()
{

}

function keyReleased () {

	print("KeyReleased " + key);
	if(key === key_TurnValueDisp)
	{

		showValue = !showValue;
	}
	else if(key === key_GUIVisible)
	{
		guiVisible = !guiVisible;
		if(guiVisible) 
			gui.show(); 
		else 
			gui.hide();
	}
}

function dispControlKey()
{
	textAlign(RIGHT);
	textSize(10);
	fill(0,40);
	var Txt_TurnValDisp = "Turn Value Disp: " + key_TurnValueDisp;
	text(Txt_TurnValDisp,width-5,12);
}

