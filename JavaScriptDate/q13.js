<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Items to Array</title>
</head>
<body>
    <h1>Add Items to Array</h1>
    <input type="text" id="itemInput" placeholder="Enter an item" />
    <button onclick="addItem()">Add Item</button>
    <h2>Items:</h2>
    <ul id="itemList"></ul>

    <script>
        const items = [];

        function addItem() {
            const input = document.getElementById('itemInput');
            const item = input.value.trim();

            if (item) {
                items.push(item);
                displayItems();
                input.value = ''; // Clear input field
            } else {
                alert("Please enter a valid item.");
            }
        }

        function displayItems() {
            const itemList = document.getElementById('itemList');
            itemList.innerHTML = ''; // Clear the current list

            items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                itemList.appendChild(listItem);
            });
        }
    </script>
</body>
</html>
