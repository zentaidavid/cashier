'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', 'MainController.main')
Route.get('/balance', 'BalanceController.main')

Route.get('/balance/create', 'BalanceController.create').middleware('auth')
Route.post('/balance/create', 'BalanceController.doCreate').middleware('auth')

Route.get('/balance/:id/edit', 'BalanceController.edit')
Route.post('/balance/:id/edit', 'BalanceController.doEdit')
Route.post('/balance/:id/delete', 'BalanceController.doDelete')

Route.get('/register', 'UserController.register')
Route.post('/register', 'UserController.doRegister')

Route.get('/login', 'UserController.login')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.doLogout')