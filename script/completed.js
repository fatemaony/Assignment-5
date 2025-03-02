let taskNumber = 6;
let taskIncrease = 0;

function updateTask(buttonId, increaseElementId, decreaseElementId,textId) {
  document.getElementById(buttonId)

    .addEventListener('click', function (event) {
      event.preventDefault();
      alert('Board Updated successfully!!');
      taskNumber--;
      taskIncrease++;
      document.getElementById(increaseElementId).innerText = taskIncrease;
      document.getElementById(decreaseElementId).innerText = taskNumber;
      document.getElementById(textId).innerText
      document.getElementById(buttonId).disabled = true;

      if(taskNumber===0){
        alert('Congratulations! You have completed all the current tasks.')
      }
      
      const historyContainer = document.getElementById('container');
      const newMessage = document.createElement('p');
      newMessage.innerHTML =`<p class="bg-[#F4F7FF] h-16 overflow-hidden rounded-xl text-xs p-3">You Have Completed task ${textId} at ${new Date().toLocaleTimeString()}</p>`
      historyContainer.appendChild(newMessage);

      document.getElementById('clear-history').addEventListener('click', function() {
        newMessage.innerHTML = '';
      });

  
      
    });
}

// Call the function for all 6 buttons
updateTask('completed-btn-1', 'taskIncrease', 'taskDecrease','Fix Mobile Button Issue');
updateTask('completed-btn-2', 'taskIncrease', 'taskDecrease','Add Dark Mode');
updateTask('completed-btn-3', 'taskIncrease', 'taskDecrease','Optimize  Home page');
updateTask('completed-btn-4', 'taskIncrease', 'taskDecrease', 'Add new emoji 🤲');
updateTask('completed-btn-5', 'taskIncrease', 'taskDecrease','Integrate OpenAI API');
updateTask('completed-btn-6', 'taskIncrease', 'taskDecrease','Improve Job searching');