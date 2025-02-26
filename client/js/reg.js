document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    const formData = {
        login: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {
        const response = await fetch('/registration', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        console.log(data);
        
        if (response.ok) {
            alert("Регистрация успешна!");
        } else {
            alert("Ошибка: " + data.message);
        }
    } catch (error) {
        console.error("Ошибка:", error);
    }
});