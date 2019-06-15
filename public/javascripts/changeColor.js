var colorAry = ['orangeRed','yellow','blue','white','black']
$('.js-change-color').each(function(){
    var colorIndex = 0
    $(this).on('click', function(){
        if(colorIndex == colorAry.length - 1) {
            colorIndex = -1
        }
        colorIndex++
        $(this).parent().css('backgroundColor', colorAry[colorIndex])
    })
})