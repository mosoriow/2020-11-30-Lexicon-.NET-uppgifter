function createBook(selector,title,author,isbn) {
    var divID="";

    $(selector).append(
        $("<div>")
            .attr('id',function() {
                    divID='book'+($(selector+" div").length+1).toString();
                    return divID; // add the book id
                }
            )
            .css({ "border": "medium none" })

            .append($("<p>").text(title)
                .addClass("title")
            )
            .append($("<p>").text(author)
                .addClass("author")
            )
            .append($("<p>").text(isbn)
                .addClass("isbn")
            )
            .append($("<button>").text("Select")
                .on("click", function () {
                        $('#'+divID).css({ "border": "2px solid blue" });
                    }
                )
            )
            .append($("<button>").text("Deselect")
                .on("click", function () {
                        $('#'+divID).css({ "border": "medium none" });
                    }
                )
            )
    );
}

