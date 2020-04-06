const {
    Bookmark,
    Song
} = require('../models')
const _ = require('lodash')
module.exports = {
	async index(req, res) { 
		try {
            const userId = req.user.id
            const {songId} = req.query
            console.log("iiiiiiiiiiiiiin")
			const where = {
                UserId: userId
            }
            if (songId){
                where.SongId = songId
            }
			const bookmarks = await Bookmark.findAll({
            where: where,
            include: [
                {
                    model: Song //bind a info from song JOIN
                }
            ]
            }).map(bookmark => bookmark.toJSON())
            .map(bookmark => _.extend(
                {},
                bookmark.Song, 
                bookmark
            ))				
			res.send(bookmarks)
		} catch (err) { 
			res.status(500).send({
				error: 'account to fetch bookmark.'
			})
		}
	},
	async post (req, res) { 
		try {
            const userId = req.user.id
            const  {songId} = req.body.params
            console.log(req.body)
			const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
			})
			if (bookmark) {
				return res.status(400).send({
					error: 'already exist'
				})
			}
			const newBookmark =  await Bookmark.create({
                SongId: songId,
                UserId: userId				
			})
			res.send(newBookmark)
		} catch (err) {
			res.status(500).send({
				error: 'account to create bookmark.'
			})
		}
    },
    // TODO DELETE
	async delete(req, res) { 
		try {
            const userId = req.user.id
            const {bookmarkId} = req.params
            const bookmark = await Bookmark.findOne({
				where: {
                    id: bookmarkId,
                    UserId: userId
				}
			})
            if (!bookmark) {
                return res.status(403).send({
                    error: 'u dont have access'
                })
            }
            await bookmark.destroy()
			res.send(bookmark)
		} catch (err) {
			res.status(500).send({
				error: 'account to delete bookmark.'
			})
		}
    }
}