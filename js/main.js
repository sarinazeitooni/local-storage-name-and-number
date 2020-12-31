let username, phonenumber, contactsArray;
let contacts = [];
let container = document.getElementById("container");
    
        function renderContacts(){
            showContacts();
        };

        function setValue() {
            username = document.getElementById("name").value;
            phonenumber = document.getElementById("phoneNumber").value;
            addItem();
            document.getElementById("name").value = "";
            document.getElementById("phoneNumber").value = "";
        };
        
        function addItem() {
            contacts.push({
                id: contacts.length + 1,
                name: username,
                phoneNumber: phonenumber
            });
            setLocalStorage(JsonString());
            
            showContacts();
        };

        function setLocalStorage(contactJson) {
            localStorage.setItem("contacts", contactJson);
        };

        function getLocalStorage(){
            console.log(JSON.parse(localStorage.getItem("contacts")))
            contactsArray = JSON.parse(localStorage.getItem("contacts"));
        };

        function JsonString(){
            return  JSON.stringify(contacts);
        };

        function getLength(){
            return JSON.parse(localStorage.getItem("contacts")).length;
        };
     
        function showContacts() {
            debugger
            getLocalStorage();
            if(contactsArray.length!==null){
                contactsArray.map(x=>contacts.push)
                for(const x of contactsArray){
                    contacts.push(x);
                    }
            };

            contacts.map(person=>{return container.innerHTML += `<h4>${person.name} : ${person.phoneNumber}  --- amount: ${getLength()}</h4> `});
        };

