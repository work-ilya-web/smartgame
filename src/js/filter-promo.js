if ($('#user').length > 0) {
	var stepSlider = document.getElementById('user');
	noUiSlider.create(stepSlider, {
		start: [50],
		step: 1,
		format: {
			to: function (value) {
				return Math.round(value) + '';
			},
			from: function (value) {
				return Math.round(value) + '';
			}
		},
		range: {
			'min': [1],
			'max': [200]
		}
	});
	var stepSliderValueElement = document.getElementById('user-value');
	stepSlider.noUiSlider.on('update', function (values, handle) {
		stepSliderValueElement.innerHTML = values[handle];
	});
}

if ($('#price').length > 0) {
	var stepSliderPrice = document.getElementById('price');
	noUiSlider.create(stepSliderPrice, {
		start: [300],
		step: 1,
		format: {
			to: function (value) {
				return Math.round(value) + '';
			},
			from: function (value) {
				return Math.round(value) + '';
			}
		},
		range: {
			'min': [0],
			'max': [1000]
		}
	});
	var stepSliderValueElementPrice = document.getElementById('price-value');
	stepSliderPrice.noUiSlider.on('update', function (values, handle) {
		stepSliderValueElementPrice.innerHTML = values[handle];
	});
}

