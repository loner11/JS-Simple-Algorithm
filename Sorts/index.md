### JavaScript常见的排序算法
####1. 冒泡排序
######(1)算法描述
冒泡排序是一种简单直观的排序算法,它重复地走访要排序的数列,一次比较两个元素,如果顺序错误就将它们交换过来,
重复地走访需要排序的数列,直到全部排序完成
######(2)算法步骤

1. 比较相邻的两个数,如果第一个比第二个数大就交换她俩;
2. 对每一对元素做同样的工作,从开始一队到最后一对,最后一个元素最大;
3. 针对除了最后一个元素的数列重复以上步骤;
4. 持续在越来越少的元素上重复以上步骤,直到数列排序完成

######(3)算法实现
```javascript
    //测试数组
    var arr = [10, 2, 4, 13, 11, 8, 6, 1, 12, 14, 10, 3, 5, 9, 7, 15];
```
```javascript
    //简单冒泡排序
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
```
```javascript
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
```
```javascript
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
```
######(4)算法分析

- 最佳情况: T(n) = O(n) 输入的数列为正序
- 最差情况: T(n) = O(n2) 输入的数列为反序
- 平均情况: T(n) = O(n2)

####2. 选择排序
######(1)算法描述
选择排序是一种简单直观的排序算法,无论什么数据进去都是O(n²)的时间复杂度,用选择排序时数据规模越小越好,唯一的好处就是不占用额外的内存
######(2)算法步骤

1. 首先在未排序的序列中找到最大或最小的元素,然后放在排序序列的起始位置：
2. 从剩余的未排序数列中继续寻找最大或最小的元素,将其放在排序序列的末尾位置;
3. 重复上述步骤,直到所有元素排序完毕

######(3)算法实现
```javascript
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
    
    console.log(selectionSort(arr));
```
######(4)算法描述

- 最佳情况: T(n) = O(n2)
- 最差情况: T(n) = O(n2)
- 平均情况: T(n) = O(n2)

####3. 插入排序
######(1)算法描述
插入排序是一种简单直观的排序算法,它的工作原理是通过构建有序序列,对于未排序数据,在已排序序列中从后向前扫描,找到相应位置并插入
######(2)算法步骤

1. 将第一待排序列第一个元素看作一个有序序列,把第二个元素到最后一个元素当作未排序序列
2. 从头到尾依次扫描未排序序列,将扫描到的每个元素插入有序序列的适当位置

######(3)算法实现
```javascript
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
```
######(4)算法分析

- 最佳情况: 输入数组按升序排序 T(n) = O(n)
- 最坏情况: 输入数组按降序排序 T(n) = O(n2)
- 平均情况: T(n) = O(n2)