import { readInputFileAndReturnNumberList } from "./common";

function getListDifference(listA: number[], listB: number[]) {
  const sortedListA = listA.toSorted();
  const sortedListB = listB.toSorted();

  return sortedListA.reduce(
    (totalDifference, _, index) =>
      totalDifference + Math.abs(sortedListA[index] - sortedListB[index]),
    0
  );
}

async function main() {
  const [listA, listB] = await readInputFileAndReturnNumberList(
    `${import.meta.dirname}/input.txt`
  );

  console.log(getListDifference(listA, listB));
}

main();
