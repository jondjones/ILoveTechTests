# CSS Interview Questions

### How do you select all elements that use the class `.panel`

<details>
  <summary>Answer</summary><br />
  
```javascript
 const panels = document.querySelectorAll('.panel');
```
</details>

### How do you add an event listener to an HTML element?

<details>
  <summary>Answer</summary><br />
  
```javascript
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active');
    });
```
</details>

### How Do You Remove a class from an element?

<details>
  <summary>Answer</summary><br />
  
```javascript
    element.classList.remove('active');
```
</details>

### How do You create an effect on button click?

<details>
  <summary>Answer</summary><br />
  
```javascript
    .btn:active {
        transform: scale(0.98)
    }
```
</details>

---
[:arrow_left: BACK](../README.md)