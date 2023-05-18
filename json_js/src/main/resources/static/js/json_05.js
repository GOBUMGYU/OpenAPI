$(document).ready(function () {
    $.getJSON("/js/json_05.json", function (data){
        console.log(data);
        let member_data = "";
        $.each(data, function (key, value){
            member_data += "<tr>";
            member_data += "<td>" + value.id + "</td>";
            member_data += "<td>" + value.name + "</td>";
            member_data += "<td>" + value.age + "</td>";
            member_data += "<td>" + value.address + "</td>";
            member_data += "<td>" + value.gender + "</td>";
            member_data += "<td>" + value.job + "</td>";
            member_data += "<td>" + value.hobby + "</td>";
            member_data += "</tr>";
        });
        $("#member_table").append(member_data);

    });
});