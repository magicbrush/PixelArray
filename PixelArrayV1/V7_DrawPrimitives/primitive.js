// --------------- 图形基元 -------------------- //
// 这里讲“方块”扩展为多种可能的形态

// ----------- drawPrimitives -----------------//
function primitive_rect()
{
	rectMode(CENTER);
	rect(0,0,1,1);
}

function primitive_circle()
{
	ellipse(0,0,1,1);
}

function primitive_ellipse()
{
	ellipse(0,0,1,0.7)
}

function primitive_triangle()
{
	triangle(0,0.7,-0.5,-0.4,0.5,-0.4);
}