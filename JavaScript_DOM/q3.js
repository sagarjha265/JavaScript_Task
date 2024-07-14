<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Set Background Color</title>
    <script>
        function setBackgroundColor() {
            var paragraph = document.getElementById('myParagraph');
            paragraph.style.backgroundColor = 'lightyellow';
        }
    </script>
</head>
<body>
    <p id="myParagraph">This is a paragraph.</p>
    <button onclick="setBackgroundColor()">Change Background Color</button>
</body>
</html>
