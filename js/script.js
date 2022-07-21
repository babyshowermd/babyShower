
$(document).ready(function() {
    screen.orientation.lock("natural");   // webkit only

    $('#audioBg').prop("volume", 0.1);
    const resizeObserver = new ResizeObserver(size=>updateScreenSize());  
    resizeObserver.observe(document.body);
    $('#modals-div').load("modals.html");
    $('[id$=Animation]').one('click', function(event) {
        $("#"+this.id).removeClass("animate__infinite");
    });

    for (let i = 0; i < 36; i++) {
    
    }

    function getRandom(min, max) {
        return (Math.random() * (max - min ) + min); 
    }
    function updateScreenSize(){

    }

    $('#addressAnimation').click( ()=> {
        $("#addressFrame").attr("width", $("body").width() * 0.975);
        $("#addressFrame").attr("height", $("body").height() * 0.75);
    })
});