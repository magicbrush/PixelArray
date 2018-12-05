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
// 将从行列号i,j转化为实际显示位置的功能提炼独立的功能，这样就能够独立的变化
// 在程序设计中，如果发现某种功能具有可变性，则将其提炼为独立模块，往往会用一组具有相同的接口来实现
// 多种变化的功能呢。例如，在这里就是定义两个函数；在C++中，往往会设计为虚函数。
var ij2TFFcn = ['ij2TF_Rect', 'ij2TF_Ring']; // 坐标变换函数，用于扭曲网格
var RenderValueFcn; // 阵列的渲染函数
//var RenderValueFcn2 = ['RenderValues_Square','RenderValues_Ring'];

// GUI
var ColorDispMode = ['rgb', 'hsb'];


