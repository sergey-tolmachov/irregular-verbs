$(document).ready(function() { 
    var verbs = [];
    var counter = 0;
    $('.table-wrapper').each(function(){
        verbs = $(this).find('.verb').text();
        console.log(verbs);
        
    });
    
});

