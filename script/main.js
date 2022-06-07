
// $('.custom-checkbox').click( function() {
//    $('.modal-btn-item').toggleClass('active');
   
//   });
  $('.header-first-button').click( function() {
    $('.first-absolute').slideToggle();
  
   });
   $('.main').click( function() {
    $('.first-absolute').hide();
   
   });
  
   $('.button').click( function(e) {
    e.preventDefault();
      $('.overlay').fadeIn();
    });
    $('.button').click( function(e) {
      e.preventDefault();
        $('.overlay').fadeIn();
      });
      
          // Закрытие окна на крестик
          $('.close-popup').click( function() {
            $('.overlay').fadeOut();
          });
          $('.popclose').click( function() {
            $('.overlay').fadeOut();
          });
          $(document).mouseup( function (e) { 
            var popup = $('.popup');
            if (e.target != popup[0] && popup.has(e.target).length === 0){
              $('.overlay').fadeOut();
            }
          });
   $('.button2').click( function(e) {
    e.preventDefault();
      $('.overlay2').fadeIn();
    });
    $('.button4').click( function(e) {
      e.preventDefault();
        $('.overlay4').fadeIn();
      });
      
          // Закрытие окна на крестик
          $('.close-popup4').click( function() {
            $('.overlay4').fadeOut();
          });
          $('.popclose4').click( function() {
            $('.overlay4').fadeOut();
          });
          // Закрытие окна на поле
          $(document).mouseup( function (e) { 
            var popup = $('.popup4');
            if (e.target != popup[0] && popup.has(e.target).length === 0){
              $('.overlay4').fadeOut();
            }
          });
          $('.button7').click( function(e) {
            e.preventDefault();
              $('.overlay7').fadeIn();
            });
            
                // Закрытие окна на крестик
                $('.close-popup7').click( function(e) {
                  e.preventDefault();
                  $('.overlay7').fadeOut();
                });
                $('.popclose7').click( function(e) {
                  e.preventDefault();
                  $('.overlay8').fadeOut();
                });
                // Закрытие окна на поле
                $(document).mouseup( function (e) { 
                  var popup = $('.popup7');
                  if (e.target != popup[0] && popup.has(e.target).length === 0){
                    $('.overlay7').fadeOut();
                  }
                });  
                $('.button15').click( function(e) {
                  e.preventDefault();
                    $('.overlay15').fadeIn();
                  });
                  
                      // Закрытие окна на крестик
                      $('.close-popup15').click( function(e) {
                        e.preventDefault();
                        $('.overlay15').fadeOut();
                      });
                      $('.popclose7').click( function(e) {
                        e.preventDefault();
                        $('.overlay15').fadeOut();
                      });
                      // Закрытие окна на поле
                      $(document).mouseup( function (e) { 
                        var popup = $('.popup15');
                        if (e.target != popup[0] && popup.has(e.target).length === 0){
                          $('.overlay15').fadeOut();
                        }
                      });  
                      $('.button16').click( function(e) {
                        e.preventDefault();
                          $('.overlay16').fadeIn();
                          $('.overlay15').fadeOut();
                        });
                        
                            // Закрытие окна на крестик
                            $('.close-popup16').click( function(e) {
                              e.preventDefault();
                              $('.overlay16').fadeOut();
                            });
                            $('.popclose7').click( function(e) {
                              e.preventDefault();
                              $('.overlay16').fadeOut();
                            });
                            // Закрытие окна на поле
                            $(document).mouseup( function (e) { 
                              var popup = $('.popup16');
                              if (e.target != popup[0] && popup.has(e.target).length === 0){
                                $('.overlay16').fadeOut();
                              }
                            });  
                            $('.profile-info').click( function() {
                             
                              $('.profile-name-absolute').toggleClass('active');
                            });
                            $(document).mouseup( function (e) { 
                              var popup = $('.profile-info');
                              if (e.target != popup[0] && popup.has(e.target).length === 0){
                                $('.profile-name-absolute').removeClass('active');
                              }
                            });  
                $('.button9').click( function(e) {
                  e.preventDefault();
                    $('.overlay9').fadeIn();
                  });
                  $('.custom23-checkbox').click( function() {
                    $(this).toggleClass('active');
                    if ($(this).hasClass('active')){
                      $('.custom-checkbox').prop('checked', true);
                      $('.modal-btn-item').addClass('active');
                    }
                    else {
                      $('.custom-checkbox').prop('checked', false);
                      $('.modal-btn-item').removeClass('active');
                    }
                     

                    });
                    
                      
                  
                      
                     
                     
                  // $('input[type=checkbox]').click(function(){
                  //   $('input[type=checkbox]').not(this).removeClass('active');
                  //   $(this).toggleClass('active');
                  //   if ($('input[type=checkbox]').hasClass('active')) {
                      
                  //   }
                  // });
                  
                  $('.custom-checkbox').click( function() {
                  

              
                      $(this).toggleClass('active');
                      
                     
                      if ($(this).hasClass('active')){
                        $('.modal-btn-item').addClass('active');
                      }
                      else {
                        $('.modal-btn-item').removeClass('active');
                      }
                      
                    });
                
                      
                $('.close-popup9').click( function(e) {
                  e.preventDefault();
                  $('.overlay9').fadeOut();
                });
                      // Закрытие окна на крестик
                      $('.close-popup9').click( function(e) {
                        e.preventDefault();
                        $('.overlay9').fadeOut();
                      });
                      $('.popclose7').click( function(e) {
                        e.preventDefault();
                        $('.overlay9').fadeOut();
                      });
                      // Закрытие окна на поле
                      $(document).mouseup( function (e) { 
                        var popup = $('.popup9');
                        if (e.target != popup[0] && popup.has(e.target).length === 0){
                          $('.overlay9').fadeOut();
                        }
                      });  
                      $('.button99').click( function(e) {
                        e.preventDefault();
                        $('.overlay99').fadeIn();
                      });
                     
                            // Закрытие окна на крестик
                            $('.close-popup99').click( function(e) {
                              e.preventDefault();
                              $('.overlay99').fadeOut();
                            });
                            $('.popclose7').click( function(e) {
                              e.preventDefault();
                              $('.overlay99').fadeOut();
                            });
                            // Закрытие окна на поле
                            $(document).mouseup( function (e) { 
                              var popup = $('.popup99');
                              if (e.target != popup[0] && popup.has(e.target).length === 0){
                                $('.overlay99').fadeOut();
                              }
                            });  
                      $('.button10').click( function(e) {
                        e.preventDefault();
                          $('.overlay10').fadeIn();
                        });
                        
                            // Закрытие окна на крестик
                            $('.close-popup10').click( function(e) {
                              e.preventDefault();
                              $('.overlay10').fadeOut();
                            });
                            $('.popclose7').click( function(e) {
                              e.preventDefault();
                              $('.overlay10').fadeOut();
                            });
                            // Закрытие окна на поле
                            $(document).mouseup( function (e) { 
                              var popup = $('.popup10');
                              if (e.target != popup[0] && popup.has(e.target).length === 0){
                                $('.overlay10').fadeOut();
                              }
                            });  
                            $('.button11').click( function(e) {
                              e.preventDefault();
                                $('.overlay11').fadeIn();
                              });
                              
                                  // Закрытие окна на крестик
                                  $('.close-popup11').click( function(e) {
                                    e.preventDefault();
                                    $('.overlay11').fadeOut();
                                  });
                                
                                  // Закрытие окна на поле
                                  $(document).mouseup( function (e) { 
                                    var popup = $('.popup11');
                                    if (e.target != popup[0] && popup.has(e.target).length === 0){
                                      $('.overlay11').fadeOut();
                                    }
                                  });  
                                  $('.button12').click( function(e) {
                                    e.preventDefault();
                                      $('.overlay12').fadeIn();
                                    });
                                    
                                        // Закрытие окна на крестик
                                        $('.close-popup12').click( function(e) {
                                          e.preventDefault();
                                          $('.overlay12').fadeOut();
                                        });
                                       
                                        // Закрытие окна на поле
                                        $(document).mouseup( function (e) { 
                                          var popup = $('.popup12');
                                          if (e.target != popup[0] && popup.has(e.target).length === 0){
                                            $('.overlay12').fadeOut();
                                          }
                                        });  
                                        $('.button13').click( function(e) {
                                          e.preventDefault();
                                            $('.overlay13').fadeIn();
                                          });
                                          
                                              // Закрытие окна на крестик
                                              $('.close-popup13').click( function(e) {
                                                e.preventDefault();
                                                $('.overlay13').fadeOut();
                                              });
                                             
                                              // Закрытие окна на поле
                                              $(document).mouseup( function (e) { 
                                                var popup = $('.popup13');
                                                if (e.target != popup[0] && popup.has(e.target).length === 0){
                                                  $('.overlay13').fadeOut();
                                                }
                                              });  
                                              $('.blueclick').click( function(e) {
                                                e.preventDefault();
                                                
                                                $(this).toggleClass('active');
                                               
                                              });
                                              $('.button14').click( function(e) {
                                                e.preventDefault();
                                                  $('.overlay14').fadeIn();
                                                });
                                                $('.unset').click( function(e) {
                  
                                                  e.preventDefault();
                                                  
                                                 $(this).children('.hover-visible2').toggleClass('active-unset');
                                                 
                                                });
                                                    // Закрытие окна на крестик
                                                    $('.close-popup14').click( function(e) {
                                                      e.preventDefault();
                                                      $('.overlay14').fadeOut();
                                                    });
                                                   
                                                    // Закрытие окна на поле
                                                    $(document).mouseup( function (e) { 
                                                      var popup = $('.popup14');
                                                      if (e.target != popup[0] && popup.has(e.target).length === 0){
                                                        $('.overlay14').fadeOut();
                                                      }
                                                    });  
    $('.button5').click( function(e) {
                e.preventDefault();
                  $('.overlay5').fadeIn();
                });
                
                    // Закрытие окна на крестик
                    $('.close-popup5').click( function() {
                      $('.overlay5').fadeOut();
                    });
                    $('.popclose5').click( function() {
                      $('.overlay5').fadeOut();
                    });
                    // Закрытие окна на поле
                    $(document).mouseup( function (e) { 
                      var popup = $('.popup5');
                      if (e.target != popup[0] && popup.has(e.target).length === 0){
                        $('.overlay5').fadeOut();
                      }
                    });  
                    $('.button6').click( function(e) {
                      e.preventDefault();
                        $('.overlay6').fadeIn();
                      });
                     
                        
                            // Закрытие окна на крестик
                            $('.close-popup6').click( function() {
                              $('.overlay6').fadeOut();
                            });
                            $('.popclose6').click( function() {
                              $('.overlay6').fadeOut();
                            });
                            // Закрытие окна на поле
                            $(document).mouseup( function (e) { 
                              var popup = $('.popup6');
                              if (e.target != popup[0] && popup.has(e.target).length === 0){
                                $('.overlay6').fadeOut();
                              }
                            });
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
        $('.button3').click( function(e) {
          e.preventDefault();
            $('.overlay3').fadeIn();
          });
          
              // Закрытие окна на крестик
              $('.close-popup3').click( function() {
                $('.overlay3').fadeOut();
              });
              $('.popclose3').click( function() {
                $('.overlay3').fadeOut();
              });
              // Закрытие окна на поле
              $(document).mouseup( function (e) { 
                var popup = $('.popup3');
                if (e.target != popup[0] && popup.has(e.target).length === 0){
                  $('.overlay3').fadeOut();
                }
              });
             
                  
                        // Закрытие окна на крестик
        $('.close-popup2').click( function() {
          $('.overlay2').fadeOut();
        });
        $('.popclose').click( function() {
          $('.overlay2').fadeOut();
        });
        // Закрытие окна на поле
        $(document).mouseup( function (e) { 
          var popup = $('.popup2');
          if (e.target != popup[0] && popup.has(e.target).length === 0){
            $('.overlay2').fadeOut();
          }
        });
      
              $('.button8').click( function(e) {
                e.preventDefault();
                  $('.overlay8').fadeIn();
                });
                $('.button8').click( function(e) {
                  e.preventDefault();
                    $('.overlay8').fadeIn();
                  });
                  $('.block-link').click( function(e) {
                    e.preventDefault();
                      $(this).toggleClass('active');
                    });
                      // Закрытие окна на крестик
                      $('.close-popup8').click( function(e) {
                        e.preventDefault();
                        $('.overlay8').fadeOut();
                      });
                      $('.popclose8').click( function(e) {
                        e.preventDefault();
                        $('.overlay8').fadeOut();
                      });
                      // Закрытие окна на поле
                      $(document).mouseup( function (e) { 
                        var popup = $('.popup8');
                        if (e.target != popup[0] && popup.has(e.target).length === 0){
                          $('.overlay8').fadeOut();
                        }
                      });  
                      $('.button8').click( function(e) {
                        e.preventDefault();
                          $('.overlay8').fadeIn();
                        });
                        
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select");
        l = x.length;
        for (i = 0; i < l; i++) {
          selElmnt = x[i].getElementsByTagName("select")[0];
          ll = selElmnt.length;
          /*for each element, create a new DIV that will act as the selected item:*/
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected");
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          /*for each element, create a new DIV that will contain the option list:*/
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                      y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
          a.addEventListener("click", function(e) {
              /*when the select box is clicked, close any other select boxes,
              and open/close the current select box:*/
              e.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
              this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
          /*a function that will close all select boxes in the document,
          except the current select box:*/
          var x, y, i, xl, yl, arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          xl = x.length;
          yl = y.length;
          for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }
        const brnright = document.querySelector('.right-btn');
        const brnleft = document.querySelector('.left-btn');
        const main = document.querySelector('.main-rating__wrapper');
        const main3 = document.querySelector('.main-rating__wrapper3');
        const main2 = document.querySelector('.main-items__wrapper');
        brnright.addEventListener('click', function(e){
            e.preventDefault();
            brnleft.classList.add('active');
            brnright.classList.add('none');
            main.classList.add('active');
            main2.classList.add('active');
            main3.classList.add('active');
            
            
        })
        brnleft.addEventListener('click', function(e){
            e.preventDefault();
            main.classList.remove('active');
            main2.classList.remove('active');
            brnright.classList.remove('none');
            brnleft.classList.remove('active');
            main3.classList.remove('active');
            

        })
       