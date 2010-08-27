$(function() {
  $(".code").live("showoff:show", function() {
    $(this).parents(".slide").addClass("code");
  });
});
