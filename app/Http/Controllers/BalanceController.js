'use strict'

const Category = use('App/Model/Category')
const Balance = use('App/Model/Balance')
const Validator = use('Validator')

class BalanceController {
    * main (req, res) {
        const categories = yield Category.all()

        for (const category of categories) {
            const topBalances = yield category.balance().fetch()
            category.topBalances = topBalances.toJSON()
        }

        yield res.sendView('balance', {
            categories: categories.toJSON()
        })
    }

    * create (req, res) {
        const categories = yield Category.all()

        yield res.sendView('balanceCreate', {
            categories: categories.toJSON()
        })
    }

    * doCreate (req, res) {
        const balanceData = req.all()

        const rules = {
            'amount': 'required|min:1',
            'comment': 'required|min:3'
        }

        const validation = yield Validator.validateAll(balanceData, rules)
        if (validation.fails()) {
            yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            res.redirect('/balance/create')
            return
        }

        const balance = new Balance()
        balance.amount = balanceData.amount
        balance.comment = balanceData.comment
        balance.user_id = 1
        balance.category_id = balanceData.category

        yield balance.save()

        res.redirect('/balance')
    }

    * edit (req, res) {
        const balance = yield Balance.find(req.param('id'))
        const categories = yield Category.all()

        yield res.sendView('balanceEdit', {
            balance: balance.toJSON(),
            categories: categories.toJSON()
        })
    }
    
    * doEdit (req, res) {
        const balance = yield Balance.find(req.param('id'))

        if (balance === null) {
            res.notFound('Sorry, balance not found.')
            return
        }

        // 1. input
        const balanceData = req.all()

        // 2. validáció
        const rules = {
            'amount': 'required|min:1',
            'comment': 'required|min:3',
        }

        const validation = yield Validator.validateAll(balanceData, rules)
        if (validation.fails()) {
            yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            res.redirect(`/balance/${balance.id}/edit`)
            return
        }

        // TODO: check category

        balance.amount = balanceData.amount
        balance.category_id = balanceData.category
        balance.comment = balanceData.comment

        yield balance.save()

        res.redirect('/balance')
    }

    * doDelete (req, res) {
        const balance = yield Balance.find(req.param('id'))

        yield balance.delete()

        res.redirect('/balance')
    }

    * ajaxDelete (req, res) {
        const recipe = yield Balance.find(req.param('id'))

        yield balance.delete()

        res.ok({
            success: true
        })
    }
}

module.exports = BalanceController
