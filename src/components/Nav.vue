<template>
    <div class="nav-container  bg-inherit bg-opacity-90 z-10 p-5 shadow-cyan-300 rounded-full  mx-auto md:container md:fixed md:top-0 md:w-full md:left-0 md:right-0 italic" id="nav">
        <nav class="">
            <div class="flex item-center justify-between">
                <div class="">
                    <router-link :to="{ name: 'Home' }" class="text-3xl myname dark:text-cyan-300 font-bold pb-4
                        dark:active:text-amber-500 dark:focus:text-amber-500
                        dark:hover:text-amber-500">
                        <span>K</span><span>a</span><span>u</span><span>n</span><span>g</span> <span>H</span><span>t</span><span>e</span><span>t</span> <span>M</span><span>h</span><span>u</span><span>e</span>
                        
                    </router-link>
                </div>
                <div class="nav-items-container bottom-001 bg-gray-100 rounded bg-opacity-25 md:bg-inherit " id="navitem">
                    <ul class="nav-items-control md:flex md:space-x-6">
                        <li class="">
                            <router-link :to="{ name: 'Home' }" class=" text-2xl dark:text-cyan-300 cursor-pointer font-semibold
                            dark:active:text-amber-500 dark:focus:text-amber-500 dark:hover:text-amber-500 ">
                                <i class="fa fa-home md:hidden"></i>
                                Home
                            </router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'Blog' }" class="text-2xl dark:text-cyan-300 flex flex-col font-semibold items-center  cursor-pointer  
                                  dark:active:text-amber-500 dark:focus:text-amber-500 dark:hover:text-amber-500">
                                <i class="fa fa-book md:hidden"></i>
                                Blog
                            </router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'Projects' }" class=" text-2xl dark:text-cyan-300 cursor-pointer font-semibold                                   dark:active:text-amber-500 dark:focus:text-amber-500 dark:hover:text-amber-500">
                                 <i class="fa fa-file md:hidden"></i>
                                Project
                            </router-link>
                        </li>
                        <li class="">

                            <router-link :to="{ name: 'Series' }" class=" text-2xl dark:text-cyan-300 cursor-pointer font-semibold  
                                  dark:active:text-amber-500 dark:focus:text-amber-500 dark:hover:text-amber-500">
                                <span>
                                    <i class="fa fa-list-alt md:hidden"></i>
                                    
                                </span>
                                <span>
                                    Series
                                </span>
                            </router-link>
                        </li>
                    </ul>
                </div>

                 <div class="flex items-center justify-between">
                    <button class="btn-grad  dark-shadow p-1 rounded-full mr-5" @click="moon" id="moon">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7  text-2xl cursor-pointer hover:text-slate-800 active:text-slate-800"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </button>
                    <button class="btn-grad dark-shadow p-1 rounded-full mr-5 " @click="sun" id="sun">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 font-semibold" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>

                    <button id="menu-btn" class="btn-grad p-1 rounded-sm shadow-none hover:shadow-blue-500 md:hidden "
                        @click="navToggle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 font-semibold md:hidden" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                </div> 

            </div>

        </nav>
    </div>
</template>

<script>

