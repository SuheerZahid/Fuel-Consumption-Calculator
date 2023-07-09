document.getElementById('fuelForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let distance = parseFloat(document.getElementById('distance').value);
    let fuelCost = parseFloat(document.getElementById('fuelCost').value);
    let average = parseFloat(document.getElementById('average').value);

    let fuelConsumption = (distance / average) * fuelCost;
    let total = fuelConsumption * 2;

    document.getElementById('result').textContent = 'Fuel Consumption on Single Route: ' + fuelConsumption.toFixed(2) + ' Pkr';
    // document.getElementById('total').textContent = 'Total Route Cost: ' + total.toFixed(2) + ' PKR';
});

