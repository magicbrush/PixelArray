// ************** 所有的数据 ************************//
// 数据
var resX = 10; // 阵列尺寸X
var resY = 10; // 阵列尺寸Y
var PixelValues; // 像素阵列数据

// 函数
var ij2xyFcn = new Function(); // 将行列号ij转化为位置xy
var ij2thetaFcn = new Function(); // 将行列号ij转化为倾斜角theta
var renderFcn= new Function(); // 渲染函数：渲染所有像素
var drawFcn = new Function();  // 绘制函数：每个像素的”图元“
var styleFcn = new Function(); // 风格函数: 设置显示风格