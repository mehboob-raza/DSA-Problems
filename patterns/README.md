# Star Pattern Programs

This folder contains JavaScript programs that print different star patterns using nested loops.

## How these programs work

Most of these files follow the same basic idea:

1. An outer loop controls the number of rows.
2. An inner loop prints either spaces or stars.
3. `process.stdout.write()` prints characters without moving to the next line.
4. `console.log()` moves the cursor to the next line after each row.

The variable `n` controls the pattern size. In these examples, `n = 5`.

---

## 1. left-triangle.js

### What it prints
A simple left-aligned triangle made of stars.

### How it works
- The outer loop runs from row 1 to `n`.
- For each row, the inner loop prints one star for each column.
- After finishing the row, `console.log()` starts a new line.

### Logic
- Row 1 prints 1 star
- Row 2 prints 2 stars
- Row 3 prints 3 stars
- ...
- Row 5 prints 5 stars

---

## 2. right-triangle.js

### What it prints
A basic triangle pattern with stars printed row by row.

### How it works
- The outer loop handles each row.
- The inner loop prints stars for every column in that row.
- Each row ends with a new line.

### Logic
This file builds a triangle by repeating the same star-printing step for each row.

---

## 3. inverse-left-triangle.js

### What it prints
An upside-down triangle where the number of stars decreases as the rows go down.

### How it works
- The outer loop runs from row 1 to `n`.
- The inner loop prints `n - row + 1` stars for each row.
- So the first row has the most stars, and the last row has the fewest.

### Logic
- Row 1 prints 5 stars
- Row 2 prints 4 stars
- Row 3 prints 3 stars
- Row 4 prints 2 stars
- Row 5 prints 1 star

---

## 4. right-inverse-triangle.js

### What it prints
An inverted triangle with leading spaces so it appears shifted to the right.

### How it works
- The outer loop runs from row 1 to `n`.
- The first inner loop prints spaces to move the stars to the right.
- The second inner loop prints stars.
- Each row ends with a new line.

### Logic
- The first row has the most leading spaces and the fewest stars.
- The last row has the least leading space and the most stars.

---

## 5. paramid-pattern.js

### What it prints
A pyramid pattern with spaces on the left and stars increasing row by row.

### How it works
- The first inner loop prints spaces so the stars appear centered.
- The second inner loop prints `2 * row - 1` stars.
- That makes each row wider than the previous one.

### Logic
- Row 1 prints 1 star
- Row 2 prints 3 stars
- Row 3 prints 5 stars
- Row 4 prints 7 stars
- Row 5 prints 9 stars

---

## 6. reverse-paramid.js

### What it prints
An inverted pyramid.

### How it works
- The first inner loop prints spaces to shift the stars right.
- The second inner loop prints fewer stars as the row number increases.
- This creates a top-down pyramid shape.

### Logic
- The top row has the most stars.
- The bottom row has the fewest stars.

---

## 7. diamond.js

### What it prints
A full diamond shape made of stars.

### How it works
- The first loop prints the upper half of the diamond.
- It prints spaces first and then stars.
- The second loop prints the lower half of the diamond.
- The first and last star of each row are printed, while the middle positions are left as spaces.

### Logic
- The top part grows from 1 star to the widest row.
- The bottom part shrinks back down.

---

## 8. diamod-paramid.js

### What it prints
A diamond-shaped pyramid pattern.

### How it works
- The first loop builds the top part of the diamond.
- The second loop builds the bottom part.
- Both parts use spaces and stars to create a balanced diamond.

### Logic
This file is a combination of a pyramid and its reverse, forming a diamond-like outline.

---

## 9. solid_rectangle-pattern.js

### What it prints
A solid rectangle made of stars.

### How it works
- The outer loop controls the number of rows.
- The inner loop prints a full row of stars.
- Each row is printed on a new line.

### Logic
This pattern does not use spaces; it prints a full rectangle of stars.

---

## 10. solid-sq-pattern.js

### What it prints
A solid square pattern.

### How it works
- The outer loop handles each row.
- The inner loop prints 5 stars in each row.
- The result is a square made of stars.

### Logic
Every row has the same number of stars, so the shape stays square.

---

## 11. solid-rombus.js

### What it prints
A solid rhombus shape.

### How it works
- The outer loop controls each row.
- A space-printing loop shifts the stars to the right.
- Another loop prints the stars for that row.
- The pattern forms a rhombus because the rows are indented and filled with stars.

---

## 12. tringle-with-spaces.js

### What it prints
A triangle outline with spaces inside.

### How it works
- The outer loop controls each row.
- The inner loop checks each column.
- A star is printed only when it is at the border of the triangle.
- Otherwise, a space is printed.

### Logic
- The first column always gets a star.
- The last row always gets stars.
- The last column of each row also gets a star.
- This creates a triangle outline rather than a solid triangle.

---

## 13. butterfly-pattern.js

### What it prints
A butterfly-shaped pattern made of stars with a centered gap between the two halves.

### How it works
- The first loop prints the upper half of the butterfly.
- For each row, it prints stars on the left, spaces in the middle, and stars on the right.
- The second loop prints the lower half in reverse order.
- The number of spaces grows smaller as the row moves upward or downward, creating the butterfly shape.

### Logic
- In the first loop, the row number controls how many stars appear on each side.
- The middle gap is created using `2 * (n - row)` spaces.
- The second loop repeats the same idea in reverse so the bottom half mirrors the top half.

### Example
For `n = 4`, the pattern prints:

```text
*      *
**    **
***  ***
********
***  ***
**    **
*      *
```

---

## Running a file

Use Node.js to run any pattern file:

```bash
node left-triangle.js
```

Replace the filename with the pattern you want to see.
