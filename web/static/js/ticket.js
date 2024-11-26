function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    if(hours < 10){
        var strTime =  '0' + hours + ':' + minutes + ' ' + ampm;
    }else{
        var strTime = hours + ':' + minutes + ' ' + ampm;
    }
    return strTime;
  }

$(document).ready(function(){
    const days = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];

    const d = new Date();
    let day = days[d.getDay() - 1];
    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = d.getFullYear();

    var curTime = formatAMPM(new Date)

    $(".nov-10").html(day + "<br> " + dd + ", Tháng " + d.getMonth())
    $(".time").html('<p>'+dd+'.'+mm+'.'+yyyy+'</p> <p>'+curTime+'<span> to</span> 05:30PM</p>')


    $(".vekhachle").click(function(e){
        e.preventDefault()
        localStorage.removeItem("orderTicket")
        var tenVe = "SINGKE TICKET"
        var giaVe = "80.000/ 1 ticket"
        var hoatDong = "ALL DAY A WEEK"
        var maCode = "#20200702"

        localStorage.setItem("orderTicket", JSON.stringify({
            tenVe: tenVe,
            giaVe: giaVe,
            hoatDong:hoatDong,
            maCode: maCode
        }))

        window.location.href = "pay.html"
    })

    $(".vetapthe").click(function(e){
        e.preventDefault()
        localStorage.removeItem("orderTicket")
        var tenVe = "COLLECTIVE TICKET"
        var giaVe = "500.000/ 12 ticket"
        var hoatDong = "ALL DAY A WEEK"
        var maCode = "#20320698"

        localStorage.setItem("orderTicket", JSON.stringify({
            tenVe: tenVe,
            giaVe: giaVe,
            hoatDong:hoatDong,
            maCode: maCode
        }))

        window.location.href = "pay.html"
    })

    $(".vedulich").click(function(e){
        e.preventDefault()
        localStorage.removeItem("orderTicket")
        var tenVe = "TRAVEL TICKETS"
        var giaVe = "300.000/ 1 ticket"
        var hoatDong = "Monday to Friday"
        var maCode = "#2080902" 

        localStorage.setItem("orderTicket", JSON.stringify({
            tenVe: tenVe,
            giaVe: giaVe,
            hoatDong:hoatDong,
            maCode: maCode
        }))

        window.location.href = "pay.html"
    })

    
});