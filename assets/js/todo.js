// Check off specific todos by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("span").click(function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});