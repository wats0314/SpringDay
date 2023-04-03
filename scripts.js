const attendanceSelect = document.getElementById("attendance");
let answer;

attendanceSelect.addEventListener("change", function() {
    answer = attendanceSelect.value;
    console.log(answer); 
});


function attending() {
    console.log(answer);
    if (answer === "Yes") {
        document.getElementById("response").innerHTML = "You're amazing and we'll see you there!";
    } else if (answer === "No") {
        document.getElementById("response").innerHTML = "You're a loser, but we still want you anyway and its not really your decision, so we'll see you there! :)";
    }
    else { document.getElementById("response").innerHTML = "Please select a response";}
} 