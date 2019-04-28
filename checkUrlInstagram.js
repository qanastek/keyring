function checkUrlInstagram(url)
{
	let exploded = url.split('/');

	// Check if
		// Not empty
		// Doesnt have too much forward slashs
	if (url === '' || url.split('/').length > 6) { return false; }

	if (exploded[0] != "https:" ||
		exploded[1] != "" ||
		exploded[2] != "www.instagram.com" ||
		exploded[3] != "p" ||
		exploded[4] === ""
	) { return false; }

	return true;
}

module.exports.checkUrlInstagram = checkUrlInstagram;