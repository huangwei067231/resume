!function(){
    var view=document.querySelector('nav.menu')
    var controller=function(view){
        let  aTiggers=view.querySelectorAll('nav.menu>ul>li>a') 
        function animate(time){
           requestAnimationFrame(animate);
           TWEEN.update(time);
         }
            requestAnimationFrame(animate);
        
        for(let j=0;j<aTiggers.length;j++){
         aTiggers[j].onclick=function(y){
           y.preventDefault()
           let a=y.currentTarget
           let href=a.getAttribute('href')
           let element=document.querySelector(href)
           let top=element.offsetTop
           // let n=25  
           // let duration=500/n
           let currentTop=window.scrollY
           let targetTop=top-80
           let s=targetTop-currentTop
           var t=Math.abs((s/100)*300)
           if(t>500){t=500}
           // let distance=(targetTop-currentTop)/n
           // let i=0
           // let id=setInterval(function(){
           //   if(i===n){
           //     window.clearInterval(id)
           //     return
           //     }
           //   i=i+1
           //   window.scrollTo(0,currentTop+distance*i)
           // },duration)
           var coords={x:currentTop};
           var Tween=new TWEEN.Tween(coords)
            .to({x:targetTop},t).easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function(){
             window.scrollTo(0,coords.x)
              })
            .start() 
         }
        }
        }
        controller(view)
    }.call()
