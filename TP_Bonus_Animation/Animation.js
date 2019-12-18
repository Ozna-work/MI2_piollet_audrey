
$(function(){
   $('#btnAugmenter').on('click',augmenter);
   $('#btnReinit').on('click',reinit);
});

function augmenter(){
   let pas = $('#pas').val();   // Valeur du pas
   let progress = $('#ProgressBarValue').val(); // Valeur barre progression

   progress = parseInt(progress,10);
   pas = parseInt(pas,10);

   if($('#ProgressBar').css("width") && ((progress+pas) < 100)){
     $('#ProgressBar').animate({width : "+="+pas+"%"},300);
     $('#ProgressBarValue').attr('value',(progress+pas));
   }
   else if ($('#ProgressBar').css("width") && ((progress+pas) >= 100)) {
     $('#ProgressBar').animate({width : "100%"},600);
     $('#ProgressBarValue').attr('value',100);
   }
}

function reinit(){
   $('#ProgressBar').animate({width : "0%"},1000);
   $('#ProgressBarValue').attr('value',0);
}
