// icon


//theme var
const theme=localStorage.theme;
const systemTheme=window.matchMedia("prefers-color-scheme:dark").matches;
//icon toggling
const iconToggle=()=>{
    sun.classList.toggle('display-none');
    moon.classList.toggle('display-none');
}
const themeCheck=()=>{
    if(theme=="dark"||(!theme&&systemTheme)){
        document.documentElement.classList.add("dark");
        moon.classList.toggle('display-none')
        return;
    }
    sun.classList.toggle('display-none')
}

//manual theme switch
const themeSwitch=()=>{
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme","light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");
    iconToggle();
}
window.addEventListener("load",()=>{
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = "none";
    body.style.backgroundColor="#101010";const r = document.querySelector(':root');
    r.style.setProperty("--animateColor2","rgb(56 189 248)");
    r.style.setProperty("--animateColor1","#101010")
    document.documentElement.classList.add('dark')
    document.getElementById('moon').classList.toggle("display-none")
} else {
    document.getElementById('sun').classList.toggle("display-none")
    document.documentElement.classList.remove('dark')
}
})