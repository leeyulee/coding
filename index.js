$("documant").ready(function(){

    let pro_chk = false;

    function probar(id, per){
        let bar = new ProgressBar.SemiCircle(id,{
            strokeWidth: 4,
            duration: 1400,
            color: "hotpink",
            trailWidth: 4,
            step: function(state, circle){
                circle.setText(Math.round(circle.value() * 100)+"%")
            }

        })
        bar.animate(per)
    }



    $(".home h2").textillate({
        in:{
            effect: "tada",
            shuffle: true,
            callback: function(){
                $(".home p").css("opacity", 1).textillate("start")
            }
        } 
    })
    $(".home p").textillate({
        in:{
            effect: "bounce",
            shuffle: true,
            callback: function(){
                $(".home").css("background-color", "#555").css("transition", "1s")
                $("#particle").css("opacity", 1)
            }
        } 
    })

    let Fullpage = new fullpage(".fullpage",{
        sectionsColor: ["#3372d6", "#076a44", "#7da01b", "#eea", "#46697a"],
        anchors: ["home", "about", "skill", "work", "contact"],
        slidesNavigation: true,
        afterLoad: function(origin, destination){

        $(".nav ul li").removeClass("on").eq(destination.index).addClass("on")
        if(destination.index > 0){
            $(".nav").fadeIn()
        }else{
            $(".nav").fadeOut()
        }

        if(destination.index == 1){
            $(".about .left > p").eq(0).addClass("animated bounceInDown").css("opacity", 1)
            $(".about .left h2").addClass("animated tada").css("opacity", 1).css("transition-delay", "1400ms").css("animation-delay", "1400ms")
            $(".about .left img").addClass("animated heartBeat").css("opacity", 1).css("transition-delay", "1700ms").css("animation-delay", "1700ms")
            $(".about .left > p").eq(1).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay", "2000ms").css("animation-delay", "2000ms")
            $(".about .left > p").eq(2).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay", "2300ms").css("animation-delay", "2300ms")
            $(".about .left > p").eq(3).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay", "2600ms").css("animation-delay", "2600ms")

            $(".about .right h2").addClass("animated slideInDown").css("opacity", 1).css("transition-delay", "2900ms").css("animation-delay", "2900ms")
            $(".about .right p").eq(0).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay", "3200ms").css("animation-delay", "3200ms")
            $(".about .right p").eq(1).addClass("animated slideInRight").css("opacity", 1).css("transition-delay", "3500ms").css("animation-delay", "3500ms")
            $(".about .right p").eq(2).addClass("animated heartBeat").css("opacity", 1).css("transition-delay", "3800ms").css("animation-delay", "3800ms")
            $(".about .right .props-wrap .prop").eq(0).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay", "4100ms").css("animation-delay", "4100ms")
            $(".about .right .props-wrap .prop").eq(1).addClass("animated slideInDown").css("opacity", 1).css("transition-delay", "4400ms").css("animation-delay", "4400ms")
            $(".about .right .props-wrap .prop").eq(2).addClass("animated slideInRight").css("opacity", 1).css("transition-delay", "4700ms").css("animation-delay", "4700ms")
            $(".about .right .props-wrap .prop").eq(3).addClass("animated slideInLeft").css("opacity", 1).css("transition-delay", "5000ms").css("animation-delay", "5000ms")
            $(".about .right .props-wrap .prop").eq(4).addClass("animated slideInUp").css("opacity", 1).css("transition-delay", "5300ms").css("animation-delay", "5300ms")
            $(".about .right .props-wrap .prop").eq(5).addClass("animated slideInRight").css("opacity", 1).css("transition-delay", "5600ms").css("animation-delay", "5600ms")
            $(".about .right .props-wrap .prop p").addClass("animated tada").css("opacity", 1).css("transition-delay", "6600ms").css("animation-delay", "6600ms")
            $(".about .sep-line").css("height", "60%").css("transition-delay","7000ms")
        }else if(destination.index == 2){
            if(pro_chk == true){
                return;
            }
            $(".skill h2").css("opacity", 1).addClass("animated bounceInDown on")
            $(".skill .progress").eq(0).delay(1700).animate({
                opacity: 1
            }, 1000, function(){
                probar("#html", 0.7)
            })
            $(".skill .progress").eq(1).delay(2000).animate({
                opacity: 1
            }, 1000, function(){
                probar("#css", 0.8)
            })
            $(".skill .progress").eq(2).delay(2300).animate({
                opacity: 1
            }, 1000, function(){
                probar("#js", 0.8)
            })
            $(".skill .progress").eq(3).delay(2600).animate({
                opacity: 1
            }, 1000, function(){
                probar("#ps", 0.8)
            })
            $(".skill .progress").eq(4).delay(2900).animate({
                opacity: 1
            }, 1000, function(){
                probar("#ai", 0.8)
            })
            $(".skill .progress").eq(5).delay(3200).animate({
                opacity: 1
            }, 1000, function(){
                probar("#of", 0.8)
            })
            pro_chk = true;
        }else if(destination.index == 3){
            $(".work h2").css("opacity", 1).addClass("animated bounceInDown on")
            $(".work .container ul li").css("transition-delay", "2000ms").css("opacity", 1)
            $(".work .fp-slidesNav, .work .fp-controlArrow.fp-next, .work .fp-controlArrow.fp-prev, .work .container .slide").css("transition-delay", "2000ms").css("opacity", 1)
            $(".work .container ul li").eq(0).addClass("on")

        }else if(destination.index == 4){
            $(".contact h2").css("opacity", 1).addClass("animated bounceInDown on")
            $(".contact .content").css("opacity", 1)
            $(".contact .content .left").css("opacity", 1).addClass("animated bounceInLeft").css("animation-delay","3000ms")
            $(".contact .content .center").css("opacity", 1).addClass("animated bounceInLeft").css("animation-delay","3500ms")
            $(".contact .content .right").css("opacity", 1).addClass("animated bounceInLeft").css("animation-delay","4000ms")
        }
    },
    afterSlideLoad: function(section, origin, destination){
        let params = {
            section : section,
            origin : origin,
            destination : destination
        }
        $(".work .container ul li").css("transition", "0.4s")
        $(".work .container ul li").removeClass("on").eq(destination.index).addClass("on")

    }

    })
})