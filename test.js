function solution(edges, target) {

    // 연결선 배열 기본 정렬
    edges = edges.sort();

    // 일단 첫번째 길 배열을 정의해준다.
    let firstLoad = [];

    // 첫 배열의 첫번째 항목을 가져옴
    let startItem = edges[0];

    // 첫번째 길 이후에 만들어질 계속 바뀔 길, 남은 길 정의
    let load = [];
    let restLoad = [];


    // 첫 번째 길 생성 함수
    function createFirstLine(item) {

        firstLoad.push(item);

        // firstLoad 마지막 항목
        let lastArrayTail = firstLoad[firstLoad.length - 1][1];

        // edges 배열 개수만큼 돎
        for (let i = 0; i < edges.length; i++) {

            // 마지막 배열 요소의 두번째 값으로 시작하는 놈을 마주쳤을 때 재귀해준다. (걸리지 않으면 재귀함수 실행 안함)
            if (lastArrayTail == edges[i][0]) {

                return createFirstLine(edges[i]);

            }

            if (i == edges.length - 1) {
                // 현재의 길에 첫번째 길을 넣어준다.
                load = firstLoad;
            }
        }

        console.log("이 배열은 [처음 만들어진 길] 이야");
        console.log(firstLoad);
        console.log("이 배열은 [현재 길] 이야");
        console.log(load);

        return load;
    }

    // edges 배열로 첫 라인을 만드는 함수에 1으로 시작하는 첫 아이템을 집어넣음
    createFirstLine(startItem);


    // restLoad 초기값을 넣어줌
    restLoad = edges;

    // restLoad 배열에서 특정값(현재 길) load[j] 제거함
    for (let j = 0; j < load.length; j++) {

        for (let i = 0; i < restLoad.length; i++) {
            if (restLoad[i] === load[j]) {
                restLoad.splice(i, 1);
                i--;
            }
        }
    }

    console.log("이 배열은 [남은 길] 이야");
    console.log(restLoad);


    // 이제 숫자 1,2,3중 하나를 넣어 길 이동을 하는 경우의 수를 전부 만들어보자..?

    // 모든 경우의 수
    let allCases = [];

    // 길 이동 함수 -> 현재 길과 남은 길을 넣으면, 결과로 경우의 수 배열 하나 리턴? 
    // 작은 수부터 넣을 수 있는 수까지 ㄴㄴ 모든 경우의 수만큼 집어넣음
    // 모든 경우의 수는 어떻게 저장하지? ㅇㅅㅇ
    // 일단 첫 번째 길 경우를 구해보자. 그리고 두 번째 길 경우. 뭘 증가시켜야 하는지 알 수 있을 듯
    function move(load, restLoad){
        // 현재 가야 할 길 load : [ [ 1, 2 ], [ 2, 4 ] ]
        // 나머지 길 : ...

        const num = [1, 2, 3];


        // 그러니까 최적의 경로를 찾는 걸 어떻게.. 재귀함수.? ㅜㅜ


        // 남은 숫자가 들어있는 배열 (원본손상 안시킴);
        let numberLeft = target;
        
        // 남은 숫자 더한 값
        const sum = numberLeft.reduce((a,b) => (a+b));
        console.log("남은 숫자 더한 값 : "+sum);


        // 만약 가야할 길의 마지막 길[2,4]의 2번째 놈4 -1==3 번째 numberLeft 값이 1이상이면 
        if(numberLeft[load[load.length - 1][1]-1] >= 1){

            let tempArr = [];

            console.log("d"+numberLeft[load[load.length - 1][1]-1]);

            // 남은 값 1빼준다.
            numberLeft[load[load.length - 1][1]-1] = numberLeft[load[load.length - 1][1]-1]-num[0];
            console.log(numberLeft[load[load.length - 1][1]-1]);
            console.log(numberLeft); // 적용됨

            // load와 restLoad 바꿔준다. // 여기부터
        }else{
            // return [-1];
        }








        // 길을 바꿔준다.
        console.log(load);
        // 남은 길을 바꿔준다.
        console.log(restLoad);

        // 길 이동 함수를 다시 실행해 최종값이 나와야 한다.
        // 그러면 첫 번째 경우의 수 끝
        // 두 번째 경우의 수 시작

    }
    move(load, restLoad);




    return "bb";
}

solution([[2, 4], [1, 2], [6, 8], [1, 3], [5, 7], [2, 5], [3, 6], [6, 10], [6, 9]], [0, 0, 0, 3, 0, 0, 5, 1, 2, 3]);
// solution([[2, 4], [1, 2], [4, 8], [1, 3], [5, 7], [2, 5], [10, 6], [8, 10], [6, 9]], [0, 0, 0, 3, 0, 0, 5, 1, 2, 3]);





// 간선 : 현재보다 더 큰 선이 없으면 가장 작은 선 선택 선이 하나면 자기자신 선택
// 어떤 숫자를 떨어뜨려야 할지 현재의 간선 상황에 따라 고름
// adges : 연결관계
// target : 노드에 쌓인 숫자의 합
// 10개의 노드가 있음, 가장 아래인 4,7,8,9,10에 도착하면 해당 번호에 숫자가 저장됨
// -> (그렇다는 얘기는 1,2,3,5,6 노드이면 다음으로 보낸다는 얘기)
// 어떤 숫자를 떨어뜨려야 할지는 들어갈 수 있는 수중에 가장 적은 수를 집어넣음
// 만약, target대로 숫자의 합을 만들 수 없는 경우 [-1]을 return 해주세요.

