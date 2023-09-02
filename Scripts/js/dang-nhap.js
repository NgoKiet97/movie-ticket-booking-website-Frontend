$(document).ready(function(){
    
    $("#btn-sign-in").click(function(){

        var email = $("#emailLogin").val()
        var password = $("#passwordLogin").val()

        $.ajax({
            url: "http://localhost:8080/login/signin",
            method: "post",
            data: {
                email: email,
                password : password
            }
        }).done(function(result){

            localStorage.setItem("token", result.data)

            $.ajax({
                url: `http://localhost:8080/user/find-by-email?email=${email}`,
                method: "GET",
            }).done(function(result){
    
                localStorage.setItem("userId", result.data.id)
                localStorage.setItem("userEmail", result.data.email)
                localStorage.setItem("userAva", result.data.avatar)

            })

            alert("đăng nhập thành công")
            window.location.href = "index.html";              
        })
    })
})