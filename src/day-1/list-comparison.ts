async function readInputFileAndReturnNumberList(
  fileLocation: string
): Promise<[number[], number[]]> {
  const inputFile = Bun.file(fileLocation);

  const inputText = await inputFile.text();

  return inputText
    .split("\n")
    .map((line) => line.split("   "))
    .filter((numbers) => numbers.length === 2)
    .reduce<[number[], number[]]>(
      (accumulatorTuple, [listANum, listBNum]) => {
        const [listAAcc, listBAcc] = accumulatorTuple;
        listAAcc.push(Number(listANum));
        listBAcc.push(Number(listBNum));
        return accumulatorTuple;
      },
      [[], []]
    );
}

function getListDifference(listA: number[], listB: number[]) {
  const sortedListA = listA.toSorted();
  const sortedListB = listB.toSorted();

  return sortedListA.reduce(
    (totalDifference, _, index) =>
      totalDifference + Math.abs(sortedListA[index] - sortedListB[index]),
    0
  );
}

function printLists(listA: number[], listB: number[]) {
  for (let i = 0; i < listA.length; i++) {
    console.log(`${listA[i]}   ${listB[i]}`);
  }
}

async function main() {
  const [listA, listB] = await readInputFileAndReturnNumberList(
    `${import.meta.dirname}/input.txt`
  );

  console.log(getListDifference(listA, listB));
}

main();
