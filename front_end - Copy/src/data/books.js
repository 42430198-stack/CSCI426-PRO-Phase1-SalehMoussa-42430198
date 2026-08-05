const books = [
    {
        "id": 1,
        "name": "The Midnight Library",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
        "genres": [
            "Fantasy",
            "Fiction"
        ],
        "publisher": "Viking",
        "publish_date": "2020-08-13",
        "goodreads_rating": 4.25,
        "back_cover_story": "Between life and death there is a library, and within that library, the shelves go on forever..."
    },
    {
        "id": 2,
        "name": "Project Hail Mary",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1764703833i/54493401.jpg",
        "genres": [
            "Sci-Fi",
            "Thriller"
        ],
        "publisher": "Ballantine Books",
        "publish_date": "2021-05-04",
        "goodreads_rating": 4.52,
        "back_cover_story": "Ryland Grace is the sole survivor on a desperate, last-chance mission..."
    },
    {
        "id": 3,
        "name": "The Alchemist",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
        "genres": [
            "Fiction",
            "Adventure",
            "Fantasy"
        ],
        "publisher": "HarperCollins",
        "publish_date": "1988-04-15",
        "goodreads_rating": 3.9,
        "back_cover_story": "This story follows the journey of an Andalusian shepherd boy named Santiago..."
    },
    {
        "id": 4,
        "name": "Atomic Habits",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
        "genres": [
            "Self-Help",
            "Non-Fiction"
        ],
        "publisher": "Penguin Random House",
        "publish_date": "2018-10-16",
        "goodreads_rating": 4.36,
        "back_cover_story": "No matter your goals, Atomic Habits offers a proven framework for improving every day..."
    },
    {
        "id": 5,
        "name": "Educated",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1774287363i/35133922.jpg",
        "genres": [
            "Memoir",
            "Biography",
            "Non-Fiction"
        ],
        "publisher": "Random House",
        "publish_date": "2018-02-20",
        "goodreads_rating": 4.47,
        "back_cover_story": "Tara Westover was seventeen the first time she set foot in a classroom..."
    },
    {
        "id": 6,
        "name": "The Silent Patient",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg",
        "genres": [
            "Thriller",
            "Mystery",
            "Fiction"
        ],
        "publisher": "Celadon Books",
        "publish_date": "2019-02-05",
        "goodreads_rating": 4.14,
        "back_cover_story": "Alicia Berenson's life is seemingly perfect. Then, one evening, she shoots her husband five times..."
    },
    {
        "id": 7,
        "name": "Sapiens",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1703329310i/23692271.jpg",
        "genres": [
            "History",
            "Non-Fiction",
            "Science"
        ],
        "publisher": "Harper",
        "publish_date": "2011-09-04",
        "goodreads_rating": 4.39,
        "back_cover_story": "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution..."
    },
    {
        "id": 8,
        "name": "Becoming",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
        "genres": [
            "Memoir",
            "Autobiography"
        ],
        "publisher": "Crown",
        "publish_date": "2018-11-13",
        "goodreads_rating": 4.51,
        "back_cover_story": "An intimate, powerful, and inspiring memoir by the former First Lady of the United States..."
    },
    {
        "id": 9,
        "name": "Where the Crawdads Sing",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg",
        "genres": [
            "Fiction",
            "Mystery",
            "Romance"
        ],
        "publisher": "G.P. Putnam's Sons",
        "publish_date": "2018-08-14",
        "goodreads_rating": 4.43,
        "back_cover_story": "For years, rumors of the \"Marsh Girl\" have haunted Barkley Cove, a quiet town on the North Carolina coast..."
    },
    {
        "id": 10,
        "name": "Dune",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
        "genres": [
            "Sci-Fi",
            "Fantasy",
            "Classic"
        ],
        "publisher": "Chilton Books",
        "publish_date": "1965-08-01",
        "goodreads_rating": 4.25,
        "back_cover_story": "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides..."
    },
    {
        "id": 11,
        "name": "The Seven Husbands of Evelyn Hugo",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1664458703i/32620332.jpg",
        "genres": [
            "Historical Fiction",
            "Romance"
        ],
        "publisher": "Atria Books",
        "publish_date": "2017-06-13",
        "goodreads_rating": 4.45,
        "back_cover_story": "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous scandalous life..."
    },
    {
        "id": 12,
        "name": "Thinking, Fast and Slow",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg",
        "genres": [
            "Psychology",
            "Non-Fiction"
        ],
        "publisher": "Farrar, Straus and Giroux",
        "publish_date": "2011-10-25",
        "goodreads_rating": 4.18,
        "back_cover_story": "In the international bestseller, Thinking, Fast and Slow, Daniel Kahneman takes us on a groundbreaking tour of the mind..."
    },
    {
        "id": 13,
        "name": "The Great Gatsby",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg",
        "genres": [
            "Classic",
            "Fiction"
        ],
        "publisher": "Charles Scribner's Sons",
        "publish_date": "1925-04-10",
        "goodreads_rating": 3.93,
        "back_cover_story": "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan..."
    },
    {
        "id": 14,
        "name": "To Kill a Mockingbird",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg",
        "genres": [
            "Classic",
            "Fiction",
            "Historical Fiction"
        ],
        "publisher": "J. B. Lippincott & Co.",
        "publish_date": "1960-07-11",
        "goodreads_rating": 4.27,
        "back_cover_story": "Voted one of the best novels of the 20th century, this story explores racial injustice in the American South..."
    },
    {
        "id": 15,
        "name": "The Song of Achilles",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848.jpg",
        "genres": [
            "Historical Fiction",
            "Mythology",
            "Romance"
        ],
        "publisher": "Ecco Press",
        "publish_date": "2011-09-20",
        "goodreads_rating": 4.38,
        "back_cover_story": "Greece in the age of heroes. Patroclus, an awkward young prince, has been exiled to the court of King Peleus and his perfect son Achilles..."
    },
    {
        "id": 16,
        "name": "A Promised Land",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1600357110i/55361205.jpg",
        "genres": [
            "Memoir",
            "Politics"
        ],
        "publisher": "Crown",
        "publish_date": "2020-11-17",
        "goodreads_rating": 4.35,
        "back_cover_story": "In the stirring, highly anticipated first volume of his presidential memoirs, Barack Obama tells the story of his improbable odyssey..."
    },
    {
        "id": 17,
        "name": "Kitchen Confidential",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1433739086i/33313.jpg",
        "genres": [
            "Memoir",
            "Culinary"
        ],
        "publisher": "Ecco",
        "publish_date": "2000-01-01",
        "goodreads_rating": 4.27,
        "back_cover_story": "A deliciously funny, brutally honest, and exclusive look into the belly of a New York restaurant..."
    },
    {
        "id": 18,
        "name": "The Catcher in the Rye",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
        "genres": [
            "Classic",
            "Fiction"
        ],
        "publisher": "Little, Brown and Company",
        "publish_date": "1951-07-16",
        "goodreads_rating": 3.79,
        "back_cover_story": "Holden Caulfield is a sixteen-year-old dropout who has just been kicked out of his elite prep school..."
    },
    {
        "id": 19,
        "name": "Brave New World",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1575509280i/5129.jpg",
        "genres": [
            "Sci-Fi",
            "Dystopian",
            "Classic"
        ],
        "publisher": "Chatto & Windus",
        "publish_date": "1932-01-01",
        "goodreads_rating": 3.98,
        "back_cover_story": "A dystopian novel exploring a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy..."
    },
    {
        "id": 20,
        "name": "Norwegian Wood",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1713542603i/11297.jpg",
        "genres": [
            "Fiction",
            "Romance"
        ],
        "publisher": "Kodansha",
        "publish_date": "1987-09-04",
        "goodreads_rating": 4.09,
        "back_cover_story": "Toru, a quiet and serious young college student in Tokyo, is devoted to Naoko, a beautiful and introspective woman..."
    },
    {
        "id": 21,
        "name": "Greenlights",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1604281659i/52838315.jpg",
        "genres": [
            "Memoir",
            "Self-Help"
        ],
        "publisher": "Crown",
        "publish_date": "2020-10-20",
        "goodreads_rating": 4.38,
        "back_cover_story": "An unconventional memoir filled with raucous stories, outlaw wisdom, and lessons learned the hard way about living with greater satisfaction..."
    },
    {
        "id": 22,
        "name": "Fahrenheit 451",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1486388408i/32768516.jpg",
        "genres": [
            "Dystopian",
            "Sci-Fi",
            "Classic"
        ],
        "publisher": "Ballantine Books",
        "publish_date": "1953-10-19",
        "goodreads_rating": 3.99,
        "back_cover_story": "Guy Montag is a fireman in a future where the job is to burn books, which are forbidden because they incite thinking and discontent..."
    },
    {
        "id": 23,
        "name": "Man's Search for Meaning",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1535419394i/4069.jpg",
        "genres": [
            "Psychology",
            "Non-Fiction",
            "Philosophy"
        ],
        "publisher": "Beacon Press",
        "publish_date": "1946-01-01",
        "goodreads_rating": 4.36,
        "back_cover_story": "Psychiatrist Viktor Frankl's memoir narrates his experiences in the Nazi concentration camps, and describes his psychotherapeutic method..."
    },
    {
        "id": 24,
        "name": "The Vanishing Half",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1577090827l/51791252.jpg",
        "genres": [
            "Historical Fiction",
            "Fiction"
        ],
        "publisher": "Riverhead Books",
        "publish_date": "2020-06-02",
        "goodreads_rating": 4.26,
        "back_cover_story": "The Vignes twin sisters will always be identical. But after growing up together in a small southern black community, they grow apart..."
    },
    {
        "id": 25,
        "name": "Daisy Jones & The Six",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1580255154i/40597810.jpg",
        "genres": [
            "Historical Fiction",
            "Music",
            "Fiction"
        ],
        "publisher": "Ballantine Books",
        "publish_date": "2019-03-05",
        "goodreads_rating": 4.21,
        "back_cover_story": "A gripping novel about the whirlwind rise of an iconic 1970s rock group and their beautiful lead singer..."
    },
    {
        "id": 26,
        "name": "Kindred",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1339423248i/60931.jpg",
        "genres": [
            "Sci-Fi",
            "Historical Fiction",
            "Fantasy"
        ],
        "publisher": "Doubleday",
        "publish_date": "1979-06-01",
        "goodreads_rating": 4.23,
        "back_cover_story": "Dana, a young black woman, is suddenly and repeatedly transported from her 1970s California home to a pre-Civil War Maryland plantation..."
    },
    {
        "id": 27,
        "name": "Animal Farm",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1325861570i/170448.jpg",
        "genres": [
            "Classic",
            "Satire",
            "Fiction"
        ],
        "publisher": "Secker and Warburg",
        "publish_date": "1945-08-17",
        "goodreads_rating": 3.96,
        "back_cover_story": "A clever satire on dictatorship and the Russian Revolution where animals take over their farm, only to find the new leadership corrupt..."
    },
    {
        "id": 28,
        "name": "The Body Keeps the Score",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1594559067i/18693771.jpg",
        "genres": [
            "Psychology",
            "Non-Fiction",
            "Science"
        ],
        "publisher": "Penguin Books",
        "publish_date": "2014-09-08",
        "goodreads_rating": 4.54,
        "back_cover_story": "A pioneering researcher and one of the world's leading experts on trauma offers a new paradigm for healing..."
    },
    {
        "id": 29,
        "name": "The House in the Cerulean Sea",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1569514209i/45047384.jpg",
        "genres": [
            "Fantasy",
            "Romance",
            "Fiction"
        ],
        "publisher": "Tor Books",
        "publish_date": "2020-03-17",
        "goodreads_rating": 4.42,
        "back_cover_story": "A magical and heartwarming story in which a case worker is sent to investigate a secluded orphanage..."
    },
    {
        "id": 30,
        "name": "Little Women",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1562690475i/1934.jpg",
        "genres": [
            "Classic",
            "Fiction",
            "Historical Fiction"
        ],
        "publisher": "Roberts Brothers",
        "publish_date": "1868-09-30",
        "goodreads_rating": 4.19,
        "back_cover_story": "Follows the lives of the four March sisters—Meg, Jo, Beth, and Amy—as they grow up in America during the Civil War..."
    },
    {
        "id": 31,
        "name": "The Psychology of Money",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg",
        "genres": [
            "Finance",
            "Non-Fiction",
            "Self-Help"
        ],
        "publisher": "Harriman House",
        "publish_date": "2020-09-08",
        "goodreads_rating": 4.45,
        "back_cover_story": "Timeless lessons on wealth, greed, and happiness. Doing well with money has a little to do with how smart you are..."
    },
    {
        "id": 32,
        "name": "Project Hail Mary",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1764703833i/54493401.jpg",
        "genres": [
            "Sci-Fi",
            "Thriller"
        ],
        "publisher": "Ballantine Books",
        "publish_date": "2021-05-04",
        "goodreads_rating": 4.52,
        "back_cover_story": "Ryland Grace is the sole survivor on a desperate, last-chance mission..."
    },
    {
        "id": 33,
        "name": "The Guest List",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1591461181i/52656911.jpg",
        "genres": [
            "Thriller",
            "Mystery",
            "Fiction"
        ],
        "publisher": "William Morrow",
        "publish_date": "2020-06-02",
        "goodreads_rating": 3.86,
        "back_cover_story": "A remote island off the coast of Ireland, where guests gather to celebrate two people joining their lives together. The celebration ends in murder..."
    },
    {
        "id": 34,
        "name": "The Bell Jar",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1668645154i/56616095.jpg",
        "genres": [
            "Classic",
            "Fiction",
            "Feminism"
        ],
        "publisher": "Heinemann",
        "publish_date": "1963-01-14",
        "goodreads_rating": 4.1,
        "back_cover_story": "The story of Esther Greenwood, a young woman who gets an internship at a magazine in New York, and subsequently begins to struggle with mental illness..."
    },
    {
        "id": 35,
        "name": "Crime and Punishment",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg",
        "genres": [
            "Classic",
            "Psychology",
            "Fiction"
        ],
        "publisher": "The Russian Messenger",
        "publish_date": "1866-01-01",
        "goodreads_rating": 4.22,
        "back_cover_story": "A psychological thriller that follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in St. Petersburg..."
    },
    {
        "id": 36,
        "name": "The Four Agreements",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1630664059i/6596.jpg",
        "genres": [
            "Self-Help",
            "Philosophy",
            "Non-Fiction"
        ],
        "publisher": "Amber-Allen Publishing",
        "publish_date": "1997-01-01",
        "goodreads_rating": 4.14,
        "back_cover_story": "In The Four Agreements, Don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering..."
    },
    {
        "id": 37,
        "name": "A Game of Thrones",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1562726234i/13496.jpg",
        "genres": [
            "Fantasy",
            "Fiction"
        ],
        "publisher": "Bantam Spectra",
        "publish_date": "1996-08-01",
        "goodreads_rating": 4.44,
        "back_cover_story": "Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has just begun..."
    },
    {
        "id": 38,
        "name": "Harry Potter and the Sorcerer's Stone",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg",
        "genres": [
            "Fantasy",
            "Fiction",
            "Young Adult"
        ],
        "publisher": "Scholastic",
        "publish_date": "1997-06-26",
        "goodreads_rating": 4.47,
        "back_cover_story": "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive..."
    },
    {
        "id": 39,
        "name": "The Lord of the Rings",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
        "genres": [
            "Fantasy",
            "Classic",
            "Adventure"
        ],
        "publisher": "George Allen & Unwin",
        "publish_date": "1954-07-29",
        "goodreads_rating": 4.52,
        "back_cover_story": "The dark, primordial menace of Sauron unfolds in this epic tale of the War of the Ring..."
    },
    {
        "id": 40,
        "name": "The Hobbit",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1374681632i/659469.jpg",
        "genres": [
            "Fantasy",
            "Adventure",
            "Classic"
        ],
        "publisher": "George Allen & Unwin",
        "publish_date": "1937-09-21",
        "goodreads_rating": 4.28,
        "back_cover_story": "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, until the wizard Gandalf and a company of dwarves sweep him into an epic quest..."
    },
    {
        "id": 41,
        "name": "The Diary of a Young Girl",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1696989545i/127441416.jpg",
        "genres": [
            "Non-Fiction",
            "Memoir",
            "Historical"
        ],
        "publisher": "Contact Publishing",
        "publish_date": "1947-06-25",
        "goodreads_rating": 4.18,
        "back_cover_story": "Discovered in the attic in which she spent the last years of her life, Anne Frank’s remarkable diary has since become a world classic..."
    },
    {
        "id": 42,
        "name": "The Chronicles of Narnia",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032875i/11127.jpg",
        "genres": [
            "Fantasy",
            "Young Adult",
            "Fiction"
        ],
        "publisher": "Geoffrey Bles",
        "publish_date": "1950-10-16",
        "goodreads_rating": 4.26,
        "back_cover_story": "Narnia... the land between the lamp-post and the castle... the place where the adventure begins..."
    },
    {
        "id": 43,
        "name": "Fahrenheit 451",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1486388408i/32768516.jpg",
        "genres": [
            "Dystopian",
            "Sci-Fi",
            "Classic"
        ],
        "publisher": "Ballantine Books",
        "publish_date": "1953-10-19",
        "goodreads_rating": 3.99,
        "back_cover_story": "Guy Montag is a fireman in a future where the job is to burn books, which are forbidden because they incite thinking and discontent..."
    },
    {
        "id": 44,
        "name": "The Giver",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1342493368i/3636.jpg",
        "genres": [
            "Dystopian",
            "Young Adult",
            "Sci-Fi"
        ],
        "publisher": "Houghton Mifflin",
        "publish_date": "1993-04-16",
        "goodreads_rating": 4.13,
        "back_cover_story": "The Giver, the 1994 Newbery Medal winner, has become one of the most influential books of our time..."
    },
    {
        "id": 45,
        "name": "The Art of War",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1630683326i/10534.jpg",
        "genres": [
            "Philosophy",
            "Non-Fiction",
            "History"
        ],
        "publisher": "Various",
        "publish_date": "0-00-00",
        "goodreads_rating": 3.97,
        "back_cover_story": "Written by Sun Tzu in the 6th century BC, this classic work on military strategy and tactics remains influential in business and politics..."
    },
    {
        "id": 46,
        "name": "Siddhartha",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1629378189i/52036.jpg",
        "genres": [
            "Philosophy",
            "Classic",
            "Fiction"
        ],
        "publisher": "S. Fischer Verlag",
        "publish_date": "1922-01-01",
        "goodreads_rating": 3.99,
        "back_cover_story": "Siddhartha is a novel by Hermann Hesse that deals with the spiritual journey of self-discovery of a name[sic] Siddhartha during the time of the Buddha..."
    },
    {
        "id": 47,
        "name": "The Road",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1600241424i/6288.jpg",
        "genres": [
            "Dystopian",
            "Fiction"
        ],
        "publisher": "Alfred A. Knopf",
        "publish_date": "2006-09-26",
        "goodreads_rating": 3.97,
        "back_cover_story": "A searing, post-apocalyptic narrative about a father and son walking alone through burned America..."
    },
    {
        "id": 48,
        "name": "Les MisÃƒÆ’Ã‚Â©rables",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1509394980i/36377471.jpg",
        "genres": [
            "Classic",
            "Historical Fiction",
            "Fiction"
        ],
        "publisher": "A. Lacroix, Verboeckhoven & Cie.",
        "publish_date": "1862-01-01",
        "goodreads_rating": 4.16,
        "back_cover_story": "This epic story of love, injustice, and redemption centers on the ex-convict Jean Valjean..."
    },
    {
        "id": 49,
        "name": "Anna Karenina",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1546091617i/15823480.jpg",
        "genres": [
            "Classic",
            "Romance",
            "Fiction"
        ],
        "publisher": "The Russian Messenger",
        "publish_date": "1878-01-01",
        "goodreads_rating": 4.05,
        "back_cover_story": "A complex novel in eight parts, with more than a dozen major characters, it is spread over a wide canvas of Russian life..."
    },
    {
        "id": 50,
        "name": "The Great Gatsby",
        "image": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg",
        "genres": [
            "Classic",
            "Fiction"
        ],
        "publisher": "Charles Scribner's Sons",
        "publish_date": "1925-04-10",
        "goodreads_rating": 3.93,
        "back_cover_story": "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan..."
    }
]
export default books;
