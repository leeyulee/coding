$("document").ready(function(){

    $(".nav ul li").eq(0).addClass("on")
    $(".indicator ul li").eq(0).addClass("on")

    let count = 0;
    $(window).on("mousewheel DOMMouseScroll", function(e){
        let delta = e.originalEvent.wheelDelta;
        let firefox = e.originalEvent.detail

        if($(".section").is(":animated")){
            return;
        }



        if(delta < 0 || firefox < 0){
            if(count >= $(".section").length - 1){
                count >= $(".section").length - 1;
                return;
            }

            //카운트는 기본적으로0 js는 순서가 아주 중요!!!!
            $(".section").eq(count).stop().animate({
                top: "-100%"
            }, 1000)
            count++;
            $(".section").eq(count).css("top", "100%").animate({
                top: 0
            }, 990)


        }else{
            if(count <= 0){
                count = 0;
                return;
            }
            $(".section").eq(count).stop().animate({
                top: "100%"
            }, 1000)
            count--;;
            $(".section").eq(count).css("top", "-100%").animate({
                top: 0
            }, 990)

        }
        console.log(count)
        if(count > 0){
            $(".nav").fadeIn()

        }else{
            $(".nav").fadeOut()

        }
        $(".indicator ul li").removeClass("on").eq(count).addClass("on")
        $(".nav ul li").removeClass("on").eq(count).addClass("on")
    })

    $(".indicator ul li, .nav ul li").click(function(){

        if($(".section").is(":animated")){
            return;
        }

        //휠 내린거
        if(count < $(this).index()){
            $(".section").eq(count).stop().animate({
                top: "100%"
            }, 1000)
            
            $(".section").eq($(this).index()).css("top", "-100%").animate({
                top: 0
            }, 990)



        //같은번호
        }else if(count == $(this).index()){
            return;


        //휠 올린거
        }else{
            $(".section").eq(count).stop().animate({
                top: "100%"
            }, 1000)
            
            $(".section").eq($(this).index()).css("top", "-100%").animate({
                top: 0
            }, 990)

        }
        count = $(this).index();
        if(count > 0){
            $(".nav").fadeIn()

        }else{
            $(".nav").fadeOut()

        }
        $(".indicator ul li").removeClass("on").eq(count).addClass("on")
        $(".nav ul li").removeClass("on").eq(count).addClass("on")
    })

    $("body").swipe({
        swipe: function(evem, direction){
            if($(".section").is(":animated")){
                return;
            }
            if(direction == "up"){
                if(count >= $(".section").length - 1){
                    count >= $(".section").length - 1;
                    return;
                }
    
                //카운트는 기본적으로0 js는 순서가 아주 중요!!!!
                $(".section").eq(count).stop().animate({
                    top: "-100%"
                }, 1000)
                count++;
                $(".section").eq(count).css("top", "100%").animate({
                    top: 0
                }, 990)

            }else if(direction == "down"){
                if(count <= 0){
                    count = 0;
                    return;
                }
                $(".section").eq(count).stop().animate({
                    top: "100%"
                }, 1000)
                count--;;
                $(".section").eq(count).css("top", "-100%").animate({
                    top: 0
                }, 990)

            }
        }
    })
})