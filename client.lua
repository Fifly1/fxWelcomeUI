RegisterNetEvent('fx_welcomeUI:client:showUI', function()
    SendNUIMessage({
        action = "showUI",
        config = Config
    })
    SetNuiFocus(true, true)
end)

RegisterNUICallback('close', function(data)
    SetNuiFocus(false, false)
end)

RegisterCommand('sw', function()
    TriggerEvent('fx_welcomeUI:client:showUI')
end)
