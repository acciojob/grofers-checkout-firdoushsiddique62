 const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let table = document.querySelectorAll("table")[0];
let totalRow = document.createElement("tr");
let totalCell = document.createElement("td");
totalCell.id="ans";
totalRow.appendChild(totalCell);
table.appendChild(totalRow);

const getSum = () => {
let priceArr = document.querySelectorAll(".price");
	let sum=0;
	for (let i = 0; i < priceArr.length; i++) {
		sum+= +priceArr[i].innerHTML;
	}
  totalCell.innerText=sum;
};

getSumBtn.addEventListener("click", getSum);