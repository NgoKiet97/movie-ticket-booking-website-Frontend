$(document).ready(function () {
    
    $("#btn-booking").click(function () {
        // var seatId = $(this).text()
        console.log("test click" )
        var guestName = $("#cName").val()
        console.log("test guestName", guestName )
        localStorage.setItem("guestName-for-booking-page", guestName)

        var typeTicket = $("#select-type-ticket").val()
        console.log("test typeTicket", typeTicket )
        localStorage.setItem("typeTicketId-for-booking-page", typeTicket)

        // localStorage.setItem("seatId-for-booking-page", seatId)
        window.location.href = "dat-ve-thanh-cong.html"
    }) 


})



