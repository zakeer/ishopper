(function($) {
    $.material.init();

    $(window).scroll(function(event) {
        /* Act on the event */
        var scroll = $(window).scrollTop();
        if (scroll > 65) {
            $("#main-header").addClass('shadow');
        } else {
            $("#main-header").removeClass('shadow');
        }
    });

    var megaMenu = jQuery('.mega-menu');

    $(document).click(function(event) {
        var el = $(event.target);

        if (!el.hasClass('glyphicon-search') && !el.hasClass('menu-item') && !el.parent().is("#main-menu a.menu-item") && !el.is('.mega-menu')) {
            megaMenu.css({
                height: 0
            });
            megaMenu.removeClass("active");
            $("#main-menu li").removeClass('active');
            $("#main-menu li").css({
            	width: 45 + "%"
            })
            $("#main-menu li.search").css({
            	width: 10 + "%"
            })
        }
    });

    $(".glyphicon-search").on("click", function() {
    	console.log($(this).parents("li"));
    	$(this).parents("li").css({
    		width: 100 + "%"
    	})

    	$(this).parents("li").siblings().css({
    		width : 0
    	})
    })


    jQuery("#main-menu li:not('.search') a").on("click", function() {
        var parentLi = $(this).parent()
        if (parentLi.hasClass("active")) {
            parentLi.removeClass("active");
            megaMenu.css({
                height: 0
            });
            megaMenu.removeClass("active");


        } else {
            parentLi.addClass('active').siblings().removeClass("active");
            var dataSrc = jQuery(this).data("src");
            var dthMenu = megaMenu.find('section.dth-menu');
            var dataMenu = megaMenu.find('section.data-menu');
            megaMenu.addClass('active');
            if (dataSrc == "dth") {
                console.log("dth");
                megaMenu.height(dthMenu.innerHeight());
                dthMenu
                    .removeClass("fadeOutRight").addClass("fadeInRight").siblings().removeClass("fadeInRight").addClass("fadeOutRight");
            } else {
                console.log("data");
                megaMenu.height(dataMenu.innerHeight());
                dataMenu
                    .removeClass("fadeOutRight").addClass("fadeInRight").siblings().removeClass("fadeInRight").addClass("fadeOutRight");
            }

        }



    })

})(jQuery)
