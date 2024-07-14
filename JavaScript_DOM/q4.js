<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
</head>
<body>
    <p>
        <a id="w3r" type="text/html" hreflang="enus" rel="nofollow" target="_self" href="http://www.w3resource.com/">w3resource</a>
    </p>
    <button onclick="getAttributes()">Click here to get attributes value</button>
    <script>
        function getAttributes() {
            var link = document.getElementById('w3r');
            var href = link.getAttribute('href');
            var hreflang = link.getAttribute('hreflang');
            var rel = link.getAttribute('rel');
            var target = link.getAttribute('target');
            var type = link.getAttribute('type');
            alert("href: " + href + "\n" +
                  "hreflang: " + hreflang + "\n" +
                  "rel: " + rel + "\n" +
                  "target: " + target + "\n" +
                  "type: " + type);
        }
    </script>
</body>
</html>
