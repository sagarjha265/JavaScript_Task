<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Remove items from a dropdown list</title>
    <script>
        function removecolor() {
            var select = document.getElementById("colorSelect");
            var selectedIndex = select.selectedIndex;
            if (selectedIndex !== -1) {
                select.remove(selectedIndex);
            } else {
                alert("Please select a color to remove.");
            }
        }
    </script>
</head>
<body>
    <form>
        <select id="colorSelect">
            <option>Red</option>
            <option>Green</option>
            <option>White</option>
            <option>Black</option>
        </select>
        <input type="button" onclick="removecolor()" value="Sel
