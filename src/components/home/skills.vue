<template>
    <div class="">
        <section id="skills" class="h-100 p-0 dark:text-cyan-300 font-bold">
            <div class="grid p-0 m-0  pt-5 md:pt-28">
                <div class="title text-center pb-5">
                    <h1 class="text-6xl md:p-3 font-semibold">Skills</h1>
                    <h3 class="text-xl  text-gray-800 dark:text-cyan-200">( Technical level )</h3>
                </div>
                <div
                    class="skills-body m-0 w-full py-3 md:px-20 items-center grid grid-rows-2 grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-1">
                    <div class="flex flex-col space-y-2 justify-center items-center text-center">
                        <div class="skill w-full">
                            <div class="outer">
                                <div class="inner">
                                    <div class="number text-2xl" id="mysql-num">
                                        65%
                                    </div>
                                </div>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0" version="1.1"
                                width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle class="circle" id="mysql" cx="80" cy="80" r="70" stroke-linecap="round" />
                            </svg>
                        </div>
                        <h1 class="font-bold text-2xl text-shadow">MYSQL</h1>
                    </div>
                    <div class="flex flex-col space-y-2 justify-center items-center text-center">
                        <div class="skill">
                            <div class="outer">
                                <div class="inner">
                                    <div class="number text-2xl" id="php-num">
                                        65%
                                    </div>
                                </div>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0" version="1.1"
                                width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle class="circle" id="php" cx="80" cy="80" r="70" stroke-linecap="round" />
                            </svg>
                        </div>
                        <h1 class="font-bold text-2xl">PHP</h1>
                    </div>

                    <div class="flex flex-col space-y-2 justify-center items-center text-center">
                        <div class="skill w-full h-full">
                            <div class="outer w-full h-full">
                                <div class="inner w-5/6 h-5/6">
                                    <div class="number text-2xl" id="laravel-num">
                                        <span>65%</span>
                                    </div>
                                </div>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0" version="1.1"
                                width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle class="circle" id="laravel" cx="80" cy="80" r="70" stroke-linecap="round" />
                            </svg>
                        </div>
                        <h1 class="font-bold text-2xl">Laravel</h1>
                    </div>

                    <div class="flex flex-col space-y-2 justify-center items-center text-center">

                        <div class="skill">
                            <div class="outer">
                                <div class="inner">
                                    <div class="number text-2xl" id="vue-num">
                                        65%
                                    </div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0" version="1.1"
                                width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle class="circle" id="vue" cx="80" cy="80" r="70" stroke-linecap="round" />
                            </svg>
                        </div>
                        <h1 class="font-bold text-2xl">Vuejs</h1>
                    </div>
                </div>
                <div class="flex justify-around md:px-40">
                    <div class="flex flex-col space-y-2 justify-center items-center text-center">
                        <div class="skill w-full">
                            <div class="outer">
                                <div class="inner">
                                    <div class="number text-2xl" id="bootstrap-num">
                                        65%
                                    </div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0" version="1.1"
                                width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle class="circle" id="bootstrap" cx="80" cy="80" r="70" stroke-linecap="round" />
                            </svg>
                        </div>
                        <h1 class="font-bold text-2xl">Bootstrap</h1>
                    </div>
                    <div class="flex flex-col space-y-2 justify-center items-center text-center">
                        <div class="skill w-full">
                            <div class="outer">
                                <div class="inner">
                                    <div class="number text-2xl" id="tailwind-num">
                                        65%
                                    </div>
                                </div>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0" version="1.1"
                                width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle class="circle" id="tailwind" cx="80" cy="80" r="70" stroke-linecap="round" />
                            </svg>
                        </div>
                        <h1 class="font-bold text-2xl">TailWind CSS</h1>
                    </div>
                </div>
            </div>
