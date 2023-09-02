$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/movie",
    })
        .done(function (result) {
            if (result.data) {
                $.each(result.data, function (index, value) {

                    //Phim hot tháng 8
                    var contentPhimHotThang8 =
                        `<div class="row movie-tabs">
                            <div class="col-md-2 col-sm-12">
                                <a href="#" title="${value.name}">
                                    <img src="${value.imageThumbnail}" alt="The end of days">
                                </a>
                            </div>
                            <div class="col-md-10 col-sm-12">
                                <header>
                                    <h3 class="no-underline">${value.name} (${value.classification})</h3>
                                </header>
                                <span class="title">
                                    ${value.category}
                                </span>
                                <div class="col-lg-12" style="padding-left:0 !important">
                                    <p class="time">${value.technology}</p>&nbsp;<p class="time red">${value.classification}</p>
                                </div>
                                <p class="desc">
                                    <b>Đạo diễn: </b>${value.director}
                                </p>
                                <p class="desc">
                                    <b>Diễn viên: </b>${value.actor}
                                </p>
                                <p>
                                    <b>Mô tả: </b> ${value.description}
                                </p>
                                <div class="col-lg-12" style="padding-left:0 !important">
                                    <a href="#">
                                        <p class="time red">&nbsp;<i class="fa fa-ticket"></i> &nbsp;Đặt
                                            v&#233;&nbsp;&nbsp;</p>
                                    </a>
                                </div>
                            </div>
                        </div>`
                    $("#Mon").append(contentPhimHotThang8)

                })
            }
            console.log("test", result)
        });

})