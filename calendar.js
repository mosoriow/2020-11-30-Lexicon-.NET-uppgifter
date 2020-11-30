const monthNames=['',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function calendar(arr) {
    let year=arr[2];
    let month=arr[1];
    let day=arr[0];

    year=2020;
    month=11;

    let daysOfAMonth=(new Date(year, month, 0)).getDate();
    let firstDay=(new Date(year + "-" + month + "-01")).getDay();
    if(firstDay==0) firstDay=7;
    console.log("days of he month: "+daysOfAMonth+"   first day: "+firstDay);

    $("#content").append(
        $("<table>")
            .append($("<caption>").text(monthNames[month]+" "+year.toString()))
            .append(
                $("<tbody>")
                    .append(
                        $("<tr>")
                            .append($("<th>").text("Mon"))
                            .append($("<th>").text("Tue"))
                            .append($("<th>").text("Wed"))
                            .append($("<th>").text("Thu"))
                            .append($("<th>").text("Fri"))
                            .append($("<th>").text("Sat"))
                            .append($("<th>").text("Sun"))
                    )
                    .append(function () {
                            let result="";
                            let weekCount=1;
                            for(let i=1;i<=daysOfAMonth;i++) {
                                if(i)

                            }
                            return result;
                        }
                    )
            )
    );

}

