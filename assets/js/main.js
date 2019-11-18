jQuery(document).ready(function ($) {
	// $("body").on("contextmenu", false);

	if ($('#js-history-slider').length) {
		let historySlider = function () {
			$('#js-history-slider').slick({
				arrows: false,
				fade: true,
				dots: true,
				responsive: [{
					breakpoint: 500,
					settings: {
						dots: false
					}
				}]
			});

			$('.history__buttons .history-arow--left').on('click', function (e) {
				$('#js-history-slider').slick('slickNext');
			});

			$('.history__buttons .history-arow--right').on('click', function (e) {
				$('#js-history-slider').slick('slickPrev');
			});
		};
		historySlider();
	}

	if ($('#js-partners__slider').length) {
		let partnersSlider = function () {
			$('#js-partners__slider').slick({
				arrows: false,
				dots: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				responsive: [{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}]
			});

			$('.partners .slider__arrow-right').on('click', function (e) {
				$('#js-partners__slider').slick('slickNext');
			});

			$('.partners .slider__arrow-left').on('click', function (e) {
				$('#js-partners__slider').slick('slickPrev');
			});
		};
		partnersSlider();
	}

	if ($('#js-idea__slider').length) {
		let ideaSlider = function () {
			$('#js-idea__slider').slick({
				arrows: false,
				dots: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				responsive: [{
					breakpoint: 1250,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}

				}]
			});

			$('.idea .slider__arrow-right').on('click', function (e) {
				$('#js-idea__slider').slick('slickNext');
			});

			$('.idea .slider__arrow-left').on('click', function (e) {
				$('#js-idea__slider').slick('slickPrev');
			});

		};
		ideaSlider();
	}

	let sandwitch = function () {
		$('.sandwitch-wrap').on('click', function () {
			$('.main-menu').toggleClass('active');

			$(this).find('.sandwitch').toggleClass('sandwitch--active');
		});
	};
	sandwitch();

	let navigation = function () {
		if ($('body').hasClass('page-template-front-page')) {
			const navigation = document.querySelector('#js-navigation');
			const sections = document.querySelectorAll('.section-highlight ');
			let navigationLink = document.querySelectorAll('#js-navigation a');

			function onScroll() {
				const nRect = navigation.getBoundingClientRect();

				for (let i = 0; i < sections.length; i++) {
					const section = sections[i];
					const sRect = section.getBoundingClientRect();


					if (sRect.top < nRect.bottom && sRect.bottom > nRect.bottom) {
						const isDark = section.classList.contains('dark-scroll');

						let sectionId = section.id;

						for (let i = 0; i < navigationLink.length; i++) {
							linkHref = navigationLink[i].href;

							if (linkHref.indexOf(sectionId) >= 0) {
								if (!navigationLink[i].classList.contains('active')) {
									navigationLink[i].classList.add('active');
								}
							} else {
								navigationLink[i].classList.remove('active');
							}
						}

						navigation.classList.toggle('light', !isDark);
						break;
					}
				}
			}

			window.addEventListener('scroll', onScroll);
			onScroll();

			// 			let iranbursabileA = $('#js-navigation a[href="#js-reimbursabile"]');
			// 			if (!iranbursabileA.hasClass('active')) {
			// 				iranbursabileA.addClass('active');
			// 				iranbursabileA.parent().addClass('active');
			// 			}
			// 			iranbursabileA.addClass('active');

			// let navigation = $('#js-navigation');
			//
			// let dark0 = $('.dark-scroll').eq(0);
			// let dark0OfsetTop = dark0.offset().top;
			// let dark0height = dark0.innerHeight();
			//
			// let dark1 = $('.dark-scroll').eq(1);
			// let dark1OfsetTop = dark1.offset().top;
			// let dark1height = dark1.innerHeight();
			//
			// let dark2 = $('.dark-scroll').eq(2);
			// let dark2OfsetTop = dark2.offset().top;
			// let dark2height = dark2.innerHeight();
			//
			// let dark3 = $('.dark-scroll').eq(3);
			// let dark3OfsetTop = dark3.offset().top;
			// let dark3height = dark3.innerHeight();
			//
			// let dark4 = $('.dark-scroll').eq(4);
			// let dark4OfsetTop = dark4.offset().top;
			// let dark4height = dark4.innerHeight();
			//
			// let dark5 = $('.dark-scroll').eq(5);
			// let dark5OfsetTop = dark5.offset().top;
			// let dark5height = dark5.innerHeight();
			//
			// // console.log($('#js-video'));
			// // console.log($('#js-video').offset().top);
			// // console.log($('#js-video').innerHeight());
			// console.log(dark4);
			// console.log(dark4OfsetTop);
			// console.log(dark5);
			// console.log(dark5OfsetTop);
			//
			// $(document).on('scroll', function () {
			// 	let doc = $(this);
			// 	let docScrollTop = doc.scrollTop();
			//
			// 	if(docScrollTop > dark0OfsetTop && docScrollTop < (dark0height + dark0OfsetTop)){
			// 		if(navigation.hasClass('light')){
			// 			navigation.removeClass('light');
			// 		}
			// 	}else if(docScrollTop > dark1OfsetTop && docScrollTop < (dark1height + dark1OfsetTop)){
			// 		if(navigation.hasClass('light')){
			// 			navigation.removeClass('light');
			// 		}
			// 	}else if(docScrollTop > dark2OfsetTop && docScrollTop < (dark2height + dark2OfsetTop)){
			// 		if(navigation.hasClass('light')){
			// 			navigation.removeClass('light');
			// 		}
			// 	}else if(docScrollTop > dark3OfsetTop && docScrollTop < (dark3height + dark3OfsetTop)){
			// 		if(navigation.hasClass('light')){
			// 			navigation.removeClass('light');
			// 		}
			// 	}else if(docScrollTop > dark4OfsetTop && docScrollTop < (dark4height + dark4OfsetTop)){
			// 		if(navigation.hasClass('light')){
			// 			navigation.removeClass('light');
			// 		}
			// 	}else{
			// 		if(!navigation.hasClass('light')){
			// 			navigation.addClass('light');
			// 		}
			// 	}
			// });

		}

		// if ($("#js-reimbursabile").length > 0 && $("#js-partners").length > 0 && $("#js-consultation").length > 0) {
		// 	let navigation = $('#js-navigation');
		// 	let reimbursabile = $("#js-reimbursabile");
		// 	let history = $("#js-history");
		// 	let partners = $("#js-partners");
		// 	let consultation = $("#js-consultation");
		// 	let contacts = $("#js-footer");
		//
		// 	$(document).on('scroll', function () {
		// 		if (
		// 			(navigation.offset().top > reimbursabile.offset().top && navigation.offset().top < (reimbursabile.offset().top + reimbursabile.innerHeight())) ||
		// 			(navigation.offset().top > history.offset().top && navigation.offset().top < (history.offset().top + history.innerHeight())) ||
		// 			(navigation.offset().top > partners.offset().top && navigation.offset().top < (partners.offset().top + partners.innerHeight())) ||
		// 			(navigation.offset().top > consultation.offset().top && navigation.offset().top < (consultation.offset().top + consultation.innerHeight()))
		// 		) {
		// 			if (!navigation.hasClass('light')) {
		// 				navigation.addClass('light');
		// 			}
		// 		} else {
		// 			navigation.removeClass('light');
		// 		}
		//
		// 		if (
		// 			(navigation.offset().top > reimbursabile.offset().top && navigation.offset().top < (reimbursabile.offset().top + reimbursabile.innerHeight()))
		// 		) {
		// 			let iranbursabileA = $('#js-navigation a[href="#js-reimbursabile"]');
		// 			if (!iranbursabileA.hasClass('active')) {
		// 				iranbursabileA.addClass('active');
		// 				iranbursabileA.parent().addClass('active');
		// 			}
		// 			iranbursabileA.addClass('active');
		// 		} else if ((navigation.offset().top > history.offset().top && navigation.offset().top < (history.offset().top + history.innerHeight()))) {
		// 			let iranbursabileA = $('#js-navigation a[href="#js-history"]');
		// 			if (!iranbursabileA.hasClass('active')) {
		// 				iranbursabileA.addClass('active');
		// 				iranbursabileA.parent().addClass('active');
		// 			}
		// 			iranbursabileA.addClass('active');
		// 		} else if ((navigation.offset().top > contacts.offset().top && navigation.offset().top < (contacts.offset().top + contacts.innerHeight()))) {
		// 			let iranbursabileA = $('#js-navigation a[href="#js-footer"]');
		// 			if (!iranbursabileA.hasClass('active')) {
		// 				iranbursabileA.addClass('active');
		// 				iranbursabileA.parent().addClass('active');
		// 			}
		// 			iranbursabileA.addClass('active');
		// 		} else {
		// 			$('#js-navigation a').removeClass('active');
		// 			$('#js-navigation a').parent().removeClass('active');
		// 		}
		//
		//
		// 	});
		//
		//
		// 	$('#js-navigation a').on('click', function (event) {
		// 		let target = $($(this).attr('href'));
		//
		// 		if (target.length) {
		// 			event.preventDefault();
		// 			$('html, body').animate({
		// 				scrollTop: target.offset().top
		// 			}, 1000);
		// 		}
		// 	});
		//
		// }
		//
	};
	navigation();

	let popup = function () {
		$('.popup-btn').on('click', function (e) {
			e.preventDefault();
			$('#js-popup').fadeIn();
		});

		$('.close_popup').on('click', function (e) {
			e.preventDefault();

			$('#js-popup').fadeOut();
		});
	};
	popup();

	let showSearch = function () {
		$('#js-show-search').on('click', function () {
			$('#js-news__search-block').show();
		});
		$('#js-news__search-close').on('click', function () {
			$('#js-news__search-block').hide();
		});
	};
	showSearch();

	let newsShowLink = function () {
		$('.news__item-circle').on('click', function () {
			$(this).parent().find('.news__item-link').toggleClass('active');
		});
	};
	newsShowLink();

	let newsList = function () {
		let jsNewsItem = $('#js-news__list-mobile .news__list-mobile__item');
		let jsNewsListMobileShow = $('#js-news__list-mobile-show');
		let jsNewsMobile = $('#js-news__list-mobile');

		$('#js-news__navigation').on('click', function () {
			if ($(window).width() < 978) {
				$('#js-news__list-mobile').fadeIn();
			}
		});

		jsNewsItem.on('click', function () {
			if ($(window).width() < 978) {
				if (!$(this).hasClass('active')) {
					let thisItemText = $(this).text();
					jsNewsListMobileShow.text(thisItemText);
					jsNewsItem.removeClass('active');
					$(this).addClass('active');
					setTimeout(function () {
						jsNewsMobile.fadeOut();
					}, 500);
				}
			}
		});
	};
	newsList();

	let historyMixitup = function () {
		if ($('#js-news__container').length) {
			let mixer = mixitup('#js-news__container');
		}
	};
	historyMixitup();

	let rusLang = function () {
		let url = location.href;
		if (url == 'https://euconsult.md/ru/' || url == 'https://euconsult.md/ru/finantari-nerambursabile/') {
			$('.finance-gallery').addClass('rus');
		}
	};
	rusLang();

	$('#js-main-menu a[href="#js-footer"]').on('click', function () {
		if ($(window).width() < 1300) {
			$('#js-main-menu').removeClass('active');
			$('.sandwitch').removeClass('sandwitch--active');
		}
	});

	let mainMenuFirstItemActive = function () {
		let url = location.href;
		if (url == 'https://euconsult.md/ru/' || url == 'https://euconsult.md/en/') {
			$('#js-main-menu li:first-child').addClass('current-menu-item');
		}
	};
	mainMenuFirstItemActive();

	let mainMenuActiveElemOfSubMenu = function () {
		let url = location.href;
		let finance = 'finance';
		let moldova = 'moldova';
		let romania = 'romania';
		let news = 'news';
		let idea = 'idea';
		let certificate = 'certificate';

		if (url.includes(finance)) {
			$('#js-main-menu li:nth-child(4)').addClass('current-menu-item');
		}

		if (url.includes(news)) {
			$('#js-main-menu li:nth-child(7)').addClass('current-menu-item');
		}

		if (url.includes(certificate)) {
			$('#js-main-menu li:nth-child(8)').addClass('current-menu-item');
		}

		if (url.includes(idea)) {
			$('#js-main-menu li:nth-child(6)').addClass('current-menu-item');
		}

		if (url.includes(moldova) || url.includes(romania)) {
			$('#js-main-menu li:nth-child(4)').addClass('current-menu-item');
		}
	};
	mainMenuActiveElemOfSubMenu();

	let closeVideoPopup = function () {
		$('.video-popup input[type="submit"]').on('click', function () {
			setTimeout(function () {
				$('.video-popup').fadeOut();
				$('body').removeClass('fixed');
			}, 3500);
		});
	};
	closeVideoPopup();

	let certificateSlider = function () {
		$('#js-certificate__slider').slick({
			arrows: false,
			dots: true
		});

		$('.certificate-section .slider__arrow-right').on('click', function (e) {
			$('#js-certificate__slider').slick('slickNext');
		});

		$('.certificate-section .slider__arrow-left').on('click', function (e) {
			$('#js-certificate__slider').slick('slickPrev');
		});
	};
	certificateSlider();

	let disableVideoInList = function () {
		$('.list-video .sublist li a').addClass('disable');
		$('.list-video .sublist li:first-child a').removeClass('disable');

		$('.list-video .sublist a').on('click', function (e) {
			if ($(this).hasClass('disable')) {
				e.preventDefault();
			}
		});
	};
	disableVideoInList();

	let video = document.querySelector('.no-forward');
	if (video) {
		let vlink = document.querySelector('video > source').getAttribute('src'); // Запишет в переменную vlink ссылку на видео
		let user_id = $('body').attr('data-id');
		vlink = vlink + user_id;

		if (!localStorage.getItem(vlink)) {
			localStorage.setItem(vlink, '0');
		} else {
			video.currentTime = localStorage.getItem(vlink);
		}


		let setVideoTime = function () {
			video.volume = 0.1;

			setInterval(function () {
				let videoTime = video.currentTime;
				localStorage.setItem(vlink, videoTime);
			}, 1000);

			video.addEventListener('pause', function () {
				let videoTime = video.currentTime;
				localStorage.setItem(vlink, videoTime);
			});
		};
		setVideoTime();

		let disableSeeking = function () {
			let previousTime = localStorage.getItem(vlink);

			video.addEventListener('timeupdate', function (evt) {
				if (!video.seeking) {
					previousTime = Math.max(previousTime, video.currentTime);
				}
			}, false);

			video.addEventListener('seeking', function (evt) {
				if (video.currentTime > previousTime) {
					video.currentTime = previousTime;
				}
			}, true);
		};


		let seekVideo = function () {
			if (!$('body').hasClass('administrator')) {
				disableSeeking();
			}
		};
		seekVideo();

		let removeDisableLink = function () {
			if ($('body').hasClass('administrator')) {
				$('.list-video .sublist a').removeClass('disable');
			}
		};
		// removeDisableLink();

		let activeVideoLink = function () {
			$('.list-video .sublist a').each(function () {
				let href = $(this).attr('href');
				if (href === location.href) {
					$(this).addClass('active');
					$(this).removeClass('disable');
				}
			});
		};
		activeVideoLink();

		let removeDisabelLinkInSidebar = function () {
			video.addEventListener('ended', function () {
				$('.list-video .sublist li a.active').closest('li').next().find('a').removeClass('disable');
			});
		};
		removeDisabelLinkInSidebar();

	}

	let showVideoTime = function () {
		let videoPageGallery = document.querySelectorAll('.video-page .video-page__item video');

		for (let i = 0; i < videoPageGallery.length; i++) {
			videoPageGallery[i].addEventListener('loadedmetadata', (event) => {
				var mind = videoPageGallery[i].duration % (60 * 60);
				var minutes = Math.floor(mind / 60);

				var secd = mind % 60;
				var seconds = Math.ceil(secd);
				$(videoPageGallery[i]).parent().append('<span class="video-time">' + minutes + ': ' + seconds + '</span>');

			});
		}
	};
	showVideoTime();

	let showVideoItemPopup = function () {
		$('#js-video-page__content video').on('click', function () {
			$(this).find('.video-page__link').addClass('active');
		});
	};
	showVideoItemPopup();

	let videoSlider = function () {
		$('#js-video-slider').slick({
			dots: true,
			arrows: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 790,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});

		$('#js-video-section__content .slider__arrow-right').on('click', function (e) {
			$('#js-video-slider').slick('slickNext');
		});

		$('#js-video-section__content .slider__arrow-left').on('click', function (e) {
			$('#js-video-slider').slick('slickPrev');
		});

	};
	videoSlider();

	let denied = function () {
		//запрещает выделение мышкой и комбинации клавиш Ctrl + A и Ctrl + U и Ctrl + S
		function preventSelection(element) {
			var preventSelection = false;

			function addHandler(element, event, handler) {
				if (element.attachEvent) element.attachEvent('on' + event, handler);
				else if (element.addEventListener) element.addEventListener(event, handler, false);
			}

			function removeSelection() {
				if (window.getSelection) {
					window.getSelection().removeAllRanges();
				} else if (document.selection && document.selection.clear)
					document.selection.clear();
			}

			//запрещаем выделять текст мышкой
			addHandler(element, 'mousemove', function () {
				if (preventSelection) removeSelection();
			});
			addHandler(element, 'mousedown', function (event) {
				var event = event || window.event;
				var sender = event.target || event.srcElement;
				preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
			});

			//запрещаем нажатие клавищ Ctrl + A и Ctrl + U и Ctrl + S
			function killCtrlA(event) {
				var event = event || window.event;
				var sender = event.target || event.srcElement;
				if (sender.tagName.match(/INPUT|TEXTAREA/i)) return;
				var key = event.keyCode || event.which;
				if ((event.ctrlKey && key == 'U'.charCodeAt(0)) || (event.ctrlKey && key == 'A'.charCodeAt(0)) || (event.ctrlKey && key == 'S'.charCodeAt(0))) // 'A'.charCodeAt(0) можно заменить на 65
				{
					removeSelection();
					if (event.preventDefault) event.preventDefault();
					else event.returnValue = false;
				}
			}

			addHandler(element, 'keydown', killCtrlA);
			addHandler(element, 'keyup', killCtrlA);
		}
		//запрещает нажатие правой кнопки мыши на сайте
		document.oncontextmenu = cmenu; function cmenu() { return false; }

		preventSelection(document);
	};
	// denied();
});

