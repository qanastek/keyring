function checkUrlTwitter(url)
{
	// https://twitter.com/lemondefr/status/1118445831789658112

	// Check if
		// Not empty
		// Doesnt have too much forward slashs
	if (url === '' || url.split('/').length > 6) { return false; }

	let exploded = url.split('/');

	let regex = /[a-zA-Z]/g

	if (exploded[0] != "https:" ||
		exploded[1] != "" ||
		(exploded[2] != "www.twitter.com" && exploded[2] != "twitter.com") ||
		exploded[3] === "" ||
		exploded[4] != "status" ||
		exploded[5] === "" ||
		regex.test(exploded[5]) == true
	) { return false; }

	return true;
}

function GetId(url)
{
	return url.split('/')[5];
}

module.exports.checkUrlTwitter = checkUrlTwitter;
module.exports.GetId = GetId;