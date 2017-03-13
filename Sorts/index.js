/**
 * Created by loner11 on 17-3-13.
 */
//测试数组
var arr = [10, 2, 4, 13, 11, 8, 6, 1, 12, 14, 10, 3, 5, 9, 7, 15];

/*//冒泡排序
function bubbleSort(arr) {
  console.time('bubbleSort');
  var len = arr.length;
  for (var i=0; i < len; i++) {
    for (var j=0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.timeEnd('bubbleSort');
  return arr;
}

console.log(bubbleSort(arr)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//改进冒泡排序,设置一个标志性变量pos,用于记录每趟排序中最后一次进行交换的位置,由于pos位置之后的记录均已交换完毕,
//进行下一趟排序的时候直接扫描到标志位pos即可
function bubbleSort2(arr) {
  console.time('bubbleSort2');
  var i = arr.length - 1;
   while (i > 0) {
     var pos = 0;
     for (var j=0; j < i; j++) {
       if (arr[j] > arr[j+1]) {
         pos = j;
         var tmp = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = tmp;
       }
     }
     i = pos;
   }
   console.timeEnd('bubbleSort2');
   return arr;
}

console.log(bubbleSort2(arr));

//每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值(最大值和最小值)
function bubbleSort3(arr) {
  console.time('bubbleSort3');
  var low,
      high = arr.length - 1,
      tmp,
      j;
  while (low < high) {
    for (j=low; j < high; j++) {
      if (arr[j] > arr[j+1]) {
        tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
    --high;
    for (j=high; j > low; j++) {
      if (arr[j] < arr[j+1]) {
        tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
    ++low;
  }
  console.timeEnd('bubbleSort3');
  return arr;
}

console.log(bubbleSort3(arr));

//选择排序
function selectionSort(arr) {
  console.time('selectionSort');
  var len = arr.length;
  var minIndex, tmp;
  for (var i=0; i < len - 1; i++) {
    minIndex = i;
    for (var j=i+1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  console.timeEnd('selectionSort');
  return arr;
}

console.log(selectionSort(arr)); */

//插入排序
function insertionSort(arr) {
  console.time('insertionSort');
  var len = arr.length;
  var preIndex, current;
  for (var i=1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex+1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex+1] = current;
  }
  console.timeEnd('insertionSort');
  return arr;
}

console.log(insertionSort(arr));