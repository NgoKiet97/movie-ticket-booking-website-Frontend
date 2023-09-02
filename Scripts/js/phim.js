$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/movie",
    })
        .done(function (result) {
            if (result.data) {
                $.each(result.data, function (index, value) {

                    //Phim hot tháng 8
                    var contentPhim =
                        `<div class="col-lg-3 col-md-6 col-sm-12 grid-item" style="float:left" onclick="">
                            <article class="entry-item">
                                <div class="front">
                                    <div class="entry-thumb">
                                        <img src="${value.imageThumbnail}">
                                    </div>
                                    <a href="phim-chi-tiet.html"><h4 class="entry-title">${value.name} (${value.classification})</h4></a>
                                    <div class="entry-genre">
                                        <p>${value.category}</p>
                                    </div>
                                </div>
                                <div class="back">
                                    <h3 class="entry-title">
                                        <a href="phim-chi-tiet.html">${value.name} (${value.classification})</a>
                                    </h3>
                                    <span class="pg">${value.classification}</span>
                                    <div class="movie-char-info-left">
                                        <p style="font-style:italic">${value.category}</p>
                                    </div>
                                    <div class="entry-time">
                                        <i class="fa fa-clock-o">
                                        </i>${value.duration} phút
                                    </div>
                                    <p></p>
                                           
                                    <p></p>
                                    <div class="entry-button">
                                        <a href="https://www.youtube.com/watch?v=CfWw9ubDgKI" class="fancybox.iframe amy-fancybox play-video">
                                            <i aria-hidden="true" class="fa fa-play"></i>Trailer
                                        </a>
                                        <a href="#">
                                            <i aria-hidden="true" class="fa fa-ticket"></i>Đặt v&#233;
                                        </a>
                                    </div>
                                    <div class="movie-char-info">

                                        <div class="clearfix"></div>
                                        <div class="movie-char-info-left">
                                            <h6>Đạo diễn</h6>
                                            <span>${value.director}</span>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="movie-char-info-right">
                                            <h6>Diễn vi&#234;n</h6>
                                            <span>${value.actor}</span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>

                                </div>
                            </article>
                        </div>`
                    $("#list-movie").append(contentPhim)

                })
            }
            console.log("test", result)
        });

})