document.querySelector('button').addEventListener('click', checkPalindrome);

function checkPalindrome() {
    const inputWord = document.querySelector('input').value.toLowerCase();

    if (!inputWord) {
        document.querySelector("#display").innerText = "Please enter a word!";
        return;
    }

    // call the server API to get the reversed word
    fetch(`/api?word=${encodeURIComponent(inputWord)}`)
        .then(res => res.text())
        .then(data => {
            console.log(data)
           
            if (inputWord === data) {
                document.querySelector("#display").innerText = `${inputWord} is a palindrome!`;
            } else {
                document.querySelector("#display").innerText = `${inputWord} is not a palindrome!`;
            }
        })
        .catch(err => {
            console.log(err);
        });
}
