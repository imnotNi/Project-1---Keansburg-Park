var CHECK_VALIDATE = true
$(document).ready(function(){
    $(".dangnhap").click(function(e){
        e.preventDefault()
        var taikhoan = $('.taikhoan').val()
        var matkhau = $('.matkhau').val()

        if(taikhoan == ''){
            $('.err_taikhoan').html('<p>Account cannot be left blank!</p>')
            CHECK_VALIDATE = false
        }else{
            if(taikhoan.length < 8 || taikhoan.length > 24){
                $('.err_taikhoan').html('<p>Accounts in the range of 8 - 24 characters!</p>')
                CHECK_VALIDATE = false
            }else{
                $('.err_taikhoan').html('')
                CHECK_VALIDATE = true
            }
            
        }

        if(matkhau == ''){
            $('.err_matkhau').html('<p>Password can not be blank!</p>')
            CHECK_VALIDATE = false
        }else{

            if(matkhau.length < 6 || matkhau.length > 24){
                $('.err_matkhau').html('<p>Password in the range of 6 - 24 characters!</p>')
                CHECK_VALIDATE = false
            }else{
                $('.err_matkhau').html('')
                CHECK_VALIDATE = true
            }
        }

        if(CHECK_VALIDATE == true){
          try {
            var data = JSON.parse(localStorage.getItem(taikhoan))
            if(data.taikhoan == taikhoan && data.matkhau == matkhau){
              localStorage.setItem("login", JSON.stringify({
                trangthai: true,
                taikhoan: taikhoan
              }))
              window.location.href = "file:///C:/Users/Administrator/Desktop/Aptech/index.html";
            }else{
              $('.thatbai').html('<p style="margin-top: 20px;">Incorrect account or password!</p>')
            }
          }
          catch(err) {
            $('.thatbai').html('<p style="margin-top: 20px;">Account does not exist!</p>')
          }
        }
        
    });
});