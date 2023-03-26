    "use strict"

document.querySelectorAll('.slider')
    .forEach( sl => {
        const pagi = sl.querySelector('.slider__pagination')
        const nav = sl.querySelector('.slider__navigation')
        const slides = sl.querySelectorAll('.slider__slide')
        const sliderPagiBtns = []
        let curentSlide = 0
        let prevBtn
        let nextBtn

        const removeClasses = () => {
            slides.forEach(s => s.classList.remove('slider__slide_active'))
            sliderPagiBtns.forEach(btn => btn.classList.remove('slider__pagination-btn_active'))
        }
        const navBtnclassesToggle = () => {
            prevBtn.classList.toggle('disabled', curentSlide === 0)
            nextBtn.classList.toggle('disabled', curentSlide === slides.length - 1)
        }

        if(pagi){
            slides.forEach( slide => {
                const pagiBtn = document.createElement('button')
                pagiBtn.classList.add('slider__pagination-btn')
                pagi.append(pagiBtn)
                sliderPagiBtns.push(pagiBtn)
            })

            sliderPagiBtns[0].classList.add('slider__pagination-btn_active')
            sl.addEventListener('click', (e) => {
                if (e.target.classList.contains('slider__pagination-btn')){
                    removeClasses()
                    slides[sliderPagiBtns.indexOf(e.target)].classList.add('slider__slide_active')
                    e.target.classList.add('slider__pagination-btn_active')
                    curentSlide = sliderPagiBtns.indexOf(e.target)

                    if(nav) {
                        navBtnclassesToggle()
                    }
                }
            })
        }

        if(nav) {

            prevBtn = sl.querySelector('.slider__navigation-prev')
            nextBtn = sl.querySelector('.slider__navigation-next')

            const addClasses = () => {
                slides[curentSlide].classList.add('slider__slide_active')
                if(pagi) pagi.children[curentSlide].classList.add('slider__pagination-btn_active')
            }

            prevBtn.addEventListener('click', e => {
                if(curentSlide) {
                    curentSlide--

                    removeClasses()
                    addClasses()
                    navBtnclassesToggle()
                }

            })
            nextBtn.addEventListener('click', e => {
                if(curentSlide < slides.length - 1) {
                    curentSlide++

                    removeClasses() 
                    addClasses()
                    navBtnclassesToggle()
                }
            })
        }
    })