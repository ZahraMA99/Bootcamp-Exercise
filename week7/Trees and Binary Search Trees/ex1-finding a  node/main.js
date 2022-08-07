// FINDING A NODE

class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newValue) {
        if (!this.value) {
            this.value = newValue
        }
        else if (newValue > this.value && this.rightChild) {
            this.rightChild.insertNode(newValue)
        }
        else if(newValue <= this.value && this.leftChild) {
            this.leftChild.insertNode(newValue)
        }
        else if (newValue <= this.value) {
            this.leftChild = new BinarySearchTree(newValue)
        }
        else {
            this.rightChild = new BinarySearchTree(newValue)
        }
    }

    findNode(value){

        if(this.value === value){
            return true
        }
        
        if(value < this.value && this.leftChild !== undefined){
            return this.leftChild.findNode(value)
        }
        
        if(value > this.value && this.rightChild !== undefined){
            return this.rightChild.findNode(value)
        }

        return false
        
    }

}

const bSTree = new BinarySearchTree()
const letters = ["H", "E", "S", "G", "L", "Y", "I"]

for(let letter of letters){
   bSTree.insertNode(letter)
}

console.log(bSTree.findNode("H")); // should print true
console.log(bSTree.findNode("G")); // should print true
console.log(bSTree.findNode("Z")); // should print false
console.log(bSTree.findNode("F"));  // should print false
console.log(bSTree.findNode("y"));  // should print false - we didn't make the tree case sensitive!
