# Day 1 Part 2 Problem

Given two lists calculate their similarity scores. Similarity score is calculated by multiplying each number in list A with the occurrences of that number in list B and summing the results.

## Planned Solution

If the number 3 exists 10 times in list A and 14 times in list B, then the sum of all the number 3s will add 3*10*14 to the similarity score. So the solution is to loop over each list once and tally each number's occurrences in a set, and then go through each set and multiply the cross overs.
