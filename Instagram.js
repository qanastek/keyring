function checkUrlInstagram(url)
{
	// Check if
		// Not empty
		// Doesnt have too much forward slashs
	if (url === '' || url.split('/').length > 6) { return false; }

	let exploded = url.split('/');

	if (exploded[0] !== "https:" ||
		exploded[1] !== "" ||
		(exploded[2] !== "www.instagram.com" && exploded[2] !== "instagram.com") ||
		exploded[3] !== "p" ||
		exploded[4] === ""
	) { return false; }
	else
	{
		return true;
	}
}

module.exports.checkUrlInstagram = checkUrlInstagram;