<template>
    <section id="about" class="h-100 se:p-6 md:pt-24 dark:text-cyan-300">
        <div class="grid">
            <div class="text-center md:mb-20">
                <h1 class="text-4xl md:text-6xl p-5 font-bold">About me</h1>
                <h3 class="text-zinc-800 text-xl dark:text-cyan-200">
                    ( Introduction )
                </h3>
            </div>
            <div
                class="container grid grid-row-2 gap-5 se:gap-14 md:grid-cols-2 md:grid-rows-1"
            >
                <div class="left pt-5 se:pt-20 md:pt-0 flex justify-center">
                    <figure class="w-4/5 md:w-3/4">
                        <img
                            src="../../assets/3.jpg"
                            alt=""
                            class="w-full"
                            srcset=""
                        />
                    </figure>
                </div>
                <div class="right space-y-5 text-center md:text-left md:pt-14">
                    <span class="se:text-xl block text-justify">
                        Currently selfstudy Frontend Developer specialized in
                        vuejs and laravel development. Strongly interested in
                        Computer Science, Software Engineering and Programming.
                        Eager to learn and grow with positive mental attitude.
                    </span>
                    <button class="custom-btn text-lg text-cyan-400">
                        Dowload cv
                        <i class="fa fa-download"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, reactive, onMounted } from "vue";

export default {
    setup() {
        const nav_text = ref("hello ref");
        const nav_text2 = ref("hello");
        let i = 1;
        const show = () => {
            nav_text2.value = "Onmounted";
        };

        onMounted(() => {
            setTimeout(() => {}, 10000);
        });
        return {
            nav_text,
            nav_text2,
            show,
        };
    },
};
</script>

<style lang="scss" scoped></style>
