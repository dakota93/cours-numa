$(function(){
    $('aside a').click(function(event){
        //alert('clic');

        //ici je rend le clic sur le liens inexistant
        event.preventDefault();
        console.log ($(this).attr('href'));

        var monHref=$(this).attr('href');
        $('figure img').attr("src",monHref);

       
        var monAlt=$(this).attr('title');
        $('figcaption <h3>').html(monAlt);
});

});