var league_id = 2021;
var token = '34122c53c47d4dc39f7ca8cad6b6e149';
var base_url = "https://api.football-data.org/v2/";
var standing_url = `${base_url}competitions/${league_id}/standings`;
var team_url = `${base_url}teams/`;

var fetchApi = url => {
  return fetch(url, 
    { 
      mode : 'cors',
      headers: {'X-Auth-Token': token }
    });
}

// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    // Method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  } else {
    // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}

// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
  return response.json();
}

// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
  // Parameter error berasal dari Promise.reject()
  console.log("Error : " + error);
}

// Blok kode untuk melakukan request data json
function getStandings() {
    if ("caches" in window) {
      caches.match(standing_url).then(function(response) {
        if (response) {
          response.json().then(function(data) {
              var standingsHTML =  `
                  <table style="font-size:14px;" class="responsive-table">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Logo</th>
                        <th>CLUB</th>
                        <th>PG</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>Pts</th>
                      </tr>
                    </thead>
                    <tbody>
              `;
              data.standings["0"].table.forEach(function(item) {
                standingsHTML += `
                        <tr>
                          <td>${item.position}</td>
                          <td><a href="./team.html?id=${item.team.id}"><img style="width:20px;" src="${item.team.crestUrl}"></a></td>
                          <td><a href="./team.html?id=${item.team.id}">${item.team.name}</a></td>
                          <td>${item.playedGames}</td>
                          <td>${item.won}</td>
                          <td>${item.draw}</td>
                          <td>${item.lost}</td>
                          <td>${item.goalsFor}</td>
                          <td>${item.goalsAgainst}</td>
                          <td>${item.goalDifference}</td>
                          <td>${item.points}</td>
                        </tr>
                `;
            });
            standingsHTML += `</tbody>
                    </table>`;
            document.getElementById("standings").innerHTML = standingsHTML;
          });
        }
      });
    }
    fetchApi(standing_url)
      .then(status)
      .then(json)
      .then(function(data) {
        console.log(data);
        var standingsHTML =  `
                <table style="font-size:14px;" class="responsive-table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Logo</th>
                      <th>CLUB</th>
                      <th>PG</th>
                      <th>W</th>
                      <th>D</th>
                      <th>L</th>
                      <th>GF</th>
                      <th>GA</th>
                      <th>GD</th>
                      <th>Pts</th>
                    </tr>
                  </thead>
                  <tbody>
            `;
          data.standings["0"].table.forEach(function(item) {
            standingsHTML += `
                    <tr>
                      <td>${item.position}</td>
                      <td><a href="./team.html?id=${item.team.id}"><img style="width:20px;" src="${item.team.crestUrl}"></a></td>
                      <td><a href="./team.html?id=${item.team.id}">${item.team.name}</a></td>
                      <td>${item.playedGames}</td>
                      <td>${item.won}</td>
                      <td>${item.draw}</td>
                      <td>${item.lost}</td>
                      <td>${item.goalsFor}</td>
                      <td>${item.goalsAgainst}</td>
                      <td>${item.goalDifference}</td>
                      <td>${item.points}</td>
                    </tr>
            `;
        });
        standingsHTML += `</tbody>
                </table>`;
        document.getElementById("standings").innerHTML = standingsHTML;
      })
      .catch(error);
  }