function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const subIn = document.getElementById("subInput");
    const preview = document.getElementById('preview');
  
    const file = fileInput.files[0];

   

    if (file && subIn.value &&  ((file.size/1024)/1024).toFixed(2) < 10) {
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
        console.log(data)
        const imageUrl = data.data.image.url;
        const img = document.createElement('img');
        img.src = imageUrl;
        preview.appendChild(img);
      })
      .catch(error => console.error('Error:', error));
    } else {
      alert('Please select an image to upload.');
    }
  }




