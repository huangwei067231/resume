!function(){
    var view=document.querySelector('#topNavBar')

    var conctroller={
        view:null,
        init:function(view){
            this.view=view
            this.bindEvents()
            //this.bindEvents.call(this)
        },
        bindEvents:function(){
            var view=this.view
            window.addEventListener('scroll',(x)=>{
                if(window.scrollY>0){
                   this.active()
                    }else{
                   this.deactive()
                  }
                })//,bind(this))
                //箭头函数没有this
            },
            active:function(){
                this. view.classList.add('sticky')
            },
            deactive:function(){
                this.view.classList.remove('sticky')
            }
         } 
       conctroller.init(view)// 可以写成conctroller(view)
       //controller.init.call(controller,view)
    }.call()




// window.onscroll=function(){
//     if(scrollY>0){
//     topNavBar.classList.add('sticky')
//     }else{
//     topNavBar.classList.remove('sticky')
//     }
//     findClosest()
// }
