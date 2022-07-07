$(document).ready(function() {
    //$('#interaccionId').modal('show');
    $('[id$=Animation]').one('click', function(event) {
        $("#"+this.id).removeClass("animate__infinite");
    });
});