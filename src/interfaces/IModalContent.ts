import ICard from "./ICard";

export default interface IModalContent extends ICard {
    coverUrl: string;
    logoUrl: string;
    reviewsCount: number;
    ratingGoodReview: number;
    ratingGoodReviewVoteCount: number;
    ratingKinopoiskVoteCount: number;
    ratingImdbVoteCount: number;
    ratingFilmCritics: number;
    ratingFilmCriticsVoteCount: number;
    ratingAwait: number;
    ratingAwaitCount: number;
    ratingRfCritics: number;
    ratingRfCriticsVoteCount: number;
    webUrl: string;
    filmLength: number;
    slogan: string;
    description: string;
    shortDescription: string;
    editorAnnotation: string;
    isTicketsAvailable: boolean;
    productionStatus: boolean;
    ratingMpaa: number;
    ratingAgeLimits: string;
    startYear: number;
    endYear: number;
    serial: boolean;
    shortFilm: boolean;
    completed: boolean;
    hasImax: boolean;
    has3D: boolean;
    lastSync: string;
}