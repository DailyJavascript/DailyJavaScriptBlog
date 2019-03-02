---
title: "A Friendly Guide to Big O"
date: 2019-03-02T13:35:37-08:00
draft: false
---

Not every tech  company will ask you questions related to Big O when interviewing, but it is one of the concepts that you need to know if you want to work at a place like Amazon or Facebook.  The textbook definition of Big O is absolutely terrifying to someone without a deep understanding of math.

```mathematica
Let T(n) = the number of operations performed in an algorithm as a function of n.

T(n) = O(f(n)) if and only if there exists two constants, n0 > 0 and c > 0, and a function f(n) such that for all n > n0, cf(n) ≥ T(n).
```

Yikes, ok let's brush up on mathematical proofs.  Just kidding, the actual concept is a lot less complex than the formal definition would indicate.

Have you ever had to do some task, and in order to accomplish it, you have to follow a series of steps?

Essentially that’s an algorithm in computer science -- a series of steps.

When completing a task in real life, sometimes there’s better ways of doing it – faster, cheaper, less messy, etc.  The same is true about algorithms.  There's better ways of implementing algorithms. But how would we calculate what is a better algorithm for computers and what does better mean?

One intuitive way of calculating which algorithm is better is to choose the one that completes the task in the fastest amount of time -- often called runtime.  Unfortunately, it's difficult to compare the precise speed of an algorithm in real life because it is influenced by a lot of factors unrelated to the algorithm itself.   The language you choose to write the algorithm in, the version of the language you choose to write the algorithm in, the hardware of the computer and the input size of the data all have an effect on how fast the algorithm gets completed.  So what we can do is approximate the runtime by comparing how many steps an algorithm takes from when it begins to when it is finished and use the total number of steps as an approximation for time.  We should agree to some assumptions that hold true regardless of machine or language used so everyone has a common way to compare two different algorithms that solve a problem.

<strong>
Assumption 1:
</strong>

-       Each of the steps are read by the computer one at a time in order from top to bottom.

<strong>
Assumption 2:
</strong>

-       Assigning to a variable, calling on a function, logic comparisons and any arithmetic operation (e.g. +, - *, /) all take one step.

<strong>
Assumption 3:
</strong>

-       Memory is infinite and accessing data stored anywhere in memory takes the same amount of time. 

Let’s look at a quick example:

```javascript
function m(a, b) {
  ans = 1

  while (b> 0) {
    ans = ans*a
    b = b – 1
  }

  return ans

}
```

So this algorithm begins with an assignment, which is one step.  Then it goes in to a while loop, which is 3 steps, and finally returns the variable, which is one step.  So we can write this as

```mathematica
    2 + ( 3 * b ) steps
```

If b is 100, the algorithm has 302 steps.<br/>

If b is 1000, then it has 3002 steps.<br/>

And finally, if b is 10,000, then the algorithm has 30,002 steps.

As you can see, in terms of comparing, since we don’t have to be exact, the 2 digit in the ones' column really doesn’t make a huge difference in helping us compare.  That’s why, when calculating Big O, you only really care about the factors that make the biggest difference in the calculation and can safely ignore constants and lower order terms,  a lower order term being a value that is an order of a magnitude less.  So for example, in

```mathmatica
  x + x^2 + x^3
```

you can safely ignore x and x^2, since they won’t make as big of a difference in your estimation as x^3.  

Big O is really just about judging the rate of growth of the runtime, otherwise known as Asymptotic Analysis.

So, we have a rough idea of how to calculate Big 0 but how do we know what input to choose for comparison? We want to choose a large enough input that let’s us ignore the constant and lower order term values.  In particular, Big O is concerned with the worst-case scenario for size of the input,  mostly because that’s the most interesting comparison case.

Interestingly enough it turns out that most algorithms fall under one of a few common categories and I will talk more about those in the next blog article.

>**If you found this article interesting or would love to become a better programmer, consider signing up at {{< url >}} to get daily javascript challenges, code snippets and articles.**