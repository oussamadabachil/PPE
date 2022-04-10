document.addEventListener("DOMContentLoaded",()=>{
    let pageH = document.querySelector(".page_hide")
    let buttonMenu = document.querySelector(".center")
    let butt_sumbit_pc = document.querySelector(".btn_submit_pc")
    buttonMenu.addEventListener('click',()=>{
        pageH.classList.toggle("page_show")

    })
    const email_test = "aza@gmail.com"
    const mdp_test = "toor"

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
    if (mdp_test == User.pwd_user_pc) {
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

btn_submit_mob_js.addEventListener("click",(event)=>{

    event.preventDefault()
if (mdp_test === User.pwd_user_mob && email_test == User.mail_user_mob) {
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