# to-fin

convert to financal decimal number and fix JS accuracy problems

## Usage

```tsx
import toFin from "to-fin";

// floor number
toFin(56.788); // 56.78 not 56.79
// correct number
toFin(3 * 0.3); // 0.9 not 0.8999999999999999
```
