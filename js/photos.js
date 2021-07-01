$(function() {

    function getPhotos() {
        const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b94e5e641cb3bb29dedfa4587b6f2373&user_id=chadcantreed&tags=crp0&sort=date-taken-asc&extras=url_h&format=json&nojsoncallback=1";
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