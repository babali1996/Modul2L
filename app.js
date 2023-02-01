const iconSort = document.querySelector(".sort");
const input = document.querySelector("input");
const deleteText = document.querySelector(".delete");
const addName = document.querySelector(".addName");
const ul = document.querySelector(".list");
const up = document.querySelector(".up")
const down = document.querySelector(".down")

addName.addEventListener("click", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  let spn = document.createElement('span')
  let btn = document.createElement("button");
  let img = document.createElement("img");
  btn.classList.add("remove");
  img.src = "./icons/Group 77.svg";
  img.setAttribute("alt", "");
  if (input.value !== "") {
    btn.append(img);
    li.append(btn)
    spn.innerText = input.value
    li.append(spn)
    ul.append(li);
    ul.style.display = "block"
  } else {
    ul.style.display = "none"
    
  }


  btn.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove();
    if (ul.innerText == "") {
      ul.style.display = "none"
    }
  });

});


deleteText.addEventListener("click", (e) => {
  input.value = "";
});

let sorted = true
iconSort.addEventListener("click", () => {
  let arr = []
  const listElement = document.querySelectorAll('.list li span')
  console.log(listElement);
  listElement.forEach((item) => {
    arr.push(item.textContent)
  })

  if (sorted) {
    up.style.display = "none"
    down.style.display = "block"
    arr.sort()

    sorted = false
    listElement.forEach((item, index) => {
      item.textContent = arr[index]
    })
  } else {
    up.style.display = "block"
    down.style.display = "none"
    arr.reverse()
    listElement.forEach((item, index) => {
      item.textContent = arr[index]
    })
    sorted = true
  }
})