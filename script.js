
function addInput() {
  let input = document.querySelectorAll('input[type=file]');
  console.log(input);
  let i = input.length

  if (input.length <= 2) {


    let newDiv = document.createElement('div');

    newDiv.innerHTML = `<input type="file" name="userFile${i}" oninput="pic${i}.src=window.URL.createObjectURL(this.files[0])" />
    <span><?= $messages['userFile'${i}] ?? '' ?></span>
     <br><img id =pic${i} src="" height="200" alt="Image preview" /> <br>`
    document.querySelector('form').appendChild(newDiv);
  }

};




let plus = document.querySelector('#plus');

plus.addEventListener('click', addInput);