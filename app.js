import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCzmGp2Es0Fcvp7ARHyYE09_o33vxMnI1E",
  authDomain: "registeration-form-2fc7e.firebaseapp.com",
  databaseURL: "https://registeration-form-2fc7e-default-rtdb.firebaseio.com",
  projectId: "registeration-form-2fc7e",
  storageBucket: "registeration-form-2fc7e.appspot.com",
  messagingSenderId: "755569906847",
  appId: "1:755569906847:web:bd5bf6f9847fbd2b547eaa",
  measurementId: "G-10180501RL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, "RegisterData");
const form = document.querySelector(".input-fields");
const name = document.querySelector("#name");
const roll = document.querySelector("#roll");
const dob = document.querySelector("#dob");
const email = document.querySelector("#email");
const tele = document.querySelector("#tele");
const cyr = document.querySelector("#cyr");
const rate = document.querySelector("#rate");
const sugges = document.querySelector("#sugges");

function checkchoices() {
  var inp = Array.from(document.querySelector("input[name=dom]:checked"));
  var cnt = inp.length;
  return cnt;
}

function checkCount(str) {
  var count = 0;
  var splitString = str.split(" ");
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i] != "") {
      count++;
    }
  }

  if (count <= 50) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const gen = document.querySelector("input[name=gen]:checked");
  const domm = Array.from(document.querySelector("input[name=dom]:checked"));

  if (checkchoices() > 3) {
    return alert("Max 3 can be choosen");
  }
  if (!checkCount(sugges.value)) {
    return alert("more than 50 words");
  }

  addDoc(colRef, {
    name: name.value,
    roll: roll.value,
    dob: dob.value,
    email: email.value,
    tele: tele.value,
    gen: gen.value,
    cyr: cyr.value,
    dom: domm,
    rate: rate.value,
    sugges: sugges.value,
  })
    .then((result) => {
      form.reset();
      alert("Registeration data submitted!");
    })
    .catch((err) => {
      alert(err);
    });
});
