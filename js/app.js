$(document).ready( function() {
	$("#add").click( function() {
		//console.log("button click");
		var item = $("#item").val();
		var qty = $("#qty").val();
		var price = $("#price").val();
		if(item && qty && price)
		{
			addTableRow($("#t-I-need"));
		}
		else
		{
			alert("Please input item, qty and price. ^_^");
		}
	});

	function addTableRow(jQtable){
    jQtable.each(function(){
        var $table = $(this);
        // Number of th's in the last table row
        var n = $("tr:last th", this).length;
        var ths = "<tr>";
        for(var i = 0; i < n; i++){
            ths += "<th>&nbsp;</th>";
        }
        ths += "</tr>";
        if($("tbody", this).length > 0){
            $("tbody", this).append(ths);
        }else {
            $(this).append(ths);
        }
    });
}
});