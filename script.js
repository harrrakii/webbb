window.addEventListener('DOMContentLoaded', function() {
    const bt1 = this.document.querySelector("#bt1");
    const bt2 = this.document.querySelector("#bt2");
    const bt3 = this.document.querySelector("#bt3");
    const bt4 = this.document.querySelector("#bt4");
    const bt5 = this.document.querySelector("#bt5");

    const divTextClone = this.document.querySelector(".clone");
    const divHorses = this.document.querySelector(".horsesClone");

    const clone1 = this.document.querySelector("#clone1");
    const clone2 = this.document.querySelector("#clone2");
    const clone3 = this.document.querySelector("#clone3");
    const clone4 = this.document.querySelector("#clone4");
    const clone5 = this.document.querySelector("#clone5");

    const horses = [clone4, clone5];

    bt1.addEventListener('click', () =>{
        divTextClone.appendChild(clone1.cloneNode(true));
        console.log("1");
    })

    bt2.addEventListener('click', () =>{
        divTextClone.appendChild(clone2.cloneNode(true));
        console.log("1");
    })

    bt3.addEventListener('click', () =>{
        divTextClone.appendChild(clone3.cloneNode(true));
        console.log("1");
    })


    bt4.addEventListener('click', () => {
        const currentHorses = divHorses.querySelectorAll(".horseC");
        
        if (currentHorses.length === 0) {
            divHorses.appendChild(horses[0].cloneNode(true));
        } else if (currentHorses.length === 1) {
            divHorses.appendChild(horses[1].cloneNode(true));
        } else {
            divHorses.appendChild(currentHorses[currentHorses.length - 2].cloneNode(true));
        }
    });

    bt5.addEventListener('click', () => {
        const horses = this.document.querySelectorAll(".horseC")
        divHorses.removeChild(horses[horses.length - 1])
    })


});