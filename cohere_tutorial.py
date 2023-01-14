import cohere
co = cohere.Client("1MhHvkYol4gS1u05caM1itvvrKeLhEK7gc9qjKP6")

prompt = f"""Passage: Is Wordle getting tougher to solve? Players seem to be convinced that the game has gotten harder in recent weeks ever since The New York Times bought it from developer Josh Wardle in late January. The Times has come forward and shared that this likely isn't the case. That said, the NYT did mess with the back end code a bit, removing some offensive and sexual language, as well as some obscure words There is a viral thread claiming that a confirmation bias was at play. One Twitter user went so far as to claim the game has gone to "the dusty section of the dictionary" to find its latest words.

TLDR: Wordle has not gotten more difficult to solve.
--
Passage: ArtificialIvan, a seven-year-old, London-based payment and expense management software company, has raised $190 million in Series C funding led by ARG Global, with participation from D9 Capital Group and Boulder Capital. Earlier backers also joined the round, including Hilton Group, Roxanne Capital, Paved Roads Ventures, Brook Partners, and Plato Capital.

TLDR: ArtificialIvan has raised $190 million in Series C funding.
--
Passage: You can acquire Content on our Services for free or for a charge, either of which is referred to as a “Transaction.” Each Transaction is an electronic contract between you and Apple, and/or you and the entity providing the Content on our Services. However, if you are a customer of Apple Distribution International Ltd., Apple Distribution International Ltd. is the merchant of record for some Content you acquire from Apple Books, Apple Podcasts, or App Store as displayed on the product page and/or during the acquisition process for the relevant Service. In such case, you acquire the Content from Apple Distribution International Ltd., which is licensed by the Content provider (e.g., App Provider (as defined below), book publisher, etc.). When you make your first Transaction, we will ask you to choose how frequently we should ask for your password for future Transactions. On applicable Apple hardware, if you enable Touch ID for Transactions, we will ask you to authenticate all Transactions with your fingerprint, and if you enable Face ID for Transactions, we will ask you to authenticate all Transactions using facial recognition.

TLDR:"""


response = co.generate( 
    model='xlarge', 
    prompt = prompt,
    max_tokens=40, 
    temperature=0.8,
    stop_sequences=["--"])

print(response)

summary = response.generations[0].text

print(summary)
