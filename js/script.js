$(document).ready(function() {
    const resizeObserver = new ResizeObserver(size=>updateScreenSize());  
    resizeObserver.observe(document.body);    
    var audioBg = document.getElementById("audioBg");

    function startAudio(){
        $("#iconMusic").attr('class', 'ib-pause'); 
        audioBg.volume = 0.05
        audioBg.play()
    }
    function pauseAudio(){
        $("#iconMusic").attr('class', 'ib-play'); 
        audioBg.pause()
    }
    /* $(window).focusout(function (e) { 
        console.log("out");
        pauseAudio();
        musicActive = false
    }); */

    $('[id$=Animation]').one('click', function(event) {
        $("#"+this.id).removeClass("animate__infinite");
    });

    for (let i = 0; i < 30; i++) {
        topW = getRandom(0,1) + "rem"
        left = getRandom(.25,2.5) + "rem"
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
        reSize =  0.008*($(".footer").width()-360) + 23
        $(".osito-img").css("width",  reSize + "rem");
        //$(".gift-foot").css("height", mainH - $(".main-info").height() + "px")
    }

   
    var musicActive = false;
    $("#musicControl").click(function (e) {
        console.log(musicActive);
        musicActive ?  pauseAudio() : startAudio();
        musicActive  = !musicActive
    });

    $('#addressAnimation').click( ()=> {
        $("#addressFrame").attr("width", $("body").width() * 0.975);
        $("#addressFrame").attr("height", $("body").height() * 0.75);
    })

    $("#musicControl").click()
    $('#modals-div').load("modals.html");
});