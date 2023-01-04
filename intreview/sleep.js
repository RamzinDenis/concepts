function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function test() {
  await sleep(500);
  console.log("test");
  await sleep(1000);
  console.log("anotherTest");
}

test();
