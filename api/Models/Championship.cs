using System;
using System.Collections.Generic;
using System.Linq;

namespace FilmsChampions.Models {
    public class Championship {

        private List<Movie> _ListMovies { get; set; }

        public Championship (List<Movie> listMovies) {
            _ListMovies = listMovies.OrderBy (Movie => Movie.Titulo).ToList ();
        }

        public List<Movie> StartChampionship () {
            List<Movie> nextStage = new List<Movie> ();
            List<Movie> winners = new List<Movie> ();

            do {
                var matchWinner = Match.MakeMatch (_ListMovies.FirstOrDefault (), _ListMovies.LastOrDefault ());
                _ListMovies.Remove (_ListMovies.FirstOrDefault ());
                _ListMovies.Remove (_ListMovies.LastOrDefault ());
                nextStage.Add (matchWinner);
            } while (_ListMovies.Count > 0);
            do {
                _ListMovies.AddRange (nextStage);
                nextStage.Clear ();

                do {
                    var matchWinner = Match.MakeMatch (_ListMovies[0], _ListMovies[1]);
                    _ListMovies.RemoveAt (0);
                    _ListMovies.RemoveAt (0);
                    nextStage.Add (matchWinner);
                } while (_ListMovies.Count > 0);

                _ListMovies.AddRange (nextStage);
                nextStage.Clear ();

                if (_ListMovies.Count <= 2) {
                    var winner = Match.MakeMatch (_ListMovies.FirstOrDefault (), _ListMovies.LastOrDefault ());
                    winners.Add (winner);

                     if (winner.Equals (_ListMovies.FirstOrDefault ())) {
                        winners.Add (_ListMovies.LastOrDefault ());
                    } else if (winner.Equals (_ListMovies.LastOrDefault ())) {
                        winners.Add (_ListMovies.FirstOrDefault ());
                    }
                }
            }
            while (winners.Count <= 0);
            return winners;
        }
    }
}