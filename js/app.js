"use strict"
$(document).ready( function() {
	var i_need_total = 0;
	var my_bag_total = 0;
	$("form").submit( function(event) {
		event.preventDefault();
		//console.log("button click");
		var item = [$("#item").val(), $("#qty").val(), $("#price").val().slice(1)];
		if(item[0] && item[1] && item[2])
		{
			addItems($("#t-I-need"), item, $("#I-need-total"));
			$("#item").val("");
			$("#qty").val("");
			$("#price").val("$");
		}
		else
		{
			alert("Please input item, qty and price. ^_^");
		}
	});
	$("#t-I-need" ).on( "click", ".check", function( e ) {
	  	//click listener for the img.check
	  	var tr = $(this).closest("tr"); // get a reference to my row
	  	var item = [];
	  	tr.find("th").each(function() {
	  		if($(this).text().startsWith("$")) {
	  			item.push($(this).text().slice(1));
	  		}
	  		else item.push($(this).text());
	  	});
		if(!sameItem($("#t-my-bag"), item)) {
		  	tr.find("img").first().attr("src", "./img/f-arrowup.png").removeClass("check").addClass("arrowup");
		  	$("#t-my-bag tbody").append(tr);
		  	// or… $(tr).appendTo('#t-my-bag tbody');
	  	}
	  	else tr.remove();
	  	i_need_total -= parseFloat(item[2]);
		$("#I-need-total").text("Total: $ " + String(i_need_total));
	  my_bag_total += parseFloat(item[2]);
	  $("#my-bag-total").text("Total: $ " + String(my_bag_total));
	})
	.on("click", ".cross", function( e ) {
    var tr = $(this).closest("tr"); // get a reference to my row
    var price = tr.find("th").last().html().split("$");
    i_need_total -= parseFloat(price[1]);
    $("#I-need-total").text("Total: $ " + String(i_need_total));
    tr.remove();
	});

	$("#t-my-bag" ).on( "click", ".arrowup", function( e ) {
	  	//click listener for the img.check
	  	var tr = $(this).closest("tr"); // get a reference to my row
	  	var item = [];
	  	tr.find("th").each(function() {
	  		if($(this).text().startsWith("$")) {
	  			item.push($(this).text().slice(1));	
	  		}
	  		else item.push($(this).text());
	  	});
	  	if(!sameItem($("#t-I-need"), item)) {
  	  	tr.find("img").first().attr("src", "./img/f-check.png").removeClass("arrowup").addClass("check");
  	  	$("#t-I-need tbody").append(tr);
	  	  // or… $(tr).appendTo('#t-my-bag tbody');
	  	}
      else tr.remove();
      my_bag_total -= parseFloat(item[2]);
      $("#my-bag-total").text("Total: $ " + String(my_bag_total));
      i_need_total += parseFloat(item[2]);
      $("#I-need-total").text("Total: $ " + String(i_need_total));
	})
	.on("click", ".cross", function( e ) {
    var tr = $(this).closest("tr"); // get a reference to my row
    var price = tr.find("th").last().html().split("$");
    my_bag_total -= parseFloat(price[1]);
    $("#my-bag-total").text("Total: $ " + String(my_bag_total));
    tr.remove();
	});
	function addItems(jQtable, item, jQtotal){
    //jQtable.each(function(){
    //var $table = $(this);
    //Number of th's in the last table row
    var sum = parseInt(item[1])*parseFloat(item[2]);
    item[2] = String(sum);
		if(!sameItem(jQtable, item)) {        
		    var ths = "<tr>";
		    for(var i=0; i<2; i++){
		        ths += "<th>" + item[i] + "</th>";
		    }
		    ths += "<th>$" + String(sum) + "</th>";
		    ths += "<td><img class='check' src='./img/f-check.png'><img class='cross' src='./img/f-cross.png'></td>";
		    ths += "</tr>";
		    if($("tbody", jQtable).length>0){
		        $("tbody", jQtable).append(ths);
		    }else {
		        $(jQtable).append(ths);
		    }
		  }
    i_need_total += sum;
    jQtotal.text("Total: $ " + String(i_need_total));
    //});
	}
	var sameItem = function(jQtable, item) {
		var findSame = false;
		jQtable.find("tr:gt(0) th:first-child").each(function() {
				if(item[0] === $(this).text()) {
					var qty = $(this).next();
					var price = $(this).next().next();
					qty.text(parseInt(qty.text()) + parseInt(item[1]));
					price.text("$" + String(parseFloat(price.text().slice(1)) + parseFloat(item[2])));
					findSame = true;
					return false;// to break the $.each()
				}
			});
		return findSame;
	};
});