'use strict'

const Schema = use('Schema')

class BalancesTableSchema extends Schema {

  up () {
    this.create('balances', (table) => {
      table.increments()
      table.integer('amount').notNullable()      
      table.text('comment').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('balances')
  }

}

module.exports = BalancesTableSchema
