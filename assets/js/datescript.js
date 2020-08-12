<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
<style>
	table{
		width:500px;
		height:500px;
	}
	table td{
		padding:10px;
		margin:10px;
		border:1px solid #ccc;
	}
</style>
<script>
function createTable(){
	 
	mytable = $('<table></table>').attr({ id: "basicTable" });
	var rows = new Number($("#rowcount").val());
	var cols = new Number($("#columncount").val());
	var tr = [];
	for (var i = 0; i < rows; i++) {
		var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
		for (var j = 0; j < cols; j++) {
			$('<td></td>').text("text1").appendTo(row); 
		}
		 		 
	}
	console.log("TTTTT:"+mytable.html());
	mytable.appendTo("#box");	       

  
}
</script>

Row Count:<input type="text" id="rowcount" />
Column Count:<input type="text" id="columncount" />
<input type="button" onclick="createTable();" value="Create Table" />
<div id="box">
</div>