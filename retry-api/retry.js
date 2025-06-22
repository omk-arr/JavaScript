const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("check");
const resultElement = document.getElementById("result");
let retries;
buttonElement.addEventListener("click", (e) => {
  retries = 0;
  if (inputElement.value) {
    apiFunc(isEven, inputElement.value, 3, 3000)
      .then((res) => (resultElement.innerHTML = res))
      .catch((rej) => (resultElement.innerHTML = rej));
  } else resultElement.innerHTML = "";
});
const apiFunc = (isEven, number, retry, delay) => {
  return new Promise((resolve, reject) => {
    if (retry > 0) {
      setTimeout(() => {
        try {
          const result = isEven(number);
          if (result) resolve(`${number} is an even number`);
        } catch (error) {
          retries++;
          console.log("retrying...", retries);
          resultElement.innerHTML = `retrying ${retries}`;
          console.log(`Error occured: ${error}`);
          apiFunc(isEven, number, retry - 1, delay)
            .then(resolve)
            .catch(reject);
        }
      }, delay);
    } else
      reject(`Failed to check if the number is even after ${retries} retries`);
  });
};
function isEven(num) {
  if (num % 2 === 0) return true;
  throw new Error("Not an even number");
}
