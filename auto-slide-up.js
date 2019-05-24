!function(){
    let specialTags=document.querySelectorAll('[data-x]')
for(let i=0;i<specialTags.length;i++){
        specialTags[i].classList.add('offset') 
     }

  setTimeout(function(){
      findClosest()
  },1000)

  findClosest()
  window.addEventListener('scroll',function(x){
         findClosest()
  })

//********helper******//
function findClosest(){

    let specialTags=document.querySelectorAll('[data-x]')
    let minIndex=0
    for(let i=1;i<specialTags.length;i++){
      if(Math.abs(specialTags[i].offsetTop-window.scrollY)<Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
        minIndex=i
      }
    }
  

   // specialTags[minIndex].classList.add('active')
   specialTags[minIndex].classList.remove('offset')

    let id=specialTags[minIndex].id
    let a=document.querySelector('a[href="#'+id+'"]')
    let li=a.parentNode
    let brothersAndMe=li.parentNode.children
    for(let i=0;i<brothersAndMe.length;i++){
      brothersAndMe[i].classList.remove('heighlight')
    }
    li.classList.add('heighlight')
   }

   
   let liTiggers=document.querySelectorAll('nav.menu>ul>li')    // let li=x.currentTarget
   for(let i=0;i<liTiggers.length;i++){                    //let brother=li.getElementsByTagName('ul')[0]
    liTiggers[i].onmouseenter=function(x){                 //  while( brother.tagName!=='UL'){   //brother.nodeType===node.TEXT_NODE
      x.currentTarget.classList.add('active')              //   brother=brother.nextSibling                                                       
    }                                                      // }
    liTiggers[i].onmouseleave=function(x){                 //brother.classList.add('active')
      x.currentTarget.classList.remove('active')                                                                           
   }                                                        // let li=x.currentTarget
 }                                                          // let brother=li.getElementsByTagName('ul')[0]
                                                            //  while( brother.tagName !=='UL'){   //brother.nodeType===node.TEXT_NODE
                                                            //   brother=brother.nextSibling
                                                            //  brother.classList.remove('active')
}.call()

