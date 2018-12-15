/* --- 正逆坐标变换 ----------*/
function Transformer(transform, inverseTransform)
{
	// transform (i,j) to pos as (x,y) on screen
	this.transform = transform; 
	// transform screen pos (x,y) to (i,j)
	this.inverseTransform = inverseTransform; 
}

// 所有坐标变换列表
var ij2TFers = {
  'Rectangle': 	new Transformer(ij2TF_Rect,xy2ij_Rect), 
  'Ring': 		new Transformer(ij2TF_Ring,xy2ij_Ring),
  'Conformal0':	new Transformer(ij2TF_Conformal0,ij2TF_Conformal0),
  'Conformal1':	new Transformer(ij2TF_Conformal1,ij2TF_Conformal1)
};

// 运用当前选中的阵型 formation, 将行列(i,j)转化为 Transform2D
function doTransform(tfName, i, j)
{
	var codeTxt = 
	   	"var T = " + "ij2TFers." + tfName + ".transform(i,j);";
	eval(codeTxt);
	return T;
}

// 运用当前选中的阵型 formation, 将位置(x,y)转化为 行列(i,j)
function doInverseTransform(tfName, x, y)
{
	var codeTxt = 
	   	"var ij = " + "ij2TFers." + tfName + ".inverseTransform(x,y);";
	eval(codeTxt);
	return ij;
}







