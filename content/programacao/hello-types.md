---
title: "Classes e tipos em Python"
date: 2026-04-25T09:00:00-03:00
draft: false
tags: ["python", "tipagem", "fundamentos"]
description: "Pequena nota sobre como estruturar tipos e funções com clareza."
---

Exemplo em Python:

```python
from dataclasses import dataclass

@dataclass
class Student:
    name: str
    age: int


def greet(student: Student) -> str:
    return f"Olá, {student.name}!"
```

Exemplo em C#:

```csharp
public record Student(string Name, int Age);
```

Exemplo em Java:

```java
public record Student(String name, int age) {}
```

Exemplo em C++:

```cpp
#include <string>

struct Student {
    std::string name;
    int age;
};
```
