
$(document).ready(function(){
	

	 $('button').on('click', function() {

        var muppet = $(this).data('name');

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + muppet + "&api_key=l7GZ8igzD4RC9FKDV7rU0K4OxqBVbJLd&limit=10";


        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {

                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var muppetDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var muppetImage = $('<img/>');

                    muppetImage.addClass('muppetImg')

                    muppetImage.attr('src', results[i].images.fixed_height.url);

                    muppetImage.attr('data-still', results[i].images.fixed_height_still.url)

                    muppetImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    muppetDiv.append(p);

                    muppetDiv.append(muppetImage);

                    muppetDiv.prependTo($('#gifs'));
                }

                $('.muppetImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var muppets = [''];


        $('#thebutton').on('click', function(){
            var muppetButton = $("#gif-input").val();

            var newButton = $("<button/>").addClass( "btn btn-info muppet").attr('data-name',muppetButton).html(muppetButton).css({'margin': '5px'});
            
            $("#muppetsbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + muppetButton + "&api_key=l7GZ8igzD4RC9FKDV7rU0K4OxqBVbJLd&limit=10";
                console.log(muppetButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var muppetDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var muppetImage = $('<img/>');

                    muppetImage.addClass('muppetImg')

                    muppetImage.attr('src', results[i].images.fixed_height_still.url);

                    muppetImage.attr('data-still', results[i].images.fixed_height_still.url)

                    muppetImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    muppetDiv.append(p);

                    muppetDiv.append(muppetImage);

                    muppetDiv.prependTo($('#gifs'));
                }

                $('.muppetImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});