var urls = [
    './20241027_194842.jpg',
    './20241027_194849.jpg',
    './20241027_194900.jpg',
    './20241027_194911.jpg',
    './20241027_195145.jpg',
    './20241027_195156.jpg',
    './20241027_195453.jpg',
    './20241027_195502.jpg',
    './20241027_195513.jpg',
    './20241027_195602.jpg',
    './20241027_195608.jpg',
    './20241027_195615.jpg', 
    ];
    
    function downloadAll() {
    
    
      for (var i = 0; i < urls.length; i++) {
        forceDownload(urls[i], urls[i].substring(urls[i].lastIndexOf('/')+1,urls[i].length))
      }
    }
    function forceDownload(url, fileName){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function(){
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = fileName;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        }
        xhr.send();
    }
    