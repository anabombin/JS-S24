// toggle hid & unhide windows
$( document ).ready(function() {

    // Close travel record info window
    $("#less1").click(function(){
        $("#change").slideToggle();
        $("#gen-tool").css("display","none");
        $("#send").css("display","none");
        $("body").css("background-image","url('images/changing.png')");
    });

    $("#less2").click(function(){
        $("#gen-tool").slideToggle();
        $("#change").css("display","none");
        $("#send").css("display","none");
        $("body").css("background-image","url('images/tool.png')");
    });

    $("#less3").click(function(){
        $("#send").slideToggle();
        $("#gen-tool").css("display","none");
        $("#change").css("display","none");
        $("body").css("background-image","url('images/sender.png')");
    });

    $("#less4").click(function(){
        $("#links").slideToggle();
    });

});