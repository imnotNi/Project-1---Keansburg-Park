$(document).ready(function(){ 
    try{
        var login = JSON.parse(localStorage.getItem("login"))
        var user = JSON.parse(localStorage.getItem(login.taikhoan))
        $('#hoDem').val(user.hoten.split(' ')[0] + " " + user.hoten.split(' ')[1])
        $('#ten').val(user.hoten.split(' ')[2])
    }catch(e){

    }

    $('#lienHe').click(function(e){
        e.preventDefault()
        var hoDem = $('#hoDem').val()
        var ten = $('#ten').val()
        var tinNhan = $('.tinNhan').val()
        var err = false

        if(hoDem == ""){
            $('.errHoDem').text('Vui lòng không bỏ trống họ đệm!')
            err = true
        }else{
            if(hoDem.length < 6 || hoDem.length > 24){
                $('.errHoDem').text('Họ đệm trong khoảng từ 6 - 24 ký tự!')
                err = true
            }else{
                $('.errHoDem').text('')
                err = false
            }
        }

        if(ten == ""){
            $('.errTen').text('Vui lòng không bỏ trống tên!')
            err = true
        }else{
            if(ten.length > 24){
                $('.errTen').text('Tên trong không lớn hơn 24 ký tự!')
                err = true
            }else{
                $('.errTen').text('')
                err = false
            }
        }

        if(tinNhan == ""){
            $('.errTinNhan').text('Vui lòng nhập tin nhắn!')
            err = true
        }else{
            if(tinNhan.length > 300){
                $('.errTinNhan').text('Tin nhắn không được vượt quá 300 ký tự!')
                err = true
            }else{
                $('.errTinNhan').text('')
                err = false
            }
        }

        if(err == false){
            $(".thanhcong").text("Contact sent successfully!")
            $('.tinNhan').val('')
        }

        
    })
});