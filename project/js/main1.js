//select itemcontainer
var itemContainer = document.querySelectorAll('.wrapper-item-slide div.item .product ');
// ajax request
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            let productNum = obj.length;

            for (let i = 0; i < itemContainer.length; i++) {
                //check number of item 
                if (itemContainer.length <= productNum) {
                    creatProduct(itemContainer[i], obj[i]);
                }
            }
        }

    };
    xhttp.open("GET", "pro.json", true);
    xhttp.send();
}
loadDoc();

//creat product
function creatProduct(selectContainer, obj) {

    //creat item
    let parent = document.createElement("div");
    parent.className = "card";
    selectContainer.appendChild(parent);

    //appeed img
    let child1 = document.createElement("img");
    let chdAtt1 = document.createAttribute("src");
    chdAtt1.value = obj["product-img"];
    child1.setAttributeNode(chdAtt1);
    let chdAtt2 = document.createAttribute("alt");
    chdAtt2.value = ("Card image cap");
    child1.setAttributeNode(chdAtt2);
    child1.className = "img";
    parent.appendChild(child1);

    //append card body
    let child2 = document.createElement("div");
    child2.className = "card-body";
    parent.appendChild(child2);
    //append product name
    let first = document.createElement("h5");
    let firstAtt = document.createTextNode(obj["product-name"]);
    first.appendChild(firstAtt);
    child2.appendChild(first);
    //append separator
    let sept = document.createElement("div");
    sept.className = "separator";
    child2.appendChild(sept);
    //append product brand
    let two = document.createElement("p");
    let twoAtt = document.createTextNode(obj["product-brand"]);
    two.appendChild(twoAtt);
    child2.appendChild(two);
    //append product line
    let three = document.createElement("h6");
    let threeAtt = document.createTextNode(obj["product-line"]);
    three.appendChild(threeAtt);
    child2.appendChild(three);

    console.log(selectContainer);
}