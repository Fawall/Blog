---
title: "Integral definida: revisão rápida"
date: 2026-04-25T08:00:00-03:00
draft: false
tags: ["integral", "cálculo", "estudo-diário"]
description: "Exemplo de integral definida com fórmula em LaTeX e código em Python."
---

Hoje revisei a integral definida abaixo:

$$
\int_0^1 x^2\,dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3}
$$

Interpretação prática: a área sob a curva $y = x^2$ no intervalo de $0$ a $1$ é $\frac{1}{3}$.

Exemplo numérico em Python:

```python
import numpy as np

x = np.linspace(0, 1, 100000)
y = x ** 2
area = np.trapz(y, x)
print(f"Área aproximada: {area:.6f}")
```
