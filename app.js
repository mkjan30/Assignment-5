fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
.then(response => response.json())
.then (data=> displayMenuList (data));

const displayMenuList = menuList => {
    const divMenu = document.getElementById("menuList");
    menuList.forEach(food => {

        const menuDiv = document.createElement('div');
        menuDiv.className = "foodList";
        const MenuInfo = `
    <h3 class = "food-name">${food.name}</h3>
    <p> ${food.price}</p>
    <button onclick = "displayCountriesDetail('${food.name}')">Detail</button>
    `
        divMenu.innerHTML = menuInfo;

        menuDiv.appendChild(divMenu);
    });
}

    const displayFoodDetail = name=> {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
        fetch(url)
        .then(response => response.json())
        .then(data => renderFoodInfo(data[0]));
    }

    const renderFoodInfo = menuList => {
        const menuDiv = document.getElementById("displayFoodList");
        menuDiv.innerHTML = `
        <h1> ${food.name}</h1>
        <p> population: ${food.price}</p>
        <img src = "${food.item}">

        `
    }
