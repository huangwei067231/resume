var APP_ID = 'w3cfSsMctlE1gLns4Utw30Hs-gzGzoHsz';
var APP_KEY = 'W81hH7Jb2144M2SDH7RjO4IP';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});



var query = new AV.Query('Message');
query.find()
.then(function (messages){
    console.log(messages)
    console.log(messages[0].attributes)
    console.log(messages[1].attributes)
let arrary=messages.map((item)=>item.attributes)
console.log(arrary)
  arrary.forEach((item)=>{
      console.log('here')
      let li =document.createElement('li')
      li.innerText=`${item.name}:${item.content}`
      console.log(li)
      let messageList=document.querySelector('#messageList');
      console.log(1)
      messageList.appendChild(li);
      console.log(2)
  })

  // 成功获得实例
}, function (error) {
    alert('提交失败')
  // 异常处理
}).then(()=>{},(error)=>{
    console.log(error)
});


   let myForm=document.querySelector('#postMessageForm') ;
      
   myForm.addEventListener('submit',function(e){ 
    e.preventDefault()
    
   let content=myForm.querySelector('input[name=content]').value;
   let name=myForm.querySelector('input[name=name]').value;
   var Message=AV.Object.extend('Message');
   var message=new Message();
   message.save({
     'name':name,
    'content': content
  }).then(function(object) {
     // window.location.reload()
     let li =document.createElement('li')
     li.innerText=`${object.attributes.name}:${object.attributes.content}`
     let messageList=document.querySelector('#messageList');
     messageList.appendChild(li);
     myForm.querySelector('input[name=name]').value=''
     myForm.querySelector('input[name=content]').value=''
    //alert('存入成功')
    console.log(object)
  })
})





// let botton=myForm.querySelector('input[type=submit]')
// botton.addEventListener('click',function(){})
// let content=myForm.querySelector('input[name=content]')
// content.addEventListener('keypress',function(e){
//     if(e.keyCode==13){

//     }
// })









// //创建TestObject表
// var TestObject = AV.Object.extend('fank');
// //在表中创建一行数据
// var testObject = new TestObject();
// //数据内容是Words:"hello world"保存
// //如果保存成功了，则运行alert
// testObject.save({
//   xxxxxx: 'Fuck World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
//   console.log(arguments[0])
// })