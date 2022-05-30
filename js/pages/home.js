const sliderContainer = document.querySelector(".slides"),
          slides = document.querySelectorAll(".slide"),
          sliderDotsContainer = document.querySelector(".slider-dots");

for (let i = 0; i < slides.length; i++){
    let div = document.createElement("div");
    if (slides[i].classList.contains("active")){
        div.className = "slider-dot active";
        div.setAttribute("data-slide-dot", i + 1);
        sliderDotsContainer.appendChild(div);
    } else {
        div.className = "slider-dot";
         div.setAttribute("data-slide-dot", i + 1);
        sliderDotsContainer.appendChild(div);
    }
}

const sliderDots = document.querySelectorAll('.slider-dot');
sliderDots.forEach(dot => {
    dot.onclick = () => {
        if (!dot.classList.contains("active")){
            slides.forEach(slide => {
                 let activeDot = document.querySelector(`[data-slide-dot="${slide.getAttribute("data-slide")}"]`)
                activeDot.classList.remove("active");
                slide.classList.contains("active") ? slide.classList.remove("active") : '';
                if (slide.getAttribute("data-slide") === dot.getAttribute("data-slide-dot")){
                    slide.classList.add("active");
                }
            })
            dot.classList.add("active");
        }
        
    }
})