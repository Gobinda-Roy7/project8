$(document).ready(function(){
       /*-------------hide bar start----------*/
    $(".remove").click(function(){
        $(".header-top").slideUp(500);
    });
    
    $(".remove").click(function(){
        $(".show-bar").show();
    });
       /*-------------hide bar end----------*/
   /*-------------show bar start----------*/
    $(".show-icon").click(function(){
        $(".header-top").slideDown(500);
    });
    $(".show-icon").click(function(){
        $(".show-bar").hide();
    });
  /*-------------show bar start----------*/
    
    $(".nav-bar-icon").click(function(){
        $(".rs-menu").show();
    });
    $(".first-title").click(function(){
        $(".rs-menu").hide();
    });
})


