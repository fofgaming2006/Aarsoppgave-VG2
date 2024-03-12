let players = [];

function addStats() {
    const points = parseFloat(document.getElementById('points').value);
    const assists = parseFloat(document.getElementById('assists').value);
    const rebounds = parseFloat(document.getElementById('rebounds').value);
    const steals = parseFloat(document.getElementById('steals').value);
    const blocks = parseFloat(document.getElementById('blocks').value);



    if (isNaN(points) || isNaN(assists) || isNaN(rebounds) || isNaN(steals) || isNaN(blocks)) {
        alert('Please enter valid numeric values for points, assists, rebounds, steals and blocks.');
        return;
    }

    const player = {
        points: points,
        assists: assists,
        rebounds: rebounds,
        steals: steals,
        blocks: blocks

    };

    players.push(player);
    calculateAverage();
    clearForm();
}

function calculateAverage() {
    const totalPlayers = players.length;

    if (totalPlayers === 0) {
        updateAverageStats(0, 0, 0);
        return;
    }

    const totalPoints = players.reduce((acc, player) => acc + player.points, 0);
    const totalAssists = players.reduce((acc, player) => acc + player.assists, 0);
    const totalRebounds = players.reduce((acc, player) => acc + player.rebounds, 0);
    const totalSteals = players.reduce((acc, player) => acc + player.steals, 0);
    const totalBlocks = players.reduce((acc, player) => acc + player.blocks, 0);


    const avgPoints = totalPoints / totalPlayers;
    const avgAssists = totalAssists / totalPlayers;
    const avgRebounds = totalRebounds / totalPlayers;
    const avgSteals = totalSteals / totalPlayers;
    const avgBlocks = totalBlocks / totalPlayers;

    updateAverageStats(avgPoints, avgAssists, avgRebounds, avgSteals, avgBlocks);
}

function updateAverageStats(avgPoints, avgAssists, avgRebounds, avgSteals, avgBlocks) {
    document.getElementById('avgPoints').innerText = `Average Points: ${avgPoints.toFixed(2)}`;
    document.getElementById('avgAssists').innerText = `Average Assists: ${avgAssists.toFixed(2)}`;
    document.getElementById('avgRebounds').innerText = `Average Rebounds: ${avgRebounds.toFixed(2)}`;
    document.getElementById('avgSteals').innerText = `Average Steals: ${avgSteals.toFixed(2)}`;
    document.getElementById('avgBlocks').innerText = `Average Blocks: ${avgBlocks.toFixed(2)}`; 
}

function clearForm() {
    document.getElementById('statsForm').reset();
}

function addPlayer() {
    // Get input values
    var firstName = document.getElementById("firstNameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    var jerseyNumber = document.getElementById("jerseyNumberInput").value;
    var country = document.getElementById("countryInput").value;
    var height = document.getElementById("heightInput").value;
    var weight = document.getElementById("weightInput").value;
    var year = document.getElementById("yearInput").value;
    var fatigue = document.getElementById("fatigueInput").value;

    // Update player information in the HTML
    document.getElementById("firstName").innerText = "Firstname: " + firstName;
    document.getElementById("lastName").innerText = "Lastname: " + lastName;
    document.getElementById("jerseyNumber").innerText = "Jersey Nr: " + jerseyNumber;
    document.getElementById("country").innerText = "Country: " + country;
    document.getElementById("height").innerText = "Height: " + height;
    document.getElementById("weight").innerText = "Weight: " + weight;
    document.getElementById("year").innerText = "Year: " + year;
    document.getElementById("fatigue").innerText = "Fatigue: " + fatigue;
}


