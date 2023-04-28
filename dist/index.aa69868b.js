$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
$("button.navbar-toggler").click(function() {
    $(this).hasClass("open") ? $(this).removeClass("open") : $(this).addClass("open");
});
$(".year").text(new Date().getFullYear());
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
};
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = winScroll / height * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

//# sourceMappingURL=index.aa69868b.js.map
