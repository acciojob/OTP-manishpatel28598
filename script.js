function handleInput(input, event) {
    if (event.inputType === "deleteContentBackward" && input.previousElementSibling) {
        input.previousElementSibling.focus();
    } else if (event.inputType !== "deleteContentBackward" && input.nextElementSibling) {
        input.nextElementSibling.focus();
    }
}