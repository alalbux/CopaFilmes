using System;
using System.Collections.Generic;
using System.Linq;
using FilmsChampions.Models;
using Microsoft.AspNetCore.Mvc;

namespace FilmsChampions.Controllers {
    [ApiController]
    [Route ("[controller]")]
    public class ChampionshipController : ControllerBase 
    {
        [HttpPost]
        public List<Movie> Post ([FromBody] List<Movie> listMovies) {
            Championship championship = new Championship (listMovies);
            return championship.StartChampionship ();
        }
    }
}