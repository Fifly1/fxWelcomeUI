![fxwelcomeui_thumbnail](https://github.com/user-attachments/assets/eb2cd76e-4b63-4db5-8969-fde7b8f7b732)

**|Information|**
Highly configurable modular welcome UI. It comes with 4 animations for opening and closing. You can add as much containers, images or videos as you want. Every container's height is adjustable as well as it's title, color and etc.

Open/Close Animations:
![animations](https://github.com/user-attachments/assets/9d4578d7-3330-4b1c-b276-16e56b04c4d9)


**|How to use|**
You just have to trigger this event: `TriggerEvent('fx_welcomeUI:client:showUI')`
It can be anywhere, but where most people would want it is after character creation.

Example for **qb-clothing**(qb-clothing/client/main.lua around line 1015):

```
RegisterNetEvent('qb-clothes:client:CreateFirstCharacter', function()
    QBCore.Functions.GetPlayerData(function(pData)
        local skin = "mp_m_freemode_01"
        openMenu({
            {menu = "character", label = Lang:t("menu.features"), selected = true},
            {menu = "hair", label = Lang:t("menu.hair"), selected = false},
            {menu = "clothing", label = Lang:t("menu.character"), selected = false},
            {menu = "accessoires", label = Lang:t("menu.accessoires"), selected = false}
        })

        if pData.charinfo.gender == 1 then
            skin = "mp_f_freemode_01"
        end

        ChangeToSkinNoUpdate(skin)
        SendNUIMessage({
            action = "ResetValues",
        })
        TriggerEvent('fx_welcomeUI:client:showUI')
    end)
end)
```


