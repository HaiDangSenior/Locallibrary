import { AppDataSource } from '../config/data-source';
import Genre from '../entity/genre.entity';

export class GenreService {
    private genreRepository = AppDataSource.getRepository(Genre);

    async getIndexData() {
        return await this.genreRepository.count();
    }

    async getGenreList() {
        return this.genreRepository.find({ order: { name: 'ASC' } })
    }

    async getGenreById(id: number) {
        return this.genreRepository.findOne({
            where: { id },
            relations: ['books'],
        });
    };
}
