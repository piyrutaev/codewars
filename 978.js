function asd(knightPosition, kingPosition) {
  let files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let filesPosition = Math.abs(files.indexOf(knightPosition[1]) - files.indexOf(kingPosition[1]));
  let rankPosition = Math.abs(knightPosition[0] - kingPosition[0]);
  if(filesPosition == 1 && rankPosition == 2 || filesPosition == 2 && rankPosition == 1) return 'Knight';
  if(filesPosition < 2 && rankPosition <= 1) return 'King';
  return 'None';
};



function qwe() {
    console.log(asd([1,"B"], [1,"C"])); 
}

qwe();
