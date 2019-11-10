$(document).ready(function() {
    $('#sidebarbutton').click(function() {
        $('.ui.sidebar')
        .sidebar('toggle');
        console.log("Button Pressed");
    });
});
