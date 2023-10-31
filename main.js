const element = document.getElementById("list-container");
            if (element.style.display === "none") {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }





function getInput(){
    const inputField = document.getElementById("text-entry");
    const inputValue = inputField.value;
    if(inputValue.trim() === ""){
        alert("the task you are trying to add is empty!");
        return;
    }
    else{
        
        return inputValue;
    }
}

function addItemToList() {
    const inputValue = getInput();

    if (inputValue !== null &&  inputValue.trim() !== "") {
        const listContainer = document.getElementById("list-container");
        const listItem = document.createElement("li");
        listItem.classList.add("custom-list-item"); // Add the custom class to the element

        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.classList.add("rounded-checkbox"); // Add the custom checkbox class
        checkbox.setAttribute("type", "checkbox");

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                listItem.style.color = "gray";
                listContainer.appendChild(listItem); // Move the checked item to the bottom
                playNotificationSound()
            }
            else{
                //takes the listitemto the top of  the list container
                listItem.style.color = "black";
                listContainer.insertBefore(listItem, listContainer.firstChild);
        
            }
        });

        const span = document.createElement("span");
        span.textContent = inputValue;

        const deleteButton = document.createElement("button");
        
        deleteButton.className = "delete-button";
        deleteButton.onclick = function() {
        listItem.remove();
        if(listContainer.children.length === 1){
            listContainer.style.display = "none"

        }

        }

        const hr = document.createElement("hr");

        label.appendChild(checkbox);
        label.appendChild(span);

        listItem.appendChild(label);
        listItem.appendChild(hr);
        listItem.appendChild(deleteButton)

        listContainer.appendChild(listItem);

        document.getElementById("text-entry").value = ""; // Clear the input field

         listContainer.style.display = "block";
    }
    else
        return;
}

function playNotificationSound() {
    const notificationSound = document.getElementById("notification-sound");
    
    if (notificationSound) {
        notificationSound.currentTime = 0; // Reset the audio to the beginning
        notificationSound.play(); // Play the notification sound
    }
}
