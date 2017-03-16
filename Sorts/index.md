### JavaScript常见的排序算法
#### 1. 冒泡排序
###### (1)算法描述
冒泡排序是一种简单直观的排序算法,它重复地走访要排序的数列,一次比较两个元素,如果顺序错误就将它们交换过来,
重复地走访需要排序的数列,直到全部排序完成
###### (2)算法步骤

1. 比较相邻的两个数,如果第一个比第二个数大就交换她俩;
2. 对每一对元素做同样的工作,从开始一队到最后一对,最后一个元素最大;
3. 针对除了最后一个元素的数列重复以上步骤;
4. 持续在越来越少的元素上重复以上步骤,直到数列排序完成

###### (3)算法实现
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
###### (4)算法分析

- 最佳情况: T(n) = O(n) 输入的数列为正序
- 最差情况: T(n) = O(n2) 输入的数列为反序
- 平均情况: T(n) = O(n2)

#### 2. 选择排序
###### (1)算法描述
选择排序是一种简单直观的排序算法,无论什么数据进去都是O(n²)的时间复杂度,用选择排序时数据规模越小越好,唯一的好处就是不占用额外的内存
###### (2)算法步骤

1. 首先在未排序的序列中找到最大或最小的元素,然后放在排序序列的起始位置：
2. 从剩余的未排序数列中继续寻找最大或最小的元素,将其放在排序序列的末尾位置;
3. 重复上述步骤,直到所有元素排序完毕

###### (3)算法实现
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
###### (4)算法描述

- 最佳情况: T(n) = O(n2)
- 最差情况: T(n) = O(n2)
- 平均情况: T(n) = O(n2)

#### 3. 插入排序
###### (1)算法描述
插入排序是一种简单直观的排序算法,它的工作原理是通过构建有序序列,对于未排序数据,在已排序序列中从后向前扫描,找到相应位置并插入
###### (2)算法步骤

1. 将第一待排序列第一个元素看作一个有序序列,把第二个元素到最后一个元素当作未排序序列
2. 从头到尾依次扫描未排序序列,将扫描到的每个元素插入有序序列的适当位置

###### (3)算法实现
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
###### (4)算法分析

- 最佳情况: 输入数组按升序排序 T(n) = O(n)
- 最坏情况: 输入数组按降序排序 T(n) = O(n2)
- 平均情况: T(n) = O(n2)

#### 4. 希尔排序
###### (1)算法描述
希尔排序是简单插入排序的改进版,与插入排序不同之处在于它会优先比较距离较远的元素;基本思想是先将待排序的序列分割成若干子序列分别进行直接插入排序,
待整个序列中的记录基本有序时,再全体记录进行直接插入排序
###### (2)算法步骤

1. 选择一个增量序列t1, t2, ......, tk, 其中ti>tj, tk=1
2. 按照增量序列个数k,对序列进行k趟排序
3. 每趟排序,根据对应的增量 ti,将待排序列分割成若干长度为 m 的子序列,分别对各子表进行直接插入排序.仅增量因子为 1 时,整个序列作为一个表来处理,表长度即为整个序列的长度

###### (3)算法实现
```javascript
    function shellSort(arr) {
      console.time('shellSort');
      var len = arr.length, tmp, gap = 1;
      while (gap < len / 3) {
        //动态定义间隔序列
        gap = gap*3+1;
      }
    
      for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i=gap; i < len; i++) {
          tmp = arr[i];
          for (var j = i - gap; j >= 0 && arr[j] > tmp; j -= gap) {
            arr[j+gap] = arr[j];
          }
          arr[j+gap] = tmp;
        }
      }
      console.timeEnd('shellSort');
      return arr;
    }
    
    console.log(shellSort(arr));
```
###### (4)算法分析

- 最佳情况: T(n) = O(nlog2n)
- 最坏情况: T(n) = O(nlog2n)
- 平均情况: T(n) = O(nlogn)

#### 5. 归并排序
###### (1) 算法描述
归并排序是建立在归并操作上的一种有效的排序算法.该算法是采用分治法（Divide and Conquer）的一个非常典型的应用.归并排序是一种稳定的排序方法.将已有序的子序列合并,得到完全有序的序列;即先使每个子序列有序,再使子序列段间有序.若将两个有序表合并成一个有序表,称为2-路归并.
###### (2) 算法步骤

1. 申请空间,使其大小为两个已经排序序列之和,该空间用来存放合并后的序列
2. 设置两个指针,最初位置分别为两个已经排序序列的其实位置
3. 比较两个指针所指向的元素,选择相对小的元素放入到合并空间,并移动指针到下一位
4. 重复步骤3直到某一指针达到序列尾
5. 将另一序列剩下的所有元素直接复制到合并序列尾

###### (3) 算法实现
```javascript
    function mergeSort(arr) {
      console.time('mergeSort');
      var len = arr.length;
      if (len < 2) {
        return arr;
      }
    
      var middle = Math.floor(len / 2), left = arr.slice(0, middle), right = arr.slice(middle);
      console.timeEnd('mergeSort');
      return merge(mergeSort(left), mergeSort(right));
    }
    
    function merge(left, right) {
      var result = [];
    
      while (left.length && right.length) {
        if (left[0] <= right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
    
      while (left.length) {
        result.push(left.shift());
      }
    
      while (right.length) {
        result.push(right.shift());
      }
    
      return result;
    }
    
    console.log(mergeSort(arr));
```
###### (4) 算法分析

- 最佳情况: T(n) = O(n) 
- 最差情况: T(n) = O(nlogn)
- 平均情况: T(n) = O(nlogn)

#### 6. 快速排序
###### (1) 算法描述
快速排序的基本思想:通过一趟排序将待排记录分隔成独立的两部分,其中一部分记录的关键字均比另一部分的关键字小,则可分别对这两部分记录继续进行排序,以达到整个序列有序.
###### (2) 算法步骤

1. 从待排序列中挑选一个元素,称为基准(pivot)
2. 重新排序数列,所有元素比基准值小的摆放在基准前面,所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）.在这个分区退出之后,该基准就处于数列的中间位置.这个称为分区（partition）操作
3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序

###### (3) 算法实现
```javascript
    function quickSort(arr) {
      console.time('quickSort');
      if (arr.length <= 1) {
        return arr;
      }
    
      var pivotIndex = Math.floor(arr.length / 2),
        pivot = arr.splice(pivotIndex, 1)[0],
        left = [],
        right = [];
      for (var i=0; i < arr.length; i++) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      console.timeEnd('quickSort');
      return quickSort(left).concat([pivot], quickSort(right));
    }
    
    console.log(quickSort(arr));
```
###### (4) 算法分析

- 最佳情况: T(n) = O(nlogn)
- 最差情况: T(n) = O(n²)
- 平均情况: T(n) = O(nlogn)
