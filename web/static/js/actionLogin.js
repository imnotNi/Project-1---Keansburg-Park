$(document).ready(function(){ 
    try{
        var login = JSON.parse(localStorage.getItem("login"))
        $(".dangnhap").html('<i class="fa-solid fa-user"></i> ' + login.taikhoan)
        $(".dangky").html('<i class="fa-solid fa-right-from-bracket"></i> Đăng Xuất')

        $(".dangky").click(function(e){
            e.preventDefault()
            localStorage.removeItem("login")
            window.location.href = "login.html"
        })

    }catch(e){

    }
});