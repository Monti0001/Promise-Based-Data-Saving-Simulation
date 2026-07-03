# 📦 Promise-Based Data Saving Simulation

This project demonstrates how to use **JavaScript Promises** to simulate saving data to a database with random internet speed conditions.

---

## 🚀 Concept Used

* Promises in JavaScript
* `.then()` chaining
* `.catch()` error handling
* Random number generation

---

## ⚙️ How It Works

A function `savetodb(data)` simulates saving data.

* If internet speed is **greater than 4** → ✅ Success
* If internet speed is **4 or less** → ❌ Failure

---

## 💻 Code

```javascript
function savetodb(data){
    return new Promise((resolve, reject) =>{
        let internetspeed = Math.floor(Math.random()*10) + 1;

        if(internetspeed > 4){
            resolve("Success : data was saved");
        } else {
            reject("Failure : weak connection");
        }
    });
}

savetodb("apna college")
.then((result) =>{
    console.log("data1 saved");
    console.log("result of promise", result);
    return savetodb('hello monti');
})
.then((result) =>{
    console.log("data2 saved");
    console.log("result of promise", result);
    return savetodb("shradha");
})
.then((result) =>{
    console.log("data3 saved");
    console.log("result of promise", result);
})
.catch((error) =>{
    console.log("promise was rejected");
    console.log("error of promise", error);
});
```

---

## 🔥 Output Behavior

* Sometimes all data saves successfully ✅
* Sometimes it fails in between ❌ (due to random internet speed)

---

## 📌 Key Learning

* Promises help handle **asynchronous operations**
* `.then()` is used for success handling
* `.catch()` is used for error handling
* Chaining allows sequential execution

---

## 📷 Example Output

```
data1 saved
result of promise Success : data was saved
data2 saved
result of promise Success : data was saved
promise was rejected
error of promise Failure : weak connection
```

---

## 🧠 Author

**Monti (BCA Student 🚀)**
Passionate about Web Development & Learning New Technologies

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and keep learning!
