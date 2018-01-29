//carga los libros
var cargaLibros = (function(){
    var books = [
        {
            src : 'img/books/13.jpg',
            title : 'Luna Nueva',
            price : '$12.000'
        },
        {
            src : 'img/books/14.jpg',
            title : 'Historia del Capitalismo en Chile',
            price : '$10.000'
        },
        {
            src : 'img/books/15.jpg',
            title : 'How to change the world',
            price : '$18.000'
        }
        
    ];
    
    return {
        data: books
    }
})();



var controller = (function(ctrlLibros){

    // UI
    var lastBooks = document.getElementsByClassName('last-books')[0];

    

    for (var i = 0 ; i < ctrlLibros.data.length ; i++){
        lastBooks.innerHTML += '<div style="padding-top: 20px;" class="col-xs-12 col-sm-6 col-md-4"><img src="' + ctrlLibros.data[i].src + '" class="book-cover"><p class="book-title">' + ctrlLibros.data[i].title + '</p><p class="price">' + ctrlLibros.data[i].price + '</p></div>';
    }

    

})(cargaLibros);
