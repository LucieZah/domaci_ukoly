const input = document.querySelector("input")

input.addEventListener("input", (e) => {
    e.preventDefault()
    const email = e.target.value.trim()
    if (email.length >= 1 && email.includes("@")){
        input.classList.remove ("input")
    } else {
        input.classList.add ("input")
    }
})