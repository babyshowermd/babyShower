
$(document).ready(function() {
    document.getElementById('audioBg').addEventListener("mouseup", tapOrClick, false);
    document.getElementById('audioBg').addEventListener("touchend", tapOrClick, false);

    function tapOrClick(e) {
        $('#audioBg')[0].play();
    }
    $('#audioBg').prop("volume", 0.1);
    $('#audioBg')[0].play()
    $('#interaccionId').modal('show');
    const resizeObserver = new ResizeObserver(size=>updateScreenSize());  
    resizeObserver.observe(document.body);
    $('#modals-div').load("modals.html");
    $('[id$=Animation]').one('click', function(event) {
        $("#"+this.id).removeClass("animate__infinite");
    });

    for (let i = 0; i < 30; i++) {
        topW = getRandom(0,1) + "rem"
        left = getRandom(.25,2.5) + "rem"
        /* style = "position: relative;"+
            "z-index: -1;"+
            "background: #a87e61;"+
            "height: "+getRandom(2,3)+"px;"+
            "width: "+getRandom(2,3)+"px;"+
            "border-radius: 5px;"+
            "transform: rotate3d(1, 1, 1, "+getRandom(15,45)+"deg);"+
            "--animate-delay: "+getRandom(0,1)+"s;" */
        style = "top:"+topW+"; left:"+left+"; --animate-duration:" + getRandom(12,15) + "s"
        delay = Math.round(getRandom(0,1))
        $("#stars").append('<div class="ib-star-full animate__backInDown animate__animated animate__delay-'+delay+'s animate__infinite" style="'+style+'"></div>');
    }

    function getRandom(min, max) {
        return (Math.random() * (max - min ) + min); 
    }
    function updateScreenSize(){
        $("#lines").empty();
        let mainH = $(".main").height();
        let lines = $(".general").width() / 10 * 0.7;
        let height = mainH + "px";
        for (let i = 0; i < lines; i++) {
            left = (i*10) + "px"
            style = "left:"+left+"; height:"+ height
            $("#lines").append('<div class="v-line" style="'+style+'"></div>');
        }
        reSize =  0.018*($(".footer").width()-360) + 23
        $(".osito-img").css("width",  reSize + "rem");
        $(".gift-foot").css("height", mainH - $(".main-info").height() + "px")
    }

    $('#addressAnimation').click( ()=> {
        $("#addressFrame").attr("width", $("body").width() * 0.975);
        $("#addressFrame").attr("height", $("body").height() * 0.75);
    })
});