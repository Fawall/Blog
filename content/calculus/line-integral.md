---
title: "Line Integral: Introduction"
date: 2026-04-25
tags: ["integral","calculus","line-integral"]
description: "Review about Line Integrals and some exercises"
---
Line integral is a integral in which a function to be integrated is calculated 
**along a curve**. Imagine that, you follow a sinuous path in a mountain, this type integral helped you a sum values *(such as altitude, temperature or work)* along this way.

Exists two principal types of line integral. It depends on what you are integrating.

* **1. Line Integral of Scalar Field**
 Here, we go integrated a scalar function $f(x,y,z)$ which return a number, like the density of wire or temperature in each point
 In the case of *mass* calculation, we'll have:
    $$
    \begin{aligned}
    \gamma &: [a, b] \to \mathbb{R}^2 \ (\text{or } \mathbb{R}^3)\\
    \end{aligned}
    $$

    $$
    \begin{aligned}
    \delta &= \delta(x, y) \ (\text{or } \delta(x, y, z)) : \text{linear density } \sigma
    \end{aligned}
    $$ 
    $$
    \begin{aligned}
    \text{Mass} &= \int_{\gamma} \delta(s) \ ds \\
    &= \int_{a}^{b} \delta(\gamma(t)) \cdot \|\gamma'(t)\|\ dt
    \end{aligned}
    $$
 Most commom:
    $$
    \begin{aligned}
    \int_{\gamma}f(x,y,z)ds &= \\
    &=\int_{a}^{b}f(\gamma(s) \cdot |\gamma'(s))|ds
    \end{aligned}
    $$



* **Exercises**
<br>
$1. \int_{\gamma}x\ ds, \gamma(t)=(t^3,t)\ with\ 0 \le t \le 1$
<br>
$\textbf{Solution: }$ <br>
$\text{Before of all, lets remember how calculate a integral of a curve:}$ $ \int_{}f(\gamma(s)) \cdot ||\gamma'(s)||\ ds $





