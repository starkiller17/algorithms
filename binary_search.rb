# implement binary search in JavaScript (or the language of your choice)

def binarySearch(arr, search_value)
  # todo
  end_index = arr.length - 1
  start_index = 0
  middle_index = 0

  while (start_index <= end_index)
    middle_index = ((end_index - start_index)/ 2.to_f).round(0)

    if (arr[middle_index] == search_value)
      return true
    end

    if (search_value > arr[middle_index])
      start_index = middle_index + 1
    else
      end_index = middle_index - 1
    end
  end
end

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
search_value = 3
puts binarySearch(array, search_value)
