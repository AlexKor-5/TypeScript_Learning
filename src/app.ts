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

function cul(a: number, b: number, c: number) {
    return a + b + c
}

// console.log(cul(1, 2, 3));

let complexType = {name: "myName", id: 1};
complexType = {name: "Alex", id: 2}