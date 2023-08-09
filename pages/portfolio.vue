<template>
    <main id="main">

        <!-- ======= Our Portfolio Section ======= -->
        <section class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Our Portfolio</h2>
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li>Our Portfolio</li>
                    </ol>
                </div>

            </div>
        </section><!-- End Our Portfolio Section -->

        <!-- ======= Portfolio Section =======   cache-lifetime=10 -->
        <section class="portfolio">
            <div class="container">
                <!-- <div ref="loading" ></div> -->
                <h1 v-if="error"> SomeThing Went wrong </h1>
                <h1 v-else-if="pending"> Looding... </h1>

                <Tabs :options="{ useUrlFragment: false }" id="portfolio-flters">
                    <Tab name="All" panel-class="row portfolio-container">
                        <!-- <h1>{{ App.length }}</h1> -->
                        <div v-for="project in projects" class="col-lg-4 col-md-6 portfolio-wrap">
                            <PortfolioCard :title="project.name" :id="project.id" :image="project.project_image"
                                :link="project.link" />
                        </div>

                    </Tab>
                    <Tab name="WebSite" panel-class="row portfolio-container">
                        <div v-for="website in WebSite" class="col-lg-4 col-md-6 portfolio-wrap">
                            <PortfolioCard :title="website.name" :id="website.id" :image="website.project_image"
                                :link="website.link" />
                        </div>

                    </Tab>
                    <!-- <Tab name="Disabled tab" :is-disabled="true">
                            This content will be unavailable while :is-disabled prop set to true
                         </Tab> -->
                    <Tab name="App" panel-class="row portfolio-container">
                        <div v-for="app in App" class="col-lg-4 col-md-6 portfolio-wrap">
                            <PortfolioCard :title="app.name" :id="app.id" :image="app.project_image" :link="app.link" />
                        </div>


                    </Tab>
                    <Tab name="design" panel-class="row portfolio-container">
                        <div v-for="design in design" class="col-lg-4 col-md-6 portfolio-wrap">
                            <PortfolioCard :title="design.name" :id="design.id" :image="design.project_image"
                                :link="design.link" />
                        </div>

                    </Tab>
                    <!-- <Tab prefix="<span class='glyphicon glyphicon-star'></span> " name="Prefix and suffix"
                        suffix=" <span class='badge'>4</span>">
                        A prefix and a suffix can be added
                    </Tab> -->
                </Tabs>
            </div>
        </section><!-- End Portfolio Section -->

    </main><!-- End #main -->
</template>

<script setup>
import { Tabs, Tab } from 'vue3-tabs-component';
import PortfolioCard from '~~/componants/portfolio/PortfolioCard.vue';
// import { onMounted } from 'vue';


// onMounted(async () => {
//   console.log('myheader mounted');
// });
// const loading = ref('Loading....');
// const App = ref([]);
// const design = ref([]);
// nuxt.hook('page:finish', async () => {
    const { pending, data: projects, error } = await useFetch('http://127.0.0.1:8000/api/projects')

    if (projects.length > 0) {
        //     console.log(projects.category
        //     );
        const WebSite = computed(() => {
            return projects.value.filter(project => project.category.find((item) => item === 'website'));
        });
        // }
        // console.log(projects.value);
        // if (projects) {
        // loading.value = '' ;
        //   const WebSite = projects.value.filter(project => project.category.find((item)=> item === 'website'));
        //   const App = projects.value.filter(project => project.category.find((item)=> item === 'app'));
        //   const design = projects.value.filter(project => project.category.find((item)=> item === 'design'));
        // }
        const App = computed(() => {
            return projects.value.filter(project => project.category.find((item) => item === 'app'));
        });
        const design = computed(() => {
            return projects.value.filter(project => project.category.find((item) => item === 'design'));
        });

    };



// })
</script>

