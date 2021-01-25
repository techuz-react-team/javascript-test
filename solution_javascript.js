class EventSourcer {
  constructor() {
    this.value = 0;
    this.allOpearations = [];
    this.undoOperations = [];
    this.currentTipIndex = 0;
  }

  add(num) {
    this.value += num;
    this.allOpearations.push(num);
    this.currentTipIndex += 1;
  }

  subtract(num) {
    this.value -= num;
    this.allOpearations.push(-num);
    this.currentTipIndex += 1;
  }

  undo() {
    this.currentTipIndex = this.currentTipIndex - 1;
    if (this.allOpearations[this.currentTipIndex]) {
      this.value = this.value - this.allOpearations[this.currentTipIndex];
    } else {
      this.value = 0;
    }
    this.undoOperations.push(this.allOpearations[this.currentTipIndex]);
  }

  redo() {
    let redoOperation = this.undoOperations.pop();
    if (redoOperation) {
      this.value = this.value + redoOperation;
    }
  }

  bulk_undo(num) {
    for(let i=0;i<num;i++) {
      this.undo();
    }
  }

  bulk_redo(num) {
    for(let i=0;i<num;i++) {
      this.redo();
    }
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
