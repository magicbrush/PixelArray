// ------------- array data ------------------//
// 配置
var resX = 24;
var resY = 24;
var minValue = 0;
var maxValue = 1;

// 阵列数据
var Values;

// 函数
var InitValueFcn; // 数据初始化的函数
var ij2TFFcn = ['ij2TF_Rect', 'ij2TF_Ring']; // 坐标变换函数，用于扭曲网格
var RenderValueFcn; // 阵列的渲染函数
var renderValueFcns = ['RenderValuesRect','RenderValuesRollingRect'];

// 笔刷
var brushFcn = ['PenBrushPaint','SoftBrushPaint'];

// GUI
var ColorDispMode = ['rgb', 'hsb'];


