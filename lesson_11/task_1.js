function delayText (text, timer) {
    setTimeout(() => {
        console.log(text);
    }, timer);
}
delayText("Hello World", 5000);