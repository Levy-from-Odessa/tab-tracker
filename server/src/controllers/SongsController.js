const {
	Song
} = require('../models')

const Sequelize = require('sequelize');
const Op = Sequelize.Op


module.exports = {
	async index(req, res) {
		try {
            let songs = null
            const search = req.query.search
            console.log(`%${search}%`)
            if (search) {
                songs = await Song.findAll({
                    where: {
                        [Op.or]: [
                            'title', 'artist', 'genre' , 'album'
                        ].map(key => ({
                            [key]: {[Op.like]: `%${search}%`}
                        }))
                    }
                })
            } else{
                songs = await Song.findAll({
				limit:10
			})
            }		
			res.send(songs)
		} catch (err) {
			res.status(500).send({
				error: 'account to fetch songs.'
			})
		}
    },
    async show(req, res) {
		try {
            console.log(req.params.songId + "id")
            const song = await Song.findByPk(req.params.songId)
            
			res.send(song)
		} catch (err) {
			res.status(500).send({
				error: 'account to fetch song.'
			})
		}
	},
	async post(req, res) {
		try {
			const song = await Song.create(req.body)
			res.send(song)
		} catch (err) {
			res.status(500).send({
				error: ' account is trying to create songs'
			})
		}
    },
    
	async put(req, res) {
		try {
			const song = await Song.update(req.body,{
					where: {
						id: req.params.songId
					}
				}
			)
			console.log(song)
			res.send(song)		
		} catch (err) {
			res.status(500).send({
				error: ' cant update'
			})
		}
	},
	
}