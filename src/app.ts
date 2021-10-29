class MyClass {
    public render(divId: string, text: string) {
        let el: HTMLElement | null = document.getElementById(divId);
        if (el) {
            el.innerText = text;
        }
    }
}

window.onload = () => {
    let myClass = new MyClass();
    myClass.render("content", "Hello World");
    console.log(`test`);
}