// document.querySelector('.select-box').addEventListener('click', function () {
//     this.classList.toggle('active');
//     const options = this.nextElementSibling;
//     options.style.display = options.style.display === 'block' ? 'none' : 'block';
//   });
  
//   document.querySelectorAll('.options li').forEach(function(option) {
//     option.addEventListener('click', function() {
//         document.querySelector('.select-box').innerHTML = this.innerHTML + ' <span class="arrow">▼</span>';
//         document.querySelector('.options').style.display = 'none';
//     });
// });

// 셀렉트박스v2
// document.querySelectorAll('.custom-select').forEach(selectBox => {
//   const button = selectBox.querySelector(".button-select");
//   const itemList = selectBox.querySelector(".item-list")
//   const items = itemList.querySelectorAll(".item")

//   items.forEach( item => {
//     item.onclick = () => {
//         button.innerText = item.innerText;
//     }
//   })
// })

// createSelectBox(div , data);