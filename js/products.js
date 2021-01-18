$(document).ready(function() {
    var table = "<h2>Have a look at our products!!!</h2>" +
                "<table>" +
                "<thead>" +
                    "<tr>" +
                        "<th>Name</th>" +
                        "<th>Stock #</th>" +
                        "<th>Quantity</th>" +
                        "<th>Size</th>" +
                        "<th>Color</th>" +
                    "</tr>" +
                "</thead>" +
                "</tbody>";
    $.getJSON("products.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                table += "<tr>" +
                            "<td>"+ value.name +"</td>" +
                            "<td>"+ value.stock +"</td>" +
                            "<td>"+ value.quantity +"</td>" +
                            "<td>"+ value.size +"</td>" +
                            "<td>"+ value.color +"</td>" +
                         "</tr>";
            });
        });
        table += "</tbody>" +
                "</table>";
        $("#table").html(table);
    });
});