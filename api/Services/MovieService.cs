using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using FilmsChampions.Models;
using FilmsChampions.Services;
using Newtonsoft.Json;

namespace FilmsChampions.Services 
{
    public class MovieService : IMovieService {
        static readonly HttpClient client = new HttpClient ();
        public MovieService () {
            client.BaseAddress = new Uri ("http://copafilmes.azurewebsites.net/");
            client.DefaultRequestHeaders.Accept.Add (new MediaTypeWithQualityHeaderValue ("application/json"));

        }
        public async Task<List<Movie>> GetMoviesAsync () {
            HttpResponseMessage response = await client.GetAsync ("api/filmes");

            if (response.IsSuccessStatusCode) {
                var data = await response.Content.ReadAsStringAsync ();

                return JsonConvert.DeserializeObject<List<Movie>> (data);
            } else {
                throw new Exception ((int) response.StatusCode + "-" + response.StatusCode.ToString ());
            }
        }

    }
}