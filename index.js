function smurf() {
    const smurfBackground = document.querySelector('.smurf-section');
    let smurfNum = Math.random().toFixed(2);
    if(smurfNum>.5) {
        smurfBackground.style.backgroundColor = "lightblue"
    }

}

smurf(); 