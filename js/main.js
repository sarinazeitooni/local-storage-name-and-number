let contactInputNames, contactInputPhoneNumbers, contactJson, contactsArray, personsName, personsPhoneNumber;
let contacts = [];
let container = document.getElementById("container");

    function setValue() {
        contactInputNames = document.getElementById("name").value;
        contactInputPhoneNumbers = document.getElementById("phoneNumber").value;
        pushValue();
        document.getElementById("name").value = "";
        document.getElementById("phoneNumber").value = "";
        settingLocalstorageItems();
        showContacts();
    };

    function pushValue() {
        contacts.push({
            id: contacts.length + 1,
            name: contactInputNames,
            phoneNumber: contactInputPhoneNumbers
        });
        contactJson = JSON.stringify(contacts);
    };

    function settingLocalstorageItems() {
        localStorage.setItem("contacts", contactJson);
        contactsArray = JSON.parse(localStorage.getItem("contacts"));
        console.log(localStorage);
    };

    function showContacts() {
        contactsArray.map(addContactsByMap);
        container.innerHTML += `<h4>${personsName} : ${personsPhoneNumber}</h4>`;
    };
    function addContactsByMap(person) {
        personsName = person.name;
        personsPhoneNumber = person.phoneNumber;
    };