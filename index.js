const timezones = [
  {
    "name": "Africa/Abidjan",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Accra",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Addis_Ababa",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Africa/Algiers",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Asmara",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Africa/Asmera",
    "status": "Deprecated",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Africa/Bamako",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Bangui",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Banjul",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Bissau",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Blantyre",
    "status": "Alias",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Brazzaville",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Bujumbura",
    "status": "Alias",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Cairo",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Casablanca",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Ceuta",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Conakry",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Dakar",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Dar_es_Salaam",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Africa/Djibouti",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Africa/Douala",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/El_Aaiun",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Freetown",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Gaborone",
    "status": "Alias",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Harare",
    "status": "Alias",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Johannesburg",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Juba",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Kampala",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Africa/Khartoum",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Kigali",
    "status": "Alias",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Kinshasa",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Lagos",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Libreville",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Lome",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Luanda",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Lubumbashi",
    "status": "Alias",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Lusaka",
    "status": "Alias",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Malabo",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Maputo",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Maseru",
    "status": "Alias",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Mbabane",
    "status": "Alias",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Mogadishu",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Africa/Monrovia",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Nairobi",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Africa/Ndjamena",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Niamey",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Nouakchott",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Ouagadougou",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Porto-Novo",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Sao_Tome",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Timbuktu",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Africa/Tripoli",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Africa/Tunis",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Africa/Windhoek",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "America/Adak",
    "status": "Canonical",
    "offset": "-10:00",
    "offsetDST": "-09:00"
  },
  {
    "name": "America/Anchorage",
    "status": "Canonical",
    "offset": "-09:00",
    "offsetDST": "-08:00"
  },
  {
    "name": "America/Anguilla",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Antigua",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Araguaina",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/Buenos_Aires",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/Catamarca",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/ComodRivadavia",
    "status": "Deprecated",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/Cordoba",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/Jujuy",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/La_Rioja",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/Mendoza",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/Rio_Gallegos",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/Salta",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/San_Juan",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/San_Luis",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/Tucuman",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Argentina/Ushuaia",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Aruba",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Asuncion",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Atikokan",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Atka",
    "status": "Deprecated",
    "offset": "-10:00",
    "offsetDST": "-09:00"
  },
  {
    "name": "America/Bahia",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Bahia_Banderas",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Barbados",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Belem",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Belize",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Blanc-Sablon",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Boa_Vista",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Bogota",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Boise",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Buenos_Aires",
    "status": "Deprecated",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Cambridge_Bay",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Campo_Grande",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Cancun",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Caracas",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Catamarca",
    "status": "Deprecated",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Cayenne",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Cayman",
    "status": "Alias",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Chicago",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Chihuahua",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Coral_Harbour",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Cordoba",
    "status": "Deprecated",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Costa_Rica",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Creston",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Cuiaba",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Curacao",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Danmarkshavn",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "America/Dawson",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Dawson_Creek",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Denver",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Detroit",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Dominica",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Edmonton",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Eirunepe",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/El_Salvador",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Ensenada",
    "status": "Deprecated",
    "offset": "-08:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Fort_Nelson",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Fort_Wayne",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Fortaleza",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Glace_Bay",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Godthab",
    "status": "Deprecated",
    "offset": "-03:00",
    "offsetDST": "-02:00"
  },
  {
    "name": "America/Goose_Bay",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Grand_Turk",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Grenada",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Guadeloupe",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Guatemala",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Guayaquil",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Guyana",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Halifax",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Havana",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Hermosillo",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Indiana/Indianapolis",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Indiana/Knox",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Indiana/Marengo",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Indiana/Petersburg",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Indiana/Tell_City",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Indiana/Vevay",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Indiana/Vincennes",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Indiana/Winamac",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Indianapolis",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Inuvik",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Iqaluit",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Jamaica",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Jujuy",
    "status": "Deprecated",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Juneau",
    "status": "Canonical",
    "offset": "-09:00",
    "offsetDST": "-08:00"
  },
  {
    "name": "America/Kentucky/Louisville",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Kentucky/Monticello",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Knox_IN",
    "status": "Deprecated",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Kralendijk",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/La_Paz",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Lima",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Los_Angeles",
    "status": "Canonical",
    "offset": "-08:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Louisville",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Lower_Princes",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Maceio",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Managua",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Manaus",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Marigot",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Martinique",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Matamoros",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Mazatlan",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Mendoza",
    "status": "Deprecated",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Menominee",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Merida",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Metlakatla",
    "status": "Canonical",
    "offset": "-09:00",
    "offsetDST": "-08:00"
  },
  {
    "name": "America/Mexico_City",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Miquelon",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-02:00"
  },
  {
    "name": "America/Moncton",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Monterrey",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Montevideo",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Montreal",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Montserrat",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Nassau",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/New_York",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Nipigon",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Nome",
    "status": "Canonical",
    "offset": "-09:00",
    "offsetDST": "-08:00"
  },
  {
    "name": "America/Noronha",
    "status": "Canonical",
    "offset": "-02:00",
    "offsetDST": "-02:00"
  },
  {
    "name": "America/North_Dakota/Beulah",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/North_Dakota/Center",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/North_Dakota/New_Salem",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Nuuk",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-02:00"
  },
  {
    "name": "America/Ojinaga",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Panama",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Pangnirtung",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Paramaribo",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Phoenix",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Port-au-Prince",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Port_of_Spain",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Porto_Acre",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Porto_Velho",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Puerto_Rico",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Punta_Arenas",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Rainy_River",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Rankin_Inlet",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Recife",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Regina",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Resolute",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Rio_Branco",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Rosario",
    "status": "Deprecated",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Santa_Isabel",
    "status": "Deprecated",
    "offset": "-08:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Santarem",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Santiago",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Santo_Domingo",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Sao_Paulo",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Scoresbysund",
    "status": "Canonical",
    "offset": "-01:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "America/Shiprock",
    "status": "Deprecated",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Sitka",
    "status": "Canonical",
    "offset": "-09:00",
    "offsetDST": "-08:00"
  },
  {
    "name": "America/St_Barthelemy",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/St_Johns",
    "status": "Canonical",
    "offset": "-03:30",
    "offsetDST": "-02:30"
  },
  {
    "name": "America/St_Kitts",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/St_Lucia",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/St_Thomas",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/St_Vincent",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Swift_Current",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Tegucigalpa",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "America/Thule",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "America/Thunder_Bay",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Tijuana",
    "status": "Canonical",
    "offset": "-08:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Toronto",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Tortola",
    "status": "Alias",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Vancouver",
    "status": "Canonical",
    "offset": "-08:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Virgin",
    "status": "Deprecated",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "America/Whitehorse",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "America/Winnipeg",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "America/Yakutat",
    "status": "Canonical",
    "offset": "-09:00",
    "offsetDST": "-08:00"
  },
  {
    "name": "America/Yellowknife",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "Antarctica/Casey",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Antarctica/Davis",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Antarctica/DumontDUrville",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Antarctica/Macquarie",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Antarctica/Mawson",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Antarctica/McMurdo",
    "status": "Alias",
    "offset": "+12:00",
    "offsetDST": "+13:00"
  },
  {
    "name": "Antarctica/Palmer",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "Antarctica/Rothera",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "Antarctica/South_Pole",
    "status": "Deprecated",
    "offset": "+12:00",
    "offsetDST": "+13:00"
  },
  {
    "name": "Antarctica/Syowa",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Antarctica/Troll",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Antarctica/Vostok",
    "status": "Canonical",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Arctic/Longyearbyen",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Asia/Aden",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Almaty",
    "status": "Canonical",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Asia/Amman",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Anadyr",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Asia/Aqtau",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Aqtobe",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Ashgabat",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Ashkhabad",
    "status": "Deprecated",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Atyrau",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Baghdad",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Bahrain",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Baku",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Asia/Bangkok",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Barnaul",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Beirut",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Bishkek",
    "status": "Canonical",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Asia/Brunei",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Calcutta",
    "status": "Deprecated",
    "offset": "+05:30",
    "offsetDST": "+05:30"
  },
  {
    "name": "Asia/Chita",
    "status": "Canonical",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Asia/Choibalsan",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Chongqing",
    "status": "Deprecated",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Chungking",
    "status": "Deprecated",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Colombo",
    "status": "Canonical",
    "offset": "+05:30",
    "offsetDST": "+05:30"
  },
  {
    "name": "Asia/Dacca",
    "status": "Deprecated",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Asia/Damascus",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Dhaka",
    "status": "Canonical",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Asia/Dili",
    "status": "Canonical",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Asia/Dubai",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Asia/Dushanbe",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Famagusta",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Gaza",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Harbin",
    "status": "Deprecated",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Hebron",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Ho_Chi_Minh",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Hong_Kong",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Hovd",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Irkutsk",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Istanbul",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Jakarta",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Jayapura",
    "status": "Canonical",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Asia/Jerusalem",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Kabul",
    "status": "Canonical",
    "offset": "+04:30",
    "offsetDST": "+04:30"
  },
  {
    "name": "Asia/Kamchatka",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Asia/Karachi",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Kashgar",
    "status": "Deprecated",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Asia/Kathmandu",
    "status": "Canonical",
    "offset": "+05:45",
    "offsetDST": "+05:45"
  },
  {
    "name": "Asia/Katmandu",
    "status": "Deprecated",
    "offset": "+05:45",
    "offsetDST": "+05:45"
  },
  {
    "name": "Asia/Khandyga",
    "status": "Canonical",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Asia/Kolkata",
    "status": "Canonical",
    "offset": "+05:30",
    "offsetDST": "+05:30"
  },
  {
    "name": "Asia/Krasnoyarsk",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Kuala_Lumpur",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Kuching",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Kuwait",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Macao",
    "status": "Deprecated",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Macau",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Magadan",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Asia/Makassar",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Manila",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Muscat",
    "status": "Alias",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Asia/Nicosia",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Novokuznetsk",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Novosibirsk",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Omsk",
    "status": "Canonical",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Asia/Oral",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Phnom_Penh",
    "status": "Alias",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Pontianak",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Pyongyang",
    "status": "Canonical",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Asia/Qatar",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Qostanay",
    "status": "Canonical",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Asia/Qyzylorda",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Rangoon",
    "status": "Deprecated",
    "offset": "+06:30",
    "offsetDST": "+06:30"
  },
  {
    "name": "Asia/Riyadh",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Saigon",
    "status": "Deprecated",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Sakhalin",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Asia/Samarkand",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Seoul",
    "status": "Canonical",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Asia/Shanghai",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Singapore",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Srednekolymsk",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Asia/Taipei",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Tashkent",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Tbilisi",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Asia/Tehran",
    "status": "Canonical",
    "offset": "+03:30",
    "offsetDST": "+04:30"
  },
  {
    "name": "Asia/Tel_Aviv",
    "status": "Deprecated",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Asia/Thimbu",
    "status": "Deprecated",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Asia/Thimphu",
    "status": "Canonical",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Asia/Tokyo",
    "status": "Canonical",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Asia/Tomsk",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Ujung_Pandang",
    "status": "Deprecated",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Ulaanbaatar",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Ulan_Bator",
    "status": "Deprecated",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Asia/Urumqi",
    "status": "Canonical",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Asia/Ust-Nera",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Asia/Vientiane",
    "status": "Alias",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Asia/Vladivostok",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Asia/Yakutsk",
    "status": "Canonical",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Asia/Yangon",
    "status": "Canonical",
    "offset": "+06:30",
    "offsetDST": "+06:30"
  },
  {
    "name": "Asia/Yekaterinburg",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Asia/Yerevan",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Atlantic/Azores",
    "status": "Canonical",
    "offset": "-01:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Atlantic/Bermuda",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "Atlantic/Canary",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Atlantic/Cape_Verde",
    "status": "Canonical",
    "offset": "-01:00",
    "offsetDST": "-01:00"
  },
  {
    "name": "Atlantic/Faeroe",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Atlantic/Faroe",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Atlantic/Jan_Mayen",
    "status": "Deprecated",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Atlantic/Madeira",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Atlantic/Reykjavik",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Atlantic/South_Georgia",
    "status": "Canonical",
    "offset": "-02:00",
    "offsetDST": "-02:00"
  },
  {
    "name": "Atlantic/St_Helena",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Atlantic/Stanley",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "Australia/ACT",
    "status": "Deprecated",
    "offset": "+10:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Australia/Adelaide",
    "status": "Canonical",
    "offset": "+09:30",
    "offsetDST": "+10:30"
  },
  {
    "name": "Australia/Brisbane",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Australia/Broken_Hill",
    "status": "Canonical",
    "offset": "+09:30",
    "offsetDST": "+10:30"
  },
  {
    "name": "Australia/Canberra",
    "status": "Deprecated",
    "offset": "+10:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Australia/Currie",
    "status": "Deprecated",
    "offset": "+10:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Australia/Darwin",
    "status": "Canonical",
    "offset": "+09:30",
    "offsetDST": "+09:30"
  },
  {
    "name": "Australia/Eucla",
    "status": "Canonical",
    "offset": "+08:45",
    "offsetDST": "+08:45"
  },
  {
    "name": "Australia/Hobart",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Australia/LHI",
    "status": "Deprecated",
    "offset": "+10:30",
    "offsetDST": "+11:00"
  },
  {
    "name": "Australia/Lindeman",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Australia/Lord_Howe",
    "status": "Canonical",
    "offset": "+10:30",
    "offsetDST": "+11:00"
  },
  {
    "name": "Australia/Melbourne",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Australia/North",
    "status": "Deprecated",
    "offset": "+09:30",
    "offsetDST": "+09:30"
  },
  {
    "name": "Australia/NSW",
    "status": "Deprecated",
    "offset": "+10:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Australia/Perth",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Australia/Queensland",
    "status": "Deprecated",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Australia/South",
    "status": "Deprecated",
    "offset": "+09:30",
    "offsetDST": "+10:30"
  },
  {
    "name": "Australia/Sydney",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Australia/Tasmania",
    "status": "Deprecated",
    "offset": "+10:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Australia/Victoria",
    "status": "Deprecated",
    "offset": "+10:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Australia/West",
    "status": "Deprecated",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Australia/Yancowinna",
    "status": "Deprecated",
    "offset": "+09:30",
    "offsetDST": "+10:30"
  },
  {
    "name": "Brazil/Acre",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "Brazil/DeNoronha",
    "status": "Deprecated",
    "offset": "-02:00",
    "offsetDST": "-02:00"
  },
  {
    "name": "Brazil/East",
    "status": "Deprecated",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "Brazil/West",
    "status": "Deprecated",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "Canada/Atlantic",
    "status": "Deprecated",
    "offset": "-04:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "Canada/Central",
    "status": "Deprecated",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "Canada/Eastern",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "Canada/Mountain",
    "status": "Deprecated",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "Canada/Newfoundland",
    "status": "Deprecated",
    "offset": "-03:30",
    "offsetDST": "-02:30"
  },
  {
    "name": "Canada/Pacific",
    "status": "Deprecated",
    "offset": "-08:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "Canada/Saskatchewan",
    "status": "Deprecated",
    "offset": "-06:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "Canada/Yukon",
    "status": "Deprecated",
    "offset": "-07:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "CET",
    "status": "Deprecated",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Chile/Continental",
    "status": "Deprecated",
    "offset": "-04:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "Chile/EasterIsland",
    "status": "Deprecated",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "CST6CDT",
    "status": "Deprecated",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "Cuba",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "EET",
    "status": "Deprecated",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Egypt",
    "status": "Deprecated",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Eire",
    "status": "Deprecated",
    "offset": "+01:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "EST",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "EST5EDT",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "Etc/GMT",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Etc/GMT+0",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Etc/GMT+1",
    "status": "Canonical",
    "offset": "-01:00",
    "offsetDST": "-01:00"
  },
  {
    "name": "Etc/GMT+10",
    "status": "Canonical",
    "offset": "-10:00",
    "offsetDST": "-10:00"
  },
  {
    "name": "Etc/GMT+11",
    "status": "Canonical",
    "offset": "-11:00",
    "offsetDST": "-11:00"
  },
  {
    "name": "Etc/GMT+12",
    "status": "Canonical",
    "offset": "-12:00",
    "offsetDST": "-12:00"
  },
  {
    "name": "Etc/GMT+2",
    "status": "Canonical",
    "offset": "-02:00",
    "offsetDST": "-02:00"
  },
  {
    "name": "Etc/GMT+3",
    "status": "Canonical",
    "offset": "-03:00",
    "offsetDST": "-03:00"
  },
  {
    "name": "Etc/GMT+4",
    "status": "Canonical",
    "offset": "-04:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "Etc/GMT+5",
    "status": "Canonical",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "Etc/GMT+6",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "Etc/GMT+7",
    "status": "Canonical",
    "offset": "-07:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "Etc/GMT+8",
    "status": "Canonical",
    "offset": "-08:00",
    "offsetDST": "-08:00"
  },
  {
    "name": "Etc/GMT+9",
    "status": "Canonical",
    "offset": "-09:00",
    "offsetDST": "-09:00"
  },
  {
    "name": "Etc/GMT-0",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Etc/GMT-1",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Etc/GMT-10",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Etc/GMT-11",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Etc/GMT-12",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Etc/GMT-13",
    "status": "Canonical",
    "offset": "+13:00",
    "offsetDST": "+13:00"
  },
  {
    "name": "Etc/GMT-14",
    "status": "Canonical",
    "offset": "+14:00",
    "offsetDST": "+14:00"
  },
  {
    "name": "Etc/GMT-2",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Etc/GMT-3",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Etc/GMT-4",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Etc/GMT-5",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Etc/GMT-6",
    "status": "Canonical",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Etc/GMT-7",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Etc/GMT-8",
    "status": "Canonical",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Etc/GMT-9",
    "status": "Canonical",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Etc/GMT0",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Etc/Greenwich",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Etc/UCT",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Etc/Universal",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Etc/UTC",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Etc/Zulu",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Europe/Amsterdam",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Andorra",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Astrakhan",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Europe/Athens",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Belfast",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Europe/Belgrade",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Berlin",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Bratislava",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Brussels",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Bucharest",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Budapest",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Busingen",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Chisinau",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Copenhagen",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Dublin",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Europe/Gibraltar",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Guernsey",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Europe/Helsinki",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Isle_of_Man",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Europe/Istanbul",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Jersey",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Europe/Kaliningrad",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Kiev",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Kirov",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Lisbon",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Europe/Ljubljana",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/London",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Europe/Luxembourg",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Madrid",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Malta",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Mariehamn",
    "status": "Alias",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Minsk",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Monaco",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Moscow",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Nicosia",
    "status": "Alias",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Oslo",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Paris",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Podgorica",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Prague",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Riga",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Rome",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Samara",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Europe/San_Marino",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Sarajevo",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Saratov",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Europe/Simferopol",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Skopje",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Sofia",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Stockholm",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Tallinn",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Tirane",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Tiraspol",
    "status": "Deprecated",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Ulyanovsk",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Europe/Uzhgorod",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Vaduz",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Vatican",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Vienna",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Vilnius",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Volgograd",
    "status": "Canonical",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Warsaw",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Zagreb",
    "status": "Alias",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Europe/Zaporozhye",
    "status": "Canonical",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Europe/Zurich",
    "status": "Canonical",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Factory",
    "status": "Canonical",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "GB",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "GB-Eire",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "GMT",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "GMT+0",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "GMT-0",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "GMT0",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Greenwich",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Hongkong",
    "status": "Deprecated",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "HST",
    "status": "Deprecated",
    "offset": "-10:00",
    "offsetDST": "-10:00"
  },
  {
    "name": "Iceland",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Indian/Antananarivo",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Indian/Chagos",
    "status": "Canonical",
    "offset": "+06:00",
    "offsetDST": "+06:00"
  },
  {
    "name": "Indian/Christmas",
    "status": "Canonical",
    "offset": "+07:00",
    "offsetDST": "+07:00"
  },
  {
    "name": "Indian/Cocos",
    "status": "Canonical",
    "offset": "+06:30",
    "offsetDST": "+06:30"
  },
  {
    "name": "Indian/Comoro",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Indian/Kerguelen",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Indian/Mahe",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Indian/Maldives",
    "status": "Canonical",
    "offset": "+05:00",
    "offsetDST": "+05:00"
  },
  {
    "name": "Indian/Mauritius",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Indian/Mayotte",
    "status": "Alias",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Indian/Reunion",
    "status": "Canonical",
    "offset": "+04:00",
    "offsetDST": "+04:00"
  },
  {
    "name": "Iran",
    "status": "Deprecated",
    "offset": "+03:30",
    "offsetDST": "+04:30"
  },
  {
    "name": "Israel",
    "status": "Deprecated",
    "offset": "+02:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "Jamaica",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "Japan",
    "status": "Deprecated",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Kwajalein",
    "status": "Deprecated",
    "offset": "+12:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Libya",
    "status": "Deprecated",
    "offset": "+02:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "MET",
    "status": "Deprecated",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Mexico/BajaNorte",
    "status": "Deprecated",
    "offset": "-08:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "Mexico/BajaSur",
    "status": "Deprecated",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "Mexico/General",
    "status": "Deprecated",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "MST",
    "status": "Deprecated",
    "offset": "-07:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "MST7MDT",
    "status": "Deprecated",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "Navajo",
    "status": "Deprecated",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "NZ",
    "status": "Deprecated",
    "offset": "+12:00",
    "offsetDST": "+13:00"
  },
  {
    "name": "NZ-CHAT",
    "status": "Deprecated",
    "offset": "+12:45",
    "offsetDST": "+13:45"
  },
  {
    "name": "Pacific/Apia",
    "status": "Canonical",
    "offset": "+13:00",
    "offsetDST": "+14:00"
  },
  {
    "name": "Pacific/Auckland",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+13:00"
  },
  {
    "name": "Pacific/Bougainville",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Pacific/Chatham",
    "status": "Canonical",
    "offset": "+12:45",
    "offsetDST": "+13:45"
  },
  {
    "name": "Pacific/Chuuk",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Pacific/Easter",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "Pacific/Efate",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Pacific/Enderbury",
    "status": "Canonical",
    "offset": "+13:00",
    "offsetDST": "+13:00"
  },
  {
    "name": "Pacific/Fakaofo",
    "status": "Canonical",
    "offset": "+13:00",
    "offsetDST": "+13:00"
  },
  {
    "name": "Pacific/Fiji",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+13:00"
  },
  {
    "name": "Pacific/Funafuti",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Pacific/Galapagos",
    "status": "Canonical",
    "offset": "-06:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "Pacific/Gambier",
    "status": "Canonical",
    "offset": "-09:00",
    "offsetDST": "-09:00"
  },
  {
    "name": "Pacific/Guadalcanal",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Pacific/Guam",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Pacific/Honolulu",
    "status": "Canonical",
    "offset": "-10:00",
    "offsetDST": "-10:00"
  },
  {
    "name": "Pacific/Johnston",
    "status": "Deprecated",
    "offset": "-10:00",
    "offsetDST": "-10:00"
  },
  {
    "name": "Pacific/Kiritimati",
    "status": "Canonical",
    "offset": "+14:00",
    "offsetDST": "+14:00"
  },
  {
    "name": "Pacific/Kosrae",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Pacific/Kwajalein",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Pacific/Majuro",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Pacific/Marquesas",
    "status": "Canonical",
    "offset": "-09:30",
    "offsetDST": "-09:30"
  },
  {
    "name": "Pacific/Midway",
    "status": "Alias",
    "offset": "-11:00",
    "offsetDST": "-11:00"
  },
  {
    "name": "Pacific/Nauru",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Pacific/Niue",
    "status": "Canonical",
    "offset": "-11:00",
    "offsetDST": "-11:00"
  },
  {
    "name": "Pacific/Norfolk",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Pacific/Noumea",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Pacific/Pago_Pago",
    "status": "Canonical",
    "offset": "-11:00",
    "offsetDST": "-11:00"
  },
  {
    "name": "Pacific/Palau",
    "status": "Canonical",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Pacific/Pitcairn",
    "status": "Canonical",
    "offset": "-08:00",
    "offsetDST": "-08:00"
  },
  {
    "name": "Pacific/Pohnpei",
    "status": "Canonical",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Pacific/Ponape",
    "status": "Deprecated",
    "offset": "+11:00",
    "offsetDST": "+11:00"
  },
  {
    "name": "Pacific/Port_Moresby",
    "status": "Canonical",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Pacific/Rarotonga",
    "status": "Canonical",
    "offset": "-10:00",
    "offsetDST": "-10:00"
  },
  {
    "name": "Pacific/Saipan",
    "status": "Alias",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Pacific/Samoa",
    "status": "Deprecated",
    "offset": "-11:00",
    "offsetDST": "-11:00"
  },
  {
    "name": "Pacific/Tahiti",
    "status": "Canonical",
    "offset": "-10:00",
    "offsetDST": "-10:00"
  },
  {
    "name": "Pacific/Tarawa",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Pacific/Tongatapu",
    "status": "Canonical",
    "offset": "+13:00",
    "offsetDST": "+13:00"
  },
  {
    "name": "Pacific/Truk",
    "status": "Deprecated",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Pacific/Wake",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Pacific/Wallis",
    "status": "Canonical",
    "offset": "+12:00",
    "offsetDST": "+12:00"
  },
  {
    "name": "Pacific/Yap",
    "status": "Deprecated",
    "offset": "+10:00",
    "offsetDST": "+10:00"
  },
  {
    "name": "Poland",
    "status": "Deprecated",
    "offset": "+01:00",
    "offsetDST": "+02:00"
  },
  {
    "name": "Portugal",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "PRC",
    "status": "Deprecated",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "PST8PDT",
    "status": "Deprecated",
    "offset": "-08:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "ROC",
    "status": "Deprecated",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "ROK",
    "status": "Deprecated",
    "offset": "+09:00",
    "offsetDST": "+09:00"
  },
  {
    "name": "Singapore",
    "status": "Deprecated",
    "offset": "+08:00",
    "offsetDST": "+08:00"
  },
  {
    "name": "Turkey",
    "status": "Deprecated",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "UCT",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "Universal",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "US/Alaska",
    "status": "Deprecated",
    "offset": "-09:00",
    "offsetDST": "-08:00"
  },
  {
    "name": "US/Aleutian",
    "status": "Deprecated",
    "offset": "-10:00",
    "offsetDST": "-09:00"
  },
  {
    "name": "US/Arizona",
    "status": "Deprecated",
    "offset": "-07:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "US/Central",
    "status": "Deprecated",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "US/East-Indiana",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "US/Eastern",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "US/Hawaii",
    "status": "Deprecated",
    "offset": "-10:00",
    "offsetDST": "-10:00"
  },
  {
    "name": "US/Indiana-Starke",
    "status": "Deprecated",
    "offset": "-06:00",
    "offsetDST": "-05:00"
  },
  {
    "name": "US/Michigan",
    "status": "Deprecated",
    "offset": "-05:00",
    "offsetDST": "-04:00"
  },
  {
    "name": "US/Mountain",
    "status": "Deprecated",
    "offset": "-07:00",
    "offsetDST": "-06:00"
  },
  {
    "name": "US/Pacific",
    "status": "Deprecated",
    "offset": "-08:00",
    "offsetDST": "-07:00"
  },
  {
    "name": "US/Samoa",
    "status": "Deprecated",
    "offset": "-11:00",
    "offsetDST": "-11:00"
  },
  {
    "name": "UTC",
    "status": "Alias",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  },
  {
    "name": "W-SU",
    "status": "Deprecated",
    "offset": "+03:00",
    "offsetDST": "+03:00"
  },
  {
    "name": "WET",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+01:00"
  },
  {
    "name": "Zulu",
    "status": "Deprecated",
    "offset": "+00:00",
    "offsetDST": "+00:00"
  }
];

  /**
   * TimeZone is a helper class mainly used to get a timezone offset.
   * It is stored in the timezoneMap so each value in the timezoneMap
   * is an instance of TimeZone
   */
