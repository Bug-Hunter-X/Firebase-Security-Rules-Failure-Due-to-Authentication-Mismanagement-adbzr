The following code snippet demonstrates an uncommon Firebase error related to security rules.  Specifically, it involves a situation where the rules are correctly configured, but a seemingly unrelated part of the application is causing authentication issues, leading to unexpected rule failures. 
```javascript
// Incorrectly configured authentication leading to rule failure
firebase.auth().onAuthStateChanged(user => {
if (user) {
  // User is signed in.
  console.log('User is signed in:', user);
  // ... further actions ...
} else {
  // User is signed out.
  console.log('User is signed out.');
  // Redirect to login page, but this may not execute correctly
  window.location.href = '/login';
}
});

//Attempt to access data that should be allowed, based on security rules
db.ref('users/' + userId).once('value', snapshot => {
  const userData = snapshot.val();
  console.log(userData);
});
```