// afficher-cacher le contenu du champs mot de passe
$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });

    //// afficher-cacher le contenu du champs de confirmation mot de passe
    $("#show_hide_confirmpassword a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_confirmpassword input').attr("type") == "text"){
            $('#show_hide_confirmpassword input').attr('type', 'password');
            $('#show_hide_confirmpassword i').addClass( "fa-eye-slash" );
            $('#show_hide_confirmpassword i').removeClass( "fa-eye" );
        }else if($('#show_hide_confirmpassword input').attr("type") == "password"){
            $('#show_hide_confirmpassword input').attr('type', 'text');
            $('#show_hide_confirmpassword i').removeClass( "fa-eye-slash" );
            $('#show_hide_confirmpassword i').addClass( "fa-eye" );
        }
    });
});

