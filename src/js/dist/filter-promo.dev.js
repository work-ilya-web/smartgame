"use strict";

if ($('#user').length > 0) {
  var stepSlider = document.getElementById('user');
  noUiSlider.create(stepSlider, {
    start: [50],
    step: 1,
    format: {
      to: function to(value) {
        return Math.round(value) + '';
      },
      from: function from(value) {
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
  var stepSlider = document.getElementById('price');
  noUiSlider.create(stepSlider, {
    start: [300],
    step: 1,
    format: {
      to: function to(value) {
        return Math.round(value) + '';
      },
      from: function from(value) {
        return Math.round(value) + '';
      }
    },
    range: {
      'min': [0],
      'max': [1000]
    }
  });
  var stepSliderValueElement = document.getElementById('price-value');
  stepSlider.noUiSlider.on('update', function (values, handle) {
    stepSliderValueElement.innerHTML = values[handle];
  });
}