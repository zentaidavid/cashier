'use strict'

class MainController {
    * main (req, res) {
        yield res.sendView('main', { name: 'Marci'})
    }
}

module.exports = MainController
