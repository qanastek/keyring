// Express.js
const express = require('express');

// Protocol SSL / HTTPS
const https = require('https');

// Rendering engine nunjucks
const nunjucks = require('nunjucks');

// Equivalent to requests
const rp = require('request-promise');

// Scrapping
const $ = require('cheerio');

const app = express();

// View engine
nunjucks.configure('views', {
  autoescape: true,
  express: app
});

// View engine
app.set('view engine', 'njk');

// Default static folder
app.use(express.static('public'));

// Function importation part
const Instagram = require('./checkUrlInstagram');

app.get('/download', function (req, res)
{
	// Change filename
	res.header('Content-Disposition', 'attachment; filename=' + "MyConverter" + Date.now() + ".mp4");

	// Download the video
	https.get(req.query.url, function(file) {
	  file.pipe(res);
	});

});

app.get('/video', function (req, res)
{
	const ERR_URL = "Non valid url !";

	const url = req.query.url;

	if (url === undefined || url === "") { throw "You need to enter an URL"; }

	const DOMAIN = url.split('/')[2];

	if (DOMAIN === "www.instagram.com")
	{
		Instagram.checkUrlInstagram(url);

		rp(
		{
			uri: url,
	        method: 'GET'
		})
		.then(function(html)
		{
			let uri = $("meta[property='og:video']", html)[0].attribs.content;
			
		    res.render('pages/video', {
		        url: uri,
		        link: "?url=" + uri,
		        cmd: "curl -o MyConverter" + Date.now() + ".mp4 " + uri + " --silent"
		    });
		})
		.catch(function(err)
		{
			res.render('pages/index');
		});
	}
	else
	{
		throw ERR_URL;
	}
	
})

app.get('/', function (req, res)
{
	res.render('pages/index');
})

module.exports = app;