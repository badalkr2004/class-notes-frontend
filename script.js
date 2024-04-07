function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const subIn = document.getElementById("subInput");
    const preview = document.getElementById('preview');
    const subBtn = document.getElementById("submit")
  
    const file = fileInput.files[0];

    subBtn.disabled = true;

    if (file) {
      if(subIn.value){
        if(((file.size/1024)/1024).toFixed(2) < 5){
          const formData = new FormData();
          formData.append('file', file);
          formData.append('subject',subIn.value);
         
            
          fetch('https://class-notes-sharer.vercel.app/api/upload', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            // Display uploaded image
            const imageUrl = data.data.image.url;
            const img = document.createElement('img');
            img.src = imageUrl;
            preview.appendChild(img);
            subBtn.disabled = false;
          })
          .catch(error => {
            subBtn.disabled = false;
            console.error('Error:', error)}
            );
        }else{
          alert("File Size should be less than 10 MB.")
          subBtn.disabled = false;
        }
      }else{
        subBtn.disabled = false;
        alert("Select subject")
      }
     
    } else {
      subBtn.disabled = false;
      alert('Please select an image to upload.');
    }
  }




