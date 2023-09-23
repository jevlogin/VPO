let tg = window.Telegram?.WebApp;

if (tg) {
    tg.expand();

    let form = document.getElementById("introduction-vpo-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let formType = document.getElementById("formType").value;
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let phone = document.getElementById("phone").value;

        let messageDataInfoType = {
            formType: formType,
            callBackMethod: "UserIntroduction",
        }

        let vpoForm = {
            userID: 0,
            firstName: firstName,
            lastName: lastName,
            phone: phone
        };

        let jsonArray = [messageDataInfoType, vpoForm];
        let jsonString = JSON.stringify(jsonArray);

        tg.sendData(jsonString);

        form.reset();

        tg.close();
    });
}
