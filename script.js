const output = document.getElementById('output');
const input = document.getElementById('commandInput');

input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) { // Enter key pressed
        event.preventDefault();
        processCommand(this.value);
        this.value = ''; // Clear input after processing command
    }
});

function processCommand(command) {
    switch(command.toLowerCase()) {
        case 'help':
            output.innerHTML += '\nAvailable commands:\n- help\n- date\n- time\n- about\n- team\n- BMC ';
            break;
        case 'date':
            output.innerHTML += `\nCurrent date: ${new Date().toDateString()}\n`;
            break;
        case 'time':
            output.innerHTML += `\nCurrent time: ${new Date().toLocaleTimeString()}\n`;
            break;
        case 'about':
            output.innerHTML += '\nabout who? blue?';
            break;
        case 'about blue':
            output.innerHTML += '\nblue is a 15 Year old Developer which  is Founder of BMC Development';
            break;
        case 'team':
            output.innerHTML += '\nmy Team Mates are ByteSyntaxx, Maxim and Sidetylol';
            break;
        case 'bmc':
            output.innerHTML += '\nhttps://dsc.gg/BlueMoonMC';
            break;
        default:
            output.innerHTML += `\nUnknown command: ${command}\n`;
    }

    output.scrollTop = output.scrollHeight;
}
