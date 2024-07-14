<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Create a table with user input</title>
    <style type="text/css">
        body {margin: 30px;}
    </style>
    <script>
        function createTable() {
            var rows = parseInt(prompt("Enter number of rows:"));
            var cols = parseInt(prompt("Enter number of columns:"));
            var table = document.getElementById("myTable");
            table.innerHTML = ""; // Clear existing table

            for (var i = 0; i < rows; i++) {
                var newRow = table.insertRow();
                for (var j = 0; j < cols; j++) {
                    var newCell = newRow.insertCell();
                    newCell.innerHTML = "Row-" + i + " Column-" + j;
                }
            }
        }
    </script>
</head>
<body>
    <table id="myTable" border="1"></table>
    <form>
        <input type="button" onclick="createTable()" value="Create the table">
    </form>
</body>
</html>
