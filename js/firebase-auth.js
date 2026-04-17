<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBX9snHwlXIeyR3UQ7VfYBKGjVZTbwzXUo",
    authDomain: "sanskrit-path-32452.firebaseapp.com",
    projectId: "sanskrit-path-32452",
    storageBucket: "sanskrit-path-32452.firebasestorage.app",
    messagingSenderId: "435283457465",
    appId: "1:435283457465:web:c42e720e091b6008257268",
    measurementId: "G-S7QMMKB5WC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
