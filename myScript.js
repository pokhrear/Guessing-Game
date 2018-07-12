

      //var rand = Math.floor(Math.random()*100)+1;

      function playGame(guess){

      //var guess = document.getElementById("dd").value;
      var hiddenNo=document.getElementById("guessNo").value;
      document.getElementById("dd").value=guess;
      if(hiddenNo==""){

          var rand = Math.floor(Math.random()*100)+1;
          document.getElementById("guessNo").value=rand;
      }

       if (guess > hiddenNo){

          document.getElementById("demo").innerHTML= "you have Enter Very High number Try Again..";
          document.getElementById("demo").style.color= 'red';

      }
        else if (guess < hiddenNo) {

          document.getElementById("demo").innerHTML= "you have Enter Very low number Try Again ..";
          document.getElementById("demo").style.color= 'blue';
      }
        else if (guess==hiddenNo){

          document.getElementById("demo").innerHTML="HURREY HURREY You Win..";
          document.getElementById("demo").style.color= 'green';
          document.getElementById("la").innerHTML="THANKS FOR PLAYING See You Soon....";
          document.getElementById("guessNo").value="";

      }






  }
