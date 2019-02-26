# Node Job Interview Questions

This list provides a growing collection of node.js technical interviews.  They range from basic to advanced questions to help you figure out your current level of node knowledge and fgiguoure out where the gaps in your knowledge exist.  Answers are in the collapsed sections below the questions, simply click on them to expand it

## 1. Which is better choice among these two.

```javascript
// A
return res.status(401).send({
    success:false,
    message:"Auth failed",
})
```

```javascript
// B
return res.json({
    success:false,
    message:'auth failed',
    status_code:401
});
```
- A
- B

<details><summary>Answer</summary>

####  A.  Answer A is more declarative

</p></details>
---
[:arrow_left: BACK](../README.md)