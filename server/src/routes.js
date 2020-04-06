const AuthenticationController = require('./controllers/AuthenticationController.js')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
const SongsController = require('./controllers/SongsController.js')
const BookmarksController = require('./controllers/BookmarksController.js')
const HistoriesController = require('./controllers/HistoriesController.js')

const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
	app.post('/register',
		AuthenticationControllerPolicy.register,
		AuthenticationController.register)
	app.post('/login',
		AuthenticationController.login)


	app.get('/songs',
		SongsController.index)
	app.get('/songs/:songId',
		SongsController.show)
	app.post('/songs',
		SongsController.post)
	app.put('/songs/:songId',
		SongsController.put)

	app.get('/bookmark',
		isAuthenticated,
		BookmarksController.index
	)
	app.post('/bookmark',
		isAuthenticated,
		BookmarksController.post
	)
	app.delete('/bookmark/:bookmarkId',
		isAuthenticated,
		BookmarksController.delete
	)

	app.get('/histories',
		HistoriesController.index
	)
	app.post('/histories',
		HistoriesController.post
	)
}