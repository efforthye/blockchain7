const promiseTime = (type, time) =>{
    // Promise 함수를 사용하기 위해 new Promise를 했다.
    return new Promise((resolve, reject)=>{

        // 매개변수로 전달된 시간 후에 매개변수로 전달된 type을 반환한다.
        // 만약 서버와의 통신(axios)을 사용할 시, setTimeout이 아니라
        // axios의 then 등을 이용해서 resolve 메서드를 호출하라고 한다.(중요)
        try {
            setTimeout(()=>{
                resolve(type);
            }, time*1000);
        } catch (error) {
            reject({type : 'error', payload : error});
        }
    });
}

export default promiseTime;