// 해결
// 0. edges : [[2, 4], [1, 2], [6, 8], [1, 3], [5, 7], [2, 5], [3, 6], [6, 10], [6, 9]] 주어짐 ok
// 1. 배열 내의 배열의 0번 인덱스가 가장 작은 순으로 정렬 후 여러개라면 1번 인덱스도 작은 순으로 정렬해 새로운 배열 만듦 ok
// [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [5, 7], [6, 8], [6, 9], [6, 10]] ok
//   -> 해당 인덱스에 어떤 길이 있는지 알아낼 수 있다. ok
// 2. target 인덱스 + 1 한 노드에 해당 값이 들어가야 한다. 어떤 번호가 들어가야 하는지 fot문을 돌려 적어 놓지 않아도 됨.ok
// 3. 번호 연결은 맨 처음에 어떻게 되어있는가? 자신의 자식 노드 중 가장 번호가 작은 노드를 가리킨다.
//   -> 현재 어떻게 연결되어 있는지 저장해놓는 배열을 하나 만든다.
// 현재 연결 : [[1, 2], [2, 4], [3, 6], [5, 7], [6, 8]]
//     (번호가 1인 놈부터 배열 마지막 length까지 증가시켜서 첫번째 놈을 가져오면 리턴하고 
//     (없으면 넘어가고 다음 번호 놈을 가져올 수 있게끔 한다.)
// 남은 놈 : [1, 3], [2, 5], [6, 9], [6, 10]
// 앞자리가 1인 애부터 쫘르륵? 
// 그럼 맨 처음 노드인 1부터 시작해 1번 배열의 다음 숫자 2를 파악하고 그 놈으로 이동했다가 2로 시작하는 배열의 다음 숫자4를 파악해 그 숫자4로 또 이동하고 4로 시작하는 배열이 없으면 마지막 그 현재 연결되어 있는 놈인 4에다가 
// 4. 1,2,3중에 어떤 숫자를 집어 넣어야 하지 -> 모든 경우의 수대로 낮은 것부터 높은 것까지 전부 집어넣음, (만약 10개의 배열이면 ...?) 
//   만약 못 넘으면 해당 처음 것의 그놈 다음 경우의수
// 가장 빠른 경우의 수 어떻게 구하는 지 모름...
// 중복순열 // 여기부터
// const getPermutations = (arr, num) => {
//     const results = [];
//     if (num === 1) return arr.map(v => [v]);

//     arr.forEach((fixed, index, origin) => {
        
//         // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
//         const permutations = getPermutations(origin, num - 1);

//         // 기준값(fixed)에 순열(permutations)을 붙인다.
//         const attached = permutations.map(v => [fixed, ...v]);

//         // 붙인 값을 결과 값에 넣어준다.
//         results.push(...attached);
//     });

//     return results;
// }

// 5. 숫자가 지나가면 선의 연결을 바꿈 ㅇㅇ
//   만약 현재 길로 연결된 노드의 번호가 가장 크면, 번호가 가장 작은 노드를 가리키는 간선을 길로 설정합니다.
//   노드의 간선이 하나라면 계속 하나의 간선을 길로 설정합니다.
//   - 남은 놈 배열에서 현재 지나간 것의 처음인덱스와 같은 걸로 시작하는 놈을 찾아서 없으면 자기 자신을 그대로 냅두고 있으면 그놈의 두번째 놈과 현재의 두번째 놈을 비교해 나보다 높은애가 있으면 그놈 두번째 값을 나의 두번째 값으로 만들어주고 그놈 두번째 값이었던것을 나의 두번째 놈에다 저장해줌(연결된선) 
// 그애로 바꿔주고 없으면 제일작은 친구로 바꿔주고 남은놈이 아예 없으면 자기 자신으로 계속 이동한다. 

// 모든 경우의 수를 구하기 이전에 어떻게 경우의 수들을 구할지 생각
// ㅇㅇㅇㅇㅇ 들어갈 수 있는 경우를 하나하나??? 
//   현재 숫자가 들어갈 수 없는 0인 놈을 최종으로 마추쳤을 때는 바로 그 배열을 저장하지 않도록 리턴 하고.
// 현재 가고있는 길을 어떻게 저장할 것인지를 생각해보자
// [1, 2], [2, 4] 이렇게 쭈르륵 이어지는 배열에서 다음 연결된 놈이 없어지는 순간그 해당 인덱스의 남은 값으로 비교했을 때 제대로 통과하면 그 배열들을 저장하면 되는데, 어떤 방식으로 저장할 거냐면 ㅇㅅㅇㅅㅇㅅㅇㅅㅇ

// 가장 빠른 경우일 때 어떤 순서를 보내는지부터 배열에 담아 리턴한다.
// 그러면 가장 빠른 경우를 찾아야 함
// 어떤 번호가 가장 빠를지를 모든 경우의 수를 집어넣어 길이를 재야할 듯
// 다만 번호를 내릴 때 타겟값보다 같거나 작은 수를 내려보냄
// 경우의 수를 담는 배열을 하나 만들어서 거기에 배열의 길이를 재서 같이 넣어놓으면 된다.

// 만약 현재 가야하는 길의 남은 값(만약 0임)보다 현재 넣어야 하는 
// 숫자가 크면(1임) 넣을 수 없으므로 최종 -1을 리턴하면 될것같다.

// 모든 경우의 수중 가장 길이가 짧은 놈을 고르고 길이가 짧은 애가 여러 개라면 
// 배열의 항목을 모두 더했을 때 가장 작은 친구를 리턴하면 될 것 같다.