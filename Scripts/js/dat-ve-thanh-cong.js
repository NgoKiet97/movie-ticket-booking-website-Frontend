$(document).ready(function () {
    var typeticketId = localStorage.getItem("typeTicketId-for-booking-page");
    var guestName = localStorage.getItem("guestName-for-booking-page");
    var seatName = localStorage.getItem("seatId-for-booking-page");
    var showId = localStorage.getItem("showId-for-booking-page");
    var price = 0;

    $("#show-booking").text(showId)
    $("#seat-booking").text(seatName)
    $("#guestname-booking").text(guestName)


    $.ajax({
        method: "GET",
        url: `http://localhost:8080/show-movie/findbyid?showId=${showId}`,
    })
        .done(function (result) {
            if (result.data) {

                $("#movie-booking").text(result.data.movie)
                $("#date-booking").text(result.data.date)
                $("#time-booking").text(result.data.startTime)
                $("#cinema-booking").text(result.data.cinema)
                $("#room-booking").text(result.data.room)
                localStorage.setItem("roomId-for-booking-page", result.data.roomId)

            }
            console.log("test", result)
        });

    $.ajax({
        method: "GET",
        url: `http://localhost:8080/type-ticket/find-by-id?typeId=${typeticketId}`,
    })
        .done(function (result) {
            if (result.data) {

                $("#typeTicket-booking").text(result.data.name)
                price = result.data.price
                $("#price-booking").text(result.data.price + " VND")

            }
            console.log("test", result)
        });




    $("#btn-booking").click(function () {

        //Bước 1: check LOGIN
        if (localStorage.getItem("token") !== null &&
            localStorage.getItem("userId") !== null &&
            localStorage.getItem("userEmail") !== null
        ) {

            // Lấy thông tin ID ghế ngồi
            var roomId = localStorage.getItem("roomId-for-booking-page");
            var seatId = 0;
            $.ajax({
                method: "GET",
                url: `http://localhost:8080/seat/find-by-name-and-room?name=${seatName}&roomId=${roomId}`,
            })
                .done(function (result) {
                    if (result.data) {
                        seatId = result.data.id;
                    }
                    
                    var billId = 0
                    var userId = localStorage.getItem("userId");
                    $.ajax({
                        method: "GET",
                        url: `http://localhost:8080/bill/find-by-user?userId=${userId}`
                    })
                        .done(function (result) {

                            billId = result.data.id;

                            // Đặt vé, tạo vé mới
                            var dataTicketToBE = {
                                showMovieId: showId,
                                seatId: seatId,
                                guestName: guestName,
                                typeTicketId: typeticketId,
                                billId: billId,
                                stateTicketId: 2
                            }


                            $.ajax({
                                method: "POST",
                                url: "http://localhost:8080/ticket/add",
                                data: JSON.stringify(dataTicketToBE),
                                contentType: "application/json"
                            })
                                .done(function (result) {
                                    if (result.message === "Đặt vé thành công") {
                                        alert("Đặt vé thành công! Vui lòng đến rạp chiếu phim trước 30 phút để thanh toán tại quầy!")

                                        window.location.href = "index.html";

                                    } else {
                                        alert(result.message)
                                    }
                                });

                        });

                    


                });

        } else {
            alert("Vui lòng đăng nhập trước khi đặt vé")
                    window.location.href = "dang-nhap.html";
        }
                
    }) 


})