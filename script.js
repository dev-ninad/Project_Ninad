function toggle(element) {
    // Toggling the checked state of a radio input.
    // Toggling the display style of an element with the class description

    
    var radioInput = element.querySelector('#productRadio');

    if (radioInput) {
      radioInput.checked = !radioInput.checked;
    
    }
    const description = element.querySelector('.description');
    if (description.style.display === 'none') {
      description.style.display = 'block';
    }

  }
