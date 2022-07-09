
$(document).ready(function() {
    $('#interaccionId').modal('show');
    const resizeObserver = new ResizeObserver(size=>updateScreenSize());  
    resizeObserver.observe(document.body);
    $('#modals-div').load("modals.html");
    $('[id$=Animation]').one('click', function(event) {
        $("#"+this.id).removeClass("animate__infinite");
    });

    for (let i = 0; i < 30; i++) {
        topW = getRandom(0,5) + "rem"
        left = getRandom(0,1.5) + "rem"
        style = "top:"+topW+"; left:"+left+";"
        $("#stars").append('<i class="ib-star-full" style="'+style+'"></i>');
    }

    function getRandom(min, max) {
        return (Math.random() * (max - min ) + min); 
    }
    function updateScreenSize(){
        $("#lines").empty();
        console.log("test");
        let lines = $(".main-info").width() / 10;
        let height = $(".main-info").height() + "px";
        for (let i = 0; i < lines; i++) {
            left = (i*10) + "px"
            style = "left:"+left+"; height:"+ height
            $("#lines").append('<div class="v-line" style="'+style+'"></div>');
        }
        hodiv =  $(".footer").height() * .95
        //$(".osito-img").css("height",  hodiv  + "px");
    }
});