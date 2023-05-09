// Define the form elements that can be added to the form
const formElements = [
    { type: 'text', label: 'Text Input' },
    { type: 'textarea', label: 'Text Area' },
    { type: 'checkbox', label: 'Checkbox' },
    { type: 'radio', label: 'Radio Button' },
    { type: 'select', label: 'Dropdown List' }
  ];
  
  // Get references to the form elements
  const formElementsContainer = document.getElementById('form-elements');
  const formPreview = document.getElementById('form-preview');
  
  // Create the form element buttons and add them to the form
  formElements.forEach(element => {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', 'btn-secondary', 'mb-2', 'col-12');
    button.textContent = element.label;
    button.addEventListener('click', () => addFormElement(element.type));
    formElementsContainer.appendChild(button);
  });
  
  // Add a form element to the form preview
  function addFormElement(type) {
    let element;
    switch (type) {
      case 'text':
        element = createTextInput();
        break;
      case 'textarea':
        element = createTextArea();
        break;
      case 'checkbox':
        element = createCheckbox();
        break;
      case 'radio':
        element = createRadioButton();
        break;
      case 'select':
        element = createDropdownList();
        break;
      default:
        return;
    }
    formPreview.appendChild(element);
  }
  
  // Create a text input element
  function createTextInput() {
    const group = createFormGroup();
    const label = createLabel('Text Input');
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('form-control');
    input.placeholder = 'Enter text';
    group.appendChild(label);
    group.appendChild(input);
    return group;
  }
  
  // Create a text area element
  function createTextArea() {
    const group = createFormGroup();
    const label = createLabel('Text Area');
    const textarea = document.createElement('textarea');
    textarea.classList.add('form-control');
    textarea.placeholder = 'Enter text';
    group.appendChild(label);
    group.appendChild(textarea);
    return group;
  }
  
  // Create a checkbox element
  function createCheckbox() {
    const group = createFormGroup();
    const label = createLabel('Checkbox');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('form-check-input');
    const checkboxLabel = createLabel();
    checkboxLabel.classList.add('form-check-label');
    checkboxLabel.textContent = 'Checkbox label';
    group.appendChild(label);
    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('form-check');
    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(checkboxLabel);
    group.appendChild(checkboxWrapper);
    return group;
    }
    
    // Create a radio button element
    function createRadioButton() {
    const group = createFormGroup();
    const label = createLabel('Radio Button');
    const radioWrapper = document.createElement('div');
    radioWrapper.classList.add('form-check');
    const radio1 = createRadioButtonOption('radio-group', 'Radio option 1');
    const radio2 = createRadioButtonOption('radio-group', 'Radio option 2');
    radioWrapper.appendChild(radio1);
    radioWrapper.appendChild(radio2);
    group.appendChild(label);
    group.appendChild(radioWrapper);
    return group;
    }
    
    // Create a radio button option
    function createRadioButtonOption(name, label) {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.classList.add('form-check-input');
    const radioLabel = createLabel();
    radioLabel.classList.add('form-check-label');
    radioLabel.textContent = label;
    const radioWrapper = document.createElement('div');
    radioWrapper.classList.add('form-check');
    radioWrapper.appendChild(radio);
    radioWrapper.appendChild(radioLabel);
    return radioWrapper;
    }
    
    // Create a dropdown list element
    function createDropdownList() {
    const group = createFormGroup();
    const label = createLabel('Dropdown List');
    const select = document.createElement('select');
    select.classList.add('form-select');
    const option1 = createOption('Option 1');
    const option2 = createOption('Option 2');
    select.appendChild(option1);
    select.appendChild(option2);
    group.appendChild(label);
    group.appendChild(select);
    return group;
    }
    
    // Create a form group
    function createFormGroup() {
    const group = document.createElement('div');
    group.classList.add('mb-3');
    return group;
    }
    
    // Create a label
    function createLabel(text = '') {
    const label = document.createElement('label');
    label.textContent = text;
    return label;
    }
    
    // Create an option
    function createOption(text) {
    const option = document.createElement('option');
    option.value = text.toLowerCase();
    option.textContent = text;
    return option;
    }
    
    // Handle form submission
    formPreview.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formPreview);
    const data = {};
    for (let [key, value] of formData.entries()) {
    data[key] = value;
    }
    console.log(data);
    });
