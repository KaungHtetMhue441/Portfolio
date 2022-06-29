<template lang="">
            

    <section id="contact" class="container h-100 dark:text-cyan-300">
        <div class="header pt-7 pb-5 md:pt-24 text-center">
            <h1 class="text-4xl md:text-6xl font-semibold">Contact me</h1>
        </div>
        <div class="flex flex-col md:flex-row justify-between space-y-5 md:first-line:p-14 pb-0">
            <div class="left flex-col items-center space-y-5" >
                 <div class="flex space-x-5">
                    <i class="fa fa-3x fa-phone pt-2"></i>
                    <div class="text-xl">
                        <h1>Phone</h1>
                        <h1>09795889472</h1>
                    </div>
                </div>
                <div class="flex space-x-5">
                    <i class="fa fa-3x fa-book pt-2"></i>
                    <div class="text-xl">
                        <h1>Email</h1>
                        <h1>kaunghtetmhue199@gmail.com</h1>
                    </div>
                </div>
                <div class="flex space-x-5">
                    <i class="fa fa-3x fa-location-arrow pt-2"></i>
                    <div class="text-xl">
                        <h1>Location</h1>
                        <h1>Yangon,Myanmar</h1>
                    </div>
                </div>
               
            </div>
            <div class="right w-full md:pl-40 space-y-5">
                <div class="inputform bg-cyan-200 p-3 w-full rounded-lg">
                    <label for="name" class="block">Name</label>
                    <input type="text" class="outline-none text-2xl border-none bg-inherit" name="name" id="name">
                </div>
                <div class="inputform bg-cyan-200 p-3 w-full rounded-lg">
                    <label for="email" class="block">Email</label>
                    <input type="text" class="outline-none text-2xl border-none bg-inherit" name="email" id="email">
                </div>
                <div class="inputform bg-cyan-200 p-3 w-full rounded-lg">
                    <label for="name" class="block">Name</label>
                    <textarea rows="5"  class="outline-none w-full text-2xl border-none bg-inherit" name="name" id="name">
                        </textarea>
                </div>
                <button class="custom-btn text-cyan-400 mt-1">Send Now</button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>