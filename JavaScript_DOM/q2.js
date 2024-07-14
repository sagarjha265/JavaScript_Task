<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Return first and last name from a form - w3resource</title>
    <script>
        function getFormvalue() {
            event.preventDefault(); // Prevent the form from submitting
            var firstName = document.forms["form1"]["fname"].value;
            var lastName = document.forms["form1"]["lname"].value;
            alert("First Name: " + firstName + "\nLast Name: " + lastName);
        }
    </script>
</head>
<body>
    <form id="form1" onsubmit="getFormvalue()">
        First name: <input type="text" name="fname" value="David"><br>
        Last name: <input type="text" name="lname" value="Beckham"><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
