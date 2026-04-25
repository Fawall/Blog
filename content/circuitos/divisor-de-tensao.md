---
title: "Divisor de tensão"
date: 2026-04-25T10:30:00-03:00
draft: false
tags: ["circuitos", "resistores", "análise"]
description: "Nota curta sobre o divisor de tensão e sua fórmula básica."
---

Para dois resistores em série, a tensão de saída é dada por:

$$
V_{out} = V_{in} \cdot \frac{R_2}{R_1 + R_2}
$$

Exemplo em C++:

```cpp
#include <iostream>

int main() {
    double vin = 12.0;
    double r1 = 1000.0;
    double r2 = 2200.0;
    double vout = vin * (r2 / (r1 + r2));
    std::cout << vout << '\n';
}
```
