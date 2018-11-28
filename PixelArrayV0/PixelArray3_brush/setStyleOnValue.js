// ------------- 设置显示效果的函数 ----------------------//
// 功能：根据像素数值，设置显示效果
// style settings controlled by the following functions: 
/*
fill(), 
stroke(), 
tint(), 
strokeWeight(), 
strokeCap(), 
strokeJoin(), 
imageMode(), 
rectMode(), 
ellipseMode(), 
colorMode(), 
textAlign(), 
textFont(), 
textMode(), 
textSize(), 
textLeading().
*/

// ---------- 组合函数 --------------------//
function SetStyle_0(pixelValue)
{
	SetStyle_FillGrayOnValue(pixelValue);
	SetStyle_DefaultStroke(pixelValue);
}


// ---------- 元函数 ----------------------//
function SetStyle_FillGrayOnValue(pixelValue)
{
	fill(pixelValue*255);
}

function SetStyle_DefaultStroke (pixelValue) {
	stroke(0);
	strokeWeight(0.02);
}


