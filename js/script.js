$(document).ready(function () {
	
    $(window).scroll(function () {
	    if ($(this).scrollTop() > 500) {
	        $('#back-to-top').fadeIn();
	    } else {
	        $('#back-to-top').fadeOut();
	    }
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
	    $('#back-to-top').tooltip('hide');
	    $('body,html').animate({
	        scrollTop: 0
	    }, 800);
	    return false;
	});

	$('#back-to-top').tooltip('show');


	// TODO: Add any custom classes with 'position: fixed' to the selector below
    var fixedCls = '.f-nav';
    var fixedBtn = "#back-to-top"
    var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
    $.fn.modal.Constructor.prototype.setScrollbar = function () {
        oldSSB.apply(this);
        if (this.bodyIsOverflowing && this.scrollbarWidth)
            $(fixedCls).css('padding-right', this.scrollbarWidth);
            $(fixedBtn).css('right', this.scrollbarWidth + 20);
    }

    var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
    $.fn.modal.Constructor.prototype.resetScrollbar = function () {
        oldRSB.apply(this);
        $(fixedCls).css('padding-right', '');
        $(fixedBtn).css('right', 20);
    }

	// $(".modal").on("show.bs.modal", function(){
	// 	console.log($("body").attr("cz-shortcut-listen"));
	// 	$("body").one("style", function(e){
	// 		var padVal = parseInt($("body").css("padding-right"));				
	// 		$('#back-to-top').css("right", (20+padVal) + "px");
	// 		console.log(e);
	// 	});
	// })
	// if ($(".modal-slider").height()) {}
	

	//  <!-- RESPONSIVE

	$(".header .megamenu.nav>li>a.tb_menu_item").hover(function(){
		$(this).parent().css({
			"color":"#fff",
			"background-color": "#b1006b",
			"transition": "all .2s"
		});
	}, function(){
		$(this).parent().css({
			"color":"#fff",
			"background-color": "inherit"
		});
	});

	function moveElem(stand, target, dest){
		var clone = $(target).clone();
		$(target).remove();
		if(stand == "prepend"){
			$(dest).prepend(clone);
		}else if(stand== "append"){
			$(dest).append(clone);
		}
	}

	var check = 0;
	function responsive(){
		if ($(".desktop_check-jquery").is(":hidden")) {
			//SEARCH_TABLET
			moveElem("append", ".header-search", ".header-top");
			//MENU_TABLET
			moveElem("prepend", ".header .megamenu", ".header-top-menu .col-md-12");
			$(".megamenu.nav>li>a").addClass("tb_menu_item");
			check = 1;
		}else{
			//SEARCH_TABLET
			moveElem("prepend", ".header-search", ".header-bot .col-md-12");
			//MENU_TABLET
			moveElem("append", ".header .megamenu", ".header-bot .col-md-12");
			$(".megamenu.nav>li>a").removeClass("tb_menu_item");
			check = 2;		
		}
	}
	function checkMedia(){
		var screen_width_before;
		if ($(".desktop_check-jquery").is(":hidden")) {
			screen_width_before = 1;
		}else{
			screen_width_before = 2;
		}
		return screen_width_before;
	}
	$(window).resize(function(){
		if(check != checkMedia()){
			responsive();
		}
	});
	responsive();
	//  RESPONSIVE-->

	var isInit = false;

	function initSlide () {

		if($(".mobile_check-jquery").is(":visible")) {

			if(isInit || !$('.project').hasClass('index-p')) return;

			$('.project').unwrap();
			var $wrapper = $('.project-slide');
			$wrapper.find('.project').sort(function(a, b) {
			    return +a.getAttribute('data-sort') - +b.getAttribute('data-sort');
			}).appendTo($wrapper);
			$('.project').wrap('<div class="project-slide-wrapp"></div>');
			$('.project').wrap('<div></div>');
			$('.project-slide').slick({
				responsive: [
					{
						breakpoint: 2000,
				        settings: "unslick"
					},
					{
						breakpoint: 768,
				        settings: {
			        		infinite: true,	
				          slidesToShow: 1,
				          slidesToScroll: 1
				        }
					}

				],
				prevArrow: $('.constProject-slide-prev'),
	  			nextArrow: $('.constProject-slide-next')
			});

			isInit = true;			
		} else {
			var project = $('.project');
			if(!project.parent().hasClass('col-lg-4')) {

				isInit = false;

				var appended = '';

				$('.project_top').each(function(index ){
					if(index >= 3) return;

					

					var sibling = $(this).data('bottom');
					
					sibling = $('#p' + sibling);

					

					sibling = '<div class="' + sibling.attr('class') +'" id="'+sibling.attr('id')+'" data-sort="'+
					sibling.data('sort')+'" data-bottom="'+ sibling.data('bottom')+ '" >'+
					sibling.html()+ '</div>';

					var poject = '<div class="' + $(this).attr('class') + '" data-sort="'
					+ $(this).data('sort') + '" data-bottom="' +$(this).data('bottom')+ '" >'+
					$(this).html() + '</div>';

					var html =  poject +  sibling;


					appended += '<div class="col-lg-4 col-xs-4">' + html + '</div>';
				})


				$('.project-slide').remove();

				var blockContent = $('.index-constBlocks .container').html();

				$('.index-constBlocks .container').html('');

				appended = '<div class="row project-slide">'+ appended+ '</div>'

				$('.index-constBlocks .container').append(appended + blockContent);				
			}
		}


	}

	initSlide();

	$(".header-search .search-btn").hover(function(){
		$(".header .open .dropdown-menu").first().stop(true, true).slideUp(200);;
		// $(".header .open").removeClass("open");
	});

	// HEADER SEARCH
	$("body").on("click", ".header-search .search-btn", function(e){
		if ($(this).siblings("input").hasClass("visible-input")) {
			$(this).closest("form").submit();
		}else{
			$(this).siblings("input").addClass("visible-input");
			$(this).siblings("input").css("z-index", "2");

		}
	});
	$(document).click(function(event) { 
	    if(!$(event.target).closest('.header-search input').length && !$(event.target).closest('.header-search .search-btn').length ) {
	        $(".header-search input").removeClass("visible-input");
	        setTimeout(function(){
				$(".header-search input").css("z-index", "-1");
			}, 400);
	    }        
	});

	$(".header-top .menu-toggle").click(function(){
		var menu = $(".header-top-menu");
		if(!menu.is(':visible')){
			menu.slideDown(300);
			$(this).toggleClass("active");
			return;
		}
		menu.slideUp(200);
		$(this).toggleClass("active");
	});

	$('.dropdown, .navbar-right .btn-group').on('show.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});

	$(".navbar-right").on("click", "li", function(e){
		var inner = $(".navbar-right .choose-city").html();
		// .wrap("<li>" + $( this ).text() + "</li>")
		
		$(".navbar-right ul").append("<li>" + inner + "</li>");
		$(".navbar-right .choose-city").html($(this).html());
		$(this).detach();
	});

	$('.dropdown, .navbar-right .btn-group').on('hide.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
	});

	$('.megamenu li.dropdown').hover(function() {
	  if ($(".desktop_check-jquery").is(":visible")) {
	  	$(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(300);
	  	$(this).find('a.dropdown-toggle').stop(true, true).delay(200).addClass("open");
	  }	
	}, function() {
	  if ($(".desktop_check-jquery").is(":visible")) {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
		  $(this).find('a.dropdown-toggle').stop(true, true).delay(200).removeClass("open");
	  }	
	});


	$('.megamenu .mobile-toggle').click(function() {
		$('.megamenu a.dropdown-toggle').removeClass("open");
	  	$(this).siblings('a.dropdown-toggle').stop(true, true).delay(200).addClass("open");
	});
	$('.megamenu .mobile-toggle a').click(function(e) {
		e.stopPropagation();
	});


	$('.main-slider').slick({
		// autoplay: true,
  		// autoplaySpeed: 3000,
		prevArrow: $('.slide-prev'),
	  	nextArrow: $('.slide-next'),
	});

	$('.index-slider .slide-arrow').click(function() {
    	$('.slide-arrow > span').hide();
    	$(this).find('span').show();
    });

	// $('.index-constBlocks .project.index-p').hover(function() {
	// 	$(this).toggleClass("project-hover");
	// 	$(this).siblings(".project").toggleClass("project-hover-sibling");
	// });

	$(document).on('mouseover mouseout', '.index-constBlocks .project.index-p', function(){
		$(this).toggleClass("project-hover");
		$(this).siblings(".project").toggleClass("project-hover-sibling");
	})



	$(window).resize(function() {
		initSlide();
	})

	$(window).on('resize orientationchange', function() {
	  $('.const-slider-2, .const-slider, .design-slider, .about-slider').slick('resize');
	});

	$("[data-target='#layoutModal']").click(function(e){
		src = $(this).children("img").attr("src");
		$('#layoutModal img').attr("src", src);
		$('#layoutModal').modal('show');
	});
	/*INDEX SCRIPTS*/
	(function layoutSlider(){
		console.log($("#layout-modal .modal-content"));
		$("#layoutModal .modal-content").append('<div class="arrows"><span class="next"></span><span class="prev"></span></div>');
		var layoutArr;
		var curr;
		$("[data-target='#layoutModal']").click(function(e){
			layoutArr = $.makeArray($("[data-target='#layoutModal']"));
			curr = $.inArray($(this)[0],layoutArr);
			
			
		});
		$('#layoutModal .next').click(function(e){
			if (curr==layoutArr.length-1) {
				curr=0;
			}else{
				curr++;
			}
			layoutArr[curr].click();
		});
		$('#layoutModal .prev').click(function(e){
			if (curr==0) {
				curr=layoutArr.length-1;
			}else{
				curr--;
			}
			layoutArr[curr].click();
		});
	}());


	$("[data-target='#primeSliderModal']").click(function(e){
		e.preventDefault();
		src = $(this).attr("src");
		$('#primeSliderModal img').attr("src", src);
		$('#primeSliderModal').modal('show');
		// $('#primeSliderModal .modal-dialog').css("max-height", $(this).height());
	});

	$("[data-target*='#']").click(function(e){
		var id = $(this).attr("data-target");
		if ($(id).hasClass("modal")) {
			$(id).modal('show');
		}
	});






	var nav = $('.menu-fix');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 125 && $(".desktop_check-jquery").is(":visible")) {
            nav.addClass("f-nav");
        } else if ($(this).scrollTop() > 125 && $(".desktop_check-jquery").is(":hidden")){
        	$(".menu-fix-mobile").addClass("f-nav");
        } else {
        	$(".menu-fix-mobile").removeClass("f-nav");
            nav.removeClass("f-nav");
        }
    });
	

	$("[data-target='#indexVideoModal']").click(function(e){
      e.preventDefault();
      $('#indexVideoModal').modal('show');
      var src = $(this).attr("data-src");
      $('#indexVideoModal iframe').attr("src", src + "?rel=0&autoplay=1");

    });

	$(".pCart-info .show-more").click(function(e){
		e.preventDefault();
		$(this).children("i").toggleClass("fa-angle-up");
		$(this).siblings("ul").stop().slideToggle();
	});

	$('.video-modal').on('show.bs.modal', function(){
		$(".modal-backdrop.in").addClass("black-bg");
	})
    $('.video-modal').on('hide.bs.modal', function (e) {
	  $(this).find("iframe").attr("src", " ");
	  console.log("hello");
	});

    $('.index-readyProjects .project-slider').slick({
    	infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: $('.project-slide-prev'),
	  	nextArrow: $('.project-slide-next'),
	  	responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		 ]

	});

	var designSider = $('.design-slider');

	designSider.on('init', function(event, slick){
        $('.design-slider .slick-dots').appendTo('.design-slider-dots');
    })

	designSider.slick({
    	infinite: false,
    	dots: true,
    	speed: 100,
	    customPaging : function(slider, i) {
	        var id = $(slider.$slides[i]).data('id');
	        var text = $(slider.$slides[i]).data('text');
	        return '<span class="dot-id">'+id+'</span><p class="dot-text">'+text+'</p>';
	    },
	    fade: true,
	    cssEase: 'linear',
		prevArrow: $('.design-slide-prev'),
	  	nextArrow: $('.design-slide-next')
	})

	designSider.on('afterChange', function(event, slick, currentSlide, nextSlide){
         var id = $(this).find('.slick-active').data('id');
         $('.design-img').fadeOut(1500);
         $('#design-'+id+'').fadeIn(1500);
         $(this).find('.slick-slide').removeClass('animated tada');
         $(this).find('.slick-active').addClass('animated tada');
    })

    designSider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
         // $(this).find('.slick-active').addClass('animated shake');
    })
	
	$('.index-construction .const-slider').slick({
    	infinite: true,
		slidesToShow: 5,
		slidesToScroll: 4,
		responsive: [
		    {
		      breakpoint: 1400,
		      settings: "unslick"
		    },
		    {
	    		breakpoint: 768,
			    settings: {
			      slidesToShow: 2,
			      slidesToScroll: 2
			    }
		    },
		    {
	    		breakpoint: 550,
			    settings: {
			      slidesToShow: 1,
			      slidesToScroll: 1
			    }
		    }
		 ],
		prevArrow: $('.const-slide-prev'),
	  	nextArrow: $('.const-slide-next')
	});

	$('.index-construction .const-slider-2').slick({
    	infinite: true,
		slidesToShow: 5,
		slidesToScroll: 4,
		responsive: [
		    {
		      breakpoint: 1400,
		      settings: "unslick"
		    },
		    {
	    		breakpoint: 768,
			    settings: {
			      slidesToShow: 2,
			      slidesToScroll: 2
			    }
		    },
		    {
	    		breakpoint: 550,
			    settings: {
			      slidesToShow: 1,
			      slidesToScroll: 1
			    }
		    }
		 ],
		prevArrow: $('.const-2-slide-prev'),
	  	nextArrow: $('.const-2-slide-next')
	});

	$('.index-construction .decor-slider').slick({
    	infinite: true,
		slidesToShow: 6,
		slidesToScroll: 4,
		responsive: [
		    {
		      breakpoint: 1400,
		      settings: "unslick"
		    },
		    {
	    		breakpoint: 768,
			    settings: {
			      slidesToShow: 2,
			      slidesToScroll: 2
			    }
		    },
		    {
	    		breakpoint: 550,
			    settings: {
			      slidesToShow: 1,
			      slidesToScroll: 1
			    }
		    }
		 ],
		prevArrow: $('.const-slide-prev'),
	  	nextArrow: $('.const-slide-next')
	});

	
	$('.about-slider').slick({
    	infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		    {
	    		breakpoint: 768,
			    settings: {
			      slidesToShow: 2,
			      slidesToScroll: 2
			    }
		    },
		    {
	    		breakpoint: 550,
			    settings: {
			      slidesToShow: 1,
			      slidesToScroll: 1
			    }
		    }
		 ],
		prevArrow: $('.about-slide-prev'),
	  	nextArrow: $('.about-slide-next')
	});




	//FORM_SELECTIZE
	 if ($(".form-selectize").hasClass("form-selectize")) {
	 	$(".form-selectize").selectize();
	 }



        
    /*TOP___THUMBNAIL___SLIDERS*/
        function privateSlidersInit(prime, nav, opt){
          var privOptSlider = $(opt).slick({
            dots: false,
            arrows: false,
            asNavFor: ".nav-slides",
            infinite: false,
            speed: 400,
            responsive: [
              {
                breakpoint: 1200,
                settings:{
                  slidesToShow: 1,
                  adaptiveHeight: true
                }
              }
            ]
          });
          var privNavSlider = $(nav + " .nav-slides").slick({
            // arrows:false,
            dots:false,
            infinite: false,
            nextArrow: $(nav + " .nav-next"),
            prevArrow: $(nav + " .nav-prev"),
            asNavFor: opt,
            slidesToScroll: 1,
            speed: 400,
            focusOnSelect: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  useTransform:false,
                  infinite: true,
                  slidesToScroll: 1,
                  variableWidth: true,
                  slidesToShow: 5
                }
              }
            ]
          });
          privNavSlider.on("beforeChange", function(e, slick, curr, next){
            var src = $(slick.$slides[next]).children("img").attr("src");
            $(prime + " img").hide().attr("src", src).fadeIn(350);

           
          });
          	if ($("#private-prime-1").attr("id") == "private-prime-1") {
          		$(prime).swipe( {
	            	//Generic swipe handler for all directions
	            	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
	            	  	if (direction == "right") {
	                 	 	$(nav + " .nav-slides").slick("slickPrev");                  
	              		} else if (direction == "left"){                  
	               	   		$(nav + " .nav-slides").slick("slickNext");
	              		}
		            },
		            //Default is 75px, set to 0 for demo so any distance triggers swipe
		            threshold: 20
		  	  	});
          	}
          	
        }
        privateSlidersInit("#private-prime-1", "#private-nav-1", "#private-opt-1");
        privateSlidersInit("#private-prime-2", "#private-nav-2", "#private-opt-2");

        function privatePricesSlick(){
          $(".private-prices .price-slider").slick({
            centerMode: true,
            infinite: true,
            focusOnSelect: true,
            variableWidth: true,
            arrows: false,
            initialSlide: 2,
            // lazyLoad: 'progressive',
            responsive: [
              {
                breakpoint: 1200,
                settings: "unslick"
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  variableWidth: false,
                  centerMode: false,
                  arrows: true,
                  slidesToScroll: 1
                }
              }

            ]
          });
        }
        privatePricesSlick();
        function runSlider() {
          if ($(".tablet_check-jquery").is(":visible")) {
            
          } else {
            privatePricesSlick();
          }



          if ($(".mobile_check-jquery").is(":visible")) {
            privateMobSliders();
          }
        }

        var r;

        $(window).resize(function() {
            clearTimeout(r);
            r = setTimeout(runSlider, 500);
        });

		//PRIVATE UNDER___BANNER___SLIDER
        function privateMobSliders(){
          $(".private-advantages .advantages-slider").slick({
            responsive:[
            {
              breakpoint: 9999,
              settings: "unslick"
            },
   //          {
		 //      breakpoint: 1200,
		 //      settings: {
			//     slidesToShow: 3,
	  //           arrows: false,
	  //           adaptiveHeight: true
			//   }		    
			// },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: true,
                adaptiveHeight: true
              }
            }
            ]
          });
          $(".private-statistics .stats-list").slick({
            responsive:[
            {
              breakpoint: 9999,
              settings: "unslick"
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: false,
                adaptiveHeight: true,
                variableWidth: true,
                arrows: true
              }
            }
            ]
          });
        }
        privateMobSliders();


		$(".article-slider .nav-slides").on("init", function(event,slick){
			if (slick.$slides.length == 1) {
				$(this).parent().hide();
			}
		})

        //PRIVATE EXAMPLES MODAL
        $("[data-target='#examples-modal']").click(function(e){
			e.stopPropagation();
			$('#examples-modal').modal('show');
		});
        function examplesMobSlick(){
            $(".examples-modal .items-wrap").slick({
              responsive:[
              {
                breakpoint: 10000,
                settings: "unslick",
              },
              {
                breakpoint: 768,
                settings: {
                  variableWidth: true,
                  adaptiveHeight:true,
                  arrows: true,
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 500,
                settings: {
                  variableWidth: true,
                  adaptiveHeight:true,
                  arrows: true,
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
              ]
            });
          }

          examplesMobSlick();

          function runExamplesModal() {
            if ($(".mobile_check-jquery").is(":visible") && !($(".examples-modal .items-wrap").hasClass("slick-initialized"))) {
              examplesMobSlick();
            }
          }

          var albumTimeout;
          $(window).resize(function(){
            clearTimeout(albumTimeout);
            albumTimeout = setTimeout(runExamplesModal, 500);
          });


// $('input[name=phone]').inputmask("+7(999)-999-99-99");


});