// Call Stack
const a = 1;

function func1(){
    // const a = 2;
    // console.log(a);
    console.log("func1");
}

function func2(){
    func1();
    console.log("func2");
    func4();
}

func2();



a호출

x