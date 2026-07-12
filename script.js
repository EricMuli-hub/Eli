let blockchain = JSON.parse(localStorage.getItem("blockchain")) || [];

function showSection(id) {
document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}

function register() {
let user = document.getElementById("regUser").value;
let pass = document.getElementById("regPass").value;

localStorage.setItem(user, pass);
alert("Registered successfully!");
showSection("login");

}

function login() {
let user = document.getElementById("logUser").value;
let pass = document.getElementById("logPass").value;

if (localStorage.getItem(user) === pass) {
    alert("Login successful");
    showSection("dashboard");
} else {
    alert("Invalid credentials");
}

}

// Blockchain simulation
function uploadCert() {
let cert = document.getElementById("certName").value;

let block = {
    data: cert,
    time: new Date().toISOString(),
    hash: btoa(cert + Date.now())
};

blockchain.push(block);
localStorage.setItem("blockchain", JSON.stringify(blockchain));

alert("Stored on Blockchain!");

}

// Verify
function verifyCert() {
let input = document.getElementById("verifyInput").value;

let found = blockchain.find(b => b.data === input);

document.getElementById("verifyResult").innerText =
    found ? "✅ Verified on Blockchain" : "❌ Not Found";

}

// AI Simulation
function runAI() {
let result = Math.random() > 0.5
? "AI Result: Genuine Certificate"
: "AI Result: Possible Fraud Detected";

document.getElementById("aiResult").innerText = result;

}