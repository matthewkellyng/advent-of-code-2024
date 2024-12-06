import { printLists, readInputFileAndReturnNumberList } from "./common";

function getSimilarityScores(listA: number[], listB: number[]) {
  // Map of number occurring, to times it occurs
  const listAOccurrences = listA.reduce((map, number) => {
    if (map.has(number)) {
      map.set(number, (map.get(number) as number) + 1);
    } else {
      map.set(number, 1);
    }
    return map;
  }, new Map<number, number>());
  const listBOccurrences = listB.reduce((map, number) => {
    if (map.has(number)) {
      map.set(number, (map.get(number) as number) + 1);
    } else {
      map.set(number, 1);
    }
    return map;
  }, new Map<number, number>());

  return listAOccurrences
    .entries()
    .reduce((similarityScore, [number, timesNumberOccurred]) => {
      return (
        similarityScore +
        number * timesNumberOccurred * (listBOccurrences.get(number) ?? 0)
      );
    }, 0);
}

async function main() {
  const [listA, listB] = await readInputFileAndReturnNumberList(
    `${import.meta.dirname}/input.txt`
  );
  printLists(listA, listB);

  console.log(getSimilarityScores(listA, listB));
}

main();
