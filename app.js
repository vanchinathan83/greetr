

$('#login').on('click', function(){
    var greetr = G$('Vanchi','AC');
    var language = $('#lang').val();
    $('#logindiv').hide();
    greetr.setLang(language).HTMLGreeting('#greet',true);
});
