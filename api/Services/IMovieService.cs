using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsChampions.Models;

namespace FilmsChampions.Services 
{
    public interface IMovieService {
        Task<List<Movie>> GetMoviesAsync ();
    }
}