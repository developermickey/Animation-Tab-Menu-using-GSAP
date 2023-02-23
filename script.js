var icons = document.querySelectorAll(".icon");
var shadow = document.querySelector("#shadow");
icons.forEach(function(val, index){
    val.addEventListener("click", function(){
        // shadow.style.transform = `translateX(${index*100}px)`
        showhide();
        gsap.to("#shadow", {
            x: index*100,
            ease: Expo.easeInOut,
            duration: .23
        })
        gsap.to(this.children,{
            opacity: 1,
        })
           
    })
})

function showhide(){
    gsap.to(".icon i", {
        opacity: .3,
    })
}