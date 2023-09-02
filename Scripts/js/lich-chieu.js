$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/cinema",
    })
        .done(function (result) {
            if (result.data) {
                $.each(result.data, function (index, value) {

                    //rạp
                    var cinema =
                        `<div custom-id="${value.id}" class="single-news-item col-lg-6 col-md-6 col-sm-12 cinema" style="padding: 10px; cursor: pointer">
                            
                                <div class="news-image">
                                    <img src="Areas/Admin/Content/Fileuploads/images/rap-chieu-phim.jpg" alt="thiki-buon-ma-thuot">
                                    <div style="position: relative;bottom: 0;padding: 5px;background-image: linear-gradient(to top, #000000 , #141415cc);    width: 100%;    color: #fff;    letter-spacing: 2px;">
                                        <p style="color: #f34a37; font-weight: 600; font-size: 20px;">THIKI ${value.name}</p>
                                        <p style="color:#fff">${value.address}</p>
                                        <p style="color:#fff"><b>Hotline: </b> 9999 9999</p>
                                    </div>
                                </div>
                            
                        </div>`
                    $("#list-cinema").append(cinema)

                })
            }
            console.log("test", result)
        });

    
        //===================== Click on "cinema" ===================================================
    $("#list-cinema").on('click', '.cinema', function () {
        var cinemaId = $(this).attr('custom-id')
        
        localStorage.setItem("cinemaId-for-booking-page", cinemaId)
        window.location.href = "lich-chieu-theo-rap.html"
    }) 


})

