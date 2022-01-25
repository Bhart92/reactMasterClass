class Printer {
    name = "I am printer class"

    printName()
    {
        console.log('printName:', this.name);
    }

    printNameArrowFn = () => 
    {
        console.log('printNameArrowFn: ', this.name);
    }

}
