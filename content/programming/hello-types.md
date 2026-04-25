---
title: "Classes and Types in Python"
date: 2026-04-25T09:00:00-03:00
draft: false
tags: ["python", "typing", "fundamentals"]
description: "A quick note on how to structure types and functions with clarity."
---

Example in Python:

```python
from dataclasses import dataclass

@dataclass
class Student:
    name: str
    age: int


def greet(student: Student) -> str:
    return f"Hello, {student.name}!"
```

Example in C#:

```csharp
public record Student(string Name, int Age);
```

Example in Java:

```java
public record Student(String name, int age) {}
```

Example in C++:

```cpp
#include <string>

struct Student {
    std::string name;
    int age;
};
```
