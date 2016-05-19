$(document).ready( function() {
	$("#add").click( function() {
		//console.log("button click");
		var item = [$("#item").val(), parseInt($("#qty").val()), parseFloat($("#price").val())];
		if(item[0] && item[1] && item[2])
		{
			addTableRow($("#t-I-need"), item);
		}
		else
		{
			alert("Please input item, qty and price. ^_^");
		}
	});
	function addTableRow(jQtable, item){
    jQtable.each(function(){
        var $table = $(this);
        // Number of th's in the last table row
        var ths = "<tr>";
        var total = item[1]*item[2];
        for(var i = 0; i < 2; i++){
            ths += "<th>"+item[i]+"</th>";
        }
        ths += "<th>$"+String(total)+"</th>";
        ths += "<td><img class='check' src='./img/f-check.png' width='26' height='26'><img class='cross' src='./img/f-cross.png' width='23' height='23'></td>";
        ths += "</tr>";
        if($("tbody", this).length > 0){
            $("tbody", this).append(ths);
        }else {
            $(this).append(ths);
        }
    });
	}
	$(".check").click(function() {
    	
    });
});