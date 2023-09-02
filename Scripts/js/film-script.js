$(document).ready(function () {
    $.ajax({
        url: "/Film/GetAllBranch",
        type: "GET",
        traditional: true,
        datatype: "html",
        success: function (data) {
            //alert(data);
            if (data !== "" && data !== null) {
                $(".selectBranch").html(data);
            } else {
                $(".selectBranch").html("<option value='0'>Tất cả</option>");
                $(".main-reloader").css("display", "none");
                return false;
            }
        },
        error: function () {
            $(".main-reloader").css("display", "none");
            return false;
        }
    });
    
});
$(document).ready(function () {
    var isApp = $("#actionResourceBooking").val();
    if (isApp == 2) {
        $("#mobile-menu").css("display", "none");
        $(".filmoja-footer-area").css("display", "none");
        $(".header-web").css("display", "none");
        $(".header-mobile").css("display", "none");
    }
});

function selectBranch(status) {
    $(".main-reloader").css("display", "block");
    var bId = $(".selectBranch").val();
    if (bId !== 0 && bId !== undefined) {
        $.ajax({
            url: "/Film/GetFilmPartial?id=" + bId + "&status=" + status,
            type: "GET",
            traditional: true,
            datatype: "html",
            success: function (data) {
                //alert(data +"1");
                if (data !== "" && data !== null) {
                    $(".list-film").html(data);
                    $('.popup-youtube, .play-video').magnificPopup({
                        disableOn: 700,
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                    });
                } else {
                    $(".main-reloader").css("display", "none");
                    return false;
                }
            },
            error: function () {
                $(".main-reloader").css("display", "none");
                return false;
            }
        });
    }
    else {
        $.ajax({
            url: "/Film/GetFilmPartial?id=0&status=" + status,
            type: "GET",
            traditional: true,
            datatype: "html",
            success: function (data) {
                //alert(data);
                if (data !== "" && data !== null) {
                    $(".list-film").html(data);
                } else {
                    $(".main-reloader").css("display", "none");
                    return false;
                }
            },
            error: function () {
                $(".main-reloader").css("display", "none");
                return false;
            }
        });
    }
    $(".main-reloader").css("display", "none");
}

function setLang(action, code) {

    $.ajax({
        method: "GET",
        url: action,
        data: { Code: code }
    }).done(function (data) {
        if (data === "true") {
            window.location.replace("http://www.starlight.vn?lg=" + code);
        }
    })


}