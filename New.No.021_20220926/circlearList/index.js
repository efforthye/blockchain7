function Node(data){
    // this.data : 노드의 데이터
    this.data = data;
    // this.next : 다음 노드
    this.next = undefined;
}//Node function end

function CircularLinkedList(){
    this.head = null;
    this.tail = null;
    this.size = 0;
}//CircularLinkedList function end

CircularLinkedList.prototype.insert = function(data){
    // 머리가 없으면
    if(!this.head){
        this.head = this.tail = new Node(data);
        // 빙글빙글 돌아야 하는데 하나이니까 다음것에 자신을 연결해줌
        this.head.next = this.head;
    // 머리가 있으면
    }else{
        // 꼬리의 next에 새로운 노드를 만들어줌
        this.tail.next = new Node(data);
        // 꼬리의 next의 next에 머리를 연결시켜 원형으로 만듬
        this.tail.next.next = this.head;
        // 꼬리를 새로운 노드로 바꿔준다.
        this.tail = this.tail.next;
    }
    this.size++;
};

// 코드 잘 이해해 보기
CircularLinkedList.prototype.remove = function(data){
    let curr = this.head;
    if(!curr){
        return;
    }
    // 만약 첫번째 놈(head.data)이 삭제할 data이면
    if(curr.data === data){
        // 바로 삭제하면 다른 연결 때문에 맛탱이 감
        // 그래서 헤드를 먼저 바꿔줌 다음 놈으로
        this.head = this.head.next;

        // 이것만 다를 뿐이라고 함
        // 꼬리의 다음 것(next)을 헤드로 다시 연결시켜줌
        this.tail.next = this.head;

        // delete curr; // 아래 while문에서 받아오기 위해서 삭제는 그냥 막아둠
        this.size--;
        return curr.data;
    }
    // 헤드의 data가 삭제할 data가 아니면 반복문을 돌려 data와 같은 놈일때 삭제함
    // 만약 넘어가다가 꼬리까지 갔는데 찾는 data가 없으면 while문을 끝낸다.
    // 한바퀴 다 돌 때까지 while문을 돌린다.
    while(curr !== this.tail){
        // 만약 next의 다음 next가 data값이 같으면 
        if(curr.next.data === data){
            // 
            curr.next = curr.next.next;
            // const tempNode = curr.next;
            // 삭제된 거라고 함
            // curr.next = tempNode.next;
            // if(tempNode === this.tail)this.tail = curr;
            // 다음것이 헤드이면 이전것이 꼬리이니까 그러면 꼬리에 curr을 넣어줌
            // 그러면 tempNode가 필요 없다.
            if(curr.next == this.head) this.tail = curr;
            this.size--;
            // 삭제한 데이터
            return curr.data; 
        }
        // curr을 계속 다음 놈으로 넘겨줌
        curr = curr.next;
    }
};



// next의 data가 없을 때까지 반복해 그 data를 한 변수에 추가시킴
CircularLinkedList.prototype.toString = function(){
    // head가 없으면 빈 문자열 반환
    if(!this.head){
        return "";
    }
    let curr = this.head;
    // 임시 문자열에 head의 data 정의한다.
    let tempStr = `${this.head.data}`;
    // curr이 꼬리가 아니면 실행한다.
    while(curr !== this.tail){
        // head의 data가 정의되었으니 한번 끊도록 ,를 추가해준다.
        tempStr += ",";
        // 임시 문자열에 다음 Node의 데이터를 추가한다.
        tempStr += curr.next.data;
        // 노드를 계속 다음 놈으로 바꿔준다.
        curr = curr.next;
    }
    // 모든 문자열이 모인 tempStr을 리턴한다.
    return tempStr;
}


// 배열에 data들을 넣어주면 될 것 같음
const testCircular = new CircularLinkedList();
testCircular.insert(1);
testCircular.insert(2);
testCircular.insert(3);
testCircular.insert(4);
testCircular.insert(5);
// [object Object] -> "1,2,3,4,5" 으로 나오도록 만들기
console.log(testCircular.toString()); 

// let test1 = new CircularLinkedList();
// test1.remove("");
testCircular.remove(3);
console.log(testCircular.toString()); 


// // 해당하는 놈을 삭제시켜 줘야함
// CircularLinkedList.prototype.remove = function(data){
//     console.log("노드 삭제 시작");
//     console.log("head.data : ",head.data);
//     let head = this.head;
//     // 만약 머리가 없으면 삭제할 것이 없으니 리턴
//     if(!head){
//         return;
//     }
//     // 만약 머리의 데이터가 data이면(삭제할 놈이 자기 자신)
//     if(head.data === data){
//         // this.tail, this.head를 어떻게 할 것인가?
//         // 연결을 끊는다.
//         // tail이 헤드에 연결되어 있으므로 tail을 비워준다.
//         this.tail = null;
//         // this.head를 삭제시켜준다.
//         delete this.head;
//         // 사이즈를 줄인다.
//         size--;
//         return;
//     }else{
//     // 그게 아니면
//         // this.tail, this.head를 어떻게 할 것인가?
//         // 반복문을 돌려 지워버릴 data놈을 찾아내서 지운다.
//         // while(this.head === this.tail){
//         while(tempHead !== this.tail){
//             // next를 tempHead에 임시 저장
//             let tempHead = head.next;
//             // next에 다음 노드를 넣는다.
//             // head.next = head.next.next;
//             head.next = tempHead.next;
//             // 
//             // 이름을 갖다 붙힘
//         }
//         // this.tail, this.head를 어떻게 할 것인가?
//         // 만약 삭제할 놈이 끝이 아니면 data번째에 해당하는 놈을
//         // if(head !== this.tail){};
//         // temp를 만들어 이놈의 전의 next를 다음놈의 head(Node)에 연결시키고
//         // 이전놈의 Next에 현재놈의 Next를 바꿔준다. 
//     }
//     // 해당하는 놈을 찾아서 삭제하고 나머지 연결하고 사이즈 줄임
//     // 해당하는 놈이 자기 자신이라면 
// }
// const testCircularDelete = new CircularLinkedList();
// // 존재여부 확인 contains(이 놈이 왜 필요한 놈이지?)
// CircularLinkedList.prototype.contains = function(data){
//     let head = this.head;
//     // 처음의 데이터가 찾으려는 데이터이면 true 리턴

//     // 찾아보고 아니면 false
// }

