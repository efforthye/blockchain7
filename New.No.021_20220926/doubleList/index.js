class Node{
    constructor(data){
        // this.data : 노드의 데이터
        this.data = data;
        this.prev = undefined;
        // this.next : 다음 노드
        this.next = undefined;
    }
}//Node class end

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insert(data){
        console.log(`노드 입력 시작`);
        console.log(`현재 사이즈는 ${this.size}`);
        console.log(`입력된 데이터는 ${data}`);

        // 만약 머리가 없으면
        if(!this.head){
            console.log(`헤드가 없다.`);
            // 머리와 꼬리에 한 방에 넣는다.
            this.head = this.tail = new Node(data);
            console.log("헤드는" ,this.tail.next, " 테일은",this.tail);
        }else{
            console.log(`헤드가 있다.`);
            console.log("현재 테일의 다음 노드는" ,this.tail.next);
            // 끝에 다음 새 노드를 추가한다.
            this.tail.next = new Node(data);
            console.log("현재 테일의 다음 노드는" ,this.tail.next);
            // prev에 기존 꼬리값을 넣어준다.
            this.head.next.prev = this.head;
            console.log("prev에 현재 헤드를 넣어줄 건데 현재 헤드는?",this.head);
            console.log("현재 테일의 다음 노드의 이전은(prev)",this.tail.next.prev);
            // 기존 꼬리에 새로운 다음 것을 넣어준다.
            this.tail = this.tail.next;
            // console.log(`현재 테일은 ${this.tail}`);
            console.log("현재 테일은", this.tail);
        }
        this.size++;
        console.log(`현재 사이즈는 ${this.size}`);
        console.log(`노드 입력 끝`);
    }

    remove(data){
        console.log("노드 삭제 시작");
        let curr = this.head;

        // curr이 없으면 리턴(아래 curr?. 코드와 같은 의미라고 한다.)
        if(curr) return;

        // head가 data랑 같으면
        // ?.은 curr가 객체인지 확인하고 data프로퍼티를 가져온다는 뜻이다.
        // 더 정확히는 데이터라는걸 .을 붙여서 가질 수 있는지 확인한다는 의미이다.
        // 안 써도 상관 없는데 헤드가 없는 경우 null한테 넣게 되니까 예외 처리하는 것이다.
        // ?는 붙이지 않아도 상관없다.
        if(curr?.data === data){
            // 임시로 헤드를 변수에 넣음
            const tempNode = this.head;
            // 다음 노드였던 것을 앞으로 미뤄줌
            this.head = this.head.next;
            // 헤드에 프리뷰가 있으면 안되니까 비워줌
            this.head.prev = null;
            // 사이즈를 줄여줌
            this.size--;
            // 무슨 데이터를 지웠는지 보기위해 리턴해준다.
            return curr.data;
            
        }
        // 삭제 시 현재가 끝이 아니면
        while(curr !== this.tail){
            // 현재 다음 노드의 데이터가 데이타와 같으면
            if(curr.next.data === data){
                // 다음 노드를 임시 저장
                const tempNode = curr.next;
                // 다음 노드의 다음 노드를 넣는다.
                curr.next = tempNode.next;
                // 만약 다음것이 있으면(없을 수도 있다. 왜? )
                if(curr.next){
                    curr.next.prev = curr;
                }else{
                    this.tail = curr;
                    --this.size;
                    return tempNode.data;
                }
                curr = curr.next;

            }
        }
    }


}//DoubleLinkedList class end

const testDouble = new DoubleLinkedList();
testDouble.insert("테스팅");
testDouble.insert("테스팅2");
testDouble.insert("테스팅3");
testDouble.remove("테스팅");


