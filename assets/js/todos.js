//ul - already exist and not change
//li - possible to be changed in future
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(300, function() {
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    //enter is 13
    if(event.which === 13) {
        var todoText = $(this).val(); 
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});