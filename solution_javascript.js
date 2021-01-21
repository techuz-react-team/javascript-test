class EventSourcer {
  constructor() {
    this.value = 0;
    this.previousValue = this.value;
    this.undoValue = this.value;
    this.history = [];
    this.undoStep = 0;
  }

  add(num) {
    this.value += num;
    this.previousValue = num;
    this.history.push(num);
  }

  subtract(num) {
    this.value -= num;
    this.undoValue = num;
  }

  undo() {
    this.subtract(this.previousValue);
    this.undoStep++;
  }

  redo() {
    this.add(this.undoValue)
  }

  bulk_undo(num) {

    this.value = 0;
    for(let i=0; i < num; i++) {
      this.history.pop()
    }
    
    for (let val of this.history) {
      this.value += val;
    }
    //console.log(this.history);
  }

  bulk_redo(num) {
    
    for(let i=0; i < num; i++) {
      let temp = i+1;
      if(temp <= this.undoStep) {
        this.value += this.history.slice(-1).pop();
        this.history.pop();
      }
      
    }
    

  }

  addition(a,b){
    return a+b;
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
