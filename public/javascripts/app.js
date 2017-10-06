var LAT = {
	init: function() {
		LAT.bindEvents();
	},
	bindEvents: function() {
		var activeElement = document.querySelector('.job-list__inner.active');

		document.querySelector('.job-list__nav-prev').addEventListener('click', function() {
			if (activeElement.previousElementSibling.classList.contains('job-list__inner')) {
				document.querySelectorAll('.job-list__inner').forEach(function(item, i) {
					item.classList.remove('active');
				});
				
				activeElement.previousElementSibling.classList.add('active');
				activeElement = activeElement.previousElementSibling;
			}
		});
		
		document.querySelector('.job-list__nav-next').addEventListener('click', function() {			
			if (activeElement.nextElementSibling) {
				document.querySelectorAll('.job-list__inner').forEach(function(item, i) {
					item.classList.remove('active');
				});

				activeElement.nextElementSibling.classList.add('active');
				activeElement = activeElement.nextElementSibling;
			}
		});
	}
};

document.addEventListener("DOMContentLoaded", function(event) { 
  LAT.init();
});