var form = document.getElementById("addNew");
var itemsList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);
//Delete event
itemsList.addEventListener("click", removeItem);
//Filter event
filter.addEventListener("keyup", filterItem);

//Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById("input").value;

  //Create new li element
  var li = document.createElement("li");

  //Add class
  li.className = "list-group-item";

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create delete btn
  var deleteBtn = document.createElement("button");

  //Assign class to the button
  deleteBtn.className = "btn delete";

  //Append textnode
  deleteBtn.appendChild(document.createTextNode("Remove"));

  //Append btn to li
  li.appendChild(deleteBtn);

  //Append li to list
  itemsList.appendChild(li);
}

//Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure")) {
      var li = e.target.parentElement;
      itemsList.removeChild(li);
    }
  }
}

//Filter item
function filterItem(e) {
  // Convert value to lowercase
  var text = e.target.value.toLowerCase();

  //get lis
  var item = itemsList.getElementsByTagName("li");

  //Create an array of the lis
  Array.from(item).forEach((item) => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
