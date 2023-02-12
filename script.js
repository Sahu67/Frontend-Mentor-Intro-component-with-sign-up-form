const form = document.querySelector("form"),
    fField = form.querySelector(".fname"),
    fInput = fField.querySelector("input"),
    lField = form.querySelector(".lname"),
    lInput = lField.querySelector("input"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    if (fInput.value === "" || fInput.value.trim() === '') {
        fField.classList.add("error", "shake");
    }

    if (lInput.value === "" || lInput.value.trim() === '') {
        lField.classList.add("error", "shake");
    }

    if (eInput.value === "" || eInput.value.trim() === '') {
        eField.classList.add("error", "shake");
        eInput.placeholder = "email@example/com";
    } else {
        checkEmail();
    }

    if (pInput.value === "" || pInput.value.trim() === '') {
        pField.classList.add("error", "shake");
    }

    setTimeout(() => {
        fField.classList.remove("shake");
        lField.classList.remove("shake");
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => {
        checkEmail();
    };

    function checkEmail() {
        const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; // pattern to validate email
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            let errorText = eField.querySelector(".error-text");

            (eInput.value === "" || eInput.value.trim() === '')
                ? (errorText.innerText = "Email Address cannot be empty")
                : (errorText.innerText = "Looks like this is not an email");

            eInput.placeholder = "email@example/com";
        } else {
            eField.classList.remove("error");
        }
    }

    fInput.onkeyup = () => {
        if (fInput.value === '' || fInput.value.trim() === '') {
            fField.classList.add("error");
        } else {
            fField.classList.remove("error");
        }
    };

    lInput.onkeyup = () => {
        if (lInput.value === '' || lInput.value.trim() === '') {
            lField.classList.add("error");
        } else {
            lField.classList.remove("error");
        }
    };

    pInput.onkeyup = () => {
        if (pInput.value === '' || pInput.value.trim() === '') {
            pField.classList.add("error");
        } else {
            pField.classList.remove("error");
        }
    };

    if (
        !fField.classList.contains("error") &&
        !lField.classList.contains("error") &&
        !eField.classList.contains("error") &&
        !pField.classList.contains("error")
    ) {
        alert('Form submitted successfully🤩');
        window.location.reload();
    }
};
