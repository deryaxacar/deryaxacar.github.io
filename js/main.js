

$(document).ready(function(){
    $("#menu-1").click(function(){
        $("#menu-1").css("color", "var(--menu-active-text-color)");
        $("#menu-2").css("color", "var(--menu-text-color)");
        $("#menu-3").css("color", "var(--menu-text-color)");
        $("#menu-4").css("color", "var(--menu-text-color)");
        $("#menu-1-container").show();
        $("#menu-2-container").hide();
        $("#menu-3-container").hide();
        $("#menu-4-container").hide();
    });
    $("#menu-2").click(function(){
        $("#menu-1").css("color", "var(--menu-text-color)");
        $("#menu-2").css("color", "var(--menu-active-text-color)");
        $("#menu-3").css("color", "var(--menu-text-color)");
        $("#menu-4").css("color", "var(--menu-text-color)");
        $("#menu-1-container").hide();
        $("#menu-2-container").show();
        $("#menu-3-container").hide();
        $("#menu-4-container").hide();
    });
    $("#menu-3").click(function(){
        $("#menu-1").css("color", "var(--menu-text-color)");
        $("#menu-2").css("color", "var(--menu-text-color)");
        $("#menu-3").css("color", "var(--menu-active-text-color)");
        $("#menu-4").css("color", "var(--menu-text-color)");
        $("#menu-1-container").hide();
        $("#menu-2-container").hide();
        $("#menu-3-container").show();
        $("#menu-4-container").hide();
    });
    $("#menu-4").click(function () {
        $("#menu-1").css("color", "var(--menu-text-color)");
        $("#menu-2").css("color", "var(--menu-text-color)");
        $("#menu-3").css("color", "var(--menu-text-color)");
        $("#menu-4").css("color", "var(--menu-active-text-color)");
        $("#menu-1-container").hide();
        $("#menu-2-container").hide();
        $("#menu-3-container").hide();
        $("#menu-4-container").show();
    });
});

document.body.onload = () => {

    $("#menu-1").css("color", "var(--menu-text-color)");
    $("#menu-2").css("color", "var(--menu-active-text-color)");
    $("#menu-3").css("color", "var(--menu-text-color)");
    $("#menu-4").css("color", "var(--menu-text-color)");
    $("#menu-1-container").hide();
    $("#menu-2-container").show();
    $("#menu-3-container").hide();
    $("#menu-4-container").hide();

}