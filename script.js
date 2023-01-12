function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
function addInput() {
  let input = document.querySelectorAll('input[type=file]');
  console.log(input);
  let i = input.length

  if (input.length <= 2) {


    let newInput = document.createElement('input');
    newInput.type = 'file';
    newInput.id = ` image ${i}`;
    document.querySelector('.container').appendChild(newInput);
  }

};




let plus = document.querySelector('#plus');

plus.addEventListener('click', addInput);