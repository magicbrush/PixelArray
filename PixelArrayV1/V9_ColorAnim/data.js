// ------------- array data ------------------//
// 配置
var resX = 24;
var resY = 24;
var minValue = 0;
var maxValue = 1;
var timeScale = 1;
var bgH = 0;
var bgS = 0;
var bgB = 1;

// 阵列数据
var Values;

// 函数
var InitValueFcn; // 数据初始化的函数
var ij2TFFcn = ['ij2TF_Rect', 'ij2TF_Ring']; // 坐标变换函数，用于扭曲网格
var colorFcn = [
	'Vec2Color_RGB',
	'Vec2Color_HSB',
	'Vec2Color_SinGray',
	'Vec2Color_SinHue',
	'Vec2Color_ShiftHue',
	'Vec2Color_ShiftRGB_Spd',
	'Vec2Color_ShiftRGB_Phase',
	'Vec2Color_SinRGB_Freq',
	'Vec2Color_SinRGB_Phase'];
var renderValueFcns = 
	['RenderValues_Default',
	'RenderValues_Rolling',
	'RenderValues_Zooming',
	'RenderValues_Shaking',
	'RenderValues_Orbiting',
	'RenderValues_StepRot'];
var primitiveFcn = [
	'primitive_rect',
	'primitive_circle', 
	'primitive_ellipse',
	'primitive_triangle'];

// 笔刷
var brushFcn = ['PenBrushPaint','SoftBrushPaint'];

// GUI 
var dispValueText = true;


