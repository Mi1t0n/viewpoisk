export default interface ICard {
    kinopoiskId: number;
    imdbId: string;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    countries: { country: string }[];
    genres: { genre: string }[];
    ratingKinopoisk: number;
    ratingImdb: number;
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
}