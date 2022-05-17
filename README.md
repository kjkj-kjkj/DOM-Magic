# Magic Number

You have been given a broken function `CalculateMagic(...)`. Your task is to write some code, and fix it.

To get the magic number, you must:
1. Do A + B + B
2. Add 90 to previous answer.
3. Divide previous answer by 10.
4. If the previous answer is a multiple of 5, subtract 8. Otherwise add 9
5. Take the previous number and square it
6. Divide the previous answer by 3 (lets call the answer G)
7. return the result of calling roundUp(G);
 