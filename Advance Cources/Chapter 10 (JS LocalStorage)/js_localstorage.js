
// A $( document ).ready() block.
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page is Ready")
    var take_input = document.getElementById("take_input")
    var take_input_key = document.getElementById("take_input_key")
    var save_value = document.getElementById("save_value")
    var localstorage_value = document.getElementById("localstorage_value")
    var read_localstorage = document.getElementById("read_localstorage")
    var delete_data = document.getElementById("delete_data")
    var read_all_data = document.getElementById("read_all_data")

    save_value.onclick = function () {

        if (take_input_key.value && take_input.value) {
            localStorage.setItem(take_input_key.value, take_input.value);
            alert("Data Stored in Local Storage");
            take_input.value = ""; // Clear the input field
            take_input_key.value = ""; // Clear the input key field
        } else {
            alert("Cannot Store empty key and value");
        }
    }

    read_localstorage.onclick = function () {
        if (localStorage.length > 0) {
            let output = "";
            for (let [key, value] of Object.entries(localStorage)) {
                output += value;
                if (key !== Object.keys(localStorage)[Object.keys(localStorage).length - 1]) {
                    output += ",";
                }
            }
            localstorage_value.innerText = output;
        }
        else {
            localstorage_value.innerText = "No Data Found";
        }

    }

    delete_data.onclick = function () {
        if (localStorage.length > 0) {
            if (confirm("Are you sure you want to delete it") == true) {
                for (let [key, value] of Object.entries(localStorage)) {
                    localStorage.removeItem(key);
                }
                alert("Delete Successfully");


            }
            else {
                console.log("Request Cancel");
            }
        }
        else {

            alert("No Data Found");
        }
    }

    read_all_data.onclick = function () {
        if (localStorage.length > 0) {
            for (let [key, value] of Object.entries(localStorage)) {
                console.log("Key : " + key + " : Value : " + value);
            }

        }
        else {

            alert("No Data Found");
        }
    }
});