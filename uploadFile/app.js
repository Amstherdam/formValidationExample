const error = document.getElementById('error')

function checkFileSize() {
  const FS = document.getElementById("FS");
  const files = FS.files;

  if (files.length > 0) {
    if (files[0].size > 75 * 1024) {
      FS.setCustomValidity("The selected file must not be larger than 75 kB");
      error.textContent = 'The selected file must not be larger than 75 kB'
      console.log('fazla')
      return;
    }
  }

  FS.setCustomValidity("");
  error.textContent = ''
}

window.onload = () => { 
    document.getElementById('FS').onchange = checkFileSize
}


//? burada dosyanın istenilen boyuttan fazla olursa yuklenmemesi isteniliyor ama isim geliyor ? 


