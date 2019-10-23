$(document).ready(function() {
   $("button#cat").click( function() {
   $("#catlist").prepend("<li>MEOW MEOW!</li>");
   $('li').click(function() {
    alert('hi');
    });
  })

 $("button#dog").click( function() {
 $("#doglist").prepend("<li>BARK BARK!</li>");
 $('li').click(function() {
   alert('hi');
  });
 })
});

// $(document).ready(function() {
//   $(".clickable1").click(function() {
//     $(".js-expose").toggle();
//     $(".js-hidden").toggle();
//   });
//   $(".clickable2").click(function() {
//     $(".Operators-display").toggle();
//     $(".Operators-hidden").toggle();
//   });
// });
