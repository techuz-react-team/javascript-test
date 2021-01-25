class EventSourcer {
  constructor() {
    this.value = 0;
    this.AllAction = [];
    this.undoStep = 0;  // test undo no actions
    this.redoStep = 0;  // test redo no actions
  }

  add(number) {
    this.value += number;
    this.undoStep = number;
    this.AllAction.push(number);
  }

  subtract(number) {
    this.value -= number;
    this.redoStep = number;
    this.AllAction.push(number);
  }

  undo() {
    this.subtract(this.undoStep);
  }

  redo() {
    this.add(this.redoStep);
  }

  bulk_undo(number) {
    this.value = 0;
    // this.undoArray.map(number => {
    //   this.undoArray.pop();
    // });
    for (let i = 0; i < number; i++) {
      this.AllAction.pop();
    }
    for (let val of this.AllAction) {
      this.value += val;
    }
  }

  bulk_redo(number) {
    for (let i = 0; i < number; i++) {
      this.value += this.AllAction.pop();
    }
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
