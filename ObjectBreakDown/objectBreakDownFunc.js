//this function gets an object and a function name, and recursivly apply the function on the lower leyer of the object
var objectBreakdown = function (obj, functionToApply,_data) {
    for (var item in obj) {
      if (!obj.hasOwnProperty(item)) continue
      if (typeof obj[item] !== "object" || (obj[item] instanceof Array)){
        obj[item] = functionToApply(obj[item],_data)
      }
      else objectBreakdown(obj[item],functionToApply,_data)
    }
}