const funfacts: { heading: string; funFacts: string[] }[]=[
    {
        "heading": "Did You Know?",
        "funFacts": [
            "The cycle of eclipses repeats every 18.6 years, known as the saros.",
            "Lunar eclipses are visible over an entire hemisphere.",
            "Lunar eclipses can occur up to 3 times a year.",
            "A solar eclipse always occurs two weeks before or after a lunar eclipse.",
            "Lunar eclipses can only occur during a full moon.",
            "Solar eclipses can only occur during a new moon.",
            "Eclipses often occur in threes, alternating between lunar, solar, and lunar.",
            "Solar eclipses can occur at least 2 and no more than 5 times a year.",
            "Solar eclipses are visible in a narrow path, a maximum of 269 km wide.",
            "The eclipse shadow moves at 2,000 mph at the Earth's poles and 1,000 mph at the Earth's equator.",
            "The longest total solar eclipse in the 21st century occurred on July 22, 2009, with a duration of 6 minutes and 39 seconds.",
            "Ancient cultures often saw eclipses as omens or signs from the gods.",
            "The word 'eclipse' comes from the Greek word 'ekleipsis,' which means 'abandonment' or 'the act of failing to appear.'",
            "The Earth is the only known planet where solar eclipses can occur.",
            "During a total solar eclipse, the sky becomes dark, stars become visible, and temperatures can drop significantly.",
            "A total solar eclipse is a rare event for any specific location on Earth.",
            "The longest lunar eclipse of the 21st century occurred on July 27, 2018, lasting for 1 hour and 43 minutes.",
            "In ancient China, people believed that a dragon was swallowing the Sun during a solar eclipse, leading to the practice of banging drums to scare the dragon away.",
            "The Moon's orbit around Earth is tilted, which is why eclipses don't occur every month.",
            "The 'Ring of Fire' eclipse occurs when the Moon covers the center of the Sun, leaving a ring-like appearance around the edges.",
            "The study of eclipses has contributed to our understanding of the Solar System's dynamics and the Moon's orbit.",
            "Eclipses have inspired artists, poets, and writers throughout history.",
            "During a total solar eclipse, the Sun's corona (outer atmosphere) becomes visible as a glowing halo around the Moon.",
            "Solar eclipses have been recorded as far back as ancient Babylon in 750 BC.",
            "Eclipses can be predicted with high precision due to our understanding of celestial mechanics.",
            "The first successful photograph of a solar eclipse was taken in 1851 by Julius Berkowski.",
            "During a total lunar eclipse, the Moon can appear red or coppery due to Earth's atmosphere scattering sunlight and allowing red wavelengths to reach the Moon's surface.",
            "The ancient Greeks used a device called the 'antikythera mechanism' to predict eclipses and other astronomical events.",
            "Solar eclipses have been associated with mythical stories in different cultures, such as the ancient Hindu tale of the demon Rahu swallowing the Sun.",
            "The Sun is about 400 times larger in diameter than the Moon, but it is also about 400 times farther from Earth, making them appear nearly the same size in the sky.",
            "The ancient Egyptians believed that a sow goddess named Apep swallowed the Sun during a solar eclipse.",
            "A total solar eclipse provides a unique opportunity to study the Sun's outer atmosphere and its magnetic fields.",
            "Eclipses played a significant role in early navigation and calendar systems for various cultures.",
            "The Sun's diameter is approximately 109 times larger than that of Earth.",
            "The Moon's orbit is elliptical, which means its distance from Earth varies during its orbit.",
            "Eclipses were used by astronomers to test Albert Einstein's theory of general relativity during the 1919 solar eclipse.",
            "Some animals exhibit unusual behaviors during eclipses, such as birds returning to their nests and crickets chirping.",
            "The ancient Inca civilization believed that a jaguar was devouring the Moon during a lunar eclipse.",
            "Eclipse glasses, specially designed to protect your eyes during a solar eclipse, are essential for safely viewing the event.",
            "Eclipses have been depicted in art and literature throughout history, symbolizing various themes and emotions.",
            "A total solar eclipse is sometimes referred to as 'totality.'",
            "Eclipses have been a source of inspiration for musicians and composers, with pieces like Claude Debussy's 'Clair de Lune' inspired by lunar beauty.",
            "Ancient Mesopotamians recorded solar eclipses on cuneiform tablets over 3,000 years ago.",
            "A lunar eclipse occurs when the Earth passes between the Sun and the Moon, casting a shadow on the lunar surface.",
            "The study of ancient eclipse records has helped refine our understanding of historical events and chronology.",
            "During a total solar eclipse, the temperature can drop by as much as 20 degrees Fahrenheit (11 degrees Celsius) in a matter of minutes.",
            "The Moon's gravity creates tides on Earth, but solar eclipses have a minimal effect on tide patterns.",
            "The phases of a total solar eclipse include first contact, second contact, totality, third contact, and fourth contact.",
            "The ancient Mayans predicted eclipses with remarkable accuracy using their calendar system.",
            "Astronomers use special cameras and instruments to capture high-resolution images of solar eclipses.",
            "Eclipses are celebrated events in some cultures, with people gathering for festivals and ceremonies.",
            "The phenomenon of 'Bailey's Beads' occurs just before and after totality during a solar eclipse, creating a string of bright spots resembling a diamond ring.",
            "The solar corona, seen during a total solar eclipse, can reach temperatures of over a million degrees Celsius (over a million degrees Fahrenheit).",
            "Some cultures believed that eclipses signaled the wrath of gods or foretold significant events.",
            "The path of totality for a solar eclipse is relatively narrow compared to the partial eclipse region.",
            "Eclipse chasers travel the world to witness and photograph total solar eclipses in different locations.",
            "The Moon's average distance from Earth is about 238,855 miles (384,400 kilometers).",
            "A total lunar eclipse can be observed from anywhere on Earth where the Moon is above the horizon.",
            "The ancient Romans believed that a solar eclipse was a sign of the gods' anger and a potential disaster.",
            "Solar eclipses have played a role in scientific discoveries, such as the discovery of helium in the solar spectrum during an eclipse in 1868.",
            "Eclipse photography requires specialized equipment and techniques to capture the intricate details of the Sun's corona.",
            "The Chinese recorded solar eclipses as early as the Shang Dynasty (16th–11th centuries BC).",
            "Some cultures have rituals and superstitions associated with eclipses, including avoiding food preparation and staying indoors.",
            "The darkest part of the Moon's shadow during a total solar eclipse is known as the 'umbra.'",
            "The Moon's shadow travels at different speeds during lunar and solar eclipses due to variations in distance and size.",
            "Astronauts aboard the International Space Station (ISS) have captured stunning images of lunar and solar eclipses from space.",
            "Eclipses have been a subject of fascination for scientists, philosophers, and poets throughout history.",
            "Solar eclipses have helped verify predictions made by Johannes Kepler about the Moon's motion.",
            "Eclipses have inspired a wide range of art forms, from paintings and sculptures to literature and music.",
            "Solar eclipses have historically been used to study the Sun's corona and reveal information about its composition and behavior.",
            "Astronomers often use special filters and telescopes to observe solar eclipses safely.",
            "The study of ancient eclipse records has provided valuable insights into ancient cultures' scientific knowledge and understanding of the cosmos.",
            "Lunar eclipses have been used to estimate Earth's radius and diameter accurately.",
            "Eclipse predictions and calculations have been refined over centuries, thanks to the work of astronomers like Edmund Halley and Jean-Baptiste Delambre.",
            "Eclipses have been featured in mythology, folklore, and religious texts from around the world.",
            "During a total solar eclipse, the solar corona can extend millions of miles into space.",
            "Solar eclipses have historically been associated with significant events, such as battles and political changes.",
            "Eclipses can be predicted with high precision due to our understanding of the Moon's orbit and the Earth's rotation.",
            "Total solar eclipses have provided opportunities for scientific discoveries and experiments, including studying the bending of starlight by gravity.",
            "Astronomers use spectroscopy to analyze the Sun's spectrum during solar eclipses, revealing information about its composition and temperature.",
            "Eclipses have inspired the creation of eclipse maps, showing the path of totality for upcoming events.",
            "Solar eclipses have played a role in testing and verifying Einstein's theory of general relativity.",
            "Astronomers have observed eclipses on other planets and moons in our Solar System, providing insights into their atmospheres and geology.",
            "Eclipse expeditions involve traveling to specific locations to observe and study eclipses in optimal viewing conditions.",
            "Eclipse glasses are made with special filters that block harmful solar radiation during a solar eclipse.",
            "During a total lunar eclipse, the Moon can appear to change color, often appearing reddish due to Earth's atmosphere scattering sunlight.",
            "Eclipse photography can capture unique phenomena like the diamond ring effect, which occurs at the beginning and end of a total solar eclipse.",
            "Eclipses have inspired scientific curiosity and inquiry throughout history, leading to advancements in astronomy and physics.",
            "The study of ancient eclipse records has helped refine our understanding of historical events, calendars, and cultures.",
            "Eclipse observing parties are organized by astronomy enthusiasts and groups to share the experience with the public.",
            "Eclipse photography often requires specialized equipment, such as solar filters and telescopes, to capture stunning images.",
            "Eclipses have been depicted in art and literature across different cultures and time periods, reflecting their cultural significance.",
            "During a total solar eclipse, the Moon's shadow moves across the Earth's surface at speeds of over 1,000 miles per hour.",
            "Some animals and birds exhibit unusual behaviors during eclipses, such as becoming quieter or returning to their nests.",
            "Eclipse chasers plan their travels to coincide with upcoming eclipses in various parts of the world.",
            "The study of eclipses has contributed to our understanding of celestial mechanics and the precise measurement of time.",
            "Astronomers often use eclipse data to refine models of the Moon's orbit and its long-term behavior.",
            "The ancient Greeks believed that the Sun was temporarily obscured during a solar eclipse because the god Apollo was angry.",
            "Eclipses have been used in scientific experiments, including testing the theory of relativity and studying Earth's atmosphere.",
            "Eclipse photography has evolved with advancements in technology, enabling the capture of high-quality images of the Sun's corona.",
            "The alignment of the Earth, Moon, and Sun during eclipses has been a subject of fascination and study for millennia.",
            "Eclipses have been observed and documented by astronomers from different cultures and civilizations throughout history.",
            "During a total solar eclipse, the Moon's shadow on Earth is relatively small, typically a few hundred kilometers in diameter.",
            "The ancient Babylonians recorded solar eclipses on clay tablets as early as the 8th century BC.",
            "Eclipse enthusiasts often travel great distances to witness and photograph total solar eclipses.",
            "Astronomers use various instruments, including solar telescopes and spectrometers, to study the Sun during solar eclipses.",
            "Eclipse myths and stories have been passed down through generations, reflecting the cultural significance of these events.",
            "The precise timing of eclipses has been crucial for calendar systems, agriculture, and navigation in different cultures.",
            "Eclipses have been depicted in art, including paintings, sculptures, and illustrations, as well as in literature and poetry.",
            "During a total solar eclipse, the Sun's outer atmosphere, known as the corona, becomes visible as a wispy halo of light.",
            "The ancient Egyptians believed that the Moon was swallowed by a serpent during a lunar eclipse, symbolizing chaos and rebirth.",
            "Eclipses have been observed and documented in various ways over the centuries, from ancient drawings to modern photography and video recordings.",
            "Solar eclipses have provided opportunities to study the Sun's magnetic fields and their effects on Earth's space environment.",
            "Eclipse maps are used by astronomers, eclipse chasers, and enthusiasts to plan their observations of upcoming eclipses.",
            "Eclipses have been used to test and validate scientific theories, including predictions made by Isaac Newton about lunar motion.",
            "The anticipation of a solar eclipse creates a sense of wonder and excitement for people in its path.",
            "Astronomers study the Sun's chromosphere and prominences during solar eclipses to understand its dynamic behavior.",
            "Eclipse glasses are essential for safely viewing solar eclipses, as looking directly at the Sun can cause permanent eye damage.",
            "Eclipses serve as natural laboratories for studying the Sun's structure, composition, and magnetic fields.",
            "Eclipse photography allows astronomers to capture detailed images of the Sun's corona and other features during totality.",
            "Eclipses have been depicted in various art forms, including paintings, poetry, and music, reflecting their cultural and emotional impact."
        ]
    }
]
export default funfacts;