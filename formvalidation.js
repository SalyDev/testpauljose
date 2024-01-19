//validation formulaire-----------------

function validateForm() {
// validation du nom
    let nom = document.forms["signupForm"]["nom"].value;
    let errorNomText;
    //verifier que le champs n'est pas vide
    //si c'est le cas afficher l'erreur
  if (nom=="") {
    errorNomText = "Le nom est obligatoire";
  } else{
    //sinon ne pas afficher un msg d'erreur
    errorNomText="";
  }
  document.getElementById("errorNom").innerHTML = errorNomText;

  //validation de l'adresse email
  let email = document.forms["signupForm"]["email"].value;
  if (email=="") {
    errorEmailText = "L'adresse email est obligatoire";
  } else{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat)){
        errorEmailText="Adresse Email Invalide";
    }else{
        errorEmailText="";
    }
  }


  document.getElementById("errorEmail").innerHTML = errorEmailText;


  //validation du mot de passe
  specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  let password = document.forms["signupForm"]["password"].value;
  if(password==""){
    errorPasswordText = "Le mot de passe est obligatoire";
  }else{
    //verifier que le mot que le mot de passe n'est pas inferieur à 10
    // et contient au moins un caractere special
    if(password.length<10 || !password.match(specialChars)){
        errorPasswordText = "Le mot de passe doit contenir au minimum 10 caractères dont 1 caractère spécial.";
    }else{
        errorPasswordText = "";
    }

  }

  document.getElementById("errorPassword").innerHTML = errorPasswordText;


  //validation du champs confirmation de mot de passe
  let confirmPassword = document.forms["signupForm"]["confirmPassword"].value;
  if(confirmPassword==""){
    errorConfirmPasswordText = "Ce champs est obligatoire";
  }else{
    //verifier que les deux mots de passe sont identiques
    if(confirmPassword != password){
        errorConfirmPasswordText = "Les deux mots de passe ne sont pas identiques.";
    }else{
        errorConfirmPasswordText = "";
    }
  }

  document.getElementById("errorConfirmPassword").innerHTML = errorConfirmPasswordText;


  }