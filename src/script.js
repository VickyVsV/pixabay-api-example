 function SearchImg(){
        var cur_url = document.getElementById('webUrl').value;
        $.getJSON("https://pixabay.com/api/?key=12763398-42249d3dd1db2f56d3171f8c0&q="+cur_url+"&image_type=photo", function(data){
          createHTML(data);
        });
    }

    function createHTML(data){
      //console.log(data);
      var htmlElements = "";
        for(var i = 0; i< data.hits.length; i++){
          htmlElements += '<div class="col-xs-3"><div class="imageSec"><a href="'+ data.hits[i].webformatURL +'" data-lightbox="example-set"><img class="img-responsive" src='+ data.hits[i].previewURL +' /></a></div></div>';
        }
      var imageView = document.getElementById("imageView");  
      imageView.innerHTML = htmlElements;
    }
        document.getElementById('Search').addEventListener('click', SearchImg);