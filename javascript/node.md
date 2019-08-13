# Node Job Interview Questions

## Which is better choice among these two.

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