//数组排序
//1、一维数组
//(1)按数值排序
var values = [4, 3, 2, 1, 5];
values.reverse(); //反转排列数组
values.sort();　//升序排列数组

function compare(value1, value2) {
  return value1 - value2; //(value1-value2)升序　(value2-value1)降序　
}
values.sort(compare);

//(2)按字符串排序
var colors = ["red", "blue", "green"];
colors.reverse();　//字符串翻转排列
colors.sort(); //字符串升序排列

//２、二维数组
//(1)按数值排序
var arr = [[1, 2, 3], [7, 2, 3], [3, 2, 3]];
function compare1(x, y) {
  return x[0] - y[0];
}
function compare2(x, y) {
  return y[0] - x[0];
}
arr.sort(compare1); //升序排列
arr.sort(compare2); //降序排列

//(2)按字符串排列
var arr1 = [['中','国'], ['啊','的'], ['哦','的']];
function compare3(x, y) {
  return x[0].localeCompare(y[0]); // y[0].localeCompare(x[0]) 降序排列
}
arr1.sort(compare3); //升序排列

//(3)按值排序
var aa =[["a",3],["b",4],["c",2],["d",1]];
function compare4(x, y) {
  return x[1] - y[1];　//y[1]-x[1] 降序排列
}
//aa.sort(compare4); //升序排列
//(4)按键排序
function compare5(x, y) {
  return x[0] - y[0]; //y[0]-x[0] 降序排列
}
aa.sort(compare5); // 升序排列
