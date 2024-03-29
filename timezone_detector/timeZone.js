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
            "Africa/Mbabane",
        ],
    },
    {
        region: "Ethiopia",
        regionTimeZones: [
            "Africa/Addis_Ababa",
        ],
    },
    // F ----------
    {
        region: "Falkland Islands (UK)",
        regionTimeZones: [
            "Atlantic/Stanley",
        ],
    },
    {
        region: "Faroe Islands (Denmark)",
        regionTimeZones: [
            "Atlantic/Faroe",
        ],
    },
    {
        region: "Fiji",
        regionTimeZones: [
            "Pacific/Fiji",
        ],
    },
    {
        region: "Finland",
        regionTimeZones: [
            "Europe/Helsinki",
        ],
    },
    {
        region: "France",
        regionTimeZones: [
            "Europe/Paris",
        ],
    },
    {
        region: "French Guiana (France)",
        regionTimeZones: [
            "America/Cayenne",
        ],
    },
    {
        region: "French Polynesia",
        regionTimeZones: [
            "Pacific/Tahiti",
            "Pacific/Marquesas",
            "Pacific/Gambier",
        ],
    },
    {
        region: "French Polynesia",
        regionTimeZones: [
            "Pacific/Tahiti",
            "Pacific/Marquesas",
            "Pacific/Gambier",
        ],
    },
    // G ----------
    {
        region: "Gabon",
        regionTimeZones: [
            "Africa/Libreville",
        ],
    },
    {
        region: "Gambia",
        regionTimeZones: [
            "Africa/Banjul",
        ],
    },
    {
        region: "Georgia",
        regionTimeZones: [
            "Asia/Tbilisi",
        ],
    },
    {
        region: "Germany",
        regionTimeZones: [
            "Europe/Berlin",
        ],
    },
    {
        region: "Ghana",
        regionTimeZones: [
            "Africa/Accra",
        ],
    },
    {
        region: "Gibraltar (UK)",
        regionTimeZones: [
            "Europe/Gibraltar",
        ],
    },
    {
        region: "Greece",
        regionTimeZones: [
            "Europe/Athens",
        ],
    },
    {
        region: "Greenland",
        regionTimeZones: [
            "America/Nuuk",
            "America/Thule",
            "America/Scoresbysund",
            "UTC"
        ],
    },
    {
        region: "Grenada",
        regionTimeZones: [
            "America/Grenada",
        ],
    },
    {
        region: "Guadeloupe (France)",
        regionTimeZones: [
            "America/Guadeloupe",
        ],
    },
    {
        region: "Guam (USA)",
        regionTimeZones: [
            "Pacific/Guam",
        ],
    },
    {
        region: "Guatemala",
        regionTimeZones: [
            "America/Guatemala",
        ],
    },
    {
        region: "Guernsey (UK)",
        regionTimeZones: [
            "Europe/Guernsey",
        ],
    },
    {
        region: "Guinea",
        regionTimeZones: [
            "Africa/Conakry",
        ],
    },
    {
        region: "Guinea-Bissau",
        regionTimeZones: [
            "Africa/Bissau",
        ],
    },
    {
        region: "Guyana",
        regionTimeZones: [
            "America/Guyana",
        ],
    },
    // H -------
    {
        region: "Haiti",
        regionTimeZones: [
            "America/Port-au-Prince",
        ],
    },
    {
        region: "Honduras",
        regionTimeZones: [
            "America/Tegucigalpa",
        ],
    },
    {
        region: "Hong Kong (China)",
        regionTimeZones: [
            "Asia/Hong_Kong",
        ],
    },
    {
        region: "Hungary",
        regionTimeZones: [
            "Europe/Budapest",
        ],
    },
    //  I ------------
    {
        region: "Iceland",
        regionTimeZones: [
            "Iceland",
        ],
    },
    {
        region: "India",
        regionTimeZones: [
            "Asia/Calcutta",
        ],
    },
    {
        region: "Indonesia",
        regionTimeZones: [
            "Asia/Jakarta", // Sumatra Island, Java Island, West Kalimantan, Central Kalimantan
            "Asia/Jayapura",
            "Asia/Dili"
        ],
    },
    {
        region: "Iran",
        regionTimeZones: [
            "Iran", 
        ],
    },
    {
        region: "Iraq",
        regionTimeZones: [
            "Asia/Baghdad", 
        ],
    },
    {
        region: "Ireland",
        regionTimeZones: [
            "Europe/Dublin", 
        ],
    },
    {
        region: "Isle of Man (UK)",
        regionTimeZones: [
            "Europe/Isle_of_Man", 
        ],
    },
    {
        region: "Israel",
        regionTimeZones: [
            "Israel", 
        ],
    },
    {
        region: "Italy",
        regionTimeZones: [
            "Europe/Rome", 
        ],
    },
    // J --------------
    {
        region: "Jamaica",
        regionTimeZones: [
            "America/Jamaica", 
        ],
    },
    {
        region: "Japan",
        regionTimeZones: [
            "Asia/Tokyo", 
        ],
    },
    {
        region: "Jersey (UK)",
        regionTimeZones: [
            "Europe/Jersey", 
        ],
    },
    {
        region: "Jordan",
        regionTimeZones: [
            "Asia/Amman", 
        ],
    },
    {
        region: "Jordan",
        regionTimeZones: [
            "Asia/Amman", 
        ],
    },
    // K ------------
    {
        region: "Kazakhstan",
        regionTimeZones: [
            "Asia/Aqtau", 
            "Asia/Urumqi", 
        ],
    },
    {
        region: "Kenya",
        regionTimeZones: [
            "Africa/Nairobi",
        ],
    },
    {
        region: "Kerguelen Islands (France)",
        regionTimeZones: [
            "Indian/Kerguelen",
        ],
    },
    {
        region: "Kiribati",
        regionTimeZones: [
            "Etc/GMT+12", //Gilbert Island Time
            "Etc/GMT+13", //Phoenix Island Time
            "Etc/GMT+14", //Line Islands Time
        ],
    },
    {
        region: "Kosovo",
        regionTimeZones: [
            "Europe/Belgrade", 
        ],
    },
    {
        region: "Kuwait",
        regionTimeZones: [
            "Asia/Kuwait", 
        ],
    },
    {
        region: "Kyrgyzstan",
        regionTimeZones: [
            "Asia/Bishkek",
        ],
    },
    // L -------
    {
        region: "Laos",
        regionTimeZones: [
            "Asia/Vientiane",
        ],
    },
    {
        region: "Latvia",
        regionTimeZones: [
            "Europe/Riga",
        ],
    },
    {
        region: "Lebanon",
        regionTimeZones: [
            "Asia/Beirut",
        ],
    },
    {
        region: "Lesotho",
        regionTimeZones: [
            "Africa/Maseru",
        ],
    },
    {
        region: "Liberia",
        regionTimeZones: [
            "Africa/Monrovia",
        ],
    },
    {
        region: "Libya",
        regionTimeZones: [
            "Africa/Tripoli",
        ],
    },
    {
        region: "Liechtenstein",
        regionTimeZones: [
            "Europe/Vaduz",
        ],
    },
    {
        region: "Lithuania",
        regionTimeZones: [
            "Europe/Vilnius",
        ],
    },
    {
        region: "Luxembourg",
        regionTimeZones: [
            "Europe/Luxembourg",
        ],
    },
    // M-----------------
    {
        region: "Macau (China)",
        regionTimeZones: [
            "Asia/Shanghai",
        ],
    },
    {
        region: "Madagascar",
        regionTimeZones: [
            "Indian/Antananarivo",
        ],
    },
    {
        region: "Malawi",
        regionTimeZones: [
            "Africa/Blantyre",
        ],
    },
    {
        region: "Malaysia",
        regionTimeZones: [
            "Asia/Kuala_Lumpur",
        ],
    },
    {
        region: "Maldives",
        regionTimeZones: [
            "Indian/Maldives",
        ],
    },
    {
        region: "Mali",
        regionTimeZones: [
            "Africa/Bamako",
        ],
    },
    {
        region: "Malta",
        regionTimeZones: [
            "Europe/Malta",
        ],
    },
    {
        region: "Marshall Islands",
        regionTimeZones: [
            "Pacific/Majuro",
        ],
    },
    {
        region: "Martinique (France)",
        regionTimeZones: [
            "America/Martinique",
        ],
    },
    {
        region: "Mauritania",
        regionTimeZones: [
            "Africa/Nouakchott",
        ],
    },
    {
        region: "Mauritius",
        regionTimeZones: [
            "Indian/Mauritius",
        ],
    },
    {
        region: "Mayotte (France)",
        regionTimeZones: [
            "Indian/Mayotte",
        ],
    },
    {
        region: "Mexico",
        regionTimeZones: [
            "America/Hermosillo", // Mexico, state of Sonora 7:30
            "America/Mexico_City", //Mexico most of 8:30
            "America/Belize",  // 8:30
            "America/Cancun", // time in Mexico, state of Quintana Roo 9:30
        ],
    },
    {
        region: "Micronesia",
        regionTimeZones: [
            "Pacific/Pohnpei",
        ],
    },
    {
        region: "Micronesia",
        regionTimeZones: [
            "Pacific/Pohnpei", // states of Kosrae and Pohnpei
            "Pacific/Chuuk", // states of Chuuk and Yap
        ],
    },
    {
        region: "Moldova",
        regionTimeZones: [
            "Europe/Chisinau",
        ],
    },
    {
        region: "Monaco",
        regionTimeZones: [
            "Europe/Monaco",
        ],
    },
    {
        region: "Mongolia",
        regionTimeZones: [
            "Asia/Ulaanbaatar", // most of
            "Asia/Hovd",  // provinces of Khovd, Uvs, Bayan-Olgii
        ],
    },
    {
        region: "Montenegro",
        regionTimeZones: [
            "Europe/Podgorica", 
        ],
    },
    {
        region: "Montserrat (UK)",
        regionTimeZones: [
            "America/Montserrat",
        ],
    },
    {
        region: "Morocco",
        regionTimeZones: [
            "Africa/Casablanca",
        ],
    },
    {
        region: "Mozambique",
        regionTimeZones: [
            "Africa/Maputo",
        ],
    },
    {
        region: "Myanmar",
        regionTimeZones: [
            "Asia/Yangon",
        ],
    },
    //  N ---------
    {
        region: "Namibia",
        regionTimeZones: [
            "Africa/Windhoek",
        ],
    },
    {
        region: "Nauru",
        regionTimeZones: [
            "Pacific/Nauru",
        ],
    },
    {
        region: "Nepal",
        regionTimeZones: [
            "Asia/Kathmandu",
        ],
    },
    {
        region: "Netherlands",
        regionTimeZones: [
            "Europe/Amsterdam",
        ],
    },
    {
        region: "New Caledonia (France)",
        regionTimeZones: [
            "Pacific/Noumea",
        ],
    },
    {
        region: "New Zealand",
        regionTimeZones: [
            "Pacific/Auckland",
        ],
    },
    {
        region: "Nicaragua",
        regionTimeZones: [
            "America/Managua",
        ],
    },
    {
        region: "Niger",
        regionTimeZones: [
            "Africa/Niamey",
        ],
    },
    {
        region: "Nigeria",
        regionTimeZones: [
            "Africa/Douala",
        ],
    },
    {
        region: "Niue (New Zealand)",
        regionTimeZones: [
            "Pacific/Niue",
        ],
    },
    {
        region: "Norfolk Island (Australia)",
        regionTimeZones: [
            "Pacific/Norfolk",
        ],
    },
    {
        region: "Northern Mariana Islands (USA)",
        regionTimeZones: [
            "Pacific/Saipan",
        ],
    },
    {
        region: "North Korea",
        regionTimeZones: [
            "Asia/Pyongyang",
        ],
    },
    {
        region: "North Macedonia",
        regionTimeZones: [
            "Europe/Skopje",
        ],
    },
    {
        region: "Norway",
        regionTimeZones: [
            "Europe/Oslo",
        ],
    },
    //  O -------------------
    {
        region: "Oman",
        regionTimeZones: [
            "Asia/Muscat",
        ],
    },
    // P -------------------
    {
        region: "Pakistan",
        regionTimeZones: [
            "Asia/Karachi",
        ],
    },
    {
        region: "Palau",
        regionTimeZones: [
            "Pacific/Palau",
        ],
    },
    {
        region: "Palestine",
        regionTimeZones: [
            "Asia/Jerusalem",
        ],
    },
    {
        region: "Panama",
        regionTimeZones: [
            "America/Panama",,
        ],
    },
    {
        region: "Papua New Guinea",
        regionTimeZones: [
            "Pacific/Port_Moresby",
            "Pacific/Bougainville",

        ],
    },
    {
        region: "Paraguay",
        regionTimeZones: [
            "America/Asuncion",
        ],
    },
    {
        region: "Peru",
        regionTimeZones: [
            "America/Lima",
        ],
    },
    {
        region: "Philippines",
        regionTimeZones: [
            "Asia/Manila",
        ],
    },
    {
        region: "Pitcairn Islands (UK)",
        regionTimeZones: [
            "Pacific/Pitcairn",
        ],
    },
    {
        region: "Poland",
        regionTimeZones: [
            "Europe/Warsaw",
        ],
    },
    {
        region: "Portugal",
        regionTimeZones: [
            "Europe/Lisbon",
            "Atlantic/Azores",
        ],
    },
    {
        region: "Puerto Rico (USA)",
        regionTimeZones: [
            "America/Puerto_Rico",
        ],
    },
    // Q -------------
    {
        region: "Qatar",
        regionTimeZones: [
            "Asia/Qatar",
        ],
    },
    // R ---------
    {
        region: "Reunion (France)",
        regionTimeZones: [
            "Indian/Reunion",
        ],
    },
    {
        region: "Romania",
        regionTimeZones: [
            "Europe/Bucharest",
        ],
    },
    {
        region: "Russia",
        regionTimeZones: [
            "Europe/Kaliningrad",
            "Europe/Moscow",
            "Europe/Samara",
            "Asia/Yekaterinburg",
            "Asia/Omsk",
            "Asia/Krasnoyarsk",
            "Asia/Irkutsk",   //UTC+8
            "Asia/Yakutsk",  // UTC+9
            "Asia/Vladivostok", // UTC+ 10
            "Asia/Magadan",  //UTC+ 11
            "Asia/Kamchatka", //UTC+12
            // "UTC+02:00 Kaliningrad Time Zone",
        ],
    },
    {
        region: "Rwanda",
        regionTimeZones: [
            "Africa/Kigali",
        ],
    },
    // S ----------------
    {
        region: "Saba (Netherlands)",
        regionTimeZones: [
            "America/Tortola",
        ],
    },
    {
        region: "Saint Barthelemy (France)",
        regionTimeZones: [
            "America/St_Barthelemy",
        ],
    },
    {
        region: "Saint Helena (UK)",
        regionTimeZones: [
            "Atlantic/St_Helena",
        ],
    },
    {
        region: "Saint Kitts and Nevis",
        regionTimeZones: [
            "America/St_Kitts",
        ],
    },
    {
        region: "Saint Lucia",
        regionTimeZones: [
            "America/St_Lucia",
        ],
    },
    {
        region: "Saint Martin (France)",
        regionTimeZones: [
            "America/Marigot",
        ],
    },
    {
        region: "Saint Pierre and Miquelon (France)",
        regionTimeZones: [
            "America/Miquelon",
        ],
    },
    {
        region: "Saint Vincent and the Grenadines",
        regionTimeZones: [
            "America/St_Vincent",
        ],
    },
    {
        region: "Samoa",
        regionTimeZones: [
            "Pacific/Apia",
        ],
    },
    {
        region: "San Marino",
        regionTimeZones: [
            "Europe/San_Marino",
        ],
    },
    {
        region: "Sao Tome and Principe",
        regionTimeZones: [
            "Africa/Sao_Tome",
        ],
    },
    {
        region: "Saudi Arabia",
        regionTimeZones: [
            "Asia/Riyadh",
        ],
    },
    {
        region: "Senegal",
        regionTimeZones: [
            "Africa/Dakar",
        ],
    },
    {
        region: "Serbia",
        regionTimeZones: [
            "Europe/Belgrade",
        ],
    },
    {
        region: "Seychelles",
        regionTimeZones: [
            "Indian/Mahe",
        ],
    },
    {
        region: "Sierra Leone",
        regionTimeZones: [
            "Africa/Freetown",
        ],
    },
    {
        region: "Singapore",
        regionTimeZones: [
            "Asia/Singapore",
        ],
    },
    {
        region: "Sint Eustatius (Netherlands)",
        regionTimeZones: [
            "America/Tortola",
        ],
    },
    {
        region: "Sint Maarten (Netherlands)",
        regionTimeZones: [
            "America/Tortola",
        ],
    },
    {
        region: "Slovakia",
        regionTimeZones: [
            "Europe/Bratislava",
        ],
    },
    {
        region: "Slovenia",
        regionTimeZones: [
            "Europe/Ljubljana",
        ],
    },
    {
        region: "Slovenia",
        regionTimeZones: [
            "Europe/Ljubljana",
        ],
    },
    {
        region: "Solomon Islands",
        regionTimeZones: [
            "Pacific/Bougainville",
        ],
    },
    {
        region: "Somalia",
        regionTimeZones: [
            "Africa/Mogadishu",
        ],
    },
    {
        region: "South Africa",
        regionTimeZones: [
            "Africa/Maseru",
        ],
    },
    {
        region: "South Georgia Island (UK)",
        regionTimeZones: [
            "Atlantic/South_Georgia",
        ],
    },
    {
        region: "South Korea",
        regionTimeZones: [
            "Asia/Seoul",
        ],
    },
    {
        region: "South Sudan",
        regionTimeZones: [
            "Africa/Juba",
        ],
    },
    {
        region: "Spain",
        regionTimeZones: [
            "Europe/Madrid", // major part
            "Atlantic/Canary", // Spain, Canary Islands
        ],
    },
    {
        region: "Sri Lanka",
        regionTimeZones: [
            "Asia/Colombo",
        ],
    },
    {
        region: "Sudan",
        regionTimeZones: [
            "Africa/Khartoum",
        ],
    },
    {
        region: "Suriname",
        regionTimeZones: [
            "America/Paramaribo",
        ],
    },
    {
        region: "Svalbard and Jan Mayen (Norway)",
        regionTimeZones: [
            "Arctic/Longyearbyen",
        ],
    },
    {
        region: "Sweden",
        regionTimeZones: [
            "Europe/Stockholm",
        ],
    },
    {
        region: "Switzerland",
        regionTimeZones: [
            "Europe/Zurich",
        ],
    },
    {
        region: "Syria",
        regionTimeZones: [
            "Asia/Damascus",
        ],
    },
    // T -------------------
    {
        region: "Taiwan",
        regionTimeZones: [
            "Asia/Taipei",
        ],
    },
    {
        region: "Tajikistan",
        regionTimeZones: [
            "Africa/Dar_es_Salaam",
        ],
    },
    {
        region: "Thailand",
        regionTimeZones: [
            "Asia/Bangkok",
        ],
    },
    {
        region: "Timor-Leste",
        regionTimeZones: [
            "Asia/Dili",
        ],
    },
    {
        region: "Togo",
        regionTimeZones: [
            "Africa/Lome",
        ],
    },
    {
        region: "Tokelau (New Zealand)",
        regionTimeZones: [
            "Pacific/Fakaofo",
        ],
    },
    {
        region: "Trinidad and Tobago",
        regionTimeZones: [
            "America/Port_of_Spain",
        ],
    },
    {
        region: "Tristan da Cunha (UK)",
        regionTimeZones: [
            "Atlantic/St_Helena",
        ],
    },
    {
        region: "Tunisia",
        regionTimeZones: [
            "Africa/Tunis",
        ],
    },
    {
        region: "Turkey",
        regionTimeZones: [
            "Asia/Istanbul",
        ],
    },
    {
        region: "Turkmenistan",
        regionTimeZones: [
            "Asia/Ashgabat",
        ],
    },
    {
        region: "Turks and Caicos Islands (UK)",
        regionTimeZones: [
            "America/Grand_Turk",
        ],
    },
    {
        region: "Tuvalu",
        regionTimeZones: [
            "Pacific/Funafuti",
        ],
    },
    // U --------------
    {
        region: "Uganda",
        regionTimeZones: [
            "Africa/Kampala",
        ],
    },
    {
        region: "Ukraine",
        regionTimeZones: [
            "Europe/Kyiv",
        ],
    },
    {
        region: "United Arab Emirates(UAE)",
        regionTimeZones: [
            "Asia/Dubai",
        ],
    },
    {
        region: "United Kingdom (UK)",
        regionTimeZones: [
            "Europe/London",
        ],
    },
    {
        region: "United States of America (USA)",
        regionTimeZones: [
            "US/Samoa",  //             3:46 --
            "US/Hawaii",   //           4:46 --
            // "US/Aleutian",  //          5:46 
            "US/Alaska",  //            6:46 --
            "US/Pacific",  //           7:46 --
            // "US/Arizona",  //           7:46
            "US/Mountain", //           8:46 --
            "US/Central",  //           9:46 --
            // "US/Indiana-Starke",  //    9:46
            // "US/East-Indiana", //       10:46
            "US/Eastern",  //           10:46 --
            // "US/Michigan",  //          10:46
            // "America/New_York" //       11:46
            "America/Puerto_Rico",   // UTC-4
            "Pacific/Guam",         // UTC+10
        ],
    },
    {
        region: "Uruguay",
        regionTimeZones: [
            "America/Montevideo",
        ],
    },
    {
        region: "US Virgin Islands (USA)",
        regionTimeZones: [
            "America/Tortola",
        ],
    },
    {
        region: "Uzbekistan",
        regionTimeZones: [
            "Asia/Tashkent",
        ],
    },
    //  V ----------------
    {
        region: "Vanuatu",
        regionTimeZones: [
            "Pacific/Noumea",
        ],
    },
    {
        region: "Vatican City (Holy See)",
        regionTimeZones: [
            "Europe/Vatican",
        ],
    },
    {
        region: "Venezuela",
        regionTimeZones: [
            "America/Caracas",
        ],
    },
    {
        region: "Vietnam",
        regionTimeZones: [
            "Asia/Ho_Chi_Minh",
        ],
    },
    // W ----------------
    // Y ----------------
    {
        region: "Yemen",
        regionTimeZones: [
            "Asia/Aden",
        ],
    },
    // Z ----------------
    {
        region: "Zambia",
        regionTimeZones: [
            "Africa/Lusaka",
        ],
    },
    {
        region: "Zimbabwe",
        regionTimeZones: [
            "Africa/Harare",
        ],
    },

];

module.exports = timeZones;
