const {
    History,
	Song
} = require('../models')
const _ = require('lodash')
module.exports = {
	async index(req, res) { 
		try {
            console.log('req'  + req)
			const {userId} = req.query
			const histories = await History.findAll({
            where: {
				UserId: userId
			},
            include: [
                {
                    model: Song //bind a info from song JOIN
                }
            ]
            }).map(history => history.toJSON())
            .map(history => _.extend(
                {},
                history.Song, 
                history
            ))				
			res.send(_.uniqBy(histories, history => history.SongId))
		} catch (err) { 
			res.status(500).send({
				error: 'account to fetch history.'
			})
		}
	},
	async post (req, res) { 
		try {
			// const userId = req.user.id
			const {songId} = req.body.params
			console.log(songId)
			const history = await History.create({
				SongId: songId,
				UserId: 1
			})
			console.log(history)
			res.send(history)
			} catch (err) {
			console.log(err)
			res.status(500).send({
				error: 'an error has occured trying to create the history object'			})
			}
		}

}