 function showCart() {
            if (cart.length == 0) {
                $("#cart").css("visibility", "hidden"); 
                return;
            }
 
            $("#cart").css("visibility", "visible");
            $("#cartBody").empty();  
            for (var i in cart) {
                var item = cart[i];
                var row = "<tr><td>" + item.Product + "</td><td>" +
                       item.Price + "</td><td>" + item.Qty + "</td><td>"
                       + item.Qty * item.Price + "</td><td>"
                       + "<button onclick='deleteItem(" + i + ")'>Delete</button></td></tr>";
                $("#cartBody").append(row);
            }
        }



 function saveCart() {
            if (window.localStorage)
            {
                localStorage.cart = JSON.stringify(cart);
            }
        }

        function addToCart() {
            var price = $("#products").val();  // seçilen ürünün fiyatını döndürür.
            var name = $("#products option:selected").text();  // ürün adını döndürür.
            var qty = $("#qty").val();  // ürün miktarını döndürür.
 
            for (var i in cart) {
                if(cart[i].Product == name)
                {
                    cart[i].Qty = qty;  
                    showCart();
                    saveCart();
                    return;
                }
            }
 
            var item = { Product: name,  Price: price, Qty: qty };
            cart.push(item);
            saveCart();
            showCart();
        }


        var cart = [];  
        $(function () {
            if (localStorage.cart)
            {
                // local storage üzerinden verileri alalım.
                cart = JSON.parse(localStorage.cart);  
                showCart();  // display cart that is loaded into cart array
            }
        });