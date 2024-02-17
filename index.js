$(function() {
    $("#form-items").sortable();
    } );
    function addElement(eleName){
    console.log(eleName)
    const listEl = document.createElement('li');
    const listDiv = document.createElement("div");
    listDiv.classList.add("form-item");
    const labelDiv = document.createElement('div');
    labelDiv.classList.add("form-item-label-container");
    const label = document.createElement('label');
    label.textContent="Sample Label";
    label.classList.add("form-item-label");
    const del = document.createElement("button");
    del.classList.add("form-item-del");
    del.textContent="delete";
    labelDiv.appendChild(label);
    labelDiv.appendChild(del);
    const ele = document.createElement(eleName);
    ele.classList.add("form-item-element");
    if(eleName==="select"){
    const opt1 = document.createElement("option");
    opt1.textContent= "Sample Option 1";
    ele.appendChild(opt1);
    const opt2 = document.createElement("option");
    opt2.textContent= "Sample Option 2";
    ele.appendChild(opt2);
    }
    listDiv.appendChild(labelDiv);
    listDiv.appendChild(ele);
    listEl.appendChild(listDiv);
    document.getElementById("form-items").appendChild(listEl);


    del.addEventListener("click", () => {
        listEl.remove(); 
    });
}

    function save() {
        const formItems = document.querySelectorAll(".form-item");
        const output = [];
    
        formItems.forEach((item) => {
            const id = uuidv4(); // Generate a unique ID for each form item
            const type = item.querySelector(".form-item-element").tagName.toLowerCase();
            const label = item.querySelector(".form-item-label").textContent;
            let newItem;
    
            if (type === "select") {
                const options = Array.from(item.querySelector(".form-item-element").options).map(option => option.textContent);
                newItem = {
                    id,
                    type,
                    label,
                    options
                };
            } else {
                const placeholder = item.querySelector(".form-item-element").getAttribute("placeholder");
                newItem = {
                    id,
                    type,
                    label,
                    placeholder
                };
            }
    
            output.push(newItem);
        });
    
        console.log(output);
    }
    
    document.getElementById("save").addEventListener("click", save);
    
    // Function to generate a unique ID
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    

    document.getElementById("add-input").addEventListener("click", ()=>addElement("input"));
    document.getElementById("add-select").addEventListener("click", ()=>addElement("select"));
    document.getElementById("add-textarea").addEventListener("click", ()=>addElement("textarea"));
    document.getElementById("save").addEventListener("click", save);
