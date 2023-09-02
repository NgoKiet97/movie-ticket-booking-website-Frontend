$(document).ready(function () {
    var showId = localStorage.getItem("showId-for-booking-page");
    
    $.ajax({
        method: "GET",
        url: `http://localhost:8080/ticket/find-by-show-and-state?showMovieId=${showId}&stateTicketId=2`,
    })
        .done(function (result) {
            if (result.data) {
                $.each(result.data, function (index, value) {
                    
                    
                    $(".seat-detail").each(function() {
                    
                        //test
                        if(value.seat == $(this).text()) {

                            $(this).prop("onclick", null).off("click");
                            $(this).removeAttr("style")
                            $(this).css({
                                "margin": "3px", 
                                "width": "35px",
                                "height": "35px",
                                "background": "url(content/img/seat.png)",
                                "background-size": "contain", 
                                "color": "white", 
                                "text-align": "center", 
                                "float": "left",
                                "font-size": "0.6rem", 
                                "line-height": "35px",
                                "letter-spacing": "0.5px"
                            });    
                        }

                    });
                   
                })
            }
            // console.log("test", result)
        });

    
        //===================== Click on "cinema" ===================================================
    $("#list-cinema").on('click', '.cinema', function () {
        var cinemaId = $(this).attr('custom-id')
        
        localStorage.setItem("cinemaId-for-booking-page", cinemaId)
        window.location.href = "lich-chieu-theo-rap.html"
    }) 

    $(".seat-detail").click(function () {
        var seatId = $(this).text()
        console.log("test cinemaid", seatId)
        localStorage.setItem("seatId-for-booking-page", seatId)
        window.location.href = "dat-ve-buoc-02.html"
    }) 


})



