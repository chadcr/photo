$(function() {

    function getPhotos() {
        const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1ad923b8171b45bf1e9695467b1115a1&user_id=75191534%40N04&sort=date-taken-desc&extras=url_h&format=json&nojsoncallback=1";
        $.get(url, function(data){
            $.each(data.photos.photo, function(i,item){
                let a = document.createElement("a");
                a.setAttribute('id','photo_cell');
                $("<img/>").attr("src", item.url_h).appendTo(a);
                let grid = document.getElementById("photo_grid");
                grid.appendChild(a);
            });
        });
    }

    getPhotos();
});