// map

Array.prototype.ourMap = function(callback) {
  var arr = [] // since, we need to return an array
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
  }
  return arr // finally returning the array
}


// filter

Array.prototype.filterAlbums = function(callback, context) {
  arr = []
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}

// reduce

Array.prototype.reduceAlbums = function(callback, initialValue) {
  var accumulator = initialValue === undefined ? undefined : initialValue

  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this)
    } else {
      accumulator = this[i]
    }
  }
  return accumulator
} // our polyfill for reduce