class TimeZone {
  constructor(tz) {
    this.tz = tz;
  }

  /**
   * get a date object in the specific timezone
   * @param {String} dateStr - without offset in the form YYYY-MM-DD HH:MM:SS
   * @returns {Date}
   */
  toDate(dateStr) {
    return new Date(`${dateStr} GMT${this.offset}`);
  }

  get name() {
    return this.tz.name;
  }

  get status() {
    return this.tz.status;
  }
  get offset() {
    // eslint-disable-next-line no-underscore-dangle
    if (this._isDstObserved()) return this.tz.offsetDST;
    return this.tz.offset;
  }
  // eslint-disable-next-line no-underscore-dangle
  _stdTimezoneOffset() {
    const now = new Date();
    const jan = new Date(now.getFullYear(), 0, 1);
    const jul = new Date(now.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  }

  // eslint-disable-next-line no-underscore-dangle
  _isDstObserved() {
    const now = new Date();
    const conv = new Date(`${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}T${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}${this.tz.offset}`);
    // eslint-disable-next-line no-underscore-dangle
    return conv.getTimezoneOffset() < this._stdTimezoneOffset();
  }
}
const timezoneMap = new Map();
timezones.forEach(tz => timezoneMap.set(tz.name, new TimeZone(tz)));
module.exports = timezoneMap;