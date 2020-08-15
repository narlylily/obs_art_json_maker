document.addEventListener('DOMContentLoaded', () => {
    var json = [];
    function readMultipleFiles(evt) {
        //Retrieve all the files from the FileList object
        var files = evt.target.files; 
        
        if (files) {
            for (var i=0, f; f=files[i]; i++) {
                var r = new FileReader();
                r.onload = (function(f) {
                    return function(e) {
                        if(f.type.includes("image")) {
                            json.push({
                            "path" : "images/" + f.name,
                            "artist" : "tbd",
                            "type" : "image"
                            });
                        } else if (f.type.includes("video") || f.type.includes("application/x-mpegURL")) {
                            json.push({
                            "path" : "images/" + f.name,
                            "artist" : "tbd",
                            "type" : "video"
                            });
                        } else {
                            console.log(f.name + ' did not load.');
                        }
                    };
                })(f);
                r.readAsText(f);
            }   
        } else {
            alert("Failed to load files"); 
        }
    }

    function displayJSON() {
        document.getElementById('response').innerHTML = JSON.stringify(json, null, 4);
    }

    document.getElementById('fileinput').addEventListener('change', readMultipleFiles, false);
    document.getElementById('display').addEventListener('click', displayJSON, false);
})