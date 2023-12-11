export interface Data {
	id: string;
	city: string;
	country: string;
	description: string;
	backgroundImage: {
		full: string;
		preview: string;
	};
	active: boolean;
	distance: number;
	Key?: string;
}
export type sortType = "city" | "distance";
export type sortDirection = "asc" | "desc";
export interface Sort {
	sorttype: sortType;
	sortdirection: sortDirection;
}

export interface IFilters {
	text: string;
	unit: string;
}

const mokData = {
	list: [
		{
			id: "telaviv",
			city: "Tel Aviv",
			country: "Israel",
			description:
				"Tel Aviv is the most populous city in the Gush Dan metropolitan area of Israel. Located on the Israeli Mediterranean coastline and with a population of 467,875, it is the economic and technological center of the country. If East Jerusalem is considered part of Israel, Tel Aviv is the country's second-most-populous city, after Jerusalem; if not, Tel Aviv is the most populous city, ahead of West Jerusalem.",
			backgroundImage: {
				full: require("../../assets/backgrounds/telaviv.jpeg"),
				preview: require("../../assets/backgrounds/telavivPrev.jpeg"),
			},
			active: true,
			distance: 0.1,
		},
		{
			id: "jerusalem",
			city: "Jerusalem",
			country: "Israel",
			description:
				"Jerusalem is an ancient city in West Asia, on a plateau in the Judaean Mountains between the Mediterranean and the Dead Sea. It is one of the oldest cities in the world, and is considered holy to the three major Abrahamic religions—Judaism, Christianity, and Islam. Both Israelis and Palestinians claim Jerusalem as their capital; Israel maintains its primary governmental institutions there, and the State of Palestine ultimately foresees it as its seat of power. Neither claim, however, is widely recognized internationally.",
			backgroundImage: {
				full: require("../../assets/backgrounds/jerusalemFull.jpeg"),
				preview: require("../../assets/backgrounds/jerusalemPrev.jpeg"),
			},
			active: true,
			distance: 53.54,
		},
		{
			id: "haifa",
			city: "Haifa",
			country: "Israel",
			description:
				"The third-largest city in Israel—after Jerusalem and Tel Aviv—with a population of 282,832 in 2021. The city of Haifa forms part of the Haifa metropolitan area, the third-most populous metropolitan area in Israel. It is home to the Baháʼí Faith's Baháʼí World Centre, and is a UNESCO World Heritage Site and a destination for Baháʼí pilgrimage.",
			backgroundImage: {
				full: require("../../assets/backgrounds/haifaFull.jpeg"),
				preview: require("../../assets/backgrounds/haifaPrev.jpeg"),
			},
			active: true,
			distance: 81.91,
		},
		{
			id: "afula",
			city: "Afula",
			country: "Israel",
			description:
				"Afula is a city in the Northern District of Israel, often known as the 'Capital of the Valley' due to its strategic location in the Jezreel Valley. As of 2021, the city had a population of 59,075.",
			backgroundImage: {
				full: require("../../assets/backgrounds/afulaFull.jpeg"),
				preview: require("../../assets/backgrounds/afulaPrev.jpeg"),
			},
			active: true,
			distance: 76.17,
		},
		{
			id: "beersheba",
			city: "Beersheba",
			country: "Israel",
			description:
				"Beersheba is the largest city in the Negev desert of southern Israel. Often referred to as the 'Capital of the Negev', it is the centre of the fourth-most populous metropolitan area in Israel, the eighth-most populous Israeli city with a population of 211,251, and the second-largest city in area (after Jerusalem), with a total area of 117,500 dunams (45 mi2 / 117.5 km2).",
			backgroundImage: {
				full: require("../../assets/backgrounds/beershebaFull.jpeg"),
				preview: require("../../assets/backgrounds/beershebaPrev.jpeg"),
			},
			active: true,
			distance: 90.08,
		},
		{
			id: "eilat",
			city: "Eilat",
			country: "Israel",
			description:
				"Eilat is Israel's southernmost city, with a population of 52,753 a busy port and popular resort at the northern tip of the Red Sea, on what is known in Israel as the Gulf of Eilat and in Jordan as the Gulf of Aqaba. The city is considered a tourist destination for domestic and international tourists heading to Israel.",
			backgroundImage: {
				full: require("../../assets/backgrounds/eilatFull.jpeg"),
				preview: require("../../assets/backgrounds/eilatPrev.jpeg"),
			},
			active: true,
			distance: 284.05,
		},
		{
			id: "herzliya",
			city: "Herzliya",
			country: "Israel",
			description:
				"Herzliya is an affluent city in the central coast of Israel, at the northern part of the Tel Aviv District, known for its robust start-up and entrepreneurial culture. In 2021 it had a population of 103,318. Named after Theodor Herzl, the founder of modern Zionism, Herzliya covers an area of 21.6 square kilometres (8.3 sq mi). Its western, beachfront area is called Herzliya Pituah and is one of Israel's most affluent neighborhoods and home to numerous embassies, ambassadors' residences, companies headquarters, and houses of prominent Israeli business people.",
			backgroundImage: {
				full: require("../../assets/backgrounds/herzliyaFull.jpeg"),
				preview: require("../../assets/backgrounds/herzliyaPrev.jpeg"),
			},
			active: true,
			distance: 11.12,
		},
		{
			id: "netanya",
			city: "Netanya",
			country: "Israel",
			description:
				"Netanya is a city in the Northern Central District of Israel, and is the capital of the surrounding Sharon plain. It is 30 km (18.6 mi) north of Tel Aviv, and 56 km (34.8 mi) south of Haifa, between the Poleg stream and the Wingate Institute in the south and the Avihayil stream in the north. Netanya was named in honor of Nathan Straus, a prominent Jewish American merchant and philanthropist in the early 20th century who was the co-owner of Macy's department store.",
			backgroundImage: {
				full: require("../../assets/backgrounds/netanyaFull.jpeg"),
				preview: require("../../assets/backgrounds/netanyaPrev.jpeg"),
			},
			active: false,
			distance: 27.84,
		},
		{
			id: "rishonlezion",
			city: "Rishon LeZion",
			country: "Israel",
			description:
				"Rishon LeZion is a city in Israel, located along the central Israeli coastal plain eight kilometres (5 mi) south of Tel Aviv. It is part of the Gush Dan metropolitan area.",
			backgroundImage: {
				full: require("../../assets/backgrounds/rishonlezionFull.jpeg"),
				preview: require("../../assets/backgrounds/rishonlezionPrev.jpeg"),
			},
			active: true,
			distance: 13.12,
		},
		{
			id: "kiryatshmona",
			city: "Kiryat Shmona",
			country: "Israel",
			description:
				"Kiryat Shmona is a city in the Northern District of Israel on the western slopes of the Hula Valley near the Lebanese border. The city was named after the eight people, including Joseph Trumpeldor, who died in 1920 in the Battle of Tel Hai.",
			backgroundImage: {
				full: require("../../assets/backgrounds/kiryatshmonaFull.jpeg"),
				preview: require("../../assets/backgrounds/kiryatshmonaPrev.jpeg"),
			},
			active: true,
			distance: 147.78,
		},
		{
			id: "newyorkcity",
			city: "New York City",
			country: "United States (USA)",
			description:
				"The city comprises five boroughs, each of which is coextensive with a respective county. It is a global city and a cultural, financial, high-tech, entertainment, and media center with a significant influence on commerce, health care, scientific output, life sciences, research, technology, education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy, and it is sometimes described as the world's most important city and the capital of the world.",
			backgroundImage: {
				full: require("../../assets/backgrounds/newyorkcityFull.jpeg"),
				preview: require("../../assets/backgrounds/newyorkcityPrev.jpeg"),
			},
			active: true,
			distance: 9115.46,
		},
		{
			id: "losangeles",
			city: "Los Angeles",
			country: "United States (USA)",
			description:
				"Los Angeles is the most populous city in the U.S. state of California. With roughly 3.9 million residents within the city limits as of 2020, Los Angeles is the second-most populous city in the United States, behind only New York City; it is the commercial, financial and cultural center of the Southern California region. Los Angeles has a Mediterranean climate, an ethnically and culturally diverse population, in addition to a sprawling metropolitan area.",
			backgroundImage: {
				full: require("../../assets/backgrounds/losangelesFull.jpeg"),
				preview: require("../../assets/backgrounds/losangelesPrev.jpeg"),
			},
			active: true,
			distance: 12120.38,
		},
		{
			id: "houston",
			city: "Houston",
			country: "United States (USA)",
			description:
				"Houston is the fourth-most populous city in the United States after New York City, Los Angeles, and Chicago, and the seventh-most populous city in North America. With a population of 2,302,878 in 2022, Houston is located in Southeast Texas near Galveston Bay and the Gulf of Mexico; it is the seat and largest city of Harris County and the principal city of the Greater Houston metropolitan area, which is the fifth-most populous metropolitan statistical area in the United States and the second-most populous in Texas after Dallas–Fort Worth. Houston is the southeast anchor of the greater megaregion known as the Texas Triangle.",
			backgroundImage: {
				full: require("../../assets/backgrounds/houstonFull.jpeg"),
				preview: require("../../assets/backgrounds/houstonPrev.jpeg"),
			},
			active: true,
			distance: 11364.26,
		},
		{
			id: "berlin",
			city: "Berlin",
			country: "Germany",
			description:
				"Berlin is the capital and largest city of Germany by both area and population. Its more than 3.85 million inhabitants[9] make it the European Union's most populous city, according to population within city limits. The greater urban area of Berlin is one of the States of Germany. Berlin is surrounded by the State of Brandenburg and Brandenburg's capital Potsdam is nearby. Berlin's urban area has a population of around 4.5 million and is therefore the most populous urban area in Germany. The Berlin-Brandenburg capital region has around 6.2 million inhabitants and is Germany's second-largest metropolitan region after the Rhine-Ruhr region.",
			backgroundImage: {
				full: require("../../assets/backgrounds/berlinFull.jpeg"),
				preview: require("../../assets/backgrounds/berlinPrev.jpeg"),
			},
			active: true,
			distance: 2857.51,
		},
		{
			id: "paris",
			city: "Paris",
			country: "France",
			description:
				"Paris is the capital and most populous city of France. With an official estimated population of 2,102,650 residents as of 1 January 2023 in an area of more than 105 km2 (41 sq mi), Paris is the fifth-most populated city in the European Union and the 30th most densely populated city in the world in 2022. Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, and gastronomy. For its leading role in the arts and sciences, as well as its early and extensive system of street lighting, in the 19th century, it became known as the City of Light.",
			backgroundImage: {
				full: require("../../assets/backgrounds/parisFull.jpeg"),
				preview: require("../../assets/backgrounds/parisPrev.jpeg"),
			},
			active: true,
			distance: 3282.1,
		},
		{
			id: "madrid",
			city: "Madrid",
			country: "Spain",
			description:
				"Madrid is the capital and most populous city of Spain. The city has almost 3.4 million inhabitants and a metropolitan area population of approximately 6.7 million. It is the second-largest city in the European Union (EU), and its monocentric metropolitan area is the second-largest in the EU. The municipality covers 604.3 km2 (233.3 sq mi) geographical area. Madrid lies on the River Manzanares in the central part of the Iberian Peninsula at about 650 metres above mean sea level. Capital city of both Spain and the surrounding autonomous community of Madrid (since 1983),[12] it is also the political, economic and cultural centre of the country. The climate of Madrid features hot summers and cool winters.",
			backgroundImage: {
				full: require("../../assets/backgrounds/madridFull.jpeg"),
				preview: require("../../assets/backgrounds/madridPrev.jpeg"),
			},
			active: true,
			distance: 3548.21,
		},
		{
			id: "rome",
			city: "Rome",
			country: "Italy",
			description:
				"Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. With 2,860,009 residents in 1,285 km2 (496.1 sq mi), Rome is the country's most populated comune and the third most populous city in the European Union by population within city limits. The Metropolitan City of Rome, with a population of 4,355,725 residents, is the most populous metropolitan city in Italy. Its metropolitan area is the third-most populous within Italy. Rome is located in the central-western portion of the Italian Peninsula, within Lazio (Latium), along the shores of the Tiber. Vatican City (the smallest country in the world) is an independent country inside the city boundaries of Rome, the only existing example of a country within a city. Rome is often referred to as the City of Seven Hills due to its geographic location, and also as the 'Eternal City'. Rome is generally considered to be the cradle of Western civilization and Western Christian culture, and the centre of the Catholic Church.",
			backgroundImage: {
				full: require("../../assets/backgrounds/romeFull.jpeg"),
				preview: require("../../assets/backgrounds/romePrev.jpeg"),
			},
			active: true,
			distance: 2254.71,
		},
		{
			id: "london",
			city: "London",
			country: "England (United Kingdom)",
			description:
				"London is the capital and largest city of England and the United Kingdom, with a population of around 8.8 million. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea and has been a major settlement for nearly two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries. The City of Westminster, to the west of the City of London, has for centuries hosted the national government and parliament. Since the 19th century, the name 'London' also refers to the metropolis around this core, historically split among the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire, which since 1965 has largely comprised Greater London, which is governed by 33 local authorities and the Greater London Authority.",
			backgroundImage: {
				full: require("../../assets/backgrounds/londonFull.jpeg"),
				preview: require("../../assets/backgrounds/londonPrev.jpeg"),
			},
			active: true,
			distance: 3560.26,
		},
		{
			id: "tokyo",
			city: "Tokyo",
			country: "Japan",
			description:
				"Tokyo is the capital of Japan and the most populous city in the world with a population of over 14 million residents as of 2023. The Tokyo metropolitan area, which includes Tokyo and nearby prefectures, is the world's most-populous metropolitan area with 40.8 million residents as of 2023.",
			backgroundImage: {
				full: require("../../assets/backgrounds/tokyoFull.jpeg"),
				preview: require("../../assets/backgrounds/tokyoPrev.jpeg"),
			},
			active: true,
			distance: 9172.48,
		},
		{
			id: "beijing",
			city: "Beijing",
			country: "China",
			description:
				"Beijing is the capital of the People's Republic of China. With over 21 million residents, Beijing is the world's most populous national capital city as well as China's second largest city after Shanghai. It is located in Northern China, and is governed as a municipality under the direct administration of the State Council with 16 urban, suburban, and rural districts. Beijing is mostly surrounded by Hebei Province with the exception of neighboring Tianjin to the southeast; together, the three divisions form the Jingjinji megalopolis and the national capital region of China.",
			backgroundImage: {
				full: require("../../assets/backgrounds/beijingFull.jpeg"),
				preview: require("../../assets/backgrounds/beijingPrev.jpeg"),
			},
			active: true,
			distance: 7144.64,
		},
	],
};

const get = (filters: IFilters, sort: Sort) => {
	const list = mokData.list.filter(
		(item: Data) =>
			item.active &&
			(item.city.toLowerCase().includes(filters.text.toLowerCase()) ||
				item.country.toLowerCase().includes(filters.text.toLowerCase()))
	);

	const data = list.sort((a: any, b: any) =>
		a[sort.sorttype] > b[sort.sorttype]
			? sort.sortdirection === "asc"
				? 1
				: -1
			: sort.sortdirection === "asc"
			? -1
			: 1
	);

	return { data };
};

export default {
	get,
};
