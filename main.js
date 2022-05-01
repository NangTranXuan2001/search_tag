var content = document.querySelector(".content");
var input = document.querySelector(".content input")
var removeAll = document.querySelector(".remove-all");

var tags = ["Nodejs", "React"];

function reRender() {
    content.innerHTML = ""
    for (var i = 0; i < tags.length; i++) {
        content.innerHTML += `<li>
                ${tags[i]}
                <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
            </li>
    `
    }

    content.appendChild(input)
    input.focus()

}

reRender()

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        tags.push(input.value.trim());
        input.value = ""
        reRender();
    }
})

function removeTag(index) {
    tags.splice(index, 1);
    reRender();
}

removeAll.addEventListener("click", function() {
    tags = []
    reRender()
})