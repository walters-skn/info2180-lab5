window.onload=function(){
    let search = document.getElementById("lookup");
    let searchbtn2 = document.getElementById("lookup-cty")
    // var url = 'http://localhost:8888/info2180-lab5/world.php?country=';

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
        req.open('GET', 'http://localhost:8888/info2180-lab5/world.php?country='+s, true);
        req.send();
    });

    searchbtn2.addEventListener('click', function(e){
        console.log('button clicked')
        console.log('cities returned')

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
        req.open('GET', 'http://localhost:8888/info2180-lab5/world.php?country='+s+'&context=cities', true);
        req.send();
    });
} 