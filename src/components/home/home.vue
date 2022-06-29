<template>
    <section class="home h-100 se:pt-10 md:pt-40 flex justify-center items-center" id="home">
        <div class="container grid">
            <div class="grid grid-row-2 gap-5 md:gap-20 md:grid-cols-2">
                <div
                    class="flex flex-col text-center md:text-left justify-center md:pl-0 md:pb-40 space-y-2 se:space-y-4 order-2">
                    <h1 class="text-5xl dark:text-cyan-300 block">
                        Hi,I'm KHM
                    </h1>
                    <h2 class="block text-2xl dark:text-cyan-300 font-semibold pl-3" id="position">
                        I am <span class="autoinput"></span>
                    </h2>
                    <p class="se:text-xl block dark:text-cyan-300 pl-3">
                        Excited in crafting full-fledged web-based software and
                        producing quality sharing contents about web development
                    </p>
                    <div class="pl-3">
                        <button class="custom-btn inline-block mt-5 text-lg mx-0 text-cyan-400" onclick="
                            alert(document.getElementById('home').offsetHeight+' '+
                            window.innerHeight);
                        ">
                            Read blogs
                        </button>
                    </div>
                </div>
                <div class="pfimg order-1 md:order-3">
                    <figure>
                        <img src="../../assets/4.jpg"
                            class="rounded-full w-4/6 se:w-11/12 md:w-3/4 mx-auto duration-200 animate-bounce" alt=""
                            srcset="" />
                    </figure>
                </div>
            </div>
            <div class="hidden md:inline-block">
                <a href="#about" class="custom-btn text-lg mx-auto hidden">
                    <i class="fa fa-arrow-down"></i></a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from "vue";
import Typed from "../../../node_modules/typed.js/src/typed.js";
onMounted(() => {
    let options = {
        strings: [" software developer", " fullstack developer"],
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 1000,
        loop: true,
    };
    var typed = new Typed(".autoinput", options);
});
</script>
<style lang="scss" scoped>
</style>
