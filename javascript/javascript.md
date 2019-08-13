# Javascript Job IInterview Questions

## 1. What Is The Output Of This?
```javascript
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },0);
} 
```
<details><summary>Answer</summary><p>
## 55555
Output is 5 five times, because setTimeout is executing after loop is over (setTimeout callback is executing in browser Task Queue) 
</p></details>

---
[:arrow_left: BACK](../README.md)