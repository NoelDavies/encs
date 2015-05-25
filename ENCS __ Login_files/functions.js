$(window).ready(function(){
	// Variables
	var loginTrigger = $('#trigger-login'),
		contactTrigger = $('#trigger-contact'),
		contactStatus = false,
		html = $('html'),
		memberFilterTrigger = $('#memberFilterTrigger'),
		memberFilterStatus = false;
		updatesFilterForm = $('#updatesFilterForm');
	
	// Functions
	var animateLoginWindow = function(){
		loginTrigger.parent()
					.find('form')
					.animate({
						top: 0
					}, 500);
	}

	var animateContactWindow = function(){
		var form = contactTrigger.parent().find('form'),
			newOffset;
		if (contactStatus) {
			contactStatus = false;
			newOffset = 0;
		} else {
			contactStatus = true;
			newOffset = -form.height();
		}
		contactTrigger.parent()
					  .animate({
					  	top: newOffset
					  }, 500);
	}

	if (loginTrigger.length) {
		loginTrigger.click(function(e){
			e.preventDefault();
			(html.hasClass('csstransitions')) ? loginTrigger.parent().addClass('show-login-form') 
											  : animateLoginWindow();
		});
	}
	
	$("#identify").change(function(){
		
		$.ajax({
			type: "POST",
			url: "/tools/shop/calculate",
			data: {'data': $("#identify").val()},
			success: function(data){
				$("#data-insert li:first").nextAll().remove();
				setTimeout(function(){
					$("#data-insert li:first").after(data);
				},10)
				doOgone();
			},
			
		});
	})

	if (contactTrigger.length) {
		contactTrigger.click(function(e){
			e.preventDefault();
			if (contactTrigger.hasClass('asc')) {
				contactTrigger.removeClass('asc');
				contactTrigger.addClass('desc');
			} else {
				contactTrigger.removeClass('desc');
				contactTrigger.addClass('asc');
			}
			(html.hasClass('csstransitions')) ? contactTrigger.parent().toggleClass('show-contact-form') 
											  : animateContactWindow();
		});
	}
	
	if (memberFilterTrigger.length) {
		memberFilterTrigger.click(function(e){
			memberFilterTrigger.parent().toggleClass('visible');
			/*
			var filters = memberFilterTrigger.parent().find('.filters');
			if (memberFilterStatus) {
				filters.animate({ top: '-150%' }, 250);
				memberFilterStatus = false;
			} else {
				filters.animate({ top: 35 }, 250);
				memberFilterStatus = true;
			}
			*/
		});
	}

	//custom input style
	 $('.custom-select').customSelect();
	
	// Contact form submission check
	function isValidEmailAddress(emailAddress) {
	    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	    return pattern.test(emailAddress);
	};
	
	function fieldCheck(value) {
		if (value.length != 0) {
			return true;
		} else {
			return false;
		}
	}
	
	$('#contactSubmit').click(function(e){
		e.preventDefault();
		var contactForm = $('form#contactForm');
		var contactName = $('#contactName').val();
		var contactEmail = $('#contactEmail').val();
		//var contactTelephone = $('#contactTelephone').val();
		var contactMessage = $('#contactMessage').val();
		
		contactForm.find('input,textarea').removeClass('error');
		
		nameValid = fieldCheck(contactName);
		emailValid = isValidEmailAddress(contactEmail);
		//telephoneValid = fieldCheck(contactTelephone);
		messageValid = fieldCheck(contactMessage);
		
		if (nameValid && emailValid && messageValid) {
			contactForm.submit();
		} else {
			if (!nameValid) { $('#contactName').addClass('error'); }
			if (!emailValid) { $('#contactEmail').addClass('error'); }
			//if (!telephoneValid) { $('#contactTelephone').addClass('error'); }
			if (!messageValid) { $('#contactMessage').addClass('error'); }
		}
	});
	
	$('.updateFilterSelect').change(function(){
		$(updatesFilterForm).submit();
	});
	
	// Training stars
	
	$(".star-select").click(function() {
		var container = $(this).parent();
		var reviewForm = $(this).parent().parent().parent();
		var starNum = $(this).attr('data-num');

		if ($(this).hasClass('star-empty')) {
			for (x=1;x<=starNum;x++) {
				var star = $(container).find("li[data-num='"+x+"']");
				if ($(star).hasClass('star-empty')) {
					$(star).removeClass('star-empty');
				}
				if (!$(star).hasClass('star-full')) {
					$(star).addClass('star-full');
				}
			}
		} else {
			for (x=5;x>starNum;x--) {
				var star = $(container).find("li[data-num='"+x+"']");
				if ($(star).hasClass('star-full')) {
					$(star).removeClass('star-full');
				}
				if (!$(star).hasClass('star-empty')) {
					$(star).addClass('star-empty');
				}
			}
		}
		
		var ratingInput = $(reviewForm).find("input[name='review[rating]']");
		console.log(ratingInput);
		$(ratingInput).val(starNum);
	});
	
	$(function() {
		 $('input, textarea').placeholder();
	});

	//ie custom radio/checkbox fix
	var checkStatus = function(el){
		if (!el.is(':disabled')) {
			var elements = [];
			
			if (el[0].type === 'checkbox') {
				elements = el; 
			} else {
				var elements = $('input[name=' + el.attr('name') + ']');
			}
			
			elements.each(function(){
				var e = $(this),
					span = e.next('label').find('span');

				if (e.is(':checked')) {
					e.addClass('checked');
				} else {
					e.removeClass('checked');
				}
				
				span.css('visibility', 'hidden');
				setTimeout(function(){ span.css('visibility', 'visible'); }, 10);
			});
		}
	}

	// Fix checkbox/radiobutton :checked status
	var checkboxesAndRadiobuttons = $('input[type=checkbox], input[type=radio]');
	checkboxesAndRadiobuttons.each(function(){
		var el = $(this),
			label = el.next('label');
		
		checkStatus(el, label);
		el.change(function(){ checkStatus(el) });
		label.click(function(){ el[0].checked = (el[0].checked) ? false : true; setTimeout(function(){ checkStatus(el); }, 10); });
	});

	/**
	 * Team functionality
	 */
	var employeeFilter = $('#filter-employee-list'),
		employeeList = $('#employee-list');
		employees = undefined;

	var filterEmployees = function(tag){
		if (employees === undefined) return;

		var pattern = new RegExp(tag);

		employees.each(function(){
			var employee = $(this),
				eTag = employee.attr('data-type');

			if (pattern.test(eTag)) {
				employee.addClass('visible');
			} else {
				employee.removeClass('visible');
			}
		});
	}

	if (employeeFilter.length && employeeList.length){
		var triggers = employeeFilter.find('li'),
			tFirstTag = $(triggers[0]).attr('data-tag');

		employees = employeeList.find('.employee');
		filterEmployees(tFirstTag);

		triggers.click(function(){
			var trigger = $(this),
				tTag = trigger.attr('data-tag');

			triggers.removeClass('active');
			trigger.addClass('active');

			filterEmployees(tTag);
		});
	}
	
});

var doOgone = function(){
	$.ajax({
		type: "POST",
		url: "/tools/shop/ogone/init",
		data: {'data': $("#identify").val()},
		success: function(data){
			$("#ogone").html(data);
		},
		
	});
}
