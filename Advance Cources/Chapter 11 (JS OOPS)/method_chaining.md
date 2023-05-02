# Method Chaining

- As a developer, one of the things you probably enjoy doing most is implementing a feature using as little code as possible. You can do this in JavaScript by chaining methods. 

- For example, when a user logs into your application, you want to change the status of the user to 'online', and when they log out, you change it back to 'offline':

```js
class Twita {
  constructor(username, offlineStatus) {
    this.username = username;
    this.offlineStatus = offlineStatus;
  }
  login() {
    console.log(`${this.username} is logged in`);
    return this;
  }
  setOnlineStatus() {
    // set the online status to true
    this.offlineStatus = false;
    console.log(`${this.username} is online`);
    return this;
  }
  setOfflineStatus() {
    // set the offline status to true
    this.offlineStatus = true;
    console.log(`${this.username} is offline`);
    return this;
  }
  logout() {
    console.log(`${this.username} is logged out`);
    return this;
  }
}
```

> The code above declares a `Twita` class with 'username' and 'offlineStatus' properties and login, logout, setOnlineStatus, and set'OfflineStatus' methods. To chain the methods, you can use the `dot notation`:

```js
const user = new Twita("Adeleye", true);
twita.login().setOnlineStatus().logout().setOfflineStatus();
```
> `Note`: You need to return the current object by returning `this` at the end of each function.