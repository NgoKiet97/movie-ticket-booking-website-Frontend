$(document).ready(function () {
    var cinemaId = localStorage.getItem("cinemaId-for-booking-page");
    
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
        
    $.ajax({
        method: "GET",
        url: `http://localhost:8080/cinema/detail?cinemaId=${cinemaId}`,
    })
        .done(function (result) {
            if (result.data) {
            
                    //rạp
                    var cinema =
                        `<h3 style="width: 100%; text-align: center; color: #f33b3b;">Rạp ThiKi Movie ${result.data.name}</h3>
                        <p style="width: 100%; text-align: center; color: #22272b;">Hot line: 9999 9999</p>
                        <p style="width: 100%; text-align: center; color: #22272b;">Địa chỉ: ${result.data.address}</p>`
                    $("#browse-option-box-id").append(cinema)               
            }
            console.log("test", result)
        });
    
    $.ajax({
        method: "GET",
        url: `http://localhost:8080/show-movie/findbycinema?cinemaId=${cinemaId}&date=${currentDate}&stateShow=Chưa chiếu`,
    })
        .done(function (result) {
            if (result.data) {
                $.each(result.data, function (index, value) {

                    //rạp
                    var show =
                        `<div class="single-movie-list">
                            <div class="single-movie-list-left col-lg-3 col-md-4 col-sm-12">                             
                                <img src="${value.movieImg}" alt="top movie">           
                            </div>
                            <div class="single-movie-list-right  col-lg-9 col-md-8 col-sm-12">

                                <h3>
                                    ${value.movie}
                                </h3>
                            
                                <div class="movie-list-info">
                                    <p>Ngày: <span>${value.date}</span></p>
                                    <p>Phòng chiếu: <span>${value.room}</span></p>
                                    <p>&nbsp;</p>
                                    <span>Thời gian: </span>
                                </div>

                                <div class="col-md-12 col-sm-12" style="padding:0">
                                    <hr class="space-1">
                                    <div custom-id="${value.id}" class="btn-show-movie" style="display: inline-flex; margin-bottom: 10px; cursor: pointer">
                                        <span class="time item">${value.startTime}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="top-action">

                            </div>
                        </div>`
                    $("#tab-movies-id").append(show)

                })
            }
            console.log("test", result)
        });

    
        //===================== Click on "show" ===================================================
    $("#tab-movies-id").on('click', '.btn-show-movie', function () {
        var showId = $(this).attr('custom-id')
        
        localStorage.setItem("showId-for-booking-page", showId)

        
        window.location.href = "dat-ve.html"
    }) 


})

