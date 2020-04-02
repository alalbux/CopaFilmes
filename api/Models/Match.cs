using System.Collections.Generic;
using System.Linq;

namespace FilmsChampions.Models {
    public static class Match {
        public static Movie MakeMatch (Movie Movie1, Movie Movie2) {
            Movie winner;
            if (Movie1.Nota > Movie2.Nota)
                winner = Movie1;
            else if (Movie2.Nota > Movie1.Nota)
                winner = Movie2;
            else {
                var Movies = new List<Movie> ();
                Movies.Add (Movie1);
                Movies.Add (Movie2);
                winner = Movies.OrderBy (Movie => Movie.Titulo).FirstOrDefault ();
            }
            return winner;
        }
    }
}