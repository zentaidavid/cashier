'use strict'

const Lucid = use('Lucid')

class Balance extends Lucid {
    category () {
        return this.belongsTo('App/Model/Category')
    }
}

module.exports = Balance
