---
title: "Voltage Divider"
date: 2026-04-25T10:30:00-03:00
draft: false
tags: ["circuits", "resistors", "analysis"]
description: "Quick note on voltage divider and its basic formula."
---

For two resistors in series, the output voltage is given by:

$$
V_{out} = V_{in} \cdot \frac{R_2}{R_1 + R_2}
$$

Example in C++:

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
