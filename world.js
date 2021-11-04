window.onload=function(){
    let search = document.getElementById("lookup");
    var url = 'http://localhost:8888/info2180-lab5/world.php?country=';

    search.addEventListener('click', function(e){

        console.log('button clicked')
        console.log('countries returned')

        e.preventDefault();
        var s = document.getElementById("country").value;
        var req = new XMLHttpRequest();

        req.onreadystatechange = function() {
            if (req.readyState == XMLHttpRequest.DONE) {
                if (req.status == 200){	
                    var r = req.responseText;
                    var result = document.getElementById('result');
                    result.innerHTML = r;
                }else{
					alert("There was a problem with the request.");
                }
            }
        }
        console.log(s);
        req.open('GET', url+s, true);
        req.send();
    });
} 