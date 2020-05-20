const bindKeysEvent = () => {
    window.addEventListener("keyup", (event) => {
        const keyCode = event.keyCode;
        const audio = document.querySelector(`audio[data-key='${keyCode}']`);
        if (!audio) return;
        const key = document.querySelector(`li[data-key='${keyCode}'`);
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
    });
};

bindTransionEnd = () => {
    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
        key.addEventListener("transitionend", (event) => {
            if (!event.propetyName === "transform") return;
            event.target.classList.remove("playing");
        });
    });
};
window.addEventListener("load", () => {
    bindKeysEvent();
    bindTransionEnd();
});
