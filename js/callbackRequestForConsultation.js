let tg = window.Telegram?.WebApp;

if (tg) {
    let form = document.getElementById("request-for-consultation");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;

        let formType = document.getElementById("formType").value;

        let messageDataInfoType = {
            formType: formType,
            callBackMethod: "UserRequestForConsultation",
        }

        let formRequestForConsultation = {
            IsAdmin: false,
            FirstName: firstName,
            LastName: lastName,
            PhoneNumber: phone,
            Email: email,
            UserName: email,
        };

        let jsonArray = [messageDataInfoType, formRequestForConsultation];
        let jsonString = JSON.stringify(jsonArray);

        console.log(jsonString);

        tg.sendData(jsonString);

        form.reset();
    });
}
