 const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const table = document.querySelector("table");
    if (!table) {
        console.error("Table not found.");
        return;
    }

    const rows = table.querySelectorAll("tr");
    if (rows.length < 2) {
        console.error("Table doesn't have enough rows.");
        return;
    }

    let totalPrice = 0;

    for (let i = 1; i < rows.length; i++) {
        const priceCell = rows[i].querySelector(".price");
        if (!priceCell) {
            console.error("Price cell not found in row " + i);
            continue;
        }

        const price = parseFloat(priceCell.textContent);
        totalPrice += price;
    }

    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>Total Price: Rs ${totalPrice}</td>`;
    
    // Append the new row to the existing table
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);