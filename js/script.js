
$(document).ready(function() {
    screen.orientation.lock("natural");   // webkit only

    $('#audioBg').prop("volume", 0.1);
    const resizeObserver = new ResizeObserver(size=>updateScreenSize());  
    resizeObserver.observe(document.body);
    $('#modals-div').load("modals.html");
    $('[id$=Animation]').one('click', function(event) {
        $("#"+this.id).removeClass("animate__infinite");
    });
    
    //getDots();
    function getDots(){
        let style;
        let animationClass = "animate__animated animate__backInDown";
        $("#puntitos").empty();
        for (let i = 1; i < 100; i++) {
            style = "position: absolute;"+
            "z-index: -1;"+
            "left: "+getRandom(0,$("html").width()-10)+"px;"+
            "top: "+getRandom(0,$("html").height())+"px;"+
            "background: #9D7587;"+
            "height: "+getRandom(5,10)+"px;"+
            "width: "+getRandom(5,10)+"px;"+
            "border-radius: 5px;"+
            "transform: rotate3d(1, 1, 1, "+getRandom(15,45)+"deg);"+
            "--animate-duration: 10s;"+
            "--animate-delay: "+getRandom(0,1)+"s;"
            $("#puntitos").append("<div style='"+style+"' class='"+animationClass+"'></div>");
        }
    }
    

    function getRandom(min, max) {
        return (Math.random() * (max - min ) + min); 
    }
    function updateScreenSize(){
        getDots();
    }

    $('#addressAnimation').click( ()=> {
        $("#addressFrame").attr("width", $("body").width() * 0.975);
        $("#addressFrame").attr("height", $("body").height() * 0.75);
    })
});