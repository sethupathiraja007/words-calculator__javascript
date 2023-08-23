const calculate = () => {
  let word = document.getElementById("textarea").value;
  let result = word.length;
  console.log(result);
  document.getElementById("result").innerHTML = result;
};

