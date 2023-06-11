function GenerateSteamID()
{
    return (Math.random() * (76561198999999999 - 76561198000000000) + 76561198000000000);
} 


module.exports = GenerateSteamID