function supportAjaxUploadWithProgress() {
  return supportFileAPI() && supportAjaxUploadProgressEvents();

  function supportFileAPI() {
      var fi = document.createElement('INPUT');
      fi.type = 'file';
      return 'files' in fi;
  };

  function supportAjaxUploadProgressEvents() {
      var xhr = new XMLHttpRequest();
      return !! (xhr && ('upload' in xhr) && ('onprogress' in xhr.upload));
  };
}

function onProgressHandler(event) {
  var percent = Math.round(event.loaded/event.total * 100);

	$(".button").html(percent + '%');

  console.log('Upload progress: ' + percent + '%');
}

var xhr;

function processRequest()
{
	if (xhr.statusText == 'OK') {
		$('#main').html('<img src=' + xhr.responseText + '/>');
	}
}

$(document).ready(function() {

	console.log("Supports AJAX upload with progress: " + supportAjaxUploadWithProgress());

	$('#image').css('opacity', '0');

	$(".button").click(function() {
		$('#image').click();
	});

	$("#image").change(function() {
		var fileInput =  $("#image")[0];
		var file = fileInput.files[0];
		console.log("User selected: " + file.fileName);

		xhr = new XMLHttpRequest();
		xhr.open('POST', '/' + $("#login").val(), true);
		xhr.upload.addEventListener('progress', onProgressHandler, false);
		xhr.onreadystatechange = processRequest;
		xhr.setRequestHeader("X-File-Name", file.fileName);
		xhr.setRequestHeader("X-File-Size", file.fileSize);
		xhr.setRequestHeader("X-File-Type", file.type);
		xhr.setRequestHeader("Content-Type", "application/octet-stream");
		xhr.send(file);
	});

});

