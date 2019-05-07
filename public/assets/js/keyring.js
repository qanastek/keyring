$(document).ready(function() {

	let width = window.innerWidth;
	let height = window.innerHeight;

	if (width < height) {

		$('.contentMain').css({
			width: 'auto',
			height: '6vh',
			paddingLeft: '5%',
			paddingRight: '5%'
		});

		$('.uniqCol').css({
			paddingLeft: '0vw'
		});

		$('.inputMain').addClass('placeholderCustom');
		$('.SendButton').addClass('btnCustom');

		$('.invalid-field').css({
			paddingLeft: '5%',
			fontSize: '2em'
		});
	}

	function checkUrl(url)
	{
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

	/*
	*	value => Value receive from the field
	*	element => Type of the received field
	*
	*	Title
	*	Function
	*	Error
	*/
	jQuery.validator.addMethod(
		"urlCheck",
		function(value, element)
		{
			let splited = value.split('/');

			if (checkUrl(value) === false)
			{
				return false;
			}
			else
			{
				return true;
			}
		},
		"Bad URL"
	);

	jQuery("form[name='convertForm']").validate(
	{
		invalidHandler: function(event, validator) 
		{
			// 'this' refers to the form
			var errors = validator.numberOfInvalids();

			if (errors) {

				var message = "";

				validator.errorList.forEach(function(mes) {
				  message += mes.message;
				});

				$(".invalid-field").html(message);
				$(".invalid-field").show();

			}
			else {

				$(".invalid-field").hide();

			}
		},
		errorPlacement: function(error,element) {
			return true;
		},
		errorClass: 'errorField',
		errorElement: 'div',
	  	rules: {
	    	"url": {
	        	"required": true,
	        	"minlength": 10,
	        	"maxlength": 100,
	        	"url": true,
	        	"urlCheck" : true
	    	}
	 	}

	})

	jQuery.extend(jQuery.validator.messages, {
		required: "Field required",
		remote: "remote",
		email: "email invalide",
		url: "Invalid URL",
		date: "date invalide",
		dateISO: "date invalide",
		number: "nombre invalide",
		digits: "code invalide",
		creditcard: "carte de crédit invalide",
		equalTo: "différent",
		accept: "différent",
		maxlength: jQuery.validator.format("Max autorized lenght is {0}."),
		minlength: jQuery.validator.format("Min autorized lenght is {0}."),
		rangelength: jQuery.validator.format("votre champs doit contenir entre {0} et {1} caractéres."),
		range: jQuery.validator.format("Doit être compris entre {0} et {1}."),
		max: jQuery.validator.format("inférieur ou égal à {0}."),
		min: jQuery.validator.format("supérieur ou égal à {0}.")
	});

});