document.getElementById('fuelForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let distance = parseFloat(document.getElementById('distance').value);
    let fuelCost = parseFloat(document.getElementById('fuelCost').value);
    let average = parseFloat(document.getElementById('average').value);

    let fuelConsumption = (distance / average) * fuelCost;

    document.getElementById('result').textContent = 'Fuel Consumption on Single Route: ' + fuelConsumption.toFixed(2) + ' Pkr';
});

document.getElementById('reset-link').addEventListener('click', function (event) {
    event.preventDefault();
    location.reload();
});
