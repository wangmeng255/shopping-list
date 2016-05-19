$(document).ready( function() {
	var i_need_sum = 0;
	var my_bag_sum = 0;
	$("#add").click( function() {
		//console.log("button click");
		var item = [$("#item").val(), parseInt($("#qty").val()), parseFloat($("#price").val())];
		if(item[0] && item[1] && item[2])
		{
			addTableRow($("#t-I-need"), item, $("#I-need-total"));
			$("input").val("")
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
	$("#t-I-need" ).on( "click", ".check", function( e ) {
	  //click listener for the img.check
	  	var tr = $(this).closest("tr"); // get a reference to my row
	  	var price = tr.find("th").last().html().split("$");
	  	i_need_sum -= parseInt(price[1]);
	  	$("#I-need-total").text("Total: $ "+String(i_need_sum));
	  	tr.find("img").first().attr("src", "./img/f-arrowup.png").removeClass("check").addClass("arrowup");
	  	$('#t-my-bag tbody').append(tr);
	  	// or… $(tr).appendTo('#t-my-bag tbody');
	  	my_bag_sum += parseInt(price[1]);
	  	$("#my-bag-total").text("Total: $ "+String(my_bag_sum));
	})
	.on("click", ".cross", function( e ) {
		var tr = $(this).closest("tr"); // get a reference to my row
		var price = tr.find("th").last().html().split("$");
	  	i_need_sum -= parseInt(price[1]);
	  	$("#I-need-total").text("Total: $ "+String(i_need_sum));
		tr.remove();
	});

	$("#t-my-bag" ).on( "click", ".arrowup", function( e ) {
	  	//click listener for the img.check
	  	var tr = $(this).closest("tr"); // get a reference to my row
	  	var price = tr.find("th").last().html().split("$");
	  	my_bag_sum -= parseInt(price[1]);
	  	$("#my-bag-total").text("Total: $ "+String(my_bag_sum));
	  	tr.find("img").first().attr("src", "./img/f-check.png").removeClass("arrowup").addClass("check");
	  	$('#t-I-need tbody').append(tr);
	  	// or… $(tr).appendTo('#t-my-bag tbody');
	  	i_need_sum += parseInt(price[1]);
	  	$("#I-need-total").text("Total: $ "+String(i_need_sum));
	})
	.on("click", ".cross", function( e ) {
	   	var tr = $(this).closest("tr"); // get a reference to my row
	   	var price = tr.find("th").last().html().split("$");
	   	my_bag_sum -= parseInt(price[1]);
	   	$("#my-bag-total").text("Total: $ "+String(my_bag_sum));
	   	tr.remove();
	});;
});