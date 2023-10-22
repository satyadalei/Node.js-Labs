// you can consider region as country also
const timeZones = [
    // A
    {
        region: "Afghanistan",
        regionTimeZones: ["Asia/Kabul"], // UTC+04:30 Asia/Kabul
    },
    {
        region: "Aland Islands (Finland)",
        regionTimeZones: ["Europe/Mariehamn"],
    },
    {
        region: "Albania",
        regionTimeZones: ["Europe/Tirane"],
    },
    {
        region: "Algeria",
        regionTimeZones: ["Africa/Algiers"],
    },
    {
        region: "American Samoa (USA)",
        regionTimeZones: ["US/Samoa"], //or Pacific/Pago_Pago
    },
    {
        region: "Andorra",
        regionTimeZones: ["Europe/Andorra"],
    },
    {
        region: "Angola",
        regionTimeZones: ["Africa/Luanda"],
    },
    // ---------------- NOT KNOWN ----------
    {
        region: "Anguilla (UK)",
        regionTimeZones: [""], //Anguilla (UK)
    },
    {
        region: "Antigua and Barbuda",
        regionTimeZones: ["America/Antigua"],
    },
    {
        region: "Argentina",
        regionTimeZones: ["America/Argentina/Buenos_Aires"],
    },
    {
        region: "Armenia",
        regionTimeZones: ["Asia/Yerevan"],
    },
    {
        region: "Aruba (Netherlands)",
        regionTimeZones: ["America/Aruba"],
    },
    {
        region: "Ascension Island (UK)",
        regionTimeZones: ["Atlantic/St_Helena"],
    },
    {
        region: "Australia",
        regionTimeZones: [
            "Australia/Perth", //Australia/Western Australia (WA)
            "Australia/Adelaide", //Australia/South Australia (SA)
            "Australia/Darwin", //Australia/Northern Territory (NT)
            "Australia/Tasmania", //Australia/New South Wales (NSW), Tasmania (TAS), Victoria (VIC), Australian Capital Territory (ACT) with Canberra capital city
            "Australia/Brisbane", //Australia/Queensland (QLD)
            "Australia/Lord_Howe", //Australia/Lord Howe Island (New South Wales)
            "Antarctica/Macquarie", //Australia/Macquarie Island (Tasmania)
        ],
    },
    {
        region: "Austria",
        regionTimeZones: ["Europe/Vienna"],
    },
    {
        region: "Azerbaijan",
        regionTimeZones: ["Asia/Baku"],
    },
    // B
    {
        region: "Bahamas",
        regionTimeZones: ["America/Nassau"],
    },
    {
        region: "Bahrain",
        regionTimeZones: ["Asia/Bahrain"],
    },
    {
        region: "Bangladesh",
        regionTimeZones: ["Asia/Dhaka"],
    },
    {
        region: "Barbados",
        regionTimeZones: ["America/Barbados"],
    },
    {
        region: "Belarus",
        regionTimeZones: ["Europe/Minsk"],
    },
    {
        region: "Belgium",
        regionTimeZones: ["Europe/Brussels"],
    },
    {
        region: "Belize",
        regionTimeZones: ["America/Belize"],
    },
    {
        region: "Benin",
        regionTimeZones: ["Africa/Porto-Novo"],
    },
    {
        region: "Bermuda (UK)",
        regionTimeZones: ["Atlantic/Bermuda"],
    },
    {
        region: "Bhutan",
        regionTimeZones: ["Asia/Kathmandu"],
    },
    {
        region: "Bolivia",
        regionTimeZones: ["America/La_Paz"],
    },
    {
        region: "Bonaire (Netherlands)",
        regionTimeZones: ["America/Kralendijk"],
    },
    {
        region: "Bosnia and Herzegovina",
        regionTimeZones: ["Europe/Sarajevo"],
    },
    {
        region: "Botswana",
        regionTimeZones: ["Africa/Gaborone"],
    },
    {
        region: "Brazil",
        regionTimeZones: [
            "Brazil/Acre",
            "Brazil/DeNoronha",
            "Brazil/East",
            "Brazil/West",
        ],
    },
    {
        region: "British Indian Ocean Territory (UK)",
        regionTimeZones: ["Indian/Chagos"],
    },
    {
        region: "British Virgin Islands (UK)",
        regionTimeZones: ["America/Tortola"],
    },
    {
        region: "Brunei",
        regionTimeZones: ["Asia/Brunei"],
    },
    {
        region: "Bulgaria",
        regionTimeZones: ["Europe/Sofia"],
    },
    {
        region: "Burkina Faso",
        regionTimeZones: ["Africa/Ouagadougou"],
    },
    {
        region: "Burundi",
        regionTimeZones: ["Africa/Bujumbura"],
    },
    // C
    {
        region: "Cabo Verde",
        regionTimeZones: ["Atlantic/Cape_Verde"],
    },
    {
        region: "Cambodia",
        regionTimeZones: ["Asia/Phnom_Penh"],
    },
    {
        region: "Cameroon",
        regionTimeZones: ["Africa/Douala"],
    },
    {
        region: "Canada",
        regionTimeZones: [
            "Canada/Atlantic", //Atlantic Time Zone
            "Canada/Central", //Central Time Zone
            "Canada/Eastern", //Eastern Time Zone
            "Canada/Mountain", // Mountain Time Zone
            "Canada/Newfoundland", // Newfoundland Time Zone
            "Canada/Pacific", //Pacific Time Zone
            // "Canada/Saskatchewan",
            "Canada/Yukon", // covers entire Yukon (YT).
        ],
    },
    {
        region: "Caribbean Netherlands (Netherlands)",
        regionTimeZones: ["America/Cayman"],
    },
    {
        region: "Caribbean Netherlands (Netherlands)",
        regionTimeZones: ["Africa/Bangui"],
    },
    {
        region: "Chad",
        regionTimeZones: ["Africa/Ndjamena"],
    },
    {
        region: "Chatham Islands (New Zealand)",
        regionTimeZones: ["Pacific/Chatham"],
    },
    {
        region: "Chile",
        regionTimeZones: ["Chile/Continental", "Chile/EasterIsland"],
    },
    {
        region: "China",
        regionTimeZones: ["Asia/Shanghai"],
    },
    {
        region: "Christmas Island (Australia)",
        regionTimeZones: ["Indian/Christmas"],
    },
    {
        region: "Cocos (Keeling) Islands (Australia)",
        regionTimeZones: ["Indian/Cocos"],
    },
    {
        region: "Colombia",
        regionTimeZones: ["America/Bogota"],
    },
    {
        region: "Comoros",
        regionTimeZones: ["Indian/Comoro"],
    },
    {
        region: "Congo",
        regionTimeZones: [
            "Africa/Brazzaville",
        ],
    },
    {
        region: "Cook Islands (New Zealand)",
        regionTimeZones: [
            "Pacific/Rarotonga",
        ],
    },
    {
        region: "Costa Rica",
        regionTimeZones: [
            "America/Costa_Rica",
        ],
    },
    {
        region: "Cote d'Ivoire",
        regionTimeZones: [
            "Africa/Abidjan",
        ],
    },
    {
        region: "Croatia",
        regionTimeZones: [
            "Europe/Zagreb",
        ],
    },
    {
        region: "Cuba",
        regionTimeZones: [
            "Cuba",
        ],
    },
    {
        region: "Curacao",
        regionTimeZones: [
            "America/Curacao",
        ],
    },
    {
        region: "Cyprus",
        regionTimeZones: [
            "Asia/Nicosia",
        ],
    },
    {
        region: "Czechia",
        regionTimeZones: [
            "Europe/Prague",
        ],
    },
    // D ---------
    {
        region: "Denmark",
        regionTimeZones: [
            "Europe/Copenhagen",
        ],
    },
    {
        region: "Djibouti",
        regionTimeZones: [
            "Africa/Djibouti",
        ],
    },
    {
        region: "Dominica",
        regionTimeZones: [
            "America/Dominica",
        ],
    },
    {
        region: "Dominican Republic",
        regionTimeZones: [
            "America/Santo_Domingo",
        ],
    },
    // E -------
    {
        region: "Ecuador",
        regionTimeZones: [
            "America/Guayaquil",
            "Pacific/Galapagos",
        ],
    },
    {
        region: "Egypt",
        regionTimeZones: [
            "Africa/Cairo",
        ],
    },
    {
        region: "El Salvador",
        regionTimeZones: [
            "America/El_Salvador",
        ],
    },
    {
        region: "Equatorial Guinea",
        regionTimeZones: [
            "Africa/Malabo",
        ],
    },
    {
        region: "Eritrea",
        regionTimeZones: [
            "Africa/Asmara",
        ],
    },
    {
        region: "Estonia",
        regionTimeZones: [
            "Europe/Tallinn",
        ],
    },
    {
        region: "Eswatini",
        regionTimeZones: [
            "Europe/Tallinn",
        ],
    },
];

module.exports = timeZones;