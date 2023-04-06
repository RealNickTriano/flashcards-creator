import { Flashcard } from "./Flashcard";

export interface Deck {
    deckId: number,
    uid: number,
    name: string,
    description: string,
    cardCount: number,
    flashcardList: Flashcard[]
}