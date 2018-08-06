


$(function(){

    $("#player-simple").load("../../page/player-simple/player-simple.html")
    $("#content").load("../../page/listen/listen.html")



    //切换
    $(".title-center-menu").click(function() {



        $("#content").load($(this).data("send"), function(){

        })



    })


})