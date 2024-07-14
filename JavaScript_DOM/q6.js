<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Change the content of a cell</title>
    <script>
        function changeContent() {
            var row = prompt("Enter row number (starting from 0):");
            var col = prompt("Enter column number (starting from 0):");
            var content = prompt("Enter new content:");
            var table = document.getElementById("myTable");
            if (table.rows[row] && table.rows[row].cells[col]) {
                table.rows[row].cells[col].innerHTML = content;
            } else {
                alert("Invalid row or column number.");
            }
        }
    </script>
</head>
<body>
    <table id="myTable" border="1">
        <tr><td>Row1 cell1</td><td>Row1 cell2</td></tr>
        <tr><td>Row2 cell1</td><td>Row2 cell2</td></tr>
        <tr><td>Row3 cell1</td><td>Row3 cell2</td></tr>
    </table>
    <form>
        <input type="button" onclick="changeContent()" value="Change content">
    </form>
</body>
</html>
