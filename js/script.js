
$(document).ready(function() {
    $('#interaccionId').modal('show');
    const resizeObserver = new ResizeObserver(size=>updateScreenSize());  
    resizeObserver.observe(document.body);
    $('#modals-div').load("modals.html");
    $('[id$=Animation]').one('click', function(event) {
        $("#"+this.id).removeClass("animate__infinite");
    });

    for (let i = 0; i < 36; i++) {
        topW = getRandom(0,5) + "rem"
        left = getRandom(0,1.5) + "rem"
        style = "top:"+topW+"; left:"+left+"; --animate-duration:" + getRandom(5,6) + "s"
        delay = Math.round(getRandom(0,4))
        $("#stars").append('<i class="ib-star-full animate__heartBeat animate__animated animate__delay-'+delay+'s animate__infinite" style="'+style+'"></i>');
    }

    function getRandom(min, max) {
        return (Math.random() * (max - min ) + min); 
    }
    function updateScreenSize(){
        $("#lines").empty();
        let lines = $(".general").width() / 10 * 0.7;
        let height = $(".main").height() + "px";
        for (let i = 0; i < lines; i++) {
            left = (i*10) + "px"
            style = "left:"+left+"; height:"+ height
            $("#lines").append('<div class="v-line" style="'+style+'"></div>');
        }
        reSize =  0.018*($(".footer").width()-360) + 23
        $(".osito-img").css("width",  reSize + "rem");
    }
});