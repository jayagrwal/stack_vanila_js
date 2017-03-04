function MyStack() {  
  var st = 10;
  var stk = new Array(10);

  function push(v) {
    if (st === 0) {
      console.log("Stack Overflow");
    }
    else {
      st = st - 1;
      stk[st] = v;
    }
  }

  function pop() {
    if (st === 10) {
      console.log("Stack Underflow");
    }
    else {
      var temp = stk[st];
      stk[st] = ''
      st = st + 1;
      return temp;
    }
  }

  function getStack() {
    return stk;
  }
  this.push = push;
  this.pop = pop;
  this.getStack = getStack;
}


