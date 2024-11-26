var CHECK_VALIDATE = true
$(document).ready(function(){
    $(".dangky").click(function(e){
        e.preventDefault()
        var taikhoan = $('.taikhoan').val()
        var hoten = $('.hoten').val()
        var sodienthoai = $('.sodienthoai').val()
        var matkhau = $('.matkhau').val()
        var nhaplaimatkhau = $('.nhaplaimatkhau').val()

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

        if(hoten == ''){
            $('.err_hoten').html('<p>Names cannot be left blank!</p>')
            CHECK_VALIDATE = false
        }else{
            if(/^[A-Za-z ]+$/.test(hoten) == false){
                $('.err_hoten').html('<p>Name cannot contain special characters!</p>')
                CHECK_VALIDATE = false
            }else{
                $('.err_hoten').html('')
                CHECK_VALIDATE = true
            }
            
        }
        
        if(sodienthoai == ''){
            $('.err_sodienthoai').html('<p>Please do not leave your phone number blank!</p>')
            CHECK_VALIDATE = false
        }else{
            if (!isNaN(sodienthoai)) {

                if(sodienthoai.length != 10){
                    $('.err_sodienthoai').html('<p>Invalid phone number!</p>')
                    CHECK_VALIDATE = false
                }else{
                    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
                    if(format.test(sodienthoai)){
                        $('.err_sodienthoai').html('<p>Số điện thoại không thể có ký tự đặc biệt!</p>')
                        CHECK_VALIDATE = false
                    }else{
                        $('.err_sodienthoai').html('')
                        CHECK_VALIDATE = true
                    }
                }
            }else{
                $('.err_sodienthoai').html('<p>Please enter only phone number!</p>')
                CHECK_VALIDATE = false
            }

        }

        if(matkhau == ''){
            $('.err_matkhau').html('<p>Please do not leave the password blank!</p>')
            CHECK_VALIDATE = false
        }else{

            if(matkhau.length < 6 || matkhau.length > 24){
                $('.err_matkhau').html('<p>Password in the range of 6 - 24 characters!</p>')
                $('.err_nhaplaimatkhau').html('<p>Password in the range of 6 - 24 characters!</p>')
                CHECK_VALIDATE = false
            }else{
                $('.err_matkhau').html('')
                if(matkhau != nhaplaimatkhau){
                    $('.err_nhaplaimatkhau').html('<p>Re-entered password does not match!</p>')
                    CHECK_VALIDATE = false
                }else{
                    $('.err_nhaplaimatkhau').html('')
                    CHECK_VALIDATE = true
                }
            }
        }

        if(nhaplaimatkhau == ''){
            $('.err_nhaplaimatkhau').html('<p>Password can not be blank!!</p>')
            CHECK_VALIDATE = false
        }
        
        if(CHECK_VALIDATE == true){
            $('.thanhcong').html('<p style="margin-top: 20px;">Sign Up Success!</p>')
            localStorage.setItem(taikhoan, JSON.stringify({
                taikhoan: taikhoan,
                hoten: hoten,
                sodienthoai: sodienthoai,
                matkhau: matkhau    
            }));
        }
        
    });
});