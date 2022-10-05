function Heap(type = "min"){
    this.items = [];
    this.type = type;
}

Heap.prototype.swap = function(idx1, idx2){
    const temp = this.items[idx1];
    this.items[idx1] = this.items[idx2];
    this.items[idx2] = temp;
}

Heap.prototype.getParentIndex = function(idx){
    return parseInt((idx-1)/2);
}

Heap.prototype.getLeftChildIndex = function(idx){
    return idx*2+1;
}

Heap.prototype.getRightChildIndex = function(idx){
    return idx*2+2;
}

// 만들어보자
Heap.prototype.insert = function(item){
    this.items.push(item);
    let nowIdx = this.items.length-1;
    while(true){
        if(nowIdx<1) return this.items.length;
        const parentIdx = this.getParentIndex(nowIdx);
        if(this.items[parentIdx] < this.items[nowIdx]){
            this.swap(parentIdx, nowIdx);
            nowIdx = parentIdx;
        }else{
            break;
        }
    }
    return this.items.length;
}

Heap.prototype.remove = function(){
    const temp = this.items.shift();
    this.items.unshift(this.items.pop());

    let nowIdx = 0;
    while(true){
        const leftChild = this.getLeftChildIndex(nowIdx);
        const rightChild = this.getRightChildIndex(nowIdx);
        if(this.items[nowIdx]>this.items[leftChild] || this.items[nowIdx]>this.items[rightChild]){
            if(this.items[leftChild]>this.items[rightChild]){
                swap(nowIdx, rightChild);
                nowIdx = rightChild;
            }else{
                swap(nowIdx, leftChild);
                nowIdx = leftChild;
            }
        }else{
            break;
        }
    }
    return temp; 
}

const heap = new Heap();
heap.insert(2);
heap.insert(2);
heap.insert(2);
heap.insert(2);
heap.insert(2);

// console.log(heap.insert(2));
// console.log(heap.insert(7));
// console.log(heap.insert(8));
// console.log(heap.insert(6));
// console.log(heap.insert(4));

// Heap이라는 객체를 복사해 만든 것이다.
// 생성자가 있어야 하는가?



console.log(heap);



// insert
// Heap.prototype.insert = function(item){
//     this.items.push(item);
//     console.log(this.items);
//     this.nowIdx = this.items.length-1;
//     while(true){
//         if(this.nowIdx<1) return this.items.length;
//         this.parentIdx = this.getParentIndex(this.nowIdx);
//         if(this.items[this.parentIdx]*-1<this.items[this.nowIdx]*-1){
//             this.swap(this.parentIdx, this.nowIdx);
//         }else{
//             break;
//         }
//     }
//     return;
// }
