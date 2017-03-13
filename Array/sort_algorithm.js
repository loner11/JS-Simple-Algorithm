//冒泡排序
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
function bubbleSort(array) {
  for (var i=0; i < array.length; i++) {
    for (var j = i; j < array.length; j ++) {
      if (array[i] > array[j]) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

bubbleSort(a);　//3,9,34,198,200,203,746,764,984

//插入排序
function insertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    for (var i = 1; i < array.length; i++) {
      var key = array[i];
      var j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = key;
    }
    return array;
    } else {
    return 'array is not an Array!';
  }
}
insertionSort(a); //3,9,34,198,200,203,746,764,984

//二分插入排序
function binaryInsertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        for (var i = 1; i < array.length; i++) {
            var key = array[i], left = 0, right = i - 1;
            while (left <= right) {
                var middle = parseInt((left + right) / 2);
                if (key < array[middle]) {
                    right = middle - 1;
                } else {
                    left = middle + 1;
                }
            }
            for (var j = i - 1; j >= left; j--) {
                array[j + 1] = array[j];
            }
            array[left] = key;
        }
        return array;
    } else {
        return 'array is not an Array!';
    }
}
binaryInsertionSort(a); //3,9,34,198,200,203,746,764,984
