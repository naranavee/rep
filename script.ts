class Tiger<T>{
    data : T
    constructor(data : T){
        console.log(`data is ${data}`)
    }
    eating() : T{
        return this.data
    }
}
var tiger = new Tiger("Tigerone")
tiger.eating()
var tiger2 = new Tiger(101)
tiger2.eating
