// 369게임
// map을 사용할까? 아니면 %를 주로 사용할까? %(나머지)로 예나언니가 해달라고함.

const three = function(){
    const count = parseInt(prompt('3!6!9! 3!6!9! 몇까지?'));

    // 입력받은 값만큼 for문을 돌린다.
    for(let i = 1; i<count+1; i++){

        // 현재를 해야하기 때문에 count가 아닌 i에 투스트링 혹은 `${i}` 를 해줘야 한다.(중요)
        if(`${i}`.includes('3')||`${i}`.includes('6')||`${i}`.includes('9')){

            // i(숫자)를 string으로 변환해준다.
            // let number = i.toString();
            let number = `${i}`;
            // console.log(number);

            // 짝을 입력해서 출력하기 위해 text를 빈 문자열로 초기화(선언)한다.
            let text = '';

            // i의 개수(길이)만큼 돌아간다.
            for(let j = 0; j<number.length; ++j){

                // 숫자의 j번째 친구를 숫자로 바꾸고 3으로 나눠준다. (이해안됨, 중요)
                // 만약 36이면 넘버의 j번째(0, 1, 2, ...)것을 
                // 숫자로 바꿔 3으로 나눠 3의배수이면 true가되도록 한다.
                // 0일때 true여야 하니까 이놈 자체를 부정해준다.(이해잘안됨, 중요)
                // 넘버의 j번째가 0이 아닐때여야 한다. 0이어도 3의배수인것처럼되니까
                // 각 숫자 자리가 3의 배수인지 확인하고, 0이 아닌지 확인하여 
                // 출력할 text 문자열에 [짝! ]을 추가한다.
                if(!(parseInt(number[j])%3) && number[j] != "0"){
                    text += "짝! ";
                }
                console.log(`${i} `+text);
            }
        }else{
            console.log(i);
        }
    }
    // 여기까지가 369 끝..





    // 전공자는 아래의 코드를 이해해보는 시간을 가져도 좋다고 한다.
    // 일단 적어두고 분석을 해본다.

    // three1이라는 함수를 선언해준다.
    const three1 = function(){

        // 사용자에게 입력받은 값을 int로 변환하고 count라는 변수에 담아준다.
        const count = parseInt(prompt('3!6!9! 3!6!9! 몇까지?'));

        // 사용자에게 입력받은 값만큼 for문을 돌린다.
        for(let i = 0; i<count+1; i++){

            // i를 string(문자열)으로 형변환한다.
            let numbers = `${i}`;
            
            // .match() 메서드는 동일한 단어를 문자열에서 찾는 것이다. 369를 찾아 있으면,
            if(numbers.match(/[3,6,9]/)){

                // 콘솔에 369에해당하는i와 숫자를자른놈을
                // .split() 메서드는 : 해당하는 문자열을 기준으로 잘라 배열로 만들어주며,
                //   비워두면 한 자 한 자 잘라서 배열에 넣는다.
                // .map() 함수는 : 값과 인덱스를 인자로 받아 
                //   자동으로 for문을 돌려 값을 빼도록 해준다.
                // .join() 메서드는 : 배열의 원소를 문자열로 합치는 것이다.
                console.log(
                    i + numbers
                    .split('')
                    .map(item=>(!(parseInt(item)%3)&&item!="0"?" 짝!" : ""))
                    .join("")
                );

            }else console.log(i);
        }

    }//three1() function end


}