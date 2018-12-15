
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

function primitive_cross()
{
	rectMode(CENTER);
	rect(0,0,0.2,0.7);
	rect(0,0,0.7,0.2);
}

function primitive_arrow()
{
	rectMode(CENTER);
	rect(0,-0.2,0.2,0.6);
	triangle(-0.4,0.1,0.4,0.1,0,0.7);
}
