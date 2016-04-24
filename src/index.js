import fs from 'fs';
import request from 'request'
import memeTypes from '../lib/memeTypes.json'

export default class {
	constructor() {
		this.topText = '';
		this.bottomText = '';
		this.memeType = '';
	}

	searchMemeTypes(keyword) {
		return memeTypes.filter(function(memeType){
			if(memeType.search(keyword) >= 0) return true
		})
	}

	checkMemeType(memeType) {
		if (memeTypes.indexOf(memeType) != -1) return true
		else return false
	}

	validate() {
		if (!this.topText) return {result: false, msg: 'Please supply top text'}
		else if (!this.bottomText) return {result: false, msg: 'Please supply bottom text'}
		else if (!this.memeType) return {result: false, msg: 'Please supply meme'}
		else if (!this.checkMemeType(this.memeType)) return {result: false, msg: 'unknown meme, please use searchMemeTypes'}
		else return {result: true, msg: ''}
	}

	getMemeImg(filename, callback) {
		if (!this.validate().result) return callback()

		let writeStream = fs.createWriteStream(filename)
		let url = 'http://apimeme.com/meme?meme=' + escape(this.memeType) + '&top=' + escape(this.topText) + '&bottom=' + escape(this.bottomText);
		request(url).pipe(writeStream)
		writeStream.on('finish', function(){
			return callback()
		})

	}
}