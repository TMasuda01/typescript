export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題:引数のかたしてい</p>
      <button onClick={onClickPractice}>練習問題１</button>
    </div>
  );
};
