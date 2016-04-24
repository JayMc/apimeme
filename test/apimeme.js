var Apimeme = require('../lib/index.js')
var should = require('should')
var fs = require('fs')

describe('apimeme', function(){

	before(function(done){
		a = new Apimeme()
		done()
	})

	it('should get a meme', function(done){
		this.timeout(5000)
		a.topText = 'such meme'
		a.bottomText = 'much test. wow';
		a.memeType = '18360-doge-doge-simple';
		a.getMemeImg('meme.jpg', function(){
			fs.readFile('meme.jpg', function(err, data){
				should.not.exist(err)
				done();
			})
		})
	})

	it('should suggest meme based on search keyword', function(){
		a.searchMemeTypes('bob').should.be.not.empty()
		a.searchMemeTypes('bob')[0].should.be.equal('Chocolate Spongebob')
	})

	it('should validate top text', function(){
		a.bottomText = 'sdfsd'
		a.memeType = 'Philosoraptor'
		a.validate().result.should.be.false
	})

	it('should validate bottom text', function(){
		a.topText = 'sdgsd jhifogfs'
		a.bottomText = ''
		a.memeType = 'Philosoraptor'
		a.validate().result.should.be.false
	})

	it('should validate meme type', function(){
		a.topText = 'sdgsd jhifogfs'
		a.bottomText = 'sdfsd'
		a.memeType = 'sdvsvwvevrvervsdv'
		a.validate().result.should.be.false
		a.getMemeImg('meme2.jpg', function(){
			fs.readFile('meme2.jpg', function(err, data){
				should.exist(err)
				done();
			})
		})	
	})
})
