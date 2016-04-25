# apimeme
generate memes via [apimeme.com](http://apimeme.com)

## generate memes
I like the simplicity of [apimeme.com](http://apimeme.com) so I created a module for it. [apimeme.com](http://apimeme.com) generates a meme JPG from a GET request. This module might help you use this service in your node server.

## generate a meme
You need 3 things:
* the meme type - get the correct string from [apimeme.com](http://apimeme.com) or use searchMemeTypes
* top text
* bottom text

It should create an image file for the filepath name you provide
```
a.topText = 'such meme'
a.bottomText = 'much test. wow';
a.memeType = '18360-doge-doge-simple';
a.getMemeImg('meme.jpg', function(){
	// meme.jpg should exist with your meme settings
})
```

## Search valid memes
[apimeme.com](http://apimeme.com) has a list of memes to select from, use the search function to find the correct string for your meme.
If you wanted to create a Spongebob meme check the string for the correct meme. There maybe multiples.
```
a = new Apimeme()
a.searchMemeTypes('bob')
```
Returns a few of Spongebob memes you can use. Otherwise goto [apimeme.com](http://apimeme.com) and have a look.


