# Javascript Job Interview Questions

### What Is The Output Of This?
```javascript
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },0);
}
```
<details><summary>Answer</summary>
<br />
<strong>55555</strong>:  Output is 5 five times, because setTimeout is executing after loop is over (setTimeout callback is executing in browser Task Queue) 
</details>

---
[:arrow_left: BACK](../README.md)