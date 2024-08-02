fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'fx'
description 'fxWelcomeUI'
version '1.0'

ui_page 'html/index.html'

client_scripts {
    'client.lua',
    'config.lua'
}

server_scripts {
    'server.lua',
    'config.lua'
}

shared_scripts {
    'config.lua'
}

files {
    'html/*.*'
}

escrow_ignore {
    'client.lua',
    'config.lua',
    'html/*.*'
}