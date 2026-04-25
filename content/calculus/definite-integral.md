---
title: "Definite Integral: Quick Review"
date: 2026-04-25T08:00:00-03:00
draft: false
tags: ["integral", "calculus", "daily-study"]
description: "Example of definite integral with LaTeX formula and Python code."
---

Today I reviewed the definite integral below:

$$
\int_0^1 x^2\,dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3}
$$

Practical interpretation: the area under the curve $y = x^2$ in the interval from $0$ to $1$ is $\frac{1}{3}$.

Numerical example in Python:

```python
import numpy as np

x = np.linspace(0, 1, 100000)
y = x ** 2
area = np.trapz(y, x)
print(f"Approximate area: {area:.6f}")
```
