<template>
    <section class="testimonials" data-aos="fade-up">
        <div class="container">
            <div class="section-title">
                <h2>Tetstimonials</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                    sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <swiper :slides-per-view="3" :space-between="100" navigation :pagination="{ clickable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
                    <div class="testimonials-carousel swiper">
                        <div class="swiper-wrapper">
                            <div class="testimonial-item swiper-slide">
                                <img :src="testimonial.img" class="testimonial-img" alt="">
                                <h3>{{ testimonial.name }}</h3>
                                <h4>{{ testimonial.title }}</h4>
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                    {{ testimonial.quote }}
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            </swiper>
        </div>
    </section>
</template>
<script>
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

// Import Swiper styles
export default {
    data() {
        return {
            testimonials: [
                {
                    img: "assets/img/testimonials/testimonials-1.jpg",
                    name: "Saul Goodman",
                    title: "Ceo & Founder",
                    quote:
                        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
                },
                {
                    img: "assets/img/testimonials/testimonials-2.jpg",
                    name: "Sara Wilsson",
                    title: "Designer",
                    quote:
                        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
                },
                {
                    img: "assets/img/testimonials/testimonials-3.jpg",
                    name: "Jena Karlis",
                    title: "Store Owner",
                    quote:
                        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
                },
                {
                    img: "assets/img/testimonials/testimonials-4.jpg",
                    name: "Matt Brandon",
                    title: "Freelancer",
                    quote:
                        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
                },
            ]
        }


    },
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        onSwiper(swiper) {
            // console.log(swiper)
        },
        onSlideChange() {
            // console.log('slide change')
        },
    },
};
</script>
