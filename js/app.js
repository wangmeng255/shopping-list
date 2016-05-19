$(document).ready( function() {
	var i_need_sum = 0;
	$("#add").click( function() {
		//console.log("button click");
		var item = [$("#item").val(), parseInt($("#qty").val()), parseFloat($("#price").val())];
		if(item[0] && item[1] && item[2])
		{
			addTableRow($("#t-I-need"), item, $("#I-need-total"));
		}
		else
		{
			alert("Please input item, qty and price. ^_^");
		}
	});
	function addTableRow(jQtable, item, jQtotal){
    //jQtable.each(function(){
    	//var $table = $(this);
        // Number of th's in the last table row
        var ths = "<tr>";
        var total = item[1]*item[2];
        for(var i = 0; i < 2; i++){
            ths += "<th>"+item[i]+"</th>";
        }
        ths += "<th>$"+String(total)+"</th>";
        ths += "<td><img class='check' src='./img/f-check.png'><img class='cross' src='./img/f-cross.png'></td>";
        ths += "</tr>";
        if($("tbody", jQtable).length > 0){
            $("tbody", jQtable).append(ths);
        }else {
            $(jQtable).append(ths);
        }
        i_need_sum += total;
		jQtotal.text("Total: $ "+String(i_need_sum));
    //});
	}
	$(".check").click(function() {
    	
    });
});