<!-- Section section of Sills!--> 
        </section>
        <section class="h-100 p-5 dark:text-cyan-300 pt-32 md:pt-32">
            <div class="skill-grid md:grid-rows-1 md:grid-cols-2 md:px-28 gap-5 md:gap-20">
                <div class="left" id="left">
                    <div class="left-header flex justify-between items-center mb-5">
                        <div class="text-4xl font-bold">
                            <i class="fa fa-language"></i>
                            Web development
                        </div>
                        <div>
                            <span>
                                <i ref="leftUp" class="fa fa-chevron-down font-medium cursor-pointer text-xl hidden" @click="toggle"></i>
                                <i ref="leftDown" class="fa fa-chevron-up font-medium cursor-pointer text-xl " @click="toggle"></i>
                            </span>
                        </div>
                    </div>
                    <div class="left-body pl-4 text-xl font-bold space-y-2
                      dark:text-cyan-500" id="left-body">

                        <div class="grid grid-rows-2">
                            <div class="flex justify-between">
                                <h1>HTML</h1>
                                <span>65%</span>
                            </div>
                            <div class=" h-2">
                                <div class="h-full rounded bg-cyan-700 w-2/3">

                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-2">

                            <div class="flex justify-between">
                                <h1>CSS</h1>
                                <span>65%</span>
                            </div>
                            <div class=" h-2">
                                <div class="h-full rounded bg-cyan-700 w-2/3">
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-2">
                            <div class="flex justify-between">
                                <h1>SASS</h1>
                                <span>65%</span>
                            </div>
                            <div class=" h-2">
                                <div class="h-full rounded bg-cyan-700 w-2/3">

                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-2">
                            <div class="flex justify-between">
                                <h1>Vanilla javascript and Vuejs</h1>
                                <span>65%</span>
                            </div>
                            <div class=" h-2">
                                <div class="h-full rounded bg-cyan-700 w-2/3">

                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-2">
                            <div class="flex justify-between">
                                <h1>PHP and Laravel</h1>
                                <span>65%</span>
                            </div>
                            <div class=" h-2">
                                <div class="h-full rounded bg-cyan-700 w-2/3">

                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-2">
                            <div class="flex justify-between">
                                <h1>Laravel</h1>
                                <span>65%</span>
                            </div>
                            <div class=" h-2">
                                <div class="h-full rounded bg-cyan-700 w-2/3">

                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-2">
                            <div class="flex justify-between">
                                <h1>JavaSE</h1>
                                <span>30%</span>
                            </div>
                            <div class=" h-2">
                                <div class="h-full rounded bg-cyan-700 w-2/3">

                                </div>
                            </div>
                        </div>


                        <div></div>




                    </div>

                </div>
                <div class="right" id="right">
                    <div class="left-header flex justify-between items-center mb-5">
                        <div class="text-4xl font-bold">
                            <i class="fa fa-laptop"></i>
                          Commputer Science
                        </div>
                        <div>
                            <span @click="showskill">
                                <i ref="rightUp" class="fa fa-chevron-up font-medium cursor-pointer text-xl hidden" @click="toggle"></i>
                                <i ref="rightDown" class="fa fa-chevron-down font-medium cursor-pointer text-xl" @click="toggle" ></i>
                            </span>
                        </div>
                    </div>
                    <div class="right-body pl-4 text-xl font-bold space-y-2 hidden" id="right-body">

                        <div class="grid grid-rows-2">
                            <div class="flex justify-between">
                                <h1>Database</h1>
                                <span>65%</span>
                            </div>
                            <div class=" h-2">
                                <div class="h-full rounded bg-cyan-700 w-2/3">

                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-2">

                            <div class="flex justify-between">
                                <h1>Data structure and Algorithms</h1>
                                <span>65%</span>
                            </div>
                            <div class=" h-2">
                                <div class="h-full rounded bg-cyan-700 w-2/3">

                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-2">
                            <div class="flex justify-between">
                                <h1>Git and Git Hub</h1>
                                <span>65%</span>
                            </div>
                            <div class=" h-2">
                                <div class="h-full rounded bg-cyan-700 w-2/3">

                                </div>
                            </div>
                        </div>
                       
                        
                       
                       
                        

                    </div>
                </div>
            </div>
        </section>

        <!-- Second section end-->
    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';

const leftUp=ref('');
const leftDown=ref('');
const rightUp=ref('');
const rightDown=ref('');

const toggle=()=>{
    document.getElementById('left-body').classList.toggle('hidden');
    document.getElementById('right-body').classList.toggle('hidden');
    leftUp.value.classList.toggle('hidden');
    leftDown.value.classList.toggle('hidden');
    rightUp.value.classList.toggle('hidden');
    rightDown.value.classList.toggle('hidden'
    );
}

const skills_circule = (progressId, valuecontainerId, progressEndValue) => {
    let progressBar = document.getElementById(progressId);
    let valueContainer = document.getElementById(valuecontainerId);
    let progressValue = 0;
    let speed = 50;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
      #2c3e50   ${progressValue * 3.6}deg,
      #bdc3c7  ${progressValue * 3.6}deg
  )`;
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
};

onMounted(() => {
    const ani = (id, aniNum) => {
        let counter = 0;
        let percentage = 100 * (472 - aniNum) / 472;
        let time = 50 * percentage / aniNum;
        time += 10;
        document.getElementById(id).style.animation = "ani-" + aniNum + ' 2s linear forwards';
        const aniIntervel = setInterval(() => {
            if (counter > percentage) {
                clearInterval(aniIntervel);

            }
            document.getElementById(id + '-num').innerHTML = counter + "%";
            counter++;
        }, time);
    }

    const circle = () => {
        console.log(window.pageYOffset + "skills" + section_top.offsetTop);
        if (window.pageYOffset >= section_top.offsetTop - 150) {
            window.removeEventListener('scroll', circle);
            ani("mysql", 165);
            ani('php', 170);
            ani('laravel', 160);
            ani('vue', 155);
            ani('bootstrap', 180);
            ani('tailwind', 160);
            return;
            // skills_circule('laravel', 'laravel-container', 65)
        }
    }
    const section_top = document.getElementById('skills');
    window.addEventListener('scroll', circle, false
    )
    window.addEventListener('scroll', () => {
        if (window.pageYOffset == section_top.offsetTop) {
            console.log('equallly');
        }
    })
})
</script>

<style lang="scss" scoped>
</style>