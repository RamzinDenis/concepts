function throttle(cb, ms = 1000) {
  let isWaiting = false;
  let savedArgs = null;
  let savedThis = null;

  return function wrapper(...args) {
    if (isWaiting) {
      (savedArgs = args), (savedThis = this);
      return;
    }

    cb(...args);

    setTimeout(() => {
      isWaiting = false;

      if (savedArgs) {
        wrapper.apply(this, args);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  };
}

const func = throttle(() => console.log("throttle"), 1000);
