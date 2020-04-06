using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using FilmsChampions.Models;
using FilmsChampions.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace CopaMovies.Controllers {
    [ApiController]
    [Route ("[controller]")]
    public class MoviesController : ControllerBase 
    {
        static readonly IMovieService service = new MovieService ();

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> GetAll () {
            return Ok (await Task.Run (() => service.GetMoviesAsync ()));
        }

    }
}