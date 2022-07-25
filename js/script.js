$(document).ready(() => {
    $('#modals-div').load("modals.html");
    const resizeObserver = new ResizeObserver(size=>updateScreenSize());  
    resizeObserver.observe(document.body);    
    var audioBg = document.getElementById("audioBg");
    var musicActive = false;

    function startAudio(){
        $("#iconMusic").attr('class', 'ib-pause'); 
        audioBg.volume = 0.2
        audioBg.play()
        musicActive = true
    }
    function pauseAudio(){
        $("#iconMusic").attr('class', 'ib-play'); 
        audioBg.pause()
        musicActive = false
    }

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
        $(".rad-img").height($("#caruselDiv").width()+100)  
    }

    $("#musicControl").click(function (e) {
        musicActive ?  pauseAudio() : startAudio();
    });

    $('#addressAnimation').click( ()=> {
        $("#addressFrame").attr("width", $("body").width() * 0.975);
        $("#addressFrame").attr("height", $("body").height() * 0.75);
    })

    $("#babyAnimation").click((e)=>{ 
        setTimeout(() => {
            $(".rad-img").height($("#caruselDiv").width()+100)  
        }, 200); 
    });

    $("#openIvt").click((e)=>{
        let animateLeft="animate__animated animate__slower animate__slideOutLeft"
        let animateLeftRight="animate__animated animate__slower animate__slideOutRight"
        
        $("#cs1").addClass(animateLeft); 
        $("#cl-l").addClass(animateLeft); 
        $(".open-aux").addClass(animateLeft); 

        $("#cs2").addClass(animateLeftRight); 
        $("#cl-r").addClass(animateLeftRight); 

        setTimeout(() => {
            $(".card-init").css("z-index", "-1050");
        }, 2500);
        
        startAudio();
        
    });
    
    /* $(document).one("click", function () {
        startAudio();
    }); */
});