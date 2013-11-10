/**
 * Created by Abhisek on 11/10/13.
 */

$(document).ready(function(){

    init();

    var source   = $("#sample-template").html();
    var template = Handlebars.compile(source);

    $.getJSON('https://api.github.com/gists/public',function(data){
        html=template(data);
           $('#content').html(html);
    });

});


function init(){
    // Add events & configure other components
}