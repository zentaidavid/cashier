'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
  balance () {
    return this.hasMany('App/Model/Balance')
  }
}

module.exports = Category
