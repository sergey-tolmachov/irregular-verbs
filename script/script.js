$(document).ready(function() { 
    var verbs = [];
    var verb = [];
    var counter = 0;
    $('.table-wrapper .verb').each(function(){
        verb[counter] = $(this).clone().children().remove().end().text();
        counter++;
        if(counter == 3){
            verbs.push(verb);
            counter = 0;
        }
    });
    console.log(verbs);

});

