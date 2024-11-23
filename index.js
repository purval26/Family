var urls = [];
var files = require('fs').readdirSync('.');
files.forEach(function(file) {
  if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif') || file.endsWith('.mp4')) {
    urls.push('./' + file);
  }
});

function downloadAll() {
  // Ask for user confirmation
  var userConfirmed = confirm("Do you want to download " + urls.length + " files?");
  if (userConfirmed) {
      for (var i = 0; i < urls.length; i++) {
          forceDownload(urls[i], urls[i].substring(urls[i].lastIndexOf('/') + 1, urls[i].length));
      }
  } else {
      console.log("Download cancelled by the user.");
  }
}

function forceDownload(url, fileName) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function() {
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