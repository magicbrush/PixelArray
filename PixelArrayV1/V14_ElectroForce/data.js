// ------------- array data ------------------//
// 配置
var resX = 24;
var resY = 24;
var minValue = 0;
var maxValue = 1;
var timeScale = 1;
var TFLerpSpd = 1;
var bgH = 0; // 背景颜色
var bgS = 0;
var bgB = 1;
var pixelScale = 1; // 像素的整体缩放比例
var mouseMode = ['brush','electron'];

// 阵列数据
var Values; // 阵列数值
var TF2Ds; // 每个像素的方位信息

// 电子
var electronBaseLife = 1;
let Electrons = new ElectronMgr(1);

// 数据初始化的函数
var InitValueFcn; 

// 阵型
var formation = [
	'Rectangle', 
	'Ring',
	'Conformal0',
	'Conformal1']; 

// 颜色函数
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

// 阵列渲染函数
var renderValueFcns = 
	['RenderValues_Default',
	'RenderValues_Rolling',
	'RenderValues_Zooming',
	'RenderValues_Shaking',
	'RenderValues_Orbiting',
	'RenderValues_StepRot',
	'RenderValues_Magnetic'];

// 图元函数
var primitiveFcn = [
	'primitive_rect',
	'primitive_circle', 
	'primitive_ellipse',
	'primitive_triangle'];

// Disp Assistance
var dispValueText = true;
var valueTxtR = 1;
var valueTxtG = 1;
var valueTxtB = 1;
var valueTxtA = 1;

var dispGrid = true;
var gridR = 0;
var gridG = 0;
var gridB = 0;
var gridA = 0.5;

// 滤镜
var filteringSpd = 1; // 滤镜速度
var filteringFcns = [
	'Mean_Filtering',
	'Shifting_Filtering',
	'Wrap_Filtering',
	'Vibrating_Filtering',
	'Vibrating_Filtering2',
	'NoiseFiltering',
	'BGFiltering',
	'Sin_Sin_Filtering',
	'Rand_Filtering']; // 滤镜函数


// 电磁场
var BPower = 1;
var EPower = 1;




