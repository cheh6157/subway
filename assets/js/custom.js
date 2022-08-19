$(function(){

    /*
     * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
     *
     * 
     * *
     *햄버거 메뉴 클릭시 메뉴 팝업
     *@version 1.0.0 |||| @since 2022-07-28 |||| @author 본인이름 (uno)  
     * 
     */
     $('.hb-menu').click(function(e){
        e.preventDefault();
        $('.hover-menu').toggleClass('active');

        $('.header .hover-menu .nav-item > a').mouseover(function(){
          $('.sub-menu').removeClass('on');
          $(this).siblings('.sub-menu').addClass('on');
  
          $('.header .hover-menu .nav-item > a').removeClass('active');
          $(this).addClass('active');
       })
    })


    /*
    * 
    * 
    * 
    * 
    *마우스 호버시 위치 변경
    *@version 1.0.0 |||| @since 2022-07-28 |||| @author 본인이름 (uno)  
    * 
    *  
    */
    
    $('.group-stuff .stuff-list .stuff-item').hover(function(){
      
      $(this).find('.img-box').stop().addClass('on');
    },function(){
      $(this).find('.img-box').stop().removeClass('on');
    })



     /*
     *
     *
     * 
     * 
     * 
     * 
     * 
     *specialmenu 슬라이드 js 
    *@version 1.0.0 |||| @since 2022-07-28 |||| @author 본인이름 (uno)  
    * 
    */

    var swiper = new Swiper(".swiper", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    /*
    *
    *
    * 
    * 
    *
    * specialmenu 슬라이드 on 효과 
    *@version 1.0.0 |||| @since 2022-07-28 |||| @author 본인이름 (uno)  
    */ 
      $('.group-stuff .stuff-list > .stuff-item:nth-child(2n)').hover(function(){
      
        $(this).find('.img-box').stop().addClass('on');
      },function(){
        $(this).find('.img-box').stop().removeClass('on');
      })

    /*
    *
    *
    * 
    */ 
  

      //to ~~에게 내수치에서 내가 설정한 수치로 가는것
      //from ~~~내가  전에 상태를 꾸며주는것 내가 설정한 수치(전)에서 원래 나의 상태로 돌아감
      //fromTo 


      // gsap.to('.sc-mainpage .img-box',{
      //   delay:0.5,
      //   y:-200,
      //   rotaiton:90,
      // })

    

      const intro = gsap.timeline({
        
      })

      intro.from('.text-area > *',1,{
        stagger:0.3,
        y:50,
        opacity:0,
      })

      .from('.sc-mainpage .img-box',1,{
        y:-50,
        scale:1.2,
        rotation:90,
        opacity:0,
      })

      .from('.particle',1,{
        stagger:0.3,
        // y:50,
        opacity:0,
       })
      
  

    
      const particleList = document.querySelectorAll('.particle');

      particleList.forEach(el => {
        gsap.to(el,{

          scrollTrigger:{
            trigger:el,
            start:"top 20%", //[트리거기준,윈도우기준]
            end:"bottom top", //[트리거기준,윈도우기준]
            // markers:true,
            scrub:1,
          },
          y:150,
        })


      });

      

     
    
    })//이거는 하나만 쓰세요 $(function())입니다.