const calGame = (req, res) => {
  const { data } = req.body;

  let num = data.split('');

  const judgePoint24 = function (nums) {
    const isValid = (x) => Math.abs(x - 24) < 0.0000001;
    const aux = (arr = []) => {
      if (arr.length === 1) {
        return isValid(arr[0]);
      }
      let valid = false;
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          const nextArr = arr.filter((x, index) => index !== i && index !== j);
          valid =
            valid ||
            aux([...nextArr, arr[i] + arr[j]]) ||
            aux([...nextArr, arr[i] - arr[j]]) ||
            aux([...nextArr, arr[j] - arr[i]]) ||
            aux([...nextArr, arr[i] * arr[j]]) ||
            aux([...nextArr, arr[i] / arr[j]]) ||
            aux([...nextArr, arr[j] / arr[i]]);
        }
      }
      return valid;
    };

    return aux(nums);
  };

  let valid = judgePoint24(num);

  return res.status(200).json({ result: valid });
};

module.exports = { calGame };
