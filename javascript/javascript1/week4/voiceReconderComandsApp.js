function getReply(command) {
  let names = [];
  let todo = [];

  if (command.startsWith("Hello ")) {
    function getName() {
      let name = command.split(" ").slice(-1);
      names.push(name);
      console.log("Nice to meet you " + name);
    }
    getName();
  }
  if (command === "What is my name") {
    function myName() {
      console.log("Your name is ");
    }
    myName();
  }

  if (command === "Add fishing to my todo") {
    function addFishing() {
      let task = command.split(" ")[1];
      todo.push(task);
      console.log("Fishing added to your todo");
    }
    addFishing();
  }

  if (command === "Add singing in the shower to my todo") {
    function addSinging() {
      let task = command.split(" ")[1];
      todo.push(task);
      console.log("Singing added to your todo");
    }
    addSinging();
  }

  if (command === "Remove fishing from my todo") {
    function removeFishing() {
      let task = command.split(" ")[1];
      console.log("Fishing removed from todo");
    }
    removeFishing();
  }
  if (command === "What is on my todo") {
    function showToDo() {
      console.log(todo);
    }
    showToDo();
  }
  if (command === "What day is it today") {
    function showDate() {
      const date = new Date();
      console.log("Today's date is " + date);
    }
    showDate();
  }
}

getReply("What is my todo");
getReply("Hello my name is Charles");
getReply("What is my name");
getReply("Add singing in the shower to my todo");
getReply("Add fishing to my todo");
getReply("Remove fishing from my todo");
getReply("What is on my todo");
getReply("What day is it today");
