$(".agregar").on("click",function(e){
    e.preventDefault();

    var valor = $("#newText").val();
    //alert(valor);
    if(valor != ""){
        var lista = $(".Lista");
        var div = $("<div>");
        var li = $("<li>");
        var entrada1 = $("<button>");
        var entrada2 = $("<button>");
        var p = $("<p>");

        p.html(valor);
        entrada1.addClass("checar");
        entrada1.attr("type","text");
        entrada2.addClass("del");
        entrada2.attr("type","text");
        entrada1.html("Check");
        entrada2.html("Delete");
        li.append(p);
        li.append(entrada1);
        li.append(entrada2);
        li.addClass("lis");
        div.append(li);
        lista.append(div);
        alert(lista);
        /*$(".Lista").append(`
            <div><li class = "lis"><p>${valor}</p><button class = "checar" type = "text">Check</button><button class = "del" type = "text">Delete</button><br></div>`
        );*/
    }
})
$(".Lista").on("click",".checar",function(e){
    e.preventDefault();
    $(this).parent().toggleClass("chec");
})
$(".Lista").on("click",".del",function(e){
    e.preventDefault();
    $(this).parent().remove();
})
