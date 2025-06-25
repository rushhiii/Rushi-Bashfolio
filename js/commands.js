const input = document.getElementById('input');
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        const output = document.createElement('div');
        output.classList.add('output');
        if (command === 'help') {
            output.innerHTML = 'Available commands: about, github, clear';
        } else if (command === 'about') {
            output.innerHTML = 'Hi, I\'m Rushi — a CS student @ TMU. Passionate about automation, widgets, and code.';
        } else if (command === 'github') {
            output.innerHTML = '<a href="https://github.com/rushhiii" target="_blank">GitHub Profile</a>';
        } else if (command === 'clear') {
            document.getElementById('terminal').innerHTML = '<span class="prompt">@browser~$</span> <input type="text" id="input" autofocus />';
            location.reload(); return;
        } else {
            output.innerHTML = 'Command not found: ' + command;
        }
        document.getElementById('terminal').appendChild(output);
        input.value = '';
    }
});