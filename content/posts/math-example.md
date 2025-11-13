---
title: "Complete Markdown Guide with Math and Code"
date: "2024-01-16"
tags: ["tutorial", "webdev", "nextjs"]
keywords: "Reinforcement Learning, Markov chain, DPS, maths"
excerpt: "A brief description of your post"
---

# Logistic Regression, Step by Step: From Linear Classifiers to ROC–AUC

This is an introduction paragraph. You can write regular text here with **bold** and _italic_ formatting. You can also add `inline code` like this.This is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg

## Section Header (H2)

This is a subsection withThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg some bullet points:

- First item in the listThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg
- Second item with **bold text**This is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg
- Third item with `inline code`This is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg

### Subsection Header (H3)

Here's a numberedThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg list:

1. First step
2. Second step
3. Third step

## Mathematical Formulas

### Inline Math

Here's some This is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reginline math: The Pythagorean theorem states that $a^2 + b^2 = c^2$. You can also use $E = mc^2$ for energy-mass equivalence.

### Block Math

The quadratic formula:

$$
x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}
$$

Euler's identity:

$$
e^{i\pi} + 1 = 0
$$

Gaussian integral:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

Summation notation:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

## Code Examples

### JavaScript Code

```javascript
// Fibonacci function with memoization
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Example usage
console.log(fibonacci(10)); // 55

// Async function example
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

```python
import numpy as np
import matplotlib.pyplot as plt

# Objective function
def f(x):
    return x**2 + 4*x + 5

# Gradient
def grad_f(x):
    return 2*x + 4

# Gradient descent
x = 10.0   # initial point
eta = 0.1  # learning rate
history = [x]

for _ in range(30):
    x = x - eta * grad_f(x)
    history.append(x)

# Visualization
x_vals = np.linspace(-10, 2, 200)
y_vals = f(x_vals)

plt.plot(x_vals, y_vals, label="f(x)")
plt.scatter(history, [f(h) for h in history], color='red', s=30, label="Steps")
plt.title("Gradient Descent on f(x) = x² + 4x + 5")
plt.xlabel("x")
plt.ylabel("f(x)")
plt.legend()
plt.show()
```

# Logistic Regressadfadfion, Step by Step: From Linear Classifiers to ROC–AUC

This is an introduction paragraph. You can write regular text here with **bold** and _italic_ formatting. You can also add `inline code` like this.This is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg

## Section Header (H2dfd)

This is a subsection withThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg some bullet points:

- First item in the listThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg
- Second item with **bold text**This is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg
- Third item with `inline code`This is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg

### Subsection Hadsfeader (H3)

Here's a numberedThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write regThis is an introduction paragraph. You can write reg list:

# Lahkja jadhfk jadshfk ajdhsf jkja sdfjh