export default {

    setup(props) {
            window.addEventListener('scroll',()=>{
                 let section_top=document.getElementById('about').offsetTop;
                 if (window.pageYOffset >= section_top/5) {
                     document.getElementById('nav').classList.add('shadow-lg');
            
              }else{
                  document.getElementById('nav').classList.remove('shadow-lg')
                
              }
            })
    },
    name: "Nav",
    data() {
        return {}
    },
    create: {

    },
    methods: {
        shadow() {
           
        },

        navToggle() {
            document.getElementById('navitem').classList.toggle('bottom-001')
        },
        switchtheme() {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {

                document.documentElement.classList.remove('dark')
            }
        },
        moon() {
            localStorage.theme = "dark";
            const body = document.getElementsByTagName('body')[0];
            body.style.backgroundColor="#101010";
            body.style.backgroundImage="none";
            const r = document.querySelector(':root');
            r.style.setProperty("--animateColor2","rgb(56 189 248)");
            r.style.setProperty("--animateColor1","#101010")
            //body.style.backgroundImage = "radial-gradient(circle at center center, transparent,rgb(0,0,0)),linear-gradient(87deg, rgba(80, 80, 80,0.05) 0%, rgba(80, 80, 80,0.05) 50%,rgba(6, 6, 6,0.05) 50%, rgba(6, 6, 6,0.05) 100%),linear-gradient(105deg, rgba(26, 26, 26,0.05) 0%, rgba(26, 26, 26,0.05) 50%,rgba(155, 155, 155,0.05) 50%, rgba(155, 155, 155,0.05) 100%),linear-gradient(212deg, rgba(130, 130, 130,0.05) 0%, rgba(130, 130, 130,0.05) 50%,rgba(81, 81, 81,0.05) 50%, rgba(81, 81, 81,0.05) 100%),linear-gradient(139deg, rgba(65, 65, 65,0.05) 0%, rgba(65, 65, 65,0.05) 50%,rgba(181, 181, 181,0.05) 50%, rgba(181, 181, 181,0.05) 100%),linear-gradient(331deg, rgba(8, 8, 8,0.05) 0%, rgba(8, 8, 8,0.05) 50%,rgba(120, 120, 120,0.05) 50%, rgba(120, 120, 120,0.05) 100%),linear-gradient(117deg, rgba(135, 135, 135,0.05) 0%, rgba(135, 135, 135,0.05) 50%,rgba(63, 63, 63,0.05) 50%, rgba(63, 63, 63,0.05) 100%),radial-gradient(circle at center center, hsl(127,1%,24%),hsl(127,1%,24%))";
            document.documentElement.classList.add('dark');
            this.moonSunToggle()
        },
        moonSunToggle() {
            document.getElementById('moon').classList.toggle('display-none');
            document.getElementById('sun').classList.toggle('display-none');
        },
        sun() {
            localStorage.theme = "light";
            const body = document.getElementsByTagName('body')[0];
            body.style.color="#101010";
            const r = document.querySelector(':root');
            r.style.setProperty("--animateColor1","rgb(56 189 248)");
            r.style.setProperty("--animateColor2","#101010")
            body.style.backgroundImage="linear-gradient(44deg, rgba(84, 153, 197, 0.04) 0%, rgba(84, 153, 197, 0.04) 50%,rgba(43, 252, 236, 0.04) 50%, rgba(43, 252, 236, 0.04) 100%),linear-gradient(264deg, rgba(197, 57, 189, 0.04) 0%, rgba(197, 57, 189, 0.04) 50%,rgba(167, 106, 179, 0.04) 50%, rgba(167, 106, 179, 0.04) 100%),linear-gradient(323deg, rgba(76, 28, 237, 0.04) 0%, rgba(76, 28, 237, 0.04) 50%,rgba(115, 208, 165, 0.04) 50%, rgba(115, 208, 165, 0.04) 100%),linear-gradient(236deg, rgba(241, 1, 111, 0.04) 0%, rgba(241, 1, 111, 0.04) 50%,rgba(7, 173, 72, 0.04) 50%, rgba(7, 173, 72, 0.04) 100%),linear-gradient(296deg, rgba(124, 241, 241, 0.04) 0%, rgba(124, 241, 241, 0.04) 50%,rgba(26, 63, 229, 0.04) 50%, rgba(26, 63, 229, 0.04) 100%),linear-gradient(96deg, rgba(87, 80, 82, 0.04) 0%, rgba(87, 80, 82, 0.04) 50%,rgba(104, 13, 102, 0.04) 50%, rgba(104, 13, 102, 0.04) 100%),linear-gradient(254deg, rgba(127, 190, 93, 0.04) 0%, rgba(127, 190, 93, 0.04) 50%,rgba(120, 35, 199, 0.04) 50%, rgba(120, 35, 199, 0.04) 100%),linear-gradient(353deg, rgba(227, 212, 206, 0.04) 0%, rgba(227, 212, 206, 0.04) 50%,rgba(55, 215, 100, 0.04) 50%, rgba(55, 215, 100, 0.04) 100%),linear-gradient(218deg, rgba(32, 99, 251, 0.04) 0%, rgba(32, 99, 251, 0.04) 50%,rgba(230, 154, 131, 0.04) 50%, rgba(230, 154, 131, 0.04) 100%),linear-gradient(266deg, rgb(101, 254, 171),rgb(119, 206, 247))";
            document.documentElement.classList.remove('dark')
            this.moonSunToggle();
        }
    },
    computed: {
    },
}
</script>

<style lang="scss" scoped>
</style>