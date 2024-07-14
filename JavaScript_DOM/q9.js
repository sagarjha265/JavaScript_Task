<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <style type="text/css">
        body {margin: 30px;}
    </style>
    <title>Count and display items of a dropdown list - w3resource</title>
    <script>
        function getOptions() {
            var select = document.getElementById("mySelect");
            var optionsCount = select.options.length;
            var optionsText = [];
            for (var i = 0; i < optionsCount; i++) {
                optionsText.push(select.options[i].text);
            }
            alert("Total items: " + optionsCount + "\nItems: " + optionsText.join(", "));
        }
    </script>
</head>
<body>
    <form>
        Select your favorite Color:
        <select id="mySelect">
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
            <option>White</option>
        </select>
        <input type="button" onclick="getOptions()" value="Count and Output all items">
    </form>
</body>
</html>
