'use strict'

module.exports = function() {
  return function(galleries, searchTerm) {
    let fuzzyPattern = generateFuzzyPattern(searchTerm)

    return galleries.filter(gallery => {
      return fuzzyPattern.test(gallery.name.toUpperCase())
    })
  }
}

function generateFuzzyPattern(input) {
  if(!input) return /.*/  //<-- means to return everything
  return new RegExp(`.*${input.toUpperCase().split('').join('.*')}.*`)
}
