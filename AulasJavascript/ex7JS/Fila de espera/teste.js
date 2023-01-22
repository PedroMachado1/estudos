let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "° - " + fila[i] + "\n";
  }

  opcao = prompt(
    "Hospital Kofy\n" +
      pacientes +
      "\n" +
      "\n1. Adicionar paciente" +
      "\n2. Consultar paciente" +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt(
        "Cadastrar novo paciente\n" + "Qual o nome do paciente?"
      );
      fila.push(novoPaciente);

      break;

    case "2":
      const pacienteConsultado = fila.shift();
      if (!pacienteConsultado) {
        alert("Não há paciente na fila para ser consultado");
      } else {
        alert(pacienteConsultado + " foi consultado e retidado da fila!");
      }

      break;

    case "3":
      break;

    default:
      alert("Opção Inválida!");
  }
} while (opcao !== "3");
