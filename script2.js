// Selecting the form, input field, and list element
let form = document.querySelector("#new-task-form");
let input = document.querySelector("#new-task-input");
let list_el = document.querySelector(".tasks");

// Adding an event listener to the form to listen for a submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Preventing the default behavior of the form

    let task = input.value; // Getting the value of the input field
    if (!task) { // Checking if the task is empty
        alert("please fill in that task"); // Displaying an alert if the task is empty
        return;
    }

    // Creating the task element
    let task_el = document.createElement('div');
    task_el.classList.add("task");

    // Creating the content element
    let task_content_el = document.createElement('div');
    task_content_el.classList.add("content");

    // Creating the label element
    let task_label_el = document.createElement("label");
    task_label_el.textContent = task; // Setting the text content of the label to the task
    task_label_el.classList.add("text");

    // Creating the checkbox element and appending it to the label element
    let task_check_el = document.createElement("input");
    task_check_el.type = "checkbox";
    task_check_el.classList.add("check");
    task_label_el.appendChild(task_check_el);

    // Creating the actions element
    let task_action_el = document.createElement("div");
    task_action_el.classList.add("actions");

    // Creating the edit button element and appending it to the actions element
    let task_edit_el = document.createElement("button");
    task_edit_el.classList.add("btn");
    let task_edit_icon = document.createElement("span");
    task_edit_icon.classList.add("material-symbols-outlined");
    task_edit_icon.innerText = "edit";
    task_edit_el.appendChild(task_edit_icon);
    task_action_el.appendChild(task_edit_el);

    // Creating the delete button element and appending it to the actions element
    let task_delete_el = document.createElement("button");
    task_delete_el.classList.add("btn");
    let task_delete_icon = document.createElement("span");
    task_delete_icon.classList.add("material-symbols-outlined");
    task_delete_icon.innerText = "delete";
    task_delete_el.appendChild(task_delete_icon);
    task_action_el.appendChild(task_delete_el);

    // Appending the label and actions elements to the content element
    task_content_el.appendChild(task_label_el);
    task_content_el.appendChild(task_action_el);

    // Appending the content element to the task element
    task_el.appendChild(task_content_el);

    // Adding an event listener to the edit button to toggle between edit and save modes
    task_edit_el.addEventListener("click", (e) => {
        let task_text_el = task_label_el.textContent; // Getting the text content of the label element

        if (task_edit_el.innerText.toLowerCase() === "edit") { // If the button text is "edit"
            console.log(task_text_el);
            task_label_el.remove(); // Removing the label element

            // Creating an input element with the task text and appending it to the content element
            let task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task_text_el;
            task_content_el.insertBefore(task_input_el, task_action_el);
            // task_label_el.remove();
            // Changing the button text to "save"
            task_edit_icon.innerText = "save";
        } else { // If the button text is "save"

            // create  a new label with checkbox
            let task_input_el = task_content_el.querySelector(".text") // Getting the input element
            task_label_el = document.createElement("label");
            task_label_el.textContent = task_input_el.value;


            let task_check_el = document.createElement("input");
            task_check_el.type = "checkbox";
            task_check_el.classList.add("check");

            task_label_el.appendChild(task_check_el);


            task_content_el.insertBefore(task_label_el, task_action_el);
            task_input_el.remove();

            task_edit_icon.innerText = "edit";
        }
    });
    // Append the task element to the task list
    list_el.appendChild(task_el);

    // Add an event listener to the "delete" button to remove the task element when clicked
    task_delete_el.addEventListener("click", (e) => {
        task_el.remove();
    });

    document.querySelector("#new-task-input").value = "";
});