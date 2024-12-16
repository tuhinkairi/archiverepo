export default {
  findInNestedByName (array, name) {
    if (typeof array !== 'undefined') {
      for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) return [{...array[i]}]
        let a = this.findInNestedByName(array[i].children, name)
        if (a != null) {
          a.unshift({...array[i]})
          return [...a]
        }
      }
    }
    return null
  },
  arraysEqual: function(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
}
