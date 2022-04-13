$("document").ready(function(){
    //alert("")
    /*
    배열 = 변수선언 변수명 = [값] 값은 여러개 작성 가능하며  ,로 이어서 사용할수 있다. 사용법은 변수명[번호] 로 사용할 수 있다.
    예를 들어 (예제기준) easing[1] 사용시 easeOutBounce 가 적용된다.



    마우스 휠 이벤트는 파이어폭스 브라우저에는 존재하지 않는다.
    파이어 폭스릐 경우 별도의 이벤트인 DOMMouseScroll 이벤트를 사용한다.
    파이어 폭스 브라우저를 무시할 경우 위 내용은 생략할 수 있다.
    jquery에서는 2개의 이벤트를 동시에 사용할 수 없어 다중 이벤트 적용할 수 있도록 .on 이벤트를 적용한다.
     */
    
    $(".indicator ul li").eq(0).addClass("on")
    $(".nav ul li").eq(0).addClass("on")

    let count = 0;
    let easing = ["easeInQuad","easeOutBouncs","easeIncirc","easeInSine","easeInOutBounce"]//,-여러개 속성을 적용할때는 [] 이 괄호로 사용한다.
    $(window).on("mousewheel", function(e){
        let delta = e.originalEvent.wheelDelta;
        //console.log(delta)

        if($("html, body").is(":animated")){
            return
        }

        if(delta < 0){
            count++;
            if(count > $(".section").length - 1){
                count = $(".section").length - 1
            }
        }else{
            count--;
            if(count < 0){
                count = 0;
            }
        }
        console.log(count)

        if(count > 0){
            $(".nav").fadeIn()
        }else{
            $(".nav").fadeOut()
        }
        $("html, body").stop().animate({
            scrollTop: $(".section").height() * count
        }, 1000)

        $(".indicator ul li").removeClass("on").eq(count).addClass("on")
        $(".nav ul li").removeClass("on").eq(count).addClass("on")

    })

    $(".indicator ul li, .nav ul li").click(function(){
        count = $(this).index();
        $("html, body").stop().animate({
            scrollTop: $(".section").height() * count
        }, 1000, easeing[count])

        $(".indicator ul li").removeClass("on").eq(count).addClass("on")
        $(".nav ul li").removeClass("on").eq(count).addClass("on")

        if(count > 0){
            $(".nav").fadeIn()
        }else{
            $(".nav").fadeOut()
        }
    })

    $("body").swipe({
        swipe: function(even, direction){
            if(direction == "up"){
                //alert("위로")
                count++;
                if(count > $(".section").length - 1){
                    count = $(".section").length - 1
                }
            }else if(direction == "down"){
                //alert("아래로")
                count--;
            if(count < 0){
                count = 0;
            }
            }/*else if(direction == "left"){
                //alert("왼쪽")
            }else if(direction == "right"){
                //alert("오른쪽")
            } 화면상에서 옆으로 스크롤을 넘겨야할때 사용한다.*/
            if(count > 0){
                $(".nav").fadeIn()
            }else{
                $(".nav").fadeOut()
            }
            $("html, body").stop().animate({
                scrollTop: $(".section").height() * count
            }, 1000)
    
            $(".indicator ul li").removeClass("on").eq(count).addClass("on")
            $(".nav ul li").removeClass("on").eq(count).addClass("on")
    
        }
    })
})