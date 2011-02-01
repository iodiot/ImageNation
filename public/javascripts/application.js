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
  var percent = event.loaded/event.total * 100;
  console.log('Upload progress: ' + percent + '%');
}


$(document).ready(function() {

	console.log("Supports AJAX upload with progress: " + supportAjaxUploadWithProgress());

	$("#submit_form").css("opacity", "0");

	$(".button").click(function() {
		$("#user_image").click();
	});

	$("#user_image").change(function() {
		$("#submit_form").submit();

		/*var fileInput =  $("#user_image")[0];
		var file = fileInput.files[0];
		console.log("User selected: " + file.fileName);

		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/' + $("#user_login").val(), true);
		xhr.upload.addEventListener('progress', onProgressHandler, false);
		xhr.setRequestHeader("X-File-Name", file.fileName);
		xhr.setRequestHeader("X-File-Size", file.fileSize);
		xhr.setRequestHeader("X-File-Type", file.type);
		xhr.setRequestHeader("Content-Type", "application/octet-stream");
		xhr.send(file);*/
	});

});

