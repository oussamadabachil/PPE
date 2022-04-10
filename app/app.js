document.addEventListener("DOMContentLoaded",()=>{
    let count = 1
    let regMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let pageH = document.querySelector(".page_show")
    let buttonMenu = document.querySelector(".center")
    let butt_sumbit_pc = document.querySelector(".btn_submit_pc")
    buttonMenu.addEventListener('click',()=>{
        count+=1
        if(count%2==0){
            pageH.classList.remove("page_show")
            pageH.classList.add("page_hide")
        }else{
            pageH.classList.remove("page_hide")
            pageH.classList.add("page_show")
        }
      

    })
  
const User = {

    mail_user_pc : document.querySelector(".email_input").value,
    pwd_user_pc  : document.querySelector(".pwd_input").value  , 


    mail_user_mob : document.querySelector(".email_input_mob").value,
    pwd_user_mob  : document.querySelector(".pwd_input_mob").value   

}
   
    let btn_submit_pc_js = document.querySelector(".btn_submit_pc")
    let btn_submit_mob_js = document.querySelector(".btn_submit_mob")

   btn_submit_pc_js.addEventListener("click",(e)=>{
    e.preventDefault()
        localStorage.setItem("password",User.pwd_user_pc.value)
        localStorage.setItem("mail",User.mail_user_pc.vak)


    if ((User.mail_user_pc.match(regMail)&&(User.pwd_user_pc=!1))) {


        Swal.fire(
            'Bienvenu!',
            'Dans votre espace!',
            'success'
          )

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Mais...',
            text: 'Votre adresse mail ou votre mot de passe sont incorrects',
            footer: '<a href="">Pourquoi jai ce pb</a>'
          })
          
          
    }
})

btn_submit_mob_js.addEventListener("click",(e)=>{
    
    e.preventDefault()
    localStorage.setItem("password",User.pwd_user_mob.value)
    localStorage.setItem("mail",User.mail_user_mob.value)
if (regMail="ddd") {
    Swal.fire(
        'Bienvenu!',
        'Dans votre espace!',
        'success'
      )
      
} else {
    Swal.fire({
        icon: 'error',
        title: 'Mais...',
        text: 'Votre adresse mail ou votre mot de passe sont incorrects',
        footer: '<a href="">Pourquoi jai ce pb</a>'
      })
      
      
}
})

})