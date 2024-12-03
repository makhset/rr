
let footballer = {
    name: "Иван",
    surname: "Иванов",
    age: 25,
    goals: 10,
    teams: ["Барселона", "Манчестер Юнайтед", "Реал Мадрид"]
  };
  
 
  footballer.goals += 2;
  
 
  function displayFullName(player) {
    console.log(`Аты: ${player.name}, Тегі: ${player.surname}`);
  }
  

  function displayCurrentTeam(player) {
    const currentTeam = player.teams[player.teams.length - 1];
    console.log(`Қазіргі клубы: ${currentTeam}`);
  }
  

  displayFullName(footballer);
  displayCurrentTeam(footballer);